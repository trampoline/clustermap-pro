// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21640 = p1__6064__6065__auto__;if(G__21640)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21640.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21640.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21640);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21640);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21641_SHARP_){return (cljs.core.val.call(null,p1__21641_SHARP_) > (1));
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
var vec__21643 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21643,(0),null);var v = cljs.core.nth.call(null,vec__21643,(1),null);var p = vec__21643;if(cljs.core.truth_(p))
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
var ufv___21649 = schema.utils.use_fn_validation;var output_schema21644_21650 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21645_21651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21646_21652 = schema.core.checker.call(null,input_schema21645_21651);var output_checker21647_21653 = schema.core.checker.call(null,output_schema21644_21650);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21649,output_schema21644_21650,input_schema21645_21651,input_checker21646_21652,output_checker21647_21653){
return (function unwrap_schema_form_key(G__21648){var validate__6034__auto__ = ufv___21649.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21648], null);var temp__4126__auto___21655 = input_checker21646_21652.call(null,args__6035__auto___21654);if(cljs.core.truth_(temp__4126__auto___21655))
{var error__6036__auto___21656 = temp__4126__auto___21655;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21656)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21656,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21654,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21645_21651,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21648;while(true){
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
{var temp__4126__auto___21657 = output_checker21647_21653.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21657))
{var error__6036__auto___21658 = temp__4126__auto___21657;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21658)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21658,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21644_21650,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21649,output_schema21644_21650,input_schema21645_21651,input_checker21646_21652,output_checker21647_21653))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21644_21650,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21645_21651], null)));
var ufv___21664 = schema.utils.use_fn_validation;var output_schema21659_21665 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21660_21666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21661_21667 = schema.core.checker.call(null,input_schema21660_21666);var output_checker21662_21668 = schema.core.checker.call(null,output_schema21659_21665);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21664,output_schema21659_21665,input_schema21660_21666,input_checker21661_21667,output_checker21662_21668){
return (function explicit_schema_key_map(G__21663){var validate__6034__auto__ = ufv___21664.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21663], null);var temp__4126__auto___21670 = input_checker21661_21667.call(null,args__6035__auto___21669);if(cljs.core.truth_(temp__4126__auto___21670))
{var error__6036__auto___21671 = temp__4126__auto___21670;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21671)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21671,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21669,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21660_21666,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21663;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21672 = output_checker21662_21668.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21672))
{var error__6036__auto___21673 = temp__4126__auto___21672;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21673)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21673,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21659_21665,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21664,output_schema21659_21665,input_schema21660_21666,input_checker21661_21667,output_checker21662_21668))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21659_21665,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21660_21666], null)));
var ufv___21679 = schema.utils.use_fn_validation;var output_schema21674_21680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21675_21681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21676_21682 = schema.core.checker.call(null,input_schema21675_21681);var output_checker21677_21683 = schema.core.checker.call(null,output_schema21674_21680);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21679,output_schema21674_21680,input_schema21675_21681,input_checker21676_21682,output_checker21677_21683){
return (function split_schema_keys(G__21678){var validate__6034__auto__ = ufv___21679.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21678], null);var temp__4126__auto___21685 = input_checker21676_21682.call(null,args__6035__auto___21684);if(cljs.core.truth_(temp__4126__auto___21685))
{var error__6036__auto___21686 = temp__4126__auto___21685;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21686)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21686,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21684,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21675_21681,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21678;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21687 = output_checker21677_21683.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21687))
{var error__6036__auto___21688 = temp__4126__auto___21687;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21688)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21688,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21674_21680,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21679,output_schema21674_21680,input_schema21675_21681,input_checker21676_21682,output_checker21677_21683))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21674_21680,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21675_21681], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21692){var vec__21693 = p__21692;var k = cljs.core.nth.call(null,vec__21693,(0),null);var v = cljs.core.nth.call(null,vec__21693,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21694 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21694,(0),null);var ov = cljs.core.nth.call(null,vec__21694,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21695){
var key_project = cljs.core.first(arglist__21695);
arglist__21695 = cljs.core.next(arglist__21695);
var key_combine = cljs.core.first(arglist__21695);
arglist__21695 = cljs.core.next(arglist__21695);
var val_combine = cljs.core.first(arglist__21695);
var maps = cljs.core.rest(arglist__21695);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21703 = schema.utils.use_fn_validation;var output_schema21697_21704 = plumbing.fnk.schema.InputSchema;var input_schema21698_21705 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21699_21706 = schema.core.checker.call(null,input_schema21698_21705);var output_checker21700_21707 = schema.core.checker.call(null,output_schema21697_21704);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21703,output_schema21697_21704,input_schema21698_21705,input_checker21699_21706,output_checker21700_21707){
return (function union_input_schemata(G__21701,G__21702){var validate__6034__auto__ = ufv___21703.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21708 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21701,G__21702], null);var temp__4126__auto___21709 = input_checker21699_21706.call(null,args__6035__auto___21708);if(cljs.core.truth_(temp__4126__auto___21709))
{var error__6036__auto___21710 = temp__4126__auto___21709;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21710)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21710,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21708,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21698_21705,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21701;var i2 = G__21702;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21703,output_schema21697_21704,input_schema21698_21705,input_checker21699_21706,output_checker21700_21707){
return (function (p1__21696_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21696_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21696_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21703,output_schema21697_21704,input_schema21698_21705,input_checker21699_21706,output_checker21700_21707))
,((function (validate__6034__auto__,ufv___21703,output_schema21697_21704,input_schema21698_21705,input_checker21699_21706,output_checker21700_21707){
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
});})(validate__6034__auto__,ufv___21703,output_schema21697_21704,input_schema21698_21705,input_checker21699_21706,output_checker21700_21707))
,((function (validate__6034__auto__,ufv___21703,output_schema21697_21704,input_schema21698_21705,input_checker21699_21706,output_checker21700_21707){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21703,output_schema21697_21704,input_schema21698_21705,input_checker21699_21706,output_checker21700_21707))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21711 = output_checker21700_21707.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21711))
{var error__6036__auto___21712 = temp__4126__auto___21711;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21712)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21712,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21697_21704,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21703,output_schema21697_21704,input_schema21698_21705,input_checker21699_21706,output_checker21700_21707))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21697_21704,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21698_21705], null)));
var ufv___21718 = schema.utils.use_fn_validation;var output_schema21713_21719 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21714_21720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21715_21721 = schema.core.checker.call(null,input_schema21714_21720);var output_checker21716_21722 = schema.core.checker.call(null,output_schema21713_21719);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21718,output_schema21713_21719,input_schema21714_21720,input_checker21715_21721,output_checker21716_21722){
return (function required_toplevel_keys(G__21717){var validate__6034__auto__ = ufv___21718.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21717], null);var temp__4126__auto___21724 = input_checker21715_21721.call(null,args__6035__auto___21723);if(cljs.core.truth_(temp__4126__auto___21724))
{var error__6036__auto___21725 = temp__4126__auto___21724;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21725)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21725,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21723,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21714_21720,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21717;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21718,output_schema21713_21719,input_schema21714_21720,input_checker21715_21721,output_checker21716_21722){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21718,output_schema21713_21719,input_schema21714_21720,input_checker21715_21721,output_checker21716_21722))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21726 = output_checker21716_21722.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21726))
{var error__6036__auto___21727 = temp__4126__auto___21726;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21727)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21727,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21713_21719,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21718,output_schema21713_21719,input_schema21714_21720,input_checker21715_21721,output_checker21716_21722))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21713_21719,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21714_21720], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21736(s__21737){return (new cljs.core.LazySeq(null,(function (){var s__21737__$1 = s__21737;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21737__$1);if(temp__4126__auto__)
{var s__21737__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21737__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21737__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21739 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21738 = (0);while(true){
if((i__21738 < size__4376__auto__))
{var vec__21742 = cljs.core._nth.call(null,c__4375__auto__,i__21738);var k = cljs.core.nth.call(null,vec__21742,(0),null);var v = cljs.core.nth.call(null,vec__21742,(1),null);cljs.core.chunk_append.call(null,b__21739,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21744 = (i__21738 + (1));
i__21738 = G__21744;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21739),iter__21736.call(null,cljs.core.chunk_rest.call(null,s__21737__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21739),null);
}
} else
{var vec__21743 = cljs.core.first.call(null,s__21737__$2);var k = cljs.core.nth.call(null,vec__21743,(0),null);var v = cljs.core.nth.call(null,vec__21743,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21736.call(null,cljs.core.rest.call(null,s__21737__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21753(s__21754){return (new cljs.core.LazySeq(null,(function (){var s__21754__$1 = s__21754;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21754__$1);if(temp__4126__auto__)
{var s__21754__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21754__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21754__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21756 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21755 = (0);while(true){
if((i__21755 < size__4376__auto__))
{var vec__21759 = cljs.core._nth.call(null,c__4375__auto__,i__21755);var k = cljs.core.nth.call(null,vec__21759,(0),null);var v = cljs.core.nth.call(null,vec__21759,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21756,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21761 = (i__21755 + (1));
i__21755 = G__21761;
continue;
}
} else
{{
var G__21762 = (i__21755 + (1));
i__21755 = G__21762;
continue;
}
}
} else
{{
var G__21763 = (i__21755 + (1));
i__21755 = G__21763;
continue;
}
}
} else
{{
var G__21764 = (i__21755 + (1));
i__21755 = G__21764;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21756),iter__21753.call(null,cljs.core.chunk_rest.call(null,s__21754__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21756),null);
}
} else
{var vec__21760 = cljs.core.first.call(null,s__21754__$2);var k = cljs.core.nth.call(null,vec__21760,(0),null);var v = cljs.core.nth.call(null,vec__21760,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21753.call(null,cljs.core.rest.call(null,s__21754__$2)));
} else
{{
var G__21765 = cljs.core.rest.call(null,s__21754__$2);
s__21754__$1 = G__21765;
continue;
}
}
} else
{{
var G__21766 = cljs.core.rest.call(null,s__21754__$2);
s__21754__$1 = G__21766;
continue;
}
}
} else
{{
var G__21767 = cljs.core.rest.call(null,s__21754__$2);
s__21754__$1 = G__21767;
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
var ufv___21790 = schema.utils.use_fn_validation;var output_schema21768_21791 = schema.core.Any;var input_schema21769_21792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21770_21793 = schema.core.checker.call(null,input_schema21769_21792);var output_checker21771_21794 = schema.core.checker.call(null,output_schema21768_21791);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21790,output_schema21768_21791,input_schema21769_21792,input_checker21770_21793,output_checker21771_21794){
return (function compose_schemata(G__21772,G__21773){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21772,G__21773], null);var temp__4126__auto___21796 = input_checker21770_21793.call(null,args__6035__auto___21795);if(cljs.core.truth_(temp__4126__auto___21796))
{var error__6036__auto___21797 = temp__4126__auto___21796;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21797)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21797,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21795,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21769_21792,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21784 = G__21772;var vec__21786 = G__21784;var i2 = cljs.core.nth.call(null,vec__21786,(0),null);var o2 = cljs.core.nth.call(null,vec__21786,(1),null);var G__21785 = G__21773;var vec__21787 = G__21785;var i1 = cljs.core.nth.call(null,vec__21787,(0),null);var o1 = cljs.core.nth.call(null,vec__21787,(1),null);var G__21784__$1 = G__21784;var G__21785__$1 = G__21785;while(true){
var vec__21788 = G__21784__$1;var i2__$1 = cljs.core.nth.call(null,vec__21788,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21788,(1),null);var vec__21789 = G__21785__$1;var i1__$1 = cljs.core.nth.call(null,vec__21789,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21789,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21798 = output_checker21771_21794.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21798))
{var error__6036__auto___21799 = temp__4126__auto___21798;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21799)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21799,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21768_21791,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21790,output_schema21768_21791,input_schema21769_21792,input_checker21770_21793,output_checker21771_21794))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21768_21791,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21769_21792], null)));
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
var ufv___21878 = schema.utils.use_fn_validation;var output_schema21800_21879 = schema.core.Any;var input_schema21801_21880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21802_21881 = schema.core.checker.call(null,input_schema21801_21880);var output_checker21803_21882 = schema.core.checker.call(null,output_schema21800_21879);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882){
return (function split_schema(G__21804,G__21805){var validate__6034__auto__ = ufv___21878.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21804,G__21805], null);var temp__4126__auto___21884 = input_checker21802_21881.call(null,args__6035__auto___21883);if(cljs.core.truth_(temp__4126__auto___21884))
{var error__6036__auto___21885 = temp__4126__auto___21884;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21885)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21885,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21883,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21801_21880,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21804;var ks = G__21805;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882){
return (function iter__21842(s__21843){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882){
return (function (){var s__21843__$1 = s__21843;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21843__$1);if(temp__4126__auto__)
{var s__21843__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21843__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21843__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21845 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21844 = (0);while(true){
if((i__21844 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21844);cljs.core.chunk_append.call(null,b__21845,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21844,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21845,s__21843__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882){
return (function iter__21862(s__21863){return (new cljs.core.LazySeq(null,((function (i__21844,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21845,s__21843__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882){
return (function (){var s__21863__$1 = s__21863;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21863__$1);if(temp__4126__auto____$1)
{var s__21863__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21863__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21863__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21865 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21864 = (0);while(true){
if((i__21864 < size__4376__auto____$1))
{var vec__21868 = cljs.core._nth.call(null,c__4375__auto____$1,i__21864);var k = cljs.core.nth.call(null,vec__21868,(0),null);var v = cljs.core.nth.call(null,vec__21868,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21865,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21886 = (i__21864 + (1));
i__21864 = G__21886;
continue;
}
} else
{{
var G__21887 = (i__21864 + (1));
i__21864 = G__21887;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21865),iter__21862.call(null,cljs.core.chunk_rest.call(null,s__21863__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21865),null);
}
} else
{var vec__21869 = cljs.core.first.call(null,s__21863__$2);var k = cljs.core.nth.call(null,vec__21869,(0),null);var v = cljs.core.nth.call(null,vec__21869,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21862.call(null,cljs.core.rest.call(null,s__21863__$2)));
} else
{{
var G__21888 = cljs.core.rest.call(null,s__21863__$2);
s__21863__$1 = G__21888;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21844,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21845,s__21843__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882))
,null,null));
});})(i__21844,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21845,s__21843__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__21889 = (i__21844 + (1));
i__21844 = G__21889;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21845),iter__21842.call(null,cljs.core.chunk_rest.call(null,s__21843__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21845),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21843__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21843__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882){
return (function iter__21870(s__21871){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21843__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882){
return (function (){var s__21871__$1 = s__21871;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21871__$1);if(temp__4126__auto____$1)
{var s__21871__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21871__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21871__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21873 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21872 = (0);while(true){
if((i__21872 < size__4376__auto__))
{var vec__21876 = cljs.core._nth.call(null,c__4375__auto__,i__21872);var k = cljs.core.nth.call(null,vec__21876,(0),null);var v = cljs.core.nth.call(null,vec__21876,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21873,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21890 = (i__21872 + (1));
i__21872 = G__21890;
continue;
}
} else
{{
var G__21891 = (i__21872 + (1));
i__21872 = G__21891;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21873),iter__21870.call(null,cljs.core.chunk_rest.call(null,s__21871__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21873),null);
}
} else
{var vec__21877 = cljs.core.first.call(null,s__21871__$2);var k = cljs.core.nth.call(null,vec__21877,(0),null);var v = cljs.core.nth.call(null,vec__21877,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21870.call(null,cljs.core.rest.call(null,s__21871__$2)));
} else
{{
var G__21892 = cljs.core.rest.call(null,s__21871__$2);
s__21871__$1 = G__21892;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21843__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882))
,null,null));
});})(in_QMARK_,s__21843__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882))
;return iter__4377__auto__.call(null,s);
})()),iter__21842.call(null,cljs.core.rest.call(null,s__21843__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21893 = output_checker21803_21882.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21893))
{var error__6036__auto___21894 = temp__4126__auto___21893;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21894)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21894,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21800_21879,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21878,output_schema21800_21879,input_schema21801_21880,input_checker21802_21881,output_checker21803_21882))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21800_21879,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21801_21880], null)));
var ufv___21925 = schema.utils.use_fn_validation;var output_schema21895_21926 = plumbing.fnk.schema.GraphIOSchemata;var input_schema21896_21927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21897_21928 = schema.core.checker.call(null,input_schema21896_21927);var output_checker21898_21929 = schema.core.checker.call(null,output_schema21895_21926);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21925,output_schema21895_21926,input_schema21896_21927,input_checker21897_21928,output_checker21898_21929){
return (function sequence_schemata(G__21899,G__21900){var validate__6034__auto__ = ufv___21925.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21899,G__21900], null);var temp__4126__auto___21931 = input_checker21897_21928.call(null,args__6035__auto___21930);if(cljs.core.truth_(temp__4126__auto___21931))
{var error__6036__auto___21932 = temp__4126__auto___21931;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21932)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21932,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21930,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21896_21927,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21916 = G__21899;var vec__21918 = G__21916;var i1 = cljs.core.nth.call(null,vec__21918,(0),null);var o1 = cljs.core.nth.call(null,vec__21918,(1),null);var G__21917 = G__21900;var vec__21919 = G__21917;var k = cljs.core.nth.call(null,vec__21919,(0),null);var vec__21920 = cljs.core.nth.call(null,vec__21919,(1),null);var i2 = cljs.core.nth.call(null,vec__21920,(0),null);var o2 = cljs.core.nth.call(null,vec__21920,(1),null);var G__21916__$1 = G__21916;var G__21917__$1 = G__21917;while(true){
var vec__21921 = G__21916__$1;var i1__$1 = cljs.core.nth.call(null,vec__21921,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21921,(1),null);var vec__21922 = G__21917__$1;var k__$1 = cljs.core.nth.call(null,vec__21922,(0),null);var vec__21923 = cljs.core.nth.call(null,vec__21922,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__21923,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21923,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__21924 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__21924,(0),null);var unused = cljs.core.nth.call(null,vec__21924,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21933 = output_checker21898_21929.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21933))
{var error__6036__auto___21934 = temp__4126__auto___21933;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21934)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21934,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21895_21926,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21925,output_schema21895_21926,input_schema21896_21927,input_checker21897_21928,output_checker21898_21929))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema21895_21926,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21896_21927], null)));
