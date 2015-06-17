// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21617 = p1__6064__6065__auto__;if(G__21617)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21617.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21617.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21617);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21617);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21618_SHARP_){return (cljs.core.val.call(null,p1__21618_SHARP_) > (1));
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
var vec__21620 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21620,(0),null);var v = cljs.core.nth.call(null,vec__21620,(1),null);var p = vec__21620;if(cljs.core.truth_(p))
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
var ufv___21626 = schema.utils.use_fn_validation;var output_schema21621_21627 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21622_21628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21623_21629 = schema.core.checker.call(null,input_schema21622_21628);var output_checker21624_21630 = schema.core.checker.call(null,output_schema21621_21627);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21626,output_schema21621_21627,input_schema21622_21628,input_checker21623_21629,output_checker21624_21630){
return (function unwrap_schema_form_key(G__21625){var validate__6034__auto__ = ufv___21626.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21631 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21625], null);var temp__4126__auto___21632 = input_checker21623_21629.call(null,args__6035__auto___21631);if(cljs.core.truth_(temp__4126__auto___21632))
{var error__6036__auto___21633 = temp__4126__auto___21632;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21633)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21633,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21631,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21622_21628,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21625;while(true){
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
{var temp__4126__auto___21634 = output_checker21624_21630.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21634))
{var error__6036__auto___21635 = temp__4126__auto___21634;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21635)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21635,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21621_21627,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21626,output_schema21621_21627,input_schema21622_21628,input_checker21623_21629,output_checker21624_21630))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21621_21627,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21622_21628], null)));
var ufv___21641 = schema.utils.use_fn_validation;var output_schema21636_21642 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21637_21643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21638_21644 = schema.core.checker.call(null,input_schema21637_21643);var output_checker21639_21645 = schema.core.checker.call(null,output_schema21636_21642);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21641,output_schema21636_21642,input_schema21637_21643,input_checker21638_21644,output_checker21639_21645){
return (function explicit_schema_key_map(G__21640){var validate__6034__auto__ = ufv___21641.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21640], null);var temp__4126__auto___21647 = input_checker21638_21644.call(null,args__6035__auto___21646);if(cljs.core.truth_(temp__4126__auto___21647))
{var error__6036__auto___21648 = temp__4126__auto___21647;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21648)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21648,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21646,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21637_21643,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21640;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21649 = output_checker21639_21645.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21649))
{var error__6036__auto___21650 = temp__4126__auto___21649;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21650)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21650,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21636_21642,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21641,output_schema21636_21642,input_schema21637_21643,input_checker21638_21644,output_checker21639_21645))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21636_21642,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21637_21643], null)));
var ufv___21656 = schema.utils.use_fn_validation;var output_schema21651_21657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21652_21658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21653_21659 = schema.core.checker.call(null,input_schema21652_21658);var output_checker21654_21660 = schema.core.checker.call(null,output_schema21651_21657);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21656,output_schema21651_21657,input_schema21652_21658,input_checker21653_21659,output_checker21654_21660){
return (function split_schema_keys(G__21655){var validate__6034__auto__ = ufv___21656.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21655], null);var temp__4126__auto___21662 = input_checker21653_21659.call(null,args__6035__auto___21661);if(cljs.core.truth_(temp__4126__auto___21662))
{var error__6036__auto___21663 = temp__4126__auto___21662;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21663)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21663,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21661,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21652_21658,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21655;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21664 = output_checker21654_21660.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21664))
{var error__6036__auto___21665 = temp__4126__auto___21664;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21665)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21665,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21651_21657,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21656,output_schema21651_21657,input_schema21652_21658,input_checker21653_21659,output_checker21654_21660))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21651_21657,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21652_21658], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21669){var vec__21670 = p__21669;var k = cljs.core.nth.call(null,vec__21670,(0),null);var v = cljs.core.nth.call(null,vec__21670,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21671 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21671,(0),null);var ov = cljs.core.nth.call(null,vec__21671,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21672){
var key_project = cljs.core.first(arglist__21672);
arglist__21672 = cljs.core.next(arglist__21672);
var key_combine = cljs.core.first(arglist__21672);
arglist__21672 = cljs.core.next(arglist__21672);
var val_combine = cljs.core.first(arglist__21672);
var maps = cljs.core.rest(arglist__21672);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21680 = schema.utils.use_fn_validation;var output_schema21674_21681 = plumbing.fnk.schema.InputSchema;var input_schema21675_21682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21676_21683 = schema.core.checker.call(null,input_schema21675_21682);var output_checker21677_21684 = schema.core.checker.call(null,output_schema21674_21681);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21680,output_schema21674_21681,input_schema21675_21682,input_checker21676_21683,output_checker21677_21684){
return (function union_input_schemata(G__21678,G__21679){var validate__6034__auto__ = ufv___21680.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21678,G__21679], null);var temp__4126__auto___21686 = input_checker21676_21683.call(null,args__6035__auto___21685);if(cljs.core.truth_(temp__4126__auto___21686))
{var error__6036__auto___21687 = temp__4126__auto___21686;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21687)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21687,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21685,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21675_21682,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21678;var i2 = G__21679;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21680,output_schema21674_21681,input_schema21675_21682,input_checker21676_21683,output_checker21677_21684){
return (function (p1__21673_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21673_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21673_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21680,output_schema21674_21681,input_schema21675_21682,input_checker21676_21683,output_checker21677_21684))
,((function (validate__6034__auto__,ufv___21680,output_schema21674_21681,input_schema21675_21682,input_checker21676_21683,output_checker21677_21684){
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
});})(validate__6034__auto__,ufv___21680,output_schema21674_21681,input_schema21675_21682,input_checker21676_21683,output_checker21677_21684))
,((function (validate__6034__auto__,ufv___21680,output_schema21674_21681,input_schema21675_21682,input_checker21676_21683,output_checker21677_21684){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21680,output_schema21674_21681,input_schema21675_21682,input_checker21676_21683,output_checker21677_21684))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21688 = output_checker21677_21684.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21688))
{var error__6036__auto___21689 = temp__4126__auto___21688;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21689)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21689,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21674_21681,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21680,output_schema21674_21681,input_schema21675_21682,input_checker21676_21683,output_checker21677_21684))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21674_21681,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21675_21682], null)));
var ufv___21695 = schema.utils.use_fn_validation;var output_schema21690_21696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21691_21697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21692_21698 = schema.core.checker.call(null,input_schema21691_21697);var output_checker21693_21699 = schema.core.checker.call(null,output_schema21690_21696);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21695,output_schema21690_21696,input_schema21691_21697,input_checker21692_21698,output_checker21693_21699){
return (function required_toplevel_keys(G__21694){var validate__6034__auto__ = ufv___21695.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21694], null);var temp__4126__auto___21701 = input_checker21692_21698.call(null,args__6035__auto___21700);if(cljs.core.truth_(temp__4126__auto___21701))
{var error__6036__auto___21702 = temp__4126__auto___21701;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21702)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21702,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21700,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21691_21697,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21694;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21695,output_schema21690_21696,input_schema21691_21697,input_checker21692_21698,output_checker21693_21699){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21695,output_schema21690_21696,input_schema21691_21697,input_checker21692_21698,output_checker21693_21699))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21703 = output_checker21693_21699.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21703))
{var error__6036__auto___21704 = temp__4126__auto___21703;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21704)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21704,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21690_21696,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21695,output_schema21690_21696,input_schema21691_21697,input_checker21692_21698,output_checker21693_21699))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21690_21696,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21691_21697], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21713(s__21714){return (new cljs.core.LazySeq(null,(function (){var s__21714__$1 = s__21714;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21714__$1);if(temp__4126__auto__)
{var s__21714__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21714__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21714__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21716 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21715 = (0);while(true){
if((i__21715 < size__4376__auto__))
{var vec__21719 = cljs.core._nth.call(null,c__4375__auto__,i__21715);var k = cljs.core.nth.call(null,vec__21719,(0),null);var v = cljs.core.nth.call(null,vec__21719,(1),null);cljs.core.chunk_append.call(null,b__21716,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21721 = (i__21715 + (1));
i__21715 = G__21721;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21716),iter__21713.call(null,cljs.core.chunk_rest.call(null,s__21714__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21716),null);
}
} else
{var vec__21720 = cljs.core.first.call(null,s__21714__$2);var k = cljs.core.nth.call(null,vec__21720,(0),null);var v = cljs.core.nth.call(null,vec__21720,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21713.call(null,cljs.core.rest.call(null,s__21714__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21730(s__21731){return (new cljs.core.LazySeq(null,(function (){var s__21731__$1 = s__21731;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21731__$1);if(temp__4126__auto__)
{var s__21731__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21731__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21731__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21733 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21732 = (0);while(true){
if((i__21732 < size__4376__auto__))
{var vec__21736 = cljs.core._nth.call(null,c__4375__auto__,i__21732);var k = cljs.core.nth.call(null,vec__21736,(0),null);var v = cljs.core.nth.call(null,vec__21736,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21733,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21738 = (i__21732 + (1));
i__21732 = G__21738;
continue;
}
} else
{{
var G__21739 = (i__21732 + (1));
i__21732 = G__21739;
continue;
}
}
} else
{{
var G__21740 = (i__21732 + (1));
i__21732 = G__21740;
continue;
}
}
} else
{{
var G__21741 = (i__21732 + (1));
i__21732 = G__21741;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21733),iter__21730.call(null,cljs.core.chunk_rest.call(null,s__21731__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21733),null);
}
} else
{var vec__21737 = cljs.core.first.call(null,s__21731__$2);var k = cljs.core.nth.call(null,vec__21737,(0),null);var v = cljs.core.nth.call(null,vec__21737,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21730.call(null,cljs.core.rest.call(null,s__21731__$2)));
} else
{{
var G__21742 = cljs.core.rest.call(null,s__21731__$2);
s__21731__$1 = G__21742;
continue;
}
}
} else
{{
var G__21743 = cljs.core.rest.call(null,s__21731__$2);
s__21731__$1 = G__21743;
continue;
}
}
} else
{{
var G__21744 = cljs.core.rest.call(null,s__21731__$2);
s__21731__$1 = G__21744;
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
var ufv___21767 = schema.utils.use_fn_validation;var output_schema21745_21768 = schema.core.Any;var input_schema21746_21769 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21747_21770 = schema.core.checker.call(null,input_schema21746_21769);var output_checker21748_21771 = schema.core.checker.call(null,output_schema21745_21768);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21767,output_schema21745_21768,input_schema21746_21769,input_checker21747_21770,output_checker21748_21771){
return (function compose_schemata(G__21749,G__21750){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21772 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21749,G__21750], null);var temp__4126__auto___21773 = input_checker21747_21770.call(null,args__6035__auto___21772);if(cljs.core.truth_(temp__4126__auto___21773))
{var error__6036__auto___21774 = temp__4126__auto___21773;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21774)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21774,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21772,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21746_21769,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21761 = G__21749;var vec__21763 = G__21761;var i2 = cljs.core.nth.call(null,vec__21763,(0),null);var o2 = cljs.core.nth.call(null,vec__21763,(1),null);var G__21762 = G__21750;var vec__21764 = G__21762;var i1 = cljs.core.nth.call(null,vec__21764,(0),null);var o1 = cljs.core.nth.call(null,vec__21764,(1),null);var G__21761__$1 = G__21761;var G__21762__$1 = G__21762;while(true){
var vec__21765 = G__21761__$1;var i2__$1 = cljs.core.nth.call(null,vec__21765,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21765,(1),null);var vec__21766 = G__21762__$1;var i1__$1 = cljs.core.nth.call(null,vec__21766,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21766,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21775 = output_checker21748_21771.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21775))
{var error__6036__auto___21776 = temp__4126__auto___21775;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21776)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21776,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21745_21768,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21767,output_schema21745_21768,input_schema21746_21769,input_checker21747_21770,output_checker21748_21771))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21745_21768,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21746_21769], null)));
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
var ufv___21855 = schema.utils.use_fn_validation;var output_schema21777_21856 = schema.core.Any;var input_schema21778_21857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21779_21858 = schema.core.checker.call(null,input_schema21778_21857);var output_checker21780_21859 = schema.core.checker.call(null,output_schema21777_21856);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859){
return (function split_schema(G__21781,G__21782){var validate__6034__auto__ = ufv___21855.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21781,G__21782], null);var temp__4126__auto___21861 = input_checker21779_21858.call(null,args__6035__auto___21860);if(cljs.core.truth_(temp__4126__auto___21861))
{var error__6036__auto___21862 = temp__4126__auto___21861;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21862)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21862,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21860,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21778_21857,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21781;var ks = G__21782;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859){
return (function iter__21819(s__21820){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859){
return (function (){var s__21820__$1 = s__21820;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21820__$1);if(temp__4126__auto__)
{var s__21820__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21820__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21820__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21822 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21821 = (0);while(true){
if((i__21821 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21821);cljs.core.chunk_append.call(null,b__21822,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21821,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21822,s__21820__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859){
return (function iter__21839(s__21840){return (new cljs.core.LazySeq(null,((function (i__21821,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21822,s__21820__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859){
return (function (){var s__21840__$1 = s__21840;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21840__$1);if(temp__4126__auto____$1)
{var s__21840__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21840__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21840__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21842 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21841 = (0);while(true){
if((i__21841 < size__4376__auto____$1))
{var vec__21845 = cljs.core._nth.call(null,c__4375__auto____$1,i__21841);var k = cljs.core.nth.call(null,vec__21845,(0),null);var v = cljs.core.nth.call(null,vec__21845,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21842,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21863 = (i__21841 + (1));
i__21841 = G__21863;
continue;
}
} else
{{
var G__21864 = (i__21841 + (1));
i__21841 = G__21864;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21842),iter__21839.call(null,cljs.core.chunk_rest.call(null,s__21840__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21842),null);
}
} else
{var vec__21846 = cljs.core.first.call(null,s__21840__$2);var k = cljs.core.nth.call(null,vec__21846,(0),null);var v = cljs.core.nth.call(null,vec__21846,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21839.call(null,cljs.core.rest.call(null,s__21840__$2)));
} else
{{
var G__21865 = cljs.core.rest.call(null,s__21840__$2);
s__21840__$1 = G__21865;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21821,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21822,s__21820__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859))
,null,null));
});})(i__21821,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21822,s__21820__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__21866 = (i__21821 + (1));
i__21821 = G__21866;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21822),iter__21819.call(null,cljs.core.chunk_rest.call(null,s__21820__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21822),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21820__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21820__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859){
return (function iter__21847(s__21848){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21820__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859){
return (function (){var s__21848__$1 = s__21848;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21848__$1);if(temp__4126__auto____$1)
{var s__21848__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21848__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21848__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21850 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21849 = (0);while(true){
if((i__21849 < size__4376__auto__))
{var vec__21853 = cljs.core._nth.call(null,c__4375__auto__,i__21849);var k = cljs.core.nth.call(null,vec__21853,(0),null);var v = cljs.core.nth.call(null,vec__21853,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21850,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21867 = (i__21849 + (1));
i__21849 = G__21867;
continue;
}
} else
{{
var G__21868 = (i__21849 + (1));
i__21849 = G__21868;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21850),iter__21847.call(null,cljs.core.chunk_rest.call(null,s__21848__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21850),null);
}
} else
{var vec__21854 = cljs.core.first.call(null,s__21848__$2);var k = cljs.core.nth.call(null,vec__21854,(0),null);var v = cljs.core.nth.call(null,vec__21854,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21847.call(null,cljs.core.rest.call(null,s__21848__$2)));
} else
{{
var G__21869 = cljs.core.rest.call(null,s__21848__$2);
s__21848__$1 = G__21869;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21820__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859))
,null,null));
});})(in_QMARK_,s__21820__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859))
;return iter__4377__auto__.call(null,s);
})()),iter__21819.call(null,cljs.core.rest.call(null,s__21820__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21870 = output_checker21780_21859.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21870))
{var error__6036__auto___21871 = temp__4126__auto___21870;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21871)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21871,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21777_21856,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21855,output_schema21777_21856,input_schema21778_21857,input_checker21779_21858,output_checker21780_21859))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21777_21856,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21778_21857], null)));
var ufv___21902 = schema.utils.use_fn_validation;var output_schema21872_21903 = plumbing.fnk.schema.GraphIOSchemata;var input_schema21873_21904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21874_21905 = schema.core.checker.call(null,input_schema21873_21904);var output_checker21875_21906 = schema.core.checker.call(null,output_schema21872_21903);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21902,output_schema21872_21903,input_schema21873_21904,input_checker21874_21905,output_checker21875_21906){
return (function sequence_schemata(G__21876,G__21877){var validate__6034__auto__ = ufv___21902.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21876,G__21877], null);var temp__4126__auto___21908 = input_checker21874_21905.call(null,args__6035__auto___21907);if(cljs.core.truth_(temp__4126__auto___21908))
{var error__6036__auto___21909 = temp__4126__auto___21908;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21909)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21909,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21907,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21873_21904,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21893 = G__21876;var vec__21895 = G__21893;var i1 = cljs.core.nth.call(null,vec__21895,(0),null);var o1 = cljs.core.nth.call(null,vec__21895,(1),null);var G__21894 = G__21877;var vec__21896 = G__21894;var k = cljs.core.nth.call(null,vec__21896,(0),null);var vec__21897 = cljs.core.nth.call(null,vec__21896,(1),null);var i2 = cljs.core.nth.call(null,vec__21897,(0),null);var o2 = cljs.core.nth.call(null,vec__21897,(1),null);var G__21893__$1 = G__21893;var G__21894__$1 = G__21894;while(true){
var vec__21898 = G__21893__$1;var i1__$1 = cljs.core.nth.call(null,vec__21898,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21898,(1),null);var vec__21899 = G__21894__$1;var k__$1 = cljs.core.nth.call(null,vec__21899,(0),null);var vec__21900 = cljs.core.nth.call(null,vec__21899,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__21900,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21900,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__21901 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__21901,(0),null);var unused = cljs.core.nth.call(null,vec__21901,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21910 = output_checker21875_21906.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21910))
{var error__6036__auto___21911 = temp__4126__auto___21910;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21911)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21911,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21872_21903,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21902,output_schema21872_21903,input_schema21873_21904,input_checker21874_21905,output_checker21875_21906))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema21872_21903,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21873_21904], null)));
