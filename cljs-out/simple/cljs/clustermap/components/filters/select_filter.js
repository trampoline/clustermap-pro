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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30170(s__30171){return (new cljs.core.LazySeq(null,(function (){var s__30171__$1 = s__30171;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30171__$1);if(temp__4126__auto__)
{var s__30171__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30171__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30171__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30173 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30172 = (0);while(true){
if((i__30172 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30172);cljs.core.chunk_append.call(null,b__30173,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30174 = (i__30172 + (1));
i__30172 = G__30174;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30173),iter__30170.call(null,cljs.core.chunk_rest.call(null,s__30171__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30173),null);
}
} else
{var o = cljs.core.first.call(null,s__30171__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30170.call(null,cljs.core.rest.call(null,s__30171__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30178 = schema.core.Any;var input_schema30179 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30175","map30175",1625938734,null))], null);var input_checker30180 = schema.core.checker.call(null,input_schema30179);var output_checker30181 = schema.core.checker.call(null,output_schema30178);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30178,input_schema30179,input_checker30180,output_checker30181){
return (function get_option_value(G__30182){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30182], null);var temp__4126__auto___30184 = input_checker30180.call(null,args__6035__auto___30183);if(cljs.core.truth_(temp__4126__auto___30184))
{var error__6036__auto___30185 = temp__4126__auto___30184;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30185)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30185,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30183,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30179,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30175 = G__30182;while(true){
if(cljs.core.map_QMARK_.call(null,map30175))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30175)));
}
var map30177 = plumbing.fnk.schema.safe_get.call(null,map30175,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map30177,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map30177,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map30177,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30176 = plumbing.fnk.schema.safe_get.call(null,map30175,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map30176,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map30176,options,label,id,map30177,validate__6034__auto__,ufv__,output_schema30178,input_schema30179,input_checker30180,output_checker30181){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map30176,options,label,id,map30177,validate__6034__auto__,ufv__,output_schema30178,input_schema30179,input_checker30180,output_checker30181))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30186 = output_checker30181.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30186))
{var error__6036__auto___30187 = temp__4126__auto___30186;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30187)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30187,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30178,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30178,input_schema30179,input_checker30180,output_checker30181))
,schema.core.make_fn_schema.call(null,output_schema30178,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30179], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__30189,value){var map__30191 = p__30189;var map__30191__$1 = ((cljs.core.seq_QMARK_.call(null,map__30191))?cljs.core.apply.call(null,cljs.core.hash_map,map__30191):map__30191);var component_spec = map__30191__$1;var options = cljs.core.get.call(null,map__30191__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30191__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__30191,map__30191__$1,component_spec,options,label){
return (function (p1__30188_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30188_SHARP_));
});})(map__30191,map__30191__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30192,value){var map__30194 = p__30192;var map__30194__$1 = ((cljs.core.seq_QMARK_.call(null,map__30194))?cljs.core.apply.call(null,cljs.core.hash_map,map__30194):map__30194);var component_spec = map__30194__$1;var options = cljs.core.get.call(null,map__30194__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30194__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30195_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30195_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__30196_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30196_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30197 = schema.core.Any;var input_schema30198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30199 = schema.core.checker.call(null,input_schema30198);var output_checker30200 = schema.core.checker.call(null,output_schema30197);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30197,input_schema30198,input_checker30199,output_checker30200){
return (function render_STAR_(G__30201){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30218 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30201], null);var temp__4126__auto___30219 = input_checker30199.call(null,args__6035__auto___30218);if(cljs.core.truth_(temp__4126__auto___30219))
{var error__6036__auto___30220 = temp__4126__auto___30219;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30220)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30220,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30218,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30198,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30201;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30197,input_schema30198,input_checker30199,output_checker30200){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30197,input_schema30198,input_checker30199,output_checker30200))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30197,input_schema30198,input_checker30199,output_checker30200){
return (function iter__30210(s__30211){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30197,input_schema30198,input_checker30199,output_checker30200){
return (function (){var s__30211__$1 = s__30211;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30211__$1);if(temp__4126__auto__)
{var s__30211__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30211__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30211__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30213 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30212 = (0);while(true){
if((i__30212 < size__4376__auto__))
{var map__30216 = cljs.core._nth.call(null,c__4375__auto__,i__30212);var map__30216__$1 = ((cljs.core.seq_QMARK_.call(null,map__30216))?cljs.core.apply.call(null,cljs.core.hash_map,map__30216):map__30216);var option = map__30216__$1;var label__$1 = cljs.core.get.call(null,map__30216__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30216__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30213,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30221 = (i__30212 + (1));
i__30212 = G__30221;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30213),iter__30210.call(null,cljs.core.chunk_rest.call(null,s__30211__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30213),null);
}
} else
{var map__30217 = cljs.core.first.call(null,s__30211__$2);var map__30217__$1 = ((cljs.core.seq_QMARK_.call(null,map__30217))?cljs.core.apply.call(null,cljs.core.hash_map,map__30217):map__30217);var option = map__30217__$1;var label__$1 = cljs.core.get.call(null,map__30217__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30217__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30210.call(null,cljs.core.rest.call(null,s__30211__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30197,input_schema30198,input_checker30199,output_checker30200))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30197,input_schema30198,input_checker30199,output_checker30200))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30222 = output_checker30200.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30222))
{var error__6036__auto___30223 = temp__4126__auto___30222;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30223)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30223,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30197,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30197,input_schema30198,input_checker30199,output_checker30200))
,schema.core.make_fn_schema.call(null,output_schema30197,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30198], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30369 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30229 = schema.core.Any;var input_schema30230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30227","map30227",-11096780,null))], null);var input_checker30231 = schema.core.checker.call(null,input_schema30230);var output_checker30232 = schema.core.checker.call(null,output_schema30229);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232){
return (function constructor30225(G__30233){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30370 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30233], null);var temp__4126__auto___30371 = input_checker30231.call(null,args__6035__auto___30370);if(cljs.core.truth_(temp__4126__auto___30371))
{var error__6036__auto___30372 = temp__4126__auto___30371;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30225","constructor30225",781784708,null),cljs.core.pr_str.call(null,error__6036__auto___30372)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30372,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30370,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30230,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30227 = G__30233;while(true){
if(cljs.core.map_QMARK_.call(null,map30227))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30227)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30227,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30228 = plumbing.fnk.schema.safe_get.call(null,map30227,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30228,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30227,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t30300 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t30300 = (function (component_spec,component_filter_rq_chan,owner,constructor30225,data,output_schema30229,output_checker30232,map30228,filter_spec,G__30233,input_schema30230,map30227,input_checker30231,validate__6034__auto__,id,ufv__,meta30301){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.constructor30225 = constructor30225;
this.data = data;
this.output_schema30229 = output_schema30229;
this.output_checker30232 = output_checker30232;
this.map30228 = map30228;
this.filter_spec = filter_spec;
this.G__30233 = G__30233;
this.input_schema30230 = input_schema30230;
this.map30227 = map30227;
this.input_checker30231 = input_checker30231;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta30301 = meta30301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t30300.cljs$lang$type = true;
clustermap.components.filters.select_filter.t30300.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t30300";
clustermap.components.filters.select_filter.t30300.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t30300");
});})(owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232))
;
clustermap.components.filters.select_filter.t30300.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t30300.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232))
;
clustermap.components.filters.select_filter.t30300.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t30300.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232))
;
clustermap.components.filters.select_filter.t30300.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t30300.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232){
return (function (state_30340){var state_val_30341 = (state_30340[(1)]);if((state_val_30341 === (7)))
{var inst_30331 = (state_30340[(2)]);var state_30340__$1 = state_30340;if(cljs.core.truth_(inst_30331))
{var statearr_30342_30373 = state_30340__$1;(statearr_30342_30373[(1)] = (11));
} else
{var statearr_30343_30374 = state_30340__$1;(statearr_30343_30374[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30341 === (1)))
{var state_30340__$1 = state_30340;var statearr_30344_30375 = state_30340__$1;(statearr_30344_30375[(2)] = null);
(statearr_30344_30375[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30341 === (4)))
{var inst_30305 = (state_30340[(7)]);var inst_30305__$1 = (state_30340[(2)]);var state_30340__$1 = (function (){var statearr_30345 = state_30340;(statearr_30345[(7)] = inst_30305__$1);
return statearr_30345;
})();if(cljs.core.truth_(inst_30305__$1))
{var statearr_30346_30376 = state_30340__$1;(statearr_30346_30376[(1)] = (5));
} else
{var statearr_30347_30377 = state_30340__$1;(statearr_30347_30377[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30341 === (13)))
{var inst_30336 = (state_30340[(2)]);var state_30340__$1 = state_30340;var statearr_30348_30378 = state_30340__$1;(statearr_30348_30378[(2)] = inst_30336);
(statearr_30348_30378[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30341 === (6)))
{var state_30340__$1 = state_30340;var statearr_30349_30379 = state_30340__$1;(statearr_30349_30379[(2)] = null);
(statearr_30349_30379[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30341 === (3)))
{var inst_30338 = (state_30340[(2)]);var state_30340__$1 = state_30340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30340__$1,inst_30338);
} else
{if((state_val_30341 === (12)))
{var state_30340__$1 = state_30340;var statearr_30350_30380 = state_30340__$1;(statearr_30350_30380[(2)] = null);
(statearr_30350_30380[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30341 === (2)))
{var state_30340__$1 = state_30340;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30340__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30341 === (11)))
{var state_30340__$1 = state_30340;var statearr_30351_30381 = state_30340__$1;(statearr_30351_30381[(2)] = null);
(statearr_30351_30381[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30341 === (9)))
{var inst_30311 = (state_30340[(8)]);var state_30340__$1 = state_30340;var statearr_30352_30382 = state_30340__$1;(statearr_30352_30382[(2)] = inst_30311);
(statearr_30352_30382[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30341 === (5)))
{var inst_30311 = (state_30340[(8)]);var inst_30305 = (state_30340[(7)]);var inst_30308 = cljs.core.nth.call(null,inst_30305,(0),null);var inst_30309 = cljs.core.nth.call(null,inst_30305,(1),null);var inst_30311__$1 = om.core.get_props.call(null,self__.owner);var inst_30312 = cljs.core.seq_QMARK_.call(null,inst_30311__$1);var state_30340__$1 = (function (){var statearr_30353 = state_30340;(statearr_30353[(9)] = inst_30309);
(statearr_30353[(10)] = inst_30308);
(statearr_30353[(8)] = inst_30311__$1);
return statearr_30353;
})();if(inst_30312)
{var statearr_30354_30383 = state_30340__$1;(statearr_30354_30383[(1)] = (8));
} else
{var statearr_30355_30384 = state_30340__$1;(statearr_30355_30384[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30341 === (10)))
{var inst_30309 = (state_30340[(9)]);var inst_30317 = (state_30340[(2)]);var inst_30318 = cljs.core.get.call(null,inst_30317,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30319 = cljs.core.get.call(null,inst_30317,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30320 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30321 = ["SELECT-FILTER-RQ",self__.id,inst_30309];var inst_30322 = (new cljs.core.PersistentVector(null,3,(5),inst_30320,inst_30321,null));var inst_30323 = cljs.core.clj__GT_js.call(null,inst_30322);var inst_30324 = console.log(inst_30323);var inst_30325 = cljs.core.deref.call(null,inst_30318);var inst_30326 = cljs.core.deref.call(null,inst_30319);var inst_30327 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_30325,inst_30326,inst_30309);var inst_30328 = om.core.update_BANG_.call(null,inst_30318,inst_30327);var state_30340__$1 = (function (){var statearr_30356 = state_30340;(statearr_30356[(11)] = inst_30328);
(statearr_30356[(12)] = inst_30324);
return statearr_30356;
})();var statearr_30357_30385 = state_30340__$1;(statearr_30357_30385[(2)] = true);
(statearr_30357_30385[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30341 === (8)))
{var inst_30311 = (state_30340[(8)]);var inst_30314 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30311);var state_30340__$1 = state_30340;var statearr_30358_30386 = state_30340__$1;(statearr_30358_30386[(2)] = inst_30314);
(statearr_30358_30386[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30362 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30362[(0)] = state_machine__11462__auto__);
(statearr_30362[(1)] = (1));
return statearr_30362;
});
var state_machine__11462__auto____1 = (function (state_30340){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30340);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30363){if((e30363 instanceof Object))
{var ex__11465__auto__ = e30363;var statearr_30364_30387 = state_30340;(statearr_30364_30387[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30363;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30388 = state_30340;
state_30340 = G__30388;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30340){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232))
})();var state__11519__auto__ = (function (){var statearr_30365 = f__11518__auto__.call(null);(statearr_30365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232))
;
clustermap.components.filters.select_filter.t30300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232){
return (function (_30302){var self__ = this;
var _30302__$1 = this;return self__.meta30301;
});})(owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232))
;
clustermap.components.filters.select_filter.t30300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232){
return (function (_30302,meta30301__$1){var self__ = this;
var _30302__$1 = this;return (new clustermap.components.filters.select_filter.t30300(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.constructor30225,self__.data,self__.output_schema30229,self__.output_checker30232,self__.map30228,self__.filter_spec,self__.G__30233,self__.input_schema30230,self__.map30227,self__.input_checker30231,self__.validate__6034__auto__,self__.id,self__.ufv__,meta30301__$1));
});})(owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232))
;
clustermap.components.filters.select_filter.__GT_t30300 = ((function (owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232){
return (function __GT_t30300(component_spec__$1,component_filter_rq_chan__$1,owner__$1,constructor30225__$1,data__$1,output_schema30229__$1,output_checker30232__$1,map30228__$1,filter_spec__$1,G__30233__$1,input_schema30230__$1,map30227__$1,input_checker30231__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30301){return (new clustermap.components.filters.select_filter.t30300(component_spec__$1,component_filter_rq_chan__$1,owner__$1,constructor30225__$1,data__$1,output_schema30229__$1,output_checker30232__$1,map30228__$1,filter_spec__$1,G__30233__$1,input_schema30230__$1,map30227__$1,input_checker30231__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30301));
});})(owner,component_filter_rq_chan,map30228,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232))
;
}
return (new clustermap.components.filters.select_filter.t30300(component_spec,component_filter_rq_chan,owner,constructor30225,data,output_schema30229,output_checker30232,map30228,filter_spec,G__30233,input_schema30230,map30227,input_checker30231,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30389 = output_checker30232.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30389))
{var error__6036__auto___30390 = temp__4126__auto___30389;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30225","constructor30225",781784708,null),cljs.core.pr_str.call(null,error__6036__auto___30390)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30390,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30229,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30229,input_schema30230,input_checker30231,output_checker30232))
,schema.core.make_fn_schema.call(null,output_schema30229,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30230], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___30369){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner30224,p__30366){var vec__30368 = p__30366;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30368,(0),null);return component_fnk__7881__auto___30369.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30224,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner30224,var_args){
var p__30366 = null;if (arguments.length > 2) {
  p__30366 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner30224,p__30366);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__30391){
var data__7882__auto__ = cljs.core.first(arglist__30391);
arglist__30391 = cljs.core.next(arglist__30391);
var owner30224 = cljs.core.first(arglist__30391);
var p__30366 = cljs.core.rest(arglist__30391);
return select_filter_component__delegate(data__7882__auto__,owner30224,p__30366);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___30369))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m30226){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m30226);
});
__GT_select_filter_component = function(cursor__7850__auto__,m30226){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m30226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
