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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29920(s__29921){return (new cljs.core.LazySeq(null,(function (){var s__29921__$1 = s__29921;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29921__$1);if(temp__4126__auto__)
{var s__29921__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29921__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29921__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29923 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29922 = (0);while(true){
if((i__29922 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29922);cljs.core.chunk_append.call(null,b__29923,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29924 = (i__29922 + (1));
i__29922 = G__29924;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29923),iter__29920.call(null,cljs.core.chunk_rest.call(null,s__29921__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29923),null);
}
} else
{var o = cljs.core.first.call(null,s__29921__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29920.call(null,cljs.core.rest.call(null,s__29921__$2)));
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
return (function (p1__29925_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__29925_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__29928 = options;var G__29928__$1 = (((G__29928 == null))?null:cljs.core.filter.call(null,((function (G__29928,values__$1){
return (function (p1__29926_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29926_SHARP_));
});})(G__29928,values__$1))
,G__29928));var G__29928__$2 = (((G__29928__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__29928__$1));return G__29928__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__29930,values){var map__29932 = p__29930;var map__29932__$1 = ((cljs.core.seq_QMARK_.call(null,map__29932))?cljs.core.apply.call(null,cljs.core.hash_map,map__29932):map__29932);var component_spec = map__29932__$1;var options = cljs.core.get.call(null,map__29932__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29932__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29932,map__29932__$1,component_spec,options,label){
return (function (p1__29929_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29929_SHARP_));
});})(values__$1,map__29932,map__29932__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29933,values){var map__29935 = p__29933;var map__29935__$1 = ((cljs.core.seq_QMARK_.call(null,map__29935))?cljs.core.apply.call(null,cljs.core.hash_map,map__29935):map__29935);var component_spec = map__29935__$1;var options = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29935__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__29936){var map__29938 = p__29936;var map__29938__$1 = ((cljs.core.seq_QMARK_.call(null,map__29938))?cljs.core.apply.call(null,cljs.core.hash_map,map__29938):map__29938);var component_spec = map__29938__$1;var tags = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29938__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__29939){var map__29941 = p__29939;var map__29941__$1 = ((cljs.core.seq_QMARK_.call(null,map__29941))?cljs.core.apply.call(null,cljs.core.hash_map,map__29941):map__29941);var component_spec = map__29941__$1;var tags = cljs.core.get.call(null,map__29941__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29941__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29942 = schema.core.Any;var input_schema29943 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29944 = schema.core.checker.call(null,input_schema29943);var output_checker29945 = schema.core.checker.call(null,output_schema29942);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945){
return (function render_STAR_(G__29946){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29981 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29946], null);var temp__4126__auto___29982 = input_checker29944.call(null,args__6035__auto___29981);if(cljs.core.truth_(temp__4126__auto___29982))
{var error__6036__auto___29983 = temp__4126__auto___29982;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29983)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29983,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29981,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29943,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29946;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs29964 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29964))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs29964)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29964))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945){
return (function iter__29965(s__29966){return (new cljs.core.LazySeq(null,((function (attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945){
return (function (){var s__29966__$1 = s__29966;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29966__$1);if(temp__4126__auto__)
{var s__29966__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29966__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29966__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29968 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29967 = (0);while(true){
if((i__29967 < size__4376__auto__))
{var map__29971 = cljs.core._nth.call(null,c__4375__auto__,i__29967);var map__29971__$1 = ((cljs.core.seq_QMARK_.call(null,map__29971))?cljs.core.apply.call(null,cljs.core.hash_map,map__29971):map__29971);var filter = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29968,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29967,map__29971,map__29971__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29968,s__29966__$2,temp__4126__auto__,attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29967,map__29971,map__29971__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29968,s__29966__$2,temp__4126__auto__,attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29984 = (i__29967 + (1));
i__29967 = G__29984;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29968),iter__29965.call(null,cljs.core.chunk_rest.call(null,s__29966__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29968),null);
}
} else
{var map__29972 = cljs.core.first.call(null,s__29966__$2);var map__29972__$1 = ((cljs.core.seq_QMARK_.call(null,map__29972))?cljs.core.apply.call(null,cljs.core.hash_map,map__29972):map__29972);var filter = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29972,map__29972__$1,filter,label__$1,value,s__29966__$2,temp__4126__auto__,attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29972,map__29972__$1,filter,label__$1,value,s__29966__$2,temp__4126__auto__,attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29965.call(null,cljs.core.rest.call(null,s__29966__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945))
,null,null));
});})(attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29964),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945){
return (function iter__29973(s__29974){return (new cljs.core.LazySeq(null,((function (attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945){
return (function (){var s__29974__$1 = s__29974;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29974__$1);if(temp__4126__auto__)
{var s__29974__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29974__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29974__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29976 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29975 = (0);while(true){
if((i__29975 < size__4376__auto__))
{var map__29979 = cljs.core._nth.call(null,c__4375__auto__,i__29975);var map__29979__$1 = ((cljs.core.seq_QMARK_.call(null,map__29979))?cljs.core.apply.call(null,cljs.core.hash_map,map__29979):map__29979);var filter = cljs.core.get.call(null,map__29979__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29979__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29979__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29976,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29975,map__29979,map__29979__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29976,s__29974__$2,temp__4126__auto__,attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29975,map__29979,map__29979__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29976,s__29974__$2,temp__4126__auto__,attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29985 = (i__29975 + (1));
i__29975 = G__29985;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29976),iter__29973.call(null,cljs.core.chunk_rest.call(null,s__29974__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29976),null);
}
} else
{var map__29980 = cljs.core.first.call(null,s__29974__$2);var map__29980__$1 = ((cljs.core.seq_QMARK_.call(null,map__29980))?cljs.core.apply.call(null,cljs.core.hash_map,map__29980):map__29980);var filter = cljs.core.get.call(null,map__29980__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29980__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29980__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29980,map__29980__$1,filter,label__$1,value,s__29974__$2,temp__4126__auto__,attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29980,map__29980__$1,filter,label__$1,value,s__29974__$2,temp__4126__auto__,attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29973.call(null,cljs.core.rest.call(null,s__29974__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945))
,null,null));
});})(attrs29964,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29986 = output_checker29945.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29986))
{var error__6036__auto___29987 = temp__4126__auto___29986;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29987)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29987,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29942,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29942,input_schema29943,input_checker29944,output_checker29945))
,schema.core.make_fn_schema.call(null,output_schema29942,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29943], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30133 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29993 = schema.core.Any;var input_schema29994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29991","map29991",1056823053,null))], null);var input_checker29995 = schema.core.checker.call(null,input_schema29994);var output_checker29996 = schema.core.checker.call(null,output_schema29993);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996){
return (function constructor29989(G__29997){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30134 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29997], null);var temp__4126__auto___30135 = input_checker29995.call(null,args__6035__auto___30134);if(cljs.core.truth_(temp__4126__auto___30135))
{var error__6036__auto___30136 = temp__4126__auto___30135;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29989","constructor29989",-1358067031,null),cljs.core.pr_str.call(null,error__6036__auto___30136)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30136,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30134,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29994,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29991 = G__29997;while(true){
if(cljs.core.map_QMARK_.call(null,map29991))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29991)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29991,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29992 = plumbing.fnk.schema.safe_get.call(null,map29991,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29992,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29991,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30064 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30064 = (function (component_spec,component_filter_rq_chan,output_schema29993,output_checker29996,owner,data,constructor29989,map29991,filter_spec,map29992,input_schema29994,input_checker29995,G__29997,validate__6034__auto__,id,ufv__,meta30065){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_schema29993 = output_schema29993;
this.output_checker29996 = output_checker29996;
this.owner = owner;
this.data = data;
this.constructor29989 = constructor29989;
this.map29991 = map29991;
this.filter_spec = filter_spec;
this.map29992 = map29992;
this.input_schema29994 = input_schema29994;
this.input_checker29995 = input_checker29995;
this.G__29997 = G__29997;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta30065 = meta30065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30064.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30064.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30064";
clustermap.components.filters.checkboxes_filter.t30064.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30064");
});})(owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996))
;
clustermap.components.filters.checkboxes_filter.t30064.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30064.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996))
;
clustermap.components.filters.checkboxes_filter.t30064.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30064.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996))
;
clustermap.components.filters.checkboxes_filter.t30064.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30064.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996){
return (function (state_30104){var state_val_30105 = (state_30104[(1)]);if((state_val_30105 === (7)))
{var inst_30095 = (state_30104[(2)]);var state_30104__$1 = state_30104;if(cljs.core.truth_(inst_30095))
{var statearr_30106_30137 = state_30104__$1;(statearr_30106_30137[(1)] = (11));
} else
{var statearr_30107_30138 = state_30104__$1;(statearr_30107_30138[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30105 === (1)))
{var state_30104__$1 = state_30104;var statearr_30108_30139 = state_30104__$1;(statearr_30108_30139[(2)] = null);
(statearr_30108_30139[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30105 === (4)))
{var inst_30069 = (state_30104[(7)]);var inst_30069__$1 = (state_30104[(2)]);var state_30104__$1 = (function (){var statearr_30109 = state_30104;(statearr_30109[(7)] = inst_30069__$1);
return statearr_30109;
})();if(cljs.core.truth_(inst_30069__$1))
{var statearr_30110_30140 = state_30104__$1;(statearr_30110_30140[(1)] = (5));
} else
{var statearr_30111_30141 = state_30104__$1;(statearr_30111_30141[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30105 === (13)))
{var inst_30100 = (state_30104[(2)]);var state_30104__$1 = state_30104;var statearr_30112_30142 = state_30104__$1;(statearr_30112_30142[(2)] = inst_30100);
(statearr_30112_30142[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30105 === (6)))
{var state_30104__$1 = state_30104;var statearr_30113_30143 = state_30104__$1;(statearr_30113_30143[(2)] = null);
(statearr_30113_30143[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30105 === (3)))
{var inst_30102 = (state_30104[(2)]);var state_30104__$1 = state_30104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30104__$1,inst_30102);
} else
{if((state_val_30105 === (12)))
{var state_30104__$1 = state_30104;var statearr_30114_30144 = state_30104__$1;(statearr_30114_30144[(2)] = null);
(statearr_30114_30144[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30105 === (2)))
{var state_30104__$1 = state_30104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30104__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30105 === (11)))
{var state_30104__$1 = state_30104;var statearr_30115_30145 = state_30104__$1;(statearr_30115_30145[(2)] = null);
(statearr_30115_30145[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30105 === (9)))
{var inst_30075 = (state_30104[(8)]);var state_30104__$1 = state_30104;var statearr_30116_30146 = state_30104__$1;(statearr_30116_30146[(2)] = inst_30075);
(statearr_30116_30146[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30105 === (5)))
{var inst_30075 = (state_30104[(8)]);var inst_30069 = (state_30104[(7)]);var inst_30072 = cljs.core.nth.call(null,inst_30069,(0),null);var inst_30073 = cljs.core.nth.call(null,inst_30069,(1),null);var inst_30075__$1 = om.core.get_props.call(null,self__.owner);var inst_30076 = cljs.core.seq_QMARK_.call(null,inst_30075__$1);var state_30104__$1 = (function (){var statearr_30117 = state_30104;(statearr_30117[(9)] = inst_30072);
(statearr_30117[(10)] = inst_30073);
(statearr_30117[(8)] = inst_30075__$1);
return statearr_30117;
})();if(inst_30076)
{var statearr_30118_30147 = state_30104__$1;(statearr_30118_30147[(1)] = (8));
} else
{var statearr_30119_30148 = state_30104__$1;(statearr_30119_30148[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30105 === (10)))
{var inst_30073 = (state_30104[(10)]);var inst_30081 = (state_30104[(2)]);var inst_30082 = cljs.core.get.call(null,inst_30081,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30083 = cljs.core.get.call(null,inst_30081,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30084 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30085 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30073];var inst_30086 = (new cljs.core.PersistentVector(null,3,(5),inst_30084,inst_30085,null));var inst_30087 = cljs.core.clj__GT_js.call(null,inst_30086);var inst_30088 = console.log(inst_30087);var inst_30089 = cljs.core.deref.call(null,inst_30083);var inst_30090 = cljs.core.deref.call(null,inst_30082);var inst_30091 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30089,inst_30090,inst_30073);var inst_30092 = om.core.update_BANG_.call(null,inst_30083,inst_30091);var state_30104__$1 = (function (){var statearr_30120 = state_30104;(statearr_30120[(11)] = inst_30088);
(statearr_30120[(12)] = inst_30092);
return statearr_30120;
})();var statearr_30121_30149 = state_30104__$1;(statearr_30121_30149[(2)] = true);
(statearr_30121_30149[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30105 === (8)))
{var inst_30075 = (state_30104[(8)]);var inst_30078 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30075);var state_30104__$1 = state_30104;var statearr_30122_30150 = state_30104__$1;(statearr_30122_30150[(2)] = inst_30078);
(statearr_30122_30150[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30126 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30126[(0)] = state_machine__9111__auto__);
(statearr_30126[(1)] = (1));
return statearr_30126;
});
var state_machine__9111__auto____1 = (function (state_30104){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30104);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30127){if((e30127 instanceof Object))
{var ex__9114__auto__ = e30127;var statearr_30128_30151 = state_30104;(statearr_30128_30151[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30104);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30127;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30152 = state_30104;
state_30104 = G__30152;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30104){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996))
})();var state__9127__auto__ = (function (){var statearr_30129 = f__9126__auto__.call(null);(statearr_30129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996))
;
clustermap.components.filters.checkboxes_filter.t30064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996){
return (function (_30066){var self__ = this;
var _30066__$1 = this;return self__.meta30065;
});})(owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996))
;
clustermap.components.filters.checkboxes_filter.t30064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996){
return (function (_30066,meta30065__$1){var self__ = this;
var _30066__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30064(self__.component_spec,self__.component_filter_rq_chan,self__.output_schema29993,self__.output_checker29996,self__.owner,self__.data,self__.constructor29989,self__.map29991,self__.filter_spec,self__.map29992,self__.input_schema29994,self__.input_checker29995,self__.G__29997,self__.validate__6034__auto__,self__.id,self__.ufv__,meta30065__$1));
});})(owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996))
;
clustermap.components.filters.checkboxes_filter.__GT_t30064 = ((function (owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996){
return (function __GT_t30064(component_spec__$1,component_filter_rq_chan__$1,output_schema29993__$1,output_checker29996__$1,owner__$1,data__$1,constructor29989__$1,map29991__$1,filter_spec__$1,map29992__$1,input_schema29994__$1,input_checker29995__$1,G__29997__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30065){return (new clustermap.components.filters.checkboxes_filter.t30064(component_spec__$1,component_filter_rq_chan__$1,output_schema29993__$1,output_checker29996__$1,owner__$1,data__$1,constructor29989__$1,map29991__$1,filter_spec__$1,map29992__$1,input_schema29994__$1,input_checker29995__$1,G__29997__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30065));
});})(owner,component_filter_rq_chan,map29992,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30064(component_spec,component_filter_rq_chan,output_schema29993,output_checker29996,owner,data,constructor29989,map29991,filter_spec,map29992,input_schema29994,input_checker29995,G__29997,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30153 = output_checker29996.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30153))
{var error__6036__auto___30154 = temp__4126__auto___30153;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29989","constructor29989",-1358067031,null),cljs.core.pr_str.call(null,error__6036__auto___30154)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30154,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29993,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29993,input_schema29994,input_checker29995,output_checker29996))
,schema.core.make_fn_schema.call(null,output_schema29993,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29994], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30133){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner29988,p__30130){var vec__30132 = p__30130;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30132,(0),null);return component_fnk__7881__auto___30133.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29988,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner29988,var_args){
var p__30130 = null;if (arguments.length > 2) {
  p__30130 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29988,p__30130);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30155){
var data__7882__auto__ = cljs.core.first(arglist__30155);
arglist__30155 = cljs.core.next(arglist__30155);
var owner29988 = cljs.core.first(arglist__30155);
var p__30130 = cljs.core.rest(arglist__30155);
return checkboxes_filter_component__delegate(data__7882__auto__,owner29988,p__30130);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30133))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29990){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m29990);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m29990){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
