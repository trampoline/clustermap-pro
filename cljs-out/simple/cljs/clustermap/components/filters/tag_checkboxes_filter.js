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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30333(s__30334){return (new cljs.core.LazySeq(null,(function (){var s__30334__$1 = s__30334;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30334__$1);if(temp__4126__auto__)
{var s__30334__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30334__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30334__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30336 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30335 = (0);while(true){
if((i__30335 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30335);cljs.core.chunk_append.call(null,b__30336,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30337 = (i__30335 + (1));
i__30335 = G__30337;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30336),iter__30333.call(null,cljs.core.chunk_rest.call(null,s__30334__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30336),null);
}
} else
{var t = cljs.core.first.call(null,s__30334__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30333.call(null,cljs.core.rest.call(null,s__30334__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30338_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30338_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30339,value){var map__30341 = p__30339;var map__30341__$1 = ((cljs.core.seq_QMARK_.call(null,map__30341))?cljs.core.apply.call(null,cljs.core.hash_map,map__30341):map__30341);var component_spec = map__30341__$1;var tags = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30342_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30342_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30344,values){var map__30346 = p__30344;var map__30346__$1 = ((cljs.core.seq_QMARK_.call(null,map__30346))?cljs.core.apply.call(null,cljs.core.hash_map,map__30346):map__30346);var component_spec = map__30346__$1;var sorted = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30346__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30346,map__30346__$1,component_spec,sorted,tags,label){
return (function (p1__30343_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30343_SHARP_));
});})(values__$1,map__30346,map__30346__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30347,values){var map__30349 = p__30347;var map__30349__$1 = ((cljs.core.seq_QMARK_.call(null,map__30349))?cljs.core.apply.call(null,cljs.core.hash_map,map__30349):map__30349);var component_spec = map__30349__$1;var tags = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30350){var map__30352 = p__30350;var map__30352__$1 = ((cljs.core.seq_QMARK_.call(null,map__30352))?cljs.core.apply.call(null,cljs.core.hash_map,map__30352):map__30352);var component_spec = map__30352__$1;var tags = cljs.core.get.call(null,map__30352__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30352__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30353){var map__30355 = p__30353;var map__30355__$1 = ((cljs.core.seq_QMARK_.call(null,map__30355))?cljs.core.apply.call(null,cljs.core.hash_map,map__30355):map__30355);var component_spec = map__30355__$1;var tags = cljs.core.get.call(null,map__30355__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30355__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30357 = schema.core.Any;var input_schema30358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30356","map30356",1748931157,null))], null);var input_checker30359 = schema.core.checker.call(null,input_schema30358);var output_checker30360 = schema.core.checker.call(null,output_schema30357);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360){
return (function render_STAR_(G__30361){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30361], null);var temp__4126__auto___30397 = input_checker30359.call(null,args__6035__auto___30396);if(cljs.core.truth_(temp__4126__auto___30397))
{var error__6036__auto___30398 = temp__4126__auto___30397;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30398)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30398,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30396,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30358,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30356 = G__30361;while(true){
if(cljs.core.map_QMARK_.call(null,map30356))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30356)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30356,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30356,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30379 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30379))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30379)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30379))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360){
return (function iter__30380(s__30381){return (new cljs.core.LazySeq(null,((function (attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360){
return (function (){var s__30381__$1 = s__30381;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30381__$1);if(temp__4126__auto__)
{var s__30381__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30381__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30381__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30383 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30382 = (0);while(true){
if((i__30382 < size__4376__auto__))
{var map__30386 = cljs.core._nth.call(null,c__4375__auto__,i__30382);var map__30386__$1 = ((cljs.core.seq_QMARK_.call(null,map__30386))?cljs.core.apply.call(null,cljs.core.hash_map,map__30386):map__30386);var label__$1 = cljs.core.get.call(null,map__30386__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30386__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30383,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30382,map__30386,map__30386__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30383,s__30381__$2,temp__4126__auto__,attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30382,map__30386,map__30386__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30383,s__30381__$2,temp__4126__auto__,attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30399 = (i__30382 + (1));
i__30382 = G__30399;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30383),iter__30380.call(null,cljs.core.chunk_rest.call(null,s__30381__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30383),null);
}
} else
{var map__30387 = cljs.core.first.call(null,s__30381__$2);var map__30387__$1 = ((cljs.core.seq_QMARK_.call(null,map__30387))?cljs.core.apply.call(null,cljs.core.hash_map,map__30387):map__30387);var label__$1 = cljs.core.get.call(null,map__30387__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30387__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30387,map__30387__$1,label__$1,value,s__30381__$2,temp__4126__auto__,attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30387,map__30387__$1,label__$1,value,s__30381__$2,temp__4126__auto__,attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30380.call(null,cljs.core.rest.call(null,s__30381__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360))
,null,null));
});})(attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30379),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360){
return (function iter__30388(s__30389){return (new cljs.core.LazySeq(null,((function (attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360){
return (function (){var s__30389__$1 = s__30389;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30389__$1);if(temp__4126__auto__)
{var s__30389__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30389__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30389__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30391 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30390 = (0);while(true){
if((i__30390 < size__4376__auto__))
{var map__30394 = cljs.core._nth.call(null,c__4375__auto__,i__30390);var map__30394__$1 = ((cljs.core.seq_QMARK_.call(null,map__30394))?cljs.core.apply.call(null,cljs.core.hash_map,map__30394):map__30394);var label__$1 = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30391,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30390,map__30394,map__30394__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30391,s__30389__$2,temp__4126__auto__,attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30390,map__30394,map__30394__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30391,s__30389__$2,temp__4126__auto__,attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30400 = (i__30390 + (1));
i__30390 = G__30400;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30391),iter__30388.call(null,cljs.core.chunk_rest.call(null,s__30389__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30391),null);
}
} else
{var map__30395 = cljs.core.first.call(null,s__30389__$2);var map__30395__$1 = ((cljs.core.seq_QMARK_.call(null,map__30395))?cljs.core.apply.call(null,cljs.core.hash_map,map__30395):map__30395);var label__$1 = cljs.core.get.call(null,map__30395__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30395__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30395,map__30395__$1,label__$1,value,s__30389__$2,temp__4126__auto__,attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30395,map__30395__$1,label__$1,value,s__30389__$2,temp__4126__auto__,attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30388.call(null,cljs.core.rest.call(null,s__30389__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360))
,null,null));
});})(attrs30379,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30401 = output_checker30360.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30401))
{var error__6036__auto___30402 = temp__4126__auto___30401;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30402)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30402,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30357,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30357,input_schema30358,input_checker30359,output_checker30360))
,schema.core.make_fn_schema.call(null,output_schema30357,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30358], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30548 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30408 = schema.core.Any;var input_schema30409 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30406","map30406",821885104,null))], null);var input_checker30410 = schema.core.checker.call(null,input_schema30409);var output_checker30411 = schema.core.checker.call(null,output_schema30408);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411){
return (function constructor30404(G__30412){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30412], null);var temp__4126__auto___30550 = input_checker30410.call(null,args__6035__auto___30549);if(cljs.core.truth_(temp__4126__auto___30550))
{var error__6036__auto___30551 = temp__4126__auto___30550;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30404","constructor30404",-1086724532,null),cljs.core.pr_str.call(null,error__6036__auto___30551)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30551,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30549,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30409,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30406 = G__30412;while(true){
if(cljs.core.map_QMARK_.call(null,map30406))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30406)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30406,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30407 = plumbing.fnk.schema.safe_get.call(null,map30406,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30407,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30406,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30479 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30479 = (function (component_spec,component_filter_rq_chan,owner,data,constructor30404,output_checker30411,filter_spec,map30406,G__30412,map30407,input_schema30409,input_checker30410,output_schema30408,validate__6034__auto__,id,ufv__,meta30480){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.constructor30404 = constructor30404;
this.output_checker30411 = output_checker30411;
this.filter_spec = filter_spec;
this.map30406 = map30406;
this.G__30412 = G__30412;
this.map30407 = map30407;
this.input_schema30409 = input_schema30409;
this.input_checker30410 = input_checker30410;
this.output_schema30408 = output_schema30408;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta30480 = meta30480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30479.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30479.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30479";
clustermap.components.filters.tag_checkboxes_filter.t30479.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30479");
});})(owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411))
;
clustermap.components.filters.tag_checkboxes_filter.t30479.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30479.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411))
;
clustermap.components.filters.tag_checkboxes_filter.t30479.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30479.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411))
;
clustermap.components.filters.tag_checkboxes_filter.t30479.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30479.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411){
return (function (state_30519){var state_val_30520 = (state_30519[(1)]);if((state_val_30520 === (7)))
{var inst_30510 = (state_30519[(2)]);var state_30519__$1 = state_30519;if(cljs.core.truth_(inst_30510))
{var statearr_30521_30552 = state_30519__$1;(statearr_30521_30552[(1)] = (11));
} else
{var statearr_30522_30553 = state_30519__$1;(statearr_30522_30553[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30520 === (1)))
{var state_30519__$1 = state_30519;var statearr_30523_30554 = state_30519__$1;(statearr_30523_30554[(2)] = null);
(statearr_30523_30554[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30520 === (4)))
{var inst_30484 = (state_30519[(7)]);var inst_30484__$1 = (state_30519[(2)]);var state_30519__$1 = (function (){var statearr_30524 = state_30519;(statearr_30524[(7)] = inst_30484__$1);
return statearr_30524;
})();if(cljs.core.truth_(inst_30484__$1))
{var statearr_30525_30555 = state_30519__$1;(statearr_30525_30555[(1)] = (5));
} else
{var statearr_30526_30556 = state_30519__$1;(statearr_30526_30556[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30520 === (13)))
{var inst_30515 = (state_30519[(2)]);var state_30519__$1 = state_30519;var statearr_30527_30557 = state_30519__$1;(statearr_30527_30557[(2)] = inst_30515);
(statearr_30527_30557[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30520 === (6)))
{var state_30519__$1 = state_30519;var statearr_30528_30558 = state_30519__$1;(statearr_30528_30558[(2)] = null);
(statearr_30528_30558[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30520 === (3)))
{var inst_30517 = (state_30519[(2)]);var state_30519__$1 = state_30519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30519__$1,inst_30517);
} else
{if((state_val_30520 === (12)))
{var state_30519__$1 = state_30519;var statearr_30529_30559 = state_30519__$1;(statearr_30529_30559[(2)] = null);
(statearr_30529_30559[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30520 === (2)))
{var state_30519__$1 = state_30519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30519__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30520 === (11)))
{var state_30519__$1 = state_30519;var statearr_30530_30560 = state_30519__$1;(statearr_30530_30560[(2)] = null);
(statearr_30530_30560[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30520 === (9)))
{var inst_30490 = (state_30519[(8)]);var state_30519__$1 = state_30519;var statearr_30531_30561 = state_30519__$1;(statearr_30531_30561[(2)] = inst_30490);
(statearr_30531_30561[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30520 === (5)))
{var inst_30490 = (state_30519[(8)]);var inst_30484 = (state_30519[(7)]);var inst_30487 = cljs.core.nth.call(null,inst_30484,(0),null);var inst_30488 = cljs.core.nth.call(null,inst_30484,(1),null);var inst_30490__$1 = om.core.get_props.call(null,self__.owner);var inst_30491 = cljs.core.seq_QMARK_.call(null,inst_30490__$1);var state_30519__$1 = (function (){var statearr_30532 = state_30519;(statearr_30532[(9)] = inst_30488);
(statearr_30532[(8)] = inst_30490__$1);
(statearr_30532[(10)] = inst_30487);
return statearr_30532;
})();if(inst_30491)
{var statearr_30533_30562 = state_30519__$1;(statearr_30533_30562[(1)] = (8));
} else
{var statearr_30534_30563 = state_30519__$1;(statearr_30534_30563[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30520 === (10)))
{var inst_30488 = (state_30519[(9)]);var inst_30496 = (state_30519[(2)]);var inst_30497 = cljs.core.get.call(null,inst_30496,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30498 = cljs.core.get.call(null,inst_30496,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30499 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30500 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30488];var inst_30501 = (new cljs.core.PersistentVector(null,3,(5),inst_30499,inst_30500,null));var inst_30502 = cljs.core.clj__GT_js.call(null,inst_30501);var inst_30503 = console.log(inst_30502);var inst_30504 = cljs.core.deref.call(null,inst_30497);var inst_30505 = cljs.core.deref.call(null,inst_30498);var inst_30506 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30504,inst_30505,inst_30488);var inst_30507 = om.core.update_BANG_.call(null,inst_30497,inst_30506);var state_30519__$1 = (function (){var statearr_30535 = state_30519;(statearr_30535[(11)] = inst_30503);
(statearr_30535[(12)] = inst_30507);
return statearr_30535;
})();var statearr_30536_30564 = state_30519__$1;(statearr_30536_30564[(2)] = true);
(statearr_30536_30564[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30520 === (8)))
{var inst_30490 = (state_30519[(8)]);var inst_30493 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30490);var state_30519__$1 = state_30519;var statearr_30537_30565 = state_30519__$1;(statearr_30537_30565[(2)] = inst_30493);
(statearr_30537_30565[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30541 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30541[(0)] = state_machine__9111__auto__);
(statearr_30541[(1)] = (1));
return statearr_30541;
});
var state_machine__9111__auto____1 = (function (state_30519){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30519);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30542){if((e30542 instanceof Object))
{var ex__9114__auto__ = e30542;var statearr_30543_30566 = state_30519;(statearr_30543_30566[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30519);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30542;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30567 = state_30519;
state_30519 = G__30567;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30519){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411))
})();var state__9127__auto__ = (function (){var statearr_30544 = f__9126__auto__.call(null);(statearr_30544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411))
;
clustermap.components.filters.tag_checkboxes_filter.t30479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411){
return (function (_30481){var self__ = this;
var _30481__$1 = this;return self__.meta30480;
});})(owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411))
;
clustermap.components.filters.tag_checkboxes_filter.t30479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411){
return (function (_30481,meta30480__$1){var self__ = this;
var _30481__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30479(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.constructor30404,self__.output_checker30411,self__.filter_spec,self__.map30406,self__.G__30412,self__.map30407,self__.input_schema30409,self__.input_checker30410,self__.output_schema30408,self__.validate__6034__auto__,self__.id,self__.ufv__,meta30480__$1));
});})(owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30479 = ((function (owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411){
return (function __GT_t30479(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,constructor30404__$1,output_checker30411__$1,filter_spec__$1,map30406__$1,G__30412__$1,map30407__$1,input_schema30409__$1,input_checker30410__$1,output_schema30408__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30480){return (new clustermap.components.filters.tag_checkboxes_filter.t30479(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,constructor30404__$1,output_checker30411__$1,filter_spec__$1,map30406__$1,G__30412__$1,map30407__$1,input_schema30409__$1,input_checker30410__$1,output_schema30408__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30480));
});})(owner,component_filter_rq_chan,map30407,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30479(component_spec,component_filter_rq_chan,owner,data,constructor30404,output_checker30411,filter_spec,map30406,G__30412,map30407,input_schema30409,input_checker30410,output_schema30408,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30568 = output_checker30411.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30568))
{var error__6036__auto___30569 = temp__4126__auto___30568;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30404","constructor30404",-1086724532,null),cljs.core.pr_str.call(null,error__6036__auto___30569)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30569,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30408,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30408,input_schema30409,input_checker30410,output_checker30411))
,schema.core.make_fn_schema.call(null,output_schema30408,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30409], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30548){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30403,p__30545){var vec__30547 = p__30545;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30547,(0),null);return component_fnk__7881__auto___30548.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30403,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30403,var_args){
var p__30545 = null;if (arguments.length > 2) {
  p__30545 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30403,p__30545);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30570){
var data__7882__auto__ = cljs.core.first(arglist__30570);
arglist__30570 = cljs.core.next(arglist__30570);
var owner30403 = cljs.core.first(arglist__30570);
var p__30545 = cljs.core.rest(arglist__30570);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30403,p__30545);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30548))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30405){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30405);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30405){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
