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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30572(s__30573){return (new cljs.core.LazySeq(null,(function (){var s__30573__$1 = s__30573;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30573__$1);if(temp__4126__auto__)
{var s__30573__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30573__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30573__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30575 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30574 = (0);while(true){
if((i__30574 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30574);cljs.core.chunk_append.call(null,b__30575,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30576 = (i__30574 + (1));
i__30574 = G__30576;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30575),iter__30572.call(null,cljs.core.chunk_rest.call(null,s__30573__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30575),null);
}
} else
{var o = cljs.core.first.call(null,s__30573__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30572.call(null,cljs.core.rest.call(null,s__30573__$2)));
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
return (function (p1__30577_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30577_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30580 = options;var G__30580__$1 = (((G__30580 == null))?null:cljs.core.filter.call(null,((function (G__30580,values__$1){
return (function (p1__30578_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30578_SHARP_));
});})(G__30580,values__$1))
,G__30580));var G__30580__$2 = (((G__30580__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30580__$1));return G__30580__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30582,values){var map__30584 = p__30582;var map__30584__$1 = ((cljs.core.seq_QMARK_.call(null,map__30584))?cljs.core.apply.call(null,cljs.core.hash_map,map__30584):map__30584);var component_spec = map__30584__$1;var options = cljs.core.get.call(null,map__30584__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30584__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30584,map__30584__$1,component_spec,options,label){
return (function (p1__30581_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30581_SHARP_));
});})(values__$1,map__30584,map__30584__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30585,values){var map__30587 = p__30585;var map__30587__$1 = ((cljs.core.seq_QMARK_.call(null,map__30587))?cljs.core.apply.call(null,cljs.core.hash_map,map__30587):map__30587);var component_spec = map__30587__$1;var options = cljs.core.get.call(null,map__30587__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30587__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30588){var map__30590 = p__30588;var map__30590__$1 = ((cljs.core.seq_QMARK_.call(null,map__30590))?cljs.core.apply.call(null,cljs.core.hash_map,map__30590):map__30590);var component_spec = map__30590__$1;var options = cljs.core.get.call(null,map__30590__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30590__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),options));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30591){var map__30593 = p__30591;var map__30593__$1 = ((cljs.core.seq_QMARK_.call(null,map__30593))?cljs.core.apply.call(null,cljs.core.hash_map,map__30593):map__30593);var component_spec = map__30593__$1;var options = cljs.core.get.call(null,map__30593__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30593__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30594 = schema.core.Any;var input_schema30595 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30596 = schema.core.checker.call(null,input_schema30595);var output_checker30597 = schema.core.checker.call(null,output_schema30594);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597){
return (function render_STAR_(G__30598){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30633 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30598], null);var temp__4126__auto___30634 = input_checker30596.call(null,args__6035__auto___30633);if(cljs.core.truth_(temp__4126__auto___30634))
{var error__6036__auto___30635 = temp__4126__auto___30634;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30635)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30635,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30633,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30595,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30598;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30616 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30616))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30616)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30616))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597){
return (function iter__30617(s__30618){return (new cljs.core.LazySeq(null,((function (attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597){
return (function (){var s__30618__$1 = s__30618;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30618__$1);if(temp__4126__auto__)
{var s__30618__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30618__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30618__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30620 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30619 = (0);while(true){
if((i__30619 < size__4376__auto__))
{var map__30623 = cljs.core._nth.call(null,c__4375__auto__,i__30619);var map__30623__$1 = ((cljs.core.seq_QMARK_.call(null,map__30623))?cljs.core.apply.call(null,cljs.core.hash_map,map__30623):map__30623);var filter = cljs.core.get.call(null,map__30623__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30623__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30623__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30620,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30619,map__30623,map__30623__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30620,s__30618__$2,temp__4126__auto__,attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30619,map__30623,map__30623__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30620,s__30618__$2,temp__4126__auto__,attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30636 = (i__30619 + (1));
i__30619 = G__30636;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30620),iter__30617.call(null,cljs.core.chunk_rest.call(null,s__30618__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30620),null);
}
} else
{var map__30624 = cljs.core.first.call(null,s__30618__$2);var map__30624__$1 = ((cljs.core.seq_QMARK_.call(null,map__30624))?cljs.core.apply.call(null,cljs.core.hash_map,map__30624):map__30624);var filter = cljs.core.get.call(null,map__30624__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30624__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30624__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30624,map__30624__$1,filter,label__$1,value,s__30618__$2,temp__4126__auto__,attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30624,map__30624__$1,filter,label__$1,value,s__30618__$2,temp__4126__auto__,attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30617.call(null,cljs.core.rest.call(null,s__30618__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597))
,null,null));
});})(attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30616),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597){
return (function iter__30625(s__30626){return (new cljs.core.LazySeq(null,((function (attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597){
return (function (){var s__30626__$1 = s__30626;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30626__$1);if(temp__4126__auto__)
{var s__30626__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30626__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30626__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30628 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30627 = (0);while(true){
if((i__30627 < size__4376__auto__))
{var map__30631 = cljs.core._nth.call(null,c__4375__auto__,i__30627);var map__30631__$1 = ((cljs.core.seq_QMARK_.call(null,map__30631))?cljs.core.apply.call(null,cljs.core.hash_map,map__30631):map__30631);var filter = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30628,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30627,map__30631,map__30631__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30628,s__30626__$2,temp__4126__auto__,attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30627,map__30631,map__30631__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30628,s__30626__$2,temp__4126__auto__,attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30637 = (i__30627 + (1));
i__30627 = G__30637;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30628),iter__30625.call(null,cljs.core.chunk_rest.call(null,s__30626__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30628),null);
}
} else
{var map__30632 = cljs.core.first.call(null,s__30626__$2);var map__30632__$1 = ((cljs.core.seq_QMARK_.call(null,map__30632))?cljs.core.apply.call(null,cljs.core.hash_map,map__30632):map__30632);var filter = cljs.core.get.call(null,map__30632__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30632__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30632__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30632,map__30632__$1,filter,label__$1,value,s__30626__$2,temp__4126__auto__,attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30632,map__30632__$1,filter,label__$1,value,s__30626__$2,temp__4126__auto__,attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30625.call(null,cljs.core.rest.call(null,s__30626__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597))
,null,null));
});})(attrs30616,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30638 = output_checker30597.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30638))
{var error__6036__auto___30639 = temp__4126__auto___30638;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30639)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30639,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30594,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30594,input_schema30595,input_checker30596,output_checker30597))
,schema.core.make_fn_schema.call(null,output_schema30594,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30595], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30785 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30645 = schema.core.Any;var input_schema30646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30643","map30643",1146172745,null))], null);var input_checker30647 = schema.core.checker.call(null,input_schema30646);var output_checker30648 = schema.core.checker.call(null,output_schema30645);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648){
return (function constructor30641(G__30649){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30649], null);var temp__4126__auto___30787 = input_checker30647.call(null,args__6035__auto___30786);if(cljs.core.truth_(temp__4126__auto___30787))
{var error__6036__auto___30788 = temp__4126__auto___30787;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30641","constructor30641",910363160,null),cljs.core.pr_str.call(null,error__6036__auto___30788)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30788,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30786,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30646,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30643 = G__30649;while(true){
if(cljs.core.map_QMARK_.call(null,map30643))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30643)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30643,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30644 = plumbing.fnk.schema.safe_get.call(null,map30643,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30644,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30643,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30716 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30716 = (function (component_spec,component_filter_rq_chan,owner,data,output_schema30645,map30643,input_checker30647,G__30649,input_schema30646,filter_spec,output_checker30648,constructor30641,validate__6034__auto__,id,map30644,ufv__,meta30717){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.output_schema30645 = output_schema30645;
this.map30643 = map30643;
this.input_checker30647 = input_checker30647;
this.G__30649 = G__30649;
this.input_schema30646 = input_schema30646;
this.filter_spec = filter_spec;
this.output_checker30648 = output_checker30648;
this.constructor30641 = constructor30641;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map30644 = map30644;
this.ufv__ = ufv__;
this.meta30717 = meta30717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30716.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30716.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30716";
clustermap.components.filters.checkboxes_filter.t30716.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30716");
});})(owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648))
;
clustermap.components.filters.checkboxes_filter.t30716.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30716.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648))
;
clustermap.components.filters.checkboxes_filter.t30716.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30716.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648))
;
clustermap.components.filters.checkboxes_filter.t30716.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30716.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648){
return (function (state_30756){var state_val_30757 = (state_30756[(1)]);if((state_val_30757 === (7)))
{var inst_30747 = (state_30756[(2)]);var state_30756__$1 = state_30756;if(cljs.core.truth_(inst_30747))
{var statearr_30758_30789 = state_30756__$1;(statearr_30758_30789[(1)] = (11));
} else
{var statearr_30759_30790 = state_30756__$1;(statearr_30759_30790[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30757 === (1)))
{var state_30756__$1 = state_30756;var statearr_30760_30791 = state_30756__$1;(statearr_30760_30791[(2)] = null);
(statearr_30760_30791[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30757 === (4)))
{var inst_30721 = (state_30756[(7)]);var inst_30721__$1 = (state_30756[(2)]);var state_30756__$1 = (function (){var statearr_30761 = state_30756;(statearr_30761[(7)] = inst_30721__$1);
return statearr_30761;
})();if(cljs.core.truth_(inst_30721__$1))
{var statearr_30762_30792 = state_30756__$1;(statearr_30762_30792[(1)] = (5));
} else
{var statearr_30763_30793 = state_30756__$1;(statearr_30763_30793[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30757 === (13)))
{var inst_30752 = (state_30756[(2)]);var state_30756__$1 = state_30756;var statearr_30764_30794 = state_30756__$1;(statearr_30764_30794[(2)] = inst_30752);
(statearr_30764_30794[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30757 === (6)))
{var state_30756__$1 = state_30756;var statearr_30765_30795 = state_30756__$1;(statearr_30765_30795[(2)] = null);
(statearr_30765_30795[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30757 === (3)))
{var inst_30754 = (state_30756[(2)]);var state_30756__$1 = state_30756;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30756__$1,inst_30754);
} else
{if((state_val_30757 === (12)))
{var state_30756__$1 = state_30756;var statearr_30766_30796 = state_30756__$1;(statearr_30766_30796[(2)] = null);
(statearr_30766_30796[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30757 === (2)))
{var state_30756__$1 = state_30756;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30756__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30757 === (11)))
{var state_30756__$1 = state_30756;var statearr_30767_30797 = state_30756__$1;(statearr_30767_30797[(2)] = null);
(statearr_30767_30797[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30757 === (9)))
{var inst_30727 = (state_30756[(8)]);var state_30756__$1 = state_30756;var statearr_30768_30798 = state_30756__$1;(statearr_30768_30798[(2)] = inst_30727);
(statearr_30768_30798[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30757 === (5)))
{var inst_30721 = (state_30756[(7)]);var inst_30727 = (state_30756[(8)]);var inst_30724 = cljs.core.nth.call(null,inst_30721,(0),null);var inst_30725 = cljs.core.nth.call(null,inst_30721,(1),null);var inst_30727__$1 = om.core.get_props.call(null,self__.owner);var inst_30728 = cljs.core.seq_QMARK_.call(null,inst_30727__$1);var state_30756__$1 = (function (){var statearr_30769 = state_30756;(statearr_30769[(9)] = inst_30724);
(statearr_30769[(10)] = inst_30725);
(statearr_30769[(8)] = inst_30727__$1);
return statearr_30769;
})();if(inst_30728)
{var statearr_30770_30799 = state_30756__$1;(statearr_30770_30799[(1)] = (8));
} else
{var statearr_30771_30800 = state_30756__$1;(statearr_30771_30800[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30757 === (10)))
{var inst_30725 = (state_30756[(10)]);var inst_30733 = (state_30756[(2)]);var inst_30734 = cljs.core.get.call(null,inst_30733,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30735 = cljs.core.get.call(null,inst_30733,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30736 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30737 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30725];var inst_30738 = (new cljs.core.PersistentVector(null,3,(5),inst_30736,inst_30737,null));var inst_30739 = cljs.core.clj__GT_js.call(null,inst_30738);var inst_30740 = console.log(inst_30739);var inst_30741 = cljs.core.deref.call(null,inst_30735);var inst_30742 = cljs.core.deref.call(null,inst_30734);var inst_30743 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30741,inst_30742,inst_30725);var inst_30744 = om.core.update_BANG_.call(null,inst_30735,inst_30743);var state_30756__$1 = (function (){var statearr_30772 = state_30756;(statearr_30772[(11)] = inst_30740);
(statearr_30772[(12)] = inst_30744);
return statearr_30772;
})();var statearr_30773_30801 = state_30756__$1;(statearr_30773_30801[(2)] = true);
(statearr_30773_30801[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30757 === (8)))
{var inst_30727 = (state_30756[(8)]);var inst_30730 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30727);var state_30756__$1 = state_30756;var statearr_30774_30802 = state_30756__$1;(statearr_30774_30802[(2)] = inst_30730);
(statearr_30774_30802[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30778 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30778[(0)] = state_machine__9111__auto__);
(statearr_30778[(1)] = (1));
return statearr_30778;
});
var state_machine__9111__auto____1 = (function (state_30756){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30756);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30779){if((e30779 instanceof Object))
{var ex__9114__auto__ = e30779;var statearr_30780_30803 = state_30756;(statearr_30780_30803[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30756);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30779;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30804 = state_30756;
state_30756 = G__30804;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30756){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648))
})();var state__9127__auto__ = (function (){var statearr_30781 = f__9126__auto__.call(null);(statearr_30781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648))
;
clustermap.components.filters.checkboxes_filter.t30716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648){
return (function (_30718){var self__ = this;
var _30718__$1 = this;return self__.meta30717;
});})(owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648))
;
clustermap.components.filters.checkboxes_filter.t30716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648){
return (function (_30718,meta30717__$1){var self__ = this;
var _30718__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30716(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.output_schema30645,self__.map30643,self__.input_checker30647,self__.G__30649,self__.input_schema30646,self__.filter_spec,self__.output_checker30648,self__.constructor30641,self__.validate__6034__auto__,self__.id,self__.map30644,self__.ufv__,meta30717__$1));
});})(owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648))
;
clustermap.components.filters.checkboxes_filter.__GT_t30716 = ((function (owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648){
return (function __GT_t30716(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,output_schema30645__$1,map30643__$1,input_checker30647__$1,G__30649__$1,input_schema30646__$1,filter_spec__$1,output_checker30648__$1,constructor30641__$1,validate__6034__auto____$1,id__$1,map30644__$1,ufv____$1,meta30717){return (new clustermap.components.filters.checkboxes_filter.t30716(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,output_schema30645__$1,map30643__$1,input_checker30647__$1,G__30649__$1,input_schema30646__$1,filter_spec__$1,output_checker30648__$1,constructor30641__$1,validate__6034__auto____$1,id__$1,map30644__$1,ufv____$1,meta30717));
});})(owner,component_filter_rq_chan,map30644,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30716(component_spec,component_filter_rq_chan,owner,data,output_schema30645,map30643,input_checker30647,G__30649,input_schema30646,filter_spec,output_checker30648,constructor30641,validate__6034__auto__,id,map30644,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30805 = output_checker30648.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30805))
{var error__6036__auto___30806 = temp__4126__auto___30805;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30641","constructor30641",910363160,null),cljs.core.pr_str.call(null,error__6036__auto___30806)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30806,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30645,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30645,input_schema30646,input_checker30647,output_checker30648))
,schema.core.make_fn_schema.call(null,output_schema30645,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30646], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30785){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30640,p__30782){var vec__30784 = p__30782;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30784,(0),null);return component_fnk__7881__auto___30785.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30640,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30640,var_args){
var p__30782 = null;if (arguments.length > 2) {
  p__30782 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30640,p__30782);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30807){
var data__7882__auto__ = cljs.core.first(arglist__30807);
arglist__30807 = cljs.core.next(arglist__30807);
var owner30640 = cljs.core.first(arglist__30807);
var p__30782 = cljs.core.rest(arglist__30807);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30640,p__30782);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30785))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30642){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30642);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30642){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
