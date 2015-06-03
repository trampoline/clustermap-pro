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
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3639__auto__ = cljs.core.some.call(null,(function (p__23788){var vec__23789 = p__23788;var z = cljs.core.nth.call(null,vec__23789,(0),null);var t = cljs.core.nth.call(null,vec__23789,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = z;if(cljs.core.truth_(and__3627__auto__))
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
return (function iter__23794(s__23795){return (new cljs.core.LazySeq(null,((function (boundaryline_id,tolerance,collection_ids,general_cache_path,collection_cache_base_path,boundarylines_path__$1){
return (function (){var s__23795__$1 = s__23795;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23795__$1);if(temp__4126__auto__)
{var s__23795__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23795__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__23795__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__23797 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__23796 = (0);while(true){
if((i__23796 < size__4376__auto__))
{var collection_id = cljs.core._nth.call(null,c__4375__auto__,i__23796);cljs.core.chunk_append.call(null,b__23797,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)));
{
var G__23798 = (i__23796 + (1));
i__23796 = G__23798;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23797),iter__23794.call(null,cljs.core.chunk_rest.call(null,s__23795__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23797),null);
}
} else
{var collection_id = cljs.core.first.call(null,s__23795__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,collection_cache_base_path,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id,new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null)),iter__23794.call(null,cljs.core.rest.call(null,s__23795__$2)));
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
var fetch_boundaryline_set__delegate = function (app_state,boundarylines_path,p__23799){var map__23815 = p__23799;var map__23815__$1 = ((cljs.core.seq_QMARK_.call(null,map__23815))?cljs.core.apply.call(null,cljs.core.hash_map,map__23815):map__23815);var tolerance = cljs.core.get.call(null,map__23815__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var bounds = cljs.core.get.call(null,map__23815__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__23815__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_set.call(null,boundaryline_ids,tolerance,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,comm,map__23815,map__23815__$1,tolerance,bounds,boundaryline_ids){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,comm,map__23815,map__23815__$1,tolerance,bounds,boundaryline_ids){
return (function (state_23820){var state_val_23821 = (state_23820[(1)]);if((state_val_23821 === (2)))
{var inst_23817 = (state_23820[(2)]);var inst_23818 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_23817);var state_23820__$1 = (function (){var statearr_23822 = state_23820;(statearr_23822[(7)] = inst_23818);
return statearr_23822;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23820__$1,true);
} else
{if((state_val_23821 === (1)))
{var state_23820__$1 = state_23820;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23820__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto__,comm,map__23815,map__23815__$1,tolerance,bounds,boundaryline_ids))
;return ((function (switch__11461__auto__,c__11517__auto__,comm,map__23815,map__23815__$1,tolerance,bounds,boundaryline_ids){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23826 = [null,null,null,null,null,null,null,null];(statearr_23826[(0)] = state_machine__11462__auto__);
(statearr_23826[(1)] = (1));
return statearr_23826;
});
var state_machine__11462__auto____1 = (function (state_23820){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23820);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23827){if((e23827 instanceof Object))
{var ex__11465__auto__ = e23827;var statearr_23828_23830 = state_23820;(statearr_23828_23830[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23820);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23827;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23831 = state_23820;
state_23820 = G__23831;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23820){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,comm,map__23815,map__23815__$1,tolerance,bounds,boundaryline_ids))
})();var state__11519__auto__ = (function (){var statearr_23829 = f__11518__auto__.call(null);(statearr_23829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23829;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,comm,map__23815,map__23815__$1,tolerance,bounds,boundaryline_ids))
);
return c__11517__auto__;
};
var fetch_boundaryline_set = function (app_state,boundarylines_path,var_args){
var p__23799 = null;if (arguments.length > 2) {
  p__23799 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fetch_boundaryline_set__delegate.call(this,app_state,boundarylines_path,p__23799);};
fetch_boundaryline_set.cljs$lang$maxFixedArity = 2;
fetch_boundaryline_set.cljs$lang$applyTo = (function (arglist__23832){
var app_state = cljs.core.first(arglist__23832);
arglist__23832 = cljs.core.next(arglist__23832);
var boundarylines_path = cljs.core.first(arglist__23832);
var p__23799 = cljs.core.rest(arglist__23832);
return fetch_boundaryline_set__delegate(app_state,boundarylines_path,p__23799);
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
var get_or_fetch_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__23833){var map__23862 = p__23833;var map__23862__$1 = ((cljs.core.seq_QMARK_.call(null,map__23862))?cljs.core.apply.call(null,cljs.core.hash_map,map__23862):map__23862);var tolerance = cljs.core.get.call(null,map__23862__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),clustermap.boundarylines.min_tolerance);var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id,tolerance], null));var cached_bl = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23862,map__23862__$1,tolerance){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23862,map__23862__$1,tolerance){
return (function (state_23876){var state_val_23877 = (state_23876[(1)]);if((state_val_23877 === (5)))
{var inst_23870 = (state_23876[(2)]);var inst_23871 = cljs.core.deref.call(null,app_state);var inst_23872 = cljs.core.get_in.call(null,inst_23871,cache_path);var state_23876__$1 = (function (){var statearr_23878 = state_23876;(statearr_23878[(7)] = inst_23870);
return statearr_23878;
})();var statearr_23879_23890 = state_23876__$1;(statearr_23879_23890[(2)] = inst_23872);
(statearr_23879_23890[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23877 === (4)))
{var inst_23874 = (state_23876[(2)]);var state_23876__$1 = state_23876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23876__$1,inst_23874);
} else
{if((state_val_23877 === (3)))
{var inst_23865 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23866 = [boundaryline_id];var inst_23867 = (new cljs.core.PersistentVector(null,1,(5),inst_23865,inst_23866,null));var inst_23868 = clustermap.boundarylines.fetch_boundaryline_set.call(null,app_state,boundarylines_path__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),inst_23867,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance);var state_23876__$1 = state_23876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23876__$1,(5),inst_23868);
} else
{if((state_val_23877 === (2)))
{var state_23876__$1 = state_23876;var statearr_23880_23891 = state_23876__$1;(statearr_23880_23891[(2)] = cached_bl);
(statearr_23880_23891[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23877 === (1)))
{var state_23876__$1 = state_23876;if(cljs.core.truth_(cached_bl))
{var statearr_23881_23892 = state_23876__$1;(statearr_23881_23892[(1)] = (2));
} else
{var statearr_23882_23893 = state_23876__$1;(statearr_23882_23893[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23862,map__23862__$1,tolerance))
;return ((function (switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23862,map__23862__$1,tolerance){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23886 = [null,null,null,null,null,null,null,null];(statearr_23886[(0)] = state_machine__11462__auto__);
(statearr_23886[(1)] = (1));
return statearr_23886;
});
var state_machine__11462__auto____1 = (function (state_23876){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23876);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23887){if((e23887 instanceof Object))
{var ex__11465__auto__ = e23887;var statearr_23888_23894 = state_23876;(statearr_23888_23894[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23876);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23887;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23895 = state_23876;
state_23876 = G__23895;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23876){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23862,map__23862__$1,tolerance))
})();var state__11519__auto__ = (function (){var statearr_23889 = f__11518__auto__.call(null);(statearr_23889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,boundarylines_path__$1,cache_path,cached_bl,map__23862,map__23862__$1,tolerance))
);
return c__11517__auto__;
};
var get_or_fetch_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__23833 = null;if (arguments.length > 3) {
  p__23833 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_or_fetch_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__23833);};
get_or_fetch_boundaryline.cljs$lang$maxFixedArity = 3;
get_or_fetch_boundaryline.cljs$lang$applyTo = (function (arglist__23896){
var app_state = cljs.core.first(arglist__23896);
arglist__23896 = cljs.core.next(arglist__23896);
var boundarylines_path = cljs.core.first(arglist__23896);
arglist__23896 = cljs.core.next(arglist__23896);
var boundaryline_id = cljs.core.first(arglist__23896);
var p__23833 = cljs.core.rest(arglist__23896);
return get_or_fetch_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__23833);
});
get_or_fetch_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_boundaryline__delegate;
return get_or_fetch_boundaryline;
})()
;
clustermap.boundarylines.rp = (function rp(ch){var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_23916){var state_val_23917 = (state_23916[(1)]);if((state_val_23917 === (2)))
{var inst_23912 = (state_23916[(2)]);var inst_23913 = cljs.core.clj__GT_js.call(null,inst_23912);var inst_23914 = console.log(inst_23913);var state_23916__$1 = state_23916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23916__$1,inst_23914);
} else
{if((state_val_23917 === (1)))
{var state_23916__$1 = state_23916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23916__$1,(2),ch);
} else
{return null;
}
}
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23921 = [null,null,null,null,null,null,null];(statearr_23921[(0)] = state_machine__11462__auto__);
(statearr_23921[(1)] = (1));
return statearr_23921;
});
var state_machine__11462__auto____1 = (function (state_23916){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_23916);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e23922){if((e23922 instanceof Object))
{var ex__11465__auto__ = e23922;var statearr_23923_23925 = state_23916;(statearr_23923_23925[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23916);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23922;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23926 = state_23916;
state_23916 = G__23926;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_23916){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_23916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_23924 = f__11518__auto__.call(null);(statearr_23924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23924;
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
var fetch_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,tolerance,p__23927){var map__23943 = p__23927;var map__23943__$1 = ((cljs.core.seq_QMARK_.call(null,map__23943))?cljs.core.apply.call(null,cljs.core.hash_map,map__23943):map__23943);var bounds = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var boundaryline_ids = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var comm = clustermap.api.boundaryline_collection_view.call(null,collection_id,tolerance,bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,comm,map__23943,map__23943__$1,bounds,boundaryline_ids){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,comm,map__23943,map__23943__$1,bounds,boundaryline_ids){
return (function (state_23948){var state_val_23949 = (state_23948[(1)]);if((state_val_23949 === (2)))
{var inst_23945 = (state_23948[(2)]);var inst_23946 = clustermap.boundarylines.cache_boundarylines.call(null,app_state,boundarylines_path,inst_23945);var state_23948__$1 = (function (){var statearr_23950 = state_23948;(statearr_23950[(7)] = inst_23946);
return statearr_23950;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23948__$1,true);
} else
{if((state_val_23949 === (1)))
{var state_23948__$1 = state_23948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23948__$1,(2),comm);
} else
{return null;
}
}
});})(c__11517__auto__,comm,map__23943,map__23943__$1,bounds,boundaryline_ids))
;return ((function (switch__11461__auto__,c__11517__auto__,comm,map__23943,map__23943__$1,bounds,boundaryline_ids){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_23954 = [null,null,null,null,null,null,null,null];(statearr_23954[(0)] = state_machine__11462__auto__);
(statearr_23954[(1)] = (1));
return statearr_23954;
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
}catch (e23955){if((e23955 instanceof Object))
{var ex__11465__auto__ = e23955;var statearr_23956_23958 = state_23948;(statearr_23956_23958[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23948);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23955;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23959 = state_23948;
state_23948 = G__23959;
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
;})(switch__11461__auto__,c__11517__auto__,comm,map__23943,map__23943__$1,bounds,boundaryline_ids))
})();var state__11519__auto__ = (function (){var statearr_23957 = f__11518__auto__.call(null);(statearr_23957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_23957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,comm,map__23943,map__23943__$1,bounds,boundaryline_ids))
);
return c__11517__auto__;
};
var fetch_boundarylines = function (app_state,boundarylines_path,collection_id,tolerance,var_args){
var p__23927 = null;if (arguments.length > 4) {
  p__23927 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return fetch_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,tolerance,p__23927);};
fetch_boundarylines.cljs$lang$maxFixedArity = 4;
fetch_boundarylines.cljs$lang$applyTo = (function (arglist__23960){
var app_state = cljs.core.first(arglist__23960);
arglist__23960 = cljs.core.next(arglist__23960);
var boundarylines_path = cljs.core.first(arglist__23960);
arglist__23960 = cljs.core.next(arglist__23960);
var collection_id = cljs.core.first(arglist__23960);
arglist__23960 = cljs.core.next(arglist__23960);
var tolerance = cljs.core.first(arglist__23960);
var p__23927 = cljs.core.rest(arglist__23960);
return fetch_boundarylines__delegate(app_state,boundarylines_path,collection_id,tolerance,p__23927);
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
var get_cached_boundaryline__delegate = function (app_state,boundarylines_path,boundaryline_id,p__23961){var vec__23964 = p__23961;var map__23965 = cljs.core.nth.call(null,vec__23964,(0),null);var map__23965__$1 = ((cljs.core.seq_QMARK_.call(null,map__23965))?cljs.core.apply.call(null,cljs.core.hash_map,map__23965):map__23965);var indexes = cljs.core.get.call(null,map__23965__$1,new cljs.core.Keyword(null,"indexes","indexes",1496475545));var cache_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708),boundaryline_id], null));var cached = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),cache_path);var tolerance = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cached)));var cached__$1 = (cljs.core.truth_(tolerance)?cljs.core.get.call(null,cached,tolerance):null);if(cljs.core.truth_(cached__$1))
{return cached__$1;
} else
{return cljs.core.some.call(null,((function (cache_path,cached,tolerance,cached__$1,vec__23964,map__23965,map__23965__$1,indexes){
return (function (collection_id){var collection_index_path = cljs.core.concat.call(null,clustermap.boundarylines.make_sequential.call(null,boundarylines_path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_id,new cljs.core.Keyword(null,"index","index",-1531685915)], null));var collection_index = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path);if(cljs.core.truth_(collection_index))
{return (collection_index[cljs.core.name.call(null,boundaryline_id)]);
} else
{return null;
}
});})(cache_path,cached,tolerance,cached__$1,vec__23964,map__23965,map__23965__$1,indexes))
,indexes);
}
};
var get_cached_boundaryline = function (app_state,boundarylines_path,boundaryline_id,var_args){
var p__23961 = null;if (arguments.length > 3) {
  p__23961 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_cached_boundaryline__delegate.call(this,app_state,boundarylines_path,boundaryline_id,p__23961);};
get_cached_boundaryline.cljs$lang$maxFixedArity = 3;
get_cached_boundaryline.cljs$lang$applyTo = (function (arglist__23966){
var app_state = cljs.core.first(arglist__23966);
arglist__23966 = cljs.core.next(arglist__23966);
var boundarylines_path = cljs.core.first(arglist__23966);
arglist__23966 = cljs.core.next(arglist__23966);
var boundaryline_id = cljs.core.first(arglist__23966);
var p__23961 = cljs.core.rest(arglist__23966);
return get_cached_boundaryline__delegate(app_state,boundarylines_path,boundaryline_id,p__23961);
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
var get_or_fetch_best_boundarylines__delegate = function (app_state,boundarylines_path,collection_id,bounds,zoom,p__23967){var map__23972 = p__23967;var map__23972__$1 = ((cljs.core.seq_QMARK_.call(null,map__23972))?cljs.core.apply.call(null,cljs.core.hash_map,map__23972):map__23972);var boundaryline_ids = cljs.core.get.call(null,map__23972__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var boundarylines_path__$1 = clustermap.boundarylines.make_sequential.call(null,boundarylines_path);var all_collections_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505)], null));var general_cache_path = cljs.core.concat.call(null,boundarylines_path__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null));var general_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),general_cache_path);var collection_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,all_collections_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_id], null)):null);var collection_index_path = (cljs.core.truth_(collection_id)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null)):null);var collection_index = (cljs.core.truth_(collection_id)?cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_index_path):null);var collection_cache_path = (cljs.core.truth_(collection_path)?cljs.core.concat.call(null,collection_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708)], null)):null);var collection_cache = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),collection_cache_path);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var best_versions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__23972,map__23972__$1,boundaryline_ids){
return (function (blid){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [blid,clustermap.boundarylines.best_version.call(null,collection_index,collection_cache,general_cache,zoom,blid)], null);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,map__23972,map__23972__$1,boundaryline_ids))
,boundaryline_ids));var required = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__23972,map__23972__$1,boundaryline_ids){
return (function (p__23973){var vec__23974 = p__23973;var blid = cljs.core.nth.call(null,vec__23974,(0),null);var vec__23975 = cljs.core.nth.call(null,vec__23974,(1),null);var tol = cljs.core.nth.call(null,vec__23975,(0),null);var bl = cljs.core.nth.call(null,vec__23975,(1),null);return cljs.core.not_EQ_.call(null,tol,i_tol);
});})(boundarylines_path__$1,all_collections_path,general_cache_path,general_cache,collection_path,collection_index_path,collection_index,collection_cache_path,collection_cache,i_tol,best_versions,map__23972,map__23972__$1,boundaryline_ids))
,best_versions));var notify_chan = (cljs.core.truth_(cljs.core.not_empty.call(null,required))?clustermap.boundarylines.fetch_boundarylines.call(null,app_state,boundarylines_path__$1,collection_id,i_tol,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),required,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds):(function (){var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,true);
cljs.core.async.close_BANG_.call(null,ch);
return ch;
})());return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [best_versions,notify_chan], null);
};
var get_or_fetch_best_boundarylines = function (app_state,boundarylines_path,collection_id,bounds,zoom,var_args){
var p__23967 = null;if (arguments.length > 5) {
  p__23967 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return get_or_fetch_best_boundarylines__delegate.call(this,app_state,boundarylines_path,collection_id,bounds,zoom,p__23967);};
get_or_fetch_best_boundarylines.cljs$lang$maxFixedArity = 5;
get_or_fetch_best_boundarylines.cljs$lang$applyTo = (function (arglist__23976){
var app_state = cljs.core.first(arglist__23976);
arglist__23976 = cljs.core.next(arglist__23976);
var boundarylines_path = cljs.core.first(arglist__23976);
arglist__23976 = cljs.core.next(arglist__23976);
var collection_id = cljs.core.first(arglist__23976);
arglist__23976 = cljs.core.next(arglist__23976);
var bounds = cljs.core.first(arglist__23976);
arglist__23976 = cljs.core.next(arglist__23976);
var zoom = cljs.core.first(arglist__23976);
var p__23967 = cljs.core.rest(arglist__23976);
return get_or_fetch_best_boundarylines__delegate(app_state,boundarylines_path,collection_id,bounds,zoom,p__23967);
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
clustermap.boundarylines.rtree_index = (function rtree_index(rtree,js_index){var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__23981_23985 = cljs.core.seq.call(null,keys);var chunk__23982_23986 = null;var count__23983_23987 = (0);var i__23984_23988 = (0);while(true){
if((i__23984_23988 < count__23983_23987))
{var k_23989 = cljs.core._nth.call(null,chunk__23982_23986,i__23984_23988);var obj_23990 = (js_index[k_23989]);var geom_23991 = (obj_23990["geojson"]);var feature_23992 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_23990["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_23990["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_23990["compact_name"])], null)], null));var __23993__$1 = (feature_23992["geometry"] = geom_23991);var __23994__$2 = ((feature_23992["properties"])["index_object"] = obj_23990);features.push(feature_23992);
{
var G__23995 = seq__23981_23985;
var G__23996 = chunk__23982_23986;
var G__23997 = count__23983_23987;
var G__23998 = (i__23984_23988 + (1));
seq__23981_23985 = G__23995;
chunk__23982_23986 = G__23996;
count__23983_23987 = G__23997;
i__23984_23988 = G__23998;
continue;
}
} else
{var temp__4126__auto___23999 = cljs.core.seq.call(null,seq__23981_23985);if(temp__4126__auto___23999)
{var seq__23981_24000__$1 = temp__4126__auto___23999;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23981_24000__$1))
{var c__4408__auto___24001 = cljs.core.chunk_first.call(null,seq__23981_24000__$1);{
var G__24002 = cljs.core.chunk_rest.call(null,seq__23981_24000__$1);
var G__24003 = c__4408__auto___24001;
var G__24004 = cljs.core.count.call(null,c__4408__auto___24001);
var G__24005 = (0);
seq__23981_23985 = G__24002;
chunk__23982_23986 = G__24003;
count__23983_23987 = G__24004;
i__23984_23988 = G__24005;
continue;
}
} else
{var k_24006 = cljs.core.first.call(null,seq__23981_24000__$1);var obj_24007 = (js_index[k_24006]);var geom_24008 = (obj_24007["geojson"]);var feature_24009 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(obj_24007["id"]),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),(obj_24007["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),(obj_24007["compact_name"])], null)], null));var __24010__$1 = (feature_24009["geometry"] = geom_24008);var __24011__$2 = ((feature_24009["properties"])["index_object"] = obj_24007);features.push(feature_24009);
{
var G__24012 = cljs.core.next.call(null,seq__23981_24000__$1);
var G__24013 = null;
var G__24014 = (0);
var G__24015 = (0);
seq__23981_23985 = G__24012;
chunk__23982_23986 = G__24013;
count__23983_23987 = G__24014;
i__23984_23988 = G__24015;
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
return (function (state_24061){var state_val_24062 = (state_24061[(1)]);if((state_val_24062 === (5)))
{var inst_24048 = (state_24061[(7)]);var inst_24058 = (state_24061[(2)]);var inst_24059 = clustermap.boundarylines.cache_index.call(null,app_state,boundarylines_path__$1,inst_24048);var state_24061__$1 = (function (){var statearr_24063 = state_24061;(statearr_24063[(8)] = inst_24058);
return statearr_24063;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24061__$1,inst_24059);
} else
{if((state_val_24062 === (4)))
{var state_24061__$1 = state_24061;var statearr_24064_24076 = state_24061__$1;(statearr_24064_24076[(2)] = null);
(statearr_24064_24076[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24062 === (3)))
{var inst_24048 = (state_24061[(7)]);var inst_24055 = clustermap.boundarylines.rtree_index.call(null,rtree,inst_24048);var state_24061__$1 = state_24061;var statearr_24065_24077 = state_24061__$1;(statearr_24065_24077[(2)] = inst_24055);
(statearr_24065_24077[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24062 === (2)))
{var inst_24048 = (state_24061[(7)]);var inst_24048__$1 = (state_24061[(2)]);var inst_24049 = (function (){var bl_coll_index = inst_24048__$1;return ((function (bl_coll_index,inst_24048,inst_24048__$1,state_val_24062,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree){
return (function (old){if(cljs.core.truth_(old))
{return old;
} else
{return bl_coll_index;
}
});
;})(bl_coll_index,inst_24048,inst_24048__$1,state_val_24062,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var inst_24050 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,index_path,inst_24049);var inst_24051 = cljs.core.deref.call(null,app_state);var inst_24052 = cljs.core.get_in.call(null,inst_24051,index_path);var inst_24053 = cljs.core._EQ_.call(null,inst_24052,inst_24048__$1);var state_24061__$1 = (function (){var statearr_24066 = state_24061;(statearr_24066[(9)] = inst_24050);
(statearr_24066[(7)] = inst_24048__$1);
return statearr_24066;
})();if(inst_24053)
{var statearr_24067_24078 = state_24061__$1;(statearr_24067_24078[(1)] = (3));
} else
{var statearr_24068_24079 = state_24061__$1;(statearr_24068_24079[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24062 === (1)))
{var inst_24046 = clustermap.api.boundaryline_collection_index.call(null,collection_id,new cljs.core.Keyword(null,"raw","raw",1604651272),true);var state_24061__$1 = state_24061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24061__$1,(2),inst_24046);
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
var state_machine__11462__auto____0 = (function (){var statearr_24072 = [null,null,null,null,null,null,null,null,null,null];(statearr_24072[(0)] = state_machine__11462__auto__);
(statearr_24072[(1)] = (1));
return statearr_24072;
});
var state_machine__11462__auto____1 = (function (state_24061){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_24061);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e24073){if((e24073 instanceof Object))
{var ex__11465__auto__ = e24073;var statearr_24074_24080 = state_24061;(statearr_24074_24080[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24061);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24073;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24081 = state_24061;
state_24061 = G__24081;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_24061){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_24061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,boundarylines_path__$1,all_collections_path,collection_path,index_path,index,rtree))
})();var state__11519__auto__ = (function (){var statearr_24075 = f__11518__auto__.call(null);(statearr_24075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_24075;
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
