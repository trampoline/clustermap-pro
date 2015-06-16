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
var AJAX__delegate = function (url,p__27650){var map__27654 = p__27650;var map__27654__$1 = ((cljs.core.seq_QMARK_.call(null,map__27654))?cljs.core.apply.call(null,cljs.core.hash_map,map__27654):map__27654);var opts = map__27654__$1;var content = cljs.core.get.call(null,map__27654__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__27654__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__27654__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__27654,map__27654__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__27654,map__27654__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__27654,map__27654__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__27654,map__27654__$1,opts,content,method,raw))
,(function (){var or__3639__auto__ = (function (){var G__27656 = method;var G__27656__$1 = (((G__27656 == null))?null:cljs.core.name.call(null,G__27656));var G__27656__$2 = (((G__27656__$1 == null))?null:clojure.string.upper_case.call(null,G__27656__$1));return G__27656__$2;
})();if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__27650 = null;if (arguments.length > 1) {
  p__27650 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__27650);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__27657){
var url = cljs.core.first(arglist__27657);
var p__27650 = cljs.core.rest(arglist__27657);
return AJAX__delegate(url,p__27650);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__27658){var map__27660 = p__27658;var map__27660__$1 = ((cljs.core.seq_QMARK_.call(null,map__27660))?cljs.core.apply.call(null,cljs.core.hash_map,map__27660):map__27660);var opts = map__27660__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__27658 = null;if (arguments.length > 1) {
  p__27658 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__27658);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__27661){
var url = cljs.core.first(arglist__27661);
var p__27658 = cljs.core.rest(arglist__27661);
return GET__delegate(url,p__27658);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__27662){var map__27664 = p__27662;var map__27664__$1 = ((cljs.core.seq_QMARK_.call(null,map__27664))?cljs.core.apply.call(null,cljs.core.hash_map,map__27664):map__27664);var opts = map__27664__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__27662 = null;if (arguments.length > 2) {
  p__27662 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__27662);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__27665){
var url = cljs.core.first(arglist__27665);
arglist__27665 = cljs.core.next(arglist__27665);
var content = cljs.core.first(arglist__27665);
var p__27662 = cljs.core.rest(arglist__27665);
return POST__delegate(url,content,p__27662);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__27666){var map__27668 = p__27666;var map__27668__$1 = ((cljs.core.seq_QMARK_.call(null,map__27668))?cljs.core.apply.call(null,cljs.core.hash_map,map__27668):map__27668);var opts = map__27668__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__27666 = null;if (arguments.length > 2) {
  p__27666 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__27666);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__27669){
var url = cljs.core.first(arglist__27669);
arglist__27669 = cljs.core.next(arglist__27669);
var content = cljs.core.first(arglist__27669);
var p__27666 = cljs.core.rest(arglist__27669);
return PUT__delegate(url,content,p__27666);
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
return (function (state_27687){var state_val_27688 = (state_27687[(1)]);if((state_val_27688 === (2)))
{var inst_27684 = (state_27687[(2)]);var inst_27685 = console.log(inst_27684);var state_27687__$1 = state_27687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27687__$1,inst_27685);
} else
{if((state_val_27688 === (1)))
{var state_27687__$1 = state_27687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27687__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__,ch))
;return ((function (switch__9110__auto__,c__9125__auto__,ch){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27692 = [null,null,null,null,null,null,null];(statearr_27692[(0)] = state_machine__9111__auto__);
(statearr_27692[(1)] = (1));
return statearr_27692;
});
var state_machine__9111__auto____1 = (function (state_27687){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27687);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27693){if((e27693 instanceof Object))
{var ex__9114__auto__ = e27693;var statearr_27694_27696 = state_27687;(statearr_27694_27696[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27693;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27697 = state_27687;
state_27687 = G__27697;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27687){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,ch))
})();var state__9127__auto__ = (function (){var statearr_27695 = f__9126__auto__.call(null);(statearr_27695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27695;
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
log_api.cljs$lang$applyTo = (function (arglist__27698){
var f = cljs.core.first(arglist__27698);
var args = cljs.core.rest(arglist__27698);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__27701){var vec__27702 = p__27701;var k = cljs.core.nth.call(null,vec__27702,(0),null);var v = cljs.core.nth.call(null,vec__27702,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__9125__auto___27729 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto___27729,r){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto___27729,r){
return (function (state_27720){var state_val_27721 = (state_27720[(1)]);if((state_val_27721 === (2)))
{var inst_27717 = (state_27720[(2)]);var inst_27718 = cljs.core.reset_BANG_.call(null,r,inst_27717);var state_27720__$1 = state_27720;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27720__$1,inst_27718);
} else
{if((state_val_27721 === (1)))
{var state_27720__$1 = state_27720;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27720__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto___27729,r))
;return ((function (switch__9110__auto__,c__9125__auto___27729,r){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27725 = [null,null,null,null,null,null,null];(statearr_27725[(0)] = state_machine__9111__auto__);
(statearr_27725[(1)] = (1));
return statearr_27725;
});
var state_machine__9111__auto____1 = (function (state_27720){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27720);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27726){if((e27726 instanceof Object))
{var ex__9114__auto__ = e27726;var statearr_27727_27730 = state_27720;(statearr_27727_27730[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27720);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27726;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27731 = state_27720;
state_27720 = G__27731;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27720){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto___27729,r))
})();var state__9127__auto__ = (function (){var statearr_27728 = f__9126__auto__.call(null);(statearr_27728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto___27729);
return statearr_27728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto___27729,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__27732){
var id = cljs.core.first(arglist__27732);
arglist__27732 = cljs.core.next(arglist__27732);
var tolerance = cljs.core.first(arglist__27732);
var opts = cljs.core.rest(arglist__27732);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__27733){
var id = cljs.core.first(arglist__27733);
var opts = cljs.core.rest(arglist__27733);
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
boundaryline_set.cljs$lang$applyTo = (function (arglist__27734){
var ids = cljs.core.first(arglist__27734);
arglist__27734 = cljs.core.next(arglist__27734);
var tolerance = cljs.core.first(arglist__27734);
var opts = cljs.core.rest(arglist__27734);
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
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__27735){var map__27737 = p__27735;var map__27737__$1 = ((cljs.core.seq_QMARK_.call(null,map__27737))?cljs.core.apply.call(null,cljs.core.hash_map,map__27737):map__27737);var opts = map__27737__$1;var boundaryline_ids = cljs.core.get.call(null,map__27737__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__27735 = null;if (arguments.length > 3) {
  p__27735 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__27735);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__27738){
var collection_id = cljs.core.first(arglist__27738);
arglist__27738 = cljs.core.next(arglist__27738);
var tolerance = cljs.core.first(arglist__27738);
arglist__27738 = cljs.core.next(arglist__27738);
var bounds = cljs.core.first(arglist__27738);
var p__27735 = cljs.core.rest(arglist__27738);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__27735);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
clustermap.api.boundaryline_aggregation_factory = (function boundaryline_aggregation_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var boundaryline_aggregation_factory27739 = null;
var boundaryline_aggregation_factory27739__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var boundaryline_aggregation_factory27739__9 = (function() { 
var G__27746__delegate = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27743){var vec__27745 = p__27743;var type_ids = cljs.core.nth.call(null,vec__27745,(0),null);var valch__14546__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"scale-attr","scale-attr",-947507704),scale_attr,new cljs.core.Keyword(null,"post-scale-factor","post-scale-factor",-1491621481),post_scale_factor], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
};
var G__27746 = function (index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27743 = null;if (arguments.length > 8) {
  p__27743 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 8),0);} 
return G__27746__delegate.call(this,index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27743);};
G__27746.cljs$lang$maxFixedArity = 8;
G__27746.cljs$lang$applyTo = (function (arglist__27747){
var index = cljs.core.first(arglist__27747);
arglist__27747 = cljs.core.next(arglist__27747);
var type = cljs.core.first(arglist__27747);
arglist__27747 = cljs.core.next(arglist__27747);
var blcoll = cljs.core.first(arglist__27747);
arglist__27747 = cljs.core.next(arglist__27747);
var attr = cljs.core.first(arglist__27747);
arglist__27747 = cljs.core.next(arglist__27747);
var filter = cljs.core.first(arglist__27747);
arglist__27747 = cljs.core.next(arglist__27747);
var bounds = cljs.core.first(arglist__27747);
arglist__27747 = cljs.core.next(arglist__27747);
var scale_attr = cljs.core.first(arglist__27747);
arglist__27747 = cljs.core.next(arglist__27747);
var post_scale_factor = cljs.core.first(arglist__27747);
var p__27743 = cljs.core.rest(arglist__27747);
return G__27746__delegate(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,p__27743);
});
G__27746.cljs$core$IFn$_invoke$arity$variadic = G__27746__delegate;
return G__27746;
})()
;
boundaryline_aggregation_factory27739 = function(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor,var_args){
var p__27743 = var_args;
switch(arguments.length){
case 0:
return boundaryline_aggregation_factory27739__0.call(this);
default:
return boundaryline_aggregation_factory27739__9.cljs$core$IFn$_invoke$arity$variadic(index,type,blcoll,attr,filter,bounds,scale_attr,post_scale_factor, cljs.core.array_seq(arguments, 8));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
boundaryline_aggregation_factory27739.cljs$lang$maxFixedArity = 8;
boundaryline_aggregation_factory27739.cljs$lang$applyTo = boundaryline_aggregation_factory27739__9.cljs$lang$applyTo;
boundaryline_aggregation_factory27739.cljs$core$IFn$_invoke$arity$0 = boundaryline_aggregation_factory27739__0;
boundaryline_aggregation_factory27739.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation_factory27739__9.cljs$core$IFn$_invoke$arity$variadic;
return boundaryline_aggregation_factory27739;
})()
;})(in_flight_atom__14544__auto__))
});
clustermap.api.nested_aggregation_factory = (function nested_aggregation_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var nested_aggregation_factory27748 = null;
var nested_aggregation_factory27748__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var nested_aggregation_factory27748__1 = (function (p__27752){var map__27754 = p__27752;var map__27754__$1 = ((cljs.core.seq_QMARK_.call(null,map__27754))?cljs.core.apply.call(null,cljs.core.hash_map,map__27754):map__27754);var q = map__27754__$1;var stats_attr = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"stats-attr","stats-attr",-1441062548));var nested_attr = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"nested-attr","nested-attr",-992200864));var nested_filter = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"nested-filter","nested-filter",-1113098506));var nested_path = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"nested-path","nested-path",-1166122908));var sort_spec = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"sort-spec","sort-spec",104043994));var filter_spec = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var index_type = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index_name = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"index-name","index-name",-297122515));var valch__14546__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/nested-agg"),q);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
});
nested_aggregation_factory27748 = function(p__27752){
switch(arguments.length){
case 0:
return nested_aggregation_factory27748__0.call(this);
case 1:
return nested_aggregation_factory27748__1.call(this,p__27752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nested_aggregation_factory27748.cljs$core$IFn$_invoke$arity$0 = nested_aggregation_factory27748__0;
nested_aggregation_factory27748.cljs$core$IFn$_invoke$arity$1 = nested_aggregation_factory27748__1;
return nested_aggregation_factory27748;
})()
;})(in_flight_atom__14544__auto__))
});
clustermap.api.summary_stats_factory = (function summary_stats_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var summary_stats_factory27755 = null;
var summary_stats_factory27755__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var summary_stats_factory27755__6 = (function() { 
var G__27762__delegate = function (index,type,statsattrs,filter,bounds,p__27759){var vec__27761 = p__27759;var type_ids = cljs.core.nth.call(null,vec__27761,(0),null);var valch__14546__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
};
var G__27762 = function (index,type,statsattrs,filter,bounds,var_args){
var p__27759 = null;if (arguments.length > 5) {
  p__27759 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__27762__delegate.call(this,index,type,statsattrs,filter,bounds,p__27759);};
G__27762.cljs$lang$maxFixedArity = 5;
G__27762.cljs$lang$applyTo = (function (arglist__27763){
var index = cljs.core.first(arglist__27763);
arglist__27763 = cljs.core.next(arglist__27763);
var type = cljs.core.first(arglist__27763);
arglist__27763 = cljs.core.next(arglist__27763);
var statsattrs = cljs.core.first(arglist__27763);
arglist__27763 = cljs.core.next(arglist__27763);
var filter = cljs.core.first(arglist__27763);
arglist__27763 = cljs.core.next(arglist__27763);
var bounds = cljs.core.first(arglist__27763);
var p__27759 = cljs.core.rest(arglist__27763);
return G__27762__delegate(index,type,statsattrs,filter,bounds,p__27759);
});
G__27762.cljs$core$IFn$_invoke$arity$variadic = G__27762__delegate;
return G__27762;
})()
;
summary_stats_factory27755 = function(index,type,statsattrs,filter,bounds,var_args){
var p__27759 = var_args;
switch(arguments.length){
case 0:
return summary_stats_factory27755__0.call(this);
default:
return summary_stats_factory27755__6.cljs$core$IFn$_invoke$arity$variadic(index,type,statsattrs,filter,bounds, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary_stats_factory27755.cljs$lang$maxFixedArity = 5;
summary_stats_factory27755.cljs$lang$applyTo = summary_stats_factory27755__6.cljs$lang$applyTo;
summary_stats_factory27755.cljs$core$IFn$_invoke$arity$0 = summary_stats_factory27755__0;
summary_stats_factory27755.cljs$core$IFn$_invoke$arity$variadic = summary_stats_factory27755__6.cljs$core$IFn$_invoke$arity$variadic;
return summary_stats_factory27755;
})()
;})(in_flight_atom__14544__auto__))
});
clustermap.api.location_lists_factory = (function location_lists_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var location_lists_factory27764 = null;
var location_lists_factory27764__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var location_lists_factory27764__8 = (function() { 
var G__27771__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__27768){var vec__27770 = p__27768;var type_ids = cljs.core.nth.call(null,vec__27770,(0),null);var valch__14546__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
};
var G__27771 = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27768 = null;if (arguments.length > 7) {
  p__27768 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27771__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__27768);};
G__27771.cljs$lang$maxFixedArity = 7;
G__27771.cljs$lang$applyTo = (function (arglist__27772){
var index = cljs.core.first(arglist__27772);
arglist__27772 = cljs.core.next(arglist__27772);
var type = cljs.core.first(arglist__27772);
arglist__27772 = cljs.core.next(arglist__27772);
var location_attr = cljs.core.first(arglist__27772);
arglist__27772 = cljs.core.next(arglist__27772);
var attrs = cljs.core.first(arglist__27772);
arglist__27772 = cljs.core.next(arglist__27772);
var max_count = cljs.core.first(arglist__27772);
arglist__27772 = cljs.core.next(arglist__27772);
var filter = cljs.core.first(arglist__27772);
arglist__27772 = cljs.core.next(arglist__27772);
var bounds = cljs.core.first(arglist__27772);
var p__27768 = cljs.core.rest(arglist__27772);
return G__27771__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__27768);
});
G__27771.cljs$core$IFn$_invoke$arity$variadic = G__27771__delegate;
return G__27771;
})()
;
location_lists_factory27764 = function(index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__27768 = var_args;
switch(arguments.length){
case 0:
return location_lists_factory27764__0.call(this);
default:
return location_lists_factory27764__8.cljs$core$IFn$_invoke$arity$variadic(index,type,location_attr,attrs,max_count,filter,bounds, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
location_lists_factory27764.cljs$lang$maxFixedArity = 7;
location_lists_factory27764.cljs$lang$applyTo = location_lists_factory27764__8.cljs$lang$applyTo;
location_lists_factory27764.cljs$core$IFn$_invoke$arity$0 = location_lists_factory27764__0;
location_lists_factory27764.cljs$core$IFn$_invoke$arity$variadic = location_lists_factory27764__8.cljs$core$IFn$_invoke$arity$variadic;
return location_lists_factory27764;
})()
;})(in_flight_atom__14544__auto__))
});
clustermap.api.simple_table_factory = (function simple_table_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var simple_table_factory27773 = null;
var simple_table_factory27773__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var simple_table_factory27773__8 = (function() { 
var G__27780__delegate = function (index,type,filter_spec,bounds,sort_spec,from,size,p__27777){var vec__27779 = p__27777;var type_ids = cljs.core.nth.call(null,vec__27779,(0),null);var valch__14546__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
};
var G__27780 = function (index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27777 = null;if (arguments.length > 7) {
  p__27777 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__27780__delegate.call(this,index,type,filter_spec,bounds,sort_spec,from,size,p__27777);};
G__27780.cljs$lang$maxFixedArity = 7;
G__27780.cljs$lang$applyTo = (function (arglist__27781){
var index = cljs.core.first(arglist__27781);
arglist__27781 = cljs.core.next(arglist__27781);
var type = cljs.core.first(arglist__27781);
arglist__27781 = cljs.core.next(arglist__27781);
var filter_spec = cljs.core.first(arglist__27781);
arglist__27781 = cljs.core.next(arglist__27781);
var bounds = cljs.core.first(arglist__27781);
arglist__27781 = cljs.core.next(arglist__27781);
var sort_spec = cljs.core.first(arglist__27781);
arglist__27781 = cljs.core.next(arglist__27781);
var from = cljs.core.first(arglist__27781);
arglist__27781 = cljs.core.next(arglist__27781);
var size = cljs.core.first(arglist__27781);
var p__27777 = cljs.core.rest(arglist__27781);
return G__27780__delegate(index,type,filter_spec,bounds,sort_spec,from,size,p__27777);
});
G__27780.cljs$core$IFn$_invoke$arity$variadic = G__27780__delegate;
return G__27780;
})()
;
simple_table_factory27773 = function(index,type,filter_spec,bounds,sort_spec,from,size,var_args){
var p__27777 = var_args;
switch(arguments.length){
case 0:
return simple_table_factory27773__0.call(this);
default:
return simple_table_factory27773__8.cljs$core$IFn$_invoke$arity$variadic(index,type,filter_spec,bounds,sort_spec,from,size, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simple_table_factory27773.cljs$lang$maxFixedArity = 7;
simple_table_factory27773.cljs$lang$applyTo = simple_table_factory27773__8.cljs$lang$applyTo;
simple_table_factory27773.cljs$core$IFn$_invoke$arity$0 = simple_table_factory27773__0;
simple_table_factory27773.cljs$core$IFn$_invoke$arity$variadic = simple_table_factory27773__8.cljs$core$IFn$_invoke$arity$variadic;
return simple_table_factory27773;
})()
;})(in_flight_atom__14544__auto__))
});
clustermap.api.timeline_factory = (function timeline_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var timeline_factory27782 = null;
var timeline_factory27782__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var timeline_factory27782__2 = (function (query,filter_spec){var valch__14546__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/timeline"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
});
timeline_factory27782 = function(query,filter_spec){
switch(arguments.length){
case 0:
return timeline_factory27782__0.call(this);
case 2:
return timeline_factory27782__2.call(this,query,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeline_factory27782.cljs$core$IFn$_invoke$arity$0 = timeline_factory27782__0;
timeline_factory27782.cljs$core$IFn$_invoke$arity$2 = timeline_factory27782__2;
return timeline_factory27782;
})()
;})(in_flight_atom__14544__auto__))
});
clustermap.api.geo_sponsors_factory = (function geo_sponsors_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var geo_sponsors_factory27783 = null;
var geo_sponsors_factory27783__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var geo_sponsors_factory27783__1 = (function (bounds){var valch__14546__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geo-sponsors?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null)))));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
});
geo_sponsors_factory27783 = function(bounds){
switch(arguments.length){
case 0:
return geo_sponsors_factory27783__0.call(this);
case 1:
return geo_sponsors_factory27783__1.call(this,bounds);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geo_sponsors_factory27783.cljs$core$IFn$_invoke$arity$0 = geo_sponsors_factory27783__0;
geo_sponsors_factory27783.cljs$core$IFn$_invoke$arity$1 = geo_sponsors_factory27783__1;
return geo_sponsors_factory27783;
})()
;})(in_flight_atom__14544__auto__))
});
clustermap.api.rankings_factory = (function rankings_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var rankings_factory27784 = null;
var rankings_factory27784__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var rankings_factory27784__9 = (function (index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){var valch__14546__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/rankings"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"periods","periods",1695878624),new cljs.core.Keyword(null,"merge-key","merge-key",-1801915261),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"metric-variables","metric-variables",-1123283594),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"sort","sort",953465918)],[periods,merge_key,fields,index,size,filter_spec,metric_variables,index_type,sort_spec]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
});
rankings_factory27784 = function(index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size){
switch(arguments.length){
case 0:
return rankings_factory27784__0.call(this);
case 9:
return rankings_factory27784__9.call(this,index,index_type,filter_spec,sort_spec,periods,metric_variables,merge_key,fields,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rankings_factory27784.cljs$core$IFn$_invoke$arity$0 = rankings_factory27784__0;
rankings_factory27784.cljs$core$IFn$_invoke$arity$9 = rankings_factory27784__9;
return rankings_factory27784;
})()
;})(in_flight_atom__14544__auto__))
});
clustermap.api.ranges_factory = (function ranges_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var ranges_factory27785 = null;
var ranges_factory27785__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var ranges_factory27785__9 = (function (index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){var valch__14546__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/ranges"),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"row-path","row-path",-709648669),new cljs.core.Keyword(null,"metric-aggs","metric-aggs",-1793328892),new cljs.core.Keyword(null,"col-path","col-path",-1370965241),new cljs.core.Keyword(null,"index-name","index-name",-297122515),new cljs.core.Keyword(null,"col-aggs","col-aggs",168009293),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"index-type","index-type",500383962),new cljs.core.Keyword(null,"row-aggs","row-aggs",669788444),new cljs.core.Keyword(null,"metric-path","metric-path",1253121758)],[row_path,metric_aggs,col_path,index,col_aggs,filter_spec,index_type,row_aggs,metric_path]));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
});
ranges_factory27785 = function(index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs){
switch(arguments.length){
case 0:
return ranges_factory27785__0.call(this);
case 9:
return ranges_factory27785__9.call(this,index,index_type,filter_spec,row_path,row_aggs,col_path,col_aggs,metric_path,metric_aggs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ranges_factory27785.cljs$core$IFn$_invoke$arity$0 = ranges_factory27785__0;
ranges_factory27785.cljs$core$IFn$_invoke$arity$9 = ranges_factory27785__9;
return ranges_factory27785;
})()
;})(in_flight_atom__14544__auto__))
});
/**
* LOOK AT ME : this is the way to do it, with defnk... check out the server-side too
* clustermap.datasets.companies.web-geohash
*/
clustermap.api.geohash_grid_factory = (function geohash_grid_factory(){var in_flight_atom__14550__auto__ = cljs.core.atom.call(null,null);var f__14551__auto__ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema27794 = schema.core.Any;var input_schema27795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"precision","precision",-1175707478),schema.core.Any,new cljs.core.Keyword(null,"geo-point-field","geo-point-field",1434347845),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),schema.core.Any,new cljs.core.Keyword(null,"index-type","index-type",500383962),schema.core.Any,new cljs.core.Keyword(null,"index-name","index-name",-297122515),schema.core.Any], true, false),new cljs.core.Symbol(null,"args","args",-1338879193,null))], null);var input_checker27796 = schema.core.checker.call(null,input_schema27795);var output_checker27797 = schema.core.checker.call(null,output_schema27794);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema27794,input_schema27795,input_checker27796,output_checker27797,in_flight_atom__14550__auto__){
return (function fnk27793(G__27798){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___27799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27798], null);var temp__4126__auto___27800 = input_checker27796.call(null,args__6035__auto___27799);if(cljs.core.truth_(temp__4126__auto___27800))
{var error__6036__auto___27801 = temp__4126__auto___27800;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"fnk27793","fnk27793",-404279421,null),cljs.core.pr_str.call(null,error__6036__auto___27801)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27801,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___27799,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27795,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var args = G__27798;while(true){
if(cljs.core.map_QMARK_.call(null,args))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",args)));
}
var index_name = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-name","index-name",-297122515),cljs.core.PersistentVector.EMPTY);var index_type = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"index-type","index-type",500383962),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"bounds","bounds",1691609455),cljs.core.PersistentVector.EMPTY);var geo_point_field = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"geo-point-field","geo-point-field",1434347845),cljs.core.PersistentVector.EMPTY);var precision = plumbing.fnk.schema.safe_get.call(null,args,new cljs.core.Keyword(null,"precision","precision",-1175707478),cljs.core.PersistentVector.EMPTY);var valch__14552__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geohash-grid"),args);return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14550__auto__,valch__14552__auto__);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___27802 = output_checker27797.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___27802))
{var error__6036__auto___27803 = temp__4126__auto___27802;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"fnk27793","fnk27793",-404279421,null),cljs.core.pr_str.call(null,error__6036__auto___27803)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___27803,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27794,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema27794,input_schema27795,input_checker27796,output_checker27797,in_flight_atom__14550__auto__))
,schema.core.make_fn_schema.call(null,output_schema27794,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27795], null)));
})();return ((function (in_flight_atom__14550__auto__,f__14551__auto__){
return (function() {
var geohash_grid_factory27786 = null;
var geohash_grid_factory27786__0 = (function (){var emptych__14553__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14553__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14550__auto__,emptych__14553__auto__);
});
var geohash_grid_factory27786__1 = (function() { 
var G__27804__delegate = function (p__14554__auto__){return cljs.core.apply.call(null,f__14551__auto__,p__14554__auto__);
};
var G__27804 = function (var_args){
var p__14554__auto__ = null;if (arguments.length > 0) {
  p__14554__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27804__delegate.call(this,p__14554__auto__);};
G__27804.cljs$lang$maxFixedArity = 0;
G__27804.cljs$lang$applyTo = (function (arglist__27805){
var p__14554__auto__ = cljs.core.seq(arglist__27805);
return G__27804__delegate(p__14554__auto__);
});
G__27804.cljs$core$IFn$_invoke$arity$variadic = G__27804__delegate;
return G__27804;
})()
;
geohash_grid_factory27786 = function(var_args){
var p__14554__auto__ = var_args;
switch(arguments.length){
case 0:
return geohash_grid_factory27786__0.call(this);
default:
return geohash_grid_factory27786__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geohash_grid_factory27786.cljs$lang$maxFixedArity = 0;
geohash_grid_factory27786.cljs$lang$applyTo = geohash_grid_factory27786__1.cljs$lang$applyTo;
geohash_grid_factory27786.cljs$core$IFn$_invoke$arity$0 = geohash_grid_factory27786__0;
geohash_grid_factory27786.cljs$core$IFn$_invoke$arity$variadic = geohash_grid_factory27786__1.cljs$core$IFn$_invoke$arity$variadic;
return geohash_grid_factory27786;
})()
;})(in_flight_atom__14550__auto__,f__14551__auto__))
});
clustermap.api.count_matching_factory = (function count_matching_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var count_matching_factory27806 = null;
var count_matching_factory27806__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var count_matching_factory27806__3 = (function (index,index_type,filter_spec){var valch__14546__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/count-matching"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
});
count_matching_factory27806 = function(index,index_type,filter_spec){
switch(arguments.length){
case 0:
return count_matching_factory27806__0.call(this);
case 3:
return count_matching_factory27806__3.call(this,index,index_type,filter_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
count_matching_factory27806.cljs$core$IFn$_invoke$arity$0 = count_matching_factory27806__0;
count_matching_factory27806.cljs$core$IFn$_invoke$arity$3 = count_matching_factory27806__3;
return count_matching_factory27806;
})()
;})(in_flight_atom__14544__auto__))
});
clustermap.api.records_factory = (function records_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var records_factory27807 = null;
var records_factory27807__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var records_factory27807__5 = (function (index,index_type,filter_spec,sort_spec,size){var valch__14546__auto__ = clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/records"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index-name","index-name",-297122515),index,new cljs.core.Keyword(null,"index-type","index-type",500383962),index_type,new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"size","size",1098693007),size], null));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
});
records_factory27807 = function(index,index_type,filter_spec,sort_spec,size){
switch(arguments.length){
case 0:
return records_factory27807__0.call(this);
case 5:
return records_factory27807__5.call(this,index,index_type,filter_spec,sort_spec,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
records_factory27807.cljs$core$IFn$_invoke$arity$0 = records_factory27807__0;
records_factory27807.cljs$core$IFn$_invoke$arity$5 = records_factory27807__5;
return records_factory27807;
})()
;})(in_flight_atom__14544__auto__))
});
clustermap.api.tags_of_type_factory = (function tags_of_type_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var tags_of_type_factory27808 = null;
var tags_of_type_factory27808__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var tags_of_type_factory27808__1 = (function (tag_type){var valch__14546__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/tags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
});
tags_of_type_factory27808 = function(tag_type){
switch(arguments.length){
case 0:
return tags_of_type_factory27808__0.call(this);
case 1:
return tags_of_type_factory27808__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tags_of_type_factory27808.cljs$core$IFn$_invoke$arity$0 = tags_of_type_factory27808__0;
tags_of_type_factory27808.cljs$core$IFn$_invoke$arity$1 = tags_of_type_factory27808__1;
return tags_of_type_factory27808;
})()
;})(in_flight_atom__14544__auto__))
});
clustermap.api.geotags_of_type_factory = (function geotags_of_type_factory(){var in_flight_atom__14544__auto__ = cljs.core.atom.call(null,null);return ((function (in_flight_atom__14544__auto__){
return (function() {
var geotags_of_type_factory27809 = null;
var geotags_of_type_factory27809__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,emptych__14545__auto__);
});
var geotags_of_type_factory27809__1 = (function (tag_type){var valch__14546__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/geotags/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_type)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto__,valch__14546__auto__);
});
geotags_of_type_factory27809 = function(tag_type){
switch(arguments.length){
case 0:
return geotags_of_type_factory27809__0.call(this);
case 1:
return geotags_of_type_factory27809__1.call(this,tag_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geotags_of_type_factory27809.cljs$core$IFn$_invoke$arity$0 = geotags_of_type_factory27809__0;
geotags_of_type_factory27809.cljs$core$IFn$_invoke$arity$1 = geotags_of_type_factory27809__1;
return geotags_of_type_factory27809;
})()
;})(in_flight_atom__14544__auto__))
});
var in_flight_atom__14544__auto___27810 = cljs.core.atom.call(null,null);clustermap.api.company_search = ((function (in_flight_atom__14544__auto___27810){
return (function() {
var company_search = null;
var company_search__0 = (function (){var emptych__14545__auto__ = cljs.core.async.chan.call(null);cljs.core.async.close_BANG_.call(null,emptych__14545__auto__);
return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto___27810,emptych__14545__auto__);
});
var company_search__1 = (function (query){var valch__14546__auto__ = clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/companies/v2/name-id-search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)));return clustermap.lastcall_method.lastcall_method_impl.call(null,in_flight_atom__14544__auto___27810,valch__14546__auto__);
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
;})(in_flight_atom__14544__auto___27810))
;
