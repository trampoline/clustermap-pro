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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29010(s__29011){return (new cljs.core.LazySeq(null,(function (){var s__29011__$1 = s__29011;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29011__$1);if(temp__4126__auto__)
{var s__29011__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29011__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29011__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29013 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29012 = (0);while(true){
if((i__29012 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__29012);cljs.core.chunk_append.call(null,b__29013,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__29014 = (i__29012 + (1));
i__29012 = G__29014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29013),iter__29010.call(null,cljs.core.chunk_rest.call(null,s__29011__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29013),null);
}
} else
{var t = cljs.core.first.call(null,s__29011__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__29010.call(null,cljs.core.rest.call(null,s__29011__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29015_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29015_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__29016,value){var map__29018 = p__29016;var map__29018__$1 = ((cljs.core.seq_QMARK_.call(null,map__29018))?cljs.core.apply.call(null,cljs.core.hash_map,map__29018):map__29018);var component_spec = map__29018__$1;var tags = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__29019_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__29019_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__29021,values){var map__29023 = p__29021;var map__29023__$1 = ((cljs.core.seq_QMARK_.call(null,map__29023))?cljs.core.apply.call(null,cljs.core.hash_map,map__29023):map__29023);var component_spec = map__29023__$1;var sorted = cljs.core.get.call(null,map__29023__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__29023__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29023__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29023,map__29023__$1,component_spec,sorted,tags,label){
return (function (p1__29020_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29020_SHARP_));
});})(values__$1,map__29023,map__29023__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29024,values){var map__29026 = p__29024;var map__29026__$1 = ((cljs.core.seq_QMARK_.call(null,map__29026))?cljs.core.apply.call(null,cljs.core.hash_map,map__29026):map__29026);var component_spec = map__29026__$1;var tags = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29026__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__29027){var map__29029 = p__29027;var map__29029__$1 = ((cljs.core.seq_QMARK_.call(null,map__29029))?cljs.core.apply.call(null,cljs.core.hash_map,map__29029):map__29029);var component_spec = map__29029__$1;var tags = cljs.core.get.call(null,map__29029__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29029__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__29030){var map__29032 = p__29030;var map__29032__$1 = ((cljs.core.seq_QMARK_.call(null,map__29032))?cljs.core.apply.call(null,cljs.core.hash_map,map__29032):map__29032);var component_spec = map__29032__$1;var tags = cljs.core.get.call(null,map__29032__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29032__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29034 = schema.core.Any;var input_schema29035 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29033","map29033",454090816,null))], null);var input_checker29036 = schema.core.checker.call(null,input_schema29035);var output_checker29037 = schema.core.checker.call(null,output_schema29034);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037){
return (function render_STAR_(G__29038){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29073 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29038], null);var temp__4126__auto___29074 = input_checker29036.call(null,args__6035__auto___29073);if(cljs.core.truth_(temp__4126__auto___29074))
{var error__6036__auto___29075 = temp__4126__auto___29074;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29075)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29075,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29073,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29035,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29033 = G__29038;while(true){
if(cljs.core.map_QMARK_.call(null,map29033))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29033)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29033,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29033,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs29056 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29056))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs29056)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29056))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037){
return (function iter__29057(s__29058){return (new cljs.core.LazySeq(null,((function (attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037){
return (function (){var s__29058__$1 = s__29058;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29058__$1);if(temp__4126__auto__)
{var s__29058__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29058__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29058__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29060 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29059 = (0);while(true){
if((i__29059 < size__4376__auto__))
{var map__29063 = cljs.core._nth.call(null,c__4375__auto__,i__29059);var map__29063__$1 = ((cljs.core.seq_QMARK_.call(null,map__29063))?cljs.core.apply.call(null,cljs.core.hash_map,map__29063):map__29063);var label__$1 = cljs.core.get.call(null,map__29063__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29063__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29060,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29059,map__29063,map__29063__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29060,s__29058__$2,temp__4126__auto__,attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29059,map__29063,map__29063__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29060,s__29058__$2,temp__4126__auto__,attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29076 = (i__29059 + (1));
i__29059 = G__29076;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29060),iter__29057.call(null,cljs.core.chunk_rest.call(null,s__29058__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29060),null);
}
} else
{var map__29064 = cljs.core.first.call(null,s__29058__$2);var map__29064__$1 = ((cljs.core.seq_QMARK_.call(null,map__29064))?cljs.core.apply.call(null,cljs.core.hash_map,map__29064):map__29064);var label__$1 = cljs.core.get.call(null,map__29064__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29064__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29064,map__29064__$1,label__$1,value,s__29058__$2,temp__4126__auto__,attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29064,map__29064__$1,label__$1,value,s__29058__$2,temp__4126__auto__,attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29057.call(null,cljs.core.rest.call(null,s__29058__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037))
,null,null));
});})(attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29056),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037){
return (function iter__29065(s__29066){return (new cljs.core.LazySeq(null,((function (attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037){
return (function (){var s__29066__$1 = s__29066;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29066__$1);if(temp__4126__auto__)
{var s__29066__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29066__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29066__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29068 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29067 = (0);while(true){
if((i__29067 < size__4376__auto__))
{var map__29071 = cljs.core._nth.call(null,c__4375__auto__,i__29067);var map__29071__$1 = ((cljs.core.seq_QMARK_.call(null,map__29071))?cljs.core.apply.call(null,cljs.core.hash_map,map__29071):map__29071);var label__$1 = cljs.core.get.call(null,map__29071__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29071__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29068,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29067,map__29071,map__29071__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29068,s__29066__$2,temp__4126__auto__,attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29067,map__29071,map__29071__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29068,s__29066__$2,temp__4126__auto__,attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29077 = (i__29067 + (1));
i__29067 = G__29077;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29068),iter__29065.call(null,cljs.core.chunk_rest.call(null,s__29066__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29068),null);
}
} else
{var map__29072 = cljs.core.first.call(null,s__29066__$2);var map__29072__$1 = ((cljs.core.seq_QMARK_.call(null,map__29072))?cljs.core.apply.call(null,cljs.core.hash_map,map__29072):map__29072);var label__$1 = cljs.core.get.call(null,map__29072__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29072__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29072,map__29072__$1,label__$1,value,s__29066__$2,temp__4126__auto__,attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29072,map__29072__$1,label__$1,value,s__29066__$2,temp__4126__auto__,attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29065.call(null,cljs.core.rest.call(null,s__29066__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037))
,null,null));
});})(attrs29056,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29078 = output_checker29037.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29078))
{var error__6036__auto___29079 = temp__4126__auto___29078;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29079)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29079,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29034,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29034,input_schema29035,input_checker29036,output_checker29037))
,schema.core.make_fn_schema.call(null,output_schema29034,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29035], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29225 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29085 = schema.core.Any;var input_schema29086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29083","map29083",-1934181116,null))], null);var input_checker29087 = schema.core.checker.call(null,input_schema29086);var output_checker29088 = schema.core.checker.call(null,output_schema29085);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088){
return (function constructor29081(G__29089){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29089], null);var temp__4126__auto___29227 = input_checker29087.call(null,args__6035__auto___29226);if(cljs.core.truth_(temp__4126__auto___29227))
{var error__6036__auto___29228 = temp__4126__auto___29227;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29081","constructor29081",1240020722,null),cljs.core.pr_str.call(null,error__6036__auto___29228)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29228,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29226,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29086,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29083 = G__29089;while(true){
if(cljs.core.map_QMARK_.call(null,map29083))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29083)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29083,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29084 = plumbing.fnk.schema.safe_get.call(null,map29083,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29084,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29083,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t29156 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t29156 = (function (component_spec,component_filter_rq_chan,map29083,owner,G__29089,data,output_schema29085,output_checker29088,input_checker29087,filter_spec,constructor29081,input_schema29086,map29084,validate__6034__auto__,id,ufv__,meta29157){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map29083 = map29083;
this.owner = owner;
this.G__29089 = G__29089;
this.data = data;
this.output_schema29085 = output_schema29085;
this.output_checker29088 = output_checker29088;
this.input_checker29087 = input_checker29087;
this.filter_spec = filter_spec;
this.constructor29081 = constructor29081;
this.input_schema29086 = input_schema29086;
this.map29084 = map29084;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta29157 = meta29157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t29156.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t29156.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t29156";
clustermap.components.filters.tag_checkboxes_filter.t29156.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t29156");
});})(owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088))
;
clustermap.components.filters.tag_checkboxes_filter.t29156.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29156.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088))
;
clustermap.components.filters.tag_checkboxes_filter.t29156.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29156.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088))
;
clustermap.components.filters.tag_checkboxes_filter.t29156.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29156.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088){
return (function (state_29196){var state_val_29197 = (state_29196[(1)]);if((state_val_29197 === (7)))
{var inst_29187 = (state_29196[(2)]);var state_29196__$1 = state_29196;if(cljs.core.truth_(inst_29187))
{var statearr_29198_29229 = state_29196__$1;(statearr_29198_29229[(1)] = (11));
} else
{var statearr_29199_29230 = state_29196__$1;(statearr_29199_29230[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29197 === (1)))
{var state_29196__$1 = state_29196;var statearr_29200_29231 = state_29196__$1;(statearr_29200_29231[(2)] = null);
(statearr_29200_29231[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29197 === (4)))
{var inst_29161 = (state_29196[(7)]);var inst_29161__$1 = (state_29196[(2)]);var state_29196__$1 = (function (){var statearr_29201 = state_29196;(statearr_29201[(7)] = inst_29161__$1);
return statearr_29201;
})();if(cljs.core.truth_(inst_29161__$1))
{var statearr_29202_29232 = state_29196__$1;(statearr_29202_29232[(1)] = (5));
} else
{var statearr_29203_29233 = state_29196__$1;(statearr_29203_29233[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29197 === (13)))
{var inst_29192 = (state_29196[(2)]);var state_29196__$1 = state_29196;var statearr_29204_29234 = state_29196__$1;(statearr_29204_29234[(2)] = inst_29192);
(statearr_29204_29234[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29197 === (6)))
{var state_29196__$1 = state_29196;var statearr_29205_29235 = state_29196__$1;(statearr_29205_29235[(2)] = null);
(statearr_29205_29235[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29197 === (3)))
{var inst_29194 = (state_29196[(2)]);var state_29196__$1 = state_29196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29196__$1,inst_29194);
} else
{if((state_val_29197 === (12)))
{var state_29196__$1 = state_29196;var statearr_29206_29236 = state_29196__$1;(statearr_29206_29236[(2)] = null);
(statearr_29206_29236[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29197 === (2)))
{var state_29196__$1 = state_29196;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29196__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29197 === (11)))
{var state_29196__$1 = state_29196;var statearr_29207_29237 = state_29196__$1;(statearr_29207_29237[(2)] = null);
(statearr_29207_29237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29197 === (9)))
{var inst_29167 = (state_29196[(8)]);var state_29196__$1 = state_29196;var statearr_29208_29238 = state_29196__$1;(statearr_29208_29238[(2)] = inst_29167);
(statearr_29208_29238[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29197 === (5)))
{var inst_29161 = (state_29196[(7)]);var inst_29167 = (state_29196[(8)]);var inst_29164 = cljs.core.nth.call(null,inst_29161,(0),null);var inst_29165 = cljs.core.nth.call(null,inst_29161,(1),null);var inst_29167__$1 = om.core.get_props.call(null,self__.owner);var inst_29168 = cljs.core.seq_QMARK_.call(null,inst_29167__$1);var state_29196__$1 = (function (){var statearr_29209 = state_29196;(statearr_29209[(8)] = inst_29167__$1);
(statearr_29209[(9)] = inst_29165);
(statearr_29209[(10)] = inst_29164);
return statearr_29209;
})();if(inst_29168)
{var statearr_29210_29239 = state_29196__$1;(statearr_29210_29239[(1)] = (8));
} else
{var statearr_29211_29240 = state_29196__$1;(statearr_29211_29240[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29197 === (10)))
{var inst_29165 = (state_29196[(9)]);var inst_29173 = (state_29196[(2)]);var inst_29174 = cljs.core.get.call(null,inst_29173,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29175 = cljs.core.get.call(null,inst_29173,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29176 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29177 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_29165];var inst_29178 = (new cljs.core.PersistentVector(null,3,(5),inst_29176,inst_29177,null));var inst_29179 = cljs.core.clj__GT_js.call(null,inst_29178);var inst_29180 = console.log(inst_29179);var inst_29181 = cljs.core.deref.call(null,inst_29174);var inst_29182 = cljs.core.deref.call(null,inst_29175);var inst_29183 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_29181,inst_29182,inst_29165);var inst_29184 = om.core.update_BANG_.call(null,inst_29174,inst_29183);var state_29196__$1 = (function (){var statearr_29212 = state_29196;(statearr_29212[(11)] = inst_29184);
(statearr_29212[(12)] = inst_29180);
return statearr_29212;
})();var statearr_29213_29241 = state_29196__$1;(statearr_29213_29241[(2)] = true);
(statearr_29213_29241[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29197 === (8)))
{var inst_29167 = (state_29196[(8)]);var inst_29170 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29167);var state_29196__$1 = state_29196;var statearr_29214_29242 = state_29196__$1;(statearr_29214_29242[(2)] = inst_29170);
(statearr_29214_29242[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29218 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29218[(0)] = state_machine__11462__auto__);
(statearr_29218[(1)] = (1));
return statearr_29218;
});
var state_machine__11462__auto____1 = (function (state_29196){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29196);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29219){if((e29219 instanceof Object))
{var ex__11465__auto__ = e29219;var statearr_29220_29243 = state_29196;(statearr_29220_29243[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29196);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29219;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29244 = state_29196;
state_29196 = G__29244;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29196){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088))
})();var state__11519__auto__ = (function (){var statearr_29221 = f__11518__auto__.call(null);(statearr_29221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29221;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088))
;
clustermap.components.filters.tag_checkboxes_filter.t29156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088){
return (function (_29158){var self__ = this;
var _29158__$1 = this;return self__.meta29157;
});})(owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088))
;
clustermap.components.filters.tag_checkboxes_filter.t29156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088){
return (function (_29158,meta29157__$1){var self__ = this;
var _29158__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t29156(self__.component_spec,self__.component_filter_rq_chan,self__.map29083,self__.owner,self__.G__29089,self__.data,self__.output_schema29085,self__.output_checker29088,self__.input_checker29087,self__.filter_spec,self__.constructor29081,self__.input_schema29086,self__.map29084,self__.validate__6034__auto__,self__.id,self__.ufv__,meta29157__$1));
});})(owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t29156 = ((function (owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088){
return (function __GT_t29156(component_spec__$1,component_filter_rq_chan__$1,map29083__$1,owner__$1,G__29089__$1,data__$1,output_schema29085__$1,output_checker29088__$1,input_checker29087__$1,filter_spec__$1,constructor29081__$1,input_schema29086__$1,map29084__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29157){return (new clustermap.components.filters.tag_checkboxes_filter.t29156(component_spec__$1,component_filter_rq_chan__$1,map29083__$1,owner__$1,G__29089__$1,data__$1,output_schema29085__$1,output_checker29088__$1,input_checker29087__$1,filter_spec__$1,constructor29081__$1,input_schema29086__$1,map29084__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29157));
});})(owner,component_filter_rq_chan,map29084,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t29156(component_spec,component_filter_rq_chan,map29083,owner,G__29089,data,output_schema29085,output_checker29088,input_checker29087,filter_spec,constructor29081,input_schema29086,map29084,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29245 = output_checker29088.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29245))
{var error__6036__auto___29246 = temp__4126__auto___29245;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29081","constructor29081",1240020722,null),cljs.core.pr_str.call(null,error__6036__auto___29246)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29246,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29085,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29085,input_schema29086,input_checker29087,output_checker29088))
,schema.core.make_fn_schema.call(null,output_schema29085,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29086], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___29225){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner29080,p__29222){var vec__29224 = p__29222;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29224,(0),null);return component_fnk__7881__auto___29225.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29080,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner29080,var_args){
var p__29222 = null;if (arguments.length > 2) {
  p__29222 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29080,p__29222);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29247){
var data__7882__auto__ = cljs.core.first(arglist__29247);
arglist__29247 = cljs.core.next(arglist__29247);
var owner29080 = cljs.core.first(arglist__29247);
var p__29222 = cljs.core.rest(arglist__29247);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner29080,p__29222);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29225))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29082){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m29082);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m29082){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
