// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__19559 = p1__6064__6065__auto__;if(G__19559)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__19559.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__19559.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__19559);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__19559);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__19560_SHARP_){return (cljs.core.val.call(null,p1__19560_SHARP_) > (1));
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
var vec__19562 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__19562,(0),null);var v = cljs.core.nth.call(null,vec__19562,(1),null);var p = vec__19562;if(cljs.core.truth_(p))
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
var ufv___19568 = schema.utils.use_fn_validation;var output_schema19563_19569 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema19564_19570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker19565_19571 = schema.core.checker.call(null,input_schema19564_19570);var output_checker19566_19572 = schema.core.checker.call(null,output_schema19563_19569);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___19568,output_schema19563_19569,input_schema19564_19570,input_checker19565_19571,output_checker19566_19572){
return (function unwrap_schema_form_key(G__19567){var validate__6034__auto__ = ufv___19568.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19567], null);var temp__4126__auto___19574 = input_checker19565_19571.call(null,args__6035__auto___19573);if(cljs.core.truth_(temp__4126__auto___19574))
{var error__6036__auto___19575 = temp__4126__auto___19574;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___19575)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19575,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19573,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19564_19570,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__19567;while(true){
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
{var temp__4126__auto___19576 = output_checker19566_19572.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19576))
{var error__6036__auto___19577 = temp__4126__auto___19576;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___19577)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19577,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19563_19569,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19568,output_schema19563_19569,input_schema19564_19570,input_checker19565_19571,output_checker19566_19572))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema19563_19569,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19564_19570], null)));
var ufv___19583 = schema.utils.use_fn_validation;var output_schema19578_19584 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema19579_19585 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker19580_19586 = schema.core.checker.call(null,input_schema19579_19585);var output_checker19581_19587 = schema.core.checker.call(null,output_schema19578_19584);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___19583,output_schema19578_19584,input_schema19579_19585,input_checker19580_19586,output_checker19581_19587){
return (function explicit_schema_key_map(G__19582){var validate__6034__auto__ = ufv___19583.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19582], null);var temp__4126__auto___19589 = input_checker19580_19586.call(null,args__6035__auto___19588);if(cljs.core.truth_(temp__4126__auto___19589))
{var error__6036__auto___19590 = temp__4126__auto___19589;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___19590)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19590,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19588,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19579_19585,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__19582;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19591 = output_checker19581_19587.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19591))
{var error__6036__auto___19592 = temp__4126__auto___19591;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___19592)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19592,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19578_19584,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19583,output_schema19578_19584,input_schema19579_19585,input_checker19580_19586,output_checker19581_19587))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema19578_19584,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19579_19585], null)));
var ufv___19598 = schema.utils.use_fn_validation;var output_schema19593_19599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema19594_19600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker19595_19601 = schema.core.checker.call(null,input_schema19594_19600);var output_checker19596_19602 = schema.core.checker.call(null,output_schema19593_19599);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___19598,output_schema19593_19599,input_schema19594_19600,input_checker19595_19601,output_checker19596_19602){
return (function split_schema_keys(G__19597){var validate__6034__auto__ = ufv___19598.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19597], null);var temp__4126__auto___19604 = input_checker19595_19601.call(null,args__6035__auto___19603);if(cljs.core.truth_(temp__4126__auto___19604))
{var error__6036__auto___19605 = temp__4126__auto___19604;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___19605)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19605,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19603,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19594_19600,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__19597;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19606 = output_checker19596_19602.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19606))
{var error__6036__auto___19607 = temp__4126__auto___19606;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___19607)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19607,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19593_19599,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19598,output_schema19593_19599,input_schema19594_19600,input_checker19595_19601,output_checker19596_19602))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema19593_19599,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19594_19600], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__19611){var vec__19612 = p__19611;var k = cljs.core.nth.call(null,vec__19612,(0),null);var v = cljs.core.nth.call(null,vec__19612,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__19613 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__19613,(0),null);var ov = cljs.core.nth.call(null,vec__19613,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__19614){
var key_project = cljs.core.first(arglist__19614);
arglist__19614 = cljs.core.next(arglist__19614);
var key_combine = cljs.core.first(arglist__19614);
arglist__19614 = cljs.core.next(arglist__19614);
var val_combine = cljs.core.first(arglist__19614);
var maps = cljs.core.rest(arglist__19614);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___19622 = schema.utils.use_fn_validation;var output_schema19616_19623 = plumbing.fnk.schema.InputSchema;var input_schema19617_19624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker19618_19625 = schema.core.checker.call(null,input_schema19617_19624);var output_checker19619_19626 = schema.core.checker.call(null,output_schema19616_19623);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___19622,output_schema19616_19623,input_schema19617_19624,input_checker19618_19625,output_checker19619_19626){
return (function union_input_schemata(G__19620,G__19621){var validate__6034__auto__ = ufv___19622.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19620,G__19621], null);var temp__4126__auto___19628 = input_checker19618_19625.call(null,args__6035__auto___19627);if(cljs.core.truth_(temp__4126__auto___19628))
{var error__6036__auto___19629 = temp__4126__auto___19628;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___19629)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19629,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19627,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19617_19624,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__19620;var i2 = G__19621;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___19622,output_schema19616_19623,input_schema19617_19624,input_checker19618_19625,output_checker19619_19626){
return (function (p1__19615_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__19615_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__19615_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___19622,output_schema19616_19623,input_schema19617_19624,input_checker19618_19625,output_checker19619_19626))
,((function (validate__6034__auto__,ufv___19622,output_schema19616_19623,input_schema19617_19624,input_checker19618_19625,output_checker19619_19626){
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
});})(validate__6034__auto__,ufv___19622,output_schema19616_19623,input_schema19617_19624,input_checker19618_19625,output_checker19619_19626))
,((function (validate__6034__auto__,ufv___19622,output_schema19616_19623,input_schema19617_19624,input_checker19618_19625,output_checker19619_19626){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___19622,output_schema19616_19623,input_schema19617_19624,input_checker19618_19625,output_checker19619_19626))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19630 = output_checker19619_19626.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19630))
{var error__6036__auto___19631 = temp__4126__auto___19630;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___19631)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19631,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19616_19623,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19622,output_schema19616_19623,input_schema19617_19624,input_checker19618_19625,output_checker19619_19626))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema19616_19623,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19617_19624], null)));
var ufv___19637 = schema.utils.use_fn_validation;var output_schema19632_19638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema19633_19639 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker19634_19640 = schema.core.checker.call(null,input_schema19633_19639);var output_checker19635_19641 = schema.core.checker.call(null,output_schema19632_19638);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___19637,output_schema19632_19638,input_schema19633_19639,input_checker19634_19640,output_checker19635_19641){
return (function required_toplevel_keys(G__19636){var validate__6034__auto__ = ufv___19637.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19636], null);var temp__4126__auto___19643 = input_checker19634_19640.call(null,args__6035__auto___19642);if(cljs.core.truth_(temp__4126__auto___19643))
{var error__6036__auto___19644 = temp__4126__auto___19643;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___19644)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19644,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19642,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19633_19639,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__19636;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___19637,output_schema19632_19638,input_schema19633_19639,input_checker19634_19640,output_checker19635_19641){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___19637,output_schema19632_19638,input_schema19633_19639,input_checker19634_19640,output_checker19635_19641))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19645 = output_checker19635_19641.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19645))
{var error__6036__auto___19646 = temp__4126__auto___19645;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___19646)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19646,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19632_19638,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19637,output_schema19632_19638,input_schema19633_19639,input_checker19634_19640,output_checker19635_19641))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema19632_19638,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19633_19639], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__19655(s__19656){return (new cljs.core.LazySeq(null,(function (){var s__19656__$1 = s__19656;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19656__$1);if(temp__4126__auto__)
{var s__19656__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19656__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19656__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19658 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19657 = (0);while(true){
if((i__19657 < size__4376__auto__))
{var vec__19661 = cljs.core._nth.call(null,c__4375__auto__,i__19657);var k = cljs.core.nth.call(null,vec__19661,(0),null);var v = cljs.core.nth.call(null,vec__19661,(1),null);cljs.core.chunk_append.call(null,b__19658,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__19663 = (i__19657 + (1));
i__19657 = G__19663;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19658),iter__19655.call(null,cljs.core.chunk_rest.call(null,s__19656__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19658),null);
}
} else
{var vec__19662 = cljs.core.first.call(null,s__19656__$2);var k = cljs.core.nth.call(null,vec__19662,(0),null);var v = cljs.core.nth.call(null,vec__19662,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__19655.call(null,cljs.core.rest.call(null,s__19656__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__19672(s__19673){return (new cljs.core.LazySeq(null,(function (){var s__19673__$1 = s__19673;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19673__$1);if(temp__4126__auto__)
{var s__19673__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19673__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19673__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19675 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19674 = (0);while(true){
if((i__19674 < size__4376__auto__))
{var vec__19678 = cljs.core._nth.call(null,c__4375__auto__,i__19674);var k = cljs.core.nth.call(null,vec__19678,(0),null);var v = cljs.core.nth.call(null,vec__19678,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__19675,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__19680 = (i__19674 + (1));
i__19674 = G__19680;
continue;
}
} else
{{
var G__19681 = (i__19674 + (1));
i__19674 = G__19681;
continue;
}
}
} else
{{
var G__19682 = (i__19674 + (1));
i__19674 = G__19682;
continue;
}
}
} else
{{
var G__19683 = (i__19674 + (1));
i__19674 = G__19683;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19675),iter__19672.call(null,cljs.core.chunk_rest.call(null,s__19673__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19675),null);
}
} else
{var vec__19679 = cljs.core.first.call(null,s__19673__$2);var k = cljs.core.nth.call(null,vec__19679,(0),null);var v = cljs.core.nth.call(null,vec__19679,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__19672.call(null,cljs.core.rest.call(null,s__19673__$2)));
} else
{{
var G__19684 = cljs.core.rest.call(null,s__19673__$2);
s__19673__$1 = G__19684;
continue;
}
}
} else
{{
var G__19685 = cljs.core.rest.call(null,s__19673__$2);
s__19673__$1 = G__19685;
continue;
}
}
} else
{{
var G__19686 = cljs.core.rest.call(null,s__19673__$2);
s__19673__$1 = G__19686;
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
var ufv___19709 = schema.utils.use_fn_validation;var output_schema19687_19710 = schema.core.Any;var input_schema19688_19711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker19689_19712 = schema.core.checker.call(null,input_schema19688_19711);var output_checker19690_19713 = schema.core.checker.call(null,output_schema19687_19710);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___19709,output_schema19687_19710,input_schema19688_19711,input_checker19689_19712,output_checker19690_19713){
return (function compose_schemata(G__19691,G__19692){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___19714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19691,G__19692], null);var temp__4126__auto___19715 = input_checker19689_19712.call(null,args__6035__auto___19714);if(cljs.core.truth_(temp__4126__auto___19715))
{var error__6036__auto___19716 = temp__4126__auto___19715;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___19716)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19716,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19714,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19688_19711,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__19703 = G__19691;var vec__19705 = G__19703;var i2 = cljs.core.nth.call(null,vec__19705,(0),null);var o2 = cljs.core.nth.call(null,vec__19705,(1),null);var G__19704 = G__19692;var vec__19706 = G__19704;var i1 = cljs.core.nth.call(null,vec__19706,(0),null);var o1 = cljs.core.nth.call(null,vec__19706,(1),null);var G__19703__$1 = G__19703;var G__19704__$1 = G__19704;while(true){
var vec__19707 = G__19703__$1;var i2__$1 = cljs.core.nth.call(null,vec__19707,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__19707,(1),null);var vec__19708 = G__19704__$1;var i1__$1 = cljs.core.nth.call(null,vec__19708,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__19708,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___19717 = output_checker19690_19713.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19717))
{var error__6036__auto___19718 = temp__4126__auto___19717;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___19718)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19718,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19687_19710,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19709,output_schema19687_19710,input_schema19688_19711,input_checker19689_19712,output_checker19690_19713))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema19687_19710,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19688_19711], null)));
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
var ufv___19797 = schema.utils.use_fn_validation;var output_schema19719_19798 = schema.core.Any;var input_schema19720_19799 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker19721_19800 = schema.core.checker.call(null,input_schema19720_19799);var output_checker19722_19801 = schema.core.checker.call(null,output_schema19719_19798);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801){
return (function split_schema(G__19723,G__19724){var validate__6034__auto__ = ufv___19797.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19723,G__19724], null);var temp__4126__auto___19803 = input_checker19721_19800.call(null,args__6035__auto___19802);if(cljs.core.truth_(temp__4126__auto___19803))
{var error__6036__auto___19804 = temp__4126__auto___19803;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___19804)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19804,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19802,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19720_19799,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__19723;var ks = G__19724;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801){
return (function iter__19761(s__19762){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801){
return (function (){var s__19762__$1 = s__19762;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19762__$1);if(temp__4126__auto__)
{var s__19762__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19762__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19762__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19764 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19763 = (0);while(true){
if((i__19763 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__19763);cljs.core.chunk_append.call(null,b__19764,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__19763,in_QMARK_,c__4375__auto__,size__4376__auto__,b__19764,s__19762__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801){
return (function iter__19781(s__19782){return (new cljs.core.LazySeq(null,((function (i__19763,in_QMARK_,c__4375__auto__,size__4376__auto__,b__19764,s__19762__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801){
return (function (){var s__19782__$1 = s__19782;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19782__$1);if(temp__4126__auto____$1)
{var s__19782__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19782__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__19782__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__19784 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__19783 = (0);while(true){
if((i__19783 < size__4376__auto____$1))
{var vec__19787 = cljs.core._nth.call(null,c__4375__auto____$1,i__19783);var k = cljs.core.nth.call(null,vec__19787,(0),null);var v = cljs.core.nth.call(null,vec__19787,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__19784,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19805 = (i__19783 + (1));
i__19783 = G__19805;
continue;
}
} else
{{
var G__19806 = (i__19783 + (1));
i__19783 = G__19806;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19784),iter__19781.call(null,cljs.core.chunk_rest.call(null,s__19782__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19784),null);
}
} else
{var vec__19788 = cljs.core.first.call(null,s__19782__$2);var k = cljs.core.nth.call(null,vec__19788,(0),null);var v = cljs.core.nth.call(null,vec__19788,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19781.call(null,cljs.core.rest.call(null,s__19782__$2)));
} else
{{
var G__19807 = cljs.core.rest.call(null,s__19782__$2);
s__19782__$1 = G__19807;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__19763,in_QMARK_,c__4375__auto__,size__4376__auto__,b__19764,s__19762__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801))
,null,null));
});})(i__19763,in_QMARK_,c__4375__auto__,size__4376__auto__,b__19764,s__19762__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__19808 = (i__19763 + (1));
i__19763 = G__19808;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19764),iter__19761.call(null,cljs.core.chunk_rest.call(null,s__19762__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19764),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__19762__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__19762__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801){
return (function iter__19789(s__19790){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__19762__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801){
return (function (){var s__19790__$1 = s__19790;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19790__$1);if(temp__4126__auto____$1)
{var s__19790__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19790__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__19790__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__19792 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__19791 = (0);while(true){
if((i__19791 < size__4376__auto__))
{var vec__19795 = cljs.core._nth.call(null,c__4375__auto__,i__19791);var k = cljs.core.nth.call(null,vec__19795,(0),null);var v = cljs.core.nth.call(null,vec__19795,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__19792,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__19809 = (i__19791 + (1));
i__19791 = G__19809;
continue;
}
} else
{{
var G__19810 = (i__19791 + (1));
i__19791 = G__19810;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19792),iter__19789.call(null,cljs.core.chunk_rest.call(null,s__19790__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19792),null);
}
} else
{var vec__19796 = cljs.core.first.call(null,s__19790__$2);var k = cljs.core.nth.call(null,vec__19796,(0),null);var v = cljs.core.nth.call(null,vec__19796,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19789.call(null,cljs.core.rest.call(null,s__19790__$2)));
} else
{{
var G__19811 = cljs.core.rest.call(null,s__19790__$2);
s__19790__$1 = G__19811;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__19762__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801))
,null,null));
});})(in_QMARK_,s__19762__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801))
;return iter__4377__auto__.call(null,s);
})()),iter__19761.call(null,cljs.core.rest.call(null,s__19762__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19812 = output_checker19722_19801.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19812))
{var error__6036__auto___19813 = temp__4126__auto___19812;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___19813)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19813,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19719_19798,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19797,output_schema19719_19798,input_schema19720_19799,input_checker19721_19800,output_checker19722_19801))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema19719_19798,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19720_19799], null)));
var ufv___19844 = schema.utils.use_fn_validation;var output_schema19814_19845 = plumbing.fnk.schema.GraphIOSchemata;var input_schema19815_19846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker19816_19847 = schema.core.checker.call(null,input_schema19815_19846);var output_checker19817_19848 = schema.core.checker.call(null,output_schema19814_19845);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___19844,output_schema19814_19845,input_schema19815_19846,input_checker19816_19847,output_checker19817_19848){
return (function sequence_schemata(G__19818,G__19819){var validate__6034__auto__ = ufv___19844.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___19849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19818,G__19819], null);var temp__4126__auto___19850 = input_checker19816_19847.call(null,args__6035__auto___19849);if(cljs.core.truth_(temp__4126__auto___19850))
{var error__6036__auto___19851 = temp__4126__auto___19850;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___19851)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19851,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___19849,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19815_19846,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__19835 = G__19818;var vec__19837 = G__19835;var i1 = cljs.core.nth.call(null,vec__19837,(0),null);var o1 = cljs.core.nth.call(null,vec__19837,(1),null);var G__19836 = G__19819;var vec__19838 = G__19836;var k = cljs.core.nth.call(null,vec__19838,(0),null);var vec__19839 = cljs.core.nth.call(null,vec__19838,(1),null);var i2 = cljs.core.nth.call(null,vec__19839,(0),null);var o2 = cljs.core.nth.call(null,vec__19839,(1),null);var G__19835__$1 = G__19835;var G__19836__$1 = G__19836;while(true){
var vec__19840 = G__19835__$1;var i1__$1 = cljs.core.nth.call(null,vec__19840,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__19840,(1),null);var vec__19841 = G__19836__$1;var k__$1 = cljs.core.nth.call(null,vec__19841,(0),null);var vec__19842 = cljs.core.nth.call(null,vec__19841,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__19842,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__19842,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__19843 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__19843,(0),null);var unused = cljs.core.nth.call(null,vec__19843,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___19852 = output_checker19817_19848.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___19852))
{var error__6036__auto___19853 = temp__4126__auto___19852;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___19853)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___19853,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19814_19845,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___19844,output_schema19814_19845,input_schema19815_19846,input_checker19816_19847,output_checker19817_19848))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema19814_19845,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19815_19846], null)));
