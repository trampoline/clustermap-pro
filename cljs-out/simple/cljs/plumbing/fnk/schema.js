// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__20435 = p1__6064__6065__auto__;if(G__20435)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__20435.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__20435.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20435);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20435);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__20436_SHARP_){return (cljs.core.val.call(null,p1__20436_SHARP_) > (1));
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
var vec__20438 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__20438,(0),null);var v = cljs.core.nth.call(null,vec__20438,(1),null);var p = vec__20438;if(cljs.core.truth_(p))
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
var ufv___20444 = schema.utils.use_fn_validation;var output_schema20439_20445 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema20440_20446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker20441_20447 = schema.core.checker.call(null,input_schema20440_20446);var output_checker20442_20448 = schema.core.checker.call(null,output_schema20439_20445);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___20444,output_schema20439_20445,input_schema20440_20446,input_checker20441_20447,output_checker20442_20448){
return (function unwrap_schema_form_key(G__20443){var validate__6034__auto__ = ufv___20444.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20443], null);var temp__4126__auto___20450 = input_checker20441_20447.call(null,args__6035__auto___20449);if(cljs.core.truth_(temp__4126__auto___20450))
{var error__6036__auto___20451 = temp__4126__auto___20450;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___20451)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20451,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20449,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20440_20446,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__20443;while(true){
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
{var temp__4126__auto___20452 = output_checker20442_20448.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20452))
{var error__6036__auto___20453 = temp__4126__auto___20452;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___20453)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20453,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20439_20445,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20444,output_schema20439_20445,input_schema20440_20446,input_checker20441_20447,output_checker20442_20448))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema20439_20445,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20440_20446], null)));
var ufv___20459 = schema.utils.use_fn_validation;var output_schema20454_20460 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema20455_20461 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20456_20462 = schema.core.checker.call(null,input_schema20455_20461);var output_checker20457_20463 = schema.core.checker.call(null,output_schema20454_20460);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___20459,output_schema20454_20460,input_schema20455_20461,input_checker20456_20462,output_checker20457_20463){
return (function explicit_schema_key_map(G__20458){var validate__6034__auto__ = ufv___20459.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20458], null);var temp__4126__auto___20465 = input_checker20456_20462.call(null,args__6035__auto___20464);if(cljs.core.truth_(temp__4126__auto___20465))
{var error__6036__auto___20466 = temp__4126__auto___20465;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___20466)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20466,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20464,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20455_20461,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20458;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20467 = output_checker20457_20463.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20467))
{var error__6036__auto___20468 = temp__4126__auto___20467;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___20468)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20468,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20454_20460,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20459,output_schema20454_20460,input_schema20455_20461,input_checker20456_20462,output_checker20457_20463))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema20454_20460,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20455_20461], null)));
var ufv___20474 = schema.utils.use_fn_validation;var output_schema20469_20475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema20470_20476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20471_20477 = schema.core.checker.call(null,input_schema20470_20476);var output_checker20472_20478 = schema.core.checker.call(null,output_schema20469_20475);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___20474,output_schema20469_20475,input_schema20470_20476,input_checker20471_20477,output_checker20472_20478){
return (function split_schema_keys(G__20473){var validate__6034__auto__ = ufv___20474.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20473], null);var temp__4126__auto___20480 = input_checker20471_20477.call(null,args__6035__auto___20479);if(cljs.core.truth_(temp__4126__auto___20480))
{var error__6036__auto___20481 = temp__4126__auto___20480;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___20481)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20481,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20479,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20470_20476,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20473;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20482 = output_checker20472_20478.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20482))
{var error__6036__auto___20483 = temp__4126__auto___20482;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___20483)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20483,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20469_20475,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20474,output_schema20469_20475,input_schema20470_20476,input_checker20471_20477,output_checker20472_20478))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema20469_20475,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20470_20476], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__20487){var vec__20488 = p__20487;var k = cljs.core.nth.call(null,vec__20488,(0),null);var v = cljs.core.nth.call(null,vec__20488,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__20489 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__20489,(0),null);var ov = cljs.core.nth.call(null,vec__20489,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__20490){
var key_project = cljs.core.first(arglist__20490);
arglist__20490 = cljs.core.next(arglist__20490);
var key_combine = cljs.core.first(arglist__20490);
arglist__20490 = cljs.core.next(arglist__20490);
var val_combine = cljs.core.first(arglist__20490);
var maps = cljs.core.rest(arglist__20490);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___20498 = schema.utils.use_fn_validation;var output_schema20492_20499 = plumbing.fnk.schema.InputSchema;var input_schema20493_20500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker20494_20501 = schema.core.checker.call(null,input_schema20493_20500);var output_checker20495_20502 = schema.core.checker.call(null,output_schema20492_20499);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___20498,output_schema20492_20499,input_schema20493_20500,input_checker20494_20501,output_checker20495_20502){
return (function union_input_schemata(G__20496,G__20497){var validate__6034__auto__ = ufv___20498.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20496,G__20497], null);var temp__4126__auto___20504 = input_checker20494_20501.call(null,args__6035__auto___20503);if(cljs.core.truth_(temp__4126__auto___20504))
{var error__6036__auto___20505 = temp__4126__auto___20504;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___20505)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20505,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20503,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20493_20500,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__20496;var i2 = G__20497;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___20498,output_schema20492_20499,input_schema20493_20500,input_checker20494_20501,output_checker20495_20502){
return (function (p1__20491_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__20491_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__20491_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___20498,output_schema20492_20499,input_schema20493_20500,input_checker20494_20501,output_checker20495_20502))
,((function (validate__6034__auto__,ufv___20498,output_schema20492_20499,input_schema20493_20500,input_checker20494_20501,output_checker20495_20502){
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
});})(validate__6034__auto__,ufv___20498,output_schema20492_20499,input_schema20493_20500,input_checker20494_20501,output_checker20495_20502))
,((function (validate__6034__auto__,ufv___20498,output_schema20492_20499,input_schema20493_20500,input_checker20494_20501,output_checker20495_20502){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___20498,output_schema20492_20499,input_schema20493_20500,input_checker20494_20501,output_checker20495_20502))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20506 = output_checker20495_20502.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20506))
{var error__6036__auto___20507 = temp__4126__auto___20506;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___20507)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20507,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20492_20499,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20498,output_schema20492_20499,input_schema20493_20500,input_checker20494_20501,output_checker20495_20502))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema20492_20499,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20493_20500], null)));
var ufv___20513 = schema.utils.use_fn_validation;var output_schema20508_20514 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema20509_20515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker20510_20516 = schema.core.checker.call(null,input_schema20509_20515);var output_checker20511_20517 = schema.core.checker.call(null,output_schema20508_20514);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___20513,output_schema20508_20514,input_schema20509_20515,input_checker20510_20516,output_checker20511_20517){
return (function required_toplevel_keys(G__20512){var validate__6034__auto__ = ufv___20513.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20518 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20512], null);var temp__4126__auto___20519 = input_checker20510_20516.call(null,args__6035__auto___20518);if(cljs.core.truth_(temp__4126__auto___20519))
{var error__6036__auto___20520 = temp__4126__auto___20519;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___20520)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20520,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20518,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20509_20515,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__20512;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___20513,output_schema20508_20514,input_schema20509_20515,input_checker20510_20516,output_checker20511_20517){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___20513,output_schema20508_20514,input_schema20509_20515,input_checker20510_20516,output_checker20511_20517))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20521 = output_checker20511_20517.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20521))
{var error__6036__auto___20522 = temp__4126__auto___20521;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___20522)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20522,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20508_20514,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20513,output_schema20508_20514,input_schema20509_20515,input_checker20510_20516,output_checker20511_20517))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema20508_20514,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20509_20515], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__20531(s__20532){return (new cljs.core.LazySeq(null,(function (){var s__20532__$1 = s__20532;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20532__$1);if(temp__4126__auto__)
{var s__20532__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20532__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20532__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20534 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20533 = (0);while(true){
if((i__20533 < size__4376__auto__))
{var vec__20537 = cljs.core._nth.call(null,c__4375__auto__,i__20533);var k = cljs.core.nth.call(null,vec__20537,(0),null);var v = cljs.core.nth.call(null,vec__20537,(1),null);cljs.core.chunk_append.call(null,b__20534,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__20539 = (i__20533 + (1));
i__20533 = G__20539;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20534),iter__20531.call(null,cljs.core.chunk_rest.call(null,s__20532__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20534),null);
}
} else
{var vec__20538 = cljs.core.first.call(null,s__20532__$2);var k = cljs.core.nth.call(null,vec__20538,(0),null);var v = cljs.core.nth.call(null,vec__20538,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__20531.call(null,cljs.core.rest.call(null,s__20532__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__20548(s__20549){return (new cljs.core.LazySeq(null,(function (){var s__20549__$1 = s__20549;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20549__$1);if(temp__4126__auto__)
{var s__20549__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20549__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20549__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20551 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20550 = (0);while(true){
if((i__20550 < size__4376__auto__))
{var vec__20554 = cljs.core._nth.call(null,c__4375__auto__,i__20550);var k = cljs.core.nth.call(null,vec__20554,(0),null);var v = cljs.core.nth.call(null,vec__20554,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__20551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__20556 = (i__20550 + (1));
i__20550 = G__20556;
continue;
}
} else
{{
var G__20557 = (i__20550 + (1));
i__20550 = G__20557;
continue;
}
}
} else
{{
var G__20558 = (i__20550 + (1));
i__20550 = G__20558;
continue;
}
}
} else
{{
var G__20559 = (i__20550 + (1));
i__20550 = G__20559;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20551),iter__20548.call(null,cljs.core.chunk_rest.call(null,s__20549__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20551),null);
}
} else
{var vec__20555 = cljs.core.first.call(null,s__20549__$2);var k = cljs.core.nth.call(null,vec__20555,(0),null);var v = cljs.core.nth.call(null,vec__20555,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__20548.call(null,cljs.core.rest.call(null,s__20549__$2)));
} else
{{
var G__20560 = cljs.core.rest.call(null,s__20549__$2);
s__20549__$1 = G__20560;
continue;
}
}
} else
{{
var G__20561 = cljs.core.rest.call(null,s__20549__$2);
s__20549__$1 = G__20561;
continue;
}
}
} else
{{
var G__20562 = cljs.core.rest.call(null,s__20549__$2);
s__20549__$1 = G__20562;
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
var ufv___20585 = schema.utils.use_fn_validation;var output_schema20563_20586 = schema.core.Any;var input_schema20564_20587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20565_20588 = schema.core.checker.call(null,input_schema20564_20587);var output_checker20566_20589 = schema.core.checker.call(null,output_schema20563_20586);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___20585,output_schema20563_20586,input_schema20564_20587,input_checker20565_20588,output_checker20566_20589){
return (function compose_schemata(G__20567,G__20568){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___20590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20567,G__20568], null);var temp__4126__auto___20591 = input_checker20565_20588.call(null,args__6035__auto___20590);if(cljs.core.truth_(temp__4126__auto___20591))
{var error__6036__auto___20592 = temp__4126__auto___20591;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___20592)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20592,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20590,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20564_20587,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20579 = G__20567;var vec__20581 = G__20579;var i2 = cljs.core.nth.call(null,vec__20581,(0),null);var o2 = cljs.core.nth.call(null,vec__20581,(1),null);var G__20580 = G__20568;var vec__20582 = G__20580;var i1 = cljs.core.nth.call(null,vec__20582,(0),null);var o1 = cljs.core.nth.call(null,vec__20582,(1),null);var G__20579__$1 = G__20579;var G__20580__$1 = G__20580;while(true){
var vec__20583 = G__20579__$1;var i2__$1 = cljs.core.nth.call(null,vec__20583,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20583,(1),null);var vec__20584 = G__20580__$1;var i1__$1 = cljs.core.nth.call(null,vec__20584,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20584,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___20593 = output_checker20566_20589.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20593))
{var error__6036__auto___20594 = temp__4126__auto___20593;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___20594)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20594,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20563_20586,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20585,output_schema20563_20586,input_schema20564_20587,input_checker20565_20588,output_checker20566_20589))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema20563_20586,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20564_20587], null)));
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
var ufv___20673 = schema.utils.use_fn_validation;var output_schema20595_20674 = schema.core.Any;var input_schema20596_20675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker20597_20676 = schema.core.checker.call(null,input_schema20596_20675);var output_checker20598_20677 = schema.core.checker.call(null,output_schema20595_20674);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677){
return (function split_schema(G__20599,G__20600){var validate__6034__auto__ = ufv___20673.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20599,G__20600], null);var temp__4126__auto___20679 = input_checker20597_20676.call(null,args__6035__auto___20678);if(cljs.core.truth_(temp__4126__auto___20679))
{var error__6036__auto___20680 = temp__4126__auto___20679;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___20680)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20680,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20678,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20596_20675,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20599;var ks = G__20600;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677){
return (function iter__20637(s__20638){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677){
return (function (){var s__20638__$1 = s__20638;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20638__$1);if(temp__4126__auto__)
{var s__20638__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20638__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20638__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20640 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20639 = (0);while(true){
if((i__20639 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__20639);cljs.core.chunk_append.call(null,b__20640,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__20639,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20640,s__20638__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677){
return (function iter__20657(s__20658){return (new cljs.core.LazySeq(null,((function (i__20639,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20640,s__20638__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677){
return (function (){var s__20658__$1 = s__20658;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20658__$1);if(temp__4126__auto____$1)
{var s__20658__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20658__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20658__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20660 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20659 = (0);while(true){
if((i__20659 < size__4376__auto____$1))
{var vec__20663 = cljs.core._nth.call(null,c__4375__auto____$1,i__20659);var k = cljs.core.nth.call(null,vec__20663,(0),null);var v = cljs.core.nth.call(null,vec__20663,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20660,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20681 = (i__20659 + (1));
i__20659 = G__20681;
continue;
}
} else
{{
var G__20682 = (i__20659 + (1));
i__20659 = G__20682;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20660),iter__20657.call(null,cljs.core.chunk_rest.call(null,s__20658__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20660),null);
}
} else
{var vec__20664 = cljs.core.first.call(null,s__20658__$2);var k = cljs.core.nth.call(null,vec__20664,(0),null);var v = cljs.core.nth.call(null,vec__20664,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20657.call(null,cljs.core.rest.call(null,s__20658__$2)));
} else
{{
var G__20683 = cljs.core.rest.call(null,s__20658__$2);
s__20658__$1 = G__20683;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__20639,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20640,s__20638__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677))
,null,null));
});})(i__20639,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20640,s__20638__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__20684 = (i__20639 + (1));
i__20639 = G__20684;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20640),iter__20637.call(null,cljs.core.chunk_rest.call(null,s__20638__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20640),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__20638__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__20638__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677){
return (function iter__20665(s__20666){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__20638__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677){
return (function (){var s__20666__$1 = s__20666;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20666__$1);if(temp__4126__auto____$1)
{var s__20666__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20666__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20666__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20668 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20667 = (0);while(true){
if((i__20667 < size__4376__auto__))
{var vec__20671 = cljs.core._nth.call(null,c__4375__auto__,i__20667);var k = cljs.core.nth.call(null,vec__20671,(0),null);var v = cljs.core.nth.call(null,vec__20671,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20668,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20685 = (i__20667 + (1));
i__20667 = G__20685;
continue;
}
} else
{{
var G__20686 = (i__20667 + (1));
i__20667 = G__20686;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20668),iter__20665.call(null,cljs.core.chunk_rest.call(null,s__20666__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20668),null);
}
} else
{var vec__20672 = cljs.core.first.call(null,s__20666__$2);var k = cljs.core.nth.call(null,vec__20672,(0),null);var v = cljs.core.nth.call(null,vec__20672,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20665.call(null,cljs.core.rest.call(null,s__20666__$2)));
} else
{{
var G__20687 = cljs.core.rest.call(null,s__20666__$2);
s__20666__$1 = G__20687;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__20638__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677))
,null,null));
});})(in_QMARK_,s__20638__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677))
;return iter__4377__auto__.call(null,s);
})()),iter__20637.call(null,cljs.core.rest.call(null,s__20638__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20688 = output_checker20598_20677.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20688))
{var error__6036__auto___20689 = temp__4126__auto___20688;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___20689)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20689,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20595_20674,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20673,output_schema20595_20674,input_schema20596_20675,input_checker20597_20676,output_checker20598_20677))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema20595_20674,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20596_20675], null)));
var ufv___20720 = schema.utils.use_fn_validation;var output_schema20690_20721 = plumbing.fnk.schema.GraphIOSchemata;var input_schema20691_20722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20692_20723 = schema.core.checker.call(null,input_schema20691_20722);var output_checker20693_20724 = schema.core.checker.call(null,output_schema20690_20721);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___20720,output_schema20690_20721,input_schema20691_20722,input_checker20692_20723,output_checker20693_20724){
return (function sequence_schemata(G__20694,G__20695){var validate__6034__auto__ = ufv___20720.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20725 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20694,G__20695], null);var temp__4126__auto___20726 = input_checker20692_20723.call(null,args__6035__auto___20725);if(cljs.core.truth_(temp__4126__auto___20726))
{var error__6036__auto___20727 = temp__4126__auto___20726;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___20727)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20727,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20725,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20691_20722,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20711 = G__20694;var vec__20713 = G__20711;var i1 = cljs.core.nth.call(null,vec__20713,(0),null);var o1 = cljs.core.nth.call(null,vec__20713,(1),null);var G__20712 = G__20695;var vec__20714 = G__20712;var k = cljs.core.nth.call(null,vec__20714,(0),null);var vec__20715 = cljs.core.nth.call(null,vec__20714,(1),null);var i2 = cljs.core.nth.call(null,vec__20715,(0),null);var o2 = cljs.core.nth.call(null,vec__20715,(1),null);var G__20711__$1 = G__20711;var G__20712__$1 = G__20712;while(true){
var vec__20716 = G__20711__$1;var i1__$1 = cljs.core.nth.call(null,vec__20716,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20716,(1),null);var vec__20717 = G__20712__$1;var k__$1 = cljs.core.nth.call(null,vec__20717,(0),null);var vec__20718 = cljs.core.nth.call(null,vec__20717,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__20718,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20718,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__20719 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__20719,(0),null);var unused = cljs.core.nth.call(null,vec__20719,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20728 = output_checker20693_20724.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20728))
{var error__6036__auto___20729 = temp__4126__auto___20728;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___20729)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20729,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20690_20721,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20720,output_schema20690_20721,input_schema20691_20722,input_checker20692_20723,output_checker20693_20724))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema20690_20721,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20691_20722], null)));
