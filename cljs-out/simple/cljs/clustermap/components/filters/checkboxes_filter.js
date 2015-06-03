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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29147(s__29148){return (new cljs.core.LazySeq(null,(function (){var s__29148__$1 = s__29148;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29148__$1);if(temp__4126__auto__)
{var s__29148__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29148__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29148__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29150 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29149 = (0);while(true){
if((i__29149 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29149);cljs.core.chunk_append.call(null,b__29150,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29151 = (i__29149 + (1));
i__29149 = G__29151;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29150),iter__29147.call(null,cljs.core.chunk_rest.call(null,s__29148__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29150),null);
}
} else
{var o = cljs.core.first.call(null,s__29148__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29147.call(null,cljs.core.rest.call(null,s__29148__$2)));
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
return (function (p1__29152_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__29152_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__29155 = options;var G__29155__$1 = (((G__29155 == null))?null:cljs.core.filter.call(null,((function (G__29155,values__$1){
return (function (p1__29153_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29153_SHARP_));
});})(G__29155,values__$1))
,G__29155));var G__29155__$2 = (((G__29155__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__29155__$1));return G__29155__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__29157,values){var map__29159 = p__29157;var map__29159__$1 = ((cljs.core.seq_QMARK_.call(null,map__29159))?cljs.core.apply.call(null,cljs.core.hash_map,map__29159):map__29159);var component_spec = map__29159__$1;var options = cljs.core.get.call(null,map__29159__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29159__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29159,map__29159__$1,component_spec,options,label){
return (function (p1__29156_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29156_SHARP_));
});})(values__$1,map__29159,map__29159__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29160,values){var map__29162 = p__29160;var map__29162__$1 = ((cljs.core.seq_QMARK_.call(null,map__29162))?cljs.core.apply.call(null,cljs.core.hash_map,map__29162):map__29162);var component_spec = map__29162__$1;var options = cljs.core.get.call(null,map__29162__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29162__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29163 = schema.core.Any;var input_schema29164 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29165 = schema.core.checker.call(null,input_schema29164);var output_checker29166 = schema.core.checker.call(null,output_schema29163);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29163,input_schema29164,input_checker29165,output_checker29166){
return (function render_STAR_(G__29167){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29167], null);var temp__4126__auto___29185 = input_checker29165.call(null,args__6035__auto___29184);if(cljs.core.truth_(temp__4126__auto___29185))
{var error__6036__auto___29186 = temp__4126__auto___29185;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29186)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29186,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29184,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29164,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29167;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
return React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29163,input_schema29164,input_checker29165,output_checker29166){
return (function iter__29176(s__29177){return (new cljs.core.LazySeq(null,((function (options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29163,input_schema29164,input_checker29165,output_checker29166){
return (function (){var s__29177__$1 = s__29177;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29177__$1);if(temp__4126__auto__)
{var s__29177__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29177__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29177__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29179 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29178 = (0);while(true){
if((i__29178 < size__4376__auto__))
{var map__29182 = cljs.core._nth.call(null,c__4375__auto__,i__29178);var map__29182__$1 = ((cljs.core.seq_QMARK_.call(null,map__29182))?cljs.core.apply.call(null,cljs.core.hash_map,map__29182):map__29182);var filter = cljs.core.get.call(null,map__29182__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29182__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29182__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29179,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29178,map__29182,map__29182__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29179,s__29177__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29163,input_schema29164,input_checker29165,output_checker29166){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29178,map__29182,map__29182__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29179,s__29177__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29163,input_schema29164,input_checker29165,output_checker29166))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29187 = (i__29178 + (1));
i__29178 = G__29187;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29179),iter__29176.call(null,cljs.core.chunk_rest.call(null,s__29177__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29179),null);
}
} else
{var map__29183 = cljs.core.first.call(null,s__29177__$2);var map__29183__$1 = ((cljs.core.seq_QMARK_.call(null,map__29183))?cljs.core.apply.call(null,cljs.core.hash_map,map__29183):map__29183);var filter = cljs.core.get.call(null,map__29183__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29183__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29183__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29183,map__29183__$1,filter,label__$1,value,s__29177__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29163,input_schema29164,input_checker29165,output_checker29166){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29183,map__29183__$1,filter,label__$1,value,s__29177__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29163,input_schema29164,input_checker29165,output_checker29166))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29176.call(null,cljs.core.rest.call(null,s__29177__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29163,input_schema29164,input_checker29165,output_checker29166))
,null,null));
});})(options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29163,input_schema29164,input_checker29165,output_checker29166))
;return iter__4377__auto__.call(null,options__$1);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29188 = output_checker29166.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29188))
{var error__6036__auto___29189 = temp__4126__auto___29188;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29189)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29189,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29163,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29163,input_schema29164,input_checker29165,output_checker29166))
,schema.core.make_fn_schema.call(null,output_schema29163,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29164], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29335 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29195 = schema.core.Any;var input_schema29196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29193","map29193",-490153574,null))], null);var input_checker29197 = schema.core.checker.call(null,input_schema29196);var output_checker29198 = schema.core.checker.call(null,output_schema29195);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function constructor29191(G__29199){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29336 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29199], null);var temp__4126__auto___29337 = input_checker29197.call(null,args__6035__auto___29336);if(cljs.core.truth_(temp__4126__auto___29337))
{var error__6036__auto___29338 = temp__4126__auto___29337;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29191","constructor29191",-2131684447,null),cljs.core.pr_str.call(null,error__6036__auto___29338)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29338,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29336,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29196,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29193 = G__29199;while(true){
if(cljs.core.map_QMARK_.call(null,map29193))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29193)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29193,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29194 = plumbing.fnk.schema.safe_get.call(null,map29193,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29194,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29193,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t29266 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t29266 = (function (component_spec,component_filter_rq_chan,output_checker29198,input_checker29197,constructor29191,owner,data,map29194,G__29199,input_schema29196,filter_spec,output_schema29195,validate__6034__auto__,map29193,id,ufv__,meta29267){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_checker29198 = output_checker29198;
this.input_checker29197 = input_checker29197;
this.constructor29191 = constructor29191;
this.owner = owner;
this.data = data;
this.map29194 = map29194;
this.G__29199 = G__29199;
this.input_schema29196 = input_schema29196;
this.filter_spec = filter_spec;
this.output_schema29195 = output_schema29195;
this.validate__6034__auto__ = validate__6034__auto__;
this.map29193 = map29193;
this.id = id;
this.ufv__ = ufv__;
this.meta29267 = meta29267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t29266.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t29266.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t29266";
clustermap.components.filters.checkboxes_filter.t29266.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t29266");
});})(owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
;
clustermap.components.filters.checkboxes_filter.t29266.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t29266.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
;
clustermap.components.filters.checkboxes_filter.t29266.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t29266.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
;
clustermap.components.filters.checkboxes_filter.t29266.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t29266.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function (state_29306){var state_val_29307 = (state_29306[(1)]);if((state_val_29307 === (7)))
{var inst_29297 = (state_29306[(2)]);var state_29306__$1 = state_29306;if(cljs.core.truth_(inst_29297))
{var statearr_29308_29339 = state_29306__$1;(statearr_29308_29339[(1)] = (11));
} else
{var statearr_29309_29340 = state_29306__$1;(statearr_29309_29340[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29307 === (1)))
{var state_29306__$1 = state_29306;var statearr_29310_29341 = state_29306__$1;(statearr_29310_29341[(2)] = null);
(statearr_29310_29341[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29307 === (4)))
{var inst_29271 = (state_29306[(7)]);var inst_29271__$1 = (state_29306[(2)]);var state_29306__$1 = (function (){var statearr_29311 = state_29306;(statearr_29311[(7)] = inst_29271__$1);
return statearr_29311;
})();if(cljs.core.truth_(inst_29271__$1))
{var statearr_29312_29342 = state_29306__$1;(statearr_29312_29342[(1)] = (5));
} else
{var statearr_29313_29343 = state_29306__$1;(statearr_29313_29343[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29307 === (13)))
{var inst_29302 = (state_29306[(2)]);var state_29306__$1 = state_29306;var statearr_29314_29344 = state_29306__$1;(statearr_29314_29344[(2)] = inst_29302);
(statearr_29314_29344[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29307 === (6)))
{var state_29306__$1 = state_29306;var statearr_29315_29345 = state_29306__$1;(statearr_29315_29345[(2)] = null);
(statearr_29315_29345[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29307 === (3)))
{var inst_29304 = (state_29306[(2)]);var state_29306__$1 = state_29306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29306__$1,inst_29304);
} else
{if((state_val_29307 === (12)))
{var state_29306__$1 = state_29306;var statearr_29316_29346 = state_29306__$1;(statearr_29316_29346[(2)] = null);
(statearr_29316_29346[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29307 === (2)))
{var state_29306__$1 = state_29306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29306__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29307 === (11)))
{var state_29306__$1 = state_29306;var statearr_29317_29347 = state_29306__$1;(statearr_29317_29347[(2)] = null);
(statearr_29317_29347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29307 === (9)))
{var inst_29277 = (state_29306[(8)]);var state_29306__$1 = state_29306;var statearr_29318_29348 = state_29306__$1;(statearr_29318_29348[(2)] = inst_29277);
(statearr_29318_29348[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29307 === (5)))
{var inst_29277 = (state_29306[(8)]);var inst_29271 = (state_29306[(7)]);var inst_29274 = cljs.core.nth.call(null,inst_29271,(0),null);var inst_29275 = cljs.core.nth.call(null,inst_29271,(1),null);var inst_29277__$1 = om.core.get_props.call(null,self__.owner);var inst_29278 = cljs.core.seq_QMARK_.call(null,inst_29277__$1);var state_29306__$1 = (function (){var statearr_29319 = state_29306;(statearr_29319[(9)] = inst_29274);
(statearr_29319[(10)] = inst_29275);
(statearr_29319[(8)] = inst_29277__$1);
return statearr_29319;
})();if(inst_29278)
{var statearr_29320_29349 = state_29306__$1;(statearr_29320_29349[(1)] = (8));
} else
{var statearr_29321_29350 = state_29306__$1;(statearr_29321_29350[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29307 === (10)))
{var inst_29275 = (state_29306[(10)]);var inst_29283 = (state_29306[(2)]);var inst_29284 = cljs.core.get.call(null,inst_29283,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29285 = cljs.core.get.call(null,inst_29283,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29286 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29287 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_29275];var inst_29288 = (new cljs.core.PersistentVector(null,3,(5),inst_29286,inst_29287,null));var inst_29289 = cljs.core.clj__GT_js.call(null,inst_29288);var inst_29290 = console.log(inst_29289);var inst_29291 = cljs.core.deref.call(null,inst_29285);var inst_29292 = cljs.core.deref.call(null,inst_29284);var inst_29293 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_29291,inst_29292,inst_29275);var inst_29294 = om.core.update_BANG_.call(null,inst_29285,inst_29293);var state_29306__$1 = (function (){var statearr_29322 = state_29306;(statearr_29322[(11)] = inst_29294);
(statearr_29322[(12)] = inst_29290);
return statearr_29322;
})();var statearr_29323_29351 = state_29306__$1;(statearr_29323_29351[(2)] = true);
(statearr_29323_29351[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29307 === (8)))
{var inst_29277 = (state_29306[(8)]);var inst_29280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29277);var state_29306__$1 = state_29306;var statearr_29324_29352 = state_29306__$1;(statearr_29324_29352[(2)] = inst_29280);
(statearr_29324_29352[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29328 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29328[(0)] = state_machine__11462__auto__);
(statearr_29328[(1)] = (1));
return statearr_29328;
});
var state_machine__11462__auto____1 = (function (state_29306){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29306);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29329){if((e29329 instanceof Object))
{var ex__11465__auto__ = e29329;var statearr_29330_29353 = state_29306;(statearr_29330_29353[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29329;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29354 = state_29306;
state_29306 = G__29354;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29306){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
})();var state__11519__auto__ = (function (){var statearr_29331 = f__11518__auto__.call(null);(statearr_29331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
;
clustermap.components.filters.checkboxes_filter.t29266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function (_29268){var self__ = this;
var _29268__$1 = this;return self__.meta29267;
});})(owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
;
clustermap.components.filters.checkboxes_filter.t29266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function (_29268,meta29267__$1){var self__ = this;
var _29268__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t29266(self__.component_spec,self__.component_filter_rq_chan,self__.output_checker29198,self__.input_checker29197,self__.constructor29191,self__.owner,self__.data,self__.map29194,self__.G__29199,self__.input_schema29196,self__.filter_spec,self__.output_schema29195,self__.validate__6034__auto__,self__.map29193,self__.id,self__.ufv__,meta29267__$1));
});})(owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
;
clustermap.components.filters.checkboxes_filter.__GT_t29266 = ((function (owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function __GT_t29266(component_spec__$1,component_filter_rq_chan__$1,output_checker29198__$1,input_checker29197__$1,constructor29191__$1,owner__$1,data__$1,map29194__$1,G__29199__$1,input_schema29196__$1,filter_spec__$1,output_schema29195__$1,validate__6034__auto____$1,map29193__$1,id__$1,ufv____$1,meta29267){return (new clustermap.components.filters.checkboxes_filter.t29266(component_spec__$1,component_filter_rq_chan__$1,output_checker29198__$1,input_checker29197__$1,constructor29191__$1,owner__$1,data__$1,map29194__$1,G__29199__$1,input_schema29196__$1,filter_spec__$1,output_schema29195__$1,validate__6034__auto____$1,map29193__$1,id__$1,ufv____$1,meta29267));
});})(owner,component_filter_rq_chan,map29194,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
;
}
return (new clustermap.components.filters.checkboxes_filter.t29266(component_spec,component_filter_rq_chan,output_checker29198,input_checker29197,constructor29191,owner,data,map29194,G__29199,input_schema29196,filter_spec,output_schema29195,validate__6034__auto__,map29193,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29355 = output_checker29198.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29355))
{var error__6036__auto___29356 = temp__4126__auto___29355;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29191","constructor29191",-2131684447,null),cljs.core.pr_str.call(null,error__6036__auto___29356)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29356,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29195,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
,schema.core.make_fn_schema.call(null,output_schema29195,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29196], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___29335){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner29190,p__29332){var vec__29334 = p__29332;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29334,(0),null);return component_fnk__7881__auto___29335.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29190,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner29190,var_args){
var p__29332 = null;if (arguments.length > 2) {
  p__29332 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29190,p__29332);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29357){
var data__7882__auto__ = cljs.core.first(arglist__29357);
arglist__29357 = cljs.core.next(arglist__29357);
var owner29190 = cljs.core.first(arglist__29357);
var p__29332 = cljs.core.rest(arglist__29357);
return checkboxes_filter_component__delegate(data__7882__auto__,owner29190,p__29332);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29335))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29192){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m29192);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m29192){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
