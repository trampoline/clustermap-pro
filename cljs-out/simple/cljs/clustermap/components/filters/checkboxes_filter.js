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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30491(s__30492){return (new cljs.core.LazySeq(null,(function (){var s__30492__$1 = s__30492;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30492__$1);if(temp__4126__auto__)
{var s__30492__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30492__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30492__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30494 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30493 = (0);while(true){
if((i__30493 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30493);cljs.core.chunk_append.call(null,b__30494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30495 = (i__30493 + (1));
i__30493 = G__30495;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30494),iter__30491.call(null,cljs.core.chunk_rest.call(null,s__30492__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30494),null);
}
} else
{var o = cljs.core.first.call(null,s__30492__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30491.call(null,cljs.core.rest.call(null,s__30492__$2)));
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
return (function (p1__30496_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30496_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30499 = options;var G__30499__$1 = (((G__30499 == null))?null:cljs.core.filter.call(null,((function (G__30499,values__$1){
return (function (p1__30497_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30497_SHARP_));
});})(G__30499,values__$1))
,G__30499));var G__30499__$2 = (((G__30499__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30499__$1));return G__30499__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30501,values){var map__30503 = p__30501;var map__30503__$1 = ((cljs.core.seq_QMARK_.call(null,map__30503))?cljs.core.apply.call(null,cljs.core.hash_map,map__30503):map__30503);var component_spec = map__30503__$1;var options = cljs.core.get.call(null,map__30503__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30503__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30503,map__30503__$1,component_spec,options,label){
return (function (p1__30500_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30500_SHARP_));
});})(values__$1,map__30503,map__30503__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30504,values){var map__30506 = p__30504;var map__30506__$1 = ((cljs.core.seq_QMARK_.call(null,map__30506))?cljs.core.apply.call(null,cljs.core.hash_map,map__30506):map__30506);var component_spec = map__30506__$1;var options = cljs.core.get.call(null,map__30506__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30506__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30507){var map__30509 = p__30507;var map__30509__$1 = ((cljs.core.seq_QMARK_.call(null,map__30509))?cljs.core.apply.call(null,cljs.core.hash_map,map__30509):map__30509);var component_spec = map__30509__$1;var options = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),options));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30510){var map__30512 = p__30510;var map__30512__$1 = ((cljs.core.seq_QMARK_.call(null,map__30512))?cljs.core.apply.call(null,cljs.core.hash_map,map__30512):map__30512);var component_spec = map__30512__$1;var options = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30513 = schema.core.Any;var input_schema30514 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30515 = schema.core.checker.call(null,input_schema30514);var output_checker30516 = schema.core.checker.call(null,output_schema30513);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function render_STAR_(G__30517){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30517], null);var temp__4126__auto___30553 = input_checker30515.call(null,args__6035__auto___30552);if(cljs.core.truth_(temp__4126__auto___30553))
{var error__6036__auto___30554 = temp__4126__auto___30553;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30554)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30554,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30552,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30514,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30517;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30535 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30535))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30535)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30535))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function iter__30536(s__30537){return (new cljs.core.LazySeq(null,((function (attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (){var s__30537__$1 = s__30537;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30537__$1);if(temp__4126__auto__)
{var s__30537__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30537__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30537__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30539 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30538 = (0);while(true){
if((i__30538 < size__4376__auto__))
{var map__30542 = cljs.core._nth.call(null,c__4375__auto__,i__30538);var map__30542__$1 = ((cljs.core.seq_QMARK_.call(null,map__30542))?cljs.core.apply.call(null,cljs.core.hash_map,map__30542):map__30542);var filter = cljs.core.get.call(null,map__30542__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30542__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30542__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30539,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30538,map__30542,map__30542__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30539,s__30537__$2,temp__4126__auto__,attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30538,map__30542,map__30542__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30539,s__30537__$2,temp__4126__auto__,attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30555 = (i__30538 + (1));
i__30538 = G__30555;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30539),iter__30536.call(null,cljs.core.chunk_rest.call(null,s__30537__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30539),null);
}
} else
{var map__30543 = cljs.core.first.call(null,s__30537__$2);var map__30543__$1 = ((cljs.core.seq_QMARK_.call(null,map__30543))?cljs.core.apply.call(null,cljs.core.hash_map,map__30543):map__30543);var filter = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30543__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30543,map__30543__$1,filter,label__$1,value,s__30537__$2,temp__4126__auto__,attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30543,map__30543__$1,filter,label__$1,value,s__30537__$2,temp__4126__auto__,attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30536.call(null,cljs.core.rest.call(null,s__30537__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
,null,null));
});})(attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30535),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function iter__30544(s__30545){return (new cljs.core.LazySeq(null,((function (attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (){var s__30545__$1 = s__30545;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30545__$1);if(temp__4126__auto__)
{var s__30545__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30545__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30545__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30547 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30546 = (0);while(true){
if((i__30546 < size__4376__auto__))
{var map__30550 = cljs.core._nth.call(null,c__4375__auto__,i__30546);var map__30550__$1 = ((cljs.core.seq_QMARK_.call(null,map__30550))?cljs.core.apply.call(null,cljs.core.hash_map,map__30550):map__30550);var filter = cljs.core.get.call(null,map__30550__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30550__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30550__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30547,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30546,map__30550,map__30550__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30547,s__30545__$2,temp__4126__auto__,attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30546,map__30550,map__30550__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30547,s__30545__$2,temp__4126__auto__,attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30556 = (i__30546 + (1));
i__30546 = G__30556;
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
{var map__30551 = cljs.core.first.call(null,s__30545__$2);var map__30551__$1 = ((cljs.core.seq_QMARK_.call(null,map__30551))?cljs.core.apply.call(null,cljs.core.hash_map,map__30551):map__30551);var filter = cljs.core.get.call(null,map__30551__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30551__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30551__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30551,map__30551__$1,filter,label__$1,value,s__30545__$2,temp__4126__auto__,attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30551,map__30551__$1,filter,label__$1,value,s__30545__$2,temp__4126__auto__,attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30544.call(null,cljs.core.rest.call(null,s__30545__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
,null,null));
});})(attrs30535,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30557 = output_checker30516.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30557))
{var error__6036__auto___30558 = temp__4126__auto___30557;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30558)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30558,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30513,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
,schema.core.make_fn_schema.call(null,output_schema30513,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30514], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30704 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30564 = schema.core.Any;var input_schema30565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30562","map30562",-71704565,null))], null);var input_checker30566 = schema.core.checker.call(null,input_schema30565);var output_checker30567 = schema.core.checker.call(null,output_schema30564);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function constructor30560(G__30568){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30705 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30568], null);var temp__4126__auto___30706 = input_checker30566.call(null,args__6035__auto___30705);if(cljs.core.truth_(temp__4126__auto___30706))
{var error__6036__auto___30707 = temp__4126__auto___30706;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30560","constructor30560",-1467415851,null),cljs.core.pr_str.call(null,error__6036__auto___30707)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30707,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30705,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30565,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30562 = G__30568;while(true){
if(cljs.core.map_QMARK_.call(null,map30562))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30562)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30562,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30563 = plumbing.fnk.schema.safe_get.call(null,map30562,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30563,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30562,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30635 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30635 = (function (component_spec,component_filter_rq_chan,input_checker30566,owner,data,input_schema30565,map30562,filter_spec,constructor30560,validate__6034__auto__,map30563,id,output_checker30567,ufv__,G__30568,output_schema30564,meta30636){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_checker30566 = input_checker30566;
this.owner = owner;
this.data = data;
this.input_schema30565 = input_schema30565;
this.map30562 = map30562;
this.filter_spec = filter_spec;
this.constructor30560 = constructor30560;
this.validate__6034__auto__ = validate__6034__auto__;
this.map30563 = map30563;
this.id = id;
this.output_checker30567 = output_checker30567;
this.ufv__ = ufv__;
this.G__30568 = G__30568;
this.output_schema30564 = output_schema30564;
this.meta30636 = meta30636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30635.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30635.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30635";
clustermap.components.filters.checkboxes_filter.t30635.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30635");
});})(owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
;
clustermap.components.filters.checkboxes_filter.t30635.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30635.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
;
clustermap.components.filters.checkboxes_filter.t30635.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30635.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
;
clustermap.components.filters.checkboxes_filter.t30635.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30635.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function (state_30675){var state_val_30676 = (state_30675[(1)]);if((state_val_30676 === (7)))
{var inst_30666 = (state_30675[(2)]);var state_30675__$1 = state_30675;if(cljs.core.truth_(inst_30666))
{var statearr_30677_30708 = state_30675__$1;(statearr_30677_30708[(1)] = (11));
} else
{var statearr_30678_30709 = state_30675__$1;(statearr_30678_30709[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30676 === (1)))
{var state_30675__$1 = state_30675;var statearr_30679_30710 = state_30675__$1;(statearr_30679_30710[(2)] = null);
(statearr_30679_30710[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30676 === (4)))
{var inst_30640 = (state_30675[(7)]);var inst_30640__$1 = (state_30675[(2)]);var state_30675__$1 = (function (){var statearr_30680 = state_30675;(statearr_30680[(7)] = inst_30640__$1);
return statearr_30680;
})();if(cljs.core.truth_(inst_30640__$1))
{var statearr_30681_30711 = state_30675__$1;(statearr_30681_30711[(1)] = (5));
} else
{var statearr_30682_30712 = state_30675__$1;(statearr_30682_30712[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30676 === (13)))
{var inst_30671 = (state_30675[(2)]);var state_30675__$1 = state_30675;var statearr_30683_30713 = state_30675__$1;(statearr_30683_30713[(2)] = inst_30671);
(statearr_30683_30713[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30676 === (6)))
{var state_30675__$1 = state_30675;var statearr_30684_30714 = state_30675__$1;(statearr_30684_30714[(2)] = null);
(statearr_30684_30714[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30676 === (3)))
{var inst_30673 = (state_30675[(2)]);var state_30675__$1 = state_30675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30675__$1,inst_30673);
} else
{if((state_val_30676 === (12)))
{var state_30675__$1 = state_30675;var statearr_30685_30715 = state_30675__$1;(statearr_30685_30715[(2)] = null);
(statearr_30685_30715[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30676 === (2)))
{var state_30675__$1 = state_30675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30675__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30676 === (11)))
{var state_30675__$1 = state_30675;var statearr_30686_30716 = state_30675__$1;(statearr_30686_30716[(2)] = null);
(statearr_30686_30716[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30676 === (9)))
{var inst_30646 = (state_30675[(8)]);var state_30675__$1 = state_30675;var statearr_30687_30717 = state_30675__$1;(statearr_30687_30717[(2)] = inst_30646);
(statearr_30687_30717[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30676 === (5)))
{var inst_30640 = (state_30675[(7)]);var inst_30646 = (state_30675[(8)]);var inst_30643 = cljs.core.nth.call(null,inst_30640,(0),null);var inst_30644 = cljs.core.nth.call(null,inst_30640,(1),null);var inst_30646__$1 = om.core.get_props.call(null,self__.owner);var inst_30647 = cljs.core.seq_QMARK_.call(null,inst_30646__$1);var state_30675__$1 = (function (){var statearr_30688 = state_30675;(statearr_30688[(9)] = inst_30643);
(statearr_30688[(10)] = inst_30644);
(statearr_30688[(8)] = inst_30646__$1);
return statearr_30688;
})();if(inst_30647)
{var statearr_30689_30718 = state_30675__$1;(statearr_30689_30718[(1)] = (8));
} else
{var statearr_30690_30719 = state_30675__$1;(statearr_30690_30719[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30676 === (10)))
{var inst_30644 = (state_30675[(10)]);var inst_30652 = (state_30675[(2)]);var inst_30653 = cljs.core.get.call(null,inst_30652,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30654 = cljs.core.get.call(null,inst_30652,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30655 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30656 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30644];var inst_30657 = (new cljs.core.PersistentVector(null,3,(5),inst_30655,inst_30656,null));var inst_30658 = cljs.core.clj__GT_js.call(null,inst_30657);var inst_30659 = console.log(inst_30658);var inst_30660 = cljs.core.deref.call(null,inst_30654);var inst_30661 = cljs.core.deref.call(null,inst_30653);var inst_30662 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30660,inst_30661,inst_30644);var inst_30663 = om.core.update_BANG_.call(null,inst_30654,inst_30662);var state_30675__$1 = (function (){var statearr_30691 = state_30675;(statearr_30691[(11)] = inst_30663);
(statearr_30691[(12)] = inst_30659);
return statearr_30691;
})();var statearr_30692_30720 = state_30675__$1;(statearr_30692_30720[(2)] = true);
(statearr_30692_30720[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30676 === (8)))
{var inst_30646 = (state_30675[(8)]);var inst_30649 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30646);var state_30675__$1 = state_30675;var statearr_30693_30721 = state_30675__$1;(statearr_30693_30721[(2)] = inst_30649);
(statearr_30693_30721[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30697 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30697[(0)] = state_machine__9111__auto__);
(statearr_30697[(1)] = (1));
return statearr_30697;
});
var state_machine__9111__auto____1 = (function (state_30675){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30675);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30698){if((e30698 instanceof Object))
{var ex__9114__auto__ = e30698;var statearr_30699_30722 = state_30675;(statearr_30699_30722[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30675);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30698;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30723 = state_30675;
state_30675 = G__30723;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30675){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
})();var state__9127__auto__ = (function (){var statearr_30700 = f__9126__auto__.call(null);(statearr_30700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
;
clustermap.components.filters.checkboxes_filter.t30635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function (_30637){var self__ = this;
var _30637__$1 = this;return self__.meta30636;
});})(owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
;
clustermap.components.filters.checkboxes_filter.t30635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function (_30637,meta30636__$1){var self__ = this;
var _30637__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30635(self__.component_spec,self__.component_filter_rq_chan,self__.input_checker30566,self__.owner,self__.data,self__.input_schema30565,self__.map30562,self__.filter_spec,self__.constructor30560,self__.validate__6034__auto__,self__.map30563,self__.id,self__.output_checker30567,self__.ufv__,self__.G__30568,self__.output_schema30564,meta30636__$1));
});})(owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
;
clustermap.components.filters.checkboxes_filter.__GT_t30635 = ((function (owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function __GT_t30635(component_spec__$1,component_filter_rq_chan__$1,input_checker30566__$1,owner__$1,data__$1,input_schema30565__$1,map30562__$1,filter_spec__$1,constructor30560__$1,validate__6034__auto____$1,map30563__$1,id__$1,output_checker30567__$1,ufv____$1,G__30568__$1,output_schema30564__$1,meta30636){return (new clustermap.components.filters.checkboxes_filter.t30635(component_spec__$1,component_filter_rq_chan__$1,input_checker30566__$1,owner__$1,data__$1,input_schema30565__$1,map30562__$1,filter_spec__$1,constructor30560__$1,validate__6034__auto____$1,map30563__$1,id__$1,output_checker30567__$1,ufv____$1,G__30568__$1,output_schema30564__$1,meta30636));
});})(owner,component_filter_rq_chan,map30563,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30635(component_spec,component_filter_rq_chan,input_checker30566,owner,data,input_schema30565,map30562,filter_spec,constructor30560,validate__6034__auto__,map30563,id,output_checker30567,ufv__,G__30568,output_schema30564,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30724 = output_checker30567.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30724))
{var error__6036__auto___30725 = temp__4126__auto___30724;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30560","constructor30560",-1467415851,null),cljs.core.pr_str.call(null,error__6036__auto___30725)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30725,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30564,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
,schema.core.make_fn_schema.call(null,output_schema30564,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30565], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30704){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30559,p__30701){var vec__30703 = p__30701;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30703,(0),null);return component_fnk__7881__auto___30704.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30559,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30559,var_args){
var p__30701 = null;if (arguments.length > 2) {
  p__30701 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30559,p__30701);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30726){
var data__7882__auto__ = cljs.core.first(arglist__30726);
arglist__30726 = cljs.core.next(arglist__30726);
var owner30559 = cljs.core.first(arglist__30726);
var p__30701 = cljs.core.rest(arglist__30726);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30559,p__30701);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30704))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30561){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30561);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30561){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
