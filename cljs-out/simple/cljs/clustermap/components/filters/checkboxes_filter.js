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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29252(s__29253){return (new cljs.core.LazySeq(null,(function (){var s__29253__$1 = s__29253;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29253__$1);if(temp__4126__auto__)
{var s__29253__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29253__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29253__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29255 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29254 = (0);while(true){
if((i__29254 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29254);cljs.core.chunk_append.call(null,b__29255,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29256 = (i__29254 + (1));
i__29254 = G__29256;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29255),iter__29252.call(null,cljs.core.chunk_rest.call(null,s__29253__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29255),null);
}
} else
{var o = cljs.core.first.call(null,s__29253__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29252.call(null,cljs.core.rest.call(null,s__29253__$2)));
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
return (function (p1__29257_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__29257_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__29260 = options;var G__29260__$1 = (((G__29260 == null))?null:cljs.core.filter.call(null,((function (G__29260,values__$1){
return (function (p1__29258_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29258_SHARP_));
});})(G__29260,values__$1))
,G__29260));var G__29260__$2 = (((G__29260__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__29260__$1));return G__29260__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__29262,values){var map__29264 = p__29262;var map__29264__$1 = ((cljs.core.seq_QMARK_.call(null,map__29264))?cljs.core.apply.call(null,cljs.core.hash_map,map__29264):map__29264);var component_spec = map__29264__$1;var options = cljs.core.get.call(null,map__29264__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29264__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29264,map__29264__$1,component_spec,options,label){
return (function (p1__29261_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29261_SHARP_));
});})(values__$1,map__29264,map__29264__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29265,values){var map__29267 = p__29265;var map__29267__$1 = ((cljs.core.seq_QMARK_.call(null,map__29267))?cljs.core.apply.call(null,cljs.core.hash_map,map__29267):map__29267);var component_spec = map__29267__$1;var options = cljs.core.get.call(null,map__29267__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29267__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__29268){var map__29270 = p__29268;var map__29270__$1 = ((cljs.core.seq_QMARK_.call(null,map__29270))?cljs.core.apply.call(null,cljs.core.hash_map,map__29270):map__29270);var component_spec = map__29270__$1;var tags = cljs.core.get.call(null,map__29270__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29270__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__29271){var map__29273 = p__29271;var map__29273__$1 = ((cljs.core.seq_QMARK_.call(null,map__29273))?cljs.core.apply.call(null,cljs.core.hash_map,map__29273):map__29273);var component_spec = map__29273__$1;var tags = cljs.core.get.call(null,map__29273__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29273__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29274 = schema.core.Any;var input_schema29275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29276 = schema.core.checker.call(null,input_schema29275);var output_checker29277 = schema.core.checker.call(null,output_schema29274);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277){
return (function render_STAR_(G__29278){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29278], null);var temp__4126__auto___29314 = input_checker29276.call(null,args__6035__auto___29313);if(cljs.core.truth_(temp__4126__auto___29314))
{var error__6036__auto___29315 = temp__4126__auto___29314;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29315)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29315,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29313,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29275,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29278;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs29296 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29296))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs29296)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29296))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277){
return (function iter__29297(s__29298){return (new cljs.core.LazySeq(null,((function (attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277){
return (function (){var s__29298__$1 = s__29298;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29298__$1);if(temp__4126__auto__)
{var s__29298__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29298__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29298__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29300 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29299 = (0);while(true){
if((i__29299 < size__4376__auto__))
{var map__29303 = cljs.core._nth.call(null,c__4375__auto__,i__29299);var map__29303__$1 = ((cljs.core.seq_QMARK_.call(null,map__29303))?cljs.core.apply.call(null,cljs.core.hash_map,map__29303):map__29303);var filter = cljs.core.get.call(null,map__29303__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29303__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29303__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29300,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29299,map__29303,map__29303__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29300,s__29298__$2,temp__4126__auto__,attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29299,map__29303,map__29303__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29300,s__29298__$2,temp__4126__auto__,attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29316 = (i__29299 + (1));
i__29299 = G__29316;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29300),iter__29297.call(null,cljs.core.chunk_rest.call(null,s__29298__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29300),null);
}
} else
{var map__29304 = cljs.core.first.call(null,s__29298__$2);var map__29304__$1 = ((cljs.core.seq_QMARK_.call(null,map__29304))?cljs.core.apply.call(null,cljs.core.hash_map,map__29304):map__29304);var filter = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29304,map__29304__$1,filter,label__$1,value,s__29298__$2,temp__4126__auto__,attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29304,map__29304__$1,filter,label__$1,value,s__29298__$2,temp__4126__auto__,attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29297.call(null,cljs.core.rest.call(null,s__29298__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277))
,null,null));
});})(attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29296),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277){
return (function iter__29305(s__29306){return (new cljs.core.LazySeq(null,((function (attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277){
return (function (){var s__29306__$1 = s__29306;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29306__$1);if(temp__4126__auto__)
{var s__29306__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29306__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29306__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29308 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29307 = (0);while(true){
if((i__29307 < size__4376__auto__))
{var map__29311 = cljs.core._nth.call(null,c__4375__auto__,i__29307);var map__29311__$1 = ((cljs.core.seq_QMARK_.call(null,map__29311))?cljs.core.apply.call(null,cljs.core.hash_map,map__29311):map__29311);var filter = cljs.core.get.call(null,map__29311__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29311__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29311__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29308,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29307,map__29311,map__29311__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29308,s__29306__$2,temp__4126__auto__,attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29307,map__29311,map__29311__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29308,s__29306__$2,temp__4126__auto__,attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29317 = (i__29307 + (1));
i__29307 = G__29317;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29308),iter__29305.call(null,cljs.core.chunk_rest.call(null,s__29306__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29308),null);
}
} else
{var map__29312 = cljs.core.first.call(null,s__29306__$2);var map__29312__$1 = ((cljs.core.seq_QMARK_.call(null,map__29312))?cljs.core.apply.call(null,cljs.core.hash_map,map__29312):map__29312);var filter = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29312,map__29312__$1,filter,label__$1,value,s__29306__$2,temp__4126__auto__,attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29312,map__29312__$1,filter,label__$1,value,s__29306__$2,temp__4126__auto__,attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29305.call(null,cljs.core.rest.call(null,s__29306__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277))
,null,null));
});})(attrs29296,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29318 = output_checker29277.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29318))
{var error__6036__auto___29319 = temp__4126__auto___29318;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29319)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29319,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29274,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29274,input_schema29275,input_checker29276,output_checker29277))
,schema.core.make_fn_schema.call(null,output_schema29274,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29275], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29465 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29325 = schema.core.Any;var input_schema29326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29323","map29323",-1812881810,null))], null);var input_checker29327 = schema.core.checker.call(null,input_schema29326);var output_checker29328 = schema.core.checker.call(null,output_schema29325);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328){
return (function constructor29321(G__29329){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29466 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29329], null);var temp__4126__auto___29467 = input_checker29327.call(null,args__6035__auto___29466);if(cljs.core.truth_(temp__4126__auto___29467))
{var error__6036__auto___29468 = temp__4126__auto___29467;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29321","constructor29321",-1985536013,null),cljs.core.pr_str.call(null,error__6036__auto___29468)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29468,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29466,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29326,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29323 = G__29329;while(true){
if(cljs.core.map_QMARK_.call(null,map29323))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29323)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29323,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29324 = plumbing.fnk.schema.safe_get.call(null,map29323,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29324,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29323,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t29396 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t29396 = (function (component_spec,component_filter_rq_chan,output_schema29325,owner,data,input_schema29326,input_checker29327,G__29329,map29323,filter_spec,constructor29321,validate__6034__auto__,id,ufv__,map29324,output_checker29328,meta29397){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_schema29325 = output_schema29325;
this.owner = owner;
this.data = data;
this.input_schema29326 = input_schema29326;
this.input_checker29327 = input_checker29327;
this.G__29329 = G__29329;
this.map29323 = map29323;
this.filter_spec = filter_spec;
this.constructor29321 = constructor29321;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.map29324 = map29324;
this.output_checker29328 = output_checker29328;
this.meta29397 = meta29397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t29396.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t29396.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t29396";
clustermap.components.filters.checkboxes_filter.t29396.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t29396");
});})(owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328))
;
clustermap.components.filters.checkboxes_filter.t29396.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t29396.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328))
;
clustermap.components.filters.checkboxes_filter.t29396.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t29396.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328))
;
clustermap.components.filters.checkboxes_filter.t29396.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t29396.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328){
return (function (state_29436){var state_val_29437 = (state_29436[(1)]);if((state_val_29437 === (7)))
{var inst_29427 = (state_29436[(2)]);var state_29436__$1 = state_29436;if(cljs.core.truth_(inst_29427))
{var statearr_29438_29469 = state_29436__$1;(statearr_29438_29469[(1)] = (11));
} else
{var statearr_29439_29470 = state_29436__$1;(statearr_29439_29470[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29437 === (1)))
{var state_29436__$1 = state_29436;var statearr_29440_29471 = state_29436__$1;(statearr_29440_29471[(2)] = null);
(statearr_29440_29471[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29437 === (4)))
{var inst_29401 = (state_29436[(7)]);var inst_29401__$1 = (state_29436[(2)]);var state_29436__$1 = (function (){var statearr_29441 = state_29436;(statearr_29441[(7)] = inst_29401__$1);
return statearr_29441;
})();if(cljs.core.truth_(inst_29401__$1))
{var statearr_29442_29472 = state_29436__$1;(statearr_29442_29472[(1)] = (5));
} else
{var statearr_29443_29473 = state_29436__$1;(statearr_29443_29473[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29437 === (13)))
{var inst_29432 = (state_29436[(2)]);var state_29436__$1 = state_29436;var statearr_29444_29474 = state_29436__$1;(statearr_29444_29474[(2)] = inst_29432);
(statearr_29444_29474[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29437 === (6)))
{var state_29436__$1 = state_29436;var statearr_29445_29475 = state_29436__$1;(statearr_29445_29475[(2)] = null);
(statearr_29445_29475[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29437 === (3)))
{var inst_29434 = (state_29436[(2)]);var state_29436__$1 = state_29436;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29436__$1,inst_29434);
} else
{if((state_val_29437 === (12)))
{var state_29436__$1 = state_29436;var statearr_29446_29476 = state_29436__$1;(statearr_29446_29476[(2)] = null);
(statearr_29446_29476[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29437 === (2)))
{var state_29436__$1 = state_29436;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29436__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29437 === (11)))
{var state_29436__$1 = state_29436;var statearr_29447_29477 = state_29436__$1;(statearr_29447_29477[(2)] = null);
(statearr_29447_29477[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29437 === (9)))
{var inst_29407 = (state_29436[(8)]);var state_29436__$1 = state_29436;var statearr_29448_29478 = state_29436__$1;(statearr_29448_29478[(2)] = inst_29407);
(statearr_29448_29478[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29437 === (5)))
{var inst_29407 = (state_29436[(8)]);var inst_29401 = (state_29436[(7)]);var inst_29404 = cljs.core.nth.call(null,inst_29401,(0),null);var inst_29405 = cljs.core.nth.call(null,inst_29401,(1),null);var inst_29407__$1 = om.core.get_props.call(null,self__.owner);var inst_29408 = cljs.core.seq_QMARK_.call(null,inst_29407__$1);var state_29436__$1 = (function (){var statearr_29449 = state_29436;(statearr_29449[(8)] = inst_29407__$1);
(statearr_29449[(9)] = inst_29404);
(statearr_29449[(10)] = inst_29405);
return statearr_29449;
})();if(inst_29408)
{var statearr_29450_29479 = state_29436__$1;(statearr_29450_29479[(1)] = (8));
} else
{var statearr_29451_29480 = state_29436__$1;(statearr_29451_29480[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29437 === (10)))
{var inst_29405 = (state_29436[(10)]);var inst_29413 = (state_29436[(2)]);var inst_29414 = cljs.core.get.call(null,inst_29413,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29415 = cljs.core.get.call(null,inst_29413,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29416 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29417 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_29405];var inst_29418 = (new cljs.core.PersistentVector(null,3,(5),inst_29416,inst_29417,null));var inst_29419 = cljs.core.clj__GT_js.call(null,inst_29418);var inst_29420 = console.log(inst_29419);var inst_29421 = cljs.core.deref.call(null,inst_29415);var inst_29422 = cljs.core.deref.call(null,inst_29414);var inst_29423 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_29421,inst_29422,inst_29405);var inst_29424 = om.core.update_BANG_.call(null,inst_29415,inst_29423);var state_29436__$1 = (function (){var statearr_29452 = state_29436;(statearr_29452[(11)] = inst_29424);
(statearr_29452[(12)] = inst_29420);
return statearr_29452;
})();var statearr_29453_29481 = state_29436__$1;(statearr_29453_29481[(2)] = true);
(statearr_29453_29481[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29437 === (8)))
{var inst_29407 = (state_29436[(8)]);var inst_29410 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29407);var state_29436__$1 = state_29436;var statearr_29454_29482 = state_29436__$1;(statearr_29454_29482[(2)] = inst_29410);
(statearr_29454_29482[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29458 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29458[(0)] = state_machine__11462__auto__);
(statearr_29458[(1)] = (1));
return statearr_29458;
});
var state_machine__11462__auto____1 = (function (state_29436){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29436);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29459){if((e29459 instanceof Object))
{var ex__11465__auto__ = e29459;var statearr_29460_29483 = state_29436;(statearr_29460_29483[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29436);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29459;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29484 = state_29436;
state_29436 = G__29484;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29436){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328))
})();var state__11519__auto__ = (function (){var statearr_29461 = f__11518__auto__.call(null);(statearr_29461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328))
;
clustermap.components.filters.checkboxes_filter.t29396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328){
return (function (_29398){var self__ = this;
var _29398__$1 = this;return self__.meta29397;
});})(owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328))
;
clustermap.components.filters.checkboxes_filter.t29396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328){
return (function (_29398,meta29397__$1){var self__ = this;
var _29398__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t29396(self__.component_spec,self__.component_filter_rq_chan,self__.output_schema29325,self__.owner,self__.data,self__.input_schema29326,self__.input_checker29327,self__.G__29329,self__.map29323,self__.filter_spec,self__.constructor29321,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.map29324,self__.output_checker29328,meta29397__$1));
});})(owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328))
;
clustermap.components.filters.checkboxes_filter.__GT_t29396 = ((function (owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328){
return (function __GT_t29396(component_spec__$1,component_filter_rq_chan__$1,output_schema29325__$1,owner__$1,data__$1,input_schema29326__$1,input_checker29327__$1,G__29329__$1,map29323__$1,filter_spec__$1,constructor29321__$1,validate__6034__auto____$1,id__$1,ufv____$1,map29324__$1,output_checker29328__$1,meta29397){return (new clustermap.components.filters.checkboxes_filter.t29396(component_spec__$1,component_filter_rq_chan__$1,output_schema29325__$1,owner__$1,data__$1,input_schema29326__$1,input_checker29327__$1,G__29329__$1,map29323__$1,filter_spec__$1,constructor29321__$1,validate__6034__auto____$1,id__$1,ufv____$1,map29324__$1,output_checker29328__$1,meta29397));
});})(owner,component_filter_rq_chan,map29324,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328))
;
}
return (new clustermap.components.filters.checkboxes_filter.t29396(component_spec,component_filter_rq_chan,output_schema29325,owner,data,input_schema29326,input_checker29327,G__29329,map29323,filter_spec,constructor29321,validate__6034__auto__,id,ufv__,map29324,output_checker29328,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29485 = output_checker29328.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29485))
{var error__6036__auto___29486 = temp__4126__auto___29485;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29321","constructor29321",-1985536013,null),cljs.core.pr_str.call(null,error__6036__auto___29486)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29486,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29325,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29325,input_schema29326,input_checker29327,output_checker29328))
,schema.core.make_fn_schema.call(null,output_schema29325,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29326], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___29465){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner29320,p__29462){var vec__29464 = p__29462;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29464,(0),null);return component_fnk__7881__auto___29465.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29320,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner29320,var_args){
var p__29462 = null;if (arguments.length > 2) {
  p__29462 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29320,p__29462);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29487){
var data__7882__auto__ = cljs.core.first(arglist__29487);
arglist__29487 = cljs.core.next(arglist__29487);
var owner29320 = cljs.core.first(arglist__29487);
var p__29462 = cljs.core.rest(arglist__29487);
return checkboxes_filter_component__delegate(data__7882__auto__,owner29320,p__29462);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29465))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29322){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m29322);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m29322){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
