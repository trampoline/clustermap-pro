// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.tag_checkboxes_filter');
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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30337(s__30338){return (new cljs.core.LazySeq(null,(function (){var s__30338__$1 = s__30338;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30338__$1);if(temp__4126__auto__)
{var s__30338__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30338__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30338__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30340 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30339 = (0);while(true){
if((i__30339 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30339);cljs.core.chunk_append.call(null,b__30340,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30341 = (i__30339 + (1));
i__30339 = G__30341;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30340),iter__30337.call(null,cljs.core.chunk_rest.call(null,s__30338__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30340),null);
}
} else
{var t = cljs.core.first.call(null,s__30338__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30337.call(null,cljs.core.rest.call(null,s__30338__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,tags);
})());
});
/**
* given a single option filter, extract the option id this represents
*/
clustermap.components.filters.tag_checkboxes_filter.extract_tag_value_from_filter = (function extract_tag_value_from_filter(f){return cljs.core.get_in.call(null,f,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"must","must",-243952061),(1),new cljs.core.Keyword(null,"term","term",-1817390416),"tag"], null));
});
/**
* given a combined option filter, extract the option ids this represents
*/
clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters = (function extract_tag_values_from_filters(components,id){var fs = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"should","should",2086636648)], null));return cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,clustermap.components.filters.tag_checkboxes_filter.extract_tag_value_from_filter,fs)));
});
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30342_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30342_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30343,value){var map__30345 = p__30343;var map__30345__$1 = ((cljs.core.seq_QMARK_.call(null,map__30345))?cljs.core.apply.call(null,cljs.core.hash_map,map__30345):map__30345);var component_spec = map__30345__$1;var tags = cljs.core.get.call(null,map__30345__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30345__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_checkboxes_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30346_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30346_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30348,values){var map__30350 = p__30348;var map__30350__$1 = ((cljs.core.seq_QMARK_.call(null,map__30350))?cljs.core.apply.call(null,cljs.core.hash_map,map__30350):map__30350);var component_spec = map__30350__$1;var sorted = cljs.core.get.call(null,map__30350__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30350__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30350__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30350,map__30350__$1,component_spec,sorted,tags,label){
return (function (p1__30347_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30347_SHARP_));
});})(values__$1,map__30350,map__30350__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30351,values){var map__30353 = p__30351;var map__30353__$1 = ((cljs.core.seq_QMARK_.call(null,map__30353))?cljs.core.apply.call(null,cljs.core.hash_map,map__30353):map__30353);var component_spec = map__30353__$1;var tags = cljs.core.get.call(null,map__30353__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30353__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30354){var map__30356 = p__30354;var map__30356__$1 = ((cljs.core.seq_QMARK_.call(null,map__30356))?cljs.core.apply.call(null,cljs.core.hash_map,map__30356):map__30356);var component_spec = map__30356__$1;var tags = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30357){var map__30359 = p__30357;var map__30359__$1 = ((cljs.core.seq_QMARK_.call(null,map__30359))?cljs.core.apply.call(null,cljs.core.hash_map,map__30359):map__30359);var component_spec = map__30359__$1;var tags = cljs.core.get.call(null,map__30359__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30359__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30361 = schema.core.Any;var input_schema30362 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30360","map30360",1541762787,null))], null);var input_checker30363 = schema.core.checker.call(null,input_schema30362);var output_checker30364 = schema.core.checker.call(null,output_schema30361);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364){
return (function render_STAR_(G__30365){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30365], null);var temp__4126__auto___30401 = input_checker30363.call(null,args__6035__auto___30400);if(cljs.core.truth_(temp__4126__auto___30401))
{var error__6036__auto___30402 = temp__4126__auto___30401;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30402)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30402,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30400,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30362,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30360 = G__30365;while(true){
if(cljs.core.map_QMARK_.call(null,map30360))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30360)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30360,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30360,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30383 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30383))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30383)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30383))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364){
return (function iter__30384(s__30385){return (new cljs.core.LazySeq(null,((function (attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364){
return (function (){var s__30385__$1 = s__30385;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30385__$1);if(temp__4126__auto__)
{var s__30385__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30385__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30385__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30387 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30386 = (0);while(true){
if((i__30386 < size__4376__auto__))
{var map__30390 = cljs.core._nth.call(null,c__4375__auto__,i__30386);var map__30390__$1 = ((cljs.core.seq_QMARK_.call(null,map__30390))?cljs.core.apply.call(null,cljs.core.hash_map,map__30390):map__30390);var label__$1 = cljs.core.get.call(null,map__30390__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30390__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30387,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30386,map__30390,map__30390__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30387,s__30385__$2,temp__4126__auto__,attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30386,map__30390,map__30390__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30387,s__30385__$2,temp__4126__auto__,attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30403 = (i__30386 + (1));
i__30386 = G__30403;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30387),iter__30384.call(null,cljs.core.chunk_rest.call(null,s__30385__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30387),null);
}
} else
{var map__30391 = cljs.core.first.call(null,s__30385__$2);var map__30391__$1 = ((cljs.core.seq_QMARK_.call(null,map__30391))?cljs.core.apply.call(null,cljs.core.hash_map,map__30391):map__30391);var label__$1 = cljs.core.get.call(null,map__30391__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30391__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30391,map__30391__$1,label__$1,value,s__30385__$2,temp__4126__auto__,attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30391,map__30391__$1,label__$1,value,s__30385__$2,temp__4126__auto__,attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30384.call(null,cljs.core.rest.call(null,s__30385__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364))
,null,null));
});})(attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30383),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364){
return (function iter__30392(s__30393){return (new cljs.core.LazySeq(null,((function (attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364){
return (function (){var s__30393__$1 = s__30393;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30393__$1);if(temp__4126__auto__)
{var s__30393__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30393__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30393__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30395 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30394 = (0);while(true){
if((i__30394 < size__4376__auto__))
{var map__30398 = cljs.core._nth.call(null,c__4375__auto__,i__30394);var map__30398__$1 = ((cljs.core.seq_QMARK_.call(null,map__30398))?cljs.core.apply.call(null,cljs.core.hash_map,map__30398):map__30398);var label__$1 = cljs.core.get.call(null,map__30398__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30398__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30395,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30394,map__30398,map__30398__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30395,s__30393__$2,temp__4126__auto__,attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30394,map__30398,map__30398__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30395,s__30393__$2,temp__4126__auto__,attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30404 = (i__30394 + (1));
i__30394 = G__30404;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30395),iter__30392.call(null,cljs.core.chunk_rest.call(null,s__30393__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30395),null);
}
} else
{var map__30399 = cljs.core.first.call(null,s__30393__$2);var map__30399__$1 = ((cljs.core.seq_QMARK_.call(null,map__30399))?cljs.core.apply.call(null,cljs.core.hash_map,map__30399):map__30399);var label__$1 = cljs.core.get.call(null,map__30399__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30399__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30399,map__30399__$1,label__$1,value,s__30393__$2,temp__4126__auto__,attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30399,map__30399__$1,label__$1,value,s__30393__$2,temp__4126__auto__,attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30392.call(null,cljs.core.rest.call(null,s__30393__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364))
,null,null));
});})(attrs30383,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30405 = output_checker30364.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30405))
{var error__6036__auto___30406 = temp__4126__auto___30405;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30406)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30406,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30361,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30361,input_schema30362,input_checker30363,output_checker30364))
,schema.core.make_fn_schema.call(null,output_schema30361,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30362], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30552 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30412 = schema.core.Any;var input_schema30413 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30410","map30410",-1846669686,null))], null);var input_checker30414 = schema.core.checker.call(null,input_schema30413);var output_checker30415 = schema.core.checker.call(null,output_schema30412);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415){
return (function constructor30408(G__30416){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30416], null);var temp__4126__auto___30554 = input_checker30414.call(null,args__6035__auto___30553);if(cljs.core.truth_(temp__4126__auto___30554))
{var error__6036__auto___30555 = temp__4126__auto___30554;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30408","constructor30408",1413495320,null),cljs.core.pr_str.call(null,error__6036__auto___30555)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30555,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30553,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30413,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30410 = G__30416;while(true){
if(cljs.core.map_QMARK_.call(null,map30410))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30410)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30410,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30411 = plumbing.fnk.schema.safe_get.call(null,map30410,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30411,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30410,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30483 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30483 = (function (component_spec,component_filter_rq_chan,input_schema30413,owner,data,G__30416,map30410,output_schema30412,input_checker30414,map30411,filter_spec,output_checker30415,constructor30408,validate__6034__auto__,id,ufv__,meta30484){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema30413 = input_schema30413;
this.owner = owner;
this.data = data;
this.G__30416 = G__30416;
this.map30410 = map30410;
this.output_schema30412 = output_schema30412;
this.input_checker30414 = input_checker30414;
this.map30411 = map30411;
this.filter_spec = filter_spec;
this.output_checker30415 = output_checker30415;
this.constructor30408 = constructor30408;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta30484 = meta30484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30483.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30483.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30483";
clustermap.components.filters.tag_checkboxes_filter.t30483.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30483");
});})(owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415))
;
clustermap.components.filters.tag_checkboxes_filter.t30483.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30483.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415))
;
clustermap.components.filters.tag_checkboxes_filter.t30483.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30483.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415))
;
clustermap.components.filters.tag_checkboxes_filter.t30483.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30483.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415){
return (function (state_30523){var state_val_30524 = (state_30523[(1)]);if((state_val_30524 === (7)))
{var inst_30514 = (state_30523[(2)]);var state_30523__$1 = state_30523;if(cljs.core.truth_(inst_30514))
{var statearr_30525_30556 = state_30523__$1;(statearr_30525_30556[(1)] = (11));
} else
{var statearr_30526_30557 = state_30523__$1;(statearr_30526_30557[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30524 === (1)))
{var state_30523__$1 = state_30523;var statearr_30527_30558 = state_30523__$1;(statearr_30527_30558[(2)] = null);
(statearr_30527_30558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30524 === (4)))
{var inst_30488 = (state_30523[(7)]);var inst_30488__$1 = (state_30523[(2)]);var state_30523__$1 = (function (){var statearr_30528 = state_30523;(statearr_30528[(7)] = inst_30488__$1);
return statearr_30528;
})();if(cljs.core.truth_(inst_30488__$1))
{var statearr_30529_30559 = state_30523__$1;(statearr_30529_30559[(1)] = (5));
} else
{var statearr_30530_30560 = state_30523__$1;(statearr_30530_30560[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30524 === (13)))
{var inst_30519 = (state_30523[(2)]);var state_30523__$1 = state_30523;var statearr_30531_30561 = state_30523__$1;(statearr_30531_30561[(2)] = inst_30519);
(statearr_30531_30561[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30524 === (6)))
{var state_30523__$1 = state_30523;var statearr_30532_30562 = state_30523__$1;(statearr_30532_30562[(2)] = null);
(statearr_30532_30562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30524 === (3)))
{var inst_30521 = (state_30523[(2)]);var state_30523__$1 = state_30523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30523__$1,inst_30521);
} else
{if((state_val_30524 === (12)))
{var state_30523__$1 = state_30523;var statearr_30533_30563 = state_30523__$1;(statearr_30533_30563[(2)] = null);
(statearr_30533_30563[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30524 === (2)))
{var state_30523__$1 = state_30523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30523__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30524 === (11)))
{var state_30523__$1 = state_30523;var statearr_30534_30564 = state_30523__$1;(statearr_30534_30564[(2)] = null);
(statearr_30534_30564[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30524 === (9)))
{var inst_30494 = (state_30523[(8)]);var state_30523__$1 = state_30523;var statearr_30535_30565 = state_30523__$1;(statearr_30535_30565[(2)] = inst_30494);
(statearr_30535_30565[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30524 === (5)))
{var inst_30488 = (state_30523[(7)]);var inst_30494 = (state_30523[(8)]);var inst_30491 = cljs.core.nth.call(null,inst_30488,(0),null);var inst_30492 = cljs.core.nth.call(null,inst_30488,(1),null);var inst_30494__$1 = om.core.get_props.call(null,self__.owner);var inst_30495 = cljs.core.seq_QMARK_.call(null,inst_30494__$1);var state_30523__$1 = (function (){var statearr_30536 = state_30523;(statearr_30536[(9)] = inst_30491);
(statearr_30536[(10)] = inst_30492);
(statearr_30536[(8)] = inst_30494__$1);
return statearr_30536;
})();if(inst_30495)
{var statearr_30537_30566 = state_30523__$1;(statearr_30537_30566[(1)] = (8));
} else
{var statearr_30538_30567 = state_30523__$1;(statearr_30538_30567[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30524 === (10)))
{var inst_30492 = (state_30523[(10)]);var inst_30500 = (state_30523[(2)]);var inst_30501 = cljs.core.get.call(null,inst_30500,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30502 = cljs.core.get.call(null,inst_30500,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30503 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30504 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30492];var inst_30505 = (new cljs.core.PersistentVector(null,3,(5),inst_30503,inst_30504,null));var inst_30506 = cljs.core.clj__GT_js.call(null,inst_30505);var inst_30507 = console.log(inst_30506);var inst_30508 = cljs.core.deref.call(null,inst_30501);var inst_30509 = cljs.core.deref.call(null,inst_30502);var inst_30510 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30508,inst_30509,inst_30492);var inst_30511 = om.core.update_BANG_.call(null,inst_30501,inst_30510);var state_30523__$1 = (function (){var statearr_30539 = state_30523;(statearr_30539[(11)] = inst_30511);
(statearr_30539[(12)] = inst_30507);
return statearr_30539;
})();var statearr_30540_30568 = state_30523__$1;(statearr_30540_30568[(2)] = true);
(statearr_30540_30568[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30524 === (8)))
{var inst_30494 = (state_30523[(8)]);var inst_30497 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30494);var state_30523__$1 = state_30523;var statearr_30541_30569 = state_30523__$1;(statearr_30541_30569[(2)] = inst_30497);
(statearr_30541_30569[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30545 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30545[(0)] = state_machine__9111__auto__);
(statearr_30545[(1)] = (1));
return statearr_30545;
});
var state_machine__9111__auto____1 = (function (state_30523){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30523);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30546){if((e30546 instanceof Object))
{var ex__9114__auto__ = e30546;var statearr_30547_30570 = state_30523;(statearr_30547_30570[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30523);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30546;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30571 = state_30523;
state_30523 = G__30571;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30523){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415))
})();var state__9127__auto__ = (function (){var statearr_30548 = f__9126__auto__.call(null);(statearr_30548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30548;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415))
;
clustermap.components.filters.tag_checkboxes_filter.t30483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415){
return (function (_30485){var self__ = this;
var _30485__$1 = this;return self__.meta30484;
});})(owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415))
;
clustermap.components.filters.tag_checkboxes_filter.t30483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415){
return (function (_30485,meta30484__$1){var self__ = this;
var _30485__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30483(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema30413,self__.owner,self__.data,self__.G__30416,self__.map30410,self__.output_schema30412,self__.input_checker30414,self__.map30411,self__.filter_spec,self__.output_checker30415,self__.constructor30408,self__.validate__6034__auto__,self__.id,self__.ufv__,meta30484__$1));
});})(owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30483 = ((function (owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415){
return (function __GT_t30483(component_spec__$1,component_filter_rq_chan__$1,input_schema30413__$1,owner__$1,data__$1,G__30416__$1,map30410__$1,output_schema30412__$1,input_checker30414__$1,map30411__$1,filter_spec__$1,output_checker30415__$1,constructor30408__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30484){return (new clustermap.components.filters.tag_checkboxes_filter.t30483(component_spec__$1,component_filter_rq_chan__$1,input_schema30413__$1,owner__$1,data__$1,G__30416__$1,map30410__$1,output_schema30412__$1,input_checker30414__$1,map30411__$1,filter_spec__$1,output_checker30415__$1,constructor30408__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30484));
});})(owner,component_filter_rq_chan,map30411,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30483(component_spec,component_filter_rq_chan,input_schema30413,owner,data,G__30416,map30410,output_schema30412,input_checker30414,map30411,filter_spec,output_checker30415,constructor30408,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30572 = output_checker30415.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30572))
{var error__6036__auto___30573 = temp__4126__auto___30572;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30408","constructor30408",1413495320,null),cljs.core.pr_str.call(null,error__6036__auto___30573)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30573,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30412,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30412,input_schema30413,input_checker30414,output_checker30415))
,schema.core.make_fn_schema.call(null,output_schema30412,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30413], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30552){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30407,p__30549){var vec__30551 = p__30549;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30551,(0),null);return component_fnk__7881__auto___30552.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30407,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30407,var_args){
var p__30549 = null;if (arguments.length > 2) {
  p__30549 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30407,p__30549);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30574){
var data__7882__auto__ = cljs.core.first(arglist__30574);
arglist__30574 = cljs.core.next(arglist__30574);
var owner30407 = cljs.core.first(arglist__30574);
var p__30549 = cljs.core.rest(arglist__30574);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30407,p__30549);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30552))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30409){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30409);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30409){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
