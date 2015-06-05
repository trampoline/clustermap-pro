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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__24386){var vec__24387 = p__24386;var z = cljs.core.nth.call(null,vec__24387,(0),null);var t = cljs.core.nth.call(null,vec__24387,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
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
return (function iter__24392(s__24393){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__24393__$1 = s__24393;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24393__$1);if(temp__4126__auto__)
{var s__24393__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24393__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24393__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24395 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24394 = (0);while(true){
if((i__24394 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__24394);cljs.core.chunk_append.call(null,b__24395,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__24396 = (i__24394 + (1));
i__24394 = G__24396;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24395),iter__24392.call(null,cljs.core.chunk_rest.call(null,s__24393__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24395),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__24393__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__24392.call(null,cljs.core.rest.call(null,s__24393__$2)));
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__24397){var map__24413 = p__24397;var map__24413__$1 = ((cljs.core.seq_QMARK_.call(null,map__24413))?cljs.core.apply.call(null,cljs.core.hash_map,map__24413):map__24413);var tolerance = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,comm,map__24413,map__24413__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,comm,map__24413,map__24413__$1,tolerance,bounds,boundaryline_ids){
return (function (state_24418){var state_val_24419 = (state_24418[(1)]);if((state_val_24419 === (2)))
{var inst_24415 = (state_24418[(2)]);var inst_24416 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_24415);var state_24418__$1 = (function (){var statearr_24420 = state_24418;(statearr_24420[(7)] = inst_24416);
return statearr_24420;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24418__$1,true);
} else
{if((state_val_24419 === (1)))
{var state_24418__$1 = state_24418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24418__$1,(2),comm);
} else
{return null;
}
}
});})(c__11154__auto__,comm,map__24413,map__24413__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__11098__auto__,c__11154__auto__,comm,map__24413,map__24413__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24424 = [null,null,null,null,null,null,null,null];(statearr_24424[(0)] = state_machine__11099__auto__);
(statearr_24424[(1)] = (1));
return statearr_24424;
});
var state_machine__11099__auto____1 = (function (state_24418){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24418);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24425){if((e24425 instanceof Object))
{var ex__11102__auto__ = e24425;var statearr_24426_24428 = state_24418;(statearr_24426_24428[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24425;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24429 = state_24418;
state_24418 = G__24429;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24418){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,comm,map__24413,map__24413__$1,tolerance,bounds,boundaryline_ids))
})();var state__11156__auto__ = (function (){var statearr_24427 = f__11155__auto__.call(null);(statearr_24427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,comm,map__24413,map__24413__$1,tolerance,bounds,boundaryline_ids))
);
return c__11154__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__24397 = null;if (arguments.length > 2) {
  p__24397 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__24397);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__24430){
var app_state = cljs.core.first(arglist__24430);
arglist__24430 = cljs.core.next(arglist__24430);
var boundarylines_path = cljs.core.first(arglist__24430);
var p__24397 = cljs.core.rest(arglist__24430);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__24397);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__24431){var map__24460 = p__24431;var map__24460__$1 = ((cljs.core.seq_QMARK_.call(null,map__24460))?cljs.core.apply.call(null,cljs.core.hash_map,map__24460):map__24460);var tolerance = cljs.core.get.call(null,map__24460__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24460,map__24460__$1,tolerance){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24460,map__24460__$1,tolerance){
return (function (state_24474){var state_val_24475 = (state_24474[(1)]);if((state_val_24475 === (5)))
{var inst_24468 = (state_24474[(2)]);var inst_24469 = cljs.core.deref.call(null,app_state);var inst_24470 = cljs.core.get_in.call(null,inst_24469,cache_path);var state_24474__$1 = (function (){var statearr_24476 = state_24474;(statearr_24476[(7)] = inst_24468);
return statearr_24476;
})();var statearr_24477_24488 = state_24474__$1;(statearr_24477_24488[(2)] = inst_24470);
(statearr_24477_24488[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24475 === (4)))
{var inst_24472 = (state_24474[(2)]);var state_24474__$1 = state_24474;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24474__$1,inst_24472);
} else
{if((state_val_24475 === (3)))
{var inst_24463 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24464 = [boundaryline_id];var inst_24465 = (new cljs.core.PersistentVector(null,1,(5),inst_24463,inst_24464,null));var inst_24466 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_24465,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_24474__$1 = state_24474;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24474__$1,(5),inst_24466);
} else
{if((state_val_24475 === (2)))
{var state_24474__$1 = state_24474;var statearr_24478_24489 = state_24474__$1;(statearr_24478_24489[(2)] = cached_bl);
(statearr_24478_24489[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24475 === (1)))
{var state_24474__$1 = state_24474;if(cljs.core.truth_(cached_bl))
{var statearr_24479_24490 = state_24474__$1;(statearr_24479_24490[(1)] = (2));
} else
{var statearr_24480_24491 = state_24474__$1;(statearr_24480_24491[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11154__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24460,map__24460__$1,tolerance))
;return ((function (switch__11098__auto__,c__11154__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24460,map__24460__$1,tolerance){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24484 = [null,null,null,null,null,null,null,null];(statearr_24484[(0)] = state_machine__11099__auto__);
(statearr_24484[(1)] = (1));
return statearr_24484;
});
var state_machine__11099__auto____1 = (function (state_24474){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24474);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24485){if((e24485 instanceof Object))
{var ex__11102__auto__ = e24485;var statearr_24486_24492 = state_24474;(statearr_24486_24492[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24474);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24485;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24493 = state_24474;
state_24474 = G__24493;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24474){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24460,map__24460__$1,tolerance))
})();var state__11156__auto__ = (function (){var statearr_24487 = f__11155__auto__.call(null);(statearr_24487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24460,map__24460__$1,tolerance))
);
return c__11154__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__24431 = null;if (arguments.length > 3) {
  p__24431 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__24431);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__24494){
var app_state = cljs.core.first(arglist__24494);
arglist__24494 = cljs.core.next(arglist__24494);
var boundarylines_path = cljs.core.first(arglist__24494);
arglist__24494 = cljs.core.next(arglist__24494);
var boundaryline_id = cljs.core.first(arglist__24494);
var p__24431 = cljs.core.rest(arglist__24494);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__24431);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__){
return (function (state_24514){var state_val_24515 = (state_24514[(1)]);if((state_val_24515 === (2)))
{var inst_24510 = (state_24514[(2)]);var inst_24511 = cljs.core.clj__GT_js.call(null,inst_24510);var inst_24512 = console.log(inst_24511);var state_24514__$1 = state_24514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24514__$1,inst_24512);
} else
{if((state_val_24515 === (1)))
{var state_24514__$1 = state_24514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24514__$1,(2),ch);
} else
{return null;
}
}
});})(c__11154__auto__))
;return ((function (switch__11098__auto__,c__11154__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24519 = [null,null,null,null,null,null,null];(statearr_24519[(0)] = state_machine__11099__auto__);
(statearr_24519[(1)] = (1));
return statearr_24519;
});
var state_machine__11099__auto____1 = (function (state_24514){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24514);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24520){if((e24520 instanceof Object))
{var ex__11102__auto__ = e24520;var statearr_24521_24523 = state_24514;(statearr_24521_24523[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24514);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24520;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24524 = state_24514;
state_24514 = G__24524;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24514){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_24522 = f__11155__auto__.call(null);(statearr_24522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24522;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__24525){var map__24541 = p__24525;var map__24541__$1 = ((cljs.core.seq_QMARK_.call(null,map__24541))?cljs.core.apply.call(null,cljs.core.hash_map,map__24541):map__24541);var bounds = cljs.core.get.call(null,map__24541__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__24541__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,comm,map__24541,map__24541__$1,bounds,boundaryline_ids){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,comm,map__24541,map__24541__$1,bounds,boundaryline_ids){
return (function (state_24546){var state_val_24547 = (state_24546[(1)]);if((state_val_24547 === (2)))
{var inst_24543 = (state_24546[(2)]);var inst_24544 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_24543);var state_24546__$1 = (function (){var statearr_24548 = state_24546;(statearr_24548[(7)] = inst_24544);
return statearr_24548;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24546__$1,true);
} else
{if((state_val_24547 === (1)))
{var state_24546__$1 = state_24546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(2),comm);
} else
{return null;
}
}
});})(c__11154__auto__,comm,map__24541,map__24541__$1,bounds,boundaryline_ids))
;return ((function (switch__11098__auto__,c__11154__auto__,comm,map__24541,map__24541__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_24552 = [null,null,null,null,null,null,null,null];(statearr_24552[(0)] = state_machine__11099__auto__);
(statearr_24552[(1)] = (1));
return statearr_24552;
});
var state_machine__11099__auto____1 = (function (state_24546){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24546);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24553){if((e24553 instanceof Object))
{var ex__11102__auto__ = e24553;var statearr_24554_24556 = state_24546;(statearr_24554_24556[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24546);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24553;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24557 = state_24546;
state_24546 = G__24557;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24546){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,comm,map__24541,map__24541__$1,bounds,boundaryline_ids))
})();var state__11156__auto__ = (function (){var statearr_24555 = f__11155__auto__.call(null);(statearr_24555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24555;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,comm,map__24541,map__24541__$1,bounds,boundaryline_ids))
);
return c__11154__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__24525 = null;if (arguments.length > 4) {
  p__24525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__24525);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__24558){
var app_state = cljs.core.first(arglist__24558);
arglist__24558 = cljs.core.next(arglist__24558);
var boundarylines_path = cljs.core.first(arglist__24558);
arglist__24558 = cljs.core.next(arglist__24558);
var collection_id = cljs.core.first(arglist__24558);
arglist__24558 = cljs.core.next(arglist__24558);
var tolerance = cljs.core.first(arglist__24558);
var p__24525 = cljs.core.rest(arglist__24558);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__24525);
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__24559){var vec__24562 = p__24559;var map__24563 = cljs.core.nth.call(null,vec__24562,(0),null);var map__24563__$1 = ((cljs.core.seq_QMARK_.call(null,map__24563))?cljs.core.apply.call(null,cljs.core.hash_map,map__24563):map__24563);var indexes = cljs.core.get.call(null,map__24563__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__24562,map__24563,map__24563__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__24562,map__24563,map__24563__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__24559 = null;if (arguments.length > 3) {
  p__24559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__24559);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__24564){
var app_state = cljs.core.first(arglist__24564);
arglist__24564 = cljs.core.next(arglist__24564);
var boundarylines_path = cljs.core.first(arglist__24564);
arglist__24564 = cljs.core.next(arglist__24564);
var boundaryline_id = cljs.core.first(arglist__24564);
var p__24559 = cljs.core.rest(arglist__24564);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__24559);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__24565){var map__24570 = p__24565;var map__24570__$1 = ((cljs.core.seq_QMARK_.call(null,map__24570))?cljs.core.apply.call(null,cljs.core.hash_map,map__24570):map__24570);var boundaryline_ids = cljs.core.get.call(null,map__24570__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24570,map__24570__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24570,map__24570__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24570,map__24570__$1,boundaryline_ids){
return (function (p__24571){var vec__24572 = p__24571;var blid = cljs.core.nth.call(null,vec__24572,(0),null);var vec__24573 = cljs.core.nth.call(null,vec__24572,(1),null);var tol = cljs.core.nth.call(null,vec__24573,(0),null);var bl = cljs.core.nth.call(null,vec__24573,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24570,map__24570__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__24565 = null;if (arguments.length > 5) {
  p__24565 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__24565);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__24574){
var app_state = cljs.core.first(arglist__24574);
arglist__24574 = cljs.core.next(arglist__24574);
var boundarylines_path = cljs.core.first(arglist__24574);
arglist__24574 = cljs.core.next(arglist__24574);
var collection_id = cljs.core.first(arglist__24574);
arglist__24574 = cljs.core.next(arglist__24574);
var bounds = cljs.core.first(arglist__24574);
arglist__24574 = cljs.core.next(arglist__24574);
var zoom = cljs.core.first(arglist__24574);
var p__24565 = cljs.core.rest(arglist__24574);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__24565);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__24579_24583 = cljs.core.seq.call(null,keys);var chunk__24580_24584 = null;var count__24581_24585 = (0);var i__24582_24586 = (0);while(true){
if((i__24582_24586 < count__24581_24585))
{var k_24587 = cljs.core._nth.call(null,chunk__24580_24584,i__24582_24586);var obj_24588 = (js_index[k_24587]);var geom_24589 = (obj_24588["geojson"]);var feature_24590 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24588["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24588["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24588["compact_name"])], null)], null));var __24591__$1 = (feature_24590["geometry"] = geom_24589);var __24592__$2 = ((feature_24590["properties"])["index_object"] = obj_24588);features.push(feature_24590);
{
var G__24593 = seq__24579_24583;
var G__24594 = chunk__24580_24584;
var G__24595 = count__24581_24585;
var G__24596 = (i__24582_24586 + (1));
seq__24579_24583 = G__24593;
chunk__24580_24584 = G__24594;
count__24581_24585 = G__24595;
i__24582_24586 = G__24596;
continue;
}
} else
{var temp__4126__auto___24597 = cljs.core.seq.call(null,seq__24579_24583);if(temp__4126__auto___24597)
{var seq__24579_24598__$1 = temp__4126__auto___24597;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24579_24598__$1))
{var c__4408__auto___24599 = cljs.core.chunk_first.call(null,seq__24579_24598__$1);{
var G__24600 = cljs.core.chunk_rest.call(null,seq__24579_24598__$1);
var G__24601 = c__4408__auto___24599;
var G__24602 = cljs.core.count.call(null,c__4408__auto___24599);
var G__24603 = (0);
seq__24579_24583 = G__24600;
chunk__24580_24584 = G__24601;
count__24581_24585 = G__24602;
i__24582_24586 = G__24603;
continue;
}
} else
{var k_24604 = cljs.core.first.call(null,seq__24579_24598__$1);var obj_24605 = (js_index[k_24604]);var geom_24606 = (obj_24605["geojson"]);var feature_24607 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24605["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24605["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24605["compact_name"])], null)], null));var __24608__$1 = (feature_24607["geometry"] = geom_24606);var __24609__$2 = ((feature_24607["properties"])["index_object"] = obj_24605);features.push(feature_24607);
{
var G__24610 = cljs.core.next.call(null,seq__24579_24598__$1);
var G__24611 = null;
var G__24612 = (0);
var G__24613 = (0);
seq__24579_24583 = G__24610;
chunk__24580_24584 = G__24611;
count__24581_24585 = G__24612;
i__24582_24586 = G__24613;
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
return (function (state_24659){var state_val_24660 = (state_24659[(1)]);if((state_val_24660 === (5)))
{var inst_24646 = (state_24659[(7)]);var inst_24656 = (state_24659[(2)]);var inst_24657 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_24646);var state_24659__$1 = (function (){var statearr_24661 = state_24659;(statearr_24661[(8)] = inst_24656);
return statearr_24661;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24659__$1,inst_24657);
} else
{if((state_val_24660 === (4)))
{var state_24659__$1 = state_24659;var statearr_24662_24674 = state_24659__$1;(statearr_24662_24674[(2)] = null);
(statearr_24662_24674[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24660 === (3)))
{var inst_24646 = (state_24659[(7)]);var inst_24653 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_24646);var state_24659__$1 = state_24659;var statearr_24663_24675 = state_24659__$1;(statearr_24663_24675[(2)] = inst_24653);
(statearr_24663_24675[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24660 === (2)))
{var inst_24646 = (state_24659[(7)]);var inst_24646__$1 = (state_24659[(2)]);var inst_24647 = (function (){var bl_coll_index = inst_24646__$1;return ((function (bl_coll_index,inst_24646,inst_24646__$1,state_val_24660,c__11154__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_24646,inst_24646__$1,state_val_24660,c__11154__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_24648 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_24647);var inst_24649 = cljs.core.deref.call(null,app_state);var inst_24650 = cljs.core.get_in.call(null,inst_24649,index_path);var inst_24651 = cljs.core._EQ_.call(null,inst_24650,inst_24646__$1);var state_24659__$1 = (function (){var statearr_24664 = state_24659;(statearr_24664[(9)] = inst_24648);
(statearr_24664[(7)] = inst_24646__$1);
return statearr_24664;
})();if(inst_24651)
{var statearr_24665_24676 = state_24659__$1;(statearr_24665_24676[(1)] = (3));
} else
{var statearr_24666_24677 = state_24659__$1;(statearr_24666_24677[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24660 === (1)))
{var inst_24644 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_24659__$1 = state_24659;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24659__$1,(2),inst_24644);
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
var state_machine__11099__auto____0 = (function (){var statearr_24670 = [null,null,null,null,null,null,null,null,null,null];(statearr_24670[(0)] = state_machine__11099__auto__);
(statearr_24670[(1)] = (1));
return statearr_24670;
});
var state_machine__11099__auto____1 = (function (state_24659){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_24659);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e24671){if((e24671 instanceof Object))
{var ex__11102__auto__ = e24671;var statearr_24672_24678 = state_24659;(statearr_24672_24678[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24659);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24671;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24679 = state_24659;
state_24659 = G__24679;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_24659){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_24659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__11156__auto__ = (function (){var statearr_24673 = f__11155__auto__.call(null);(statearr_24673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_24673;
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
