// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.select_filter');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.channels');
goog.require('plumbing.core');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('clustermap.filters');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.filters');
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__31023(s__31024){return (new cljs.core.LazySeq(null,(function (){var s__31024__$1 = s__31024;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31024__$1);if(temp__4126__auto__)
{var s__31024__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31024__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31024__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31026 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31025 = (0);while(true){
if((i__31025 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__31025);cljs.core.chunk_append.call(null,b__31026,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__31027 = (i__31025 + (1));
i__31025 = G__31027;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31026),iter__31023.call(null,cljs.core.chunk_rest.call(null,s__31024__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31026),null);
}
} else
{var o = cljs.core.first.call(null,s__31024__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__31023.call(null,cljs.core.rest.call(null,s__31024__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,options);
})());
});
/**
* get the selected option-value by comparing the selected filter with the
* option filters
*/
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31031 = schema.core.Any;var input_schema31032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map31028","map31028",-2062108289,null))], null);var input_checker31033 = schema.core.checker.call(null,input_schema31032);var output_checker31034 = schema.core.checker.call(null,output_schema31031);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31031,input_schema31032,input_checker31033,output_checker31034){
return (function get_option_value(G__31035){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31036 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31035], null);var temp__4126__auto___31037 = input_checker31033.call(null,args__6035__auto___31036);if(cljs.core.truth_(temp__4126__auto___31037))
{var error__6036__auto___31038 = temp__4126__auto___31037;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31038)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31038,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31036,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31032,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31028 = G__31035;while(true){
if(cljs.core.map_QMARK_.call(null,map31028))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31028)));
}
var map31030 = plumbing.fnk.schema.safe_get.call(null,map31028,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map31030,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map31030,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map31030,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31029 = plumbing.fnk.schema.safe_get.call(null,map31028,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map31029,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map31029,options,label,id,map31030,validate__6034__auto__,ufv__,output_schema31031,input_schema31032,input_checker31033,output_checker31034){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map31029,options,label,id,map31030,validate__6034__auto__,ufv__,output_schema31031,input_schema31032,input_checker31033,output_checker31034))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31039 = output_checker31034.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31039))
{var error__6036__auto___31040 = temp__4126__auto___31039;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31040)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31040,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31031,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31031,input_schema31032,input_checker31033,output_checker31034))
,schema.core.make_fn_schema.call(null,output_schema31031,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31032], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__31042,value){var map__31044 = p__31042;var map__31044__$1 = ((cljs.core.seq_QMARK_.call(null,map__31044))?cljs.core.apply.call(null,cljs.core.hash_map,map__31044):map__31044);var component_spec = map__31044__$1;var options = cljs.core.get.call(null,map__31044__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__31044__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31044,map__31044__$1,component_spec,options,label){
return (function (p1__31041_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31041_SHARP_));
});})(map__31044,map__31044__$1,component_spec,options,label))
,options));if(cljs.core.truth_((function (){var and__3627__auto__ = option_spec;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911).cljs$core$IFn$_invoke$arity$1(option_spec));
} else
{return and__3627__auto__;
}
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option_spec)));
} else
{return null;
}
});
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__31045,value){var map__31047 = p__31045;var map__31047__$1 = ((cljs.core.seq_QMARK_.call(null,map__31047))?cljs.core.apply.call(null,cljs.core.hash_map,map__31047):map__31047);var component_spec = map__31047__$1;var options = cljs.core.get.call(null,map__31047__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__31047__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__31048_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31048_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__31049_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31049_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31050 = schema.core.Any;var input_schema31051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31052 = schema.core.checker.call(null,input_schema31051);var output_checker31053 = schema.core.checker.call(null,output_schema31050);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31050,input_schema31051,input_checker31052,output_checker31053){
return (function render_STAR_(G__31054){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31054], null);var temp__4126__auto___31072 = input_checker31052.call(null,args__6035__auto___31071);if(cljs.core.truth_(temp__4126__auto___31072))
{var error__6036__auto___31073 = temp__4126__auto___31072;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31073)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31073,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31071,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31051,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31054;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31050,input_schema31051,input_checker31052,output_checker31053){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31050,input_schema31051,input_checker31052,output_checker31053))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31050,input_schema31051,input_checker31052,output_checker31053){
return (function iter__31063(s__31064){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31050,input_schema31051,input_checker31052,output_checker31053){
return (function (){var s__31064__$1 = s__31064;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31064__$1);if(temp__4126__auto__)
{var s__31064__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31064__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31064__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31066 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31065 = (0);while(true){
if((i__31065 < size__4376__auto__))
{var map__31069 = cljs.core._nth.call(null,c__4375__auto__,i__31065);var map__31069__$1 = ((cljs.core.seq_QMARK_.call(null,map__31069))?cljs.core.apply.call(null,cljs.core.hash_map,map__31069):map__31069);var option = map__31069__$1;var label__$1 = cljs.core.get.call(null,map__31069__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31069__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31066,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31074 = (i__31065 + (1));
i__31065 = G__31074;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31066),iter__31063.call(null,cljs.core.chunk_rest.call(null,s__31064__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31066),null);
}
} else
{var map__31070 = cljs.core.first.call(null,s__31064__$2);var map__31070__$1 = ((cljs.core.seq_QMARK_.call(null,map__31070))?cljs.core.apply.call(null,cljs.core.hash_map,map__31070):map__31070);var option = map__31070__$1;var label__$1 = cljs.core.get.call(null,map__31070__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31070__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31063.call(null,cljs.core.rest.call(null,s__31064__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31050,input_schema31051,input_checker31052,output_checker31053))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31050,input_schema31051,input_checker31052,output_checker31053))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31075 = output_checker31053.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31075))
{var error__6036__auto___31076 = temp__4126__auto___31075;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31076)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31076,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31050,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31050,input_schema31051,input_checker31052,output_checker31053))
,schema.core.make_fn_schema.call(null,output_schema31050,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31051], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31222 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31082 = schema.core.Any;var input_schema31083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31080","map31080",-1739094727,null))], null);var input_checker31084 = schema.core.checker.call(null,input_schema31083);var output_checker31085 = schema.core.checker.call(null,output_schema31082);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085){
return (function constructor31078(G__31086){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31223 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31086], null);var temp__4126__auto___31224 = input_checker31084.call(null,args__6035__auto___31223);if(cljs.core.truth_(temp__4126__auto___31224))
{var error__6036__auto___31225 = temp__4126__auto___31224;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31078","constructor31078",-464902036,null),cljs.core.pr_str.call(null,error__6036__auto___31225)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31225,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31223,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31083,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31080 = G__31086;while(true){
if(cljs.core.map_QMARK_.call(null,map31080))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31080)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31080,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31081 = plumbing.fnk.schema.safe_get.call(null,map31080,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31081,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31080,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t31153 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t31153 = (function (component_spec,component_filter_rq_chan,owner,map31081,data,constructor31078,G__31086,output_checker31085,input_checker31084,filter_spec,map31080,input_schema31083,validate__6034__auto__,id,ufv__,output_schema31082,meta31154){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.map31081 = map31081;
this.data = data;
this.constructor31078 = constructor31078;
this.G__31086 = G__31086;
this.output_checker31085 = output_checker31085;
this.input_checker31084 = input_checker31084;
this.filter_spec = filter_spec;
this.map31080 = map31080;
this.input_schema31083 = input_schema31083;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.output_schema31082 = output_schema31082;
this.meta31154 = meta31154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t31153.cljs$lang$type = true;
clustermap.components.filters.select_filter.t31153.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t31153";
clustermap.components.filters.select_filter.t31153.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t31153");
});})(owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085))
;
clustermap.components.filters.select_filter.t31153.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t31153.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085))
;
clustermap.components.filters.select_filter.t31153.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t31153.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085))
;
clustermap.components.filters.select_filter.t31153.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t31153.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085){
return (function (state_31193){var state_val_31194 = (state_31193[(1)]);if((state_val_31194 === (7)))
{var inst_31184 = (state_31193[(2)]);var state_31193__$1 = state_31193;if(cljs.core.truth_(inst_31184))
{var statearr_31195_31226 = state_31193__$1;(statearr_31195_31226[(1)] = (11));
} else
{var statearr_31196_31227 = state_31193__$1;(statearr_31196_31227[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31194 === (1)))
{var state_31193__$1 = state_31193;var statearr_31197_31228 = state_31193__$1;(statearr_31197_31228[(2)] = null);
(statearr_31197_31228[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31194 === (4)))
{var inst_31158 = (state_31193[(7)]);var inst_31158__$1 = (state_31193[(2)]);var state_31193__$1 = (function (){var statearr_31198 = state_31193;(statearr_31198[(7)] = inst_31158__$1);
return statearr_31198;
})();if(cljs.core.truth_(inst_31158__$1))
{var statearr_31199_31229 = state_31193__$1;(statearr_31199_31229[(1)] = (5));
} else
{var statearr_31200_31230 = state_31193__$1;(statearr_31200_31230[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31194 === (13)))
{var inst_31189 = (state_31193[(2)]);var state_31193__$1 = state_31193;var statearr_31201_31231 = state_31193__$1;(statearr_31201_31231[(2)] = inst_31189);
(statearr_31201_31231[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31194 === (6)))
{var state_31193__$1 = state_31193;var statearr_31202_31232 = state_31193__$1;(statearr_31202_31232[(2)] = null);
(statearr_31202_31232[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31194 === (3)))
{var inst_31191 = (state_31193[(2)]);var state_31193__$1 = state_31193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31193__$1,inst_31191);
} else
{if((state_val_31194 === (12)))
{var state_31193__$1 = state_31193;var statearr_31203_31233 = state_31193__$1;(statearr_31203_31233[(2)] = null);
(statearr_31203_31233[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31194 === (2)))
{var state_31193__$1 = state_31193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31193__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31194 === (11)))
{var state_31193__$1 = state_31193;var statearr_31204_31234 = state_31193__$1;(statearr_31204_31234[(2)] = null);
(statearr_31204_31234[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31194 === (9)))
{var inst_31164 = (state_31193[(8)]);var state_31193__$1 = state_31193;var statearr_31205_31235 = state_31193__$1;(statearr_31205_31235[(2)] = inst_31164);
(statearr_31205_31235[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31194 === (5)))
{var inst_31158 = (state_31193[(7)]);var inst_31164 = (state_31193[(8)]);var inst_31161 = cljs.core.nth.call(null,inst_31158,(0),null);var inst_31162 = cljs.core.nth.call(null,inst_31158,(1),null);var inst_31164__$1 = om.core.get_props.call(null,self__.owner);var inst_31165 = cljs.core.seq_QMARK_.call(null,inst_31164__$1);var state_31193__$1 = (function (){var statearr_31206 = state_31193;(statearr_31206[(9)] = inst_31162);
(statearr_31206[(8)] = inst_31164__$1);
(statearr_31206[(10)] = inst_31161);
return statearr_31206;
})();if(inst_31165)
{var statearr_31207_31236 = state_31193__$1;(statearr_31207_31236[(1)] = (8));
} else
{var statearr_31208_31237 = state_31193__$1;(statearr_31208_31237[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31194 === (10)))
{var inst_31162 = (state_31193[(9)]);var inst_31170 = (state_31193[(2)]);var inst_31171 = cljs.core.get.call(null,inst_31170,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31172 = cljs.core.get.call(null,inst_31170,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31173 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31174 = ["SELECT-FILTER-RQ",self__.id,inst_31162];var inst_31175 = (new cljs.core.PersistentVector(null,3,(5),inst_31173,inst_31174,null));var inst_31176 = cljs.core.clj__GT_js.call(null,inst_31175);var inst_31177 = console.log(inst_31176);var inst_31178 = cljs.core.deref.call(null,inst_31171);var inst_31179 = cljs.core.deref.call(null,inst_31172);var inst_31180 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_31178,inst_31179,inst_31162);var inst_31181 = om.core.update_BANG_.call(null,inst_31171,inst_31180);var state_31193__$1 = (function (){var statearr_31209 = state_31193;(statearr_31209[(11)] = inst_31181);
(statearr_31209[(12)] = inst_31177);
return statearr_31209;
})();var statearr_31210_31238 = state_31193__$1;(statearr_31210_31238[(2)] = true);
(statearr_31210_31238[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31194 === (8)))
{var inst_31164 = (state_31193[(8)]);var inst_31167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31164);var state_31193__$1 = state_31193;var statearr_31211_31239 = state_31193__$1;(statearr_31211_31239[(2)] = inst_31167);
(statearr_31211_31239[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31215 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31215[(0)] = state_machine__9111__auto__);
(statearr_31215[(1)] = (1));
return statearr_31215;
});
var state_machine__9111__auto____1 = (function (state_31193){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31193);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31216){if((e31216 instanceof Object))
{var ex__9114__auto__ = e31216;var statearr_31217_31240 = state_31193;(statearr_31217_31240[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31193);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31216;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31241 = state_31193;
state_31193 = G__31241;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31193){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085))
})();var state__9127__auto__ = (function (){var statearr_31218 = f__9126__auto__.call(null);(statearr_31218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31218;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085))
;
clustermap.components.filters.select_filter.t31153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085){
return (function (_31155){var self__ = this;
var _31155__$1 = this;return self__.meta31154;
});})(owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085))
;
clustermap.components.filters.select_filter.t31153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085){
return (function (_31155,meta31154__$1){var self__ = this;
var _31155__$1 = this;return (new clustermap.components.filters.select_filter.t31153(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.map31081,self__.data,self__.constructor31078,self__.G__31086,self__.output_checker31085,self__.input_checker31084,self__.filter_spec,self__.map31080,self__.input_schema31083,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.output_schema31082,meta31154__$1));
});})(owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085))
;
clustermap.components.filters.select_filter.__GT_t31153 = ((function (owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085){
return (function __GT_t31153(component_spec__$1,component_filter_rq_chan__$1,owner__$1,map31081__$1,data__$1,constructor31078__$1,G__31086__$1,output_checker31085__$1,input_checker31084__$1,filter_spec__$1,map31080__$1,input_schema31083__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_schema31082__$1,meta31154){return (new clustermap.components.filters.select_filter.t31153(component_spec__$1,component_filter_rq_chan__$1,owner__$1,map31081__$1,data__$1,constructor31078__$1,G__31086__$1,output_checker31085__$1,input_checker31084__$1,filter_spec__$1,map31080__$1,input_schema31083__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_schema31082__$1,meta31154));
});})(owner,component_filter_rq_chan,map31081,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085))
;
}
return (new clustermap.components.filters.select_filter.t31153(component_spec,component_filter_rq_chan,owner,map31081,data,constructor31078,G__31086,output_checker31085,input_checker31084,filter_spec,map31080,input_schema31083,validate__6034__auto__,id,ufv__,output_schema31082,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31242 = output_checker31085.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31242))
{var error__6036__auto___31243 = temp__4126__auto___31242;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31078","constructor31078",-464902036,null),cljs.core.pr_str.call(null,error__6036__auto___31243)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31243,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31082,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31082,input_schema31083,input_checker31084,output_checker31085))
,schema.core.make_fn_schema.call(null,output_schema31082,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31083], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31222){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner31077,p__31219){var vec__31221 = p__31219;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31221,(0),null);return component_fnk__7881__auto___31222.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31077,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner31077,var_args){
var p__31219 = null;if (arguments.length > 2) {
  p__31219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner31077,p__31219);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31244){
var data__7882__auto__ = cljs.core.first(arglist__31244);
arglist__31244 = cljs.core.next(arglist__31244);
var owner31077 = cljs.core.first(arglist__31244);
var p__31219 = cljs.core.rest(arglist__31244);
return select_filter_component__delegate(data__7882__auto__,owner31077,p__31219);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31222))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m31079){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m31079);
});
__GT_select_filter_component = function(cursor__7850__auto__,m31079){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m31079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
