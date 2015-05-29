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
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__){
return (function (state_30166){var state_val_30167 = (state_30166[(1)]);if((state_val_30167 === (5)))
{var inst_30161 = (state_30166[(2)]);var state_30166__$1 = state_30166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30166__$1,(2),inst_30161);
} else
{if((state_val_30167 === (4)))
{var inst_30159 = search_fn.call(null);var state_30166__$1 = state_30166;var statearr_30168_30179 = state_30166__$1;(statearr_30168_30179[(2)] = inst_30159);
(statearr_30168_30179[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30167 === (3)))
{var inst_30157 = search_fn.call(null,query);var state_30166__$1 = state_30166;var statearr_30169_30180 = state_30166__$1;(statearr_30169_30180[(2)] = inst_30157);
(statearr_30169_30180[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30167 === (2)))
{var inst_30163 = (state_30166[(2)]);var inst_30164 = om.core.update_BANG_.call(null,search_cursor,new cljs.core.Keyword(null,"results","results",-1134170113),inst_30163);var state_30166__$1 = state_30166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30166__$1,inst_30164);
} else
{if((state_val_30167 === (1)))
{var inst_30154 = cljs.core.count.call(null,query);var inst_30155 = (inst_30154 > (1));var state_30166__$1 = state_30166;if(cljs.core.truth_(inst_30155))
{var statearr_30170_30181 = state_30166__$1;(statearr_30170_30181[(1)] = (3));
} else
{var statearr_30171_30182 = state_30166__$1;(statearr_30171_30182[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__18867__auto__))
;return ((function (switch__18811__auto__,c__18867__auto__){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_30175 = [null,null,null,null,null,null,null];(statearr_30175[(0)] = state_machine__18812__auto__);
(statearr_30175[(1)] = (1));
return statearr_30175;
});
var state_machine__18812__auto____1 = (function (state_30166){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_30166);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e30176){if((e30176 instanceof Object))
{var ex__18815__auto__ = e30176;var statearr_30177_30183 = state_30166;(statearr_30177_30183[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30166);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30176;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30184 = state_30166;
state_30166 = G__30184;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_30166){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_30166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__))
})();var state__18869__auto__ = (function (){var statearr_30178 = f__18868__auto__.call(null);(statearr_30178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_30178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__))
);
return c__18867__auto__;
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
clustermap.components.search.select_next_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30187 = schema.core.Any;var input_schema30188 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map30185","map30185",983418199,null))], null);var input_checker30189 = schema.core.checker.call(null,input_schema30188);var output_checker30190 = schema.core.checker.call(null,output_schema30187);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30187,input_schema30188,input_checker30189,output_checker30190){
return (function select_next_result(G__30191){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___30194 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30191], null);var temp__4126__auto___30195 = input_checker30189.call(null,args__13910__auto___30194);if(cljs.core.truth_(temp__4126__auto___30195))
{var error__13911__auto___30196 = temp__4126__auto___30195;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__13911__auto___30196)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30196,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___30194,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30188,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map30185 = G__30191;while(true){
if(cljs.core.map_QMARK_.call(null,map30185))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30185)));
}
var map30186 = plumbing.fnk.schema.safe_get.call(null,map30185,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map30186,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map30185,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__30193 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__30193,(0),null);var after = cljs.core.nth.call(null,vec__30193,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__11514__auto__ = cljs.core.first.call(null,after);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.first.call(null,before);
}
})());
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___30197 = output_checker30190.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___30197))
{var error__13911__auto___30198 = temp__4126__auto___30197;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-next-result","select-next-result",-1663493342,null),cljs.core.pr_str.call(null,error__13911__auto___30198)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30198,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30187,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema30187,input_schema30188,input_checker30189,output_checker30190))
,schema.core.make_fn_schema.call(null,output_schema30187,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30188], null)));
})();
clustermap.components.search.select_prev_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30201 = schema.core.Any;var input_schema30202 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map30199","map30199",-514330581,null))], null);var input_checker30203 = schema.core.checker.call(null,input_schema30202);var output_checker30204 = schema.core.checker.call(null,output_schema30201);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function select_prev_result(G__30205){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___30208 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30205], null);var temp__4126__auto___30209 = input_checker30203.call(null,args__13910__auto___30208);if(cljs.core.truth_(temp__4126__auto___30209))
{var error__13911__auto___30210 = temp__4126__auto___30209;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__13911__auto___30210)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30210,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___30208,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30202,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map30199 = G__30205;while(true){
if(cljs.core.map_QMARK_.call(null,map30199))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30199)));
}
var map30200 = plumbing.fnk.schema.safe_get.call(null,map30199,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map30200,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map30199,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var vec__30207 = clustermap.components.search.partition_around.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),results);var before = cljs.core.nth.call(null,vec__30207,(0),null);var after = cljs.core.nth.call(null,vec__30207,(1),null);return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),(function (){var or__11514__auto__ = cljs.core.last.call(null,before);if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return cljs.core.last.call(null,after);
}
})());
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___30211 = output_checker30204.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___30211))
{var error__13911__auto___30212 = temp__4126__auto___30211;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"select-prev-result","select-prev-result",-141922871,null),cljs.core.pr_str.call(null,error__13911__auto___30212)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30212,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30201,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
,schema.core.make_fn_schema.call(null,output_schema30201,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30202], null)));
})();
clustermap.components.search.choose_result = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30216 = schema.core.Any;var input_schema30217 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"map30213","map30213",-811268387,null))], null);var input_checker30218 = schema.core.checker.call(null,input_schema30217);var output_checker30219 = schema.core.checker.call(null,output_schema30216);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30216,input_schema30217,input_checker30218,output_checker30219){
return (function choose_result(G__30220){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___30221 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30220], null);var temp__4126__auto___30222 = input_checker30218.call(null,args__13910__auto___30221);if(cljs.core.truth_(temp__4126__auto___30222))
{var error__13911__auto___30223 = temp__4126__auto___30222;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__13911__auto___30223)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30223,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___30221,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30217,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map30213 = G__30220;while(true){
if(cljs.core.map_QMARK_.call(null,map30213))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30213)));
}
var map30214 = plumbing.fnk.schema.safe_get.call(null,map30213,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map30214,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map30215 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map30215,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map30215,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map30215,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,map30213,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var cr = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var temp__4126__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cr], true),results);if(cljs.core.truth_(temp__4126__auto__))
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
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___30224 = output_checker30219.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___30224))
{var error__13911__auto___30225 = temp__4126__auto___30224;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"choose-result","choose-result",894198462,null),cljs.core.pr_str.call(null,error__13911__auto___30225)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30225,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30216,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema30216,input_schema30217,input_checker30218,output_checker30219))
,schema.core.make_fn_schema.call(null,output_schema30216,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30217], null)));
})();
clustermap.components.search.key_down = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30228 = schema.core.Any;var input_schema30229 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"e","e",1381269198),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker30230 = schema.core.checker.call(null,input_schema30229);var output_checker30231 = schema.core.checker.call(null,output_schema30228);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30228,input_schema30229,input_checker30230,output_checker30231){
return (function key_down(G__30232){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___30239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30232], null);var temp__4126__auto___30240 = input_checker30230.call(null,args__13910__auto___30239);if(cljs.core.truth_(temp__4126__auto___30240))
{var error__13911__auto___30241 = temp__4126__auto___30240;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__13911__auto___30241)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30241,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___30239,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30229,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var m = G__30232;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map30226 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map30226,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map30227 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map30227,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map30227,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map30227,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var e = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.PersistentVector.EMPTY);var pred__30236 = cljs.core._EQ__EQ_;var expr__30237 = e.keyCode;if(cljs.core.truth_(pred__30236.call(null,clustermap.components.search.ESCAPE_KEY,expr__30237)))
{return clustermap.components.search.search_for.call(null,state,search,search_fn,null);
} else
{if(cljs.core.truth_(pred__30236.call(null,clustermap.components.search.ENTER_KEY,expr__30237)))
{return clustermap.components.search.choose_result.call(null,m);
} else
{if(cljs.core.truth_(pred__30236.call(null,clustermap.components.search.UP_ARROW,expr__30237)))
{return clustermap.components.search.select_prev_result.call(null,m);
} else
{if(cljs.core.truth_(pred__30236.call(null,clustermap.components.search.DOWN_ARROW,expr__30237)))
{return clustermap.components.search.select_next_result.call(null,m);
} else
{return null;
}
}
}
}
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___30242 = output_checker30231.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___30242))
{var error__13911__auto___30243 = temp__4126__auto___30242;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"key-down","key-down",-1655754254,null),cljs.core.pr_str.call(null,error__13911__auto___30243)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30243,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30228,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema30228,input_schema30229,input_checker30230,output_checker30231))
,schema.core.make_fn_schema.call(null,output_schema30228,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30229], null)));
})();
clustermap.components.search.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30246 = schema.core.Any;var input_schema30247 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.Any,new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.Any,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any], true, false)], true, false)], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker30248 = schema.core.checker.call(null,input_schema30247);var output_checker30249 = schema.core.checker.call(null,output_schema30246);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249){
return (function render_STAR_(G__30250){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___30267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30250], null);var temp__4126__auto___30268 = input_checker30248.call(null,args__13910__auto___30267);if(cljs.core.truth_(temp__4126__auto___30268))
{var error__13911__auto___30269 = temp__4126__auto___30268;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___30269)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30269,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___30267,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30247,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var m = G__30250;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map30244 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map30244,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map30245 = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var search_fn = plumbing.fnk.schema.safe_get.call(null,map30245,new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var col_headers = plumbing.fnk.schema.safe_get.call(null,map30245,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var render_fn = plumbing.fnk.schema.safe_get.call(null,map30245,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var click_fn = plumbing.fnk.schema.safe_get.call(null,map30245,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var query = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var results = plumbing.fnk.schema.safe_get.call(null,search,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"search","search",1564939822)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);return React.DOM.div({"onFocus": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),true);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249))
, "onBlur": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249){
return (function (){return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),false);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249))
},sablono.interpreter.input.call(null,{"type": "text", "value": query, "placeholder": "Company search", "onKeyDown": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249){
return (function (e){clustermap.components.search.key_down.call(null,cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),e], null)));
return null;
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249))
, "onChange": ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249){
return (function (e){var v = e.target.value;return clustermap.components.search.search_for.call(null,state,search,search_fn,v);
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249))
}),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__11502__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));if(cljs.core.truth_(and__11502__auto__))
{return cljs.core.not_empty.call(null,results);
} else
{return and__11502__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-results","div.search-results",1319364942),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,col_headers))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.header","li.header",-586263037),(function (){var iter__12252__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249){
return (function iter__30259(s__30260){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249){
return (function (){var s__30260__$1 = s__30260;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30260__$1);if(temp__4126__auto__)
{var s__30260__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30260__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30260__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30262 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30261 = (0);while(true){
if((i__30261 < size__12251__auto__))
{var h = cljs.core._nth.call(null,c__12250__auto__,i__30261);cljs.core.chunk_append.call(null,b__30262,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null));
{
var G__30270 = (i__30261 + (1));
i__30261 = G__30270;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30262),iter__30259.call(null,cljs.core.chunk_rest.call(null,s__30260__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30262),null);
}
} else
{var h = cljs.core.first.call(null,s__30260__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),h], null),iter__30259.call(null,cljs.core.rest.call(null,s__30260__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249))
;return iter__12252__auto__.call(null,col_headers);
})()], null)], null):null),(function (){var iter__12252__auto__ = ((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249){
return (function iter__30263(s__30264){return (new cljs.core.LazySeq(null,((function (owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249){
return (function (){var s__30264__$1 = s__30264;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30264__$1);if(temp__4126__auto__)
{var s__30264__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30264__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__30264__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__30266 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__30265 = (0);while(true){
if((i__30265 < size__12251__auto__))
{var r = cljs.core._nth.call(null,c__12250__auto__,i__30265);cljs.core.chunk_append.call(null,b__30266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30265,r,c__12250__auto__,size__12251__auto__,b__30266,s__30264__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{return click_fn.call(null,r);
} else
{return null;
}
});})(i__30265,r,c__12250__auto__,size__12251__auto__,b__30266,s__30264__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null));
{
var G__30271 = (i__30265 + (1));
i__30265 = G__30271;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30266),iter__30263.call(null,cljs.core.chunk_rest.call(null,s__30264__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30266),null);
}
} else
{var r = cljs.core.first.call(null,s__30264__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),r))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (r,s__30264__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249){
return (function (e){e.preventDefault();
if(cljs.core.truth_(click_fn))
{return click_fn.call(null,r);
} else
{return null;
}
});})(r,s__30264__$2,temp__4126__auto__,owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249))
], null)], null),(cljs.core.truth_(render_fn)?clustermap.components.search.make_sequential.call(null,render_fn.call(null,r)):null))], null),iter__30263.call(null,cljs.core.rest.call(null,s__30264__$2)));
}
} else
{return null;
}
break;
}
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249))
,null,null));
});})(owner,state,results,query,click_fn,render_fn,col_headers,search_fn,map30245,search,map30244,validate__13909__auto__,ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249))
;return iter__12252__auto__.call(null,results);
})()))], null):null)));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___30272 = output_checker30249.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___30272))
{var error__13911__auto___30273 = temp__4126__auto___30272;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___30273)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30273,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30246,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema30246,input_schema30247,input_checker30248,output_checker30249))
,schema.core.make_fn_schema.call(null,output_schema30246,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30247], null)));
})();
clustermap.components.search.SearchComponentSchema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"search-fn","search-fn",-646637945),schema.core.Any,new cljs.core.Keyword(null,"col-headers","col-headers",1940551204),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Str], null)),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),schema.core.Any,new cljs.core.Keyword(null,"click-fn","click-fn",2099562548),schema.core.Any], null),new cljs.core.Keyword(null,"query","query",-1288509510),schema.core.maybe.call(null,schema.core.Str),new cljs.core.Keyword(null,"results","results",-1134170113),schema.core.maybe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null))], null);
var component_fnk__15756__auto___30292 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30278 = schema.core.Any;var input_schema30279 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"search","search",1564939822),clustermap.components.search.SearchComponentSchema], true, false)], true, false),new cljs.core.Symbol(null,"m","m",-1021758608,null))], null);var input_checker30280 = schema.core.checker.call(null,input_schema30279);var output_checker30281 = schema.core.checker.call(null,output_schema30278);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281){
return (function constructor30275(G__30282){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___30293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30282], null);var temp__4126__auto___30294 = input_checker30280.call(null,args__13910__auto___30293);if(cljs.core.truth_(temp__4126__auto___30294))
{var error__13911__auto___30295 = temp__4126__auto___30294;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30275","constructor30275",1877091610,null),cljs.core.pr_str.call(null,error__13911__auto___30295)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30295,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___30293,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30279,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var m = G__30282;while(true){
if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",m)));
}
var map30277 = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var search = plumbing.fnk.schema.safe_get.call(null,map30277,new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,m,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.search.t30286 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t30286 = (function (owner,input_schema30279,output_schema30278,validate__13909__auto__,output_checker30281,m,state,search,map30277,G__30282,constructor30275,input_checker30280,ufv__,meta30287){
this.owner = owner;
this.input_schema30279 = input_schema30279;
this.output_schema30278 = output_schema30278;
this.validate__13909__auto__ = validate__13909__auto__;
this.output_checker30281 = output_checker30281;
this.m = m;
this.state = state;
this.search = search;
this.map30277 = map30277;
this.G__30282 = G__30282;
this.constructor30275 = constructor30275;
this.input_checker30280 = input_checker30280;
this.ufv__ = ufv__;
this.meta30287 = meta30287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t30286.cljs$lang$type = true;
clustermap.components.search.t30286.cljs$lang$ctorStr = "clustermap.components.search/t30286";
clustermap.components.search.t30286.cljs$lang$ctorPrWriter = ((function (owner,state,search,map30277,validate__13909__auto__,ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.search/t30286");
});})(owner,state,search,map30277,validate__13909__auto__,ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281))
;
clustermap.components.search.t30286.prototype.om$core$IDisplayName$ = true;
clustermap.components.search.t30286.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,search,map30277,validate__13909__auto__,ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281){
return (function (_){var self__ = this;
var ___$1 = this;return "search-component";
});})(owner,state,search,map30277,validate__13909__auto__,ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281))
;
clustermap.components.search.t30286.prototype.om$core$IRender$ = true;
clustermap.components.search.t30286.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,search,map30277,validate__13909__auto__,ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.search.render_STAR_.call(null,self__.m);
});})(owner,state,search,map30277,validate__13909__auto__,ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281))
;
clustermap.components.search.t30286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,search,map30277,validate__13909__auto__,ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281){
return (function (_30288){var self__ = this;
var _30288__$1 = this;return self__.meta30287;
});})(owner,state,search,map30277,validate__13909__auto__,ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281))
;
clustermap.components.search.t30286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,search,map30277,validate__13909__auto__,ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281){
return (function (_30288,meta30287__$1){var self__ = this;
var _30288__$1 = this;return (new clustermap.components.search.t30286(self__.owner,self__.input_schema30279,self__.output_schema30278,self__.validate__13909__auto__,self__.output_checker30281,self__.m,self__.state,self__.search,self__.map30277,self__.G__30282,self__.constructor30275,self__.input_checker30280,self__.ufv__,meta30287__$1));
});})(owner,state,search,map30277,validate__13909__auto__,ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281))
;
clustermap.components.search.__GT_t30286 = ((function (owner,state,search,map30277,validate__13909__auto__,ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281){
return (function __GT_t30286(owner__$1,input_schema30279__$1,output_schema30278__$1,validate__13909__auto____$1,output_checker30281__$1,m__$1,state__$1,search__$1,map30277__$1,G__30282__$1,constructor30275__$1,input_checker30280__$1,ufv____$1,meta30287){return (new clustermap.components.search.t30286(owner__$1,input_schema30279__$1,output_schema30278__$1,validate__13909__auto____$1,output_checker30281__$1,m__$1,state__$1,search__$1,map30277__$1,G__30282__$1,constructor30275__$1,input_checker30280__$1,ufv____$1,meta30287));
});})(owner,state,search,map30277,validate__13909__auto__,ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281))
;
}
return (new clustermap.components.search.t30286(owner,input_schema30279,output_schema30278,validate__13909__auto__,output_checker30281,m,state,search,map30277,G__30282,constructor30275,input_checker30280,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___30296 = output_checker30281.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___30296))
{var error__13911__auto___30297 = temp__4126__auto___30296;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30275","constructor30275",1877091610,null),cljs.core.pr_str.call(null,error__13911__auto___30297)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30297,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30278,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema30278,input_schema30279,input_checker30280,output_checker30281))
,schema.core.make_fn_schema.call(null,output_schema30278,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30279], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.search.search_component = ((function (component_fnk__15756__auto___30292){
return (function() { 
var search_component__delegate = function (data__15757__auto__,owner30274,p__30289){var vec__30291 = p__30289;var opts__15758__auto__ = cljs.core.nth.call(null,vec__30291,(0),null);return component_fnk__15756__auto___30292.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner30274),new cljs.core.Keyword(null,"opts","opts",155075701),opts__15758__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner30274),new cljs.core.Keyword(null,"owner","owner",-392611939),owner30274,new cljs.core.Keyword(null,"data","data",-232669377),data__15757__auto__], null));
};
var search_component = function (data__15757__auto__,owner30274,var_args){
var p__30289 = null;if (arguments.length > 2) {
  p__30289 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return search_component__delegate.call(this,data__15757__auto__,owner30274,p__30289);};
search_component.cljs$lang$maxFixedArity = 2;
search_component.cljs$lang$applyTo = (function (arglist__30298){
var data__15757__auto__ = cljs.core.first(arglist__30298);
arglist__30298 = cljs.core.next(arglist__30298);
var owner30274 = cljs.core.first(arglist__30298);
var p__30289 = cljs.core.rest(arglist__30298);
return search_component__delegate(data__15757__auto__,owner30274,p__30289);
});
search_component.cljs$core$IFn$_invoke$arity$variadic = search_component__delegate;
return search_component;
})()
;})(component_fnk__15756__auto___30292))
;
clustermap.components.search.__GT_search_component = (function() {
var __GT_search_component = null;
var __GT_search_component__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.search.search_component,cursor__15725__auto__);
});
var __GT_search_component__2 = (function (cursor__15725__auto__,m30276){return om.core.build.call(null,clustermap.components.search.search_component,cursor__15725__auto__,m30276);
});
__GT_search_component = function(cursor__15725__auto__,m30276){
switch(arguments.length){
case 1:
return __GT_search_component__1.call(this,cursor__15725__auto__);
case 2:
return __GT_search_component__2.call(this,cursor__15725__auto__,m30276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_search_component.cljs$core$IFn$_invoke$arity$1 = __GT_search_component__1;
__GT_search_component.cljs$core$IFn$_invoke$arity$2 = __GT_search_component__2;
return __GT_search_component;
})()
;

//# sourceMappingURL=search.js.map