// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21522 = p1__6064__6065__auto__;if(G__21522)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21522.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21522.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21522);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21522);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21523_SHARP_){return (cljs.core.val.call(null,p1__21523_SHARP_) > (1));
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
var vec__21525 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21525,(0),null);var v = cljs.core.nth.call(null,vec__21525,(1),null);var p = vec__21525;if(cljs.core.truth_(p))
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
var ufv___21531 = schema.utils.use_fn_validation;var output_schema21526_21532 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21527_21533 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21528_21534 = schema.core.checker.call(null,input_schema21527_21533);var output_checker21529_21535 = schema.core.checker.call(null,output_schema21526_21532);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21531,output_schema21526_21532,input_schema21527_21533,input_checker21528_21534,output_checker21529_21535){
return (function unwrap_schema_form_key(G__21530){var validate__6034__auto__ = ufv___21531.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21536 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21530], null);var temp__4126__auto___21537 = input_checker21528_21534.call(null,args__6035__auto___21536);if(cljs.core.truth_(temp__4126__auto___21537))
{var error__6036__auto___21538 = temp__4126__auto___21537;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21538)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21538,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21536,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21527_21533,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21530;while(true){
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
{var temp__4126__auto___21539 = output_checker21529_21535.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21539))
{var error__6036__auto___21540 = temp__4126__auto___21539;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21540)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21540,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21526_21532,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21531,output_schema21526_21532,input_schema21527_21533,input_checker21528_21534,output_checker21529_21535))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21526_21532,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21527_21533], null)));
var ufv___21546 = schema.utils.use_fn_validation;var output_schema21541_21547 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21542_21548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21543_21549 = schema.core.checker.call(null,input_schema21542_21548);var output_checker21544_21550 = schema.core.checker.call(null,output_schema21541_21547);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21546,output_schema21541_21547,input_schema21542_21548,input_checker21543_21549,output_checker21544_21550){
return (function explicit_schema_key_map(G__21545){var validate__6034__auto__ = ufv___21546.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21545], null);var temp__4126__auto___21552 = input_checker21543_21549.call(null,args__6035__auto___21551);if(cljs.core.truth_(temp__4126__auto___21552))
{var error__6036__auto___21553 = temp__4126__auto___21552;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21553)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21553,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21551,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21542_21548,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21545;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21554 = output_checker21544_21550.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21554))
{var error__6036__auto___21555 = temp__4126__auto___21554;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21555)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21555,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21541_21547,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21546,output_schema21541_21547,input_schema21542_21548,input_checker21543_21549,output_checker21544_21550))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21541_21547,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21542_21548], null)));
var ufv___21561 = schema.utils.use_fn_validation;var output_schema21556_21562 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21557_21563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21558_21564 = schema.core.checker.call(null,input_schema21557_21563);var output_checker21559_21565 = schema.core.checker.call(null,output_schema21556_21562);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21561,output_schema21556_21562,input_schema21557_21563,input_checker21558_21564,output_checker21559_21565){
return (function split_schema_keys(G__21560){var validate__6034__auto__ = ufv___21561.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21560], null);var temp__4126__auto___21567 = input_checker21558_21564.call(null,args__6035__auto___21566);if(cljs.core.truth_(temp__4126__auto___21567))
{var error__6036__auto___21568 = temp__4126__auto___21567;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21568)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21568,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21566,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21557_21563,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21560;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21569 = output_checker21559_21565.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21569))
{var error__6036__auto___21570 = temp__4126__auto___21569;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21570)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21570,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21556_21562,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21561,output_schema21556_21562,input_schema21557_21563,input_checker21558_21564,output_checker21559_21565))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21556_21562,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21557_21563], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21574){var vec__21575 = p__21574;var k = cljs.core.nth.call(null,vec__21575,(0),null);var v = cljs.core.nth.call(null,vec__21575,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21576 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21576,(0),null);var ov = cljs.core.nth.call(null,vec__21576,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21577){
var key_project = cljs.core.first(arglist__21577);
arglist__21577 = cljs.core.next(arglist__21577);
var key_combine = cljs.core.first(arglist__21577);
arglist__21577 = cljs.core.next(arglist__21577);
var val_combine = cljs.core.first(arglist__21577);
var maps = cljs.core.rest(arglist__21577);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21585 = schema.utils.use_fn_validation;var output_schema21579_21586 = plumbing.fnk.schema.InputSchema;var input_schema21580_21587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21581_21588 = schema.core.checker.call(null,input_schema21580_21587);var output_checker21582_21589 = schema.core.checker.call(null,output_schema21579_21586);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21585,output_schema21579_21586,input_schema21580_21587,input_checker21581_21588,output_checker21582_21589){
return (function union_input_schemata(G__21583,G__21584){var validate__6034__auto__ = ufv___21585.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21583,G__21584], null);var temp__4126__auto___21591 = input_checker21581_21588.call(null,args__6035__auto___21590);if(cljs.core.truth_(temp__4126__auto___21591))
{var error__6036__auto___21592 = temp__4126__auto___21591;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21592)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21592,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21590,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21580_21587,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21583;var i2 = G__21584;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21585,output_schema21579_21586,input_schema21580_21587,input_checker21581_21588,output_checker21582_21589){
return (function (p1__21578_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21578_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21578_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21585,output_schema21579_21586,input_schema21580_21587,input_checker21581_21588,output_checker21582_21589))
,((function (validate__6034__auto__,ufv___21585,output_schema21579_21586,input_schema21580_21587,input_checker21581_21588,output_checker21582_21589){
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
});})(validate__6034__auto__,ufv___21585,output_schema21579_21586,input_schema21580_21587,input_checker21581_21588,output_checker21582_21589))
,((function (validate__6034__auto__,ufv___21585,output_schema21579_21586,input_schema21580_21587,input_checker21581_21588,output_checker21582_21589){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21585,output_schema21579_21586,input_schema21580_21587,input_checker21581_21588,output_checker21582_21589))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21593 = output_checker21582_21589.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21593))
{var error__6036__auto___21594 = temp__4126__auto___21593;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21594)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21594,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21579_21586,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21585,output_schema21579_21586,input_schema21580_21587,input_checker21581_21588,output_checker21582_21589))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21579_21586,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21580_21587], null)));
var ufv___21600 = schema.utils.use_fn_validation;var output_schema21595_21601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21596_21602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21597_21603 = schema.core.checker.call(null,input_schema21596_21602);var output_checker21598_21604 = schema.core.checker.call(null,output_schema21595_21601);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21600,output_schema21595_21601,input_schema21596_21602,input_checker21597_21603,output_checker21598_21604){
return (function required_toplevel_keys(G__21599){var validate__6034__auto__ = ufv___21600.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21599], null);var temp__4126__auto___21606 = input_checker21597_21603.call(null,args__6035__auto___21605);if(cljs.core.truth_(temp__4126__auto___21606))
{var error__6036__auto___21607 = temp__4126__auto___21606;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21607)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21607,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21605,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21596_21602,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21599;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21600,output_schema21595_21601,input_schema21596_21602,input_checker21597_21603,output_checker21598_21604){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21600,output_schema21595_21601,input_schema21596_21602,input_checker21597_21603,output_checker21598_21604))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21608 = output_checker21598_21604.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21608))
{var error__6036__auto___21609 = temp__4126__auto___21608;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21609)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21609,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21595_21601,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21600,output_schema21595_21601,input_schema21596_21602,input_checker21597_21603,output_checker21598_21604))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21595_21601,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21596_21602], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21618(s__21619){return (new cljs.core.LazySeq(null,(function (){var s__21619__$1 = s__21619;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21619__$1);if(temp__4126__auto__)
{var s__21619__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21619__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21619__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21621 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21620 = (0);while(true){
if((i__21620 < size__4376__auto__))
{var vec__21624 = cljs.core._nth.call(null,c__4375__auto__,i__21620);var k = cljs.core.nth.call(null,vec__21624,(0),null);var v = cljs.core.nth.call(null,vec__21624,(1),null);cljs.core.chunk_append.call(null,b__21621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21626 = (i__21620 + (1));
i__21620 = G__21626;
continue;
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
{var vec__21625 = cljs.core.first.call(null,s__21619__$2);var k = cljs.core.nth.call(null,vec__21625,(0),null);var v = cljs.core.nth.call(null,vec__21625,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21618.call(null,cljs.core.rest.call(null,s__21619__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21635(s__21636){return (new cljs.core.LazySeq(null,(function (){var s__21636__$1 = s__21636;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21636__$1);if(temp__4126__auto__)
{var s__21636__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21636__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21636__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21638 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21637 = (0);while(true){
if((i__21637 < size__4376__auto__))
{var vec__21641 = cljs.core._nth.call(null,c__4375__auto__,i__21637);var k = cljs.core.nth.call(null,vec__21641,(0),null);var v = cljs.core.nth.call(null,vec__21641,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21638,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21643 = (i__21637 + (1));
i__21637 = G__21643;
continue;
}
} else
{{
var G__21644 = (i__21637 + (1));
i__21637 = G__21644;
continue;
}
}
} else
{{
var G__21645 = (i__21637 + (1));
i__21637 = G__21645;
continue;
}
}
} else
{{
var G__21646 = (i__21637 + (1));
i__21637 = G__21646;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21638),iter__21635.call(null,cljs.core.chunk_rest.call(null,s__21636__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21638),null);
}
} else
{var vec__21642 = cljs.core.first.call(null,s__21636__$2);var k = cljs.core.nth.call(null,vec__21642,(0),null);var v = cljs.core.nth.call(null,vec__21642,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21635.call(null,cljs.core.rest.call(null,s__21636__$2)));
} else
{{
var G__21647 = cljs.core.rest.call(null,s__21636__$2);
s__21636__$1 = G__21647;
continue;
}
}
} else
{{
var G__21648 = cljs.core.rest.call(null,s__21636__$2);
s__21636__$1 = G__21648;
continue;
}
}
} else
{{
var G__21649 = cljs.core.rest.call(null,s__21636__$2);
s__21636__$1 = G__21649;
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
var ufv___21672 = schema.utils.use_fn_validation;var output_schema21650_21673 = schema.core.Any;var input_schema21651_21674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21652_21675 = schema.core.checker.call(null,input_schema21651_21674);var output_checker21653_21676 = schema.core.checker.call(null,output_schema21650_21673);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21672,output_schema21650_21673,input_schema21651_21674,input_checker21652_21675,output_checker21653_21676){
return (function compose_schemata(G__21654,G__21655){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21677 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21654,G__21655], null);var temp__4126__auto___21678 = input_checker21652_21675.call(null,args__6035__auto___21677);if(cljs.core.truth_(temp__4126__auto___21678))
{var error__6036__auto___21679 = temp__4126__auto___21678;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21679)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21679,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21677,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21651_21674,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21666 = G__21654;var vec__21668 = G__21666;var i2 = cljs.core.nth.call(null,vec__21668,(0),null);var o2 = cljs.core.nth.call(null,vec__21668,(1),null);var G__21667 = G__21655;var vec__21669 = G__21667;var i1 = cljs.core.nth.call(null,vec__21669,(0),null);var o1 = cljs.core.nth.call(null,vec__21669,(1),null);var G__21666__$1 = G__21666;var G__21667__$1 = G__21667;while(true){
var vec__21670 = G__21666__$1;var i2__$1 = cljs.core.nth.call(null,vec__21670,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21670,(1),null);var vec__21671 = G__21667__$1;var i1__$1 = cljs.core.nth.call(null,vec__21671,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21671,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21680 = output_checker21653_21676.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21680))
{var error__6036__auto___21681 = temp__4126__auto___21680;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21681)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21681,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21650_21673,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21672,output_schema21650_21673,input_schema21651_21674,input_checker21652_21675,output_checker21653_21676))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21650_21673,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21651_21674], null)));
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
var ufv___21760 = schema.utils.use_fn_validation;var output_schema21682_21761 = schema.core.Any;var input_schema21683_21762 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21684_21763 = schema.core.checker.call(null,input_schema21683_21762);var output_checker21685_21764 = schema.core.checker.call(null,output_schema21682_21761);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764){
return (function split_schema(G__21686,G__21687){var validate__6034__auto__ = ufv___21760.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21686,G__21687], null);var temp__4126__auto___21766 = input_checker21684_21763.call(null,args__6035__auto___21765);if(cljs.core.truth_(temp__4126__auto___21766))
{var error__6036__auto___21767 = temp__4126__auto___21766;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21767)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21767,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21765,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21683_21762,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21686;var ks = G__21687;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764){
return (function iter__21724(s__21725){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764){
return (function (){var s__21725__$1 = s__21725;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21725__$1);if(temp__4126__auto__)
{var s__21725__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21725__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21725__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21727 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21726 = (0);while(true){
if((i__21726 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21726);cljs.core.chunk_append.call(null,b__21727,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21726,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21727,s__21725__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764){
return (function iter__21744(s__21745){return (new cljs.core.LazySeq(null,((function (i__21726,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21727,s__21725__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764){
return (function (){var s__21745__$1 = s__21745;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21745__$1);if(temp__4126__auto____$1)
{var s__21745__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21745__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21745__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21747 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21746 = (0);while(true){
if((i__21746 < size__4376__auto____$1))
{var vec__21750 = cljs.core._nth.call(null,c__4375__auto____$1,i__21746);var k = cljs.core.nth.call(null,vec__21750,(0),null);var v = cljs.core.nth.call(null,vec__21750,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21747,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21768 = (i__21746 + (1));
i__21746 = G__21768;
continue;
}
} else
{{
var G__21769 = (i__21746 + (1));
i__21746 = G__21769;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21747),iter__21744.call(null,cljs.core.chunk_rest.call(null,s__21745__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21747),null);
}
} else
{var vec__21751 = cljs.core.first.call(null,s__21745__$2);var k = cljs.core.nth.call(null,vec__21751,(0),null);var v = cljs.core.nth.call(null,vec__21751,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21744.call(null,cljs.core.rest.call(null,s__21745__$2)));
} else
{{
var G__21770 = cljs.core.rest.call(null,s__21745__$2);
s__21745__$1 = G__21770;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21726,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21727,s__21725__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764))
,null,null));
});})(i__21726,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21727,s__21725__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__21771 = (i__21726 + (1));
i__21726 = G__21771;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21727),iter__21724.call(null,cljs.core.chunk_rest.call(null,s__21725__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21727),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21725__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21725__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764){
return (function iter__21752(s__21753){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21725__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764){
return (function (){var s__21753__$1 = s__21753;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21753__$1);if(temp__4126__auto____$1)
{var s__21753__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21753__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21753__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21755 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21754 = (0);while(true){
if((i__21754 < size__4376__auto__))
{var vec__21758 = cljs.core._nth.call(null,c__4375__auto__,i__21754);var k = cljs.core.nth.call(null,vec__21758,(0),null);var v = cljs.core.nth.call(null,vec__21758,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21755,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21772 = (i__21754 + (1));
i__21754 = G__21772;
continue;
}
} else
{{
var G__21773 = (i__21754 + (1));
i__21754 = G__21773;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21755),iter__21752.call(null,cljs.core.chunk_rest.call(null,s__21753__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21755),null);
}
} else
{var vec__21759 = cljs.core.first.call(null,s__21753__$2);var k = cljs.core.nth.call(null,vec__21759,(0),null);var v = cljs.core.nth.call(null,vec__21759,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21752.call(null,cljs.core.rest.call(null,s__21753__$2)));
} else
{{
var G__21774 = cljs.core.rest.call(null,s__21753__$2);
s__21753__$1 = G__21774;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21725__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764))
,null,null));
});})(in_QMARK_,s__21725__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764))
;return iter__4377__auto__.call(null,s);
})()),iter__21724.call(null,cljs.core.rest.call(null,s__21725__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21775 = output_checker21685_21764.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21775))
{var error__6036__auto___21776 = temp__4126__auto___21775;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21776)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21776,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21682_21761,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21760,output_schema21682_21761,input_schema21683_21762,input_checker21684_21763,output_checker21685_21764))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21682_21761,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21683_21762], null)));
var ufv___21807 = schema.utils.use_fn_validation;var output_schema21777_21808 = plumbing.fnk.schema.GraphIOSchemata;var input_schema21778_21809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21779_21810 = schema.core.checker.call(null,input_schema21778_21809);var output_checker21780_21811 = schema.core.checker.call(null,output_schema21777_21808);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21807,output_schema21777_21808,input_schema21778_21809,input_checker21779_21810,output_checker21780_21811){
return (function sequence_schemata(G__21781,G__21782){var validate__6034__auto__ = ufv___21807.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21812 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21781,G__21782], null);var temp__4126__auto___21813 = input_checker21779_21810.call(null,args__6035__auto___21812);if(cljs.core.truth_(temp__4126__auto___21813))
{var error__6036__auto___21814 = temp__4126__auto___21813;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21814)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21814,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21812,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21778_21809,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21798 = G__21781;var vec__21800 = G__21798;var i1 = cljs.core.nth.call(null,vec__21800,(0),null);var o1 = cljs.core.nth.call(null,vec__21800,(1),null);var G__21799 = G__21782;var vec__21801 = G__21799;var k = cljs.core.nth.call(null,vec__21801,(0),null);var vec__21802 = cljs.core.nth.call(null,vec__21801,(1),null);var i2 = cljs.core.nth.call(null,vec__21802,(0),null);var o2 = cljs.core.nth.call(null,vec__21802,(1),null);var G__21798__$1 = G__21798;var G__21799__$1 = G__21799;while(true){
var vec__21803 = G__21798__$1;var i1__$1 = cljs.core.nth.call(null,vec__21803,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21803,(1),null);var vec__21804 = G__21799__$1;var k__$1 = cljs.core.nth.call(null,vec__21804,(0),null);var vec__21805 = cljs.core.nth.call(null,vec__21804,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__21805,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21805,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__21806 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__21806,(0),null);var unused = cljs.core.nth.call(null,vec__21806,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21815 = output_checker21780_21811.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21815))
{var error__6036__auto___21816 = temp__4126__auto___21815;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21816)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21816,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21777_21808,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21807,output_schema21777_21808,input_schema21778_21809,input_checker21779_21810,output_checker21780_21811))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema21777_21808,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21778_21809], null)));
