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
return (function (state_29498){var state_val_29499 = (state_29498[(1)]);if((state_val_29499 === (5)))
{var inst_29493 = (state_29498[(2)]);var state_29498__$1 = state_29498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29498__$1,(2),inst_29493);
} else
{if((state_val_29499 === (4)))
{var inst_29491 = search_fn.call(null);var state_29498__$1 = state_29498;var statearr_29500_29511 = state_29498__$1;(statearr_29500_29511[(2)] = inst_29491);
(statearr_29500_29511[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29499 === (3)))
{var inst_29489 = search_fn.call(null,query);var state_29498__$1 = state_29498;var statearr_29501_29512 = state_29498__$1;(statearr_29501_29512[(2)] = inst_29489);
(statearr_29501_29512[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29499 === (2)))
{var inst_29495 = (state_29498[(2)]);var inst_29496 = om.core.update_BANG_.call(null,search_cursor,new cljs.core.Keyword(null,"results","results",-1134170113),inst_29495);var state_29498__$1 = state_29498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29498__$1,inst_29496);
} else
{if((state_val_29499 === (1)))
{var inst_29486 = cljs.core.count.call(null,query);var inst_29487 = (inst_29486 > (1));var state_29498__$1 = state_29498;if(cljs.core.truth_(inst_29487))
{var statearr_29502_29513 = state_29498__$1;(statearr_29502_29513[(1)] = (3));
} else
{var statearr_29503_29514 = state_29498__$1;(statearr_29503_29514[(1)] = (4));
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
var state_machine__9111__auto____0 = (function (){var statearr_29507 = [null,null,null,null,null,null,null];(statearr_29507[(0)] = state_machine__9111__auto__);
(statearr_29507[(1)] = (1));
return statearr_29507;
});
var state_machine__9111__auto____1 = (function (state_29498){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29498);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29508){if((e29508 instanceof Object))
{var ex__9114__auto__ = e29508;var statearr_29509_29515 = state_29498;(statearr_29509_29515[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29498);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29508;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29516 = state_29498;
state_29498 = G__29516;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29498){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_29510 = f__9126__auto__.call(null);(statearr_29510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29510;
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
clustermap.components.search.select_next_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29519 = schema.core.Any;var input_schema29520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29517","map29517",317755483,null))], null);var input_checker29521 = schema.core.checker.call(null,input_schema29520);var output_checker29522 = schema.core.checker.call(null,output_schema29519);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29519,input_schema29520,input_checker29521,output_checker29522){
return (function select_next_result(G__29523){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29526 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29523], null);var temp__4126__auto___29527 = input_checker29521.call(null,args__6035__auto___29526);if(cljs.core.truth_(temp__4126__auto___29527))
{var error__6036__auto___29528 = temp__4126__auto___29527;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___29528)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29528,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29526,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29520,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29517 = G__29523;while(true){
if(cljs.core.map_QMARK_.call(null,map29517))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29517)));
}
var map29518 = plumbing.fnk.schema.safe_get.call(null,map29517,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29518,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29517,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__29525 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__29525,(0),null);var after = cljs.core.nth.call(null,vec__29525,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.first.call(null,after);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.first.call(null,before);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29529 = output_checker29522.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29529))
{var error__6036__auto___29530 = temp__4126__auto___29529;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___29530)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29530,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29519,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29519,input_schema29520,input_checker29521,output_checker29522))
,schema.core.make_fn_schema.call(null,output_schema29519,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29520], null)));
})();
clustermap.components.search.select_prev_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29533 = schema.core.Any;var input_schema29534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29531","map29531",1911408496,null))], null);var input_checker29535 = schema.core.checker.call(null,input_schema29534);var output_checker29536 = schema.core.checker.call(null,output_schema29533);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536){
return (function select_prev_result(G__29537){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29540 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29537], null);var temp__4126__auto___29541 = input_checker29535.call(null,args__6035__auto___29540);if(cljs.core.truth_(temp__4126__auto___29541))
{var error__6036__auto___29542 = temp__4126__auto___29541;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___29542)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29542,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29540,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29534,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29531 = G__29537;while(true){
if(cljs.core.map_QMARK_.call(null,map29531))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29531)));
}
var map29532 = plumbing.fnk.schema.safe_get.call(null,map29531,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29532,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29531,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__29539 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__29539,(0),null);var after = cljs.core.nth.call(null,vec__29539,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.last.call(null,before);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.last.call(null,after);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29543 = output_checker29536.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29543))
{var error__6036__auto___29544 = temp__4126__auto___29543;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___29544)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29544,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29533,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536))
,schema.core.make_fn_schema.call(null,output_schema29533,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29534], null)));
})();
clustermap.components.search.choose_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29548 = schema.core.Any;var input_schema29549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29545","map29545",-122701895,null))], null);var input_checker29550 = schema.core.checker.call(null,input_schema29549);var output_checker29551 = schema.core.checker.call(null,output_schema29548);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29548,input_schema29549,input_checker29550,output_checker29551){
return (function choose_result(G__29552){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29552], null);var temp__4126__auto___29554 = input_checker29550.call(null,args__6035__auto___29553);if(cljs.core.truth_(temp__4126__auto___29554))
{var error__6036__auto___29555 = temp__4126__auto___29554;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___29555)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29555,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29553,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29549,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29545 = G__29552;while(true){
if(cljs.core.map_QMARK_.call(null,map29545))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29545)));
}
var map29546 = plumbing.fnk.schema.safe_get.call(null,map29545,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29546,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29547 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29547,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29547,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29547,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29545,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var cr = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var temp__4126__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cr], true),results);if(cljs.core.truth_(temp__4126__auto__))
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
{var temp__4126__auto___29556 = output_checker29551.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29556))
{var error__6036__auto___29557 = temp__4126__auto___29556;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___29557)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29557,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29548,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29548,input_schema29549,input_checker29550,output_checker29551))
,schema.core.make_fn_schema.call(null,output_schema29548,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29549], null)));
})();
clustermap.components.search.key_down = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29560 = schema.core.Any;var input_schema29561 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29562 = schema.core.checker.call(null,input_schema29561);var output_checker29563 = schema.core.checker.call(null,output_schema29560);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29560,input_schema29561,input_checker29562,output_checker29563){
return (function key_down(G__29564){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29564], null);var temp__4126__auto___29572 = input_checker29562.call(null,args__6035__auto___29571);if(cljs.core.truth_(temp__4126__auto___29572))
{var error__6036__auto___29573 = temp__4126__auto___29572;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___29573)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29573,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29571,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29561,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29564;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29558 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29558,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29559 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29559,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29559,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29559,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var e = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);var pred__29568 = cljs.core._EQ__EQ_;var expr__29569 = e.keyCode;if(cljs.core.truth_(pred__29568.call(null,clustermap.components.search.ESCAPE_KEY,expr__29569)))
{return clustermap.components.search.search_for.call(null,state,search,search_fn,null);
} else
{if(cljs.core.truth_(pred__29568.call(null,clustermap.components.search.ENTER_KEY,expr__29569)))
{return clustermap.components.search.choose_result.call(null,m);
} else
{if(cljs.core.truth_(pred__29568.call(null,clustermap.components.search.UP_ARROW,expr__29569)))
{return clustermap.components.search.select_prev_result.call(null,m);
} else
{if(cljs.core.truth_(pred__29568.call(null,clustermap.components.search.DOWN_ARROW,expr__29569)))
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
{var temp__4126__auto___29574 = output_checker29563.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29574))
{var error__6036__auto___29575 = temp__4126__auto___29574;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___29575)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29575,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29560,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29560,input_schema29561,input_checker29562,output_checker29563))
,schema.core.make_fn_schema.call(null,output_schema29560,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29561], null)));
})();
clustermap.components.search.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29578 = schema.core.Any;var input_schema29579 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29580 = schema.core.checker.call(null,input_schema29579);var output_checker29581 = schema.core.checker.call(null,output_schema29578);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581){
return (function render_STAR_(G__29582){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29582], null);var temp__4126__auto___29600 = input_checker29580.call(null,args__6035__auto___29599);if(cljs.core.truth_(temp__4126__auto___29600))
{var error__6036__auto___29601 = temp__4126__auto___29600;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29601)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29601,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29599,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29579,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29582;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29576 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29576,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29577 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29577,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var col_headers = plumbing.fnk.schema.safe_get.call(null,map29577,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29577,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29577,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);return React.DOM.div({"onFocus": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581))
, "onBlur": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581))
},sablono.interpreter.input.call(null,{"type": "text", "value": query, "placeholder": "Company search", "onKeyDown": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581){
return (function (e){clustermap.components.search.key_down.call(null,cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),e], null)));
return null;
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581))
, "onChange": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581){
return (function (e){var v = e.target.value;return clustermap.components.search.search_for.call(null,state,search,search_fn,v);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581))
}),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not_empty.call(null,results);
} else
{return and__3627__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",1319364942),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,col_headers))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.header","li.header",-586263037),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581){
return (function iter__29591(s__29592){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581){
return (function (){var s__29592__$1 = s__29592;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29592__$1);if(temp__4126__auto__)
{var s__29592__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29592__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29592__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29594 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29593 = (0);while(true){
if((i__29593 < size__4376__auto__))
{var h = cljs.core._nth.call(null,c__4375__auto__,i__29593);cljs.core.chunk_append.call(null,b__29594,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null));
{
var G__29602 = (i__29593 + (1));
i__29593 = G__29602;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29594),iter__29591.call(null,cljs.core.chunk_rest.call(null,s__29592__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29594),null);
}
} else
{var h = cljs.core.first.call(null,s__29592__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null),iter__29591.call(null,cljs.core.rest.call(null,s__29592__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581))
;return iter__4377__auto__.call(null,col_headers);
})()], null)], null):null),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581){
return (function iter__29595(s__29596){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581){
return (function (){var s__29596__$1 = s__29596;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29596__$1);if(temp__4126__auto__)
{var s__29596__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29596__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29596__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29598 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29597 = (0);while(true){
if((i__29597 < size__4376__auto__))
{var r = cljs.core._nth.call(null,c__4375__auto__,i__29597);cljs.core.chunk_append.call(null,b__29598,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29597,r,c__4375__auto__,size__4376__auto__,b__29598,s__29596__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
});})(i__29597,r,c__4375__auto__,size__4376__auto__,b__29598,s__29596__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null));
{
var G__29603 = (i__29597 + (1));
i__29597 = G__29603;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29598),iter__29595.call(null,cljs.core.chunk_rest.call(null,s__29596__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29598),null);
}
} else
{var r = cljs.core.first.call(null,s__29596__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (r,s__29596__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
});})(r,s__29596__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null),iter__29595.call(null,cljs.core.rest.call(null,s__29596__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29577,search,map29576,validate__6034__auto__,ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581))
;return iter__4377__auto__.call(null,results);
})()))], null):null)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29604 = output_checker29581.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29604))
{var error__6036__auto___29605 = temp__4126__auto___29604;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29605)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29605,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29578,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29578,input_schema29579,input_checker29580,output_checker29581))
,schema.core.make_fn_schema.call(null,output_schema29578,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29579], null)));
})();
clustermap.components.search.SearchComponentSchema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null)),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any], null),new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.maybe.call(null,schema.core.Str),new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null))], null);
var component_fnk__7881__auto___29624 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29610 = schema.core.Any;var input_schema29611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),clustermap.components.search.SearchComponentSchema], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29612 = schema.core.checker.call(null,input_schema29611);var output_checker29613 = schema.core.checker.call(null,output_schema29610);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613){
return (function constructor29607(G__29614){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29614], null);var temp__4126__auto___29626 = input_checker29612.call(null,args__6035__auto___29625);if(cljs.core.truth_(temp__4126__auto___29626))
{var error__6036__auto___29627 = temp__4126__auto___29626;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29607","constructor29607",105160836,null),cljs.core.pr_str.call(null,error__6036__auto___29627)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29627,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29625,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29611,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29614;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29609 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29609,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.search.t29618 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t29618 = (function (input_checker29612,constructor29607,owner,map29609,output_checker29613,m,state,search,output_schema29610,input_schema29611,validate__6034__auto__,ufv__,G__29614,meta29619){
this.input_checker29612 = input_checker29612;
this.constructor29607 = constructor29607;
this.owner = owner;
this.map29609 = map29609;
this.output_checker29613 = output_checker29613;
this.m = m;
this.state = state;
this.search = search;
this.output_schema29610 = output_schema29610;
this.input_schema29611 = input_schema29611;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.G__29614 = G__29614;
this.meta29619 = meta29619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t29618.cljs$lang$type = true;
clustermap.components.search.t29618.cljs$lang$ctorStr = "clustermap.components.search/t29618";
clustermap.components.search.t29618.cljs$lang$ctorPrWriter = ((function (owner,state,search,map29609,validate__6034__auto__,ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.search/t29618");
});})(owner,state,search,map29609,validate__6034__auto__,ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613))
;
clustermap.components.search.t29618.prototype.om$core$IDisplayName$ = true;
clustermap.components.search.t29618.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,search,map29609,validate__6034__auto__,ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613){
return (function (_){var self__ = this;
var ___$1 = this;return "search-component";
});})(owner,state,search,map29609,validate__6034__auto__,ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613))
;
clustermap.components.search.t29618.prototype.om$core$IRender$ = true;
clustermap.components.search.t29618.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,search,map29609,validate__6034__auto__,ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.search.render_STAR_.call(null,self__.m);
});})(owner,state,search,map29609,validate__6034__auto__,ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613))
;
clustermap.components.search.t29618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,search,map29609,validate__6034__auto__,ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613){
return (function (_29620){var self__ = this;
var _29620__$1 = this;return self__.meta29619;
});})(owner,state,search,map29609,validate__6034__auto__,ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613))
;
clustermap.components.search.t29618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,search,map29609,validate__6034__auto__,ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613){
return (function (_29620,meta29619__$1){var self__ = this;
var _29620__$1 = this;return (new clustermap.components.search.t29618(self__.input_checker29612,self__.constructor29607,self__.owner,self__.map29609,self__.output_checker29613,self__.m,self__.state,self__.search,self__.output_schema29610,self__.input_schema29611,self__.validate__6034__auto__,self__.ufv__,self__.G__29614,meta29619__$1));
});})(owner,state,search,map29609,validate__6034__auto__,ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613))
;
clustermap.components.search.__GT_t29618 = ((function (owner,state,search,map29609,validate__6034__auto__,ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613){
return (function __GT_t29618(input_checker29612__$1,constructor29607__$1,owner__$1,map29609__$1,output_checker29613__$1,m__$1,state__$1,search__$1,output_schema29610__$1,input_schema29611__$1,validate__6034__auto____$1,ufv____$1,G__29614__$1,meta29619){return (new clustermap.components.search.t29618(input_checker29612__$1,constructor29607__$1,owner__$1,map29609__$1,output_checker29613__$1,m__$1,state__$1,search__$1,output_schema29610__$1,input_schema29611__$1,validate__6034__auto____$1,ufv____$1,G__29614__$1,meta29619));
});})(owner,state,search,map29609,validate__6034__auto__,ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613))
;
}
return (new clustermap.components.search.t29618(input_checker29612,constructor29607,owner,map29609,output_checker29613,m,state,search,output_schema29610,input_schema29611,validate__6034__auto__,ufv__,G__29614,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29628 = output_checker29613.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29628))
{var error__6036__auto___29629 = temp__4126__auto___29628;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29607","constructor29607",105160836,null),cljs.core.pr_str.call(null,error__6036__auto___29629)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29629,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29610,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29610,input_schema29611,input_checker29612,output_checker29613))
,schema.core.make_fn_schema.call(null,output_schema29610,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29611], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.search.search_component = ((function (component_fnk__7881__auto___29624){
return (function() { 
var search_component__delegate = function (data__7882__auto__,owner29606,p__29621){var vec__29623 = p__29621;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29623,(0),null);return component_fnk__7881__auto___29624.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner29606),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29606),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29606,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var search_component = function (data__7882__auto__,owner29606,var_args){
var p__29621 = null;if (arguments.length > 2) {
  p__29621 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return search_component__delegate.call(this,data__7882__auto__,owner29606,p__29621);};
search_component.cljs$lang$maxFixedArity = 2;
search_component.cljs$lang$applyTo = (function (arglist__29630){
var data__7882__auto__ = cljs.core.first(arglist__29630);
arglist__29630 = cljs.core.next(arglist__29630);
var owner29606 = cljs.core.first(arglist__29630);
var p__29621 = cljs.core.rest(arglist__29630);
return search_component__delegate(data__7882__auto__,owner29606,p__29621);
});
search_component.cljs$core$IFn$_invoke$arity$variadic = search_component__delegate;
return search_component;
})()
;})(component_fnk__7881__auto___29624))
;
clustermap.components.search.__GT_search_component = (function() {
var __GT_search_component = null;
var __GT_search_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__);
});
var __GT_search_component__2 = (function (cursor__7850__auto__,m29608){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__,m29608);
});
__GT_search_component = function(cursor__7850__auto__,m29608){
switch(arguments.length){
case 1:
return __GT_search_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_search_component__2.call(this,cursor__7850__auto__,m29608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_search_component.cljs$core$IFn$_invoke$arity$1 = __GT_search_component__1;
__GT_search_component.cljs$core$IFn$_invoke$arity$2 = __GT_search_component__2;
return __GT_search_component;
})()
;
