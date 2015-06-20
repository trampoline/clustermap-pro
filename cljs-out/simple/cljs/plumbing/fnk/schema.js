// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21643 = p1__6064__6065__auto__;if(G__21643)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21643.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21643.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21643);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21643);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21644_SHARP_){return (cljs.core.val.call(null,p1__21644_SHARP_) > (1));
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
var vec__21646 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21646,(0),null);var v = cljs.core.nth.call(null,vec__21646,(1),null);var p = vec__21646;if(cljs.core.truth_(p))
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
var ufv___21652 = schema.utils.use_fn_validation;var output_schema21647_21653 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21648_21654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21649_21655 = schema.core.checker.call(null,input_schema21648_21654);var output_checker21650_21656 = schema.core.checker.call(null,output_schema21647_21653);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21652,output_schema21647_21653,input_schema21648_21654,input_checker21649_21655,output_checker21650_21656){
return (function unwrap_schema_form_key(G__21651){var validate__6034__auto__ = ufv___21652.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21657 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21651], null);var temp__4126__auto___21658 = input_checker21649_21655.call(null,args__6035__auto___21657);if(cljs.core.truth_(temp__4126__auto___21658))
{var error__6036__auto___21659 = temp__4126__auto___21658;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21659)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21659,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21657,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21648_21654,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21651;while(true){
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
{var temp__4126__auto___21660 = output_checker21650_21656.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21660))
{var error__6036__auto___21661 = temp__4126__auto___21660;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21661)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21661,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21647_21653,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21652,output_schema21647_21653,input_schema21648_21654,input_checker21649_21655,output_checker21650_21656))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21647_21653,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21648_21654], null)));
var ufv___21667 = schema.utils.use_fn_validation;var output_schema21662_21668 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21663_21669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21664_21670 = schema.core.checker.call(null,input_schema21663_21669);var output_checker21665_21671 = schema.core.checker.call(null,output_schema21662_21668);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21667,output_schema21662_21668,input_schema21663_21669,input_checker21664_21670,output_checker21665_21671){
return (function explicit_schema_key_map(G__21666){var validate__6034__auto__ = ufv___21667.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21666], null);var temp__4126__auto___21673 = input_checker21664_21670.call(null,args__6035__auto___21672);if(cljs.core.truth_(temp__4126__auto___21673))
{var error__6036__auto___21674 = temp__4126__auto___21673;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21674)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21674,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21672,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21663_21669,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21666;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21675 = output_checker21665_21671.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21675))
{var error__6036__auto___21676 = temp__4126__auto___21675;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21676)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21676,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21662_21668,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21667,output_schema21662_21668,input_schema21663_21669,input_checker21664_21670,output_checker21665_21671))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21662_21668,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21663_21669], null)));
var ufv___21682 = schema.utils.use_fn_validation;var output_schema21677_21683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21678_21684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21679_21685 = schema.core.checker.call(null,input_schema21678_21684);var output_checker21680_21686 = schema.core.checker.call(null,output_schema21677_21683);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21682,output_schema21677_21683,input_schema21678_21684,input_checker21679_21685,output_checker21680_21686){
return (function split_schema_keys(G__21681){var validate__6034__auto__ = ufv___21682.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21681], null);var temp__4126__auto___21688 = input_checker21679_21685.call(null,args__6035__auto___21687);if(cljs.core.truth_(temp__4126__auto___21688))
{var error__6036__auto___21689 = temp__4126__auto___21688;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21689)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21689,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21687,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21678_21684,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21681;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21690 = output_checker21680_21686.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21690))
{var error__6036__auto___21691 = temp__4126__auto___21690;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21691)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21691,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21677_21683,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21682,output_schema21677_21683,input_schema21678_21684,input_checker21679_21685,output_checker21680_21686))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21677_21683,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21678_21684], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21695){var vec__21696 = p__21695;var k = cljs.core.nth.call(null,vec__21696,(0),null);var v = cljs.core.nth.call(null,vec__21696,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21697 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21697,(0),null);var ov = cljs.core.nth.call(null,vec__21697,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21698){
var key_project = cljs.core.first(arglist__21698);
arglist__21698 = cljs.core.next(arglist__21698);
var key_combine = cljs.core.first(arglist__21698);
arglist__21698 = cljs.core.next(arglist__21698);
var val_combine = cljs.core.first(arglist__21698);
var maps = cljs.core.rest(arglist__21698);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21706 = schema.utils.use_fn_validation;var output_schema21700_21707 = plumbing.fnk.schema.InputSchema;var input_schema21701_21708 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21702_21709 = schema.core.checker.call(null,input_schema21701_21708);var output_checker21703_21710 = schema.core.checker.call(null,output_schema21700_21707);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21706,output_schema21700_21707,input_schema21701_21708,input_checker21702_21709,output_checker21703_21710){
return (function union_input_schemata(G__21704,G__21705){var validate__6034__auto__ = ufv___21706.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21704,G__21705], null);var temp__4126__auto___21712 = input_checker21702_21709.call(null,args__6035__auto___21711);if(cljs.core.truth_(temp__4126__auto___21712))
{var error__6036__auto___21713 = temp__4126__auto___21712;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21713)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21713,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21711,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21701_21708,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21704;var i2 = G__21705;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21706,output_schema21700_21707,input_schema21701_21708,input_checker21702_21709,output_checker21703_21710){
return (function (p1__21699_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21699_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21699_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21706,output_schema21700_21707,input_schema21701_21708,input_checker21702_21709,output_checker21703_21710))
,((function (validate__6034__auto__,ufv___21706,output_schema21700_21707,input_schema21701_21708,input_checker21702_21709,output_checker21703_21710){
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
});})(validate__6034__auto__,ufv___21706,output_schema21700_21707,input_schema21701_21708,input_checker21702_21709,output_checker21703_21710))
,((function (validate__6034__auto__,ufv___21706,output_schema21700_21707,input_schema21701_21708,input_checker21702_21709,output_checker21703_21710){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21706,output_schema21700_21707,input_schema21701_21708,input_checker21702_21709,output_checker21703_21710))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21714 = output_checker21703_21710.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21714))
{var error__6036__auto___21715 = temp__4126__auto___21714;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21715)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21715,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21700_21707,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21706,output_schema21700_21707,input_schema21701_21708,input_checker21702_21709,output_checker21703_21710))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21700_21707,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21701_21708], null)));
var ufv___21721 = schema.utils.use_fn_validation;var output_schema21716_21722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21717_21723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21718_21724 = schema.core.checker.call(null,input_schema21717_21723);var output_checker21719_21725 = schema.core.checker.call(null,output_schema21716_21722);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21721,output_schema21716_21722,input_schema21717_21723,input_checker21718_21724,output_checker21719_21725){
return (function required_toplevel_keys(G__21720){var validate__6034__auto__ = ufv___21721.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21726 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21720], null);var temp__4126__auto___21727 = input_checker21718_21724.call(null,args__6035__auto___21726);if(cljs.core.truth_(temp__4126__auto___21727))
{var error__6036__auto___21728 = temp__4126__auto___21727;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21728)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21728,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21726,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21717_21723,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21720;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21721,output_schema21716_21722,input_schema21717_21723,input_checker21718_21724,output_checker21719_21725){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21721,output_schema21716_21722,input_schema21717_21723,input_checker21718_21724,output_checker21719_21725))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21729 = output_checker21719_21725.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21729))
{var error__6036__auto___21730 = temp__4126__auto___21729;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21730)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21730,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21716_21722,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21721,output_schema21716_21722,input_schema21717_21723,input_checker21718_21724,output_checker21719_21725))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21716_21722,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21717_21723], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21739(s__21740){return (new cljs.core.LazySeq(null,(function (){var s__21740__$1 = s__21740;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21740__$1);if(temp__4126__auto__)
{var s__21740__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21740__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21740__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21742 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21741 = (0);while(true){
if((i__21741 < size__4376__auto__))
{var vec__21745 = cljs.core._nth.call(null,c__4375__auto__,i__21741);var k = cljs.core.nth.call(null,vec__21745,(0),null);var v = cljs.core.nth.call(null,vec__21745,(1),null);cljs.core.chunk_append.call(null,b__21742,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21747 = (i__21741 + (1));
i__21741 = G__21747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21742),iter__21739.call(null,cljs.core.chunk_rest.call(null,s__21740__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21742),null);
}
} else
{var vec__21746 = cljs.core.first.call(null,s__21740__$2);var k = cljs.core.nth.call(null,vec__21746,(0),null);var v = cljs.core.nth.call(null,vec__21746,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21739.call(null,cljs.core.rest.call(null,s__21740__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21756(s__21757){return (new cljs.core.LazySeq(null,(function (){var s__21757__$1 = s__21757;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21757__$1);if(temp__4126__auto__)
{var s__21757__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21757__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21757__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21759 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21758 = (0);while(true){
if((i__21758 < size__4376__auto__))
{var vec__21762 = cljs.core._nth.call(null,c__4375__auto__,i__21758);var k = cljs.core.nth.call(null,vec__21762,(0),null);var v = cljs.core.nth.call(null,vec__21762,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21764 = (i__21758 + (1));
i__21758 = G__21764;
continue;
}
} else
{{
var G__21765 = (i__21758 + (1));
i__21758 = G__21765;
continue;
}
}
} else
{{
var G__21766 = (i__21758 + (1));
i__21758 = G__21766;
continue;
}
}
} else
{{
var G__21767 = (i__21758 + (1));
i__21758 = G__21767;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21759),iter__21756.call(null,cljs.core.chunk_rest.call(null,s__21757__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21759),null);
}
} else
{var vec__21763 = cljs.core.first.call(null,s__21757__$2);var k = cljs.core.nth.call(null,vec__21763,(0),null);var v = cljs.core.nth.call(null,vec__21763,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21756.call(null,cljs.core.rest.call(null,s__21757__$2)));
} else
{{
var G__21768 = cljs.core.rest.call(null,s__21757__$2);
s__21757__$1 = G__21768;
continue;
}
}
} else
{{
var G__21769 = cljs.core.rest.call(null,s__21757__$2);
s__21757__$1 = G__21769;
continue;
}
}
} else
{{
var G__21770 = cljs.core.rest.call(null,s__21757__$2);
s__21757__$1 = G__21770;
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
var ufv___21793 = schema.utils.use_fn_validation;var output_schema21771_21794 = schema.core.Any;var input_schema21772_21795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21773_21796 = schema.core.checker.call(null,input_schema21772_21795);var output_checker21774_21797 = schema.core.checker.call(null,output_schema21771_21794);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21793,output_schema21771_21794,input_schema21772_21795,input_checker21773_21796,output_checker21774_21797){
return (function compose_schemata(G__21775,G__21776){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21775,G__21776], null);var temp__4126__auto___21799 = input_checker21773_21796.call(null,args__6035__auto___21798);if(cljs.core.truth_(temp__4126__auto___21799))
{var error__6036__auto___21800 = temp__4126__auto___21799;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21800)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21800,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21798,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21772_21795,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21787 = G__21775;var vec__21789 = G__21787;var i2 = cljs.core.nth.call(null,vec__21789,(0),null);var o2 = cljs.core.nth.call(null,vec__21789,(1),null);var G__21788 = G__21776;var vec__21790 = G__21788;var i1 = cljs.core.nth.call(null,vec__21790,(0),null);var o1 = cljs.core.nth.call(null,vec__21790,(1),null);var G__21787__$1 = G__21787;var G__21788__$1 = G__21788;while(true){
var vec__21791 = G__21787__$1;var i2__$1 = cljs.core.nth.call(null,vec__21791,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21791,(1),null);var vec__21792 = G__21788__$1;var i1__$1 = cljs.core.nth.call(null,vec__21792,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21792,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21801 = output_checker21774_21797.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21801))
{var error__6036__auto___21802 = temp__4126__auto___21801;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21802)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21802,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21771_21794,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21793,output_schema21771_21794,input_schema21772_21795,input_checker21773_21796,output_checker21774_21797))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21771_21794,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21772_21795], null)));
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
var ufv___21881 = schema.utils.use_fn_validation;var output_schema21803_21882 = schema.core.Any;var input_schema21804_21883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21805_21884 = schema.core.checker.call(null,input_schema21804_21883);var output_checker21806_21885 = schema.core.checker.call(null,output_schema21803_21882);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885){
return (function split_schema(G__21807,G__21808){var validate__6034__auto__ = ufv___21881.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21886 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21807,G__21808], null);var temp__4126__auto___21887 = input_checker21805_21884.call(null,args__6035__auto___21886);if(cljs.core.truth_(temp__4126__auto___21887))
{var error__6036__auto___21888 = temp__4126__auto___21887;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21888)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21888,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21886,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21804_21883,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21807;var ks = G__21808;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885){
return (function iter__21845(s__21846){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885){
return (function (){var s__21846__$1 = s__21846;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21846__$1);if(temp__4126__auto__)
{var s__21846__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21846__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21846__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21848 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21847 = (0);while(true){
if((i__21847 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21847);cljs.core.chunk_append.call(null,b__21848,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21847,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21848,s__21846__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885){
return (function iter__21865(s__21866){return (new cljs.core.LazySeq(null,((function (i__21847,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21848,s__21846__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885){
return (function (){var s__21866__$1 = s__21866;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21866__$1);if(temp__4126__auto____$1)
{var s__21866__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21866__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21866__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21868 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21867 = (0);while(true){
if((i__21867 < size__4376__auto____$1))
{var vec__21871 = cljs.core._nth.call(null,c__4375__auto____$1,i__21867);var k = cljs.core.nth.call(null,vec__21871,(0),null);var v = cljs.core.nth.call(null,vec__21871,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21868,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21889 = (i__21867 + (1));
i__21867 = G__21889;
continue;
}
} else
{{
var G__21890 = (i__21867 + (1));
i__21867 = G__21890;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21868),iter__21865.call(null,cljs.core.chunk_rest.call(null,s__21866__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21868),null);
}
} else
{var vec__21872 = cljs.core.first.call(null,s__21866__$2);var k = cljs.core.nth.call(null,vec__21872,(0),null);var v = cljs.core.nth.call(null,vec__21872,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21865.call(null,cljs.core.rest.call(null,s__21866__$2)));
} else
{{
var G__21891 = cljs.core.rest.call(null,s__21866__$2);
s__21866__$1 = G__21891;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21847,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21848,s__21846__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885))
,null,null));
});})(i__21847,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21848,s__21846__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__21892 = (i__21847 + (1));
i__21847 = G__21892;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21848),iter__21845.call(null,cljs.core.chunk_rest.call(null,s__21846__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21848),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21846__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21846__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885){
return (function iter__21873(s__21874){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21846__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885){
return (function (){var s__21874__$1 = s__21874;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21874__$1);if(temp__4126__auto____$1)
{var s__21874__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21874__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21874__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21876 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21875 = (0);while(true){
if((i__21875 < size__4376__auto__))
{var vec__21879 = cljs.core._nth.call(null,c__4375__auto__,i__21875);var k = cljs.core.nth.call(null,vec__21879,(0),null);var v = cljs.core.nth.call(null,vec__21879,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21876,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21893 = (i__21875 + (1));
i__21875 = G__21893;
continue;
}
} else
{{
var G__21894 = (i__21875 + (1));
i__21875 = G__21894;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21876),iter__21873.call(null,cljs.core.chunk_rest.call(null,s__21874__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21876),null);
}
} else
{var vec__21880 = cljs.core.first.call(null,s__21874__$2);var k = cljs.core.nth.call(null,vec__21880,(0),null);var v = cljs.core.nth.call(null,vec__21880,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21873.call(null,cljs.core.rest.call(null,s__21874__$2)));
} else
{{
var G__21895 = cljs.core.rest.call(null,s__21874__$2);
s__21874__$1 = G__21895;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21846__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885))
,null,null));
});})(in_QMARK_,s__21846__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885))
;return iter__4377__auto__.call(null,s);
})()),iter__21845.call(null,cljs.core.rest.call(null,s__21846__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21896 = output_checker21806_21885.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21896))
{var error__6036__auto___21897 = temp__4126__auto___21896;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21897)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21897,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21803_21882,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21881,output_schema21803_21882,input_schema21804_21883,input_checker21805_21884,output_checker21806_21885))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21803_21882,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21804_21883], null)));
var ufv___21928 = schema.utils.use_fn_validation;var output_schema21898_21929 = plumbing.fnk.schema.GraphIOSchemata;var input_schema21899_21930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21900_21931 = schema.core.checker.call(null,input_schema21899_21930);var output_checker21901_21932 = schema.core.checker.call(null,output_schema21898_21929);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21928,output_schema21898_21929,input_schema21899_21930,input_checker21900_21931,output_checker21901_21932){
return (function sequence_schemata(G__21902,G__21903){var validate__6034__auto__ = ufv___21928.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21902,G__21903], null);var temp__4126__auto___21934 = input_checker21900_21931.call(null,args__6035__auto___21933);if(cljs.core.truth_(temp__4126__auto___21934))
{var error__6036__auto___21935 = temp__4126__auto___21934;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21935)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21935,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21933,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21899_21930,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21919 = G__21902;var vec__21921 = G__21919;var i1 = cljs.core.nth.call(null,vec__21921,(0),null);var o1 = cljs.core.nth.call(null,vec__21921,(1),null);var G__21920 = G__21903;var vec__21922 = G__21920;var k = cljs.core.nth.call(null,vec__21922,(0),null);var vec__21923 = cljs.core.nth.call(null,vec__21922,(1),null);var i2 = cljs.core.nth.call(null,vec__21923,(0),null);var o2 = cljs.core.nth.call(null,vec__21923,(1),null);var G__21919__$1 = G__21919;var G__21920__$1 = G__21920;while(true){
var vec__21924 = G__21919__$1;var i1__$1 = cljs.core.nth.call(null,vec__21924,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21924,(1),null);var vec__21925 = G__21920__$1;var k__$1 = cljs.core.nth.call(null,vec__21925,(0),null);var vec__21926 = cljs.core.nth.call(null,vec__21925,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__21926,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21926,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__21927 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__21927,(0),null);var unused = cljs.core.nth.call(null,vec__21927,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21936 = output_checker21901_21932.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21936))
{var error__6036__auto___21937 = temp__4126__auto___21936;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21937)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21937,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21898_21929,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21928,output_schema21898_21929,input_schema21899_21930,input_checker21900_21931,output_checker21901_21932))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema21898_21929,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21899_21930], null)));
