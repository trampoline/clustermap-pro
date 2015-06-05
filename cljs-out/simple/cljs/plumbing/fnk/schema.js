// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__20623 = p1__6064__6065__auto__;if(G__20623)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__20623.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__20623.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20623);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20623);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__20624_SHARP_){return (cljs.core.val.call(null,p1__20624_SHARP_) > (1));
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
var vec__20626 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__20626,(0),null);var v = cljs.core.nth.call(null,vec__20626,(1),null);var p = vec__20626;if(cljs.core.truth_(p))
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
var ufv___20632 = schema.utils.use_fn_validation;var output_schema20627_20633 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema20628_20634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker20629_20635 = schema.core.checker.call(null,input_schema20628_20634);var output_checker20630_20636 = schema.core.checker.call(null,output_schema20627_20633);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___20632,output_schema20627_20633,input_schema20628_20634,input_checker20629_20635,output_checker20630_20636){
return (function unwrap_schema_form_key(G__20631){var validate__6034__auto__ = ufv___20632.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20631], null);var temp__4126__auto___20638 = input_checker20629_20635.call(null,args__6035__auto___20637);if(cljs.core.truth_(temp__4126__auto___20638))
{var error__6036__auto___20639 = temp__4126__auto___20638;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___20639)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20639,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20637,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20628_20634,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__20631;while(true){
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
{var temp__4126__auto___20640 = output_checker20630_20636.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20640))
{var error__6036__auto___20641 = temp__4126__auto___20640;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___20641)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20641,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20627_20633,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20632,output_schema20627_20633,input_schema20628_20634,input_checker20629_20635,output_checker20630_20636))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema20627_20633,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20628_20634], null)));
var ufv___20647 = schema.utils.use_fn_validation;var output_schema20642_20648 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema20643_20649 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20644_20650 = schema.core.checker.call(null,input_schema20643_20649);var output_checker20645_20651 = schema.core.checker.call(null,output_schema20642_20648);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___20647,output_schema20642_20648,input_schema20643_20649,input_checker20644_20650,output_checker20645_20651){
return (function explicit_schema_key_map(G__20646){var validate__6034__auto__ = ufv___20647.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20646], null);var temp__4126__auto___20653 = input_checker20644_20650.call(null,args__6035__auto___20652);if(cljs.core.truth_(temp__4126__auto___20653))
{var error__6036__auto___20654 = temp__4126__auto___20653;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___20654)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20654,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20652,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20643_20649,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20646;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20655 = output_checker20645_20651.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20655))
{var error__6036__auto___20656 = temp__4126__auto___20655;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___20656)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20656,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20642_20648,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20647,output_schema20642_20648,input_schema20643_20649,input_checker20644_20650,output_checker20645_20651))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema20642_20648,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20643_20649], null)));
var ufv___20662 = schema.utils.use_fn_validation;var output_schema20657_20663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema20658_20664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20659_20665 = schema.core.checker.call(null,input_schema20658_20664);var output_checker20660_20666 = schema.core.checker.call(null,output_schema20657_20663);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___20662,output_schema20657_20663,input_schema20658_20664,input_checker20659_20665,output_checker20660_20666){
return (function split_schema_keys(G__20661){var validate__6034__auto__ = ufv___20662.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20661], null);var temp__4126__auto___20668 = input_checker20659_20665.call(null,args__6035__auto___20667);if(cljs.core.truth_(temp__4126__auto___20668))
{var error__6036__auto___20669 = temp__4126__auto___20668;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___20669)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20669,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20667,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20658_20664,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20661;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20670 = output_checker20660_20666.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20670))
{var error__6036__auto___20671 = temp__4126__auto___20670;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___20671)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20671,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20657_20663,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20662,output_schema20657_20663,input_schema20658_20664,input_checker20659_20665,output_checker20660_20666))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema20657_20663,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20658_20664], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__20675){var vec__20676 = p__20675;var k = cljs.core.nth.call(null,vec__20676,(0),null);var v = cljs.core.nth.call(null,vec__20676,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__20677 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__20677,(0),null);var ov = cljs.core.nth.call(null,vec__20677,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__20678){
var key_project = cljs.core.first(arglist__20678);
arglist__20678 = cljs.core.next(arglist__20678);
var key_combine = cljs.core.first(arglist__20678);
arglist__20678 = cljs.core.next(arglist__20678);
var val_combine = cljs.core.first(arglist__20678);
var maps = cljs.core.rest(arglist__20678);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___20686 = schema.utils.use_fn_validation;var output_schema20680_20687 = plumbing.fnk.schema.InputSchema;var input_schema20681_20688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker20682_20689 = schema.core.checker.call(null,input_schema20681_20688);var output_checker20683_20690 = schema.core.checker.call(null,output_schema20680_20687);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___20686,output_schema20680_20687,input_schema20681_20688,input_checker20682_20689,output_checker20683_20690){
return (function union_input_schemata(G__20684,G__20685){var validate__6034__auto__ = ufv___20686.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20684,G__20685], null);var temp__4126__auto___20692 = input_checker20682_20689.call(null,args__6035__auto___20691);if(cljs.core.truth_(temp__4126__auto___20692))
{var error__6036__auto___20693 = temp__4126__auto___20692;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___20693)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20693,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20691,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20681_20688,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__20684;var i2 = G__20685;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___20686,output_schema20680_20687,input_schema20681_20688,input_checker20682_20689,output_checker20683_20690){
return (function (p1__20679_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__20679_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__20679_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___20686,output_schema20680_20687,input_schema20681_20688,input_checker20682_20689,output_checker20683_20690))
,((function (validate__6034__auto__,ufv___20686,output_schema20680_20687,input_schema20681_20688,input_checker20682_20689,output_checker20683_20690){
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
});})(validate__6034__auto__,ufv___20686,output_schema20680_20687,input_schema20681_20688,input_checker20682_20689,output_checker20683_20690))
,((function (validate__6034__auto__,ufv___20686,output_schema20680_20687,input_schema20681_20688,input_checker20682_20689,output_checker20683_20690){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___20686,output_schema20680_20687,input_schema20681_20688,input_checker20682_20689,output_checker20683_20690))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20694 = output_checker20683_20690.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20694))
{var error__6036__auto___20695 = temp__4126__auto___20694;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___20695)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20695,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20680_20687,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20686,output_schema20680_20687,input_schema20681_20688,input_checker20682_20689,output_checker20683_20690))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema20680_20687,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20681_20688], null)));
var ufv___20701 = schema.utils.use_fn_validation;var output_schema20696_20702 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema20697_20703 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker20698_20704 = schema.core.checker.call(null,input_schema20697_20703);var output_checker20699_20705 = schema.core.checker.call(null,output_schema20696_20702);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___20701,output_schema20696_20702,input_schema20697_20703,input_checker20698_20704,output_checker20699_20705){
return (function required_toplevel_keys(G__20700){var validate__6034__auto__ = ufv___20701.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20700], null);var temp__4126__auto___20707 = input_checker20698_20704.call(null,args__6035__auto___20706);if(cljs.core.truth_(temp__4126__auto___20707))
{var error__6036__auto___20708 = temp__4126__auto___20707;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___20708)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20708,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20706,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20697_20703,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__20700;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___20701,output_schema20696_20702,input_schema20697_20703,input_checker20698_20704,output_checker20699_20705){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___20701,output_schema20696_20702,input_schema20697_20703,input_checker20698_20704,output_checker20699_20705))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20709 = output_checker20699_20705.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20709))
{var error__6036__auto___20710 = temp__4126__auto___20709;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___20710)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20710,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20696_20702,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20701,output_schema20696_20702,input_schema20697_20703,input_checker20698_20704,output_checker20699_20705))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema20696_20702,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20697_20703], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__20719(s__20720){return (new cljs.core.LazySeq(null,(function (){var s__20720__$1 = s__20720;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20720__$1);if(temp__4126__auto__)
{var s__20720__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20720__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20720__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20722 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20721 = (0);while(true){
if((i__20721 < size__4376__auto__))
{var vec__20725 = cljs.core._nth.call(null,c__4375__auto__,i__20721);var k = cljs.core.nth.call(null,vec__20725,(0),null);var v = cljs.core.nth.call(null,vec__20725,(1),null);cljs.core.chunk_append.call(null,b__20722,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__20727 = (i__20721 + (1));
i__20721 = G__20727;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20722),iter__20719.call(null,cljs.core.chunk_rest.call(null,s__20720__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20722),null);
}
} else
{var vec__20726 = cljs.core.first.call(null,s__20720__$2);var k = cljs.core.nth.call(null,vec__20726,(0),null);var v = cljs.core.nth.call(null,vec__20726,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__20719.call(null,cljs.core.rest.call(null,s__20720__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__20736(s__20737){return (new cljs.core.LazySeq(null,(function (){var s__20737__$1 = s__20737;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20737__$1);if(temp__4126__auto__)
{var s__20737__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20737__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20737__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20739 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20738 = (0);while(true){
if((i__20738 < size__4376__auto__))
{var vec__20742 = cljs.core._nth.call(null,c__4375__auto__,i__20738);var k = cljs.core.nth.call(null,vec__20742,(0),null);var v = cljs.core.nth.call(null,vec__20742,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__20739,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__20744 = (i__20738 + (1));
i__20738 = G__20744;
continue;
}
} else
{{
var G__20745 = (i__20738 + (1));
i__20738 = G__20745;
continue;
}
}
} else
{{
var G__20746 = (i__20738 + (1));
i__20738 = G__20746;
continue;
}
}
} else
{{
var G__20747 = (i__20738 + (1));
i__20738 = G__20747;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20739),iter__20736.call(null,cljs.core.chunk_rest.call(null,s__20737__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20739),null);
}
} else
{var vec__20743 = cljs.core.first.call(null,s__20737__$2);var k = cljs.core.nth.call(null,vec__20743,(0),null);var v = cljs.core.nth.call(null,vec__20743,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__20736.call(null,cljs.core.rest.call(null,s__20737__$2)));
} else
{{
var G__20748 = cljs.core.rest.call(null,s__20737__$2);
s__20737__$1 = G__20748;
continue;
}
}
} else
{{
var G__20749 = cljs.core.rest.call(null,s__20737__$2);
s__20737__$1 = G__20749;
continue;
}
}
} else
{{
var G__20750 = cljs.core.rest.call(null,s__20737__$2);
s__20737__$1 = G__20750;
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
var ufv___20773 = schema.utils.use_fn_validation;var output_schema20751_20774 = schema.core.Any;var input_schema20752_20775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20753_20776 = schema.core.checker.call(null,input_schema20752_20775);var output_checker20754_20777 = schema.core.checker.call(null,output_schema20751_20774);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___20773,output_schema20751_20774,input_schema20752_20775,input_checker20753_20776,output_checker20754_20777){
return (function compose_schemata(G__20755,G__20756){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___20778 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20755,G__20756], null);var temp__4126__auto___20779 = input_checker20753_20776.call(null,args__6035__auto___20778);if(cljs.core.truth_(temp__4126__auto___20779))
{var error__6036__auto___20780 = temp__4126__auto___20779;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___20780)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20780,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20778,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20752_20775,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20767 = G__20755;var vec__20769 = G__20767;var i2 = cljs.core.nth.call(null,vec__20769,(0),null);var o2 = cljs.core.nth.call(null,vec__20769,(1),null);var G__20768 = G__20756;var vec__20770 = G__20768;var i1 = cljs.core.nth.call(null,vec__20770,(0),null);var o1 = cljs.core.nth.call(null,vec__20770,(1),null);var G__20767__$1 = G__20767;var G__20768__$1 = G__20768;while(true){
var vec__20771 = G__20767__$1;var i2__$1 = cljs.core.nth.call(null,vec__20771,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20771,(1),null);var vec__20772 = G__20768__$1;var i1__$1 = cljs.core.nth.call(null,vec__20772,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20772,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___20781 = output_checker20754_20777.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20781))
{var error__6036__auto___20782 = temp__4126__auto___20781;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___20782)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20782,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20751_20774,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20773,output_schema20751_20774,input_schema20752_20775,input_checker20753_20776,output_checker20754_20777))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema20751_20774,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20752_20775], null)));
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
var ufv___20861 = schema.utils.use_fn_validation;var output_schema20783_20862 = schema.core.Any;var input_schema20784_20863 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker20785_20864 = schema.core.checker.call(null,input_schema20784_20863);var output_checker20786_20865 = schema.core.checker.call(null,output_schema20783_20862);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865){
return (function split_schema(G__20787,G__20788){var validate__6034__auto__ = ufv___20861.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20787,G__20788], null);var temp__4126__auto___20867 = input_checker20785_20864.call(null,args__6035__auto___20866);if(cljs.core.truth_(temp__4126__auto___20867))
{var error__6036__auto___20868 = temp__4126__auto___20867;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___20868)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20868,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20866,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20784_20863,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20787;var ks = G__20788;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865){
return (function iter__20825(s__20826){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865){
return (function (){var s__20826__$1 = s__20826;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20826__$1);if(temp__4126__auto__)
{var s__20826__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20826__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20826__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20828 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20827 = (0);while(true){
if((i__20827 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__20827);cljs.core.chunk_append.call(null,b__20828,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__20827,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20828,s__20826__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865){
return (function iter__20845(s__20846){return (new cljs.core.LazySeq(null,((function (i__20827,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20828,s__20826__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865){
return (function (){var s__20846__$1 = s__20846;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20846__$1);if(temp__4126__auto____$1)
{var s__20846__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20846__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20846__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20848 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20847 = (0);while(true){
if((i__20847 < size__4376__auto____$1))
{var vec__20851 = cljs.core._nth.call(null,c__4375__auto____$1,i__20847);var k = cljs.core.nth.call(null,vec__20851,(0),null);var v = cljs.core.nth.call(null,vec__20851,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20848,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20869 = (i__20847 + (1));
i__20847 = G__20869;
continue;
}
} else
{{
var G__20870 = (i__20847 + (1));
i__20847 = G__20870;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20848),iter__20845.call(null,cljs.core.chunk_rest.call(null,s__20846__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20848),null);
}
} else
{var vec__20852 = cljs.core.first.call(null,s__20846__$2);var k = cljs.core.nth.call(null,vec__20852,(0),null);var v = cljs.core.nth.call(null,vec__20852,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20845.call(null,cljs.core.rest.call(null,s__20846__$2)));
} else
{{
var G__20871 = cljs.core.rest.call(null,s__20846__$2);
s__20846__$1 = G__20871;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__20827,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20828,s__20826__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865))
,null,null));
});})(i__20827,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20828,s__20826__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__20872 = (i__20827 + (1));
i__20827 = G__20872;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20828),iter__20825.call(null,cljs.core.chunk_rest.call(null,s__20826__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20828),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__20826__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__20826__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865){
return (function iter__20853(s__20854){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__20826__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865){
return (function (){var s__20854__$1 = s__20854;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20854__$1);if(temp__4126__auto____$1)
{var s__20854__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20854__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20854__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20856 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20855 = (0);while(true){
if((i__20855 < size__4376__auto__))
{var vec__20859 = cljs.core._nth.call(null,c__4375__auto__,i__20855);var k = cljs.core.nth.call(null,vec__20859,(0),null);var v = cljs.core.nth.call(null,vec__20859,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20856,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20873 = (i__20855 + (1));
i__20855 = G__20873;
continue;
}
} else
{{
var G__20874 = (i__20855 + (1));
i__20855 = G__20874;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20856),iter__20853.call(null,cljs.core.chunk_rest.call(null,s__20854__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20856),null);
}
} else
{var vec__20860 = cljs.core.first.call(null,s__20854__$2);var k = cljs.core.nth.call(null,vec__20860,(0),null);var v = cljs.core.nth.call(null,vec__20860,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20853.call(null,cljs.core.rest.call(null,s__20854__$2)));
} else
{{
var G__20875 = cljs.core.rest.call(null,s__20854__$2);
s__20854__$1 = G__20875;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__20826__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865))
,null,null));
});})(in_QMARK_,s__20826__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865))
;return iter__4377__auto__.call(null,s);
})()),iter__20825.call(null,cljs.core.rest.call(null,s__20826__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20876 = output_checker20786_20865.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20876))
{var error__6036__auto___20877 = temp__4126__auto___20876;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___20877)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20877,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20783_20862,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20861,output_schema20783_20862,input_schema20784_20863,input_checker20785_20864,output_checker20786_20865))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema20783_20862,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20784_20863], null)));
var ufv___20908 = schema.utils.use_fn_validation;var output_schema20878_20909 = plumbing.fnk.schema.GraphIOSchemata;var input_schema20879_20910 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20880_20911 = schema.core.checker.call(null,input_schema20879_20910);var output_checker20881_20912 = schema.core.checker.call(null,output_schema20878_20909);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___20908,output_schema20878_20909,input_schema20879_20910,input_checker20880_20911,output_checker20881_20912){
return (function sequence_schemata(G__20882,G__20883){var validate__6034__auto__ = ufv___20908.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20882,G__20883], null);var temp__4126__auto___20914 = input_checker20880_20911.call(null,args__6035__auto___20913);if(cljs.core.truth_(temp__4126__auto___20914))
{var error__6036__auto___20915 = temp__4126__auto___20914;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___20915)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20915,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20913,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20879_20910,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20899 = G__20882;var vec__20901 = G__20899;var i1 = cljs.core.nth.call(null,vec__20901,(0),null);var o1 = cljs.core.nth.call(null,vec__20901,(1),null);var G__20900 = G__20883;var vec__20902 = G__20900;var k = cljs.core.nth.call(null,vec__20902,(0),null);var vec__20903 = cljs.core.nth.call(null,vec__20902,(1),null);var i2 = cljs.core.nth.call(null,vec__20903,(0),null);var o2 = cljs.core.nth.call(null,vec__20903,(1),null);var G__20899__$1 = G__20899;var G__20900__$1 = G__20900;while(true){
var vec__20904 = G__20899__$1;var i1__$1 = cljs.core.nth.call(null,vec__20904,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20904,(1),null);var vec__20905 = G__20900__$1;var k__$1 = cljs.core.nth.call(null,vec__20905,(0),null);var vec__20906 = cljs.core.nth.call(null,vec__20905,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__20906,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20906,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__20907 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__20907,(0),null);var unused = cljs.core.nth.call(null,vec__20907,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20916 = output_checker20881_20912.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20916))
{var error__6036__auto___20917 = temp__4126__auto___20916;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___20917)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20917,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20878_20909,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20908,output_schema20878_20909,input_schema20879_20910,input_checker20880_20911,output_checker20881_20912))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema20878_20909,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20879_20910], null)));
