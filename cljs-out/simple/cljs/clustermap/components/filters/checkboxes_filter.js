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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30519(s__30520){return (new cljs.core.LazySeq(null,(function (){var s__30520__$1 = s__30520;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30520__$1);if(temp__4126__auto__)
{var s__30520__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30520__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30520__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30522 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30521 = (0);while(true){
if((i__30521 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30521);cljs.core.chunk_append.call(null,b__30522,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30523 = (i__30521 + (1));
i__30521 = G__30523;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30522),iter__30519.call(null,cljs.core.chunk_rest.call(null,s__30520__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30522),null);
}
} else
{var o = cljs.core.first.call(null,s__30520__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30519.call(null,cljs.core.rest.call(null,s__30520__$2)));
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
return (function (p1__30524_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30524_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30527 = options;var G__30527__$1 = (((G__30527 == null))?null:cljs.core.filter.call(null,((function (G__30527,values__$1){
return (function (p1__30525_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30525_SHARP_));
});})(G__30527,values__$1))
,G__30527));var G__30527__$2 = (((G__30527__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30527__$1));return G__30527__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30529,values){var map__30531 = p__30529;var map__30531__$1 = ((cljs.core.seq_QMARK_.call(null,map__30531))?cljs.core.apply.call(null,cljs.core.hash_map,map__30531):map__30531);var component_spec = map__30531__$1;var options = cljs.core.get.call(null,map__30531__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30531__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30531,map__30531__$1,component_spec,options,label){
return (function (p1__30528_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30528_SHARP_));
});})(values__$1,map__30531,map__30531__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30532,values){var map__30534 = p__30532;var map__30534__$1 = ((cljs.core.seq_QMARK_.call(null,map__30534))?cljs.core.apply.call(null,cljs.core.hash_map,map__30534):map__30534);var component_spec = map__30534__$1;var options = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30534__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30535){var map__30537 = p__30535;var map__30537__$1 = ((cljs.core.seq_QMARK_.call(null,map__30537))?cljs.core.apply.call(null,cljs.core.hash_map,map__30537):map__30537);var component_spec = map__30537__$1;var options = cljs.core.get.call(null,map__30537__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30537__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),options));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30538){var map__30540 = p__30538;var map__30540__$1 = ((cljs.core.seq_QMARK_.call(null,map__30540))?cljs.core.apply.call(null,cljs.core.hash_map,map__30540):map__30540);var component_spec = map__30540__$1;var options = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30541 = schema.core.Any;var input_schema30542 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30543 = schema.core.checker.call(null,input_schema30542);var output_checker30544 = schema.core.checker.call(null,output_schema30541);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544){
return (function render_STAR_(G__30545){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30580 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30545], null);var temp__4126__auto___30581 = input_checker30543.call(null,args__6035__auto___30580);if(cljs.core.truth_(temp__4126__auto___30581))
{var error__6036__auto___30582 = temp__4126__auto___30581;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30582)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30582,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30580,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30542,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30545;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30563 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30563))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30563)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30563))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544){
return (function iter__30564(s__30565){return (new cljs.core.LazySeq(null,((function (attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544){
return (function (){var s__30565__$1 = s__30565;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30565__$1);if(temp__4126__auto__)
{var s__30565__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30565__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30565__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30567 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30566 = (0);while(true){
if((i__30566 < size__4376__auto__))
{var map__30570 = cljs.core._nth.call(null,c__4375__auto__,i__30566);var map__30570__$1 = ((cljs.core.seq_QMARK_.call(null,map__30570))?cljs.core.apply.call(null,cljs.core.hash_map,map__30570):map__30570);var filter = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30567,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30566,map__30570,map__30570__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30567,s__30565__$2,temp__4126__auto__,attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30566,map__30570,map__30570__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30567,s__30565__$2,temp__4126__auto__,attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30583 = (i__30566 + (1));
i__30566 = G__30583;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30567),iter__30564.call(null,cljs.core.chunk_rest.call(null,s__30565__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30567),null);
}
} else
{var map__30571 = cljs.core.first.call(null,s__30565__$2);var map__30571__$1 = ((cljs.core.seq_QMARK_.call(null,map__30571))?cljs.core.apply.call(null,cljs.core.hash_map,map__30571):map__30571);var filter = cljs.core.get.call(null,map__30571__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30571__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30571__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30571,map__30571__$1,filter,label__$1,value,s__30565__$2,temp__4126__auto__,attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30571,map__30571__$1,filter,label__$1,value,s__30565__$2,temp__4126__auto__,attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30564.call(null,cljs.core.rest.call(null,s__30565__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544))
,null,null));
});})(attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30563),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544){
return (function iter__30572(s__30573){return (new cljs.core.LazySeq(null,((function (attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544){
return (function (){var s__30573__$1 = s__30573;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30573__$1);if(temp__4126__auto__)
{var s__30573__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30573__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30573__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30575 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30574 = (0);while(true){
if((i__30574 < size__4376__auto__))
{var map__30578 = cljs.core._nth.call(null,c__4375__auto__,i__30574);var map__30578__$1 = ((cljs.core.seq_QMARK_.call(null,map__30578))?cljs.core.apply.call(null,cljs.core.hash_map,map__30578):map__30578);var filter = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30575,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30574,map__30578,map__30578__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30575,s__30573__$2,temp__4126__auto__,attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30574,map__30578,map__30578__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30575,s__30573__$2,temp__4126__auto__,attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30584 = (i__30574 + (1));
i__30574 = G__30584;
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
{var map__30579 = cljs.core.first.call(null,s__30573__$2);var map__30579__$1 = ((cljs.core.seq_QMARK_.call(null,map__30579))?cljs.core.apply.call(null,cljs.core.hash_map,map__30579):map__30579);var filter = cljs.core.get.call(null,map__30579__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30579__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30579__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30579,map__30579__$1,filter,label__$1,value,s__30573__$2,temp__4126__auto__,attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30579,map__30579__$1,filter,label__$1,value,s__30573__$2,temp__4126__auto__,attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30572.call(null,cljs.core.rest.call(null,s__30573__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544))
,null,null));
});})(attrs30563,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30585 = output_checker30544.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30585))
{var error__6036__auto___30586 = temp__4126__auto___30585;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30586)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30586,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30541,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30541,input_schema30542,input_checker30543,output_checker30544))
,schema.core.make_fn_schema.call(null,output_schema30541,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30542], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30732 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30592 = schema.core.Any;var input_schema30593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30590","map30590",1667412881,null))], null);var input_checker30594 = schema.core.checker.call(null,input_schema30593);var output_checker30595 = schema.core.checker.call(null,output_schema30592);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595){
return (function constructor30588(G__30596){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30733 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30596], null);var temp__4126__auto___30734 = input_checker30594.call(null,args__6035__auto___30733);if(cljs.core.truth_(temp__4126__auto___30734))
{var error__6036__auto___30735 = temp__4126__auto___30734;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30588","constructor30588",125431336,null),cljs.core.pr_str.call(null,error__6036__auto___30735)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30735,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30733,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30593,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30590 = G__30596;while(true){
if(cljs.core.map_QMARK_.call(null,map30590))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30590)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30590,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30591 = plumbing.fnk.schema.safe_get.call(null,map30590,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30591,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30590,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30663 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30663 = (function (component_spec,component_filter_rq_chan,owner,output_schema30592,data,map30591,constructor30588,input_checker30594,filter_spec,map30590,input_schema30593,output_checker30595,validate__6034__auto__,id,ufv__,G__30596,meta30664){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.output_schema30592 = output_schema30592;
this.data = data;
this.map30591 = map30591;
this.constructor30588 = constructor30588;
this.input_checker30594 = input_checker30594;
this.filter_spec = filter_spec;
this.map30590 = map30590;
this.input_schema30593 = input_schema30593;
this.output_checker30595 = output_checker30595;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.G__30596 = G__30596;
this.meta30664 = meta30664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30663.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30663.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30663";
clustermap.components.filters.checkboxes_filter.t30663.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30663");
});})(owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595))
;
clustermap.components.filters.checkboxes_filter.t30663.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30663.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595))
;
clustermap.components.filters.checkboxes_filter.t30663.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30663.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595))
;
clustermap.components.filters.checkboxes_filter.t30663.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30663.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595){
return (function (state_30703){var state_val_30704 = (state_30703[(1)]);if((state_val_30704 === (7)))
{var inst_30694 = (state_30703[(2)]);var state_30703__$1 = state_30703;if(cljs.core.truth_(inst_30694))
{var statearr_30705_30736 = state_30703__$1;(statearr_30705_30736[(1)] = (11));
} else
{var statearr_30706_30737 = state_30703__$1;(statearr_30706_30737[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (1)))
{var state_30703__$1 = state_30703;var statearr_30707_30738 = state_30703__$1;(statearr_30707_30738[(2)] = null);
(statearr_30707_30738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (4)))
{var inst_30668 = (state_30703[(7)]);var inst_30668__$1 = (state_30703[(2)]);var state_30703__$1 = (function (){var statearr_30708 = state_30703;(statearr_30708[(7)] = inst_30668__$1);
return statearr_30708;
})();if(cljs.core.truth_(inst_30668__$1))
{var statearr_30709_30739 = state_30703__$1;(statearr_30709_30739[(1)] = (5));
} else
{var statearr_30710_30740 = state_30703__$1;(statearr_30710_30740[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (13)))
{var inst_30699 = (state_30703[(2)]);var state_30703__$1 = state_30703;var statearr_30711_30741 = state_30703__$1;(statearr_30711_30741[(2)] = inst_30699);
(statearr_30711_30741[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (6)))
{var state_30703__$1 = state_30703;var statearr_30712_30742 = state_30703__$1;(statearr_30712_30742[(2)] = null);
(statearr_30712_30742[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (3)))
{var inst_30701 = (state_30703[(2)]);var state_30703__$1 = state_30703;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30703__$1,inst_30701);
} else
{if((state_val_30704 === (12)))
{var state_30703__$1 = state_30703;var statearr_30713_30743 = state_30703__$1;(statearr_30713_30743[(2)] = null);
(statearr_30713_30743[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (2)))
{var state_30703__$1 = state_30703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30703__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30704 === (11)))
{var state_30703__$1 = state_30703;var statearr_30714_30744 = state_30703__$1;(statearr_30714_30744[(2)] = null);
(statearr_30714_30744[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (9)))
{var inst_30674 = (state_30703[(8)]);var state_30703__$1 = state_30703;var statearr_30715_30745 = state_30703__$1;(statearr_30715_30745[(2)] = inst_30674);
(statearr_30715_30745[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (5)))
{var inst_30668 = (state_30703[(7)]);var inst_30674 = (state_30703[(8)]);var inst_30671 = cljs.core.nth.call(null,inst_30668,(0),null);var inst_30672 = cljs.core.nth.call(null,inst_30668,(1),null);var inst_30674__$1 = om.core.get_props.call(null,self__.owner);var inst_30675 = cljs.core.seq_QMARK_.call(null,inst_30674__$1);var state_30703__$1 = (function (){var statearr_30716 = state_30703;(statearr_30716[(9)] = inst_30671);
(statearr_30716[(8)] = inst_30674__$1);
(statearr_30716[(10)] = inst_30672);
return statearr_30716;
})();if(inst_30675)
{var statearr_30717_30746 = state_30703__$1;(statearr_30717_30746[(1)] = (8));
} else
{var statearr_30718_30747 = state_30703__$1;(statearr_30718_30747[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (10)))
{var inst_30672 = (state_30703[(10)]);var inst_30680 = (state_30703[(2)]);var inst_30681 = cljs.core.get.call(null,inst_30680,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30682 = cljs.core.get.call(null,inst_30680,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30683 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30684 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30672];var inst_30685 = (new cljs.core.PersistentVector(null,3,(5),inst_30683,inst_30684,null));var inst_30686 = cljs.core.clj__GT_js.call(null,inst_30685);var inst_30687 = console.log(inst_30686);var inst_30688 = cljs.core.deref.call(null,inst_30682);var inst_30689 = cljs.core.deref.call(null,inst_30681);var inst_30690 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30688,inst_30689,inst_30672);var inst_30691 = om.core.update_BANG_.call(null,inst_30682,inst_30690);var state_30703__$1 = (function (){var statearr_30719 = state_30703;(statearr_30719[(11)] = inst_30687);
(statearr_30719[(12)] = inst_30691);
return statearr_30719;
})();var statearr_30720_30748 = state_30703__$1;(statearr_30720_30748[(2)] = true);
(statearr_30720_30748[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30704 === (8)))
{var inst_30674 = (state_30703[(8)]);var inst_30677 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30674);var state_30703__$1 = state_30703;var statearr_30721_30749 = state_30703__$1;(statearr_30721_30749[(2)] = inst_30677);
(statearr_30721_30749[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30725 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30725[(0)] = state_machine__9111__auto__);
(statearr_30725[(1)] = (1));
return statearr_30725;
});
var state_machine__9111__auto____1 = (function (state_30703){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30703);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30726){if((e30726 instanceof Object))
{var ex__9114__auto__ = e30726;var statearr_30727_30750 = state_30703;(statearr_30727_30750[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30726;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30751 = state_30703;
state_30703 = G__30751;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30703){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595))
})();var state__9127__auto__ = (function (){var statearr_30728 = f__9126__auto__.call(null);(statearr_30728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595))
;
clustermap.components.filters.checkboxes_filter.t30663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595){
return (function (_30665){var self__ = this;
var _30665__$1 = this;return self__.meta30664;
});})(owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595))
;
clustermap.components.filters.checkboxes_filter.t30663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595){
return (function (_30665,meta30664__$1){var self__ = this;
var _30665__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30663(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.output_schema30592,self__.data,self__.map30591,self__.constructor30588,self__.input_checker30594,self__.filter_spec,self__.map30590,self__.input_schema30593,self__.output_checker30595,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.G__30596,meta30664__$1));
});})(owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595))
;
clustermap.components.filters.checkboxes_filter.__GT_t30663 = ((function (owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595){
return (function __GT_t30663(component_spec__$1,component_filter_rq_chan__$1,owner__$1,output_schema30592__$1,data__$1,map30591__$1,constructor30588__$1,input_checker30594__$1,filter_spec__$1,map30590__$1,input_schema30593__$1,output_checker30595__$1,validate__6034__auto____$1,id__$1,ufv____$1,G__30596__$1,meta30664){return (new clustermap.components.filters.checkboxes_filter.t30663(component_spec__$1,component_filter_rq_chan__$1,owner__$1,output_schema30592__$1,data__$1,map30591__$1,constructor30588__$1,input_checker30594__$1,filter_spec__$1,map30590__$1,input_schema30593__$1,output_checker30595__$1,validate__6034__auto____$1,id__$1,ufv____$1,G__30596__$1,meta30664));
});})(owner,component_filter_rq_chan,map30591,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30663(component_spec,component_filter_rq_chan,owner,output_schema30592,data,map30591,constructor30588,input_checker30594,filter_spec,map30590,input_schema30593,output_checker30595,validate__6034__auto__,id,ufv__,G__30596,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30752 = output_checker30595.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30752))
{var error__6036__auto___30753 = temp__4126__auto___30752;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30588","constructor30588",125431336,null),cljs.core.pr_str.call(null,error__6036__auto___30753)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30753,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30592,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30592,input_schema30593,input_checker30594,output_checker30595))
,schema.core.make_fn_schema.call(null,output_schema30592,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30593], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30732){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30587,p__30729){var vec__30731 = p__30729;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30731,(0),null);return component_fnk__7881__auto___30732.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30587,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30587,var_args){
var p__30729 = null;if (arguments.length > 2) {
  p__30729 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30587,p__30729);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30754){
var data__7882__auto__ = cljs.core.first(arglist__30754);
arglist__30754 = cljs.core.next(arglist__30754);
var owner30587 = cljs.core.first(arglist__30754);
var p__30729 = cljs.core.rest(arglist__30754);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30587,p__30729);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30732))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30589){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30589);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30589){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
