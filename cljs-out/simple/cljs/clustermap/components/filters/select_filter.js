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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29818(s__29819){return (new cljs.core.LazySeq(null,(function (){var s__29819__$1 = s__29819;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29819__$1);if(temp__4126__auto__)
{var s__29819__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29819__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29819__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29821 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29820 = (0);while(true){
if((i__29820 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29820);cljs.core.chunk_append.call(null,b__29821,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29822 = (i__29820 + (1));
i__29820 = G__29822;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29821),iter__29818.call(null,cljs.core.chunk_rest.call(null,s__29819__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29821),null);
}
} else
{var o = cljs.core.first.call(null,s__29819__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29818.call(null,cljs.core.rest.call(null,s__29819__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29826 = schema.core.Any;var input_schema29827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29823","map29823",-1837008347,null))], null);var input_checker29828 = schema.core.checker.call(null,input_schema29827);var output_checker29829 = schema.core.checker.call(null,output_schema29826);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29826,input_schema29827,input_checker29828,output_checker29829){
return (function get_option_value(G__29830){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29831 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29830], null);var temp__4126__auto___29832 = input_checker29828.call(null,args__6035__auto___29831);if(cljs.core.truth_(temp__4126__auto___29832))
{var error__6036__auto___29833 = temp__4126__auto___29832;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___29833)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29833,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29831,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29827,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29823 = G__29830;while(true){
if(cljs.core.map_QMARK_.call(null,map29823))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29823)));
}
var map29825 = plumbing.fnk.schema.safe_get.call(null,map29823,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map29825,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map29825,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map29825,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29824 = plumbing.fnk.schema.safe_get.call(null,map29823,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map29824,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map29824,options,label,id,map29825,validate__6034__auto__,ufv__,output_schema29826,input_schema29827,input_checker29828,output_checker29829){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map29824,options,label,id,map29825,validate__6034__auto__,ufv__,output_schema29826,input_schema29827,input_checker29828,output_checker29829))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29834 = output_checker29829.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29834))
{var error__6036__auto___29835 = temp__4126__auto___29834;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___29835)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29835,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29826,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29826,input_schema29827,input_checker29828,output_checker29829))
,schema.core.make_fn_schema.call(null,output_schema29826,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29827], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__29837,value){var map__29839 = p__29837;var map__29839__$1 = ((cljs.core.seq_QMARK_.call(null,map__29839))?cljs.core.apply.call(null,cljs.core.hash_map,map__29839):map__29839);var component_spec = map__29839__$1;var options = cljs.core.get.call(null,map__29839__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29839__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__29839,map__29839__$1,component_spec,options,label){
return (function (p1__29836_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29836_SHARP_));
});})(map__29839,map__29839__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29840,value){var map__29842 = p__29840;var map__29842__$1 = ((cljs.core.seq_QMARK_.call(null,map__29842))?cljs.core.apply.call(null,cljs.core.hash_map,map__29842):map__29842);var component_spec = map__29842__$1;var options = cljs.core.get.call(null,map__29842__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29842__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29843_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29843_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__29844_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29844_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29845 = schema.core.Any;var input_schema29846 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29847 = schema.core.checker.call(null,input_schema29846);var output_checker29848 = schema.core.checker.call(null,output_schema29845);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29845,input_schema29846,input_checker29847,output_checker29848){
return (function render_STAR_(G__29849){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29866 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29849], null);var temp__4126__auto___29867 = input_checker29847.call(null,args__6035__auto___29866);if(cljs.core.truth_(temp__4126__auto___29867))
{var error__6036__auto___29868 = temp__4126__auto___29867;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29868)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29868,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29866,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29846,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29849;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29845,input_schema29846,input_checker29847,output_checker29848){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29845,input_schema29846,input_checker29847,output_checker29848))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29845,input_schema29846,input_checker29847,output_checker29848){
return (function iter__29858(s__29859){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29845,input_schema29846,input_checker29847,output_checker29848){
return (function (){var s__29859__$1 = s__29859;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29859__$1);if(temp__4126__auto__)
{var s__29859__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29859__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29859__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29861 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29860 = (0);while(true){
if((i__29860 < size__4376__auto__))
{var map__29864 = cljs.core._nth.call(null,c__4375__auto__,i__29860);var map__29864__$1 = ((cljs.core.seq_QMARK_.call(null,map__29864))?cljs.core.apply.call(null,cljs.core.hash_map,map__29864):map__29864);var option = map__29864__$1;var label__$1 = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29861,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29869 = (i__29860 + (1));
i__29860 = G__29869;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29861),iter__29858.call(null,cljs.core.chunk_rest.call(null,s__29859__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29861),null);
}
} else
{var map__29865 = cljs.core.first.call(null,s__29859__$2);var map__29865__$1 = ((cljs.core.seq_QMARK_.call(null,map__29865))?cljs.core.apply.call(null,cljs.core.hash_map,map__29865):map__29865);var option = map__29865__$1;var label__$1 = cljs.core.get.call(null,map__29865__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29865__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29858.call(null,cljs.core.rest.call(null,s__29859__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29845,input_schema29846,input_checker29847,output_checker29848))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29845,input_schema29846,input_checker29847,output_checker29848))
;return iter__4377__auto__.call(null,options__$1);
})()))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29870 = output_checker29848.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29870))
{var error__6036__auto___29871 = temp__4126__auto___29870;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29871)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29871,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29845,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29845,input_schema29846,input_checker29847,output_checker29848))
,schema.core.make_fn_schema.call(null,output_schema29845,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29846], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30017 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29877 = schema.core.Any;var input_schema29878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29875","map29875",576112653,null))], null);var input_checker29879 = schema.core.checker.call(null,input_schema29878);var output_checker29880 = schema.core.checker.call(null,output_schema29877);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function constructor29873(G__29881){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29881], null);var temp__4126__auto___30019 = input_checker29879.call(null,args__6035__auto___30018);if(cljs.core.truth_(temp__4126__auto___30019))
{var error__6036__auto___30020 = temp__4126__auto___30019;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29873","constructor29873",1357503498,null),cljs.core.pr_str.call(null,error__6036__auto___30020)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30020,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30018,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29878,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29875 = G__29881;while(true){
if(cljs.core.map_QMARK_.call(null,map29875))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29875)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29875,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29876 = plumbing.fnk.schema.safe_get.call(null,map29875,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29876,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29875,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t29948 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t29948 = (function (component_spec,component_filter_rq_chan,G__29881,input_schema29878,owner,data,input_checker29879,constructor29873,output_schema29877,map29875,map29876,filter_spec,output_checker29880,validate__6034__auto__,id,ufv__,meta29949){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.G__29881 = G__29881;
this.input_schema29878 = input_schema29878;
this.owner = owner;
this.data = data;
this.input_checker29879 = input_checker29879;
this.constructor29873 = constructor29873;
this.output_schema29877 = output_schema29877;
this.map29875 = map29875;
this.map29876 = map29876;
this.filter_spec = filter_spec;
this.output_checker29880 = output_checker29880;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta29949 = meta29949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t29948.cljs$lang$type = true;
clustermap.components.filters.select_filter.t29948.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t29948";
clustermap.components.filters.select_filter.t29948.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t29948");
});})(owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filters.select_filter.t29948.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t29948.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filters.select_filter.t29948.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t29948.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filters.select_filter.t29948.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t29948.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (_){var self__ = this;
var ___$1 = this;var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (state_29988){var state_val_29989 = (state_29988[(1)]);if((state_val_29989 === (7)))
{var inst_29979 = (state_29988[(2)]);var state_29988__$1 = state_29988;if(cljs.core.truth_(inst_29979))
{var statearr_29990_30021 = state_29988__$1;(statearr_29990_30021[(1)] = (11));
} else
{var statearr_29991_30022 = state_29988__$1;(statearr_29991_30022[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29989 === (1)))
{var state_29988__$1 = state_29988;var statearr_29992_30023 = state_29988__$1;(statearr_29992_30023[(2)] = null);
(statearr_29992_30023[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29989 === (4)))
{var inst_29953 = (state_29988[(7)]);var inst_29953__$1 = (state_29988[(2)]);var state_29988__$1 = (function (){var statearr_29993 = state_29988;(statearr_29993[(7)] = inst_29953__$1);
return statearr_29993;
})();if(cljs.core.truth_(inst_29953__$1))
{var statearr_29994_30024 = state_29988__$1;(statearr_29994_30024[(1)] = (5));
} else
{var statearr_29995_30025 = state_29988__$1;(statearr_29995_30025[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29989 === (13)))
{var inst_29984 = (state_29988[(2)]);var state_29988__$1 = state_29988;var statearr_29996_30026 = state_29988__$1;(statearr_29996_30026[(2)] = inst_29984);
(statearr_29996_30026[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29989 === (6)))
{var state_29988__$1 = state_29988;var statearr_29997_30027 = state_29988__$1;(statearr_29997_30027[(2)] = null);
(statearr_29997_30027[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29989 === (3)))
{var inst_29986 = (state_29988[(2)]);var state_29988__$1 = state_29988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29988__$1,inst_29986);
} else
{if((state_val_29989 === (12)))
{var state_29988__$1 = state_29988;var statearr_29998_30028 = state_29988__$1;(statearr_29998_30028[(2)] = null);
(statearr_29998_30028[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29989 === (2)))
{var state_29988__$1 = state_29988;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29988__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29989 === (11)))
{var state_29988__$1 = state_29988;var statearr_29999_30029 = state_29988__$1;(statearr_29999_30029[(2)] = null);
(statearr_29999_30029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29989 === (9)))
{var inst_29959 = (state_29988[(8)]);var state_29988__$1 = state_29988;var statearr_30000_30030 = state_29988__$1;(statearr_30000_30030[(2)] = inst_29959);
(statearr_30000_30030[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29989 === (5)))
{var inst_29953 = (state_29988[(7)]);var inst_29959 = (state_29988[(8)]);var inst_29956 = cljs.core.nth.call(null,inst_29953,(0),null);var inst_29957 = cljs.core.nth.call(null,inst_29953,(1),null);var inst_29959__$1 = om.core.get_props.call(null,self__.owner);var inst_29960 = cljs.core.seq_QMARK_.call(null,inst_29959__$1);var state_29988__$1 = (function (){var statearr_30001 = state_29988;(statearr_30001[(9)] = inst_29956);
(statearr_30001[(8)] = inst_29959__$1);
(statearr_30001[(10)] = inst_29957);
return statearr_30001;
})();if(inst_29960)
{var statearr_30002_30031 = state_29988__$1;(statearr_30002_30031[(1)] = (8));
} else
{var statearr_30003_30032 = state_29988__$1;(statearr_30003_30032[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29989 === (10)))
{var inst_29957 = (state_29988[(10)]);var inst_29965 = (state_29988[(2)]);var inst_29966 = cljs.core.get.call(null,inst_29965,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29967 = cljs.core.get.call(null,inst_29965,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29968 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29969 = ["SELECT-FILTER-RQ",self__.id,inst_29957];var inst_29970 = (new cljs.core.PersistentVector(null,3,(5),inst_29968,inst_29969,null));var inst_29971 = cljs.core.clj__GT_js.call(null,inst_29970);var inst_29972 = console.log(inst_29971);var inst_29973 = cljs.core.deref.call(null,inst_29966);var inst_29974 = cljs.core.deref.call(null,inst_29967);var inst_29975 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_29973,inst_29974,inst_29957);var inst_29976 = om.core.update_BANG_.call(null,inst_29966,inst_29975);var state_29988__$1 = (function (){var statearr_30004 = state_29988;(statearr_30004[(11)] = inst_29976);
(statearr_30004[(12)] = inst_29972);
return statearr_30004;
})();var statearr_30005_30033 = state_29988__$1;(statearr_30005_30033[(2)] = true);
(statearr_30005_30033[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29989 === (8)))
{var inst_29959 = (state_29988[(8)]);var inst_29962 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29959);var state_29988__$1 = state_29988;var statearr_30006_30034 = state_29988__$1;(statearr_30006_30034[(2)] = inst_29962);
(statearr_30006_30034[(1)] = (10));
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
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;return ((function (switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_30010 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30010[(0)] = state_machine__11242__auto__);
(statearr_30010[(1)] = (1));
return statearr_30010;
});
var state_machine__11242__auto____1 = (function (state_29988){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_29988);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e30011){if((e30011 instanceof Object))
{var ex__11245__auto__ = e30011;var statearr_30012_30035 = state_29988;(statearr_30012_30035[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29988);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30011;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30036 = state_29988;
state_29988 = G__30036;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_29988){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_29988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
})();var state__11299__auto__ = (function (){var statearr_30013 = f__11298__auto__.call(null);(statearr_30013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_30013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
);
return c__11297__auto__;
});})(owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filters.select_filter.t29948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (_29950){var self__ = this;
var _29950__$1 = this;return self__.meta29949;
});})(owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filters.select_filter.t29948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (_29950,meta29949__$1){var self__ = this;
var _29950__$1 = this;return (new clustermap.components.filters.select_filter.t29948(self__.component_spec,self__.component_filter_rq_chan,self__.G__29881,self__.input_schema29878,self__.owner,self__.data,self__.input_checker29879,self__.constructor29873,self__.output_schema29877,self__.map29875,self__.map29876,self__.filter_spec,self__.output_checker29880,self__.validate__6034__auto__,self__.id,self__.ufv__,meta29949__$1));
});})(owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filters.select_filter.__GT_t29948 = ((function (owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function __GT_t29948(component_spec__$1,component_filter_rq_chan__$1,G__29881__$1,input_schema29878__$1,owner__$1,data__$1,input_checker29879__$1,constructor29873__$1,output_schema29877__$1,map29875__$1,map29876__$1,filter_spec__$1,output_checker29880__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29949){return (new clustermap.components.filters.select_filter.t29948(component_spec__$1,component_filter_rq_chan__$1,G__29881__$1,input_schema29878__$1,owner__$1,data__$1,input_checker29879__$1,constructor29873__$1,output_schema29877__$1,map29875__$1,map29876__$1,filter_spec__$1,output_checker29880__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29949));
});})(owner,component_filter_rq_chan,map29876,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
}
return (new clustermap.components.filters.select_filter.t29948(component_spec,component_filter_rq_chan,G__29881,input_schema29878,owner,data,input_checker29879,constructor29873,output_schema29877,map29875,map29876,filter_spec,output_checker29880,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30037 = output_checker29880.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30037))
{var error__6036__auto___30038 = temp__4126__auto___30037;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29873","constructor29873",1357503498,null),cljs.core.pr_str.call(null,error__6036__auto___30038)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30038,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29877,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
,schema.core.make_fn_schema.call(null,output_schema29877,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29878], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___30017){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner29872,p__30014){var vec__30016 = p__30014;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30016,(0),null);return component_fnk__7881__auto___30017.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29872,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner29872,var_args){
var p__30014 = null;if (arguments.length > 2) {
  p__30014 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner29872,p__30014);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__30039){
var data__7882__auto__ = cljs.core.first(arglist__30039);
arglist__30039 = cljs.core.next(arglist__30039);
var owner29872 = cljs.core.first(arglist__30039);
var p__30014 = cljs.core.rest(arglist__30039);
return select_filter_component__delegate(data__7882__auto__,owner29872,p__30014);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___30017))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m29874){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m29874);
});
__GT_select_filter_component = function(cursor__7850__auto__,m29874){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m29874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
