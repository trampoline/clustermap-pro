// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.filters');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.core');
clustermap.filters.FilterSchema = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.Keyword,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.Keyword,schema.core.Any], true, false)], null),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.maybe.call(null,schema.core.Str)], true, false),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false),new cljs.core.Keyword(null,"composed","composed",-1510693384),schema.core.Any], null);
clustermap.filters.make_sequential = (function make_sequential(s){if(cljs.core.sequential_QMARK_.call(null,s))
{return cljs.core.vec.call(null,s);
} else
{if((s == null))
{return cljs.core.PersistentVector.EMPTY;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);

}
}
});
clustermap.filters.or_filters = (function or_filters(filters){var filters__$1 = clustermap.filters.make_sequential.call(null,filters);return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should","should",2086636648),filters__$1], null)], null);
});
clustermap.filters.de_or_filters = (function de_or_filters(combf){return cljs.core.get_in.call(null,combf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"should","should",2086636648)], null));
});
/**
* and a sequence of filters
*/
clustermap.filters.and_filters = (function and_filters(filters){var filters__$1 = clustermap.filters.make_sequential.call(null,filters);return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),filters__$1], null)], null);
});
/**
* extract a sequence of filters which have been ANDed
*/
clustermap.filters.de_and_filters = (function de_and_filters(combf){return cljs.core.get_in.call(null,combf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"must","must",-243952061)], null));
});
/**
* AND all components and a base-filter
*/
clustermap.filters.compose_base_filter = (function compose_base_filter(components,base_filter){var filters = (function (){var G__32816 = components;var G__32816__$1 = (((G__32816 == null))?null:cljs.core.vals.call(null,G__32816));var G__32816__$2 = (((G__32816__$1 == null))?null:cljs.core.conj.call(null,G__32816__$1,base_filter));return G__32816__$2;
})();var filters__$1 = cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.identity,filters));return clustermap.filters.and_filters.call(null,filters__$1);
});
/**
* take the filter components, and combine with each base-filter to produce
* a restricted version of the base-filter
*/
clustermap.filters.compose_filters = (function compose_filters(components,base_filters){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__32819){var vec__32820 = p__32819;var k = cljs.core.nth.call(null,vec__32820,(0),null);var bf = cljs.core.nth.call(null,vec__32820,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.filters.compose_base_filter.call(null,components,bf)], null);
}),base_filters));
});
var ufv___32830 = schema.utils.use_fn_validation;var output_schema32821_32831 = clustermap.filters.FilterSchema;var input_schema32822_32832 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,clustermap.filters.FilterSchema,new cljs.core.Symbol(null,"filters","filters",-1679708850,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"k","k",-505765866,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"f","f",43394975,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"d","d",-682293345,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"u","u",483896742,null))], null);var input_checker32823_32833 = schema.core.checker.call(null,input_schema32822_32832);var output_checker32824_32834 = schema.core.checker.call(null,output_schema32821_32831);/**
* Inputs: [filters :- FilterSchema k :- s/Str f :- s/Any d :- s/Str u :- s/Str]
* Returns: FilterSchema
* 
* update the filter component k with filter f, description d, and url component u
*/
clustermap.filters.update_filter_component = ((function (ufv___32830,output_schema32821_32831,input_schema32822_32832,input_checker32823_32833,output_checker32824_32834){
return (function update_filter_component(G__32825,G__32826,G__32827,G__32828,G__32829){var validate__6034__auto__ = ufv___32830.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32835 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32825,G__32826,G__32827,G__32828,G__32829], null);var temp__4126__auto___32836 = input_checker32823_32833.call(null,args__6035__auto___32835);if(cljs.core.truth_(temp__4126__auto___32836))
{var error__6036__auto___32837 = temp__4126__auto___32836;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"update-filter-component","update-filter-component",-69268663,null),cljs.core.pr_str.call(null,error__6036__auto___32837)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32837,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32835,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32822_32832,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var filters = G__32825;var k = G__32826;var f = G__32827;var d = G__32828;var u = G__32829;while(true){
var f__$1 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,filters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),k], null),f),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),k], null),d),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-components","url-components",-1811437097),k], null),u);return cljs.core.assoc_in.call(null,f__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),clustermap.filters.compose_filters.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964).cljs$core$IFn$_invoke$arity$1(f__$1)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32838 = output_checker32824_32834.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32838))
{var error__6036__auto___32839 = temp__4126__auto___32838;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"update-filter-component","update-filter-component",-69268663,null),cljs.core.pr_str.call(null,error__6036__auto___32839)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32839,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32821_32831,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32830,output_schema32821_32831,input_schema32822_32832,input_checker32823_32833,output_checker32824_32834))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.update_filter_component),schema.core.make_fn_schema.call(null,output_schema32821_32831,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32822_32832], null)));
var ufv___32845 = schema.utils.use_fn_validation;var output_schema32840_32846 = clustermap.filters.FilterSchema;var input_schema32841_32847 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,clustermap.filters.FilterSchema,new cljs.core.Symbol(null,"filters","filters",-1679708850,null))], null);var input_checker32842_32848 = schema.core.checker.call(null,input_schema32841_32847);var output_checker32843_32849 = schema.core.checker.call(null,output_schema32840_32846);/**
* Inputs: [filters :- FilterSchema]
* Returns: FilterSchema
* 
* reset all filter components
*/
clustermap.filters.reset_filter = ((function (ufv___32845,output_schema32840_32846,input_schema32841_32847,input_checker32842_32848,output_checker32843_32849){
return (function reset_filter(G__32844){var validate__6034__auto__ = ufv___32845.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32850 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32844], null);var temp__4126__auto___32851 = input_checker32842_32848.call(null,args__6035__auto___32850);if(cljs.core.truth_(temp__4126__auto___32851))
{var error__6036__auto___32852 = temp__4126__auto___32851;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"reset-filter","reset-filter",-1197346017,null),cljs.core.pr_str.call(null,error__6036__auto___32852)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32852,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32850,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32841_32847,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var filters = G__32844;while(true){
var f = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,filters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-components","url-components",-1811437097)], null),cljs.core.PersistentArrayMap.EMPTY);return cljs.core.assoc_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),clustermap.filters.compose_filters.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964).cljs$core$IFn$_invoke$arity$1(f)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32853 = output_checker32843_32849.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32853))
{var error__6036__auto___32854 = temp__4126__auto___32853;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"reset-filter","reset-filter",-1197346017,null),cljs.core.pr_str.call(null,error__6036__auto___32854)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32854,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32840_32846,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32845,output_schema32840_32846,input_schema32841_32847,input_checker32842_32848,output_checker32843_32849))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.reset_filter),schema.core.make_fn_schema.call(null,output_schema32840_32846,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32841_32847], null)));
var ufv___32866 = schema.utils.use_fn_validation;var output_schema32855_32867 = schema.core.Any;var input_schema32856_32868 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"url-components","url-components",-170905570,null))], null);var input_checker32857_32869 = schema.core.checker.call(null,input_schema32856_32868);var output_checker32858_32870 = schema.core.checker.call(null,output_schema32855_32867);/**
* Inputs: [url-components]
* 
* JSON encode the filter for use as a URL param
*/
clustermap.filters.filter_url_param_value = ((function (ufv___32866,output_schema32855_32867,input_schema32856_32868,input_checker32857_32869,output_checker32858_32870){
return (function filter_url_param_value(G__32859){var validate__6034__auto__ = ufv___32866.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32871 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32859], null);var temp__4126__auto___32872 = input_checker32857_32869.call(null,args__6035__auto___32871);if(cljs.core.truth_(temp__4126__auto___32872))
{var error__6036__auto___32873 = temp__4126__auto___32872;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"filter-url-param-value","filter-url-param-value",1822853848,null),cljs.core.pr_str.call(null,error__6036__auto___32873)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32873,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32871,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32856_32868,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var url_components = G__32859;while(true){
var G__32863 = url_components;var G__32863__$1 = (((G__32863 == null))?null:cljs.core.filter.call(null,((function (G__32863,validate__6034__auto__,ufv___32866,output_schema32855_32867,input_schema32856_32868,input_checker32857_32869,output_checker32858_32870){
return (function (p__32864){var vec__32865 = p__32864;var k = cljs.core.nth.call(null,vec__32865,(0),null);var v = cljs.core.nth.call(null,vec__32865,(1),null);return cljs.core.not_empty.call(null,v);
});})(G__32863,validate__6034__auto__,ufv___32866,output_schema32855_32867,input_schema32856_32868,input_checker32857_32869,output_checker32858_32870))
,G__32863));var G__32863__$2 = (((G__32863__$1 == null))?null:cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__32863__$1));var G__32863__$3 = (((G__32863__$2 == null))?null:cljs.core.not_empty.call(null,G__32863__$2));var G__32863__$4 = (((G__32863__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32863__$3));var G__32863__$5 = (((G__32863__$4 == null))?null:JSON.stringify(G__32863__$4));return G__32863__$5;
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32874 = output_checker32858_32870.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32874))
{var error__6036__auto___32875 = temp__4126__auto___32874;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"filter-url-param-value","filter-url-param-value",1822853848,null),cljs.core.pr_str.call(null,error__6036__auto___32875)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32875,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32855_32867,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32866,output_schema32855_32867,input_schema32856_32868,input_checker32857_32869,output_checker32858_32870))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.filter_url_param_value),schema.core.make_fn_schema.call(null,output_schema32855_32867,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32856_32868], null)));
var ufv___32883 = schema.utils.use_fn_validation;var output_schema32876_32884 = schema.core.Any;var input_schema32877_32885 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"v","v",1661996586,null))], null);var input_checker32878_32886 = schema.core.checker.call(null,input_schema32877_32885);var output_checker32879_32887 = schema.core.checker.call(null,output_schema32876_32884);/**
* Inputs: [v]
*/
clustermap.filters.parse_url_param_value = ((function (ufv___32883,output_schema32876_32884,input_schema32877_32885,input_checker32878_32886,output_checker32879_32887){
return (function parse_url_param_value(G__32880){var validate__6034__auto__ = ufv___32883.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32880], null);var temp__4126__auto___32889 = input_checker32878_32886.call(null,args__6035__auto___32888);if(cljs.core.truth_(temp__4126__auto___32889))
{var error__6036__auto___32890 = temp__4126__auto___32889;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"parse-url-param-value","parse-url-param-value",1248214261,null),cljs.core.pr_str.call(null,error__6036__auto___32890)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32890,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32888,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32877_32885,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var v = G__32880;while(true){
var G__32882 = v;var G__32882__$1 = (((G__32882 == null))?null:JSON.parse(G__32882));var G__32882__$2 = (((G__32882__$1 == null))?null:cljs.core.js__GT_clj.call(null,G__32882__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));return G__32882__$2;
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32891 = output_checker32879_32887.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32891))
{var error__6036__auto___32892 = temp__4126__auto___32891;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"parse-url-param-value","parse-url-param-value",1248214261,null),cljs.core.pr_str.call(null,error__6036__auto___32892)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32892,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32876_32884,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32883,output_schema32876_32884,input_schema32877_32885,input_checker32878_32886,output_checker32879_32887))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.parse_url_param_value),schema.core.make_fn_schema.call(null,output_schema32876_32884,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32877_32885], null)));
