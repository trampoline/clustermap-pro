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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__22942){var vec__22943 = p__22942;var z = cljs.core.nth.call(null,vec__22943,(0),null);var t = cljs.core.nth.call(null,vec__22943,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
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
return (function iter__22948(s__22949){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__22949__$1 = s__22949;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22949__$1);if(temp__4126__auto__)
{var s__22949__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22949__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__22949__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__22951 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__22950 = (0);while(true){
if((i__22950 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__22950);cljs.core.chunk_append.call(null,b__22951,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__22952 = (i__22950 + (1));
i__22950 = G__22952;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22951),iter__22948.call(null,cljs.core.chunk_rest.call(null,s__22949__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22951),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__22949__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__22948.call(null,cljs.core.rest.call(null,s__22949__$2)));
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__22953){var map__22969 = p__22953;var map__22969__$1 = ((cljs.core.seq_QMARK_.call(null,map__22969))?cljs.core.apply.call(null,cljs.core.hash_map,map__22969):map__22969);var tolerance = cljs.core.get.call(null,map__22969__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__22969__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__22969__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,comm,map__22969,map__22969__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,comm,map__22969,map__22969__$1,tolerance,bounds,boundaryline_ids){
return (function (state_22974){var state_val_22975 = (state_22974[(1)]);if((state_val_22975 === (2)))
{var inst_22971 = (state_22974[(2)]);var inst_22972 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_22971);var state_22974__$1 = (function (){var statearr_22976 = state_22974;(statearr_22976[(7)] = inst_22972);
return statearr_22976;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22974__$1,true);
} else
{if((state_val_22975 === (1)))
{var state_22974__$1 = state_22974;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22974__$1,(2),comm);
} else
{return null;
}
}
});})(c__11297__auto__,comm,map__22969,map__22969__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__11241__auto__,c__11297__auto__,comm,map__22969,map__22969__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_22980 = [null,null,null,null,null,null,null,null];(statearr_22980[(0)] = state_machine__11242__auto__);
(statearr_22980[(1)] = (1));
return statearr_22980;
});
var state_machine__11242__auto____1 = (function (state_22974){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_22974);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e22981){if((e22981 instanceof Object))
{var ex__11245__auto__ = e22981;var statearr_22982_22984 = state_22974;(statearr_22982_22984[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22974);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22981;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22985 = state_22974;
state_22974 = G__22985;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_22974){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_22974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,comm,map__22969,map__22969__$1,tolerance,bounds,boundaryline_ids))
})();var state__11299__auto__ = (function (){var statearr_22983 = f__11298__auto__.call(null);(statearr_22983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_22983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,comm,map__22969,map__22969__$1,tolerance,bounds,boundaryline_ids))
);
return c__11297__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__22953 = null;if (arguments.length > 2) {
  p__22953 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__22953);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__22986){
var app_state = cljs.core.first(arglist__22986);
arglist__22986 = cljs.core.next(arglist__22986);
var boundarylines_path = cljs.core.first(arglist__22986);
var p__22953 = cljs.core.rest(arglist__22986);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__22953);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__22987){var map__23016 = p__22987;var map__23016__$1 = ((cljs.core.seq_QMARK_.call(null,map__23016))?cljs.core.apply.call(null,cljs.core.hash_map,map__23016):map__23016);var tolerance = cljs.core.get.call(null,map__23016__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23016,map__23016__$1,tolerance){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23016,map__23016__$1,tolerance){
return (function (state_23030){var state_val_23031 = (state_23030[(1)]);if((state_val_23031 === (5)))
{var inst_23024 = (state_23030[(2)]);var inst_23025 = cljs.core.deref.call(null,app_state);var inst_23026 = cljs.core.get_in.call(null,inst_23025,cache_path);var state_23030__$1 = (function (){var statearr_23032 = state_23030;(statearr_23032[(7)] = inst_23024);
return statearr_23032;
})();var statearr_23033_23044 = state_23030__$1;(statearr_23033_23044[(2)] = inst_23026);
(statearr_23033_23044[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23031 === (4)))
{var inst_23028 = (state_23030[(2)]);var state_23030__$1 = state_23030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23030__$1,inst_23028);
} else
{if((state_val_23031 === (3)))
{var inst_23019 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23020 = [boundaryline_id];var inst_23021 = (new cljs.core.PersistentVector(null,1,(5),inst_23019,inst_23020,null));var inst_23022 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_23021,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_23030__$1 = state_23030;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23030__$1,(5),inst_23022);
} else
{if((state_val_23031 === (2)))
{var state_23030__$1 = state_23030;var statearr_23034_23045 = state_23030__$1;(statearr_23034_23045[(2)] = cached_bl);
(statearr_23034_23045[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23031 === (1)))
{var state_23030__$1 = state_23030;if(cljs.core.truth_(cached_bl))
{var statearr_23035_23046 = state_23030__$1;(statearr_23035_23046[(1)] = (2));
} else
{var statearr_23036_23047 = state_23030__$1;(statearr_23036_23047[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23016,map__23016__$1,tolerance))
;return ((function (switch__11241__auto__,c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23016,map__23016__$1,tolerance){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_23040 = [null,null,null,null,null,null,null,null];(statearr_23040[(0)] = state_machine__11242__auto__);
(statearr_23040[(1)] = (1));
return statearr_23040;
});
var state_machine__11242__auto____1 = (function (state_23030){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_23030);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e23041){if((e23041 instanceof Object))
{var ex__11245__auto__ = e23041;var statearr_23042_23048 = state_23030;(statearr_23042_23048[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23030);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23041;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23049 = state_23030;
state_23030 = G__23049;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_23030){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_23030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23016,map__23016__$1,tolerance))
})();var state__11299__auto__ = (function (){var statearr_23043 = f__11298__auto__.call(null);(statearr_23043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_23043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23016,map__23016__$1,tolerance))
);
return c__11297__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__22987 = null;if (arguments.length > 3) {
  p__22987 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__22987);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__23050){
var app_state = cljs.core.first(arglist__23050);
arglist__23050 = cljs.core.next(arglist__23050);
var boundarylines_path = cljs.core.first(arglist__23050);
arglist__23050 = cljs.core.next(arglist__23050);
var boundaryline_id = cljs.core.first(arglist__23050);
var p__22987 = cljs.core.rest(arglist__23050);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__22987);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_23070){var state_val_23071 = (state_23070[(1)]);if((state_val_23071 === (2)))
{var inst_23066 = (state_23070[(2)]);var inst_23067 = cljs.core.clj__GT_js.call(null,inst_23066);var inst_23068 = console.log(inst_23067);var state_23070__$1 = state_23070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23070__$1,inst_23068);
} else
{if((state_val_23071 === (1)))
{var state_23070__$1 = state_23070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23070__$1,(2),ch);
} else
{return null;
}
}
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_23075 = [null,null,null,null,null,null,null];(statearr_23075[(0)] = state_machine__11242__auto__);
(statearr_23075[(1)] = (1));
return statearr_23075;
});
var state_machine__11242__auto____1 = (function (state_23070){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_23070);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e23076){if((e23076 instanceof Object))
{var ex__11245__auto__ = e23076;var statearr_23077_23079 = state_23070;(statearr_23077_23079[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23076;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23080 = state_23070;
state_23070 = G__23080;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_23070){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_23070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_23078 = f__11298__auto__.call(null);(statearr_23078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_23078;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__23081){var map__23097 = p__23081;var map__23097__$1 = ((cljs.core.seq_QMARK_.call(null,map__23097))?cljs.core.apply.call(null,cljs.core.hash_map,map__23097):map__23097);var bounds = cljs.core.get.call(null,map__23097__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__23097__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,comm,map__23097,map__23097__$1,bounds,boundaryline_ids){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,comm,map__23097,map__23097__$1,bounds,boundaryline_ids){
return (function (state_23102){var state_val_23103 = (state_23102[(1)]);if((state_val_23103 === (2)))
{var inst_23099 = (state_23102[(2)]);var inst_23100 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_23099);var state_23102__$1 = (function (){var statearr_23104 = state_23102;(statearr_23104[(7)] = inst_23100);
return statearr_23104;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23102__$1,true);
} else
{if((state_val_23103 === (1)))
{var state_23102__$1 = state_23102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23102__$1,(2),comm);
} else
{return null;
}
}
});})(c__11297__auto__,comm,map__23097,map__23097__$1,bounds,boundaryline_ids))
;return ((function (switch__11241__auto__,c__11297__auto__,comm,map__23097,map__23097__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_23108 = [null,null,null,null,null,null,null,null];(statearr_23108[(0)] = state_machine__11242__auto__);
(statearr_23108[(1)] = (1));
return statearr_23108;
});
var state_machine__11242__auto____1 = (function (state_23102){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_23102);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e23109){if((e23109 instanceof Object))
{var ex__11245__auto__ = e23109;var statearr_23110_23112 = state_23102;(statearr_23110_23112[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23102);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23109;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23113 = state_23102;
state_23102 = G__23113;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_23102){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_23102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,comm,map__23097,map__23097__$1,bounds,boundaryline_ids))
})();var state__11299__auto__ = (function (){var statearr_23111 = f__11298__auto__.call(null);(statearr_23111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_23111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,comm,map__23097,map__23097__$1,bounds,boundaryline_ids))
);
return c__11297__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__23081 = null;if (arguments.length > 4) {
  p__23081 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__23081);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__23114){
var app_state = cljs.core.first(arglist__23114);
arglist__23114 = cljs.core.next(arglist__23114);
var boundarylines_path = cljs.core.first(arglist__23114);
arglist__23114 = cljs.core.next(arglist__23114);
var collection_id = cljs.core.first(arglist__23114);
arglist__23114 = cljs.core.next(arglist__23114);
var tolerance = cljs.core.first(arglist__23114);
var p__23081 = cljs.core.rest(arglist__23114);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__23081);
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__23115){var vec__23118 = p__23115;var map__23119 = cljs.core.nth.call(null,vec__23118,(0),null);var map__23119__$1 = ((cljs.core.seq_QMARK_.call(null,map__23119))?cljs.core.apply.call(null,cljs.core.hash_map,map__23119):map__23119);var indexes = cljs.core.get.call(null,map__23119__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__23118,map__23119,map__23119__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__23118,map__23119,map__23119__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__23115 = null;if (arguments.length > 3) {
  p__23115 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__23115);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__23120){
var app_state = cljs.core.first(arglist__23120);
arglist__23120 = cljs.core.next(arglist__23120);
var boundarylines_path = cljs.core.first(arglist__23120);
arglist__23120 = cljs.core.next(arglist__23120);
var boundaryline_id = cljs.core.first(arglist__23120);
var p__23115 = cljs.core.rest(arglist__23120);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__23115);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__23121){var map__23126 = p__23121;var map__23126__$1 = ((cljs.core.seq_QMARK_.call(null,map__23126))?cljs.core.apply.call(null,cljs.core.hash_map,map__23126):map__23126);var boundaryline_ids = cljs.core.get.call(null,map__23126__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__23126,map__23126__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__23126,map__23126__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__23126,map__23126__$1,boundaryline_ids){
return (function (p__23127){var vec__23128 = p__23127;var blid = cljs.core.nth.call(null,vec__23128,(0),null);var vec__23129 = cljs.core.nth.call(null,vec__23128,(1),null);var tol = cljs.core.nth.call(null,vec__23129,(0),null);var bl = cljs.core.nth.call(null,vec__23129,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__23126,map__23126__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__23121 = null;if (arguments.length > 5) {
  p__23121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__23121);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__23130){
var app_state = cljs.core.first(arglist__23130);
arglist__23130 = cljs.core.next(arglist__23130);
var boundarylines_path = cljs.core.first(arglist__23130);
arglist__23130 = cljs.core.next(arglist__23130);
var collection_id = cljs.core.first(arglist__23130);
arglist__23130 = cljs.core.next(arglist__23130);
var bounds = cljs.core.first(arglist__23130);
arglist__23130 = cljs.core.next(arglist__23130);
var zoom = cljs.core.first(arglist__23130);
var p__23121 = cljs.core.rest(arglist__23130);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__23121);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23135_23139 = cljs.core.seq.call(null,keys);var chunk__23136_23140 = null;var count__23137_23141 = (0);var i__23138_23142 = (0);while(true){
if((i__23138_23142 < count__23137_23141))
{var k_23143 = cljs.core._nth.call(null,chunk__23136_23140,i__23138_23142);var obj_23144 = (js_index[k_23143]);var geom_23145 = (obj_23144["geojson"]);var feature_23146 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_23144["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_23144["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_23144["compact_name"])], null)], null));var __23147__$1 = (feature_23146["geometry"] = geom_23145);var __23148__$2 = ((feature_23146["properties"])["index_object"] = obj_23144);features.push(feature_23146);
{
var G__23149 = seq__23135_23139;
var G__23150 = chunk__23136_23140;
var G__23151 = count__23137_23141;
var G__23152 = (i__23138_23142 + (1));
seq__23135_23139 = G__23149;
chunk__23136_23140 = G__23150;
count__23137_23141 = G__23151;
i__23138_23142 = G__23152;
continue;
}
} else
{var temp__4126__auto___23153 = cljs.core.seq.call(null,seq__23135_23139);if(temp__4126__auto___23153)
{var seq__23135_23154__$1 = temp__4126__auto___23153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23135_23154__$1))
{var c__4408__auto___23155 = cljs.core.chunk_first.call(null,seq__23135_23154__$1);{
var G__23156 = cljs.core.chunk_rest.call(null,seq__23135_23154__$1);
var G__23157 = c__4408__auto___23155;
var G__23158 = cljs.core.count.call(null,c__4408__auto___23155);
var G__23159 = (0);
seq__23135_23139 = G__23156;
chunk__23136_23140 = G__23157;
count__23137_23141 = G__23158;
i__23138_23142 = G__23159;
continue;
}
} else
{var k_23160 = cljs.core.first.call(null,seq__23135_23154__$1);var obj_23161 = (js_index[k_23160]);var geom_23162 = (obj_23161["geojson"]);var feature_23163 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_23161["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_23161["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_23161["compact_name"])], null)], null));var __23164__$1 = (feature_23163["geometry"] = geom_23162);var __23165__$2 = ((feature_23163["properties"])["index_object"] = obj_23161);features.push(feature_23163);
{
var G__23166 = cljs.core.next.call(null,seq__23135_23154__$1);
var G__23167 = null;
var G__23168 = (0);
var G__23169 = (0);
seq__23135_23139 = G__23166;
chunk__23136_23140 = G__23167;
count__23137_23141 = G__23168;
i__23138_23142 = G__23169;
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
return (function (state_23215){var state_val_23216 = (state_23215[(1)]);if((state_val_23216 === (5)))
{var inst_23202 = (state_23215[(7)]);var inst_23212 = (state_23215[(2)]);var inst_23213 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_23202);var state_23215__$1 = (function (){var statearr_23217 = state_23215;(statearr_23217[(8)] = inst_23212);
return statearr_23217;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23215__$1,inst_23213);
} else
{if((state_val_23216 === (4)))
{var state_23215__$1 = state_23215;var statearr_23218_23230 = state_23215__$1;(statearr_23218_23230[(2)] = null);
(statearr_23218_23230[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23216 === (3)))
{var inst_23202 = (state_23215[(7)]);var inst_23209 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_23202);var state_23215__$1 = state_23215;var statearr_23219_23231 = state_23215__$1;(statearr_23219_23231[(2)] = inst_23209);
(statearr_23219_23231[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23216 === (2)))
{var inst_23202 = (state_23215[(7)]);var inst_23202__$1 = (state_23215[(2)]);var inst_23203 = (function (){var bl_coll_index = inst_23202__$1;return ((function (bl_coll_index,inst_23202,inst_23202__$1,state_val_23216,c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_23202,inst_23202__$1,state_val_23216,c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_23204 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_23203);var inst_23205 = cljs.core.deref.call(null,app_state);var inst_23206 = cljs.core.get_in.call(null,inst_23205,index_path);var inst_23207 = cljs.core._EQ_.call(null,inst_23206,inst_23202__$1);var state_23215__$1 = (function (){var statearr_23220 = state_23215;(statearr_23220[(7)] = inst_23202__$1);
(statearr_23220[(9)] = inst_23204);
return statearr_23220;
})();if(inst_23207)
{var statearr_23221_23232 = state_23215__$1;(statearr_23221_23232[(1)] = (3));
} else
{var statearr_23222_23233 = state_23215__$1;(statearr_23222_23233[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23216 === (1)))
{var inst_23200 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_23215__$1 = state_23215;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23215__$1,(2),inst_23200);
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
var state_machine__11242__auto____0 = (function (){var statearr_23226 = [null,null,null,null,null,null,null,null,null,null];(statearr_23226[(0)] = state_machine__11242__auto__);
(statearr_23226[(1)] = (1));
return statearr_23226;
});
var state_machine__11242__auto____1 = (function (state_23215){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_23215);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e23227){if((e23227 instanceof Object))
{var ex__11245__auto__ = e23227;var statearr_23228_23234 = state_23215;(statearr_23228_23234[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23215);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23227;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23235 = state_23215;
state_23215 = G__23235;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_23215){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_23215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__11299__auto__ = (function (){var statearr_23229 = f__11298__auto__.call(null);(statearr_23229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_23229;
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
