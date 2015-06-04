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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29179(s__29180){return (new cljs.core.LazySeq(null,(function (){var s__29180__$1 = s__29180;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29180__$1);if(temp__4126__auto__)
{var s__29180__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29180__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29180__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29182 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29181 = (0);while(true){
if((i__29181 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29181);cljs.core.chunk_append.call(null,b__29182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29183 = (i__29181 + (1));
i__29181 = G__29183;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29182),iter__29179.call(null,cljs.core.chunk_rest.call(null,s__29180__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29182),null);
}
} else
{var o = cljs.core.first.call(null,s__29180__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29179.call(null,cljs.core.rest.call(null,s__29180__$2)));
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
return (function (p1__29184_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__29184_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__29187 = options;var G__29187__$1 = (((G__29187 == null))?null:cljs.core.filter.call(null,((function (G__29187,values__$1){
return (function (p1__29185_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29185_SHARP_));
});})(G__29187,values__$1))
,G__29187));var G__29187__$2 = (((G__29187__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__29187__$1));return G__29187__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__29189,values){var map__29191 = p__29189;var map__29191__$1 = ((cljs.core.seq_QMARK_.call(null,map__29191))?cljs.core.apply.call(null,cljs.core.hash_map,map__29191):map__29191);var component_spec = map__29191__$1;var options = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29191__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29191,map__29191__$1,component_spec,options,label){
return (function (p1__29188_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29188_SHARP_));
});})(values__$1,map__29191,map__29191__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29192,values){var map__29194 = p__29192;var map__29194__$1 = ((cljs.core.seq_QMARK_.call(null,map__29194))?cljs.core.apply.call(null,cljs.core.hash_map,map__29194):map__29194);var component_spec = map__29194__$1;var options = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29195 = schema.core.Any;var input_schema29196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29197 = schema.core.checker.call(null,input_schema29196);var output_checker29198 = schema.core.checker.call(null,output_schema29195);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function render_STAR_(G__29199){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29199], null);var temp__4126__auto___29217 = input_checker29197.call(null,args__6035__auto___29216);if(cljs.core.truth_(temp__4126__auto___29217))
{var error__6036__auto___29218 = temp__4126__auto___29217;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29218)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29218,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29216,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29196,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29199;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
return React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function iter__29208(s__29209){return (new cljs.core.LazySeq(null,((function (options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function (){var s__29209__$1 = s__29209;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29209__$1);if(temp__4126__auto__)
{var s__29209__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29209__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29209__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29211 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29210 = (0);while(true){
if((i__29210 < size__4376__auto__))
{var map__29214 = cljs.core._nth.call(null,c__4375__auto__,i__29210);var map__29214__$1 = ((cljs.core.seq_QMARK_.call(null,map__29214))?cljs.core.apply.call(null,cljs.core.hash_map,map__29214):map__29214);var filter = cljs.core.get.call(null,map__29214__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29214__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29214__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29211,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29210,map__29214,map__29214__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29211,s__29209__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29210,map__29214,map__29214__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29211,s__29209__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29219 = (i__29210 + (1));
i__29210 = G__29219;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29211),iter__29208.call(null,cljs.core.chunk_rest.call(null,s__29209__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29211),null);
}
} else
{var map__29215 = cljs.core.first.call(null,s__29209__$2);var map__29215__$1 = ((cljs.core.seq_QMARK_.call(null,map__29215))?cljs.core.apply.call(null,cljs.core.hash_map,map__29215):map__29215);var filter = cljs.core.get.call(null,map__29215__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29215__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29215__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29215,map__29215__$1,filter,label__$1,value,s__29209__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29215,map__29215__$1,filter,label__$1,value,s__29209__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29208.call(null,cljs.core.rest.call(null,s__29209__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
,null,null));
});})(options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
;return iter__4377__auto__.call(null,options__$1);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29220 = output_checker29198.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29220))
{var error__6036__auto___29221 = temp__4126__auto___29220;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29221)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29221,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29195,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29195,input_schema29196,input_checker29197,output_checker29198))
,schema.core.make_fn_schema.call(null,output_schema29195,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29196], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29367 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29227 = schema.core.Any;var input_schema29228 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29225","map29225",1396180540,null))], null);var input_checker29229 = schema.core.checker.call(null,input_schema29228);var output_checker29230 = schema.core.checker.call(null,output_schema29227);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function constructor29223(G__29231){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29368 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29231], null);var temp__4126__auto___29369 = input_checker29229.call(null,args__6035__auto___29368);if(cljs.core.truth_(temp__4126__auto___29369))
{var error__6036__auto___29370 = temp__4126__auto___29369;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29223","constructor29223",-959396845,null),cljs.core.pr_str.call(null,error__6036__auto___29370)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29370,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29368,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29228,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29225 = G__29231;while(true){
if(cljs.core.map_QMARK_.call(null,map29225))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29225)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29225,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29226 = plumbing.fnk.schema.safe_get.call(null,map29225,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29226,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29225,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t29298 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t29298 = (function (component_spec,component_filter_rq_chan,G__29231,owner,input_schema29228,data,filter_spec,constructor29223,input_checker29229,output_schema29227,validate__6034__auto__,id,output_checker29230,map29225,map29226,ufv__,meta29299){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.G__29231 = G__29231;
this.owner = owner;
this.input_schema29228 = input_schema29228;
this.data = data;
this.filter_spec = filter_spec;
this.constructor29223 = constructor29223;
this.input_checker29229 = input_checker29229;
this.output_schema29227 = output_schema29227;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_checker29230 = output_checker29230;
this.map29225 = map29225;
this.map29226 = map29226;
this.ufv__ = ufv__;
this.meta29299 = meta29299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t29298.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t29298.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t29298";
clustermap.components.filters.checkboxes_filter.t29298.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t29298");
});})(owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.filters.checkboxes_filter.t29298.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t29298.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.filters.checkboxes_filter.t29298.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t29298.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.filters.checkboxes_filter.t29298.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t29298.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (state_29338){var state_val_29339 = (state_29338[(1)]);if((state_val_29339 === (7)))
{var inst_29329 = (state_29338[(2)]);var state_29338__$1 = state_29338;if(cljs.core.truth_(inst_29329))
{var statearr_29340_29371 = state_29338__$1;(statearr_29340_29371[(1)] = (11));
} else
{var statearr_29341_29372 = state_29338__$1;(statearr_29341_29372[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29339 === (1)))
{var state_29338__$1 = state_29338;var statearr_29342_29373 = state_29338__$1;(statearr_29342_29373[(2)] = null);
(statearr_29342_29373[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29339 === (4)))
{var inst_29303 = (state_29338[(7)]);var inst_29303__$1 = (state_29338[(2)]);var state_29338__$1 = (function (){var statearr_29343 = state_29338;(statearr_29343[(7)] = inst_29303__$1);
return statearr_29343;
})();if(cljs.core.truth_(inst_29303__$1))
{var statearr_29344_29374 = state_29338__$1;(statearr_29344_29374[(1)] = (5));
} else
{var statearr_29345_29375 = state_29338__$1;(statearr_29345_29375[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29339 === (13)))
{var inst_29334 = (state_29338[(2)]);var state_29338__$1 = state_29338;var statearr_29346_29376 = state_29338__$1;(statearr_29346_29376[(2)] = inst_29334);
(statearr_29346_29376[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29339 === (6)))
{var state_29338__$1 = state_29338;var statearr_29347_29377 = state_29338__$1;(statearr_29347_29377[(2)] = null);
(statearr_29347_29377[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29339 === (3)))
{var inst_29336 = (state_29338[(2)]);var state_29338__$1 = state_29338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29338__$1,inst_29336);
} else
{if((state_val_29339 === (12)))
{var state_29338__$1 = state_29338;var statearr_29348_29378 = state_29338__$1;(statearr_29348_29378[(2)] = null);
(statearr_29348_29378[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29339 === (2)))
{var state_29338__$1 = state_29338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29338__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29339 === (11)))
{var state_29338__$1 = state_29338;var statearr_29349_29379 = state_29338__$1;(statearr_29349_29379[(2)] = null);
(statearr_29349_29379[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29339 === (9)))
{var inst_29309 = (state_29338[(8)]);var state_29338__$1 = state_29338;var statearr_29350_29380 = state_29338__$1;(statearr_29350_29380[(2)] = inst_29309);
(statearr_29350_29380[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29339 === (5)))
{var inst_29303 = (state_29338[(7)]);var inst_29309 = (state_29338[(8)]);var inst_29306 = cljs.core.nth.call(null,inst_29303,(0),null);var inst_29307 = cljs.core.nth.call(null,inst_29303,(1),null);var inst_29309__$1 = om.core.get_props.call(null,self__.owner);var inst_29310 = cljs.core.seq_QMARK_.call(null,inst_29309__$1);var state_29338__$1 = (function (){var statearr_29351 = state_29338;(statearr_29351[(9)] = inst_29306);
(statearr_29351[(10)] = inst_29307);
(statearr_29351[(8)] = inst_29309__$1);
return statearr_29351;
})();if(inst_29310)
{var statearr_29352_29381 = state_29338__$1;(statearr_29352_29381[(1)] = (8));
} else
{var statearr_29353_29382 = state_29338__$1;(statearr_29353_29382[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29339 === (10)))
{var inst_29307 = (state_29338[(10)]);var inst_29315 = (state_29338[(2)]);var inst_29316 = cljs.core.get.call(null,inst_29315,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29317 = cljs.core.get.call(null,inst_29315,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29318 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29319 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_29307];var inst_29320 = (new cljs.core.PersistentVector(null,3,(5),inst_29318,inst_29319,null));var inst_29321 = cljs.core.clj__GT_js.call(null,inst_29320);var inst_29322 = console.log(inst_29321);var inst_29323 = cljs.core.deref.call(null,inst_29317);var inst_29324 = cljs.core.deref.call(null,inst_29316);var inst_29325 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_29323,inst_29324,inst_29307);var inst_29326 = om.core.update_BANG_.call(null,inst_29317,inst_29325);var state_29338__$1 = (function (){var statearr_29354 = state_29338;(statearr_29354[(11)] = inst_29326);
(statearr_29354[(12)] = inst_29322);
return statearr_29354;
})();var statearr_29355_29383 = state_29338__$1;(statearr_29355_29383[(2)] = true);
(statearr_29355_29383[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29339 === (8)))
{var inst_29309 = (state_29338[(8)]);var inst_29312 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29309);var state_29338__$1 = state_29338;var statearr_29356_29384 = state_29338__$1;(statearr_29356_29384[(2)] = inst_29312);
(statearr_29356_29384[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29360 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29360[(0)] = state_machine__11462__auto__);
(statearr_29360[(1)] = (1));
return statearr_29360;
});
var state_machine__11462__auto____1 = (function (state_29338){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29338);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29361){if((e29361 instanceof Object))
{var ex__11465__auto__ = e29361;var statearr_29362_29385 = state_29338;(statearr_29362_29385[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29338);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29361;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29386 = state_29338;
state_29338 = G__29386;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29338){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
})();var state__11519__auto__ = (function (){var statearr_29363 = f__11518__auto__.call(null);(statearr_29363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.filters.checkboxes_filter.t29298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (_29300){var self__ = this;
var _29300__$1 = this;return self__.meta29299;
});})(owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.filters.checkboxes_filter.t29298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function (_29300,meta29299__$1){var self__ = this;
var _29300__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t29298(self__.component_spec,self__.component_filter_rq_chan,self__.G__29231,self__.owner,self__.input_schema29228,self__.data,self__.filter_spec,self__.constructor29223,self__.input_checker29229,self__.output_schema29227,self__.validate__6034__auto__,self__.id,self__.output_checker29230,self__.map29225,self__.map29226,self__.ufv__,meta29299__$1));
});})(owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
clustermap.components.filters.checkboxes_filter.__GT_t29298 = ((function (owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230){
return (function __GT_t29298(component_spec__$1,component_filter_rq_chan__$1,G__29231__$1,owner__$1,input_schema29228__$1,data__$1,filter_spec__$1,constructor29223__$1,input_checker29229__$1,output_schema29227__$1,validate__6034__auto____$1,id__$1,output_checker29230__$1,map29225__$1,map29226__$1,ufv____$1,meta29299){return (new clustermap.components.filters.checkboxes_filter.t29298(component_spec__$1,component_filter_rq_chan__$1,G__29231__$1,owner__$1,input_schema29228__$1,data__$1,filter_spec__$1,constructor29223__$1,input_checker29229__$1,output_schema29227__$1,validate__6034__auto____$1,id__$1,output_checker29230__$1,map29225__$1,map29226__$1,ufv____$1,meta29299));
});})(owner,component_filter_rq_chan,map29226,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
;
}
return (new clustermap.components.filters.checkboxes_filter.t29298(component_spec,component_filter_rq_chan,G__29231,owner,input_schema29228,data,filter_spec,constructor29223,input_checker29229,output_schema29227,validate__6034__auto__,id,output_checker29230,map29225,map29226,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29387 = output_checker29230.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29387))
{var error__6036__auto___29388 = temp__4126__auto___29387;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29223","constructor29223",-959396845,null),cljs.core.pr_str.call(null,error__6036__auto___29388)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29388,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29227,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29227,input_schema29228,input_checker29229,output_checker29230))
,schema.core.make_fn_schema.call(null,output_schema29227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29228], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___29367){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner29222,p__29364){var vec__29366 = p__29364;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29366,(0),null);return component_fnk__7881__auto___29367.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29222,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner29222,var_args){
var p__29364 = null;if (arguments.length > 2) {
  p__29364 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29222,p__29364);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29389){
var data__7882__auto__ = cljs.core.first(arglist__29389);
arglist__29389 = cljs.core.next(arglist__29389);
var owner29222 = cljs.core.first(arglist__29389);
var p__29364 = cljs.core.rest(arglist__29389);
return checkboxes_filter_component__delegate(data__7882__auto__,owner29222,p__29364);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29367))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29224){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m29224);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m29224){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
