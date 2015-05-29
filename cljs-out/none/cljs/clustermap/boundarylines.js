// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.min_tolerance = 0.01;
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),clustermap.boundarylines.min_tolerance], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__11514__auto__ = cljs.core.some.call(null,(function (p__27289){var vec__27290 = p__27289;var z = cljs.core.nth.call(null,vec__27290,(0),null);var t = cljs.core.nth.call(null,vec__27290,(1),null);if(cljs.core.truth_((function (){var and__11502__auto__ = z;if(cljs.core.truth_(and__11502__auto__))
{return (zoom <= z);
} else
{return and__11502__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return (0);
}
});
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var coarser = cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.call(null,((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__11514__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{var or__11514__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__11514__auto____$1))
{return or__11514__auto____$1;
} else
{return cljs.core.some.call(null,avail_set,coarser);
}
}
});
clustermap.boundarylines.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
/**
* cache a seq of boundarylines in the general and collection-specific caches
*/
clustermap.boundarylines.cache_boundarylines = (function cache_boundarylines(app_state,boundarylines_path,boundarylines){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);return cljs.core.swap_BANG_.call(null,app_state,((function (boundarylines_path__$1){
return (function (old_state){return cljs.core.reduce.call(null,((function (boundarylines_path__$1){
return (function (s,bl){var boundaryline_id = (bl["id"]);var tolerance = (bl["tolerance"]);var collection_ids = (bl["boundaryline_collection_ids"]);var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var collection_cache_base_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_cache_paths = (function (){var iter__12252__auto__ = ((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function iter__27295(s__27296){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__27296__$1 = s__27296;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27296__$1);if(temp__4126__auto__)
{var s__27296__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27296__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__27296__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__27298 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__27297 = (0);while(true){
if((i__27297 < size__12251__auto__))
{var collection_id = cljs.core._nth.call(null,c__12250__auto__,i__27297);cljs.core.chunk_append.call(null,b__27298,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__27299 = (i__27297 + (1));
i__27297 = G__27299;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27298),iter__27295.call(null,cljs.core.chunk_rest.call(null,s__27296__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27298),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__27296__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__27295.call(null,cljs.core.rest.call(null,s__27296__$2)));
}
} else
{return null;
}
break;
}
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1))
,null,null));
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1))
;return iter__12252__auto__.call(null,collection_ids);
})();var all_cache_paths = cljs.core.conj.call(null,collection_cache_paths,general_cache_path);return cljs.core.reduce.call(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,collection_cache_paths,all_cache_paths,boundarylines_path__$1){
return (function (s2,cp){return cljs.core.assoc_in.call(null,s2,cp,bl);
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,collection_cache_paths,all_cache_paths,boundarylines_path__$1))
,s,all_cache_paths);
});})(boundarylines_path__$1))
,old_state,boundarylines);
});})(boundarylines_path__$1))
);
});
/**
* take a geojson boundaryline collection index and index the individual boundarylines
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.cache_index = (function cache_index(app_state,boundarylines_path,js_index){var keys = Object.keys(js_index);return cljs.core.swap_BANG_.call(null,app_state,((function (keys){
return (function (old_state){return cljs.core.reduce.call(null,((function (keys){
return (function (s,k){var bl = (js_index[k]);var boundaryline_id = (bl["id"]);var tolerance = (bl["tolerance"]);var cache_path = cljs.core.concat.call(null,boundarylines_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));return cljs.core.assoc_in.call(null,s,cache_path,bl);
});})(keys))
,old_state,keys);
});})(keys))
);
});
/**
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundaryline_set = (function() { 
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__27300){var map__27316 = p__27300;var map__27316__$1 = ((cljs.core.seq_QMARK_.call(null,map__27316))?cljs.core.apply.call(null,cljs.core.hash_map,map__27316):map__27316);var tolerance = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,comm,map__27316,map__27316__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,comm,map__27316,map__27316__$1,tolerance,bounds,boundaryline_ids){
return (function (state_27321){var state_val_27322 = (state_27321[(1)]);if((state_val_27322 === (2)))
{var inst_27318 = (state_27321[(2)]);var inst_27319 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_27318);var state_27321__$1 = (function (){var statearr_27323 = state_27321;(statearr_27323[(7)] = inst_27319);
return statearr_27323;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27321__$1,true);
} else
{if((state_val_27322 === (1)))
{var state_27321__$1 = state_27321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27321__$1,(2),comm);
} else
{return null;
}
}
});})(c__18867__auto__,comm,map__27316,map__27316__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__18811__auto__,c__18867__auto__,comm,map__27316,map__27316__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_27327 = [null,null,null,null,null,null,null,null];(statearr_27327[(0)] = state_machine__18812__auto__);
(statearr_27327[(1)] = (1));
return statearr_27327;
});
var state_machine__18812__auto____1 = (function (state_27321){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27321);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e27328){if((e27328 instanceof Object))
{var ex__18815__auto__ = e27328;var statearr_27329_27331 = state_27321;(statearr_27329_27331[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27321);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27328;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27332 = state_27321;
state_27321 = G__27332;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_27321){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_27321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,comm,map__27316,map__27316__$1,tolerance,bounds,boundaryline_ids))
})();var state__18869__auto__ = (function (){var statearr_27330 = f__18868__auto__.call(null);(statearr_27330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_27330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,comm,map__27316,map__27316__$1,tolerance,bounds,boundaryline_ids))
);
return c__18867__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__27300 = null;if (arguments.length > 2) {
  p__27300 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__27300);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__27333){
var app_state = cljs.core.first(arglist__27333);
arglist__27333 = cljs.core.next(arglist__27333);
var boundarylines_path = cljs.core.first(arglist__27333);
var p__27300 = cljs.core.rest(arglist__27333);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__27300);
});
fetch_boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = fetch_boundaryline_set__delegate;
return fetch_boundaryline_set;
})()
;
/**
* return a channel with a single boundaryline gotten from cache or API
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_boundaryline = (function() { 
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__27334){var map__27363 = p__27334;var map__27363__$1 = ((cljs.core.seq_QMARK_.call(null,map__27363))?cljs.core.apply.call(null,cljs.core.hash_map,map__27363):map__27363);var tolerance = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27363,map__27363__$1,tolerance){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27363,map__27363__$1,tolerance){
return (function (state_27377){var state_val_27378 = (state_27377[(1)]);if((state_val_27378 === (5)))
{var inst_27371 = (state_27377[(2)]);var inst_27372 = cljs.core.deref.call(null,app_state);var inst_27373 = cljs.core.get_in.call(null,inst_27372,cache_path);var state_27377__$1 = (function (){var statearr_27379 = state_27377;(statearr_27379[(7)] = inst_27371);
return statearr_27379;
})();var statearr_27380_27391 = state_27377__$1;(statearr_27380_27391[(2)] = inst_27373);
(statearr_27380_27391[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27378 === (4)))
{var inst_27375 = (state_27377[(2)]);var state_27377__$1 = state_27377;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27377__$1,inst_27375);
} else
{if((state_val_27378 === (3)))
{var inst_27366 = cljs.core.PersistentVector.EMPTY_NODE;var inst_27367 = [boundaryline_id];var inst_27368 = (new cljs.core.PersistentVector(null,1,(5),inst_27366,inst_27367,null));var inst_27369 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_27368,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_27377__$1 = state_27377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27377__$1,(5),inst_27369);
} else
{if((state_val_27378 === (2)))
{var state_27377__$1 = state_27377;var statearr_27381_27392 = state_27377__$1;(statearr_27381_27392[(2)] = cached_bl);
(statearr_27381_27392[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27378 === (1)))
{var state_27377__$1 = state_27377;if(cljs.core.truth_(cached_bl))
{var statearr_27382_27393 = state_27377__$1;(statearr_27382_27393[(1)] = (2));
} else
{var statearr_27383_27394 = state_27377__$1;(statearr_27383_27394[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__18867__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27363,map__27363__$1,tolerance))
;return ((function (switch__18811__auto__,c__18867__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27363,map__27363__$1,tolerance){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_27387 = [null,null,null,null,null,null,null,null];(statearr_27387[(0)] = state_machine__18812__auto__);
(statearr_27387[(1)] = (1));
return statearr_27387;
});
var state_machine__18812__auto____1 = (function (state_27377){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27377);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e27388){if((e27388 instanceof Object))
{var ex__18815__auto__ = e27388;var statearr_27389_27395 = state_27377;(statearr_27389_27395[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27377);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27388;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27396 = state_27377;
state_27377 = G__27396;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_27377){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_27377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27363,map__27363__$1,tolerance))
})();var state__18869__auto__ = (function (){var statearr_27390 = f__18868__auto__.call(null);(statearr_27390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_27390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27363,map__27363__$1,tolerance))
);
return c__18867__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__27334 = null;if (arguments.length > 3) {
  p__27334 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__27334);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__27397){
var app_state = cljs.core.first(arglist__27397);
arglist__27397 = cljs.core.next(arglist__27397);
var boundarylines_path = cljs.core.first(arglist__27397);
arglist__27397 = cljs.core.next(arglist__27397);
var boundaryline_id = cljs.core.first(arglist__27397);
var p__27334 = cljs.core.rest(arglist__27397);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__27334);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_27417){var state_val_27418 = (state_27417[(1)]);if((state_val_27418 === (2)))
{var inst_27413 = (state_27417[(2)]);var inst_27414 = cljs.core.clj__GT_js.call(null,inst_27413);var inst_27415 = console.log(inst_27414);var state_27417__$1 = state_27417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27417__$1,inst_27415);
} else
{if((state_val_27418 === (1)))
{var state_27417__$1 = state_27417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27417__$1,(2),ch);
} else
{return null;
}
}
});})(c__18867__auto__))
;return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_27422 = [null,null,null,null,null,null,null];(statearr_27422[(0)] = state_machine__18812__auto__);
(statearr_27422[(1)] = (1));
return statearr_27422;
});
var state_machine__18812__auto____1 = (function (state_27417){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27417);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e27423){if((e27423 instanceof Object))
{var ex__18815__auto__ = e27423;var statearr_27424_27426 = state_27417;(statearr_27424_27426[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27417);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27423;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27427 = state_27417;
state_27417 = G__27427;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_27417){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_27417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();var state__18869__auto__ = (function (){var statearr_27425 = f__18868__auto__.call(null);(statearr_27425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_27425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);
return c__18867__auto__;
});
/**
* fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
* general caches. returns a single value true on the go-block channel when complete
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundarylines = (function() { 
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__27428){var map__27444 = p__27428;var map__27444__$1 = ((cljs.core.seq_QMARK_.call(null,map__27444))?cljs.core.apply.call(null,cljs.core.hash_map,map__27444):map__27444);var bounds = cljs.core.get.call(null,map__27444__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__27444__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,comm,map__27444,map__27444__$1,bounds,boundaryline_ids){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,comm,map__27444,map__27444__$1,bounds,boundaryline_ids){
return (function (state_27449){var state_val_27450 = (state_27449[(1)]);if((state_val_27450 === (2)))
{var inst_27446 = (state_27449[(2)]);var inst_27447 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_27446);var state_27449__$1 = (function (){var statearr_27451 = state_27449;(statearr_27451[(7)] = inst_27447);
return statearr_27451;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27449__$1,true);
} else
{if((state_val_27450 === (1)))
{var state_27449__$1 = state_27449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27449__$1,(2),comm);
} else
{return null;
}
}
});})(c__18867__auto__,comm,map__27444,map__27444__$1,bounds,boundaryline_ids))
;return ((function (switch__18811__auto__,c__18867__auto__,comm,map__27444,map__27444__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_27455 = [null,null,null,null,null,null,null,null];(statearr_27455[(0)] = state_machine__18812__auto__);
(statearr_27455[(1)] = (1));
return statearr_27455;
});
var state_machine__18812__auto____1 = (function (state_27449){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27449);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e27456){if((e27456 instanceof Object))
{var ex__18815__auto__ = e27456;var statearr_27457_27459 = state_27449;(statearr_27457_27459[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27449);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27456;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27460 = state_27449;
state_27449 = G__27460;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_27449){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_27449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,comm,map__27444,map__27444__$1,bounds,boundaryline_ids))
})();var state__18869__auto__ = (function (){var statearr_27458 = f__18868__auto__.call(null);(statearr_27458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_27458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,comm,map__27444,map__27444__$1,bounds,boundaryline_ids))
);
return c__18867__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__27428 = null;if (arguments.length > 4) {
  p__27428 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__27428);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__27461){
var app_state = cljs.core.first(arglist__27461);
arglist__27461 = cljs.core.next(arglist__27461);
var boundarylines_path = cljs.core.first(arglist__27461);
arglist__27461 = cljs.core.next(arglist__27461);
var collection_id = cljs.core.first(arglist__27461);
arglist__27461 = cljs.core.next(arglist__27461);
var tolerance = cljs.core.first(arglist__27461);
var p__27428 = cljs.core.rest(arglist__27461);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__27428);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__11502__auto__ = default_bl;if(cljs.core.truth_(and__11502__auto__))
{return default_tol;
} else
{return and__11502__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tol,default_bl], null);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
clustermap.boundarylines.get_cached_boundaryline = (function() { 
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__27462){var vec__27465 = p__27462;var map__27466 = cljs.core.nth.call(null,vec__27465,(0),null);var map__27466__$1 = ((cljs.core.seq_QMARK_.call(null,map__27466))?cljs.core.apply.call(null,cljs.core.hash_map,map__27466):map__27466);var indexes = cljs.core.get.call(null,map__27466__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__27465,map__27466,map__27466__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__27465,map__27466,map__27466__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__27462 = null;if (arguments.length > 3) {
  p__27462 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__27462);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__27467){
var app_state = cljs.core.first(arglist__27467);
arglist__27467 = cljs.core.next(arglist__27467);
var boundarylines_path = cljs.core.first(arglist__27467);
arglist__27467 = cljs.core.next(arglist__27467);
var boundaryline_id = cljs.core.first(arglist__27467);
var p__27462 = cljs.core.rest(arglist__27467);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__27462);
});
get_cached_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_cached_boundaryline__delegate;
return get_cached_boundaryline;
})()
;
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__11514__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.get.call(null,general_cache,boundaryline_id);
}
})();var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var use_tol = clustermap.boundarylines.best_available_tolerance.call(null,zoom,cljs.core.keys.call(null,bl_versions));var use_bl = cljs.core.get.call(null,bl_versions,use_tol);if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return clustermap.boundarylines.fetch_from_index.call(null,collection_index,boundaryline_id);
}
});
/**
* gets the best boundaryline versions for a zoom level... where the best are not
* immediately available, fetches it asynchronously and returns the best immediately
* available
* - app-state : atom containing app-state
* - boundarylines-path : path in app-state of boundarylines state
* - collection-id : id of boundaryline collection to retrieve from
* - zoom : zoom level to retrieve for
* - boundaryline-ids : ids of boundarylines required
* - bounds :
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_best_boundarylines = (function() { 
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__27468){var map__27473 = p__27468;var map__27473__$1 = ((cljs.core.seq_QMARK_.call(null,map__27473))?cljs.core.apply.call(null,cljs.core.hash_map,map__27473):map__27473);var boundaryline_ids = cljs.core.get.call(null,map__27473__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__27473,map__27473__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__27473,map__27473__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__27473,map__27473__$1,boundaryline_ids){
return (function (p__27474){var vec__27475 = p__27474;var blid = cljs.core.nth.call(null,vec__27475,(0),null);var vec__27476 = cljs.core.nth.call(null,vec__27475,(1),null);var tol = cljs.core.nth.call(null,vec__27476,(0),null);var bl = cljs.core.nth.call(null,vec__27476,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__27473,map__27473__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__27468 = null;if (arguments.length > 5) {
  p__27468 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__27468);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__27477){
var app_state = cljs.core.first(arglist__27477);
arglist__27477 = cljs.core.next(arglist__27477);
var boundarylines_path = cljs.core.first(arglist__27477);
arglist__27477 = cljs.core.next(arglist__27477);
var collection_id = cljs.core.first(arglist__27477);
arglist__27477 = cljs.core.next(arglist__27477);
var bounds = cljs.core.first(arglist__27477);
arglist__27477 = cljs.core.next(arglist__27477);
var zoom = cljs.core.first(arglist__27477);
var p__27468 = cljs.core.rest(arglist__27477);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__27468);
});
get_or_fetch_best_boundarylines.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundarylines__delegate;
return get_or_fetch_best_boundarylines;
})()
;
/**
* atomically fetch or create the rtree index object for a collection
*/
clustermap.boundarylines.boundaryline_collection_rtree = (function boundaryline_collection_rtree(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rtree_path,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return (new RTree((10)));
}
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path))
);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);
});
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties (including the original index object, for later retrieval)
*/
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__27482_27486 = cljs.core.seq.call(null,keys);var chunk__27483_27487 = null;var count__27484_27488 = (0);var i__27485_27489 = (0);while(true){
if((i__27485_27489 < count__27484_27488))
{var k_27490 = cljs.core._nth.call(null,chunk__27483_27487,i__27485_27489);var obj_27491 = (js_index[k_27490]);var geom_27492 = (obj_27491["geojson"]);var feature_27493 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_27491["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_27491["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_27491["compact_name"])], null)], null));var __27494__$1 = (feature_27493["geometry"] = geom_27492);var __27495__$2 = ((feature_27493["properties"])["index_object"] = obj_27491);features.push(feature_27493);
{
var G__27496 = seq__27482_27486;
var G__27497 = chunk__27483_27487;
var G__27498 = count__27484_27488;
var G__27499 = (i__27485_27489 + (1));
seq__27482_27486 = G__27496;
chunk__27483_27487 = G__27497;
count__27484_27488 = G__27498;
i__27485_27489 = G__27499;
continue;
}
} else
{var temp__4126__auto___27500 = cljs.core.seq.call(null,seq__27482_27486);if(temp__4126__auto___27500)
{var seq__27482_27501__$1 = temp__4126__auto___27500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27482_27501__$1))
{var c__12283__auto___27502 = cljs.core.chunk_first.call(null,seq__27482_27501__$1);{
var G__27503 = cljs.core.chunk_rest.call(null,seq__27482_27501__$1);
var G__27504 = c__12283__auto___27502;
var G__27505 = cljs.core.count.call(null,c__12283__auto___27502);
var G__27506 = (0);
seq__27482_27486 = G__27503;
chunk__27483_27487 = G__27504;
count__27484_27488 = G__27505;
i__27485_27489 = G__27506;
continue;
}
} else
{var k_27507 = cljs.core.first.call(null,seq__27482_27501__$1);var obj_27508 = (js_index[k_27507]);var geom_27509 = (obj_27508["geojson"]);var feature_27510 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_27508["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_27508["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_27508["compact_name"])], null)], null));var __27511__$1 = (feature_27510["geometry"] = geom_27509);var __27512__$2 = ((feature_27510["properties"])["index_object"] = obj_27508);features.push(feature_27510);
{
var G__27513 = cljs.core.next.call(null,seq__27482_27501__$1);
var G__27514 = null;
var G__27515 = (0);
var G__27516 = (0);
seq__27482_27486 = G__27513;
chunk__27483_27487 = G__27514;
count__27484_27488 = G__27515;
i__27485_27489 = G__27516;
continue;
}
}
} else
{}
}
break;
}
rtree.geoJSON(js_feature_coll);
return rtree;
});
clustermap.boundarylines.fetch_boundaryline_collection_index = (function fetch_boundaryline_collection_index(app_state,boundarylines_path,collection_id){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var index_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null));var index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),index_path);var rtree = clustermap.boundarylines.boundaryline_collection_rtree.call(null,app_state,boundarylines_path__$1,collection_id);if(cljs.core.truth_(index))
{return null;
} else
{var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_27562){var state_val_27563 = (state_27562[(1)]);if((state_val_27563 === (5)))
{var inst_27549 = (state_27562[(7)]);var inst_27559 = (state_27562[(2)]);var inst_27560 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_27549);var state_27562__$1 = (function (){var statearr_27564 = state_27562;(statearr_27564[(8)] = inst_27559);
return statearr_27564;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27562__$1,inst_27560);
} else
{if((state_val_27563 === (4)))
{var state_27562__$1 = state_27562;var statearr_27565_27577 = state_27562__$1;(statearr_27565_27577[(2)] = null);
(statearr_27565_27577[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (3)))
{var inst_27549 = (state_27562[(7)]);var inst_27556 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_27549);var state_27562__$1 = state_27562;var statearr_27566_27578 = state_27562__$1;(statearr_27566_27578[(2)] = inst_27556);
(statearr_27566_27578[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (2)))
{var inst_27549 = (state_27562[(7)]);var inst_27549__$1 = (state_27562[(2)]);var inst_27550 = (function (){var bl_coll_index = inst_27549__$1;return ((function (bl_coll_index,inst_27549,inst_27549__$1,state_val_27563,c__18867__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_27549,inst_27549__$1,state_val_27563,c__18867__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_27551 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_27550);var inst_27552 = cljs.core.deref.call(null,app_state);var inst_27553 = cljs.core.get_in.call(null,inst_27552,index_path);var inst_27554 = cljs.core._EQ_.call(null,inst_27553,inst_27549__$1);var state_27562__$1 = (function (){var statearr_27567 = state_27562;(statearr_27567[(7)] = inst_27549__$1);
(statearr_27567[(9)] = inst_27551);
return statearr_27567;
})();if(inst_27554)
{var statearr_27568_27579 = state_27562__$1;(statearr_27568_27579[(1)] = (3));
} else
{var statearr_27569_27580 = state_27562__$1;(statearr_27569_27580[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27563 === (1)))
{var inst_27547 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_27562__$1 = state_27562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27562__$1,(2),inst_27547);
} else
{return null;
}
}
}
}
}
});})(c__18867__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__18811__auto__,c__18867__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_27573 = [null,null,null,null,null,null,null,null,null,null];(statearr_27573[(0)] = state_machine__18812__auto__);
(statearr_27573[(1)] = (1));
return statearr_27573;
});
var state_machine__18812__auto____1 = (function (state_27562){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27562);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e27574){if((e27574 instanceof Object))
{var ex__18815__auto__ = e27574;var statearr_27575_27581 = state_27562;(statearr_27575_27581[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27562);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27574;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27582 = state_27562;
state_27562 = G__27582;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_27562){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_27562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__18869__auto__ = (function (){var statearr_27576 = f__18868__auto__.call(null);(statearr_27576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_27576;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__18867__auto__;
}
});
/**
* use the rtree index to find which paths from a collection a point is inside.
* returns a list of boundaryline objects
*/
clustermap.boundarylines.point_in_boundarylines = (function point_in_boundarylines(app_state,boundarylines_path,collection_id,x,y){var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_path = cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null));var rtree_path = cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rtree","rtree",-82448827)], null));var rtree = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),rtree_path);var hits = (cljs.core.truth_(rtree)?rtree.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"w","w",354169001),(0),new cljs.core.Keyword(null,"h","h",1109658740),(0)], null))):null);return cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),hit.properties.id,new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),hit.properties.compact_name], null);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits){
return (function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
});})(boundarylines_path__$1,all_collections_path,collection_path,rtree_path,rtree,hits))
,(function (){var or__11514__auto__ = hits;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});

//# sourceMappingURL=boundarylines.js.map