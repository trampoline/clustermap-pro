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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29876(s__29877){return (new cljs.core.LazySeq(null,(function (){var s__29877__$1 = s__29877;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29877__$1);if(temp__4126__auto__)
{var s__29877__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29877__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29877__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29879 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29878 = (0);while(true){
if((i__29878 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29878);cljs.core.chunk_append.call(null,b__29879,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29880 = (i__29878 + (1));
i__29878 = G__29880;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29879),iter__29876.call(null,cljs.core.chunk_rest.call(null,s__29877__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29879),null);
}
} else
{var o = cljs.core.first.call(null,s__29877__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29876.call(null,cljs.core.rest.call(null,s__29877__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29884 = schema.core.Any;var input_schema29885 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29881","map29881",-602766691,null))], null);var input_checker29886 = schema.core.checker.call(null,input_schema29885);var output_checker29887 = schema.core.checker.call(null,output_schema29884);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29884,input_schema29885,input_checker29886,output_checker29887){
return (function get_option_value(G__29888){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29888], null);var temp__4126__auto___29890 = input_checker29886.call(null,args__6035__auto___29889);if(cljs.core.truth_(temp__4126__auto___29890))
{var error__6036__auto___29891 = temp__4126__auto___29890;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___29891)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29891,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29889,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29885,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29881 = G__29888;while(true){
if(cljs.core.map_QMARK_.call(null,map29881))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29881)));
}
var map29883 = plumbing.fnk.schema.safe_get.call(null,map29881,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map29883,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map29883,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map29883,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29882 = plumbing.fnk.schema.safe_get.call(null,map29881,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map29882,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map29882,options,label,id,map29883,validate__6034__auto__,ufv__,output_schema29884,input_schema29885,input_checker29886,output_checker29887){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map29882,options,label,id,map29883,validate__6034__auto__,ufv__,output_schema29884,input_schema29885,input_checker29886,output_checker29887))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29892 = output_checker29887.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29892))
{var error__6036__auto___29893 = temp__4126__auto___29892;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___29893)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29893,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29884,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29884,input_schema29885,input_checker29886,output_checker29887))
,schema.core.make_fn_schema.call(null,output_schema29884,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29885], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__29895,value){var map__29897 = p__29895;var map__29897__$1 = ((cljs.core.seq_QMARK_.call(null,map__29897))?cljs.core.apply.call(null,cljs.core.hash_map,map__29897):map__29897);var component_spec = map__29897__$1;var options = cljs.core.get.call(null,map__29897__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29897__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__29897,map__29897__$1,component_spec,options,label){
return (function (p1__29894_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29894_SHARP_));
});})(map__29897,map__29897__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29898,value){var map__29900 = p__29898;var map__29900__$1 = ((cljs.core.seq_QMARK_.call(null,map__29900))?cljs.core.apply.call(null,cljs.core.hash_map,map__29900):map__29900);var component_spec = map__29900__$1;var options = cljs.core.get.call(null,map__29900__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29900__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29901_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29901_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__29902_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29902_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29903 = schema.core.Any;var input_schema29904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29905 = schema.core.checker.call(null,input_schema29904);var output_checker29906 = schema.core.checker.call(null,output_schema29903);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29903,input_schema29904,input_checker29905,output_checker29906){
return (function render_STAR_(G__29907){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29907], null);var temp__4126__auto___29925 = input_checker29905.call(null,args__6035__auto___29924);if(cljs.core.truth_(temp__4126__auto___29925))
{var error__6036__auto___29926 = temp__4126__auto___29925;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29926)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29926,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29924,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29904,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29907;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29903,input_schema29904,input_checker29905,output_checker29906){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29903,input_schema29904,input_checker29905,output_checker29906))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29903,input_schema29904,input_checker29905,output_checker29906){
return (function iter__29916(s__29917){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29903,input_schema29904,input_checker29905,output_checker29906){
return (function (){var s__29917__$1 = s__29917;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29917__$1);if(temp__4126__auto__)
{var s__29917__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29917__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29917__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29919 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29918 = (0);while(true){
if((i__29918 < size__4376__auto__))
{var map__29922 = cljs.core._nth.call(null,c__4375__auto__,i__29918);var map__29922__$1 = ((cljs.core.seq_QMARK_.call(null,map__29922))?cljs.core.apply.call(null,cljs.core.hash_map,map__29922):map__29922);var option = map__29922__$1;var label__$1 = cljs.core.get.call(null,map__29922__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29922__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29919,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29927 = (i__29918 + (1));
i__29918 = G__29927;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29919),iter__29916.call(null,cljs.core.chunk_rest.call(null,s__29917__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29919),null);
}
} else
{var map__29923 = cljs.core.first.call(null,s__29917__$2);var map__29923__$1 = ((cljs.core.seq_QMARK_.call(null,map__29923))?cljs.core.apply.call(null,cljs.core.hash_map,map__29923):map__29923);var option = map__29923__$1;var label__$1 = cljs.core.get.call(null,map__29923__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29923__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29916.call(null,cljs.core.rest.call(null,s__29917__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29903,input_schema29904,input_checker29905,output_checker29906))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29903,input_schema29904,input_checker29905,output_checker29906))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29928 = output_checker29906.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29928))
{var error__6036__auto___29929 = temp__4126__auto___29928;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29929)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29929,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29903,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29903,input_schema29904,input_checker29905,output_checker29906))
,schema.core.make_fn_schema.call(null,output_schema29903,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29904], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30075 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29935 = schema.core.Any;var input_schema29936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29933","map29933",664088108,null))], null);var input_checker29937 = schema.core.checker.call(null,input_schema29936);var output_checker29938 = schema.core.checker.call(null,output_schema29935);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938){
return (function constructor29931(G__29939){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30076 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29939], null);var temp__4126__auto___30077 = input_checker29937.call(null,args__6035__auto___30076);if(cljs.core.truth_(temp__4126__auto___30077))
{var error__6036__auto___30078 = temp__4126__auto___30077;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29931","constructor29931",-637133258,null),cljs.core.pr_str.call(null,error__6036__auto___30078)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30078,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30076,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29936,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29933 = G__29939;while(true){
if(cljs.core.map_QMARK_.call(null,map29933))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29933)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29933,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29934 = plumbing.fnk.schema.safe_get.call(null,map29933,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29934,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29933,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t30006 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t30006 = (function (output_checker29938,component_spec,component_filter_rq_chan,input_schema29936,owner,data,G__29939,map29933,filter_spec,output_schema29935,constructor29931,input_checker29937,validate__6034__auto__,map29934,id,ufv__,meta30007){
this.output_checker29938 = output_checker29938;
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema29936 = input_schema29936;
this.owner = owner;
this.data = data;
this.G__29939 = G__29939;
this.map29933 = map29933;
this.filter_spec = filter_spec;
this.output_schema29935 = output_schema29935;
this.constructor29931 = constructor29931;
this.input_checker29937 = input_checker29937;
this.validate__6034__auto__ = validate__6034__auto__;
this.map29934 = map29934;
this.id = id;
this.ufv__ = ufv__;
this.meta30007 = meta30007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t30006.cljs$lang$type = true;
clustermap.components.filters.select_filter.t30006.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t30006";
clustermap.components.filters.select_filter.t30006.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t30006");
});})(owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938))
;
clustermap.components.filters.select_filter.t30006.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t30006.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938))
;
clustermap.components.filters.select_filter.t30006.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t30006.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938))
;
clustermap.components.filters.select_filter.t30006.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t30006.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938){
return (function (state_30046){var state_val_30047 = (state_30046[(1)]);if((state_val_30047 === (7)))
{var inst_30037 = (state_30046[(2)]);var state_30046__$1 = state_30046;if(cljs.core.truth_(inst_30037))
{var statearr_30048_30079 = state_30046__$1;(statearr_30048_30079[(1)] = (11));
} else
{var statearr_30049_30080 = state_30046__$1;(statearr_30049_30080[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30047 === (1)))
{var state_30046__$1 = state_30046;var statearr_30050_30081 = state_30046__$1;(statearr_30050_30081[(2)] = null);
(statearr_30050_30081[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30047 === (4)))
{var inst_30011 = (state_30046[(7)]);var inst_30011__$1 = (state_30046[(2)]);var state_30046__$1 = (function (){var statearr_30051 = state_30046;(statearr_30051[(7)] = inst_30011__$1);
return statearr_30051;
})();if(cljs.core.truth_(inst_30011__$1))
{var statearr_30052_30082 = state_30046__$1;(statearr_30052_30082[(1)] = (5));
} else
{var statearr_30053_30083 = state_30046__$1;(statearr_30053_30083[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30047 === (13)))
{var inst_30042 = (state_30046[(2)]);var state_30046__$1 = state_30046;var statearr_30054_30084 = state_30046__$1;(statearr_30054_30084[(2)] = inst_30042);
(statearr_30054_30084[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30047 === (6)))
{var state_30046__$1 = state_30046;var statearr_30055_30085 = state_30046__$1;(statearr_30055_30085[(2)] = null);
(statearr_30055_30085[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30047 === (3)))
{var inst_30044 = (state_30046[(2)]);var state_30046__$1 = state_30046;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30046__$1,inst_30044);
} else
{if((state_val_30047 === (12)))
{var state_30046__$1 = state_30046;var statearr_30056_30086 = state_30046__$1;(statearr_30056_30086[(2)] = null);
(statearr_30056_30086[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30047 === (2)))
{var state_30046__$1 = state_30046;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30046__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30047 === (11)))
{var state_30046__$1 = state_30046;var statearr_30057_30087 = state_30046__$1;(statearr_30057_30087[(2)] = null);
(statearr_30057_30087[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30047 === (9)))
{var inst_30017 = (state_30046[(8)]);var state_30046__$1 = state_30046;var statearr_30058_30088 = state_30046__$1;(statearr_30058_30088[(2)] = inst_30017);
(statearr_30058_30088[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30047 === (5)))
{var inst_30011 = (state_30046[(7)]);var inst_30017 = (state_30046[(8)]);var inst_30014 = cljs.core.nth.call(null,inst_30011,(0),null);var inst_30015 = cljs.core.nth.call(null,inst_30011,(1),null);var inst_30017__$1 = om.core.get_props.call(null,self__.owner);var inst_30018 = cljs.core.seq_QMARK_.call(null,inst_30017__$1);var state_30046__$1 = (function (){var statearr_30059 = state_30046;(statearr_30059[(9)] = inst_30015);
(statearr_30059[(10)] = inst_30014);
(statearr_30059[(8)] = inst_30017__$1);
return statearr_30059;
})();if(inst_30018)
{var statearr_30060_30089 = state_30046__$1;(statearr_30060_30089[(1)] = (8));
} else
{var statearr_30061_30090 = state_30046__$1;(statearr_30061_30090[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30047 === (10)))
{var inst_30015 = (state_30046[(9)]);var inst_30023 = (state_30046[(2)]);var inst_30024 = cljs.core.get.call(null,inst_30023,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30025 = cljs.core.get.call(null,inst_30023,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30026 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30027 = ["SELECT-FILTER-RQ",self__.id,inst_30015];var inst_30028 = (new cljs.core.PersistentVector(null,3,(5),inst_30026,inst_30027,null));var inst_30029 = cljs.core.clj__GT_js.call(null,inst_30028);var inst_30030 = console.log(inst_30029);var inst_30031 = cljs.core.deref.call(null,inst_30024);var inst_30032 = cljs.core.deref.call(null,inst_30025);var inst_30033 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_30031,inst_30032,inst_30015);var inst_30034 = om.core.update_BANG_.call(null,inst_30024,inst_30033);var state_30046__$1 = (function (){var statearr_30062 = state_30046;(statearr_30062[(11)] = inst_30030);
(statearr_30062[(12)] = inst_30034);
return statearr_30062;
})();var statearr_30063_30091 = state_30046__$1;(statearr_30063_30091[(2)] = true);
(statearr_30063_30091[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30047 === (8)))
{var inst_30017 = (state_30046[(8)]);var inst_30020 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30017);var state_30046__$1 = state_30046;var statearr_30064_30092 = state_30046__$1;(statearr_30064_30092[(2)] = inst_30020);
(statearr_30064_30092[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30068 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30068[(0)] = state_machine__11462__auto__);
(statearr_30068[(1)] = (1));
return statearr_30068;
});
var state_machine__11462__auto____1 = (function (state_30046){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30046);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30069){if((e30069 instanceof Object))
{var ex__11465__auto__ = e30069;var statearr_30070_30093 = state_30046;(statearr_30070_30093[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30046);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30069;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30094 = state_30046;
state_30046 = G__30094;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30046){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938))
})();var state__11519__auto__ = (function (){var statearr_30071 = f__11518__auto__.call(null);(statearr_30071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938))
;
clustermap.components.filters.select_filter.t30006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938){
return (function (_30008){var self__ = this;
var _30008__$1 = this;return self__.meta30007;
});})(owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938))
;
clustermap.components.filters.select_filter.t30006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938){
return (function (_30008,meta30007__$1){var self__ = this;
var _30008__$1 = this;return (new clustermap.components.filters.select_filter.t30006(self__.output_checker29938,self__.component_spec,self__.component_filter_rq_chan,self__.input_schema29936,self__.owner,self__.data,self__.G__29939,self__.map29933,self__.filter_spec,self__.output_schema29935,self__.constructor29931,self__.input_checker29937,self__.validate__6034__auto__,self__.map29934,self__.id,self__.ufv__,meta30007__$1));
});})(owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938))
;
clustermap.components.filters.select_filter.__GT_t30006 = ((function (owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938){
return (function __GT_t30006(output_checker29938__$1,component_spec__$1,component_filter_rq_chan__$1,input_schema29936__$1,owner__$1,data__$1,G__29939__$1,map29933__$1,filter_spec__$1,output_schema29935__$1,constructor29931__$1,input_checker29937__$1,validate__6034__auto____$1,map29934__$1,id__$1,ufv____$1,meta30007){return (new clustermap.components.filters.select_filter.t30006(output_checker29938__$1,component_spec__$1,component_filter_rq_chan__$1,input_schema29936__$1,owner__$1,data__$1,G__29939__$1,map29933__$1,filter_spec__$1,output_schema29935__$1,constructor29931__$1,input_checker29937__$1,validate__6034__auto____$1,map29934__$1,id__$1,ufv____$1,meta30007));
});})(owner,component_filter_rq_chan,map29934,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938))
;
}
return (new clustermap.components.filters.select_filter.t30006(output_checker29938,component_spec,component_filter_rq_chan,input_schema29936,owner,data,G__29939,map29933,filter_spec,output_schema29935,constructor29931,input_checker29937,validate__6034__auto__,map29934,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30095 = output_checker29938.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30095))
{var error__6036__auto___30096 = temp__4126__auto___30095;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29931","constructor29931",-637133258,null),cljs.core.pr_str.call(null,error__6036__auto___30096)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30096,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29935,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29935,input_schema29936,input_checker29937,output_checker29938))
,schema.core.make_fn_schema.call(null,output_schema29935,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29936], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___30075){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner29930,p__30072){var vec__30074 = p__30072;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30074,(0),null);return component_fnk__7881__auto___30075.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29930,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner29930,var_args){
var p__30072 = null;if (arguments.length > 2) {
  p__30072 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner29930,p__30072);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__30097){
var data__7882__auto__ = cljs.core.first(arglist__30097);
arglist__30097 = cljs.core.next(arglist__30097);
var owner29930 = cljs.core.first(arglist__30097);
var p__30072 = cljs.core.rest(arglist__30097);
return select_filter_component__delegate(data__7882__auto__,owner29930,p__30072);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___30075))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m29932){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m29932);
});
__GT_select_filter_component = function(cursor__7850__auto__,m29932){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m29932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
