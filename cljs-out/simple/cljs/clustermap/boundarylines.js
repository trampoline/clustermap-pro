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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__27914){var vec__27915 = p__27914;var z = cljs.core.nth.call(null,vec__27915,(0),null);var t = cljs.core.nth.call(null,vec__27915,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
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
return (function iter__27920(s__27921){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__27921__$1 = s__27921;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27921__$1);if(temp__4126__auto__)
{var s__27921__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27921__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27921__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27923 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27922 = (0);while(true){
if((i__27922 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__27922);cljs.core.chunk_append.call(null,b__27923,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__27924 = (i__27922 + (1));
i__27922 = G__27924;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27923),iter__27920.call(null,cljs.core.chunk_rest.call(null,s__27921__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27923),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__27921__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__27920.call(null,cljs.core.rest.call(null,s__27921__$2)));
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__27925){var map__27941 = p__27925;var map__27941__$1 = ((cljs.core.seq_QMARK_.call(null,map__27941))?cljs.core.apply.call(null,cljs.core.hash_map,map__27941):map__27941);var tolerance = cljs.core.get.call(null,map__27941__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__27941__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__27941__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,comm,map__27941,map__27941__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,comm,map__27941,map__27941__$1,tolerance,bounds,boundaryline_ids){
return (function (state_27946){var state_val_27947 = (state_27946[(1)]);if((state_val_27947 === (2)))
{var inst_27943 = (state_27946[(2)]);var inst_27944 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_27943);var state_27946__$1 = (function (){var statearr_27948 = state_27946;(statearr_27948[(7)] = inst_27944);
return statearr_27948;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27946__$1,true);
} else
{if((state_val_27947 === (1)))
{var state_27946__$1 = state_27946;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27946__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto__,comm,map__27941,map__27941__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__9110__auto__,c__9125__auto__,comm,map__27941,map__27941__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27952 = [null,null,null,null,null,null,null,null];(statearr_27952[(0)] = state_machine__9111__auto__);
(statearr_27952[(1)] = (1));
return statearr_27952;
});
var state_machine__9111__auto____1 = (function (state_27946){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27946);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27953){if((e27953 instanceof Object))
{var ex__9114__auto__ = e27953;var statearr_27954_27956 = state_27946;(statearr_27954_27956[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27946);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27953;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27957 = state_27946;
state_27946 = G__27957;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27946){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,comm,map__27941,map__27941__$1,tolerance,bounds,boundaryline_ids))
})();var state__9127__auto__ = (function (){var statearr_27955 = f__9126__auto__.call(null);(statearr_27955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,comm,map__27941,map__27941__$1,tolerance,bounds,boundaryline_ids))
);
return c__9125__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__27925 = null;if (arguments.length > 2) {
  p__27925 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__27925);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__27958){
var app_state = cljs.core.first(arglist__27958);
arglist__27958 = cljs.core.next(arglist__27958);
var boundarylines_path = cljs.core.first(arglist__27958);
var p__27925 = cljs.core.rest(arglist__27958);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__27925);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__27959){var map__27988 = p__27959;var map__27988__$1 = ((cljs.core.seq_QMARK_.call(null,map__27988))?cljs.core.apply.call(null,cljs.core.hash_map,map__27988):map__27988);var tolerance = cljs.core.get.call(null,map__27988__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27988,map__27988__$1,tolerance){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27988,map__27988__$1,tolerance){
return (function (state_28002){var state_val_28003 = (state_28002[(1)]);if((state_val_28003 === (5)))
{var inst_27996 = (state_28002[(2)]);var inst_27997 = cljs.core.deref.call(null,app_state);var inst_27998 = cljs.core.get_in.call(null,inst_27997,cache_path);var state_28002__$1 = (function (){var statearr_28004 = state_28002;(statearr_28004[(7)] = inst_27996);
return statearr_28004;
})();var statearr_28005_28016 = state_28002__$1;(statearr_28005_28016[(2)] = inst_27998);
(statearr_28005_28016[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28003 === (4)))
{var inst_28000 = (state_28002[(2)]);var state_28002__$1 = state_28002;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28002__$1,inst_28000);
} else
{if((state_val_28003 === (3)))
{var inst_27991 = cljs.core.PersistentVector.EMPTY_NODE;var inst_27992 = [boundaryline_id];var inst_27993 = (new cljs.core.PersistentVector(null,1,(5),inst_27991,inst_27992,null));var inst_27994 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_27993,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_28002__$1 = state_28002;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28002__$1,(5),inst_27994);
} else
{if((state_val_28003 === (2)))
{var state_28002__$1 = state_28002;var statearr_28006_28017 = state_28002__$1;(statearr_28006_28017[(2)] = cached_bl);
(statearr_28006_28017[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28003 === (1)))
{var state_28002__$1 = state_28002;if(cljs.core.truth_(cached_bl))
{var statearr_28007_28018 = state_28002__$1;(statearr_28007_28018[(1)] = (2));
} else
{var statearr_28008_28019 = state_28002__$1;(statearr_28008_28019[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27988,map__27988__$1,tolerance))
;return ((function (switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27988,map__27988__$1,tolerance){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28012 = [null,null,null,null,null,null,null,null];(statearr_28012[(0)] = state_machine__9111__auto__);
(statearr_28012[(1)] = (1));
return statearr_28012;
});
var state_machine__9111__auto____1 = (function (state_28002){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28002);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28013){if((e28013 instanceof Object))
{var ex__9114__auto__ = e28013;var statearr_28014_28020 = state_28002;(statearr_28014_28020[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28002);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28013;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28021 = state_28002;
state_28002 = G__28021;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28002){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27988,map__27988__$1,tolerance))
})();var state__9127__auto__ = (function (){var statearr_28015 = f__9126__auto__.call(null);(statearr_28015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27988,map__27988__$1,tolerance))
);
return c__9125__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__27959 = null;if (arguments.length > 3) {
  p__27959 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__27959);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__28022){
var app_state = cljs.core.first(arglist__28022);
arglist__28022 = cljs.core.next(arglist__28022);
var boundarylines_path = cljs.core.first(arglist__28022);
arglist__28022 = cljs.core.next(arglist__28022);
var boundaryline_id = cljs.core.first(arglist__28022);
var p__27959 = cljs.core.rest(arglist__28022);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__27959);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_28042){var state_val_28043 = (state_28042[(1)]);if((state_val_28043 === (2)))
{var inst_28038 = (state_28042[(2)]);var inst_28039 = cljs.core.clj__GT_js.call(null,inst_28038);var inst_28040 = console.log(inst_28039);var state_28042__$1 = state_28042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28042__$1,inst_28040);
} else
{if((state_val_28043 === (1)))
{var state_28042__$1 = state_28042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28042__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28047 = [null,null,null,null,null,null,null];(statearr_28047[(0)] = state_machine__9111__auto__);
(statearr_28047[(1)] = (1));
return statearr_28047;
});
var state_machine__9111__auto____1 = (function (state_28042){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28042);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28048){if((e28048 instanceof Object))
{var ex__9114__auto__ = e28048;var statearr_28049_28051 = state_28042;(statearr_28049_28051[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28048;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28052 = state_28042;
state_28042 = G__28052;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28042){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_28050 = f__9126__auto__.call(null);(statearr_28050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28050;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__28053){var map__28069 = p__28053;var map__28069__$1 = ((cljs.core.seq_QMARK_.call(null,map__28069))?cljs.core.apply.call(null,cljs.core.hash_map,map__28069):map__28069);var bounds = cljs.core.get.call(null,map__28069__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__28069__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,comm,map__28069,map__28069__$1,bounds,boundaryline_ids){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,comm,map__28069,map__28069__$1,bounds,boundaryline_ids){
return (function (state_28074){var state_val_28075 = (state_28074[(1)]);if((state_val_28075 === (2)))
{var inst_28071 = (state_28074[(2)]);var inst_28072 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_28071);var state_28074__$1 = (function (){var statearr_28076 = state_28074;(statearr_28076[(7)] = inst_28072);
return statearr_28076;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28074__$1,true);
} else
{if((state_val_28075 === (1)))
{var state_28074__$1 = state_28074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28074__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto__,comm,map__28069,map__28069__$1,bounds,boundaryline_ids))
;return ((function (switch__9110__auto__,c__9125__auto__,comm,map__28069,map__28069__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_28080 = [null,null,null,null,null,null,null,null];(statearr_28080[(0)] = state_machine__9111__auto__);
(statearr_28080[(1)] = (1));
return statearr_28080;
});
var state_machine__9111__auto____1 = (function (state_28074){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28074);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28081){if((e28081 instanceof Object))
{var ex__9114__auto__ = e28081;var statearr_28082_28084 = state_28074;(statearr_28082_28084[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28081;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28085 = state_28074;
state_28074 = G__28085;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28074){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,comm,map__28069,map__28069__$1,bounds,boundaryline_ids))
})();var state__9127__auto__ = (function (){var statearr_28083 = f__9126__auto__.call(null);(statearr_28083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,comm,map__28069,map__28069__$1,bounds,boundaryline_ids))
);
return c__9125__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__28053 = null;if (arguments.length > 4) {
  p__28053 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__28053);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__28086){
var app_state = cljs.core.first(arglist__28086);
arglist__28086 = cljs.core.next(arglist__28086);
var boundarylines_path = cljs.core.first(arglist__28086);
arglist__28086 = cljs.core.next(arglist__28086);
var collection_id = cljs.core.first(arglist__28086);
arglist__28086 = cljs.core.next(arglist__28086);
var tolerance = cljs.core.first(arglist__28086);
var p__28053 = cljs.core.rest(arglist__28086);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__28053);
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__28087){var vec__28090 = p__28087;var map__28091 = cljs.core.nth.call(null,vec__28090,(0),null);var map__28091__$1 = ((cljs.core.seq_QMARK_.call(null,map__28091))?cljs.core.apply.call(null,cljs.core.hash_map,map__28091):map__28091);var indexes = cljs.core.get.call(null,map__28091__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__28090,map__28091,map__28091__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__28090,map__28091,map__28091__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__28087 = null;if (arguments.length > 3) {
  p__28087 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__28087);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__28092){
var app_state = cljs.core.first(arglist__28092);
arglist__28092 = cljs.core.next(arglist__28092);
var boundarylines_path = cljs.core.first(arglist__28092);
arglist__28092 = cljs.core.next(arglist__28092);
var boundaryline_id = cljs.core.first(arglist__28092);
var p__28087 = cljs.core.rest(arglist__28092);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__28087);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__28093){var map__28098 = p__28093;var map__28098__$1 = ((cljs.core.seq_QMARK_.call(null,map__28098))?cljs.core.apply.call(null,cljs.core.hash_map,map__28098):map__28098);var boundaryline_ids = cljs.core.get.call(null,map__28098__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28098,map__28098__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28098,map__28098__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28098,map__28098__$1,boundaryline_ids){
return (function (p__28099){var vec__28100 = p__28099;var blid = cljs.core.nth.call(null,vec__28100,(0),null);var vec__28101 = cljs.core.nth.call(null,vec__28100,(1),null);var tol = cljs.core.nth.call(null,vec__28101,(0),null);var bl = cljs.core.nth.call(null,vec__28101,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28098,map__28098__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__28093 = null;if (arguments.length > 5) {
  p__28093 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__28093);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__28102){
var app_state = cljs.core.first(arglist__28102);
arglist__28102 = cljs.core.next(arglist__28102);
var boundarylines_path = cljs.core.first(arglist__28102);
arglist__28102 = cljs.core.next(arglist__28102);
var collection_id = cljs.core.first(arglist__28102);
arglist__28102 = cljs.core.next(arglist__28102);
var bounds = cljs.core.first(arglist__28102);
arglist__28102 = cljs.core.next(arglist__28102);
var zoom = cljs.core.first(arglist__28102);
var p__28093 = cljs.core.rest(arglist__28102);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__28093);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__28107_28111 = cljs.core.seq.call(null,keys);var chunk__28108_28112 = null;var count__28109_28113 = (0);var i__28110_28114 = (0);while(true){
if((i__28110_28114 < count__28109_28113))
{var k_28115 = cljs.core._nth.call(null,chunk__28108_28112,i__28110_28114);var obj_28116 = (js_index[k_28115]);var geom_28117 = (obj_28116["geojson"]);var feature_28118 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28116["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28116["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28116["compact_name"])], null)], null));var __28119__$1 = (feature_28118["geometry"] = geom_28117);var __28120__$2 = ((feature_28118["properties"])["index_object"] = obj_28116);features.push(feature_28118);
{
var G__28121 = seq__28107_28111;
var G__28122 = chunk__28108_28112;
var G__28123 = count__28109_28113;
var G__28124 = (i__28110_28114 + (1));
seq__28107_28111 = G__28121;
chunk__28108_28112 = G__28122;
count__28109_28113 = G__28123;
i__28110_28114 = G__28124;
continue;
}
} else
{var temp__4126__auto___28125 = cljs.core.seq.call(null,seq__28107_28111);if(temp__4126__auto___28125)
{var seq__28107_28126__$1 = temp__4126__auto___28125;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28107_28126__$1))
{var c__4408__auto___28127 = cljs.core.chunk_first.call(null,seq__28107_28126__$1);{
var G__28128 = cljs.core.chunk_rest.call(null,seq__28107_28126__$1);
var G__28129 = c__4408__auto___28127;
var G__28130 = cljs.core.count.call(null,c__4408__auto___28127);
var G__28131 = (0);
seq__28107_28111 = G__28128;
chunk__28108_28112 = G__28129;
count__28109_28113 = G__28130;
i__28110_28114 = G__28131;
continue;
}
} else
{var k_28132 = cljs.core.first.call(null,seq__28107_28126__$1);var obj_28133 = (js_index[k_28132]);var geom_28134 = (obj_28133["geojson"]);var feature_28135 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28133["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28133["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28133["compact_name"])], null)], null));var __28136__$1 = (feature_28135["geometry"] = geom_28134);var __28137__$2 = ((feature_28135["properties"])["index_object"] = obj_28133);features.push(feature_28135);
{
var G__28138 = cljs.core.next.call(null,seq__28107_28126__$1);
var G__28139 = null;
var G__28140 = (0);
var G__28141 = (0);
seq__28107_28111 = G__28138;
chunk__28108_28112 = G__28139;
count__28109_28113 = G__28140;
i__28110_28114 = G__28141;
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
return (function (state_28187){var state_val_28188 = (state_28187[(1)]);if((state_val_28188 === (5)))
{var inst_28174 = (state_28187[(7)]);var inst_28184 = (state_28187[(2)]);var inst_28185 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_28174);var state_28187__$1 = (function (){var statearr_28189 = state_28187;(statearr_28189[(8)] = inst_28184);
return statearr_28189;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28187__$1,inst_28185);
} else
{if((state_val_28188 === (4)))
{var state_28187__$1 = state_28187;var statearr_28190_28202 = state_28187__$1;(statearr_28190_28202[(2)] = null);
(statearr_28190_28202[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28188 === (3)))
{var inst_28174 = (state_28187[(7)]);var inst_28181 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_28174);var state_28187__$1 = state_28187;var statearr_28191_28203 = state_28187__$1;(statearr_28191_28203[(2)] = inst_28181);
(statearr_28191_28203[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28188 === (2)))
{var inst_28174 = (state_28187[(7)]);var inst_28174__$1 = (state_28187[(2)]);var inst_28175 = (function (){var bl_coll_index = inst_28174__$1;return ((function (bl_coll_index,inst_28174,inst_28174__$1,state_val_28188,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_28174,inst_28174__$1,state_val_28188,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_28176 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_28175);var inst_28177 = cljs.core.deref.call(null,app_state);var inst_28178 = cljs.core.get_in.call(null,inst_28177,index_path);var inst_28179 = cljs.core._EQ_.call(null,inst_28178,inst_28174__$1);var state_28187__$1 = (function (){var statearr_28192 = state_28187;(statearr_28192[(9)] = inst_28176);
(statearr_28192[(7)] = inst_28174__$1);
return statearr_28192;
})();if(inst_28179)
{var statearr_28193_28204 = state_28187__$1;(statearr_28193_28204[(1)] = (3));
} else
{var statearr_28194_28205 = state_28187__$1;(statearr_28194_28205[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28188 === (1)))
{var inst_28172 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_28187__$1 = state_28187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28187__$1,(2),inst_28172);
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
var state_machine__9111__auto____0 = (function (){var statearr_28198 = [null,null,null,null,null,null,null,null,null,null];(statearr_28198[(0)] = state_machine__9111__auto__);
(statearr_28198[(1)] = (1));
return statearr_28198;
});
var state_machine__9111__auto____1 = (function (state_28187){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28187);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28199){if((e28199 instanceof Object))
{var ex__9114__auto__ = e28199;var statearr_28200_28206 = state_28187;(statearr_28200_28206[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28187);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28199;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28207 = state_28187;
state_28187 = G__28207;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28187){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__9127__auto__ = (function (){var statearr_28201 = f__9126__auto__.call(null);(statearr_28201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28201;
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
