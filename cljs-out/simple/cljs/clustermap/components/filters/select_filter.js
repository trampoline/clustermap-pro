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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30856(s__30857){return (new cljs.core.LazySeq(null,(function (){var s__30857__$1 = s__30857;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30857__$1);if(temp__4126__auto__)
{var s__30857__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30857__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30857__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30859 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30858 = (0);while(true){
if((i__30858 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30858);cljs.core.chunk_append.call(null,b__30859,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30860 = (i__30858 + (1));
i__30858 = G__30860;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30859),iter__30856.call(null,cljs.core.chunk_rest.call(null,s__30857__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30859),null);
}
} else
{var o = cljs.core.first.call(null,s__30857__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30856.call(null,cljs.core.rest.call(null,s__30857__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30864 = schema.core.Any;var input_schema30865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30861","map30861",2112688646,null))], null);var input_checker30866 = schema.core.checker.call(null,input_schema30865);var output_checker30867 = schema.core.checker.call(null,output_schema30864);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30864,input_schema30865,input_checker30866,output_checker30867){
return (function get_option_value(G__30868){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30869 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30868], null);var temp__4126__auto___30870 = input_checker30866.call(null,args__6035__auto___30869);if(cljs.core.truth_(temp__4126__auto___30870))
{var error__6036__auto___30871 = temp__4126__auto___30870;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30871)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30871,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30869,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30865,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30861 = G__30868;while(true){
if(cljs.core.map_QMARK_.call(null,map30861))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30861)));
}
var map30863 = plumbing.fnk.schema.safe_get.call(null,map30861,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map30863,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map30863,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map30863,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30862 = plumbing.fnk.schema.safe_get.call(null,map30861,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map30862,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map30862,options,label,id,map30863,validate__6034__auto__,ufv__,output_schema30864,input_schema30865,input_checker30866,output_checker30867){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map30862,options,label,id,map30863,validate__6034__auto__,ufv__,output_schema30864,input_schema30865,input_checker30866,output_checker30867))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30872 = output_checker30867.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30872))
{var error__6036__auto___30873 = temp__4126__auto___30872;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30873)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30873,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30864,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30864,input_schema30865,input_checker30866,output_checker30867))
,schema.core.make_fn_schema.call(null,output_schema30864,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30865], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__30875,value){var map__30877 = p__30875;var map__30877__$1 = ((cljs.core.seq_QMARK_.call(null,map__30877))?cljs.core.apply.call(null,cljs.core.hash_map,map__30877):map__30877);var component_spec = map__30877__$1;var options = cljs.core.get.call(null,map__30877__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30877__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__30877,map__30877__$1,component_spec,options,label){
return (function (p1__30874_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30874_SHARP_));
});})(map__30877,map__30877__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30878,value){var map__30880 = p__30878;var map__30880__$1 = ((cljs.core.seq_QMARK_.call(null,map__30880))?cljs.core.apply.call(null,cljs.core.hash_map,map__30880):map__30880);var component_spec = map__30880__$1;var options = cljs.core.get.call(null,map__30880__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30880__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30881_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30881_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__30882_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30882_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30883 = schema.core.Any;var input_schema30884 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30885 = schema.core.checker.call(null,input_schema30884);var output_checker30886 = schema.core.checker.call(null,output_schema30883);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886){
return (function render_STAR_(G__30887){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30887], null);var temp__4126__auto___30905 = input_checker30885.call(null,args__6035__auto___30904);if(cljs.core.truth_(temp__4126__auto___30905))
{var error__6036__auto___30906 = temp__4126__auto___30905;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30906)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30906,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30904,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30884,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30887;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886){
return (function iter__30896(s__30897){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886){
return (function (){var s__30897__$1 = s__30897;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30897__$1);if(temp__4126__auto__)
{var s__30897__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30897__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30897__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30899 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30898 = (0);while(true){
if((i__30898 < size__4376__auto__))
{var map__30902 = cljs.core._nth.call(null,c__4375__auto__,i__30898);var map__30902__$1 = ((cljs.core.seq_QMARK_.call(null,map__30902))?cljs.core.apply.call(null,cljs.core.hash_map,map__30902):map__30902);var option = map__30902__$1;var label__$1 = cljs.core.get.call(null,map__30902__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30902__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30899,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30907 = (i__30898 + (1));
i__30898 = G__30907;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30899),iter__30896.call(null,cljs.core.chunk_rest.call(null,s__30897__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30899),null);
}
} else
{var map__30903 = cljs.core.first.call(null,s__30897__$2);var map__30903__$1 = ((cljs.core.seq_QMARK_.call(null,map__30903))?cljs.core.apply.call(null,cljs.core.hash_map,map__30903):map__30903);var option = map__30903__$1;var label__$1 = cljs.core.get.call(null,map__30903__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30903__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30896.call(null,cljs.core.rest.call(null,s__30897__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30908 = output_checker30886.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30908))
{var error__6036__auto___30909 = temp__4126__auto___30908;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30909)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30909,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30883,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886))
,schema.core.make_fn_schema.call(null,output_schema30883,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30884], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31055 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30915 = schema.core.Any;var input_schema30916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30913","map30913",-1714341077,null))], null);var input_checker30917 = schema.core.checker.call(null,input_schema30916);var output_checker30918 = schema.core.checker.call(null,output_schema30915);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function constructor30911(G__30919){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31056 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30919], null);var temp__4126__auto___31057 = input_checker30917.call(null,args__6035__auto___31056);if(cljs.core.truth_(temp__4126__auto___31057))
{var error__6036__auto___31058 = temp__4126__auto___31057;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30911","constructor30911",1595049852,null),cljs.core.pr_str.call(null,error__6036__auto___31058)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31058,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31056,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30916,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30913 = G__30919;while(true){
if(cljs.core.map_QMARK_.call(null,map30913))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30913)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30913,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30914 = plumbing.fnk.schema.safe_get.call(null,map30913,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30914,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30913,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t30986 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t30986 = (function (component_spec,output_schema30915,component_filter_rq_chan,owner,input_checker30917,data,map30913,map30914,filter_spec,input_schema30916,G__30919,validate__6034__auto__,output_checker30918,id,constructor30911,ufv__,meta30987){
this.component_spec = component_spec;
this.output_schema30915 = output_schema30915;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.input_checker30917 = input_checker30917;
this.data = data;
this.map30913 = map30913;
this.map30914 = map30914;
this.filter_spec = filter_spec;
this.input_schema30916 = input_schema30916;
this.G__30919 = G__30919;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker30918 = output_checker30918;
this.id = id;
this.constructor30911 = constructor30911;
this.ufv__ = ufv__;
this.meta30987 = meta30987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t30986.cljs$lang$type = true;
clustermap.components.filters.select_filter.t30986.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t30986";
clustermap.components.filters.select_filter.t30986.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t30986");
});})(owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
clustermap.components.filters.select_filter.t30986.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t30986.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
clustermap.components.filters.select_filter.t30986.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t30986.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
clustermap.components.filters.select_filter.t30986.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t30986.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (state_31026){var state_val_31027 = (state_31026[(1)]);if((state_val_31027 === (7)))
{var inst_31017 = (state_31026[(2)]);var state_31026__$1 = state_31026;if(cljs.core.truth_(inst_31017))
{var statearr_31028_31059 = state_31026__$1;(statearr_31028_31059[(1)] = (11));
} else
{var statearr_31029_31060 = state_31026__$1;(statearr_31029_31060[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31027 === (1)))
{var state_31026__$1 = state_31026;var statearr_31030_31061 = state_31026__$1;(statearr_31030_31061[(2)] = null);
(statearr_31030_31061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31027 === (4)))
{var inst_30991 = (state_31026[(7)]);var inst_30991__$1 = (state_31026[(2)]);var state_31026__$1 = (function (){var statearr_31031 = state_31026;(statearr_31031[(7)] = inst_30991__$1);
return statearr_31031;
})();if(cljs.core.truth_(inst_30991__$1))
{var statearr_31032_31062 = state_31026__$1;(statearr_31032_31062[(1)] = (5));
} else
{var statearr_31033_31063 = state_31026__$1;(statearr_31033_31063[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31027 === (13)))
{var inst_31022 = (state_31026[(2)]);var state_31026__$1 = state_31026;var statearr_31034_31064 = state_31026__$1;(statearr_31034_31064[(2)] = inst_31022);
(statearr_31034_31064[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31027 === (6)))
{var state_31026__$1 = state_31026;var statearr_31035_31065 = state_31026__$1;(statearr_31035_31065[(2)] = null);
(statearr_31035_31065[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31027 === (3)))
{var inst_31024 = (state_31026[(2)]);var state_31026__$1 = state_31026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31026__$1,inst_31024);
} else
{if((state_val_31027 === (12)))
{var state_31026__$1 = state_31026;var statearr_31036_31066 = state_31026__$1;(statearr_31036_31066[(2)] = null);
(statearr_31036_31066[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31027 === (2)))
{var state_31026__$1 = state_31026;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31026__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31027 === (11)))
{var state_31026__$1 = state_31026;var statearr_31037_31067 = state_31026__$1;(statearr_31037_31067[(2)] = null);
(statearr_31037_31067[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31027 === (9)))
{var inst_30997 = (state_31026[(8)]);var state_31026__$1 = state_31026;var statearr_31038_31068 = state_31026__$1;(statearr_31038_31068[(2)] = inst_30997);
(statearr_31038_31068[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31027 === (5)))
{var inst_30997 = (state_31026[(8)]);var inst_30991 = (state_31026[(7)]);var inst_30994 = cljs.core.nth.call(null,inst_30991,(0),null);var inst_30995 = cljs.core.nth.call(null,inst_30991,(1),null);var inst_30997__$1 = om.core.get_props.call(null,self__.owner);var inst_30998 = cljs.core.seq_QMARK_.call(null,inst_30997__$1);var state_31026__$1 = (function (){var statearr_31039 = state_31026;(statearr_31039[(8)] = inst_30997__$1);
(statearr_31039[(9)] = inst_30994);
(statearr_31039[(10)] = inst_30995);
return statearr_31039;
})();if(inst_30998)
{var statearr_31040_31069 = state_31026__$1;(statearr_31040_31069[(1)] = (8));
} else
{var statearr_31041_31070 = state_31026__$1;(statearr_31041_31070[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31027 === (10)))
{var inst_30995 = (state_31026[(10)]);var inst_31003 = (state_31026[(2)]);var inst_31004 = cljs.core.get.call(null,inst_31003,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31005 = cljs.core.get.call(null,inst_31003,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31006 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31007 = ["SELECT-FILTER-RQ",self__.id,inst_30995];var inst_31008 = (new cljs.core.PersistentVector(null,3,(5),inst_31006,inst_31007,null));var inst_31009 = cljs.core.clj__GT_js.call(null,inst_31008);var inst_31010 = console.log(inst_31009);var inst_31011 = cljs.core.deref.call(null,inst_31004);var inst_31012 = cljs.core.deref.call(null,inst_31005);var inst_31013 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_31011,inst_31012,inst_30995);var inst_31014 = om.core.update_BANG_.call(null,inst_31004,inst_31013);var state_31026__$1 = (function (){var statearr_31042 = state_31026;(statearr_31042[(11)] = inst_31010);
(statearr_31042[(12)] = inst_31014);
return statearr_31042;
})();var statearr_31043_31071 = state_31026__$1;(statearr_31043_31071[(2)] = true);
(statearr_31043_31071[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31027 === (8)))
{var inst_30997 = (state_31026[(8)]);var inst_31000 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30997);var state_31026__$1 = state_31026;var statearr_31044_31072 = state_31026__$1;(statearr_31044_31072[(2)] = inst_31000);
(statearr_31044_31072[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31048 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31048[(0)] = state_machine__9111__auto__);
(statearr_31048[(1)] = (1));
return statearr_31048;
});
var state_machine__9111__auto____1 = (function (state_31026){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31026);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31049){if((e31049 instanceof Object))
{var ex__9114__auto__ = e31049;var statearr_31050_31073 = state_31026;(statearr_31050_31073[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31026);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31049;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31074 = state_31026;
state_31026 = G__31074;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31026){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
})();var state__9127__auto__ = (function (){var statearr_31051 = f__9126__auto__.call(null);(statearr_31051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
clustermap.components.filters.select_filter.t30986.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (_30988){var self__ = this;
var _30988__$1 = this;return self__.meta30987;
});})(owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
clustermap.components.filters.select_filter.t30986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (_30988,meta30987__$1){var self__ = this;
var _30988__$1 = this;return (new clustermap.components.filters.select_filter.t30986(self__.component_spec,self__.output_schema30915,self__.component_filter_rq_chan,self__.owner,self__.input_checker30917,self__.data,self__.map30913,self__.map30914,self__.filter_spec,self__.input_schema30916,self__.G__30919,self__.validate__6034__auto__,self__.output_checker30918,self__.id,self__.constructor30911,self__.ufv__,meta30987__$1));
});})(owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
clustermap.components.filters.select_filter.__GT_t30986 = ((function (owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function __GT_t30986(component_spec__$1,output_schema30915__$1,component_filter_rq_chan__$1,owner__$1,input_checker30917__$1,data__$1,map30913__$1,map30914__$1,filter_spec__$1,input_schema30916__$1,G__30919__$1,validate__6034__auto____$1,output_checker30918__$1,id__$1,constructor30911__$1,ufv____$1,meta30987){return (new clustermap.components.filters.select_filter.t30986(component_spec__$1,output_schema30915__$1,component_filter_rq_chan__$1,owner__$1,input_checker30917__$1,data__$1,map30913__$1,map30914__$1,filter_spec__$1,input_schema30916__$1,G__30919__$1,validate__6034__auto____$1,output_checker30918__$1,id__$1,constructor30911__$1,ufv____$1,meta30987));
});})(owner,component_filter_rq_chan,map30914,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
}
return (new clustermap.components.filters.select_filter.t30986(component_spec,output_schema30915,component_filter_rq_chan,owner,input_checker30917,data,map30913,map30914,filter_spec,input_schema30916,G__30919,validate__6034__auto__,output_checker30918,id,constructor30911,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31075 = output_checker30918.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31075))
{var error__6036__auto___31076 = temp__4126__auto___31075;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30911","constructor30911",1595049852,null),cljs.core.pr_str.call(null,error__6036__auto___31076)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31076,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30915,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
,schema.core.make_fn_schema.call(null,output_schema30915,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30916], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31055){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner30910,p__31052){var vec__31054 = p__31052;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31054,(0),null);return component_fnk__7881__auto___31055.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30910,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner30910,var_args){
var p__31052 = null;if (arguments.length > 2) {
  p__31052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner30910,p__31052);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31077){
var data__7882__auto__ = cljs.core.first(arglist__31077);
arglist__31077 = cljs.core.next(arglist__31077);
var owner30910 = cljs.core.first(arglist__31077);
var p__31052 = cljs.core.rest(arglist__31077);
return select_filter_component__delegate(data__7882__auto__,owner30910,p__31052);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31055))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m30912){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m30912);
});
__GT_select_filter_component = function(cursor__7850__auto__,m30912){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m30912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
