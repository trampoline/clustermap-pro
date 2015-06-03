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
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__){
return (function (state_28225){var state_val_28226 = (state_28225[(1)]);if((state_val_28226 === (5)))
{var inst_28220 = (state_28225[(2)]);var state_28225__$1 = state_28225;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28225__$1,(2),inst_28220);
} else
{if((state_val_28226 === (4)))
{var inst_28218 = search_fn.call(null);var state_28225__$1 = state_28225;var statearr_28227_28238 = state_28225__$1;(statearr_28227_28238[(2)] = inst_28218);
(statearr_28227_28238[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28226 === (3)))
{var inst_28216 = search_fn.call(null,query);var state_28225__$1 = state_28225;var statearr_28228_28239 = state_28225__$1;(statearr_28228_28239[(2)] = inst_28216);
(statearr_28228_28239[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28226 === (2)))
{var inst_28222 = (state_28225[(2)]);var inst_28223 = om.core.update_BANG_.call(null,search_cursor,new cljs.core.Keyword(null,"results","results",-1134170113),inst_28222);var state_28225__$1 = state_28225;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28225__$1,inst_28223);
} else
{if((state_val_28226 === (1)))
{var inst_28213 = cljs.core.count.call(null,query);var inst_28214 = (inst_28213 > (1));var state_28225__$1 = state_28225;if(cljs.core.truth_(inst_28214))
{var statearr_28229_28240 = state_28225__$1;(statearr_28229_28240[(1)] = (3));
} else
{var statearr_28230_28241 = state_28225__$1;(statearr_28230_28241[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11517__auto__))
;return ((function (switch__11461__auto__,c__11517__auto__){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28234 = [null,null,null,null,null,null,null];(statearr_28234[(0)] = state_machine__11462__auto__);
(statearr_28234[(1)] = (1));
return statearr_28234;
});
var state_machine__11462__auto____1 = (function (state_28225){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_28225);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28235){if((e28235 instanceof Object))
{var ex__11465__auto__ = e28235;var statearr_28236_28242 = state_28225;(statearr_28236_28242[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28225);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28235;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28243 = state_28225;
state_28225 = G__28243;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_28225){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_28225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__))
})();var state__11519__auto__ = (function (){var statearr_28237 = f__11518__auto__.call(null);(statearr_28237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_28237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__))
);
return c__11517__auto__;
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
clustermap.components.search.select_next_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28246 = schema.core.Any;var input_schema28247 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map28244","map28244",1531484471,null))], null);var input_checker28248 = schema.core.checker.call(null,input_schema28247);var output_checker28249 = schema.core.checker.call(null,output_schema28246);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28246,input_schema28247,input_checker28248,output_checker28249){
return (function select_next_result(G__28250){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28250], null);var temp__4126__auto___28254 = input_checker28248.call(null,args__6035__auto___28253);if(cljs.core.truth_(temp__4126__auto___28254))
{var error__6036__auto___28255 = temp__4126__auto___28254;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___28255)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28255,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28253,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28247,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28244 = G__28250;while(true){
if(cljs.core.map_QMARK_.call(null,map28244))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28244)));
}
var map28245 = plumbing.fnk.schema.safe_get.call(null,map28244,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28245,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map28244,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__28252 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__28252,(0),null);var after = cljs.core.nth.call(null,vec__28252,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.first.call(null,after);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.first.call(null,before);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28256 = output_checker28249.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28256))
{var error__6036__auto___28257 = temp__4126__auto___28256;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___28257)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28257,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28246,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28246,input_schema28247,input_checker28248,output_checker28249))
,schema.core.make_fn_schema.call(null,output_schema28246,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28247], null)));
})();
clustermap.components.search.select_prev_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28260 = schema.core.Any;var input_schema28261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map28258","map28258",-492023319,null))], null);var input_checker28262 = schema.core.checker.call(null,input_schema28261);var output_checker28263 = schema.core.checker.call(null,output_schema28260);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28260,input_schema28261,input_checker28262,output_checker28263){
return (function select_prev_result(G__28264){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28264], null);var temp__4126__auto___28268 = input_checker28262.call(null,args__6035__auto___28267);if(cljs.core.truth_(temp__4126__auto___28268))
{var error__6036__auto___28269 = temp__4126__auto___28268;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___28269)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28269,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28267,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28261,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28258 = G__28264;while(true){
if(cljs.core.map_QMARK_.call(null,map28258))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28258)));
}
var map28259 = plumbing.fnk.schema.safe_get.call(null,map28258,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28259,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map28258,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__28266 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__28266,(0),null);var after = cljs.core.nth.call(null,vec__28266,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.last.call(null,before);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.last.call(null,after);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28270 = output_checker28263.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28270))
{var error__6036__auto___28271 = temp__4126__auto___28270;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___28271)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28271,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28260,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28260,input_schema28261,input_checker28262,output_checker28263))
,schema.core.make_fn_schema.call(null,output_schema28260,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28261], null)));
})();
clustermap.components.search.choose_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28275 = schema.core.Any;var input_schema28276 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map28272","map28272",1703835673,null))], null);var input_checker28277 = schema.core.checker.call(null,input_schema28276);var output_checker28278 = schema.core.checker.call(null,output_schema28275);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28275,input_schema28276,input_checker28277,output_checker28278){
return (function choose_result(G__28279){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28280 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28279], null);var temp__4126__auto___28281 = input_checker28277.call(null,args__6035__auto___28280);if(cljs.core.truth_(temp__4126__auto___28281))
{var error__6036__auto___28282 = temp__4126__auto___28281;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___28282)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28282,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28280,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28276,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28272 = G__28279;while(true){
if(cljs.core.map_QMARK_.call(null,map28272))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28272)));
}
var map28273 = plumbing.fnk.schema.safe_get.call(null,map28272,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28273,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map28274 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map28274,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map28274,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map28274,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map28272,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var cr = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var temp__4126__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cr], true),results);if(cljs.core.truth_(temp__4126__auto__))
{var r = temp__4126__auto__;console.log(cljs.core.clj__GT_js.call(null,r));
if(cljs.core.truth_(click_fn))
{return click_fn.call(null,r);
} else
{return null;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28283 = output_checker28278.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28283))
{var error__6036__auto___28284 = temp__4126__auto___28283;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___28284)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28284,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28275,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28275,input_schema28276,input_checker28277,output_checker28278))
,schema.core.make_fn_schema.call(null,output_schema28275,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28276], null)));
})();
clustermap.components.search.key_down = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28287 = schema.core.Any;var input_schema28288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker28289 = schema.core.checker.call(null,input_schema28288);var output_checker28290 = schema.core.checker.call(null,output_schema28287);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28287,input_schema28288,input_checker28289,output_checker28290){
return (function key_down(G__28291){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28298 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28291], null);var temp__4126__auto___28299 = input_checker28289.call(null,args__6035__auto___28298);if(cljs.core.truth_(temp__4126__auto___28299))
{var error__6036__auto___28300 = temp__4126__auto___28299;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___28300)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28300,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28298,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28288,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__28291;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map28285 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28285,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map28286 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map28286,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map28286,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map28286,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var e = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);var pred__28295 = cljs.core._EQ__EQ_;var expr__28296 = e.keyCode;if(cljs.core.truth_(pred__28295.call(null,clustermap.components.search.ESCAPE_KEY,expr__28296)))
{return clustermap.components.search.search_for.call(null,state,search,search_fn,null);
} else
{if(cljs.core.truth_(pred__28295.call(null,clustermap.components.search.ENTER_KEY,expr__28296)))
{return clustermap.components.search.choose_result.call(null,m);
} else
{if(cljs.core.truth_(pred__28295.call(null,clustermap.components.search.UP_ARROW,expr__28296)))
{return clustermap.components.search.select_prev_result.call(null,m);
} else
{if(cljs.core.truth_(pred__28295.call(null,clustermap.components.search.DOWN_ARROW,expr__28296)))
{return clustermap.components.search.select_next_result.call(null,m);
} else
{return null;
}
}
}
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28301 = output_checker28290.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28301))
{var error__6036__auto___28302 = temp__4126__auto___28301;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___28302)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28302,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28287,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28287,input_schema28288,input_checker28289,output_checker28290))
,schema.core.make_fn_schema.call(null,output_schema28287,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28288], null)));
})();
clustermap.components.search.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28305 = schema.core.Any;var input_schema28306 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker28307 = schema.core.checker.call(null,input_schema28306);var output_checker28308 = schema.core.checker.call(null,output_schema28305);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308){
return (function render_STAR_(G__28309){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28309], null);var temp__4126__auto___28327 = input_checker28307.call(null,args__6035__auto___28326);if(cljs.core.truth_(temp__4126__auto___28327))
{var error__6036__auto___28328 = temp__4126__auto___28327;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28328)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28328,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28326,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28306,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__28309;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map28303 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28303,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map28304 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map28304,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var col_headers = plumbing.fnk.schema.safe_get.call(null,map28304,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map28304,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map28304,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);return React.DOM.div({"onFocus": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308))
, "onBlur": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308))
},sablono.interpreter.input.call(null,{"type": "text", "value": query, "placeholder": "Company search", "onKeyDown": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308){
return (function (e){clustermap.components.search.key_down.call(null,cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),e], null)));
return null;
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308))
, "onChange": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308){
return (function (e){var v = e.target.value;return clustermap.components.search.search_for.call(null,state,search,search_fn,v);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308))
}),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not_empty.call(null,results);
} else
{return and__3627__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",1319364942),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,col_headers))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.header","li.header",-586263037),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308){
return (function iter__28318(s__28319){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308){
return (function (){var s__28319__$1 = s__28319;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28319__$1);if(temp__4126__auto__)
{var s__28319__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28319__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28319__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28321 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28320 = (0);while(true){
if((i__28320 < size__4376__auto__))
{var h = cljs.core._nth.call(null,c__4375__auto__,i__28320);cljs.core.chunk_append.call(null,b__28321,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null));
{
var G__28329 = (i__28320 + (1));
i__28320 = G__28329;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28321),iter__28318.call(null,cljs.core.chunk_rest.call(null,s__28319__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28321),null);
}
} else
{var h = cljs.core.first.call(null,s__28319__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null),iter__28318.call(null,cljs.core.rest.call(null,s__28319__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308))
;return iter__4377__auto__.call(null,col_headers);
})()], null)], null):null),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308){
return (function iter__28322(s__28323){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308){
return (function (){var s__28323__$1 = s__28323;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28323__$1);if(temp__4126__auto__)
{var s__28323__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28323__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28323__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28325 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28324 = (0);while(true){
if((i__28324 < size__4376__auto__))
{var r = cljs.core._nth.call(null,c__4375__auto__,i__28324);cljs.core.chunk_append.call(null,b__28325,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28324,r,c__4375__auto__,size__4376__auto__,b__28325,s__28323__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{return click_fn.call(null,r);
} else
{return null;
}
});})(i__28324,r,c__4375__auto__,size__4376__auto__,b__28325,s__28323__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null));
{
var G__28330 = (i__28324 + (1));
i__28324 = G__28330;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28325),iter__28322.call(null,cljs.core.chunk_rest.call(null,s__28323__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28325),null);
}
} else
{var r = cljs.core.first.call(null,s__28323__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (r,s__28323__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{return click_fn.call(null,r);
} else
{return null;
}
});})(r,s__28323__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null),iter__28322.call(null,cljs.core.rest.call(null,s__28323__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28304,search,map28303,validate__6034__auto__,ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308))
;return iter__4377__auto__.call(null,results);
})()))], null):null)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28331 = output_checker28308.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28331))
{var error__6036__auto___28332 = temp__4126__auto___28331;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28332)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28332,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28305,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28305,input_schema28306,input_checker28307,output_checker28308))
,schema.core.make_fn_schema.call(null,output_schema28305,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28306], null)));
})();
clustermap.components.search.SearchComponentSchema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null)),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any], null),new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.maybe.call(null,schema.core.Str),new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null))], null);
var component_fnk__7881__auto___28351 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28337 = schema.core.Any;var input_schema28338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),clustermap.components.search.SearchComponentSchema], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker28339 = schema.core.checker.call(null,input_schema28338);var output_checker28340 = schema.core.checker.call(null,output_schema28337);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340){
return (function constructor28334(G__28341){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28352 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28341], null);var temp__4126__auto___28353 = input_checker28339.call(null,args__6035__auto___28352);if(cljs.core.truth_(temp__4126__auto___28353))
{var error__6036__auto___28354 = temp__4126__auto___28353;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28334","constructor28334",748317127,null),cljs.core.pr_str.call(null,error__6036__auto___28354)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28354,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28352,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28338,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__28341;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map28336 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28336,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.search.t28345 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t28345 = (function (output_checker28340,owner,constructor28334,input_schema28338,m,map28336,state,search,validate__6034__auto__,G__28341,ufv__,input_checker28339,output_schema28337,meta28346){
this.output_checker28340 = output_checker28340;
this.owner = owner;
this.constructor28334 = constructor28334;
this.input_schema28338 = input_schema28338;
this.m = m;
this.map28336 = map28336;
this.state = state;
this.search = search;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__28341 = G__28341;
this.ufv__ = ufv__;
this.input_checker28339 = input_checker28339;
this.output_schema28337 = output_schema28337;
this.meta28346 = meta28346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t28345.cljs$lang$type = true;
clustermap.components.search.t28345.cljs$lang$ctorStr = "clustermap.components.search/t28345";
clustermap.components.search.t28345.cljs$lang$ctorPrWriter = ((function (owner,state,search,map28336,validate__6034__auto__,ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.search/t28345");
});})(owner,state,search,map28336,validate__6034__auto__,ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340))
;
clustermap.components.search.t28345.prototype.om$core$IDisplayName$ = true;
clustermap.components.search.t28345.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,search,map28336,validate__6034__auto__,ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340){
return (function (_){var self__ = this;
var ___$1 = this;return "search-component";
});})(owner,state,search,map28336,validate__6034__auto__,ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340))
;
clustermap.components.search.t28345.prototype.om$core$IRender$ = true;
clustermap.components.search.t28345.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,search,map28336,validate__6034__auto__,ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.search.render_STAR_.call(null,self__.m);
});})(owner,state,search,map28336,validate__6034__auto__,ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340))
;
clustermap.components.search.t28345.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,search,map28336,validate__6034__auto__,ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340){
return (function (_28347){var self__ = this;
var _28347__$1 = this;return self__.meta28346;
});})(owner,state,search,map28336,validate__6034__auto__,ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340))
;
clustermap.components.search.t28345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,search,map28336,validate__6034__auto__,ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340){
return (function (_28347,meta28346__$1){var self__ = this;
var _28347__$1 = this;return (new clustermap.components.search.t28345(self__.output_checker28340,self__.owner,self__.constructor28334,self__.input_schema28338,self__.m,self__.map28336,self__.state,self__.search,self__.validate__6034__auto__,self__.G__28341,self__.ufv__,self__.input_checker28339,self__.output_schema28337,meta28346__$1));
});})(owner,state,search,map28336,validate__6034__auto__,ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340))
;
clustermap.components.search.__GT_t28345 = ((function (owner,state,search,map28336,validate__6034__auto__,ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340){
return (function __GT_t28345(output_checker28340__$1,owner__$1,constructor28334__$1,input_schema28338__$1,m__$1,map28336__$1,state__$1,search__$1,validate__6034__auto____$1,G__28341__$1,ufv____$1,input_checker28339__$1,output_schema28337__$1,meta28346){return (new clustermap.components.search.t28345(output_checker28340__$1,owner__$1,constructor28334__$1,input_schema28338__$1,m__$1,map28336__$1,state__$1,search__$1,validate__6034__auto____$1,G__28341__$1,ufv____$1,input_checker28339__$1,output_schema28337__$1,meta28346));
});})(owner,state,search,map28336,validate__6034__auto__,ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340))
;
}
return (new clustermap.components.search.t28345(output_checker28340,owner,constructor28334,input_schema28338,m,map28336,state,search,validate__6034__auto__,G__28341,ufv__,input_checker28339,output_schema28337,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28355 = output_checker28340.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28355))
{var error__6036__auto___28356 = temp__4126__auto___28355;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28334","constructor28334",748317127,null),cljs.core.pr_str.call(null,error__6036__auto___28356)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28356,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28337,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28337,input_schema28338,input_checker28339,output_checker28340))
,schema.core.make_fn_schema.call(null,output_schema28337,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28338], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.search.search_component = ((function (component_fnk__7881__auto___28351){
return (function() { 
var search_component__delegate = function (data__7882__auto__,owner28333,p__28348){var vec__28350 = p__28348;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28350,(0),null);return component_fnk__7881__auto___28351.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner28333),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28333),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28333,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var search_component = function (data__7882__auto__,owner28333,var_args){
var p__28348 = null;if (arguments.length > 2) {
  p__28348 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return search_component__delegate.call(this,data__7882__auto__,owner28333,p__28348);};
search_component.cljs$lang$maxFixedArity = 2;
search_component.cljs$lang$applyTo = (function (arglist__28357){
var data__7882__auto__ = cljs.core.first(arglist__28357);
arglist__28357 = cljs.core.next(arglist__28357);
var owner28333 = cljs.core.first(arglist__28357);
var p__28348 = cljs.core.rest(arglist__28357);
return search_component__delegate(data__7882__auto__,owner28333,p__28348);
});
search_component.cljs$core$IFn$_invoke$arity$variadic = search_component__delegate;
return search_component;
})()
;})(component_fnk__7881__auto___28351))
;
clustermap.components.search.__GT_search_component = (function() {
var __GT_search_component = null;
var __GT_search_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__);
});
var __GT_search_component__2 = (function (cursor__7850__auto__,m28335){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__,m28335);
});
__GT_search_component = function(cursor__7850__auto__,m28335){
switch(arguments.length){
case 1:
return __GT_search_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_search_component__2.call(this,cursor__7850__auto__,m28335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_search_component.cljs$core$IFn$_invoke$arity$1 = __GT_search_component__1;
__GT_search_component.cljs$core$IFn$_invoke$arity$2 = __GT_search_component__2;
return __GT_search_component;
})()
;
