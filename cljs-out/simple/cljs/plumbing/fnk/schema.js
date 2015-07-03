// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21750 = p1__6064__6065__auto__;if(G__21750)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21750.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21750.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21750);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21750);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21751_SHARP_){return (cljs.core.val.call(null,p1__21751_SHARP_) > (1));
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
var vec__21753 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21753,(0),null);var v = cljs.core.nth.call(null,vec__21753,(1),null);var p = vec__21753;if(cljs.core.truth_(p))
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
var ufv___21759 = schema.utils.use_fn_validation;var output_schema21754_21760 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21755_21761 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21756_21762 = schema.core.checker.call(null,input_schema21755_21761);var output_checker21757_21763 = schema.core.checker.call(null,output_schema21754_21760);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21759,output_schema21754_21760,input_schema21755_21761,input_checker21756_21762,output_checker21757_21763){
return (function unwrap_schema_form_key(G__21758){var validate__6034__auto__ = ufv___21759.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21764 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21758], null);var temp__4126__auto___21765 = input_checker21756_21762.call(null,args__6035__auto___21764);if(cljs.core.truth_(temp__4126__auto___21765))
{var error__6036__auto___21766 = temp__4126__auto___21765;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21766)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21766,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21764,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21755_21761,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21758;while(true){
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
{var temp__4126__auto___21767 = output_checker21757_21763.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21767))
{var error__6036__auto___21768 = temp__4126__auto___21767;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21768)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21768,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21754_21760,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21759,output_schema21754_21760,input_schema21755_21761,input_checker21756_21762,output_checker21757_21763))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21754_21760,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21755_21761], null)));
var ufv___21774 = schema.utils.use_fn_validation;var output_schema21769_21775 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21770_21776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21771_21777 = schema.core.checker.call(null,input_schema21770_21776);var output_checker21772_21778 = schema.core.checker.call(null,output_schema21769_21775);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21774,output_schema21769_21775,input_schema21770_21776,input_checker21771_21777,output_checker21772_21778){
return (function explicit_schema_key_map(G__21773){var validate__6034__auto__ = ufv___21774.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21779 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21773], null);var temp__4126__auto___21780 = input_checker21771_21777.call(null,args__6035__auto___21779);if(cljs.core.truth_(temp__4126__auto___21780))
{var error__6036__auto___21781 = temp__4126__auto___21780;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21781)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21781,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21779,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21770_21776,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21773;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21782 = output_checker21772_21778.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21782))
{var error__6036__auto___21783 = temp__4126__auto___21782;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21783)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21783,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21769_21775,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21774,output_schema21769_21775,input_schema21770_21776,input_checker21771_21777,output_checker21772_21778))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21769_21775,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21770_21776], null)));
var ufv___21789 = schema.utils.use_fn_validation;var output_schema21784_21790 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21785_21791 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21786_21792 = schema.core.checker.call(null,input_schema21785_21791);var output_checker21787_21793 = schema.core.checker.call(null,output_schema21784_21790);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21789,output_schema21784_21790,input_schema21785_21791,input_checker21786_21792,output_checker21787_21793){
return (function split_schema_keys(G__21788){var validate__6034__auto__ = ufv___21789.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21794 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21788], null);var temp__4126__auto___21795 = input_checker21786_21792.call(null,args__6035__auto___21794);if(cljs.core.truth_(temp__4126__auto___21795))
{var error__6036__auto___21796 = temp__4126__auto___21795;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21796)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21796,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21794,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21785_21791,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21788;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21797 = output_checker21787_21793.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21797))
{var error__6036__auto___21798 = temp__4126__auto___21797;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21798)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21798,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21784_21790,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21789,output_schema21784_21790,input_schema21785_21791,input_checker21786_21792,output_checker21787_21793))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21784_21790,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21785_21791], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21802){var vec__21803 = p__21802;var k = cljs.core.nth.call(null,vec__21803,(0),null);var v = cljs.core.nth.call(null,vec__21803,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21804 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21804,(0),null);var ov = cljs.core.nth.call(null,vec__21804,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21805){
var key_project = cljs.core.first(arglist__21805);
arglist__21805 = cljs.core.next(arglist__21805);
var key_combine = cljs.core.first(arglist__21805);
arglist__21805 = cljs.core.next(arglist__21805);
var val_combine = cljs.core.first(arglist__21805);
var maps = cljs.core.rest(arglist__21805);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21813 = schema.utils.use_fn_validation;var output_schema21807_21814 = plumbing.fnk.schema.InputSchema;var input_schema21808_21815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21809_21816 = schema.core.checker.call(null,input_schema21808_21815);var output_checker21810_21817 = schema.core.checker.call(null,output_schema21807_21814);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21813,output_schema21807_21814,input_schema21808_21815,input_checker21809_21816,output_checker21810_21817){
return (function union_input_schemata(G__21811,G__21812){var validate__6034__auto__ = ufv___21813.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21811,G__21812], null);var temp__4126__auto___21819 = input_checker21809_21816.call(null,args__6035__auto___21818);if(cljs.core.truth_(temp__4126__auto___21819))
{var error__6036__auto___21820 = temp__4126__auto___21819;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21820)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21820,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21818,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21808_21815,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21811;var i2 = G__21812;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21813,output_schema21807_21814,input_schema21808_21815,input_checker21809_21816,output_checker21810_21817){
return (function (p1__21806_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21806_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21806_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21813,output_schema21807_21814,input_schema21808_21815,input_checker21809_21816,output_checker21810_21817))
,((function (validate__6034__auto__,ufv___21813,output_schema21807_21814,input_schema21808_21815,input_checker21809_21816,output_checker21810_21817){
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
});})(validate__6034__auto__,ufv___21813,output_schema21807_21814,input_schema21808_21815,input_checker21809_21816,output_checker21810_21817))
,((function (validate__6034__auto__,ufv___21813,output_schema21807_21814,input_schema21808_21815,input_checker21809_21816,output_checker21810_21817){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21813,output_schema21807_21814,input_schema21808_21815,input_checker21809_21816,output_checker21810_21817))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21821 = output_checker21810_21817.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21821))
{var error__6036__auto___21822 = temp__4126__auto___21821;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21822)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21822,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21807_21814,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21813,output_schema21807_21814,input_schema21808_21815,input_checker21809_21816,output_checker21810_21817))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21807_21814,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21808_21815], null)));
var ufv___21828 = schema.utils.use_fn_validation;var output_schema21823_21829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21824_21830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21825_21831 = schema.core.checker.call(null,input_schema21824_21830);var output_checker21826_21832 = schema.core.checker.call(null,output_schema21823_21829);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21828,output_schema21823_21829,input_schema21824_21830,input_checker21825_21831,output_checker21826_21832){
return (function required_toplevel_keys(G__21827){var validate__6034__auto__ = ufv___21828.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21833 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21827], null);var temp__4126__auto___21834 = input_checker21825_21831.call(null,args__6035__auto___21833);if(cljs.core.truth_(temp__4126__auto___21834))
{var error__6036__auto___21835 = temp__4126__auto___21834;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21835)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21835,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21833,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21824_21830,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21827;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21828,output_schema21823_21829,input_schema21824_21830,input_checker21825_21831,output_checker21826_21832){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21828,output_schema21823_21829,input_schema21824_21830,input_checker21825_21831,output_checker21826_21832))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21836 = output_checker21826_21832.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21836))
{var error__6036__auto___21837 = temp__4126__auto___21836;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21837)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21837,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21823_21829,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21828,output_schema21823_21829,input_schema21824_21830,input_checker21825_21831,output_checker21826_21832))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21823_21829,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21824_21830], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21846(s__21847){return (new cljs.core.LazySeq(null,(function (){var s__21847__$1 = s__21847;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21847__$1);if(temp__4126__auto__)
{var s__21847__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21847__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21847__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21849 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21848 = (0);while(true){
if((i__21848 < size__4376__auto__))
{var vec__21852 = cljs.core._nth.call(null,c__4375__auto__,i__21848);var k = cljs.core.nth.call(null,vec__21852,(0),null);var v = cljs.core.nth.call(null,vec__21852,(1),null);cljs.core.chunk_append.call(null,b__21849,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21854 = (i__21848 + (1));
i__21848 = G__21854;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21849),iter__21846.call(null,cljs.core.chunk_rest.call(null,s__21847__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21849),null);
}
} else
{var vec__21853 = cljs.core.first.call(null,s__21847__$2);var k = cljs.core.nth.call(null,vec__21853,(0),null);var v = cljs.core.nth.call(null,vec__21853,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21846.call(null,cljs.core.rest.call(null,s__21847__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21863(s__21864){return (new cljs.core.LazySeq(null,(function (){var s__21864__$1 = s__21864;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21864__$1);if(temp__4126__auto__)
{var s__21864__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21864__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21864__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21866 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21865 = (0);while(true){
if((i__21865 < size__4376__auto__))
{var vec__21869 = cljs.core._nth.call(null,c__4375__auto__,i__21865);var k = cljs.core.nth.call(null,vec__21869,(0),null);var v = cljs.core.nth.call(null,vec__21869,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21866,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21871 = (i__21865 + (1));
i__21865 = G__21871;
continue;
}
} else
{{
var G__21872 = (i__21865 + (1));
i__21865 = G__21872;
continue;
}
}
} else
{{
var G__21873 = (i__21865 + (1));
i__21865 = G__21873;
continue;
}
}
} else
{{
var G__21874 = (i__21865 + (1));
i__21865 = G__21874;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21866),iter__21863.call(null,cljs.core.chunk_rest.call(null,s__21864__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21866),null);
}
} else
{var vec__21870 = cljs.core.first.call(null,s__21864__$2);var k = cljs.core.nth.call(null,vec__21870,(0),null);var v = cljs.core.nth.call(null,vec__21870,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21863.call(null,cljs.core.rest.call(null,s__21864__$2)));
} else
{{
var G__21875 = cljs.core.rest.call(null,s__21864__$2);
s__21864__$1 = G__21875;
continue;
}
}
} else
{{
var G__21876 = cljs.core.rest.call(null,s__21864__$2);
s__21864__$1 = G__21876;
continue;
}
}
} else
{{
var G__21877 = cljs.core.rest.call(null,s__21864__$2);
s__21864__$1 = G__21877;
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
var ufv___21900 = schema.utils.use_fn_validation;var output_schema21878_21901 = schema.core.Any;var input_schema21879_21902 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21880_21903 = schema.core.checker.call(null,input_schema21879_21902);var output_checker21881_21904 = schema.core.checker.call(null,output_schema21878_21901);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21900,output_schema21878_21901,input_schema21879_21902,input_checker21880_21903,output_checker21881_21904){
return (function compose_schemata(G__21882,G__21883){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21882,G__21883], null);var temp__4126__auto___21906 = input_checker21880_21903.call(null,args__6035__auto___21905);if(cljs.core.truth_(temp__4126__auto___21906))
{var error__6036__auto___21907 = temp__4126__auto___21906;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21907)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21907,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21905,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21879_21902,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21894 = G__21882;var vec__21896 = G__21894;var i2 = cljs.core.nth.call(null,vec__21896,(0),null);var o2 = cljs.core.nth.call(null,vec__21896,(1),null);var G__21895 = G__21883;var vec__21897 = G__21895;var i1 = cljs.core.nth.call(null,vec__21897,(0),null);var o1 = cljs.core.nth.call(null,vec__21897,(1),null);var G__21894__$1 = G__21894;var G__21895__$1 = G__21895;while(true){
var vec__21898 = G__21894__$1;var i2__$1 = cljs.core.nth.call(null,vec__21898,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21898,(1),null);var vec__21899 = G__21895__$1;var i1__$1 = cljs.core.nth.call(null,vec__21899,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21899,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21908 = output_checker21881_21904.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21908))
{var error__6036__auto___21909 = temp__4126__auto___21908;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21909)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21909,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21878_21901,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21900,output_schema21878_21901,input_schema21879_21902,input_checker21880_21903,output_checker21881_21904))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21878_21901,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21879_21902], null)));
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
var ufv___21988 = schema.utils.use_fn_validation;var output_schema21910_21989 = schema.core.Any;var input_schema21911_21990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21912_21991 = schema.core.checker.call(null,input_schema21911_21990);var output_checker21913_21992 = schema.core.checker.call(null,output_schema21910_21989);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992){
return (function split_schema(G__21914,G__21915){var validate__6034__auto__ = ufv___21988.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21914,G__21915], null);var temp__4126__auto___21994 = input_checker21912_21991.call(null,args__6035__auto___21993);if(cljs.core.truth_(temp__4126__auto___21994))
{var error__6036__auto___21995 = temp__4126__auto___21994;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21995)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21995,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21993,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21911_21990,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21914;var ks = G__21915;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992){
return (function iter__21952(s__21953){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992){
return (function (){var s__21953__$1 = s__21953;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21953__$1);if(temp__4126__auto__)
{var s__21953__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21953__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21953__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21955 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21954 = (0);while(true){
if((i__21954 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21954);cljs.core.chunk_append.call(null,b__21955,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21954,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21955,s__21953__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992){
return (function iter__21972(s__21973){return (new cljs.core.LazySeq(null,((function (i__21954,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21955,s__21953__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992){
return (function (){var s__21973__$1 = s__21973;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21973__$1);if(temp__4126__auto____$1)
{var s__21973__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21973__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21973__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21975 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21974 = (0);while(true){
if((i__21974 < size__4376__auto____$1))
{var vec__21978 = cljs.core._nth.call(null,c__4375__auto____$1,i__21974);var k = cljs.core.nth.call(null,vec__21978,(0),null);var v = cljs.core.nth.call(null,vec__21978,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21975,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21996 = (i__21974 + (1));
i__21974 = G__21996;
continue;
}
} else
{{
var G__21997 = (i__21974 + (1));
i__21974 = G__21997;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21975),iter__21972.call(null,cljs.core.chunk_rest.call(null,s__21973__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21975),null);
}
} else
{var vec__21979 = cljs.core.first.call(null,s__21973__$2);var k = cljs.core.nth.call(null,vec__21979,(0),null);var v = cljs.core.nth.call(null,vec__21979,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21972.call(null,cljs.core.rest.call(null,s__21973__$2)));
} else
{{
var G__21998 = cljs.core.rest.call(null,s__21973__$2);
s__21973__$1 = G__21998;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21954,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21955,s__21953__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992))
,null,null));
});})(i__21954,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21955,s__21953__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__21999 = (i__21954 + (1));
i__21954 = G__21999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21955),iter__21952.call(null,cljs.core.chunk_rest.call(null,s__21953__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21955),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21953__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21953__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992){
return (function iter__21980(s__21981){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21953__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992){
return (function (){var s__21981__$1 = s__21981;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21981__$1);if(temp__4126__auto____$1)
{var s__21981__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21981__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21981__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21983 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21982 = (0);while(true){
if((i__21982 < size__4376__auto__))
{var vec__21986 = cljs.core._nth.call(null,c__4375__auto__,i__21982);var k = cljs.core.nth.call(null,vec__21986,(0),null);var v = cljs.core.nth.call(null,vec__21986,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21983,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__22000 = (i__21982 + (1));
i__21982 = G__22000;
continue;
}
} else
{{
var G__22001 = (i__21982 + (1));
i__21982 = G__22001;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21983),iter__21980.call(null,cljs.core.chunk_rest.call(null,s__21981__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21983),null);
}
} else
{var vec__21987 = cljs.core.first.call(null,s__21981__$2);var k = cljs.core.nth.call(null,vec__21987,(0),null);var v = cljs.core.nth.call(null,vec__21987,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21980.call(null,cljs.core.rest.call(null,s__21981__$2)));
} else
{{
var G__22002 = cljs.core.rest.call(null,s__21981__$2);
s__21981__$1 = G__22002;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21953__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992))
,null,null));
});})(in_QMARK_,s__21953__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992))
;return iter__4377__auto__.call(null,s);
})()),iter__21952.call(null,cljs.core.rest.call(null,s__21953__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___22003 = output_checker21913_21992.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___22003))
{var error__6036__auto___22004 = temp__4126__auto___22003;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___22004)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22004,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21910_21989,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21988,output_schema21910_21989,input_schema21911_21990,input_checker21912_21991,output_checker21913_21992))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21910_21989,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21911_21990], null)));
var ufv___22035 = schema.utils.use_fn_validation;var output_schema22005_22036 = plumbing.fnk.schema.GraphIOSchemata;var input_schema22006_22037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker22007_22038 = schema.core.checker.call(null,input_schema22006_22037);var output_checker22008_22039 = schema.core.checker.call(null,output_schema22005_22036);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___22035,output_schema22005_22036,input_schema22006_22037,input_checker22007_22038,output_checker22008_22039){
return (function sequence_schemata(G__22009,G__22010){var validate__6034__auto__ = ufv___22035.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___22040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22009,G__22010], null);var temp__4126__auto___22041 = input_checker22007_22038.call(null,args__6035__auto___22040);if(cljs.core.truth_(temp__4126__auto___22041))
{var error__6036__auto___22042 = temp__4126__auto___22041;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___22042)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22042,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___22040,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22006_22037,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__22026 = G__22009;var vec__22028 = G__22026;var i1 = cljs.core.nth.call(null,vec__22028,(0),null);var o1 = cljs.core.nth.call(null,vec__22028,(1),null);var G__22027 = G__22010;var vec__22029 = G__22027;var k = cljs.core.nth.call(null,vec__22029,(0),null);var vec__22030 = cljs.core.nth.call(null,vec__22029,(1),null);var i2 = cljs.core.nth.call(null,vec__22030,(0),null);var o2 = cljs.core.nth.call(null,vec__22030,(1),null);var G__22026__$1 = G__22026;var G__22027__$1 = G__22027;while(true){
var vec__22031 = G__22026__$1;var i1__$1 = cljs.core.nth.call(null,vec__22031,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__22031,(1),null);var vec__22032 = G__22027__$1;var k__$1 = cljs.core.nth.call(null,vec__22032,(0),null);var vec__22033 = cljs.core.nth.call(null,vec__22032,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__22033,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__22033,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__22034 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__22034,(0),null);var unused = cljs.core.nth.call(null,vec__22034,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___22043 = output_checker22008_22039.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___22043))
{var error__6036__auto___22044 = temp__4126__auto___22043;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___22044)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___22044,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22005_22036,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___22035,output_schema22005_22036,input_schema22006_22037,input_checker22007_22038,output_checker22008_22039))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema22005_22036,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22006_22037], null)));
