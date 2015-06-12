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
clustermap.filters.compose_base_filter = (function compose_base_filter(components,base_filter){var filters = (function (){var G__32640 = components;var G__32640__$1 = (((G__32640 == null))?null:cljs.core.vals.call(null,G__32640));var G__32640__$2 = (((G__32640__$1 == null))?null:cljs.core.conj.call(null,G__32640__$1,base_filter));return G__32640__$2;
})();var filters__$1 = cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.identity,filters));return clustermap.filters.and_filters.call(null,filters__$1);
});
/**
* take the filter components, and combine with each base-filter to produce
* a restricted version of the base-filter
*/
clustermap.filters.compose_filters = (function compose_filters(components,base_filters){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__32643){var vec__32644 = p__32643;var k = cljs.core.nth.call(null,vec__32644,(0),null);var bf = cljs.core.nth.call(null,vec__32644,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.filters.compose_base_filter.call(null,components,bf)], null);
}),base_filters));
});
var ufv___32654 = schema.utils.use_fn_validation;var output_schema32645_32655 = clustermap.filters.FilterSchema;var input_schema32646_32656 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,clustermap.filters.FilterSchema,new cljs.core.Symbol(null,"filters","filters",-1679708850,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"k","k",-505765866,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"f","f",43394975,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"d","d",-682293345,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"u","u",483896742,null))], null);var input_checker32647_32657 = schema.core.checker.call(null,input_schema32646_32656);var output_checker32648_32658 = schema.core.checker.call(null,output_schema32645_32655);/**
* Inputs: [filters :- FilterSchema k :- s/Str f :- s/Any d :- s/Str u :- s/Str]
* Returns: FilterSchema
* 
* update the filter component k with filter f, description d, and url component u
*/
clustermap.filters.update_filter_component = ((function (ufv___32654,output_schema32645_32655,input_schema32646_32656,input_checker32647_32657,output_checker32648_32658){
return (function update_filter_component(G__32649,G__32650,G__32651,G__32652,G__32653){var validate__6034__auto__ = ufv___32654.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32659 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32649,G__32650,G__32651,G__32652,G__32653], null);var temp__4126__auto___32660 = input_checker32647_32657.call(null,args__6035__auto___32659);if(cljs.core.truth_(temp__4126__auto___32660))
{var error__6036__auto___32661 = temp__4126__auto___32660;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"update-filter-component","update-filter-component",-69268663,null),cljs.core.pr_str.call(null,error__6036__auto___32661)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32661,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32659,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32646_32656,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var filters = G__32649;var k = G__32650;var f = G__32651;var d = G__32652;var u = G__32653;while(true){
var f__$1 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,filters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),k], null),f),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),k], null),d),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-components","url-components",-1811437097),k], null),u);return cljs.core.assoc_in.call(null,f__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),clustermap.filters.compose_filters.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964).cljs$core$IFn$_invoke$arity$1(f__$1)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32662 = output_checker32648_32658.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32662))
{var error__6036__auto___32663 = temp__4126__auto___32662;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"update-filter-component","update-filter-component",-69268663,null),cljs.core.pr_str.call(null,error__6036__auto___32663)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32663,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32645_32655,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32654,output_schema32645_32655,input_schema32646_32656,input_checker32647_32657,output_checker32648_32658))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.update_filter_component),schema.core.make_fn_schema.call(null,output_schema32645_32655,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32646_32656], null)));
var ufv___32669 = schema.utils.use_fn_validation;var output_schema32664_32670 = clustermap.filters.FilterSchema;var input_schema32665_32671 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,clustermap.filters.FilterSchema,new cljs.core.Symbol(null,"filters","filters",-1679708850,null))], null);var input_checker32666_32672 = schema.core.checker.call(null,input_schema32665_32671);var output_checker32667_32673 = schema.core.checker.call(null,output_schema32664_32670);/**
* Inputs: [filters :- FilterSchema]
* Returns: FilterSchema
* 
* reset all filter components
*/
clustermap.filters.reset_filter = ((function (ufv___32669,output_schema32664_32670,input_schema32665_32671,input_checker32666_32672,output_checker32667_32673){
return (function reset_filter(G__32668){var validate__6034__auto__ = ufv___32669.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32668], null);var temp__4126__auto___32675 = input_checker32666_32672.call(null,args__6035__auto___32674);if(cljs.core.truth_(temp__4126__auto___32675))
{var error__6036__auto___32676 = temp__4126__auto___32675;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"reset-filter","reset-filter",-1197346017,null),cljs.core.pr_str.call(null,error__6036__auto___32676)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32676,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32674,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32665_32671,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var filters = G__32668;while(true){
var f = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,filters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-components","url-components",-1811437097)], null),cljs.core.PersistentArrayMap.EMPTY);return cljs.core.assoc_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),clustermap.filters.compose_filters.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"base-filters","base-filters",-1927655964).cljs$core$IFn$_invoke$arity$1(f)));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32677 = output_checker32667_32673.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32677))
{var error__6036__auto___32678 = temp__4126__auto___32677;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"reset-filter","reset-filter",-1197346017,null),cljs.core.pr_str.call(null,error__6036__auto___32678)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32678,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32664_32670,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32669,output_schema32664_32670,input_schema32665_32671,input_checker32666_32672,output_checker32667_32673))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.reset_filter),schema.core.make_fn_schema.call(null,output_schema32664_32670,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32665_32671], null)));
var ufv___32690 = schema.utils.use_fn_validation;var output_schema32679_32691 = schema.core.Any;var input_schema32680_32692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"url-components","url-components",-170905570,null))], null);var input_checker32681_32693 = schema.core.checker.call(null,input_schema32680_32692);var output_checker32682_32694 = schema.core.checker.call(null,output_schema32679_32691);/**
* Inputs: [url-components]
* 
* JSON encode the filter for use as a URL param
*/
clustermap.filters.filter_url_param_value = ((function (ufv___32690,output_schema32679_32691,input_schema32680_32692,input_checker32681_32693,output_checker32682_32694){
return (function filter_url_param_value(G__32683){var validate__6034__auto__ = ufv___32690.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32695 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32683], null);var temp__4126__auto___32696 = input_checker32681_32693.call(null,args__6035__auto___32695);if(cljs.core.truth_(temp__4126__auto___32696))
{var error__6036__auto___32697 = temp__4126__auto___32696;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"filter-url-param-value","filter-url-param-value",1822853848,null),cljs.core.pr_str.call(null,error__6036__auto___32697)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32697,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32695,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32680_32692,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var url_components = G__32683;while(true){
var G__32687 = url_components;var G__32687__$1 = (((G__32687 == null))?null:cljs.core.filter.call(null,((function (G__32687,validate__6034__auto__,ufv___32690,output_schema32679_32691,input_schema32680_32692,input_checker32681_32693,output_checker32682_32694){
return (function (p__32688){var vec__32689 = p__32688;var k = cljs.core.nth.call(null,vec__32689,(0),null);var v = cljs.core.nth.call(null,vec__32689,(1),null);return cljs.core.not_empty.call(null,v);
});})(G__32687,validate__6034__auto__,ufv___32690,output_schema32679_32691,input_schema32680_32692,input_checker32681_32693,output_checker32682_32694))
,G__32687));var G__32687__$2 = (((G__32687__$1 == null))?null:cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__32687__$1));var G__32687__$3 = (((G__32687__$2 == null))?null:cljs.core.not_empty.call(null,G__32687__$2));var G__32687__$4 = (((G__32687__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32687__$3));var G__32687__$5 = (((G__32687__$4 == null))?null:JSON.stringify(G__32687__$4));return G__32687__$5;
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32698 = output_checker32682_32694.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32698))
{var error__6036__auto___32699 = temp__4126__auto___32698;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"filter-url-param-value","filter-url-param-value",1822853848,null),cljs.core.pr_str.call(null,error__6036__auto___32699)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32699,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32679_32691,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32690,output_schema32679_32691,input_schema32680_32692,input_checker32681_32693,output_checker32682_32694))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.filter_url_param_value),schema.core.make_fn_schema.call(null,output_schema32679_32691,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32680_32692], null)));
var ufv___32707 = schema.utils.use_fn_validation;var output_schema32700_32708 = schema.core.Any;var input_schema32701_32709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"v","v",1661996586,null))], null);var input_checker32702_32710 = schema.core.checker.call(null,input_schema32701_32709);var output_checker32703_32711 = schema.core.checker.call(null,output_schema32700_32708);/**
* Inputs: [v]
*/
clustermap.filters.parse_url_param_value = ((function (ufv___32707,output_schema32700_32708,input_schema32701_32709,input_checker32702_32710,output_checker32703_32711){
return (function parse_url_param_value(G__32704){var validate__6034__auto__ = ufv___32707.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32704], null);var temp__4126__auto___32713 = input_checker32702_32710.call(null,args__6035__auto___32712);if(cljs.core.truth_(temp__4126__auto___32713))
{var error__6036__auto___32714 = temp__4126__auto___32713;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"parse-url-param-value","parse-url-param-value",1248214261,null),cljs.core.pr_str.call(null,error__6036__auto___32714)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32714,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32712,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32701_32709,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var v = G__32704;while(true){
var G__32706 = v;var G__32706__$1 = (((G__32706 == null))?null:JSON.parse(G__32706));var G__32706__$2 = (((G__32706__$1 == null))?null:cljs.core.js__GT_clj.call(null,G__32706__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));return G__32706__$2;
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32715 = output_checker32703_32711.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32715))
{var error__6036__auto___32716 = temp__4126__auto___32715;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"parse-url-param-value","parse-url-param-value",1248214261,null),cljs.core.pr_str.call(null,error__6036__auto___32716)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32716,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32700_32708,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv___32707,output_schema32700_32708,input_schema32701_32709,input_checker32702_32710,output_checker32703_32711))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,clustermap.filters.parse_url_param_value),schema.core.make_fn_schema.call(null,output_schema32700_32708,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32701_32709], null)));
