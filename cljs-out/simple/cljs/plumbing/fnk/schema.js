// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__20404 = p1__6064__6065__auto__;if(G__20404)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__20404.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__20404.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20404);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20404);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__20405_SHARP_){return (cljs.core.val.call(null,p1__20405_SHARP_) > (1));
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
var vec__20407 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__20407,(0),null);var v = cljs.core.nth.call(null,vec__20407,(1),null);var p = vec__20407;if(cljs.core.truth_(p))
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
var ufv___20413 = schema.utils.use_fn_validation;var output_schema20408_20414 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema20409_20415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker20410_20416 = schema.core.checker.call(null,input_schema20409_20415);var output_checker20411_20417 = schema.core.checker.call(null,output_schema20408_20414);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___20413,output_schema20408_20414,input_schema20409_20415,input_checker20410_20416,output_checker20411_20417){
return (function unwrap_schema_form_key(G__20412){var validate__6034__auto__ = ufv___20413.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20412], null);var temp__4126__auto___20419 = input_checker20410_20416.call(null,args__6035__auto___20418);if(cljs.core.truth_(temp__4126__auto___20419))
{var error__6036__auto___20420 = temp__4126__auto___20419;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___20420)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20420,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20418,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20409_20415,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__20412;while(true){
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
{var temp__4126__auto___20421 = output_checker20411_20417.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20421))
{var error__6036__auto___20422 = temp__4126__auto___20421;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___20422)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20422,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20408_20414,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20413,output_schema20408_20414,input_schema20409_20415,input_checker20410_20416,output_checker20411_20417))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema20408_20414,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20409_20415], null)));
var ufv___20428 = schema.utils.use_fn_validation;var output_schema20423_20429 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema20424_20430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20425_20431 = schema.core.checker.call(null,input_schema20424_20430);var output_checker20426_20432 = schema.core.checker.call(null,output_schema20423_20429);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___20428,output_schema20423_20429,input_schema20424_20430,input_checker20425_20431,output_checker20426_20432){
return (function explicit_schema_key_map(G__20427){var validate__6034__auto__ = ufv___20428.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20433 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20427], null);var temp__4126__auto___20434 = input_checker20425_20431.call(null,args__6035__auto___20433);if(cljs.core.truth_(temp__4126__auto___20434))
{var error__6036__auto___20435 = temp__4126__auto___20434;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___20435)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20435,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20433,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20424_20430,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20427;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20436 = output_checker20426_20432.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20436))
{var error__6036__auto___20437 = temp__4126__auto___20436;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___20437)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20437,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20423_20429,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20428,output_schema20423_20429,input_schema20424_20430,input_checker20425_20431,output_checker20426_20432))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema20423_20429,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20424_20430], null)));
var ufv___20443 = schema.utils.use_fn_validation;var output_schema20438_20444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema20439_20445 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20440_20446 = schema.core.checker.call(null,input_schema20439_20445);var output_checker20441_20447 = schema.core.checker.call(null,output_schema20438_20444);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___20443,output_schema20438_20444,input_schema20439_20445,input_checker20440_20446,output_checker20441_20447){
return (function split_schema_keys(G__20442){var validate__6034__auto__ = ufv___20443.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20448 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20442], null);var temp__4126__auto___20449 = input_checker20440_20446.call(null,args__6035__auto___20448);if(cljs.core.truth_(temp__4126__auto___20449))
{var error__6036__auto___20450 = temp__4126__auto___20449;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___20450)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20450,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20448,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20439_20445,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20442;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20451 = output_checker20441_20447.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20451))
{var error__6036__auto___20452 = temp__4126__auto___20451;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___20452)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20452,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20438_20444,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20443,output_schema20438_20444,input_schema20439_20445,input_checker20440_20446,output_checker20441_20447))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema20438_20444,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20439_20445], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__20456){var vec__20457 = p__20456;var k = cljs.core.nth.call(null,vec__20457,(0),null);var v = cljs.core.nth.call(null,vec__20457,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__20458 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__20458,(0),null);var ov = cljs.core.nth.call(null,vec__20458,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__20459){
var key_project = cljs.core.first(arglist__20459);
arglist__20459 = cljs.core.next(arglist__20459);
var key_combine = cljs.core.first(arglist__20459);
arglist__20459 = cljs.core.next(arglist__20459);
var val_combine = cljs.core.first(arglist__20459);
var maps = cljs.core.rest(arglist__20459);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___20467 = schema.utils.use_fn_validation;var output_schema20461_20468 = plumbing.fnk.schema.InputSchema;var input_schema20462_20469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker20463_20470 = schema.core.checker.call(null,input_schema20462_20469);var output_checker20464_20471 = schema.core.checker.call(null,output_schema20461_20468);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___20467,output_schema20461_20468,input_schema20462_20469,input_checker20463_20470,output_checker20464_20471){
return (function union_input_schemata(G__20465,G__20466){var validate__6034__auto__ = ufv___20467.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20465,G__20466], null);var temp__4126__auto___20473 = input_checker20463_20470.call(null,args__6035__auto___20472);if(cljs.core.truth_(temp__4126__auto___20473))
{var error__6036__auto___20474 = temp__4126__auto___20473;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___20474)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20474,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20472,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20462_20469,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__20465;var i2 = G__20466;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___20467,output_schema20461_20468,input_schema20462_20469,input_checker20463_20470,output_checker20464_20471){
return (function (p1__20460_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__20460_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__20460_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___20467,output_schema20461_20468,input_schema20462_20469,input_checker20463_20470,output_checker20464_20471))
,((function (validate__6034__auto__,ufv___20467,output_schema20461_20468,input_schema20462_20469,input_checker20463_20470,output_checker20464_20471){
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
});})(validate__6034__auto__,ufv___20467,output_schema20461_20468,input_schema20462_20469,input_checker20463_20470,output_checker20464_20471))
,((function (validate__6034__auto__,ufv___20467,output_schema20461_20468,input_schema20462_20469,input_checker20463_20470,output_checker20464_20471){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___20467,output_schema20461_20468,input_schema20462_20469,input_checker20463_20470,output_checker20464_20471))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20475 = output_checker20464_20471.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20475))
{var error__6036__auto___20476 = temp__4126__auto___20475;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___20476)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20476,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20461_20468,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20467,output_schema20461_20468,input_schema20462_20469,input_checker20463_20470,output_checker20464_20471))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema20461_20468,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20462_20469], null)));
var ufv___20482 = schema.utils.use_fn_validation;var output_schema20477_20483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema20478_20484 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker20479_20485 = schema.core.checker.call(null,input_schema20478_20484);var output_checker20480_20486 = schema.core.checker.call(null,output_schema20477_20483);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___20482,output_schema20477_20483,input_schema20478_20484,input_checker20479_20485,output_checker20480_20486){
return (function required_toplevel_keys(G__20481){var validate__6034__auto__ = ufv___20482.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20487 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20481], null);var temp__4126__auto___20488 = input_checker20479_20485.call(null,args__6035__auto___20487);if(cljs.core.truth_(temp__4126__auto___20488))
{var error__6036__auto___20489 = temp__4126__auto___20488;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___20489)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20489,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20487,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20478_20484,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__20481;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___20482,output_schema20477_20483,input_schema20478_20484,input_checker20479_20485,output_checker20480_20486){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___20482,output_schema20477_20483,input_schema20478_20484,input_checker20479_20485,output_checker20480_20486))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20490 = output_checker20480_20486.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20490))
{var error__6036__auto___20491 = temp__4126__auto___20490;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___20491)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20491,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20477_20483,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20482,output_schema20477_20483,input_schema20478_20484,input_checker20479_20485,output_checker20480_20486))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema20477_20483,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20478_20484], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__20500(s__20501){return (new cljs.core.LazySeq(null,(function (){var s__20501__$1 = s__20501;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20501__$1);if(temp__4126__auto__)
{var s__20501__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20501__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20501__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20503 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20502 = (0);while(true){
if((i__20502 < size__4376__auto__))
{var vec__20506 = cljs.core._nth.call(null,c__4375__auto__,i__20502);var k = cljs.core.nth.call(null,vec__20506,(0),null);var v = cljs.core.nth.call(null,vec__20506,(1),null);cljs.core.chunk_append.call(null,b__20503,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__20508 = (i__20502 + (1));
i__20502 = G__20508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20503),iter__20500.call(null,cljs.core.chunk_rest.call(null,s__20501__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20503),null);
}
} else
{var vec__20507 = cljs.core.first.call(null,s__20501__$2);var k = cljs.core.nth.call(null,vec__20507,(0),null);var v = cljs.core.nth.call(null,vec__20507,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__20500.call(null,cljs.core.rest.call(null,s__20501__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__20517(s__20518){return (new cljs.core.LazySeq(null,(function (){var s__20518__$1 = s__20518;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20518__$1);if(temp__4126__auto__)
{var s__20518__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20518__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20518__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20520 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20519 = (0);while(true){
if((i__20519 < size__4376__auto__))
{var vec__20523 = cljs.core._nth.call(null,c__4375__auto__,i__20519);var k = cljs.core.nth.call(null,vec__20523,(0),null);var v = cljs.core.nth.call(null,vec__20523,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__20520,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__20525 = (i__20519 + (1));
i__20519 = G__20525;
continue;
}
} else
{{
var G__20526 = (i__20519 + (1));
i__20519 = G__20526;
continue;
}
}
} else
{{
var G__20527 = (i__20519 + (1));
i__20519 = G__20527;
continue;
}
}
} else
{{
var G__20528 = (i__20519 + (1));
i__20519 = G__20528;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20520),iter__20517.call(null,cljs.core.chunk_rest.call(null,s__20518__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20520),null);
}
} else
{var vec__20524 = cljs.core.first.call(null,s__20518__$2);var k = cljs.core.nth.call(null,vec__20524,(0),null);var v = cljs.core.nth.call(null,vec__20524,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__20517.call(null,cljs.core.rest.call(null,s__20518__$2)));
} else
{{
var G__20529 = cljs.core.rest.call(null,s__20518__$2);
s__20518__$1 = G__20529;
continue;
}
}
} else
{{
var G__20530 = cljs.core.rest.call(null,s__20518__$2);
s__20518__$1 = G__20530;
continue;
}
}
} else
{{
var G__20531 = cljs.core.rest.call(null,s__20518__$2);
s__20518__$1 = G__20531;
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
var ufv___20554 = schema.utils.use_fn_validation;var output_schema20532_20555 = schema.core.Any;var input_schema20533_20556 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20534_20557 = schema.core.checker.call(null,input_schema20533_20556);var output_checker20535_20558 = schema.core.checker.call(null,output_schema20532_20555);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___20554,output_schema20532_20555,input_schema20533_20556,input_checker20534_20557,output_checker20535_20558){
return (function compose_schemata(G__20536,G__20537){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___20559 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20536,G__20537], null);var temp__4126__auto___20560 = input_checker20534_20557.call(null,args__6035__auto___20559);if(cljs.core.truth_(temp__4126__auto___20560))
{var error__6036__auto___20561 = temp__4126__auto___20560;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___20561)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20561,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20559,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20533_20556,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20548 = G__20536;var vec__20550 = G__20548;var i2 = cljs.core.nth.call(null,vec__20550,(0),null);var o2 = cljs.core.nth.call(null,vec__20550,(1),null);var G__20549 = G__20537;var vec__20551 = G__20549;var i1 = cljs.core.nth.call(null,vec__20551,(0),null);var o1 = cljs.core.nth.call(null,vec__20551,(1),null);var G__20548__$1 = G__20548;var G__20549__$1 = G__20549;while(true){
var vec__20552 = G__20548__$1;var i2__$1 = cljs.core.nth.call(null,vec__20552,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20552,(1),null);var vec__20553 = G__20549__$1;var i1__$1 = cljs.core.nth.call(null,vec__20553,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20553,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___20562 = output_checker20535_20558.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20562))
{var error__6036__auto___20563 = temp__4126__auto___20562;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___20563)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20563,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20532_20555,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20554,output_schema20532_20555,input_schema20533_20556,input_checker20534_20557,output_checker20535_20558))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema20532_20555,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20533_20556], null)));
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
var ufv___20642 = schema.utils.use_fn_validation;var output_schema20564_20643 = schema.core.Any;var input_schema20565_20644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker20566_20645 = schema.core.checker.call(null,input_schema20565_20644);var output_checker20567_20646 = schema.core.checker.call(null,output_schema20564_20643);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646){
return (function split_schema(G__20568,G__20569){var validate__6034__auto__ = ufv___20642.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20568,G__20569], null);var temp__4126__auto___20648 = input_checker20566_20645.call(null,args__6035__auto___20647);if(cljs.core.truth_(temp__4126__auto___20648))
{var error__6036__auto___20649 = temp__4126__auto___20648;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___20649)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20649,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20647,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20565_20644,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20568;var ks = G__20569;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646){
return (function iter__20606(s__20607){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646){
return (function (){var s__20607__$1 = s__20607;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20607__$1);if(temp__4126__auto__)
{var s__20607__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20607__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20607__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20609 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20608 = (0);while(true){
if((i__20608 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__20608);cljs.core.chunk_append.call(null,b__20609,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__20608,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20609,s__20607__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646){
return (function iter__20626(s__20627){return (new cljs.core.LazySeq(null,((function (i__20608,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20609,s__20607__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646){
return (function (){var s__20627__$1 = s__20627;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20627__$1);if(temp__4126__auto____$1)
{var s__20627__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20627__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20627__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20629 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20628 = (0);while(true){
if((i__20628 < size__4376__auto____$1))
{var vec__20632 = cljs.core._nth.call(null,c__4375__auto____$1,i__20628);var k = cljs.core.nth.call(null,vec__20632,(0),null);var v = cljs.core.nth.call(null,vec__20632,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20629,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20650 = (i__20628 + (1));
i__20628 = G__20650;
continue;
}
} else
{{
var G__20651 = (i__20628 + (1));
i__20628 = G__20651;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20629),iter__20626.call(null,cljs.core.chunk_rest.call(null,s__20627__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20629),null);
}
} else
{var vec__20633 = cljs.core.first.call(null,s__20627__$2);var k = cljs.core.nth.call(null,vec__20633,(0),null);var v = cljs.core.nth.call(null,vec__20633,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20626.call(null,cljs.core.rest.call(null,s__20627__$2)));
} else
{{
var G__20652 = cljs.core.rest.call(null,s__20627__$2);
s__20627__$1 = G__20652;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__20608,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20609,s__20607__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646))
,null,null));
});})(i__20608,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20609,s__20607__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__20653 = (i__20608 + (1));
i__20608 = G__20653;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20609),iter__20606.call(null,cljs.core.chunk_rest.call(null,s__20607__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20609),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__20607__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__20607__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646){
return (function iter__20634(s__20635){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__20607__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646){
return (function (){var s__20635__$1 = s__20635;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20635__$1);if(temp__4126__auto____$1)
{var s__20635__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20635__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20635__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20637 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20636 = (0);while(true){
if((i__20636 < size__4376__auto__))
{var vec__20640 = cljs.core._nth.call(null,c__4375__auto__,i__20636);var k = cljs.core.nth.call(null,vec__20640,(0),null);var v = cljs.core.nth.call(null,vec__20640,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20637,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20654 = (i__20636 + (1));
i__20636 = G__20654;
continue;
}
} else
{{
var G__20655 = (i__20636 + (1));
i__20636 = G__20655;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20637),iter__20634.call(null,cljs.core.chunk_rest.call(null,s__20635__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20637),null);
}
} else
{var vec__20641 = cljs.core.first.call(null,s__20635__$2);var k = cljs.core.nth.call(null,vec__20641,(0),null);var v = cljs.core.nth.call(null,vec__20641,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20634.call(null,cljs.core.rest.call(null,s__20635__$2)));
} else
{{
var G__20656 = cljs.core.rest.call(null,s__20635__$2);
s__20635__$1 = G__20656;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__20607__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646))
,null,null));
});})(in_QMARK_,s__20607__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646))
;return iter__4377__auto__.call(null,s);
})()),iter__20606.call(null,cljs.core.rest.call(null,s__20607__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20657 = output_checker20567_20646.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20657))
{var error__6036__auto___20658 = temp__4126__auto___20657;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___20658)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20658,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20564_20643,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20642,output_schema20564_20643,input_schema20565_20644,input_checker20566_20645,output_checker20567_20646))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema20564_20643,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20565_20644], null)));
var ufv___20689 = schema.utils.use_fn_validation;var output_schema20659_20690 = plumbing.fnk.schema.GraphIOSchemata;var input_schema20660_20691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20661_20692 = schema.core.checker.call(null,input_schema20660_20691);var output_checker20662_20693 = schema.core.checker.call(null,output_schema20659_20690);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___20689,output_schema20659_20690,input_schema20660_20691,input_checker20661_20692,output_checker20662_20693){
return (function sequence_schemata(G__20663,G__20664){var validate__6034__auto__ = ufv___20689.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20663,G__20664], null);var temp__4126__auto___20695 = input_checker20661_20692.call(null,args__6035__auto___20694);if(cljs.core.truth_(temp__4126__auto___20695))
{var error__6036__auto___20696 = temp__4126__auto___20695;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___20696)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20696,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20694,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20660_20691,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20680 = G__20663;var vec__20682 = G__20680;var i1 = cljs.core.nth.call(null,vec__20682,(0),null);var o1 = cljs.core.nth.call(null,vec__20682,(1),null);var G__20681 = G__20664;var vec__20683 = G__20681;var k = cljs.core.nth.call(null,vec__20683,(0),null);var vec__20684 = cljs.core.nth.call(null,vec__20683,(1),null);var i2 = cljs.core.nth.call(null,vec__20684,(0),null);var o2 = cljs.core.nth.call(null,vec__20684,(1),null);var G__20680__$1 = G__20680;var G__20681__$1 = G__20681;while(true){
var vec__20685 = G__20680__$1;var i1__$1 = cljs.core.nth.call(null,vec__20685,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20685,(1),null);var vec__20686 = G__20681__$1;var k__$1 = cljs.core.nth.call(null,vec__20686,(0),null);var vec__20687 = cljs.core.nth.call(null,vec__20686,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__20687,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20687,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__20688 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__20688,(0),null);var unused = cljs.core.nth.call(null,vec__20688,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20697 = output_checker20662_20693.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20697))
{var error__6036__auto___20698 = temp__4126__auto___20697;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___20698)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20698,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20659_20690,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20689,output_schema20659_20690,input_schema20660_20691,input_checker20661_20692,output_checker20662_20693))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema20659_20690,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20660_20691], null)));
