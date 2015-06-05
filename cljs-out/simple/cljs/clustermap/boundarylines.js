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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__24014){var vec__24015 = p__24014;var z = cljs.core.nth.call(null,vec__24015,(0),null);var t = cljs.core.nth.call(null,vec__24015,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
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
return (function iter__24020(s__24021){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__24021__$1 = s__24021;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24021__$1);if(temp__4126__auto__)
{var s__24021__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24021__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__24021__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__24023 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__24022 = (0);while(true){
if((i__24022 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__24022);cljs.core.chunk_append.call(null,b__24023,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__24024 = (i__24022 + (1));
i__24022 = G__24024;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24023),iter__24020.call(null,cljs.core.chunk_rest.call(null,s__24021__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24023),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__24021__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__24020.call(null,cljs.core.rest.call(null,s__24021__$2)));
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__24025){var map__24041 = p__24025;var map__24041__$1 = ((cljs.core.seq_QMARK_.call(null,map__24041))?cljs.core.apply.call(null,cljs.core.hash_map,map__24041):map__24041);var tolerance = cljs.core.get.call(null,map__24041__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__24041__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__24041__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,comm,map__24041,map__24041__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,comm,map__24041,map__24041__$1,tolerance,bounds,boundaryline_ids){
return (function (state_24046){var state_val_24047 = (state_24046[(1)]);if((state_val_24047 === (2)))
{var inst_24043 = (state_24046[(2)]);var inst_24044 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_24043);var state_24046__$1 = (function (){var statearr_24048 = state_24046;(statearr_24048[(7)] = inst_24044);
return statearr_24048;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24046__$1,true);
} else
{if((state_val_24047 === (1)))
{var state_24046__$1 = state_24046;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24046__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto__,comm,map__24041,map__24041__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__11461__auto__,c__11517__auto__,comm,map__24041,map__24041__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24052 = [null,null,null,null,null,null,null,null];(statearr_24052[(0)] = state_machine__11462__auto__);
(statearr_24052[(1)] = (1));
return statearr_24052;
});
var state_machine__11462__auto____1 = (function (state_24046){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24046);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24053){if((e24053 instanceof Object))
{var ex__11465__auto__ = e24053;var statearr_24054_24056 = state_24046;(statearr_24054_24056[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24046);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24053;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24057 = state_24046;
state_24046 = G__24057;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24046){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,comm,map__24041,map__24041__$1,tolerance,bounds,boundaryline_ids))
})();var state__11519__auto__ = (function (){var statearr_24055 = f__11518__auto__.call(null);(statearr_24055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,comm,map__24041,map__24041__$1,tolerance,bounds,boundaryline_ids))
);
return c__11517__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__24025 = null;if (arguments.length > 2) {
  p__24025 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__24025);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__24058){
var app_state = cljs.core.first(arglist__24058);
arglist__24058 = cljs.core.next(arglist__24058);
var boundarylines_path = cljs.core.first(arglist__24058);
var p__24025 = cljs.core.rest(arglist__24058);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__24025);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__24059){var map__24088 = p__24059;var map__24088__$1 = ((cljs.core.seq_QMARK_.call(null,map__24088))?cljs.core.apply.call(null,cljs.core.hash_map,map__24088):map__24088);var tolerance = cljs.core.get.call(null,map__24088__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24088,map__24088__$1,tolerance){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24088,map__24088__$1,tolerance){
return (function (state_24102){var state_val_24103 = (state_24102[(1)]);if((state_val_24103 === (5)))
{var inst_24096 = (state_24102[(2)]);var inst_24097 = cljs.core.deref.call(null,app_state);var inst_24098 = cljs.core.get_in.call(null,inst_24097,cache_path);var state_24102__$1 = (function (){var statearr_24104 = state_24102;(statearr_24104[(7)] = inst_24096);
return statearr_24104;
})();var statearr_24105_24116 = state_24102__$1;(statearr_24105_24116[(2)] = inst_24098);
(statearr_24105_24116[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24103 === (4)))
{var inst_24100 = (state_24102[(2)]);var state_24102__$1 = state_24102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24102__$1,inst_24100);
} else
{if((state_val_24103 === (3)))
{var inst_24091 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24092 = [boundaryline_id];var inst_24093 = (new cljs.core.PersistentVector(null,1,(5),inst_24091,inst_24092,null));var inst_24094 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_24093,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_24102__$1 = state_24102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24102__$1,(5),inst_24094);
} else
{if((state_val_24103 === (2)))
{var state_24102__$1 = state_24102;var statearr_24106_24117 = state_24102__$1;(statearr_24106_24117[(2)] = cached_bl);
(statearr_24106_24117[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24103 === (1)))
{var state_24102__$1 = state_24102;if(cljs.core.truth_(cached_bl))
{var statearr_24107_24118 = state_24102__$1;(statearr_24107_24118[(1)] = (2));
} else
{var statearr_24108_24119 = state_24102__$1;(statearr_24108_24119[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24088,map__24088__$1,tolerance))
;return ((function (switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24088,map__24088__$1,tolerance){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24112 = [null,null,null,null,null,null,null,null];(statearr_24112[(0)] = state_machine__11462__auto__);
(statearr_24112[(1)] = (1));
return statearr_24112;
});
var state_machine__11462__auto____1 = (function (state_24102){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24102);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24113){if((e24113 instanceof Object))
{var ex__11465__auto__ = e24113;var statearr_24114_24120 = state_24102;(statearr_24114_24120[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24102);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24113;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24121 = state_24102;
state_24102 = G__24121;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24102){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24088,map__24088__$1,tolerance))
})();var state__11519__auto__ = (function (){var statearr_24115 = f__11518__auto__.call(null);(statearr_24115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__24088,map__24088__$1,tolerance))
);
return c__11517__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__24059 = null;if (arguments.length > 3) {
  p__24059 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__24059);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__24122){
var app_state = cljs.core.first(arglist__24122);
arglist__24122 = cljs.core.next(arglist__24122);
var boundarylines_path = cljs.core.first(arglist__24122);
arglist__24122 = cljs.core.next(arglist__24122);
var boundaryline_id = cljs.core.first(arglist__24122);
var p__24059 = cljs.core.rest(arglist__24122);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__24059);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_24142){var state_val_24143 = (state_24142[(1)]);if((state_val_24143 === (2)))
{var inst_24138 = (state_24142[(2)]);var inst_24139 = cljs.core.clj__GT_js.call(null,inst_24138);var inst_24140 = console.log(inst_24139);var state_24142__$1 = state_24142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24142__$1,inst_24140);
} else
{if((state_val_24143 === (1)))
{var state_24142__$1 = state_24142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24142__$1,(2),ch);
} else
{return null;
}
}
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24147 = [null,null,null,null,null,null,null];(statearr_24147[(0)] = state_machine__11462__auto__);
(statearr_24147[(1)] = (1));
return statearr_24147;
});
var state_machine__11462__auto____1 = (function (state_24142){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24142);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24148){if((e24148 instanceof Object))
{var ex__11465__auto__ = e24148;var statearr_24149_24151 = state_24142;(statearr_24149_24151[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24142);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24148;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24152 = state_24142;
state_24142 = G__24152;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24142){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_24150 = f__11518__auto__.call(null);(statearr_24150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24150;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__24153){var map__24169 = p__24153;var map__24169__$1 = ((cljs.core.seq_QMARK_.call(null,map__24169))?cljs.core.apply.call(null,cljs.core.hash_map,map__24169):map__24169);var bounds = cljs.core.get.call(null,map__24169__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__24169__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,comm,map__24169,map__24169__$1,bounds,boundaryline_ids){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,comm,map__24169,map__24169__$1,bounds,boundaryline_ids){
return (function (state_24174){var state_val_24175 = (state_24174[(1)]);if((state_val_24175 === (2)))
{var inst_24171 = (state_24174[(2)]);var inst_24172 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_24171);var state_24174__$1 = (function (){var statearr_24176 = state_24174;(statearr_24176[(7)] = inst_24172);
return statearr_24176;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24174__$1,true);
} else
{if((state_val_24175 === (1)))
{var state_24174__$1 = state_24174;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24174__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto__,comm,map__24169,map__24169__$1,bounds,boundaryline_ids))
;return ((function (switch__11461__auto__,c__11517__auto__,comm,map__24169,map__24169__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_24180 = [null,null,null,null,null,null,null,null];(statearr_24180[(0)] = state_machine__11462__auto__);
(statearr_24180[(1)] = (1));
return statearr_24180;
});
var state_machine__11462__auto____1 = (function (state_24174){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24174);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24181){if((e24181 instanceof Object))
{var ex__11465__auto__ = e24181;var statearr_24182_24184 = state_24174;(statearr_24182_24184[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24174);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24181;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24185 = state_24174;
state_24174 = G__24185;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24174){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,comm,map__24169,map__24169__$1,bounds,boundaryline_ids))
})();var state__11519__auto__ = (function (){var statearr_24183 = f__11518__auto__.call(null);(statearr_24183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,comm,map__24169,map__24169__$1,bounds,boundaryline_ids))
);
return c__11517__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__24153 = null;if (arguments.length > 4) {
  p__24153 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__24153);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__24186){
var app_state = cljs.core.first(arglist__24186);
arglist__24186 = cljs.core.next(arglist__24186);
var boundarylines_path = cljs.core.first(arglist__24186);
arglist__24186 = cljs.core.next(arglist__24186);
var collection_id = cljs.core.first(arglist__24186);
arglist__24186 = cljs.core.next(arglist__24186);
var tolerance = cljs.core.first(arglist__24186);
var p__24153 = cljs.core.rest(arglist__24186);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__24153);
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__24187){var vec__24190 = p__24187;var map__24191 = cljs.core.nth.call(null,vec__24190,(0),null);var map__24191__$1 = ((cljs.core.seq_QMARK_.call(null,map__24191))?cljs.core.apply.call(null,cljs.core.hash_map,map__24191):map__24191);var indexes = cljs.core.get.call(null,map__24191__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__24190,map__24191,map__24191__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__24190,map__24191,map__24191__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__24187 = null;if (arguments.length > 3) {
  p__24187 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__24187);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__24192){
var app_state = cljs.core.first(arglist__24192);
arglist__24192 = cljs.core.next(arglist__24192);
var boundarylines_path = cljs.core.first(arglist__24192);
arglist__24192 = cljs.core.next(arglist__24192);
var boundaryline_id = cljs.core.first(arglist__24192);
var p__24187 = cljs.core.rest(arglist__24192);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__24187);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__24193){var map__24198 = p__24193;var map__24198__$1 = ((cljs.core.seq_QMARK_.call(null,map__24198))?cljs.core.apply.call(null,cljs.core.hash_map,map__24198):map__24198);var boundaryline_ids = cljs.core.get.call(null,map__24198__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24198,map__24198__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__24198,map__24198__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24198,map__24198__$1,boundaryline_ids){
return (function (p__24199){var vec__24200 = p__24199;var blid = cljs.core.nth.call(null,vec__24200,(0),null);var vec__24201 = cljs.core.nth.call(null,vec__24200,(1),null);var tol = cljs.core.nth.call(null,vec__24201,(0),null);var bl = cljs.core.nth.call(null,vec__24201,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__24198,map__24198__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__24193 = null;if (arguments.length > 5) {
  p__24193 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__24193);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__24202){
var app_state = cljs.core.first(arglist__24202);
arglist__24202 = cljs.core.next(arglist__24202);
var boundarylines_path = cljs.core.first(arglist__24202);
arglist__24202 = cljs.core.next(arglist__24202);
var collection_id = cljs.core.first(arglist__24202);
arglist__24202 = cljs.core.next(arglist__24202);
var bounds = cljs.core.first(arglist__24202);
arglist__24202 = cljs.core.next(arglist__24202);
var zoom = cljs.core.first(arglist__24202);
var p__24193 = cljs.core.rest(arglist__24202);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__24193);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__24207_24211 = cljs.core.seq.call(null,keys);var chunk__24208_24212 = null;var count__24209_24213 = (0);var i__24210_24214 = (0);while(true){
if((i__24210_24214 < count__24209_24213))
{var k_24215 = cljs.core._nth.call(null,chunk__24208_24212,i__24210_24214);var obj_24216 = (js_index[k_24215]);var geom_24217 = (obj_24216["geojson"]);var feature_24218 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24216["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24216["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24216["compact_name"])], null)], null));var __24219__$1 = (feature_24218["geometry"] = geom_24217);var __24220__$2 = ((feature_24218["properties"])["index_object"] = obj_24216);features.push(feature_24218);
{
var G__24221 = seq__24207_24211;
var G__24222 = chunk__24208_24212;
var G__24223 = count__24209_24213;
var G__24224 = (i__24210_24214 + (1));
seq__24207_24211 = G__24221;
chunk__24208_24212 = G__24222;
count__24209_24213 = G__24223;
i__24210_24214 = G__24224;
continue;
}
} else
{var temp__4126__auto___24225 = cljs.core.seq.call(null,seq__24207_24211);if(temp__4126__auto___24225)
{var seq__24207_24226__$1 = temp__4126__auto___24225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24207_24226__$1))
{var c__4408__auto___24227 = cljs.core.chunk_first.call(null,seq__24207_24226__$1);{
var G__24228 = cljs.core.chunk_rest.call(null,seq__24207_24226__$1);
var G__24229 = c__4408__auto___24227;
var G__24230 = cljs.core.count.call(null,c__4408__auto___24227);
var G__24231 = (0);
seq__24207_24211 = G__24228;
chunk__24208_24212 = G__24229;
count__24209_24213 = G__24230;
i__24210_24214 = G__24231;
continue;
}
} else
{var k_24232 = cljs.core.first.call(null,seq__24207_24226__$1);var obj_24233 = (js_index[k_24232]);var geom_24234 = (obj_24233["geojson"]);var feature_24235 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24233["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24233["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24233["compact_name"])], null)], null));var __24236__$1 = (feature_24235["geometry"] = geom_24234);var __24237__$2 = ((feature_24235["properties"])["index_object"] = obj_24233);features.push(feature_24235);
{
var G__24238 = cljs.core.next.call(null,seq__24207_24226__$1);
var G__24239 = null;
var G__24240 = (0);
var G__24241 = (0);
seq__24207_24211 = G__24238;
chunk__24208_24212 = G__24239;
count__24209_24213 = G__24240;
i__24210_24214 = G__24241;
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
return (function (state_24287){var state_val_24288 = (state_24287[(1)]);if((state_val_24288 === (5)))
{var inst_24274 = (state_24287[(7)]);var inst_24284 = (state_24287[(2)]);var inst_24285 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_24274);var state_24287__$1 = (function (){var statearr_24289 = state_24287;(statearr_24289[(8)] = inst_24284);
return statearr_24289;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24287__$1,inst_24285);
} else
{if((state_val_24288 === (4)))
{var state_24287__$1 = state_24287;var statearr_24290_24302 = state_24287__$1;(statearr_24290_24302[(2)] = null);
(statearr_24290_24302[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24288 === (3)))
{var inst_24274 = (state_24287[(7)]);var inst_24281 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_24274);var state_24287__$1 = state_24287;var statearr_24291_24303 = state_24287__$1;(statearr_24291_24303[(2)] = inst_24281);
(statearr_24291_24303[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24288 === (2)))
{var inst_24274 = (state_24287[(7)]);var inst_24274__$1 = (state_24287[(2)]);var inst_24275 = (function (){var bl_coll_index = inst_24274__$1;return ((function (bl_coll_index,inst_24274,inst_24274__$1,state_val_24288,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_24274,inst_24274__$1,state_val_24288,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_24276 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_24275);var inst_24277 = cljs.core.deref.call(null,app_state);var inst_24278 = cljs.core.get_in.call(null,inst_24277,index_path);var inst_24279 = cljs.core._EQ_.call(null,inst_24278,inst_24274__$1);var state_24287__$1 = (function (){var statearr_24292 = state_24287;(statearr_24292[(9)] = inst_24276);
(statearr_24292[(7)] = inst_24274__$1);
return statearr_24292;
})();if(inst_24279)
{var statearr_24293_24304 = state_24287__$1;(statearr_24293_24304[(1)] = (3));
} else
{var statearr_24294_24305 = state_24287__$1;(statearr_24294_24305[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24288 === (1)))
{var inst_24272 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_24287__$1 = state_24287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24287__$1,(2),inst_24272);
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
var state_machine__11462__auto____0 = (function (){var statearr_24298 = [null,null,null,null,null,null,null,null,null,null];(statearr_24298[(0)] = state_machine__11462__auto__);
(statearr_24298[(1)] = (1));
return statearr_24298;
});
var state_machine__11462__auto____1 = (function (state_24287){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24287);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24299){if((e24299 instanceof Object))
{var ex__11465__auto__ = e24299;var statearr_24300_24306 = state_24287;(statearr_24300_24306[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24287);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24299;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24307 = state_24287;
state_24287 = G__24307;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24287){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__11519__auto__ = (function (){var statearr_24301 = f__11518__auto__.call(null);(statearr_24301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24301;
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
