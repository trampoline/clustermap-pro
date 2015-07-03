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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__31329(s__31330){return (new cljs.core.LazySeq(null,(function (){var s__31330__$1 = s__31330;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31330__$1);if(temp__4126__auto__)
{var s__31330__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31330__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31330__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31332 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31331 = (0);while(true){
if((i__31331 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__31331);cljs.core.chunk_append.call(null,b__31332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__31333 = (i__31331 + (1));
i__31331 = G__31333;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31332),iter__31329.call(null,cljs.core.chunk_rest.call(null,s__31330__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31332),null);
}
} else
{var o = cljs.core.first.call(null,s__31330__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__31329.call(null,cljs.core.rest.call(null,s__31330__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31337 = schema.core.Any;var input_schema31338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map31334","map31334",-1708443097,null))], null);var input_checker31339 = schema.core.checker.call(null,input_schema31338);var output_checker31340 = schema.core.checker.call(null,output_schema31337);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31337,input_schema31338,input_checker31339,output_checker31340){
return (function get_option_value(G__31341){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31342 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31341], null);var temp__4126__auto___31343 = input_checker31339.call(null,args__6035__auto___31342);if(cljs.core.truth_(temp__4126__auto___31343))
{var error__6036__auto___31344 = temp__4126__auto___31343;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31344)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31344,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31342,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31338,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31334 = G__31341;while(true){
if(cljs.core.map_QMARK_.call(null,map31334))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31334)));
}
var map31336 = plumbing.fnk.schema.safe_get.call(null,map31334,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map31336,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map31336,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map31336,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31335 = plumbing.fnk.schema.safe_get.call(null,map31334,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map31335,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map31335,options,label,id,map31336,validate__6034__auto__,ufv__,output_schema31337,input_schema31338,input_checker31339,output_checker31340){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map31335,options,label,id,map31336,validate__6034__auto__,ufv__,output_schema31337,input_schema31338,input_checker31339,output_checker31340))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31345 = output_checker31340.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31345))
{var error__6036__auto___31346 = temp__4126__auto___31345;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31346)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31346,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31337,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31337,input_schema31338,input_checker31339,output_checker31340))
,schema.core.make_fn_schema.call(null,output_schema31337,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31338], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__31348,value){var map__31350 = p__31348;var map__31350__$1 = ((cljs.core.seq_QMARK_.call(null,map__31350))?cljs.core.apply.call(null,cljs.core.hash_map,map__31350):map__31350);var component_spec = map__31350__$1;var options = cljs.core.get.call(null,map__31350__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__31350__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31350,map__31350__$1,component_spec,options,label){
return (function (p1__31347_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31347_SHARP_));
});})(map__31350,map__31350__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__31351,value){var map__31353 = p__31351;var map__31353__$1 = ((cljs.core.seq_QMARK_.call(null,map__31353))?cljs.core.apply.call(null,cljs.core.hash_map,map__31353):map__31353);var component_spec = map__31353__$1;var options = cljs.core.get.call(null,map__31353__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__31353__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__31354_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31354_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__31355_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31355_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31356 = schema.core.Any;var input_schema31357 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31358 = schema.core.checker.call(null,input_schema31357);var output_checker31359 = schema.core.checker.call(null,output_schema31356);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31356,input_schema31357,input_checker31358,output_checker31359){
return (function render_STAR_(G__31360){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31360], null);var temp__4126__auto___31378 = input_checker31358.call(null,args__6035__auto___31377);if(cljs.core.truth_(temp__4126__auto___31378))
{var error__6036__auto___31379 = temp__4126__auto___31378;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31379)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31379,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31377,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31357,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31360;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31356,input_schema31357,input_checker31358,output_checker31359){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31356,input_schema31357,input_checker31358,output_checker31359))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31356,input_schema31357,input_checker31358,output_checker31359){
return (function iter__31369(s__31370){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31356,input_schema31357,input_checker31358,output_checker31359){
return (function (){var s__31370__$1 = s__31370;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31370__$1);if(temp__4126__auto__)
{var s__31370__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31370__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31370__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31372 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31371 = (0);while(true){
if((i__31371 < size__4376__auto__))
{var map__31375 = cljs.core._nth.call(null,c__4375__auto__,i__31371);var map__31375__$1 = ((cljs.core.seq_QMARK_.call(null,map__31375))?cljs.core.apply.call(null,cljs.core.hash_map,map__31375):map__31375);var option = map__31375__$1;var label__$1 = cljs.core.get.call(null,map__31375__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31375__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31372,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31380 = (i__31371 + (1));
i__31371 = G__31380;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31372),iter__31369.call(null,cljs.core.chunk_rest.call(null,s__31370__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31372),null);
}
} else
{var map__31376 = cljs.core.first.call(null,s__31370__$2);var map__31376__$1 = ((cljs.core.seq_QMARK_.call(null,map__31376))?cljs.core.apply.call(null,cljs.core.hash_map,map__31376):map__31376);var option = map__31376__$1;var label__$1 = cljs.core.get.call(null,map__31376__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31376__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31369.call(null,cljs.core.rest.call(null,s__31370__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31356,input_schema31357,input_checker31358,output_checker31359))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31356,input_schema31357,input_checker31358,output_checker31359))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31381 = output_checker31359.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31381))
{var error__6036__auto___31382 = temp__4126__auto___31381;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31382)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31382,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31356,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31356,input_schema31357,input_checker31358,output_checker31359))
,schema.core.make_fn_schema.call(null,output_schema31356,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31357], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31528 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31388 = schema.core.Any;var input_schema31389 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31386","map31386",-547966132,null))], null);var input_checker31390 = schema.core.checker.call(null,input_schema31389);var output_checker31391 = schema.core.checker.call(null,output_schema31388);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391){
return (function constructor31384(G__31392){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31392], null);var temp__4126__auto___31530 = input_checker31390.call(null,args__6035__auto___31529);if(cljs.core.truth_(temp__4126__auto___31530))
{var error__6036__auto___31531 = temp__4126__auto___31530;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31384","constructor31384",307387516,null),cljs.core.pr_str.call(null,error__6036__auto___31531)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31531,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31529,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31389,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31386 = G__31392;while(true){
if(cljs.core.map_QMARK_.call(null,map31386))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31386)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31386,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31387 = plumbing.fnk.schema.safe_get.call(null,map31386,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31387,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31386,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t31459 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t31459 = (function (component_spec,component_filter_rq_chan,input_schema31389,owner,data,G__31392,map31386,filter_spec,output_schema31388,input_checker31390,validate__6034__auto__,id,constructor31384,ufv__,map31387,output_checker31391,meta31460){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema31389 = input_schema31389;
this.owner = owner;
this.data = data;
this.G__31392 = G__31392;
this.map31386 = map31386;
this.filter_spec = filter_spec;
this.output_schema31388 = output_schema31388;
this.input_checker31390 = input_checker31390;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.constructor31384 = constructor31384;
this.ufv__ = ufv__;
this.map31387 = map31387;
this.output_checker31391 = output_checker31391;
this.meta31460 = meta31460;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t31459.cljs$lang$type = true;
clustermap.components.filters.select_filter.t31459.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t31459";
clustermap.components.filters.select_filter.t31459.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t31459");
});})(owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391))
;
clustermap.components.filters.select_filter.t31459.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t31459.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391))
;
clustermap.components.filters.select_filter.t31459.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t31459.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391))
;
clustermap.components.filters.select_filter.t31459.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t31459.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391){
return (function (state_31499){var state_val_31500 = (state_31499[(1)]);if((state_val_31500 === (7)))
{var inst_31490 = (state_31499[(2)]);var state_31499__$1 = state_31499;if(cljs.core.truth_(inst_31490))
{var statearr_31501_31532 = state_31499__$1;(statearr_31501_31532[(1)] = (11));
} else
{var statearr_31502_31533 = state_31499__$1;(statearr_31502_31533[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31500 === (1)))
{var state_31499__$1 = state_31499;var statearr_31503_31534 = state_31499__$1;(statearr_31503_31534[(2)] = null);
(statearr_31503_31534[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31500 === (4)))
{var inst_31464 = (state_31499[(7)]);var inst_31464__$1 = (state_31499[(2)]);var state_31499__$1 = (function (){var statearr_31504 = state_31499;(statearr_31504[(7)] = inst_31464__$1);
return statearr_31504;
})();if(cljs.core.truth_(inst_31464__$1))
{var statearr_31505_31535 = state_31499__$1;(statearr_31505_31535[(1)] = (5));
} else
{var statearr_31506_31536 = state_31499__$1;(statearr_31506_31536[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31500 === (13)))
{var inst_31495 = (state_31499[(2)]);var state_31499__$1 = state_31499;var statearr_31507_31537 = state_31499__$1;(statearr_31507_31537[(2)] = inst_31495);
(statearr_31507_31537[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31500 === (6)))
{var state_31499__$1 = state_31499;var statearr_31508_31538 = state_31499__$1;(statearr_31508_31538[(2)] = null);
(statearr_31508_31538[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31500 === (3)))
{var inst_31497 = (state_31499[(2)]);var state_31499__$1 = state_31499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31499__$1,inst_31497);
} else
{if((state_val_31500 === (12)))
{var state_31499__$1 = state_31499;var statearr_31509_31539 = state_31499__$1;(statearr_31509_31539[(2)] = null);
(statearr_31509_31539[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31500 === (2)))
{var state_31499__$1 = state_31499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31499__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31500 === (11)))
{var state_31499__$1 = state_31499;var statearr_31510_31540 = state_31499__$1;(statearr_31510_31540[(2)] = null);
(statearr_31510_31540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31500 === (9)))
{var inst_31470 = (state_31499[(8)]);var state_31499__$1 = state_31499;var statearr_31511_31541 = state_31499__$1;(statearr_31511_31541[(2)] = inst_31470);
(statearr_31511_31541[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31500 === (5)))
{var inst_31464 = (state_31499[(7)]);var inst_31470 = (state_31499[(8)]);var inst_31467 = cljs.core.nth.call(null,inst_31464,(0),null);var inst_31468 = cljs.core.nth.call(null,inst_31464,(1),null);var inst_31470__$1 = om.core.get_props.call(null,self__.owner);var inst_31471 = cljs.core.seq_QMARK_.call(null,inst_31470__$1);var state_31499__$1 = (function (){var statearr_31512 = state_31499;(statearr_31512[(9)] = inst_31468);
(statearr_31512[(10)] = inst_31467);
(statearr_31512[(8)] = inst_31470__$1);
return statearr_31512;
})();if(inst_31471)
{var statearr_31513_31542 = state_31499__$1;(statearr_31513_31542[(1)] = (8));
} else
{var statearr_31514_31543 = state_31499__$1;(statearr_31514_31543[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31500 === (10)))
{var inst_31468 = (state_31499[(9)]);var inst_31476 = (state_31499[(2)]);var inst_31477 = cljs.core.get.call(null,inst_31476,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31478 = cljs.core.get.call(null,inst_31476,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31479 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31480 = ["SELECT-FILTER-RQ",self__.id,inst_31468];var inst_31481 = (new cljs.core.PersistentVector(null,3,(5),inst_31479,inst_31480,null));var inst_31482 = cljs.core.clj__GT_js.call(null,inst_31481);var inst_31483 = console.log(inst_31482);var inst_31484 = cljs.core.deref.call(null,inst_31477);var inst_31485 = cljs.core.deref.call(null,inst_31478);var inst_31486 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_31484,inst_31485,inst_31468);var inst_31487 = om.core.update_BANG_.call(null,inst_31477,inst_31486);var state_31499__$1 = (function (){var statearr_31515 = state_31499;(statearr_31515[(11)] = inst_31487);
(statearr_31515[(12)] = inst_31483);
return statearr_31515;
})();var statearr_31516_31544 = state_31499__$1;(statearr_31516_31544[(2)] = true);
(statearr_31516_31544[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31500 === (8)))
{var inst_31470 = (state_31499[(8)]);var inst_31473 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31470);var state_31499__$1 = state_31499;var statearr_31517_31545 = state_31499__$1;(statearr_31517_31545[(2)] = inst_31473);
(statearr_31517_31545[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31521 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31521[(0)] = state_machine__9111__auto__);
(statearr_31521[(1)] = (1));
return statearr_31521;
});
var state_machine__9111__auto____1 = (function (state_31499){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31499);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31522){if((e31522 instanceof Object))
{var ex__9114__auto__ = e31522;var statearr_31523_31546 = state_31499;(statearr_31523_31546[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31499);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31522;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31547 = state_31499;
state_31499 = G__31547;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31499){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391))
})();var state__9127__auto__ = (function (){var statearr_31524 = f__9126__auto__.call(null);(statearr_31524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391))
;
clustermap.components.filters.select_filter.t31459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391){
return (function (_31461){var self__ = this;
var _31461__$1 = this;return self__.meta31460;
});})(owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391))
;
clustermap.components.filters.select_filter.t31459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391){
return (function (_31461,meta31460__$1){var self__ = this;
var _31461__$1 = this;return (new clustermap.components.filters.select_filter.t31459(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema31389,self__.owner,self__.data,self__.G__31392,self__.map31386,self__.filter_spec,self__.output_schema31388,self__.input_checker31390,self__.validate__6034__auto__,self__.id,self__.constructor31384,self__.ufv__,self__.map31387,self__.output_checker31391,meta31460__$1));
});})(owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391))
;
clustermap.components.filters.select_filter.__GT_t31459 = ((function (owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391){
return (function __GT_t31459(component_spec__$1,component_filter_rq_chan__$1,input_schema31389__$1,owner__$1,data__$1,G__31392__$1,map31386__$1,filter_spec__$1,output_schema31388__$1,input_checker31390__$1,validate__6034__auto____$1,id__$1,constructor31384__$1,ufv____$1,map31387__$1,output_checker31391__$1,meta31460){return (new clustermap.components.filters.select_filter.t31459(component_spec__$1,component_filter_rq_chan__$1,input_schema31389__$1,owner__$1,data__$1,G__31392__$1,map31386__$1,filter_spec__$1,output_schema31388__$1,input_checker31390__$1,validate__6034__auto____$1,id__$1,constructor31384__$1,ufv____$1,map31387__$1,output_checker31391__$1,meta31460));
});})(owner,component_filter_rq_chan,map31387,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391))
;
}
return (new clustermap.components.filters.select_filter.t31459(component_spec,component_filter_rq_chan,input_schema31389,owner,data,G__31392,map31386,filter_spec,output_schema31388,input_checker31390,validate__6034__auto__,id,constructor31384,ufv__,map31387,output_checker31391,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31548 = output_checker31391.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31548))
{var error__6036__auto___31549 = temp__4126__auto___31548;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31384","constructor31384",307387516,null),cljs.core.pr_str.call(null,error__6036__auto___31549)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31549,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31388,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31388,input_schema31389,input_checker31390,output_checker31391))
,schema.core.make_fn_schema.call(null,output_schema31388,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31389], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31528){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner31383,p__31525){var vec__31527 = p__31525;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31527,(0),null);return component_fnk__7881__auto___31528.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31383,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner31383,var_args){
var p__31525 = null;if (arguments.length > 2) {
  p__31525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner31383,p__31525);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31550){
var data__7882__auto__ = cljs.core.first(arglist__31550);
arglist__31550 = cljs.core.next(arglist__31550);
var owner31383 = cljs.core.first(arglist__31550);
var p__31525 = cljs.core.rest(arglist__31550);
return select_filter_component__delegate(data__7882__auto__,owner31383,p__31525);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31528))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m31385){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m31385);
});
__GT_select_filter_component = function(cursor__7850__auto__,m31385){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m31385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
