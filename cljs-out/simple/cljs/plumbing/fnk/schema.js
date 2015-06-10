// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21388 = p1__6064__6065__auto__;if(G__21388)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21388.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21388.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21388);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21388);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21389_SHARP_){return (cljs.core.val.call(null,p1__21389_SHARP_) > (1));
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
var vec__21391 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21391,(0),null);var v = cljs.core.nth.call(null,vec__21391,(1),null);var p = vec__21391;if(cljs.core.truth_(p))
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
var ufv___21397 = schema.utils.use_fn_validation;var output_schema21392_21398 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21393_21399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21394_21400 = schema.core.checker.call(null,input_schema21393_21399);var output_checker21395_21401 = schema.core.checker.call(null,output_schema21392_21398);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21397,output_schema21392_21398,input_schema21393_21399,input_checker21394_21400,output_checker21395_21401){
return (function unwrap_schema_form_key(G__21396){var validate__6034__auto__ = ufv___21397.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21402 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21396], null);var temp__4126__auto___21403 = input_checker21394_21400.call(null,args__6035__auto___21402);if(cljs.core.truth_(temp__4126__auto___21403))
{var error__6036__auto___21404 = temp__4126__auto___21403;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21404)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21404,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21402,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21393_21399,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21396;while(true){
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
{var temp__4126__auto___21405 = output_checker21395_21401.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21405))
{var error__6036__auto___21406 = temp__4126__auto___21405;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21406)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21406,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21392_21398,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21397,output_schema21392_21398,input_schema21393_21399,input_checker21394_21400,output_checker21395_21401))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21392_21398,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21393_21399], null)));
var ufv___21412 = schema.utils.use_fn_validation;var output_schema21407_21413 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21408_21414 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21409_21415 = schema.core.checker.call(null,input_schema21408_21414);var output_checker21410_21416 = schema.core.checker.call(null,output_schema21407_21413);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21412,output_schema21407_21413,input_schema21408_21414,input_checker21409_21415,output_checker21410_21416){
return (function explicit_schema_key_map(G__21411){var validate__6034__auto__ = ufv___21412.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21411], null);var temp__4126__auto___21418 = input_checker21409_21415.call(null,args__6035__auto___21417);if(cljs.core.truth_(temp__4126__auto___21418))
{var error__6036__auto___21419 = temp__4126__auto___21418;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21419)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21419,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21417,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21408_21414,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21411;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21420 = output_checker21410_21416.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21420))
{var error__6036__auto___21421 = temp__4126__auto___21420;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21421)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21421,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21407_21413,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21412,output_schema21407_21413,input_schema21408_21414,input_checker21409_21415,output_checker21410_21416))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21407_21413,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21408_21414], null)));
var ufv___21427 = schema.utils.use_fn_validation;var output_schema21422_21428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21423_21429 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21424_21430 = schema.core.checker.call(null,input_schema21423_21429);var output_checker21425_21431 = schema.core.checker.call(null,output_schema21422_21428);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21427,output_schema21422_21428,input_schema21423_21429,input_checker21424_21430,output_checker21425_21431){
return (function split_schema_keys(G__21426){var validate__6034__auto__ = ufv___21427.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21432 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21426], null);var temp__4126__auto___21433 = input_checker21424_21430.call(null,args__6035__auto___21432);if(cljs.core.truth_(temp__4126__auto___21433))
{var error__6036__auto___21434 = temp__4126__auto___21433;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21434)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21434,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21432,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21423_21429,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21426;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21435 = output_checker21425_21431.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21435))
{var error__6036__auto___21436 = temp__4126__auto___21435;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21436)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21436,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21422_21428,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21427,output_schema21422_21428,input_schema21423_21429,input_checker21424_21430,output_checker21425_21431))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21422_21428,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21423_21429], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21440){var vec__21441 = p__21440;var k = cljs.core.nth.call(null,vec__21441,(0),null);var v = cljs.core.nth.call(null,vec__21441,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21442 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21442,(0),null);var ov = cljs.core.nth.call(null,vec__21442,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21443){
var key_project = cljs.core.first(arglist__21443);
arglist__21443 = cljs.core.next(arglist__21443);
var key_combine = cljs.core.first(arglist__21443);
arglist__21443 = cljs.core.next(arglist__21443);
var val_combine = cljs.core.first(arglist__21443);
var maps = cljs.core.rest(arglist__21443);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21451 = schema.utils.use_fn_validation;var output_schema21445_21452 = plumbing.fnk.schema.InputSchema;var input_schema21446_21453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21447_21454 = schema.core.checker.call(null,input_schema21446_21453);var output_checker21448_21455 = schema.core.checker.call(null,output_schema21445_21452);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21451,output_schema21445_21452,input_schema21446_21453,input_checker21447_21454,output_checker21448_21455){
return (function union_input_schemata(G__21449,G__21450){var validate__6034__auto__ = ufv___21451.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21449,G__21450], null);var temp__4126__auto___21457 = input_checker21447_21454.call(null,args__6035__auto___21456);if(cljs.core.truth_(temp__4126__auto___21457))
{var error__6036__auto___21458 = temp__4126__auto___21457;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21458)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21458,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21456,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21446_21453,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21449;var i2 = G__21450;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21451,output_schema21445_21452,input_schema21446_21453,input_checker21447_21454,output_checker21448_21455){
return (function (p1__21444_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21444_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21444_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21451,output_schema21445_21452,input_schema21446_21453,input_checker21447_21454,output_checker21448_21455))
,((function (validate__6034__auto__,ufv___21451,output_schema21445_21452,input_schema21446_21453,input_checker21447_21454,output_checker21448_21455){
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
});})(validate__6034__auto__,ufv___21451,output_schema21445_21452,input_schema21446_21453,input_checker21447_21454,output_checker21448_21455))
,((function (validate__6034__auto__,ufv___21451,output_schema21445_21452,input_schema21446_21453,input_checker21447_21454,output_checker21448_21455){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21451,output_schema21445_21452,input_schema21446_21453,input_checker21447_21454,output_checker21448_21455))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21459 = output_checker21448_21455.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21459))
{var error__6036__auto___21460 = temp__4126__auto___21459;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21460)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21460,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21445_21452,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21451,output_schema21445_21452,input_schema21446_21453,input_checker21447_21454,output_checker21448_21455))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21445_21452,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21446_21453], null)));
var ufv___21466 = schema.utils.use_fn_validation;var output_schema21461_21467 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21462_21468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21463_21469 = schema.core.checker.call(null,input_schema21462_21468);var output_checker21464_21470 = schema.core.checker.call(null,output_schema21461_21467);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21466,output_schema21461_21467,input_schema21462_21468,input_checker21463_21469,output_checker21464_21470){
return (function required_toplevel_keys(G__21465){var validate__6034__auto__ = ufv___21466.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21465], null);var temp__4126__auto___21472 = input_checker21463_21469.call(null,args__6035__auto___21471);if(cljs.core.truth_(temp__4126__auto___21472))
{var error__6036__auto___21473 = temp__4126__auto___21472;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21473)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21473,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21471,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21462_21468,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21465;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21466,output_schema21461_21467,input_schema21462_21468,input_checker21463_21469,output_checker21464_21470){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21466,output_schema21461_21467,input_schema21462_21468,input_checker21463_21469,output_checker21464_21470))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21474 = output_checker21464_21470.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21474))
{var error__6036__auto___21475 = temp__4126__auto___21474;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21475)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21475,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21461_21467,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21466,output_schema21461_21467,input_schema21462_21468,input_checker21463_21469,output_checker21464_21470))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21461_21467,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21462_21468], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21484(s__21485){return (new cljs.core.LazySeq(null,(function (){var s__21485__$1 = s__21485;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21485__$1);if(temp__4126__auto__)
{var s__21485__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21485__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21485__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21487 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21486 = (0);while(true){
if((i__21486 < size__4376__auto__))
{var vec__21490 = cljs.core._nth.call(null,c__4375__auto__,i__21486);var k = cljs.core.nth.call(null,vec__21490,(0),null);var v = cljs.core.nth.call(null,vec__21490,(1),null);cljs.core.chunk_append.call(null,b__21487,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21492 = (i__21486 + (1));
i__21486 = G__21492;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21487),iter__21484.call(null,cljs.core.chunk_rest.call(null,s__21485__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21487),null);
}
} else
{var vec__21491 = cljs.core.first.call(null,s__21485__$2);var k = cljs.core.nth.call(null,vec__21491,(0),null);var v = cljs.core.nth.call(null,vec__21491,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21484.call(null,cljs.core.rest.call(null,s__21485__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21501(s__21502){return (new cljs.core.LazySeq(null,(function (){var s__21502__$1 = s__21502;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21502__$1);if(temp__4126__auto__)
{var s__21502__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21502__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21502__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21504 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21503 = (0);while(true){
if((i__21503 < size__4376__auto__))
{var vec__21507 = cljs.core._nth.call(null,c__4375__auto__,i__21503);var k = cljs.core.nth.call(null,vec__21507,(0),null);var v = cljs.core.nth.call(null,vec__21507,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21504,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21509 = (i__21503 + (1));
i__21503 = G__21509;
continue;
}
} else
{{
var G__21510 = (i__21503 + (1));
i__21503 = G__21510;
continue;
}
}
} else
{{
var G__21511 = (i__21503 + (1));
i__21503 = G__21511;
continue;
}
}
} else
{{
var G__21512 = (i__21503 + (1));
i__21503 = G__21512;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21504),iter__21501.call(null,cljs.core.chunk_rest.call(null,s__21502__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21504),null);
}
} else
{var vec__21508 = cljs.core.first.call(null,s__21502__$2);var k = cljs.core.nth.call(null,vec__21508,(0),null);var v = cljs.core.nth.call(null,vec__21508,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21501.call(null,cljs.core.rest.call(null,s__21502__$2)));
} else
{{
var G__21513 = cljs.core.rest.call(null,s__21502__$2);
s__21502__$1 = G__21513;
continue;
}
}
} else
{{
var G__21514 = cljs.core.rest.call(null,s__21502__$2);
s__21502__$1 = G__21514;
continue;
}
}
} else
{{
var G__21515 = cljs.core.rest.call(null,s__21502__$2);
s__21502__$1 = G__21515;
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
var ufv___21538 = schema.utils.use_fn_validation;var output_schema21516_21539 = schema.core.Any;var input_schema21517_21540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21518_21541 = schema.core.checker.call(null,input_schema21517_21540);var output_checker21519_21542 = schema.core.checker.call(null,output_schema21516_21539);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21538,output_schema21516_21539,input_schema21517_21540,input_checker21518_21541,output_checker21519_21542){
return (function compose_schemata(G__21520,G__21521){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21520,G__21521], null);var temp__4126__auto___21544 = input_checker21518_21541.call(null,args__6035__auto___21543);if(cljs.core.truth_(temp__4126__auto___21544))
{var error__6036__auto___21545 = temp__4126__auto___21544;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21545)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21545,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21543,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21517_21540,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21532 = G__21520;var vec__21534 = G__21532;var i2 = cljs.core.nth.call(null,vec__21534,(0),null);var o2 = cljs.core.nth.call(null,vec__21534,(1),null);var G__21533 = G__21521;var vec__21535 = G__21533;var i1 = cljs.core.nth.call(null,vec__21535,(0),null);var o1 = cljs.core.nth.call(null,vec__21535,(1),null);var G__21532__$1 = G__21532;var G__21533__$1 = G__21533;while(true){
var vec__21536 = G__21532__$1;var i2__$1 = cljs.core.nth.call(null,vec__21536,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21536,(1),null);var vec__21537 = G__21533__$1;var i1__$1 = cljs.core.nth.call(null,vec__21537,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21537,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21546 = output_checker21519_21542.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21546))
{var error__6036__auto___21547 = temp__4126__auto___21546;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21547)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21547,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21516_21539,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21538,output_schema21516_21539,input_schema21517_21540,input_checker21518_21541,output_checker21519_21542))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21516_21539,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21517_21540], null)));
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
var ufv___21626 = schema.utils.use_fn_validation;var output_schema21548_21627 = schema.core.Any;var input_schema21549_21628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21550_21629 = schema.core.checker.call(null,input_schema21549_21628);var output_checker21551_21630 = schema.core.checker.call(null,output_schema21548_21627);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630){
return (function split_schema(G__21552,G__21553){var validate__6034__auto__ = ufv___21626.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21552,G__21553], null);var temp__4126__auto___21632 = input_checker21550_21629.call(null,args__6035__auto___21631);if(cljs.core.truth_(temp__4126__auto___21632))
{var error__6036__auto___21633 = temp__4126__auto___21632;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21633)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21633,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21631,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21549_21628,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21552;var ks = G__21553;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630){
return (function iter__21590(s__21591){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630){
return (function (){var s__21591__$1 = s__21591;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21591__$1);if(temp__4126__auto__)
{var s__21591__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21591__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21591__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21593 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21592 = (0);while(true){
if((i__21592 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21592);cljs.core.chunk_append.call(null,b__21593,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21592,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21593,s__21591__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630){
return (function iter__21610(s__21611){return (new cljs.core.LazySeq(null,((function (i__21592,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21593,s__21591__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630){
return (function (){var s__21611__$1 = s__21611;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21611__$1);if(temp__4126__auto____$1)
{var s__21611__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21611__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21611__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21613 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21612 = (0);while(true){
if((i__21612 < size__4376__auto____$1))
{var vec__21616 = cljs.core._nth.call(null,c__4375__auto____$1,i__21612);var k = cljs.core.nth.call(null,vec__21616,(0),null);var v = cljs.core.nth.call(null,vec__21616,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21613,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21634 = (i__21612 + (1));
i__21612 = G__21634;
continue;
}
} else
{{
var G__21635 = (i__21612 + (1));
i__21612 = G__21635;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21613),iter__21610.call(null,cljs.core.chunk_rest.call(null,s__21611__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21613),null);
}
} else
{var vec__21617 = cljs.core.first.call(null,s__21611__$2);var k = cljs.core.nth.call(null,vec__21617,(0),null);var v = cljs.core.nth.call(null,vec__21617,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21610.call(null,cljs.core.rest.call(null,s__21611__$2)));
} else
{{
var G__21636 = cljs.core.rest.call(null,s__21611__$2);
s__21611__$1 = G__21636;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21592,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21593,s__21591__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630))
,null,null));
});})(i__21592,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21593,s__21591__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__21637 = (i__21592 + (1));
i__21592 = G__21637;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21593),iter__21590.call(null,cljs.core.chunk_rest.call(null,s__21591__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21593),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21591__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21591__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630){
return (function iter__21618(s__21619){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21591__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630){
return (function (){var s__21619__$1 = s__21619;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21619__$1);if(temp__4126__auto____$1)
{var s__21619__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21619__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21619__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21621 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21620 = (0);while(true){
if((i__21620 < size__4376__auto__))
{var vec__21624 = cljs.core._nth.call(null,c__4375__auto__,i__21620);var k = cljs.core.nth.call(null,vec__21624,(0),null);var v = cljs.core.nth.call(null,vec__21624,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21638 = (i__21620 + (1));
i__21620 = G__21638;
continue;
}
} else
{{
var G__21639 = (i__21620 + (1));
i__21620 = G__21639;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21621),iter__21618.call(null,cljs.core.chunk_rest.call(null,s__21619__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21621),null);
}
} else
{var vec__21625 = cljs.core.first.call(null,s__21619__$2);var k = cljs.core.nth.call(null,vec__21625,(0),null);var v = cljs.core.nth.call(null,vec__21625,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21618.call(null,cljs.core.rest.call(null,s__21619__$2)));
} else
{{
var G__21640 = cljs.core.rest.call(null,s__21619__$2);
s__21619__$1 = G__21640;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21591__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630))
,null,null));
});})(in_QMARK_,s__21591__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630))
;return iter__4377__auto__.call(null,s);
})()),iter__21590.call(null,cljs.core.rest.call(null,s__21591__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21641 = output_checker21551_21630.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21641))
{var error__6036__auto___21642 = temp__4126__auto___21641;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21642)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21642,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21548_21627,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21626,output_schema21548_21627,input_schema21549_21628,input_checker21550_21629,output_checker21551_21630))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21548_21627,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21549_21628], null)));
var ufv___21673 = schema.utils.use_fn_validation;var output_schema21643_21674 = plumbing.fnk.schema.GraphIOSchemata;var input_schema21644_21675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21645_21676 = schema.core.checker.call(null,input_schema21644_21675);var output_checker21646_21677 = schema.core.checker.call(null,output_schema21643_21674);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21673,output_schema21643_21674,input_schema21644_21675,input_checker21645_21676,output_checker21646_21677){
return (function sequence_schemata(G__21647,G__21648){var validate__6034__auto__ = ufv___21673.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21647,G__21648], null);var temp__4126__auto___21679 = input_checker21645_21676.call(null,args__6035__auto___21678);if(cljs.core.truth_(temp__4126__auto___21679))
{var error__6036__auto___21680 = temp__4126__auto___21679;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21680)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21680,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21678,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21644_21675,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21664 = G__21647;var vec__21666 = G__21664;var i1 = cljs.core.nth.call(null,vec__21666,(0),null);var o1 = cljs.core.nth.call(null,vec__21666,(1),null);var G__21665 = G__21648;var vec__21667 = G__21665;var k = cljs.core.nth.call(null,vec__21667,(0),null);var vec__21668 = cljs.core.nth.call(null,vec__21667,(1),null);var i2 = cljs.core.nth.call(null,vec__21668,(0),null);var o2 = cljs.core.nth.call(null,vec__21668,(1),null);var G__21664__$1 = G__21664;var G__21665__$1 = G__21665;while(true){
var vec__21669 = G__21664__$1;var i1__$1 = cljs.core.nth.call(null,vec__21669,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21669,(1),null);var vec__21670 = G__21665__$1;var k__$1 = cljs.core.nth.call(null,vec__21670,(0),null);var vec__21671 = cljs.core.nth.call(null,vec__21670,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__21671,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21671,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__21672 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__21672,(0),null);var unused = cljs.core.nth.call(null,vec__21672,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21681 = output_checker21646_21677.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21681))
{var error__6036__auto___21682 = temp__4126__auto___21681;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21682)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21682,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21643_21674,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21673,output_schema21643_21674,input_schema21644_21675,input_checker21645_21676,output_checker21646_21677))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema21643_21674,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21644_21675], null)));
