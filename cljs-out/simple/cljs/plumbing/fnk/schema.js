// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__20627 = p1__6064__6065__auto__;if(G__20627)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__20627.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__20627.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20627);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__20627);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__20628_SHARP_){return (cljs.core.val.call(null,p1__20628_SHARP_) > (1));
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
var vec__20630 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__20630,(0),null);var v = cljs.core.nth.call(null,vec__20630,(1),null);var p = vec__20630;if(cljs.core.truth_(p))
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
var ufv___20636 = schema.utils.use_fn_validation;var output_schema20631_20637 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema20632_20638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker20633_20639 = schema.core.checker.call(null,input_schema20632_20638);var output_checker20634_20640 = schema.core.checker.call(null,output_schema20631_20637);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___20636,output_schema20631_20637,input_schema20632_20638,input_checker20633_20639,output_checker20634_20640){
return (function unwrap_schema_form_key(G__20635){var validate__6034__auto__ = ufv___20636.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20641 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20635], null);var temp__4126__auto___20642 = input_checker20633_20639.call(null,args__6035__auto___20641);if(cljs.core.truth_(temp__4126__auto___20642))
{var error__6036__auto___20643 = temp__4126__auto___20642;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___20643)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20643,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20641,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20632_20638,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__20635;while(true){
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
{var temp__4126__auto___20644 = output_checker20634_20640.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20644))
{var error__6036__auto___20645 = temp__4126__auto___20644;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___20645)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20645,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20631_20637,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20636,output_schema20631_20637,input_schema20632_20638,input_checker20633_20639,output_checker20634_20640))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema20631_20637,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20632_20638], null)));
var ufv___20651 = schema.utils.use_fn_validation;var output_schema20646_20652 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema20647_20653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20648_20654 = schema.core.checker.call(null,input_schema20647_20653);var output_checker20649_20655 = schema.core.checker.call(null,output_schema20646_20652);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___20651,output_schema20646_20652,input_schema20647_20653,input_checker20648_20654,output_checker20649_20655){
return (function explicit_schema_key_map(G__20650){var validate__6034__auto__ = ufv___20651.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20656 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20650], null);var temp__4126__auto___20657 = input_checker20648_20654.call(null,args__6035__auto___20656);if(cljs.core.truth_(temp__4126__auto___20657))
{var error__6036__auto___20658 = temp__4126__auto___20657;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___20658)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20658,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20656,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20647_20653,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20650;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20659 = output_checker20649_20655.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20659))
{var error__6036__auto___20660 = temp__4126__auto___20659;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___20660)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20660,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20646_20652,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20651,output_schema20646_20652,input_schema20647_20653,input_checker20648_20654,output_checker20649_20655))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema20646_20652,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20647_20653], null)));
var ufv___20666 = schema.utils.use_fn_validation;var output_schema20661_20667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema20662_20668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker20663_20669 = schema.core.checker.call(null,input_schema20662_20668);var output_checker20664_20670 = schema.core.checker.call(null,output_schema20661_20667);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___20666,output_schema20661_20667,input_schema20662_20668,input_checker20663_20669,output_checker20664_20670){
return (function split_schema_keys(G__20665){var validate__6034__auto__ = ufv___20666.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20671 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20665], null);var temp__4126__auto___20672 = input_checker20663_20669.call(null,args__6035__auto___20671);if(cljs.core.truth_(temp__4126__auto___20672))
{var error__6036__auto___20673 = temp__4126__auto___20672;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___20673)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20673,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20671,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20662_20668,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20665;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20674 = output_checker20664_20670.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20674))
{var error__6036__auto___20675 = temp__4126__auto___20674;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___20675)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20675,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20661_20667,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20666,output_schema20661_20667,input_schema20662_20668,input_checker20663_20669,output_checker20664_20670))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema20661_20667,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20662_20668], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__20679){var vec__20680 = p__20679;var k = cljs.core.nth.call(null,vec__20680,(0),null);var v = cljs.core.nth.call(null,vec__20680,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__20681 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__20681,(0),null);var ov = cljs.core.nth.call(null,vec__20681,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__20682){
var key_project = cljs.core.first(arglist__20682);
arglist__20682 = cljs.core.next(arglist__20682);
var key_combine = cljs.core.first(arglist__20682);
arglist__20682 = cljs.core.next(arglist__20682);
var val_combine = cljs.core.first(arglist__20682);
var maps = cljs.core.rest(arglist__20682);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___20690 = schema.utils.use_fn_validation;var output_schema20684_20691 = plumbing.fnk.schema.InputSchema;var input_schema20685_20692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker20686_20693 = schema.core.checker.call(null,input_schema20685_20692);var output_checker20687_20694 = schema.core.checker.call(null,output_schema20684_20691);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___20690,output_schema20684_20691,input_schema20685_20692,input_checker20686_20693,output_checker20687_20694){
return (function union_input_schemata(G__20688,G__20689){var validate__6034__auto__ = ufv___20690.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20695 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20688,G__20689], null);var temp__4126__auto___20696 = input_checker20686_20693.call(null,args__6035__auto___20695);if(cljs.core.truth_(temp__4126__auto___20696))
{var error__6036__auto___20697 = temp__4126__auto___20696;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___20697)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20697,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20695,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20685_20692,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__20688;var i2 = G__20689;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___20690,output_schema20684_20691,input_schema20685_20692,input_checker20686_20693,output_checker20687_20694){
return (function (p1__20683_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__20683_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__20683_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___20690,output_schema20684_20691,input_schema20685_20692,input_checker20686_20693,output_checker20687_20694))
,((function (validate__6034__auto__,ufv___20690,output_schema20684_20691,input_schema20685_20692,input_checker20686_20693,output_checker20687_20694){
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
});})(validate__6034__auto__,ufv___20690,output_schema20684_20691,input_schema20685_20692,input_checker20686_20693,output_checker20687_20694))
,((function (validate__6034__auto__,ufv___20690,output_schema20684_20691,input_schema20685_20692,input_checker20686_20693,output_checker20687_20694){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___20690,output_schema20684_20691,input_schema20685_20692,input_checker20686_20693,output_checker20687_20694))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20698 = output_checker20687_20694.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20698))
{var error__6036__auto___20699 = temp__4126__auto___20698;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___20699)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20699,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20684_20691,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20690,output_schema20684_20691,input_schema20685_20692,input_checker20686_20693,output_checker20687_20694))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema20684_20691,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20685_20692], null)));
var ufv___20705 = schema.utils.use_fn_validation;var output_schema20700_20706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema20701_20707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker20702_20708 = schema.core.checker.call(null,input_schema20701_20707);var output_checker20703_20709 = schema.core.checker.call(null,output_schema20700_20706);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___20705,output_schema20700_20706,input_schema20701_20707,input_checker20702_20708,output_checker20703_20709){
return (function required_toplevel_keys(G__20704){var validate__6034__auto__ = ufv___20705.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20704], null);var temp__4126__auto___20711 = input_checker20702_20708.call(null,args__6035__auto___20710);if(cljs.core.truth_(temp__4126__auto___20711))
{var error__6036__auto___20712 = temp__4126__auto___20711;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___20712)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20712,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20710,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20701_20707,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__20704;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___20705,output_schema20700_20706,input_schema20701_20707,input_checker20702_20708,output_checker20703_20709){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___20705,output_schema20700_20706,input_schema20701_20707,input_checker20702_20708,output_checker20703_20709))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20713 = output_checker20703_20709.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20713))
{var error__6036__auto___20714 = temp__4126__auto___20713;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___20714)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20714,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20700_20706,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20705,output_schema20700_20706,input_schema20701_20707,input_checker20702_20708,output_checker20703_20709))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema20700_20706,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20701_20707], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__20723(s__20724){return (new cljs.core.LazySeq(null,(function (){var s__20724__$1 = s__20724;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20724__$1);if(temp__4126__auto__)
{var s__20724__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20724__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20724__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20726 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20725 = (0);while(true){
if((i__20725 < size__4376__auto__))
{var vec__20729 = cljs.core._nth.call(null,c__4375__auto__,i__20725);var k = cljs.core.nth.call(null,vec__20729,(0),null);var v = cljs.core.nth.call(null,vec__20729,(1),null);cljs.core.chunk_append.call(null,b__20726,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__20731 = (i__20725 + (1));
i__20725 = G__20731;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20726),iter__20723.call(null,cljs.core.chunk_rest.call(null,s__20724__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20726),null);
}
} else
{var vec__20730 = cljs.core.first.call(null,s__20724__$2);var k = cljs.core.nth.call(null,vec__20730,(0),null);var v = cljs.core.nth.call(null,vec__20730,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__20723.call(null,cljs.core.rest.call(null,s__20724__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__20740(s__20741){return (new cljs.core.LazySeq(null,(function (){var s__20741__$1 = s__20741;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20741__$1);if(temp__4126__auto__)
{var s__20741__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20741__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20741__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20743 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20742 = (0);while(true){
if((i__20742 < size__4376__auto__))
{var vec__20746 = cljs.core._nth.call(null,c__4375__auto__,i__20742);var k = cljs.core.nth.call(null,vec__20746,(0),null);var v = cljs.core.nth.call(null,vec__20746,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__20743,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__20748 = (i__20742 + (1));
i__20742 = G__20748;
continue;
}
} else
{{
var G__20749 = (i__20742 + (1));
i__20742 = G__20749;
continue;
}
}
} else
{{
var G__20750 = (i__20742 + (1));
i__20742 = G__20750;
continue;
}
}
} else
{{
var G__20751 = (i__20742 + (1));
i__20742 = G__20751;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20743),iter__20740.call(null,cljs.core.chunk_rest.call(null,s__20741__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20743),null);
}
} else
{var vec__20747 = cljs.core.first.call(null,s__20741__$2);var k = cljs.core.nth.call(null,vec__20747,(0),null);var v = cljs.core.nth.call(null,vec__20747,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__20740.call(null,cljs.core.rest.call(null,s__20741__$2)));
} else
{{
var G__20752 = cljs.core.rest.call(null,s__20741__$2);
s__20741__$1 = G__20752;
continue;
}
}
} else
{{
var G__20753 = cljs.core.rest.call(null,s__20741__$2);
s__20741__$1 = G__20753;
continue;
}
}
} else
{{
var G__20754 = cljs.core.rest.call(null,s__20741__$2);
s__20741__$1 = G__20754;
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
var ufv___20777 = schema.utils.use_fn_validation;var output_schema20755_20778 = schema.core.Any;var input_schema20756_20779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20757_20780 = schema.core.checker.call(null,input_schema20756_20779);var output_checker20758_20781 = schema.core.checker.call(null,output_schema20755_20778);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___20777,output_schema20755_20778,input_schema20756_20779,input_checker20757_20780,output_checker20758_20781){
return (function compose_schemata(G__20759,G__20760){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___20782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20759,G__20760], null);var temp__4126__auto___20783 = input_checker20757_20780.call(null,args__6035__auto___20782);if(cljs.core.truth_(temp__4126__auto___20783))
{var error__6036__auto___20784 = temp__4126__auto___20783;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___20784)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20784,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20782,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20756_20779,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20771 = G__20759;var vec__20773 = G__20771;var i2 = cljs.core.nth.call(null,vec__20773,(0),null);var o2 = cljs.core.nth.call(null,vec__20773,(1),null);var G__20772 = G__20760;var vec__20774 = G__20772;var i1 = cljs.core.nth.call(null,vec__20774,(0),null);var o1 = cljs.core.nth.call(null,vec__20774,(1),null);var G__20771__$1 = G__20771;var G__20772__$1 = G__20772;while(true){
var vec__20775 = G__20771__$1;var i2__$1 = cljs.core.nth.call(null,vec__20775,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20775,(1),null);var vec__20776 = G__20772__$1;var i1__$1 = cljs.core.nth.call(null,vec__20776,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20776,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___20785 = output_checker20758_20781.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20785))
{var error__6036__auto___20786 = temp__4126__auto___20785;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___20786)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20786,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20755_20778,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20777,output_schema20755_20778,input_schema20756_20779,input_checker20757_20780,output_checker20758_20781))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema20755_20778,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20756_20779], null)));
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
var ufv___20865 = schema.utils.use_fn_validation;var output_schema20787_20866 = schema.core.Any;var input_schema20788_20867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker20789_20868 = schema.core.checker.call(null,input_schema20788_20867);var output_checker20790_20869 = schema.core.checker.call(null,output_schema20787_20866);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869){
return (function split_schema(G__20791,G__20792){var validate__6034__auto__ = ufv___20865.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20791,G__20792], null);var temp__4126__auto___20871 = input_checker20789_20868.call(null,args__6035__auto___20870);if(cljs.core.truth_(temp__4126__auto___20871))
{var error__6036__auto___20872 = temp__4126__auto___20871;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___20872)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20872,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20870,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20788_20867,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__20791;var ks = G__20792;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869){
return (function iter__20829(s__20830){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869){
return (function (){var s__20830__$1 = s__20830;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20830__$1);if(temp__4126__auto__)
{var s__20830__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20830__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20830__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20832 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20831 = (0);while(true){
if((i__20831 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__20831);cljs.core.chunk_append.call(null,b__20832,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__20831,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20832,s__20830__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869){
return (function iter__20849(s__20850){return (new cljs.core.LazySeq(null,((function (i__20831,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20832,s__20830__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869){
return (function (){var s__20850__$1 = s__20850;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20850__$1);if(temp__4126__auto____$1)
{var s__20850__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20850__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__20850__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__20852 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__20851 = (0);while(true){
if((i__20851 < size__4376__auto____$1))
{var vec__20855 = cljs.core._nth.call(null,c__4375__auto____$1,i__20851);var k = cljs.core.nth.call(null,vec__20855,(0),null);var v = cljs.core.nth.call(null,vec__20855,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20852,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20873 = (i__20851 + (1));
i__20851 = G__20873;
continue;
}
} else
{{
var G__20874 = (i__20851 + (1));
i__20851 = G__20874;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20852),iter__20849.call(null,cljs.core.chunk_rest.call(null,s__20850__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20852),null);
}
} else
{var vec__20856 = cljs.core.first.call(null,s__20850__$2);var k = cljs.core.nth.call(null,vec__20856,(0),null);var v = cljs.core.nth.call(null,vec__20856,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20849.call(null,cljs.core.rest.call(null,s__20850__$2)));
} else
{{
var G__20875 = cljs.core.rest.call(null,s__20850__$2);
s__20850__$1 = G__20875;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__20831,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20832,s__20830__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869))
,null,null));
});})(i__20831,in_QMARK_,c__4375__auto__,size__4376__auto__,b__20832,s__20830__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__20876 = (i__20831 + (1));
i__20831 = G__20876;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20832),iter__20829.call(null,cljs.core.chunk_rest.call(null,s__20830__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20832),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__20830__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__20830__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869){
return (function iter__20857(s__20858){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__20830__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869){
return (function (){var s__20858__$1 = s__20858;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20858__$1);if(temp__4126__auto____$1)
{var s__20858__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20858__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__20858__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__20860 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__20859 = (0);while(true){
if((i__20859 < size__4376__auto__))
{var vec__20863 = cljs.core._nth.call(null,c__4375__auto__,i__20859);var k = cljs.core.nth.call(null,vec__20863,(0),null);var v = cljs.core.nth.call(null,vec__20863,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__20860,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__20877 = (i__20859 + (1));
i__20859 = G__20877;
continue;
}
} else
{{
var G__20878 = (i__20859 + (1));
i__20859 = G__20878;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20860),iter__20857.call(null,cljs.core.chunk_rest.call(null,s__20858__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20860),null);
}
} else
{var vec__20864 = cljs.core.first.call(null,s__20858__$2);var k = cljs.core.nth.call(null,vec__20864,(0),null);var v = cljs.core.nth.call(null,vec__20864,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__20857.call(null,cljs.core.rest.call(null,s__20858__$2)));
} else
{{
var G__20879 = cljs.core.rest.call(null,s__20858__$2);
s__20858__$1 = G__20879;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__20830__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869))
,null,null));
});})(in_QMARK_,s__20830__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869))
;return iter__4377__auto__.call(null,s);
})()),iter__20829.call(null,cljs.core.rest.call(null,s__20830__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20880 = output_checker20790_20869.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20880))
{var error__6036__auto___20881 = temp__4126__auto___20880;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___20881)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20881,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20787_20866,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20865,output_schema20787_20866,input_schema20788_20867,input_checker20789_20868,output_checker20790_20869))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema20787_20866,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20788_20867], null)));
var ufv___20912 = schema.utils.use_fn_validation;var output_schema20882_20913 = plumbing.fnk.schema.GraphIOSchemata;var input_schema20883_20914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker20884_20915 = schema.core.checker.call(null,input_schema20883_20914);var output_checker20885_20916 = schema.core.checker.call(null,output_schema20882_20913);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___20912,output_schema20882_20913,input_schema20883_20914,input_checker20884_20915,output_checker20885_20916){
return (function sequence_schemata(G__20886,G__20887){var validate__6034__auto__ = ufv___20912.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___20917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20886,G__20887], null);var temp__4126__auto___20918 = input_checker20884_20915.call(null,args__6035__auto___20917);if(cljs.core.truth_(temp__4126__auto___20918))
{var error__6036__auto___20919 = temp__4126__auto___20918;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___20919)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20919,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___20917,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20883_20914,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__20903 = G__20886;var vec__20905 = G__20903;var i1 = cljs.core.nth.call(null,vec__20905,(0),null);var o1 = cljs.core.nth.call(null,vec__20905,(1),null);var G__20904 = G__20887;var vec__20906 = G__20904;var k = cljs.core.nth.call(null,vec__20906,(0),null);var vec__20907 = cljs.core.nth.call(null,vec__20906,(1),null);var i2 = cljs.core.nth.call(null,vec__20907,(0),null);var o2 = cljs.core.nth.call(null,vec__20907,(1),null);var G__20903__$1 = G__20903;var G__20904__$1 = G__20904;while(true){
var vec__20908 = G__20903__$1;var i1__$1 = cljs.core.nth.call(null,vec__20908,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__20908,(1),null);var vec__20909 = G__20904__$1;var k__$1 = cljs.core.nth.call(null,vec__20909,(0),null);var vec__20910 = cljs.core.nth.call(null,vec__20909,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__20910,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__20910,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__20911 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__20911,(0),null);var unused = cljs.core.nth.call(null,vec__20911,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___20920 = output_checker20885_20916.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___20920))
{var error__6036__auto___20921 = temp__4126__auto___20920;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___20921)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___20921,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20882_20913,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___20912,output_schema20882_20913,input_schema20883_20914,input_checker20884_20915,output_checker20885_20916))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema20882_20913,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20883_20914], null)));
