// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21605 = p1__6064__6065__auto__;if(G__21605)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21605.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21605.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21605);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21605);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21606_SHARP_){return (cljs.core.val.call(null,p1__21606_SHARP_) > (1));
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
var vec__21608 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21608,(0),null);var v = cljs.core.nth.call(null,vec__21608,(1),null);var p = vec__21608;if(cljs.core.truth_(p))
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
var ufv___21614 = schema.utils.use_fn_validation;var output_schema21609_21615 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21610_21616 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21611_21617 = schema.core.checker.call(null,input_schema21610_21616);var output_checker21612_21618 = schema.core.checker.call(null,output_schema21609_21615);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21614,output_schema21609_21615,input_schema21610_21616,input_checker21611_21617,output_checker21612_21618){
return (function unwrap_schema_form_key(G__21613){var validate__6034__auto__ = ufv___21614.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21613], null);var temp__4126__auto___21620 = input_checker21611_21617.call(null,args__6035__auto___21619);if(cljs.core.truth_(temp__4126__auto___21620))
{var error__6036__auto___21621 = temp__4126__auto___21620;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21621)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21621,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21619,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21610_21616,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21613;while(true){
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
{var temp__4126__auto___21622 = output_checker21612_21618.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21622))
{var error__6036__auto___21623 = temp__4126__auto___21622;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21623)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21623,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21609_21615,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21614,output_schema21609_21615,input_schema21610_21616,input_checker21611_21617,output_checker21612_21618))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21609_21615,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21610_21616], null)));
var ufv___21629 = schema.utils.use_fn_validation;var output_schema21624_21630 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21625_21631 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21626_21632 = schema.core.checker.call(null,input_schema21625_21631);var output_checker21627_21633 = schema.core.checker.call(null,output_schema21624_21630);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21629,output_schema21624_21630,input_schema21625_21631,input_checker21626_21632,output_checker21627_21633){
return (function explicit_schema_key_map(G__21628){var validate__6034__auto__ = ufv___21629.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21628], null);var temp__4126__auto___21635 = input_checker21626_21632.call(null,args__6035__auto___21634);if(cljs.core.truth_(temp__4126__auto___21635))
{var error__6036__auto___21636 = temp__4126__auto___21635;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21636)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21636,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21634,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21625_21631,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21628;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21637 = output_checker21627_21633.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21637))
{var error__6036__auto___21638 = temp__4126__auto___21637;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21638)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21638,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21624_21630,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21629,output_schema21624_21630,input_schema21625_21631,input_checker21626_21632,output_checker21627_21633))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21624_21630,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21625_21631], null)));
var ufv___21644 = schema.utils.use_fn_validation;var output_schema21639_21645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21640_21646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21641_21647 = schema.core.checker.call(null,input_schema21640_21646);var output_checker21642_21648 = schema.core.checker.call(null,output_schema21639_21645);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21644,output_schema21639_21645,input_schema21640_21646,input_checker21641_21647,output_checker21642_21648){
return (function split_schema_keys(G__21643){var validate__6034__auto__ = ufv___21644.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21649 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21643], null);var temp__4126__auto___21650 = input_checker21641_21647.call(null,args__6035__auto___21649);if(cljs.core.truth_(temp__4126__auto___21650))
{var error__6036__auto___21651 = temp__4126__auto___21650;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21651)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21651,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21649,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21640_21646,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21643;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21652 = output_checker21642_21648.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21652))
{var error__6036__auto___21653 = temp__4126__auto___21652;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21653)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21653,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21639_21645,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21644,output_schema21639_21645,input_schema21640_21646,input_checker21641_21647,output_checker21642_21648))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21639_21645,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21640_21646], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21657){var vec__21658 = p__21657;var k = cljs.core.nth.call(null,vec__21658,(0),null);var v = cljs.core.nth.call(null,vec__21658,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21659 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21659,(0),null);var ov = cljs.core.nth.call(null,vec__21659,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21660){
var key_project = cljs.core.first(arglist__21660);
arglist__21660 = cljs.core.next(arglist__21660);
var key_combine = cljs.core.first(arglist__21660);
arglist__21660 = cljs.core.next(arglist__21660);
var val_combine = cljs.core.first(arglist__21660);
var maps = cljs.core.rest(arglist__21660);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21668 = schema.utils.use_fn_validation;var output_schema21662_21669 = plumbing.fnk.schema.InputSchema;var input_schema21663_21670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21664_21671 = schema.core.checker.call(null,input_schema21663_21670);var output_checker21665_21672 = schema.core.checker.call(null,output_schema21662_21669);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21668,output_schema21662_21669,input_schema21663_21670,input_checker21664_21671,output_checker21665_21672){
return (function union_input_schemata(G__21666,G__21667){var validate__6034__auto__ = ufv___21668.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21666,G__21667], null);var temp__4126__auto___21674 = input_checker21664_21671.call(null,args__6035__auto___21673);if(cljs.core.truth_(temp__4126__auto___21674))
{var error__6036__auto___21675 = temp__4126__auto___21674;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21675)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21675,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21673,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21663_21670,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21666;var i2 = G__21667;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21668,output_schema21662_21669,input_schema21663_21670,input_checker21664_21671,output_checker21665_21672){
return (function (p1__21661_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21661_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21661_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21668,output_schema21662_21669,input_schema21663_21670,input_checker21664_21671,output_checker21665_21672))
,((function (validate__6034__auto__,ufv___21668,output_schema21662_21669,input_schema21663_21670,input_checker21664_21671,output_checker21665_21672){
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
});})(validate__6034__auto__,ufv___21668,output_schema21662_21669,input_schema21663_21670,input_checker21664_21671,output_checker21665_21672))
,((function (validate__6034__auto__,ufv___21668,output_schema21662_21669,input_schema21663_21670,input_checker21664_21671,output_checker21665_21672){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21668,output_schema21662_21669,input_schema21663_21670,input_checker21664_21671,output_checker21665_21672))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21676 = output_checker21665_21672.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21676))
{var error__6036__auto___21677 = temp__4126__auto___21676;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21677)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21677,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21662_21669,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21668,output_schema21662_21669,input_schema21663_21670,input_checker21664_21671,output_checker21665_21672))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21662_21669,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21663_21670], null)));
var ufv___21683 = schema.utils.use_fn_validation;var output_schema21678_21684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21679_21685 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21680_21686 = schema.core.checker.call(null,input_schema21679_21685);var output_checker21681_21687 = schema.core.checker.call(null,output_schema21678_21684);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21683,output_schema21678_21684,input_schema21679_21685,input_checker21680_21686,output_checker21681_21687){
return (function required_toplevel_keys(G__21682){var validate__6034__auto__ = ufv___21683.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21682], null);var temp__4126__auto___21689 = input_checker21680_21686.call(null,args__6035__auto___21688);if(cljs.core.truth_(temp__4126__auto___21689))
{var error__6036__auto___21690 = temp__4126__auto___21689;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21690)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21690,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21688,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21679_21685,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21682;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21683,output_schema21678_21684,input_schema21679_21685,input_checker21680_21686,output_checker21681_21687){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21683,output_schema21678_21684,input_schema21679_21685,input_checker21680_21686,output_checker21681_21687))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21691 = output_checker21681_21687.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21691))
{var error__6036__auto___21692 = temp__4126__auto___21691;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21692)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21692,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21678_21684,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21683,output_schema21678_21684,input_schema21679_21685,input_checker21680_21686,output_checker21681_21687))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21678_21684,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21679_21685], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21701(s__21702){return (new cljs.core.LazySeq(null,(function (){var s__21702__$1 = s__21702;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21702__$1);if(temp__4126__auto__)
{var s__21702__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21702__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21702__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21704 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21703 = (0);while(true){
if((i__21703 < size__4376__auto__))
{var vec__21707 = cljs.core._nth.call(null,c__4375__auto__,i__21703);var k = cljs.core.nth.call(null,vec__21707,(0),null);var v = cljs.core.nth.call(null,vec__21707,(1),null);cljs.core.chunk_append.call(null,b__21704,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21709 = (i__21703 + (1));
i__21703 = G__21709;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21704),iter__21701.call(null,cljs.core.chunk_rest.call(null,s__21702__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21704),null);
}
} else
{var vec__21708 = cljs.core.first.call(null,s__21702__$2);var k = cljs.core.nth.call(null,vec__21708,(0),null);var v = cljs.core.nth.call(null,vec__21708,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21701.call(null,cljs.core.rest.call(null,s__21702__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21718(s__21719){return (new cljs.core.LazySeq(null,(function (){var s__21719__$1 = s__21719;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21719__$1);if(temp__4126__auto__)
{var s__21719__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21719__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21719__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21721 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21720 = (0);while(true){
if((i__21720 < size__4376__auto__))
{var vec__21724 = cljs.core._nth.call(null,c__4375__auto__,i__21720);var k = cljs.core.nth.call(null,vec__21724,(0),null);var v = cljs.core.nth.call(null,vec__21724,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21721,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21726 = (i__21720 + (1));
i__21720 = G__21726;
continue;
}
} else
{{
var G__21727 = (i__21720 + (1));
i__21720 = G__21727;
continue;
}
}
} else
{{
var G__21728 = (i__21720 + (1));
i__21720 = G__21728;
continue;
}
}
} else
{{
var G__21729 = (i__21720 + (1));
i__21720 = G__21729;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21721),iter__21718.call(null,cljs.core.chunk_rest.call(null,s__21719__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21721),null);
}
} else
{var vec__21725 = cljs.core.first.call(null,s__21719__$2);var k = cljs.core.nth.call(null,vec__21725,(0),null);var v = cljs.core.nth.call(null,vec__21725,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21718.call(null,cljs.core.rest.call(null,s__21719__$2)));
} else
{{
var G__21730 = cljs.core.rest.call(null,s__21719__$2);
s__21719__$1 = G__21730;
continue;
}
}
} else
{{
var G__21731 = cljs.core.rest.call(null,s__21719__$2);
s__21719__$1 = G__21731;
continue;
}
}
} else
{{
var G__21732 = cljs.core.rest.call(null,s__21719__$2);
s__21719__$1 = G__21732;
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
var ufv___21755 = schema.utils.use_fn_validation;var output_schema21733_21756 = schema.core.Any;var input_schema21734_21757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21735_21758 = schema.core.checker.call(null,input_schema21734_21757);var output_checker21736_21759 = schema.core.checker.call(null,output_schema21733_21756);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21755,output_schema21733_21756,input_schema21734_21757,input_checker21735_21758,output_checker21736_21759){
return (function compose_schemata(G__21737,G__21738){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21737,G__21738], null);var temp__4126__auto___21761 = input_checker21735_21758.call(null,args__6035__auto___21760);if(cljs.core.truth_(temp__4126__auto___21761))
{var error__6036__auto___21762 = temp__4126__auto___21761;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21762)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21762,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21760,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21734_21757,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21749 = G__21737;var vec__21751 = G__21749;var i2 = cljs.core.nth.call(null,vec__21751,(0),null);var o2 = cljs.core.nth.call(null,vec__21751,(1),null);var G__21750 = G__21738;var vec__21752 = G__21750;var i1 = cljs.core.nth.call(null,vec__21752,(0),null);var o1 = cljs.core.nth.call(null,vec__21752,(1),null);var G__21749__$1 = G__21749;var G__21750__$1 = G__21750;while(true){
var vec__21753 = G__21749__$1;var i2__$1 = cljs.core.nth.call(null,vec__21753,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21753,(1),null);var vec__21754 = G__21750__$1;var i1__$1 = cljs.core.nth.call(null,vec__21754,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21754,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21763 = output_checker21736_21759.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21763))
{var error__6036__auto___21764 = temp__4126__auto___21763;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21764)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21764,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21733_21756,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21755,output_schema21733_21756,input_schema21734_21757,input_checker21735_21758,output_checker21736_21759))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21733_21756,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21734_21757], null)));
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
var ufv___21843 = schema.utils.use_fn_validation;var output_schema21765_21844 = schema.core.Any;var input_schema21766_21845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21767_21846 = schema.core.checker.call(null,input_schema21766_21845);var output_checker21768_21847 = schema.core.checker.call(null,output_schema21765_21844);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847){
return (function split_schema(G__21769,G__21770){var validate__6034__auto__ = ufv___21843.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21769,G__21770], null);var temp__4126__auto___21849 = input_checker21767_21846.call(null,args__6035__auto___21848);if(cljs.core.truth_(temp__4126__auto___21849))
{var error__6036__auto___21850 = temp__4126__auto___21849;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21850)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21850,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21848,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21766_21845,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21769;var ks = G__21770;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847){
return (function iter__21807(s__21808){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847){
return (function (){var s__21808__$1 = s__21808;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21808__$1);if(temp__4126__auto__)
{var s__21808__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21808__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21808__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21810 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21809 = (0);while(true){
if((i__21809 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21809);cljs.core.chunk_append.call(null,b__21810,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21809,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21810,s__21808__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847){
return (function iter__21827(s__21828){return (new cljs.core.LazySeq(null,((function (i__21809,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21810,s__21808__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847){
return (function (){var s__21828__$1 = s__21828;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21828__$1);if(temp__4126__auto____$1)
{var s__21828__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21828__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21828__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21830 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21829 = (0);while(true){
if((i__21829 < size__4376__auto____$1))
{var vec__21833 = cljs.core._nth.call(null,c__4375__auto____$1,i__21829);var k = cljs.core.nth.call(null,vec__21833,(0),null);var v = cljs.core.nth.call(null,vec__21833,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21851 = (i__21829 + (1));
i__21829 = G__21851;
continue;
}
} else
{{
var G__21852 = (i__21829 + (1));
i__21829 = G__21852;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21830),iter__21827.call(null,cljs.core.chunk_rest.call(null,s__21828__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21830),null);
}
} else
{var vec__21834 = cljs.core.first.call(null,s__21828__$2);var k = cljs.core.nth.call(null,vec__21834,(0),null);var v = cljs.core.nth.call(null,vec__21834,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21827.call(null,cljs.core.rest.call(null,s__21828__$2)));
} else
{{
var G__21853 = cljs.core.rest.call(null,s__21828__$2);
s__21828__$1 = G__21853;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21809,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21810,s__21808__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847))
,null,null));
});})(i__21809,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21810,s__21808__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__21854 = (i__21809 + (1));
i__21809 = G__21854;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21810),iter__21807.call(null,cljs.core.chunk_rest.call(null,s__21808__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21810),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21808__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21808__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847){
return (function iter__21835(s__21836){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21808__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847){
return (function (){var s__21836__$1 = s__21836;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21836__$1);if(temp__4126__auto____$1)
{var s__21836__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21836__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21836__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21838 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21837 = (0);while(true){
if((i__21837 < size__4376__auto__))
{var vec__21841 = cljs.core._nth.call(null,c__4375__auto__,i__21837);var k = cljs.core.nth.call(null,vec__21841,(0),null);var v = cljs.core.nth.call(null,vec__21841,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21838,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21855 = (i__21837 + (1));
i__21837 = G__21855;
continue;
}
} else
{{
var G__21856 = (i__21837 + (1));
i__21837 = G__21856;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21838),iter__21835.call(null,cljs.core.chunk_rest.call(null,s__21836__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21838),null);
}
} else
{var vec__21842 = cljs.core.first.call(null,s__21836__$2);var k = cljs.core.nth.call(null,vec__21842,(0),null);var v = cljs.core.nth.call(null,vec__21842,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21835.call(null,cljs.core.rest.call(null,s__21836__$2)));
} else
{{
var G__21857 = cljs.core.rest.call(null,s__21836__$2);
s__21836__$1 = G__21857;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21808__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847))
,null,null));
});})(in_QMARK_,s__21808__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847))
;return iter__4377__auto__.call(null,s);
})()),iter__21807.call(null,cljs.core.rest.call(null,s__21808__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21858 = output_checker21768_21847.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21858))
{var error__6036__auto___21859 = temp__4126__auto___21858;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21859)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21859,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21765_21844,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21843,output_schema21765_21844,input_schema21766_21845,input_checker21767_21846,output_checker21768_21847))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21765_21844,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21766_21845], null)));
var ufv___21890 = schema.utils.use_fn_validation;var output_schema21860_21891 = plumbing.fnk.schema.GraphIOSchemata;var input_schema21861_21892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21862_21893 = schema.core.checker.call(null,input_schema21861_21892);var output_checker21863_21894 = schema.core.checker.call(null,output_schema21860_21891);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21890,output_schema21860_21891,input_schema21861_21892,input_checker21862_21893,output_checker21863_21894){
return (function sequence_schemata(G__21864,G__21865){var validate__6034__auto__ = ufv___21890.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21864,G__21865], null);var temp__4126__auto___21896 = input_checker21862_21893.call(null,args__6035__auto___21895);if(cljs.core.truth_(temp__4126__auto___21896))
{var error__6036__auto___21897 = temp__4126__auto___21896;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21897)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21897,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21895,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21861_21892,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21881 = G__21864;var vec__21883 = G__21881;var i1 = cljs.core.nth.call(null,vec__21883,(0),null);var o1 = cljs.core.nth.call(null,vec__21883,(1),null);var G__21882 = G__21865;var vec__21884 = G__21882;var k = cljs.core.nth.call(null,vec__21884,(0),null);var vec__21885 = cljs.core.nth.call(null,vec__21884,(1),null);var i2 = cljs.core.nth.call(null,vec__21885,(0),null);var o2 = cljs.core.nth.call(null,vec__21885,(1),null);var G__21881__$1 = G__21881;var G__21882__$1 = G__21882;while(true){
var vec__21886 = G__21881__$1;var i1__$1 = cljs.core.nth.call(null,vec__21886,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21886,(1),null);var vec__21887 = G__21882__$1;var k__$1 = cljs.core.nth.call(null,vec__21887,(0),null);var vec__21888 = cljs.core.nth.call(null,vec__21887,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__21888,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21888,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__21889 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__21889,(0),null);var unused = cljs.core.nth.call(null,vec__21889,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21898 = output_checker21863_21894.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21898))
{var error__6036__auto___21899 = temp__4126__auto___21898;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21899)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21899,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21860_21891,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21890,output_schema21860_21891,input_schema21861_21892,input_checker21862_21893,output_checker21863_21894))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema21860_21891,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21861_21892], null)));
