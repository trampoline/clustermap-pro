// Compiled by ClojureScript 0.0-2356
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6064__6065__auto__){var G__21156 = p1__6064__6065__auto__;if(G__21156)
{var bit__4302__auto__ = null;if(cljs.core.truth_((function (){var or__3639__auto__ = bit__4302__auto__;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return G__21156.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__21156.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21156);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__21156);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21157_SHARP_){return (cljs.core.val.call(null,p1__21157_SHARP_) > (1));
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
var vec__21159 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__21159,(0),null);var v = cljs.core.nth.call(null,vec__21159,(1),null);var p = vec__21159;if(cljs.core.truth_(p))
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
var ufv___21165 = schema.utils.use_fn_validation;var output_schema21160_21166 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema21161_21167 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker21162_21168 = schema.core.checker.call(null,input_schema21161_21167);var output_checker21163_21169 = schema.core.checker.call(null,output_schema21160_21166);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___21165,output_schema21160_21166,input_schema21161_21167,input_checker21162_21168,output_checker21163_21169){
return (function unwrap_schema_form_key(G__21164){var validate__6034__auto__ = ufv___21165.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21164], null);var temp__4126__auto___21171 = input_checker21162_21168.call(null,args__6035__auto___21170);if(cljs.core.truth_(temp__4126__auto___21171))
{var error__6036__auto___21172 = temp__4126__auto___21171;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21172)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21172,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21170,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21161_21167,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var k = G__21164;while(true){
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
{var temp__4126__auto___21173 = output_checker21163_21169.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21173))
{var error__6036__auto___21174 = temp__4126__auto___21173;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6036__auto___21174)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21174,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21160_21166,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21165,output_schema21160_21166,input_schema21161_21167,input_checker21162_21168,output_checker21163_21169))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema21160_21166,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21161_21167], null)));
var ufv___21180 = schema.utils.use_fn_validation;var output_schema21175_21181 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);var input_schema21176_21182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21177_21183 = schema.core.checker.call(null,input_schema21176_21182);var output_checker21178_21184 = schema.core.checker.call(null,output_schema21175_21181);/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___21180,output_schema21175_21181,input_schema21176_21182,input_checker21177_21183,output_checker21178_21184){
return (function explicit_schema_key_map(G__21179){var validate__6034__auto__ = ufv___21180.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21185 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21179], null);var temp__4126__auto___21186 = input_checker21177_21183.call(null,args__6035__auto___21185);if(cljs.core.truth_(temp__4126__auto___21186))
{var error__6036__auto___21187 = temp__4126__auto___21186;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21187)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21187,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21185,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21176_21182,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21179;while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21188 = output_checker21178_21184.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21188))
{var error__6036__auto___21189 = temp__4126__auto___21188;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6036__auto___21189)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21189,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21175_21181,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21180,output_schema21175_21181,input_schema21176_21182,input_checker21177_21183,output_checker21178_21184))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema21175_21181,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21176_21182], null)));
var ufv___21195 = schema.utils.use_fn_validation;var output_schema21190_21196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);var input_schema21191_21197 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker21192_21198 = schema.core.checker.call(null,input_schema21191_21197);var output_checker21193_21199 = schema.core.checker.call(null,output_schema21190_21196);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___21195,output_schema21190_21196,input_schema21191_21197,input_checker21192_21198,output_checker21193_21199){
return (function split_schema_keys(G__21194){var validate__6034__auto__ = ufv___21195.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21200 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21194], null);var temp__4126__auto___21201 = input_checker21192_21198.call(null,args__6035__auto___21200);if(cljs.core.truth_(temp__4126__auto___21201))
{var error__6036__auto___21202 = temp__4126__auto___21201;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21202)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21202,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21200,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21191_21197,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21194;while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21203 = output_checker21193_21199.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21203))
{var error__6036__auto___21204 = temp__4126__auto___21203;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6036__auto___21204)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21204,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21190_21196,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21195,output_schema21190_21196,input_schema21191_21197,input_checker21192_21198,output_checker21193_21199))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema21190_21196,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21191_21197], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__21208){var vec__21209 = p__21208;var k = cljs.core.nth.call(null,vec__21209,(0),null);var v = cljs.core.nth.call(null,vec__21209,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__21210 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__21210,(0),null);var ov = cljs.core.nth.call(null,vec__21210,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__21211){
var key_project = cljs.core.first(arglist__21211);
arglist__21211 = cljs.core.next(arglist__21211);
var key_combine = cljs.core.first(arglist__21211);
arglist__21211 = cljs.core.next(arglist__21211);
var val_combine = cljs.core.first(arglist__21211);
var maps = cljs.core.rest(arglist__21211);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___21219 = schema.utils.use_fn_validation;var output_schema21213_21220 = plumbing.fnk.schema.InputSchema;var input_schema21214_21221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker21215_21222 = schema.core.checker.call(null,input_schema21214_21221);var output_checker21216_21223 = schema.core.checker.call(null,output_schema21213_21220);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___21219,output_schema21213_21220,input_schema21214_21221,input_checker21215_21222,output_checker21216_21223){
return (function union_input_schemata(G__21217,G__21218){var validate__6034__auto__ = ufv___21219.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21224 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21217,G__21218], null);var temp__4126__auto___21225 = input_checker21215_21222.call(null,args__6035__auto___21224);if(cljs.core.truth_(temp__4126__auto___21225))
{var error__6036__auto___21226 = temp__4126__auto___21225;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21226)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21226,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21224,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21214_21221,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var i1 = G__21217;var i2 = G__21218;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6034__auto__,ufv___21219,output_schema21213_21220,input_schema21214_21221,input_checker21215_21222,output_checker21216_21223){
return (function (p1__21212_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__21212_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__21212_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6034__auto__,ufv___21219,output_schema21213_21220,input_schema21214_21221,input_checker21215_21222,output_checker21216_21223))
,((function (validate__6034__auto__,ufv___21219,output_schema21213_21220,input_schema21214_21221,input_checker21215_21222,output_checker21216_21223){
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
});})(validate__6034__auto__,ufv___21219,output_schema21213_21220,input_schema21214_21221,input_checker21215_21222,output_checker21216_21223))
,((function (validate__6034__auto__,ufv___21219,output_schema21213_21220,input_schema21214_21221,input_checker21215_21222,output_checker21216_21223){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6034__auto__,ufv___21219,output_schema21213_21220,input_schema21214_21221,input_checker21215_21222,output_checker21216_21223))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21227 = output_checker21216_21223.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21227))
{var error__6036__auto___21228 = temp__4126__auto___21227;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6036__auto___21228)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21228,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21213_21220,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21219,output_schema21213_21220,input_schema21214_21221,input_checker21215_21222,output_checker21216_21223))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema21213_21220,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21214_21221], null)));
var ufv___21234 = schema.utils.use_fn_validation;var output_schema21229_21235 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema21230_21236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker21231_21237 = schema.core.checker.call(null,input_schema21230_21236);var output_checker21232_21238 = schema.core.checker.call(null,output_schema21229_21235);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___21234,output_schema21229_21235,input_schema21230_21236,input_checker21231_21237,output_checker21232_21238){
return (function required_toplevel_keys(G__21233){var validate__6034__auto__ = ufv___21234.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21233], null);var temp__4126__auto___21240 = input_checker21231_21237.call(null,args__6035__auto___21239);if(cljs.core.truth_(temp__4126__auto___21240))
{var error__6036__auto___21241 = temp__4126__auto___21240;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21241)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21241,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21239,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21230_21236,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var input_schema = G__21233;while(true){
return cljs.core.keep.call(null,((function (validate__6034__auto__,ufv___21234,output_schema21229_21235,input_schema21230_21236,input_checker21231_21237,output_checker21232_21238){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__6034__auto__,ufv___21234,output_schema21229_21235,input_schema21230_21236,input_checker21231_21237,output_checker21232_21238))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21242 = output_checker21232_21238.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21242))
{var error__6036__auto___21243 = temp__4126__auto___21242;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6036__auto___21243)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21243,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21229_21235,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21234,output_schema21229_21235,input_schema21230_21236,input_checker21231_21237,output_checker21232_21238))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema21229_21235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21230_21236], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21252(s__21253){return (new cljs.core.LazySeq(null,(function (){var s__21253__$1 = s__21253;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21253__$1);if(temp__4126__auto__)
{var s__21253__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21253__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21253__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21255 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21254 = (0);while(true){
if((i__21254 < size__4376__auto__))
{var vec__21258 = cljs.core._nth.call(null,c__4375__auto__,i__21254);var k = cljs.core.nth.call(null,vec__21258,(0),null);var v = cljs.core.nth.call(null,vec__21258,(1),null);cljs.core.chunk_append.call(null,b__21255,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__21260 = (i__21254 + (1));
i__21254 = G__21260;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21255),iter__21252.call(null,cljs.core.chunk_rest.call(null,s__21253__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21255),null);
}
} else
{var vec__21259 = cljs.core.first.call(null,s__21253__$2);var k = cljs.core.nth.call(null,vec__21259,(0),null);var v = cljs.core.nth.call(null,vec__21259,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__21252.call(null,cljs.core.rest.call(null,s__21253__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__21269(s__21270){return (new cljs.core.LazySeq(null,(function (){var s__21270__$1 = s__21270;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21270__$1);if(temp__4126__auto__)
{var s__21270__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21270__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21270__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21272 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21271 = (0);while(true){
if((i__21271 < size__4376__auto__))
{var vec__21275 = cljs.core._nth.call(null,c__4375__auto__,i__21271);var k = cljs.core.nth.call(null,vec__21275,(0),null);var v = cljs.core.nth.call(null,vec__21275,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__21272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__21277 = (i__21271 + (1));
i__21271 = G__21277;
continue;
}
} else
{{
var G__21278 = (i__21271 + (1));
i__21271 = G__21278;
continue;
}
}
} else
{{
var G__21279 = (i__21271 + (1));
i__21271 = G__21279;
continue;
}
}
} else
{{
var G__21280 = (i__21271 + (1));
i__21271 = G__21280;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21272),iter__21269.call(null,cljs.core.chunk_rest.call(null,s__21270__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21272),null);
}
} else
{var vec__21276 = cljs.core.first.call(null,s__21270__$2);var k = cljs.core.nth.call(null,vec__21276,(0),null);var v = cljs.core.nth.call(null,vec__21276,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__21269.call(null,cljs.core.rest.call(null,s__21270__$2)));
} else
{{
var G__21281 = cljs.core.rest.call(null,s__21270__$2);
s__21270__$1 = G__21281;
continue;
}
}
} else
{{
var G__21282 = cljs.core.rest.call(null,s__21270__$2);
s__21270__$1 = G__21282;
continue;
}
}
} else
{{
var G__21283 = cljs.core.rest.call(null,s__21270__$2);
s__21270__$1 = G__21283;
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
var ufv___21306 = schema.utils.use_fn_validation;var output_schema21284_21307 = schema.core.Any;var input_schema21285_21308 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21286_21309 = schema.core.checker.call(null,input_schema21285_21308);var output_checker21287_21310 = schema.core.checker.call(null,output_schema21284_21307);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___21306,output_schema21284_21307,input_schema21285_21308,input_checker21286_21309,output_checker21287_21310){
return (function compose_schemata(G__21288,G__21289){var validate__6034__auto__ = true;if(validate__6034__auto__)
{var args__6035__auto___21311 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21288,G__21289], null);var temp__4126__auto___21312 = input_checker21286_21309.call(null,args__6035__auto___21311);if(cljs.core.truth_(temp__4126__auto___21312))
{var error__6036__auto___21313 = temp__4126__auto___21312;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21313)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21313,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21311,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21285_21308,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21300 = G__21288;var vec__21302 = G__21300;var i2 = cljs.core.nth.call(null,vec__21302,(0),null);var o2 = cljs.core.nth.call(null,vec__21302,(1),null);var G__21301 = G__21289;var vec__21303 = G__21301;var i1 = cljs.core.nth.call(null,vec__21303,(0),null);var o1 = cljs.core.nth.call(null,vec__21303,(1),null);var G__21300__$1 = G__21300;var G__21301__$1 = G__21301;while(true){
var vec__21304 = G__21300__$1;var i2__$1 = cljs.core.nth.call(null,vec__21304,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21304,(1),null);var vec__21305 = G__21301__$1;var i1__$1 = cljs.core.nth.call(null,vec__21305,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21305,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__6034__auto__)
{var temp__4126__auto___21314 = output_checker21287_21310.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21314))
{var error__6036__auto___21315 = temp__4126__auto___21314;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6036__auto___21315)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21315,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21284_21307,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21306,output_schema21284_21307,input_schema21285_21308,input_checker21286_21309,output_checker21287_21310))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema21284_21307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21285_21308], null)));
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
var ufv___21394 = schema.utils.use_fn_validation;var output_schema21316_21395 = schema.core.Any;var input_schema21317_21396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker21318_21397 = schema.core.checker.call(null,input_schema21317_21396);var output_checker21319_21398 = schema.core.checker.call(null,output_schema21316_21395);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398){
return (function split_schema(G__21320,G__21321){var validate__6034__auto__ = ufv___21394.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21399 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21320,G__21321], null);var temp__4126__auto___21400 = input_checker21318_21397.call(null,args__6035__auto___21399);if(cljs.core.truth_(temp__4126__auto___21400))
{var error__6036__auto___21401 = temp__4126__auto___21400;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21401)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21401,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21399,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21317_21396,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var s = G__21320;var ks = G__21321;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4377__auto__ = ((function (ks__$1,validate__6034__auto__,ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398){
return (function iter__21358(s__21359){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6034__auto__,ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398){
return (function (){var s__21359__$1 = s__21359;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21359__$1);if(temp__4126__auto__)
{var s__21359__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21359__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21359__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21361 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21360 = (0);while(true){
if((i__21360 < size__4376__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4375__auto__,i__21360);cljs.core.chunk_append.call(null,b__21361,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (i__21360,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21361,s__21359__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398){
return (function iter__21378(s__21379){return (new cljs.core.LazySeq(null,((function (i__21360,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21361,s__21359__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398){
return (function (){var s__21379__$1 = s__21379;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21379__$1);if(temp__4126__auto____$1)
{var s__21379__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21379__$2))
{var c__4375__auto____$1 = cljs.core.chunk_first.call(null,s__21379__$2);var size__4376__auto____$1 = cljs.core.count.call(null,c__4375__auto____$1);var b__21381 = cljs.core.chunk_buffer.call(null,size__4376__auto____$1);if((function (){var i__21380 = (0);while(true){
if((i__21380 < size__4376__auto____$1))
{var vec__21384 = cljs.core._nth.call(null,c__4375__auto____$1,i__21380);var k = cljs.core.nth.call(null,vec__21384,(0),null);var v = cljs.core.nth.call(null,vec__21384,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21381,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21402 = (i__21380 + (1));
i__21380 = G__21402;
continue;
}
} else
{{
var G__21403 = (i__21380 + (1));
i__21380 = G__21403;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21381),iter__21378.call(null,cljs.core.chunk_rest.call(null,s__21379__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21381),null);
}
} else
{var vec__21385 = cljs.core.first.call(null,s__21379__$2);var k = cljs.core.nth.call(null,vec__21385,(0),null);var v = cljs.core.nth.call(null,vec__21385,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21378.call(null,cljs.core.rest.call(null,s__21379__$2)));
} else
{{
var G__21404 = cljs.core.rest.call(null,s__21379__$2);
s__21379__$1 = G__21404;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21360,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21361,s__21359__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398))
,null,null));
});})(i__21360,in_QMARK_,c__4375__auto__,size__4376__auto__,b__21361,s__21359__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398))
;return iter__4377__auto__.call(null,s);
})()));
{
var G__21405 = (i__21360 + (1));
i__21360 = G__21405;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21361),iter__21358.call(null,cljs.core.chunk_rest.call(null,s__21359__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21361),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__21359__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = ((function (in_QMARK_,s__21359__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398){
return (function iter__21386(s__21387){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__21359__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398){
return (function (){var s__21387__$1 = s__21387;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__21387__$1);if(temp__4126__auto____$1)
{var s__21387__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21387__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__21387__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__21389 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__21388 = (0);while(true){
if((i__21388 < size__4376__auto__))
{var vec__21392 = cljs.core._nth.call(null,c__4375__auto__,i__21388);var k = cljs.core.nth.call(null,vec__21392,(0),null);var v = cljs.core.nth.call(null,vec__21392,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__21389,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__21406 = (i__21388 + (1));
i__21388 = G__21406;
continue;
}
} else
{{
var G__21407 = (i__21388 + (1));
i__21388 = G__21407;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21389),iter__21386.call(null,cljs.core.chunk_rest.call(null,s__21387__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21389),null);
}
} else
{var vec__21393 = cljs.core.first.call(null,s__21387__$2);var k = cljs.core.nth.call(null,vec__21393,(0),null);var v = cljs.core.nth.call(null,vec__21393,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__21386.call(null,cljs.core.rest.call(null,s__21387__$2)));
} else
{{
var G__21408 = cljs.core.rest.call(null,s__21387__$2);
s__21387__$1 = G__21408;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__21359__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398))
,null,null));
});})(in_QMARK_,s__21359__$2,temp__4126__auto__,ks__$1,validate__6034__auto__,ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398))
;return iter__4377__auto__.call(null,s);
})()),iter__21358.call(null,cljs.core.rest.call(null,s__21359__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__6034__auto__,ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398))
,null,null));
});})(ks__$1,validate__6034__auto__,ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398))
;return iter__4377__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21409 = output_checker21319_21398.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21409))
{var error__6036__auto___21410 = temp__4126__auto___21409;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6036__auto___21410)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21410,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21316_21395,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21394,output_schema21316_21395,input_schema21317_21396,input_checker21318_21397,output_checker21319_21398))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema21316_21395,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21317_21396], null)));
var ufv___21441 = schema.utils.use_fn_validation;var output_schema21411_21442 = plumbing.fnk.schema.GraphIOSchemata;var input_schema21412_21443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker21413_21444 = schema.core.checker.call(null,input_schema21412_21443);var output_checker21414_21445 = schema.core.checker.call(null,output_schema21411_21442);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___21441,output_schema21411_21442,input_schema21412_21443,input_checker21413_21444,output_checker21414_21445){
return (function sequence_schemata(G__21415,G__21416){var validate__6034__auto__ = ufv___21441.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___21446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21415,G__21416], null);var temp__4126__auto___21447 = input_checker21413_21444.call(null,args__6035__auto___21446);if(cljs.core.truth_(temp__4126__auto___21447))
{var error__6036__auto___21448 = temp__4126__auto___21447;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21448)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21448,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___21446,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21412_21443,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var G__21432 = G__21415;var vec__21434 = G__21432;var i1 = cljs.core.nth.call(null,vec__21434,(0),null);var o1 = cljs.core.nth.call(null,vec__21434,(1),null);var G__21433 = G__21416;var vec__21435 = G__21433;var k = cljs.core.nth.call(null,vec__21435,(0),null);var vec__21436 = cljs.core.nth.call(null,vec__21435,(1),null);var i2 = cljs.core.nth.call(null,vec__21436,(0),null);var o2 = cljs.core.nth.call(null,vec__21436,(1),null);var G__21432__$1 = G__21432;var G__21433__$1 = G__21433;while(true){
var vec__21437 = G__21432__$1;var i1__$1 = cljs.core.nth.call(null,vec__21437,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__21437,(1),null);var vec__21438 = G__21433__$1;var k__$1 = cljs.core.nth.call(null,vec__21438,(0),null);var vec__21439 = cljs.core.nth.call(null,vec__21438,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__21439,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__21439,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__21440 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__21440,(0),null);var unused = cljs.core.nth.call(null,vec__21440,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___21449 = output_checker21414_21445.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___21449))
{var error__6036__auto___21450 = temp__4126__auto___21449;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6036__auto___21450)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___21450,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21411_21442,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___21441,output_schema21411_21442,input_schema21412_21443,input_checker21413_21444,output_checker21414_21445))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema21411_21442,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21412_21443], null)));
