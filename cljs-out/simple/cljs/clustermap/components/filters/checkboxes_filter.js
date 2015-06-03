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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29148(s__29149){return (new cljs.core.LazySeq(null,(function (){var s__29149__$1 = s__29149;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29149__$1);if(temp__4126__auto__)
{var s__29149__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29149__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29149__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29151 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29150 = (0);while(true){
if((i__29150 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29150);cljs.core.chunk_append.call(null,b__29151,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29152 = (i__29150 + (1));
i__29150 = G__29152;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29151),iter__29148.call(null,cljs.core.chunk_rest.call(null,s__29149__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29151),null);
}
} else
{var o = cljs.core.first.call(null,s__29149__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29148.call(null,cljs.core.rest.call(null,s__29149__$2)));
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
return (function (p1__29153_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__29153_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__29156 = options;var G__29156__$1 = (((G__29156 == null))?null:cljs.core.filter.call(null,((function (G__29156,values__$1){
return (function (p1__29154_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29154_SHARP_));
});})(G__29156,values__$1))
,G__29156));var G__29156__$2 = (((G__29156__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__29156__$1));return G__29156__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__29158,values){var map__29160 = p__29158;var map__29160__$1 = ((cljs.core.seq_QMARK_.call(null,map__29160))?cljs.core.apply.call(null,cljs.core.hash_map,map__29160):map__29160);var component_spec = map__29160__$1;var options = cljs.core.get.call(null,map__29160__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29160__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29160,map__29160__$1,component_spec,options,label){
return (function (p1__29157_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29157_SHARP_));
});})(values__$1,map__29160,map__29160__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29161,values){var map__29163 = p__29161;var map__29163__$1 = ((cljs.core.seq_QMARK_.call(null,map__29163))?cljs.core.apply.call(null,cljs.core.hash_map,map__29163):map__29163);var component_spec = map__29163__$1;var options = cljs.core.get.call(null,map__29163__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29163__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29164 = schema.core.Any;var input_schema29165 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29166 = schema.core.checker.call(null,input_schema29165);var output_checker29167 = schema.core.checker.call(null,output_schema29164);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29164,input_schema29165,input_checker29166,output_checker29167){
return (function render_STAR_(G__29168){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29185 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29168], null);var temp__4126__auto___29186 = input_checker29166.call(null,args__6035__auto___29185);if(cljs.core.truth_(temp__4126__auto___29186))
{var error__6036__auto___29187 = temp__4126__auto___29186;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29187)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29187,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29185,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29165,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29168;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
return React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29164,input_schema29165,input_checker29166,output_checker29167){
return (function iter__29177(s__29178){return (new cljs.core.LazySeq(null,((function (options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29164,input_schema29165,input_checker29166,output_checker29167){
return (function (){var s__29178__$1 = s__29178;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29178__$1);if(temp__4126__auto__)
{var s__29178__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29178__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29178__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29180 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29179 = (0);while(true){
if((i__29179 < size__4376__auto__))
{var map__29183 = cljs.core._nth.call(null,c__4375__auto__,i__29179);var map__29183__$1 = ((cljs.core.seq_QMARK_.call(null,map__29183))?cljs.core.apply.call(null,cljs.core.hash_map,map__29183):map__29183);var filter = cljs.core.get.call(null,map__29183__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29183__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29183__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29180,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29179,map__29183,map__29183__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29180,s__29178__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29164,input_schema29165,input_checker29166,output_checker29167){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29179,map__29183,map__29183__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29180,s__29178__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29164,input_schema29165,input_checker29166,output_checker29167))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29188 = (i__29179 + (1));
i__29179 = G__29188;
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
{var map__29184 = cljs.core.first.call(null,s__29178__$2);var map__29184__$1 = ((cljs.core.seq_QMARK_.call(null,map__29184))?cljs.core.apply.call(null,cljs.core.hash_map,map__29184):map__29184);var filter = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29184__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29184,map__29184__$1,filter,label__$1,value,s__29178__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29164,input_schema29165,input_checker29166,output_checker29167){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29184,map__29184__$1,filter,label__$1,value,s__29178__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29164,input_schema29165,input_checker29166,output_checker29167))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29177.call(null,cljs.core.rest.call(null,s__29178__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29164,input_schema29165,input_checker29166,output_checker29167))
,null,null));
});})(options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29164,input_schema29165,input_checker29166,output_checker29167))
;return iter__4377__auto__.call(null,options__$1);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29189 = output_checker29167.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29189))
{var error__6036__auto___29190 = temp__4126__auto___29189;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29190)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29190,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29164,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29164,input_schema29165,input_checker29166,output_checker29167))
,schema.core.make_fn_schema.call(null,output_schema29164,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29165], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29336 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29196 = schema.core.Any;var input_schema29197 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29194","map29194",-506459449,null))], null);var input_checker29198 = schema.core.checker.call(null,input_schema29197);var output_checker29199 = schema.core.checker.call(null,output_schema29196);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199){
return (function constructor29192(G__29200){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29200], null);var temp__4126__auto___29338 = input_checker29198.call(null,args__6035__auto___29337);if(cljs.core.truth_(temp__4126__auto___29338))
{var error__6036__auto___29339 = temp__4126__auto___29338;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29192","constructor29192",-655703588,null),cljs.core.pr_str.call(null,error__6036__auto___29339)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29339,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29337,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29197,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29194 = G__29200;while(true){
if(cljs.core.map_QMARK_.call(null,map29194))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29194)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29194,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29195 = plumbing.fnk.schema.safe_get.call(null,map29194,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29195,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29194,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t29267 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t29267 = (function (component_spec,component_filter_rq_chan,owner,output_checker29199,data,input_schema29197,map29194,map29195,filter_spec,G__29200,validate__6034__auto__,id,output_schema29196,constructor29192,ufv__,input_checker29198,meta29268){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.output_checker29199 = output_checker29199;
this.data = data;
this.input_schema29197 = input_schema29197;
this.map29194 = map29194;
this.map29195 = map29195;
this.filter_spec = filter_spec;
this.G__29200 = G__29200;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_schema29196 = output_schema29196;
this.constructor29192 = constructor29192;
this.ufv__ = ufv__;
this.input_checker29198 = input_checker29198;
this.meta29268 = meta29268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t29267.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t29267.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t29267";
clustermap.components.filters.checkboxes_filter.t29267.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t29267");
});})(owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199))
;
clustermap.components.filters.checkboxes_filter.t29267.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t29267.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199))
;
clustermap.components.filters.checkboxes_filter.t29267.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t29267.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199))
;
clustermap.components.filters.checkboxes_filter.t29267.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t29267.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199){
return (function (state_29307){var state_val_29308 = (state_29307[(1)]);if((state_val_29308 === (7)))
{var inst_29298 = (state_29307[(2)]);var state_29307__$1 = state_29307;if(cljs.core.truth_(inst_29298))
{var statearr_29309_29340 = state_29307__$1;(statearr_29309_29340[(1)] = (11));
} else
{var statearr_29310_29341 = state_29307__$1;(statearr_29310_29341[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29308 === (1)))
{var state_29307__$1 = state_29307;var statearr_29311_29342 = state_29307__$1;(statearr_29311_29342[(2)] = null);
(statearr_29311_29342[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29308 === (4)))
{var inst_29272 = (state_29307[(7)]);var inst_29272__$1 = (state_29307[(2)]);var state_29307__$1 = (function (){var statearr_29312 = state_29307;(statearr_29312[(7)] = inst_29272__$1);
return statearr_29312;
})();if(cljs.core.truth_(inst_29272__$1))
{var statearr_29313_29343 = state_29307__$1;(statearr_29313_29343[(1)] = (5));
} else
{var statearr_29314_29344 = state_29307__$1;(statearr_29314_29344[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29308 === (13)))
{var inst_29303 = (state_29307[(2)]);var state_29307__$1 = state_29307;var statearr_29315_29345 = state_29307__$1;(statearr_29315_29345[(2)] = inst_29303);
(statearr_29315_29345[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29308 === (6)))
{var state_29307__$1 = state_29307;var statearr_29316_29346 = state_29307__$1;(statearr_29316_29346[(2)] = null);
(statearr_29316_29346[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29308 === (3)))
{var inst_29305 = (state_29307[(2)]);var state_29307__$1 = state_29307;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29307__$1,inst_29305);
} else
{if((state_val_29308 === (12)))
{var state_29307__$1 = state_29307;var statearr_29317_29347 = state_29307__$1;(statearr_29317_29347[(2)] = null);
(statearr_29317_29347[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29308 === (2)))
{var state_29307__$1 = state_29307;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29307__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29308 === (11)))
{var state_29307__$1 = state_29307;var statearr_29318_29348 = state_29307__$1;(statearr_29318_29348[(2)] = null);
(statearr_29318_29348[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29308 === (9)))
{var inst_29278 = (state_29307[(8)]);var state_29307__$1 = state_29307;var statearr_29319_29349 = state_29307__$1;(statearr_29319_29349[(2)] = inst_29278);
(statearr_29319_29349[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29308 === (5)))
{var inst_29272 = (state_29307[(7)]);var inst_29278 = (state_29307[(8)]);var inst_29275 = cljs.core.nth.call(null,inst_29272,(0),null);var inst_29276 = cljs.core.nth.call(null,inst_29272,(1),null);var inst_29278__$1 = om.core.get_props.call(null,self__.owner);var inst_29279 = cljs.core.seq_QMARK_.call(null,inst_29278__$1);var state_29307__$1 = (function (){var statearr_29320 = state_29307;(statearr_29320[(9)] = inst_29275);
(statearr_29320[(8)] = inst_29278__$1);
(statearr_29320[(10)] = inst_29276);
return statearr_29320;
})();if(inst_29279)
{var statearr_29321_29350 = state_29307__$1;(statearr_29321_29350[(1)] = (8));
} else
{var statearr_29322_29351 = state_29307__$1;(statearr_29322_29351[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29308 === (10)))
{var inst_29276 = (state_29307[(10)]);var inst_29284 = (state_29307[(2)]);var inst_29285 = cljs.core.get.call(null,inst_29284,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29286 = cljs.core.get.call(null,inst_29284,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29287 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29288 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_29276];var inst_29289 = (new cljs.core.PersistentVector(null,3,(5),inst_29287,inst_29288,null));var inst_29290 = cljs.core.clj__GT_js.call(null,inst_29289);var inst_29291 = console.log(inst_29290);var inst_29292 = cljs.core.deref.call(null,inst_29286);var inst_29293 = cljs.core.deref.call(null,inst_29285);var inst_29294 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_29292,inst_29293,inst_29276);var inst_29295 = om.core.update_BANG_.call(null,inst_29286,inst_29294);var state_29307__$1 = (function (){var statearr_29323 = state_29307;(statearr_29323[(11)] = inst_29295);
(statearr_29323[(12)] = inst_29291);
return statearr_29323;
})();var statearr_29324_29352 = state_29307__$1;(statearr_29324_29352[(2)] = true);
(statearr_29324_29352[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29308 === (8)))
{var inst_29278 = (state_29307[(8)]);var inst_29281 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29278);var state_29307__$1 = state_29307;var statearr_29325_29353 = state_29307__$1;(statearr_29325_29353[(2)] = inst_29281);
(statearr_29325_29353[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29329 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29329[(0)] = state_machine__11462__auto__);
(statearr_29329[(1)] = (1));
return statearr_29329;
});
var state_machine__11462__auto____1 = (function (state_29307){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29307);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29330){if((e29330 instanceof Object))
{var ex__11465__auto__ = e29330;var statearr_29331_29354 = state_29307;(statearr_29331_29354[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29307);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29330;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29355 = state_29307;
state_29307 = G__29355;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29307){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199))
})();var state__11519__auto__ = (function (){var statearr_29332 = f__11518__auto__.call(null);(statearr_29332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199))
;
clustermap.components.filters.checkboxes_filter.t29267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199){
return (function (_29269){var self__ = this;
var _29269__$1 = this;return self__.meta29268;
});})(owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199))
;
clustermap.components.filters.checkboxes_filter.t29267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199){
return (function (_29269,meta29268__$1){var self__ = this;
var _29269__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t29267(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.output_checker29199,self__.data,self__.input_schema29197,self__.map29194,self__.map29195,self__.filter_spec,self__.G__29200,self__.validate__6034__auto__,self__.id,self__.output_schema29196,self__.constructor29192,self__.ufv__,self__.input_checker29198,meta29268__$1));
});})(owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199))
;
clustermap.components.filters.checkboxes_filter.__GT_t29267 = ((function (owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199){
return (function __GT_t29267(component_spec__$1,component_filter_rq_chan__$1,owner__$1,output_checker29199__$1,data__$1,input_schema29197__$1,map29194__$1,map29195__$1,filter_spec__$1,G__29200__$1,validate__6034__auto____$1,id__$1,output_schema29196__$1,constructor29192__$1,ufv____$1,input_checker29198__$1,meta29268){return (new clustermap.components.filters.checkboxes_filter.t29267(component_spec__$1,component_filter_rq_chan__$1,owner__$1,output_checker29199__$1,data__$1,input_schema29197__$1,map29194__$1,map29195__$1,filter_spec__$1,G__29200__$1,validate__6034__auto____$1,id__$1,output_schema29196__$1,constructor29192__$1,ufv____$1,input_checker29198__$1,meta29268));
});})(owner,component_filter_rq_chan,map29195,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199))
;
}
return (new clustermap.components.filters.checkboxes_filter.t29267(component_spec,component_filter_rq_chan,owner,output_checker29199,data,input_schema29197,map29194,map29195,filter_spec,G__29200,validate__6034__auto__,id,output_schema29196,constructor29192,ufv__,input_checker29198,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29356 = output_checker29199.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29356))
{var error__6036__auto___29357 = temp__4126__auto___29356;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29192","constructor29192",-655703588,null),cljs.core.pr_str.call(null,error__6036__auto___29357)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29357,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29196,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29196,input_schema29197,input_checker29198,output_checker29199))
,schema.core.make_fn_schema.call(null,output_schema29196,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29197], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___29336){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner29191,p__29333){var vec__29335 = p__29333;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29335,(0),null);return component_fnk__7881__auto___29336.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29191,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner29191,var_args){
var p__29333 = null;if (arguments.length > 2) {
  p__29333 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29191,p__29333);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29358){
var data__7882__auto__ = cljs.core.first(arglist__29358);
arglist__29358 = cljs.core.next(arglist__29358);
var owner29191 = cljs.core.first(arglist__29358);
var p__29333 = cljs.core.rest(arglist__29358);
return checkboxes_filter_component__delegate(data__7882__auto__,owner29191,p__29333);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29336))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29193){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m29193);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m29193){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
