// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.search.ESCAPE_KEY = (27);
clustermap.components.search.ENTER_KEY = (13);
clustermap.components.search.LEFT_ARROW = (37);
clustermap.components.search.UP_ARROW = (38);
clustermap.components.search.RIGHT_ARROW = (39);
clustermap.components.search.DOWN_ARROW = (40);
clustermap.components.search.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
clustermap.components.search.search_for = (function search_for(state,search_cursor,search_fn,query){om.core.update_BANG_.call(null,search_cursor,new cljs.core.Keyword(null,"query","query",-1288509510),query);
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,query)))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),null);
} else
{}
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__){
return (function (state_29346){var state_val_29347 = (state_29346[(1)]);if((state_val_29347 === (5)))
{var inst_29341 = (state_29346[(2)]);var state_29346__$1 = state_29346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29346__$1,(2),inst_29341);
} else
{if((state_val_29347 === (4)))
{var inst_29339 = search_fn.call(null);var state_29346__$1 = state_29346;var statearr_29348_29359 = state_29346__$1;(statearr_29348_29359[(2)] = inst_29339);
(statearr_29348_29359[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29347 === (3)))
{var inst_29337 = search_fn.call(null,query);var state_29346__$1 = state_29346;var statearr_29349_29360 = state_29346__$1;(statearr_29349_29360[(2)] = inst_29337);
(statearr_29349_29360[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29347 === (2)))
{var inst_29343 = (state_29346[(2)]);var inst_29344 = om.core.update_BANG_.call(null,search_cursor,new cljs.core.Keyword(null,"results","results",-1134170113),inst_29343);var state_29346__$1 = state_29346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29346__$1,inst_29344);
} else
{if((state_val_29347 === (1)))
{var inst_29334 = cljs.core.count.call(null,query);var inst_29335 = (inst_29334 > (1));var state_29346__$1 = state_29346;if(cljs.core.truth_(inst_29335))
{var statearr_29350_29361 = state_29346__$1;(statearr_29350_29361[(1)] = (3));
} else
{var statearr_29351_29362 = state_29346__$1;(statearr_29351_29362[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__9125__auto__))
;return ((function (switch__9110__auto__,c__9125__auto__){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29355 = [null,null,null,null,null,null,null];(statearr_29355[(0)] = state_machine__9111__auto__);
(statearr_29355[(1)] = (1));
return statearr_29355;
});
var state_machine__9111__auto____1 = (function (state_29346){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29346);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29356){if((e29356 instanceof Object))
{var ex__9114__auto__ = e29356;var statearr_29357_29363 = state_29346;(statearr_29357_29363[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29346);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29356;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29364 = state_29346;
state_29346 = G__29364;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29346){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_29358 = f__9126__auto__.call(null);(statearr_29358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__))
);
return c__9125__auto__;
});
clustermap.components.search.partition_around = (function partition_around(val,seq){var match_idx = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (idx,v){if(cljs.core._EQ_.call(null,val,v))
{return idx;
} else
{return null;
}
}),seq));if(cljs.core.truth_(match_idx))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,match_idx,seq),cljs.core.rest.call(null,cljs.core.drop.call(null,match_idx,seq))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,seq], null);
}
});
clustermap.components.search.select_next_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29367 = schema.core.Any;var input_schema29368 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29365","map29365",713817328,null))], null);var input_checker29369 = schema.core.checker.call(null,input_schema29368);var output_checker29370 = schema.core.checker.call(null,output_schema29367);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29367,input_schema29368,input_checker29369,output_checker29370){
return (function select_next_result(G__29371){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29371], null);var temp__4126__auto___29375 = input_checker29369.call(null,args__6035__auto___29374);if(cljs.core.truth_(temp__4126__auto___29375))
{var error__6036__auto___29376 = temp__4126__auto___29375;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___29376)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29376,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29374,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29368,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29365 = G__29371;while(true){
if(cljs.core.map_QMARK_.call(null,map29365))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29365)));
}
var map29366 = plumbing.fnk.schema.safe_get.call(null,map29365,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29366,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29365,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__29373 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__29373,(0),null);var after = cljs.core.nth.call(null,vec__29373,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.first.call(null,after);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.first.call(null,before);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29377 = output_checker29370.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29377))
{var error__6036__auto___29378 = temp__4126__auto___29377;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___29378)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29378,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29367,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29367,input_schema29368,input_checker29369,output_checker29370))
,schema.core.make_fn_schema.call(null,output_schema29367,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29368], null)));
})();
clustermap.components.search.select_prev_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29381 = schema.core.Any;var input_schema29382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29379","map29379",1295106526,null))], null);var input_checker29383 = schema.core.checker.call(null,input_schema29382);var output_checker29384 = schema.core.checker.call(null,output_schema29381);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29381,input_schema29382,input_checker29383,output_checker29384){
return (function select_prev_result(G__29385){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29385], null);var temp__4126__auto___29389 = input_checker29383.call(null,args__6035__auto___29388);if(cljs.core.truth_(temp__4126__auto___29389))
{var error__6036__auto___29390 = temp__4126__auto___29389;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___29390)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29390,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29388,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29382,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29379 = G__29385;while(true){
if(cljs.core.map_QMARK_.call(null,map29379))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29379)));
}
var map29380 = plumbing.fnk.schema.safe_get.call(null,map29379,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29380,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29379,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__29387 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__29387,(0),null);var after = cljs.core.nth.call(null,vec__29387,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.last.call(null,before);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.last.call(null,after);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29391 = output_checker29384.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29391))
{var error__6036__auto___29392 = temp__4126__auto___29391;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___29392)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29392,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29381,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29381,input_schema29382,input_checker29383,output_checker29384))
,schema.core.make_fn_schema.call(null,output_schema29381,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29382], null)));
})();
clustermap.components.search.choose_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29396 = schema.core.Any;var input_schema29397 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29393","map29393",1843297164,null))], null);var input_checker29398 = schema.core.checker.call(null,input_schema29397);var output_checker29399 = schema.core.checker.call(null,output_schema29396);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29396,input_schema29397,input_checker29398,output_checker29399){
return (function choose_result(G__29400){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29401 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29400], null);var temp__4126__auto___29402 = input_checker29398.call(null,args__6035__auto___29401);if(cljs.core.truth_(temp__4126__auto___29402))
{var error__6036__auto___29403 = temp__4126__auto___29402;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___29403)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29403,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29401,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29397,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29393 = G__29400;while(true){
if(cljs.core.map_QMARK_.call(null,map29393))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29393)));
}
var map29394 = plumbing.fnk.schema.safe_get.call(null,map29393,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29394,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29395 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29395,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29395,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29395,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29393,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var cr = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var temp__4126__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cr], true),results);if(cljs.core.truth_(temp__4126__auto__))
{var r = temp__4126__auto__;console.log(cljs.core.clj__GT_js.call(null,r));
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29404 = output_checker29399.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29404))
{var error__6036__auto___29405 = temp__4126__auto___29404;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___29405)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29405,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29396,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29396,input_schema29397,input_checker29398,output_checker29399))
,schema.core.make_fn_schema.call(null,output_schema29396,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29397], null)));
})();
clustermap.components.search.key_down = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29408 = schema.core.Any;var input_schema29409 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29410 = schema.core.checker.call(null,input_schema29409);var output_checker29411 = schema.core.checker.call(null,output_schema29408);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29408,input_schema29409,input_checker29410,output_checker29411){
return (function key_down(G__29412){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29419 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29412], null);var temp__4126__auto___29420 = input_checker29410.call(null,args__6035__auto___29419);if(cljs.core.truth_(temp__4126__auto___29420))
{var error__6036__auto___29421 = temp__4126__auto___29420;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___29421)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29421,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29419,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29409,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29412;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29406 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29406,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29407 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29407,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29407,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29407,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var e = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);var pred__29416 = cljs.core._EQ__EQ_;var expr__29417 = e.keyCode;if(cljs.core.truth_(pred__29416.call(null,clustermap.components.search.ESCAPE_KEY,expr__29417)))
{return clustermap.components.search.search_for.call(null,state,search,search_fn,null);
} else
{if(cljs.core.truth_(pred__29416.call(null,clustermap.components.search.ENTER_KEY,expr__29417)))
{return clustermap.components.search.choose_result.call(null,m);
} else
{if(cljs.core.truth_(pred__29416.call(null,clustermap.components.search.UP_ARROW,expr__29417)))
{return clustermap.components.search.select_prev_result.call(null,m);
} else
{if(cljs.core.truth_(pred__29416.call(null,clustermap.components.search.DOWN_ARROW,expr__29417)))
{return clustermap.components.search.select_next_result.call(null,m);
} else
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
}
}
}
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29422 = output_checker29411.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29422))
{var error__6036__auto___29423 = temp__4126__auto___29422;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___29423)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29423,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29408,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29408,input_schema29409,input_checker29410,output_checker29411))
,schema.core.make_fn_schema.call(null,output_schema29408,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29409], null)));
})();
clustermap.components.search.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29426 = schema.core.Any;var input_schema29427 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29428 = schema.core.checker.call(null,input_schema29427);var output_checker29429 = schema.core.checker.call(null,output_schema29426);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429){
return (function render_STAR_(G__29430){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29447 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29430], null);var temp__4126__auto___29448 = input_checker29428.call(null,args__6035__auto___29447);if(cljs.core.truth_(temp__4126__auto___29448))
{var error__6036__auto___29449 = temp__4126__auto___29448;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29449)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29449,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29447,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29427,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29430;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29424 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29424,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29425 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29425,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var col_headers = plumbing.fnk.schema.safe_get.call(null,map29425,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29425,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29425,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);return React.DOM.div({"onFocus": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429))
, "onBlur": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429))
},sablono.interpreter.input.call(null,{"type": "text", "value": query, "placeholder": "Company search", "onKeyDown": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429){
return (function (e){clustermap.components.search.key_down.call(null,cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),e], null)));
return null;
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429))
, "onChange": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429){
return (function (e){var v = e.target.value;return clustermap.components.search.search_for.call(null,state,search,search_fn,v);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429))
}),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not_empty.call(null,results);
} else
{return and__3627__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",1319364942),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,col_headers))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.header","li.header",-586263037),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429){
return (function iter__29439(s__29440){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429){
return (function (){var s__29440__$1 = s__29440;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29440__$1);if(temp__4126__auto__)
{var s__29440__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29440__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29440__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29442 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29441 = (0);while(true){
if((i__29441 < size__4376__auto__))
{var h = cljs.core._nth.call(null,c__4375__auto__,i__29441);cljs.core.chunk_append.call(null,b__29442,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null));
{
var G__29450 = (i__29441 + (1));
i__29441 = G__29450;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29442),iter__29439.call(null,cljs.core.chunk_rest.call(null,s__29440__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29442),null);
}
} else
{var h = cljs.core.first.call(null,s__29440__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null),iter__29439.call(null,cljs.core.rest.call(null,s__29440__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429))
;return iter__4377__auto__.call(null,col_headers);
})()], null)], null):null),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429){
return (function iter__29443(s__29444){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429){
return (function (){var s__29444__$1 = s__29444;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29444__$1);if(temp__4126__auto__)
{var s__29444__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29444__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29444__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29446 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29445 = (0);while(true){
if((i__29445 < size__4376__auto__))
{var r = cljs.core._nth.call(null,c__4375__auto__,i__29445);cljs.core.chunk_append.call(null,b__29446,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29445,r,c__4375__auto__,size__4376__auto__,b__29446,s__29444__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
});})(i__29445,r,c__4375__auto__,size__4376__auto__,b__29446,s__29444__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null));
{
var G__29451 = (i__29445 + (1));
i__29445 = G__29451;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29446),iter__29443.call(null,cljs.core.chunk_rest.call(null,s__29444__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29446),null);
}
} else
{var r = cljs.core.first.call(null,s__29444__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (r,s__29444__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
});})(r,s__29444__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null),iter__29443.call(null,cljs.core.rest.call(null,s__29444__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29425,search,map29424,validate__6034__auto__,ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429))
;return iter__4377__auto__.call(null,results);
})()))], null):null)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29452 = output_checker29429.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29452))
{var error__6036__auto___29453 = temp__4126__auto___29452;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29453)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29453,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29426,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29426,input_schema29427,input_checker29428,output_checker29429))
,schema.core.make_fn_schema.call(null,output_schema29426,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29427], null)));
})();
clustermap.components.search.SearchComponentSchema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null)),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any], null),new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.maybe.call(null,schema.core.Str),new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null))], null);
var component_fnk__7881__auto___29472 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29458 = schema.core.Any;var input_schema29459 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),clustermap.components.search.SearchComponentSchema], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29460 = schema.core.checker.call(null,input_schema29459);var output_checker29461 = schema.core.checker.call(null,output_schema29458);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461){
return (function constructor29455(G__29462){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29473 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29462], null);var temp__4126__auto___29474 = input_checker29460.call(null,args__6035__auto___29473);if(cljs.core.truth_(temp__4126__auto___29474))
{var error__6036__auto___29475 = temp__4126__auto___29474;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29455","constructor29455",422541472,null),cljs.core.pr_str.call(null,error__6036__auto___29475)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29475,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29473,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29459,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29462;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29457 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29457,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.search.t29466 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t29466 = (function (constructor29455,owner,G__29462,output_checker29461,input_schema29459,m,state,search,output_schema29458,map29457,validate__6034__auto__,input_checker29460,ufv__,meta29467){
this.constructor29455 = constructor29455;
this.owner = owner;
this.G__29462 = G__29462;
this.output_checker29461 = output_checker29461;
this.input_schema29459 = input_schema29459;
this.m = m;
this.state = state;
this.search = search;
this.output_schema29458 = output_schema29458;
this.map29457 = map29457;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_checker29460 = input_checker29460;
this.ufv__ = ufv__;
this.meta29467 = meta29467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t29466.cljs$lang$type = true;
clustermap.components.search.t29466.cljs$lang$ctorStr = "clustermap.components.search/t29466";
clustermap.components.search.t29466.cljs$lang$ctorPrWriter = ((function (owner,state,search,map29457,validate__6034__auto__,ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.search/t29466");
});})(owner,state,search,map29457,validate__6034__auto__,ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461))
;
clustermap.components.search.t29466.prototype.om$core$IDisplayName$ = true;
clustermap.components.search.t29466.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,search,map29457,validate__6034__auto__,ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461){
return (function (_){var self__ = this;
var ___$1 = this;return "search-component";
});})(owner,state,search,map29457,validate__6034__auto__,ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461))
;
clustermap.components.search.t29466.prototype.om$core$IRender$ = true;
clustermap.components.search.t29466.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,search,map29457,validate__6034__auto__,ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.search.render_STAR_.call(null,self__.m);
});})(owner,state,search,map29457,validate__6034__auto__,ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461))
;
clustermap.components.search.t29466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,search,map29457,validate__6034__auto__,ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461){
return (function (_29468){var self__ = this;
var _29468__$1 = this;return self__.meta29467;
});})(owner,state,search,map29457,validate__6034__auto__,ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461))
;
clustermap.components.search.t29466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,search,map29457,validate__6034__auto__,ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461){
return (function (_29468,meta29467__$1){var self__ = this;
var _29468__$1 = this;return (new clustermap.components.search.t29466(self__.constructor29455,self__.owner,self__.G__29462,self__.output_checker29461,self__.input_schema29459,self__.m,self__.state,self__.search,self__.output_schema29458,self__.map29457,self__.validate__6034__auto__,self__.input_checker29460,self__.ufv__,meta29467__$1));
});})(owner,state,search,map29457,validate__6034__auto__,ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461))
;
clustermap.components.search.__GT_t29466 = ((function (owner,state,search,map29457,validate__6034__auto__,ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461){
return (function __GT_t29466(constructor29455__$1,owner__$1,G__29462__$1,output_checker29461__$1,input_schema29459__$1,m__$1,state__$1,search__$1,output_schema29458__$1,map29457__$1,validate__6034__auto____$1,input_checker29460__$1,ufv____$1,meta29467){return (new clustermap.components.search.t29466(constructor29455__$1,owner__$1,G__29462__$1,output_checker29461__$1,input_schema29459__$1,m__$1,state__$1,search__$1,output_schema29458__$1,map29457__$1,validate__6034__auto____$1,input_checker29460__$1,ufv____$1,meta29467));
});})(owner,state,search,map29457,validate__6034__auto__,ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461))
;
}
return (new clustermap.components.search.t29466(constructor29455,owner,G__29462,output_checker29461,input_schema29459,m,state,search,output_schema29458,map29457,validate__6034__auto__,input_checker29460,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29476 = output_checker29461.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29476))
{var error__6036__auto___29477 = temp__4126__auto___29476;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29455","constructor29455",422541472,null),cljs.core.pr_str.call(null,error__6036__auto___29477)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29477,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29458,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29458,input_schema29459,input_checker29460,output_checker29461))
,schema.core.make_fn_schema.call(null,output_schema29458,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29459], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.search.search_component = ((function (component_fnk__7881__auto___29472){
return (function() { 
var search_component__delegate = function (data__7882__auto__,owner29454,p__29469){var vec__29471 = p__29469;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29471,(0),null);return component_fnk__7881__auto___29472.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner29454),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29454),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29454,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var search_component = function (data__7882__auto__,owner29454,var_args){
var p__29469 = null;if (arguments.length > 2) {
  p__29469 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return search_component__delegate.call(this,data__7882__auto__,owner29454,p__29469);};
search_component.cljs$lang$maxFixedArity = 2;
search_component.cljs$lang$applyTo = (function (arglist__29478){
var data__7882__auto__ = cljs.core.first(arglist__29478);
arglist__29478 = cljs.core.next(arglist__29478);
var owner29454 = cljs.core.first(arglist__29478);
var p__29469 = cljs.core.rest(arglist__29478);
return search_component__delegate(data__7882__auto__,owner29454,p__29469);
});
search_component.cljs$core$IFn$_invoke$arity$variadic = search_component__delegate;
return search_component;
})()
;})(component_fnk__7881__auto___29472))
;
clustermap.components.search.__GT_search_component = (function() {
var __GT_search_component = null;
var __GT_search_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__);
});
var __GT_search_component__2 = (function (cursor__7850__auto__,m29456){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__,m29456);
});
__GT_search_component = function(cursor__7850__auto__,m29456){
switch(arguments.length){
case 1:
return __GT_search_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_search_component__2.call(this,cursor__7850__auto__,m29456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_search_component.cljs$core$IFn$_invoke$arity$1 = __GT_search_component__1;
__GT_search_component.cljs$core$IFn$_invoke$arity$2 = __GT_search_component__2;
return __GT_search_component;
})()
;
