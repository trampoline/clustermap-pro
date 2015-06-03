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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__22875){var vec__22876 = p__22875;var z = cljs.core.nth.call(null,vec__22876,(0),null);var t = cljs.core.nth.call(null,vec__22876,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
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
return (function iter__22881(s__22882){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__22882__$1 = s__22882;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22882__$1);if(temp__4126__auto__)
{var s__22882__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22882__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22882__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22884 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22883 = (0);while(true){
if((i__22883 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__22883);cljs.core.chunk_append.call(null,b__22884,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__22885 = (i__22883 + (1));
i__22883 = G__22885;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22884),iter__22881.call(null,cljs.core.chunk_rest.call(null,s__22882__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22884),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__22882__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__22881.call(null,cljs.core.rest.call(null,s__22882__$2)));
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__22886){var map__22902 = p__22886;var map__22902__$1 = ((cljs.core.seq_QMARK_.call(null,map__22902))?cljs.core.apply.call(null,cljs.core.hash_map,map__22902):map__22902);var tolerance = cljs.core.get.call(null,map__22902__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__22902__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__22902__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,comm,map__22902,map__22902__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,comm,map__22902,map__22902__$1,tolerance,bounds,boundaryline_ids){
return (function (state_22907){var state_val_22908 = (state_22907[(1)]);if((state_val_22908 === (2)))
{var inst_22904 = (state_22907[(2)]);var inst_22905 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_22904);var state_22907__$1 = (function (){var statearr_22909 = state_22907;(statearr_22909[(7)] = inst_22905);
return statearr_22909;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22907__$1,true);
} else
{if((state_val_22908 === (1)))
{var state_22907__$1 = state_22907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22907__$1,(2),comm);
} else
{return null;
}
}
});})(c__11297__auto__,comm,map__22902,map__22902__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__11241__auto__,c__11297__auto__,comm,map__22902,map__22902__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_22913 = [null,null,null,null,null,null,null,null];(statearr_22913[(0)] = state_machine__11242__auto__);
(statearr_22913[(1)] = (1));
return statearr_22913;
});
var state_machine__11242__auto____1 = (function (state_22907){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_22907);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e22914){if((e22914 instanceof Object))
{var ex__11245__auto__ = e22914;var statearr_22915_22917 = state_22907;(statearr_22915_22917[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22907);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22914;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22918 = state_22907;
state_22907 = G__22918;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_22907){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_22907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,comm,map__22902,map__22902__$1,tolerance,bounds,boundaryline_ids))
})();var state__11299__auto__ = (function (){var statearr_22916 = f__11298__auto__.call(null);(statearr_22916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_22916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,comm,map__22902,map__22902__$1,tolerance,bounds,boundaryline_ids))
);
return c__11297__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__22886 = null;if (arguments.length > 2) {
  p__22886 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__22886);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__22919){
var app_state = cljs.core.first(arglist__22919);
arglist__22919 = cljs.core.next(arglist__22919);
var boundarylines_path = cljs.core.first(arglist__22919);
var p__22886 = cljs.core.rest(arglist__22919);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__22886);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__22920){var map__22949 = p__22920;var map__22949__$1 = ((cljs.core.seq_QMARK_.call(null,map__22949))?cljs.core.apply.call(null,cljs.core.hash_map,map__22949):map__22949);var tolerance = cljs.core.get.call(null,map__22949__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__22949,map__22949__$1,tolerance){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__22949,map__22949__$1,tolerance){
return (function (state_22963){var state_val_22964 = (state_22963[(1)]);if((state_val_22964 === (5)))
{var inst_22957 = (state_22963[(2)]);var inst_22958 = cljs.core.deref.call(null,app_state);var inst_22959 = cljs.core.get_in.call(null,inst_22958,cache_path);var state_22963__$1 = (function (){var statearr_22965 = state_22963;(statearr_22965[(7)] = inst_22957);
return statearr_22965;
})();var statearr_22966_22977 = state_22963__$1;(statearr_22966_22977[(2)] = inst_22959);
(statearr_22966_22977[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22964 === (4)))
{var inst_22961 = (state_22963[(2)]);var state_22963__$1 = state_22963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22963__$1,inst_22961);
} else
{if((state_val_22964 === (3)))
{var inst_22952 = cljs.core.PersistentVector.EMPTY_NODE;var inst_22953 = [boundaryline_id];var inst_22954 = (new cljs.core.PersistentVector(null,1,(5),inst_22952,inst_22953,null));var inst_22955 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_22954,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_22963__$1 = state_22963;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22963__$1,(5),inst_22955);
} else
{if((state_val_22964 === (2)))
{var state_22963__$1 = state_22963;var statearr_22967_22978 = state_22963__$1;(statearr_22967_22978[(2)] = cached_bl);
(statearr_22967_22978[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22964 === (1)))
{var state_22963__$1 = state_22963;if(cljs.core.truth_(cached_bl))
{var statearr_22968_22979 = state_22963__$1;(statearr_22968_22979[(1)] = (2));
} else
{var statearr_22969_22980 = state_22963__$1;(statearr_22969_22980[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__22949,map__22949__$1,tolerance))
;return ((function (switch__11241__auto__,c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__22949,map__22949__$1,tolerance){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_22973 = [null,null,null,null,null,null,null,null];(statearr_22973[(0)] = state_machine__11242__auto__);
(statearr_22973[(1)] = (1));
return statearr_22973;
});
var state_machine__11242__auto____1 = (function (state_22963){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_22963);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e22974){if((e22974 instanceof Object))
{var ex__11245__auto__ = e22974;var statearr_22975_22981 = state_22963;(statearr_22975_22981[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22963);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22974;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22982 = state_22963;
state_22963 = G__22982;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_22963){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_22963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__22949,map__22949__$1,tolerance))
})();var state__11299__auto__ = (function (){var statearr_22976 = f__11298__auto__.call(null);(statearr_22976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_22976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__22949,map__22949__$1,tolerance))
);
return c__11297__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__22920 = null;if (arguments.length > 3) {
  p__22920 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__22920);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__22983){
var app_state = cljs.core.first(arglist__22983);
arglist__22983 = cljs.core.next(arglist__22983);
var boundarylines_path = cljs.core.first(arglist__22983);
arglist__22983 = cljs.core.next(arglist__22983);
var boundaryline_id = cljs.core.first(arglist__22983);
var p__22920 = cljs.core.rest(arglist__22983);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__22920);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_23003){var state_val_23004 = (state_23003[(1)]);if((state_val_23004 === (2)))
{var inst_22999 = (state_23003[(2)]);var inst_23000 = cljs.core.clj__GT_js.call(null,inst_22999);var inst_23001 = console.log(inst_23000);var state_23003__$1 = state_23003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23003__$1,inst_23001);
} else
{if((state_val_23004 === (1)))
{var state_23003__$1 = state_23003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23003__$1,(2),ch);
} else
{return null;
}
}
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_23008 = [null,null,null,null,null,null,null];(statearr_23008[(0)] = state_machine__11242__auto__);
(statearr_23008[(1)] = (1));
return statearr_23008;
});
var state_machine__11242__auto____1 = (function (state_23003){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_23003);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e23009){if((e23009 instanceof Object))
{var ex__11245__auto__ = e23009;var statearr_23010_23012 = state_23003;(statearr_23010_23012[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23009;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23013 = state_23003;
state_23003 = G__23013;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_23003){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_23003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_23011 = f__11298__auto__.call(null);(statearr_23011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_23011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
});
/**
* fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
* general caches. returns a single value true on the go-block channel when complete
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundarylines = (function() { 
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__23014){var map__23030 = p__23014;var map__23030__$1 = ((cljs.core.seq_QMARK_.call(null,map__23030))?cljs.core.apply.call(null,cljs.core.hash_map,map__23030):map__23030);var bounds = cljs.core.get.call(null,map__23030__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__23030__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,comm,map__23030,map__23030__$1,bounds,boundaryline_ids){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,comm,map__23030,map__23030__$1,bounds,boundaryline_ids){
return (function (state_23035){var state_val_23036 = (state_23035[(1)]);if((state_val_23036 === (2)))
{var inst_23032 = (state_23035[(2)]);var inst_23033 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_23032);var state_23035__$1 = (function (){var statearr_23037 = state_23035;(statearr_23037[(7)] = inst_23033);
return statearr_23037;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23035__$1,true);
} else
{if((state_val_23036 === (1)))
{var state_23035__$1 = state_23035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23035__$1,(2),comm);
} else
{return null;
}
}
});})(c__11297__auto__,comm,map__23030,map__23030__$1,bounds,boundaryline_ids))
;return ((function (switch__11241__auto__,c__11297__auto__,comm,map__23030,map__23030__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_23041 = [null,null,null,null,null,null,null,null];(statearr_23041[(0)] = state_machine__11242__auto__);
(statearr_23041[(1)] = (1));
return statearr_23041;
});
var state_machine__11242__auto____1 = (function (state_23035){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_23035);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e23042){if((e23042 instanceof Object))
{var ex__11245__auto__ = e23042;var statearr_23043_23045 = state_23035;(statearr_23043_23045[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23035);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23042;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23046 = state_23035;
state_23035 = G__23046;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_23035){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_23035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,comm,map__23030,map__23030__$1,bounds,boundaryline_ids))
})();var state__11299__auto__ = (function (){var statearr_23044 = f__11298__auto__.call(null);(statearr_23044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_23044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,comm,map__23030,map__23030__$1,bounds,boundaryline_ids))
);
return c__11297__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__23014 = null;if (arguments.length > 4) {
  p__23014 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__23014);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__23047){
var app_state = cljs.core.first(arglist__23047);
arglist__23047 = cljs.core.next(arglist__23047);
var boundarylines_path = cljs.core.first(arglist__23047);
arglist__23047 = cljs.core.next(arglist__23047);
var collection_id = cljs.core.first(arglist__23047);
arglist__23047 = cljs.core.next(arglist__23047);
var tolerance = cljs.core.first(arglist__23047);
var p__23014 = cljs.core.rest(arglist__23047);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__23014);
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__23048){var vec__23051 = p__23048;var map__23052 = cljs.core.nth.call(null,vec__23051,(0),null);var map__23052__$1 = ((cljs.core.seq_QMARK_.call(null,map__23052))?cljs.core.apply.call(null,cljs.core.hash_map,map__23052):map__23052);var indexes = cljs.core.get.call(null,map__23052__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__23051,map__23052,map__23052__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__23051,map__23052,map__23052__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__23048 = null;if (arguments.length > 3) {
  p__23048 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__23048);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__23053){
var app_state = cljs.core.first(arglist__23053);
arglist__23053 = cljs.core.next(arglist__23053);
var boundarylines_path = cljs.core.first(arglist__23053);
arglist__23053 = cljs.core.next(arglist__23053);
var boundaryline_id = cljs.core.first(arglist__23053);
var p__23048 = cljs.core.rest(arglist__23053);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__23048);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__23054){var map__23059 = p__23054;var map__23059__$1 = ((cljs.core.seq_QMARK_.call(null,map__23059))?cljs.core.apply.call(null,cljs.core.hash_map,map__23059):map__23059);var boundaryline_ids = cljs.core.get.call(null,map__23059__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__23059,map__23059__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__23059,map__23059__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__23059,map__23059__$1,boundaryline_ids){
return (function (p__23060){var vec__23061 = p__23060;var blid = cljs.core.nth.call(null,vec__23061,(0),null);var vec__23062 = cljs.core.nth.call(null,vec__23061,(1),null);var tol = cljs.core.nth.call(null,vec__23062,(0),null);var bl = cljs.core.nth.call(null,vec__23062,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__23059,map__23059__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__23054 = null;if (arguments.length > 5) {
  p__23054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__23054);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__23063){
var app_state = cljs.core.first(arglist__23063);
arglist__23063 = cljs.core.next(arglist__23063);
var boundarylines_path = cljs.core.first(arglist__23063);
arglist__23063 = cljs.core.next(arglist__23063);
var collection_id = cljs.core.first(arglist__23063);
arglist__23063 = cljs.core.next(arglist__23063);
var bounds = cljs.core.first(arglist__23063);
arglist__23063 = cljs.core.next(arglist__23063);
var zoom = cljs.core.first(arglist__23063);
var p__23054 = cljs.core.rest(arglist__23063);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__23054);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23068_23072 = cljs.core.seq.call(null,keys);var chunk__23069_23073 = null;var count__23070_23074 = (0);var i__23071_23075 = (0);while(true){
if((i__23071_23075 < count__23070_23074))
{var k_23076 = cljs.core._nth.call(null,chunk__23069_23073,i__23071_23075);var obj_23077 = (js_index[k_23076]);var geom_23078 = (obj_23077["geojson"]);var feature_23079 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_23077["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_23077["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_23077["compact_name"])], null)], null));var __23080__$1 = (feature_23079["geometry"] = geom_23078);var __23081__$2 = ((feature_23079["properties"])["index_object"] = obj_23077);features.push(feature_23079);
{
var G__23082 = seq__23068_23072;
var G__23083 = chunk__23069_23073;
var G__23084 = count__23070_23074;
var G__23085 = (i__23071_23075 + (1));
seq__23068_23072 = G__23082;
chunk__23069_23073 = G__23083;
count__23070_23074 = G__23084;
i__23071_23075 = G__23085;
continue;
}
} else
{var temp__4126__auto___23086 = cljs.core.seq.call(null,seq__23068_23072);if(temp__4126__auto___23086)
{var seq__23068_23087__$1 = temp__4126__auto___23086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23068_23087__$1))
{var c__4408__auto___23088 = cljs.core.chunk_first.call(null,seq__23068_23087__$1);{
var G__23089 = cljs.core.chunk_rest.call(null,seq__23068_23087__$1);
var G__23090 = c__4408__auto___23088;
var G__23091 = cljs.core.count.call(null,c__4408__auto___23088);
var G__23092 = (0);
seq__23068_23072 = G__23089;
chunk__23069_23073 = G__23090;
count__23070_23074 = G__23091;
i__23071_23075 = G__23092;
continue;
}
} else
{var k_23093 = cljs.core.first.call(null,seq__23068_23087__$1);var obj_23094 = (js_index[k_23093]);var geom_23095 = (obj_23094["geojson"]);var feature_23096 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_23094["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_23094["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_23094["compact_name"])], null)], null));var __23097__$1 = (feature_23096["geometry"] = geom_23095);var __23098__$2 = ((feature_23096["properties"])["index_object"] = obj_23094);features.push(feature_23096);
{
var G__23099 = cljs.core.next.call(null,seq__23068_23087__$1);
var G__23100 = null;
var G__23101 = (0);
var G__23102 = (0);
seq__23068_23072 = G__23099;
chunk__23069_23073 = G__23100;
count__23070_23074 = G__23101;
i__23071_23075 = G__23102;
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
{var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_23148){var state_val_23149 = (state_23148[(1)]);if((state_val_23149 === (5)))
{var inst_23135 = (state_23148[(7)]);var inst_23145 = (state_23148[(2)]);var inst_23146 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_23135);var state_23148__$1 = (function (){var statearr_23150 = state_23148;(statearr_23150[(8)] = inst_23145);
return statearr_23150;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23148__$1,inst_23146);
} else
{if((state_val_23149 === (4)))
{var state_23148__$1 = state_23148;var statearr_23151_23163 = state_23148__$1;(statearr_23151_23163[(2)] = null);
(statearr_23151_23163[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23149 === (3)))
{var inst_23135 = (state_23148[(7)]);var inst_23142 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_23135);var state_23148__$1 = state_23148;var statearr_23152_23164 = state_23148__$1;(statearr_23152_23164[(2)] = inst_23142);
(statearr_23152_23164[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23149 === (2)))
{var inst_23135 = (state_23148[(7)]);var inst_23135__$1 = (state_23148[(2)]);var inst_23136 = (function (){var bl_coll_index = inst_23135__$1;return ((function (bl_coll_index,inst_23135,inst_23135__$1,state_val_23149,c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_23135,inst_23135__$1,state_val_23149,c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_23137 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_23136);var inst_23138 = cljs.core.deref.call(null,app_state);var inst_23139 = cljs.core.get_in.call(null,inst_23138,index_path);var inst_23140 = cljs.core._EQ_.call(null,inst_23139,inst_23135__$1);var state_23148__$1 = (function (){var statearr_23153 = state_23148;(statearr_23153[(9)] = inst_23137);
(statearr_23153[(7)] = inst_23135__$1);
return statearr_23153;
})();if(inst_23140)
{var statearr_23154_23165 = state_23148__$1;(statearr_23154_23165[(1)] = (3));
} else
{var statearr_23155_23166 = state_23148__$1;(statearr_23155_23166[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23149 === (1)))
{var inst_23133 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_23148__$1 = state_23148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23148__$1,(2),inst_23133);
} else
{return null;
}
}
}
}
}
});})(c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__11241__auto__,c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_23159 = [null,null,null,null,null,null,null,null,null,null];(statearr_23159[(0)] = state_machine__11242__auto__);
(statearr_23159[(1)] = (1));
return statearr_23159;
});
var state_machine__11242__auto____1 = (function (state_23148){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_23148);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e23160){if((e23160 instanceof Object))
{var ex__11245__auto__ = e23160;var statearr_23161_23167 = state_23148;(statearr_23161_23167[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23148);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23160;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23168 = state_23148;
state_23148 = G__23168;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_23148){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_23148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__11299__auto__ = (function (){var statearr_23162 = f__11298__auto__.call(null);(statearr_23162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_23162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__11297__auto__;
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
