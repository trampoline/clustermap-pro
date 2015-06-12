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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__27831){var vec__27832 = p__27831;var z = cljs.core.nth.call(null,vec__27832,(0),null);var t = cljs.core.nth.call(null,vec__27832,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
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
return (function iter__27837(s__27838){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__27838__$1 = s__27838;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27838__$1);if(temp__4126__auto__)
{var s__27838__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27838__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__27838__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__27840 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__27839 = (0);while(true){
if((i__27839 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__27839);cljs.core.chunk_append.call(null,b__27840,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__27841 = (i__27839 + (1));
i__27839 = G__27841;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27840),iter__27837.call(null,cljs.core.chunk_rest.call(null,s__27838__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27840),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__27838__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__27837.call(null,cljs.core.rest.call(null,s__27838__$2)));
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__27842){var map__27858 = p__27842;var map__27858__$1 = ((cljs.core.seq_QMARK_.call(null,map__27858))?cljs.core.apply.call(null,cljs.core.hash_map,map__27858):map__27858);var tolerance = cljs.core.get.call(null,map__27858__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__27858__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__27858__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,comm,map__27858,map__27858__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,comm,map__27858,map__27858__$1,tolerance,bounds,boundaryline_ids){
return (function (state_27863){var state_val_27864 = (state_27863[(1)]);if((state_val_27864 === (2)))
{var inst_27860 = (state_27863[(2)]);var inst_27861 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_27860);var state_27863__$1 = (function (){var statearr_27865 = state_27863;(statearr_27865[(7)] = inst_27861);
return statearr_27865;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27863__$1,true);
} else
{if((state_val_27864 === (1)))
{var state_27863__$1 = state_27863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27863__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto__,comm,map__27858,map__27858__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__9110__auto__,c__9125__auto__,comm,map__27858,map__27858__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27869 = [null,null,null,null,null,null,null,null];(statearr_27869[(0)] = state_machine__9111__auto__);
(statearr_27869[(1)] = (1));
return statearr_27869;
});
var state_machine__9111__auto____1 = (function (state_27863){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27863);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27870){if((e27870 instanceof Object))
{var ex__9114__auto__ = e27870;var statearr_27871_27873 = state_27863;(statearr_27871_27873[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27863);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27870;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27874 = state_27863;
state_27863 = G__27874;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27863){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,comm,map__27858,map__27858__$1,tolerance,bounds,boundaryline_ids))
})();var state__9127__auto__ = (function (){var statearr_27872 = f__9126__auto__.call(null);(statearr_27872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,comm,map__27858,map__27858__$1,tolerance,bounds,boundaryline_ids))
);
return c__9125__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__27842 = null;if (arguments.length > 2) {
  p__27842 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__27842);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__27875){
var app_state = cljs.core.first(arglist__27875);
arglist__27875 = cljs.core.next(arglist__27875);
var boundarylines_path = cljs.core.first(arglist__27875);
var p__27842 = cljs.core.rest(arglist__27875);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__27842);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__27876){var map__27905 = p__27876;var map__27905__$1 = ((cljs.core.seq_QMARK_.call(null,map__27905))?cljs.core.apply.call(null,cljs.core.hash_map,map__27905):map__27905);var tolerance = cljs.core.get.call(null,map__27905__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27905,map__27905__$1,tolerance){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27905,map__27905__$1,tolerance){
return (function (state_27919){var state_val_27920 = (state_27919[(1)]);if((state_val_27920 === (5)))
{var inst_27913 = (state_27919[(2)]);var inst_27914 = cljs.core.deref.call(null,app_state);var inst_27915 = cljs.core.get_in.call(null,inst_27914,cache_path);var state_27919__$1 = (function (){var statearr_27921 = state_27919;(statearr_27921[(7)] = inst_27913);
return statearr_27921;
})();var statearr_27922_27933 = state_27919__$1;(statearr_27922_27933[(2)] = inst_27915);
(statearr_27922_27933[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27920 === (4)))
{var inst_27917 = (state_27919[(2)]);var state_27919__$1 = state_27919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27919__$1,inst_27917);
} else
{if((state_val_27920 === (3)))
{var inst_27908 = cljs.core.PersistentVector.EMPTY_NODE;var inst_27909 = [boundaryline_id];var inst_27910 = (new cljs.core.PersistentVector(null,1,(5),inst_27908,inst_27909,null));var inst_27911 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_27910,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_27919__$1 = state_27919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27919__$1,(5),inst_27911);
} else
{if((state_val_27920 === (2)))
{var state_27919__$1 = state_27919;var statearr_27923_27934 = state_27919__$1;(statearr_27923_27934[(2)] = cached_bl);
(statearr_27923_27934[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27920 === (1)))
{var state_27919__$1 = state_27919;if(cljs.core.truth_(cached_bl))
{var statearr_27924_27935 = state_27919__$1;(statearr_27924_27935[(1)] = (2));
} else
{var statearr_27925_27936 = state_27919__$1;(statearr_27925_27936[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27905,map__27905__$1,tolerance))
;return ((function (switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27905,map__27905__$1,tolerance){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27929 = [null,null,null,null,null,null,null,null];(statearr_27929[(0)] = state_machine__9111__auto__);
(statearr_27929[(1)] = (1));
return statearr_27929;
});
var state_machine__9111__auto____1 = (function (state_27919){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27919);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27930){if((e27930 instanceof Object))
{var ex__9114__auto__ = e27930;var statearr_27931_27937 = state_27919;(statearr_27931_27937[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27919);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27930;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27938 = state_27919;
state_27919 = G__27938;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27919){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27905,map__27905__$1,tolerance))
})();var state__9127__auto__ = (function (){var statearr_27932 = f__9126__auto__.call(null);(statearr_27932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,boundarylines_path__$1,cache_path,cached_bl,map__27905,map__27905__$1,tolerance))
);
return c__9125__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__27876 = null;if (arguments.length > 3) {
  p__27876 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__27876);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__27939){
var app_state = cljs.core.first(arglist__27939);
arglist__27939 = cljs.core.next(arglist__27939);
var boundarylines_path = cljs.core.first(arglist__27939);
arglist__27939 = cljs.core.next(arglist__27939);
var boundaryline_id = cljs.core.first(arglist__27939);
var p__27876 = cljs.core.rest(arglist__27939);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__27876);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_27959){var state_val_27960 = (state_27959[(1)]);if((state_val_27960 === (2)))
{var inst_27955 = (state_27959[(2)]);var inst_27956 = cljs.core.clj__GT_js.call(null,inst_27955);var inst_27957 = console.log(inst_27956);var state_27959__$1 = state_27959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27959__$1,inst_27957);
} else
{if((state_val_27960 === (1)))
{var state_27959__$1 = state_27959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27959__$1,(2),ch);
} else
{return null;
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27964 = [null,null,null,null,null,null,null];(statearr_27964[(0)] = state_machine__9111__auto__);
(statearr_27964[(1)] = (1));
return statearr_27964;
});
var state_machine__9111__auto____1 = (function (state_27959){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27959);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27965){if((e27965 instanceof Object))
{var ex__9114__auto__ = e27965;var statearr_27966_27968 = state_27959;(statearr_27966_27968[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27959);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27965;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27969 = state_27959;
state_27959 = G__27969;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27959){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_27967 = f__9126__auto__.call(null);(statearr_27967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_27967;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__27970){var map__27986 = p__27970;var map__27986__$1 = ((cljs.core.seq_QMARK_.call(null,map__27986))?cljs.core.apply.call(null,cljs.core.hash_map,map__27986):map__27986);var bounds = cljs.core.get.call(null,map__27986__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__27986__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,comm,map__27986,map__27986__$1,bounds,boundaryline_ids){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,comm,map__27986,map__27986__$1,bounds,boundaryline_ids){
return (function (state_27991){var state_val_27992 = (state_27991[(1)]);if((state_val_27992 === (2)))
{var inst_27988 = (state_27991[(2)]);var inst_27989 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_27988);var state_27991__$1 = (function (){var statearr_27993 = state_27991;(statearr_27993[(7)] = inst_27989);
return statearr_27993;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27991__$1,true);
} else
{if((state_val_27992 === (1)))
{var state_27991__$1 = state_27991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27991__$1,(2),comm);
} else
{return null;
}
}
});})(c__9125__auto__,comm,map__27986,map__27986__$1,bounds,boundaryline_ids))
;return ((function (switch__9110__auto__,c__9125__auto__,comm,map__27986,map__27986__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_27997 = [null,null,null,null,null,null,null,null];(statearr_27997[(0)] = state_machine__9111__auto__);
(statearr_27997[(1)] = (1));
return statearr_27997;
});
var state_machine__9111__auto____1 = (function (state_27991){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_27991);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e27998){if((e27998 instanceof Object))
{var ex__9114__auto__ = e27998;var statearr_27999_28001 = state_27991;(statearr_27999_28001[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e27998;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28002 = state_27991;
state_27991 = G__28002;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_27991){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_27991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,comm,map__27986,map__27986__$1,bounds,boundaryline_ids))
})();var state__9127__auto__ = (function (){var statearr_28000 = f__9126__auto__.call(null);(statearr_28000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,comm,map__27986,map__27986__$1,bounds,boundaryline_ids))
);
return c__9125__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__27970 = null;if (arguments.length > 4) {
  p__27970 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__27970);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__28003){
var app_state = cljs.core.first(arglist__28003);
arglist__28003 = cljs.core.next(arglist__28003);
var boundarylines_path = cljs.core.first(arglist__28003);
arglist__28003 = cljs.core.next(arglist__28003);
var collection_id = cljs.core.first(arglist__28003);
arglist__28003 = cljs.core.next(arglist__28003);
var tolerance = cljs.core.first(arglist__28003);
var p__27970 = cljs.core.rest(arglist__28003);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__27970);
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__28004){var vec__28007 = p__28004;var map__28008 = cljs.core.nth.call(null,vec__28007,(0),null);var map__28008__$1 = ((cljs.core.seq_QMARK_.call(null,map__28008))?cljs.core.apply.call(null,cljs.core.hash_map,map__28008):map__28008);var indexes = cljs.core.get.call(null,map__28008__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__28007,map__28008,map__28008__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__28007,map__28008,map__28008__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__28004 = null;if (arguments.length > 3) {
  p__28004 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__28004);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__28009){
var app_state = cljs.core.first(arglist__28009);
arglist__28009 = cljs.core.next(arglist__28009);
var boundarylines_path = cljs.core.first(arglist__28009);
arglist__28009 = cljs.core.next(arglist__28009);
var boundaryline_id = cljs.core.first(arglist__28009);
var p__28004 = cljs.core.rest(arglist__28009);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__28004);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__28010){var map__28015 = p__28010;var map__28015__$1 = ((cljs.core.seq_QMARK_.call(null,map__28015))?cljs.core.apply.call(null,cljs.core.hash_map,map__28015):map__28015);var boundaryline_ids = cljs.core.get.call(null,map__28015__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28015,map__28015__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28015,map__28015__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28015,map__28015__$1,boundaryline_ids){
return (function (p__28016){var vec__28017 = p__28016;var blid = cljs.core.nth.call(null,vec__28017,(0),null);var vec__28018 = cljs.core.nth.call(null,vec__28017,(1),null);var tol = cljs.core.nth.call(null,vec__28018,(0),null);var bl = cljs.core.nth.call(null,vec__28018,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28015,map__28015__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__28010 = null;if (arguments.length > 5) {
  p__28010 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__28010);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__28019){
var app_state = cljs.core.first(arglist__28019);
arglist__28019 = cljs.core.next(arglist__28019);
var boundarylines_path = cljs.core.first(arglist__28019);
arglist__28019 = cljs.core.next(arglist__28019);
var collection_id = cljs.core.first(arglist__28019);
arglist__28019 = cljs.core.next(arglist__28019);
var bounds = cljs.core.first(arglist__28019);
arglist__28019 = cljs.core.next(arglist__28019);
var zoom = cljs.core.first(arglist__28019);
var p__28010 = cljs.core.rest(arglist__28019);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__28010);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__28024_28028 = cljs.core.seq.call(null,keys);var chunk__28025_28029 = null;var count__28026_28030 = (0);var i__28027_28031 = (0);while(true){
if((i__28027_28031 < count__28026_28030))
{var k_28032 = cljs.core._nth.call(null,chunk__28025_28029,i__28027_28031);var obj_28033 = (js_index[k_28032]);var geom_28034 = (obj_28033["geojson"]);var feature_28035 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28033["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28033["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28033["compact_name"])], null)], null));var __28036__$1 = (feature_28035["geometry"] = geom_28034);var __28037__$2 = ((feature_28035["properties"])["index_object"] = obj_28033);features.push(feature_28035);
{
var G__28038 = seq__28024_28028;
var G__28039 = chunk__28025_28029;
var G__28040 = count__28026_28030;
var G__28041 = (i__28027_28031 + (1));
seq__28024_28028 = G__28038;
chunk__28025_28029 = G__28039;
count__28026_28030 = G__28040;
i__28027_28031 = G__28041;
continue;
}
} else
{var temp__4126__auto___28042 = cljs.core.seq.call(null,seq__28024_28028);if(temp__4126__auto___28042)
{var seq__28024_28043__$1 = temp__4126__auto___28042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28024_28043__$1))
{var c__4408__auto___28044 = cljs.core.chunk_first.call(null,seq__28024_28043__$1);{
var G__28045 = cljs.core.chunk_rest.call(null,seq__28024_28043__$1);
var G__28046 = c__4408__auto___28044;
var G__28047 = cljs.core.count.call(null,c__4408__auto___28044);
var G__28048 = (0);
seq__28024_28028 = G__28045;
chunk__28025_28029 = G__28046;
count__28026_28030 = G__28047;
i__28027_28031 = G__28048;
continue;
}
} else
{var k_28049 = cljs.core.first.call(null,seq__28024_28043__$1);var obj_28050 = (js_index[k_28049]);var geom_28051 = (obj_28050["geojson"]);var feature_28052 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28050["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28050["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28050["compact_name"])], null)], null));var __28053__$1 = (feature_28052["geometry"] = geom_28051);var __28054__$2 = ((feature_28052["properties"])["index_object"] = obj_28050);features.push(feature_28052);
{
var G__28055 = cljs.core.next.call(null,seq__28024_28043__$1);
var G__28056 = null;
var G__28057 = (0);
var G__28058 = (0);
seq__28024_28028 = G__28055;
chunk__28025_28029 = G__28056;
count__28026_28030 = G__28057;
i__28027_28031 = G__28058;
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
return (function (state_28104){var state_val_28105 = (state_28104[(1)]);if((state_val_28105 === (5)))
{var inst_28091 = (state_28104[(7)]);var inst_28101 = (state_28104[(2)]);var inst_28102 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_28091);var state_28104__$1 = (function (){var statearr_28106 = state_28104;(statearr_28106[(8)] = inst_28101);
return statearr_28106;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28104__$1,inst_28102);
} else
{if((state_val_28105 === (4)))
{var state_28104__$1 = state_28104;var statearr_28107_28119 = state_28104__$1;(statearr_28107_28119[(2)] = null);
(statearr_28107_28119[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28105 === (3)))
{var inst_28091 = (state_28104[(7)]);var inst_28098 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_28091);var state_28104__$1 = state_28104;var statearr_28108_28120 = state_28104__$1;(statearr_28108_28120[(2)] = inst_28098);
(statearr_28108_28120[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28105 === (2)))
{var inst_28091 = (state_28104[(7)]);var inst_28091__$1 = (state_28104[(2)]);var inst_28092 = (function (){var bl_coll_index = inst_28091__$1;return ((function (bl_coll_index,inst_28091,inst_28091__$1,state_val_28105,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_28091,inst_28091__$1,state_val_28105,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_28093 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_28092);var inst_28094 = cljs.core.deref.call(null,app_state);var inst_28095 = cljs.core.get_in.call(null,inst_28094,index_path);var inst_28096 = cljs.core._EQ_.call(null,inst_28095,inst_28091__$1);var state_28104__$1 = (function (){var statearr_28109 = state_28104;(statearr_28109[(9)] = inst_28093);
(statearr_28109[(7)] = inst_28091__$1);
return statearr_28109;
})();if(inst_28096)
{var statearr_28110_28121 = state_28104__$1;(statearr_28110_28121[(1)] = (3));
} else
{var statearr_28111_28122 = state_28104__$1;(statearr_28111_28122[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28105 === (1)))
{var inst_28089 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_28104__$1 = state_28104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28104__$1,(2),inst_28089);
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
var state_machine__9111__auto____0 = (function (){var statearr_28115 = [null,null,null,null,null,null,null,null,null,null];(statearr_28115[(0)] = state_machine__9111__auto__);
(statearr_28115[(1)] = (1));
return statearr_28115;
});
var state_machine__9111__auto____1 = (function (state_28104){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_28104);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e28116){if((e28116 instanceof Object))
{var ex__9114__auto__ = e28116;var statearr_28117_28123 = state_28104;(statearr_28117_28123[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28104);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28116;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28124 = state_28104;
state_28104 = G__28124;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_28104){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_28104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__9127__auto__ = (function (){var statearr_28118 = f__9126__auto__.call(null);(statearr_28118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_28118;
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
