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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29219(s__29220){return (new cljs.core.LazySeq(null,(function (){var s__29220__$1 = s__29220;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29220__$1);if(temp__4126__auto__)
{var s__29220__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29220__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29220__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29222 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29221 = (0);while(true){
if((i__29221 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29221);cljs.core.chunk_append.call(null,b__29222,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29223 = (i__29221 + (1));
i__29221 = G__29223;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29222),iter__29219.call(null,cljs.core.chunk_rest.call(null,s__29220__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29222),null);
}
} else
{var o = cljs.core.first.call(null,s__29220__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29219.call(null,cljs.core.rest.call(null,s__29220__$2)));
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
return (function (p1__29224_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__29224_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__29227 = options;var G__29227__$1 = (((G__29227 == null))?null:cljs.core.filter.call(null,((function (G__29227,values__$1){
return (function (p1__29225_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29225_SHARP_));
});})(G__29227,values__$1))
,G__29227));var G__29227__$2 = (((G__29227__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__29227__$1));return G__29227__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__29229,values){var map__29231 = p__29229;var map__29231__$1 = ((cljs.core.seq_QMARK_.call(null,map__29231))?cljs.core.apply.call(null,cljs.core.hash_map,map__29231):map__29231);var component_spec = map__29231__$1;var options = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29231,map__29231__$1,component_spec,options,label){
return (function (p1__29228_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29228_SHARP_));
});})(values__$1,map__29231,map__29231__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29232,values){var map__29234 = p__29232;var map__29234__$1 = ((cljs.core.seq_QMARK_.call(null,map__29234))?cljs.core.apply.call(null,cljs.core.hash_map,map__29234):map__29234);var component_spec = map__29234__$1;var options = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29235 = schema.core.Any;var input_schema29236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29237 = schema.core.checker.call(null,input_schema29236);var output_checker29238 = schema.core.checker.call(null,output_schema29235);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29235,input_schema29236,input_checker29237,output_checker29238){
return (function render_STAR_(G__29239){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29239], null);var temp__4126__auto___29257 = input_checker29237.call(null,args__6035__auto___29256);if(cljs.core.truth_(temp__4126__auto___29257))
{var error__6036__auto___29258 = temp__4126__auto___29257;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29258)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29258,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29256,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29236,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29239;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
return React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29235,input_schema29236,input_checker29237,output_checker29238){
return (function iter__29248(s__29249){return (new cljs.core.LazySeq(null,((function (options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29235,input_schema29236,input_checker29237,output_checker29238){
return (function (){var s__29249__$1 = s__29249;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29249__$1);if(temp__4126__auto__)
{var s__29249__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29249__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29249__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29251 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29250 = (0);while(true){
if((i__29250 < size__4376__auto__))
{var map__29254 = cljs.core._nth.call(null,c__4375__auto__,i__29250);var map__29254__$1 = ((cljs.core.seq_QMARK_.call(null,map__29254))?cljs.core.apply.call(null,cljs.core.hash_map,map__29254):map__29254);var filter = cljs.core.get.call(null,map__29254__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29254__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29254__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29251,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29250,map__29254,map__29254__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29251,s__29249__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29235,input_schema29236,input_checker29237,output_checker29238){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29250,map__29254,map__29254__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29251,s__29249__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29235,input_schema29236,input_checker29237,output_checker29238))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29259 = (i__29250 + (1));
i__29250 = G__29259;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29251),iter__29248.call(null,cljs.core.chunk_rest.call(null,s__29249__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29251),null);
}
} else
{var map__29255 = cljs.core.first.call(null,s__29249__$2);var map__29255__$1 = ((cljs.core.seq_QMARK_.call(null,map__29255))?cljs.core.apply.call(null,cljs.core.hash_map,map__29255):map__29255);var filter = cljs.core.get.call(null,map__29255__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29255__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29255__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29255,map__29255__$1,filter,label__$1,value,s__29249__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29235,input_schema29236,input_checker29237,output_checker29238){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29255,map__29255__$1,filter,label__$1,value,s__29249__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29235,input_schema29236,input_checker29237,output_checker29238))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29248.call(null,cljs.core.rest.call(null,s__29249__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29235,input_schema29236,input_checker29237,output_checker29238))
,null,null));
});})(options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29235,input_schema29236,input_checker29237,output_checker29238))
;return iter__4377__auto__.call(null,options__$1);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29260 = output_checker29238.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29260))
{var error__6036__auto___29261 = temp__4126__auto___29260;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29261)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29261,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29235,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29235,input_schema29236,input_checker29237,output_checker29238))
,schema.core.make_fn_schema.call(null,output_schema29235,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29236], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29407 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29267 = schema.core.Any;var input_schema29268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29265","map29265",1889391199,null))], null);var input_checker29269 = schema.core.checker.call(null,input_schema29268);var output_checker29270 = schema.core.checker.call(null,output_schema29267);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270){
return (function constructor29263(G__29271){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29408 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29271], null);var temp__4126__auto___29409 = input_checker29269.call(null,args__6035__auto___29408);if(cljs.core.truth_(temp__4126__auto___29409))
{var error__6036__auto___29410 = temp__4126__auto___29409;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29263","constructor29263",-1253531222,null),cljs.core.pr_str.call(null,error__6036__auto___29410)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29410,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29408,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29268,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29265 = G__29271;while(true){
if(cljs.core.map_QMARK_.call(null,map29265))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29265)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29265,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29266 = plumbing.fnk.schema.safe_get.call(null,map29265,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29266,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29265,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t29338 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t29338 = (function (component_spec,component_filter_rq_chan,owner,data,constructor29263,filter_spec,input_checker29269,G__29271,output_schema29267,map29266,validate__6034__auto__,input_schema29268,id,ufv__,output_checker29270,map29265,meta29339){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.constructor29263 = constructor29263;
this.filter_spec = filter_spec;
this.input_checker29269 = input_checker29269;
this.G__29271 = G__29271;
this.output_schema29267 = output_schema29267;
this.map29266 = map29266;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_schema29268 = input_schema29268;
this.id = id;
this.ufv__ = ufv__;
this.output_checker29270 = output_checker29270;
this.map29265 = map29265;
this.meta29339 = meta29339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t29338.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t29338.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t29338";
clustermap.components.filters.checkboxes_filter.t29338.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t29338");
});})(owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270))
;
clustermap.components.filters.checkboxes_filter.t29338.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t29338.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270))
;
clustermap.components.filters.checkboxes_filter.t29338.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t29338.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270))
;
clustermap.components.filters.checkboxes_filter.t29338.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t29338.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270){
return (function (_){var self__ = this;
var ___$1 = this;var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270){
return (function (state_29378){var state_val_29379 = (state_29378[(1)]);if((state_val_29379 === (7)))
{var inst_29369 = (state_29378[(2)]);var state_29378__$1 = state_29378;if(cljs.core.truth_(inst_29369))
{var statearr_29380_29411 = state_29378__$1;(statearr_29380_29411[(1)] = (11));
} else
{var statearr_29381_29412 = state_29378__$1;(statearr_29381_29412[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29379 === (1)))
{var state_29378__$1 = state_29378;var statearr_29382_29413 = state_29378__$1;(statearr_29382_29413[(2)] = null);
(statearr_29382_29413[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29379 === (4)))
{var inst_29343 = (state_29378[(7)]);var inst_29343__$1 = (state_29378[(2)]);var state_29378__$1 = (function (){var statearr_29383 = state_29378;(statearr_29383[(7)] = inst_29343__$1);
return statearr_29383;
})();if(cljs.core.truth_(inst_29343__$1))
{var statearr_29384_29414 = state_29378__$1;(statearr_29384_29414[(1)] = (5));
} else
{var statearr_29385_29415 = state_29378__$1;(statearr_29385_29415[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29379 === (13)))
{var inst_29374 = (state_29378[(2)]);var state_29378__$1 = state_29378;var statearr_29386_29416 = state_29378__$1;(statearr_29386_29416[(2)] = inst_29374);
(statearr_29386_29416[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29379 === (6)))
{var state_29378__$1 = state_29378;var statearr_29387_29417 = state_29378__$1;(statearr_29387_29417[(2)] = null);
(statearr_29387_29417[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29379 === (3)))
{var inst_29376 = (state_29378[(2)]);var state_29378__$1 = state_29378;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29378__$1,inst_29376);
} else
{if((state_val_29379 === (12)))
{var state_29378__$1 = state_29378;var statearr_29388_29418 = state_29378__$1;(statearr_29388_29418[(2)] = null);
(statearr_29388_29418[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29379 === (2)))
{var state_29378__$1 = state_29378;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29378__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29379 === (11)))
{var state_29378__$1 = state_29378;var statearr_29389_29419 = state_29378__$1;(statearr_29389_29419[(2)] = null);
(statearr_29389_29419[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29379 === (9)))
{var inst_29349 = (state_29378[(8)]);var state_29378__$1 = state_29378;var statearr_29390_29420 = state_29378__$1;(statearr_29390_29420[(2)] = inst_29349);
(statearr_29390_29420[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29379 === (5)))
{var inst_29343 = (state_29378[(7)]);var inst_29349 = (state_29378[(8)]);var inst_29346 = cljs.core.nth.call(null,inst_29343,(0),null);var inst_29347 = cljs.core.nth.call(null,inst_29343,(1),null);var inst_29349__$1 = om.core.get_props.call(null,self__.owner);var inst_29350 = cljs.core.seq_QMARK_.call(null,inst_29349__$1);var state_29378__$1 = (function (){var statearr_29391 = state_29378;(statearr_29391[(9)] = inst_29346);
(statearr_29391[(10)] = inst_29347);
(statearr_29391[(8)] = inst_29349__$1);
return statearr_29391;
})();if(inst_29350)
{var statearr_29392_29421 = state_29378__$1;(statearr_29392_29421[(1)] = (8));
} else
{var statearr_29393_29422 = state_29378__$1;(statearr_29393_29422[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29379 === (10)))
{var inst_29347 = (state_29378[(10)]);var inst_29355 = (state_29378[(2)]);var inst_29356 = cljs.core.get.call(null,inst_29355,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29357 = cljs.core.get.call(null,inst_29355,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29358 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29359 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_29347];var inst_29360 = (new cljs.core.PersistentVector(null,3,(5),inst_29358,inst_29359,null));var inst_29361 = cljs.core.clj__GT_js.call(null,inst_29360);var inst_29362 = console.log(inst_29361);var inst_29363 = cljs.core.deref.call(null,inst_29357);var inst_29364 = cljs.core.deref.call(null,inst_29356);var inst_29365 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_29363,inst_29364,inst_29347);var inst_29366 = om.core.update_BANG_.call(null,inst_29357,inst_29365);var state_29378__$1 = (function (){var statearr_29394 = state_29378;(statearr_29394[(11)] = inst_29362);
(statearr_29394[(12)] = inst_29366);
return statearr_29394;
})();var statearr_29395_29423 = state_29378__$1;(statearr_29395_29423[(2)] = true);
(statearr_29395_29423[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29379 === (8)))
{var inst_29349 = (state_29378[(8)]);var inst_29352 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29349);var state_29378__$1 = state_29378;var statearr_29396_29424 = state_29378__$1;(statearr_29396_29424[(2)] = inst_29352);
(statearr_29396_29424[(1)] = (10));
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
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270))
;return ((function (switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_29400 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29400[(0)] = state_machine__11242__auto__);
(statearr_29400[(1)] = (1));
return statearr_29400;
});
var state_machine__11242__auto____1 = (function (state_29378){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_29378);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e29401){if((e29401 instanceof Object))
{var ex__11245__auto__ = e29401;var statearr_29402_29425 = state_29378;(statearr_29402_29425[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29378);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29401;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29426 = state_29378;
state_29378 = G__29426;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_29378){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_29378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270))
})();var state__11299__auto__ = (function (){var statearr_29403 = f__11298__auto__.call(null);(statearr_29403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_29403;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270))
);
return c__11297__auto__;
});})(owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270))
;
clustermap.components.filters.checkboxes_filter.t29338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270){
return (function (_29340){var self__ = this;
var _29340__$1 = this;return self__.meta29339;
});})(owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270))
;
clustermap.components.filters.checkboxes_filter.t29338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270){
return (function (_29340,meta29339__$1){var self__ = this;
var _29340__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t29338(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.constructor29263,self__.filter_spec,self__.input_checker29269,self__.G__29271,self__.output_schema29267,self__.map29266,self__.validate__6034__auto__,self__.input_schema29268,self__.id,self__.ufv__,self__.output_checker29270,self__.map29265,meta29339__$1));
});})(owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270))
;
clustermap.components.filters.checkboxes_filter.__GT_t29338 = ((function (owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270){
return (function __GT_t29338(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,constructor29263__$1,filter_spec__$1,input_checker29269__$1,G__29271__$1,output_schema29267__$1,map29266__$1,validate__6034__auto____$1,input_schema29268__$1,id__$1,ufv____$1,output_checker29270__$1,map29265__$1,meta29339){return (new clustermap.components.filters.checkboxes_filter.t29338(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,constructor29263__$1,filter_spec__$1,input_checker29269__$1,G__29271__$1,output_schema29267__$1,map29266__$1,validate__6034__auto____$1,input_schema29268__$1,id__$1,ufv____$1,output_checker29270__$1,map29265__$1,meta29339));
});})(owner,component_filter_rq_chan,map29266,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270))
;
}
return (new clustermap.components.filters.checkboxes_filter.t29338(component_spec,component_filter_rq_chan,owner,data,constructor29263,filter_spec,input_checker29269,G__29271,output_schema29267,map29266,validate__6034__auto__,input_schema29268,id,ufv__,output_checker29270,map29265,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29427 = output_checker29270.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29427))
{var error__6036__auto___29428 = temp__4126__auto___29427;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29263","constructor29263",-1253531222,null),cljs.core.pr_str.call(null,error__6036__auto___29428)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29428,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29267,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29267,input_schema29268,input_checker29269,output_checker29270))
,schema.core.make_fn_schema.call(null,output_schema29267,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29268], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___29407){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner29262,p__29404){var vec__29406 = p__29404;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29406,(0),null);return component_fnk__7881__auto___29407.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29262,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner29262,var_args){
var p__29404 = null;if (arguments.length > 2) {
  p__29404 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29262,p__29404);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29429){
var data__7882__auto__ = cljs.core.first(arglist__29429);
arglist__29429 = cljs.core.next(arglist__29429);
var owner29262 = cljs.core.first(arglist__29429);
var p__29404 = cljs.core.rest(arglist__29429);
return checkboxes_filter_component__delegate(data__7882__auto__,owner29262,p__29404);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29407))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29264){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m29264);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m29264){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
