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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__31115(s__31116){return (new cljs.core.LazySeq(null,(function (){var s__31116__$1 = s__31116;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31116__$1);if(temp__4126__auto__)
{var s__31116__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31116__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31116__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31118 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31117 = (0);while(true){
if((i__31117 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__31117);cljs.core.chunk_append.call(null,b__31118,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__31119 = (i__31117 + (1));
i__31117 = G__31119;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31118),iter__31115.call(null,cljs.core.chunk_rest.call(null,s__31116__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31118),null);
}
} else
{var o = cljs.core.first.call(null,s__31116__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__31115.call(null,cljs.core.rest.call(null,s__31116__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31123 = schema.core.Any;var input_schema31124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map31120","map31120",373463204,null))], null);var input_checker31125 = schema.core.checker.call(null,input_schema31124);var output_checker31126 = schema.core.checker.call(null,output_schema31123);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31123,input_schema31124,input_checker31125,output_checker31126){
return (function get_option_value(G__31127){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31127], null);var temp__4126__auto___31129 = input_checker31125.call(null,args__6035__auto___31128);if(cljs.core.truth_(temp__4126__auto___31129))
{var error__6036__auto___31130 = temp__4126__auto___31129;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31130)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31130,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31128,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31124,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31120 = G__31127;while(true){
if(cljs.core.map_QMARK_.call(null,map31120))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31120)));
}
var map31122 = plumbing.fnk.schema.safe_get.call(null,map31120,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map31122,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map31122,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map31122,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31121 = plumbing.fnk.schema.safe_get.call(null,map31120,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map31121,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map31121,options,label,id,map31122,validate__6034__auto__,ufv__,output_schema31123,input_schema31124,input_checker31125,output_checker31126){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map31121,options,label,id,map31122,validate__6034__auto__,ufv__,output_schema31123,input_schema31124,input_checker31125,output_checker31126))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31131 = output_checker31126.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31131))
{var error__6036__auto___31132 = temp__4126__auto___31131;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31132)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31132,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31123,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31123,input_schema31124,input_checker31125,output_checker31126))
,schema.core.make_fn_schema.call(null,output_schema31123,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31124], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__31134,value){var map__31136 = p__31134;var map__31136__$1 = ((cljs.core.seq_QMARK_.call(null,map__31136))?cljs.core.apply.call(null,cljs.core.hash_map,map__31136):map__31136);var component_spec = map__31136__$1;var options = cljs.core.get.call(null,map__31136__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__31136__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31136,map__31136__$1,component_spec,options,label){
return (function (p1__31133_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31133_SHARP_));
});})(map__31136,map__31136__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__31137,value){var map__31139 = p__31137;var map__31139__$1 = ((cljs.core.seq_QMARK_.call(null,map__31139))?cljs.core.apply.call(null,cljs.core.hash_map,map__31139):map__31139);var component_spec = map__31139__$1;var options = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__31140_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31140_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__31141_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31141_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31142 = schema.core.Any;var input_schema31143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31144 = schema.core.checker.call(null,input_schema31143);var output_checker31145 = schema.core.checker.call(null,output_schema31142);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31142,input_schema31143,input_checker31144,output_checker31145){
return (function render_STAR_(G__31146){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31146], null);var temp__4126__auto___31164 = input_checker31144.call(null,args__6035__auto___31163);if(cljs.core.truth_(temp__4126__auto___31164))
{var error__6036__auto___31165 = temp__4126__auto___31164;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31165)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31165,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31163,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31143,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31146;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31142,input_schema31143,input_checker31144,output_checker31145){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31142,input_schema31143,input_checker31144,output_checker31145))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31142,input_schema31143,input_checker31144,output_checker31145){
return (function iter__31155(s__31156){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31142,input_schema31143,input_checker31144,output_checker31145){
return (function (){var s__31156__$1 = s__31156;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31156__$1);if(temp__4126__auto__)
{var s__31156__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31156__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31156__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31158 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31157 = (0);while(true){
if((i__31157 < size__4376__auto__))
{var map__31161 = cljs.core._nth.call(null,c__4375__auto__,i__31157);var map__31161__$1 = ((cljs.core.seq_QMARK_.call(null,map__31161))?cljs.core.apply.call(null,cljs.core.hash_map,map__31161):map__31161);var option = map__31161__$1;var label__$1 = cljs.core.get.call(null,map__31161__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31161__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31158,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31166 = (i__31157 + (1));
i__31157 = G__31166;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31158),iter__31155.call(null,cljs.core.chunk_rest.call(null,s__31156__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31158),null);
}
} else
{var map__31162 = cljs.core.first.call(null,s__31156__$2);var map__31162__$1 = ((cljs.core.seq_QMARK_.call(null,map__31162))?cljs.core.apply.call(null,cljs.core.hash_map,map__31162):map__31162);var option = map__31162__$1;var label__$1 = cljs.core.get.call(null,map__31162__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31162__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31155.call(null,cljs.core.rest.call(null,s__31156__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31142,input_schema31143,input_checker31144,output_checker31145))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31142,input_schema31143,input_checker31144,output_checker31145))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31167 = output_checker31145.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31167))
{var error__6036__auto___31168 = temp__4126__auto___31167;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31168)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31168,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31142,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31142,input_schema31143,input_checker31144,output_checker31145))
,schema.core.make_fn_schema.call(null,output_schema31142,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31143], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31314 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31174 = schema.core.Any;var input_schema31175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31172","map31172",1274028037,null))], null);var input_checker31176 = schema.core.checker.call(null,input_schema31175);var output_checker31177 = schema.core.checker.call(null,output_schema31174);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177){
return (function constructor31170(G__31178){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31315 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31178], null);var temp__4126__auto___31316 = input_checker31176.call(null,args__6035__auto___31315);if(cljs.core.truth_(temp__4126__auto___31316))
{var error__6036__auto___31317 = temp__4126__auto___31316;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31170","constructor31170",1786926843,null),cljs.core.pr_str.call(null,error__6036__auto___31317)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31317,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31315,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31175,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31172 = G__31178;while(true){
if(cljs.core.map_QMARK_.call(null,map31172))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31172)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31172,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31173 = plumbing.fnk.schema.safe_get.call(null,map31172,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31173,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31172,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t31245 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t31245 = (function (component_spec,component_filter_rq_chan,owner,G__31178,map31172,data,map31173,input_schema31175,filter_spec,output_schema31174,output_checker31177,input_checker31176,validate__6034__auto__,id,constructor31170,ufv__,meta31246){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.G__31178 = G__31178;
this.map31172 = map31172;
this.data = data;
this.map31173 = map31173;
this.input_schema31175 = input_schema31175;
this.filter_spec = filter_spec;
this.output_schema31174 = output_schema31174;
this.output_checker31177 = output_checker31177;
this.input_checker31176 = input_checker31176;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.constructor31170 = constructor31170;
this.ufv__ = ufv__;
this.meta31246 = meta31246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t31245.cljs$lang$type = true;
clustermap.components.filters.select_filter.t31245.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t31245";
clustermap.components.filters.select_filter.t31245.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t31245");
});})(owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177))
;
clustermap.components.filters.select_filter.t31245.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t31245.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177))
;
clustermap.components.filters.select_filter.t31245.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t31245.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177))
;
clustermap.components.filters.select_filter.t31245.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t31245.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177){
return (function (state_31285){var state_val_31286 = (state_31285[(1)]);if((state_val_31286 === (7)))
{var inst_31276 = (state_31285[(2)]);var state_31285__$1 = state_31285;if(cljs.core.truth_(inst_31276))
{var statearr_31287_31318 = state_31285__$1;(statearr_31287_31318[(1)] = (11));
} else
{var statearr_31288_31319 = state_31285__$1;(statearr_31288_31319[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31286 === (1)))
{var state_31285__$1 = state_31285;var statearr_31289_31320 = state_31285__$1;(statearr_31289_31320[(2)] = null);
(statearr_31289_31320[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31286 === (4)))
{var inst_31250 = (state_31285[(7)]);var inst_31250__$1 = (state_31285[(2)]);var state_31285__$1 = (function (){var statearr_31290 = state_31285;(statearr_31290[(7)] = inst_31250__$1);
return statearr_31290;
})();if(cljs.core.truth_(inst_31250__$1))
{var statearr_31291_31321 = state_31285__$1;(statearr_31291_31321[(1)] = (5));
} else
{var statearr_31292_31322 = state_31285__$1;(statearr_31292_31322[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31286 === (13)))
{var inst_31281 = (state_31285[(2)]);var state_31285__$1 = state_31285;var statearr_31293_31323 = state_31285__$1;(statearr_31293_31323[(2)] = inst_31281);
(statearr_31293_31323[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31286 === (6)))
{var state_31285__$1 = state_31285;var statearr_31294_31324 = state_31285__$1;(statearr_31294_31324[(2)] = null);
(statearr_31294_31324[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31286 === (3)))
{var inst_31283 = (state_31285[(2)]);var state_31285__$1 = state_31285;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31285__$1,inst_31283);
} else
{if((state_val_31286 === (12)))
{var state_31285__$1 = state_31285;var statearr_31295_31325 = state_31285__$1;(statearr_31295_31325[(2)] = null);
(statearr_31295_31325[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31286 === (2)))
{var state_31285__$1 = state_31285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31285__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31286 === (11)))
{var state_31285__$1 = state_31285;var statearr_31296_31326 = state_31285__$1;(statearr_31296_31326[(2)] = null);
(statearr_31296_31326[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31286 === (9)))
{var inst_31256 = (state_31285[(8)]);var state_31285__$1 = state_31285;var statearr_31297_31327 = state_31285__$1;(statearr_31297_31327[(2)] = inst_31256);
(statearr_31297_31327[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31286 === (5)))
{var inst_31256 = (state_31285[(8)]);var inst_31250 = (state_31285[(7)]);var inst_31253 = cljs.core.nth.call(null,inst_31250,(0),null);var inst_31254 = cljs.core.nth.call(null,inst_31250,(1),null);var inst_31256__$1 = om.core.get_props.call(null,self__.owner);var inst_31257 = cljs.core.seq_QMARK_.call(null,inst_31256__$1);var state_31285__$1 = (function (){var statearr_31298 = state_31285;(statearr_31298[(8)] = inst_31256__$1);
(statearr_31298[(9)] = inst_31254);
(statearr_31298[(10)] = inst_31253);
return statearr_31298;
})();if(inst_31257)
{var statearr_31299_31328 = state_31285__$1;(statearr_31299_31328[(1)] = (8));
} else
{var statearr_31300_31329 = state_31285__$1;(statearr_31300_31329[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31286 === (10)))
{var inst_31254 = (state_31285[(9)]);var inst_31262 = (state_31285[(2)]);var inst_31263 = cljs.core.get.call(null,inst_31262,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31264 = cljs.core.get.call(null,inst_31262,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31265 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31266 = ["SELECT-FILTER-RQ",self__.id,inst_31254];var inst_31267 = (new cljs.core.PersistentVector(null,3,(5),inst_31265,inst_31266,null));var inst_31268 = cljs.core.clj__GT_js.call(null,inst_31267);var inst_31269 = console.log(inst_31268);var inst_31270 = cljs.core.deref.call(null,inst_31263);var inst_31271 = cljs.core.deref.call(null,inst_31264);var inst_31272 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_31270,inst_31271,inst_31254);var inst_31273 = om.core.update_BANG_.call(null,inst_31263,inst_31272);var state_31285__$1 = (function (){var statearr_31301 = state_31285;(statearr_31301[(11)] = inst_31269);
(statearr_31301[(12)] = inst_31273);
return statearr_31301;
})();var statearr_31302_31330 = state_31285__$1;(statearr_31302_31330[(2)] = true);
(statearr_31302_31330[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31286 === (8)))
{var inst_31256 = (state_31285[(8)]);var inst_31259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31256);var state_31285__$1 = state_31285;var statearr_31303_31331 = state_31285__$1;(statearr_31303_31331[(2)] = inst_31259);
(statearr_31303_31331[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31307 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31307[(0)] = state_machine__9111__auto__);
(statearr_31307[(1)] = (1));
return statearr_31307;
});
var state_machine__9111__auto____1 = (function (state_31285){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31285);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31308){if((e31308 instanceof Object))
{var ex__9114__auto__ = e31308;var statearr_31309_31332 = state_31285;(statearr_31309_31332[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31285);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31308;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31333 = state_31285;
state_31285 = G__31333;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31285){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177))
})();var state__9127__auto__ = (function (){var statearr_31310 = f__9126__auto__.call(null);(statearr_31310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177))
;
clustermap.components.filters.select_filter.t31245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177){
return (function (_31247){var self__ = this;
var _31247__$1 = this;return self__.meta31246;
});})(owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177))
;
clustermap.components.filters.select_filter.t31245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177){
return (function (_31247,meta31246__$1){var self__ = this;
var _31247__$1 = this;return (new clustermap.components.filters.select_filter.t31245(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.G__31178,self__.map31172,self__.data,self__.map31173,self__.input_schema31175,self__.filter_spec,self__.output_schema31174,self__.output_checker31177,self__.input_checker31176,self__.validate__6034__auto__,self__.id,self__.constructor31170,self__.ufv__,meta31246__$1));
});})(owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177))
;
clustermap.components.filters.select_filter.__GT_t31245 = ((function (owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177){
return (function __GT_t31245(component_spec__$1,component_filter_rq_chan__$1,owner__$1,G__31178__$1,map31172__$1,data__$1,map31173__$1,input_schema31175__$1,filter_spec__$1,output_schema31174__$1,output_checker31177__$1,input_checker31176__$1,validate__6034__auto____$1,id__$1,constructor31170__$1,ufv____$1,meta31246){return (new clustermap.components.filters.select_filter.t31245(component_spec__$1,component_filter_rq_chan__$1,owner__$1,G__31178__$1,map31172__$1,data__$1,map31173__$1,input_schema31175__$1,filter_spec__$1,output_schema31174__$1,output_checker31177__$1,input_checker31176__$1,validate__6034__auto____$1,id__$1,constructor31170__$1,ufv____$1,meta31246));
});})(owner,component_filter_rq_chan,map31173,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177))
;
}
return (new clustermap.components.filters.select_filter.t31245(component_spec,component_filter_rq_chan,owner,G__31178,map31172,data,map31173,input_schema31175,filter_spec,output_schema31174,output_checker31177,input_checker31176,validate__6034__auto__,id,constructor31170,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31334 = output_checker31177.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31334))
{var error__6036__auto___31335 = temp__4126__auto___31334;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31170","constructor31170",1786926843,null),cljs.core.pr_str.call(null,error__6036__auto___31335)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31335,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31174,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31174,input_schema31175,input_checker31176,output_checker31177))
,schema.core.make_fn_schema.call(null,output_schema31174,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31175], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31314){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner31169,p__31311){var vec__31313 = p__31311;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31313,(0),null);return component_fnk__7881__auto___31314.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31169,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner31169,var_args){
var p__31311 = null;if (arguments.length > 2) {
  p__31311 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner31169,p__31311);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31336){
var data__7882__auto__ = cljs.core.first(arglist__31336);
arglist__31336 = cljs.core.next(arglist__31336);
var owner31169 = cljs.core.first(arglist__31336);
var p__31311 = cljs.core.rest(arglist__31336);
return select_filter_component__delegate(data__7882__auto__,owner31169,p__31311);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31314))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m31171){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m31171);
});
__GT_select_filter_component = function(cursor__7850__auto__,m31171){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m31171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
