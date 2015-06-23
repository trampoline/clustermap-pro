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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30579(s__30580){return (new cljs.core.LazySeq(null,(function (){var s__30580__$1 = s__30580;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30580__$1);if(temp__4126__auto__)
{var s__30580__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30580__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30580__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30582 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30581 = (0);while(true){
if((i__30581 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30581);cljs.core.chunk_append.call(null,b__30582,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30583 = (i__30581 + (1));
i__30581 = G__30583;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30582),iter__30579.call(null,cljs.core.chunk_rest.call(null,s__30580__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30582),null);
}
} else
{var o = cljs.core.first.call(null,s__30580__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30579.call(null,cljs.core.rest.call(null,s__30580__$2)));
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
return (function (p1__30584_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30584_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30587 = options;var G__30587__$1 = (((G__30587 == null))?null:cljs.core.filter.call(null,((function (G__30587,values__$1){
return (function (p1__30585_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30585_SHARP_));
});})(G__30587,values__$1))
,G__30587));var G__30587__$2 = (((G__30587__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30587__$1));return G__30587__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30589,values){var map__30591 = p__30589;var map__30591__$1 = ((cljs.core.seq_QMARK_.call(null,map__30591))?cljs.core.apply.call(null,cljs.core.hash_map,map__30591):map__30591);var component_spec = map__30591__$1;var options = cljs.core.get.call(null,map__30591__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30591__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30591,map__30591__$1,component_spec,options,label){
return (function (p1__30588_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30588_SHARP_));
});})(values__$1,map__30591,map__30591__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30592,values){var map__30594 = p__30592;var map__30594__$1 = ((cljs.core.seq_QMARK_.call(null,map__30594))?cljs.core.apply.call(null,cljs.core.hash_map,map__30594):map__30594);var component_spec = map__30594__$1;var options = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30595){var map__30597 = p__30595;var map__30597__$1 = ((cljs.core.seq_QMARK_.call(null,map__30597))?cljs.core.apply.call(null,cljs.core.hash_map,map__30597):map__30597);var component_spec = map__30597__$1;var options = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),options));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30598){var map__30600 = p__30598;var map__30600__$1 = ((cljs.core.seq_QMARK_.call(null,map__30600))?cljs.core.apply.call(null,cljs.core.hash_map,map__30600):map__30600);var component_spec = map__30600__$1;var options = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30600__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30601 = schema.core.Any;var input_schema30602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30603 = schema.core.checker.call(null,input_schema30602);var output_checker30604 = schema.core.checker.call(null,output_schema30601);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604){
return (function render_STAR_(G__30605){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30640 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30605], null);var temp__4126__auto___30641 = input_checker30603.call(null,args__6035__auto___30640);if(cljs.core.truth_(temp__4126__auto___30641))
{var error__6036__auto___30642 = temp__4126__auto___30641;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30642)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30642,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30640,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30602,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30605;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30623 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30623))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30623)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30623))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604){
return (function iter__30624(s__30625){return (new cljs.core.LazySeq(null,((function (attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604){
return (function (){var s__30625__$1 = s__30625;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30625__$1);if(temp__4126__auto__)
{var s__30625__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30625__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30625__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30627 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30626 = (0);while(true){
if((i__30626 < size__4376__auto__))
{var map__30630 = cljs.core._nth.call(null,c__4375__auto__,i__30626);var map__30630__$1 = ((cljs.core.seq_QMARK_.call(null,map__30630))?cljs.core.apply.call(null,cljs.core.hash_map,map__30630):map__30630);var filter = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30627,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30626,map__30630,map__30630__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30627,s__30625__$2,temp__4126__auto__,attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30626,map__30630,map__30630__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30627,s__30625__$2,temp__4126__auto__,attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30643 = (i__30626 + (1));
i__30626 = G__30643;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30627),iter__30624.call(null,cljs.core.chunk_rest.call(null,s__30625__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30627),null);
}
} else
{var map__30631 = cljs.core.first.call(null,s__30625__$2);var map__30631__$1 = ((cljs.core.seq_QMARK_.call(null,map__30631))?cljs.core.apply.call(null,cljs.core.hash_map,map__30631):map__30631);var filter = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30631,map__30631__$1,filter,label__$1,value,s__30625__$2,temp__4126__auto__,attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30631,map__30631__$1,filter,label__$1,value,s__30625__$2,temp__4126__auto__,attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30624.call(null,cljs.core.rest.call(null,s__30625__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604))
,null,null));
});})(attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30623),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604){
return (function iter__30632(s__30633){return (new cljs.core.LazySeq(null,((function (attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604){
return (function (){var s__30633__$1 = s__30633;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30633__$1);if(temp__4126__auto__)
{var s__30633__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30633__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30633__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30635 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30634 = (0);while(true){
if((i__30634 < size__4376__auto__))
{var map__30638 = cljs.core._nth.call(null,c__4375__auto__,i__30634);var map__30638__$1 = ((cljs.core.seq_QMARK_.call(null,map__30638))?cljs.core.apply.call(null,cljs.core.hash_map,map__30638):map__30638);var filter = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30635,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30634,map__30638,map__30638__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30635,s__30633__$2,temp__4126__auto__,attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30634,map__30638,map__30638__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30635,s__30633__$2,temp__4126__auto__,attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30644 = (i__30634 + (1));
i__30634 = G__30644;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30635),iter__30632.call(null,cljs.core.chunk_rest.call(null,s__30633__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30635),null);
}
} else
{var map__30639 = cljs.core.first.call(null,s__30633__$2);var map__30639__$1 = ((cljs.core.seq_QMARK_.call(null,map__30639))?cljs.core.apply.call(null,cljs.core.hash_map,map__30639):map__30639);var filter = cljs.core.get.call(null,map__30639__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30639__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30639__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30639,map__30639__$1,filter,label__$1,value,s__30633__$2,temp__4126__auto__,attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30639,map__30639__$1,filter,label__$1,value,s__30633__$2,temp__4126__auto__,attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30632.call(null,cljs.core.rest.call(null,s__30633__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604))
,null,null));
});})(attrs30623,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30645 = output_checker30604.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30645))
{var error__6036__auto___30646 = temp__4126__auto___30645;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30646)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30646,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30601,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30601,input_schema30602,input_checker30603,output_checker30604))
,schema.core.make_fn_schema.call(null,output_schema30601,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30602], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30792 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30652 = schema.core.Any;var input_schema30653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30650","map30650",19894378,null))], null);var input_checker30654 = schema.core.checker.call(null,input_schema30653);var output_checker30655 = schema.core.checker.call(null,output_schema30652);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655){
return (function constructor30648(G__30656){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30793 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30656], null);var temp__4126__auto___30794 = input_checker30654.call(null,args__6035__auto___30793);if(cljs.core.truth_(temp__4126__auto___30794))
{var error__6036__auto___30795 = temp__4126__auto___30794;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30648","constructor30648",-1585196012,null),cljs.core.pr_str.call(null,error__6036__auto___30795)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30795,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30793,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30653,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30650 = G__30656;while(true){
if(cljs.core.map_QMARK_.call(null,map30650))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30650)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30650,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30651 = plumbing.fnk.schema.safe_get.call(null,map30650,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30651,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30650,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30723 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30723 = (function (component_spec,component_filter_rq_chan,owner,data,map30650,filter_spec,output_checker30655,input_schema30653,map30651,constructor30648,output_schema30652,G__30656,input_checker30654,validate__6034__auto__,id,ufv__,meta30724){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.map30650 = map30650;
this.filter_spec = filter_spec;
this.output_checker30655 = output_checker30655;
this.input_schema30653 = input_schema30653;
this.map30651 = map30651;
this.constructor30648 = constructor30648;
this.output_schema30652 = output_schema30652;
this.G__30656 = G__30656;
this.input_checker30654 = input_checker30654;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta30724 = meta30724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30723.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30723.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30723";
clustermap.components.filters.checkboxes_filter.t30723.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30723");
});})(owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655))
;
clustermap.components.filters.checkboxes_filter.t30723.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30723.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655))
;
clustermap.components.filters.checkboxes_filter.t30723.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30723.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655))
;
clustermap.components.filters.checkboxes_filter.t30723.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30723.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655){
return (function (state_30763){var state_val_30764 = (state_30763[(1)]);if((state_val_30764 === (7)))
{var inst_30754 = (state_30763[(2)]);var state_30763__$1 = state_30763;if(cljs.core.truth_(inst_30754))
{var statearr_30765_30796 = state_30763__$1;(statearr_30765_30796[(1)] = (11));
} else
{var statearr_30766_30797 = state_30763__$1;(statearr_30766_30797[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30764 === (1)))
{var state_30763__$1 = state_30763;var statearr_30767_30798 = state_30763__$1;(statearr_30767_30798[(2)] = null);
(statearr_30767_30798[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30764 === (4)))
{var inst_30728 = (state_30763[(7)]);var inst_30728__$1 = (state_30763[(2)]);var state_30763__$1 = (function (){var statearr_30768 = state_30763;(statearr_30768[(7)] = inst_30728__$1);
return statearr_30768;
})();if(cljs.core.truth_(inst_30728__$1))
{var statearr_30769_30799 = state_30763__$1;(statearr_30769_30799[(1)] = (5));
} else
{var statearr_30770_30800 = state_30763__$1;(statearr_30770_30800[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30764 === (13)))
{var inst_30759 = (state_30763[(2)]);var state_30763__$1 = state_30763;var statearr_30771_30801 = state_30763__$1;(statearr_30771_30801[(2)] = inst_30759);
(statearr_30771_30801[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30764 === (6)))
{var state_30763__$1 = state_30763;var statearr_30772_30802 = state_30763__$1;(statearr_30772_30802[(2)] = null);
(statearr_30772_30802[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30764 === (3)))
{var inst_30761 = (state_30763[(2)]);var state_30763__$1 = state_30763;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30763__$1,inst_30761);
} else
{if((state_val_30764 === (12)))
{var state_30763__$1 = state_30763;var statearr_30773_30803 = state_30763__$1;(statearr_30773_30803[(2)] = null);
(statearr_30773_30803[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30764 === (2)))
{var state_30763__$1 = state_30763;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30763__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30764 === (11)))
{var state_30763__$1 = state_30763;var statearr_30774_30804 = state_30763__$1;(statearr_30774_30804[(2)] = null);
(statearr_30774_30804[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30764 === (9)))
{var inst_30734 = (state_30763[(8)]);var state_30763__$1 = state_30763;var statearr_30775_30805 = state_30763__$1;(statearr_30775_30805[(2)] = inst_30734);
(statearr_30775_30805[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30764 === (5)))
{var inst_30728 = (state_30763[(7)]);var inst_30734 = (state_30763[(8)]);var inst_30731 = cljs.core.nth.call(null,inst_30728,(0),null);var inst_30732 = cljs.core.nth.call(null,inst_30728,(1),null);var inst_30734__$1 = om.core.get_props.call(null,self__.owner);var inst_30735 = cljs.core.seq_QMARK_.call(null,inst_30734__$1);var state_30763__$1 = (function (){var statearr_30776 = state_30763;(statearr_30776[(8)] = inst_30734__$1);
(statearr_30776[(9)] = inst_30732);
(statearr_30776[(10)] = inst_30731);
return statearr_30776;
})();if(inst_30735)
{var statearr_30777_30806 = state_30763__$1;(statearr_30777_30806[(1)] = (8));
} else
{var statearr_30778_30807 = state_30763__$1;(statearr_30778_30807[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30764 === (10)))
{var inst_30732 = (state_30763[(9)]);var inst_30740 = (state_30763[(2)]);var inst_30741 = cljs.core.get.call(null,inst_30740,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30742 = cljs.core.get.call(null,inst_30740,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30743 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30744 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30732];var inst_30745 = (new cljs.core.PersistentVector(null,3,(5),inst_30743,inst_30744,null));var inst_30746 = cljs.core.clj__GT_js.call(null,inst_30745);var inst_30747 = console.log(inst_30746);var inst_30748 = cljs.core.deref.call(null,inst_30742);var inst_30749 = cljs.core.deref.call(null,inst_30741);var inst_30750 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30748,inst_30749,inst_30732);var inst_30751 = om.core.update_BANG_.call(null,inst_30742,inst_30750);var state_30763__$1 = (function (){var statearr_30779 = state_30763;(statearr_30779[(11)] = inst_30747);
(statearr_30779[(12)] = inst_30751);
return statearr_30779;
})();var statearr_30780_30808 = state_30763__$1;(statearr_30780_30808[(2)] = true);
(statearr_30780_30808[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30764 === (8)))
{var inst_30734 = (state_30763[(8)]);var inst_30737 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30734);var state_30763__$1 = state_30763;var statearr_30781_30809 = state_30763__$1;(statearr_30781_30809[(2)] = inst_30737);
(statearr_30781_30809[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30785 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30785[(0)] = state_machine__9111__auto__);
(statearr_30785[(1)] = (1));
return statearr_30785;
});
var state_machine__9111__auto____1 = (function (state_30763){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30763);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30786){if((e30786 instanceof Object))
{var ex__9114__auto__ = e30786;var statearr_30787_30810 = state_30763;(statearr_30787_30810[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30763);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30786;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30811 = state_30763;
state_30763 = G__30811;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30763){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655))
})();var state__9127__auto__ = (function (){var statearr_30788 = f__9126__auto__.call(null);(statearr_30788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655))
;
clustermap.components.filters.checkboxes_filter.t30723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655){
return (function (_30725){var self__ = this;
var _30725__$1 = this;return self__.meta30724;
});})(owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655))
;
clustermap.components.filters.checkboxes_filter.t30723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655){
return (function (_30725,meta30724__$1){var self__ = this;
var _30725__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30723(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.map30650,self__.filter_spec,self__.output_checker30655,self__.input_schema30653,self__.map30651,self__.constructor30648,self__.output_schema30652,self__.G__30656,self__.input_checker30654,self__.validate__6034__auto__,self__.id,self__.ufv__,meta30724__$1));
});})(owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655))
;
clustermap.components.filters.checkboxes_filter.__GT_t30723 = ((function (owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655){
return (function __GT_t30723(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,map30650__$1,filter_spec__$1,output_checker30655__$1,input_schema30653__$1,map30651__$1,constructor30648__$1,output_schema30652__$1,G__30656__$1,input_checker30654__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30724){return (new clustermap.components.filters.checkboxes_filter.t30723(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,map30650__$1,filter_spec__$1,output_checker30655__$1,input_schema30653__$1,map30651__$1,constructor30648__$1,output_schema30652__$1,G__30656__$1,input_checker30654__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30724));
});})(owner,component_filter_rq_chan,map30651,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30723(component_spec,component_filter_rq_chan,owner,data,map30650,filter_spec,output_checker30655,input_schema30653,map30651,constructor30648,output_schema30652,G__30656,input_checker30654,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30812 = output_checker30655.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30812))
{var error__6036__auto___30813 = temp__4126__auto___30812;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30648","constructor30648",-1585196012,null),cljs.core.pr_str.call(null,error__6036__auto___30813)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30813,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30652,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30652,input_schema30653,input_checker30654,output_checker30655))
,schema.core.make_fn_schema.call(null,output_schema30652,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30653], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30792){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30647,p__30789){var vec__30791 = p__30789;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30791,(0),null);return component_fnk__7881__auto___30792.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30647,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30647,var_args){
var p__30789 = null;if (arguments.length > 2) {
  p__30789 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30647,p__30789);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30814){
var data__7882__auto__ = cljs.core.first(arglist__30814);
arglist__30814 = cljs.core.next(arglist__30814);
var owner30647 = cljs.core.first(arglist__30814);
var p__30789 = cljs.core.rest(arglist__30814);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30647,p__30789);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30792))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30649){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30649);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30649){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
