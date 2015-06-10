// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.checkboxes_filter');
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
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clustermap.filters');
clustermap.components.filters.checkboxes_filter.make_sequential = (function make_sequential(s){if((s == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,s))
{return s;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);

}
}
});
/**
* return a map of options keyed by value
*/
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30232(s__30233){return (new cljs.core.LazySeq(null,(function (){var s__30233__$1 = s__30233;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30233__$1);if(temp__4126__auto__)
{var s__30233__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30233__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30233__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30235 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30234 = (0);while(true){
if((i__30234 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30234);cljs.core.chunk_append.call(null,b__30235,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30236 = (i__30234 + (1));
i__30234 = G__30236;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30235),iter__30232.call(null,cljs.core.chunk_rest.call(null,s__30233__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30235),null);
}
} else
{var o = cljs.core.first.call(null,s__30233__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30232.call(null,cljs.core.rest.call(null,s__30233__$2)));
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
* given a combined filter, extract the set of option ids this represents
*/
clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter = (function extract_option_values_from_filter(options,f){var fs = cljs.core.set.call(null,clustermap.filters.de_or_filters.call(null,f));return cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.filter.call(null,((function (fs){
return (function (p1__30237_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30237_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30240 = options;var G__30240__$1 = (((G__30240 == null))?null:cljs.core.filter.call(null,((function (G__30240,values__$1){
return (function (p1__30238_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30238_SHARP_));
});})(G__30240,values__$1))
,G__30240));var G__30240__$2 = (((G__30240__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30240__$1));return G__30240__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30242,values){var map__30244 = p__30242;var map__30244__$1 = ((cljs.core.seq_QMARK_.call(null,map__30244))?cljs.core.apply.call(null,cljs.core.hash_map,map__30244):map__30244);var component_spec = map__30244__$1;var options = cljs.core.get.call(null,map__30244__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30244__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30244,map__30244__$1,component_spec,options,label){
return (function (p1__30241_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30241_SHARP_));
});})(values__$1,map__30244,map__30244__$1,component_spec,options,label))
,options);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* given a seq of option values set the filters.
* returns an updated filter-spec value, but doesn't update the cursor
*/
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30245,values){var map__30247 = p__30245;var map__30247__$1 = ((cljs.core.seq_QMARK_.call(null,map__30247))?cljs.core.apply.call(null,cljs.core.hash_map,map__30247):map__30247);var component_spec = map__30247__$1;var options = cljs.core.get.call(null,map__30247__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30247__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30248){var map__30250 = p__30248;var map__30250__$1 = ((cljs.core.seq_QMARK_.call(null,map__30250))?cljs.core.apply.call(null,cljs.core.hash_map,map__30250):map__30250);var component_spec = map__30250__$1;var tags = cljs.core.get.call(null,map__30250__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30251){var map__30253 = p__30251;var map__30253__$1 = ((cljs.core.seq_QMARK_.call(null,map__30253))?cljs.core.apply.call(null,cljs.core.hash_map,map__30253):map__30253);var component_spec = map__30253__$1;var tags = cljs.core.get.call(null,map__30253__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30253__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30254 = schema.core.Any;var input_schema30255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30256 = schema.core.checker.call(null,input_schema30255);var output_checker30257 = schema.core.checker.call(null,output_schema30254);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257){
return (function render_STAR_(G__30258){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30258], null);var temp__4126__auto___30294 = input_checker30256.call(null,args__6035__auto___30293);if(cljs.core.truth_(temp__4126__auto___30294))
{var error__6036__auto___30295 = temp__4126__auto___30294;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30295)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30295,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30293,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30255,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30258;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30276 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30276))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30276)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30276))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257){
return (function iter__30277(s__30278){return (new cljs.core.LazySeq(null,((function (attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257){
return (function (){var s__30278__$1 = s__30278;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30278__$1);if(temp__4126__auto__)
{var s__30278__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30278__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30278__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30280 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30279 = (0);while(true){
if((i__30279 < size__4376__auto__))
{var map__30283 = cljs.core._nth.call(null,c__4375__auto__,i__30279);var map__30283__$1 = ((cljs.core.seq_QMARK_.call(null,map__30283))?cljs.core.apply.call(null,cljs.core.hash_map,map__30283):map__30283);var filter = cljs.core.get.call(null,map__30283__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30283__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30283__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30280,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30279,map__30283,map__30283__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30280,s__30278__$2,temp__4126__auto__,attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30279,map__30283,map__30283__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30280,s__30278__$2,temp__4126__auto__,attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30296 = (i__30279 + (1));
i__30279 = G__30296;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30280),iter__30277.call(null,cljs.core.chunk_rest.call(null,s__30278__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30280),null);
}
} else
{var map__30284 = cljs.core.first.call(null,s__30278__$2);var map__30284__$1 = ((cljs.core.seq_QMARK_.call(null,map__30284))?cljs.core.apply.call(null,cljs.core.hash_map,map__30284):map__30284);var filter = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30284,map__30284__$1,filter,label__$1,value,s__30278__$2,temp__4126__auto__,attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30284,map__30284__$1,filter,label__$1,value,s__30278__$2,temp__4126__auto__,attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30277.call(null,cljs.core.rest.call(null,s__30278__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257))
,null,null));
});})(attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30276),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257){
return (function iter__30285(s__30286){return (new cljs.core.LazySeq(null,((function (attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257){
return (function (){var s__30286__$1 = s__30286;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30286__$1);if(temp__4126__auto__)
{var s__30286__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30286__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30286__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30288 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30287 = (0);while(true){
if((i__30287 < size__4376__auto__))
{var map__30291 = cljs.core._nth.call(null,c__4375__auto__,i__30287);var map__30291__$1 = ((cljs.core.seq_QMARK_.call(null,map__30291))?cljs.core.apply.call(null,cljs.core.hash_map,map__30291):map__30291);var filter = cljs.core.get.call(null,map__30291__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30291__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30291__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30288,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30287,map__30291,map__30291__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30288,s__30286__$2,temp__4126__auto__,attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30287,map__30291,map__30291__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30288,s__30286__$2,temp__4126__auto__,attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30297 = (i__30287 + (1));
i__30287 = G__30297;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30288),iter__30285.call(null,cljs.core.chunk_rest.call(null,s__30286__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30288),null);
}
} else
{var map__30292 = cljs.core.first.call(null,s__30286__$2);var map__30292__$1 = ((cljs.core.seq_QMARK_.call(null,map__30292))?cljs.core.apply.call(null,cljs.core.hash_map,map__30292):map__30292);var filter = cljs.core.get.call(null,map__30292__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30292__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30292__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30292,map__30292__$1,filter,label__$1,value,s__30286__$2,temp__4126__auto__,attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30292,map__30292__$1,filter,label__$1,value,s__30286__$2,temp__4126__auto__,attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30285.call(null,cljs.core.rest.call(null,s__30286__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257))
,null,null));
});})(attrs30276,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30298 = output_checker30257.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30298))
{var error__6036__auto___30299 = temp__4126__auto___30298;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30299)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30299,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30254,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30254,input_schema30255,input_checker30256,output_checker30257))
,schema.core.make_fn_schema.call(null,output_schema30254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30255], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30445 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30305 = schema.core.Any;var input_schema30306 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30303","map30303",2123109677,null))], null);var input_checker30307 = schema.core.checker.call(null,input_schema30306);var output_checker30308 = schema.core.checker.call(null,output_schema30305);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308){
return (function constructor30301(G__30309){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30309], null);var temp__4126__auto___30447 = input_checker30307.call(null,args__6035__auto___30446);if(cljs.core.truth_(temp__4126__auto___30447))
{var error__6036__auto___30448 = temp__4126__auto___30447;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30301","constructor30301",-42120639,null),cljs.core.pr_str.call(null,error__6036__auto___30448)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30448,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30446,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30306,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30303 = G__30309;while(true){
if(cljs.core.map_QMARK_.call(null,map30303))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30303)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30303,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30304 = plumbing.fnk.schema.safe_get.call(null,map30303,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30304,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30303,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30376 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30376 = (function (component_spec,component_filter_rq_chan,constructor30301,owner,output_schema30305,data,input_checker30307,map30304,map30303,filter_spec,G__30309,validate__6034__auto__,id,input_schema30306,ufv__,output_checker30308,meta30377){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.constructor30301 = constructor30301;
this.owner = owner;
this.output_schema30305 = output_schema30305;
this.data = data;
this.input_checker30307 = input_checker30307;
this.map30304 = map30304;
this.map30303 = map30303;
this.filter_spec = filter_spec;
this.G__30309 = G__30309;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.input_schema30306 = input_schema30306;
this.ufv__ = ufv__;
this.output_checker30308 = output_checker30308;
this.meta30377 = meta30377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30376.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30376.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30376";
clustermap.components.filters.checkboxes_filter.t30376.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30376");
});})(owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308))
;
clustermap.components.filters.checkboxes_filter.t30376.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30376.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308))
;
clustermap.components.filters.checkboxes_filter.t30376.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30376.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308))
;
clustermap.components.filters.checkboxes_filter.t30376.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30376.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308){
return (function (state_30416){var state_val_30417 = (state_30416[(1)]);if((state_val_30417 === (7)))
{var inst_30407 = (state_30416[(2)]);var state_30416__$1 = state_30416;if(cljs.core.truth_(inst_30407))
{var statearr_30418_30449 = state_30416__$1;(statearr_30418_30449[(1)] = (11));
} else
{var statearr_30419_30450 = state_30416__$1;(statearr_30419_30450[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30417 === (1)))
{var state_30416__$1 = state_30416;var statearr_30420_30451 = state_30416__$1;(statearr_30420_30451[(2)] = null);
(statearr_30420_30451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30417 === (4)))
{var inst_30381 = (state_30416[(7)]);var inst_30381__$1 = (state_30416[(2)]);var state_30416__$1 = (function (){var statearr_30421 = state_30416;(statearr_30421[(7)] = inst_30381__$1);
return statearr_30421;
})();if(cljs.core.truth_(inst_30381__$1))
{var statearr_30422_30452 = state_30416__$1;(statearr_30422_30452[(1)] = (5));
} else
{var statearr_30423_30453 = state_30416__$1;(statearr_30423_30453[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30417 === (13)))
{var inst_30412 = (state_30416[(2)]);var state_30416__$1 = state_30416;var statearr_30424_30454 = state_30416__$1;(statearr_30424_30454[(2)] = inst_30412);
(statearr_30424_30454[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30417 === (6)))
{var state_30416__$1 = state_30416;var statearr_30425_30455 = state_30416__$1;(statearr_30425_30455[(2)] = null);
(statearr_30425_30455[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30417 === (3)))
{var inst_30414 = (state_30416[(2)]);var state_30416__$1 = state_30416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30416__$1,inst_30414);
} else
{if((state_val_30417 === (12)))
{var state_30416__$1 = state_30416;var statearr_30426_30456 = state_30416__$1;(statearr_30426_30456[(2)] = null);
(statearr_30426_30456[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30417 === (2)))
{var state_30416__$1 = state_30416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30416__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30417 === (11)))
{var state_30416__$1 = state_30416;var statearr_30427_30457 = state_30416__$1;(statearr_30427_30457[(2)] = null);
(statearr_30427_30457[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30417 === (9)))
{var inst_30387 = (state_30416[(8)]);var state_30416__$1 = state_30416;var statearr_30428_30458 = state_30416__$1;(statearr_30428_30458[(2)] = inst_30387);
(statearr_30428_30458[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30417 === (5)))
{var inst_30387 = (state_30416[(8)]);var inst_30381 = (state_30416[(7)]);var inst_30384 = cljs.core.nth.call(null,inst_30381,(0),null);var inst_30385 = cljs.core.nth.call(null,inst_30381,(1),null);var inst_30387__$1 = om.core.get_props.call(null,self__.owner);var inst_30388 = cljs.core.seq_QMARK_.call(null,inst_30387__$1);var state_30416__$1 = (function (){var statearr_30429 = state_30416;(statearr_30429[(8)] = inst_30387__$1);
(statearr_30429[(9)] = inst_30384);
(statearr_30429[(10)] = inst_30385);
return statearr_30429;
})();if(inst_30388)
{var statearr_30430_30459 = state_30416__$1;(statearr_30430_30459[(1)] = (8));
} else
{var statearr_30431_30460 = state_30416__$1;(statearr_30431_30460[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30417 === (10)))
{var inst_30385 = (state_30416[(10)]);var inst_30393 = (state_30416[(2)]);var inst_30394 = cljs.core.get.call(null,inst_30393,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30395 = cljs.core.get.call(null,inst_30393,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30396 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30397 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30385];var inst_30398 = (new cljs.core.PersistentVector(null,3,(5),inst_30396,inst_30397,null));var inst_30399 = cljs.core.clj__GT_js.call(null,inst_30398);var inst_30400 = console.log(inst_30399);var inst_30401 = cljs.core.deref.call(null,inst_30395);var inst_30402 = cljs.core.deref.call(null,inst_30394);var inst_30403 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30401,inst_30402,inst_30385);var inst_30404 = om.core.update_BANG_.call(null,inst_30395,inst_30403);var state_30416__$1 = (function (){var statearr_30432 = state_30416;(statearr_30432[(11)] = inst_30404);
(statearr_30432[(12)] = inst_30400);
return statearr_30432;
})();var statearr_30433_30461 = state_30416__$1;(statearr_30433_30461[(2)] = true);
(statearr_30433_30461[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30417 === (8)))
{var inst_30387 = (state_30416[(8)]);var inst_30390 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30387);var state_30416__$1 = state_30416;var statearr_30434_30462 = state_30416__$1;(statearr_30434_30462[(2)] = inst_30390);
(statearr_30434_30462[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30438 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30438[(0)] = state_machine__9111__auto__);
(statearr_30438[(1)] = (1));
return statearr_30438;
});
var state_machine__9111__auto____1 = (function (state_30416){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30416);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30439){if((e30439 instanceof Object))
{var ex__9114__auto__ = e30439;var statearr_30440_30463 = state_30416;(statearr_30440_30463[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30416);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30439;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30464 = state_30416;
state_30416 = G__30464;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30416){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308))
})();var state__9127__auto__ = (function (){var statearr_30441 = f__9126__auto__.call(null);(statearr_30441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308))
;
clustermap.components.filters.checkboxes_filter.t30376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308){
return (function (_30378){var self__ = this;
var _30378__$1 = this;return self__.meta30377;
});})(owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308))
;
clustermap.components.filters.checkboxes_filter.t30376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308){
return (function (_30378,meta30377__$1){var self__ = this;
var _30378__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30376(self__.component_spec,self__.component_filter_rq_chan,self__.constructor30301,self__.owner,self__.output_schema30305,self__.data,self__.input_checker30307,self__.map30304,self__.map30303,self__.filter_spec,self__.G__30309,self__.validate__6034__auto__,self__.id,self__.input_schema30306,self__.ufv__,self__.output_checker30308,meta30377__$1));
});})(owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308))
;
clustermap.components.filters.checkboxes_filter.__GT_t30376 = ((function (owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308){
return (function __GT_t30376(component_spec__$1,component_filter_rq_chan__$1,constructor30301__$1,owner__$1,output_schema30305__$1,data__$1,input_checker30307__$1,map30304__$1,map30303__$1,filter_spec__$1,G__30309__$1,validate__6034__auto____$1,id__$1,input_schema30306__$1,ufv____$1,output_checker30308__$1,meta30377){return (new clustermap.components.filters.checkboxes_filter.t30376(component_spec__$1,component_filter_rq_chan__$1,constructor30301__$1,owner__$1,output_schema30305__$1,data__$1,input_checker30307__$1,map30304__$1,map30303__$1,filter_spec__$1,G__30309__$1,validate__6034__auto____$1,id__$1,input_schema30306__$1,ufv____$1,output_checker30308__$1,meta30377));
});})(owner,component_filter_rq_chan,map30304,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30376(component_spec,component_filter_rq_chan,constructor30301,owner,output_schema30305,data,input_checker30307,map30304,map30303,filter_spec,G__30309,validate__6034__auto__,id,input_schema30306,ufv__,output_checker30308,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30465 = output_checker30308.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30465))
{var error__6036__auto___30466 = temp__4126__auto___30465;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30301","constructor30301",-42120639,null),cljs.core.pr_str.call(null,error__6036__auto___30466)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30466,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30305,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30305,input_schema30306,input_checker30307,output_checker30308))
,schema.core.make_fn_schema.call(null,output_schema30305,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30306], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30445){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30300,p__30442){var vec__30444 = p__30442;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30444,(0),null);return component_fnk__7881__auto___30445.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30300,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30300,var_args){
var p__30442 = null;if (arguments.length > 2) {
  p__30442 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30300,p__30442);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30467){
var data__7882__auto__ = cljs.core.first(arglist__30467);
arglist__30467 = cljs.core.next(arglist__30467);
var owner30300 = cljs.core.first(arglist__30467);
var p__30442 = cljs.core.rest(arglist__30467);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30300,p__30442);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30445))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30302){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30302);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30302){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
