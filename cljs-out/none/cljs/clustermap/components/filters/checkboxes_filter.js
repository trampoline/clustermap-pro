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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12290__auto__ = (function iter__29132(s__29133){return (new cljs.core.LazySeq(null,(function (){var s__29133__$1 = s__29133;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29133__$1);if(temp__4126__auto__)
{var s__29133__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29133__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__29133__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__29135 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__29134 = (0);while(true){
if((i__29134 < size__12289__auto__))
{var o = cljs.core._nth.call(null,c__12288__auto__,i__29134);cljs.core.chunk_append.call(null,b__29135,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29136 = (i__29134 + (1));
i__29134 = G__29136;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29135),iter__29132.call(null,cljs.core.chunk_rest.call(null,s__29133__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29135),null);
}
} else
{var o = cljs.core.first.call(null,s__29133__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29132.call(null,cljs.core.rest.call(null,s__29133__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12290__auto__.call(null,options);
})());
});
/**
* given a combined filter, extract the set of option ids this represents
*/
clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter = (function extract_option_values_from_filter(options,f){var fs = cljs.core.set.call(null,clustermap.filters.de_or_filters.call(null,f));return cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.filter.call(null,((function (fs){
return (function (p1__29137_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__29137_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__29140 = options;var G__29140__$1 = (((G__29140 == null))?null:cljs.core.filter.call(null,((function (G__29140,values__$1){
return (function (p1__29138_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29138_SHARP_));
});})(G__29140,values__$1))
,G__29140));var G__29140__$2 = (((G__29140__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__29140__$1));return G__29140__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__29142,values){var map__29144 = p__29142;var map__29144__$1 = ((cljs.core.seq_QMARK_.call(null,map__29144))?cljs.core.apply.call(null,cljs.core.hash_map,map__29144):map__29144);var component_spec = map__29144__$1;var options = cljs.core.get.call(null,map__29144__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29144__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29144,map__29144__$1,component_spec,options,label){
return (function (p1__29141_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29141_SHARP_));
});})(values__$1,map__29144,map__29144__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29145,values){var map__29147 = p__29145;var map__29147__$1 = ((cljs.core.seq_QMARK_.call(null,map__29147))?cljs.core.apply.call(null,cljs.core.hash_map,map__29147):map__29147);var component_spec = map__29147__$1;var options = cljs.core.get.call(null,map__29147__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29147__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__29148){var map__29150 = p__29148;var map__29150__$1 = ((cljs.core.seq_QMARK_.call(null,map__29150))?cljs.core.apply.call(null,cljs.core.hash_map,map__29150):map__29150);var component_spec = map__29150__$1;var options = cljs.core.get.call(null,map__29150__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29150__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),options));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__29151){var map__29153 = p__29151;var map__29153__$1 = ((cljs.core.seq_QMARK_.call(null,map__29153))?cljs.core.apply.call(null,cljs.core.hash_map,map__29153):map__29153);var component_spec = map__29153__$1;var options = cljs.core.get.call(null,map__29153__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29153__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29154 = schema.core.Any;var input_schema29155 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29156 = schema.core.checker.call(null,input_schema29155);var output_checker29157 = schema.core.checker.call(null,output_schema29154);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157){
return (function render_STAR_(G__29158){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___29193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29158], null);var temp__4126__auto___29194 = input_checker29156.call(null,args__13948__auto___29193);if(cljs.core.truth_(temp__4126__auto___29194))
{var error__13949__auto___29195 = temp__4126__auto___29194;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___29195)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29195,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___29193,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29155,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var data = G__29158;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs29176 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29176))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs29176)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29176))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157){
return (function iter__29177(s__29178){return (new cljs.core.LazySeq(null,((function (attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157){
return (function (){var s__29178__$1 = s__29178;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29178__$1);if(temp__4126__auto__)
{var s__29178__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29178__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__29178__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__29180 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__29179 = (0);while(true){
if((i__29179 < size__12289__auto__))
{var map__29183 = cljs.core._nth.call(null,c__12288__auto__,i__29179);var map__29183__$1 = ((cljs.core.seq_QMARK_.call(null,map__29183))?cljs.core.apply.call(null,cljs.core.hash_map,map__29183):map__29183);var filter = cljs.core.get.call(null,map__29183__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29183__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29183__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29180,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29179,map__29183,map__29183__$1,filter,label__$1,value,c__12288__auto__,size__12289__auto__,b__29180,s__29178__$2,temp__4126__auto__,attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29179,map__29183,map__29183__$1,filter,label__$1,value,c__12288__auto__,size__12289__auto__,b__29180,s__29178__$2,temp__4126__auto__,attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29196 = (i__29179 + (1));
i__29179 = G__29196;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29180),iter__29177.call(null,cljs.core.chunk_rest.call(null,s__29178__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29180),null);
}
} else
{var map__29184 = cljs.core.first.call(null,s__29178__$2);var map__29184__$1 = ((cljs.core.seq_QMARK_.call(null,map__29184))?cljs.core.apply.call(null,cljs.core.hash_map,map__29184):map__29184);var filter = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29184,map__29184__$1,filter,label__$1,value,s__29178__$2,temp__4126__auto__,attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29184,map__29184__$1,filter,label__$1,value,s__29178__$2,temp__4126__auto__,attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29177.call(null,cljs.core.rest.call(null,s__29178__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157))
,null,null));
});})(attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157))
;return iter__12290__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29176),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157){
return (function iter__29185(s__29186){return (new cljs.core.LazySeq(null,((function (attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157){
return (function (){var s__29186__$1 = s__29186;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29186__$1);if(temp__4126__auto__)
{var s__29186__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29186__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__29186__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__29188 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__29187 = (0);while(true){
if((i__29187 < size__12289__auto__))
{var map__29191 = cljs.core._nth.call(null,c__12288__auto__,i__29187);var map__29191__$1 = ((cljs.core.seq_QMARK_.call(null,map__29191))?cljs.core.apply.call(null,cljs.core.hash_map,map__29191):map__29191);var filter = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29188,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29187,map__29191,map__29191__$1,filter,label__$1,value,c__12288__auto__,size__12289__auto__,b__29188,s__29186__$2,temp__4126__auto__,attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29187,map__29191,map__29191__$1,filter,label__$1,value,c__12288__auto__,size__12289__auto__,b__29188,s__29186__$2,temp__4126__auto__,attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29197 = (i__29187 + (1));
i__29187 = G__29197;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29188),iter__29185.call(null,cljs.core.chunk_rest.call(null,s__29186__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29188),null);
}
} else
{var map__29192 = cljs.core.first.call(null,s__29186__$2);var map__29192__$1 = ((cljs.core.seq_QMARK_.call(null,map__29192))?cljs.core.apply.call(null,cljs.core.hash_map,map__29192):map__29192);var filter = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29192,map__29192__$1,filter,label__$1,value,s__29186__$2,temp__4126__auto__,attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29192,map__29192__$1,filter,label__$1,value,s__29186__$2,temp__4126__auto__,attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29185.call(null,cljs.core.rest.call(null,s__29186__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157))
,null,null));
});})(attrs29176,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157))
;return iter__12290__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___29198 = output_checker29157.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___29198))
{var error__13949__auto___29199 = temp__4126__auto___29198;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___29199)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29199,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29154,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema29154,input_schema29155,input_checker29156,output_checker29157))
,schema.core.make_fn_schema.call(null,output_schema29154,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29155], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__15794__auto___29345 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29205 = schema.core.Any;var input_schema29206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29203","map29203",167952466,null))], null);var input_checker29207 = schema.core.checker.call(null,input_schema29206);var output_checker29208 = schema.core.checker.call(null,output_schema29205);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208){
return (function constructor29201(G__29209){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___29346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29209], null);var temp__4126__auto___29347 = input_checker29207.call(null,args__13948__auto___29346);if(cljs.core.truth_(temp__4126__auto___29347))
{var error__13949__auto___29348 = temp__4126__auto___29347;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29201","constructor29201",463188789,null),cljs.core.pr_str.call(null,error__13949__auto___29348)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29348,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___29346,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29206,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map29203 = G__29209;while(true){
if(cljs.core.map_QMARK_.call(null,map29203))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29203)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29203,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29204 = plumbing.fnk.schema.safe_get.call(null,map29203,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29204,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29203,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t29276 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t29276 = (function (component_spec,component_filter_rq_chan,map29204,owner,data,filter_spec,input_checker29207,G__29209,input_schema29206,map29203,constructor29201,validate__13947__auto__,id,output_schema29205,ufv__,output_checker29208,meta29277){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map29204 = map29204;
this.owner = owner;
this.data = data;
this.filter_spec = filter_spec;
this.input_checker29207 = input_checker29207;
this.G__29209 = G__29209;
this.input_schema29206 = input_schema29206;
this.map29203 = map29203;
this.constructor29201 = constructor29201;
this.validate__13947__auto__ = validate__13947__auto__;
this.id = id;
this.output_schema29205 = output_schema29205;
this.ufv__ = ufv__;
this.output_checker29208 = output_checker29208;
this.meta29277 = meta29277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t29276.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t29276.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t29276";
clustermap.components.filters.checkboxes_filter.t29276.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.filters.checkboxes-filter/t29276");
});})(owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208))
;
clustermap.components.filters.checkboxes_filter.t29276.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t29276.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208))
;
clustermap.components.filters.checkboxes_filter.t29276.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t29276.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208))
;
clustermap.components.filters.checkboxes_filter.t29276.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t29276.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208){
return (function (_){var self__ = this;
var ___$1 = this;var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208){
return (function (state_29316){var state_val_29317 = (state_29316[(1)]);if((state_val_29317 === (7)))
{var inst_29307 = (state_29316[(2)]);var state_29316__$1 = state_29316;if(cljs.core.truth_(inst_29307))
{var statearr_29318_29349 = state_29316__$1;(statearr_29318_29349[(1)] = (11));
} else
{var statearr_29319_29350 = state_29316__$1;(statearr_29319_29350[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (1)))
{var state_29316__$1 = state_29316;var statearr_29320_29351 = state_29316__$1;(statearr_29320_29351[(2)] = null);
(statearr_29320_29351[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (4)))
{var inst_29281 = (state_29316[(7)]);var inst_29281__$1 = (state_29316[(2)]);var state_29316__$1 = (function (){var statearr_29321 = state_29316;(statearr_29321[(7)] = inst_29281__$1);
return statearr_29321;
})();if(cljs.core.truth_(inst_29281__$1))
{var statearr_29322_29352 = state_29316__$1;(statearr_29322_29352[(1)] = (5));
} else
{var statearr_29323_29353 = state_29316__$1;(statearr_29323_29353[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (13)))
{var inst_29312 = (state_29316[(2)]);var state_29316__$1 = state_29316;var statearr_29324_29354 = state_29316__$1;(statearr_29324_29354[(2)] = inst_29312);
(statearr_29324_29354[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (6)))
{var state_29316__$1 = state_29316;var statearr_29325_29355 = state_29316__$1;(statearr_29325_29355[(2)] = null);
(statearr_29325_29355[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (3)))
{var inst_29314 = (state_29316[(2)]);var state_29316__$1 = state_29316;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29316__$1,inst_29314);
} else
{if((state_val_29317 === (12)))
{var state_29316__$1 = state_29316;var statearr_29326_29356 = state_29316__$1;(statearr_29326_29356[(2)] = null);
(statearr_29326_29356[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (2)))
{var state_29316__$1 = state_29316;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29316__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29317 === (11)))
{var state_29316__$1 = state_29316;var statearr_29327_29357 = state_29316__$1;(statearr_29327_29357[(2)] = null);
(statearr_29327_29357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (9)))
{var inst_29287 = (state_29316[(8)]);var state_29316__$1 = state_29316;var statearr_29328_29358 = state_29316__$1;(statearr_29328_29358[(2)] = inst_29287);
(statearr_29328_29358[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (5)))
{var inst_29281 = (state_29316[(7)]);var inst_29287 = (state_29316[(8)]);var inst_29284 = cljs.core.nth.call(null,inst_29281,(0),null);var inst_29285 = cljs.core.nth.call(null,inst_29281,(1),null);var inst_29287__$1 = om.core.get_props.call(null,self__.owner);var inst_29288 = cljs.core.seq_QMARK_.call(null,inst_29287__$1);var state_29316__$1 = (function (){var statearr_29329 = state_29316;(statearr_29329[(9)] = inst_29284);
(statearr_29329[(8)] = inst_29287__$1);
(statearr_29329[(10)] = inst_29285);
return statearr_29329;
})();if(inst_29288)
{var statearr_29330_29359 = state_29316__$1;(statearr_29330_29359[(1)] = (8));
} else
{var statearr_29331_29360 = state_29316__$1;(statearr_29331_29360[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (10)))
{var inst_29285 = (state_29316[(10)]);var inst_29293 = (state_29316[(2)]);var inst_29294 = cljs.core.get.call(null,inst_29293,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29295 = cljs.core.get.call(null,inst_29293,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29296 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29297 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_29285];var inst_29298 = (new cljs.core.PersistentVector(null,3,(5),inst_29296,inst_29297,null));var inst_29299 = cljs.core.clj__GT_js.call(null,inst_29298);var inst_29300 = console.log(inst_29299);var inst_29301 = cljs.core.deref.call(null,inst_29295);var inst_29302 = cljs.core.deref.call(null,inst_29294);var inst_29303 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_29301,inst_29302,inst_29285);var inst_29304 = om.core.update_BANG_.call(null,inst_29295,inst_29303);var state_29316__$1 = (function (){var statearr_29332 = state_29316;(statearr_29332[(11)] = inst_29304);
(statearr_29332[(12)] = inst_29300);
return statearr_29332;
})();var statearr_29333_29361 = state_29316__$1;(statearr_29333_29361[(2)] = true);
(statearr_29333_29361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29317 === (8)))
{var inst_29287 = (state_29316[(8)]);var inst_29290 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29287);var state_29316__$1 = state_29316;var statearr_29334_29362 = state_29316__$1;(statearr_29334_29362[(2)] = inst_29290);
(statearr_29334_29362[(1)] = (10));
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
});})(c__16733__auto__,___$1,owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_29338 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29338[(0)] = state_machine__16719__auto__);
(statearr_29338[(1)] = (1));
return statearr_29338;
});
var state_machine__16719__auto____1 = (function (state_29316){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_29316);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e29339){if((e29339 instanceof Object))
{var ex__16722__auto__ = e29339;var statearr_29340_29363 = state_29316;(statearr_29340_29363[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29316);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29339;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29364 = state_29316;
state_29316 = G__29364;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_29316){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_29316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208))
})();var state__16735__auto__ = (function (){var statearr_29341 = f__16734__auto__.call(null);(statearr_29341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_29341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208))
);
return c__16733__auto__;
});})(owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208))
;
clustermap.components.filters.checkboxes_filter.t29276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208){
return (function (_29278){var self__ = this;
var _29278__$1 = this;return self__.meta29277;
});})(owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208))
;
clustermap.components.filters.checkboxes_filter.t29276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208){
return (function (_29278,meta29277__$1){var self__ = this;
var _29278__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t29276(self__.component_spec,self__.component_filter_rq_chan,self__.map29204,self__.owner,self__.data,self__.filter_spec,self__.input_checker29207,self__.G__29209,self__.input_schema29206,self__.map29203,self__.constructor29201,self__.validate__13947__auto__,self__.id,self__.output_schema29205,self__.ufv__,self__.output_checker29208,meta29277__$1));
});})(owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208))
;
clustermap.components.filters.checkboxes_filter.__GT_t29276 = ((function (owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208){
return (function __GT_t29276(component_spec__$1,component_filter_rq_chan__$1,map29204__$1,owner__$1,data__$1,filter_spec__$1,input_checker29207__$1,G__29209__$1,input_schema29206__$1,map29203__$1,constructor29201__$1,validate__13947__auto____$1,id__$1,output_schema29205__$1,ufv____$1,output_checker29208__$1,meta29277){return (new clustermap.components.filters.checkboxes_filter.t29276(component_spec__$1,component_filter_rq_chan__$1,map29204__$1,owner__$1,data__$1,filter_spec__$1,input_checker29207__$1,G__29209__$1,input_schema29206__$1,map29203__$1,constructor29201__$1,validate__13947__auto____$1,id__$1,output_schema29205__$1,ufv____$1,output_checker29208__$1,meta29277));
});})(owner,component_filter_rq_chan,map29204,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208))
;
}
return (new clustermap.components.filters.checkboxes_filter.t29276(component_spec,component_filter_rq_chan,map29204,owner,data,filter_spec,input_checker29207,G__29209,input_schema29206,map29203,constructor29201,validate__13947__auto__,id,output_schema29205,ufv__,output_checker29208,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___29365 = output_checker29208.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___29365))
{var error__13949__auto___29366 = temp__4126__auto___29365;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29201","constructor29201",463188789,null),cljs.core.pr_str.call(null,error__13949__auto___29366)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29366,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29205,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema29205,input_schema29206,input_checker29207,output_checker29208))
,schema.core.make_fn_schema.call(null,output_schema29205,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29206], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__15794__auto___29345){
return (function() { 
var checkboxes_filter_component__delegate = function (data__15795__auto__,owner29200,p__29342){var vec__29344 = p__29342;var opts__15796__auto__ = cljs.core.nth.call(null,vec__29344,(0),null);return component_fnk__15794__auto___29345.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29200,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var checkboxes_filter_component = function (data__15795__auto__,owner29200,var_args){
var p__29342 = null;if (arguments.length > 2) {
  p__29342 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__15795__auto__,owner29200,p__29342);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29367){
var data__15795__auto__ = cljs.core.first(arglist__29367);
arglist__29367 = cljs.core.next(arglist__29367);
var owner29200 = cljs.core.first(arglist__29367);
var p__29342 = cljs.core.rest(arglist__29367);
return checkboxes_filter_component__delegate(data__15795__auto__,owner29200,p__29342);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__15794__auto___29345))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__15763__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__15763__auto__,m29202){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__15763__auto__,m29202);
});
__GT_checkboxes_filter_component = function(cursor__15763__auto__,m29202){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__15763__auto__,m29202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;

//# sourceMappingURL=checkboxes_filter.js.map