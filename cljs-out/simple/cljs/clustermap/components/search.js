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
return (function (state_29533){var state_val_29534 = (state_29533[(1)]);if((state_val_29534 === (5)))
{var inst_29528 = (state_29533[(2)]);var state_29533__$1 = state_29533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29533__$1,(2),inst_29528);
} else
{if((state_val_29534 === (4)))
{var inst_29526 = search_fn.call(null);var state_29533__$1 = state_29533;var statearr_29535_29546 = state_29533__$1;(statearr_29535_29546[(2)] = inst_29526);
(statearr_29535_29546[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29534 === (3)))
{var inst_29524 = search_fn.call(null,query);var state_29533__$1 = state_29533;var statearr_29536_29547 = state_29533__$1;(statearr_29536_29547[(2)] = inst_29524);
(statearr_29536_29547[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29534 === (2)))
{var inst_29530 = (state_29533[(2)]);var inst_29531 = om.core.update_BANG_.call(null,search_cursor,new cljs.core.Keyword(null,"results","results",-1134170113),inst_29530);var state_29533__$1 = state_29533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29533__$1,inst_29531);
} else
{if((state_val_29534 === (1)))
{var inst_29521 = cljs.core.count.call(null,query);var inst_29522 = (inst_29521 > (1));var state_29533__$1 = state_29533;if(cljs.core.truth_(inst_29522))
{var statearr_29537_29548 = state_29533__$1;(statearr_29537_29548[(1)] = (3));
} else
{var statearr_29538_29549 = state_29533__$1;(statearr_29538_29549[(1)] = (4));
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
var state_machine__9111__auto____0 = (function (){var statearr_29542 = [null,null,null,null,null,null,null];(statearr_29542[(0)] = state_machine__9111__auto__);
(statearr_29542[(1)] = (1));
return statearr_29542;
});
var state_machine__9111__auto____1 = (function (state_29533){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29533);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29543){if((e29543 instanceof Object))
{var ex__9114__auto__ = e29543;var statearr_29544_29550 = state_29533;(statearr_29544_29550[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29533);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29543;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29551 = state_29533;
state_29533 = G__29551;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29533){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__))
})();var state__9127__auto__ = (function (){var statearr_29545 = f__9126__auto__.call(null);(statearr_29545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29545;
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
clustermap.components.search.select_next_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29554 = schema.core.Any;var input_schema29555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29552","map29552",327996465,null))], null);var input_checker29556 = schema.core.checker.call(null,input_schema29555);var output_checker29557 = schema.core.checker.call(null,output_schema29554);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29554,input_schema29555,input_checker29556,output_checker29557){
return (function select_next_result(G__29558){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29561 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29558], null);var temp__4126__auto___29562 = input_checker29556.call(null,args__6035__auto___29561);if(cljs.core.truth_(temp__4126__auto___29562))
{var error__6036__auto___29563 = temp__4126__auto___29562;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___29563)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29563,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29561,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29555,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29552 = G__29558;while(true){
if(cljs.core.map_QMARK_.call(null,map29552))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29552)));
}
var map29553 = plumbing.fnk.schema.safe_get.call(null,map29552,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29553,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29552,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__29560 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__29560,(0),null);var after = cljs.core.nth.call(null,vec__29560,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.first.call(null,after);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.first.call(null,before);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29564 = output_checker29557.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29564))
{var error__6036__auto___29565 = temp__4126__auto___29564;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___29565)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29565,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29554,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29554,input_schema29555,input_checker29556,output_checker29557))
,schema.core.make_fn_schema.call(null,output_schema29554,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29555], null)));
})();
clustermap.components.search.select_prev_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29568 = schema.core.Any;var input_schema29569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29566","map29566",-1640093784,null))], null);var input_checker29570 = schema.core.checker.call(null,input_schema29569);var output_checker29571 = schema.core.checker.call(null,output_schema29568);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29568,input_schema29569,input_checker29570,output_checker29571){
return (function select_prev_result(G__29572){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29575 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29572], null);var temp__4126__auto___29576 = input_checker29570.call(null,args__6035__auto___29575);if(cljs.core.truth_(temp__4126__auto___29576))
{var error__6036__auto___29577 = temp__4126__auto___29576;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___29577)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29577,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29575,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29569,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29566 = G__29572;while(true){
if(cljs.core.map_QMARK_.call(null,map29566))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29566)));
}
var map29567 = plumbing.fnk.schema.safe_get.call(null,map29566,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29567,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29566,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__29574 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__29574,(0),null);var after = cljs.core.nth.call(null,vec__29574,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.last.call(null,before);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.last.call(null,after);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29578 = output_checker29571.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29578))
{var error__6036__auto___29579 = temp__4126__auto___29578;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___29579)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29579,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29568,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29568,input_schema29569,input_checker29570,output_checker29571))
,schema.core.make_fn_schema.call(null,output_schema29568,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29569], null)));
})();
clustermap.components.search.choose_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29583 = schema.core.Any;var input_schema29584 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map29580","map29580",-1367443054,null))], null);var input_checker29585 = schema.core.checker.call(null,input_schema29584);var output_checker29586 = schema.core.checker.call(null,output_schema29583);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function choose_result(G__29587){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29587], null);var temp__4126__auto___29589 = input_checker29585.call(null,args__6035__auto___29588);if(cljs.core.truth_(temp__4126__auto___29589))
{var error__6036__auto___29590 = temp__4126__auto___29589;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___29590)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29590,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29588,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29584,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29580 = G__29587;while(true){
if(cljs.core.map_QMARK_.call(null,map29580))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29580)));
}
var map29581 = plumbing.fnk.schema.safe_get.call(null,map29580,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29581,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29582 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29582,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29582,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29582,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29580,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var cr = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var temp__4126__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cr], true),results);if(cljs.core.truth_(temp__4126__auto__))
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
{var temp__4126__auto___29591 = output_checker29586.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29591))
{var error__6036__auto___29592 = temp__4126__auto___29591;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___29592)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29592,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29583,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
,schema.core.make_fn_schema.call(null,output_schema29583,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29584], null)));
})();
clustermap.components.search.key_down = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29595 = schema.core.Any;var input_schema29596 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29597 = schema.core.checker.call(null,input_schema29596);var output_checker29598 = schema.core.checker.call(null,output_schema29595);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29595,input_schema29596,input_checker29597,output_checker29598){
return (function key_down(G__29599){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29599], null);var temp__4126__auto___29607 = input_checker29597.call(null,args__6035__auto___29606);if(cljs.core.truth_(temp__4126__auto___29607))
{var error__6036__auto___29608 = temp__4126__auto___29607;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___29608)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29608,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29606,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29596,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29599;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29593 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29593,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29594 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29594,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29594,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29594,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var e = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);var pred__29603 = cljs.core._EQ__EQ_;var expr__29604 = e.keyCode;if(cljs.core.truth_(pred__29603.call(null,clustermap.components.search.ESCAPE_KEY,expr__29604)))
{return clustermap.components.search.search_for.call(null,state,search,search_fn,null);
} else
{if(cljs.core.truth_(pred__29603.call(null,clustermap.components.search.ENTER_KEY,expr__29604)))
{return clustermap.components.search.choose_result.call(null,m);
} else
{if(cljs.core.truth_(pred__29603.call(null,clustermap.components.search.UP_ARROW,expr__29604)))
{return clustermap.components.search.select_prev_result.call(null,m);
} else
{if(cljs.core.truth_(pred__29603.call(null,clustermap.components.search.DOWN_ARROW,expr__29604)))
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
{var temp__4126__auto___29609 = output_checker29598.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29609))
{var error__6036__auto___29610 = temp__4126__auto___29609;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___29610)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29610,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29595,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29595,input_schema29596,input_checker29597,output_checker29598))
,schema.core.make_fn_schema.call(null,output_schema29595,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29596], null)));
})();
clustermap.components.search.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29613 = schema.core.Any;var input_schema29614 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29615 = schema.core.checker.call(null,input_schema29614);var output_checker29616 = schema.core.checker.call(null,output_schema29613);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616){
return (function render_STAR_(G__29617){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29617], null);var temp__4126__auto___29635 = input_checker29615.call(null,args__6035__auto___29634);if(cljs.core.truth_(temp__4126__auto___29635))
{var error__6036__auto___29636 = temp__4126__auto___29635;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29636)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29636,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29634,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29614,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29617;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29611 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29611,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29612 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map29612,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var col_headers = plumbing.fnk.schema.safe_get.call(null,map29612,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map29612,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map29612,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);return React.DOM.div({"onFocus": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616))
, "onBlur": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616))
},sablono.interpreter.input.call(null,{"type": "text", "value": query, "placeholder": "Company search", "onKeyDown": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616){
return (function (e){clustermap.components.search.key_down.call(null,cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),e], null)));
return null;
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616))
, "onChange": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616){
return (function (e){var v = e.target.value;return clustermap.components.search.search_for.call(null,state,search,search_fn,v);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616))
}),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not_empty.call(null,results);
} else
{return and__3627__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",1319364942),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,col_headers))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.header","li.header",-586263037),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616){
return (function iter__29626(s__29627){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616){
return (function (){var s__29627__$1 = s__29627;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29627__$1);if(temp__4126__auto__)
{var s__29627__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29627__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29627__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29629 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29628 = (0);while(true){
if((i__29628 < size__4376__auto__))
{var h = cljs.core._nth.call(null,c__4375__auto__,i__29628);cljs.core.chunk_append.call(null,b__29629,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null));
{
var G__29637 = (i__29628 + (1));
i__29628 = G__29637;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29629),iter__29626.call(null,cljs.core.chunk_rest.call(null,s__29627__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29629),null);
}
} else
{var h = cljs.core.first.call(null,s__29627__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null),iter__29626.call(null,cljs.core.rest.call(null,s__29627__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616))
;return iter__4377__auto__.call(null,col_headers);
})()], null)], null):null),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616){
return (function iter__29630(s__29631){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616){
return (function (){var s__29631__$1 = s__29631;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29631__$1);if(temp__4126__auto__)
{var s__29631__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29631__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29631__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29633 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29632 = (0);while(true){
if((i__29632 < size__4376__auto__))
{var r = cljs.core._nth.call(null,c__4375__auto__,i__29632);cljs.core.chunk_append.call(null,b__29633,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29632,r,c__4375__auto__,size__4376__auto__,b__29633,s__29631__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
});})(i__29632,r,c__4375__auto__,size__4376__auto__,b__29633,s__29631__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null));
{
var G__29638 = (i__29632 + (1));
i__29632 = G__29638;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29633),iter__29630.call(null,cljs.core.chunk_rest.call(null,s__29631__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29633),null);
}
} else
{var r = cljs.core.first.call(null,s__29631__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (r,s__29631__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
});})(r,s__29631__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null),iter__29630.call(null,cljs.core.rest.call(null,s__29631__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map29612,search,map29611,validate__6034__auto__,ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616))
;return iter__4377__auto__.call(null,results);
})()))], null):null)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29639 = output_checker29616.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29639))
{var error__6036__auto___29640 = temp__4126__auto___29639;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29640)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29640,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29613,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29613,input_schema29614,input_checker29615,output_checker29616))
,schema.core.make_fn_schema.call(null,output_schema29613,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29614], null)));
})();
clustermap.components.search.SearchComponentSchema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null)),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any], null),new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.maybe.call(null,schema.core.Str),new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null))], null);
var component_fnk__7881__auto___29659 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29645 = schema.core.Any;var input_schema29646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),clustermap.components.search.SearchComponentSchema], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29647 = schema.core.checker.call(null,input_schema29646);var output_checker29648 = schema.core.checker.call(null,output_schema29645);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648){
return (function constructor29642(G__29649){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29649], null);var temp__4126__auto___29661 = input_checker29647.call(null,args__6035__auto___29660);if(cljs.core.truth_(temp__4126__auto___29661))
{var error__6036__auto___29662 = temp__4126__auto___29661;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29642","constructor29642",1713208538,null),cljs.core.pr_str.call(null,error__6036__auto___29662)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29662,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29660,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29646,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29649;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29644 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29644,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.search.t29653 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t29653 = (function (output_checker29648,owner,m,state,search,G__29649,input_schema29646,output_schema29645,input_checker29647,map29644,validate__6034__auto__,constructor29642,ufv__,meta29654){
this.output_checker29648 = output_checker29648;
this.owner = owner;
this.m = m;
this.state = state;
this.search = search;
this.G__29649 = G__29649;
this.input_schema29646 = input_schema29646;
this.output_schema29645 = output_schema29645;
this.input_checker29647 = input_checker29647;
this.map29644 = map29644;
this.validate__6034__auto__ = validate__6034__auto__;
this.constructor29642 = constructor29642;
this.ufv__ = ufv__;
this.meta29654 = meta29654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t29653.cljs$lang$type = true;
clustermap.components.search.t29653.cljs$lang$ctorStr = "clustermap.components.search/t29653";
clustermap.components.search.t29653.cljs$lang$ctorPrWriter = ((function (owner,state,search,map29644,validate__6034__auto__,ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.search/t29653");
});})(owner,state,search,map29644,validate__6034__auto__,ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648))
;
clustermap.components.search.t29653.prototype.om$core$IDisplayName$ = true;
clustermap.components.search.t29653.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,search,map29644,validate__6034__auto__,ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648){
return (function (_){var self__ = this;
var ___$1 = this;return "search-component";
});})(owner,state,search,map29644,validate__6034__auto__,ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648))
;
clustermap.components.search.t29653.prototype.om$core$IRender$ = true;
clustermap.components.search.t29653.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,search,map29644,validate__6034__auto__,ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.search.render_STAR_.call(null,self__.m);
});})(owner,state,search,map29644,validate__6034__auto__,ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648))
;
clustermap.components.search.t29653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,search,map29644,validate__6034__auto__,ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648){
return (function (_29655){var self__ = this;
var _29655__$1 = this;return self__.meta29654;
});})(owner,state,search,map29644,validate__6034__auto__,ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648))
;
clustermap.components.search.t29653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,search,map29644,validate__6034__auto__,ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648){
return (function (_29655,meta29654__$1){var self__ = this;
var _29655__$1 = this;return (new clustermap.components.search.t29653(self__.output_checker29648,self__.owner,self__.m,self__.state,self__.search,self__.G__29649,self__.input_schema29646,self__.output_schema29645,self__.input_checker29647,self__.map29644,self__.validate__6034__auto__,self__.constructor29642,self__.ufv__,meta29654__$1));
});})(owner,state,search,map29644,validate__6034__auto__,ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648))
;
clustermap.components.search.__GT_t29653 = ((function (owner,state,search,map29644,validate__6034__auto__,ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648){
return (function __GT_t29653(output_checker29648__$1,owner__$1,m__$1,state__$1,search__$1,G__29649__$1,input_schema29646__$1,output_schema29645__$1,input_checker29647__$1,map29644__$1,validate__6034__auto____$1,constructor29642__$1,ufv____$1,meta29654){return (new clustermap.components.search.t29653(output_checker29648__$1,owner__$1,m__$1,state__$1,search__$1,G__29649__$1,input_schema29646__$1,output_schema29645__$1,input_checker29647__$1,map29644__$1,validate__6034__auto____$1,constructor29642__$1,ufv____$1,meta29654));
});})(owner,state,search,map29644,validate__6034__auto__,ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648))
;
}
return (new clustermap.components.search.t29653(output_checker29648,owner,m,state,search,G__29649,input_schema29646,output_schema29645,input_checker29647,map29644,validate__6034__auto__,constructor29642,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29663 = output_checker29648.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29663))
{var error__6036__auto___29664 = temp__4126__auto___29663;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29642","constructor29642",1713208538,null),cljs.core.pr_str.call(null,error__6036__auto___29664)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29664,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29645,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29645,input_schema29646,input_checker29647,output_checker29648))
,schema.core.make_fn_schema.call(null,output_schema29645,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29646], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.search.search_component = ((function (component_fnk__7881__auto___29659){
return (function() { 
var search_component__delegate = function (data__7882__auto__,owner29641,p__29656){var vec__29658 = p__29656;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29658,(0),null);return component_fnk__7881__auto___29659.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner29641),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29641),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29641,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var search_component = function (data__7882__auto__,owner29641,var_args){
var p__29656 = null;if (arguments.length > 2) {
  p__29656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return search_component__delegate.call(this,data__7882__auto__,owner29641,p__29656);};
search_component.cljs$lang$maxFixedArity = 2;
search_component.cljs$lang$applyTo = (function (arglist__29665){
var data__7882__auto__ = cljs.core.first(arglist__29665);
arglist__29665 = cljs.core.next(arglist__29665);
var owner29641 = cljs.core.first(arglist__29665);
var p__29656 = cljs.core.rest(arglist__29665);
return search_component__delegate(data__7882__auto__,owner29641,p__29656);
});
search_component.cljs$core$IFn$_invoke$arity$variadic = search_component__delegate;
return search_component;
})()
;})(component_fnk__7881__auto___29659))
;
clustermap.components.search.__GT_search_component = (function() {
var __GT_search_component = null;
var __GT_search_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__);
});
var __GT_search_component__2 = (function (cursor__7850__auto__,m29643){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__,m29643);
});
__GT_search_component = function(cursor__7850__auto__,m29643){
switch(arguments.length){
case 1:
return __GT_search_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_search_component__2.call(this,cursor__7850__auto__,m29643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_search_component.cljs$core$IFn$_invoke$arity$1 = __GT_search_component__1;
__GT_search_component.cljs$core$IFn$_invoke$arity$2 = __GT_search_component__2;
return __GT_search_component;
})()
;
