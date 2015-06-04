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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__23820){var vec__23821 = p__23820;var z = cljs.core.nth.call(null,vec__23821,(0),null);var t = cljs.core.nth.call(null,vec__23821,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
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
return (function iter__23826(s__23827){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__23827__$1 = s__23827;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23827__$1);if(temp__4126__auto__)
{var s__23827__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23827__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__23827__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__23829 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__23828 = (0);while(true){
if((i__23828 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__23828);cljs.core.chunk_append.call(null,b__23829,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__23830 = (i__23828 + (1));
i__23828 = G__23830;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23829),iter__23826.call(null,cljs.core.chunk_rest.call(null,s__23827__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23829),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__23827__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__23826.call(null,cljs.core.rest.call(null,s__23827__$2)));
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__23831){var map__23847 = p__23831;var map__23847__$1 = ((cljs.core.seq_QMARK_.call(null,map__23847))?cljs.core.apply.call(null,cljs.core.hash_map,map__23847):map__23847);var tolerance = cljs.core.get.call(null,map__23847__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__23847__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__23847__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,comm,map__23847,map__23847__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,comm,map__23847,map__23847__$1,tolerance,bounds,boundaryline_ids){
return (function (state_23852){var state_val_23853 = (state_23852[(1)]);if((state_val_23853 === (2)))
{var inst_23849 = (state_23852[(2)]);var inst_23850 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_23849);var state_23852__$1 = (function (){var statearr_23854 = state_23852;(statearr_23854[(7)] = inst_23850);
return statearr_23854;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23852__$1,true);
} else
{if((state_val_23853 === (1)))
{var state_23852__$1 = state_23852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23852__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto__,comm,map__23847,map__23847__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__11461__auto__,c__11517__auto__,comm,map__23847,map__23847__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23858 = [null,null,null,null,null,null,null,null];(statearr_23858[(0)] = state_machine__11462__auto__);
(statearr_23858[(1)] = (1));
return statearr_23858;
});
var state_machine__11462__auto____1 = (function (state_23852){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23852);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23859){if((e23859 instanceof Object))
{var ex__11465__auto__ = e23859;var statearr_23860_23862 = state_23852;(statearr_23860_23862[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23852);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23859;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23863 = state_23852;
state_23852 = G__23863;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23852){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,comm,map__23847,map__23847__$1,tolerance,bounds,boundaryline_ids))
})();var state__11519__auto__ = (function (){var statearr_23861 = f__11518__auto__.call(null);(statearr_23861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23861;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,comm,map__23847,map__23847__$1,tolerance,bounds,boundaryline_ids))
);
return c__11517__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__23831 = null;if (arguments.length > 2) {
  p__23831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__23831);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__23864){
var app_state = cljs.core.first(arglist__23864);
arglist__23864 = cljs.core.next(arglist__23864);
var boundarylines_path = cljs.core.first(arglist__23864);
var p__23831 = cljs.core.rest(arglist__23864);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__23831);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__23865){var map__23894 = p__23865;var map__23894__$1 = ((cljs.core.seq_QMARK_.call(null,map__23894))?cljs.core.apply.call(null,cljs.core.hash_map,map__23894):map__23894);var tolerance = cljs.core.get.call(null,map__23894__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23894,map__23894__$1,tolerance){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23894,map__23894__$1,tolerance){
return (function (state_23908){var state_val_23909 = (state_23908[(1)]);if((state_val_23909 === (5)))
{var inst_23902 = (state_23908[(2)]);var inst_23903 = cljs.core.deref.call(null,app_state);var inst_23904 = cljs.core.get_in.call(null,inst_23903,cache_path);var state_23908__$1 = (function (){var statearr_23910 = state_23908;(statearr_23910[(7)] = inst_23902);
return statearr_23910;
})();var statearr_23911_23922 = state_23908__$1;(statearr_23911_23922[(2)] = inst_23904);
(statearr_23911_23922[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23909 === (4)))
{var inst_23906 = (state_23908[(2)]);var state_23908__$1 = state_23908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23908__$1,inst_23906);
} else
{if((state_val_23909 === (3)))
{var inst_23897 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23898 = [boundaryline_id];var inst_23899 = (new cljs.core.PersistentVector(null,1,(5),inst_23897,inst_23898,null));var inst_23900 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_23899,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_23908__$1 = state_23908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23908__$1,(5),inst_23900);
} else
{if((state_val_23909 === (2)))
{var state_23908__$1 = state_23908;var statearr_23912_23923 = state_23908__$1;(statearr_23912_23923[(2)] = cached_bl);
(statearr_23912_23923[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23909 === (1)))
{var state_23908__$1 = state_23908;if(cljs.core.truth_(cached_bl))
{var statearr_23913_23924 = state_23908__$1;(statearr_23913_23924[(1)] = (2));
} else
{var statearr_23914_23925 = state_23908__$1;(statearr_23914_23925[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23894,map__23894__$1,tolerance))
;return ((function (switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23894,map__23894__$1,tolerance){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23918 = [null,null,null,null,null,null,null,null];(statearr_23918[(0)] = state_machine__11462__auto__);
(statearr_23918[(1)] = (1));
return statearr_23918;
});
var state_machine__11462__auto____1 = (function (state_23908){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23908);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23919){if((e23919 instanceof Object))
{var ex__11465__auto__ = e23919;var statearr_23920_23926 = state_23908;(statearr_23920_23926[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23908);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23919;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23927 = state_23908;
state_23908 = G__23927;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23908){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23894,map__23894__$1,tolerance))
})();var state__11519__auto__ = (function (){var statearr_23921 = f__11518__auto__.call(null);(statearr_23921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23894,map__23894__$1,tolerance))
);
return c__11517__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__23865 = null;if (arguments.length > 3) {
  p__23865 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__23865);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__23928){
var app_state = cljs.core.first(arglist__23928);
arglist__23928 = cljs.core.next(arglist__23928);
var boundarylines_path = cljs.core.first(arglist__23928);
arglist__23928 = cljs.core.next(arglist__23928);
var boundaryline_id = cljs.core.first(arglist__23928);
var p__23865 = cljs.core.rest(arglist__23928);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__23865);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_23948){var state_val_23949 = (state_23948[(1)]);if((state_val_23949 === (2)))
{var inst_23944 = (state_23948[(2)]);var inst_23945 = cljs.core.clj__GT_js.call(null,inst_23944);var inst_23946 = console.log(inst_23945);var state_23948__$1 = state_23948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23948__$1,inst_23946);
} else
{if((state_val_23949 === (1)))
{var state_23948__$1 = state_23948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23948__$1,(2),ch);
} else
{return null;
}
}
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23953 = [null,null,null,null,null,null,null];(statearr_23953[(0)] = state_machine__11462__auto__);
(statearr_23953[(1)] = (1));
return statearr_23953;
});
var state_machine__11462__auto____1 = (function (state_23948){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23948);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23954){if((e23954 instanceof Object))
{var ex__11465__auto__ = e23954;var statearr_23955_23957 = state_23948;(statearr_23955_23957[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23948);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23954;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23958 = state_23948;
state_23948 = G__23958;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23948){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_23956 = f__11518__auto__.call(null);(statearr_23956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
});
/**
* fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
* general caches. returns a single value true on the go-block channel when complete
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundarylines = (function() { 
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__23959){var map__23975 = p__23959;var map__23975__$1 = ((cljs.core.seq_QMARK_.call(null,map__23975))?cljs.core.apply.call(null,cljs.core.hash_map,map__23975):map__23975);var bounds = cljs.core.get.call(null,map__23975__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__23975__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,comm,map__23975,map__23975__$1,bounds,boundaryline_ids){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,comm,map__23975,map__23975__$1,bounds,boundaryline_ids){
return (function (state_23980){var state_val_23981 = (state_23980[(1)]);if((state_val_23981 === (2)))
{var inst_23977 = (state_23980[(2)]);var inst_23978 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_23977);var state_23980__$1 = (function (){var statearr_23982 = state_23980;(statearr_23982[(7)] = inst_23978);
return statearr_23982;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23980__$1,true);
} else
{if((state_val_23981 === (1)))
{var state_23980__$1 = state_23980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23980__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto__,comm,map__23975,map__23975__$1,bounds,boundaryline_ids))
;return ((function (switch__11461__auto__,c__11517__auto__,comm,map__23975,map__23975__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23986 = [null,null,null,null,null,null,null,null];(statearr_23986[(0)] = state_machine__11462__auto__);
(statearr_23986[(1)] = (1));
return statearr_23986;
});
var state_machine__11462__auto____1 = (function (state_23980){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23980);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23987){if((e23987 instanceof Object))
{var ex__11465__auto__ = e23987;var statearr_23988_23990 = state_23980;(statearr_23988_23990[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23980);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23987;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23991 = state_23980;
state_23980 = G__23991;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23980){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,comm,map__23975,map__23975__$1,bounds,boundaryline_ids))
})();var state__11519__auto__ = (function (){var statearr_23989 = f__11518__auto__.call(null);(statearr_23989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,comm,map__23975,map__23975__$1,bounds,boundaryline_ids))
);
return c__11517__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__23959 = null;if (arguments.length > 4) {
  p__23959 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__23959);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__23992){
var app_state = cljs.core.first(arglist__23992);
arglist__23992 = cljs.core.next(arglist__23992);
var boundarylines_path = cljs.core.first(arglist__23992);
arglist__23992 = cljs.core.next(arglist__23992);
var collection_id = cljs.core.first(arglist__23992);
arglist__23992 = cljs.core.next(arglist__23992);
var tolerance = cljs.core.first(arglist__23992);
var p__23959 = cljs.core.rest(arglist__23992);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__23959);
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__23993){var vec__23996 = p__23993;var map__23997 = cljs.core.nth.call(null,vec__23996,(0),null);var map__23997__$1 = ((cljs.core.seq_QMARK_.call(null,map__23997))?cljs.core.apply.call(null,cljs.core.hash_map,map__23997):map__23997);var indexes = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__23996,map__23997,map__23997__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__23996,map__23997,map__23997__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__23993 = null;if (arguments.length > 3) {
  p__23993 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__23993);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__23998){
var app_state = cljs.core.first(arglist__23998);
arglist__23998 = cljs.core.next(arglist__23998);
var boundarylines_path = cljs.core.first(arglist__23998);
arglist__23998 = cljs.core.next(arglist__23998);
var boundaryline_id = cljs.core.first(arglist__23998);
var p__23993 = cljs.core.rest(arglist__23998);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__23993);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__23999){var map__24004 = p__23999;var map__24004__$1 = ((cljs.core.seq_QMARK_.call(null,map__24004))?cljs.core.apply.call(null,cljs.core.hash_map,map__24004):map__24004);var boundaryline_ids = cljs.core.get.call(null,map__24004__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24004,map__24004__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24004,map__24004__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24004,map__24004__$1,boundaryline_ids){
return (function (p__24005){var vec__24006 = p__24005;var blid = cljs.core.nth.call(null,vec__24006,(0),null);var vec__24007 = cljs.core.nth.call(null,vec__24006,(1),null);var tol = cljs.core.nth.call(null,vec__24007,(0),null);var bl = cljs.core.nth.call(null,vec__24007,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24004,map__24004__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__23999 = null;if (arguments.length > 5) {
  p__23999 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__23999);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__24008){
var app_state = cljs.core.first(arglist__24008);
arglist__24008 = cljs.core.next(arglist__24008);
var boundarylines_path = cljs.core.first(arglist__24008);
arglist__24008 = cljs.core.next(arglist__24008);
var collection_id = cljs.core.first(arglist__24008);
arglist__24008 = cljs.core.next(arglist__24008);
var bounds = cljs.core.first(arglist__24008);
arglist__24008 = cljs.core.next(arglist__24008);
var zoom = cljs.core.first(arglist__24008);
var p__23999 = cljs.core.rest(arglist__24008);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__23999);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__24013_24017 = cljs.core.seq.call(null,keys);var chunk__24014_24018 = null;var count__24015_24019 = (0);var i__24016_24020 = (0);while(true){
if((i__24016_24020 < count__24015_24019))
{var k_24021 = cljs.core._nth.call(null,chunk__24014_24018,i__24016_24020);var obj_24022 = (js_index[k_24021]);var geom_24023 = (obj_24022["geojson"]);var feature_24024 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24022["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24022["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24022["compact_name"])], null)], null));var __24025__$1 = (feature_24024["geometry"] = geom_24023);var __24026__$2 = ((feature_24024["properties"])["index_object"] = obj_24022);features.push(feature_24024);
{
var G__24027 = seq__24013_24017;
var G__24028 = chunk__24014_24018;
var G__24029 = count__24015_24019;
var G__24030 = (i__24016_24020 + (1));
seq__24013_24017 = G__24027;
chunk__24014_24018 = G__24028;
count__24015_24019 = G__24029;
i__24016_24020 = G__24030;
continue;
}
} else
{var temp__4126__auto___24031 = cljs.core.seq.call(null,seq__24013_24017);if(temp__4126__auto___24031)
{var seq__24013_24032__$1 = temp__4126__auto___24031;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24013_24032__$1))
{var c__4408__auto___24033 = cljs.core.chunk_first.call(null,seq__24013_24032__$1);{
var G__24034 = cljs.core.chunk_rest.call(null,seq__24013_24032__$1);
var G__24035 = c__4408__auto___24033;
var G__24036 = cljs.core.count.call(null,c__4408__auto___24033);
var G__24037 = (0);
seq__24013_24017 = G__24034;
chunk__24014_24018 = G__24035;
count__24015_24019 = G__24036;
i__24016_24020 = G__24037;
continue;
}
} else
{var k_24038 = cljs.core.first.call(null,seq__24013_24032__$1);var obj_24039 = (js_index[k_24038]);var geom_24040 = (obj_24039["geojson"]);var feature_24041 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24039["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24039["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24039["compact_name"])], null)], null));var __24042__$1 = (feature_24041["geometry"] = geom_24040);var __24043__$2 = ((feature_24041["properties"])["index_object"] = obj_24039);features.push(feature_24041);
{
var G__24044 = cljs.core.next.call(null,seq__24013_24032__$1);
var G__24045 = null;
var G__24046 = (0);
var G__24047 = (0);
seq__24013_24017 = G__24044;
chunk__24014_24018 = G__24045;
count__24015_24019 = G__24046;
i__24016_24020 = G__24047;
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
{var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_24093){var state_val_24094 = (state_24093[(1)]);if((state_val_24094 === (5)))
{var inst_24080 = (state_24093[(7)]);var inst_24090 = (state_24093[(2)]);var inst_24091 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_24080);var state_24093__$1 = (function (){var statearr_24095 = state_24093;(statearr_24095[(8)] = inst_24090);
return statearr_24095;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24093__$1,inst_24091);
} else
{if((state_val_24094 === (4)))
{var state_24093__$1 = state_24093;var statearr_24096_24108 = state_24093__$1;(statearr_24096_24108[(2)] = null);
(statearr_24096_24108[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24094 === (3)))
{var inst_24080 = (state_24093[(7)]);var inst_24087 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_24080);var state_24093__$1 = state_24093;var statearr_24097_24109 = state_24093__$1;(statearr_24097_24109[(2)] = inst_24087);
(statearr_24097_24109[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24094 === (2)))
{var inst_24080 = (state_24093[(7)]);var inst_24080__$1 = (state_24093[(2)]);var inst_24081 = (function (){var bl_coll_index = inst_24080__$1;return ((function (bl_coll_index,inst_24080,inst_24080__$1,state_val_24094,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_24080,inst_24080__$1,state_val_24094,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_24082 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_24081);var inst_24083 = cljs.core.deref.call(null,app_state);var inst_24084 = cljs.core.get_in.call(null,inst_24083,index_path);var inst_24085 = cljs.core._EQ_.call(null,inst_24084,inst_24080__$1);var state_24093__$1 = (function (){var statearr_24098 = state_24093;(statearr_24098[(7)] = inst_24080__$1);
(statearr_24098[(9)] = inst_24082);
return statearr_24098;
})();if(inst_24085)
{var statearr_24099_24110 = state_24093__$1;(statearr_24099_24110[(1)] = (3));
} else
{var statearr_24100_24111 = state_24093__$1;(statearr_24100_24111[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24094 === (1)))
{var inst_24078 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_24093__$1 = state_24093;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24093__$1,(2),inst_24078);
} else
{return null;
}
}
}
}
}
});})(c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24104 = [null,null,null,null,null,null,null,null,null,null];(statearr_24104[(0)] = state_machine__11462__auto__);
(statearr_24104[(1)] = (1));
return statearr_24104;
});
var state_machine__11462__auto____1 = (function (state_24093){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24093);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24105){if((e24105 instanceof Object))
{var ex__11465__auto__ = e24105;var statearr_24106_24112 = state_24093;(statearr_24106_24112[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24093);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24105;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24113 = state_24093;
state_24093 = G__24113;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24093){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__11519__auto__ = (function (){var statearr_24107 = f__11518__auto__.call(null);(statearr_24107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24107;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__11517__auto__;
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
