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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__24094){var vec__24095 = p__24094;var z = cljs.core.nth.call(null,vec__24095,(0),null);var t = cljs.core.nth.call(null,vec__24095,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
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
return (function iter__24100(s__24101){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__24101__$1 = s__24101;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24101__$1);if(temp__4126__auto__)
{var s__24101__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24101__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24101__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24103 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24102 = (0);while(true){
if((i__24102 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__24102);cljs.core.chunk_append.call(null,b__24103,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__24104 = (i__24102 + (1));
i__24102 = G__24104;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24103),iter__24100.call(null,cljs.core.chunk_rest.call(null,s__24101__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24103),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__24101__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__24100.call(null,cljs.core.rest.call(null,s__24101__$2)));
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__24105){var map__24121 = p__24105;var map__24121__$1 = ((cljs.core.seq_QMARK_.call(null,map__24121))?cljs.core.apply.call(null,cljs.core.hash_map,map__24121):map__24121);var tolerance = cljs.core.get.call(null,map__24121__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__24121__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__24121__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,comm,map__24121,map__24121__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,comm,map__24121,map__24121__$1,tolerance,bounds,boundaryline_ids){
return (function (state_24126){var state_val_24127 = (state_24126[(1)]);if((state_val_24127 === (2)))
{var inst_24123 = (state_24126[(2)]);var inst_24124 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_24123);var state_24126__$1 = (function (){var statearr_24128 = state_24126;(statearr_24128[(7)] = inst_24124);
return statearr_24128;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24126__$1,true);
} else
{if((state_val_24127 === (1)))
{var state_24126__$1 = state_24126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24126__$1,(2),comm);
} else
{return null;
}
}
});})(c__11154__auto__,comm,map__24121,map__24121__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__11098__auto__,c__11154__auto__,comm,map__24121,map__24121__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24132 = [null,null,null,null,null,null,null,null];(statearr_24132[(0)] = state_machine__11099__auto__);
(statearr_24132[(1)] = (1));
return statearr_24132;
});
var state_machine__11099__auto____1 = (function (state_24126){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24126);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24133){if((e24133 instanceof Object))
{var ex__11102__auto__ = e24133;var statearr_24134_24136 = state_24126;(statearr_24134_24136[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24126);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24133;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24137 = state_24126;
state_24126 = G__24137;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24126){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,comm,map__24121,map__24121__$1,tolerance,bounds,boundaryline_ids))
})();var state__11156__auto__ = (function (){var statearr_24135 = f__11155__auto__.call(null);(statearr_24135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,comm,map__24121,map__24121__$1,tolerance,bounds,boundaryline_ids))
);
return c__11154__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__24105 = null;if (arguments.length > 2) {
  p__24105 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__24105);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__24138){
var app_state = cljs.core.first(arglist__24138);
arglist__24138 = cljs.core.next(arglist__24138);
var boundarylines_path = cljs.core.first(arglist__24138);
var p__24105 = cljs.core.rest(arglist__24138);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__24105);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__24139){var map__24168 = p__24139;var map__24168__$1 = ((cljs.core.seq_QMARK_.call(null,map__24168))?cljs.core.apply.call(null,cljs.core.hash_map,map__24168):map__24168);var tolerance = cljs.core.get.call(null,map__24168__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24168,map__24168__$1,tolerance){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24168,map__24168__$1,tolerance){
return (function (state_24182){var state_val_24183 = (state_24182[(1)]);if((state_val_24183 === (5)))
{var inst_24176 = (state_24182[(2)]);var inst_24177 = cljs.core.deref.call(null,app_state);var inst_24178 = cljs.core.get_in.call(null,inst_24177,cache_path);var state_24182__$1 = (function (){var statearr_24184 = state_24182;(statearr_24184[(7)] = inst_24176);
return statearr_24184;
})();var statearr_24185_24196 = state_24182__$1;(statearr_24185_24196[(2)] = inst_24178);
(statearr_24185_24196[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24183 === (4)))
{var inst_24180 = (state_24182[(2)]);var state_24182__$1 = state_24182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24182__$1,inst_24180);
} else
{if((state_val_24183 === (3)))
{var inst_24171 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24172 = [boundaryline_id];var inst_24173 = (new cljs.core.PersistentVector(null,1,(5),inst_24171,inst_24172,null));var inst_24174 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_24173,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_24182__$1 = state_24182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24182__$1,(5),inst_24174);
} else
{if((state_val_24183 === (2)))
{var state_24182__$1 = state_24182;var statearr_24186_24197 = state_24182__$1;(statearr_24186_24197[(2)] = cached_bl);
(statearr_24186_24197[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24183 === (1)))
{var state_24182__$1 = state_24182;if(cljs.core.truth_(cached_bl))
{var statearr_24187_24198 = state_24182__$1;(statearr_24187_24198[(1)] = (2));
} else
{var statearr_24188_24199 = state_24182__$1;(statearr_24188_24199[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11154__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24168,map__24168__$1,tolerance))
;return ((function (switch__11098__auto__,c__11154__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24168,map__24168__$1,tolerance){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24192 = [null,null,null,null,null,null,null,null];(statearr_24192[(0)] = state_machine__11099__auto__);
(statearr_24192[(1)] = (1));
return statearr_24192;
});
var state_machine__11099__auto____1 = (function (state_24182){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24182);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24193){if((e24193 instanceof Object))
{var ex__11102__auto__ = e24193;var statearr_24194_24200 = state_24182;(statearr_24194_24200[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24182);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24193;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24201 = state_24182;
state_24182 = G__24201;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24182){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24168,map__24168__$1,tolerance))
})();var state__11156__auto__ = (function (){var statearr_24195 = f__11155__auto__.call(null);(statearr_24195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24168,map__24168__$1,tolerance))
);
return c__11154__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__24139 = null;if (arguments.length > 3) {
  p__24139 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__24139);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__24202){
var app_state = cljs.core.first(arglist__24202);
arglist__24202 = cljs.core.next(arglist__24202);
var boundarylines_path = cljs.core.first(arglist__24202);
arglist__24202 = cljs.core.next(arglist__24202);
var boundaryline_id = cljs.core.first(arglist__24202);
var p__24139 = cljs.core.rest(arglist__24202);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__24139);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__){
return (function (state_24222){var state_val_24223 = (state_24222[(1)]);if((state_val_24223 === (2)))
{var inst_24218 = (state_24222[(2)]);var inst_24219 = cljs.core.clj__GT_js.call(null,inst_24218);var inst_24220 = console.log(inst_24219);var state_24222__$1 = state_24222;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24222__$1,inst_24220);
} else
{if((state_val_24223 === (1)))
{var state_24222__$1 = state_24222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24222__$1,(2),ch);
} else
{return null;
}
}
});})(c__11154__auto__))
;return ((function (switch__11098__auto__,c__11154__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24227 = [null,null,null,null,null,null,null];(statearr_24227[(0)] = state_machine__11099__auto__);
(statearr_24227[(1)] = (1));
return statearr_24227;
});
var state_machine__11099__auto____1 = (function (state_24222){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24222);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24228){if((e24228 instanceof Object))
{var ex__11102__auto__ = e24228;var statearr_24229_24231 = state_24222;(statearr_24229_24231[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24228;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24232 = state_24222;
state_24222 = G__24232;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24222){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_24230 = f__11155__auto__.call(null);(statearr_24230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__))
);
return c__11154__auto__;
});
/**
* fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
* general caches. returns a single value true on the go-block channel when complete
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundarylines = (function() { 
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__24233){var map__24249 = p__24233;var map__24249__$1 = ((cljs.core.seq_QMARK_.call(null,map__24249))?cljs.core.apply.call(null,cljs.core.hash_map,map__24249):map__24249);var bounds = cljs.core.get.call(null,map__24249__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__24249__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,comm,map__24249,map__24249__$1,bounds,boundaryline_ids){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,comm,map__24249,map__24249__$1,bounds,boundaryline_ids){
return (function (state_24254){var state_val_24255 = (state_24254[(1)]);if((state_val_24255 === (2)))
{var inst_24251 = (state_24254[(2)]);var inst_24252 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_24251);var state_24254__$1 = (function (){var statearr_24256 = state_24254;(statearr_24256[(7)] = inst_24252);
return statearr_24256;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24254__$1,true);
} else
{if((state_val_24255 === (1)))
{var state_24254__$1 = state_24254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(2),comm);
} else
{return null;
}
}
});})(c__11154__auto__,comm,map__24249,map__24249__$1,bounds,boundaryline_ids))
;return ((function (switch__11098__auto__,c__11154__auto__,comm,map__24249,map__24249__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24260 = [null,null,null,null,null,null,null,null];(statearr_24260[(0)] = state_machine__11099__auto__);
(statearr_24260[(1)] = (1));
return statearr_24260;
});
var state_machine__11099__auto____1 = (function (state_24254){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24254);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24261){if((e24261 instanceof Object))
{var ex__11102__auto__ = e24261;var statearr_24262_24264 = state_24254;(statearr_24262_24264[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24254);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24261;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24265 = state_24254;
state_24254 = G__24265;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24254){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,comm,map__24249,map__24249__$1,bounds,boundaryline_ids))
})();var state__11156__auto__ = (function (){var statearr_24263 = f__11155__auto__.call(null);(statearr_24263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24263;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,comm,map__24249,map__24249__$1,bounds,boundaryline_ids))
);
return c__11154__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__24233 = null;if (arguments.length > 4) {
  p__24233 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__24233);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__24266){
var app_state = cljs.core.first(arglist__24266);
arglist__24266 = cljs.core.next(arglist__24266);
var boundarylines_path = cljs.core.first(arglist__24266);
arglist__24266 = cljs.core.next(arglist__24266);
var collection_id = cljs.core.first(arglist__24266);
arglist__24266 = cljs.core.next(arglist__24266);
var tolerance = cljs.core.first(arglist__24266);
var p__24233 = cljs.core.rest(arglist__24266);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__24233);
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__24267){var vec__24270 = p__24267;var map__24271 = cljs.core.nth.call(null,vec__24270,(0),null);var map__24271__$1 = ((cljs.core.seq_QMARK_.call(null,map__24271))?cljs.core.apply.call(null,cljs.core.hash_map,map__24271):map__24271);var indexes = cljs.core.get.call(null,map__24271__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__24270,map__24271,map__24271__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__24270,map__24271,map__24271__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__24267 = null;if (arguments.length > 3) {
  p__24267 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__24267);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__24272){
var app_state = cljs.core.first(arglist__24272);
arglist__24272 = cljs.core.next(arglist__24272);
var boundarylines_path = cljs.core.first(arglist__24272);
arglist__24272 = cljs.core.next(arglist__24272);
var boundaryline_id = cljs.core.first(arglist__24272);
var p__24267 = cljs.core.rest(arglist__24272);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__24267);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__24273){var map__24278 = p__24273;var map__24278__$1 = ((cljs.core.seq_QMARK_.call(null,map__24278))?cljs.core.apply.call(null,cljs.core.hash_map,map__24278):map__24278);var boundaryline_ids = cljs.core.get.call(null,map__24278__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24278,map__24278__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24278,map__24278__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24278,map__24278__$1,boundaryline_ids){
return (function (p__24279){var vec__24280 = p__24279;var blid = cljs.core.nth.call(null,vec__24280,(0),null);var vec__24281 = cljs.core.nth.call(null,vec__24280,(1),null);var tol = cljs.core.nth.call(null,vec__24281,(0),null);var bl = cljs.core.nth.call(null,vec__24281,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24278,map__24278__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__24273 = null;if (arguments.length > 5) {
  p__24273 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__24273);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__24282){
var app_state = cljs.core.first(arglist__24282);
arglist__24282 = cljs.core.next(arglist__24282);
var boundarylines_path = cljs.core.first(arglist__24282);
arglist__24282 = cljs.core.next(arglist__24282);
var collection_id = cljs.core.first(arglist__24282);
arglist__24282 = cljs.core.next(arglist__24282);
var bounds = cljs.core.first(arglist__24282);
arglist__24282 = cljs.core.next(arglist__24282);
var zoom = cljs.core.first(arglist__24282);
var p__24273 = cljs.core.rest(arglist__24282);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__24273);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__24287_24291 = cljs.core.seq.call(null,keys);var chunk__24288_24292 = null;var count__24289_24293 = (0);var i__24290_24294 = (0);while(true){
if((i__24290_24294 < count__24289_24293))
{var k_24295 = cljs.core._nth.call(null,chunk__24288_24292,i__24290_24294);var obj_24296 = (js_index[k_24295]);var geom_24297 = (obj_24296["geojson"]);var feature_24298 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24296["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24296["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24296["compact_name"])], null)], null));var __24299__$1 = (feature_24298["geometry"] = geom_24297);var __24300__$2 = ((feature_24298["properties"])["index_object"] = obj_24296);features.push(feature_24298);
{
var G__24301 = seq__24287_24291;
var G__24302 = chunk__24288_24292;
var G__24303 = count__24289_24293;
var G__24304 = (i__24290_24294 + (1));
seq__24287_24291 = G__24301;
chunk__24288_24292 = G__24302;
count__24289_24293 = G__24303;
i__24290_24294 = G__24304;
continue;
}
} else
{var temp__4126__auto___24305 = cljs.core.seq.call(null,seq__24287_24291);if(temp__4126__auto___24305)
{var seq__24287_24306__$1 = temp__4126__auto___24305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24287_24306__$1))
{var c__4408__auto___24307 = cljs.core.chunk_first.call(null,seq__24287_24306__$1);{
var G__24308 = cljs.core.chunk_rest.call(null,seq__24287_24306__$1);
var G__24309 = c__4408__auto___24307;
var G__24310 = cljs.core.count.call(null,c__4408__auto___24307);
var G__24311 = (0);
seq__24287_24291 = G__24308;
chunk__24288_24292 = G__24309;
count__24289_24293 = G__24310;
i__24290_24294 = G__24311;
continue;
}
} else
{var k_24312 = cljs.core.first.call(null,seq__24287_24306__$1);var obj_24313 = (js_index[k_24312]);var geom_24314 = (obj_24313["geojson"]);var feature_24315 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24313["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24313["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24313["compact_name"])], null)], null));var __24316__$1 = (feature_24315["geometry"] = geom_24314);var __24317__$2 = ((feature_24315["properties"])["index_object"] = obj_24313);features.push(feature_24315);
{
var G__24318 = cljs.core.next.call(null,seq__24287_24306__$1);
var G__24319 = null;
var G__24320 = (0);
var G__24321 = (0);
seq__24287_24291 = G__24318;
chunk__24288_24292 = G__24319;
count__24289_24293 = G__24320;
i__24290_24294 = G__24321;
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
{var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_24367){var state_val_24368 = (state_24367[(1)]);if((state_val_24368 === (5)))
{var inst_24354 = (state_24367[(7)]);var inst_24364 = (state_24367[(2)]);var inst_24365 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_24354);var state_24367__$1 = (function (){var statearr_24369 = state_24367;(statearr_24369[(8)] = inst_24364);
return statearr_24369;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24367__$1,inst_24365);
} else
{if((state_val_24368 === (4)))
{var state_24367__$1 = state_24367;var statearr_24370_24382 = state_24367__$1;(statearr_24370_24382[(2)] = null);
(statearr_24370_24382[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24368 === (3)))
{var inst_24354 = (state_24367[(7)]);var inst_24361 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_24354);var state_24367__$1 = state_24367;var statearr_24371_24383 = state_24367__$1;(statearr_24371_24383[(2)] = inst_24361);
(statearr_24371_24383[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24368 === (2)))
{var inst_24354 = (state_24367[(7)]);var inst_24354__$1 = (state_24367[(2)]);var inst_24355 = (function (){var bl_coll_index = inst_24354__$1;return ((function (bl_coll_index,inst_24354,inst_24354__$1,state_val_24368,c__11154__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_24354,inst_24354__$1,state_val_24368,c__11154__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_24356 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_24355);var inst_24357 = cljs.core.deref.call(null,app_state);var inst_24358 = cljs.core.get_in.call(null,inst_24357,index_path);var inst_24359 = cljs.core._EQ_.call(null,inst_24358,inst_24354__$1);var state_24367__$1 = (function (){var statearr_24372 = state_24367;(statearr_24372[(9)] = inst_24356);
(statearr_24372[(7)] = inst_24354__$1);
return statearr_24372;
})();if(inst_24359)
{var statearr_24373_24384 = state_24367__$1;(statearr_24373_24384[(1)] = (3));
} else
{var statearr_24374_24385 = state_24367__$1;(statearr_24374_24385[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24368 === (1)))
{var inst_24352 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_24367__$1 = state_24367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24367__$1,(2),inst_24352);
} else
{return null;
}
}
}
}
}
});})(c__11154__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__11098__auto__,c__11154__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24378 = [null,null,null,null,null,null,null,null,null,null];(statearr_24378[(0)] = state_machine__11099__auto__);
(statearr_24378[(1)] = (1));
return statearr_24378;
});
var state_machine__11099__auto____1 = (function (state_24367){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24367);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24379){if((e24379 instanceof Object))
{var ex__11102__auto__ = e24379;var statearr_24380_24386 = state_24367;(statearr_24380_24386[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24367);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24379;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24387 = state_24367;
state_24367 = G__24387;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24367){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__11156__auto__ = (function (){var statearr_24381 = f__11155__auto__.call(null);(statearr_24381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__11154__auto__;
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
