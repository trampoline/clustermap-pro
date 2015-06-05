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
var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__){
return (function (state_28893){var state_val_28894 = (state_28893[(1)]);if((state_val_28894 === (5)))
{var inst_28888 = (state_28893[(2)]);var state_28893__$1 = state_28893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28893__$1,(2),inst_28888);
} else
{if((state_val_28894 === (4)))
{var inst_28886 = search_fn.call(null);var state_28893__$1 = state_28893;var statearr_28895_28906 = state_28893__$1;(statearr_28895_28906[(2)] = inst_28886);
(statearr_28895_28906[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28894 === (3)))
{var inst_28884 = search_fn.call(null,query);var state_28893__$1 = state_28893;var statearr_28896_28907 = state_28893__$1;(statearr_28896_28907[(2)] = inst_28884);
(statearr_28896_28907[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28894 === (2)))
{var inst_28890 = (state_28893[(2)]);var inst_28891 = om.core.update_BANG_.call(null,search_cursor,new cljs.core.Keyword(null,"results","results",-1134170113),inst_28890);var state_28893__$1 = state_28893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28893__$1,inst_28891);
} else
{if((state_val_28894 === (1)))
{var inst_28881 = cljs.core.count.call(null,query);var inst_28882 = (inst_28881 > (1));var state_28893__$1 = state_28893;if(cljs.core.truth_(inst_28882))
{var statearr_28897_28908 = state_28893__$1;(statearr_28897_28908[(1)] = (3));
} else
{var statearr_28898_28909 = state_28893__$1;(statearr_28898_28909[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__11154__auto__))
;return ((function (switch__11098__auto__,c__11154__auto__){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_28902 = [null,null,null,null,null,null,null];(statearr_28902[(0)] = state_machine__11099__auto__);
(statearr_28902[(1)] = (1));
return statearr_28902;
});
var state_machine__11099__auto____1 = (function (state_28893){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_28893);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e28903){if((e28903 instanceof Object))
{var ex__11102__auto__ = e28903;var statearr_28904_28910 = state_28893;(statearr_28904_28910[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28893);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28903;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28911 = state_28893;
state_28893 = G__28911;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_28893){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_28893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__))
})();var state__11156__auto__ = (function (){var statearr_28905 = f__11155__auto__.call(null);(statearr_28905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_28905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__))
);
return c__11154__auto__;
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
clustermap.components.search.select_next_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28914 = schema.core.Any;var input_schema28915 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map28912","map28912",-530839051,null))], null);var input_checker28916 = schema.core.checker.call(null,input_schema28915);var output_checker28917 = schema.core.checker.call(null,output_schema28914);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28914,input_schema28915,input_checker28916,output_checker28917){
return (function select_next_result(G__28918){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28921 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28918], null);var temp__4126__auto___28922 = input_checker28916.call(null,args__6035__auto___28921);if(cljs.core.truth_(temp__4126__auto___28922))
{var error__6036__auto___28923 = temp__4126__auto___28922;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___28923)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28923,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28921,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28915,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28912 = G__28918;while(true){
if(cljs.core.map_QMARK_.call(null,map28912))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28912)));
}
var map28913 = plumbing.fnk.schema.safe_get.call(null,map28912,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28913,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map28912,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__28920 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__28920,(0),null);var after = cljs.core.nth.call(null,vec__28920,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.first.call(null,after);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.first.call(null,before);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28924 = output_checker28917.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28924))
{var error__6036__auto___28925 = temp__4126__auto___28924;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__6036__auto___28925)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28925,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28914,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28914,input_schema28915,input_checker28916,output_checker28917))
,schema.core.make_fn_schema.call(null,output_schema28914,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28915], null)));
})();
clustermap.components.search.select_prev_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28928 = schema.core.Any;var input_schema28929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map28926","map28926",-1375012863,null))], null);var input_checker28930 = schema.core.checker.call(null,input_schema28929);var output_checker28931 = schema.core.checker.call(null,output_schema28928);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function select_prev_result(G__28932){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28932], null);var temp__4126__auto___28936 = input_checker28930.call(null,args__6035__auto___28935);if(cljs.core.truth_(temp__4126__auto___28936))
{var error__6036__auto___28937 = temp__4126__auto___28936;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___28937)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28937,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28935,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28929,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28926 = G__28932;while(true){
if(cljs.core.map_QMARK_.call(null,map28926))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28926)));
}
var map28927 = plumbing.fnk.schema.safe_get.call(null,map28926,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28927,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map28926,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__28934 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__28934,(0),null);var after = cljs.core.nth.call(null,vec__28934,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__3639__auto__ = cljs.core.last.call(null,before);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.last.call(null,after);
}
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28938 = output_checker28931.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28938))
{var error__6036__auto___28939 = temp__4126__auto___28938;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__6036__auto___28939)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28939,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28928,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
,schema.core.make_fn_schema.call(null,output_schema28928,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28929], null)));
})();
clustermap.components.search.choose_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28943 = schema.core.Any;var input_schema28944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map28940","map28940",-1730118017,null))], null);var input_checker28945 = schema.core.checker.call(null,input_schema28944);var output_checker28946 = schema.core.checker.call(null,output_schema28943);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28943,input_schema28944,input_checker28945,output_checker28946){
return (function choose_result(G__28947){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28947], null);var temp__4126__auto___28949 = input_checker28945.call(null,args__6035__auto___28948);if(cljs.core.truth_(temp__4126__auto___28949))
{var error__6036__auto___28950 = temp__4126__auto___28949;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___28950)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28950,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28948,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28944,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28940 = G__28947;while(true){
if(cljs.core.map_QMARK_.call(null,map28940))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28940)));
}
var map28941 = plumbing.fnk.schema.safe_get.call(null,map28940,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28941,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map28942 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map28942,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map28942,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map28942,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map28940,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var cr = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var temp__4126__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cr], true),results);if(cljs.core.truth_(temp__4126__auto__))
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
{var temp__4126__auto___28951 = output_checker28946.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28951))
{var error__6036__auto___28952 = temp__4126__auto___28951;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__6036__auto___28952)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28952,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28943,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28943,input_schema28944,input_checker28945,output_checker28946))
,schema.core.make_fn_schema.call(null,output_schema28943,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28944], null)));
})();
clustermap.components.search.key_down = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28955 = schema.core.Any;var input_schema28956 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker28957 = schema.core.checker.call(null,input_schema28956);var output_checker28958 = schema.core.checker.call(null,output_schema28955);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28955,input_schema28956,input_checker28957,output_checker28958){
return (function key_down(G__28959){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28959], null);var temp__4126__auto___28967 = input_checker28957.call(null,args__6035__auto___28966);if(cljs.core.truth_(temp__4126__auto___28967))
{var error__6036__auto___28968 = temp__4126__auto___28967;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___28968)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28968,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28966,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28956,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__28959;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map28953 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28953,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map28954 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map28954,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map28954,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map28954,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var e = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);var pred__28963 = cljs.core._EQ__EQ_;var expr__28964 = e.keyCode;if(cljs.core.truth_(pred__28963.call(null,clustermap.components.search.ESCAPE_KEY,expr__28964)))
{return clustermap.components.search.search_for.call(null,state,search,search_fn,null);
} else
{if(cljs.core.truth_(pred__28963.call(null,clustermap.components.search.ENTER_KEY,expr__28964)))
{return clustermap.components.search.choose_result.call(null,m);
} else
{if(cljs.core.truth_(pred__28963.call(null,clustermap.components.search.UP_ARROW,expr__28964)))
{return clustermap.components.search.select_prev_result.call(null,m);
} else
{if(cljs.core.truth_(pred__28963.call(null,clustermap.components.search.DOWN_ARROW,expr__28964)))
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
{var temp__4126__auto___28969 = output_checker28958.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28969))
{var error__6036__auto___28970 = temp__4126__auto___28969;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__6036__auto___28970)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28970,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28955,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28955,input_schema28956,input_checker28957,output_checker28958))
,schema.core.make_fn_schema.call(null,output_schema28955,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28956], null)));
})();
clustermap.components.search.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28973 = schema.core.Any;var input_schema28974 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker28975 = schema.core.checker.call(null,input_schema28974);var output_checker28976 = schema.core.checker.call(null,output_schema28973);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976){
return (function render_STAR_(G__28977){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28977], null);var temp__4126__auto___28995 = input_checker28975.call(null,args__6035__auto___28994);if(cljs.core.truth_(temp__4126__auto___28995))
{var error__6036__auto___28996 = temp__4126__auto___28995;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28996)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28996,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28994,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28974,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__28977;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map28971 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map28971,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map28972 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map28972,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var col_headers = plumbing.fnk.schema.safe_get.call(null,map28972,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map28972,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map28972,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);return React.DOM.div({"onFocus": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976))
, "onBlur": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976))
},sablono.interpreter.input.call(null,{"type": "text", "value": query, "placeholder": "Company search", "onKeyDown": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976){
return (function (e){clustermap.components.search.key_down.call(null,cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),e], null)));
return null;
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976))
, "onChange": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976){
return (function (e){var v = e.target.value;return clustermap.components.search.search_for.call(null,state,search,search_fn,v);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976))
}),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__3627__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not_empty.call(null,results);
} else
{return and__3627__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",1319364942),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,col_headers))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.header","li.header",-586263037),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976){
return (function iter__28986(s__28987){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976){
return (function (){var s__28987__$1 = s__28987;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28987__$1);if(temp__4126__auto__)
{var s__28987__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28987__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28987__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28989 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28988 = (0);while(true){
if((i__28988 < size__4376__auto__))
{var h = cljs.core._nth.call(null,c__4375__auto__,i__28988);cljs.core.chunk_append.call(null,b__28989,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null));
{
var G__28997 = (i__28988 + (1));
i__28988 = G__28997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28989),iter__28986.call(null,cljs.core.chunk_rest.call(null,s__28987__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28989),null);
}
} else
{var h = cljs.core.first.call(null,s__28987__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null),iter__28986.call(null,cljs.core.rest.call(null,s__28987__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976))
;return iter__4377__auto__.call(null,col_headers);
})()], null)], null):null),(function (){var iter__4377__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976){
return (function iter__28990(s__28991){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976){
return (function (){var s__28991__$1 = s__28991;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28991__$1);if(temp__4126__auto__)
{var s__28991__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28991__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28991__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28993 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28992 = (0);while(true){
if((i__28992 < size__4376__auto__))
{var r = cljs.core._nth.call(null,c__4375__auto__,i__28992);cljs.core.chunk_append.call(null,b__28993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28992,r,c__4375__auto__,size__4376__auto__,b__28993,s__28991__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{return click_fn.call(null,r);
} else
{return null;
}
});})(i__28992,r,c__4375__auto__,size__4376__auto__,b__28993,s__28991__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null));
{
var G__28998 = (i__28992 + (1));
i__28992 = G__28998;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28993),iter__28990.call(null,cljs.core.chunk_rest.call(null,s__28991__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28993),null);
}
} else
{var r = cljs.core.first.call(null,s__28991__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (r,s__28991__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{return click_fn.call(null,r);
} else
{return null;
}
});})(r,s__28991__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null),iter__28990.call(null,cljs.core.rest.call(null,s__28991__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map28972,search,map28971,validate__6034__auto__,ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976))
;return iter__4377__auto__.call(null,results);
})()))], null):null)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28999 = output_checker28976.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28999))
{var error__6036__auto___29000 = temp__4126__auto___28999;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29000)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29000,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28973,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28973,input_schema28974,input_checker28975,output_checker28976))
,schema.core.make_fn_schema.call(null,output_schema28973,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28974], null)));
})();
clustermap.components.search.SearchComponentSchema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null)),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any], null),new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.maybe.call(null,schema.core.Str),new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null))], null);
var component_fnk__7881__auto___29019 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29005 = schema.core.Any;var input_schema29006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),clustermap.components.search.SearchComponentSchema], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker29007 = schema.core.checker.call(null,input_schema29006);var output_checker29008 = schema.core.checker.call(null,output_schema29005);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008){
return (function constructor29002(G__29009){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29020 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29009], null);var temp__4126__auto___29021 = input_checker29007.call(null,args__6035__auto___29020);if(cljs.core.truth_(temp__4126__auto___29021))
{var error__6036__auto___29022 = temp__4126__auto___29021;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29002","constructor29002",2022397751,null),cljs.core.pr_str.call(null,error__6036__auto___29022)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29022,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29020,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29006,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var m = G__29009;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map29004 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map29004,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.search.t29013 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t29013 = (function (owner,m,map29004,state,search,G__29009,input_schema29006,constructor29002,output_schema29005,validate__6034__auto__,output_checker29008,input_checker29007,ufv__,meta29014){
this.owner = owner;
this.m = m;
this.map29004 = map29004;
this.state = state;
this.search = search;
this.G__29009 = G__29009;
this.input_schema29006 = input_schema29006;
this.constructor29002 = constructor29002;
this.output_schema29005 = output_schema29005;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker29008 = output_checker29008;
this.input_checker29007 = input_checker29007;
this.ufv__ = ufv__;
this.meta29014 = meta29014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t29013.cljs$lang$type = true;
clustermap.components.search.t29013.cljs$lang$ctorStr = "clustermap.components.search/t29013";
clustermap.components.search.t29013.cljs$lang$ctorPrWriter = ((function (owner,state,search,map29004,validate__6034__auto__,ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.search/t29013");
});})(owner,state,search,map29004,validate__6034__auto__,ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008))
;
clustermap.components.search.t29013.prototype.om$core$IDisplayName$ = true;
clustermap.components.search.t29013.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,search,map29004,validate__6034__auto__,ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008){
return (function (_){var self__ = this;
var ___$1 = this;return "search-component";
});})(owner,state,search,map29004,validate__6034__auto__,ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008))
;
clustermap.components.search.t29013.prototype.om$core$IRender$ = true;
clustermap.components.search.t29013.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,search,map29004,validate__6034__auto__,ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.search.render_STAR_.call(null,self__.m);
});})(owner,state,search,map29004,validate__6034__auto__,ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008))
;
clustermap.components.search.t29013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,search,map29004,validate__6034__auto__,ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008){
return (function (_29015){var self__ = this;
var _29015__$1 = this;return self__.meta29014;
});})(owner,state,search,map29004,validate__6034__auto__,ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008))
;
clustermap.components.search.t29013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,search,map29004,validate__6034__auto__,ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008){
return (function (_29015,meta29014__$1){var self__ = this;
var _29015__$1 = this;return (new clustermap.components.search.t29013(self__.owner,self__.m,self__.map29004,self__.state,self__.search,self__.G__29009,self__.input_schema29006,self__.constructor29002,self__.output_schema29005,self__.validate__6034__auto__,self__.output_checker29008,self__.input_checker29007,self__.ufv__,meta29014__$1));
});})(owner,state,search,map29004,validate__6034__auto__,ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008))
;
clustermap.components.search.__GT_t29013 = ((function (owner,state,search,map29004,validate__6034__auto__,ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008){
return (function __GT_t29013(owner__$1,m__$1,map29004__$1,state__$1,search__$1,G__29009__$1,input_schema29006__$1,constructor29002__$1,output_schema29005__$1,validate__6034__auto____$1,output_checker29008__$1,input_checker29007__$1,ufv____$1,meta29014){return (new clustermap.components.search.t29013(owner__$1,m__$1,map29004__$1,state__$1,search__$1,G__29009__$1,input_schema29006__$1,constructor29002__$1,output_schema29005__$1,validate__6034__auto____$1,output_checker29008__$1,input_checker29007__$1,ufv____$1,meta29014));
});})(owner,state,search,map29004,validate__6034__auto__,ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008))
;
}
return (new clustermap.components.search.t29013(owner,m,map29004,state,search,G__29009,input_schema29006,constructor29002,output_schema29005,validate__6034__auto__,output_checker29008,input_checker29007,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29023 = output_checker29008.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29023))
{var error__6036__auto___29024 = temp__4126__auto___29023;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29002","constructor29002",2022397751,null),cljs.core.pr_str.call(null,error__6036__auto___29024)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29024,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29005,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29005,input_schema29006,input_checker29007,output_checker29008))
,schema.core.make_fn_schema.call(null,output_schema29005,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29006], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.search.search_component = ((function (component_fnk__7881__auto___29019){
return (function() { 
var search_component__delegate = function (data__7882__auto__,owner29001,p__29016){var vec__29018 = p__29016;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29018,(0),null);return component_fnk__7881__auto___29019.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner29001),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29001),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29001,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var search_component = function (data__7882__auto__,owner29001,var_args){
var p__29016 = null;if (arguments.length > 2) {
  p__29016 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return search_component__delegate.call(this,data__7882__auto__,owner29001,p__29016);};
search_component.cljs$lang$maxFixedArity = 2;
search_component.cljs$lang$applyTo = (function (arglist__29025){
var data__7882__auto__ = cljs.core.first(arglist__29025);
arglist__29025 = cljs.core.next(arglist__29025);
var owner29001 = cljs.core.first(arglist__29025);
var p__29016 = cljs.core.rest(arglist__29025);
return search_component__delegate(data__7882__auto__,owner29001,p__29016);
});
search_component.cljs$core$IFn$_invoke$arity$variadic = search_component__delegate;
return search_component;
})()
;})(component_fnk__7881__auto___29019))
;
clustermap.components.search.__GT_search_component = (function() {
var __GT_search_component = null;
var __GT_search_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__);
});
var __GT_search_component__2 = (function (cursor__7850__auto__,m29003){return om.core.build.call(null,clustermap.components.search.search_component,cursor__7850__auto__,m29003);
});
__GT_search_component = function(cursor__7850__auto__,m29003){
switch(arguments.length){
case 1:
return __GT_search_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_search_component__2.call(this,cursor__7850__auto__,m29003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_search_component.cljs$core$IFn$_invoke$arity$1 = __GT_search_component__1;
__GT_search_component.cljs$core$IFn$_invoke$arity$2 = __GT_search_component__2;
return __GT_search_component;
})()
;
