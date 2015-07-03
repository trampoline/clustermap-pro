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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30705(s__30706){return (new cljs.core.LazySeq(null,(function (){var s__30706__$1 = s__30706;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30706__$1);if(temp__4126__auto__)
{var s__30706__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30706__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30706__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30708 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30707 = (0);while(true){
if((i__30707 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30707);cljs.core.chunk_append.call(null,b__30708,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30709 = (i__30707 + (1));
i__30707 = G__30709;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30708),iter__30705.call(null,cljs.core.chunk_rest.call(null,s__30706__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30708),null);
}
} else
{var o = cljs.core.first.call(null,s__30706__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30705.call(null,cljs.core.rest.call(null,s__30706__$2)));
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
return (function (p1__30710_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30710_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30713 = options;var G__30713__$1 = (((G__30713 == null))?null:cljs.core.filter.call(null,((function (G__30713,values__$1){
return (function (p1__30711_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30711_SHARP_));
});})(G__30713,values__$1))
,G__30713));var G__30713__$2 = (((G__30713__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30713__$1));return G__30713__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30715,values){var map__30717 = p__30715;var map__30717__$1 = ((cljs.core.seq_QMARK_.call(null,map__30717))?cljs.core.apply.call(null,cljs.core.hash_map,map__30717):map__30717);var component_spec = map__30717__$1;var options = cljs.core.get.call(null,map__30717__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30717__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30717,map__30717__$1,component_spec,options,label){
return (function (p1__30714_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30714_SHARP_));
});})(values__$1,map__30717,map__30717__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30718,values){var map__30720 = p__30718;var map__30720__$1 = ((cljs.core.seq_QMARK_.call(null,map__30720))?cljs.core.apply.call(null,cljs.core.hash_map,map__30720):map__30720);var component_spec = map__30720__$1;var options = cljs.core.get.call(null,map__30720__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30720__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30721){var map__30723 = p__30721;var map__30723__$1 = ((cljs.core.seq_QMARK_.call(null,map__30723))?cljs.core.apply.call(null,cljs.core.hash_map,map__30723):map__30723);var component_spec = map__30723__$1;var options = cljs.core.get.call(null,map__30723__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30723__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),options));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30724){var map__30726 = p__30724;var map__30726__$1 = ((cljs.core.seq_QMARK_.call(null,map__30726))?cljs.core.apply.call(null,cljs.core.hash_map,map__30726):map__30726);var component_spec = map__30726__$1;var options = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30727 = schema.core.Any;var input_schema30728 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30729 = schema.core.checker.call(null,input_schema30728);var output_checker30730 = schema.core.checker.call(null,output_schema30727);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730){
return (function render_STAR_(G__30731){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30766 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30731], null);var temp__4126__auto___30767 = input_checker30729.call(null,args__6035__auto___30766);if(cljs.core.truth_(temp__4126__auto___30767))
{var error__6036__auto___30768 = temp__4126__auto___30767;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30768)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30768,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30766,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30728,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30731;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30749 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30749))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30749)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30749))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730){
return (function iter__30750(s__30751){return (new cljs.core.LazySeq(null,((function (attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730){
return (function (){var s__30751__$1 = s__30751;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30751__$1);if(temp__4126__auto__)
{var s__30751__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30751__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30751__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30753 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30752 = (0);while(true){
if((i__30752 < size__4376__auto__))
{var map__30756 = cljs.core._nth.call(null,c__4375__auto__,i__30752);var map__30756__$1 = ((cljs.core.seq_QMARK_.call(null,map__30756))?cljs.core.apply.call(null,cljs.core.hash_map,map__30756):map__30756);var filter = cljs.core.get.call(null,map__30756__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30756__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30756__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30753,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30752,map__30756,map__30756__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30753,s__30751__$2,temp__4126__auto__,attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30752,map__30756,map__30756__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30753,s__30751__$2,temp__4126__auto__,attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30769 = (i__30752 + (1));
i__30752 = G__30769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30753),iter__30750.call(null,cljs.core.chunk_rest.call(null,s__30751__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30753),null);
}
} else
{var map__30757 = cljs.core.first.call(null,s__30751__$2);var map__30757__$1 = ((cljs.core.seq_QMARK_.call(null,map__30757))?cljs.core.apply.call(null,cljs.core.hash_map,map__30757):map__30757);var filter = cljs.core.get.call(null,map__30757__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30757__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30757__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30757,map__30757__$1,filter,label__$1,value,s__30751__$2,temp__4126__auto__,attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30757,map__30757__$1,filter,label__$1,value,s__30751__$2,temp__4126__auto__,attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30750.call(null,cljs.core.rest.call(null,s__30751__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730))
,null,null));
});})(attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30749),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730){
return (function iter__30758(s__30759){return (new cljs.core.LazySeq(null,((function (attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730){
return (function (){var s__30759__$1 = s__30759;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30759__$1);if(temp__4126__auto__)
{var s__30759__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30759__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30759__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30761 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30760 = (0);while(true){
if((i__30760 < size__4376__auto__))
{var map__30764 = cljs.core._nth.call(null,c__4375__auto__,i__30760);var map__30764__$1 = ((cljs.core.seq_QMARK_.call(null,map__30764))?cljs.core.apply.call(null,cljs.core.hash_map,map__30764):map__30764);var filter = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30761,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30760,map__30764,map__30764__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30761,s__30759__$2,temp__4126__auto__,attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30760,map__30764,map__30764__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30761,s__30759__$2,temp__4126__auto__,attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30770 = (i__30760 + (1));
i__30760 = G__30770;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30761),iter__30758.call(null,cljs.core.chunk_rest.call(null,s__30759__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30761),null);
}
} else
{var map__30765 = cljs.core.first.call(null,s__30759__$2);var map__30765__$1 = ((cljs.core.seq_QMARK_.call(null,map__30765))?cljs.core.apply.call(null,cljs.core.hash_map,map__30765):map__30765);var filter = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30765,map__30765__$1,filter,label__$1,value,s__30759__$2,temp__4126__auto__,attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30765,map__30765__$1,filter,label__$1,value,s__30759__$2,temp__4126__auto__,attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30758.call(null,cljs.core.rest.call(null,s__30759__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730))
,null,null));
});})(attrs30749,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30771 = output_checker30730.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30771))
{var error__6036__auto___30772 = temp__4126__auto___30771;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30772)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30772,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30727,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30727,input_schema30728,input_checker30729,output_checker30730))
,schema.core.make_fn_schema.call(null,output_schema30727,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30728], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30918 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30778 = schema.core.Any;var input_schema30779 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30776","map30776",1615575656,null))], null);var input_checker30780 = schema.core.checker.call(null,input_schema30779);var output_checker30781 = schema.core.checker.call(null,output_schema30778);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781){
return (function constructor30774(G__30782){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30919 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30782], null);var temp__4126__auto___30920 = input_checker30780.call(null,args__6035__auto___30919);if(cljs.core.truth_(temp__4126__auto___30920))
{var error__6036__auto___30921 = temp__4126__auto___30920;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30774","constructor30774",-962992257,null),cljs.core.pr_str.call(null,error__6036__auto___30921)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30921,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30919,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30779,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30776 = G__30782;while(true){
if(cljs.core.map_QMARK_.call(null,map30776))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30776)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30776,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30777 = plumbing.fnk.schema.safe_get.call(null,map30776,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30777,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30776,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30849 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30849 = (function (input_checker30780,component_spec,component_filter_rq_chan,owner,data,map30776,G__30782,output_checker30781,filter_spec,input_schema30779,output_schema30778,validate__6034__auto__,id,ufv__,map30777,constructor30774,meta30850){
this.input_checker30780 = input_checker30780;
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.map30776 = map30776;
this.G__30782 = G__30782;
this.output_checker30781 = output_checker30781;
this.filter_spec = filter_spec;
this.input_schema30779 = input_schema30779;
this.output_schema30778 = output_schema30778;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.map30777 = map30777;
this.constructor30774 = constructor30774;
this.meta30850 = meta30850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30849.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30849.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30849";
clustermap.components.filters.checkboxes_filter.t30849.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30849");
});})(owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781))
;
clustermap.components.filters.checkboxes_filter.t30849.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30849.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781))
;
clustermap.components.filters.checkboxes_filter.t30849.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30849.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781))
;
clustermap.components.filters.checkboxes_filter.t30849.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30849.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781){
return (function (state_30889){var state_val_30890 = (state_30889[(1)]);if((state_val_30890 === (7)))
{var inst_30880 = (state_30889[(2)]);var state_30889__$1 = state_30889;if(cljs.core.truth_(inst_30880))
{var statearr_30891_30922 = state_30889__$1;(statearr_30891_30922[(1)] = (11));
} else
{var statearr_30892_30923 = state_30889__$1;(statearr_30892_30923[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30890 === (1)))
{var state_30889__$1 = state_30889;var statearr_30893_30924 = state_30889__$1;(statearr_30893_30924[(2)] = null);
(statearr_30893_30924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30890 === (4)))
{var inst_30854 = (state_30889[(7)]);var inst_30854__$1 = (state_30889[(2)]);var state_30889__$1 = (function (){var statearr_30894 = state_30889;(statearr_30894[(7)] = inst_30854__$1);
return statearr_30894;
})();if(cljs.core.truth_(inst_30854__$1))
{var statearr_30895_30925 = state_30889__$1;(statearr_30895_30925[(1)] = (5));
} else
{var statearr_30896_30926 = state_30889__$1;(statearr_30896_30926[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30890 === (13)))
{var inst_30885 = (state_30889[(2)]);var state_30889__$1 = state_30889;var statearr_30897_30927 = state_30889__$1;(statearr_30897_30927[(2)] = inst_30885);
(statearr_30897_30927[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30890 === (6)))
{var state_30889__$1 = state_30889;var statearr_30898_30928 = state_30889__$1;(statearr_30898_30928[(2)] = null);
(statearr_30898_30928[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30890 === (3)))
{var inst_30887 = (state_30889[(2)]);var state_30889__$1 = state_30889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30889__$1,inst_30887);
} else
{if((state_val_30890 === (12)))
{var state_30889__$1 = state_30889;var statearr_30899_30929 = state_30889__$1;(statearr_30899_30929[(2)] = null);
(statearr_30899_30929[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30890 === (2)))
{var state_30889__$1 = state_30889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30889__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30890 === (11)))
{var state_30889__$1 = state_30889;var statearr_30900_30930 = state_30889__$1;(statearr_30900_30930[(2)] = null);
(statearr_30900_30930[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30890 === (9)))
{var inst_30860 = (state_30889[(8)]);var state_30889__$1 = state_30889;var statearr_30901_30931 = state_30889__$1;(statearr_30901_30931[(2)] = inst_30860);
(statearr_30901_30931[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30890 === (5)))
{var inst_30860 = (state_30889[(8)]);var inst_30854 = (state_30889[(7)]);var inst_30857 = cljs.core.nth.call(null,inst_30854,(0),null);var inst_30858 = cljs.core.nth.call(null,inst_30854,(1),null);var inst_30860__$1 = om.core.get_props.call(null,self__.owner);var inst_30861 = cljs.core.seq_QMARK_.call(null,inst_30860__$1);var state_30889__$1 = (function (){var statearr_30902 = state_30889;(statearr_30902[(9)] = inst_30857);
(statearr_30902[(10)] = inst_30858);
(statearr_30902[(8)] = inst_30860__$1);
return statearr_30902;
})();if(inst_30861)
{var statearr_30903_30932 = state_30889__$1;(statearr_30903_30932[(1)] = (8));
} else
{var statearr_30904_30933 = state_30889__$1;(statearr_30904_30933[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30890 === (10)))
{var inst_30858 = (state_30889[(10)]);var inst_30866 = (state_30889[(2)]);var inst_30867 = cljs.core.get.call(null,inst_30866,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30868 = cljs.core.get.call(null,inst_30866,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30869 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30870 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30858];var inst_30871 = (new cljs.core.PersistentVector(null,3,(5),inst_30869,inst_30870,null));var inst_30872 = cljs.core.clj__GT_js.call(null,inst_30871);var inst_30873 = console.log(inst_30872);var inst_30874 = cljs.core.deref.call(null,inst_30868);var inst_30875 = cljs.core.deref.call(null,inst_30867);var inst_30876 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30874,inst_30875,inst_30858);var inst_30877 = om.core.update_BANG_.call(null,inst_30868,inst_30876);var state_30889__$1 = (function (){var statearr_30905 = state_30889;(statearr_30905[(11)] = inst_30873);
(statearr_30905[(12)] = inst_30877);
return statearr_30905;
})();var statearr_30906_30934 = state_30889__$1;(statearr_30906_30934[(2)] = true);
(statearr_30906_30934[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30890 === (8)))
{var inst_30860 = (state_30889[(8)]);var inst_30863 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30860);var state_30889__$1 = state_30889;var statearr_30907_30935 = state_30889__$1;(statearr_30907_30935[(2)] = inst_30863);
(statearr_30907_30935[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30911 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30911[(0)] = state_machine__9111__auto__);
(statearr_30911[(1)] = (1));
return statearr_30911;
});
var state_machine__9111__auto____1 = (function (state_30889){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30889);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30912){if((e30912 instanceof Object))
{var ex__9114__auto__ = e30912;var statearr_30913_30936 = state_30889;(statearr_30913_30936[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30889);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30912;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30937 = state_30889;
state_30889 = G__30937;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30889){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781))
})();var state__9127__auto__ = (function (){var statearr_30914 = f__9126__auto__.call(null);(statearr_30914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30914;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781))
;
clustermap.components.filters.checkboxes_filter.t30849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781){
return (function (_30851){var self__ = this;
var _30851__$1 = this;return self__.meta30850;
});})(owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781))
;
clustermap.components.filters.checkboxes_filter.t30849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781){
return (function (_30851,meta30850__$1){var self__ = this;
var _30851__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30849(self__.input_checker30780,self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.map30776,self__.G__30782,self__.output_checker30781,self__.filter_spec,self__.input_schema30779,self__.output_schema30778,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.map30777,self__.constructor30774,meta30850__$1));
});})(owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781))
;
clustermap.components.filters.checkboxes_filter.__GT_t30849 = ((function (owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781){
return (function __GT_t30849(input_checker30780__$1,component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,map30776__$1,G__30782__$1,output_checker30781__$1,filter_spec__$1,input_schema30779__$1,output_schema30778__$1,validate__6034__auto____$1,id__$1,ufv____$1,map30777__$1,constructor30774__$1,meta30850){return (new clustermap.components.filters.checkboxes_filter.t30849(input_checker30780__$1,component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,map30776__$1,G__30782__$1,output_checker30781__$1,filter_spec__$1,input_schema30779__$1,output_schema30778__$1,validate__6034__auto____$1,id__$1,ufv____$1,map30777__$1,constructor30774__$1,meta30850));
});})(owner,component_filter_rq_chan,map30777,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30849(input_checker30780,component_spec,component_filter_rq_chan,owner,data,map30776,G__30782,output_checker30781,filter_spec,input_schema30779,output_schema30778,validate__6034__auto__,id,ufv__,map30777,constructor30774,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30938 = output_checker30781.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30938))
{var error__6036__auto___30939 = temp__4126__auto___30938;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30774","constructor30774",-962992257,null),cljs.core.pr_str.call(null,error__6036__auto___30939)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30939,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30778,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30778,input_schema30779,input_checker30780,output_checker30781))
,schema.core.make_fn_schema.call(null,output_schema30778,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30779], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30918){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30773,p__30915){var vec__30917 = p__30915;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30917,(0),null);return component_fnk__7881__auto___30918.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30773,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30773,var_args){
var p__30915 = null;if (arguments.length > 2) {
  p__30915 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30773,p__30915);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30940){
var data__7882__auto__ = cljs.core.first(arglist__30940);
arglist__30940 = cljs.core.next(arglist__30940);
var owner30773 = cljs.core.first(arglist__30940);
var p__30915 = cljs.core.rest(arglist__30940);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30773,p__30915);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30918))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30775){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30775);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30775){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
