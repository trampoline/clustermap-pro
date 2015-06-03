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
var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__){
return (function (state_28228){var state_val_28229 = (state_28228[(1)]);if((state_val_28229 === (5)))
{var inst_28223 = (state_28228[(2)]);var state_28228__$1 = state_28228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28228__$1,(2),inst_28223);
} else
{if((state_val_28229 === (4)))
{var inst_28221 = search_fn.call(null);var state_28228__$1 = state_28228;var statearr_28230_28241 = state_28228__$1;(statearr_28230_28241[(2)] = inst_28221);
(statearr_28230_28241[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28229 === (3)))
{var inst_28219 = search_fn.call(null,query);var state_28228__$1 = state_28228;var statearr_28231_28242 = state_28228__$1;(statearr_28231_28242[(2)] = inst_28219);
(statearr_28231_28242[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28229 === (2)))
{var inst_28225 = (state_28228[(2)]);var inst_28226 = om.core.update_BANG_.call(null,search_cursor,new cljs.core.Keyword(null,"results","results",-1134170113),inst_28225);var state_28228__$1 = state_28228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28228__$1,inst_28226);
} else
{if((state_val_28229 === (1)))
{var inst_28216 = cljs.core.count.call(null,query);var inst_28217 = (inst_28216 > (1));var state_28228__$1 = state_28228;if(cljs.core.truth_(inst_28217))
{var statearr_28232_28243 = state_28228__$1;(statearr_28232_28243[(1)] = (3));
} else
{var statearr_28233_28244 = state_28228__$1;(statearr_28233_28244[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11297__auto__))
;return ((function (switch__11241__auto__,c__11297__auto__){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_28237 = [null,null,null,null,null,null,null];(statearr_28237[(0)] = state_machine__11242__auto__);
(statearr_28237[(1)] = (1));
return statearr_28237;
});
var state_machine__11242__auto____1 = (function (state_28228){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_28228);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e28238){if((e28238 instanceof Object))
{var ex__11245__auto__ = e28238;var statearr_28239_28245 = state_28228;(statearr_28239_28245[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28228);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28238;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28246 = state_28228;
state_28228 = G__28246;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_28228){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_28228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__))
})();var state__11299__auto__ = (function (){var statearr_28240 = f__11298__auto__.call(null);(statearr_28240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_28240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__))
);
return c__11297__auto__;
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
clustermap.components.search.select_next_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28249 = schema.core.Any;var input_schema28250 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map28247","map28247",-1343746428,null))], null);var input_checker28251 = schema.core.checker.call(null,input_schema28250);var output_checker28252 = schema.core.checker.call(null,output_schema28249);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28249,input_schema28250,input_checker28251,output_checker28252){
return (function select_next_result(G__28253){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28253], null);var temp__4126__auto___28257 = input_checker28251.call(null,args__6035__auto___28256);if(cljs.core.truth_(temp__4126__auto___28257))
{var error__6036__auto___28258 = temp__4126__auto___28257;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___28258)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28258,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28256,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28250,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28247 = G__28253;while(true){
if(cljs.core.map_QMARK_.call(null,map28247))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28247)));
}
var map28248 = plumbing.fnk.schema.safe_get.call(null,map28247,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28248,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map28247,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__28255 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__28255,(0),null);var after = cljs.core.nth.call(null,vec__28255,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.first.call(null,after);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.first.call(null,before);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28259 = output_checker28252.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28259))
{var error__6036__auto___28260 = temp__4126__auto___28259;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___28260)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28260,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28249,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28249,input_schema28250,input_checker28251,output_checker28252))
,schema.core.make_fn_schema.call(null,output_schema28249,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28250], null)));
})();
clustermap.components.search.select_prev_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28263 = schema.core.Any;var input_schema28264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map28261","map28261",619949611,null))], null);var input_checker28265 = schema.core.checker.call(null,input_schema28264);var output_checker28266 = schema.core.checker.call(null,output_schema28263);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28263,input_schema28264,input_checker28265,output_checker28266){
return (function select_prev_result(G__28267){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28270 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28267], null);var temp__4126__auto___28271 = input_checker28265.call(null,args__6035__auto___28270);if(cljs.core.truth_(temp__4126__auto___28271))
{var error__6036__auto___28272 = temp__4126__auto___28271;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___28272)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28272,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28270,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28264,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28261 = G__28267;while(true){
if(cljs.core.map_QMARK_.call(null,map28261))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28261)));
}
var map28262 = plumbing.fnk.schema.safe_get.call(null,map28261,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28262,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map28261,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__28269 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__28269,(0),null);var after = cljs.core.nth.call(null,vec__28269,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.last.call(null,before);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.last.call(null,after);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28273 = output_checker28266.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28273))
{var error__6036__auto___28274 = temp__4126__auto___28273;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___28274)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28274,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28263,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28263,input_schema28264,input_checker28265,output_checker28266))
,schema.core.make_fn_schema.call(null,output_schema28263,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28264], null)));
})();
clustermap.components.search.choose_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28278 = schema.core.Any;var input_schema28279 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map28275","map28275",223719817,null))], null);var input_checker28280 = schema.core.checker.call(null,input_schema28279);var output_checker28281 = schema.core.checker.call(null,output_schema28278);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28278,input_schema28279,input_checker28280,output_checker28281){
return (function choose_result(G__28282){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28282], null);var temp__4126__auto___28284 = input_checker28280.call(null,args__6035__auto___28283);if(cljs.core.truth_(temp__4126__auto___28284))
{var error__6036__auto___28285 = temp__4126__auto___28284;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___28285)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28285,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28283,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28279,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28275 = G__28282;while(true){
if(cljs.core.map_QMARK_.call(null,map28275))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28275)));
}
var map28276 = plumbing.fnk.schema.safe_get.call(null,map28275,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28276,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map28277 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map28277,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map28277,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map28277,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map28275,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var cr = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var temp__4126__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cr], true),results);if(cljs.core.truth_(temp__4126__auto__))
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
{var temp__4126__auto___28286 = output_checker28281.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28286))
{var error__6036__auto___28287 = temp__4126__auto___28286;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___28287)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28287,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28278,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28278,input_schema28279,input_checker28280,output_checker28281))
,schema.core.make_fn_schema.call(null,output_schema28278,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28279], null)));
})();
clustermap.components.search.key_down = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28290 = schema.core.Any;var input_schema28291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker28292 = schema.core.checker.call(null,input_schema28291);var output_checker28293 = schema.core.checker.call(null,output_schema28290);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28290,input_schema28291,input_checker28292,output_checker28293){
return (function key_down(G__28294){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28301 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28294], null);var temp__4126__auto___28302 = input_checker28292.call(null,args__6035__auto___28301);if(cljs.core.truth_(temp__4126__auto___28302))
{var error__6036__auto___28303 = temp__4126__auto___28302;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___28303)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28303,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28301,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28291,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__28294;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map28288 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28288,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map28289 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map28289,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map28289,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map28289,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var e = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);var pred__28298 = cljs.core._EQ__EQ_;var expr__28299 = e.keyCode;if(cljs.core.truth_(pred__28298.call(null,clustermap.components.search.ESCAPE_KEY,expr__28299)))
{return clustermap.components.search.search_for.call(null,state,search,search_fn,null);
} else
{if(cljs.core.truth_(pred__28298.call(null,clustermap.components.search.ENTER_KEY,expr__28299)))
{return clustermap.components.search.choose_result.call(null,m);
} else
{if(cljs.core.truth_(pred__28298.call(null,clustermap.components.search.UP_ARROW,expr__28299)))
{return clustermap.components.search.select_prev_result.call(null,m);
} else
{if(cljs.core.truth_(pred__28298.call(null,clustermap.components.search.DOWN_ARROW,expr__28299)))
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
{var temp__4126__auto___28304 = output_checker28293.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28304))
{var error__6036__auto___28305 = temp__4126__auto___28304;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___28305)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28305,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28290,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28290,input_schema28291,input_checker28292,output_checker28293))
,schema.core.make_fn_schema.call(null,output_schema28290,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28291], null)));
})();
clustermap.components.search.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28308 = schema.core.Any;var input_schema28309 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker28310 = schema.core.checker.call(null,input_schema28309);var output_checker28311 = schema.core.checker.call(null,output_schema28308);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311){
return (function render_STAR_(G__28312){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28312], null);var temp__4126__auto___28330 = input_checker28310.call(null,args__6035__auto___28329);if(cljs.core.truth_(temp__4126__auto___28330))
{var error__6036__auto___28331 = temp__4126__auto___28330;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28331)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28331,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28329,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28309,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__28312;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map28306 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28306,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map28307 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map28307,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var col_headers = plumbing.fnk.schema.safe_get.call(null,map28307,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map28307,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map28307,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);return React.DOM.div({"onFocus": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311))
, "onBlur": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311))
},sablono.interpreter.input.call(null,{"type": "text", "value": query, "placeholder": "Company search", "onKeyDown": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311){
return (function (e){clustermap.components.search.key_down.call(null,cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),e], null)));
return null;
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311))
, "onChange": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311){
return (function (e){var v = e.target.value;return clustermap.components.search.search_for.call(null,state,search,search_fn,v);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311))
}),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not_empty.call(null,results);
} else
{return and__3627__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",1319364942),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,col_headers))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.header","li.header",-586263037),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311){
return (function iter__28321(s__28322){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311){
return (function (){var s__28322__$1 = s__28322;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28322__$1);if(temp__4126__auto__)
{var s__28322__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28322__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28322__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28324 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28323 = (0);while(true){
if((i__28323 < size__4376__auto__))
{var h = cljs.core._nth.call(null,c__4375__auto__,i__28323);cljs.core.chunk_append.call(null,b__28324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null));
{
var G__28332 = (i__28323 + (1));
i__28323 = G__28332;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28324),iter__28321.call(null,cljs.core.chunk_rest.call(null,s__28322__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28324),null);
}
} else
{var h = cljs.core.first.call(null,s__28322__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null),iter__28321.call(null,cljs.core.rest.call(null,s__28322__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311))
;return iter__4377__auto__.call(null,col_headers);
})()], null)], null):null),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311){
return (function iter__28325(s__28326){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311){
return (function (){var s__28326__$1 = s__28326;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28326__$1);if(temp__4126__auto__)
{var s__28326__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28326__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28326__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28328 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28327 = (0);while(true){
if((i__28327 < size__4376__auto__))
{var r = cljs.core._nth.call(null,c__4375__auto__,i__28327);cljs.core.chunk_append.call(null,b__28328,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28327,r,c__4375__auto__,size__4376__auto__,b__28328,s__28326__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{return click_fn.call(null,r);
} else
{return null;
}
});})(i__28327,r,c__4375__auto__,size__4376__auto__,b__28328,s__28326__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null));
{
var G__28333 = (i__28327 + (1));
i__28327 = G__28333;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28328),iter__28325.call(null,cljs.core.chunk_rest.call(null,s__28326__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28328),null);
}
} else
{var r = cljs.core.first.call(null,s__28326__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (r,s__28326__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{return click_fn.call(null,r);
} else
{return null;
}
});})(r,s__28326__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null),iter__28325.call(null,cljs.core.rest.call(null,s__28326__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28307,search,map28306,validate__6034__auto__,ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311))
;return iter__4377__auto__.call(null,results);
})()))], null):null)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28334 = output_checker28311.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28334))
{var error__6036__auto___28335 = temp__4126__auto___28334;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28335)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28335,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28308,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28308,input_schema28309,input_checker28310,output_checker28311))
,schema.core.make_fn_schema.call(null,output_schema28308,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28309], null)));
})();
clustermap.components.search.SearchComponentSchema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null)),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any], null),new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.maybe.call(null,schema.core.Str),new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null))], null);
var component_fnk__7881__auto___28354 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28340 = schema.core.Any;var input_schema28341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),clustermap.components.search.SearchComponentSchema], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker28342 = schema.core.checker.call(null,input_schema28341);var output_checker28343 = schema.core.checker.call(null,output_schema28340);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343){
return (function constructor28337(G__28344){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28355 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28344], null);var temp__4126__auto___28356 = input_checker28342.call(null,args__6035__auto___28355);if(cljs.core.truth_(temp__4126__auto___28356))
{var error__6036__auto___28357 = temp__4126__auto___28356;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28337","constructor28337",-871427401,null),cljs.core.pr_str.call(null,error__6036__auto___28357)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28357,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28355,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28341,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__28344;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map28339 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28339,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.search.t28348 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t28348 = (function (owner,map28339,G__28344,input_schema28341,m,output_checker28343,state,search,constructor28337,output_schema28340,validate__6034__auto__,ufv__,input_checker28342,meta28349){
this.owner = owner;
this.map28339 = map28339;
this.G__28344 = G__28344;
this.input_schema28341 = input_schema28341;
this.m = m;
this.output_checker28343 = output_checker28343;
this.state = state;
this.search = search;
this.constructor28337 = constructor28337;
this.output_schema28340 = output_schema28340;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.input_checker28342 = input_checker28342;
this.meta28349 = meta28349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t28348.cljs$lang$type = true;
clustermap.components.search.t28348.cljs$lang$ctorStr = "clustermap.components.search/t28348";
clustermap.components.search.t28348.cljs$lang$ctorPrWriter = ((function (owner,state,search,map28339,validate__6034__auto__,ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.search/t28348");
});})(owner,state,search,map28339,validate__6034__auto__,ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343))
;
clustermap.components.search.t28348.prototype.om$core$IDisplayName$ = true;
clustermap.components.search.t28348.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,search,map28339,validate__6034__auto__,ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343){
return (function (_){var self__ = this;
var ___$1 = this;return "search-component";
});})(owner,state,search,map28339,validate__6034__auto__,ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343))
;
clustermap.components.search.t28348.prototype.om$core$IRender$ = true;
clustermap.components.search.t28348.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,search,map28339,validate__6034__auto__,ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.search.render_STAR_.call(null,self__.m);
});})(owner,state,search,map28339,validate__6034__auto__,ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343))
;
clustermap.components.search.t28348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,search,map28339,validate__6034__auto__,ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343){
return (function (_28350){var self__ = this;
var _28350__$1 = this;return self__.meta28349;
});})(owner,state,search,map28339,validate__6034__auto__,ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343))
;
clustermap.components.search.t28348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,search,map28339,validate__6034__auto__,ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343){
return (function (_28350,meta28349__$1){var self__ = this;
var _28350__$1 = this;return (new clustermap.components.search.t28348(self__.owner,self__.map28339,self__.G__28344,self__.input_schema28341,self__.m,self__.output_checker28343,self__.state,self__.search,self__.constructor28337,self__.output_schema28340,self__.validate__6034__auto__,self__.ufv__,self__.input_checker28342,meta28349__$1));
});})(owner,state,search,map28339,validate__6034__auto__,ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343))
;
clustermap.components.search.__GT_t28348 = ((function (owner,state,search,map28339,validate__6034__auto__,ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343){
return (function __GT_t28348(owner__$1,map28339__$1,G__28344__$1,input_schema28341__$1,m__$1,output_checker28343__$1,state__$1,search__$1,constructor28337__$1,output_schema28340__$1,validate__6034__auto____$1,ufv____$1,input_checker28342__$1,meta28349){return (new clustermap.components.search.t28348(owner__$1,map28339__$1,G__28344__$1,input_schema28341__$1,m__$1,output_checker28343__$1,state__$1,search__$1,constructor28337__$1,output_schema28340__$1,validate__6034__auto____$1,ufv____$1,input_checker28342__$1,meta28349));
});})(owner,state,search,map28339,validate__6034__auto__,ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343))
;
}
return (new clustermap.components.search.t28348(owner,map28339,G__28344,input_schema28341,m,output_checker28343,state,search,constructor28337,output_schema28340,validate__6034__auto__,ufv__,input_checker28342,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28358 = output_checker28343.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28358))
{var error__6036__auto___28359 = temp__4126__auto___28358;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28337","constructor28337",-871427401,null),cljs.core.pr_str.call(null,error__6036__auto___28359)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28359,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28340,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28340,input_schema28341,input_checker28342,output_checker28343))
,schema.core.make_fn_schema.call(null,output_schema28340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28341], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.search.search_component = ((function (component_fnk__7881__auto___28354){
return (function() { 
var search_component__delegate = function (data__7882__auto__,owner28336,p__28351){var vec__28353 = p__28351;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28353,(0),null);return component_fnk__7881__auto___28354.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner28336),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28336),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28336,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var search_component = function (data__7882__auto__,owner28336,var_args){
var p__28351 = null;if (arguments.length > 2) {
  p__28351 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return search_component__delegate.call(this,data__7882__auto__,owner28336,p__28351);};
search_component.cljs$lang$maxFixedArity = 2;
search_component.cljs$lang$applyTo = (function (arglist__28360){
var data__7882__auto__ = cljs.core.first(arglist__28360);
arglist__28360 = cljs.core.next(arglist__28360);
var owner28336 = cljs.core.first(arglist__28360);
var p__28351 = cljs.core.rest(arglist__28360);
return search_component__delegate(data__7882__auto__,owner28336,p__28351);
});
search_component.cljs$core$IFn$_invoke$arity$variadic = search_component__delegate;
return search_component;
})()
;})(component_fnk__7881__auto___28354))
;
clustermap.components.search.__GT_search_component = (function() {
var __GT_search_component = null;
var __GT_search_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__);
});
var __GT_search_component__2 = (function (cursor__7850__auto__,m28338){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__,m28338);
});
__GT_search_component = function(cursor__7850__auto__,m28338){
switch(arguments.length){
case 1:
return __GT_search_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_search_component__2.call(this,cursor__7850__auto__,m28338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_search_component.cljs$core$IFn$_invoke$arity$1 = __GT_search_component__1;
__GT_search_component.cljs$core$IFn$_invoke$arity$2 = __GT_search_component__2;
return __GT_search_component;
})()
;
