// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__20483 = p1__6064__6065__auto__;if(G__20483)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__20483.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__20483.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20483);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20483);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__20484_SHARP_){return (cljs.core.val.call(null,p1__20484_SHARP_) > (1));
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
var vec__20486 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__20486,(0),null);var v = cljs.core.nth.call(null,vec__20486,(1),null);var p = vec__20486;if(cljs.core.truth_(p))
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
var ufv___20492 = schema.utils.use_fn_validation;var output_schema20487_20493 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema20488_20494 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker20489_20495 = schema.core.checker.call(null,input_schema20488_20494);var output_checker20490_20496 = schema.core.checker.call(null,output_schema20487_20493);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___20492,output_schema20487_20493,input_schema20488_20494,input_checker20489_20495,output_checker20490_20496){
return (function unwrap_schema_form_key(G__20491){var validate__6034__auto__ = ufv___20492.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20497 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20491], null);var temp__4126__auto___20498 = input_checker20489_20495.call(null,args__6035__auto___20497);if(cljs.core.truth_(temp__4126__auto___20498))
{var error__6036__auto___20499 = temp__4126__auto___20498;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___20499)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20499,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20497,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20488_20494,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__20491;while(true){
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
{var temp__4126__auto___20500 = output_checker20490_20496.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20500))
{var error__6036__auto___20501 = temp__4126__auto___20500;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___20501)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20501,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20487_20493,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20492,output_schema20487_20493,input_schema20488_20494,input_checker20489_20495,output_checker20490_20496))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema20487_20493,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20488_20494], null)));
var ufv___20507 = schema.utils.use_fn_validation;var output_schema20502_20508 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema20503_20509 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20504_20510 = schema.core.checker.call(null,input_schema20503_20509);var output_checker20505_20511 = schema.core.checker.call(null,output_schema20502_20508);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___20507,output_schema20502_20508,input_schema20503_20509,input_checker20504_20510,output_checker20505_20511){
return (function explicit_schema_key_map(G__20506){var validate__6034__auto__ = ufv___20507.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20512 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20506], null);var temp__4126__auto___20513 = input_checker20504_20510.call(null,args__6035__auto___20512);if(cljs.core.truth_(temp__4126__auto___20513))
{var error__6036__auto___20514 = temp__4126__auto___20513;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___20514)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20514,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20512,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20503_20509,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20506;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20515 = output_checker20505_20511.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20515))
{var error__6036__auto___20516 = temp__4126__auto___20515;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___20516)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20516,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20502_20508,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20507,output_schema20502_20508,input_schema20503_20509,input_checker20504_20510,output_checker20505_20511))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema20502_20508,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20503_20509], null)));
var ufv___20522 = schema.utils.use_fn_validation;var output_schema20517_20523 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema20518_20524 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20519_20525 = schema.core.checker.call(null,input_schema20518_20524);var output_checker20520_20526 = schema.core.checker.call(null,output_schema20517_20523);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___20522,output_schema20517_20523,input_schema20518_20524,input_checker20519_20525,output_checker20520_20526){
return (function split_schema_keys(G__20521){var validate__6034__auto__ = ufv___20522.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20527 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20521], null);var temp__4126__auto___20528 = input_checker20519_20525.call(null,args__6035__auto___20527);if(cljs.core.truth_(temp__4126__auto___20528))
{var error__6036__auto___20529 = temp__4126__auto___20528;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___20529)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20529,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20527,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20518_20524,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20521;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20530 = output_checker20520_20526.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20530))
{var error__6036__auto___20531 = temp__4126__auto___20530;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___20531)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20531,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20517_20523,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20522,output_schema20517_20523,input_schema20518_20524,input_checker20519_20525,output_checker20520_20526))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema20517_20523,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20518_20524], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__20535){var vec__20536 = p__20535;var k = cljs.core.nth.call(null,vec__20536,(0),null);var v = cljs.core.nth.call(null,vec__20536,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__20537 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__20537,(0),null);var ov = cljs.core.nth.call(null,vec__20537,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__20538){
var key_project = cljs.core.first(arglist__20538);
arglist__20538 = cljs.core.next(arglist__20538);
var key_combine = cljs.core.first(arglist__20538);
arglist__20538 = cljs.core.next(arglist__20538);
var val_combine = cljs.core.first(arglist__20538);
var maps = cljs.core.rest(arglist__20538);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___20546 = schema.utils.use_fn_validation;var output_schema20540_20547 = plumbing.fnk.schema.InputSchema;var input_schema20541_20548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker20542_20549 = schema.core.checker.call(null,input_schema20541_20548);var output_checker20543_20550 = schema.core.checker.call(null,output_schema20540_20547);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___20546,output_schema20540_20547,input_schema20541_20548,input_checker20542_20549,output_checker20543_20550){
return (function union_input_schemata(G__20544,G__20545){var validate__6034__auto__ = ufv___20546.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20544,G__20545], null);var temp__4126__auto___20552 = input_checker20542_20549.call(null,args__6035__auto___20551);if(cljs.core.truth_(temp__4126__auto___20552))
{var error__6036__auto___20553 = temp__4126__auto___20552;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___20553)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20553,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20551,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20541_20548,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__20544;var i2 = G__20545;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___20546,output_schema20540_20547,input_schema20541_20548,input_checker20542_20549,output_checker20543_20550){
return (function (p1__20539_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__20539_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__20539_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___20546,output_schema20540_20547,input_schema20541_20548,input_checker20542_20549,output_checker20543_20550))
,((function (validate__6034__auto__,ufv___20546,output_schema20540_20547,input_schema20541_20548,input_checker20542_20549,output_checker20543_20550){
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
});})(validate__6034__auto__,ufv___20546,output_schema20540_20547,input_schema20541_20548,input_checker20542_20549,output_checker20543_20550))
,((function (validate__6034__auto__,ufv___20546,output_schema20540_20547,input_schema20541_20548,input_checker20542_20549,output_checker20543_20550){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___20546,output_schema20540_20547,input_schema20541_20548,input_checker20542_20549,output_checker20543_20550))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20554 = output_checker20543_20550.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20554))
{var error__6036__auto___20555 = temp__4126__auto___20554;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___20555)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20555,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20540_20547,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20546,output_schema20540_20547,input_schema20541_20548,input_checker20542_20549,output_checker20543_20550))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema20540_20547,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20541_20548], null)));
var ufv___20561 = schema.utils.use_fn_validation;var output_schema20556_20562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema20557_20563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker20558_20564 = schema.core.checker.call(null,input_schema20557_20563);var output_checker20559_20565 = schema.core.checker.call(null,output_schema20556_20562);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___20561,output_schema20556_20562,input_schema20557_20563,input_checker20558_20564,output_checker20559_20565){
return (function required_toplevel_keys(G__20560){var validate__6034__auto__ = ufv___20561.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20560], null);var temp__4126__auto___20567 = input_checker20558_20564.call(null,args__6035__auto___20566);if(cljs.core.truth_(temp__4126__auto___20567))
{var error__6036__auto___20568 = temp__4126__auto___20567;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___20568)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20568,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20566,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20557_20563,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__20560;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___20561,output_schema20556_20562,input_schema20557_20563,input_checker20558_20564,output_checker20559_20565){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___20561,output_schema20556_20562,input_schema20557_20563,input_checker20558_20564,output_checker20559_20565))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20569 = output_checker20559_20565.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20569))
{var error__6036__auto___20570 = temp__4126__auto___20569;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___20570)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20570,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20556_20562,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20561,output_schema20556_20562,input_schema20557_20563,input_checker20558_20564,output_checker20559_20565))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema20556_20562,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20557_20563], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__20579(s__20580){return (new cljs.core.LazySeq(null,(function (){var s__20580__$1 = s__20580;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20580__$1);if(temp__4126__auto__)
{var s__20580__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20580__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20580__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20582 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20581 = (0);while(true){
if((i__20581 < size__4376__auto__))
{var vec__20585 = cljs.core._nth.call(null,c__4375__auto__,i__20581);var k = cljs.core.nth.call(null,vec__20585,(0),null);var v = cljs.core.nth.call(null,vec__20585,(1),null);cljs.core.chunk_append.call(null,b__20582,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__20587 = (i__20581 + (1));
i__20581 = G__20587;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20582),iter__20579.call(null,cljs.core.chunk_rest.call(null,s__20580__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20582),null);
}
} else
{var vec__20586 = cljs.core.first.call(null,s__20580__$2);var k = cljs.core.nth.call(null,vec__20586,(0),null);var v = cljs.core.nth.call(null,vec__20586,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__20579.call(null,cljs.core.rest.call(null,s__20580__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__20596(s__20597){return (new cljs.core.LazySeq(null,(function (){var s__20597__$1 = s__20597;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20597__$1);if(temp__4126__auto__)
{var s__20597__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20597__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20597__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20599 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20598 = (0);while(true){
if((i__20598 < size__4376__auto__))
{var vec__20602 = cljs.core._nth.call(null,c__4375__auto__,i__20598);var k = cljs.core.nth.call(null,vec__20602,(0),null);var v = cljs.core.nth.call(null,vec__20602,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__20599,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__20604 = (i__20598 + (1));
i__20598 = G__20604;
continue;
}
} else
{{
var G__20605 = (i__20598 + (1));
i__20598 = G__20605;
continue;
}
}
} else
{{
var G__20606 = (i__20598 + (1));
i__20598 = G__20606;
continue;
}
}
} else
{{
var G__20607 = (i__20598 + (1));
i__20598 = G__20607;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20599),iter__20596.call(null,cljs.core.chunk_rest.call(null,s__20597__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20599),null);
}
} else
{var vec__20603 = cljs.core.first.call(null,s__20597__$2);var k = cljs.core.nth.call(null,vec__20603,(0),null);var v = cljs.core.nth.call(null,vec__20603,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__20596.call(null,cljs.core.rest.call(null,s__20597__$2)));
} else
{{
var G__20608 = cljs.core.rest.call(null,s__20597__$2);
s__20597__$1 = G__20608;
continue;
}
}
} else
{{
var G__20609 = cljs.core.rest.call(null,s__20597__$2);
s__20597__$1 = G__20609;
continue;
}
}
} else
{{
var G__20610 = cljs.core.rest.call(null,s__20597__$2);
s__20597__$1 = G__20610;
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
var ufv___20633 = schema.utils.use_fn_validation;var output_schema20611_20634 = schema.core.Any;var input_schema20612_20635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20613_20636 = schema.core.checker.call(null,input_schema20612_20635);var output_checker20614_20637 = schema.core.checker.call(null,output_schema20611_20634);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___20633,output_schema20611_20634,input_schema20612_20635,input_checker20613_20636,output_checker20614_20637){
return (function compose_schemata(G__20615,G__20616){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___20638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20615,G__20616], null);var temp__4126__auto___20639 = input_checker20613_20636.call(null,args__6035__auto___20638);if(cljs.core.truth_(temp__4126__auto___20639))
{var error__6036__auto___20640 = temp__4126__auto___20639;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___20640)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20640,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20638,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20612_20635,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20627 = G__20615;var vec__20629 = G__20627;var i2 = cljs.core.nth.call(null,vec__20629,(0),null);var o2 = cljs.core.nth.call(null,vec__20629,(1),null);var G__20628 = G__20616;var vec__20630 = G__20628;var i1 = cljs.core.nth.call(null,vec__20630,(0),null);var o1 = cljs.core.nth.call(null,vec__20630,(1),null);var G__20627__$1 = G__20627;var G__20628__$1 = G__20628;while(true){
var vec__20631 = G__20627__$1;var i2__$1 = cljs.core.nth.call(null,vec__20631,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20631,(1),null);var vec__20632 = G__20628__$1;var i1__$1 = cljs.core.nth.call(null,vec__20632,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20632,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___20641 = output_checker20614_20637.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20641))
{var error__6036__auto___20642 = temp__4126__auto___20641;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___20642)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20642,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20611_20634,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20633,output_schema20611_20634,input_schema20612_20635,input_checker20613_20636,output_checker20614_20637))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema20611_20634,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20612_20635], null)));
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
var ufv___20721 = schema.utils.use_fn_validation;var output_schema20643_20722 = schema.core.Any;var input_schema20644_20723 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker20645_20724 = schema.core.checker.call(null,input_schema20644_20723);var output_checker20646_20725 = schema.core.checker.call(null,output_schema20643_20722);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725){
return (function split_schema(G__20647,G__20648){var validate__6034__auto__ = ufv___20721.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20726 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20647,G__20648], null);var temp__4126__auto___20727 = input_checker20645_20724.call(null,args__6035__auto___20726);if(cljs.core.truth_(temp__4126__auto___20727))
{var error__6036__auto___20728 = temp__4126__auto___20727;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___20728)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20728,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20726,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20644_20723,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20647;var ks = G__20648;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725){
return (function iter__20685(s__20686){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725){
return (function (){var s__20686__$1 = s__20686;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20686__$1);if(temp__4126__auto__)
{var s__20686__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20686__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20686__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20688 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20687 = (0);while(true){
if((i__20687 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__20687);cljs.core.chunk_append.call(null,b__20688,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__20687,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20688,s__20686__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725){
return (function iter__20705(s__20706){return (new cljs.core.LazySeq(null,((function (i__20687,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20688,s__20686__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725){
return (function (){var s__20706__$1 = s__20706;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20706__$1);if(temp__4126__auto____$1)
{var s__20706__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20706__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20706__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20708 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20707 = (0);while(true){
if((i__20707 < size__4376__auto____$1))
{var vec__20711 = cljs.core._nth.call(null,c__4375__auto____$1,i__20707);var k = cljs.core.nth.call(null,vec__20711,(0),null);var v = cljs.core.nth.call(null,vec__20711,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20708,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20729 = (i__20707 + (1));
i__20707 = G__20729;
continue;
}
} else
{{
var G__20730 = (i__20707 + (1));
i__20707 = G__20730;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20708),iter__20705.call(null,cljs.core.chunk_rest.call(null,s__20706__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20708),null);
}
} else
{var vec__20712 = cljs.core.first.call(null,s__20706__$2);var k = cljs.core.nth.call(null,vec__20712,(0),null);var v = cljs.core.nth.call(null,vec__20712,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20705.call(null,cljs.core.rest.call(null,s__20706__$2)));
} else
{{
var G__20731 = cljs.core.rest.call(null,s__20706__$2);
s__20706__$1 = G__20731;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__20687,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20688,s__20686__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725))
,null,null));
});})(i__20687,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20688,s__20686__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__20732 = (i__20687 + (1));
i__20687 = G__20732;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20688),iter__20685.call(null,cljs.core.chunk_rest.call(null,s__20686__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20688),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__20686__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__20686__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725){
return (function iter__20713(s__20714){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__20686__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725){
return (function (){var s__20714__$1 = s__20714;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20714__$1);if(temp__4126__auto____$1)
{var s__20714__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20714__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20714__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20716 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20715 = (0);while(true){
if((i__20715 < size__4376__auto__))
{var vec__20719 = cljs.core._nth.call(null,c__4375__auto__,i__20715);var k = cljs.core.nth.call(null,vec__20719,(0),null);var v = cljs.core.nth.call(null,vec__20719,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20716,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20733 = (i__20715 + (1));
i__20715 = G__20733;
continue;
}
} else
{{
var G__20734 = (i__20715 + (1));
i__20715 = G__20734;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20716),iter__20713.call(null,cljs.core.chunk_rest.call(null,s__20714__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20716),null);
}
} else
{var vec__20720 = cljs.core.first.call(null,s__20714__$2);var k = cljs.core.nth.call(null,vec__20720,(0),null);var v = cljs.core.nth.call(null,vec__20720,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20713.call(null,cljs.core.rest.call(null,s__20714__$2)));
} else
{{
var G__20735 = cljs.core.rest.call(null,s__20714__$2);
s__20714__$1 = G__20735;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__20686__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725))
,null,null));
});})(in_QMARK_,s__20686__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725))
;return iter__4377__auto__.call(null,s);
})()),iter__20685.call(null,cljs.core.rest.call(null,s__20686__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20736 = output_checker20646_20725.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20736))
{var error__6036__auto___20737 = temp__4126__auto___20736;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___20737)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20737,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20643_20722,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20721,output_schema20643_20722,input_schema20644_20723,input_checker20645_20724,output_checker20646_20725))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema20643_20722,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20644_20723], null)));
var ufv___20768 = schema.utils.use_fn_validation;var output_schema20738_20769 = plumbing.fnk.schema.GraphIOSchemata;var input_schema20739_20770 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20740_20771 = schema.core.checker.call(null,input_schema20739_20770);var output_checker20741_20772 = schema.core.checker.call(null,output_schema20738_20769);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___20768,output_schema20738_20769,input_schema20739_20770,input_checker20740_20771,output_checker20741_20772){
return (function sequence_schemata(G__20742,G__20743){var validate__6034__auto__ = ufv___20768.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20773 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20742,G__20743], null);var temp__4126__auto___20774 = input_checker20740_20771.call(null,args__6035__auto___20773);if(cljs.core.truth_(temp__4126__auto___20774))
{var error__6036__auto___20775 = temp__4126__auto___20774;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___20775)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20775,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20773,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20739_20770,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20759 = G__20742;var vec__20761 = G__20759;var i1 = cljs.core.nth.call(null,vec__20761,(0),null);var o1 = cljs.core.nth.call(null,vec__20761,(1),null);var G__20760 = G__20743;var vec__20762 = G__20760;var k = cljs.core.nth.call(null,vec__20762,(0),null);var vec__20763 = cljs.core.nth.call(null,vec__20762,(1),null);var i2 = cljs.core.nth.call(null,vec__20763,(0),null);var o2 = cljs.core.nth.call(null,vec__20763,(1),null);var G__20759__$1 = G__20759;var G__20760__$1 = G__20760;while(true){
var vec__20764 = G__20759__$1;var i1__$1 = cljs.core.nth.call(null,vec__20764,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20764,(1),null);var vec__20765 = G__20760__$1;var k__$1 = cljs.core.nth.call(null,vec__20765,(0),null);var vec__20766 = cljs.core.nth.call(null,vec__20765,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__20766,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20766,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__20767 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__20767,(0),null);var unused = cljs.core.nth.call(null,vec__20767,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20776 = output_checker20741_20772.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20776))
{var error__6036__auto___20777 = temp__4126__auto___20776;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___20777)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20777,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20738_20769,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20768,output_schema20738_20769,input_schema20739_20770,input_checker20740_20771,output_checker20741_20772))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema20738_20769,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20739_20770], null)));
