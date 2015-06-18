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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__27949){var vec__27950 = p__27949;var z = cljs.core.nth.call(null,vec__27950,(0),null);var t = cljs.core.nth.call(null,vec__27950,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
{return (zoom <= z);
} else
{return and__3627__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
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
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3639__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3639__auto____$1))
{return or__3639__auto____$1;
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
return (function (s,bl){var boundaryline_id = (bl["id"]);var tolerance = (bl["tolerance"]);var collection_ids = (bl["boundaryline_collection_ids"]);var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var collection_cache_base_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_cache_paths = (function (){var iter__4377__auto__ = ((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function iter__27955(s__27956){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__27956__$1 = s__27956;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27956__$1);if(temp__4126__auto__)
{var s__27956__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27956__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27956__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27958 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27957 = (0);while(true){
if((i__27957 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__27957);cljs.core.chunk_append.call(null,b__27958,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__27959 = (i__27957 + (1));
i__27957 = G__27959;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27958),iter__27955.call(null,cljs.core.chunk_rest.call(null,s__27956__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27958),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__27956__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__27955.call(null,cljs.core.rest.call(null,s__27956__$2)));
}
} else
{return null;
}
break;
}
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1))
,null,null));
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1))
;return iter__4377__auto__.call(null,collection_ids);
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__27960){var map__27976 = p__27960;var map__27976__$1 = ((cljs.core.seq_QMARK_.call(null,map__27976))?cljs.core.apply.call(null,cljs.core.hash_map,map__27976):map__27976);var tolerance = cljs.core.get.call(null,map__27976__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__27976__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__27976__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,comm,map__27976,map__27976__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,comm,map__27976,map__27976__$1,tolerance,bounds,boundaryline_ids){
return (function (state_27981){var state_val_27982 = (state_27981[(1)]);if((state_val_27982 === (2)))
{var inst_27978 = (state_27981[(2)]);var inst_27979 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_27978);var state_27981__$1 = (function (){var statearr_27983 = state_27981;(statearr_27983[(7)] = inst_27979);
return statearr_27983;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27981__$1,true);
} else
{if((state_val_27982 === (1)))
{var state_27981__$1 = state_27981;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27981__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto__,comm,map__27976,map__27976__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__9110__auto__,c__9125__auto__,comm,map__27976,map__27976__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27987 = [null,null,null,null,null,null,null,null];(statearr_27987[(0)] = state_machine__9111__auto__);
(statearr_27987[(1)] = (1));
return statearr_27987;
});
var state_machine__9111__auto____1 = (function (state_27981){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27981);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27988){if((e27988 instanceof Object))
{var ex__9114__auto__ = e27988;var statearr_27989_27991 = state_27981;(statearr_27989_27991[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27988;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27992 = state_27981;
state_27981 = G__27992;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27981){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,comm,map__27976,map__27976__$1,tolerance,bounds,boundaryline_ids))
})();var state__9127__auto__ = (function (){var statearr_27990 = f__9126__auto__.call(null);(statearr_27990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,comm,map__27976,map__27976__$1,tolerance,bounds,boundaryline_ids))
);
return c__9125__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__27960 = null;if (arguments.length > 2) {
  p__27960 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__27960);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__27993){
var app_state = cljs.core.first(arglist__27993);
arglist__27993 = cljs.core.next(arglist__27993);
var boundarylines_path = cljs.core.first(arglist__27993);
var p__27960 = cljs.core.rest(arglist__27993);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__27960);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__27994){var map__28023 = p__27994;var map__28023__$1 = ((cljs.core.seq_QMARK_.call(null,map__28023))?cljs.core.apply.call(null,cljs.core.hash_map,map__28023):map__28023);var tolerance = cljs.core.get.call(null,map__28023__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28023,map__28023__$1,tolerance){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28023,map__28023__$1,tolerance){
return (function (state_28037){var state_val_28038 = (state_28037[(1)]);if((state_val_28038 === (5)))
{var inst_28031 = (state_28037[(2)]);var inst_28032 = cljs.core.deref.call(null,app_state);var inst_28033 = cljs.core.get_in.call(null,inst_28032,cache_path);var state_28037__$1 = (function (){var statearr_28039 = state_28037;(statearr_28039[(7)] = inst_28031);
return statearr_28039;
})();var statearr_28040_28051 = state_28037__$1;(statearr_28040_28051[(2)] = inst_28033);
(statearr_28040_28051[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28038 === (4)))
{var inst_28035 = (state_28037[(2)]);var state_28037__$1 = state_28037;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28037__$1,inst_28035);
} else
{if((state_val_28038 === (3)))
{var inst_28026 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28027 = [boundaryline_id];var inst_28028 = (new cljs.core.PersistentVector(null,1,(5),inst_28026,inst_28027,null));var inst_28029 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_28028,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_28037__$1 = state_28037;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28037__$1,(5),inst_28029);
} else
{if((state_val_28038 === (2)))
{var state_28037__$1 = state_28037;var statearr_28041_28052 = state_28037__$1;(statearr_28041_28052[(2)] = cached_bl);
(statearr_28041_28052[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28038 === (1)))
{var state_28037__$1 = state_28037;if(cljs.core.truth_(cached_bl))
{var statearr_28042_28053 = state_28037__$1;(statearr_28042_28053[(1)] = (2));
} else
{var statearr_28043_28054 = state_28037__$1;(statearr_28043_28054[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28023,map__28023__$1,tolerance))
;return ((function (switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28023,map__28023__$1,tolerance){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28047 = [null,null,null,null,null,null,null,null];(statearr_28047[(0)] = state_machine__9111__auto__);
(statearr_28047[(1)] = (1));
return statearr_28047;
});
var state_machine__9111__auto____1 = (function (state_28037){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28037);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28048){if((e28048 instanceof Object))
{var ex__9114__auto__ = e28048;var statearr_28049_28055 = state_28037;(statearr_28049_28055[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28037);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28048;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28056 = state_28037;
state_28037 = G__28056;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28037){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28023,map__28023__$1,tolerance))
})();var state__9127__auto__ = (function (){var statearr_28050 = f__9126__auto__.call(null);(statearr_28050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28050;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28023,map__28023__$1,tolerance))
);
return c__9125__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__27994 = null;if (arguments.length > 3) {
  p__27994 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__27994);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__28057){
var app_state = cljs.core.first(arglist__28057);
arglist__28057 = cljs.core.next(arglist__28057);
var boundarylines_path = cljs.core.first(arglist__28057);
arglist__28057 = cljs.core.next(arglist__28057);
var boundaryline_id = cljs.core.first(arglist__28057);
var p__27994 = cljs.core.rest(arglist__28057);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__27994);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_28077){var state_val_28078 = (state_28077[(1)]);if((state_val_28078 === (2)))
{var inst_28073 = (state_28077[(2)]);var inst_28074 = cljs.core.clj__GT_js.call(null,inst_28073);var inst_28075 = console.log(inst_28074);var state_28077__$1 = state_28077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28077__$1,inst_28075);
} else
{if((state_val_28078 === (1)))
{var state_28077__$1 = state_28077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28077__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28082 = [null,null,null,null,null,null,null];(statearr_28082[(0)] = state_machine__9111__auto__);
(statearr_28082[(1)] = (1));
return statearr_28082;
});
var state_machine__9111__auto____1 = (function (state_28077){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28077);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28083){if((e28083 instanceof Object))
{var ex__9114__auto__ = e28083;var statearr_28084_28086 = state_28077;(statearr_28084_28086[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28077);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28083;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28087 = state_28077;
state_28077 = G__28087;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28077){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_28085 = f__9126__auto__.call(null);(statearr_28085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28085;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
/**
* fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
* general caches. returns a single value true on the go-block channel when complete
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundarylines = (function() { 
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__28088){var map__28104 = p__28088;var map__28104__$1 = ((cljs.core.seq_QMARK_.call(null,map__28104))?cljs.core.apply.call(null,cljs.core.hash_map,map__28104):map__28104);var bounds = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__28104__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,comm,map__28104,map__28104__$1,bounds,boundaryline_ids){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,comm,map__28104,map__28104__$1,bounds,boundaryline_ids){
return (function (state_28109){var state_val_28110 = (state_28109[(1)]);if((state_val_28110 === (2)))
{var inst_28106 = (state_28109[(2)]);var inst_28107 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_28106);var state_28109__$1 = (function (){var statearr_28111 = state_28109;(statearr_28111[(7)] = inst_28107);
return statearr_28111;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28109__$1,true);
} else
{if((state_val_28110 === (1)))
{var state_28109__$1 = state_28109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28109__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto__,comm,map__28104,map__28104__$1,bounds,boundaryline_ids))
;return ((function (switch__9110__auto__,c__9125__auto__,comm,map__28104,map__28104__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28115 = [null,null,null,null,null,null,null,null];(statearr_28115[(0)] = state_machine__9111__auto__);
(statearr_28115[(1)] = (1));
return statearr_28115;
});
var state_machine__9111__auto____1 = (function (state_28109){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28109);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28116){if((e28116 instanceof Object))
{var ex__9114__auto__ = e28116;var statearr_28117_28119 = state_28109;(statearr_28117_28119[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28109);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28116;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28120 = state_28109;
state_28109 = G__28120;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28109){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,comm,map__28104,map__28104__$1,bounds,boundaryline_ids))
})();var state__9127__auto__ = (function (){var statearr_28118 = f__9126__auto__.call(null);(statearr_28118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,comm,map__28104,map__28104__$1,bounds,boundaryline_ids))
);
return c__9125__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__28088 = null;if (arguments.length > 4) {
  p__28088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__28088);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__28121){
var app_state = cljs.core.first(arglist__28121);
arglist__28121 = cljs.core.next(arglist__28121);
var boundarylines_path = cljs.core.first(arglist__28121);
arglist__28121 = cljs.core.next(arglist__28121);
var collection_id = cljs.core.first(arglist__28121);
arglist__28121 = cljs.core.next(arglist__28121);
var tolerance = cljs.core.first(arglist__28121);
var p__28088 = cljs.core.rest(arglist__28121);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__28088);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__3627__auto__ = default_bl;if(cljs.core.truth_(and__3627__auto__))
{return default_tol;
} else
{return and__3627__auto__;
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__28122){var vec__28125 = p__28122;var map__28126 = cljs.core.nth.call(null,vec__28125,(0),null);var map__28126__$1 = ((cljs.core.seq_QMARK_.call(null,map__28126))?cljs.core.apply.call(null,cljs.core.hash_map,map__28126):map__28126);var indexes = cljs.core.get.call(null,map__28126__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__28125,map__28126,map__28126__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__28125,map__28126,map__28126__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__28122 = null;if (arguments.length > 3) {
  p__28122 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__28122);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__28127){
var app_state = cljs.core.first(arglist__28127);
arglist__28127 = cljs.core.next(arglist__28127);
var boundarylines_path = cljs.core.first(arglist__28127);
arglist__28127 = cljs.core.next(arglist__28127);
var boundaryline_id = cljs.core.first(arglist__28127);
var p__28122 = cljs.core.rest(arglist__28127);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__28122);
});
get_cached_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_cached_boundaryline__delegate;
return get_cached_boundaryline;
})()
;
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__3639__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__28128){var map__28133 = p__28128;var map__28133__$1 = ((cljs.core.seq_QMARK_.call(null,map__28133))?cljs.core.apply.call(null,cljs.core.hash_map,map__28133):map__28133);var boundaryline_ids = cljs.core.get.call(null,map__28133__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28133,map__28133__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28133,map__28133__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28133,map__28133__$1,boundaryline_ids){
return (function (p__28134){var vec__28135 = p__28134;var blid = cljs.core.nth.call(null,vec__28135,(0),null);var vec__28136 = cljs.core.nth.call(null,vec__28135,(1),null);var tol = cljs.core.nth.call(null,vec__28136,(0),null);var bl = cljs.core.nth.call(null,vec__28136,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28133,map__28133__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__28128 = null;if (arguments.length > 5) {
  p__28128 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__28128);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__28137){
var app_state = cljs.core.first(arglist__28137);
arglist__28137 = cljs.core.next(arglist__28137);
var boundarylines_path = cljs.core.first(arglist__28137);
arglist__28137 = cljs.core.next(arglist__28137);
var collection_id = cljs.core.first(arglist__28137);
arglist__28137 = cljs.core.next(arglist__28137);
var bounds = cljs.core.first(arglist__28137);
arglist__28137 = cljs.core.next(arglist__28137);
var zoom = cljs.core.first(arglist__28137);
var p__28128 = cljs.core.rest(arglist__28137);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__28128);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__28142_28146 = cljs.core.seq.call(null,keys);var chunk__28143_28147 = null;var count__28144_28148 = (0);var i__28145_28149 = (0);while(true){
if((i__28145_28149 < count__28144_28148))
{var k_28150 = cljs.core._nth.call(null,chunk__28143_28147,i__28145_28149);var obj_28151 = (js_index[k_28150]);var geom_28152 = (obj_28151["geojson"]);var feature_28153 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28151["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28151["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28151["compact_name"])], null)], null));var __28154__$1 = (feature_28153["geometry"] = geom_28152);var __28155__$2 = ((feature_28153["properties"])["index_object"] = obj_28151);features.push(feature_28153);
{
var G__28156 = seq__28142_28146;
var G__28157 = chunk__28143_28147;
var G__28158 = count__28144_28148;
var G__28159 = (i__28145_28149 + (1));
seq__28142_28146 = G__28156;
chunk__28143_28147 = G__28157;
count__28144_28148 = G__28158;
i__28145_28149 = G__28159;
continue;
}
} else
{var temp__4126__auto___28160 = cljs.core.seq.call(null,seq__28142_28146);if(temp__4126__auto___28160)
{var seq__28142_28161__$1 = temp__4126__auto___28160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28142_28161__$1))
{var c__4408__auto___28162 = cljs.core.chunk_first.call(null,seq__28142_28161__$1);{
var G__28163 = cljs.core.chunk_rest.call(null,seq__28142_28161__$1);
var G__28164 = c__4408__auto___28162;
var G__28165 = cljs.core.count.call(null,c__4408__auto___28162);
var G__28166 = (0);
seq__28142_28146 = G__28163;
chunk__28143_28147 = G__28164;
count__28144_28148 = G__28165;
i__28145_28149 = G__28166;
continue;
}
} else
{var k_28167 = cljs.core.first.call(null,seq__28142_28161__$1);var obj_28168 = (js_index[k_28167]);var geom_28169 = (obj_28168["geojson"]);var feature_28170 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28168["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28168["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28168["compact_name"])], null)], null));var __28171__$1 = (feature_28170["geometry"] = geom_28169);var __28172__$2 = ((feature_28170["properties"])["index_object"] = obj_28168);features.push(feature_28170);
{
var G__28173 = cljs.core.next.call(null,seq__28142_28161__$1);
var G__28174 = null;
var G__28175 = (0);
var G__28176 = (0);
seq__28142_28146 = G__28173;
chunk__28143_28147 = G__28174;
count__28144_28148 = G__28175;
i__28145_28149 = G__28176;
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
{var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_28222){var state_val_28223 = (state_28222[(1)]);if((state_val_28223 === (5)))
{var inst_28209 = (state_28222[(7)]);var inst_28219 = (state_28222[(2)]);var inst_28220 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_28209);var state_28222__$1 = (function (){var statearr_28224 = state_28222;(statearr_28224[(8)] = inst_28219);
return statearr_28224;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28222__$1,inst_28220);
} else
{if((state_val_28223 === (4)))
{var state_28222__$1 = state_28222;var statearr_28225_28237 = state_28222__$1;(statearr_28225_28237[(2)] = null);
(statearr_28225_28237[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28223 === (3)))
{var inst_28209 = (state_28222[(7)]);var inst_28216 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_28209);var state_28222__$1 = state_28222;var statearr_28226_28238 = state_28222__$1;(statearr_28226_28238[(2)] = inst_28216);
(statearr_28226_28238[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28223 === (2)))
{var inst_28209 = (state_28222[(7)]);var inst_28209__$1 = (state_28222[(2)]);var inst_28210 = (function (){var bl_coll_index = inst_28209__$1;return ((function (bl_coll_index,inst_28209,inst_28209__$1,state_val_28223,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_28209,inst_28209__$1,state_val_28223,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_28211 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_28210);var inst_28212 = cljs.core.deref.call(null,app_state);var inst_28213 = cljs.core.get_in.call(null,inst_28212,index_path);var inst_28214 = cljs.core._EQ_.call(null,inst_28213,inst_28209__$1);var state_28222__$1 = (function (){var statearr_28227 = state_28222;(statearr_28227[(7)] = inst_28209__$1);
(statearr_28227[(9)] = inst_28211);
return statearr_28227;
})();if(inst_28214)
{var statearr_28228_28239 = state_28222__$1;(statearr_28228_28239[(1)] = (3));
} else
{var statearr_28229_28240 = state_28222__$1;(statearr_28229_28240[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28223 === (1)))
{var inst_28207 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_28222__$1 = state_28222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28222__$1,(2),inst_28207);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28233 = [null,null,null,null,null,null,null,null,null,null];(statearr_28233[(0)] = state_machine__9111__auto__);
(statearr_28233[(1)] = (1));
return statearr_28233;
});
var state_machine__9111__auto____1 = (function (state_28222){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28222);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28234){if((e28234 instanceof Object))
{var ex__9114__auto__ = e28234;var statearr_28235_28241 = state_28222;(statearr_28235_28241[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28234;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28242 = state_28222;
state_28222 = G__28242;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28222){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__9127__auto__ = (function (){var statearr_28236 = f__9126__auto__.call(null);(statearr_28236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__9125__auto__;
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
,(function (){var or__3639__auto__ = hits;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});
