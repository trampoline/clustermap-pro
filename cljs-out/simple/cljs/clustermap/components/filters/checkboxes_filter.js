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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30217(s__30218){return (new cljs.core.LazySeq(null,(function (){var s__30218__$1 = s__30218;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30218__$1);if(temp__4126__auto__)
{var s__30218__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30218__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30218__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30220 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30219 = (0);while(true){
if((i__30219 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30219);cljs.core.chunk_append.call(null,b__30220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30221 = (i__30219 + (1));
i__30219 = G__30221;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30220),iter__30217.call(null,cljs.core.chunk_rest.call(null,s__30218__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30220),null);
}
} else
{var o = cljs.core.first.call(null,s__30218__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30217.call(null,cljs.core.rest.call(null,s__30218__$2)));
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
return (function (p1__30222_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30222_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30225 = options;var G__30225__$1 = (((G__30225 == null))?null:cljs.core.filter.call(null,((function (G__30225,values__$1){
return (function (p1__30223_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30223_SHARP_));
});})(G__30225,values__$1))
,G__30225));var G__30225__$2 = (((G__30225__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30225__$1));return G__30225__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30227,values){var map__30229 = p__30227;var map__30229__$1 = ((cljs.core.seq_QMARK_.call(null,map__30229))?cljs.core.apply.call(null,cljs.core.hash_map,map__30229):map__30229);var component_spec = map__30229__$1;var options = cljs.core.get.call(null,map__30229__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30229__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30229,map__30229__$1,component_spec,options,label){
return (function (p1__30226_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30226_SHARP_));
});})(values__$1,map__30229,map__30229__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30230,values){var map__30232 = p__30230;var map__30232__$1 = ((cljs.core.seq_QMARK_.call(null,map__30232))?cljs.core.apply.call(null,cljs.core.hash_map,map__30232):map__30232);var component_spec = map__30232__$1;var options = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30233){var map__30235 = p__30233;var map__30235__$1 = ((cljs.core.seq_QMARK_.call(null,map__30235))?cljs.core.apply.call(null,cljs.core.hash_map,map__30235):map__30235);var component_spec = map__30235__$1;var tags = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30235__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30236){var map__30238 = p__30236;var map__30238__$1 = ((cljs.core.seq_QMARK_.call(null,map__30238))?cljs.core.apply.call(null,cljs.core.hash_map,map__30238):map__30238);var component_spec = map__30238__$1;var tags = cljs.core.get.call(null,map__30238__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30238__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30239 = schema.core.Any;var input_schema30240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30241 = schema.core.checker.call(null,input_schema30240);var output_checker30242 = schema.core.checker.call(null,output_schema30239);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242){
return (function render_STAR_(G__30243){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30278 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30243], null);var temp__4126__auto___30279 = input_checker30241.call(null,args__6035__auto___30278);if(cljs.core.truth_(temp__4126__auto___30279))
{var error__6036__auto___30280 = temp__4126__auto___30279;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30280)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30280,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30278,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30240,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30243;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30261 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30261))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30261)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30261))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242){
return (function iter__30262(s__30263){return (new cljs.core.LazySeq(null,((function (attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242){
return (function (){var s__30263__$1 = s__30263;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30263__$1);if(temp__4126__auto__)
{var s__30263__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30263__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30263__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30265 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30264 = (0);while(true){
if((i__30264 < size__4376__auto__))
{var map__30268 = cljs.core._nth.call(null,c__4375__auto__,i__30264);var map__30268__$1 = ((cljs.core.seq_QMARK_.call(null,map__30268))?cljs.core.apply.call(null,cljs.core.hash_map,map__30268):map__30268);var filter = cljs.core.get.call(null,map__30268__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30268__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30268__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30265,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30264,map__30268,map__30268__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30265,s__30263__$2,temp__4126__auto__,attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30264,map__30268,map__30268__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30265,s__30263__$2,temp__4126__auto__,attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30281 = (i__30264 + (1));
i__30264 = G__30281;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30265),iter__30262.call(null,cljs.core.chunk_rest.call(null,s__30263__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30265),null);
}
} else
{var map__30269 = cljs.core.first.call(null,s__30263__$2);var map__30269__$1 = ((cljs.core.seq_QMARK_.call(null,map__30269))?cljs.core.apply.call(null,cljs.core.hash_map,map__30269):map__30269);var filter = cljs.core.get.call(null,map__30269__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30269__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30269__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30269,map__30269__$1,filter,label__$1,value,s__30263__$2,temp__4126__auto__,attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30269,map__30269__$1,filter,label__$1,value,s__30263__$2,temp__4126__auto__,attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30262.call(null,cljs.core.rest.call(null,s__30263__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242))
,null,null));
});})(attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30261),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242){
return (function iter__30270(s__30271){return (new cljs.core.LazySeq(null,((function (attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242){
return (function (){var s__30271__$1 = s__30271;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30271__$1);if(temp__4126__auto__)
{var s__30271__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30271__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30271__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30273 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30272 = (0);while(true){
if((i__30272 < size__4376__auto__))
{var map__30276 = cljs.core._nth.call(null,c__4375__auto__,i__30272);var map__30276__$1 = ((cljs.core.seq_QMARK_.call(null,map__30276))?cljs.core.apply.call(null,cljs.core.hash_map,map__30276):map__30276);var filter = cljs.core.get.call(null,map__30276__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30276__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30276__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30273,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30272,map__30276,map__30276__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30273,s__30271__$2,temp__4126__auto__,attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30272,map__30276,map__30276__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30273,s__30271__$2,temp__4126__auto__,attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30282 = (i__30272 + (1));
i__30272 = G__30282;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30273),iter__30270.call(null,cljs.core.chunk_rest.call(null,s__30271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30273),null);
}
} else
{var map__30277 = cljs.core.first.call(null,s__30271__$2);var map__30277__$1 = ((cljs.core.seq_QMARK_.call(null,map__30277))?cljs.core.apply.call(null,cljs.core.hash_map,map__30277):map__30277);var filter = cljs.core.get.call(null,map__30277__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30277__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30277__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30277,map__30277__$1,filter,label__$1,value,s__30271__$2,temp__4126__auto__,attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30277,map__30277__$1,filter,label__$1,value,s__30271__$2,temp__4126__auto__,attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30270.call(null,cljs.core.rest.call(null,s__30271__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242))
,null,null));
});})(attrs30261,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30283 = output_checker30242.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30283))
{var error__6036__auto___30284 = temp__4126__auto___30283;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30284)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30284,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30239,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30239,input_schema30240,input_checker30241,output_checker30242))
,schema.core.make_fn_schema.call(null,output_schema30239,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30240], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30430 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30290 = schema.core.Any;var input_schema30291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30288","map30288",1514756933,null))], null);var input_checker30292 = schema.core.checker.call(null,input_schema30291);var output_checker30293 = schema.core.checker.call(null,output_schema30290);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293){
return (function constructor30286(G__30294){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30431 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30294], null);var temp__4126__auto___30432 = input_checker30292.call(null,args__6035__auto___30431);if(cljs.core.truth_(temp__4126__auto___30432))
{var error__6036__auto___30433 = temp__4126__auto___30432;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30286","constructor30286",764618742,null),cljs.core.pr_str.call(null,error__6036__auto___30433)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30433,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30431,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30291,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30288 = G__30294;while(true){
if(cljs.core.map_QMARK_.call(null,map30288))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30288)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30288,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30289 = plumbing.fnk.schema.safe_get.call(null,map30288,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30289,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30288,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30361 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30361 = (function (component_spec,component_filter_rq_chan,input_schema30291,owner,map30288,data,output_checker30293,filter_spec,map30289,constructor30286,input_checker30292,validate__6034__auto__,id,G__30294,ufv__,output_schema30290,meta30362){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema30291 = input_schema30291;
this.owner = owner;
this.map30288 = map30288;
this.data = data;
this.output_checker30293 = output_checker30293;
this.filter_spec = filter_spec;
this.map30289 = map30289;
this.constructor30286 = constructor30286;
this.input_checker30292 = input_checker30292;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__30294 = G__30294;
this.ufv__ = ufv__;
this.output_schema30290 = output_schema30290;
this.meta30362 = meta30362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30361.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30361.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30361";
clustermap.components.filters.checkboxes_filter.t30361.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30361");
});})(owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293))
;
clustermap.components.filters.checkboxes_filter.t30361.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30361.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293))
;
clustermap.components.filters.checkboxes_filter.t30361.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30361.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293))
;
clustermap.components.filters.checkboxes_filter.t30361.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30361.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293){
return (function (state_30401){var state_val_30402 = (state_30401[(1)]);if((state_val_30402 === (7)))
{var inst_30392 = (state_30401[(2)]);var state_30401__$1 = state_30401;if(cljs.core.truth_(inst_30392))
{var statearr_30403_30434 = state_30401__$1;(statearr_30403_30434[(1)] = (11));
} else
{var statearr_30404_30435 = state_30401__$1;(statearr_30404_30435[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30402 === (1)))
{var state_30401__$1 = state_30401;var statearr_30405_30436 = state_30401__$1;(statearr_30405_30436[(2)] = null);
(statearr_30405_30436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30402 === (4)))
{var inst_30366 = (state_30401[(7)]);var inst_30366__$1 = (state_30401[(2)]);var state_30401__$1 = (function (){var statearr_30406 = state_30401;(statearr_30406[(7)] = inst_30366__$1);
return statearr_30406;
})();if(cljs.core.truth_(inst_30366__$1))
{var statearr_30407_30437 = state_30401__$1;(statearr_30407_30437[(1)] = (5));
} else
{var statearr_30408_30438 = state_30401__$1;(statearr_30408_30438[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30402 === (13)))
{var inst_30397 = (state_30401[(2)]);var state_30401__$1 = state_30401;var statearr_30409_30439 = state_30401__$1;(statearr_30409_30439[(2)] = inst_30397);
(statearr_30409_30439[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30402 === (6)))
{var state_30401__$1 = state_30401;var statearr_30410_30440 = state_30401__$1;(statearr_30410_30440[(2)] = null);
(statearr_30410_30440[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30402 === (3)))
{var inst_30399 = (state_30401[(2)]);var state_30401__$1 = state_30401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30401__$1,inst_30399);
} else
{if((state_val_30402 === (12)))
{var state_30401__$1 = state_30401;var statearr_30411_30441 = state_30401__$1;(statearr_30411_30441[(2)] = null);
(statearr_30411_30441[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30402 === (2)))
{var state_30401__$1 = state_30401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30401__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30402 === (11)))
{var state_30401__$1 = state_30401;var statearr_30412_30442 = state_30401__$1;(statearr_30412_30442[(2)] = null);
(statearr_30412_30442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30402 === (9)))
{var inst_30372 = (state_30401[(8)]);var state_30401__$1 = state_30401;var statearr_30413_30443 = state_30401__$1;(statearr_30413_30443[(2)] = inst_30372);
(statearr_30413_30443[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30402 === (5)))
{var inst_30372 = (state_30401[(8)]);var inst_30366 = (state_30401[(7)]);var inst_30369 = cljs.core.nth.call(null,inst_30366,(0),null);var inst_30370 = cljs.core.nth.call(null,inst_30366,(1),null);var inst_30372__$1 = om.core.get_props.call(null,self__.owner);var inst_30373 = cljs.core.seq_QMARK_.call(null,inst_30372__$1);var state_30401__$1 = (function (){var statearr_30414 = state_30401;(statearr_30414[(9)] = inst_30370);
(statearr_30414[(8)] = inst_30372__$1);
(statearr_30414[(10)] = inst_30369);
return statearr_30414;
})();if(inst_30373)
{var statearr_30415_30444 = state_30401__$1;(statearr_30415_30444[(1)] = (8));
} else
{var statearr_30416_30445 = state_30401__$1;(statearr_30416_30445[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30402 === (10)))
{var inst_30370 = (state_30401[(9)]);var inst_30378 = (state_30401[(2)]);var inst_30379 = cljs.core.get.call(null,inst_30378,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30380 = cljs.core.get.call(null,inst_30378,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30381 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30382 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30370];var inst_30383 = (new cljs.core.PersistentVector(null,3,(5),inst_30381,inst_30382,null));var inst_30384 = cljs.core.clj__GT_js.call(null,inst_30383);var inst_30385 = console.log(inst_30384);var inst_30386 = cljs.core.deref.call(null,inst_30380);var inst_30387 = cljs.core.deref.call(null,inst_30379);var inst_30388 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30386,inst_30387,inst_30370);var inst_30389 = om.core.update_BANG_.call(null,inst_30380,inst_30388);var state_30401__$1 = (function (){var statearr_30417 = state_30401;(statearr_30417[(11)] = inst_30389);
(statearr_30417[(12)] = inst_30385);
return statearr_30417;
})();var statearr_30418_30446 = state_30401__$1;(statearr_30418_30446[(2)] = true);
(statearr_30418_30446[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30402 === (8)))
{var inst_30372 = (state_30401[(8)]);var inst_30375 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30372);var state_30401__$1 = state_30401;var statearr_30419_30447 = state_30401__$1;(statearr_30419_30447[(2)] = inst_30375);
(statearr_30419_30447[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30423 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30423[(0)] = state_machine__9111__auto__);
(statearr_30423[(1)] = (1));
return statearr_30423;
});
var state_machine__9111__auto____1 = (function (state_30401){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30401);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30424){if((e30424 instanceof Object))
{var ex__9114__auto__ = e30424;var statearr_30425_30448 = state_30401;(statearr_30425_30448[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30401);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30424;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30449 = state_30401;
state_30401 = G__30449;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30401){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293))
})();var state__9127__auto__ = (function (){var statearr_30426 = f__9126__auto__.call(null);(statearr_30426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293))
;
clustermap.components.filters.checkboxes_filter.t30361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293){
return (function (_30363){var self__ = this;
var _30363__$1 = this;return self__.meta30362;
});})(owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293))
;
clustermap.components.filters.checkboxes_filter.t30361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293){
return (function (_30363,meta30362__$1){var self__ = this;
var _30363__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30361(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema30291,self__.owner,self__.map30288,self__.data,self__.output_checker30293,self__.filter_spec,self__.map30289,self__.constructor30286,self__.input_checker30292,self__.validate__6034__auto__,self__.id,self__.G__30294,self__.ufv__,self__.output_schema30290,meta30362__$1));
});})(owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293))
;
clustermap.components.filters.checkboxes_filter.__GT_t30361 = ((function (owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293){
return (function __GT_t30361(component_spec__$1,component_filter_rq_chan__$1,input_schema30291__$1,owner__$1,map30288__$1,data__$1,output_checker30293__$1,filter_spec__$1,map30289__$1,constructor30286__$1,input_checker30292__$1,validate__6034__auto____$1,id__$1,G__30294__$1,ufv____$1,output_schema30290__$1,meta30362){return (new clustermap.components.filters.checkboxes_filter.t30361(component_spec__$1,component_filter_rq_chan__$1,input_schema30291__$1,owner__$1,map30288__$1,data__$1,output_checker30293__$1,filter_spec__$1,map30289__$1,constructor30286__$1,input_checker30292__$1,validate__6034__auto____$1,id__$1,G__30294__$1,ufv____$1,output_schema30290__$1,meta30362));
});})(owner,component_filter_rq_chan,map30289,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30361(component_spec,component_filter_rq_chan,input_schema30291,owner,map30288,data,output_checker30293,filter_spec,map30289,constructor30286,input_checker30292,validate__6034__auto__,id,G__30294,ufv__,output_schema30290,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30450 = output_checker30293.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30450))
{var error__6036__auto___30451 = temp__4126__auto___30450;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30286","constructor30286",764618742,null),cljs.core.pr_str.call(null,error__6036__auto___30451)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30451,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30290,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30290,input_schema30291,input_checker30292,output_checker30293))
,schema.core.make_fn_schema.call(null,output_schema30290,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30291], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30430){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30285,p__30427){var vec__30429 = p__30427;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30429,(0),null);return component_fnk__7881__auto___30430.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30285,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30285,var_args){
var p__30427 = null;if (arguments.length > 2) {
  p__30427 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30285,p__30427);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30452){
var data__7882__auto__ = cljs.core.first(arglist__30452);
arglist__30452 = cljs.core.next(arglist__30452);
var owner30285 = cljs.core.first(arglist__30452);
var p__30427 = cljs.core.rest(arglist__30452);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30285,p__30427);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30430))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30287){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30287);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30287){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
