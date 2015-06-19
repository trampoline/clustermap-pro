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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__11552__auto__ = cljs.core.some.call(null,(function (p__28124){var vec__28125 = p__28124;var z = cljs.core.nth.call(null,vec__28125,(0),null);var t = cljs.core.nth.call(null,vec__28125,(1),null);if(cljs.core.truth_((function (){var and__11540__auto__ = z;if(cljs.core.truth_(and__11540__auto__))
{return (zoom <= z);
} else
{return and__11540__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
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
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__11552__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{var or__11552__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__11552__auto____$1))
{return or__11552__auto____$1;
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
return (function (s,bl){var boundaryline_id = (bl["id"]);var tolerance = (bl["tolerance"]);var collection_ids = (bl["boundaryline_collection_ids"]);var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var collection_cache_base_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var collection_cache_paths = (function (){var iter__12290__auto__ = ((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function iter__28130(s__28131){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__28131__$1 = s__28131;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28131__$1);if(temp__4126__auto__)
{var s__28131__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28131__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__28131__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__28133 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__28132 = (0);while(true){
if((i__28132 < size__12289__auto__))
{var collection_id = cljs.core._nth.call(null,c__12288__auto__,i__28132);cljs.core.chunk_append.call(null,b__28133,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__28134 = (i__28132 + (1));
i__28132 = G__28134;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28133),iter__28130.call(null,cljs.core.chunk_rest.call(null,s__28131__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28133),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__28131__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__28130.call(null,cljs.core.rest.call(null,s__28131__$2)));
}
} else
{return null;
}
break;
}
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1))
,null,null));
});})(boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1))
;return iter__12290__auto__.call(null,collection_ids);
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__28135){var map__28151 = p__28135;var map__28151__$1 = ((cljs.core.seq_QMARK_.call(null,map__28151))?cljs.core.apply.call(null,cljs.core.hash_map,map__28151):map__28151);var tolerance = cljs.core.get.call(null,map__28151__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__28151__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__28151__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,comm,map__28151,map__28151__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,comm,map__28151,map__28151__$1,tolerance,bounds,boundaryline_ids){
return (function (state_28156){var state_val_28157 = (state_28156[(1)]);if((state_val_28157 === (2)))
{var inst_28153 = (state_28156[(2)]);var inst_28154 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_28153);var state_28156__$1 = (function (){var statearr_28158 = state_28156;(statearr_28158[(7)] = inst_28154);
return statearr_28158;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28156__$1,true);
} else
{if((state_val_28157 === (1)))
{var state_28156__$1 = state_28156;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28156__$1,(2),comm);
} else
{return null;
}
}
});})(c__16733__auto__,comm,map__28151,map__28151__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__16718__auto__,c__16733__auto__,comm,map__28151,map__28151__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_28162 = [null,null,null,null,null,null,null,null];(statearr_28162[(0)] = state_machine__16719__auto__);
(statearr_28162[(1)] = (1));
return statearr_28162;
});
var state_machine__16719__auto____1 = (function (state_28156){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_28156);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e28163){if((e28163 instanceof Object))
{var ex__16722__auto__ = e28163;var statearr_28164_28166 = state_28156;(statearr_28164_28166[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28156);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28163;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28167 = state_28156;
state_28156 = G__28167;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_28156){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_28156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,comm,map__28151,map__28151__$1,tolerance,bounds,boundaryline_ids))
})();var state__16735__auto__ = (function (){var statearr_28165 = f__16734__auto__.call(null);(statearr_28165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_28165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,comm,map__28151,map__28151__$1,tolerance,bounds,boundaryline_ids))
);
return c__16733__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__28135 = null;if (arguments.length > 2) {
  p__28135 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__28135);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__28168){
var app_state = cljs.core.first(arglist__28168);
arglist__28168 = cljs.core.next(arglist__28168);
var boundarylines_path = cljs.core.first(arglist__28168);
var p__28135 = cljs.core.rest(arglist__28168);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__28135);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__28169){var map__28198 = p__28169;var map__28198__$1 = ((cljs.core.seq_QMARK_.call(null,map__28198))?cljs.core.apply.call(null,cljs.core.hash_map,map__28198):map__28198);var tolerance = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28198,map__28198__$1,tolerance){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28198,map__28198__$1,tolerance){
return (function (state_28212){var state_val_28213 = (state_28212[(1)]);if((state_val_28213 === (5)))
{var inst_28206 = (state_28212[(2)]);var inst_28207 = cljs.core.deref.call(null,app_state);var inst_28208 = cljs.core.get_in.call(null,inst_28207,cache_path);var state_28212__$1 = (function (){var statearr_28214 = state_28212;(statearr_28214[(7)] = inst_28206);
return statearr_28214;
})();var statearr_28215_28226 = state_28212__$1;(statearr_28215_28226[(2)] = inst_28208);
(statearr_28215_28226[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28213 === (4)))
{var inst_28210 = (state_28212[(2)]);var state_28212__$1 = state_28212;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28212__$1,inst_28210);
} else
{if((state_val_28213 === (3)))
{var inst_28201 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28202 = [boundaryline_id];var inst_28203 = (new cljs.core.PersistentVector(null,1,(5),inst_28201,inst_28202,null));var inst_28204 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_28203,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_28212__$1 = state_28212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28212__$1,(5),inst_28204);
} else
{if((state_val_28213 === (2)))
{var state_28212__$1 = state_28212;var statearr_28216_28227 = state_28212__$1;(statearr_28216_28227[(2)] = cached_bl);
(statearr_28216_28227[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28213 === (1)))
{var state_28212__$1 = state_28212;if(cljs.core.truth_(cached_bl))
{var statearr_28217_28228 = state_28212__$1;(statearr_28217_28228[(1)] = (2));
} else
{var statearr_28218_28229 = state_28212__$1;(statearr_28218_28229[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28198,map__28198__$1,tolerance))
;return ((function (switch__16718__auto__,c__16733__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28198,map__28198__$1,tolerance){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_28222 = [null,null,null,null,null,null,null,null];(statearr_28222[(0)] = state_machine__16719__auto__);
(statearr_28222[(1)] = (1));
return statearr_28222;
});
var state_machine__16719__auto____1 = (function (state_28212){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_28212);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e28223){if((e28223 instanceof Object))
{var ex__16722__auto__ = e28223;var statearr_28224_28230 = state_28212;(statearr_28224_28230[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28212);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28223;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28231 = state_28212;
state_28212 = G__28231;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_28212){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_28212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28198,map__28198__$1,tolerance))
})();var state__16735__auto__ = (function (){var statearr_28225 = f__16734__auto__.call(null);(statearr_28225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_28225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,boundarylines_path__$1,cache_path,cached_bl,map__28198,map__28198__$1,tolerance))
);
return c__16733__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__28169 = null;if (arguments.length > 3) {
  p__28169 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__28169);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__28232){
var app_state = cljs.core.first(arglist__28232);
arglist__28232 = cljs.core.next(arglist__28232);
var boundarylines_path = cljs.core.first(arglist__28232);
arglist__28232 = cljs.core.next(arglist__28232);
var boundaryline_id = cljs.core.first(arglist__28232);
var p__28169 = cljs.core.rest(arglist__28232);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__28169);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__){
return (function (state_28252){var state_val_28253 = (state_28252[(1)]);if((state_val_28253 === (2)))
{var inst_28248 = (state_28252[(2)]);var inst_28249 = cljs.core.clj__GT_js.call(null,inst_28248);var inst_28250 = console.log(inst_28249);var state_28252__$1 = state_28252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28252__$1,inst_28250);
} else
{if((state_val_28253 === (1)))
{var state_28252__$1 = state_28252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28252__$1,(2),ch);
} else
{return null;
}
}
});})(c__16733__auto__))
;return ((function (switch__16718__auto__,c__16733__auto__){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_28257 = [null,null,null,null,null,null,null];(statearr_28257[(0)] = state_machine__16719__auto__);
(statearr_28257[(1)] = (1));
return statearr_28257;
});
var state_machine__16719__auto____1 = (function (state_28252){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_28252);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e28258){if((e28258 instanceof Object))
{var ex__16722__auto__ = e28258;var statearr_28259_28261 = state_28252;(statearr_28259_28261[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28252);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28258;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28262 = state_28252;
state_28252 = G__28262;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_28252){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_28252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__))
})();var state__16735__auto__ = (function (){var statearr_28260 = f__16734__auto__.call(null);(statearr_28260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_28260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__))
);
return c__16733__auto__;
});
/**
* fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
* general caches. returns a single value true on the go-block channel when complete
* @param {...*} var_args
*/
clustermap.boundarylines.fetch_boundarylines = (function() { 
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__28263){var map__28279 = p__28263;var map__28279__$1 = ((cljs.core.seq_QMARK_.call(null,map__28279))?cljs.core.apply.call(null,cljs.core.hash_map,map__28279):map__28279);var bounds = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,comm,map__28279,map__28279__$1,bounds,boundaryline_ids){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,comm,map__28279,map__28279__$1,bounds,boundaryline_ids){
return (function (state_28284){var state_val_28285 = (state_28284[(1)]);if((state_val_28285 === (2)))
{var inst_28281 = (state_28284[(2)]);var inst_28282 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_28281);var state_28284__$1 = (function (){var statearr_28286 = state_28284;(statearr_28286[(7)] = inst_28282);
return statearr_28286;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28284__$1,true);
} else
{if((state_val_28285 === (1)))
{var state_28284__$1 = state_28284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28284__$1,(2),comm);
} else
{return null;
}
}
});})(c__16733__auto__,comm,map__28279,map__28279__$1,bounds,boundaryline_ids))
;return ((function (switch__16718__auto__,c__16733__auto__,comm,map__28279,map__28279__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_28290 = [null,null,null,null,null,null,null,null];(statearr_28290[(0)] = state_machine__16719__auto__);
(statearr_28290[(1)] = (1));
return statearr_28290;
});
var state_machine__16719__auto____1 = (function (state_28284){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_28284);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e28291){if((e28291 instanceof Object))
{var ex__16722__auto__ = e28291;var statearr_28292_28294 = state_28284;(statearr_28292_28294[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28284);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28291;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28295 = state_28284;
state_28284 = G__28295;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_28284){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_28284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,comm,map__28279,map__28279__$1,bounds,boundaryline_ids))
})();var state__16735__auto__ = (function (){var statearr_28293 = f__16734__auto__.call(null);(statearr_28293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_28293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,comm,map__28279,map__28279__$1,bounds,boundaryline_ids))
);
return c__16733__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__28263 = null;if (arguments.length > 4) {
  p__28263 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__28263);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__28296){
var app_state = cljs.core.first(arglist__28296);
arglist__28296 = cljs.core.next(arglist__28296);
var boundarylines_path = cljs.core.first(arglist__28296);
arglist__28296 = cljs.core.next(arglist__28296);
var collection_id = cljs.core.first(arglist__28296);
arglist__28296 = cljs.core.next(arglist__28296);
var tolerance = cljs.core.first(arglist__28296);
var p__28263 = cljs.core.rest(arglist__28296);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__28263);
});
fetch_boundarylines.cljs$core$IFn$_invoke$arity$variadic = fetch_boundarylines__delegate;
return fetch_boundarylines;
})()
;
clustermap.boundarylines.fetch_from_index = (function fetch_from_index(index,boundaryline_id){var default_bl = (cljs.core.truth_(index)?(index[cljs.core.name.call(null,boundaryline_id)]):null);var default_tol = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);if(cljs.core.truth_((function (){var and__11540__auto__ = default_bl;if(cljs.core.truth_(and__11540__auto__))
{return default_tol;
} else
{return and__11540__auto__;
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__28297){var vec__28300 = p__28297;var map__28301 = cljs.core.nth.call(null,vec__28300,(0),null);var map__28301__$1 = ((cljs.core.seq_QMARK_.call(null,map__28301))?cljs.core.apply.call(null,cljs.core.hash_map,map__28301):map__28301);var indexes = cljs.core.get.call(null,map__28301__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__28300,map__28301,map__28301__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__28300,map__28301,map__28301__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__28297 = null;if (arguments.length > 3) {
  p__28297 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__28297);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__28302){
var app_state = cljs.core.first(arglist__28302);
arglist__28302 = cljs.core.next(arglist__28302);
var boundarylines_path = cljs.core.first(arglist__28302);
arglist__28302 = cljs.core.next(arglist__28302);
var boundaryline_id = cljs.core.first(arglist__28302);
var p__28297 = cljs.core.rest(arglist__28302);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__28297);
});
get_cached_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_cached_boundaryline__delegate;
return get_cached_boundaryline;
})()
;
clustermap.boundarylines.best_version = (function best_version(collection_index,collection_cache,general_cache,zoom,boundaryline_id){var bl_versions = (function (){var or__11552__auto__ = cljs.core.get.call(null,collection_cache,boundaryline_id);if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__28303){var map__28308 = p__28303;var map__28308__$1 = ((cljs.core.seq_QMARK_.call(null,map__28308))?cljs.core.apply.call(null,cljs.core.hash_map,map__28308):map__28308);var boundaryline_ids = cljs.core.get.call(null,map__28308__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28308,map__28308__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__28308,map__28308__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28308,map__28308__$1,boundaryline_ids){
return (function (p__28309){var vec__28310 = p__28309;var blid = cljs.core.nth.call(null,vec__28310,(0),null);var vec__28311 = cljs.core.nth.call(null,vec__28310,(1),null);var tol = cljs.core.nth.call(null,vec__28311,(0),null);var bl = cljs.core.nth.call(null,vec__28311,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__28308,map__28308__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__28303 = null;if (arguments.length > 5) {
  p__28303 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__28303);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__28312){
var app_state = cljs.core.first(arglist__28312);
arglist__28312 = cljs.core.next(arglist__28312);
var boundarylines_path = cljs.core.first(arglist__28312);
arglist__28312 = cljs.core.next(arglist__28312);
var collection_id = cljs.core.first(arglist__28312);
arglist__28312 = cljs.core.next(arglist__28312);
var bounds = cljs.core.first(arglist__28312);
arglist__28312 = cljs.core.next(arglist__28312);
var zoom = cljs.core.first(arglist__28312);
var p__28303 = cljs.core.rest(arglist__28312);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__28303);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__28317_28321 = cljs.core.seq.call(null,keys);var chunk__28318_28322 = null;var count__28319_28323 = (0);var i__28320_28324 = (0);while(true){
if((i__28320_28324 < count__28319_28323))
{var k_28325 = cljs.core._nth.call(null,chunk__28318_28322,i__28320_28324);var obj_28326 = (js_index[k_28325]);var geom_28327 = (obj_28326["geojson"]);var feature_28328 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28326["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28326["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28326["compact_name"])], null)], null));var __28329__$1 = (feature_28328["geometry"] = geom_28327);var __28330__$2 = ((feature_28328["properties"])["index_object"] = obj_28326);features.push(feature_28328);
{
var G__28331 = seq__28317_28321;
var G__28332 = chunk__28318_28322;
var G__28333 = count__28319_28323;
var G__28334 = (i__28320_28324 + (1));
seq__28317_28321 = G__28331;
chunk__28318_28322 = G__28332;
count__28319_28323 = G__28333;
i__28320_28324 = G__28334;
continue;
}
} else
{var temp__4126__auto___28335 = cljs.core.seq.call(null,seq__28317_28321);if(temp__4126__auto___28335)
{var seq__28317_28336__$1 = temp__4126__auto___28335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28317_28336__$1))
{var c__12321__auto___28337 = cljs.core.chunk_first.call(null,seq__28317_28336__$1);{
var G__28338 = cljs.core.chunk_rest.call(null,seq__28317_28336__$1);
var G__28339 = c__12321__auto___28337;
var G__28340 = cljs.core.count.call(null,c__12321__auto___28337);
var G__28341 = (0);
seq__28317_28321 = G__28338;
chunk__28318_28322 = G__28339;
count__28319_28323 = G__28340;
i__28320_28324 = G__28341;
continue;
}
} else
{var k_28342 = cljs.core.first.call(null,seq__28317_28336__$1);var obj_28343 = (js_index[k_28342]);var geom_28344 = (obj_28343["geojson"]);var feature_28345 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_28343["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_28343["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_28343["compact_name"])], null)], null));var __28346__$1 = (feature_28345["geometry"] = geom_28344);var __28347__$2 = ((feature_28345["properties"])["index_object"] = obj_28343);features.push(feature_28345);
{
var G__28348 = cljs.core.next.call(null,seq__28317_28336__$1);
var G__28349 = null;
var G__28350 = (0);
var G__28351 = (0);
seq__28317_28321 = G__28348;
chunk__28318_28322 = G__28349;
count__28319_28323 = G__28350;
i__28320_28324 = G__28351;
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
{var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (state_28397){var state_val_28398 = (state_28397[(1)]);if((state_val_28398 === (5)))
{var inst_28384 = (state_28397[(7)]);var inst_28394 = (state_28397[(2)]);var inst_28395 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_28384);var state_28397__$1 = (function (){var statearr_28399 = state_28397;(statearr_28399[(8)] = inst_28394);
return statearr_28399;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28397__$1,inst_28395);
} else
{if((state_val_28398 === (4)))
{var state_28397__$1 = state_28397;var statearr_28400_28412 = state_28397__$1;(statearr_28400_28412[(2)] = null);
(statearr_28400_28412[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28398 === (3)))
{var inst_28384 = (state_28397[(7)]);var inst_28391 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_28384);var state_28397__$1 = state_28397;var statearr_28401_28413 = state_28397__$1;(statearr_28401_28413[(2)] = inst_28391);
(statearr_28401_28413[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28398 === (2)))
{var inst_28384 = (state_28397[(7)]);var inst_28384__$1 = (state_28397[(2)]);var inst_28385 = (function (){var bl_coll_index = inst_28384__$1;return ((function (bl_coll_index,inst_28384,inst_28384__$1,state_val_28398,c__16733__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_28384,inst_28384__$1,state_val_28398,c__16733__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_28386 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_28385);var inst_28387 = cljs.core.deref.call(null,app_state);var inst_28388 = cljs.core.get_in.call(null,inst_28387,index_path);var inst_28389 = cljs.core._EQ_.call(null,inst_28388,inst_28384__$1);var state_28397__$1 = (function (){var statearr_28402 = state_28397;(statearr_28402[(7)] = inst_28384__$1);
(statearr_28402[(9)] = inst_28386);
return statearr_28402;
})();if(inst_28389)
{var statearr_28403_28414 = state_28397__$1;(statearr_28403_28414[(1)] = (3));
} else
{var statearr_28404_28415 = state_28397__$1;(statearr_28404_28415[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28398 === (1)))
{var inst_28382 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_28397__$1 = state_28397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28397__$1,(2),inst_28382);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
;return ((function (switch__16718__auto__,c__16733__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_28408 = [null,null,null,null,null,null,null,null,null,null];(statearr_28408[(0)] = state_machine__16719__auto__);
(statearr_28408[(1)] = (1));
return statearr_28408;
});
var state_machine__16719__auto____1 = (function (state_28397){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_28397);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e28409){if((e28409 instanceof Object))
{var ex__16722__auto__ = e28409;var statearr_28410_28416 = state_28397;(statearr_28410_28416[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28397);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28409;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28417 = state_28397;
state_28397 = G__28417;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_28397){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_28397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__16735__auto__ = (function (){var statearr_28411 = f__16734__auto__.call(null);(statearr_28411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_28411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
);
return c__16733__auto__;
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
,(function (){var or__11552__auto__ = hits;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()));
});

//# sourceMappingURL=boundarylines.js.map