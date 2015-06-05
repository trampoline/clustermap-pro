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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29550(s__29551){return (new cljs.core.LazySeq(null,(function (){var s__29551__$1 = s__29551;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29551__$1);if(temp__4126__auto__)
{var s__29551__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29551__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29551__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29553 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29552 = (0);while(true){
if((i__29552 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29552);cljs.core.chunk_append.call(null,b__29553,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29554 = (i__29552 + (1));
i__29552 = G__29554;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29553),iter__29550.call(null,cljs.core.chunk_rest.call(null,s__29551__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29553),null);
}
} else
{var o = cljs.core.first.call(null,s__29551__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29550.call(null,cljs.core.rest.call(null,s__29551__$2)));
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
return (function (p1__29555_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__29555_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__29558 = options;var G__29558__$1 = (((G__29558 == null))?null:cljs.core.filter.call(null,((function (G__29558,values__$1){
return (function (p1__29556_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29556_SHARP_));
});})(G__29558,values__$1))
,G__29558));var G__29558__$2 = (((G__29558__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__29558__$1));return G__29558__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__29560,values){var map__29562 = p__29560;var map__29562__$1 = ((cljs.core.seq_QMARK_.call(null,map__29562))?cljs.core.apply.call(null,cljs.core.hash_map,map__29562):map__29562);var component_spec = map__29562__$1;var options = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29562,map__29562__$1,component_spec,options,label){
return (function (p1__29559_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29559_SHARP_));
});})(values__$1,map__29562,map__29562__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29563,values){var map__29565 = p__29563;var map__29565__$1 = ((cljs.core.seq_QMARK_.call(null,map__29565))?cljs.core.apply.call(null,cljs.core.hash_map,map__29565):map__29565);var component_spec = map__29565__$1;var options = cljs.core.get.call(null,map__29565__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29565__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__29566){var map__29568 = p__29566;var map__29568__$1 = ((cljs.core.seq_QMARK_.call(null,map__29568))?cljs.core.apply.call(null,cljs.core.hash_map,map__29568):map__29568);var component_spec = map__29568__$1;var tags = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29568__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__29569){var map__29571 = p__29569;var map__29571__$1 = ((cljs.core.seq_QMARK_.call(null,map__29571))?cljs.core.apply.call(null,cljs.core.hash_map,map__29571):map__29571);var component_spec = map__29571__$1;var tags = cljs.core.get.call(null,map__29571__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29571__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29572 = schema.core.Any;var input_schema29573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29574 = schema.core.checker.call(null,input_schema29573);var output_checker29575 = schema.core.checker.call(null,output_schema29572);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575){
return (function render_STAR_(G__29576){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29576], null);var temp__4126__auto___29612 = input_checker29574.call(null,args__6035__auto___29611);if(cljs.core.truth_(temp__4126__auto___29612))
{var error__6036__auto___29613 = temp__4126__auto___29612;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29613)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29613,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29611,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29573,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29576;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs29594 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29594))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs29594)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29594))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575){
return (function iter__29595(s__29596){return (new cljs.core.LazySeq(null,((function (attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575){
return (function (){var s__29596__$1 = s__29596;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29596__$1);if(temp__4126__auto__)
{var s__29596__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29596__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29596__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29598 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29597 = (0);while(true){
if((i__29597 < size__4376__auto__))
{var map__29601 = cljs.core._nth.call(null,c__4375__auto__,i__29597);var map__29601__$1 = ((cljs.core.seq_QMARK_.call(null,map__29601))?cljs.core.apply.call(null,cljs.core.hash_map,map__29601):map__29601);var filter = cljs.core.get.call(null,map__29601__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29601__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29601__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29598,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29597,map__29601,map__29601__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29598,s__29596__$2,temp__4126__auto__,attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29597,map__29601,map__29601__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29598,s__29596__$2,temp__4126__auto__,attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29614 = (i__29597 + (1));
i__29597 = G__29614;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29598),iter__29595.call(null,cljs.core.chunk_rest.call(null,s__29596__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29598),null);
}
} else
{var map__29602 = cljs.core.first.call(null,s__29596__$2);var map__29602__$1 = ((cljs.core.seq_QMARK_.call(null,map__29602))?cljs.core.apply.call(null,cljs.core.hash_map,map__29602):map__29602);var filter = cljs.core.get.call(null,map__29602__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29602__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29602__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29602,map__29602__$1,filter,label__$1,value,s__29596__$2,temp__4126__auto__,attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29602,map__29602__$1,filter,label__$1,value,s__29596__$2,temp__4126__auto__,attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29595.call(null,cljs.core.rest.call(null,s__29596__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575))
,null,null));
});})(attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29594),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575){
return (function iter__29603(s__29604){return (new cljs.core.LazySeq(null,((function (attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575){
return (function (){var s__29604__$1 = s__29604;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29604__$1);if(temp__4126__auto__)
{var s__29604__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29604__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29604__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29606 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29605 = (0);while(true){
if((i__29605 < size__4376__auto__))
{var map__29609 = cljs.core._nth.call(null,c__4375__auto__,i__29605);var map__29609__$1 = ((cljs.core.seq_QMARK_.call(null,map__29609))?cljs.core.apply.call(null,cljs.core.hash_map,map__29609):map__29609);var filter = cljs.core.get.call(null,map__29609__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29609__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29609__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29606,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29605,map__29609,map__29609__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29606,s__29604__$2,temp__4126__auto__,attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29605,map__29609,map__29609__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29606,s__29604__$2,temp__4126__auto__,attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29615 = (i__29605 + (1));
i__29605 = G__29615;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29606),iter__29603.call(null,cljs.core.chunk_rest.call(null,s__29604__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29606),null);
}
} else
{var map__29610 = cljs.core.first.call(null,s__29604__$2);var map__29610__$1 = ((cljs.core.seq_QMARK_.call(null,map__29610))?cljs.core.apply.call(null,cljs.core.hash_map,map__29610):map__29610);var filter = cljs.core.get.call(null,map__29610__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29610__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29610__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29610,map__29610__$1,filter,label__$1,value,s__29604__$2,temp__4126__auto__,attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29610,map__29610__$1,filter,label__$1,value,s__29604__$2,temp__4126__auto__,attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29603.call(null,cljs.core.rest.call(null,s__29604__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575))
,null,null));
});})(attrs29594,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29616 = output_checker29575.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29616))
{var error__6036__auto___29617 = temp__4126__auto___29616;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29617)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29617,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29572,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29572,input_schema29573,input_checker29574,output_checker29575))
,schema.core.make_fn_schema.call(null,output_schema29572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29573], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29763 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29623 = schema.core.Any;var input_schema29624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29621","map29621",487098896,null))], null);var input_checker29625 = schema.core.checker.call(null,input_schema29624);var output_checker29626 = schema.core.checker.call(null,output_schema29623);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626){
return (function constructor29619(G__29627){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29764 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29627], null);var temp__4126__auto___29765 = input_checker29625.call(null,args__6035__auto___29764);if(cljs.core.truth_(temp__4126__auto___29765))
{var error__6036__auto___29766 = temp__4126__auto___29765;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29619","constructor29619",1675749902,null),cljs.core.pr_str.call(null,error__6036__auto___29766)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29766,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29764,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29624,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29621 = G__29627;while(true){
if(cljs.core.map_QMARK_.call(null,map29621))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29621)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29621,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29622 = plumbing.fnk.schema.safe_get.call(null,map29621,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29622,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29621,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t29694 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t29694 = (function (component_spec,component_filter_rq_chan,G__29627,owner,data,constructor29619,filter_spec,input_checker29625,output_schema29623,map29621,validate__6034__auto__,output_checker29626,id,input_schema29624,ufv__,map29622,meta29695){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.G__29627 = G__29627;
this.owner = owner;
this.data = data;
this.constructor29619 = constructor29619;
this.filter_spec = filter_spec;
this.input_checker29625 = input_checker29625;
this.output_schema29623 = output_schema29623;
this.map29621 = map29621;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker29626 = output_checker29626;
this.id = id;
this.input_schema29624 = input_schema29624;
this.ufv__ = ufv__;
this.map29622 = map29622;
this.meta29695 = meta29695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t29694.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t29694.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t29694";
clustermap.components.filters.checkboxes_filter.t29694.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t29694");
});})(owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626))
;
clustermap.components.filters.checkboxes_filter.t29694.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t29694.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626))
;
clustermap.components.filters.checkboxes_filter.t29694.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t29694.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626))
;
clustermap.components.filters.checkboxes_filter.t29694.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t29694.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626){
return (function (state_29734){var state_val_29735 = (state_29734[(1)]);if((state_val_29735 === (7)))
{var inst_29725 = (state_29734[(2)]);var state_29734__$1 = state_29734;if(cljs.core.truth_(inst_29725))
{var statearr_29736_29767 = state_29734__$1;(statearr_29736_29767[(1)] = (11));
} else
{var statearr_29737_29768 = state_29734__$1;(statearr_29737_29768[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29735 === (1)))
{var state_29734__$1 = state_29734;var statearr_29738_29769 = state_29734__$1;(statearr_29738_29769[(2)] = null);
(statearr_29738_29769[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29735 === (4)))
{var inst_29699 = (state_29734[(7)]);var inst_29699__$1 = (state_29734[(2)]);var state_29734__$1 = (function (){var statearr_29739 = state_29734;(statearr_29739[(7)] = inst_29699__$1);
return statearr_29739;
})();if(cljs.core.truth_(inst_29699__$1))
{var statearr_29740_29770 = state_29734__$1;(statearr_29740_29770[(1)] = (5));
} else
{var statearr_29741_29771 = state_29734__$1;(statearr_29741_29771[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29735 === (13)))
{var inst_29730 = (state_29734[(2)]);var state_29734__$1 = state_29734;var statearr_29742_29772 = state_29734__$1;(statearr_29742_29772[(2)] = inst_29730);
(statearr_29742_29772[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29735 === (6)))
{var state_29734__$1 = state_29734;var statearr_29743_29773 = state_29734__$1;(statearr_29743_29773[(2)] = null);
(statearr_29743_29773[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29735 === (3)))
{var inst_29732 = (state_29734[(2)]);var state_29734__$1 = state_29734;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29734__$1,inst_29732);
} else
{if((state_val_29735 === (12)))
{var state_29734__$1 = state_29734;var statearr_29744_29774 = state_29734__$1;(statearr_29744_29774[(2)] = null);
(statearr_29744_29774[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29735 === (2)))
{var state_29734__$1 = state_29734;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29734__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29735 === (11)))
{var state_29734__$1 = state_29734;var statearr_29745_29775 = state_29734__$1;(statearr_29745_29775[(2)] = null);
(statearr_29745_29775[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29735 === (9)))
{var inst_29705 = (state_29734[(8)]);var state_29734__$1 = state_29734;var statearr_29746_29776 = state_29734__$1;(statearr_29746_29776[(2)] = inst_29705);
(statearr_29746_29776[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29735 === (5)))
{var inst_29705 = (state_29734[(8)]);var inst_29699 = (state_29734[(7)]);var inst_29702 = cljs.core.nth.call(null,inst_29699,(0),null);var inst_29703 = cljs.core.nth.call(null,inst_29699,(1),null);var inst_29705__$1 = om.core.get_props.call(null,self__.owner);var inst_29706 = cljs.core.seq_QMARK_.call(null,inst_29705__$1);var state_29734__$1 = (function (){var statearr_29747 = state_29734;(statearr_29747[(9)] = inst_29703);
(statearr_29747[(10)] = inst_29702);
(statearr_29747[(8)] = inst_29705__$1);
return statearr_29747;
})();if(inst_29706)
{var statearr_29748_29777 = state_29734__$1;(statearr_29748_29777[(1)] = (8));
} else
{var statearr_29749_29778 = state_29734__$1;(statearr_29749_29778[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29735 === (10)))
{var inst_29703 = (state_29734[(9)]);var inst_29711 = (state_29734[(2)]);var inst_29712 = cljs.core.get.call(null,inst_29711,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29713 = cljs.core.get.call(null,inst_29711,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29714 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29715 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_29703];var inst_29716 = (new cljs.core.PersistentVector(null,3,(5),inst_29714,inst_29715,null));var inst_29717 = cljs.core.clj__GT_js.call(null,inst_29716);var inst_29718 = console.log(inst_29717);var inst_29719 = cljs.core.deref.call(null,inst_29713);var inst_29720 = cljs.core.deref.call(null,inst_29712);var inst_29721 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_29719,inst_29720,inst_29703);var inst_29722 = om.core.update_BANG_.call(null,inst_29713,inst_29721);var state_29734__$1 = (function (){var statearr_29750 = state_29734;(statearr_29750[(11)] = inst_29722);
(statearr_29750[(12)] = inst_29718);
return statearr_29750;
})();var statearr_29751_29779 = state_29734__$1;(statearr_29751_29779[(2)] = true);
(statearr_29751_29779[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29735 === (8)))
{var inst_29705 = (state_29734[(8)]);var inst_29708 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29705);var state_29734__$1 = state_29734;var statearr_29752_29780 = state_29734__$1;(statearr_29752_29780[(2)] = inst_29708);
(statearr_29752_29780[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29756 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29756[(0)] = state_machine__11462__auto__);
(statearr_29756[(1)] = (1));
return statearr_29756;
});
var state_machine__11462__auto____1 = (function (state_29734){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29734);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29757){if((e29757 instanceof Object))
{var ex__11465__auto__ = e29757;var statearr_29758_29781 = state_29734;(statearr_29758_29781[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29734);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29757;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29782 = state_29734;
state_29734 = G__29782;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29734){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626))
})();var state__11519__auto__ = (function (){var statearr_29759 = f__11518__auto__.call(null);(statearr_29759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626))
;
clustermap.components.filters.checkboxes_filter.t29694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626){
return (function (_29696){var self__ = this;
var _29696__$1 = this;return self__.meta29695;
});})(owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626))
;
clustermap.components.filters.checkboxes_filter.t29694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626){
return (function (_29696,meta29695__$1){var self__ = this;
var _29696__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t29694(self__.component_spec,self__.component_filter_rq_chan,self__.G__29627,self__.owner,self__.data,self__.constructor29619,self__.filter_spec,self__.input_checker29625,self__.output_schema29623,self__.map29621,self__.validate__6034__auto__,self__.output_checker29626,self__.id,self__.input_schema29624,self__.ufv__,self__.map29622,meta29695__$1));
});})(owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626))
;
clustermap.components.filters.checkboxes_filter.__GT_t29694 = ((function (owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626){
return (function __GT_t29694(component_spec__$1,component_filter_rq_chan__$1,G__29627__$1,owner__$1,data__$1,constructor29619__$1,filter_spec__$1,input_checker29625__$1,output_schema29623__$1,map29621__$1,validate__6034__auto____$1,output_checker29626__$1,id__$1,input_schema29624__$1,ufv____$1,map29622__$1,meta29695){return (new clustermap.components.filters.checkboxes_filter.t29694(component_spec__$1,component_filter_rq_chan__$1,G__29627__$1,owner__$1,data__$1,constructor29619__$1,filter_spec__$1,input_checker29625__$1,output_schema29623__$1,map29621__$1,validate__6034__auto____$1,output_checker29626__$1,id__$1,input_schema29624__$1,ufv____$1,map29622__$1,meta29695));
});})(owner,component_filter_rq_chan,map29622,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626))
;
}
return (new clustermap.components.filters.checkboxes_filter.t29694(component_spec,component_filter_rq_chan,G__29627,owner,data,constructor29619,filter_spec,input_checker29625,output_schema29623,map29621,validate__6034__auto__,output_checker29626,id,input_schema29624,ufv__,map29622,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29783 = output_checker29626.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29783))
{var error__6036__auto___29784 = temp__4126__auto___29783;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29619","constructor29619",1675749902,null),cljs.core.pr_str.call(null,error__6036__auto___29784)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29784,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29623,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29623,input_schema29624,input_checker29625,output_checker29626))
,schema.core.make_fn_schema.call(null,output_schema29623,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29624], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___29763){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner29618,p__29760){var vec__29762 = p__29760;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29762,(0),null);return component_fnk__7881__auto___29763.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29618,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner29618,var_args){
var p__29760 = null;if (arguments.length > 2) {
  p__29760 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29618,p__29760);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29785){
var data__7882__auto__ = cljs.core.first(arglist__29785);
arglist__29785 = cljs.core.next(arglist__29785);
var owner29618 = cljs.core.first(arglist__29785);
var p__29760 = cljs.core.rest(arglist__29785);
return checkboxes_filter_component__delegate(data__7882__auto__,owner29618,p__29760);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29763))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29620){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m29620);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m29620){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
