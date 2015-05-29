// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__13939__13940__auto__){var G__31469 = p1__13939__13940__auto__;if(G__31469)
{var bit__12177__auto__ = null;if(cljs.core.truth_((function (){var or__11514__auto__ = bit__12177__auto__;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return G__31469.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__31469.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__31469);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__31469);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__31470_SHARP_){return (cljs.core.val.call(null,p1__31470_SHARP_) > (1));
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
var vec__31472 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__31472,(0),null);var v = cljs.core.nth.call(null,vec__31472,(1),null);var p = vec__31472;if(cljs.core.truth_(p))
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
var ufv___31478 = schema.utils.use_fn_validation;var output_schema31473_31479 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema31474_31480 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker31475_31481 = schema.core.checker.call(null,input_schema31474_31480);var output_checker31476_31482 = schema.core.checker.call(null,output_schema31473_31479);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___31478,output_schema31473_31479,input_schema31474_31480,input_checker31475_31481,output_checker31476_31482){
return (function unwrap_schema_form_key(G__31477){var validate__13909__auto__ = ufv___31478.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___31483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31477], null);var temp__4126__auto___31484 = input_checker31475_31481.call(null,args__13910__auto___31483);if(cljs.core.truth_(temp__4126__auto___31484))
{var error__13911__auto___31485 = temp__4126__auto___31484;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13911__auto___31485)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31485,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___31483,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31474_31480,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var k = G__31477;while(true){
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
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___31486 = output_checker31476_31482.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___31486))
{var error__13911__auto___31487 = temp__4126__auto___31486;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__13911__auto___31487)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31487,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31473_31479,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv___31478,output_schema31473_31479,input_schema31474_31480,input_checker31475_31481,output_checker31476_31482))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema31473_31479,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31474_31480], null)));
var ufv___31493 = schema.utils.use_fn_validation;var output_schema31488_31494 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema31489_31495 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker31490_31496 = schema.core.checker.call(null,input_schema31489_31495);var output_checker31491_31497 = schema.core.checker.call(null,output_schema31488_31494);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___31493,output_schema31488_31494,input_schema31489_31495,input_checker31490_31496,output_checker31491_31497){
return (function explicit_schema_key_map(G__31492){var validate__13909__auto__ = ufv___31493.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___31498 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31492], null);var temp__4126__auto___31499 = input_checker31490_31496.call(null,args__13910__auto___31498);if(cljs.core.truth_(temp__4126__auto___31499))
{var error__13911__auto___31500 = temp__4126__auto___31499;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13911__auto___31500)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31500,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___31498,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31489_31495,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var s = G__31492;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___31501 = output_checker31491_31497.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___31501))
{var error__13911__auto___31502 = temp__4126__auto___31501;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__13911__auto___31502)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31502,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31488_31494,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv___31493,output_schema31488_31494,input_schema31489_31495,input_checker31490_31496,output_checker31491_31497))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema31488_31494,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31489_31495], null)));
var ufv___31508 = schema.utils.use_fn_validation;var output_schema31503_31509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema31504_31510 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker31505_31511 = schema.core.checker.call(null,input_schema31504_31510);var output_checker31506_31512 = schema.core.checker.call(null,output_schema31503_31509);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___31508,output_schema31503_31509,input_schema31504_31510,input_checker31505_31511,output_checker31506_31512){
return (function split_schema_keys(G__31507){var validate__13909__auto__ = ufv___31508.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___31513 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31507], null);var temp__4126__auto___31514 = input_checker31505_31511.call(null,args__13910__auto___31513);if(cljs.core.truth_(temp__4126__auto___31514))
{var error__13911__auto___31515 = temp__4126__auto___31514;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13911__auto___31515)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31515,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___31513,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31504_31510,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var s = G__31507;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___31516 = output_checker31506_31512.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___31516))
{var error__13911__auto___31517 = temp__4126__auto___31516;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__13911__auto___31517)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31517,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31503_31509,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv___31508,output_schema31503_31509,input_schema31504_31510,input_checker31505_31511,output_checker31506_31512))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema31503_31509,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31504_31510], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__31521){var vec__31522 = p__31521;var k = cljs.core.nth.call(null,vec__31522,(0),null);var v = cljs.core.nth.call(null,vec__31522,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__31523 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__31523,(0),null);var ov = cljs.core.nth.call(null,vec__31523,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__31524){
var key_project = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var key_combine = cljs.core.first(arglist__31524);
arglist__31524 = cljs.core.next(arglist__31524);
var val_combine = cljs.core.first(arglist__31524);
var maps = cljs.core.rest(arglist__31524);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___31532 = schema.utils.use_fn_validation;var output_schema31526_31533 = plumbing.fnk.schema.InputSchema;var input_schema31527_31534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker31528_31535 = schema.core.checker.call(null,input_schema31527_31534);var output_checker31529_31536 = schema.core.checker.call(null,output_schema31526_31533);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___31532,output_schema31526_31533,input_schema31527_31534,input_checker31528_31535,output_checker31529_31536){
return (function union_input_schemata(G__31530,G__31531){var validate__13909__auto__ = ufv___31532.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___31537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31530,G__31531], null);var temp__4126__auto___31538 = input_checker31528_31535.call(null,args__13910__auto___31537);if(cljs.core.truth_(temp__4126__auto___31538))
{var error__13911__auto___31539 = temp__4126__auto___31538;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13911__auto___31539)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31539,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___31537,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31527_31534,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var i1 = G__31530;var i2 = G__31531;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__13909__auto__,ufv___31532,output_schema31526_31533,input_schema31527_31534,input_checker31528_31535,output_checker31529_31536){
return (function (p1__31525_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__31525_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__31525_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__13909__auto__,ufv___31532,output_schema31526_31533,input_schema31527_31534,input_checker31528_31535,output_checker31529_31536))
,((function (validate__13909__auto__,ufv___31532,output_schema31526_31533,input_schema31527_31534,input_checker31528_31535,output_checker31529_31536){
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
});})(validate__13909__auto__,ufv___31532,output_schema31526_31533,input_schema31527_31534,input_checker31528_31535,output_checker31529_31536))
,((function (validate__13909__auto__,ufv___31532,output_schema31526_31533,input_schema31527_31534,input_checker31528_31535,output_checker31529_31536){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__13909__auto__,ufv___31532,output_schema31526_31533,input_schema31527_31534,input_checker31528_31535,output_checker31529_31536))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___31540 = output_checker31529_31536.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___31540))
{var error__13911__auto___31541 = temp__4126__auto___31540;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__13911__auto___31541)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31541,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31526_31533,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv___31532,output_schema31526_31533,input_schema31527_31534,input_checker31528_31535,output_checker31529_31536))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema31526_31533,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31527_31534], null)));
var ufv___31547 = schema.utils.use_fn_validation;var output_schema31542_31548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema31543_31549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker31544_31550 = schema.core.checker.call(null,input_schema31543_31549);var output_checker31545_31551 = schema.core.checker.call(null,output_schema31542_31548);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___31547,output_schema31542_31548,input_schema31543_31549,input_checker31544_31550,output_checker31545_31551){
return (function required_toplevel_keys(G__31546){var validate__13909__auto__ = ufv___31547.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___31552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31546], null);var temp__4126__auto___31553 = input_checker31544_31550.call(null,args__13910__auto___31552);if(cljs.core.truth_(temp__4126__auto___31553))
{var error__13911__auto___31554 = temp__4126__auto___31553;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13911__auto___31554)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31554,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___31552,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31543_31549,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var input_schema = G__31546;while(true){
return cljs.core.keep.call(null,((function (validate__13909__auto__,ufv___31547,output_schema31542_31548,input_schema31543_31549,input_checker31544_31550,output_checker31545_31551){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__13909__auto__,ufv___31547,output_schema31542_31548,input_schema31543_31549,input_checker31544_31550,output_checker31545_31551))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___31555 = output_checker31545_31551.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___31555))
{var error__13911__auto___31556 = temp__4126__auto___31555;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__13911__auto___31556)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31556,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31542_31548,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv___31547,output_schema31542_31548,input_schema31543_31549,input_checker31544_31550,output_checker31545_31551))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema31542_31548,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31543_31549], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12252__auto__ = (function iter__31565(s__31566){return (new cljs.core.LazySeq(null,(function (){var s__31566__$1 = s__31566;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31566__$1);if(temp__4126__auto__)
{var s__31566__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31566__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__31566__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__31568 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__31567 = (0);while(true){
if((i__31567 < size__12251__auto__))
{var vec__31571 = cljs.core._nth.call(null,c__12250__auto__,i__31567);var k = cljs.core.nth.call(null,vec__31571,(0),null);var v = cljs.core.nth.call(null,vec__31571,(1),null);cljs.core.chunk_append.call(null,b__31568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__31573 = (i__31567 + (1));
i__31567 = G__31573;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31568),iter__31565.call(null,cljs.core.chunk_rest.call(null,s__31566__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31568),null);
}
} else
{var vec__31572 = cljs.core.first.call(null,s__31566__$2);var k = cljs.core.nth.call(null,vec__31572,(0),null);var v = cljs.core.nth.call(null,vec__31572,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__31565.call(null,cljs.core.rest.call(null,s__31566__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12252__auto__.call(null,expr);
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12252__auto__ = (function iter__31582(s__31583){return (new cljs.core.LazySeq(null,(function (){var s__31583__$1 = s__31583;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31583__$1);if(temp__4126__auto__)
{var s__31583__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31583__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__31583__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__31585 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__31584 = (0);while(true){
if((i__31584 < size__12251__auto__))
{var vec__31588 = cljs.core._nth.call(null,c__12250__auto__,i__31584);var k = cljs.core.nth.call(null,vec__31588,(0),null);var v = cljs.core.nth.call(null,vec__31588,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__31585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__31590 = (i__31584 + (1));
i__31584 = G__31590;
continue;
}
} else
{{
var G__31591 = (i__31584 + (1));
i__31584 = G__31591;
continue;
}
}
} else
{{
var G__31592 = (i__31584 + (1));
i__31584 = G__31592;
continue;
}
}
} else
{{
var G__31593 = (i__31584 + (1));
i__31584 = G__31593;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31585),iter__31582.call(null,cljs.core.chunk_rest.call(null,s__31583__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31585),null);
}
} else
{var vec__31589 = cljs.core.first.call(null,s__31583__$2);var k = cljs.core.nth.call(null,vec__31589,(0),null);var v = cljs.core.nth.call(null,vec__31589,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__31582.call(null,cljs.core.rest.call(null,s__31583__$2)));
} else
{{
var G__31594 = cljs.core.rest.call(null,s__31583__$2);
s__31583__$1 = G__31594;
continue;
}
}
} else
{{
var G__31595 = cljs.core.rest.call(null,s__31583__$2);
s__31583__$1 = G__31595;
continue;
}
}
} else
{{
var G__31596 = cljs.core.rest.call(null,s__31583__$2);
s__31583__$1 = G__31596;
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
});return iter__12252__auto__.call(null,input_schema);
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
var ufv___31619 = schema.utils.use_fn_validation;var output_schema31597_31620 = schema.core.Any;var input_schema31598_31621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker31599_31622 = schema.core.checker.call(null,input_schema31598_31621);var output_checker31600_31623 = schema.core.checker.call(null,output_schema31597_31620);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___31619,output_schema31597_31620,input_schema31598_31621,input_checker31599_31622,output_checker31600_31623){
return (function compose_schemata(G__31601,G__31602){var validate__13909__auto__ = true;if(validate__13909__auto__)
{var args__13910__auto___31624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31601,G__31602], null);var temp__4126__auto___31625 = input_checker31599_31622.call(null,args__13910__auto___31624);if(cljs.core.truth_(temp__4126__auto___31625))
{var error__13911__auto___31626 = temp__4126__auto___31625;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13911__auto___31626)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31626,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___31624,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31598_31621,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var G__31613 = G__31601;var vec__31615 = G__31613;var i2 = cljs.core.nth.call(null,vec__31615,(0),null);var o2 = cljs.core.nth.call(null,vec__31615,(1),null);var G__31614 = G__31602;var vec__31616 = G__31614;var i1 = cljs.core.nth.call(null,vec__31616,(0),null);var o1 = cljs.core.nth.call(null,vec__31616,(1),null);var G__31613__$1 = G__31613;var G__31614__$1 = G__31614;while(true){
var vec__31617 = G__31613__$1;var i2__$1 = cljs.core.nth.call(null,vec__31617,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__31617,(1),null);var vec__31618 = G__31614__$1;var i1__$1 = cljs.core.nth.call(null,vec__31618,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__31618,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__13909__auto__)
{var temp__4126__auto___31627 = output_checker31600_31623.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___31627))
{var error__13911__auto___31628 = temp__4126__auto___31627;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__13911__auto___31628)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31628,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31597_31620,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv___31619,output_schema31597_31620,input_schema31598_31621,input_checker31599_31622,output_checker31600_31623))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema31597_31620,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31598_31621], null)));
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
var ufv___31707 = schema.utils.use_fn_validation;var output_schema31629_31708 = schema.core.Any;var input_schema31630_31709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker31631_31710 = schema.core.checker.call(null,input_schema31630_31709);var output_checker31632_31711 = schema.core.checker.call(null,output_schema31629_31708);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711){
return (function split_schema(G__31633,G__31634){var validate__13909__auto__ = ufv___31707.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___31712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31633,G__31634], null);var temp__4126__auto___31713 = input_checker31631_31710.call(null,args__13910__auto___31712);if(cljs.core.truth_(temp__4126__auto___31713))
{var error__13911__auto___31714 = temp__4126__auto___31713;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13911__auto___31714)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31714,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___31712,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31630_31709,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var s = G__31633;var ks = G__31634;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__12252__auto__ = ((function (ks__$1,validate__13909__auto__,ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711){
return (function iter__31671(s__31672){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__13909__auto__,ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711){
return (function (){var s__31672__$1 = s__31672;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31672__$1);if(temp__4126__auto__)
{var s__31672__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31672__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__31672__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__31674 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__31673 = (0);while(true){
if((i__31673 < size__12251__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__12250__auto__,i__31673);cljs.core.chunk_append.call(null,b__31674,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12252__auto__ = ((function (i__31673,in_QMARK_,c__12250__auto__,size__12251__auto__,b__31674,s__31672__$2,temp__4126__auto__,ks__$1,validate__13909__auto__,ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711){
return (function iter__31691(s__31692){return (new cljs.core.LazySeq(null,((function (i__31673,in_QMARK_,c__12250__auto__,size__12251__auto__,b__31674,s__31672__$2,temp__4126__auto__,ks__$1,validate__13909__auto__,ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711){
return (function (){var s__31692__$1 = s__31692;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31692__$1);if(temp__4126__auto____$1)
{var s__31692__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31692__$2))
{var c__12250__auto____$1 = cljs.core.chunk_first.call(null,s__31692__$2);var size__12251__auto____$1 = cljs.core.count.call(null,c__12250__auto____$1);var b__31694 = cljs.core.chunk_buffer.call(null,size__12251__auto____$1);if((function (){var i__31693 = (0);while(true){
if((i__31693 < size__12251__auto____$1))
{var vec__31697 = cljs.core._nth.call(null,c__12250__auto____$1,i__31693);var k = cljs.core.nth.call(null,vec__31697,(0),null);var v = cljs.core.nth.call(null,vec__31697,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__31694,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__31715 = (i__31693 + (1));
i__31693 = G__31715;
continue;
}
} else
{{
var G__31716 = (i__31693 + (1));
i__31693 = G__31716;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31694),iter__31691.call(null,cljs.core.chunk_rest.call(null,s__31692__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31694),null);
}
} else
{var vec__31698 = cljs.core.first.call(null,s__31692__$2);var k = cljs.core.nth.call(null,vec__31698,(0),null);var v = cljs.core.nth.call(null,vec__31698,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__31691.call(null,cljs.core.rest.call(null,s__31692__$2)));
} else
{{
var G__31717 = cljs.core.rest.call(null,s__31692__$2);
s__31692__$1 = G__31717;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__31673,in_QMARK_,c__12250__auto__,size__12251__auto__,b__31674,s__31672__$2,temp__4126__auto__,ks__$1,validate__13909__auto__,ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711))
,null,null));
});})(i__31673,in_QMARK_,c__12250__auto__,size__12251__auto__,b__31674,s__31672__$2,temp__4126__auto__,ks__$1,validate__13909__auto__,ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711))
;return iter__12252__auto__.call(null,s);
})()));
{
var G__31718 = (i__31673 + (1));
i__31673 = G__31718;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31674),iter__31671.call(null,cljs.core.chunk_rest.call(null,s__31672__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31674),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__31672__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12252__auto__ = ((function (in_QMARK_,s__31672__$2,temp__4126__auto__,ks__$1,validate__13909__auto__,ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711){
return (function iter__31699(s__31700){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__31672__$2,temp__4126__auto__,ks__$1,validate__13909__auto__,ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711){
return (function (){var s__31700__$1 = s__31700;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31700__$1);if(temp__4126__auto____$1)
{var s__31700__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31700__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__31700__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__31702 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__31701 = (0);while(true){
if((i__31701 < size__12251__auto__))
{var vec__31705 = cljs.core._nth.call(null,c__12250__auto__,i__31701);var k = cljs.core.nth.call(null,vec__31705,(0),null);var v = cljs.core.nth.call(null,vec__31705,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__31702,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__31719 = (i__31701 + (1));
i__31701 = G__31719;
continue;
}
} else
{{
var G__31720 = (i__31701 + (1));
i__31701 = G__31720;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31702),iter__31699.call(null,cljs.core.chunk_rest.call(null,s__31700__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31702),null);
}
} else
{var vec__31706 = cljs.core.first.call(null,s__31700__$2);var k = cljs.core.nth.call(null,vec__31706,(0),null);var v = cljs.core.nth.call(null,vec__31706,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__31699.call(null,cljs.core.rest.call(null,s__31700__$2)));
} else
{{
var G__31721 = cljs.core.rest.call(null,s__31700__$2);
s__31700__$1 = G__31721;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__31672__$2,temp__4126__auto__,ks__$1,validate__13909__auto__,ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711))
,null,null));
});})(in_QMARK_,s__31672__$2,temp__4126__auto__,ks__$1,validate__13909__auto__,ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711))
;return iter__12252__auto__.call(null,s);
})()),iter__31671.call(null,cljs.core.rest.call(null,s__31672__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__13909__auto__,ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711))
,null,null));
});})(ks__$1,validate__13909__auto__,ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711))
;return iter__12252__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___31722 = output_checker31632_31711.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___31722))
{var error__13911__auto___31723 = temp__4126__auto___31722;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__13911__auto___31723)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31723,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31629_31708,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv___31707,output_schema31629_31708,input_schema31630_31709,input_checker31631_31710,output_checker31632_31711))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema31629_31708,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31630_31709], null)));
var ufv___31754 = schema.utils.use_fn_validation;var output_schema31724_31755 = plumbing.fnk.schema.GraphIOSchemata;var input_schema31725_31756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker31726_31757 = schema.core.checker.call(null,input_schema31725_31756);var output_checker31727_31758 = schema.core.checker.call(null,output_schema31724_31755);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___31754,output_schema31724_31755,input_schema31725_31756,input_checker31726_31757,output_checker31727_31758){
return (function sequence_schemata(G__31728,G__31729){var validate__13909__auto__ = ufv___31754.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___31759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31728,G__31729], null);var temp__4126__auto___31760 = input_checker31726_31757.call(null,args__13910__auto___31759);if(cljs.core.truth_(temp__4126__auto___31760))
{var error__13911__auto___31761 = temp__4126__auto___31760;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13911__auto___31761)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31761,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___31759,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31725_31756,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var G__31745 = G__31728;var vec__31747 = G__31745;var i1 = cljs.core.nth.call(null,vec__31747,(0),null);var o1 = cljs.core.nth.call(null,vec__31747,(1),null);var G__31746 = G__31729;var vec__31748 = G__31746;var k = cljs.core.nth.call(null,vec__31748,(0),null);var vec__31749 = cljs.core.nth.call(null,vec__31748,(1),null);var i2 = cljs.core.nth.call(null,vec__31749,(0),null);var o2 = cljs.core.nth.call(null,vec__31749,(1),null);var G__31745__$1 = G__31745;var G__31746__$1 = G__31746;while(true){
var vec__31750 = G__31745__$1;var i1__$1 = cljs.core.nth.call(null,vec__31750,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__31750,(1),null);var vec__31751 = G__31746__$1;var k__$1 = cljs.core.nth.call(null,vec__31751,(0),null);var vec__31752 = cljs.core.nth.call(null,vec__31751,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__31752,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__31752,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__31753 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__31753,(0),null);var unused = cljs.core.nth.call(null,vec__31753,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___31762 = output_checker31727_31758.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___31762))
{var error__13911__auto___31763 = temp__4126__auto___31762;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__13911__auto___31763)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___31763,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31724_31755,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv___31754,output_schema31724_31755,input_schema31725_31756,input_checker31726_31757,output_checker31727_31758))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema31724_31755,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31725_31756], null)));

//# sourceMappingURL=schema.js.map