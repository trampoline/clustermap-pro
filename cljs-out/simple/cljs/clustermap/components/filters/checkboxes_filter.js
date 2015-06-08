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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30369(s__30370){return (new cljs.core.LazySeq(null,(function (){var s__30370__$1 = s__30370;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30370__$1);if(temp__4126__auto__)
{var s__30370__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30370__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30370__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30372 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30371 = (0);while(true){
if((i__30371 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30371);cljs.core.chunk_append.call(null,b__30372,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30373 = (i__30371 + (1));
i__30371 = G__30373;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30372),iter__30369.call(null,cljs.core.chunk_rest.call(null,s__30370__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30372),null);
}
} else
{var o = cljs.core.first.call(null,s__30370__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30369.call(null,cljs.core.rest.call(null,s__30370__$2)));
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
return (function (p1__30374_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30374_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30377 = options;var G__30377__$1 = (((G__30377 == null))?null:cljs.core.filter.call(null,((function (G__30377,values__$1){
return (function (p1__30375_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30375_SHARP_));
});})(G__30377,values__$1))
,G__30377));var G__30377__$2 = (((G__30377__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30377__$1));return G__30377__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30379,values){var map__30381 = p__30379;var map__30381__$1 = ((cljs.core.seq_QMARK_.call(null,map__30381))?cljs.core.apply.call(null,cljs.core.hash_map,map__30381):map__30381);var component_spec = map__30381__$1;var options = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30381,map__30381__$1,component_spec,options,label){
return (function (p1__30378_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30378_SHARP_));
});})(values__$1,map__30381,map__30381__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30382,values){var map__30384 = p__30382;var map__30384__$1 = ((cljs.core.seq_QMARK_.call(null,map__30384))?cljs.core.apply.call(null,cljs.core.hash_map,map__30384):map__30384);var component_spec = map__30384__$1;var options = cljs.core.get.call(null,map__30384__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30384__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30385){var map__30387 = p__30385;var map__30387__$1 = ((cljs.core.seq_QMARK_.call(null,map__30387))?cljs.core.apply.call(null,cljs.core.hash_map,map__30387):map__30387);var component_spec = map__30387__$1;var tags = cljs.core.get.call(null,map__30387__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30387__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30388){var map__30390 = p__30388;var map__30390__$1 = ((cljs.core.seq_QMARK_.call(null,map__30390))?cljs.core.apply.call(null,cljs.core.hash_map,map__30390):map__30390);var component_spec = map__30390__$1;var tags = cljs.core.get.call(null,map__30390__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30390__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30391 = schema.core.Any;var input_schema30392 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30393 = schema.core.checker.call(null,input_schema30392);var output_checker30394 = schema.core.checker.call(null,output_schema30391);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394){
return (function render_STAR_(G__30395){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30395], null);var temp__4126__auto___30431 = input_checker30393.call(null,args__6035__auto___30430);if(cljs.core.truth_(temp__4126__auto___30431))
{var error__6036__auto___30432 = temp__4126__auto___30431;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30432)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30432,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30430,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30392,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30395;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30413 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30413))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30413)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30413))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394){
return (function iter__30414(s__30415){return (new cljs.core.LazySeq(null,((function (attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394){
return (function (){var s__30415__$1 = s__30415;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30415__$1);if(temp__4126__auto__)
{var s__30415__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30415__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30415__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30417 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30416 = (0);while(true){
if((i__30416 < size__4376__auto__))
{var map__30420 = cljs.core._nth.call(null,c__4375__auto__,i__30416);var map__30420__$1 = ((cljs.core.seq_QMARK_.call(null,map__30420))?cljs.core.apply.call(null,cljs.core.hash_map,map__30420):map__30420);var filter = cljs.core.get.call(null,map__30420__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30420__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30420__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30417,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30416,map__30420,map__30420__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30417,s__30415__$2,temp__4126__auto__,attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30416,map__30420,map__30420__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30417,s__30415__$2,temp__4126__auto__,attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30433 = (i__30416 + (1));
i__30416 = G__30433;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30417),iter__30414.call(null,cljs.core.chunk_rest.call(null,s__30415__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30417),null);
}
} else
{var map__30421 = cljs.core.first.call(null,s__30415__$2);var map__30421__$1 = ((cljs.core.seq_QMARK_.call(null,map__30421))?cljs.core.apply.call(null,cljs.core.hash_map,map__30421):map__30421);var filter = cljs.core.get.call(null,map__30421__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30421__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30421__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30421,map__30421__$1,filter,label__$1,value,s__30415__$2,temp__4126__auto__,attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30421,map__30421__$1,filter,label__$1,value,s__30415__$2,temp__4126__auto__,attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30414.call(null,cljs.core.rest.call(null,s__30415__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394))
,null,null));
});})(attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30413),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394){
return (function iter__30422(s__30423){return (new cljs.core.LazySeq(null,((function (attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394){
return (function (){var s__30423__$1 = s__30423;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30423__$1);if(temp__4126__auto__)
{var s__30423__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30423__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30423__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30425 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30424 = (0);while(true){
if((i__30424 < size__4376__auto__))
{var map__30428 = cljs.core._nth.call(null,c__4375__auto__,i__30424);var map__30428__$1 = ((cljs.core.seq_QMARK_.call(null,map__30428))?cljs.core.apply.call(null,cljs.core.hash_map,map__30428):map__30428);var filter = cljs.core.get.call(null,map__30428__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30428__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30428__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30425,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30424,map__30428,map__30428__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30425,s__30423__$2,temp__4126__auto__,attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30424,map__30428,map__30428__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30425,s__30423__$2,temp__4126__auto__,attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30434 = (i__30424 + (1));
i__30424 = G__30434;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30425),iter__30422.call(null,cljs.core.chunk_rest.call(null,s__30423__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30425),null);
}
} else
{var map__30429 = cljs.core.first.call(null,s__30423__$2);var map__30429__$1 = ((cljs.core.seq_QMARK_.call(null,map__30429))?cljs.core.apply.call(null,cljs.core.hash_map,map__30429):map__30429);var filter = cljs.core.get.call(null,map__30429__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30429__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30429__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30429,map__30429__$1,filter,label__$1,value,s__30423__$2,temp__4126__auto__,attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30429,map__30429__$1,filter,label__$1,value,s__30423__$2,temp__4126__auto__,attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30422.call(null,cljs.core.rest.call(null,s__30423__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394))
,null,null));
});})(attrs30413,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30435 = output_checker30394.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30435))
{var error__6036__auto___30436 = temp__4126__auto___30435;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30436)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30436,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30391,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30391,input_schema30392,input_checker30393,output_checker30394))
,schema.core.make_fn_schema.call(null,output_schema30391,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30392], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30582 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30442 = schema.core.Any;var input_schema30443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30440","map30440",-1200480660,null))], null);var input_checker30444 = schema.core.checker.call(null,input_schema30443);var output_checker30445 = schema.core.checker.call(null,output_schema30442);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445){
return (function constructor30438(G__30446){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30446], null);var temp__4126__auto___30584 = input_checker30444.call(null,args__6035__auto___30583);if(cljs.core.truth_(temp__4126__auto___30584))
{var error__6036__auto___30585 = temp__4126__auto___30584;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30438","constructor30438",-957178202,null),cljs.core.pr_str.call(null,error__6036__auto___30585)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30585,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30583,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30443,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30440 = G__30446;while(true){
if(cljs.core.map_QMARK_.call(null,map30440))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30440)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30440,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30441 = plumbing.fnk.schema.safe_get.call(null,map30440,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30441,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30440,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30513 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30513 = (function (component_spec,component_filter_rq_chan,owner,output_checker30445,data,constructor30438,output_schema30442,map30440,filter_spec,input_schema30443,input_checker30444,map30441,G__30446,validate__6034__auto__,id,ufv__,meta30514){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.output_checker30445 = output_checker30445;
this.data = data;
this.constructor30438 = constructor30438;
this.output_schema30442 = output_schema30442;
this.map30440 = map30440;
this.filter_spec = filter_spec;
this.input_schema30443 = input_schema30443;
this.input_checker30444 = input_checker30444;
this.map30441 = map30441;
this.G__30446 = G__30446;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta30514 = meta30514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30513.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30513.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30513";
clustermap.components.filters.checkboxes_filter.t30513.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30513");
});})(owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445))
;
clustermap.components.filters.checkboxes_filter.t30513.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30513.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445))
;
clustermap.components.filters.checkboxes_filter.t30513.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30513.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445))
;
clustermap.components.filters.checkboxes_filter.t30513.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30513.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445){
return (function (state_30553){var state_val_30554 = (state_30553[(1)]);if((state_val_30554 === (7)))
{var inst_30544 = (state_30553[(2)]);var state_30553__$1 = state_30553;if(cljs.core.truth_(inst_30544))
{var statearr_30555_30586 = state_30553__$1;(statearr_30555_30586[(1)] = (11));
} else
{var statearr_30556_30587 = state_30553__$1;(statearr_30556_30587[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30554 === (1)))
{var state_30553__$1 = state_30553;var statearr_30557_30588 = state_30553__$1;(statearr_30557_30588[(2)] = null);
(statearr_30557_30588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30554 === (4)))
{var inst_30518 = (state_30553[(7)]);var inst_30518__$1 = (state_30553[(2)]);var state_30553__$1 = (function (){var statearr_30558 = state_30553;(statearr_30558[(7)] = inst_30518__$1);
return statearr_30558;
})();if(cljs.core.truth_(inst_30518__$1))
{var statearr_30559_30589 = state_30553__$1;(statearr_30559_30589[(1)] = (5));
} else
{var statearr_30560_30590 = state_30553__$1;(statearr_30560_30590[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30554 === (13)))
{var inst_30549 = (state_30553[(2)]);var state_30553__$1 = state_30553;var statearr_30561_30591 = state_30553__$1;(statearr_30561_30591[(2)] = inst_30549);
(statearr_30561_30591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30554 === (6)))
{var state_30553__$1 = state_30553;var statearr_30562_30592 = state_30553__$1;(statearr_30562_30592[(2)] = null);
(statearr_30562_30592[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30554 === (3)))
{var inst_30551 = (state_30553[(2)]);var state_30553__$1 = state_30553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30553__$1,inst_30551);
} else
{if((state_val_30554 === (12)))
{var state_30553__$1 = state_30553;var statearr_30563_30593 = state_30553__$1;(statearr_30563_30593[(2)] = null);
(statearr_30563_30593[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30554 === (2)))
{var state_30553__$1 = state_30553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30553__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30554 === (11)))
{var state_30553__$1 = state_30553;var statearr_30564_30594 = state_30553__$1;(statearr_30564_30594[(2)] = null);
(statearr_30564_30594[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30554 === (9)))
{var inst_30524 = (state_30553[(8)]);var state_30553__$1 = state_30553;var statearr_30565_30595 = state_30553__$1;(statearr_30565_30595[(2)] = inst_30524);
(statearr_30565_30595[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30554 === (5)))
{var inst_30518 = (state_30553[(7)]);var inst_30524 = (state_30553[(8)]);var inst_30521 = cljs.core.nth.call(null,inst_30518,(0),null);var inst_30522 = cljs.core.nth.call(null,inst_30518,(1),null);var inst_30524__$1 = om.core.get_props.call(null,self__.owner);var inst_30525 = cljs.core.seq_QMARK_.call(null,inst_30524__$1);var state_30553__$1 = (function (){var statearr_30566 = state_30553;(statearr_30566[(9)] = inst_30522);
(statearr_30566[(8)] = inst_30524__$1);
(statearr_30566[(10)] = inst_30521);
return statearr_30566;
})();if(inst_30525)
{var statearr_30567_30596 = state_30553__$1;(statearr_30567_30596[(1)] = (8));
} else
{var statearr_30568_30597 = state_30553__$1;(statearr_30568_30597[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30554 === (10)))
{var inst_30522 = (state_30553[(9)]);var inst_30530 = (state_30553[(2)]);var inst_30531 = cljs.core.get.call(null,inst_30530,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30532 = cljs.core.get.call(null,inst_30530,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30533 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30534 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30522];var inst_30535 = (new cljs.core.PersistentVector(null,3,(5),inst_30533,inst_30534,null));var inst_30536 = cljs.core.clj__GT_js.call(null,inst_30535);var inst_30537 = console.log(inst_30536);var inst_30538 = cljs.core.deref.call(null,inst_30532);var inst_30539 = cljs.core.deref.call(null,inst_30531);var inst_30540 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30538,inst_30539,inst_30522);var inst_30541 = om.core.update_BANG_.call(null,inst_30532,inst_30540);var state_30553__$1 = (function (){var statearr_30569 = state_30553;(statearr_30569[(11)] = inst_30537);
(statearr_30569[(12)] = inst_30541);
return statearr_30569;
})();var statearr_30570_30598 = state_30553__$1;(statearr_30570_30598[(2)] = true);
(statearr_30570_30598[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30554 === (8)))
{var inst_30524 = (state_30553[(8)]);var inst_30527 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30524);var state_30553__$1 = state_30553;var statearr_30571_30599 = state_30553__$1;(statearr_30571_30599[(2)] = inst_30527);
(statearr_30571_30599[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30575 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30575[(0)] = state_machine__9111__auto__);
(statearr_30575[(1)] = (1));
return statearr_30575;
});
var state_machine__9111__auto____1 = (function (state_30553){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30553);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30576){if((e30576 instanceof Object))
{var ex__9114__auto__ = e30576;var statearr_30577_30600 = state_30553;(statearr_30577_30600[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30576;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30601 = state_30553;
state_30553 = G__30601;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30553){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445))
})();var state__9127__auto__ = (function (){var statearr_30578 = f__9126__auto__.call(null);(statearr_30578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445))
;
clustermap.components.filters.checkboxes_filter.t30513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445){
return (function (_30515){var self__ = this;
var _30515__$1 = this;return self__.meta30514;
});})(owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445))
;
clustermap.components.filters.checkboxes_filter.t30513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445){
return (function (_30515,meta30514__$1){var self__ = this;
var _30515__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30513(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.output_checker30445,self__.data,self__.constructor30438,self__.output_schema30442,self__.map30440,self__.filter_spec,self__.input_schema30443,self__.input_checker30444,self__.map30441,self__.G__30446,self__.validate__6034__auto__,self__.id,self__.ufv__,meta30514__$1));
});})(owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445))
;
clustermap.components.filters.checkboxes_filter.__GT_t30513 = ((function (owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445){
return (function __GT_t30513(component_spec__$1,component_filter_rq_chan__$1,owner__$1,output_checker30445__$1,data__$1,constructor30438__$1,output_schema30442__$1,map30440__$1,filter_spec__$1,input_schema30443__$1,input_checker30444__$1,map30441__$1,G__30446__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30514){return (new clustermap.components.filters.checkboxes_filter.t30513(component_spec__$1,component_filter_rq_chan__$1,owner__$1,output_checker30445__$1,data__$1,constructor30438__$1,output_schema30442__$1,map30440__$1,filter_spec__$1,input_schema30443__$1,input_checker30444__$1,map30441__$1,G__30446__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30514));
});})(owner,component_filter_rq_chan,map30441,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30513(component_spec,component_filter_rq_chan,owner,output_checker30445,data,constructor30438,output_schema30442,map30440,filter_spec,input_schema30443,input_checker30444,map30441,G__30446,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30602 = output_checker30445.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30602))
{var error__6036__auto___30603 = temp__4126__auto___30602;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30438","constructor30438",-957178202,null),cljs.core.pr_str.call(null,error__6036__auto___30603)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30603,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30442,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30442,input_schema30443,input_checker30444,output_checker30445))
,schema.core.make_fn_schema.call(null,output_schema30442,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30443], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30582){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30437,p__30579){var vec__30581 = p__30579;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30581,(0),null);return component_fnk__7881__auto___30582.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30437,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30437,var_args){
var p__30579 = null;if (arguments.length > 2) {
  p__30579 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30437,p__30579);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30604){
var data__7882__auto__ = cljs.core.first(arglist__30604);
arglist__30604 = cljs.core.next(arglist__30604);
var owner30437 = cljs.core.first(arglist__30604);
var p__30579 = cljs.core.rest(arglist__30604);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30437,p__30579);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30582))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30439){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30439);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30439){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
