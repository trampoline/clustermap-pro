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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29932(s__29933){return (new cljs.core.LazySeq(null,(function (){var s__29933__$1 = s__29933;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29933__$1);if(temp__4126__auto__)
{var s__29933__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29933__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29933__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29935 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29934 = (0);while(true){
if((i__29934 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29934);cljs.core.chunk_append.call(null,b__29935,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29936 = (i__29934 + (1));
i__29934 = G__29936;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29935),iter__29932.call(null,cljs.core.chunk_rest.call(null,s__29933__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29935),null);
}
} else
{var o = cljs.core.first.call(null,s__29933__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29932.call(null,cljs.core.rest.call(null,s__29933__$2)));
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
return (function (p1__29937_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__29937_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__29940 = options;var G__29940__$1 = (((G__29940 == null))?null:cljs.core.filter.call(null,((function (G__29940,values__$1){
return (function (p1__29938_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29938_SHARP_));
});})(G__29940,values__$1))
,G__29940));var G__29940__$2 = (((G__29940__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__29940__$1));return G__29940__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__29942,values){var map__29944 = p__29942;var map__29944__$1 = ((cljs.core.seq_QMARK_.call(null,map__29944))?cljs.core.apply.call(null,cljs.core.hash_map,map__29944):map__29944);var component_spec = map__29944__$1;var options = cljs.core.get.call(null,map__29944__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29944__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29944,map__29944__$1,component_spec,options,label){
return (function (p1__29941_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29941_SHARP_));
});})(values__$1,map__29944,map__29944__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29945,values){var map__29947 = p__29945;var map__29947__$1 = ((cljs.core.seq_QMARK_.call(null,map__29947))?cljs.core.apply.call(null,cljs.core.hash_map,map__29947):map__29947);var component_spec = map__29947__$1;var options = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29947__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__29948){var map__29950 = p__29948;var map__29950__$1 = ((cljs.core.seq_QMARK_.call(null,map__29950))?cljs.core.apply.call(null,cljs.core.hash_map,map__29950):map__29950);var component_spec = map__29950__$1;var tags = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29950__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__29951){var map__29953 = p__29951;var map__29953__$1 = ((cljs.core.seq_QMARK_.call(null,map__29953))?cljs.core.apply.call(null,cljs.core.hash_map,map__29953):map__29953);var component_spec = map__29953__$1;var tags = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29953__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29954 = schema.core.Any;var input_schema29955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29956 = schema.core.checker.call(null,input_schema29955);var output_checker29957 = schema.core.checker.call(null,output_schema29954);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957){
return (function render_STAR_(G__29958){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29958], null);var temp__4126__auto___29994 = input_checker29956.call(null,args__6035__auto___29993);if(cljs.core.truth_(temp__4126__auto___29994))
{var error__6036__auto___29995 = temp__4126__auto___29994;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29995)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29995,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29993,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29955,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29958;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs29976 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29976))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs29976)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29976))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957){
return (function iter__29977(s__29978){return (new cljs.core.LazySeq(null,((function (attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957){
return (function (){var s__29978__$1 = s__29978;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29978__$1);if(temp__4126__auto__)
{var s__29978__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29978__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29978__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29980 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29979 = (0);while(true){
if((i__29979 < size__4376__auto__))
{var map__29983 = cljs.core._nth.call(null,c__4375__auto__,i__29979);var map__29983__$1 = ((cljs.core.seq_QMARK_.call(null,map__29983))?cljs.core.apply.call(null,cljs.core.hash_map,map__29983):map__29983);var filter = cljs.core.get.call(null,map__29983__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29983__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29983__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29980,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29979,map__29983,map__29983__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29980,s__29978__$2,temp__4126__auto__,attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29979,map__29983,map__29983__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29980,s__29978__$2,temp__4126__auto__,attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29996 = (i__29979 + (1));
i__29979 = G__29996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29980),iter__29977.call(null,cljs.core.chunk_rest.call(null,s__29978__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29980),null);
}
} else
{var map__29984 = cljs.core.first.call(null,s__29978__$2);var map__29984__$1 = ((cljs.core.seq_QMARK_.call(null,map__29984))?cljs.core.apply.call(null,cljs.core.hash_map,map__29984):map__29984);var filter = cljs.core.get.call(null,map__29984__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29984__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29984__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29984,map__29984__$1,filter,label__$1,value,s__29978__$2,temp__4126__auto__,attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29984,map__29984__$1,filter,label__$1,value,s__29978__$2,temp__4126__auto__,attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29977.call(null,cljs.core.rest.call(null,s__29978__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957))
,null,null));
});})(attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29976),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957){
return (function iter__29985(s__29986){return (new cljs.core.LazySeq(null,((function (attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957){
return (function (){var s__29986__$1 = s__29986;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29986__$1);if(temp__4126__auto__)
{var s__29986__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29986__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29986__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29988 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29987 = (0);while(true){
if((i__29987 < size__4376__auto__))
{var map__29991 = cljs.core._nth.call(null,c__4375__auto__,i__29987);var map__29991__$1 = ((cljs.core.seq_QMARK_.call(null,map__29991))?cljs.core.apply.call(null,cljs.core.hash_map,map__29991):map__29991);var filter = cljs.core.get.call(null,map__29991__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29991__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29991__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29988,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29987,map__29991,map__29991__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29988,s__29986__$2,temp__4126__auto__,attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29987,map__29991,map__29991__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29988,s__29986__$2,temp__4126__auto__,attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29997 = (i__29987 + (1));
i__29987 = G__29997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29988),iter__29985.call(null,cljs.core.chunk_rest.call(null,s__29986__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29988),null);
}
} else
{var map__29992 = cljs.core.first.call(null,s__29986__$2);var map__29992__$1 = ((cljs.core.seq_QMARK_.call(null,map__29992))?cljs.core.apply.call(null,cljs.core.hash_map,map__29992):map__29992);var filter = cljs.core.get.call(null,map__29992__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29992__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29992__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29992,map__29992__$1,filter,label__$1,value,s__29986__$2,temp__4126__auto__,attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29992,map__29992__$1,filter,label__$1,value,s__29986__$2,temp__4126__auto__,attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29985.call(null,cljs.core.rest.call(null,s__29986__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957))
,null,null));
});})(attrs29976,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29998 = output_checker29957.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29998))
{var error__6036__auto___29999 = temp__4126__auto___29998;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29999)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29999,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29954,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29954,input_schema29955,input_checker29956,output_checker29957))
,schema.core.make_fn_schema.call(null,output_schema29954,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29955], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30145 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30005 = schema.core.Any;var input_schema30006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30003","map30003",-297189012,null))], null);var input_checker30007 = schema.core.checker.call(null,input_schema30006);var output_checker30008 = schema.core.checker.call(null,output_schema30005);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008){
return (function constructor30001(G__30009){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30009], null);var temp__4126__auto___30147 = input_checker30007.call(null,args__6035__auto___30146);if(cljs.core.truth_(temp__4126__auto___30147))
{var error__6036__auto___30148 = temp__4126__auto___30147;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30001","constructor30001",1421554395,null),cljs.core.pr_str.call(null,error__6036__auto___30148)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30148,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30146,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30006,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30003 = G__30009;while(true){
if(cljs.core.map_QMARK_.call(null,map30003))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30003)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30003,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30004 = plumbing.fnk.schema.safe_get.call(null,map30003,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30004,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30003,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30076 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30076 = (function (component_spec,component_filter_rq_chan,output_schema30005,input_schema30006,owner,map30004,data,map30003,filter_spec,input_checker30007,output_checker30008,validate__6034__auto__,id,G__30009,constructor30001,ufv__,meta30077){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_schema30005 = output_schema30005;
this.input_schema30006 = input_schema30006;
this.owner = owner;
this.map30004 = map30004;
this.data = data;
this.map30003 = map30003;
this.filter_spec = filter_spec;
this.input_checker30007 = input_checker30007;
this.output_checker30008 = output_checker30008;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__30009 = G__30009;
this.constructor30001 = constructor30001;
this.ufv__ = ufv__;
this.meta30077 = meta30077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30076.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30076.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30076";
clustermap.components.filters.checkboxes_filter.t30076.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30076");
});})(owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008))
;
clustermap.components.filters.checkboxes_filter.t30076.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30076.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008))
;
clustermap.components.filters.checkboxes_filter.t30076.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30076.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008))
;
clustermap.components.filters.checkboxes_filter.t30076.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30076.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008){
return (function (_){var self__ = this;
var ___$1 = this;var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008){
return (function (state_30116){var state_val_30117 = (state_30116[(1)]);if((state_val_30117 === (7)))
{var inst_30107 = (state_30116[(2)]);var state_30116__$1 = state_30116;if(cljs.core.truth_(inst_30107))
{var statearr_30118_30149 = state_30116__$1;(statearr_30118_30149[(1)] = (11));
} else
{var statearr_30119_30150 = state_30116__$1;(statearr_30119_30150[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30117 === (1)))
{var state_30116__$1 = state_30116;var statearr_30120_30151 = state_30116__$1;(statearr_30120_30151[(2)] = null);
(statearr_30120_30151[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30117 === (4)))
{var inst_30081 = (state_30116[(7)]);var inst_30081__$1 = (state_30116[(2)]);var state_30116__$1 = (function (){var statearr_30121 = state_30116;(statearr_30121[(7)] = inst_30081__$1);
return statearr_30121;
})();if(cljs.core.truth_(inst_30081__$1))
{var statearr_30122_30152 = state_30116__$1;(statearr_30122_30152[(1)] = (5));
} else
{var statearr_30123_30153 = state_30116__$1;(statearr_30123_30153[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30117 === (13)))
{var inst_30112 = (state_30116[(2)]);var state_30116__$1 = state_30116;var statearr_30124_30154 = state_30116__$1;(statearr_30124_30154[(2)] = inst_30112);
(statearr_30124_30154[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30117 === (6)))
{var state_30116__$1 = state_30116;var statearr_30125_30155 = state_30116__$1;(statearr_30125_30155[(2)] = null);
(statearr_30125_30155[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30117 === (3)))
{var inst_30114 = (state_30116[(2)]);var state_30116__$1 = state_30116;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30116__$1,inst_30114);
} else
{if((state_val_30117 === (12)))
{var state_30116__$1 = state_30116;var statearr_30126_30156 = state_30116__$1;(statearr_30126_30156[(2)] = null);
(statearr_30126_30156[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30117 === (2)))
{var state_30116__$1 = state_30116;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30116__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30117 === (11)))
{var state_30116__$1 = state_30116;var statearr_30127_30157 = state_30116__$1;(statearr_30127_30157[(2)] = null);
(statearr_30127_30157[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30117 === (9)))
{var inst_30087 = (state_30116[(8)]);var state_30116__$1 = state_30116;var statearr_30128_30158 = state_30116__$1;(statearr_30128_30158[(2)] = inst_30087);
(statearr_30128_30158[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30117 === (5)))
{var inst_30087 = (state_30116[(8)]);var inst_30081 = (state_30116[(7)]);var inst_30084 = cljs.core.nth.call(null,inst_30081,(0),null);var inst_30085 = cljs.core.nth.call(null,inst_30081,(1),null);var inst_30087__$1 = om.core.get_props.call(null,self__.owner);var inst_30088 = cljs.core.seq_QMARK_.call(null,inst_30087__$1);var state_30116__$1 = (function (){var statearr_30129 = state_30116;(statearr_30129[(9)] = inst_30085);
(statearr_30129[(8)] = inst_30087__$1);
(statearr_30129[(10)] = inst_30084);
return statearr_30129;
})();if(inst_30088)
{var statearr_30130_30159 = state_30116__$1;(statearr_30130_30159[(1)] = (8));
} else
{var statearr_30131_30160 = state_30116__$1;(statearr_30131_30160[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30117 === (10)))
{var inst_30085 = (state_30116[(9)]);var inst_30093 = (state_30116[(2)]);var inst_30094 = cljs.core.get.call(null,inst_30093,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30095 = cljs.core.get.call(null,inst_30093,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30096 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30097 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30085];var inst_30098 = (new cljs.core.PersistentVector(null,3,(5),inst_30096,inst_30097,null));var inst_30099 = cljs.core.clj__GT_js.call(null,inst_30098);var inst_30100 = console.log(inst_30099);var inst_30101 = cljs.core.deref.call(null,inst_30095);var inst_30102 = cljs.core.deref.call(null,inst_30094);var inst_30103 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30101,inst_30102,inst_30085);var inst_30104 = om.core.update_BANG_.call(null,inst_30095,inst_30103);var state_30116__$1 = (function (){var statearr_30132 = state_30116;(statearr_30132[(11)] = inst_30104);
(statearr_30132[(12)] = inst_30100);
return statearr_30132;
})();var statearr_30133_30161 = state_30116__$1;(statearr_30133_30161[(2)] = true);
(statearr_30133_30161[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30117 === (8)))
{var inst_30087 = (state_30116[(8)]);var inst_30090 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30087);var state_30116__$1 = state_30116;var statearr_30134_30162 = state_30116__$1;(statearr_30134_30162[(2)] = inst_30090);
(statearr_30134_30162[(1)] = (10));
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
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_30138 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30138[(0)] = state_machine__11099__auto__);
(statearr_30138[(1)] = (1));
return statearr_30138;
});
var state_machine__11099__auto____1 = (function (state_30116){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_30116);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e30139){if((e30139 instanceof Object))
{var ex__11102__auto__ = e30139;var statearr_30140_30163 = state_30116;(statearr_30140_30163[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30116);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30139;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30164 = state_30116;
state_30116 = G__30164;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_30116){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_30116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008))
})();var state__11156__auto__ = (function (){var statearr_30141 = f__11155__auto__.call(null);(statearr_30141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_30141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008))
);
return c__11154__auto__;
});})(owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008))
;
clustermap.components.filters.checkboxes_filter.t30076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008){
return (function (_30078){var self__ = this;
var _30078__$1 = this;return self__.meta30077;
});})(owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008))
;
clustermap.components.filters.checkboxes_filter.t30076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008){
return (function (_30078,meta30077__$1){var self__ = this;
var _30078__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30076(self__.component_spec,self__.component_filter_rq_chan,self__.output_schema30005,self__.input_schema30006,self__.owner,self__.map30004,self__.data,self__.map30003,self__.filter_spec,self__.input_checker30007,self__.output_checker30008,self__.validate__6034__auto__,self__.id,self__.G__30009,self__.constructor30001,self__.ufv__,meta30077__$1));
});})(owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008))
;
clustermap.components.filters.checkboxes_filter.__GT_t30076 = ((function (owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008){
return (function __GT_t30076(component_spec__$1,component_filter_rq_chan__$1,output_schema30005__$1,input_schema30006__$1,owner__$1,map30004__$1,data__$1,map30003__$1,filter_spec__$1,input_checker30007__$1,output_checker30008__$1,validate__6034__auto____$1,id__$1,G__30009__$1,constructor30001__$1,ufv____$1,meta30077){return (new clustermap.components.filters.checkboxes_filter.t30076(component_spec__$1,component_filter_rq_chan__$1,output_schema30005__$1,input_schema30006__$1,owner__$1,map30004__$1,data__$1,map30003__$1,filter_spec__$1,input_checker30007__$1,output_checker30008__$1,validate__6034__auto____$1,id__$1,G__30009__$1,constructor30001__$1,ufv____$1,meta30077));
});})(owner,component_filter_rq_chan,map30004,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30076(component_spec,component_filter_rq_chan,output_schema30005,input_schema30006,owner,map30004,data,map30003,filter_spec,input_checker30007,output_checker30008,validate__6034__auto__,id,G__30009,constructor30001,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30165 = output_checker30008.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30165))
{var error__6036__auto___30166 = temp__4126__auto___30165;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30001","constructor30001",1421554395,null),cljs.core.pr_str.call(null,error__6036__auto___30166)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30166,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30005,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30005,input_schema30006,input_checker30007,output_checker30008))
,schema.core.make_fn_schema.call(null,output_schema30005,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30006], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30145){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30000,p__30142){var vec__30144 = p__30142;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30144,(0),null);return component_fnk__7881__auto___30145.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30000,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30000,var_args){
var p__30142 = null;if (arguments.length > 2) {
  p__30142 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30000,p__30142);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30167){
var data__7882__auto__ = cljs.core.first(arglist__30167);
arglist__30167 = cljs.core.next(arglist__30167);
var owner30000 = cljs.core.first(arglist__30167);
var p__30142 = cljs.core.rest(arglist__30167);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30000,p__30142);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30145))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30002){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30002);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30002){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
