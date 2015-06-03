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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29217(s__29218){return (new cljs.core.LazySeq(null,(function (){var s__29218__$1 = s__29218;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29218__$1);if(temp__4126__auto__)
{var s__29218__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29218__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29218__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29220 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29219 = (0);while(true){
if((i__29219 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29219);cljs.core.chunk_append.call(null,b__29220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29221 = (i__29219 + (1));
i__29219 = G__29221;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29220),iter__29217.call(null,cljs.core.chunk_rest.call(null,s__29218__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29220),null);
}
} else
{var o = cljs.core.first.call(null,s__29218__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29217.call(null,cljs.core.rest.call(null,s__29218__$2)));
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
return (function (p1__29222_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__29222_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__29225 = options;var G__29225__$1 = (((G__29225 == null))?null:cljs.core.filter.call(null,((function (G__29225,values__$1){
return (function (p1__29223_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29223_SHARP_));
});})(G__29225,values__$1))
,G__29225));var G__29225__$2 = (((G__29225__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__29225__$1));return G__29225__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__29227,values){var map__29229 = p__29227;var map__29229__$1 = ((cljs.core.seq_QMARK_.call(null,map__29229))?cljs.core.apply.call(null,cljs.core.hash_map,map__29229):map__29229);var component_spec = map__29229__$1;var options = cljs.core.get.call(null,map__29229__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29229__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29229,map__29229__$1,component_spec,options,label){
return (function (p1__29226_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29226_SHARP_));
});})(values__$1,map__29229,map__29229__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29230,values){var map__29232 = p__29230;var map__29232__$1 = ((cljs.core.seq_QMARK_.call(null,map__29232))?cljs.core.apply.call(null,cljs.core.hash_map,map__29232):map__29232);var component_spec = map__29232__$1;var options = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29233 = schema.core.Any;var input_schema29234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29235 = schema.core.checker.call(null,input_schema29234);var output_checker29236 = schema.core.checker.call(null,output_schema29233);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29233,input_schema29234,input_checker29235,output_checker29236){
return (function render_STAR_(G__29237){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29254 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29237], null);var temp__4126__auto___29255 = input_checker29235.call(null,args__6035__auto___29254);if(cljs.core.truth_(temp__4126__auto___29255))
{var error__6036__auto___29256 = temp__4126__auto___29255;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29256)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29256,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29254,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29234,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29237;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
return React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29233,input_schema29234,input_checker29235,output_checker29236){
return (function iter__29246(s__29247){return (new cljs.core.LazySeq(null,((function (options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29233,input_schema29234,input_checker29235,output_checker29236){
return (function (){var s__29247__$1 = s__29247;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29247__$1);if(temp__4126__auto__)
{var s__29247__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29247__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29247__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29249 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29248 = (0);while(true){
if((i__29248 < size__4376__auto__))
{var map__29252 = cljs.core._nth.call(null,c__4375__auto__,i__29248);var map__29252__$1 = ((cljs.core.seq_QMARK_.call(null,map__29252))?cljs.core.apply.call(null,cljs.core.hash_map,map__29252):map__29252);var filter = cljs.core.get.call(null,map__29252__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29252__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29252__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29249,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__29248,map__29252,map__29252__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29249,s__29247__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29233,input_schema29234,input_checker29235,output_checker29236){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29248,map__29252,map__29252__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__29249,s__29247__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29233,input_schema29234,input_checker29235,output_checker29236))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29257 = (i__29248 + (1));
i__29248 = G__29257;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29249),iter__29246.call(null,cljs.core.chunk_rest.call(null,s__29247__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29249),null);
}
} else
{var map__29253 = cljs.core.first.call(null,s__29247__$2);var map__29253__$1 = ((cljs.core.seq_QMARK_.call(null,map__29253))?cljs.core.apply.call(null,cljs.core.hash_map,map__29253):map__29253);var filter = cljs.core.get.call(null,map__29253__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__29253__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29253__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__29253,map__29253__$1,filter,label__$1,value,s__29247__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29233,input_schema29234,input_checker29235,output_checker29236){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29253,map__29253__$1,filter,label__$1,value,s__29247__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29233,input_schema29234,input_checker29235,output_checker29236))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29246.call(null,cljs.core.rest.call(null,s__29247__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29233,input_schema29234,input_checker29235,output_checker29236))
,null,null));
});})(options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29233,input_schema29234,input_checker29235,output_checker29236))
;return iter__4377__auto__.call(null,options__$1);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29258 = output_checker29236.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29258))
{var error__6036__auto___29259 = temp__4126__auto___29258;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29259)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29259,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29233,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29233,input_schema29234,input_checker29235,output_checker29236))
,schema.core.make_fn_schema.call(null,output_schema29233,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29234], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29405 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29265 = schema.core.Any;var input_schema29266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29263","map29263",1684341229,null))], null);var input_checker29267 = schema.core.checker.call(null,input_schema29266);var output_checker29268 = schema.core.checker.call(null,output_schema29265);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268){
return (function constructor29261(G__29269){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29269], null);var temp__4126__auto___29407 = input_checker29267.call(null,args__6035__auto___29406);if(cljs.core.truth_(temp__4126__auto___29407))
{var error__6036__auto___29408 = temp__4126__auto___29407;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29261","constructor29261",593756774,null),cljs.core.pr_str.call(null,error__6036__auto___29408)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29408,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29406,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29266,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29263 = G__29269;while(true){
if(cljs.core.map_QMARK_.call(null,map29263))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29263)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29263,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29264 = plumbing.fnk.schema.safe_get.call(null,map29263,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29264,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29263,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t29336 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t29336 = (function (component_spec,component_filter_rq_chan,input_schema29266,owner,data,map29264,constructor29261,G__29269,output_schema29265,map29263,filter_spec,output_checker29268,validate__6034__auto__,id,input_checker29267,ufv__,meta29337){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema29266 = input_schema29266;
this.owner = owner;
this.data = data;
this.map29264 = map29264;
this.constructor29261 = constructor29261;
this.G__29269 = G__29269;
this.output_schema29265 = output_schema29265;
this.map29263 = map29263;
this.filter_spec = filter_spec;
this.output_checker29268 = output_checker29268;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.input_checker29267 = input_checker29267;
this.ufv__ = ufv__;
this.meta29337 = meta29337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t29336.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t29336.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t29336";
clustermap.components.filters.checkboxes_filter.t29336.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t29336");
});})(owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268))
;
clustermap.components.filters.checkboxes_filter.t29336.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t29336.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268))
;
clustermap.components.filters.checkboxes_filter.t29336.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t29336.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268))
;
clustermap.components.filters.checkboxes_filter.t29336.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t29336.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268){
return (function (_){var self__ = this;
var ___$1 = this;var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268){
return (function (state_29376){var state_val_29377 = (state_29376[(1)]);if((state_val_29377 === (7)))
{var inst_29367 = (state_29376[(2)]);var state_29376__$1 = state_29376;if(cljs.core.truth_(inst_29367))
{var statearr_29378_29409 = state_29376__$1;(statearr_29378_29409[(1)] = (11));
} else
{var statearr_29379_29410 = state_29376__$1;(statearr_29379_29410[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29377 === (1)))
{var state_29376__$1 = state_29376;var statearr_29380_29411 = state_29376__$1;(statearr_29380_29411[(2)] = null);
(statearr_29380_29411[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29377 === (4)))
{var inst_29341 = (state_29376[(7)]);var inst_29341__$1 = (state_29376[(2)]);var state_29376__$1 = (function (){var statearr_29381 = state_29376;(statearr_29381[(7)] = inst_29341__$1);
return statearr_29381;
})();if(cljs.core.truth_(inst_29341__$1))
{var statearr_29382_29412 = state_29376__$1;(statearr_29382_29412[(1)] = (5));
} else
{var statearr_29383_29413 = state_29376__$1;(statearr_29383_29413[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29377 === (13)))
{var inst_29372 = (state_29376[(2)]);var state_29376__$1 = state_29376;var statearr_29384_29414 = state_29376__$1;(statearr_29384_29414[(2)] = inst_29372);
(statearr_29384_29414[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29377 === (6)))
{var state_29376__$1 = state_29376;var statearr_29385_29415 = state_29376__$1;(statearr_29385_29415[(2)] = null);
(statearr_29385_29415[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29377 === (3)))
{var inst_29374 = (state_29376[(2)]);var state_29376__$1 = state_29376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29376__$1,inst_29374);
} else
{if((state_val_29377 === (12)))
{var state_29376__$1 = state_29376;var statearr_29386_29416 = state_29376__$1;(statearr_29386_29416[(2)] = null);
(statearr_29386_29416[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29377 === (2)))
{var state_29376__$1 = state_29376;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29376__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29377 === (11)))
{var state_29376__$1 = state_29376;var statearr_29387_29417 = state_29376__$1;(statearr_29387_29417[(2)] = null);
(statearr_29387_29417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29377 === (9)))
{var inst_29347 = (state_29376[(8)]);var state_29376__$1 = state_29376;var statearr_29388_29418 = state_29376__$1;(statearr_29388_29418[(2)] = inst_29347);
(statearr_29388_29418[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29377 === (5)))
{var inst_29341 = (state_29376[(7)]);var inst_29347 = (state_29376[(8)]);var inst_29344 = cljs.core.nth.call(null,inst_29341,(0),null);var inst_29345 = cljs.core.nth.call(null,inst_29341,(1),null);var inst_29347__$1 = om.core.get_props.call(null,self__.owner);var inst_29348 = cljs.core.seq_QMARK_.call(null,inst_29347__$1);var state_29376__$1 = (function (){var statearr_29389 = state_29376;(statearr_29389[(9)] = inst_29344);
(statearr_29389[(8)] = inst_29347__$1);
(statearr_29389[(10)] = inst_29345);
return statearr_29389;
})();if(inst_29348)
{var statearr_29390_29419 = state_29376__$1;(statearr_29390_29419[(1)] = (8));
} else
{var statearr_29391_29420 = state_29376__$1;(statearr_29391_29420[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29377 === (10)))
{var inst_29345 = (state_29376[(10)]);var inst_29353 = (state_29376[(2)]);var inst_29354 = cljs.core.get.call(null,inst_29353,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29355 = cljs.core.get.call(null,inst_29353,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29356 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29357 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_29345];var inst_29358 = (new cljs.core.PersistentVector(null,3,(5),inst_29356,inst_29357,null));var inst_29359 = cljs.core.clj__GT_js.call(null,inst_29358);var inst_29360 = console.log(inst_29359);var inst_29361 = cljs.core.deref.call(null,inst_29355);var inst_29362 = cljs.core.deref.call(null,inst_29354);var inst_29363 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_29361,inst_29362,inst_29345);var inst_29364 = om.core.update_BANG_.call(null,inst_29355,inst_29363);var state_29376__$1 = (function (){var statearr_29392 = state_29376;(statearr_29392[(11)] = inst_29360);
(statearr_29392[(12)] = inst_29364);
return statearr_29392;
})();var statearr_29393_29421 = state_29376__$1;(statearr_29393_29421[(2)] = true);
(statearr_29393_29421[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29377 === (8)))
{var inst_29347 = (state_29376[(8)]);var inst_29350 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29347);var state_29376__$1 = state_29376;var statearr_29394_29422 = state_29376__$1;(statearr_29394_29422[(2)] = inst_29350);
(statearr_29394_29422[(1)] = (10));
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
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268))
;return ((function (switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_29398 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29398[(0)] = state_machine__11242__auto__);
(statearr_29398[(1)] = (1));
return statearr_29398;
});
var state_machine__11242__auto____1 = (function (state_29376){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_29376);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e29399){if((e29399 instanceof Object))
{var ex__11245__auto__ = e29399;var statearr_29400_29423 = state_29376;(statearr_29400_29423[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29376);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29399;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29424 = state_29376;
state_29376 = G__29424;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_29376){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_29376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268))
})();var state__11299__auto__ = (function (){var statearr_29401 = f__11298__auto__.call(null);(statearr_29401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_29401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268))
);
return c__11297__auto__;
});})(owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268))
;
clustermap.components.filters.checkboxes_filter.t29336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268){
return (function (_29338){var self__ = this;
var _29338__$1 = this;return self__.meta29337;
});})(owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268))
;
clustermap.components.filters.checkboxes_filter.t29336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268){
return (function (_29338,meta29337__$1){var self__ = this;
var _29338__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t29336(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema29266,self__.owner,self__.data,self__.map29264,self__.constructor29261,self__.G__29269,self__.output_schema29265,self__.map29263,self__.filter_spec,self__.output_checker29268,self__.validate__6034__auto__,self__.id,self__.input_checker29267,self__.ufv__,meta29337__$1));
});})(owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268))
;
clustermap.components.filters.checkboxes_filter.__GT_t29336 = ((function (owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268){
return (function __GT_t29336(component_spec__$1,component_filter_rq_chan__$1,input_schema29266__$1,owner__$1,data__$1,map29264__$1,constructor29261__$1,G__29269__$1,output_schema29265__$1,map29263__$1,filter_spec__$1,output_checker29268__$1,validate__6034__auto____$1,id__$1,input_checker29267__$1,ufv____$1,meta29337){return (new clustermap.components.filters.checkboxes_filter.t29336(component_spec__$1,component_filter_rq_chan__$1,input_schema29266__$1,owner__$1,data__$1,map29264__$1,constructor29261__$1,G__29269__$1,output_schema29265__$1,map29263__$1,filter_spec__$1,output_checker29268__$1,validate__6034__auto____$1,id__$1,input_checker29267__$1,ufv____$1,meta29337));
});})(owner,component_filter_rq_chan,map29264,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268))
;
}
return (new clustermap.components.filters.checkboxes_filter.t29336(component_spec,component_filter_rq_chan,input_schema29266,owner,data,map29264,constructor29261,G__29269,output_schema29265,map29263,filter_spec,output_checker29268,validate__6034__auto__,id,input_checker29267,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29425 = output_checker29268.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29425))
{var error__6036__auto___29426 = temp__4126__auto___29425;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29261","constructor29261",593756774,null),cljs.core.pr_str.call(null,error__6036__auto___29426)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29426,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29265,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29265,input_schema29266,input_checker29267,output_checker29268))
,schema.core.make_fn_schema.call(null,output_schema29265,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29266], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___29405){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner29260,p__29402){var vec__29404 = p__29402;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29404,(0),null);return component_fnk__7881__auto___29405.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29260,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner29260,var_args){
var p__29402 = null;if (arguments.length > 2) {
  p__29402 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29260,p__29402);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29427){
var data__7882__auto__ = cljs.core.first(arglist__29427);
arglist__29427 = cljs.core.next(arglist__29427);
var owner29260 = cljs.core.first(arglist__29427);
var p__29402 = cljs.core.rest(arglist__29427);
return checkboxes_filter_component__delegate(data__7882__auto__,owner29260,p__29402);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29405))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29262){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m29262);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m29262){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
