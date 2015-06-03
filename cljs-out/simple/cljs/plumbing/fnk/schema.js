// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__19557 = p1__6064__6065__auto__;if(G__19557)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__19557.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__19557.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__19557);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__19557);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__19558_SHARP_){return (cljs.core.val.call(null,p1__19558_SHARP_) > (1));
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
var vec__19560 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__19560,(0),null);var v = cljs.core.nth.call(null,vec__19560,(1),null);var p = vec__19560;if(cljs.core.truth_(p))
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
var ufv___19566 = schema.utils.use_fn_validation;var output_schema19561_19567 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema19562_19568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker19563_19569 = schema.core.checker.call(null,input_schema19562_19568);var output_checker19564_19570 = schema.core.checker.call(null,output_schema19561_19567);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___19566,output_schema19561_19567,input_schema19562_19568,input_checker19563_19569,output_checker19564_19570){
return (function unwrap_schema_form_key(G__19565){var validate__6034__auto__ = ufv___19566.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19565], null);var temp__4126__auto___19572 = input_checker19563_19569.call(null,args__6035__auto___19571);if(cljs.core.truth_(temp__4126__auto___19572))
{var error__6036__auto___19573 = temp__4126__auto___19572;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___19573)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19573,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19571,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19562_19568,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__19565;while(true){
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
{var temp__4126__auto___19574 = output_checker19564_19570.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19574))
{var error__6036__auto___19575 = temp__4126__auto___19574;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___19575)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19575,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19561_19567,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19566,output_schema19561_19567,input_schema19562_19568,input_checker19563_19569,output_checker19564_19570))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema19561_19567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19562_19568], null)));
var ufv___19581 = schema.utils.use_fn_validation;var output_schema19576_19582 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema19577_19583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker19578_19584 = schema.core.checker.call(null,input_schema19577_19583);var output_checker19579_19585 = schema.core.checker.call(null,output_schema19576_19582);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___19581,output_schema19576_19582,input_schema19577_19583,input_checker19578_19584,output_checker19579_19585){
return (function explicit_schema_key_map(G__19580){var validate__6034__auto__ = ufv___19581.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19580], null);var temp__4126__auto___19587 = input_checker19578_19584.call(null,args__6035__auto___19586);if(cljs.core.truth_(temp__4126__auto___19587))
{var error__6036__auto___19588 = temp__4126__auto___19587;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___19588)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19588,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19586,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19577_19583,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__19580;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19589 = output_checker19579_19585.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19589))
{var error__6036__auto___19590 = temp__4126__auto___19589;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___19590)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19590,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19576_19582,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19581,output_schema19576_19582,input_schema19577_19583,input_checker19578_19584,output_checker19579_19585))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema19576_19582,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19577_19583], null)));
var ufv___19596 = schema.utils.use_fn_validation;var output_schema19591_19597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema19592_19598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker19593_19599 = schema.core.checker.call(null,input_schema19592_19598);var output_checker19594_19600 = schema.core.checker.call(null,output_schema19591_19597);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___19596,output_schema19591_19597,input_schema19592_19598,input_checker19593_19599,output_checker19594_19600){
return (function split_schema_keys(G__19595){var validate__6034__auto__ = ufv___19596.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19595], null);var temp__4126__auto___19602 = input_checker19593_19599.call(null,args__6035__auto___19601);if(cljs.core.truth_(temp__4126__auto___19602))
{var error__6036__auto___19603 = temp__4126__auto___19602;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___19603)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19603,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19601,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19592_19598,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__19595;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19604 = output_checker19594_19600.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19604))
{var error__6036__auto___19605 = temp__4126__auto___19604;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___19605)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19605,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19591_19597,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19596,output_schema19591_19597,input_schema19592_19598,input_checker19593_19599,output_checker19594_19600))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema19591_19597,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19592_19598], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__19609){var vec__19610 = p__19609;var k = cljs.core.nth.call(null,vec__19610,(0),null);var v = cljs.core.nth.call(null,vec__19610,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__19611 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__19611,(0),null);var ov = cljs.core.nth.call(null,vec__19611,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__19612){
var key_project = cljs.core.first(arglist__19612);
arglist__19612 = cljs.core.next(arglist__19612);
var key_combine = cljs.core.first(arglist__19612);
arglist__19612 = cljs.core.next(arglist__19612);
var val_combine = cljs.core.first(arglist__19612);
var maps = cljs.core.rest(arglist__19612);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___19620 = schema.utils.use_fn_validation;var output_schema19614_19621 = plumbing.fnk.schema.InputSchema;var input_schema19615_19622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker19616_19623 = schema.core.checker.call(null,input_schema19615_19622);var output_checker19617_19624 = schema.core.checker.call(null,output_schema19614_19621);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___19620,output_schema19614_19621,input_schema19615_19622,input_checker19616_19623,output_checker19617_19624){
return (function union_input_schemata(G__19618,G__19619){var validate__6034__auto__ = ufv___19620.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19618,G__19619], null);var temp__4126__auto___19626 = input_checker19616_19623.call(null,args__6035__auto___19625);if(cljs.core.truth_(temp__4126__auto___19626))
{var error__6036__auto___19627 = temp__4126__auto___19626;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___19627)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19627,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19625,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19615_19622,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__19618;var i2 = G__19619;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___19620,output_schema19614_19621,input_schema19615_19622,input_checker19616_19623,output_checker19617_19624){
return (function (p1__19613_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__19613_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__19613_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___19620,output_schema19614_19621,input_schema19615_19622,input_checker19616_19623,output_checker19617_19624))
,((function (validate__6034__auto__,ufv___19620,output_schema19614_19621,input_schema19615_19622,input_checker19616_19623,output_checker19617_19624){
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
});})(validate__6034__auto__,ufv___19620,output_schema19614_19621,input_schema19615_19622,input_checker19616_19623,output_checker19617_19624))
,((function (validate__6034__auto__,ufv___19620,output_schema19614_19621,input_schema19615_19622,input_checker19616_19623,output_checker19617_19624){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___19620,output_schema19614_19621,input_schema19615_19622,input_checker19616_19623,output_checker19617_19624))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19628 = output_checker19617_19624.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19628))
{var error__6036__auto___19629 = temp__4126__auto___19628;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___19629)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19629,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19614_19621,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19620,output_schema19614_19621,input_schema19615_19622,input_checker19616_19623,output_checker19617_19624))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema19614_19621,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19615_19622], null)));
var ufv___19635 = schema.utils.use_fn_validation;var output_schema19630_19636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema19631_19637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker19632_19638 = schema.core.checker.call(null,input_schema19631_19637);var output_checker19633_19639 = schema.core.checker.call(null,output_schema19630_19636);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___19635,output_schema19630_19636,input_schema19631_19637,input_checker19632_19638,output_checker19633_19639){
return (function required_toplevel_keys(G__19634){var validate__6034__auto__ = ufv___19635.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19640 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19634], null);var temp__4126__auto___19641 = input_checker19632_19638.call(null,args__6035__auto___19640);if(cljs.core.truth_(temp__4126__auto___19641))
{var error__6036__auto___19642 = temp__4126__auto___19641;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___19642)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19642,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19640,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19631_19637,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__19634;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___19635,output_schema19630_19636,input_schema19631_19637,input_checker19632_19638,output_checker19633_19639){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___19635,output_schema19630_19636,input_schema19631_19637,input_checker19632_19638,output_checker19633_19639))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19643 = output_checker19633_19639.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19643))
{var error__6036__auto___19644 = temp__4126__auto___19643;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___19644)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19644,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19630_19636,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19635,output_schema19630_19636,input_schema19631_19637,input_checker19632_19638,output_checker19633_19639))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema19630_19636,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19631_19637], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__19653(s__19654){return (new cljs.core.LazySeq(null,(function (){var s__19654__$1 = s__19654;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19654__$1);if(temp__4126__auto__)
{var s__19654__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19654__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19654__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19656 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19655 = (0);while(true){
if((i__19655 < size__4376__auto__))
{var vec__19659 = cljs.core._nth.call(null,c__4375__auto__,i__19655);var k = cljs.core.nth.call(null,vec__19659,(0),null);var v = cljs.core.nth.call(null,vec__19659,(1),null);cljs.core.chunk_append.call(null,b__19656,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__19661 = (i__19655 + (1));
i__19655 = G__19661;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19656),iter__19653.call(null,cljs.core.chunk_rest.call(null,s__19654__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19656),null);
}
} else
{var vec__19660 = cljs.core.first.call(null,s__19654__$2);var k = cljs.core.nth.call(null,vec__19660,(0),null);var v = cljs.core.nth.call(null,vec__19660,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__19653.call(null,cljs.core.rest.call(null,s__19654__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__19670(s__19671){return (new cljs.core.LazySeq(null,(function (){var s__19671__$1 = s__19671;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19671__$1);if(temp__4126__auto__)
{var s__19671__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19671__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19671__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19673 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19672 = (0);while(true){
if((i__19672 < size__4376__auto__))
{var vec__19676 = cljs.core._nth.call(null,c__4375__auto__,i__19672);var k = cljs.core.nth.call(null,vec__19676,(0),null);var v = cljs.core.nth.call(null,vec__19676,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__19673,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__19678 = (i__19672 + (1));
i__19672 = G__19678;
continue;
}
} else
{{
var G__19679 = (i__19672 + (1));
i__19672 = G__19679;
continue;
}
}
} else
{{
var G__19680 = (i__19672 + (1));
i__19672 = G__19680;
continue;
}
}
} else
{{
var G__19681 = (i__19672 + (1));
i__19672 = G__19681;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19673),iter__19670.call(null,cljs.core.chunk_rest.call(null,s__19671__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19673),null);
}
} else
{var vec__19677 = cljs.core.first.call(null,s__19671__$2);var k = cljs.core.nth.call(null,vec__19677,(0),null);var v = cljs.core.nth.call(null,vec__19677,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__19670.call(null,cljs.core.rest.call(null,s__19671__$2)));
} else
{{
var G__19682 = cljs.core.rest.call(null,s__19671__$2);
s__19671__$1 = G__19682;
continue;
}
}
} else
{{
var G__19683 = cljs.core.rest.call(null,s__19671__$2);
s__19671__$1 = G__19683;
continue;
}
}
} else
{{
var G__19684 = cljs.core.rest.call(null,s__19671__$2);
s__19671__$1 = G__19684;
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
var ufv___19707 = schema.utils.use_fn_validation;var output_schema19685_19708 = schema.core.Any;var input_schema19686_19709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker19687_19710 = schema.core.checker.call(null,input_schema19686_19709);var output_checker19688_19711 = schema.core.checker.call(null,output_schema19685_19708);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___19707,output_schema19685_19708,input_schema19686_19709,input_checker19687_19710,output_checker19688_19711){
return (function compose_schemata(G__19689,G__19690){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___19712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19689,G__19690], null);var temp__4126__auto___19713 = input_checker19687_19710.call(null,args__6035__auto___19712);if(cljs.core.truth_(temp__4126__auto___19713))
{var error__6036__auto___19714 = temp__4126__auto___19713;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___19714)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19714,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19712,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19686_19709,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__19701 = G__19689;var vec__19703 = G__19701;var i2 = cljs.core.nth.call(null,vec__19703,(0),null);var o2 = cljs.core.nth.call(null,vec__19703,(1),null);var G__19702 = G__19690;var vec__19704 = G__19702;var i1 = cljs.core.nth.call(null,vec__19704,(0),null);var o1 = cljs.core.nth.call(null,vec__19704,(1),null);var G__19701__$1 = G__19701;var G__19702__$1 = G__19702;while(true){
var vec__19705 = G__19701__$1;var i2__$1 = cljs.core.nth.call(null,vec__19705,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__19705,(1),null);var vec__19706 = G__19702__$1;var i1__$1 = cljs.core.nth.call(null,vec__19706,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__19706,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___19715 = output_checker19688_19711.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19715))
{var error__6036__auto___19716 = temp__4126__auto___19715;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___19716)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19716,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19685_19708,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19707,output_schema19685_19708,input_schema19686_19709,input_checker19687_19710,output_checker19688_19711))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema19685_19708,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19686_19709], null)));
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
var ufv___19795 = schema.utils.use_fn_validation;var output_schema19717_19796 = schema.core.Any;var input_schema19718_19797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker19719_19798 = schema.core.checker.call(null,input_schema19718_19797);var output_checker19720_19799 = schema.core.checker.call(null,output_schema19717_19796);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799){
return (function split_schema(G__19721,G__19722){var validate__6034__auto__ = ufv___19795.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19721,G__19722], null);var temp__4126__auto___19801 = input_checker19719_19798.call(null,args__6035__auto___19800);if(cljs.core.truth_(temp__4126__auto___19801))
{var error__6036__auto___19802 = temp__4126__auto___19801;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___19802)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19802,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19800,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19718_19797,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__19721;var ks = G__19722;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799){
return (function iter__19759(s__19760){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799){
return (function (){var s__19760__$1 = s__19760;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19760__$1);if(temp__4126__auto__)
{var s__19760__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19760__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19760__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19762 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19761 = (0);while(true){
if((i__19761 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__19761);cljs.core.chunk_append.call(null,b__19762,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__19761,in_QMARK_,c__4375__auto__,size__4376__auto__,b__19762,s__19760__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799){
return (function iter__19779(s__19780){return (new cljs.core.LazySeq(null,((function (i__19761,in_QMARK_,c__4375__auto__,size__4376__auto__,b__19762,s__19760__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799){
return (function (){var s__19780__$1 = s__19780;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19780__$1);if(temp__4126__auto____$1)
{var s__19780__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19780__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__19780__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__19782 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__19781 = (0);while(true){
if((i__19781 < size__4376__auto____$1))
{var vec__19785 = cljs.core._nth.call(null,c__4375__auto____$1,i__19781);var k = cljs.core.nth.call(null,vec__19785,(0),null);var v = cljs.core.nth.call(null,vec__19785,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__19782,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19803 = (i__19781 + (1));
i__19781 = G__19803;
continue;
}
} else
{{
var G__19804 = (i__19781 + (1));
i__19781 = G__19804;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19782),iter__19779.call(null,cljs.core.chunk_rest.call(null,s__19780__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19782),null);
}
} else
{var vec__19786 = cljs.core.first.call(null,s__19780__$2);var k = cljs.core.nth.call(null,vec__19786,(0),null);var v = cljs.core.nth.call(null,vec__19786,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19779.call(null,cljs.core.rest.call(null,s__19780__$2)));
} else
{{
var G__19805 = cljs.core.rest.call(null,s__19780__$2);
s__19780__$1 = G__19805;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__19761,in_QMARK_,c__4375__auto__,size__4376__auto__,b__19762,s__19760__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799))
,null,null));
});})(i__19761,in_QMARK_,c__4375__auto__,size__4376__auto__,b__19762,s__19760__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__19806 = (i__19761 + (1));
i__19761 = G__19806;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19762),iter__19759.call(null,cljs.core.chunk_rest.call(null,s__19760__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19762),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__19760__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__19760__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799){
return (function iter__19787(s__19788){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__19760__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799){
return (function (){var s__19788__$1 = s__19788;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19788__$1);if(temp__4126__auto____$1)
{var s__19788__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19788__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19788__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19790 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19789 = (0);while(true){
if((i__19789 < size__4376__auto__))
{var vec__19793 = cljs.core._nth.call(null,c__4375__auto__,i__19789);var k = cljs.core.nth.call(null,vec__19793,(0),null);var v = cljs.core.nth.call(null,vec__19793,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__19790,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19807 = (i__19789 + (1));
i__19789 = G__19807;
continue;
}
} else
{{
var G__19808 = (i__19789 + (1));
i__19789 = G__19808;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19790),iter__19787.call(null,cljs.core.chunk_rest.call(null,s__19788__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19790),null);
}
} else
{var vec__19794 = cljs.core.first.call(null,s__19788__$2);var k = cljs.core.nth.call(null,vec__19794,(0),null);var v = cljs.core.nth.call(null,vec__19794,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19787.call(null,cljs.core.rest.call(null,s__19788__$2)));
} else
{{
var G__19809 = cljs.core.rest.call(null,s__19788__$2);
s__19788__$1 = G__19809;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__19760__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799))
,null,null));
});})(in_QMARK_,s__19760__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799))
;return iter__4377__auto__.call(null,s);
})()),iter__19759.call(null,cljs.core.rest.call(null,s__19760__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19810 = output_checker19720_19799.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19810))
{var error__6036__auto___19811 = temp__4126__auto___19810;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___19811)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19811,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19717_19796,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19795,output_schema19717_19796,input_schema19718_19797,input_checker19719_19798,output_checker19720_19799))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema19717_19796,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19718_19797], null)));
var ufv___19842 = schema.utils.use_fn_validation;var output_schema19812_19843 = plumbing.fnk.schema.GraphIOSchemata;var input_schema19813_19844 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker19814_19845 = schema.core.checker.call(null,input_schema19813_19844);var output_checker19815_19846 = schema.core.checker.call(null,output_schema19812_19843);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___19842,output_schema19812_19843,input_schema19813_19844,input_checker19814_19845,output_checker19815_19846){
return (function sequence_schemata(G__19816,G__19817){var validate__6034__auto__ = ufv___19842.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19816,G__19817], null);var temp__4126__auto___19848 = input_checker19814_19845.call(null,args__6035__auto___19847);if(cljs.core.truth_(temp__4126__auto___19848))
{var error__6036__auto___19849 = temp__4126__auto___19848;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___19849)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19849,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19847,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19813_19844,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__19833 = G__19816;var vec__19835 = G__19833;var i1 = cljs.core.nth.call(null,vec__19835,(0),null);var o1 = cljs.core.nth.call(null,vec__19835,(1),null);var G__19834 = G__19817;var vec__19836 = G__19834;var k = cljs.core.nth.call(null,vec__19836,(0),null);var vec__19837 = cljs.core.nth.call(null,vec__19836,(1),null);var i2 = cljs.core.nth.call(null,vec__19837,(0),null);var o2 = cljs.core.nth.call(null,vec__19837,(1),null);var G__19833__$1 = G__19833;var G__19834__$1 = G__19834;while(true){
var vec__19838 = G__19833__$1;var i1__$1 = cljs.core.nth.call(null,vec__19838,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__19838,(1),null);var vec__19839 = G__19834__$1;var k__$1 = cljs.core.nth.call(null,vec__19839,(0),null);var vec__19840 = cljs.core.nth.call(null,vec__19839,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__19840,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__19840,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__19841 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__19841,(0),null);var unused = cljs.core.nth.call(null,vec__19841,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19850 = output_checker19815_19846.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19850))
{var error__6036__auto___19851 = temp__4126__auto___19850;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___19851)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19851,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19812_19843,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19842,output_schema19812_19843,input_schema19813_19844,input_checker19814_19845,output_checker19815_19846))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema19812_19843,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19813_19844], null)));
