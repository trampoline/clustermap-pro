// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__19490 = p1__6064__6065__auto__;if(G__19490)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__19490.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__19490.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__19490);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__19490);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__19491_SHARP_){return (cljs.core.val.call(null,p1__19491_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__19493 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__19493,(0),null);var v = cljs.core.nth.call(null,vec__19493,(1),null);var p = vec__19493;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___19499 = schema.utils.use_fn_validation;var output_schema19494_19500 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema19495_19501 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker19496_19502 = schema.core.checker.call(null,input_schema19495_19501);var output_checker19497_19503 = schema.core.checker.call(null,output_schema19494_19500);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___19499,output_schema19494_19500,input_schema19495_19501,input_checker19496_19502,output_checker19497_19503){
return (function unwrap_schema_form_key(G__19498){var validate__6034__auto__ = ufv___19499.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19504 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19498], null);var temp__4126__auto___19505 = input_checker19496_19502.call(null,args__6035__auto___19504);if(cljs.core.truth_(temp__4126__auto___19505))
{var error__6036__auto___19506 = temp__4126__auto___19505;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___19506)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19506,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19504,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19495_19501,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__19498;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19507 = output_checker19497_19503.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19507))
{var error__6036__auto___19508 = temp__4126__auto___19507;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___19508)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19508,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19494_19500,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19499,output_schema19494_19500,input_schema19495_19501,input_checker19496_19502,output_checker19497_19503))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema19494_19500,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19495_19501], null)));
var ufv___19514 = schema.utils.use_fn_validation;var output_schema19509_19515 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema19510_19516 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker19511_19517 = schema.core.checker.call(null,input_schema19510_19516);var output_checker19512_19518 = schema.core.checker.call(null,output_schema19509_19515);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___19514,output_schema19509_19515,input_schema19510_19516,input_checker19511_19517,output_checker19512_19518){
return (function explicit_schema_key_map(G__19513){var validate__6034__auto__ = ufv___19514.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19519 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19513], null);var temp__4126__auto___19520 = input_checker19511_19517.call(null,args__6035__auto___19519);if(cljs.core.truth_(temp__4126__auto___19520))
{var error__6036__auto___19521 = temp__4126__auto___19520;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___19521)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19521,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19519,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19510_19516,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__19513;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19522 = output_checker19512_19518.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19522))
{var error__6036__auto___19523 = temp__4126__auto___19522;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___19523)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19523,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19509_19515,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19514,output_schema19509_19515,input_schema19510_19516,input_checker19511_19517,output_checker19512_19518))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema19509_19515,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19510_19516], null)));
var ufv___19529 = schema.utils.use_fn_validation;var output_schema19524_19530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema19525_19531 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker19526_19532 = schema.core.checker.call(null,input_schema19525_19531);var output_checker19527_19533 = schema.core.checker.call(null,output_schema19524_19530);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___19529,output_schema19524_19530,input_schema19525_19531,input_checker19526_19532,output_checker19527_19533){
return (function split_schema_keys(G__19528){var validate__6034__auto__ = ufv___19529.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19528], null);var temp__4126__auto___19535 = input_checker19526_19532.call(null,args__6035__auto___19534);if(cljs.core.truth_(temp__4126__auto___19535))
{var error__6036__auto___19536 = temp__4126__auto___19535;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___19536)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19536,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19534,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19525_19531,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__19528;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19537 = output_checker19527_19533.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19537))
{var error__6036__auto___19538 = temp__4126__auto___19537;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___19538)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19538,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19524_19530,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19529,output_schema19524_19530,input_schema19525_19531,input_checker19526_19532,output_checker19527_19533))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema19524_19530,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19525_19531], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__19542){var vec__19543 = p__19542;var k = cljs.core.nth.call(null,vec__19543,(0),null);var v = cljs.core.nth.call(null,vec__19543,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__19544 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__19544,(0),null);var ov = cljs.core.nth.call(null,vec__19544,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__19545){
var key_project = cljs.core.first(arglist__19545);
arglist__19545 = cljs.core.next(arglist__19545);
var key_combine = cljs.core.first(arglist__19545);
arglist__19545 = cljs.core.next(arglist__19545);
var val_combine = cljs.core.first(arglist__19545);
var maps = cljs.core.rest(arglist__19545);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___19553 = schema.utils.use_fn_validation;var output_schema19547_19554 = plumbing.fnk.schema.InputSchema;var input_schema19548_19555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker19549_19556 = schema.core.checker.call(null,input_schema19548_19555);var output_checker19550_19557 = schema.core.checker.call(null,output_schema19547_19554);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___19553,output_schema19547_19554,input_schema19548_19555,input_checker19549_19556,output_checker19550_19557){
return (function union_input_schemata(G__19551,G__19552){var validate__6034__auto__ = ufv___19553.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19558 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19551,G__19552], null);var temp__4126__auto___19559 = input_checker19549_19556.call(null,args__6035__auto___19558);if(cljs.core.truth_(temp__4126__auto___19559))
{var error__6036__auto___19560 = temp__4126__auto___19559;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___19560)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19560,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19558,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19548_19555,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__19551;var i2 = G__19552;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___19553,output_schema19547_19554,input_schema19548_19555,input_checker19549_19556,output_checker19550_19557){
return (function (p1__19546_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__19546_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__19546_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___19553,output_schema19547_19554,input_schema19548_19555,input_checker19549_19556,output_checker19550_19557))
,((function (validate__6034__auto__,ufv___19553,output_schema19547_19554,input_schema19548_19555,input_checker19549_19556,output_checker19550_19557){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__6034__auto__,ufv___19553,output_schema19547_19554,input_schema19548_19555,input_checker19549_19556,output_checker19550_19557))
,((function (validate__6034__auto__,ufv___19553,output_schema19547_19554,input_schema19548_19555,input_checker19549_19556,output_checker19550_19557){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___19553,output_schema19547_19554,input_schema19548_19555,input_checker19549_19556,output_checker19550_19557))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19561 = output_checker19550_19557.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19561))
{var error__6036__auto___19562 = temp__4126__auto___19561;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___19562)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19562,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19547_19554,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19553,output_schema19547_19554,input_schema19548_19555,input_checker19549_19556,output_checker19550_19557))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema19547_19554,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19548_19555], null)));
var ufv___19568 = schema.utils.use_fn_validation;var output_schema19563_19569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema19564_19570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker19565_19571 = schema.core.checker.call(null,input_schema19564_19570);var output_checker19566_19572 = schema.core.checker.call(null,output_schema19563_19569);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___19568,output_schema19563_19569,input_schema19564_19570,input_checker19565_19571,output_checker19566_19572){
return (function required_toplevel_keys(G__19567){var validate__6034__auto__ = ufv___19568.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19567], null);var temp__4126__auto___19574 = input_checker19565_19571.call(null,args__6035__auto___19573);if(cljs.core.truth_(temp__4126__auto___19574))
{var error__6036__auto___19575 = temp__4126__auto___19574;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___19575)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19575,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19573,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19564_19570,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__19567;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___19568,output_schema19563_19569,input_schema19564_19570,input_checker19565_19571,output_checker19566_19572){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___19568,output_schema19563_19569,input_schema19564_19570,input_checker19565_19571,output_checker19566_19572))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19576 = output_checker19566_19572.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19576))
{var error__6036__auto___19577 = temp__4126__auto___19576;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___19577)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19577,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19563_19569,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19568,output_schema19563_19569,input_schema19564_19570,input_checker19565_19571,output_checker19566_19572))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema19563_19569,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19564_19570], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__19586(s__19587){return (new cljs.core.LazySeq(null,(function (){var s__19587__$1 = s__19587;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19587__$1);if(temp__4126__auto__)
{var s__19587__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19587__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19587__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19589 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19588 = (0);while(true){
if((i__19588 < size__4376__auto__))
{var vec__19592 = cljs.core._nth.call(null,c__4375__auto__,i__19588);var k = cljs.core.nth.call(null,vec__19592,(0),null);var v = cljs.core.nth.call(null,vec__19592,(1),null);cljs.core.chunk_append.call(null,b__19589,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__19594 = (i__19588 + (1));
i__19588 = G__19594;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19589),iter__19586.call(null,cljs.core.chunk_rest.call(null,s__19587__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19589),null);
}
} else
{var vec__19593 = cljs.core.first.call(null,s__19587__$2);var k = cljs.core.nth.call(null,vec__19593,(0),null);var v = cljs.core.nth.call(null,vec__19593,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__19586.call(null,cljs.core.rest.call(null,s__19587__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__19603(s__19604){return (new cljs.core.LazySeq(null,(function (){var s__19604__$1 = s__19604;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19604__$1);if(temp__4126__auto__)
{var s__19604__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19604__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19604__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19606 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19605 = (0);while(true){
if((i__19605 < size__4376__auto__))
{var vec__19609 = cljs.core._nth.call(null,c__4375__auto__,i__19605);var k = cljs.core.nth.call(null,vec__19609,(0),null);var v = cljs.core.nth.call(null,vec__19609,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__19606,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__19611 = (i__19605 + (1));
i__19605 = G__19611;
continue;
}
} else
{{
var G__19612 = (i__19605 + (1));
i__19605 = G__19612;
continue;
}
}
} else
{{
var G__19613 = (i__19605 + (1));
i__19605 = G__19613;
continue;
}
}
} else
{{
var G__19614 = (i__19605 + (1));
i__19605 = G__19614;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19606),iter__19603.call(null,cljs.core.chunk_rest.call(null,s__19604__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19606),null);
}
} else
{var vec__19610 = cljs.core.first.call(null,s__19604__$2);var k = cljs.core.nth.call(null,vec__19610,(0),null);var v = cljs.core.nth.call(null,vec__19610,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__19603.call(null,cljs.core.rest.call(null,s__19604__$2)));
} else
{{
var G__19615 = cljs.core.rest.call(null,s__19604__$2);
s__19604__$1 = G__19615;
continue;
}
}
} else
{{
var G__19616 = cljs.core.rest.call(null,s__19604__$2);
s__19604__$1 = G__19616;
continue;
}
}
} else
{{
var G__19617 = cljs.core.rest.call(null,s__19604__$2);
s__19604__$1 = G__19617;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___19640 = schema.utils.use_fn_validation;var output_schema19618_19641 = schema.core.Any;var input_schema19619_19642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker19620_19643 = schema.core.checker.call(null,input_schema19619_19642);var output_checker19621_19644 = schema.core.checker.call(null,output_schema19618_19641);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___19640,output_schema19618_19641,input_schema19619_19642,input_checker19620_19643,output_checker19621_19644){
return (function compose_schemata(G__19622,G__19623){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___19645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19622,G__19623], null);var temp__4126__auto___19646 = input_checker19620_19643.call(null,args__6035__auto___19645);if(cljs.core.truth_(temp__4126__auto___19646))
{var error__6036__auto___19647 = temp__4126__auto___19646;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___19647)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19647,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19645,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19619_19642,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__19634 = G__19622;var vec__19636 = G__19634;var i2 = cljs.core.nth.call(null,vec__19636,(0),null);var o2 = cljs.core.nth.call(null,vec__19636,(1),null);var G__19635 = G__19623;var vec__19637 = G__19635;var i1 = cljs.core.nth.call(null,vec__19637,(0),null);var o1 = cljs.core.nth.call(null,vec__19637,(1),null);var G__19634__$1 = G__19634;var G__19635__$1 = G__19635;while(true){
var vec__19638 = G__19634__$1;var i2__$1 = cljs.core.nth.call(null,vec__19638,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__19638,(1),null);var vec__19639 = G__19635__$1;var i1__$1 = cljs.core.nth.call(null,vec__19639,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__19639,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___19648 = output_checker19621_19644.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19648))
{var error__6036__auto___19649 = temp__4126__auto___19648;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___19649)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19649,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19618_19641,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19640,output_schema19618_19641,input_schema19619_19642,input_checker19620_19643,output_checker19621_19644))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema19618_19641,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19619_19642], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___19728 = schema.utils.use_fn_validation;var output_schema19650_19729 = schema.core.Any;var input_schema19651_19730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker19652_19731 = schema.core.checker.call(null,input_schema19651_19730);var output_checker19653_19732 = schema.core.checker.call(null,output_schema19650_19729);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732){
return (function split_schema(G__19654,G__19655){var validate__6034__auto__ = ufv___19728.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19733 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19654,G__19655], null);var temp__4126__auto___19734 = input_checker19652_19731.call(null,args__6035__auto___19733);if(cljs.core.truth_(temp__4126__auto___19734))
{var error__6036__auto___19735 = temp__4126__auto___19734;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___19735)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19735,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19733,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19651_19730,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__19654;var ks = G__19655;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732){
return (function iter__19692(s__19693){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732){
return (function (){var s__19693__$1 = s__19693;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19693__$1);if(temp__4126__auto__)
{var s__19693__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19693__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19693__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19695 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19694 = (0);while(true){
if((i__19694 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__19694);cljs.core.chunk_append.call(null,b__19695,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__19694,in_QMARK_,c__4375__auto__,size__4376__auto__,b__19695,s__19693__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732){
return (function iter__19712(s__19713){return (new cljs.core.LazySeq(null,((function (i__19694,in_QMARK_,c__4375__auto__,size__4376__auto__,b__19695,s__19693__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732){
return (function (){var s__19713__$1 = s__19713;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19713__$1);if(temp__4126__auto____$1)
{var s__19713__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19713__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__19713__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__19715 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__19714 = (0);while(true){
if((i__19714 < size__4376__auto____$1))
{var vec__19718 = cljs.core._nth.call(null,c__4375__auto____$1,i__19714);var k = cljs.core.nth.call(null,vec__19718,(0),null);var v = cljs.core.nth.call(null,vec__19718,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__19715,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19736 = (i__19714 + (1));
i__19714 = G__19736;
continue;
}
} else
{{
var G__19737 = (i__19714 + (1));
i__19714 = G__19737;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19715),iter__19712.call(null,cljs.core.chunk_rest.call(null,s__19713__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19715),null);
}
} else
{var vec__19719 = cljs.core.first.call(null,s__19713__$2);var k = cljs.core.nth.call(null,vec__19719,(0),null);var v = cljs.core.nth.call(null,vec__19719,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19712.call(null,cljs.core.rest.call(null,s__19713__$2)));
} else
{{
var G__19738 = cljs.core.rest.call(null,s__19713__$2);
s__19713__$1 = G__19738;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__19694,in_QMARK_,c__4375__auto__,size__4376__auto__,b__19695,s__19693__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732))
,null,null));
});})(i__19694,in_QMARK_,c__4375__auto__,size__4376__auto__,b__19695,s__19693__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__19739 = (i__19694 + (1));
i__19694 = G__19739;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19695),iter__19692.call(null,cljs.core.chunk_rest.call(null,s__19693__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19695),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__19693__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__19693__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732){
return (function iter__19720(s__19721){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__19693__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732){
return (function (){var s__19721__$1 = s__19721;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19721__$1);if(temp__4126__auto____$1)
{var s__19721__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19721__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19721__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19723 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19722 = (0);while(true){
if((i__19722 < size__4376__auto__))
{var vec__19726 = cljs.core._nth.call(null,c__4375__auto__,i__19722);var k = cljs.core.nth.call(null,vec__19726,(0),null);var v = cljs.core.nth.call(null,vec__19726,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__19723,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19740 = (i__19722 + (1));
i__19722 = G__19740;
continue;
}
} else
{{
var G__19741 = (i__19722 + (1));
i__19722 = G__19741;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19723),iter__19720.call(null,cljs.core.chunk_rest.call(null,s__19721__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19723),null);
}
} else
{var vec__19727 = cljs.core.first.call(null,s__19721__$2);var k = cljs.core.nth.call(null,vec__19727,(0),null);var v = cljs.core.nth.call(null,vec__19727,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19720.call(null,cljs.core.rest.call(null,s__19721__$2)));
} else
{{
var G__19742 = cljs.core.rest.call(null,s__19721__$2);
s__19721__$1 = G__19742;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__19693__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732))
,null,null));
});})(in_QMARK_,s__19693__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732))
;return iter__4377__auto__.call(null,s);
})()),iter__19692.call(null,cljs.core.rest.call(null,s__19693__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19743 = output_checker19653_19732.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19743))
{var error__6036__auto___19744 = temp__4126__auto___19743;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___19744)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19744,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19650_19729,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19728,output_schema19650_19729,input_schema19651_19730,input_checker19652_19731,output_checker19653_19732))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema19650_19729,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19651_19730], null)));
var ufv___19775 = schema.utils.use_fn_validation;var output_schema19745_19776 = plumbing.fnk.schema.GraphIOSchemata;var input_schema19746_19777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker19747_19778 = schema.core.checker.call(null,input_schema19746_19777);var output_checker19748_19779 = schema.core.checker.call(null,output_schema19745_19776);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___19775,output_schema19745_19776,input_schema19746_19777,input_checker19747_19778,output_checker19748_19779){
return (function sequence_schemata(G__19749,G__19750){var validate__6034__auto__ = ufv___19775.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19780 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19749,G__19750], null);var temp__4126__auto___19781 = input_checker19747_19778.call(null,args__6035__auto___19780);if(cljs.core.truth_(temp__4126__auto___19781))
{var error__6036__auto___19782 = temp__4126__auto___19781;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___19782)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19782,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19780,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19746_19777,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__19766 = G__19749;var vec__19768 = G__19766;var i1 = cljs.core.nth.call(null,vec__19768,(0),null);var o1 = cljs.core.nth.call(null,vec__19768,(1),null);var G__19767 = G__19750;var vec__19769 = G__19767;var k = cljs.core.nth.call(null,vec__19769,(0),null);var vec__19770 = cljs.core.nth.call(null,vec__19769,(1),null);var i2 = cljs.core.nth.call(null,vec__19770,(0),null);var o2 = cljs.core.nth.call(null,vec__19770,(1),null);var G__19766__$1 = G__19766;var G__19767__$1 = G__19767;while(true){
var vec__19771 = G__19766__$1;var i1__$1 = cljs.core.nth.call(null,vec__19771,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__19771,(1),null);var vec__19772 = G__19767__$1;var k__$1 = cljs.core.nth.call(null,vec__19772,(0),null);var vec__19773 = cljs.core.nth.call(null,vec__19772,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__19773,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__19773,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__19774 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__19774,(0),null);var unused = cljs.core.nth.call(null,vec__19774,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19783 = output_checker19748_19779.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19783))
{var error__6036__auto___19784 = temp__4126__auto___19783;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___19784)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19784,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19745_19776,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19775,output_schema19745_19776,input_schema19746_19777,input_checker19747_19778,output_checker19748_19779))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema19745_19776,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19746_19777], null)));
