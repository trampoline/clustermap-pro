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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29570(s__29571){return (new cljs.core.LazySeq(null,(function (){var s__29571__$1 = s__29571;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29571__$1);if(temp__4126__auto__)
{var s__29571__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29571__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29571__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29573 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29572 = (0);while(true){
if((i__29572 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29572);cljs.core.chunk_append.call(null,b__29573,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29574 = (i__29572 + (1));
i__29572 = G__29574;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29573),iter__29570.call(null,cljs.core.chunk_rest.call(null,s__29571__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29573),null);
}
} else
{var o = cljs.core.first.call(null,s__29571__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29570.call(null,cljs.core.rest.call(null,s__29571__$2)));
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
return (function (p1__29575_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__29575_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__29578 = options;var G__29578__$1 = (((G__29578 == null))?null:cljs.core.filter.call(null,((function (G__29578,values__$1){
return (function (p1__29576_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29576_SHARP_));
});})(G__29578,values__$1))
,G__29578));var G__29578__$2 = (((G__29578__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__29578__$1));return G__29578__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__29580,values){var map__29582 = p__29580;var map__29582__$1 = ((cljs.core.seq_QMARK_.call(null,map__29582))?cljs.core.apply.call(null,cljs.core.hash_map,map__29582):map__29582);var component_spec = map__29582__$1;var options = cljs.core.get.call(null,map__29582__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29582__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29582,map__29582__$1,component_spec,options,label){
return (function (p1__29579_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29579_SHARP_));
});})(values__$1,map__29582,map__29582__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29583,values){var map__29585 = p__29583;var map__29585__$1 = ((cljs.core.seq_QMARK_.call(null,map__29585))?cljs.core.apply.call(null,cljs.core.hash_map,map__29585):map__29585);var component_spec = map__29585__$1;var options = cljs.core.get.call(null,map__29585__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29585__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__29586){var map__29588 = p__29586;var map__29588__$1 = ((cljs.core.seq_QMARK_.call(null,map__29588))?cljs.core.apply.call(null,cljs.core.hash_map,map__29588):map__29588);var component_spec = map__29588__$1;var tags = cljs.core.get.call(null,map__29588__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29588__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__29589){var map__29591 = p__29589;var map__29591__$1 = ((cljs.core.seq_QMARK_.call(null,map__29591))?cljs.core.apply.call(null,cljs.core.hash_map,map__29591):map__29591);var component_spec = map__29591__$1;var tags = cljs.core.get.call(null,map__29591__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29591__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29592 = schema.core.Any;var input_schema29593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29594 = schema.core.checker.call(null,input_schema29593);var output_checker29595 = schema.core.checker.call(null,output_schema29592);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595){
return (function render_STAR_(G__29596){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29631 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29596], null);var temp__4126__auto___29632 = input_checker29594.call(null,args__6035__auto___29631);if(cljs.core.truth_(temp__4126__auto___29632))
{var error__6036__auto___29633 = temp__4126__auto___29632;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29633)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29633,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29631,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29593,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29596;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs29614 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29614))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs29614)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29614))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595){
return (function iter__29615(s__29616){return (new cljs.core.LazySeq(null,((function (attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595){
return (function (){var s__29616__$1 = s__29616;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29616__$1);if(temp__4126__auto__)
{var s__29616__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29616__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29616__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29618 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29617 = (0);while(true){
if((i__29617 < size__4376__auto__))
{var map__29621 = cljs.core._nth.call(null,c__4375__auto__,i__29617);var map__29621__$1 = ((cljs.core.seq_QMARK_.call(null,map__29621))?cljs.core.apply.call(null,cljs.core.hash_map,map__29621):map__29621);var filter = cljs.core.get.call(null,map__29621__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29621__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29621__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29618,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29617,map__29621,map__29621__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29618,s__29616__$2,temp__4126__auto__,attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29617,map__29621,map__29621__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29618,s__29616__$2,temp__4126__auto__,attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29634 = (i__29617 + (1));
i__29617 = G__29634;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29618),iter__29615.call(null,cljs.core.chunk_rest.call(null,s__29616__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29618),null);
}
} else
{var map__29622 = cljs.core.first.call(null,s__29616__$2);var map__29622__$1 = ((cljs.core.seq_QMARK_.call(null,map__29622))?cljs.core.apply.call(null,cljs.core.hash_map,map__29622):map__29622);var filter = cljs.core.get.call(null,map__29622__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29622__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29622__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29622,map__29622__$1,filter,label__$1,value,s__29616__$2,temp__4126__auto__,attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29622,map__29622__$1,filter,label__$1,value,s__29616__$2,temp__4126__auto__,attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29615.call(null,cljs.core.rest.call(null,s__29616__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595))
,null,null));
});})(attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29614),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595){
return (function iter__29623(s__29624){return (new cljs.core.LazySeq(null,((function (attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595){
return (function (){var s__29624__$1 = s__29624;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29624__$1);if(temp__4126__auto__)
{var s__29624__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29624__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29624__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29626 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29625 = (0);while(true){
if((i__29625 < size__4376__auto__))
{var map__29629 = cljs.core._nth.call(null,c__4375__auto__,i__29625);var map__29629__$1 = ((cljs.core.seq_QMARK_.call(null,map__29629))?cljs.core.apply.call(null,cljs.core.hash_map,map__29629):map__29629);var filter = cljs.core.get.call(null,map__29629__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29629__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29629__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29626,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29625,map__29629,map__29629__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29626,s__29624__$2,temp__4126__auto__,attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29625,map__29629,map__29629__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29626,s__29624__$2,temp__4126__auto__,attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29635 = (i__29625 + (1));
i__29625 = G__29635;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29626),iter__29623.call(null,cljs.core.chunk_rest.call(null,s__29624__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29626),null);
}
} else
{var map__29630 = cljs.core.first.call(null,s__29624__$2);var map__29630__$1 = ((cljs.core.seq_QMARK_.call(null,map__29630))?cljs.core.apply.call(null,cljs.core.hash_map,map__29630):map__29630);var filter = cljs.core.get.call(null,map__29630__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29630__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29630__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29630,map__29630__$1,filter,label__$1,value,s__29624__$2,temp__4126__auto__,attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29630,map__29630__$1,filter,label__$1,value,s__29624__$2,temp__4126__auto__,attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29623.call(null,cljs.core.rest.call(null,s__29624__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595))
,null,null));
});})(attrs29614,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29636 = output_checker29595.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29636))
{var error__6036__auto___29637 = temp__4126__auto___29636;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29637)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29637,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29592,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29592,input_schema29593,input_checker29594,output_checker29595))
,schema.core.make_fn_schema.call(null,output_schema29592,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29593], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29783 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29643 = schema.core.Any;var input_schema29644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29641","map29641",1006073955,null))], null);var input_checker29645 = schema.core.checker.call(null,input_schema29644);var output_checker29646 = schema.core.checker.call(null,output_schema29643);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646){
return (function constructor29639(G__29647){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29647], null);var temp__4126__auto___29785 = input_checker29645.call(null,args__6035__auto___29784);if(cljs.core.truth_(temp__4126__auto___29785))
{var error__6036__auto___29786 = temp__4126__auto___29785;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29639","constructor29639",-1793476508,null),cljs.core.pr_str.call(null,error__6036__auto___29786)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29786,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29784,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29644,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29641 = G__29647;while(true){
if(cljs.core.map_QMARK_.call(null,map29641))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29641)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29641,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29642 = plumbing.fnk.schema.safe_get.call(null,map29641,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29642,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29641,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t29714 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t29714 = (function (component_spec,component_filter_rq_chan,G__29647,map29641,constructor29639,owner,map29642,data,filter_spec,input_schema29644,output_checker29646,input_checker29645,validate__6034__auto__,id,ufv__,output_schema29643,meta29715){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.G__29647 = G__29647;
this.map29641 = map29641;
this.constructor29639 = constructor29639;
this.owner = owner;
this.map29642 = map29642;
this.data = data;
this.filter_spec = filter_spec;
this.input_schema29644 = input_schema29644;
this.output_checker29646 = output_checker29646;
this.input_checker29645 = input_checker29645;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.output_schema29643 = output_schema29643;
this.meta29715 = meta29715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t29714.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t29714.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t29714";
clustermap.components.filters.checkboxes_filter.t29714.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t29714");
});})(owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646))
;
clustermap.components.filters.checkboxes_filter.t29714.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t29714.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646))
;
clustermap.components.filters.checkboxes_filter.t29714.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t29714.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646))
;
clustermap.components.filters.checkboxes_filter.t29714.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t29714.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646){
return (function (_){var self__ = this;
var ___$1 = this;var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646){
return (function (state_29754){var state_val_29755 = (state_29754[(1)]);if((state_val_29755 === (7)))
{var inst_29745 = (state_29754[(2)]);var state_29754__$1 = state_29754;if(cljs.core.truth_(inst_29745))
{var statearr_29756_29787 = state_29754__$1;(statearr_29756_29787[(1)] = (11));
} else
{var statearr_29757_29788 = state_29754__$1;(statearr_29757_29788[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29755 === (1)))
{var state_29754__$1 = state_29754;var statearr_29758_29789 = state_29754__$1;(statearr_29758_29789[(2)] = null);
(statearr_29758_29789[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29755 === (4)))
{var inst_29719 = (state_29754[(7)]);var inst_29719__$1 = (state_29754[(2)]);var state_29754__$1 = (function (){var statearr_29759 = state_29754;(statearr_29759[(7)] = inst_29719__$1);
return statearr_29759;
})();if(cljs.core.truth_(inst_29719__$1))
{var statearr_29760_29790 = state_29754__$1;(statearr_29760_29790[(1)] = (5));
} else
{var statearr_29761_29791 = state_29754__$1;(statearr_29761_29791[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29755 === (13)))
{var inst_29750 = (state_29754[(2)]);var state_29754__$1 = state_29754;var statearr_29762_29792 = state_29754__$1;(statearr_29762_29792[(2)] = inst_29750);
(statearr_29762_29792[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29755 === (6)))
{var state_29754__$1 = state_29754;var statearr_29763_29793 = state_29754__$1;(statearr_29763_29793[(2)] = null);
(statearr_29763_29793[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29755 === (3)))
{var inst_29752 = (state_29754[(2)]);var state_29754__$1 = state_29754;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29754__$1,inst_29752);
} else
{if((state_val_29755 === (12)))
{var state_29754__$1 = state_29754;var statearr_29764_29794 = state_29754__$1;(statearr_29764_29794[(2)] = null);
(statearr_29764_29794[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29755 === (2)))
{var state_29754__$1 = state_29754;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29754__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29755 === (11)))
{var state_29754__$1 = state_29754;var statearr_29765_29795 = state_29754__$1;(statearr_29765_29795[(2)] = null);
(statearr_29765_29795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29755 === (9)))
{var inst_29725 = (state_29754[(8)]);var state_29754__$1 = state_29754;var statearr_29766_29796 = state_29754__$1;(statearr_29766_29796[(2)] = inst_29725);
(statearr_29766_29796[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29755 === (5)))
{var inst_29725 = (state_29754[(8)]);var inst_29719 = (state_29754[(7)]);var inst_29722 = cljs.core.nth.call(null,inst_29719,(0),null);var inst_29723 = cljs.core.nth.call(null,inst_29719,(1),null);var inst_29725__$1 = om.core.get_props.call(null,self__.owner);var inst_29726 = cljs.core.seq_QMARK_.call(null,inst_29725__$1);var state_29754__$1 = (function (){var statearr_29767 = state_29754;(statearr_29767[(8)] = inst_29725__$1);
(statearr_29767[(9)] = inst_29723);
(statearr_29767[(10)] = inst_29722);
return statearr_29767;
})();if(inst_29726)
{var statearr_29768_29797 = state_29754__$1;(statearr_29768_29797[(1)] = (8));
} else
{var statearr_29769_29798 = state_29754__$1;(statearr_29769_29798[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29755 === (10)))
{var inst_29723 = (state_29754[(9)]);var inst_29731 = (state_29754[(2)]);var inst_29732 = cljs.core.get.call(null,inst_29731,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29733 = cljs.core.get.call(null,inst_29731,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29734 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29735 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_29723];var inst_29736 = (new cljs.core.PersistentVector(null,3,(5),inst_29734,inst_29735,null));var inst_29737 = cljs.core.clj__GT_js.call(null,inst_29736);var inst_29738 = console.log(inst_29737);var inst_29739 = cljs.core.deref.call(null,inst_29733);var inst_29740 = cljs.core.deref.call(null,inst_29732);var inst_29741 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_29739,inst_29740,inst_29723);var inst_29742 = om.core.update_BANG_.call(null,inst_29733,inst_29741);var state_29754__$1 = (function (){var statearr_29770 = state_29754;(statearr_29770[(11)] = inst_29738);
(statearr_29770[(12)] = inst_29742);
return statearr_29770;
})();var statearr_29771_29799 = state_29754__$1;(statearr_29771_29799[(2)] = true);
(statearr_29771_29799[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29755 === (8)))
{var inst_29725 = (state_29754[(8)]);var inst_29728 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29725);var state_29754__$1 = state_29754;var statearr_29772_29800 = state_29754__$1;(statearr_29772_29800[(2)] = inst_29728);
(statearr_29772_29800[(1)] = (10));
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
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_29776 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29776[(0)] = state_machine__11099__auto__);
(statearr_29776[(1)] = (1));
return statearr_29776;
});
var state_machine__11099__auto____1 = (function (state_29754){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_29754);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e29777){if((e29777 instanceof Object))
{var ex__11102__auto__ = e29777;var statearr_29778_29801 = state_29754;(statearr_29778_29801[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29754);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29777;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29802 = state_29754;
state_29754 = G__29802;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_29754){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_29754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646))
})();var state__11156__auto__ = (function (){var statearr_29779 = f__11155__auto__.call(null);(statearr_29779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_29779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646))
);
return c__11154__auto__;
});})(owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646))
;
clustermap.components.filters.checkboxes_filter.t29714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646){
return (function (_29716){var self__ = this;
var _29716__$1 = this;return self__.meta29715;
});})(owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646))
;
clustermap.components.filters.checkboxes_filter.t29714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646){
return (function (_29716,meta29715__$1){var self__ = this;
var _29716__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t29714(self__.component_spec,self__.component_filter_rq_chan,self__.G__29647,self__.map29641,self__.constructor29639,self__.owner,self__.map29642,self__.data,self__.filter_spec,self__.input_schema29644,self__.output_checker29646,self__.input_checker29645,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.output_schema29643,meta29715__$1));
});})(owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646))
;
clustermap.components.filters.checkboxes_filter.__GT_t29714 = ((function (owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646){
return (function __GT_t29714(component_spec__$1,component_filter_rq_chan__$1,G__29647__$1,map29641__$1,constructor29639__$1,owner__$1,map29642__$1,data__$1,filter_spec__$1,input_schema29644__$1,output_checker29646__$1,input_checker29645__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_schema29643__$1,meta29715){return (new clustermap.components.filters.checkboxes_filter.t29714(component_spec__$1,component_filter_rq_chan__$1,G__29647__$1,map29641__$1,constructor29639__$1,owner__$1,map29642__$1,data__$1,filter_spec__$1,input_schema29644__$1,output_checker29646__$1,input_checker29645__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_schema29643__$1,meta29715));
});})(owner,component_filter_rq_chan,map29642,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646))
;
}
return (new clustermap.components.filters.checkboxes_filter.t29714(component_spec,component_filter_rq_chan,G__29647,map29641,constructor29639,owner,map29642,data,filter_spec,input_schema29644,output_checker29646,input_checker29645,validate__6034__auto__,id,ufv__,output_schema29643,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29803 = output_checker29646.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29803))
{var error__6036__auto___29804 = temp__4126__auto___29803;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29639","constructor29639",-1793476508,null),cljs.core.pr_str.call(null,error__6036__auto___29804)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29804,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29643,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29643,input_schema29644,input_checker29645,output_checker29646))
,schema.core.make_fn_schema.call(null,output_schema29643,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29644], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___29783){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner29638,p__29780){var vec__29782 = p__29780;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29782,(0),null);return component_fnk__7881__auto___29783.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29638,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner29638,var_args){
var p__29780 = null;if (arguments.length > 2) {
  p__29780 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29638,p__29780);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29805){
var data__7882__auto__ = cljs.core.first(arglist__29805);
arglist__29805 = cljs.core.next(arglist__29805);
var owner29638 = cljs.core.first(arglist__29805);
var p__29780 = cljs.core.rest(arglist__29805);
return checkboxes_filter_component__delegate(data__7882__auto__,owner29638,p__29780);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29783))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29640){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m29640);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m29640){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
