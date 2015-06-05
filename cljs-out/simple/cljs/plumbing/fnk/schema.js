// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__20709 = p1__6064__6065__auto__;if(G__20709)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__20709.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__20709.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20709);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20709);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__20710_SHARP_){return (cljs.core.val.call(null,p1__20710_SHARP_) > (1));
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
var vec__20712 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__20712,(0),null);var v = cljs.core.nth.call(null,vec__20712,(1),null);var p = vec__20712;if(cljs.core.truth_(p))
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
var ufv___20718 = schema.utils.use_fn_validation;var output_schema20713_20719 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema20714_20720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker20715_20721 = schema.core.checker.call(null,input_schema20714_20720);var output_checker20716_20722 = schema.core.checker.call(null,output_schema20713_20719);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___20718,output_schema20713_20719,input_schema20714_20720,input_checker20715_20721,output_checker20716_20722){
return (function unwrap_schema_form_key(G__20717){var validate__6034__auto__ = ufv___20718.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20717], null);var temp__4126__auto___20724 = input_checker20715_20721.call(null,args__6035__auto___20723);if(cljs.core.truth_(temp__4126__auto___20724))
{var error__6036__auto___20725 = temp__4126__auto___20724;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___20725)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20725,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20723,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20714_20720,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__20717;while(true){
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
{var temp__4126__auto___20726 = output_checker20716_20722.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20726))
{var error__6036__auto___20727 = temp__4126__auto___20726;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___20727)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20727,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20713_20719,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20718,output_schema20713_20719,input_schema20714_20720,input_checker20715_20721,output_checker20716_20722))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema20713_20719,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20714_20720], null)));
var ufv___20733 = schema.utils.use_fn_validation;var output_schema20728_20734 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema20729_20735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20730_20736 = schema.core.checker.call(null,input_schema20729_20735);var output_checker20731_20737 = schema.core.checker.call(null,output_schema20728_20734);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___20733,output_schema20728_20734,input_schema20729_20735,input_checker20730_20736,output_checker20731_20737){
return (function explicit_schema_key_map(G__20732){var validate__6034__auto__ = ufv___20733.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20738 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20732], null);var temp__4126__auto___20739 = input_checker20730_20736.call(null,args__6035__auto___20738);if(cljs.core.truth_(temp__4126__auto___20739))
{var error__6036__auto___20740 = temp__4126__auto___20739;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___20740)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20740,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20738,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20729_20735,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20732;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20741 = output_checker20731_20737.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20741))
{var error__6036__auto___20742 = temp__4126__auto___20741;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___20742)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20742,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20728_20734,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20733,output_schema20728_20734,input_schema20729_20735,input_checker20730_20736,output_checker20731_20737))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema20728_20734,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20729_20735], null)));
var ufv___20748 = schema.utils.use_fn_validation;var output_schema20743_20749 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema20744_20750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20745_20751 = schema.core.checker.call(null,input_schema20744_20750);var output_checker20746_20752 = schema.core.checker.call(null,output_schema20743_20749);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___20748,output_schema20743_20749,input_schema20744_20750,input_checker20745_20751,output_checker20746_20752){
return (function split_schema_keys(G__20747){var validate__6034__auto__ = ufv___20748.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20753 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20747], null);var temp__4126__auto___20754 = input_checker20745_20751.call(null,args__6035__auto___20753);if(cljs.core.truth_(temp__4126__auto___20754))
{var error__6036__auto___20755 = temp__4126__auto___20754;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___20755)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20755,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20753,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20744_20750,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20747;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20756 = output_checker20746_20752.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20756))
{var error__6036__auto___20757 = temp__4126__auto___20756;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___20757)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20757,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20743_20749,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20748,output_schema20743_20749,input_schema20744_20750,input_checker20745_20751,output_checker20746_20752))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema20743_20749,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20744_20750], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__20761){var vec__20762 = p__20761;var k = cljs.core.nth.call(null,vec__20762,(0),null);var v = cljs.core.nth.call(null,vec__20762,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__20763 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__20763,(0),null);var ov = cljs.core.nth.call(null,vec__20763,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__20764){
var key_project = cljs.core.first(arglist__20764);
arglist__20764 = cljs.core.next(arglist__20764);
var key_combine = cljs.core.first(arglist__20764);
arglist__20764 = cljs.core.next(arglist__20764);
var val_combine = cljs.core.first(arglist__20764);
var maps = cljs.core.rest(arglist__20764);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___20772 = schema.utils.use_fn_validation;var output_schema20766_20773 = plumbing.fnk.schema.InputSchema;var input_schema20767_20774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker20768_20775 = schema.core.checker.call(null,input_schema20767_20774);var output_checker20769_20776 = schema.core.checker.call(null,output_schema20766_20773);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___20772,output_schema20766_20773,input_schema20767_20774,input_checker20768_20775,output_checker20769_20776){
return (function union_input_schemata(G__20770,G__20771){var validate__6034__auto__ = ufv___20772.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20770,G__20771], null);var temp__4126__auto___20778 = input_checker20768_20775.call(null,args__6035__auto___20777);if(cljs.core.truth_(temp__4126__auto___20778))
{var error__6036__auto___20779 = temp__4126__auto___20778;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___20779)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20779,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20777,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20767_20774,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__20770;var i2 = G__20771;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___20772,output_schema20766_20773,input_schema20767_20774,input_checker20768_20775,output_checker20769_20776){
return (function (p1__20765_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__20765_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__20765_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___20772,output_schema20766_20773,input_schema20767_20774,input_checker20768_20775,output_checker20769_20776))
,((function (validate__6034__auto__,ufv___20772,output_schema20766_20773,input_schema20767_20774,input_checker20768_20775,output_checker20769_20776){
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
});})(validate__6034__auto__,ufv___20772,output_schema20766_20773,input_schema20767_20774,input_checker20768_20775,output_checker20769_20776))
,((function (validate__6034__auto__,ufv___20772,output_schema20766_20773,input_schema20767_20774,input_checker20768_20775,output_checker20769_20776){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___20772,output_schema20766_20773,input_schema20767_20774,input_checker20768_20775,output_checker20769_20776))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20780 = output_checker20769_20776.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20780))
{var error__6036__auto___20781 = temp__4126__auto___20780;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___20781)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20781,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20766_20773,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20772,output_schema20766_20773,input_schema20767_20774,input_checker20768_20775,output_checker20769_20776))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema20766_20773,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20767_20774], null)));
var ufv___20787 = schema.utils.use_fn_validation;var output_schema20782_20788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema20783_20789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker20784_20790 = schema.core.checker.call(null,input_schema20783_20789);var output_checker20785_20791 = schema.core.checker.call(null,output_schema20782_20788);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___20787,output_schema20782_20788,input_schema20783_20789,input_checker20784_20790,output_checker20785_20791){
return (function required_toplevel_keys(G__20786){var validate__6034__auto__ = ufv___20787.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20786], null);var temp__4126__auto___20793 = input_checker20784_20790.call(null,args__6035__auto___20792);if(cljs.core.truth_(temp__4126__auto___20793))
{var error__6036__auto___20794 = temp__4126__auto___20793;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___20794)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20794,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20792,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20783_20789,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__20786;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___20787,output_schema20782_20788,input_schema20783_20789,input_checker20784_20790,output_checker20785_20791){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___20787,output_schema20782_20788,input_schema20783_20789,input_checker20784_20790,output_checker20785_20791))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20795 = output_checker20785_20791.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20795))
{var error__6036__auto___20796 = temp__4126__auto___20795;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___20796)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20796,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20782_20788,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20787,output_schema20782_20788,input_schema20783_20789,input_checker20784_20790,output_checker20785_20791))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema20782_20788,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20783_20789], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__20805(s__20806){return (new cljs.core.LazySeq(null,(function (){var s__20806__$1 = s__20806;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20806__$1);if(temp__4126__auto__)
{var s__20806__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20806__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20806__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20808 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20807 = (0);while(true){
if((i__20807 < size__4376__auto__))
{var vec__20811 = cljs.core._nth.call(null,c__4375__auto__,i__20807);var k = cljs.core.nth.call(null,vec__20811,(0),null);var v = cljs.core.nth.call(null,vec__20811,(1),null);cljs.core.chunk_append.call(null,b__20808,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__20813 = (i__20807 + (1));
i__20807 = G__20813;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20808),iter__20805.call(null,cljs.core.chunk_rest.call(null,s__20806__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20808),null);
}
} else
{var vec__20812 = cljs.core.first.call(null,s__20806__$2);var k = cljs.core.nth.call(null,vec__20812,(0),null);var v = cljs.core.nth.call(null,vec__20812,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__20805.call(null,cljs.core.rest.call(null,s__20806__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__20822(s__20823){return (new cljs.core.LazySeq(null,(function (){var s__20823__$1 = s__20823;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20823__$1);if(temp__4126__auto__)
{var s__20823__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20823__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20823__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20825 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20824 = (0);while(true){
if((i__20824 < size__4376__auto__))
{var vec__20828 = cljs.core._nth.call(null,c__4375__auto__,i__20824);var k = cljs.core.nth.call(null,vec__20828,(0),null);var v = cljs.core.nth.call(null,vec__20828,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__20825,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__20830 = (i__20824 + (1));
i__20824 = G__20830;
continue;
}
} else
{{
var G__20831 = (i__20824 + (1));
i__20824 = G__20831;
continue;
}
}
} else
{{
var G__20832 = (i__20824 + (1));
i__20824 = G__20832;
continue;
}
}
} else
{{
var G__20833 = (i__20824 + (1));
i__20824 = G__20833;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20825),iter__20822.call(null,cljs.core.chunk_rest.call(null,s__20823__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20825),null);
}
} else
{var vec__20829 = cljs.core.first.call(null,s__20823__$2);var k = cljs.core.nth.call(null,vec__20829,(0),null);var v = cljs.core.nth.call(null,vec__20829,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__20822.call(null,cljs.core.rest.call(null,s__20823__$2)));
} else
{{
var G__20834 = cljs.core.rest.call(null,s__20823__$2);
s__20823__$1 = G__20834;
continue;
}
}
} else
{{
var G__20835 = cljs.core.rest.call(null,s__20823__$2);
s__20823__$1 = G__20835;
continue;
}
}
} else
{{
var G__20836 = cljs.core.rest.call(null,s__20823__$2);
s__20823__$1 = G__20836;
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
var ufv___20859 = schema.utils.use_fn_validation;var output_schema20837_20860 = schema.core.Any;var input_schema20838_20861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20839_20862 = schema.core.checker.call(null,input_schema20838_20861);var output_checker20840_20863 = schema.core.checker.call(null,output_schema20837_20860);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___20859,output_schema20837_20860,input_schema20838_20861,input_checker20839_20862,output_checker20840_20863){
return (function compose_schemata(G__20841,G__20842){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___20864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20841,G__20842], null);var temp__4126__auto___20865 = input_checker20839_20862.call(null,args__6035__auto___20864);if(cljs.core.truth_(temp__4126__auto___20865))
{var error__6036__auto___20866 = temp__4126__auto___20865;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___20866)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20866,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20864,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20838_20861,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20853 = G__20841;var vec__20855 = G__20853;var i2 = cljs.core.nth.call(null,vec__20855,(0),null);var o2 = cljs.core.nth.call(null,vec__20855,(1),null);var G__20854 = G__20842;var vec__20856 = G__20854;var i1 = cljs.core.nth.call(null,vec__20856,(0),null);var o1 = cljs.core.nth.call(null,vec__20856,(1),null);var G__20853__$1 = G__20853;var G__20854__$1 = G__20854;while(true){
var vec__20857 = G__20853__$1;var i2__$1 = cljs.core.nth.call(null,vec__20857,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20857,(1),null);var vec__20858 = G__20854__$1;var i1__$1 = cljs.core.nth.call(null,vec__20858,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20858,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___20867 = output_checker20840_20863.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20867))
{var error__6036__auto___20868 = temp__4126__auto___20867;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___20868)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20868,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20837_20860,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20859,output_schema20837_20860,input_schema20838_20861,input_checker20839_20862,output_checker20840_20863))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema20837_20860,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20838_20861], null)));
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
var ufv___20947 = schema.utils.use_fn_validation;var output_schema20869_20948 = schema.core.Any;var input_schema20870_20949 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker20871_20950 = schema.core.checker.call(null,input_schema20870_20949);var output_checker20872_20951 = schema.core.checker.call(null,output_schema20869_20948);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951){
return (function split_schema(G__20873,G__20874){var validate__6034__auto__ = ufv___20947.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20952 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20873,G__20874], null);var temp__4126__auto___20953 = input_checker20871_20950.call(null,args__6035__auto___20952);if(cljs.core.truth_(temp__4126__auto___20953))
{var error__6036__auto___20954 = temp__4126__auto___20953;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___20954)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20954,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20952,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20870_20949,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20873;var ks = G__20874;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951){
return (function iter__20911(s__20912){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951){
return (function (){var s__20912__$1 = s__20912;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20912__$1);if(temp__4126__auto__)
{var s__20912__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20912__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20912__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20914 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20913 = (0);while(true){
if((i__20913 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__20913);cljs.core.chunk_append.call(null,b__20914,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__20913,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20914,s__20912__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951){
return (function iter__20931(s__20932){return (new cljs.core.LazySeq(null,((function (i__20913,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20914,s__20912__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951){
return (function (){var s__20932__$1 = s__20932;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20932__$1);if(temp__4126__auto____$1)
{var s__20932__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20932__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20932__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20934 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20933 = (0);while(true){
if((i__20933 < size__4376__auto____$1))
{var vec__20937 = cljs.core._nth.call(null,c__4375__auto____$1,i__20933);var k = cljs.core.nth.call(null,vec__20937,(0),null);var v = cljs.core.nth.call(null,vec__20937,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20934,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20955 = (i__20933 + (1));
i__20933 = G__20955;
continue;
}
} else
{{
var G__20956 = (i__20933 + (1));
i__20933 = G__20956;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20934),iter__20931.call(null,cljs.core.chunk_rest.call(null,s__20932__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20934),null);
}
} else
{var vec__20938 = cljs.core.first.call(null,s__20932__$2);var k = cljs.core.nth.call(null,vec__20938,(0),null);var v = cljs.core.nth.call(null,vec__20938,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20931.call(null,cljs.core.rest.call(null,s__20932__$2)));
} else
{{
var G__20957 = cljs.core.rest.call(null,s__20932__$2);
s__20932__$1 = G__20957;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__20913,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20914,s__20912__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951))
,null,null));
});})(i__20913,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20914,s__20912__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__20958 = (i__20913 + (1));
i__20913 = G__20958;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20914),iter__20911.call(null,cljs.core.chunk_rest.call(null,s__20912__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20914),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__20912__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__20912__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951){
return (function iter__20939(s__20940){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__20912__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951){
return (function (){var s__20940__$1 = s__20940;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20940__$1);if(temp__4126__auto____$1)
{var s__20940__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20940__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20940__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20942 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20941 = (0);while(true){
if((i__20941 < size__4376__auto__))
{var vec__20945 = cljs.core._nth.call(null,c__4375__auto__,i__20941);var k = cljs.core.nth.call(null,vec__20945,(0),null);var v = cljs.core.nth.call(null,vec__20945,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20942,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20959 = (i__20941 + (1));
i__20941 = G__20959;
continue;
}
} else
{{
var G__20960 = (i__20941 + (1));
i__20941 = G__20960;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20942),iter__20939.call(null,cljs.core.chunk_rest.call(null,s__20940__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20942),null);
}
} else
{var vec__20946 = cljs.core.first.call(null,s__20940__$2);var k = cljs.core.nth.call(null,vec__20946,(0),null);var v = cljs.core.nth.call(null,vec__20946,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20939.call(null,cljs.core.rest.call(null,s__20940__$2)));
} else
{{
var G__20961 = cljs.core.rest.call(null,s__20940__$2);
s__20940__$1 = G__20961;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__20912__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951))
,null,null));
});})(in_QMARK_,s__20912__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951))
;return iter__4377__auto__.call(null,s);
})()),iter__20911.call(null,cljs.core.rest.call(null,s__20912__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20962 = output_checker20872_20951.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20962))
{var error__6036__auto___20963 = temp__4126__auto___20962;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___20963)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20963,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20869_20948,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20947,output_schema20869_20948,input_schema20870_20949,input_checker20871_20950,output_checker20872_20951))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema20869_20948,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20870_20949], null)));
var ufv___20994 = schema.utils.use_fn_validation;var output_schema20964_20995 = plumbing.fnk.schema.GraphIOSchemata;var input_schema20965_20996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20966_20997 = schema.core.checker.call(null,input_schema20965_20996);var output_checker20967_20998 = schema.core.checker.call(null,output_schema20964_20995);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___20994,output_schema20964_20995,input_schema20965_20996,input_checker20966_20997,output_checker20967_20998){
return (function sequence_schemata(G__20968,G__20969){var validate__6034__auto__ = ufv___20994.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20999 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20968,G__20969], null);var temp__4126__auto___21000 = input_checker20966_20997.call(null,args__6035__auto___20999);if(cljs.core.truth_(temp__4126__auto___21000))
{var error__6036__auto___21001 = temp__4126__auto___21000;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21001)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21001,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20999,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20965_20996,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20985 = G__20968;var vec__20987 = G__20985;var i1 = cljs.core.nth.call(null,vec__20987,(0),null);var o1 = cljs.core.nth.call(null,vec__20987,(1),null);var G__20986 = G__20969;var vec__20988 = G__20986;var k = cljs.core.nth.call(null,vec__20988,(0),null);var vec__20989 = cljs.core.nth.call(null,vec__20988,(1),null);var i2 = cljs.core.nth.call(null,vec__20989,(0),null);var o2 = cljs.core.nth.call(null,vec__20989,(1),null);var G__20985__$1 = G__20985;var G__20986__$1 = G__20986;while(true){
var vec__20990 = G__20985__$1;var i1__$1 = cljs.core.nth.call(null,vec__20990,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20990,(1),null);var vec__20991 = G__20986__$1;var k__$1 = cljs.core.nth.call(null,vec__20991,(0),null);var vec__20992 = cljs.core.nth.call(null,vec__20991,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__20992,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20992,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__20993 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__20993,(0),null);var unused = cljs.core.nth.call(null,vec__20993,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21002 = output_checker20967_20998.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21002))
{var error__6036__auto___21003 = temp__4126__auto___21002;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21003)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21003,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20964_20995,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20994,output_schema20964_20995,input_schema20965_20996,input_checker20966_20997,output_checker20967_20998))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema20964_20995,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20965_20996], null)));
