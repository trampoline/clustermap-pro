// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21589 = p1__6064__6065__auto__;if(G__21589)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21589.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21589.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21589);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21589);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21590_SHARP_){return (cljs.core.val.call(null,p1__21590_SHARP_) > (1));
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
var vec__21592 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21592,(0),null);var v = cljs.core.nth.call(null,vec__21592,(1),null);var p = vec__21592;if(cljs.core.truth_(p))
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
var ufv___21598 = schema.utils.use_fn_validation;var output_schema21593_21599 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21594_21600 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21595_21601 = schema.core.checker.call(null,input_schema21594_21600);var output_checker21596_21602 = schema.core.checker.call(null,output_schema21593_21599);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21598,output_schema21593_21599,input_schema21594_21600,input_checker21595_21601,output_checker21596_21602){
return (function unwrap_schema_form_key(G__21597){var validate__6034__auto__ = ufv___21598.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21597], null);var temp__4126__auto___21604 = input_checker21595_21601.call(null,args__6035__auto___21603);if(cljs.core.truth_(temp__4126__auto___21604))
{var error__6036__auto___21605 = temp__4126__auto___21604;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21605)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21605,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21603,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21594_21600,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21597;while(true){
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
{var temp__4126__auto___21606 = output_checker21596_21602.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21606))
{var error__6036__auto___21607 = temp__4126__auto___21606;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21607)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21607,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21593_21599,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21598,output_schema21593_21599,input_schema21594_21600,input_checker21595_21601,output_checker21596_21602))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21593_21599,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21594_21600], null)));
var ufv___21613 = schema.utils.use_fn_validation;var output_schema21608_21614 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21609_21615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21610_21616 = schema.core.checker.call(null,input_schema21609_21615);var output_checker21611_21617 = schema.core.checker.call(null,output_schema21608_21614);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21613,output_schema21608_21614,input_schema21609_21615,input_checker21610_21616,output_checker21611_21617){
return (function explicit_schema_key_map(G__21612){var validate__6034__auto__ = ufv___21613.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21612], null);var temp__4126__auto___21619 = input_checker21610_21616.call(null,args__6035__auto___21618);if(cljs.core.truth_(temp__4126__auto___21619))
{var error__6036__auto___21620 = temp__4126__auto___21619;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21620)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21620,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21618,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21609_21615,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21612;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21621 = output_checker21611_21617.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21621))
{var error__6036__auto___21622 = temp__4126__auto___21621;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21622)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21622,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21608_21614,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21613,output_schema21608_21614,input_schema21609_21615,input_checker21610_21616,output_checker21611_21617))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21608_21614,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21609_21615], null)));
var ufv___21628 = schema.utils.use_fn_validation;var output_schema21623_21629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21624_21630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21625_21631 = schema.core.checker.call(null,input_schema21624_21630);var output_checker21626_21632 = schema.core.checker.call(null,output_schema21623_21629);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21628,output_schema21623_21629,input_schema21624_21630,input_checker21625_21631,output_checker21626_21632){
return (function split_schema_keys(G__21627){var validate__6034__auto__ = ufv___21628.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21633 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21627], null);var temp__4126__auto___21634 = input_checker21625_21631.call(null,args__6035__auto___21633);if(cljs.core.truth_(temp__4126__auto___21634))
{var error__6036__auto___21635 = temp__4126__auto___21634;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21635)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21635,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21633,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21624_21630,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21627;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21636 = output_checker21626_21632.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21636))
{var error__6036__auto___21637 = temp__4126__auto___21636;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21637)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21637,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21623_21629,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21628,output_schema21623_21629,input_schema21624_21630,input_checker21625_21631,output_checker21626_21632))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21623_21629,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21624_21630], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21641){var vec__21642 = p__21641;var k = cljs.core.nth.call(null,vec__21642,(0),null);var v = cljs.core.nth.call(null,vec__21642,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21643 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21643,(0),null);var ov = cljs.core.nth.call(null,vec__21643,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21644){
var key_project = cljs.core.first(arglist__21644);
arglist__21644 = cljs.core.next(arglist__21644);
var key_combine = cljs.core.first(arglist__21644);
arglist__21644 = cljs.core.next(arglist__21644);
var val_combine = cljs.core.first(arglist__21644);
var maps = cljs.core.rest(arglist__21644);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21652 = schema.utils.use_fn_validation;var output_schema21646_21653 = plumbing.fnk.schema.InputSchema;var input_schema21647_21654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21648_21655 = schema.core.checker.call(null,input_schema21647_21654);var output_checker21649_21656 = schema.core.checker.call(null,output_schema21646_21653);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21652,output_schema21646_21653,input_schema21647_21654,input_checker21648_21655,output_checker21649_21656){
return (function union_input_schemata(G__21650,G__21651){var validate__6034__auto__ = ufv___21652.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21650,G__21651], null);var temp__4126__auto___21658 = input_checker21648_21655.call(null,args__6035__auto___21657);if(cljs.core.truth_(temp__4126__auto___21658))
{var error__6036__auto___21659 = temp__4126__auto___21658;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21659)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21659,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21657,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21647_21654,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21650;var i2 = G__21651;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21652,output_schema21646_21653,input_schema21647_21654,input_checker21648_21655,output_checker21649_21656){
return (function (p1__21645_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21645_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21645_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21652,output_schema21646_21653,input_schema21647_21654,input_checker21648_21655,output_checker21649_21656))
,((function (validate__6034__auto__,ufv___21652,output_schema21646_21653,input_schema21647_21654,input_checker21648_21655,output_checker21649_21656){
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
});})(validate__6034__auto__,ufv___21652,output_schema21646_21653,input_schema21647_21654,input_checker21648_21655,output_checker21649_21656))
,((function (validate__6034__auto__,ufv___21652,output_schema21646_21653,input_schema21647_21654,input_checker21648_21655,output_checker21649_21656){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21652,output_schema21646_21653,input_schema21647_21654,input_checker21648_21655,output_checker21649_21656))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21660 = output_checker21649_21656.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21660))
{var error__6036__auto___21661 = temp__4126__auto___21660;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21661)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21661,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21646_21653,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21652,output_schema21646_21653,input_schema21647_21654,input_checker21648_21655,output_checker21649_21656))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21646_21653,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21647_21654], null)));
var ufv___21667 = schema.utils.use_fn_validation;var output_schema21662_21668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21663_21669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21664_21670 = schema.core.checker.call(null,input_schema21663_21669);var output_checker21665_21671 = schema.core.checker.call(null,output_schema21662_21668);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21667,output_schema21662_21668,input_schema21663_21669,input_checker21664_21670,output_checker21665_21671){
return (function required_toplevel_keys(G__21666){var validate__6034__auto__ = ufv___21667.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21666], null);var temp__4126__auto___21673 = input_checker21664_21670.call(null,args__6035__auto___21672);if(cljs.core.truth_(temp__4126__auto___21673))
{var error__6036__auto___21674 = temp__4126__auto___21673;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21674)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21674,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21672,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21663_21669,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21666;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21667,output_schema21662_21668,input_schema21663_21669,input_checker21664_21670,output_checker21665_21671){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21667,output_schema21662_21668,input_schema21663_21669,input_checker21664_21670,output_checker21665_21671))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21675 = output_checker21665_21671.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21675))
{var error__6036__auto___21676 = temp__4126__auto___21675;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21676)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21676,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21662_21668,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21667,output_schema21662_21668,input_schema21663_21669,input_checker21664_21670,output_checker21665_21671))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21662_21668,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21663_21669], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21685(s__21686){return (new cljs.core.LazySeq(null,(function (){var s__21686__$1 = s__21686;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21686__$1);if(temp__4126__auto__)
{var s__21686__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21686__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21686__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21688 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21687 = (0);while(true){
if((i__21687 < size__4376__auto__))
{var vec__21691 = cljs.core._nth.call(null,c__4375__auto__,i__21687);var k = cljs.core.nth.call(null,vec__21691,(0),null);var v = cljs.core.nth.call(null,vec__21691,(1),null);cljs.core.chunk_append.call(null,b__21688,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21693 = (i__21687 + (1));
i__21687 = G__21693;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21688),iter__21685.call(null,cljs.core.chunk_rest.call(null,s__21686__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21688),null);
}
} else
{var vec__21692 = cljs.core.first.call(null,s__21686__$2);var k = cljs.core.nth.call(null,vec__21692,(0),null);var v = cljs.core.nth.call(null,vec__21692,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21685.call(null,cljs.core.rest.call(null,s__21686__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21702(s__21703){return (new cljs.core.LazySeq(null,(function (){var s__21703__$1 = s__21703;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21703__$1);if(temp__4126__auto__)
{var s__21703__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21703__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21703__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21705 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21704 = (0);while(true){
if((i__21704 < size__4376__auto__))
{var vec__21708 = cljs.core._nth.call(null,c__4375__auto__,i__21704);var k = cljs.core.nth.call(null,vec__21708,(0),null);var v = cljs.core.nth.call(null,vec__21708,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21705,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21710 = (i__21704 + (1));
i__21704 = G__21710;
continue;
}
} else
{{
var G__21711 = (i__21704 + (1));
i__21704 = G__21711;
continue;
}
}
} else
{{
var G__21712 = (i__21704 + (1));
i__21704 = G__21712;
continue;
}
}
} else
{{
var G__21713 = (i__21704 + (1));
i__21704 = G__21713;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21705),iter__21702.call(null,cljs.core.chunk_rest.call(null,s__21703__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21705),null);
}
} else
{var vec__21709 = cljs.core.first.call(null,s__21703__$2);var k = cljs.core.nth.call(null,vec__21709,(0),null);var v = cljs.core.nth.call(null,vec__21709,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21702.call(null,cljs.core.rest.call(null,s__21703__$2)));
} else
{{
var G__21714 = cljs.core.rest.call(null,s__21703__$2);
s__21703__$1 = G__21714;
continue;
}
}
} else
{{
var G__21715 = cljs.core.rest.call(null,s__21703__$2);
s__21703__$1 = G__21715;
continue;
}
}
} else
{{
var G__21716 = cljs.core.rest.call(null,s__21703__$2);
s__21703__$1 = G__21716;
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
var ufv___21739 = schema.utils.use_fn_validation;var output_schema21717_21740 = schema.core.Any;var input_schema21718_21741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21719_21742 = schema.core.checker.call(null,input_schema21718_21741);var output_checker21720_21743 = schema.core.checker.call(null,output_schema21717_21740);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21739,output_schema21717_21740,input_schema21718_21741,input_checker21719_21742,output_checker21720_21743){
return (function compose_schemata(G__21721,G__21722){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21721,G__21722], null);var temp__4126__auto___21745 = input_checker21719_21742.call(null,args__6035__auto___21744);if(cljs.core.truth_(temp__4126__auto___21745))
{var error__6036__auto___21746 = temp__4126__auto___21745;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21746)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21746,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21744,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21718_21741,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21733 = G__21721;var vec__21735 = G__21733;var i2 = cljs.core.nth.call(null,vec__21735,(0),null);var o2 = cljs.core.nth.call(null,vec__21735,(1),null);var G__21734 = G__21722;var vec__21736 = G__21734;var i1 = cljs.core.nth.call(null,vec__21736,(0),null);var o1 = cljs.core.nth.call(null,vec__21736,(1),null);var G__21733__$1 = G__21733;var G__21734__$1 = G__21734;while(true){
var vec__21737 = G__21733__$1;var i2__$1 = cljs.core.nth.call(null,vec__21737,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21737,(1),null);var vec__21738 = G__21734__$1;var i1__$1 = cljs.core.nth.call(null,vec__21738,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21738,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21747 = output_checker21720_21743.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21747))
{var error__6036__auto___21748 = temp__4126__auto___21747;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21748)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21748,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21717_21740,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21739,output_schema21717_21740,input_schema21718_21741,input_checker21719_21742,output_checker21720_21743))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21717_21740,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21718_21741], null)));
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
var ufv___21827 = schema.utils.use_fn_validation;var output_schema21749_21828 = schema.core.Any;var input_schema21750_21829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21751_21830 = schema.core.checker.call(null,input_schema21750_21829);var output_checker21752_21831 = schema.core.checker.call(null,output_schema21749_21828);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831){
return (function split_schema(G__21753,G__21754){var validate__6034__auto__ = ufv___21827.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21753,G__21754], null);var temp__4126__auto___21833 = input_checker21751_21830.call(null,args__6035__auto___21832);if(cljs.core.truth_(temp__4126__auto___21833))
{var error__6036__auto___21834 = temp__4126__auto___21833;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21834)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21834,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21832,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21750_21829,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21753;var ks = G__21754;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831){
return (function iter__21791(s__21792){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831){
return (function (){var s__21792__$1 = s__21792;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21792__$1);if(temp__4126__auto__)
{var s__21792__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21792__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21792__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21794 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21793 = (0);while(true){
if((i__21793 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21793);cljs.core.chunk_append.call(null,b__21794,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21793,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21794,s__21792__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831){
return (function iter__21811(s__21812){return (new cljs.core.LazySeq(null,((function (i__21793,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21794,s__21792__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831){
return (function (){var s__21812__$1 = s__21812;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21812__$1);if(temp__4126__auto____$1)
{var s__21812__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21812__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21812__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21814 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21813 = (0);while(true){
if((i__21813 < size__4376__auto____$1))
{var vec__21817 = cljs.core._nth.call(null,c__4375__auto____$1,i__21813);var k = cljs.core.nth.call(null,vec__21817,(0),null);var v = cljs.core.nth.call(null,vec__21817,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21835 = (i__21813 + (1));
i__21813 = G__21835;
continue;
}
} else
{{
var G__21836 = (i__21813 + (1));
i__21813 = G__21836;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21814),iter__21811.call(null,cljs.core.chunk_rest.call(null,s__21812__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21814),null);
}
} else
{var vec__21818 = cljs.core.first.call(null,s__21812__$2);var k = cljs.core.nth.call(null,vec__21818,(0),null);var v = cljs.core.nth.call(null,vec__21818,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21811.call(null,cljs.core.rest.call(null,s__21812__$2)));
} else
{{
var G__21837 = cljs.core.rest.call(null,s__21812__$2);
s__21812__$1 = G__21837;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21793,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21794,s__21792__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831))
,null,null));
});})(i__21793,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21794,s__21792__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__21838 = (i__21793 + (1));
i__21793 = G__21838;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21794),iter__21791.call(null,cljs.core.chunk_rest.call(null,s__21792__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21794),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21792__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21792__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831){
return (function iter__21819(s__21820){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21792__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831){
return (function (){var s__21820__$1 = s__21820;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21820__$1);if(temp__4126__auto____$1)
{var s__21820__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21820__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21820__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21822 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21821 = (0);while(true){
if((i__21821 < size__4376__auto__))
{var vec__21825 = cljs.core._nth.call(null,c__4375__auto__,i__21821);var k = cljs.core.nth.call(null,vec__21825,(0),null);var v = cljs.core.nth.call(null,vec__21825,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21822,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21839 = (i__21821 + (1));
i__21821 = G__21839;
continue;
}
} else
{{
var G__21840 = (i__21821 + (1));
i__21821 = G__21840;
continue;
}
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
{var vec__21826 = cljs.core.first.call(null,s__21820__$2);var k = cljs.core.nth.call(null,vec__21826,(0),null);var v = cljs.core.nth.call(null,vec__21826,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21819.call(null,cljs.core.rest.call(null,s__21820__$2)));
} else
{{
var G__21841 = cljs.core.rest.call(null,s__21820__$2);
s__21820__$1 = G__21841;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21792__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831))
,null,null));
});})(in_QMARK_,s__21792__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831))
;return iter__4377__auto__.call(null,s);
})()),iter__21791.call(null,cljs.core.rest.call(null,s__21792__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21842 = output_checker21752_21831.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21842))
{var error__6036__auto___21843 = temp__4126__auto___21842;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21843)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21843,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21749_21828,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21827,output_schema21749_21828,input_schema21750_21829,input_checker21751_21830,output_checker21752_21831))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21749_21828,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21750_21829], null)));
var ufv___21874 = schema.utils.use_fn_validation;var output_schema21844_21875 = plumbing.fnk.schema.GraphIOSchemata;var input_schema21845_21876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21846_21877 = schema.core.checker.call(null,input_schema21845_21876);var output_checker21847_21878 = schema.core.checker.call(null,output_schema21844_21875);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21874,output_schema21844_21875,input_schema21845_21876,input_checker21846_21877,output_checker21847_21878){
return (function sequence_schemata(G__21848,G__21849){var validate__6034__auto__ = ufv___21874.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21848,G__21849], null);var temp__4126__auto___21880 = input_checker21846_21877.call(null,args__6035__auto___21879);if(cljs.core.truth_(temp__4126__auto___21880))
{var error__6036__auto___21881 = temp__4126__auto___21880;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21881)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21881,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21879,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21845_21876,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21865 = G__21848;var vec__21867 = G__21865;var i1 = cljs.core.nth.call(null,vec__21867,(0),null);var o1 = cljs.core.nth.call(null,vec__21867,(1),null);var G__21866 = G__21849;var vec__21868 = G__21866;var k = cljs.core.nth.call(null,vec__21868,(0),null);var vec__21869 = cljs.core.nth.call(null,vec__21868,(1),null);var i2 = cljs.core.nth.call(null,vec__21869,(0),null);var o2 = cljs.core.nth.call(null,vec__21869,(1),null);var G__21865__$1 = G__21865;var G__21866__$1 = G__21866;while(true){
var vec__21870 = G__21865__$1;var i1__$1 = cljs.core.nth.call(null,vec__21870,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21870,(1),null);var vec__21871 = G__21866__$1;var k__$1 = cljs.core.nth.call(null,vec__21871,(0),null);var vec__21872 = cljs.core.nth.call(null,vec__21871,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__21872,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21872,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__21873 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__21873,(0),null);var unused = cljs.core.nth.call(null,vec__21873,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21882 = output_checker21847_21878.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21882))
{var error__6036__auto___21883 = temp__4126__auto___21882;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21883)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21883,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21844_21875,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21874,output_schema21844_21875,input_schema21845_21876,input_checker21846_21877,output_checker21847_21878))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema21844_21875,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21845_21876], null)));
