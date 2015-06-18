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
clustermap.filters.compose_base_filter = (function compose_base_filter(components,base_filter){var filters = (function (){var G__32848 = components;var G__32848__$1 = (((G__32848 == null))?null:cljs.core.vals.call(null,G__32848));var G__32848__$2 = (((G__32848__$1 == null))?null:cljs.core.conj.call(null,G__32848__$1,base_filter));return G__32848__$2;
})();var filters__$1 = cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.identity,filters));return clustermap.filters.and_filters.call(null,filters__$1);
});
/**
* take the filter components, and combine with each base-filter to produce
* a restricted version of the base-filter
*/
clustermap.filters.compose_filters = (function compose_filters(components,base_filters){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__32851){var vec__32852 = p__32851;var k = cljs.core.nth.call(null,vec__32852,(0),null);var bf = cljs.core.nth.call(null,vec__32852,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.filters.compose_base_filter.call(null,components,bf)], null);
}),base_filters));
});
var ufv___32862 = schema.utils.use_fn_validation;var output_schema32853_32863 = clustermap.filters.FilterSchema;var input_schema32854_32864 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,clustermap.filters.FilterSchema,new cljs.core.Symbol(null,"filters","filters",-1679708850,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"k","k",-505765866,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"f","f",43394975,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"d","d",-682293345,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"u","u",483896742,null))], null);var input_checker32855_32865 = schema.core.checker.call(null,input_schema32854_32864);var output_checker32856_32866 = schema.core.checker.call(null,output_schema32853_32863);/**
* Inputs: [filters :- FilterSchema k :- s/Str f :- s/Any d :- s/Str u :- s/Str]
* Returns: FilterSchema
* 
* update the filter component k with filter f, description d, and url component u
*/
clustermap.filters.update_filter_component = ((function (ufv___32862,output_schema32853_32863,input_schema32854_32864,input_checker32855_32865,output_checker32856_32866){
return (function update_filter_component(G__32857,G__32858,G__32859,G__32860,G__32861){var validate__6034__auto__ = ufv___32862.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32867 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32857,G__32858,G__32859,G__32860,G__32861], null);var temp__4126__auto___32868 = input_checker32855_32865.call(null,args__6035__auto___32867);if(cljs.core.truth_(temp__4126__auto___32868))
{var error__6036__auto___32869 = temp__4126__auto___32868;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"update-filter-component","update-filter-component",-69268663,null),cljs.core.pr_str.call(null,error__6036__auto___32869)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32869,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32867,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32854_32864,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var filters = G__32857;var k = G__32858;var f = G__32859;var d = G__32860;var u = G__32861;while(true){
var f__$1 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,filters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),k], null),f),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),k], null),d),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-components","url-components",-1811437097),k], null),u);return cljs.core.assoc_in.call(null,f__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),clustermap.filters.compose_filters.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964).cljs$core$IFn$_invoke$arity$1(f__$1)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32870 = output_checker32856_32866.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32870))
{var error__6036__auto___32871 = temp__4126__auto___32870;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"update-filter-component","update-filter-component",-69268663,null),cljs.core.pr_str.call(null,error__6036__auto___32871)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32871,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32853_32863,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32862,output_schema32853_32863,input_schema32854_32864,input_checker32855_32865,output_checker32856_32866))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.update_filter_component),schema.core.make_fn_schema.call(null,output_schema32853_32863,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32854_32864], null)));
var ufv___32877 = schema.utils.use_fn_validation;var output_schema32872_32878 = clustermap.filters.FilterSchema;var input_schema32873_32879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,clustermap.filters.FilterSchema,new cljs.core.Symbol(null,"filters","filters",-1679708850,null))], null);var input_checker32874_32880 = schema.core.checker.call(null,input_schema32873_32879);var output_checker32875_32881 = schema.core.checker.call(null,output_schema32872_32878);/**
* Inputs: [filters :- FilterSchema]
* Returns: FilterSchema
* 
* reset all filter components
*/
clustermap.filters.reset_filter = ((function (ufv___32877,output_schema32872_32878,input_schema32873_32879,input_checker32874_32880,output_checker32875_32881){
return (function reset_filter(G__32876){var validate__6034__auto__ = ufv___32877.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32876], null);var temp__4126__auto___32883 = input_checker32874_32880.call(null,args__6035__auto___32882);if(cljs.core.truth_(temp__4126__auto___32883))
{var error__6036__auto___32884 = temp__4126__auto___32883;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"reset-filter","reset-filter",-1197346017,null),cljs.core.pr_str.call(null,error__6036__auto___32884)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32884,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32882,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32873_32879,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var filters = G__32876;while(true){
var f = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,filters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-components","url-components",-1811437097)], null),cljs.core.PersistentArrayMap.EMPTY);return cljs.core.assoc_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),clustermap.filters.compose_filters.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964).cljs$core$IFn$_invoke$arity$1(f)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32885 = output_checker32875_32881.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32885))
{var error__6036__auto___32886 = temp__4126__auto___32885;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"reset-filter","reset-filter",-1197346017,null),cljs.core.pr_str.call(null,error__6036__auto___32886)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32886,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32872_32878,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32877,output_schema32872_32878,input_schema32873_32879,input_checker32874_32880,output_checker32875_32881))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.reset_filter),schema.core.make_fn_schema.call(null,output_schema32872_32878,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32873_32879], null)));
var ufv___32898 = schema.utils.use_fn_validation;var output_schema32887_32899 = schema.core.Any;var input_schema32888_32900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"url-components","url-components",-170905570,null))], null);var input_checker32889_32901 = schema.core.checker.call(null,input_schema32888_32900);var output_checker32890_32902 = schema.core.checker.call(null,output_schema32887_32899);/**
* Inputs: [url-components]
* 
* JSON encode the filter for use as a URL param
*/
clustermap.filters.filter_url_param_value = ((function (ufv___32898,output_schema32887_32899,input_schema32888_32900,input_checker32889_32901,output_checker32890_32902){
return (function filter_url_param_value(G__32891){var validate__6034__auto__ = ufv___32898.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32891], null);var temp__4126__auto___32904 = input_checker32889_32901.call(null,args__6035__auto___32903);if(cljs.core.truth_(temp__4126__auto___32904))
{var error__6036__auto___32905 = temp__4126__auto___32904;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"filter-url-param-value","filter-url-param-value",1822853848,null),cljs.core.pr_str.call(null,error__6036__auto___32905)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32905,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32903,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32888_32900,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var url_components = G__32891;while(true){
var G__32895 = url_components;var G__32895__$1 = (((G__32895 == null))?null:cljs.core.filter.call(null,((function (G__32895,validate__6034__auto__,ufv___32898,output_schema32887_32899,input_schema32888_32900,input_checker32889_32901,output_checker32890_32902){
return (function (p__32896){var vec__32897 = p__32896;var k = cljs.core.nth.call(null,vec__32897,(0),null);var v = cljs.core.nth.call(null,vec__32897,(1),null);return cljs.core.not_empty.call(null,v);
});})(G__32895,validate__6034__auto__,ufv___32898,output_schema32887_32899,input_schema32888_32900,input_checker32889_32901,output_checker32890_32902))
,G__32895));var G__32895__$2 = (((G__32895__$1 == null))?null:cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__32895__$1));var G__32895__$3 = (((G__32895__$2 == null))?null:cljs.core.not_empty.call(null,G__32895__$2));var G__32895__$4 = (((G__32895__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32895__$3));var G__32895__$5 = (((G__32895__$4 == null))?null:JSON.stringify(G__32895__$4));return G__32895__$5;
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32906 = output_checker32890_32902.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32906))
{var error__6036__auto___32907 = temp__4126__auto___32906;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"filter-url-param-value","filter-url-param-value",1822853848,null),cljs.core.pr_str.call(null,error__6036__auto___32907)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32907,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32887_32899,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32898,output_schema32887_32899,input_schema32888_32900,input_checker32889_32901,output_checker32890_32902))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.filter_url_param_value),schema.core.make_fn_schema.call(null,output_schema32887_32899,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32888_32900], null)));
var ufv___32915 = schema.utils.use_fn_validation;var output_schema32908_32916 = schema.core.Any;var input_schema32909_32917 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"v","v",1661996586,null))], null);var input_checker32910_32918 = schema.core.checker.call(null,input_schema32909_32917);var output_checker32911_32919 = schema.core.checker.call(null,output_schema32908_32916);/**
* Inputs: [v]
*/
clustermap.filters.parse_url_param_value = ((function (ufv___32915,output_schema32908_32916,input_schema32909_32917,input_checker32910_32918,output_checker32911_32919){
return (function parse_url_param_value(G__32912){var validate__6034__auto__ = ufv___32915.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32920 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32912], null);var temp__4126__auto___32921 = input_checker32910_32918.call(null,args__6035__auto___32920);if(cljs.core.truth_(temp__4126__auto___32921))
{var error__6036__auto___32922 = temp__4126__auto___32921;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"parse-url-param-value","parse-url-param-value",1248214261,null),cljs.core.pr_str.call(null,error__6036__auto___32922)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32922,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32920,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32909_32917,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var v = G__32912;while(true){
var G__32914 = v;var G__32914__$1 = (((G__32914 == null))?null:JSON.parse(G__32914));var G__32914__$2 = (((G__32914__$1 == null))?null:cljs.core.js__GT_clj.call(null,G__32914__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));return G__32914__$2;
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32923 = output_checker32911_32919.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32923))
{var error__6036__auto___32924 = temp__4126__auto___32923;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"parse-url-param-value","parse-url-param-value",1248214261,null),cljs.core.pr_str.call(null,error__6036__auto___32924)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32924,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32908_32916,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32915,output_schema32908_32916,input_schema32909_32917,input_checker32910_32918,output_checker32911_32919))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.parse_url_param_value),schema.core.make_fn_schema.call(null,output_schema32908_32916,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32909_32917], null)));
