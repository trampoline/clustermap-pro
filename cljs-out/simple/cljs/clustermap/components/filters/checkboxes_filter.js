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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30385(s__30386){return (new cljs.core.LazySeq(null,(function (){var s__30386__$1 = s__30386;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30386__$1);if(temp__4126__auto__)
{var s__30386__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30386__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30386__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30388 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30387 = (0);while(true){
if((i__30387 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30387);cljs.core.chunk_append.call(null,b__30388,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30389 = (i__30387 + (1));
i__30387 = G__30389;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30388),iter__30385.call(null,cljs.core.chunk_rest.call(null,s__30386__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30388),null);
}
} else
{var o = cljs.core.first.call(null,s__30386__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30385.call(null,cljs.core.rest.call(null,s__30386__$2)));
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
return (function (p1__30390_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30390_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30393 = options;var G__30393__$1 = (((G__30393 == null))?null:cljs.core.filter.call(null,((function (G__30393,values__$1){
return (function (p1__30391_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30391_SHARP_));
});})(G__30393,values__$1))
,G__30393));var G__30393__$2 = (((G__30393__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30393__$1));return G__30393__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30395,values){var map__30397 = p__30395;var map__30397__$1 = ((cljs.core.seq_QMARK_.call(null,map__30397))?cljs.core.apply.call(null,cljs.core.hash_map,map__30397):map__30397);var component_spec = map__30397__$1;var options = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30397__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30397,map__30397__$1,component_spec,options,label){
return (function (p1__30394_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30394_SHARP_));
});})(values__$1,map__30397,map__30397__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30398,values){var map__30400 = p__30398;var map__30400__$1 = ((cljs.core.seq_QMARK_.call(null,map__30400))?cljs.core.apply.call(null,cljs.core.hash_map,map__30400):map__30400);var component_spec = map__30400__$1;var options = cljs.core.get.call(null,map__30400__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30400__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30401){var map__30403 = p__30401;var map__30403__$1 = ((cljs.core.seq_QMARK_.call(null,map__30403))?cljs.core.apply.call(null,cljs.core.hash_map,map__30403):map__30403);var component_spec = map__30403__$1;var tags = cljs.core.get.call(null,map__30403__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30403__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30404){var map__30406 = p__30404;var map__30406__$1 = ((cljs.core.seq_QMARK_.call(null,map__30406))?cljs.core.apply.call(null,cljs.core.hash_map,map__30406):map__30406);var component_spec = map__30406__$1;var tags = cljs.core.get.call(null,map__30406__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30406__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30407 = schema.core.Any;var input_schema30408 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30409 = schema.core.checker.call(null,input_schema30408);var output_checker30410 = schema.core.checker.call(null,output_schema30407);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410){
return (function render_STAR_(G__30411){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30411], null);var temp__4126__auto___30447 = input_checker30409.call(null,args__6035__auto___30446);if(cljs.core.truth_(temp__4126__auto___30447))
{var error__6036__auto___30448 = temp__4126__auto___30447;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30448)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30448,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30446,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30408,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30411;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30429 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30429))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30429)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30429))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410){
return (function iter__30430(s__30431){return (new cljs.core.LazySeq(null,((function (attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410){
return (function (){var s__30431__$1 = s__30431;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30431__$1);if(temp__4126__auto__)
{var s__30431__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30431__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30431__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30433 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30432 = (0);while(true){
if((i__30432 < size__4376__auto__))
{var map__30436 = cljs.core._nth.call(null,c__4375__auto__,i__30432);var map__30436__$1 = ((cljs.core.seq_QMARK_.call(null,map__30436))?cljs.core.apply.call(null,cljs.core.hash_map,map__30436):map__30436);var filter = cljs.core.get.call(null,map__30436__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30436__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30436__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30433,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30432,map__30436,map__30436__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30433,s__30431__$2,temp__4126__auto__,attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30432,map__30436,map__30436__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30433,s__30431__$2,temp__4126__auto__,attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30449 = (i__30432 + (1));
i__30432 = G__30449;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30433),iter__30430.call(null,cljs.core.chunk_rest.call(null,s__30431__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30433),null);
}
} else
{var map__30437 = cljs.core.first.call(null,s__30431__$2);var map__30437__$1 = ((cljs.core.seq_QMARK_.call(null,map__30437))?cljs.core.apply.call(null,cljs.core.hash_map,map__30437):map__30437);var filter = cljs.core.get.call(null,map__30437__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30437__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30437__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30437,map__30437__$1,filter,label__$1,value,s__30431__$2,temp__4126__auto__,attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30437,map__30437__$1,filter,label__$1,value,s__30431__$2,temp__4126__auto__,attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30430.call(null,cljs.core.rest.call(null,s__30431__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410))
,null,null));
});})(attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30429),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410){
return (function iter__30438(s__30439){return (new cljs.core.LazySeq(null,((function (attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410){
return (function (){var s__30439__$1 = s__30439;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30439__$1);if(temp__4126__auto__)
{var s__30439__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30439__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30439__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30441 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30440 = (0);while(true){
if((i__30440 < size__4376__auto__))
{var map__30444 = cljs.core._nth.call(null,c__4375__auto__,i__30440);var map__30444__$1 = ((cljs.core.seq_QMARK_.call(null,map__30444))?cljs.core.apply.call(null,cljs.core.hash_map,map__30444):map__30444);var filter = cljs.core.get.call(null,map__30444__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30444__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30444__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30441,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30440,map__30444,map__30444__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30441,s__30439__$2,temp__4126__auto__,attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30440,map__30444,map__30444__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30441,s__30439__$2,temp__4126__auto__,attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30450 = (i__30440 + (1));
i__30440 = G__30450;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30441),iter__30438.call(null,cljs.core.chunk_rest.call(null,s__30439__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30441),null);
}
} else
{var map__30445 = cljs.core.first.call(null,s__30439__$2);var map__30445__$1 = ((cljs.core.seq_QMARK_.call(null,map__30445))?cljs.core.apply.call(null,cljs.core.hash_map,map__30445):map__30445);var filter = cljs.core.get.call(null,map__30445__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30445__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30445__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30445,map__30445__$1,filter,label__$1,value,s__30439__$2,temp__4126__auto__,attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30445,map__30445__$1,filter,label__$1,value,s__30439__$2,temp__4126__auto__,attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30438.call(null,cljs.core.rest.call(null,s__30439__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410))
,null,null));
});})(attrs30429,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30451 = output_checker30410.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30451))
{var error__6036__auto___30452 = temp__4126__auto___30451;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30452)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30452,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30407,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30407,input_schema30408,input_checker30409,output_checker30410))
,schema.core.make_fn_schema.call(null,output_schema30407,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30408], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30598 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30458 = schema.core.Any;var input_schema30459 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30456","map30456",128915438,null))], null);var input_checker30460 = schema.core.checker.call(null,input_schema30459);var output_checker30461 = schema.core.checker.call(null,output_schema30458);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461){
return (function constructor30454(G__30462){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30462], null);var temp__4126__auto___30600 = input_checker30460.call(null,args__6035__auto___30599);if(cljs.core.truth_(temp__4126__auto___30600))
{var error__6036__auto___30601 = temp__4126__auto___30600;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30454","constructor30454",1763125321,null),cljs.core.pr_str.call(null,error__6036__auto___30601)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30601,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30599,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30459,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30456 = G__30462;while(true){
if(cljs.core.map_QMARK_.call(null,map30456))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30456)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30456,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30457 = plumbing.fnk.schema.safe_get.call(null,map30456,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30457,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30456,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30529 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30529 = (function (component_spec,component_filter_rq_chan,G__30462,input_schema30459,owner,data,constructor30454,map30457,map30456,filter_spec,output_checker30461,input_checker30460,validate__6034__auto__,output_schema30458,id,ufv__,meta30530){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.G__30462 = G__30462;
this.input_schema30459 = input_schema30459;
this.owner = owner;
this.data = data;
this.constructor30454 = constructor30454;
this.map30457 = map30457;
this.map30456 = map30456;
this.filter_spec = filter_spec;
this.output_checker30461 = output_checker30461;
this.input_checker30460 = input_checker30460;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_schema30458 = output_schema30458;
this.id = id;
this.ufv__ = ufv__;
this.meta30530 = meta30530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30529.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30529.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30529";
clustermap.components.filters.checkboxes_filter.t30529.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30529");
});})(owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461))
;
clustermap.components.filters.checkboxes_filter.t30529.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30529.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461))
;
clustermap.components.filters.checkboxes_filter.t30529.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30529.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461))
;
clustermap.components.filters.checkboxes_filter.t30529.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30529.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461){
return (function (state_30569){var state_val_30570 = (state_30569[(1)]);if((state_val_30570 === (7)))
{var inst_30560 = (state_30569[(2)]);var state_30569__$1 = state_30569;if(cljs.core.truth_(inst_30560))
{var statearr_30571_30602 = state_30569__$1;(statearr_30571_30602[(1)] = (11));
} else
{var statearr_30572_30603 = state_30569__$1;(statearr_30572_30603[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30570 === (1)))
{var state_30569__$1 = state_30569;var statearr_30573_30604 = state_30569__$1;(statearr_30573_30604[(2)] = null);
(statearr_30573_30604[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30570 === (4)))
{var inst_30534 = (state_30569[(7)]);var inst_30534__$1 = (state_30569[(2)]);var state_30569__$1 = (function (){var statearr_30574 = state_30569;(statearr_30574[(7)] = inst_30534__$1);
return statearr_30574;
})();if(cljs.core.truth_(inst_30534__$1))
{var statearr_30575_30605 = state_30569__$1;(statearr_30575_30605[(1)] = (5));
} else
{var statearr_30576_30606 = state_30569__$1;(statearr_30576_30606[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30570 === (13)))
{var inst_30565 = (state_30569[(2)]);var state_30569__$1 = state_30569;var statearr_30577_30607 = state_30569__$1;(statearr_30577_30607[(2)] = inst_30565);
(statearr_30577_30607[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30570 === (6)))
{var state_30569__$1 = state_30569;var statearr_30578_30608 = state_30569__$1;(statearr_30578_30608[(2)] = null);
(statearr_30578_30608[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30570 === (3)))
{var inst_30567 = (state_30569[(2)]);var state_30569__$1 = state_30569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30569__$1,inst_30567);
} else
{if((state_val_30570 === (12)))
{var state_30569__$1 = state_30569;var statearr_30579_30609 = state_30569__$1;(statearr_30579_30609[(2)] = null);
(statearr_30579_30609[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30570 === (2)))
{var state_30569__$1 = state_30569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30569__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30570 === (11)))
{var state_30569__$1 = state_30569;var statearr_30580_30610 = state_30569__$1;(statearr_30580_30610[(2)] = null);
(statearr_30580_30610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30570 === (9)))
{var inst_30540 = (state_30569[(8)]);var state_30569__$1 = state_30569;var statearr_30581_30611 = state_30569__$1;(statearr_30581_30611[(2)] = inst_30540);
(statearr_30581_30611[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30570 === (5)))
{var inst_30540 = (state_30569[(8)]);var inst_30534 = (state_30569[(7)]);var inst_30537 = cljs.core.nth.call(null,inst_30534,(0),null);var inst_30538 = cljs.core.nth.call(null,inst_30534,(1),null);var inst_30540__$1 = om.core.get_props.call(null,self__.owner);var inst_30541 = cljs.core.seq_QMARK_.call(null,inst_30540__$1);var state_30569__$1 = (function (){var statearr_30582 = state_30569;(statearr_30582[(9)] = inst_30537);
(statearr_30582[(8)] = inst_30540__$1);
(statearr_30582[(10)] = inst_30538);
return statearr_30582;
})();if(inst_30541)
{var statearr_30583_30612 = state_30569__$1;(statearr_30583_30612[(1)] = (8));
} else
{var statearr_30584_30613 = state_30569__$1;(statearr_30584_30613[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30570 === (10)))
{var inst_30538 = (state_30569[(10)]);var inst_30546 = (state_30569[(2)]);var inst_30547 = cljs.core.get.call(null,inst_30546,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30548 = cljs.core.get.call(null,inst_30546,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30549 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30550 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30538];var inst_30551 = (new cljs.core.PersistentVector(null,3,(5),inst_30549,inst_30550,null));var inst_30552 = cljs.core.clj__GT_js.call(null,inst_30551);var inst_30553 = console.log(inst_30552);var inst_30554 = cljs.core.deref.call(null,inst_30548);var inst_30555 = cljs.core.deref.call(null,inst_30547);var inst_30556 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30554,inst_30555,inst_30538);var inst_30557 = om.core.update_BANG_.call(null,inst_30548,inst_30556);var state_30569__$1 = (function (){var statearr_30585 = state_30569;(statearr_30585[(11)] = inst_30557);
(statearr_30585[(12)] = inst_30553);
return statearr_30585;
})();var statearr_30586_30614 = state_30569__$1;(statearr_30586_30614[(2)] = true);
(statearr_30586_30614[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30570 === (8)))
{var inst_30540 = (state_30569[(8)]);var inst_30543 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30540);var state_30569__$1 = state_30569;var statearr_30587_30615 = state_30569__$1;(statearr_30587_30615[(2)] = inst_30543);
(statearr_30587_30615[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30591 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30591[(0)] = state_machine__9111__auto__);
(statearr_30591[(1)] = (1));
return statearr_30591;
});
var state_machine__9111__auto____1 = (function (state_30569){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30569);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30592){if((e30592 instanceof Object))
{var ex__9114__auto__ = e30592;var statearr_30593_30616 = state_30569;(statearr_30593_30616[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30569);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30592;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30617 = state_30569;
state_30569 = G__30617;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30569){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461))
})();var state__9127__auto__ = (function (){var statearr_30594 = f__9126__auto__.call(null);(statearr_30594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461))
;
clustermap.components.filters.checkboxes_filter.t30529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461){
return (function (_30531){var self__ = this;
var _30531__$1 = this;return self__.meta30530;
});})(owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461))
;
clustermap.components.filters.checkboxes_filter.t30529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461){
return (function (_30531,meta30530__$1){var self__ = this;
var _30531__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30529(self__.component_spec,self__.component_filter_rq_chan,self__.G__30462,self__.input_schema30459,self__.owner,self__.data,self__.constructor30454,self__.map30457,self__.map30456,self__.filter_spec,self__.output_checker30461,self__.input_checker30460,self__.validate__6034__auto__,self__.output_schema30458,self__.id,self__.ufv__,meta30530__$1));
});})(owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461))
;
clustermap.components.filters.checkboxes_filter.__GT_t30529 = ((function (owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461){
return (function __GT_t30529(component_spec__$1,component_filter_rq_chan__$1,G__30462__$1,input_schema30459__$1,owner__$1,data__$1,constructor30454__$1,map30457__$1,map30456__$1,filter_spec__$1,output_checker30461__$1,input_checker30460__$1,validate__6034__auto____$1,output_schema30458__$1,id__$1,ufv____$1,meta30530){return (new clustermap.components.filters.checkboxes_filter.t30529(component_spec__$1,component_filter_rq_chan__$1,G__30462__$1,input_schema30459__$1,owner__$1,data__$1,constructor30454__$1,map30457__$1,map30456__$1,filter_spec__$1,output_checker30461__$1,input_checker30460__$1,validate__6034__auto____$1,output_schema30458__$1,id__$1,ufv____$1,meta30530));
});})(owner,component_filter_rq_chan,map30457,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30529(component_spec,component_filter_rq_chan,G__30462,input_schema30459,owner,data,constructor30454,map30457,map30456,filter_spec,output_checker30461,input_checker30460,validate__6034__auto__,output_schema30458,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30618 = output_checker30461.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30618))
{var error__6036__auto___30619 = temp__4126__auto___30618;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30454","constructor30454",1763125321,null),cljs.core.pr_str.call(null,error__6036__auto___30619)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30619,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30458,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30458,input_schema30459,input_checker30460,output_checker30461))
,schema.core.make_fn_schema.call(null,output_schema30458,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30459], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30598){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30453,p__30595){var vec__30597 = p__30595;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30597,(0),null);return component_fnk__7881__auto___30598.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30453,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30453,var_args){
var p__30595 = null;if (arguments.length > 2) {
  p__30595 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30453,p__30595);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30620){
var data__7882__auto__ = cljs.core.first(arglist__30620);
arglist__30620 = cljs.core.next(arglist__30620);
var owner30453 = cljs.core.first(arglist__30620);
var p__30595 = cljs.core.rest(arglist__30620);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30453,p__30595);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30598))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30455){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30455);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30455){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
