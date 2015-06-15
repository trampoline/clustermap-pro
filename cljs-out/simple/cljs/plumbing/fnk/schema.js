// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21536 = p1__6064__6065__auto__;if(G__21536)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21536.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21536.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21536);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21536);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21537_SHARP_){return (cljs.core.val.call(null,p1__21537_SHARP_) > (1));
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
var vec__21539 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21539,(0),null);var v = cljs.core.nth.call(null,vec__21539,(1),null);var p = vec__21539;if(cljs.core.truth_(p))
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
var ufv___21545 = schema.utils.use_fn_validation;var output_schema21540_21546 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21541_21547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21542_21548 = schema.core.checker.call(null,input_schema21541_21547);var output_checker21543_21549 = schema.core.checker.call(null,output_schema21540_21546);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21545,output_schema21540_21546,input_schema21541_21547,input_checker21542_21548,output_checker21543_21549){
return (function unwrap_schema_form_key(G__21544){var validate__6034__auto__ = ufv___21545.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21544], null);var temp__4126__auto___21551 = input_checker21542_21548.call(null,args__6035__auto___21550);if(cljs.core.truth_(temp__4126__auto___21551))
{var error__6036__auto___21552 = temp__4126__auto___21551;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21552)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21552,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21550,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21541_21547,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21544;while(true){
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
{var temp__4126__auto___21553 = output_checker21543_21549.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21553))
{var error__6036__auto___21554 = temp__4126__auto___21553;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21554)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21554,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21540_21546,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21545,output_schema21540_21546,input_schema21541_21547,input_checker21542_21548,output_checker21543_21549))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21540_21546,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21541_21547], null)));
var ufv___21560 = schema.utils.use_fn_validation;var output_schema21555_21561 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21556_21562 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21557_21563 = schema.core.checker.call(null,input_schema21556_21562);var output_checker21558_21564 = schema.core.checker.call(null,output_schema21555_21561);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21560,output_schema21555_21561,input_schema21556_21562,input_checker21557_21563,output_checker21558_21564){
return (function explicit_schema_key_map(G__21559){var validate__6034__auto__ = ufv___21560.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21559], null);var temp__4126__auto___21566 = input_checker21557_21563.call(null,args__6035__auto___21565);if(cljs.core.truth_(temp__4126__auto___21566))
{var error__6036__auto___21567 = temp__4126__auto___21566;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21567)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21567,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21565,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21556_21562,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21559;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21568 = output_checker21558_21564.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21568))
{var error__6036__auto___21569 = temp__4126__auto___21568;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21569)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21569,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21555_21561,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21560,output_schema21555_21561,input_schema21556_21562,input_checker21557_21563,output_checker21558_21564))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21555_21561,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21556_21562], null)));
var ufv___21575 = schema.utils.use_fn_validation;var output_schema21570_21576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21571_21577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21572_21578 = schema.core.checker.call(null,input_schema21571_21577);var output_checker21573_21579 = schema.core.checker.call(null,output_schema21570_21576);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21575,output_schema21570_21576,input_schema21571_21577,input_checker21572_21578,output_checker21573_21579){
return (function split_schema_keys(G__21574){var validate__6034__auto__ = ufv___21575.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21580 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21574], null);var temp__4126__auto___21581 = input_checker21572_21578.call(null,args__6035__auto___21580);if(cljs.core.truth_(temp__4126__auto___21581))
{var error__6036__auto___21582 = temp__4126__auto___21581;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21582)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21582,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21580,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21571_21577,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21574;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21583 = output_checker21573_21579.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21583))
{var error__6036__auto___21584 = temp__4126__auto___21583;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21584)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21584,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21570_21576,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21575,output_schema21570_21576,input_schema21571_21577,input_checker21572_21578,output_checker21573_21579))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21570_21576,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21571_21577], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21588){var vec__21589 = p__21588;var k = cljs.core.nth.call(null,vec__21589,(0),null);var v = cljs.core.nth.call(null,vec__21589,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21590 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21590,(0),null);var ov = cljs.core.nth.call(null,vec__21590,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21591){
var key_project = cljs.core.first(arglist__21591);
arglist__21591 = cljs.core.next(arglist__21591);
var key_combine = cljs.core.first(arglist__21591);
arglist__21591 = cljs.core.next(arglist__21591);
var val_combine = cljs.core.first(arglist__21591);
var maps = cljs.core.rest(arglist__21591);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21599 = schema.utils.use_fn_validation;var output_schema21593_21600 = plumbing.fnk.schema.InputSchema;var input_schema21594_21601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21595_21602 = schema.core.checker.call(null,input_schema21594_21601);var output_checker21596_21603 = schema.core.checker.call(null,output_schema21593_21600);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21599,output_schema21593_21600,input_schema21594_21601,input_checker21595_21602,output_checker21596_21603){
return (function union_input_schemata(G__21597,G__21598){var validate__6034__auto__ = ufv___21599.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21597,G__21598], null);var temp__4126__auto___21605 = input_checker21595_21602.call(null,args__6035__auto___21604);if(cljs.core.truth_(temp__4126__auto___21605))
{var error__6036__auto___21606 = temp__4126__auto___21605;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21606)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21606,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21604,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21594_21601,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21597;var i2 = G__21598;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21599,output_schema21593_21600,input_schema21594_21601,input_checker21595_21602,output_checker21596_21603){
return (function (p1__21592_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21592_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21592_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21599,output_schema21593_21600,input_schema21594_21601,input_checker21595_21602,output_checker21596_21603))
,((function (validate__6034__auto__,ufv___21599,output_schema21593_21600,input_schema21594_21601,input_checker21595_21602,output_checker21596_21603){
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
});})(validate__6034__auto__,ufv___21599,output_schema21593_21600,input_schema21594_21601,input_checker21595_21602,output_checker21596_21603))
,((function (validate__6034__auto__,ufv___21599,output_schema21593_21600,input_schema21594_21601,input_checker21595_21602,output_checker21596_21603){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21599,output_schema21593_21600,input_schema21594_21601,input_checker21595_21602,output_checker21596_21603))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21607 = output_checker21596_21603.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21607))
{var error__6036__auto___21608 = temp__4126__auto___21607;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21608)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21608,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21593_21600,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21599,output_schema21593_21600,input_schema21594_21601,input_checker21595_21602,output_checker21596_21603))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21593_21600,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21594_21601], null)));
var ufv___21614 = schema.utils.use_fn_validation;var output_schema21609_21615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21610_21616 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21611_21617 = schema.core.checker.call(null,input_schema21610_21616);var output_checker21612_21618 = schema.core.checker.call(null,output_schema21609_21615);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21614,output_schema21609_21615,input_schema21610_21616,input_checker21611_21617,output_checker21612_21618){
return (function required_toplevel_keys(G__21613){var validate__6034__auto__ = ufv___21614.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21613], null);var temp__4126__auto___21620 = input_checker21611_21617.call(null,args__6035__auto___21619);if(cljs.core.truth_(temp__4126__auto___21620))
{var error__6036__auto___21621 = temp__4126__auto___21620;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21621)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21621,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21619,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21610_21616,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21613;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21614,output_schema21609_21615,input_schema21610_21616,input_checker21611_21617,output_checker21612_21618){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21614,output_schema21609_21615,input_schema21610_21616,input_checker21611_21617,output_checker21612_21618))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21622 = output_checker21612_21618.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21622))
{var error__6036__auto___21623 = temp__4126__auto___21622;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21623)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21623,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21609_21615,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21614,output_schema21609_21615,input_schema21610_21616,input_checker21611_21617,output_checker21612_21618))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21609_21615,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21610_21616], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21632(s__21633){return (new cljs.core.LazySeq(null,(function (){var s__21633__$1 = s__21633;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21633__$1);if(temp__4126__auto__)
{var s__21633__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21633__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21633__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21635 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21634 = (0);while(true){
if((i__21634 < size__4376__auto__))
{var vec__21638 = cljs.core._nth.call(null,c__4375__auto__,i__21634);var k = cljs.core.nth.call(null,vec__21638,(0),null);var v = cljs.core.nth.call(null,vec__21638,(1),null);cljs.core.chunk_append.call(null,b__21635,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21640 = (i__21634 + (1));
i__21634 = G__21640;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21635),iter__21632.call(null,cljs.core.chunk_rest.call(null,s__21633__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21635),null);
}
} else
{var vec__21639 = cljs.core.first.call(null,s__21633__$2);var k = cljs.core.nth.call(null,vec__21639,(0),null);var v = cljs.core.nth.call(null,vec__21639,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21632.call(null,cljs.core.rest.call(null,s__21633__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21649(s__21650){return (new cljs.core.LazySeq(null,(function (){var s__21650__$1 = s__21650;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21650__$1);if(temp__4126__auto__)
{var s__21650__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21650__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21650__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21652 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21651 = (0);while(true){
if((i__21651 < size__4376__auto__))
{var vec__21655 = cljs.core._nth.call(null,c__4375__auto__,i__21651);var k = cljs.core.nth.call(null,vec__21655,(0),null);var v = cljs.core.nth.call(null,vec__21655,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21652,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21657 = (i__21651 + (1));
i__21651 = G__21657;
continue;
}
} else
{{
var G__21658 = (i__21651 + (1));
i__21651 = G__21658;
continue;
}
}
} else
{{
var G__21659 = (i__21651 + (1));
i__21651 = G__21659;
continue;
}
}
} else
{{
var G__21660 = (i__21651 + (1));
i__21651 = G__21660;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21652),iter__21649.call(null,cljs.core.chunk_rest.call(null,s__21650__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21652),null);
}
} else
{var vec__21656 = cljs.core.first.call(null,s__21650__$2);var k = cljs.core.nth.call(null,vec__21656,(0),null);var v = cljs.core.nth.call(null,vec__21656,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21649.call(null,cljs.core.rest.call(null,s__21650__$2)));
} else
{{
var G__21661 = cljs.core.rest.call(null,s__21650__$2);
s__21650__$1 = G__21661;
continue;
}
}
} else
{{
var G__21662 = cljs.core.rest.call(null,s__21650__$2);
s__21650__$1 = G__21662;
continue;
}
}
} else
{{
var G__21663 = cljs.core.rest.call(null,s__21650__$2);
s__21650__$1 = G__21663;
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
var ufv___21686 = schema.utils.use_fn_validation;var output_schema21664_21687 = schema.core.Any;var input_schema21665_21688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21666_21689 = schema.core.checker.call(null,input_schema21665_21688);var output_checker21667_21690 = schema.core.checker.call(null,output_schema21664_21687);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21686,output_schema21664_21687,input_schema21665_21688,input_checker21666_21689,output_checker21667_21690){
return (function compose_schemata(G__21668,G__21669){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21668,G__21669], null);var temp__4126__auto___21692 = input_checker21666_21689.call(null,args__6035__auto___21691);if(cljs.core.truth_(temp__4126__auto___21692))
{var error__6036__auto___21693 = temp__4126__auto___21692;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21693)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21693,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21691,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21665_21688,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21680 = G__21668;var vec__21682 = G__21680;var i2 = cljs.core.nth.call(null,vec__21682,(0),null);var o2 = cljs.core.nth.call(null,vec__21682,(1),null);var G__21681 = G__21669;var vec__21683 = G__21681;var i1 = cljs.core.nth.call(null,vec__21683,(0),null);var o1 = cljs.core.nth.call(null,vec__21683,(1),null);var G__21680__$1 = G__21680;var G__21681__$1 = G__21681;while(true){
var vec__21684 = G__21680__$1;var i2__$1 = cljs.core.nth.call(null,vec__21684,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21684,(1),null);var vec__21685 = G__21681__$1;var i1__$1 = cljs.core.nth.call(null,vec__21685,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21685,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21694 = output_checker21667_21690.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21694))
{var error__6036__auto___21695 = temp__4126__auto___21694;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21695)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21695,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21664_21687,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21686,output_schema21664_21687,input_schema21665_21688,input_checker21666_21689,output_checker21667_21690))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21664_21687,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21665_21688], null)));
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
var ufv___21774 = schema.utils.use_fn_validation;var output_schema21696_21775 = schema.core.Any;var input_schema21697_21776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21698_21777 = schema.core.checker.call(null,input_schema21697_21776);var output_checker21699_21778 = schema.core.checker.call(null,output_schema21696_21775);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778){
return (function split_schema(G__21700,G__21701){var validate__6034__auto__ = ufv___21774.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21700,G__21701], null);var temp__4126__auto___21780 = input_checker21698_21777.call(null,args__6035__auto___21779);if(cljs.core.truth_(temp__4126__auto___21780))
{var error__6036__auto___21781 = temp__4126__auto___21780;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21781)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21781,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21779,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21697_21776,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21700;var ks = G__21701;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778){
return (function iter__21738(s__21739){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778){
return (function (){var s__21739__$1 = s__21739;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21739__$1);if(temp__4126__auto__)
{var s__21739__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21739__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21739__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21741 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21740 = (0);while(true){
if((i__21740 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21740);cljs.core.chunk_append.call(null,b__21741,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21740,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21741,s__21739__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778){
return (function iter__21758(s__21759){return (new cljs.core.LazySeq(null,((function (i__21740,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21741,s__21739__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778){
return (function (){var s__21759__$1 = s__21759;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21759__$1);if(temp__4126__auto____$1)
{var s__21759__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21759__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21759__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21761 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21760 = (0);while(true){
if((i__21760 < size__4376__auto____$1))
{var vec__21764 = cljs.core._nth.call(null,c__4375__auto____$1,i__21760);var k = cljs.core.nth.call(null,vec__21764,(0),null);var v = cljs.core.nth.call(null,vec__21764,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21761,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21782 = (i__21760 + (1));
i__21760 = G__21782;
continue;
}
} else
{{
var G__21783 = (i__21760 + (1));
i__21760 = G__21783;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21761),iter__21758.call(null,cljs.core.chunk_rest.call(null,s__21759__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21761),null);
}
} else
{var vec__21765 = cljs.core.first.call(null,s__21759__$2);var k = cljs.core.nth.call(null,vec__21765,(0),null);var v = cljs.core.nth.call(null,vec__21765,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21758.call(null,cljs.core.rest.call(null,s__21759__$2)));
} else
{{
var G__21784 = cljs.core.rest.call(null,s__21759__$2);
s__21759__$1 = G__21784;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21740,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21741,s__21739__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778))
,null,null));
});})(i__21740,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21741,s__21739__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__21785 = (i__21740 + (1));
i__21740 = G__21785;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21741),iter__21738.call(null,cljs.core.chunk_rest.call(null,s__21739__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21741),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21739__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21739__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778){
return (function iter__21766(s__21767){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21739__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778){
return (function (){var s__21767__$1 = s__21767;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21767__$1);if(temp__4126__auto____$1)
{var s__21767__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21767__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21767__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21769 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21768 = (0);while(true){
if((i__21768 < size__4376__auto__))
{var vec__21772 = cljs.core._nth.call(null,c__4375__auto__,i__21768);var k = cljs.core.nth.call(null,vec__21772,(0),null);var v = cljs.core.nth.call(null,vec__21772,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21769,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21786 = (i__21768 + (1));
i__21768 = G__21786;
continue;
}
} else
{{
var G__21787 = (i__21768 + (1));
i__21768 = G__21787;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21769),iter__21766.call(null,cljs.core.chunk_rest.call(null,s__21767__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21769),null);
}
} else
{var vec__21773 = cljs.core.first.call(null,s__21767__$2);var k = cljs.core.nth.call(null,vec__21773,(0),null);var v = cljs.core.nth.call(null,vec__21773,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21766.call(null,cljs.core.rest.call(null,s__21767__$2)));
} else
{{
var G__21788 = cljs.core.rest.call(null,s__21767__$2);
s__21767__$1 = G__21788;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21739__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778))
,null,null));
});})(in_QMARK_,s__21739__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778))
;return iter__4377__auto__.call(null,s);
})()),iter__21738.call(null,cljs.core.rest.call(null,s__21739__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21789 = output_checker21699_21778.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21789))
{var error__6036__auto___21790 = temp__4126__auto___21789;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21790)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21790,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21696_21775,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21774,output_schema21696_21775,input_schema21697_21776,input_checker21698_21777,output_checker21699_21778))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21696_21775,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21697_21776], null)));
var ufv___21821 = schema.utils.use_fn_validation;var output_schema21791_21822 = plumbing.fnk.schema.GraphIOSchemata;var input_schema21792_21823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21793_21824 = schema.core.checker.call(null,input_schema21792_21823);var output_checker21794_21825 = schema.core.checker.call(null,output_schema21791_21822);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21821,output_schema21791_21822,input_schema21792_21823,input_checker21793_21824,output_checker21794_21825){
return (function sequence_schemata(G__21795,G__21796){var validate__6034__auto__ = ufv___21821.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21795,G__21796], null);var temp__4126__auto___21827 = input_checker21793_21824.call(null,args__6035__auto___21826);if(cljs.core.truth_(temp__4126__auto___21827))
{var error__6036__auto___21828 = temp__4126__auto___21827;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21828)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21828,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21826,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21792_21823,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21812 = G__21795;var vec__21814 = G__21812;var i1 = cljs.core.nth.call(null,vec__21814,(0),null);var o1 = cljs.core.nth.call(null,vec__21814,(1),null);var G__21813 = G__21796;var vec__21815 = G__21813;var k = cljs.core.nth.call(null,vec__21815,(0),null);var vec__21816 = cljs.core.nth.call(null,vec__21815,(1),null);var i2 = cljs.core.nth.call(null,vec__21816,(0),null);var o2 = cljs.core.nth.call(null,vec__21816,(1),null);var G__21812__$1 = G__21812;var G__21813__$1 = G__21813;while(true){
var vec__21817 = G__21812__$1;var i1__$1 = cljs.core.nth.call(null,vec__21817,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21817,(1),null);var vec__21818 = G__21813__$1;var k__$1 = cljs.core.nth.call(null,vec__21818,(0),null);var vec__21819 = cljs.core.nth.call(null,vec__21818,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__21819,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21819,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__21820 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__21820,(0),null);var unused = cljs.core.nth.call(null,vec__21820,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21829 = output_checker21794_21825.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21829))
{var error__6036__auto___21830 = temp__4126__auto___21829;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21830)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21830,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21791_21822,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21821,output_schema21791_21822,input_schema21792_21823,input_checker21793_21824,output_checker21794_21825))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema21791_21822,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21792_21823], null)));
