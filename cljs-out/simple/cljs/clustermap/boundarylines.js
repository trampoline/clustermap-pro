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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__24010){var vec__24011 = p__24010;var z = cljs.core.nth.call(null,vec__24011,(0),null);var t = cljs.core.nth.call(null,vec__24011,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
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
return (function iter__24016(s__24017){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__24017__$1 = s__24017;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24017__$1);if(temp__4126__auto__)
{var s__24017__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24017__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24017__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24019 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24018 = (0);while(true){
if((i__24018 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__24018);cljs.core.chunk_append.call(null,b__24019,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__24020 = (i__24018 + (1));
i__24018 = G__24020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24019),iter__24016.call(null,cljs.core.chunk_rest.call(null,s__24017__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24019),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__24017__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__24016.call(null,cljs.core.rest.call(null,s__24017__$2)));
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__24021){var map__24037 = p__24021;var map__24037__$1 = ((cljs.core.seq_QMARK_.call(null,map__24037))?cljs.core.apply.call(null,cljs.core.hash_map,map__24037):map__24037);var tolerance = cljs.core.get.call(null,map__24037__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__24037__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__24037__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,comm,map__24037,map__24037__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,comm,map__24037,map__24037__$1,tolerance,bounds,boundaryline_ids){
return (function (state_24042){var state_val_24043 = (state_24042[(1)]);if((state_val_24043 === (2)))
{var inst_24039 = (state_24042[(2)]);var inst_24040 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_24039);var state_24042__$1 = (function (){var statearr_24044 = state_24042;(statearr_24044[(7)] = inst_24040);
return statearr_24044;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24042__$1,true);
} else
{if((state_val_24043 === (1)))
{var state_24042__$1 = state_24042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24042__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto__,comm,map__24037,map__24037__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__11461__auto__,c__11517__auto__,comm,map__24037,map__24037__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24048 = [null,null,null,null,null,null,null,null];(statearr_24048[(0)] = state_machine__11462__auto__);
(statearr_24048[(1)] = (1));
return statearr_24048;
});
var state_machine__11462__auto____1 = (function (state_24042){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24042);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24049){if((e24049 instanceof Object))
{var ex__11465__auto__ = e24049;var statearr_24050_24052 = state_24042;(statearr_24050_24052[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24049;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24053 = state_24042;
state_24042 = G__24053;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24042){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,comm,map__24037,map__24037__$1,tolerance,bounds,boundaryline_ids))
})();var state__11519__auto__ = (function (){var statearr_24051 = f__11518__auto__.call(null);(statearr_24051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,comm,map__24037,map__24037__$1,tolerance,bounds,boundaryline_ids))
);
return c__11517__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__24021 = null;if (arguments.length > 2) {
  p__24021 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__24021);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__24054){
var app_state = cljs.core.first(arglist__24054);
arglist__24054 = cljs.core.next(arglist__24054);
var boundarylines_path = cljs.core.first(arglist__24054);
var p__24021 = cljs.core.rest(arglist__24054);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__24021);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__24055){var map__24084 = p__24055;var map__24084__$1 = ((cljs.core.seq_QMARK_.call(null,map__24084))?cljs.core.apply.call(null,cljs.core.hash_map,map__24084):map__24084);var tolerance = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24084,map__24084__$1,tolerance){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24084,map__24084__$1,tolerance){
return (function (state_24098){var state_val_24099 = (state_24098[(1)]);if((state_val_24099 === (5)))
{var inst_24092 = (state_24098[(2)]);var inst_24093 = cljs.core.deref.call(null,app_state);var inst_24094 = cljs.core.get_in.call(null,inst_24093,cache_path);var state_24098__$1 = (function (){var statearr_24100 = state_24098;(statearr_24100[(7)] = inst_24092);
return statearr_24100;
})();var statearr_24101_24112 = state_24098__$1;(statearr_24101_24112[(2)] = inst_24094);
(statearr_24101_24112[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24099 === (4)))
{var inst_24096 = (state_24098[(2)]);var state_24098__$1 = state_24098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24098__$1,inst_24096);
} else
{if((state_val_24099 === (3)))
{var inst_24087 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24088 = [boundaryline_id];var inst_24089 = (new cljs.core.PersistentVector(null,1,(5),inst_24087,inst_24088,null));var inst_24090 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_24089,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_24098__$1 = state_24098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24098__$1,(5),inst_24090);
} else
{if((state_val_24099 === (2)))
{var state_24098__$1 = state_24098;var statearr_24102_24113 = state_24098__$1;(statearr_24102_24113[(2)] = cached_bl);
(statearr_24102_24113[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24099 === (1)))
{var state_24098__$1 = state_24098;if(cljs.core.truth_(cached_bl))
{var statearr_24103_24114 = state_24098__$1;(statearr_24103_24114[(1)] = (2));
} else
{var statearr_24104_24115 = state_24098__$1;(statearr_24104_24115[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24084,map__24084__$1,tolerance))
;return ((function (switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24084,map__24084__$1,tolerance){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24108 = [null,null,null,null,null,null,null,null];(statearr_24108[(0)] = state_machine__11462__auto__);
(statearr_24108[(1)] = (1));
return statearr_24108;
});
var state_machine__11462__auto____1 = (function (state_24098){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24098);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24109){if((e24109 instanceof Object))
{var ex__11465__auto__ = e24109;var statearr_24110_24116 = state_24098;(statearr_24110_24116[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24098);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24109;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24117 = state_24098;
state_24098 = G__24117;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24098){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24084,map__24084__$1,tolerance))
})();var state__11519__auto__ = (function (){var statearr_24111 = f__11518__auto__.call(null);(statearr_24111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24084,map__24084__$1,tolerance))
);
return c__11517__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__24055 = null;if (arguments.length > 3) {
  p__24055 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__24055);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__24118){
var app_state = cljs.core.first(arglist__24118);
arglist__24118 = cljs.core.next(arglist__24118);
var boundarylines_path = cljs.core.first(arglist__24118);
arglist__24118 = cljs.core.next(arglist__24118);
var boundaryline_id = cljs.core.first(arglist__24118);
var p__24055 = cljs.core.rest(arglist__24118);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__24055);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_24138){var state_val_24139 = (state_24138[(1)]);if((state_val_24139 === (2)))
{var inst_24134 = (state_24138[(2)]);var inst_24135 = cljs.core.clj__GT_js.call(null,inst_24134);var inst_24136 = console.log(inst_24135);var state_24138__$1 = state_24138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24138__$1,inst_24136);
} else
{if((state_val_24139 === (1)))
{var state_24138__$1 = state_24138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24138__$1,(2),ch);
} else
{return null;
}
}
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24143 = [null,null,null,null,null,null,null];(statearr_24143[(0)] = state_machine__11462__auto__);
(statearr_24143[(1)] = (1));
return statearr_24143;
});
var state_machine__11462__auto____1 = (function (state_24138){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24138);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24144){if((e24144 instanceof Object))
{var ex__11465__auto__ = e24144;var statearr_24145_24147 = state_24138;(statearr_24145_24147[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24138);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24144;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24148 = state_24138;
state_24138 = G__24148;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24138){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_24146 = f__11518__auto__.call(null);(statearr_24146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24146;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__24149){var map__24165 = p__24149;var map__24165__$1 = ((cljs.core.seq_QMARK_.call(null,map__24165))?cljs.core.apply.call(null,cljs.core.hash_map,map__24165):map__24165);var bounds = cljs.core.get.call(null,map__24165__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__24165__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,comm,map__24165,map__24165__$1,bounds,boundaryline_ids){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,comm,map__24165,map__24165__$1,bounds,boundaryline_ids){
return (function (state_24170){var state_val_24171 = (state_24170[(1)]);if((state_val_24171 === (2)))
{var inst_24167 = (state_24170[(2)]);var inst_24168 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_24167);var state_24170__$1 = (function (){var statearr_24172 = state_24170;(statearr_24172[(7)] = inst_24168);
return statearr_24172;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24170__$1,true);
} else
{if((state_val_24171 === (1)))
{var state_24170__$1 = state_24170;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24170__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto__,comm,map__24165,map__24165__$1,bounds,boundaryline_ids))
;return ((function (switch__11461__auto__,c__11517__auto__,comm,map__24165,map__24165__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24176 = [null,null,null,null,null,null,null,null];(statearr_24176[(0)] = state_machine__11462__auto__);
(statearr_24176[(1)] = (1));
return statearr_24176;
});
var state_machine__11462__auto____1 = (function (state_24170){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24170);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24177){if((e24177 instanceof Object))
{var ex__11465__auto__ = e24177;var statearr_24178_24180 = state_24170;(statearr_24178_24180[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24170);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24177;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24181 = state_24170;
state_24170 = G__24181;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24170){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,comm,map__24165,map__24165__$1,bounds,boundaryline_ids))
})();var state__11519__auto__ = (function (){var statearr_24179 = f__11518__auto__.call(null);(statearr_24179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,comm,map__24165,map__24165__$1,bounds,boundaryline_ids))
);
return c__11517__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__24149 = null;if (arguments.length > 4) {
  p__24149 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__24149);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__24182){
var app_state = cljs.core.first(arglist__24182);
arglist__24182 = cljs.core.next(arglist__24182);
var boundarylines_path = cljs.core.first(arglist__24182);
arglist__24182 = cljs.core.next(arglist__24182);
var collection_id = cljs.core.first(arglist__24182);
arglist__24182 = cljs.core.next(arglist__24182);
var tolerance = cljs.core.first(arglist__24182);
var p__24149 = cljs.core.rest(arglist__24182);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__24149);
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__24183){var vec__24186 = p__24183;var map__24187 = cljs.core.nth.call(null,vec__24186,(0),null);var map__24187__$1 = ((cljs.core.seq_QMARK_.call(null,map__24187))?cljs.core.apply.call(null,cljs.core.hash_map,map__24187):map__24187);var indexes = cljs.core.get.call(null,map__24187__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__24186,map__24187,map__24187__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__24186,map__24187,map__24187__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__24183 = null;if (arguments.length > 3) {
  p__24183 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__24183);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__24188){
var app_state = cljs.core.first(arglist__24188);
arglist__24188 = cljs.core.next(arglist__24188);
var boundarylines_path = cljs.core.first(arglist__24188);
arglist__24188 = cljs.core.next(arglist__24188);
var boundaryline_id = cljs.core.first(arglist__24188);
var p__24183 = cljs.core.rest(arglist__24188);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__24183);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__24189){var map__24194 = p__24189;var map__24194__$1 = ((cljs.core.seq_QMARK_.call(null,map__24194))?cljs.core.apply.call(null,cljs.core.hash_map,map__24194):map__24194);var boundaryline_ids = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24194,map__24194__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24194,map__24194__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24194,map__24194__$1,boundaryline_ids){
return (function (p__24195){var vec__24196 = p__24195;var blid = cljs.core.nth.call(null,vec__24196,(0),null);var vec__24197 = cljs.core.nth.call(null,vec__24196,(1),null);var tol = cljs.core.nth.call(null,vec__24197,(0),null);var bl = cljs.core.nth.call(null,vec__24197,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24194,map__24194__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__24189 = null;if (arguments.length > 5) {
  p__24189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__24189);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__24198){
var app_state = cljs.core.first(arglist__24198);
arglist__24198 = cljs.core.next(arglist__24198);
var boundarylines_path = cljs.core.first(arglist__24198);
arglist__24198 = cljs.core.next(arglist__24198);
var collection_id = cljs.core.first(arglist__24198);
arglist__24198 = cljs.core.next(arglist__24198);
var bounds = cljs.core.first(arglist__24198);
arglist__24198 = cljs.core.next(arglist__24198);
var zoom = cljs.core.first(arglist__24198);
var p__24189 = cljs.core.rest(arglist__24198);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__24189);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__24203_24207 = cljs.core.seq.call(null,keys);var chunk__24204_24208 = null;var count__24205_24209 = (0);var i__24206_24210 = (0);while(true){
if((i__24206_24210 < count__24205_24209))
{var k_24211 = cljs.core._nth.call(null,chunk__24204_24208,i__24206_24210);var obj_24212 = (js_index[k_24211]);var geom_24213 = (obj_24212["geojson"]);var feature_24214 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24212["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24212["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24212["compact_name"])], null)], null));var __24215__$1 = (feature_24214["geometry"] = geom_24213);var __24216__$2 = ((feature_24214["properties"])["index_object"] = obj_24212);features.push(feature_24214);
{
var G__24217 = seq__24203_24207;
var G__24218 = chunk__24204_24208;
var G__24219 = count__24205_24209;
var G__24220 = (i__24206_24210 + (1));
seq__24203_24207 = G__24217;
chunk__24204_24208 = G__24218;
count__24205_24209 = G__24219;
i__24206_24210 = G__24220;
continue;
}
} else
{var temp__4126__auto___24221 = cljs.core.seq.call(null,seq__24203_24207);if(temp__4126__auto___24221)
{var seq__24203_24222__$1 = temp__4126__auto___24221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24203_24222__$1))
{var c__4408__auto___24223 = cljs.core.chunk_first.call(null,seq__24203_24222__$1);{
var G__24224 = cljs.core.chunk_rest.call(null,seq__24203_24222__$1);
var G__24225 = c__4408__auto___24223;
var G__24226 = cljs.core.count.call(null,c__4408__auto___24223);
var G__24227 = (0);
seq__24203_24207 = G__24224;
chunk__24204_24208 = G__24225;
count__24205_24209 = G__24226;
i__24206_24210 = G__24227;
continue;
}
} else
{var k_24228 = cljs.core.first.call(null,seq__24203_24222__$1);var obj_24229 = (js_index[k_24228]);var geom_24230 = (obj_24229["geojson"]);var feature_24231 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24229["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24229["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24229["compact_name"])], null)], null));var __24232__$1 = (feature_24231["geometry"] = geom_24230);var __24233__$2 = ((feature_24231["properties"])["index_object"] = obj_24229);features.push(feature_24231);
{
var G__24234 = cljs.core.next.call(null,seq__24203_24222__$1);
var G__24235 = null;
var G__24236 = (0);
var G__24237 = (0);
seq__24203_24207 = G__24234;
chunk__24204_24208 = G__24235;
count__24205_24209 = G__24236;
i__24206_24210 = G__24237;
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
return (function (state_24283){var state_val_24284 = (state_24283[(1)]);if((state_val_24284 === (5)))
{var inst_24270 = (state_24283[(7)]);var inst_24280 = (state_24283[(2)]);var inst_24281 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_24270);var state_24283__$1 = (function (){var statearr_24285 = state_24283;(statearr_24285[(8)] = inst_24280);
return statearr_24285;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24283__$1,inst_24281);
} else
{if((state_val_24284 === (4)))
{var state_24283__$1 = state_24283;var statearr_24286_24298 = state_24283__$1;(statearr_24286_24298[(2)] = null);
(statearr_24286_24298[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24284 === (3)))
{var inst_24270 = (state_24283[(7)]);var inst_24277 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_24270);var state_24283__$1 = state_24283;var statearr_24287_24299 = state_24283__$1;(statearr_24287_24299[(2)] = inst_24277);
(statearr_24287_24299[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24284 === (2)))
{var inst_24270 = (state_24283[(7)]);var inst_24270__$1 = (state_24283[(2)]);var inst_24271 = (function (){var bl_coll_index = inst_24270__$1;return ((function (bl_coll_index,inst_24270,inst_24270__$1,state_val_24284,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_24270,inst_24270__$1,state_val_24284,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_24272 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_24271);var inst_24273 = cljs.core.deref.call(null,app_state);var inst_24274 = cljs.core.get_in.call(null,inst_24273,index_path);var inst_24275 = cljs.core._EQ_.call(null,inst_24274,inst_24270__$1);var state_24283__$1 = (function (){var statearr_24288 = state_24283;(statearr_24288[(9)] = inst_24272);
(statearr_24288[(7)] = inst_24270__$1);
return statearr_24288;
})();if(inst_24275)
{var statearr_24289_24300 = state_24283__$1;(statearr_24289_24300[(1)] = (3));
} else
{var statearr_24290_24301 = state_24283__$1;(statearr_24290_24301[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24284 === (1)))
{var inst_24268 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_24283__$1 = state_24283;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24283__$1,(2),inst_24268);
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
var state_machine__11462__auto____0 = (function (){var statearr_24294 = [null,null,null,null,null,null,null,null,null,null];(statearr_24294[(0)] = state_machine__11462__auto__);
(statearr_24294[(1)] = (1));
return statearr_24294;
});
var state_machine__11462__auto____1 = (function (state_24283){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24283);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24295){if((e24295 instanceof Object))
{var ex__11465__auto__ = e24295;var statearr_24296_24302 = state_24283;(statearr_24296_24302[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24283);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24295;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24303 = state_24283;
state_24283 = G__24303;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24283){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__11519__auto__ = (function (){var statearr_24297 = f__11518__auto__.call(null);(statearr_24297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24297;
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
