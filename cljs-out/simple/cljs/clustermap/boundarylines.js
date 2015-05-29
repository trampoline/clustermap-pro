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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__22944){var vec__22945 = p__22944;var z = cljs.core.nth.call(null,vec__22945,(0),null);var t = cljs.core.nth.call(null,vec__22945,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
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
return (function iter__22950(s__22951){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__22951__$1 = s__22951;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22951__$1);if(temp__4126__auto__)
{var s__22951__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22951__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22951__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22953 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22952 = (0);while(true){
if((i__22952 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__22952);cljs.core.chunk_append.call(null,b__22953,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__22954 = (i__22952 + (1));
i__22952 = G__22954;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22953),iter__22950.call(null,cljs.core.chunk_rest.call(null,s__22951__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22953),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__22951__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__22950.call(null,cljs.core.rest.call(null,s__22951__$2)));
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__22955){var map__22971 = p__22955;var map__22971__$1 = ((cljs.core.seq_QMARK_.call(null,map__22971))?cljs.core.apply.call(null,cljs.core.hash_map,map__22971):map__22971);var tolerance = cljs.core.get.call(null,map__22971__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__22971__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__22971__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,comm,map__22971,map__22971__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,comm,map__22971,map__22971__$1,tolerance,bounds,boundaryline_ids){
return (function (state_22976){var state_val_22977 = (state_22976[(1)]);if((state_val_22977 === (2)))
{var inst_22973 = (state_22976[(2)]);var inst_22974 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_22973);var state_22976__$1 = (function (){var statearr_22978 = state_22976;(statearr_22978[(7)] = inst_22974);
return statearr_22978;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22976__$1,true);
} else
{if((state_val_22977 === (1)))
{var state_22976__$1 = state_22976;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22976__$1,(2),comm);
} else
{return null;
}
}
});})(c__11297__auto__,comm,map__22971,map__22971__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__11241__auto__,c__11297__auto__,comm,map__22971,map__22971__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_22982 = [null,null,null,null,null,null,null,null];(statearr_22982[(0)] = state_machine__11242__auto__);
(statearr_22982[(1)] = (1));
return statearr_22982;
});
var state_machine__11242__auto____1 = (function (state_22976){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_22976);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e22983){if((e22983 instanceof Object))
{var ex__11245__auto__ = e22983;var statearr_22984_22986 = state_22976;(statearr_22984_22986[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22976);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22983;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22987 = state_22976;
state_22976 = G__22987;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_22976){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_22976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,comm,map__22971,map__22971__$1,tolerance,bounds,boundaryline_ids))
})();var state__11299__auto__ = (function (){var statearr_22985 = f__11298__auto__.call(null);(statearr_22985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_22985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,comm,map__22971,map__22971__$1,tolerance,bounds,boundaryline_ids))
);
return c__11297__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__22955 = null;if (arguments.length > 2) {
  p__22955 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__22955);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__22988){
var app_state = cljs.core.first(arglist__22988);
arglist__22988 = cljs.core.next(arglist__22988);
var boundarylines_path = cljs.core.first(arglist__22988);
var p__22955 = cljs.core.rest(arglist__22988);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__22955);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__22989){var map__23018 = p__22989;var map__23018__$1 = ((cljs.core.seq_QMARK_.call(null,map__23018))?cljs.core.apply.call(null,cljs.core.hash_map,map__23018):map__23018);var tolerance = cljs.core.get.call(null,map__23018__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23018,map__23018__$1,tolerance){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23018,map__23018__$1,tolerance){
return (function (state_23032){var state_val_23033 = (state_23032[(1)]);if((state_val_23033 === (5)))
{var inst_23026 = (state_23032[(2)]);var inst_23027 = cljs.core.deref.call(null,app_state);var inst_23028 = cljs.core.get_in.call(null,inst_23027,cache_path);var state_23032__$1 = (function (){var statearr_23034 = state_23032;(statearr_23034[(7)] = inst_23026);
return statearr_23034;
})();var statearr_23035_23046 = state_23032__$1;(statearr_23035_23046[(2)] = inst_23028);
(statearr_23035_23046[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23033 === (4)))
{var inst_23030 = (state_23032[(2)]);var state_23032__$1 = state_23032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23032__$1,inst_23030);
} else
{if((state_val_23033 === (3)))
{var inst_23021 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23022 = [boundaryline_id];var inst_23023 = (new cljs.core.PersistentVector(null,1,(5),inst_23021,inst_23022,null));var inst_23024 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_23023,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_23032__$1 = state_23032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23032__$1,(5),inst_23024);
} else
{if((state_val_23033 === (2)))
{var state_23032__$1 = state_23032;var statearr_23036_23047 = state_23032__$1;(statearr_23036_23047[(2)] = cached_bl);
(statearr_23036_23047[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23033 === (1)))
{var state_23032__$1 = state_23032;if(cljs.core.truth_(cached_bl))
{var statearr_23037_23048 = state_23032__$1;(statearr_23037_23048[(1)] = (2));
} else
{var statearr_23038_23049 = state_23032__$1;(statearr_23038_23049[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23018,map__23018__$1,tolerance))
;return ((function (switch__11241__auto__,c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23018,map__23018__$1,tolerance){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_23042 = [null,null,null,null,null,null,null,null];(statearr_23042[(0)] = state_machine__11242__auto__);
(statearr_23042[(1)] = (1));
return statearr_23042;
});
var state_machine__11242__auto____1 = (function (state_23032){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_23032);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e23043){if((e23043 instanceof Object))
{var ex__11245__auto__ = e23043;var statearr_23044_23050 = state_23032;(statearr_23044_23050[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23032);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23043;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23051 = state_23032;
state_23032 = G__23051;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_23032){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_23032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23018,map__23018__$1,tolerance))
})();var state__11299__auto__ = (function (){var statearr_23045 = f__11298__auto__.call(null);(statearr_23045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_23045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23018,map__23018__$1,tolerance))
);
return c__11297__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__22989 = null;if (arguments.length > 3) {
  p__22989 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__22989);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__23052){
var app_state = cljs.core.first(arglist__23052);
arglist__23052 = cljs.core.next(arglist__23052);
var boundarylines_path = cljs.core.first(arglist__23052);
arglist__23052 = cljs.core.next(arglist__23052);
var boundaryline_id = cljs.core.first(arglist__23052);
var p__22989 = cljs.core.rest(arglist__23052);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__22989);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_23072){var state_val_23073 = (state_23072[(1)]);if((state_val_23073 === (2)))
{var inst_23068 = (state_23072[(2)]);var inst_23069 = cljs.core.clj__GT_js.call(null,inst_23068);var inst_23070 = console.log(inst_23069);var state_23072__$1 = state_23072;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23072__$1,inst_23070);
} else
{if((state_val_23073 === (1)))
{var state_23072__$1 = state_23072;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23072__$1,(2),ch);
} else
{return null;
}
}
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_23077 = [null,null,null,null,null,null,null];(statearr_23077[(0)] = state_machine__11242__auto__);
(statearr_23077[(1)] = (1));
return statearr_23077;
});
var state_machine__11242__auto____1 = (function (state_23072){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_23072);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e23078){if((e23078 instanceof Object))
{var ex__11245__auto__ = e23078;var statearr_23079_23081 = state_23072;(statearr_23079_23081[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23072);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23078;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23082 = state_23072;
state_23072 = G__23082;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_23072){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_23072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_23080 = f__11298__auto__.call(null);(statearr_23080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_23080;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__23083){var map__23099 = p__23083;var map__23099__$1 = ((cljs.core.seq_QMARK_.call(null,map__23099))?cljs.core.apply.call(null,cljs.core.hash_map,map__23099):map__23099);var bounds = cljs.core.get.call(null,map__23099__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__23099__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,comm,map__23099,map__23099__$1,bounds,boundaryline_ids){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,comm,map__23099,map__23099__$1,bounds,boundaryline_ids){
return (function (state_23104){var state_val_23105 = (state_23104[(1)]);if((state_val_23105 === (2)))
{var inst_23101 = (state_23104[(2)]);var inst_23102 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_23101);var state_23104__$1 = (function (){var statearr_23106 = state_23104;(statearr_23106[(7)] = inst_23102);
return statearr_23106;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23104__$1,true);
} else
{if((state_val_23105 === (1)))
{var state_23104__$1 = state_23104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23104__$1,(2),comm);
} else
{return null;
}
}
});})(c__11297__auto__,comm,map__23099,map__23099__$1,bounds,boundaryline_ids))
;return ((function (switch__11241__auto__,c__11297__auto__,comm,map__23099,map__23099__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_23110 = [null,null,null,null,null,null,null,null];(statearr_23110[(0)] = state_machine__11242__auto__);
(statearr_23110[(1)] = (1));
return statearr_23110;
});
var state_machine__11242__auto____1 = (function (state_23104){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_23104);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e23111){if((e23111 instanceof Object))
{var ex__11245__auto__ = e23111;var statearr_23112_23114 = state_23104;(statearr_23112_23114[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23104);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23111;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23115 = state_23104;
state_23104 = G__23115;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_23104){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_23104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,comm,map__23099,map__23099__$1,bounds,boundaryline_ids))
})();var state__11299__auto__ = (function (){var statearr_23113 = f__11298__auto__.call(null);(statearr_23113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_23113;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,comm,map__23099,map__23099__$1,bounds,boundaryline_ids))
);
return c__11297__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__23083 = null;if (arguments.length > 4) {
  p__23083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__23083);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__23116){
var app_state = cljs.core.first(arglist__23116);
arglist__23116 = cljs.core.next(arglist__23116);
var boundarylines_path = cljs.core.first(arglist__23116);
arglist__23116 = cljs.core.next(arglist__23116);
var collection_id = cljs.core.first(arglist__23116);
arglist__23116 = cljs.core.next(arglist__23116);
var tolerance = cljs.core.first(arglist__23116);
var p__23083 = cljs.core.rest(arglist__23116);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__23083);
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__23117){var vec__23120 = p__23117;var map__23121 = cljs.core.nth.call(null,vec__23120,(0),null);var map__23121__$1 = ((cljs.core.seq_QMARK_.call(null,map__23121))?cljs.core.apply.call(null,cljs.core.hash_map,map__23121):map__23121);var indexes = cljs.core.get.call(null,map__23121__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__23120,map__23121,map__23121__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__23120,map__23121,map__23121__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__23117 = null;if (arguments.length > 3) {
  p__23117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__23117);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__23122){
var app_state = cljs.core.first(arglist__23122);
arglist__23122 = cljs.core.next(arglist__23122);
var boundarylines_path = cljs.core.first(arglist__23122);
arglist__23122 = cljs.core.next(arglist__23122);
var boundaryline_id = cljs.core.first(arglist__23122);
var p__23117 = cljs.core.rest(arglist__23122);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__23117);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__23123){var map__23128 = p__23123;var map__23128__$1 = ((cljs.core.seq_QMARK_.call(null,map__23128))?cljs.core.apply.call(null,cljs.core.hash_map,map__23128):map__23128);var boundaryline_ids = cljs.core.get.call(null,map__23128__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__23128,map__23128__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__23128,map__23128__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__23128,map__23128__$1,boundaryline_ids){
return (function (p__23129){var vec__23130 = p__23129;var blid = cljs.core.nth.call(null,vec__23130,(0),null);var vec__23131 = cljs.core.nth.call(null,vec__23130,(1),null);var tol = cljs.core.nth.call(null,vec__23131,(0),null);var bl = cljs.core.nth.call(null,vec__23131,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__23128,map__23128__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__23123 = null;if (arguments.length > 5) {
  p__23123 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__23123);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__23132){
var app_state = cljs.core.first(arglist__23132);
arglist__23132 = cljs.core.next(arglist__23132);
var boundarylines_path = cljs.core.first(arglist__23132);
arglist__23132 = cljs.core.next(arglist__23132);
var collection_id = cljs.core.first(arglist__23132);
arglist__23132 = cljs.core.next(arglist__23132);
var bounds = cljs.core.first(arglist__23132);
arglist__23132 = cljs.core.next(arglist__23132);
var zoom = cljs.core.first(arglist__23132);
var p__23123 = cljs.core.rest(arglist__23132);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__23123);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23137_23141 = cljs.core.seq.call(null,keys);var chunk__23138_23142 = null;var count__23139_23143 = (0);var i__23140_23144 = (0);while(true){
if((i__23140_23144 < count__23139_23143))
{var k_23145 = cljs.core._nth.call(null,chunk__23138_23142,i__23140_23144);var obj_23146 = (js_index[k_23145]);var geom_23147 = (obj_23146["geojson"]);var feature_23148 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_23146["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_23146["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_23146["compact_name"])], null)], null));var __23149__$1 = (feature_23148["geometry"] = geom_23147);var __23150__$2 = ((feature_23148["properties"])["index_object"] = obj_23146);features.push(feature_23148);
{
var G__23151 = seq__23137_23141;
var G__23152 = chunk__23138_23142;
var G__23153 = count__23139_23143;
var G__23154 = (i__23140_23144 + (1));
seq__23137_23141 = G__23151;
chunk__23138_23142 = G__23152;
count__23139_23143 = G__23153;
i__23140_23144 = G__23154;
continue;
}
} else
{var temp__4126__auto___23155 = cljs.core.seq.call(null,seq__23137_23141);if(temp__4126__auto___23155)
{var seq__23137_23156__$1 = temp__4126__auto___23155;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23137_23156__$1))
{var c__4408__auto___23157 = cljs.core.chunk_first.call(null,seq__23137_23156__$1);{
var G__23158 = cljs.core.chunk_rest.call(null,seq__23137_23156__$1);
var G__23159 = c__4408__auto___23157;
var G__23160 = cljs.core.count.call(null,c__4408__auto___23157);
var G__23161 = (0);
seq__23137_23141 = G__23158;
chunk__23138_23142 = G__23159;
count__23139_23143 = G__23160;
i__23140_23144 = G__23161;
continue;
}
} else
{var k_23162 = cljs.core.first.call(null,seq__23137_23156__$1);var obj_23163 = (js_index[k_23162]);var geom_23164 = (obj_23163["geojson"]);var feature_23165 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_23163["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_23163["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_23163["compact_name"])], null)], null));var __23166__$1 = (feature_23165["geometry"] = geom_23164);var __23167__$2 = ((feature_23165["properties"])["index_object"] = obj_23163);features.push(feature_23165);
{
var G__23168 = cljs.core.next.call(null,seq__23137_23156__$1);
var G__23169 = null;
var G__23170 = (0);
var G__23171 = (0);
seq__23137_23141 = G__23168;
chunk__23138_23142 = G__23169;
count__23139_23143 = G__23170;
i__23140_23144 = G__23171;
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
return (function (state_23217){var state_val_23218 = (state_23217[(1)]);if((state_val_23218 === (5)))
{var inst_23204 = (state_23217[(7)]);var inst_23214 = (state_23217[(2)]);var inst_23215 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_23204);var state_23217__$1 = (function (){var statearr_23219 = state_23217;(statearr_23219[(8)] = inst_23214);
return statearr_23219;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23217__$1,inst_23215);
} else
{if((state_val_23218 === (4)))
{var state_23217__$1 = state_23217;var statearr_23220_23232 = state_23217__$1;(statearr_23220_23232[(2)] = null);
(statearr_23220_23232[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23218 === (3)))
{var inst_23204 = (state_23217[(7)]);var inst_23211 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_23204);var state_23217__$1 = state_23217;var statearr_23221_23233 = state_23217__$1;(statearr_23221_23233[(2)] = inst_23211);
(statearr_23221_23233[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23218 === (2)))
{var inst_23204 = (state_23217[(7)]);var inst_23204__$1 = (state_23217[(2)]);var inst_23205 = (function (){var bl_coll_index = inst_23204__$1;return ((function (bl_coll_index,inst_23204,inst_23204__$1,state_val_23218,c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_23204,inst_23204__$1,state_val_23218,c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_23206 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_23205);var inst_23207 = cljs.core.deref.call(null,app_state);var inst_23208 = cljs.core.get_in.call(null,inst_23207,index_path);var inst_23209 = cljs.core._EQ_.call(null,inst_23208,inst_23204__$1);var state_23217__$1 = (function (){var statearr_23222 = state_23217;(statearr_23222[(7)] = inst_23204__$1);
(statearr_23222[(9)] = inst_23206);
return statearr_23222;
})();if(inst_23209)
{var statearr_23223_23234 = state_23217__$1;(statearr_23223_23234[(1)] = (3));
} else
{var statearr_23224_23235 = state_23217__$1;(statearr_23224_23235[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23218 === (1)))
{var inst_23202 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_23217__$1 = state_23217;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23217__$1,(2),inst_23202);
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
var state_machine__11242__auto____0 = (function (){var statearr_23228 = [null,null,null,null,null,null,null,null,null,null];(statearr_23228[(0)] = state_machine__11242__auto__);
(statearr_23228[(1)] = (1));
return statearr_23228;
});
var state_machine__11242__auto____1 = (function (state_23217){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_23217);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e23229){if((e23229 instanceof Object))
{var ex__11245__auto__ = e23229;var statearr_23230_23236 = state_23217;(statearr_23230_23236[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23217);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23229;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23237 = state_23217;
state_23217 = G__23237;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_23217){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_23217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__11299__auto__ = (function (){var statearr_23231 = f__11298__auto__.call(null);(statearr_23231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_23231;
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
