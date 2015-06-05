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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30544(s__30545){return (new cljs.core.LazySeq(null,(function (){var s__30545__$1 = s__30545;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30545__$1);if(temp__4126__auto__)
{var s__30545__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30545__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30545__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30547 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30546 = (0);while(true){
if((i__30546 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30546);cljs.core.chunk_append.call(null,b__30547,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30548 = (i__30546 + (1));
i__30546 = G__30548;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30547),iter__30544.call(null,cljs.core.chunk_rest.call(null,s__30545__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30547),null);
}
} else
{var o = cljs.core.first.call(null,s__30545__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30544.call(null,cljs.core.rest.call(null,s__30545__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30552 = schema.core.Any;var input_schema30553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30549","map30549",-199538921,null))], null);var input_checker30554 = schema.core.checker.call(null,input_schema30553);var output_checker30555 = schema.core.checker.call(null,output_schema30552);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30552,input_schema30553,input_checker30554,output_checker30555){
return (function get_option_value(G__30556){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30556], null);var temp__4126__auto___30558 = input_checker30554.call(null,args__6035__auto___30557);if(cljs.core.truth_(temp__4126__auto___30558))
{var error__6036__auto___30559 = temp__4126__auto___30558;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30559)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30559,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30557,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30553,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30549 = G__30556;while(true){
if(cljs.core.map_QMARK_.call(null,map30549))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30549)));
}
var map30551 = plumbing.fnk.schema.safe_get.call(null,map30549,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map30551,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map30551,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map30551,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30550 = plumbing.fnk.schema.safe_get.call(null,map30549,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map30550,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map30550,options,label,id,map30551,validate__6034__auto__,ufv__,output_schema30552,input_schema30553,input_checker30554,output_checker30555){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map30550,options,label,id,map30551,validate__6034__auto__,ufv__,output_schema30552,input_schema30553,input_checker30554,output_checker30555))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30560 = output_checker30555.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30560))
{var error__6036__auto___30561 = temp__4126__auto___30560;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30561)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30561,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30552,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30552,input_schema30553,input_checker30554,output_checker30555))
,schema.core.make_fn_schema.call(null,output_schema30552,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30553], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__30563,value){var map__30565 = p__30563;var map__30565__$1 = ((cljs.core.seq_QMARK_.call(null,map__30565))?cljs.core.apply.call(null,cljs.core.hash_map,map__30565):map__30565);var component_spec = map__30565__$1;var options = cljs.core.get.call(null,map__30565__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30565__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__30565,map__30565__$1,component_spec,options,label){
return (function (p1__30562_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30562_SHARP_));
});})(map__30565,map__30565__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30566,value){var map__30568 = p__30566;var map__30568__$1 = ((cljs.core.seq_QMARK_.call(null,map__30568))?cljs.core.apply.call(null,cljs.core.hash_map,map__30568):map__30568);var component_spec = map__30568__$1;var options = cljs.core.get.call(null,map__30568__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30568__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30569_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30569_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__30570_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30570_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30571 = schema.core.Any;var input_schema30572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30573 = schema.core.checker.call(null,input_schema30572);var output_checker30574 = schema.core.checker.call(null,output_schema30571);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30571,input_schema30572,input_checker30573,output_checker30574){
return (function render_STAR_(G__30575){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30592 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30575], null);var temp__4126__auto___30593 = input_checker30573.call(null,args__6035__auto___30592);if(cljs.core.truth_(temp__4126__auto___30593))
{var error__6036__auto___30594 = temp__4126__auto___30593;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30594)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30594,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30592,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30572,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30575;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30571,input_schema30572,input_checker30573,output_checker30574){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30571,input_schema30572,input_checker30573,output_checker30574))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30571,input_schema30572,input_checker30573,output_checker30574){
return (function iter__30584(s__30585){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30571,input_schema30572,input_checker30573,output_checker30574){
return (function (){var s__30585__$1 = s__30585;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30585__$1);if(temp__4126__auto__)
{var s__30585__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30585__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30585__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30587 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30586 = (0);while(true){
if((i__30586 < size__4376__auto__))
{var map__30590 = cljs.core._nth.call(null,c__4375__auto__,i__30586);var map__30590__$1 = ((cljs.core.seq_QMARK_.call(null,map__30590))?cljs.core.apply.call(null,cljs.core.hash_map,map__30590):map__30590);var option = map__30590__$1;var label__$1 = cljs.core.get.call(null,map__30590__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30590__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30587,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30595 = (i__30586 + (1));
i__30586 = G__30595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30587),iter__30584.call(null,cljs.core.chunk_rest.call(null,s__30585__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30587),null);
}
} else
{var map__30591 = cljs.core.first.call(null,s__30585__$2);var map__30591__$1 = ((cljs.core.seq_QMARK_.call(null,map__30591))?cljs.core.apply.call(null,cljs.core.hash_map,map__30591):map__30591);var option = map__30591__$1;var label__$1 = cljs.core.get.call(null,map__30591__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30591__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30584.call(null,cljs.core.rest.call(null,s__30585__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30571,input_schema30572,input_checker30573,output_checker30574))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30571,input_schema30572,input_checker30573,output_checker30574))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30596 = output_checker30574.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30596))
{var error__6036__auto___30597 = temp__4126__auto___30596;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30597)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30597,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30571,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30571,input_schema30572,input_checker30573,output_checker30574))
,schema.core.make_fn_schema.call(null,output_schema30571,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30572], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30743 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30603 = schema.core.Any;var input_schema30604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30601","map30601",145908252,null))], null);var input_checker30605 = schema.core.checker.call(null,input_schema30604);var output_checker30606 = schema.core.checker.call(null,output_schema30603);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606){
return (function constructor30599(G__30607){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30744 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30607], null);var temp__4126__auto___30745 = input_checker30605.call(null,args__6035__auto___30744);if(cljs.core.truth_(temp__4126__auto___30745))
{var error__6036__auto___30746 = temp__4126__auto___30745;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30599","constructor30599",744806893,null),cljs.core.pr_str.call(null,error__6036__auto___30746)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30746,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30744,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30604,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30601 = G__30607;while(true){
if(cljs.core.map_QMARK_.call(null,map30601))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30601)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30601,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30602 = plumbing.fnk.schema.safe_get.call(null,map30601,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30602,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30601,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t30674 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t30674 = (function (component_spec,component_filter_rq_chan,output_schema30603,owner,data,constructor30599,filter_spec,input_schema30604,output_checker30606,validate__6034__auto__,id,map30601,map30602,ufv__,input_checker30605,G__30607,meta30675){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_schema30603 = output_schema30603;
this.owner = owner;
this.data = data;
this.constructor30599 = constructor30599;
this.filter_spec = filter_spec;
this.input_schema30604 = input_schema30604;
this.output_checker30606 = output_checker30606;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map30601 = map30601;
this.map30602 = map30602;
this.ufv__ = ufv__;
this.input_checker30605 = input_checker30605;
this.G__30607 = G__30607;
this.meta30675 = meta30675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t30674.cljs$lang$type = true;
clustermap.components.filters.select_filter.t30674.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t30674";
clustermap.components.filters.select_filter.t30674.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t30674");
});})(owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606))
;
clustermap.components.filters.select_filter.t30674.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t30674.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606))
;
clustermap.components.filters.select_filter.t30674.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t30674.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606))
;
clustermap.components.filters.select_filter.t30674.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t30674.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606){
return (function (state_30714){var state_val_30715 = (state_30714[(1)]);if((state_val_30715 === (7)))
{var inst_30705 = (state_30714[(2)]);var state_30714__$1 = state_30714;if(cljs.core.truth_(inst_30705))
{var statearr_30716_30747 = state_30714__$1;(statearr_30716_30747[(1)] = (11));
} else
{var statearr_30717_30748 = state_30714__$1;(statearr_30717_30748[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (1)))
{var state_30714__$1 = state_30714;var statearr_30718_30749 = state_30714__$1;(statearr_30718_30749[(2)] = null);
(statearr_30718_30749[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (4)))
{var inst_30679 = (state_30714[(7)]);var inst_30679__$1 = (state_30714[(2)]);var state_30714__$1 = (function (){var statearr_30719 = state_30714;(statearr_30719[(7)] = inst_30679__$1);
return statearr_30719;
})();if(cljs.core.truth_(inst_30679__$1))
{var statearr_30720_30750 = state_30714__$1;(statearr_30720_30750[(1)] = (5));
} else
{var statearr_30721_30751 = state_30714__$1;(statearr_30721_30751[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (13)))
{var inst_30710 = (state_30714[(2)]);var state_30714__$1 = state_30714;var statearr_30722_30752 = state_30714__$1;(statearr_30722_30752[(2)] = inst_30710);
(statearr_30722_30752[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (6)))
{var state_30714__$1 = state_30714;var statearr_30723_30753 = state_30714__$1;(statearr_30723_30753[(2)] = null);
(statearr_30723_30753[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (3)))
{var inst_30712 = (state_30714[(2)]);var state_30714__$1 = state_30714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30714__$1,inst_30712);
} else
{if((state_val_30715 === (12)))
{var state_30714__$1 = state_30714;var statearr_30724_30754 = state_30714__$1;(statearr_30724_30754[(2)] = null);
(statearr_30724_30754[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (2)))
{var state_30714__$1 = state_30714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30714__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30715 === (11)))
{var state_30714__$1 = state_30714;var statearr_30725_30755 = state_30714__$1;(statearr_30725_30755[(2)] = null);
(statearr_30725_30755[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (9)))
{var inst_30685 = (state_30714[(8)]);var state_30714__$1 = state_30714;var statearr_30726_30756 = state_30714__$1;(statearr_30726_30756[(2)] = inst_30685);
(statearr_30726_30756[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (5)))
{var inst_30685 = (state_30714[(8)]);var inst_30679 = (state_30714[(7)]);var inst_30682 = cljs.core.nth.call(null,inst_30679,(0),null);var inst_30683 = cljs.core.nth.call(null,inst_30679,(1),null);var inst_30685__$1 = om.core.get_props.call(null,self__.owner);var inst_30686 = cljs.core.seq_QMARK_.call(null,inst_30685__$1);var state_30714__$1 = (function (){var statearr_30727 = state_30714;(statearr_30727[(9)] = inst_30683);
(statearr_30727[(10)] = inst_30682);
(statearr_30727[(8)] = inst_30685__$1);
return statearr_30727;
})();if(inst_30686)
{var statearr_30728_30757 = state_30714__$1;(statearr_30728_30757[(1)] = (8));
} else
{var statearr_30729_30758 = state_30714__$1;(statearr_30729_30758[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (10)))
{var inst_30683 = (state_30714[(9)]);var inst_30691 = (state_30714[(2)]);var inst_30692 = cljs.core.get.call(null,inst_30691,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30693 = cljs.core.get.call(null,inst_30691,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30694 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30695 = ["SELECT-FILTER-RQ",self__.id,inst_30683];var inst_30696 = (new cljs.core.PersistentVector(null,3,(5),inst_30694,inst_30695,null));var inst_30697 = cljs.core.clj__GT_js.call(null,inst_30696);var inst_30698 = console.log(inst_30697);var inst_30699 = cljs.core.deref.call(null,inst_30692);var inst_30700 = cljs.core.deref.call(null,inst_30693);var inst_30701 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_30699,inst_30700,inst_30683);var inst_30702 = om.core.update_BANG_.call(null,inst_30692,inst_30701);var state_30714__$1 = (function (){var statearr_30730 = state_30714;(statearr_30730[(11)] = inst_30698);
(statearr_30730[(12)] = inst_30702);
return statearr_30730;
})();var statearr_30731_30759 = state_30714__$1;(statearr_30731_30759[(2)] = true);
(statearr_30731_30759[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (8)))
{var inst_30685 = (state_30714[(8)]);var inst_30688 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30685);var state_30714__$1 = state_30714;var statearr_30732_30760 = state_30714__$1;(statearr_30732_30760[(2)] = inst_30688);
(statearr_30732_30760[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30736 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30736[(0)] = state_machine__9111__auto__);
(statearr_30736[(1)] = (1));
return statearr_30736;
});
var state_machine__9111__auto____1 = (function (state_30714){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30714);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30737){if((e30737 instanceof Object))
{var ex__9114__auto__ = e30737;var statearr_30738_30761 = state_30714;(statearr_30738_30761[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30714);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30737;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30762 = state_30714;
state_30714 = G__30762;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30714){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606))
})();var state__9127__auto__ = (function (){var statearr_30739 = f__9126__auto__.call(null);(statearr_30739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30739;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606))
;
clustermap.components.filters.select_filter.t30674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606){
return (function (_30676){var self__ = this;
var _30676__$1 = this;return self__.meta30675;
});})(owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606))
;
clustermap.components.filters.select_filter.t30674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606){
return (function (_30676,meta30675__$1){var self__ = this;
var _30676__$1 = this;return (new clustermap.components.filters.select_filter.t30674(self__.component_spec,self__.component_filter_rq_chan,self__.output_schema30603,self__.owner,self__.data,self__.constructor30599,self__.filter_spec,self__.input_schema30604,self__.output_checker30606,self__.validate__6034__auto__,self__.id,self__.map30601,self__.map30602,self__.ufv__,self__.input_checker30605,self__.G__30607,meta30675__$1));
});})(owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606))
;
clustermap.components.filters.select_filter.__GT_t30674 = ((function (owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606){
return (function __GT_t30674(component_spec__$1,component_filter_rq_chan__$1,output_schema30603__$1,owner__$1,data__$1,constructor30599__$1,filter_spec__$1,input_schema30604__$1,output_checker30606__$1,validate__6034__auto____$1,id__$1,map30601__$1,map30602__$1,ufv____$1,input_checker30605__$1,G__30607__$1,meta30675){return (new clustermap.components.filters.select_filter.t30674(component_spec__$1,component_filter_rq_chan__$1,output_schema30603__$1,owner__$1,data__$1,constructor30599__$1,filter_spec__$1,input_schema30604__$1,output_checker30606__$1,validate__6034__auto____$1,id__$1,map30601__$1,map30602__$1,ufv____$1,input_checker30605__$1,G__30607__$1,meta30675));
});})(owner,component_filter_rq_chan,map30602,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606))
;
}
return (new clustermap.components.filters.select_filter.t30674(component_spec,component_filter_rq_chan,output_schema30603,owner,data,constructor30599,filter_spec,input_schema30604,output_checker30606,validate__6034__auto__,id,map30601,map30602,ufv__,input_checker30605,G__30607,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30763 = output_checker30606.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30763))
{var error__6036__auto___30764 = temp__4126__auto___30763;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30599","constructor30599",744806893,null),cljs.core.pr_str.call(null,error__6036__auto___30764)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30764,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30603,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30603,input_schema30604,input_checker30605,output_checker30606))
,schema.core.make_fn_schema.call(null,output_schema30603,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30604], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___30743){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner30598,p__30740){var vec__30742 = p__30740;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30742,(0),null);return component_fnk__7881__auto___30743.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30598,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner30598,var_args){
var p__30740 = null;if (arguments.length > 2) {
  p__30740 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner30598,p__30740);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__30765){
var data__7882__auto__ = cljs.core.first(arglist__30765);
arglist__30765 = cljs.core.next(arglist__30765);
var owner30598 = cljs.core.first(arglist__30765);
var p__30740 = cljs.core.rest(arglist__30765);
return select_filter_component__delegate(data__7882__auto__,owner30598,p__30740);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___30743))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m30600){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m30600);
});
__GT_select_filter_component = function(cursor__7850__auto__,m30600){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m30600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
