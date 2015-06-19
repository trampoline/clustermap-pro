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
var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__){
return (function (state_32260){var state_val_32261 = (state_32260[(1)]);if((state_val_32261 === (5)))
{var inst_32255 = (state_32260[(2)]);var state_32260__$1 = state_32260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32260__$1,(2),inst_32255);
} else
{if((state_val_32261 === (4)))
{var inst_32253 = search_fn.call(null);var state_32260__$1 = state_32260;var statearr_32262_32273 = state_32260__$1;(statearr_32262_32273[(2)] = inst_32253);
(statearr_32262_32273[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32261 === (3)))
{var inst_32251 = search_fn.call(null,query);var state_32260__$1 = state_32260;var statearr_32263_32274 = state_32260__$1;(statearr_32263_32274[(2)] = inst_32251);
(statearr_32263_32274[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32261 === (2)))
{var inst_32257 = (state_32260[(2)]);var inst_32258 = om.core.update_BANG_.call(null,search_cursor,new cljs.core.Keyword(null,"results","results",-1134170113),inst_32257);var state_32260__$1 = state_32260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32260__$1,inst_32258);
} else
{if((state_val_32261 === (1)))
{var inst_32248 = cljs.core.count.call(null,query);var inst_32249 = (inst_32248 > (1));var state_32260__$1 = state_32260;if(cljs.core.truth_(inst_32249))
{var statearr_32264_32275 = state_32260__$1;(statearr_32264_32275[(1)] = (3));
} else
{var statearr_32265_32276 = state_32260__$1;(statearr_32265_32276[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__16733__auto__))
;return ((function (switch__16718__auto__,c__16733__auto__){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_32269 = [null,null,null,null,null,null,null];(statearr_32269[(0)] = state_machine__16719__auto__);
(statearr_32269[(1)] = (1));
return statearr_32269;
});
var state_machine__16719__auto____1 = (function (state_32260){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_32260);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e32270){if((e32270 instanceof Object))
{var ex__16722__auto__ = e32270;var statearr_32271_32277 = state_32260;(statearr_32271_32277[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32260);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32270;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32278 = state_32260;
state_32260 = G__32278;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_32260){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_32260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__))
})();var state__16735__auto__ = (function (){var statearr_32272 = f__16734__auto__.call(null);(statearr_32272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_32272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__))
);
return c__16733__auto__;
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
clustermap.components.search.select_next_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32281 = schema.core.Any;var input_schema32282 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map32279","map32279",-1555308684,null))], null);var input_checker32283 = schema.core.checker.call(null,input_schema32282);var output_checker32284 = schema.core.checker.call(null,output_schema32281);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32281,input_schema32282,input_checker32283,output_checker32284){
return (function select_next_result(G__32285){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___32288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32285], null);var temp__4126__auto___32289 = input_checker32283.call(null,args__13948__auto___32288);if(cljs.core.truth_(temp__4126__auto___32289))
{var error__13949__auto___32290 = temp__4126__auto___32289;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__13949__auto___32290)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32290,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___32288,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32282,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map32279 = G__32285;while(true){
if(cljs.core.map_QMARK_.call(null,map32279))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32279)));
}
var map32280 = plumbing.fnk.schema.safe_get.call(null,map32279,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map32280,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map32279,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__32287 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__32287,(0),null);var after = cljs.core.nth.call(null,vec__32287,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__11552__auto__ = cljs.core.first.call(null,after);if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.first.call(null,before);
}
})());
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___32291 = output_checker32284.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___32291))
{var error__13949__auto___32292 = temp__4126__auto___32291;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__13949__auto___32292)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32292,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32281,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema32281,input_schema32282,input_checker32283,output_checker32284))
,schema.core.make_fn_schema.call(null,output_schema32281,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32282], null)));
})();
clustermap.components.search.select_prev_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32295 = schema.core.Any;var input_schema32296 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map32293","map32293",-2097703684,null))], null);var input_checker32297 = schema.core.checker.call(null,input_schema32296);var output_checker32298 = schema.core.checker.call(null,output_schema32295);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32295,input_schema32296,input_checker32297,output_checker32298){
return (function select_prev_result(G__32299){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___32302 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32299], null);var temp__4126__auto___32303 = input_checker32297.call(null,args__13948__auto___32302);if(cljs.core.truth_(temp__4126__auto___32303))
{var error__13949__auto___32304 = temp__4126__auto___32303;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__13949__auto___32304)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32304,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___32302,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32296,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map32293 = G__32299;while(true){
if(cljs.core.map_QMARK_.call(null,map32293))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32293)));
}
var map32294 = plumbing.fnk.schema.safe_get.call(null,map32293,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map32294,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map32293,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__32301 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__32301,(0),null);var after = cljs.core.nth.call(null,vec__32301,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__11552__auto__ = cljs.core.last.call(null,before);if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return cljs.core.last.call(null,after);
}
})());
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___32305 = output_checker32298.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___32305))
{var error__13949__auto___32306 = temp__4126__auto___32305;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__13949__auto___32306)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32306,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32295,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema32295,input_schema32296,input_checker32297,output_checker32298))
,schema.core.make_fn_schema.call(null,output_schema32295,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32296], null)));
})();
clustermap.components.search.choose_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32310 = schema.core.Any;var input_schema32311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map32307","map32307",-1719630180,null))], null);var input_checker32312 = schema.core.checker.call(null,input_schema32311);var output_checker32313 = schema.core.checker.call(null,output_schema32310);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32310,input_schema32311,input_checker32312,output_checker32313){
return (function choose_result(G__32314){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___32315 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32314], null);var temp__4126__auto___32316 = input_checker32312.call(null,args__13948__auto___32315);if(cljs.core.truth_(temp__4126__auto___32316))
{var error__13949__auto___32317 = temp__4126__auto___32316;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__13949__auto___32317)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32317,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___32315,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32311,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map32307 = G__32314;while(true){
if(cljs.core.map_QMARK_.call(null,map32307))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32307)));
}
var map32308 = plumbing.fnk.schema.safe_get.call(null,map32307,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map32308,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map32309 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map32309,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map32309,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map32309,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map32307,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var cr = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var temp__4126__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cr], true),results);if(cljs.core.truth_(temp__4126__auto__))
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
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___32318 = output_checker32313.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___32318))
{var error__13949__auto___32319 = temp__4126__auto___32318;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__13949__auto___32319)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32319,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32310,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema32310,input_schema32311,input_checker32312,output_checker32313))
,schema.core.make_fn_schema.call(null,output_schema32310,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32311], null)));
})();
clustermap.components.search.key_down = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32322 = schema.core.Any;var input_schema32323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker32324 = schema.core.checker.call(null,input_schema32323);var output_checker32325 = schema.core.checker.call(null,output_schema32322);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32322,input_schema32323,input_checker32324,output_checker32325){
return (function key_down(G__32326){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___32333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32326], null);var temp__4126__auto___32334 = input_checker32324.call(null,args__13948__auto___32333);if(cljs.core.truth_(temp__4126__auto___32334))
{var error__13949__auto___32335 = temp__4126__auto___32334;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__13949__auto___32335)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32335,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___32333,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32323,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var m = G__32326;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map32320 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map32320,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map32321 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map32321,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map32321,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map32321,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var e = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);var pred__32330 = cljs.core._EQ__EQ_;var expr__32331 = e.keyCode;if(cljs.core.truth_(pred__32330.call(null,clustermap.components.search.ESCAPE_KEY,expr__32331)))
{return clustermap.components.search.search_for.call(null,state,search,search_fn,null);
} else
{if(cljs.core.truth_(pred__32330.call(null,clustermap.components.search.ENTER_KEY,expr__32331)))
{return clustermap.components.search.choose_result.call(null,m);
} else
{if(cljs.core.truth_(pred__32330.call(null,clustermap.components.search.UP_ARROW,expr__32331)))
{return clustermap.components.search.select_prev_result.call(null,m);
} else
{if(cljs.core.truth_(pred__32330.call(null,clustermap.components.search.DOWN_ARROW,expr__32331)))
{return clustermap.components.search.select_next_result.call(null,m);
} else
{return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
}
}
}
}
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___32336 = output_checker32325.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___32336))
{var error__13949__auto___32337 = temp__4126__auto___32336;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__13949__auto___32337)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32337,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32322,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema32322,input_schema32323,input_checker32324,output_checker32325))
,schema.core.make_fn_schema.call(null,output_schema32322,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32323], null)));
})();
clustermap.components.search.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32340 = schema.core.Any;var input_schema32341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker32342 = schema.core.checker.call(null,input_schema32341);var output_checker32343 = schema.core.checker.call(null,output_schema32340);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343){
return (function render_STAR_(G__32344){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___32361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32344], null);var temp__4126__auto___32362 = input_checker32342.call(null,args__13948__auto___32361);if(cljs.core.truth_(temp__4126__auto___32362))
{var error__13949__auto___32363 = temp__4126__auto___32362;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___32363)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32363,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___32361,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32341,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var m = G__32344;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map32338 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map32338,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map32339 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map32339,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var col_headers = plumbing.fnk.schema.safe_get.call(null,map32339,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map32339,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map32339,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);return React.DOM.div({"onFocus": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343))
, "onBlur": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343))
},sablono.interpreter.input.call(null,{"type": "text", "value": query, "placeholder": "Company search", "onKeyDown": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343){
return (function (e){clustermap.components.search.key_down.call(null,cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),e], null)));
return null;
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343))
, "onChange": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343){
return (function (e){var v = e.target.value;return clustermap.components.search.search_for.call(null,state,search,search_fn,v);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343))
}),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__11540__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));if(cljs.core.truth_(and__11540__auto__))
{return cljs.core.not_empty.call(null,results);
} else
{return and__11540__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",1319364942),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,col_headers))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.header","li.header",-586263037),(function (){var iter__12290__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343){
return (function iter__32353(s__32354){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343){
return (function (){var s__32354__$1 = s__32354;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32354__$1);if(temp__4126__auto__)
{var s__32354__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32354__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__32354__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__32356 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__32355 = (0);while(true){
if((i__32355 < size__12289__auto__))
{var h = cljs.core._nth.call(null,c__12288__auto__,i__32355);cljs.core.chunk_append.call(null,b__32356,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null));
{
var G__32364 = (i__32355 + (1));
i__32355 = G__32364;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32356),iter__32353.call(null,cljs.core.chunk_rest.call(null,s__32354__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32356),null);
}
} else
{var h = cljs.core.first.call(null,s__32354__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null),iter__32353.call(null,cljs.core.rest.call(null,s__32354__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343))
;return iter__12290__auto__.call(null,col_headers);
})()], null)], null):null),(function (){var iter__12290__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343){
return (function iter__32357(s__32358){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343){
return (function (){var s__32358__$1 = s__32358;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32358__$1);if(temp__4126__auto__)
{var s__32358__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32358__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__32358__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__32360 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__32359 = (0);while(true){
if((i__32359 < size__12289__auto__))
{var r = cljs.core._nth.call(null,c__12288__auto__,i__32359);cljs.core.chunk_append.call(null,b__32360,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32359,r,c__12288__auto__,size__12289__auto__,b__32360,s__32358__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
});})(i__32359,r,c__12288__auto__,size__12289__auto__,b__32360,s__32358__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null));
{
var G__32365 = (i__32359 + (1));
i__32359 = G__32365;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32360),iter__32357.call(null,cljs.core.chunk_rest.call(null,s__32358__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32360),null);
}
} else
{var r = cljs.core.first.call(null,s__32358__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (r,s__32358__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
return click_fn.call(null,r);
} else
{return null;
}
});})(r,s__32358__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null),iter__32357.call(null,cljs.core.rest.call(null,s__32358__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map32339,search,map32338,validate__13947__auto__,ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343))
;return iter__12290__auto__.call(null,results);
})()))], null):null)));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___32366 = output_checker32343.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___32366))
{var error__13949__auto___32367 = temp__4126__auto___32366;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___32367)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32367,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32340,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema32340,input_schema32341,input_checker32342,output_checker32343))
,schema.core.make_fn_schema.call(null,output_schema32340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32341], null)));
})();
clustermap.components.search.SearchComponentSchema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null)),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any], null),new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.maybe.call(null,schema.core.Str),new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null))], null);
var component_fnk__15794__auto___32386 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32372 = schema.core.Any;var input_schema32373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),clustermap.components.search.SearchComponentSchema], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker32374 = schema.core.checker.call(null,input_schema32373);var output_checker32375 = schema.core.checker.call(null,output_schema32372);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375){
return (function constructor32369(G__32376){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___32387 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32376], null);var temp__4126__auto___32388 = input_checker32374.call(null,args__13948__auto___32387);if(cljs.core.truth_(temp__4126__auto___32388))
{var error__13949__auto___32389 = temp__4126__auto___32388;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32369","constructor32369",1246533150,null),cljs.core.pr_str.call(null,error__13949__auto___32389)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32389,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___32387,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32373,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var m = G__32376;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map32371 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map32371,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.search.t32380 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t32380 = (function (owner,G__32376,output_schema32372,map32371,input_schema32373,m,state,search,validate__13947__auto__,input_checker32374,ufv__,output_checker32375,constructor32369,meta32381){
this.owner = owner;
this.G__32376 = G__32376;
this.output_schema32372 = output_schema32372;
this.map32371 = map32371;
this.input_schema32373 = input_schema32373;
this.m = m;
this.state = state;
this.search = search;
this.validate__13947__auto__ = validate__13947__auto__;
this.input_checker32374 = input_checker32374;
this.ufv__ = ufv__;
this.output_checker32375 = output_checker32375;
this.constructor32369 = constructor32369;
this.meta32381 = meta32381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t32380.cljs$lang$type = true;
clustermap.components.search.t32380.cljs$lang$ctorStr = "clustermap.components.search/t32380";
clustermap.components.search.t32380.cljs$lang$ctorPrWriter = ((function (owner,state,search,map32371,validate__13947__auto__,ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.search/t32380");
});})(owner,state,search,map32371,validate__13947__auto__,ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375))
;
clustermap.components.search.t32380.prototype.om$core$IDisplayName$ = true;
clustermap.components.search.t32380.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,search,map32371,validate__13947__auto__,ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375){
return (function (_){var self__ = this;
var ___$1 = this;return "search-component";
});})(owner,state,search,map32371,validate__13947__auto__,ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375))
;
clustermap.components.search.t32380.prototype.om$core$IRender$ = true;
clustermap.components.search.t32380.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,search,map32371,validate__13947__auto__,ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.search.render_STAR_.call(null,self__.m);
});})(owner,state,search,map32371,validate__13947__auto__,ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375))
;
clustermap.components.search.t32380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,search,map32371,validate__13947__auto__,ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375){
return (function (_32382){var self__ = this;
var _32382__$1 = this;return self__.meta32381;
});})(owner,state,search,map32371,validate__13947__auto__,ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375))
;
clustermap.components.search.t32380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,search,map32371,validate__13947__auto__,ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375){
return (function (_32382,meta32381__$1){var self__ = this;
var _32382__$1 = this;return (new clustermap.components.search.t32380(self__.owner,self__.G__32376,self__.output_schema32372,self__.map32371,self__.input_schema32373,self__.m,self__.state,self__.search,self__.validate__13947__auto__,self__.input_checker32374,self__.ufv__,self__.output_checker32375,self__.constructor32369,meta32381__$1));
});})(owner,state,search,map32371,validate__13947__auto__,ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375))
;
clustermap.components.search.__GT_t32380 = ((function (owner,state,search,map32371,validate__13947__auto__,ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375){
return (function __GT_t32380(owner__$1,G__32376__$1,output_schema32372__$1,map32371__$1,input_schema32373__$1,m__$1,state__$1,search__$1,validate__13947__auto____$1,input_checker32374__$1,ufv____$1,output_checker32375__$1,constructor32369__$1,meta32381){return (new clustermap.components.search.t32380(owner__$1,G__32376__$1,output_schema32372__$1,map32371__$1,input_schema32373__$1,m__$1,state__$1,search__$1,validate__13947__auto____$1,input_checker32374__$1,ufv____$1,output_checker32375__$1,constructor32369__$1,meta32381));
});})(owner,state,search,map32371,validate__13947__auto__,ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375))
;
}
return (new clustermap.components.search.t32380(owner,G__32376,output_schema32372,map32371,input_schema32373,m,state,search,validate__13947__auto__,input_checker32374,ufv__,output_checker32375,constructor32369,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___32390 = output_checker32375.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___32390))
{var error__13949__auto___32391 = temp__4126__auto___32390;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32369","constructor32369",1246533150,null),cljs.core.pr_str.call(null,error__13949__auto___32391)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___32391,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32372,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema32372,input_schema32373,input_checker32374,output_checker32375))
,schema.core.make_fn_schema.call(null,output_schema32372,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32373], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.search.search_component = ((function (component_fnk__15794__auto___32386){
return (function() { 
var search_component__delegate = function (data__15795__auto__,owner32368,p__32383){var vec__32385 = p__32383;var opts__15796__auto__ = cljs.core.nth.call(null,vec__32385,(0),null);return component_fnk__15794__auto___32386.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner32368),new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner32368),new cljs.core.Keyword(null,"owner","owner",-392611939),owner32368,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var search_component = function (data__15795__auto__,owner32368,var_args){
var p__32383 = null;if (arguments.length > 2) {
  p__32383 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return search_component__delegate.call(this,data__15795__auto__,owner32368,p__32383);};
search_component.cljs$lang$maxFixedArity = 2;
search_component.cljs$lang$applyTo = (function (arglist__32392){
var data__15795__auto__ = cljs.core.first(arglist__32392);
arglist__32392 = cljs.core.next(arglist__32392);
var owner32368 = cljs.core.first(arglist__32392);
var p__32383 = cljs.core.rest(arglist__32392);
return search_component__delegate(data__15795__auto__,owner32368,p__32383);
});
search_component.cljs$core$IFn$_invoke$arity$variadic = search_component__delegate;
return search_component;
})()
;})(component_fnk__15794__auto___32386))
;
clustermap.components.search.__GT_search_component = (function() {
var __GT_search_component = null;
var __GT_search_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.search.search_component,cursor__15763__auto__);
});
var __GT_search_component__2 = (function (cursor__15763__auto__,m32370){return om.core.build.call(null,clustermap.components.search.search_component,cursor__15763__auto__,m32370);
});
__GT_search_component = function(cursor__15763__auto__,m32370){
switch(arguments.length){
case 1:
return __GT_search_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_search_component__2.call(this,cursor__15763__auto__,m32370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_search_component.cljs$core$IFn$_invoke$arity$1 = __GT_search_component__1;
__GT_search_component.cljs$core$IFn$_invoke$arity$2 = __GT_search_component__2;
return __GT_search_component;
})()
;

//# sourceMappingURL=search.js.map