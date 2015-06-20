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
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30537(s__30538){return (new cljs.core.LazySeq(null,(function (){var s__30538__$1 = s__30538;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30538__$1);if(temp__4126__auto__)
{var s__30538__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30538__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30538__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30540 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30539 = (0);while(true){
if((i__30539 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30539);cljs.core.chunk_append.call(null,b__30540,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30541 = (i__30539 + (1));
i__30539 = G__30541;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30540),iter__30537.call(null,cljs.core.chunk_rest.call(null,s__30538__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30540),null);
}
} else
{var o = cljs.core.first.call(null,s__30538__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30537.call(null,cljs.core.rest.call(null,s__30538__$2)));
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
return (function (p1__30542_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__30542_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__30545 = options;var G__30545__$1 = (((G__30545 == null))?null:cljs.core.filter.call(null,((function (G__30545,values__$1){
return (function (p1__30543_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30543_SHARP_));
});})(G__30545,values__$1))
,G__30545));var G__30545__$2 = (((G__30545__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__30545__$1));return G__30545__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__30547,values){var map__30549 = p__30547;var map__30549__$1 = ((cljs.core.seq_QMARK_.call(null,map__30549))?cljs.core.apply.call(null,cljs.core.hash_map,map__30549):map__30549);var component_spec = map__30549__$1;var options = cljs.core.get.call(null,map__30549__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30549__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30549,map__30549__$1,component_spec,options,label){
return (function (p1__30546_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30546_SHARP_));
});})(values__$1,map__30549,map__30549__$1,component_spec,options,label))
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
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30550,values){var map__30552 = p__30550;var map__30552__$1 = ((cljs.core.seq_QMARK_.call(null,map__30552))?cljs.core.apply.call(null,cljs.core.hash_map,map__30552):map__30552);var component_spec = map__30552__$1;var options = cljs.core.get.call(null,map__30552__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30552__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.set_all = (function set_all(filter_spec,p__30553){var map__30555 = p__30553;var map__30555__$1 = ((cljs.core.seq_QMARK_.call(null,map__30555))?cljs.core.apply.call(null,cljs.core.hash_map,map__30555):map__30555);var component_spec = map__30555__$1;var options = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30555__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),options));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30556){var map__30558 = p__30556;var map__30558__$1 = ((cljs.core.seq_QMARK_.call(null,map__30558))?cljs.core.apply.call(null,cljs.core.hash_map,map__30558):map__30558);var component_spec = map__30558__$1;var options = cljs.core.get.call(null,map__30558__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30558__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30559 = schema.core.Any;var input_schema30560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30561 = schema.core.checker.call(null,input_schema30560);var output_checker30562 = schema.core.checker.call(null,output_schema30559);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562){
return (function render_STAR_(G__30563){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30563], null);var temp__4126__auto___30599 = input_checker30561.call(null,args__6035__auto___30598);if(cljs.core.truth_(temp__4126__auto___30599))
{var error__6036__auto___30600 = temp__4126__auto___30599;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30600)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30600,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30598,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30560,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30563;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
var attrs30581 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30581))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30581)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30581))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562){
return (function iter__30582(s__30583){return (new cljs.core.LazySeq(null,((function (attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562){
return (function (){var s__30583__$1 = s__30583;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30583__$1);if(temp__4126__auto__)
{var s__30583__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30583__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30583__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30585 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30584 = (0);while(true){
if((i__30584 < size__4376__auto__))
{var map__30588 = cljs.core._nth.call(null,c__4375__auto__,i__30584);var map__30588__$1 = ((cljs.core.seq_QMARK_.call(null,map__30588))?cljs.core.apply.call(null,cljs.core.hash_map,map__30588):map__30588);var filter = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30588__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30585,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30584,map__30588,map__30588__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30585,s__30583__$2,temp__4126__auto__,attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30584,map__30588,map__30588__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30585,s__30583__$2,temp__4126__auto__,attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30601 = (i__30584 + (1));
i__30584 = G__30601;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30585),iter__30582.call(null,cljs.core.chunk_rest.call(null,s__30583__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30585),null);
}
} else
{var map__30589 = cljs.core.first.call(null,s__30583__$2);var map__30589__$1 = ((cljs.core.seq_QMARK_.call(null,map__30589))?cljs.core.apply.call(null,cljs.core.hash_map,map__30589):map__30589);var filter = cljs.core.get.call(null,map__30589__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30589__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30589__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30589,map__30589__$1,filter,label__$1,value,s__30583__$2,temp__4126__auto__,attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30589,map__30589__$1,filter,label__$1,value,s__30583__$2,temp__4126__auto__,attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30582.call(null,cljs.core.rest.call(null,s__30583__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562))
,null,null));
});})(attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562))
;return iter__4377__auto__.call(null,options__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30581),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562){
return (function iter__30590(s__30591){return (new cljs.core.LazySeq(null,((function (attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562){
return (function (){var s__30591__$1 = s__30591;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30591__$1);if(temp__4126__auto__)
{var s__30591__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30591__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30591__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30593 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30592 = (0);while(true){
if((i__30592 < size__4376__auto__))
{var map__30596 = cljs.core._nth.call(null,c__4375__auto__,i__30592);var map__30596__$1 = ((cljs.core.seq_QMARK_.call(null,map__30596))?cljs.core.apply.call(null,cljs.core.hash_map,map__30596):map__30596);var filter = cljs.core.get.call(null,map__30596__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30596__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30596__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30593,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__30592,map__30596,map__30596__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30593,s__30591__$2,temp__4126__auto__,attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30592,map__30596,map__30596__$1,filter,label__$1,value,c__4375__auto__,size__4376__auto__,b__30593,s__30591__$2,temp__4126__auto__,attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30602 = (i__30592 + (1));
i__30592 = G__30602;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30593),iter__30590.call(null,cljs.core.chunk_rest.call(null,s__30591__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30593),null);
}
} else
{var map__30597 = cljs.core.first.call(null,s__30591__$2);var map__30597__$1 = ((cljs.core.seq_QMARK_.call(null,map__30597))?cljs.core.apply.call(null,cljs.core.hash_map,map__30597):map__30597);var filter = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__30597,map__30597__$1,filter,label__$1,value,s__30591__$2,temp__4126__auto__,attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30597,map__30597__$1,filter,label__$1,value,s__30591__$2,temp__4126__auto__,attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30590.call(null,cljs.core.rest.call(null,s__30591__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562))
,null,null));
});})(attrs30581,options__$1,options_by_value,current_option_values,options,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562))
;return iter__4377__auto__.call(null,options__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30603 = output_checker30562.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30603))
{var error__6036__auto___30604 = temp__4126__auto___30603;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30604)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30604,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30559,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30559,input_schema30560,input_checker30561,output_checker30562))
,schema.core.make_fn_schema.call(null,output_schema30559,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30560], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30750 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30610 = schema.core.Any;var input_schema30611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30608","map30608",615262138,null))], null);var input_checker30612 = schema.core.checker.call(null,input_schema30611);var output_checker30613 = schema.core.checker.call(null,output_schema30610);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613){
return (function constructor30606(G__30614){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30614], null);var temp__4126__auto___30752 = input_checker30612.call(null,args__6035__auto___30751);if(cljs.core.truth_(temp__4126__auto___30752))
{var error__6036__auto___30753 = temp__4126__auto___30752;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30606","constructor30606",1213665149,null),cljs.core.pr_str.call(null,error__6036__auto___30753)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30753,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30751,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30611,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30608 = G__30614;while(true){
if(cljs.core.map_QMARK_.call(null,map30608))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30608)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30608,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30609 = plumbing.fnk.schema.safe_get.call(null,map30608,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30609,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30608,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t30681 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t30681 = (function (component_spec,component_filter_rq_chan,map30609,owner,data,output_schema30610,filter_spec,G__30614,input_checker30612,input_schema30611,output_checker30613,validate__6034__auto__,map30608,id,ufv__,constructor30606,meta30682){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map30609 = map30609;
this.owner = owner;
this.data = data;
this.output_schema30610 = output_schema30610;
this.filter_spec = filter_spec;
this.G__30614 = G__30614;
this.input_checker30612 = input_checker30612;
this.input_schema30611 = input_schema30611;
this.output_checker30613 = output_checker30613;
this.validate__6034__auto__ = validate__6034__auto__;
this.map30608 = map30608;
this.id = id;
this.ufv__ = ufv__;
this.constructor30606 = constructor30606;
this.meta30682 = meta30682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t30681.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t30681.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t30681";
clustermap.components.filters.checkboxes_filter.t30681.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.checkboxes-filter/t30681");
});})(owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613))
;
clustermap.components.filters.checkboxes_filter.t30681.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t30681.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613))
;
clustermap.components.filters.checkboxes_filter.t30681.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t30681.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613))
;
clustermap.components.filters.checkboxes_filter.t30681.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t30681.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613){
return (function (state_30721){var state_val_30722 = (state_30721[(1)]);if((state_val_30722 === (7)))
{var inst_30712 = (state_30721[(2)]);var state_30721__$1 = state_30721;if(cljs.core.truth_(inst_30712))
{var statearr_30723_30754 = state_30721__$1;(statearr_30723_30754[(1)] = (11));
} else
{var statearr_30724_30755 = state_30721__$1;(statearr_30724_30755[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30722 === (1)))
{var state_30721__$1 = state_30721;var statearr_30725_30756 = state_30721__$1;(statearr_30725_30756[(2)] = null);
(statearr_30725_30756[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30722 === (4)))
{var inst_30686 = (state_30721[(7)]);var inst_30686__$1 = (state_30721[(2)]);var state_30721__$1 = (function (){var statearr_30726 = state_30721;(statearr_30726[(7)] = inst_30686__$1);
return statearr_30726;
})();if(cljs.core.truth_(inst_30686__$1))
{var statearr_30727_30757 = state_30721__$1;(statearr_30727_30757[(1)] = (5));
} else
{var statearr_30728_30758 = state_30721__$1;(statearr_30728_30758[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30722 === (13)))
{var inst_30717 = (state_30721[(2)]);var state_30721__$1 = state_30721;var statearr_30729_30759 = state_30721__$1;(statearr_30729_30759[(2)] = inst_30717);
(statearr_30729_30759[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30722 === (6)))
{var state_30721__$1 = state_30721;var statearr_30730_30760 = state_30721__$1;(statearr_30730_30760[(2)] = null);
(statearr_30730_30760[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30722 === (3)))
{var inst_30719 = (state_30721[(2)]);var state_30721__$1 = state_30721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30721__$1,inst_30719);
} else
{if((state_val_30722 === (12)))
{var state_30721__$1 = state_30721;var statearr_30731_30761 = state_30721__$1;(statearr_30731_30761[(2)] = null);
(statearr_30731_30761[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30722 === (2)))
{var state_30721__$1 = state_30721;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30721__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30722 === (11)))
{var state_30721__$1 = state_30721;var statearr_30732_30762 = state_30721__$1;(statearr_30732_30762[(2)] = null);
(statearr_30732_30762[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30722 === (9)))
{var inst_30692 = (state_30721[(8)]);var state_30721__$1 = state_30721;var statearr_30733_30763 = state_30721__$1;(statearr_30733_30763[(2)] = inst_30692);
(statearr_30733_30763[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30722 === (5)))
{var inst_30692 = (state_30721[(8)]);var inst_30686 = (state_30721[(7)]);var inst_30689 = cljs.core.nth.call(null,inst_30686,(0),null);var inst_30690 = cljs.core.nth.call(null,inst_30686,(1),null);var inst_30692__$1 = om.core.get_props.call(null,self__.owner);var inst_30693 = cljs.core.seq_QMARK_.call(null,inst_30692__$1);var state_30721__$1 = (function (){var statearr_30734 = state_30721;(statearr_30734[(8)] = inst_30692__$1);
(statearr_30734[(9)] = inst_30689);
(statearr_30734[(10)] = inst_30690);
return statearr_30734;
})();if(inst_30693)
{var statearr_30735_30764 = state_30721__$1;(statearr_30735_30764[(1)] = (8));
} else
{var statearr_30736_30765 = state_30721__$1;(statearr_30736_30765[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30722 === (10)))
{var inst_30690 = (state_30721[(10)]);var inst_30698 = (state_30721[(2)]);var inst_30699 = cljs.core.get.call(null,inst_30698,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30700 = cljs.core.get.call(null,inst_30698,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30701 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30702 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_30690];var inst_30703 = (new cljs.core.PersistentVector(null,3,(5),inst_30701,inst_30702,null));var inst_30704 = cljs.core.clj__GT_js.call(null,inst_30703);var inst_30705 = console.log(inst_30704);var inst_30706 = cljs.core.deref.call(null,inst_30700);var inst_30707 = cljs.core.deref.call(null,inst_30699);var inst_30708 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_30706,inst_30707,inst_30690);var inst_30709 = om.core.update_BANG_.call(null,inst_30700,inst_30708);var state_30721__$1 = (function (){var statearr_30737 = state_30721;(statearr_30737[(11)] = inst_30709);
(statearr_30737[(12)] = inst_30705);
return statearr_30737;
})();var statearr_30738_30766 = state_30721__$1;(statearr_30738_30766[(2)] = true);
(statearr_30738_30766[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30722 === (8)))
{var inst_30692 = (state_30721[(8)]);var inst_30695 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30692);var state_30721__$1 = state_30721;var statearr_30739_30767 = state_30721__$1;(statearr_30739_30767[(2)] = inst_30695);
(statearr_30739_30767[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30743 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30743[(0)] = state_machine__9111__auto__);
(statearr_30743[(1)] = (1));
return statearr_30743;
});
var state_machine__9111__auto____1 = (function (state_30721){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30721);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30744){if((e30744 instanceof Object))
{var ex__9114__auto__ = e30744;var statearr_30745_30768 = state_30721;(statearr_30745_30768[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30721);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30744;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30769 = state_30721;
state_30721 = G__30769;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30721){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613))
})();var state__9127__auto__ = (function (){var statearr_30746 = f__9126__auto__.call(null);(statearr_30746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30746;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613))
;
clustermap.components.filters.checkboxes_filter.t30681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613){
return (function (_30683){var self__ = this;
var _30683__$1 = this;return self__.meta30682;
});})(owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613))
;
clustermap.components.filters.checkboxes_filter.t30681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613){
return (function (_30683,meta30682__$1){var self__ = this;
var _30683__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t30681(self__.component_spec,self__.component_filter_rq_chan,self__.map30609,self__.owner,self__.data,self__.output_schema30610,self__.filter_spec,self__.G__30614,self__.input_checker30612,self__.input_schema30611,self__.output_checker30613,self__.validate__6034__auto__,self__.map30608,self__.id,self__.ufv__,self__.constructor30606,meta30682__$1));
});})(owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613))
;
clustermap.components.filters.checkboxes_filter.__GT_t30681 = ((function (owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613){
return (function __GT_t30681(component_spec__$1,component_filter_rq_chan__$1,map30609__$1,owner__$1,data__$1,output_schema30610__$1,filter_spec__$1,G__30614__$1,input_checker30612__$1,input_schema30611__$1,output_checker30613__$1,validate__6034__auto____$1,map30608__$1,id__$1,ufv____$1,constructor30606__$1,meta30682){return (new clustermap.components.filters.checkboxes_filter.t30681(component_spec__$1,component_filter_rq_chan__$1,map30609__$1,owner__$1,data__$1,output_schema30610__$1,filter_spec__$1,G__30614__$1,input_checker30612__$1,input_schema30611__$1,output_checker30613__$1,validate__6034__auto____$1,map30608__$1,id__$1,ufv____$1,constructor30606__$1,meta30682));
});})(owner,component_filter_rq_chan,map30609,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613))
;
}
return (new clustermap.components.filters.checkboxes_filter.t30681(component_spec,component_filter_rq_chan,map30609,owner,data,output_schema30610,filter_spec,G__30614,input_checker30612,input_schema30611,output_checker30613,validate__6034__auto__,map30608,id,ufv__,constructor30606,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30770 = output_checker30613.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30770))
{var error__6036__auto___30771 = temp__4126__auto___30770;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30606","constructor30606",1213665149,null),cljs.core.pr_str.call(null,error__6036__auto___30771)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30771,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30610,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30610,input_schema30611,input_checker30612,output_checker30613))
,schema.core.make_fn_schema.call(null,output_schema30610,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30611], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__7881__auto___30750){
return (function() { 
var checkboxes_filter_component__delegate = function (data__7882__auto__,owner30605,p__30747){var vec__30749 = p__30747;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30749,(0),null);return component_fnk__7881__auto___30750.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30605,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var checkboxes_filter_component = function (data__7882__auto__,owner30605,var_args){
var p__30747 = null;if (arguments.length > 2) {
  p__30747 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30605,p__30747);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30772){
var data__7882__auto__ = cljs.core.first(arglist__30772);
arglist__30772 = cljs.core.next(arglist__30772);
var owner30605 = cljs.core.first(arglist__30772);
var p__30747 = cljs.core.rest(arglist__30772);
return checkboxes_filter_component__delegate(data__7882__auto__,owner30605,p__30747);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30750))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30607){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__7850__auto__,m30607);
});
__GT_checkboxes_filter_component = function(cursor__7850__auto__,m30607){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;
