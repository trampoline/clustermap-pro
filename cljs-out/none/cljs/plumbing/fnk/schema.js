// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__13977__13978__auto__){var G__33823 = p1__13977__13978__auto__;if(G__33823)
{var bit__12215__auto__ = null;if(cljs.core.truth_((function (){var or__11552__auto__ = bit__12215__auto__;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return G__33823.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__33823.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__33823);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__33823);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__33824_SHARP_){return (cljs.core.val.call(null,p1__33824_SHARP_) > (1));
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
var vec__33826 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__33826,(0),null);var v = cljs.core.nth.call(null,vec__33826,(1),null);var p = vec__33826;if(cljs.core.truth_(p))
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
var ufv___33832 = schema.utils.use_fn_validation;var output_schema33827_33833 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema33828_33834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker33829_33835 = schema.core.checker.call(null,input_schema33828_33834);var output_checker33830_33836 = schema.core.checker.call(null,output_schema33827_33833);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___33832,output_schema33827_33833,input_schema33828_33834,input_checker33829_33835,output_checker33830_33836){
return (function unwrap_schema_form_key(G__33831){var validate__13947__auto__ = ufv___33832.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___33837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33831], null);var temp__4126__auto___33838 = input_checker33829_33835.call(null,args__13948__auto___33837);if(cljs.core.truth_(temp__4126__auto___33838))
{var error__13949__auto___33839 = temp__4126__auto___33838;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13949__auto___33839)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33839,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___33837,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33828_33834,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var k = G__33831;while(true){
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
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___33840 = output_checker33830_33836.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___33840))
{var error__13949__auto___33841 = temp__4126__auto___33840;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13949__auto___33841)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33841,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33827_33833,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv___33832,output_schema33827_33833,input_schema33828_33834,input_checker33829_33835,output_checker33830_33836))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema33827_33833,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33828_33834], null)));
var ufv___33847 = schema.utils.use_fn_validation;var output_schema33842_33848 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema33843_33849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker33844_33850 = schema.core.checker.call(null,input_schema33843_33849);var output_checker33845_33851 = schema.core.checker.call(null,output_schema33842_33848);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___33847,output_schema33842_33848,input_schema33843_33849,input_checker33844_33850,output_checker33845_33851){
return (function explicit_schema_key_map(G__33846){var validate__13947__auto__ = ufv___33847.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___33852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33846], null);var temp__4126__auto___33853 = input_checker33844_33850.call(null,args__13948__auto___33852);if(cljs.core.truth_(temp__4126__auto___33853))
{var error__13949__auto___33854 = temp__4126__auto___33853;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13949__auto___33854)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33854,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___33852,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33843_33849,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var s = G__33846;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___33855 = output_checker33845_33851.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___33855))
{var error__13949__auto___33856 = temp__4126__auto___33855;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13949__auto___33856)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33856,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33842_33848,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv___33847,output_schema33842_33848,input_schema33843_33849,input_checker33844_33850,output_checker33845_33851))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema33842_33848,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33843_33849], null)));
var ufv___33862 = schema.utils.use_fn_validation;var output_schema33857_33863 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema33858_33864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker33859_33865 = schema.core.checker.call(null,input_schema33858_33864);var output_checker33860_33866 = schema.core.checker.call(null,output_schema33857_33863);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___33862,output_schema33857_33863,input_schema33858_33864,input_checker33859_33865,output_checker33860_33866){
return (function split_schema_keys(G__33861){var validate__13947__auto__ = ufv___33862.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___33867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33861], null);var temp__4126__auto___33868 = input_checker33859_33865.call(null,args__13948__auto___33867);if(cljs.core.truth_(temp__4126__auto___33868))
{var error__13949__auto___33869 = temp__4126__auto___33868;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13949__auto___33869)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33869,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___33867,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33858_33864,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var s = G__33861;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___33870 = output_checker33860_33866.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___33870))
{var error__13949__auto___33871 = temp__4126__auto___33870;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13949__auto___33871)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33871,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33857_33863,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv___33862,output_schema33857_33863,input_schema33858_33864,input_checker33859_33865,output_checker33860_33866))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema33857_33863,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33858_33864], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__33875){var vec__33876 = p__33875;var k = cljs.core.nth.call(null,vec__33876,(0),null);var v = cljs.core.nth.call(null,vec__33876,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__33877 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__33877,(0),null);var ov = cljs.core.nth.call(null,vec__33877,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__33878){
var key_project = cljs.core.first(arglist__33878);
arglist__33878 = cljs.core.next(arglist__33878);
var key_combine = cljs.core.first(arglist__33878);
arglist__33878 = cljs.core.next(arglist__33878);
var val_combine = cljs.core.first(arglist__33878);
var maps = cljs.core.rest(arglist__33878);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___33886 = schema.utils.use_fn_validation;var output_schema33880_33887 = plumbing.fnk.schema.InputSchema;var input_schema33881_33888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker33882_33889 = schema.core.checker.call(null,input_schema33881_33888);var output_checker33883_33890 = schema.core.checker.call(null,output_schema33880_33887);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___33886,output_schema33880_33887,input_schema33881_33888,input_checker33882_33889,output_checker33883_33890){
return (function union_input_schemata(G__33884,G__33885){var validate__13947__auto__ = ufv___33886.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___33891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33884,G__33885], null);var temp__4126__auto___33892 = input_checker33882_33889.call(null,args__13948__auto___33891);if(cljs.core.truth_(temp__4126__auto___33892))
{var error__13949__auto___33893 = temp__4126__auto___33892;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13949__auto___33893)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33893,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___33891,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33881_33888,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var i1 = G__33884;var i2 = G__33885;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__13947__auto__,ufv___33886,output_schema33880_33887,input_schema33881_33888,input_checker33882_33889,output_checker33883_33890){
return (function (p1__33879_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__33879_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__33879_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__13947__auto__,ufv___33886,output_schema33880_33887,input_schema33881_33888,input_checker33882_33889,output_checker33883_33890))
,((function (validate__13947__auto__,ufv___33886,output_schema33880_33887,input_schema33881_33888,input_checker33882_33889,output_checker33883_33890){
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
});})(validate__13947__auto__,ufv___33886,output_schema33880_33887,input_schema33881_33888,input_checker33882_33889,output_checker33883_33890))
,((function (validate__13947__auto__,ufv___33886,output_schema33880_33887,input_schema33881_33888,input_checker33882_33889,output_checker33883_33890){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__13947__auto__,ufv___33886,output_schema33880_33887,input_schema33881_33888,input_checker33882_33889,output_checker33883_33890))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___33894 = output_checker33883_33890.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___33894))
{var error__13949__auto___33895 = temp__4126__auto___33894;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13949__auto___33895)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33895,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33880_33887,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv___33886,output_schema33880_33887,input_schema33881_33888,input_checker33882_33889,output_checker33883_33890))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema33880_33887,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33881_33888], null)));
var ufv___33901 = schema.utils.use_fn_validation;var output_schema33896_33902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema33897_33903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker33898_33904 = schema.core.checker.call(null,input_schema33897_33903);var output_checker33899_33905 = schema.core.checker.call(null,output_schema33896_33902);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___33901,output_schema33896_33902,input_schema33897_33903,input_checker33898_33904,output_checker33899_33905){
return (function required_toplevel_keys(G__33900){var validate__13947__auto__ = ufv___33901.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___33906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33900], null);var temp__4126__auto___33907 = input_checker33898_33904.call(null,args__13948__auto___33906);if(cljs.core.truth_(temp__4126__auto___33907))
{var error__13949__auto___33908 = temp__4126__auto___33907;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13949__auto___33908)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33908,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___33906,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33897_33903,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var input_schema = G__33900;while(true){
return cljs.core.keep.call(null,((function (validate__13947__auto__,ufv___33901,output_schema33896_33902,input_schema33897_33903,input_checker33898_33904,output_checker33899_33905){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__13947__auto__,ufv___33901,output_schema33896_33902,input_schema33897_33903,input_checker33898_33904,output_checker33899_33905))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___33909 = output_checker33899_33905.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___33909))
{var error__13949__auto___33910 = temp__4126__auto___33909;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13949__auto___33910)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33910,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33896_33902,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv___33901,output_schema33896_33902,input_schema33897_33903,input_checker33898_33904,output_checker33899_33905))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema33896_33902,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33897_33903], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12290__auto__ = (function iter__33919(s__33920){return (new cljs.core.LazySeq(null,(function (){var s__33920__$1 = s__33920;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33920__$1);if(temp__4126__auto__)
{var s__33920__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33920__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__33920__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__33922 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__33921 = (0);while(true){
if((i__33921 < size__12289__auto__))
{var vec__33925 = cljs.core._nth.call(null,c__12288__auto__,i__33921);var k = cljs.core.nth.call(null,vec__33925,(0),null);var v = cljs.core.nth.call(null,vec__33925,(1),null);cljs.core.chunk_append.call(null,b__33922,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__33927 = (i__33921 + (1));
i__33921 = G__33927;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33922),iter__33919.call(null,cljs.core.chunk_rest.call(null,s__33920__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33922),null);
}
} else
{var vec__33926 = cljs.core.first.call(null,s__33920__$2);var k = cljs.core.nth.call(null,vec__33926,(0),null);var v = cljs.core.nth.call(null,vec__33926,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__33919.call(null,cljs.core.rest.call(null,s__33920__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12290__auto__.call(null,expr);
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12290__auto__ = (function iter__33936(s__33937){return (new cljs.core.LazySeq(null,(function (){var s__33937__$1 = s__33937;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33937__$1);if(temp__4126__auto__)
{var s__33937__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33937__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__33937__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__33939 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__33938 = (0);while(true){
if((i__33938 < size__12289__auto__))
{var vec__33942 = cljs.core._nth.call(null,c__12288__auto__,i__33938);var k = cljs.core.nth.call(null,vec__33942,(0),null);var v = cljs.core.nth.call(null,vec__33942,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__33939,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__33944 = (i__33938 + (1));
i__33938 = G__33944;
continue;
}
} else
{{
var G__33945 = (i__33938 + (1));
i__33938 = G__33945;
continue;
}
}
} else
{{
var G__33946 = (i__33938 + (1));
i__33938 = G__33946;
continue;
}
}
} else
{{
var G__33947 = (i__33938 + (1));
i__33938 = G__33947;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33939),iter__33936.call(null,cljs.core.chunk_rest.call(null,s__33937__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33939),null);
}
} else
{var vec__33943 = cljs.core.first.call(null,s__33937__$2);var k = cljs.core.nth.call(null,vec__33943,(0),null);var v = cljs.core.nth.call(null,vec__33943,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__33936.call(null,cljs.core.rest.call(null,s__33937__$2)));
} else
{{
var G__33948 = cljs.core.rest.call(null,s__33937__$2);
s__33937__$1 = G__33948;
continue;
}
}
} else
{{
var G__33949 = cljs.core.rest.call(null,s__33937__$2);
s__33937__$1 = G__33949;
continue;
}
}
} else
{{
var G__33950 = cljs.core.rest.call(null,s__33937__$2);
s__33937__$1 = G__33950;
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
});return iter__12290__auto__.call(null,input_schema);
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
var ufv___33973 = schema.utils.use_fn_validation;var output_schema33951_33974 = schema.core.Any;var input_schema33952_33975 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker33953_33976 = schema.core.checker.call(null,input_schema33952_33975);var output_checker33954_33977 = schema.core.checker.call(null,output_schema33951_33974);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___33973,output_schema33951_33974,input_schema33952_33975,input_checker33953_33976,output_checker33954_33977){
return (function compose_schemata(G__33955,G__33956){var validate__13947__auto__ = true;if(validate__13947__auto__)
{var args__13948__auto___33978 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33955,G__33956], null);var temp__4126__auto___33979 = input_checker33953_33976.call(null,args__13948__auto___33978);if(cljs.core.truth_(temp__4126__auto___33979))
{var error__13949__auto___33980 = temp__4126__auto___33979;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13949__auto___33980)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33980,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___33978,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33952_33975,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var G__33967 = G__33955;var vec__33969 = G__33967;var i2 = cljs.core.nth.call(null,vec__33969,(0),null);var o2 = cljs.core.nth.call(null,vec__33969,(1),null);var G__33968 = G__33956;var vec__33970 = G__33968;var i1 = cljs.core.nth.call(null,vec__33970,(0),null);var o1 = cljs.core.nth.call(null,vec__33970,(1),null);var G__33967__$1 = G__33967;var G__33968__$1 = G__33968;while(true){
var vec__33971 = G__33967__$1;var i2__$1 = cljs.core.nth.call(null,vec__33971,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__33971,(1),null);var vec__33972 = G__33968__$1;var i1__$1 = cljs.core.nth.call(null,vec__33972,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__33972,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__13947__auto__)
{var temp__4126__auto___33981 = output_checker33954_33977.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___33981))
{var error__13949__auto___33982 = temp__4126__auto___33981;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13949__auto___33982)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33982,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33951_33974,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv___33973,output_schema33951_33974,input_schema33952_33975,input_checker33953_33976,output_checker33954_33977))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema33951_33974,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33952_33975], null)));
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
var ufv___34061 = schema.utils.use_fn_validation;var output_schema33983_34062 = schema.core.Any;var input_schema33984_34063 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker33985_34064 = schema.core.checker.call(null,input_schema33984_34063);var output_checker33986_34065 = schema.core.checker.call(null,output_schema33983_34062);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065){
return (function split_schema(G__33987,G__33988){var validate__13947__auto__ = ufv___34061.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___34066 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__33987,G__33988], null);var temp__4126__auto___34067 = input_checker33985_34064.call(null,args__13948__auto___34066);if(cljs.core.truth_(temp__4126__auto___34067))
{var error__13949__auto___34068 = temp__4126__auto___34067;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13949__auto___34068)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___34068,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___34066,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema33984_34063,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var s = G__33987;var ks = G__33988;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__12290__auto__ = ((function (ks__$1,validate__13947__auto__,ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065){
return (function iter__34025(s__34026){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__13947__auto__,ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065){
return (function (){var s__34026__$1 = s__34026;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34026__$1);if(temp__4126__auto__)
{var s__34026__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34026__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__34026__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__34028 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__34027 = (0);while(true){
if((i__34027 < size__12289__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__12288__auto__,i__34027);cljs.core.chunk_append.call(null,b__34028,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12290__auto__ = ((function (i__34027,in_QMARK_,c__12288__auto__,size__12289__auto__,b__34028,s__34026__$2,temp__4126__auto__,ks__$1,validate__13947__auto__,ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065){
return (function iter__34045(s__34046){return (new cljs.core.LazySeq(null,((function (i__34027,in_QMARK_,c__12288__auto__,size__12289__auto__,b__34028,s__34026__$2,temp__4126__auto__,ks__$1,validate__13947__auto__,ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065){
return (function (){var s__34046__$1 = s__34046;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__34046__$1);if(temp__4126__auto____$1)
{var s__34046__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__34046__$2))
{var c__12288__auto____$1 = cljs.core.chunk_first.call(null,s__34046__$2);var size__12289__auto____$1 = cljs.core.count.call(null,c__12288__auto____$1);var b__34048 = cljs.core.chunk_buffer.call(null,size__12289__auto____$1);if((function (){var i__34047 = (0);while(true){
if((i__34047 < size__12289__auto____$1))
{var vec__34051 = cljs.core._nth.call(null,c__12288__auto____$1,i__34047);var k = cljs.core.nth.call(null,vec__34051,(0),null);var v = cljs.core.nth.call(null,vec__34051,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__34048,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__34069 = (i__34047 + (1));
i__34047 = G__34069;
continue;
}
} else
{{
var G__34070 = (i__34047 + (1));
i__34047 = G__34070;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34048),iter__34045.call(null,cljs.core.chunk_rest.call(null,s__34046__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34048),null);
}
} else
{var vec__34052 = cljs.core.first.call(null,s__34046__$2);var k = cljs.core.nth.call(null,vec__34052,(0),null);var v = cljs.core.nth.call(null,vec__34052,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__34045.call(null,cljs.core.rest.call(null,s__34046__$2)));
} else
{{
var G__34071 = cljs.core.rest.call(null,s__34046__$2);
s__34046__$1 = G__34071;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__34027,in_QMARK_,c__12288__auto__,size__12289__auto__,b__34028,s__34026__$2,temp__4126__auto__,ks__$1,validate__13947__auto__,ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065))
,null,null));
});})(i__34027,in_QMARK_,c__12288__auto__,size__12289__auto__,b__34028,s__34026__$2,temp__4126__auto__,ks__$1,validate__13947__auto__,ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065))
;return iter__12290__auto__.call(null,s);
})()));
{
var G__34072 = (i__34027 + (1));
i__34027 = G__34072;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34028),iter__34025.call(null,cljs.core.chunk_rest.call(null,s__34026__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34028),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__34026__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12290__auto__ = ((function (in_QMARK_,s__34026__$2,temp__4126__auto__,ks__$1,validate__13947__auto__,ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065){
return (function iter__34053(s__34054){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__34026__$2,temp__4126__auto__,ks__$1,validate__13947__auto__,ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065){
return (function (){var s__34054__$1 = s__34054;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__34054__$1);if(temp__4126__auto____$1)
{var s__34054__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__34054__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__34054__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__34056 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__34055 = (0);while(true){
if((i__34055 < size__12289__auto__))
{var vec__34059 = cljs.core._nth.call(null,c__12288__auto__,i__34055);var k = cljs.core.nth.call(null,vec__34059,(0),null);var v = cljs.core.nth.call(null,vec__34059,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__34056,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__34073 = (i__34055 + (1));
i__34055 = G__34073;
continue;
}
} else
{{
var G__34074 = (i__34055 + (1));
i__34055 = G__34074;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34056),iter__34053.call(null,cljs.core.chunk_rest.call(null,s__34054__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34056),null);
}
} else
{var vec__34060 = cljs.core.first.call(null,s__34054__$2);var k = cljs.core.nth.call(null,vec__34060,(0),null);var v = cljs.core.nth.call(null,vec__34060,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__34053.call(null,cljs.core.rest.call(null,s__34054__$2)));
} else
{{
var G__34075 = cljs.core.rest.call(null,s__34054__$2);
s__34054__$1 = G__34075;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__34026__$2,temp__4126__auto__,ks__$1,validate__13947__auto__,ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065))
,null,null));
});})(in_QMARK_,s__34026__$2,temp__4126__auto__,ks__$1,validate__13947__auto__,ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065))
;return iter__12290__auto__.call(null,s);
})()),iter__34025.call(null,cljs.core.rest.call(null,s__34026__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__13947__auto__,ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065))
,null,null));
});})(ks__$1,validate__13947__auto__,ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065))
;return iter__12290__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___34076 = output_checker33986_34065.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___34076))
{var error__13949__auto___34077 = temp__4126__auto___34076;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13949__auto___34077)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___34077,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema33983_34062,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv___34061,output_schema33983_34062,input_schema33984_34063,input_checker33985_34064,output_checker33986_34065))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema33983_34062,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema33984_34063], null)));
var ufv___34108 = schema.utils.use_fn_validation;var output_schema34078_34109 = plumbing.fnk.schema.GraphIOSchemata;var input_schema34079_34110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker34080_34111 = schema.core.checker.call(null,input_schema34079_34110);var output_checker34081_34112 = schema.core.checker.call(null,output_schema34078_34109);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___34108,output_schema34078_34109,input_schema34079_34110,input_checker34080_34111,output_checker34081_34112){
return (function sequence_schemata(G__34082,G__34083){var validate__13947__auto__ = ufv___34108.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___34113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34082,G__34083], null);var temp__4126__auto___34114 = input_checker34080_34111.call(null,args__13948__auto___34113);if(cljs.core.truth_(temp__4126__auto___34114))
{var error__13949__auto___34115 = temp__4126__auto___34114;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13949__auto___34115)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___34115,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___34113,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34079_34110,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var G__34099 = G__34082;var vec__34101 = G__34099;var i1 = cljs.core.nth.call(null,vec__34101,(0),null);var o1 = cljs.core.nth.call(null,vec__34101,(1),null);var G__34100 = G__34083;var vec__34102 = G__34100;var k = cljs.core.nth.call(null,vec__34102,(0),null);var vec__34103 = cljs.core.nth.call(null,vec__34102,(1),null);var i2 = cljs.core.nth.call(null,vec__34103,(0),null);var o2 = cljs.core.nth.call(null,vec__34103,(1),null);var G__34099__$1 = G__34099;var G__34100__$1 = G__34100;while(true){
var vec__34104 = G__34099__$1;var i1__$1 = cljs.core.nth.call(null,vec__34104,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__34104,(1),null);var vec__34105 = G__34100__$1;var k__$1 = cljs.core.nth.call(null,vec__34105,(0),null);var vec__34106 = cljs.core.nth.call(null,vec__34105,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__34106,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__34106,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__34107 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__34107,(0),null);var unused = cljs.core.nth.call(null,vec__34107,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___34116 = output_checker34081_34112.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___34116))
{var error__13949__auto___34117 = temp__4126__auto___34116;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13949__auto___34117)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___34117,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34078_34109,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv___34108,output_schema34078_34109,input_schema34079_34110,input_checker34080_34111,output_checker34081_34112))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema34078_34109,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34079_34110], null)));

//# sourceMappingURL=schema.js.map