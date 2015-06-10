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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29990(s__29991){return (new cljs.core.LazySeq(null,(function (){var s__29991__$1 = s__29991;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29991__$1);if(temp__4126__auto__)
{var s__29991__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29991__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29991__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29993 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29992 = (0);while(true){
if((i__29992 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__29992);cljs.core.chunk_append.call(null,b__29993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__29994 = (i__29992 + (1));
i__29992 = G__29994;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29993),iter__29990.call(null,cljs.core.chunk_rest.call(null,s__29991__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29993),null);
}
} else
{var t = cljs.core.first.call(null,s__29991__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__29990.call(null,cljs.core.rest.call(null,s__29991__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29995_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29995_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__29996,value){var map__29998 = p__29996;var map__29998__$1 = ((cljs.core.seq_QMARK_.call(null,map__29998))?cljs.core.apply.call(null,cljs.core.hash_map,map__29998):map__29998);var component_spec = map__29998__$1;var tags = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__29999_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__29999_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30001,values){var map__30003 = p__30001;var map__30003__$1 = ((cljs.core.seq_QMARK_.call(null,map__30003))?cljs.core.apply.call(null,cljs.core.hash_map,map__30003):map__30003);var component_spec = map__30003__$1;var sorted = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30003,map__30003__$1,component_spec,sorted,tags,label){
return (function (p1__30000_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30000_SHARP_));
});})(values__$1,map__30003,map__30003__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30004,values){var map__30006 = p__30004;var map__30006__$1 = ((cljs.core.seq_QMARK_.call(null,map__30006))?cljs.core.apply.call(null,cljs.core.hash_map,map__30006):map__30006);var component_spec = map__30006__$1;var tags = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30006__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30007){var map__30009 = p__30007;var map__30009__$1 = ((cljs.core.seq_QMARK_.call(null,map__30009))?cljs.core.apply.call(null,cljs.core.hash_map,map__30009):map__30009);var component_spec = map__30009__$1;var tags = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30010){var map__30012 = p__30010;var map__30012__$1 = ((cljs.core.seq_QMARK_.call(null,map__30012))?cljs.core.apply.call(null,cljs.core.hash_map,map__30012):map__30012);var component_spec = map__30012__$1;var tags = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30012__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30014 = schema.core.Any;var input_schema30015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30013","map30013",758134234,null))], null);var input_checker30016 = schema.core.checker.call(null,input_schema30015);var output_checker30017 = schema.core.checker.call(null,output_schema30014);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function render_STAR_(G__30018){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30018], null);var temp__4126__auto___30054 = input_checker30016.call(null,args__6035__auto___30053);if(cljs.core.truth_(temp__4126__auto___30054))
{var error__6036__auto___30055 = temp__4126__auto___30054;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30055)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30055,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30053,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30015,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30013 = G__30018;while(true){
if(cljs.core.map_QMARK_.call(null,map30013))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30013)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30013,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30013,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30036 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30036))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30036)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30036))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function iter__30037(s__30038){return (new cljs.core.LazySeq(null,((function (attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function (){var s__30038__$1 = s__30038;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30038__$1);if(temp__4126__auto__)
{var s__30038__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30038__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30038__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30040 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30039 = (0);while(true){
if((i__30039 < size__4376__auto__))
{var map__30043 = cljs.core._nth.call(null,c__4375__auto__,i__30039);var map__30043__$1 = ((cljs.core.seq_QMARK_.call(null,map__30043))?cljs.core.apply.call(null,cljs.core.hash_map,map__30043):map__30043);var label__$1 = cljs.core.get.call(null,map__30043__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30043__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30040,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30039,map__30043,map__30043__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30040,s__30038__$2,temp__4126__auto__,attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30039,map__30043,map__30043__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30040,s__30038__$2,temp__4126__auto__,attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30056 = (i__30039 + (1));
i__30039 = G__30056;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30040),iter__30037.call(null,cljs.core.chunk_rest.call(null,s__30038__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30040),null);
}
} else
{var map__30044 = cljs.core.first.call(null,s__30038__$2);var map__30044__$1 = ((cljs.core.seq_QMARK_.call(null,map__30044))?cljs.core.apply.call(null,cljs.core.hash_map,map__30044):map__30044);var label__$1 = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30044,map__30044__$1,label__$1,value,s__30038__$2,temp__4126__auto__,attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30044,map__30044__$1,label__$1,value,s__30038__$2,temp__4126__auto__,attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30037.call(null,cljs.core.rest.call(null,s__30038__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
,null,null));
});})(attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30036),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function iter__30045(s__30046){return (new cljs.core.LazySeq(null,((function (attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function (){var s__30046__$1 = s__30046;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30046__$1);if(temp__4126__auto__)
{var s__30046__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30046__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30046__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30048 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30047 = (0);while(true){
if((i__30047 < size__4376__auto__))
{var map__30051 = cljs.core._nth.call(null,c__4375__auto__,i__30047);var map__30051__$1 = ((cljs.core.seq_QMARK_.call(null,map__30051))?cljs.core.apply.call(null,cljs.core.hash_map,map__30051):map__30051);var label__$1 = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30048,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30047,map__30051,map__30051__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30048,s__30046__$2,temp__4126__auto__,attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30047,map__30051,map__30051__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30048,s__30046__$2,temp__4126__auto__,attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30057 = (i__30047 + (1));
i__30047 = G__30057;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30048),iter__30045.call(null,cljs.core.chunk_rest.call(null,s__30046__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30048),null);
}
} else
{var map__30052 = cljs.core.first.call(null,s__30046__$2);var map__30052__$1 = ((cljs.core.seq_QMARK_.call(null,map__30052))?cljs.core.apply.call(null,cljs.core.hash_map,map__30052):map__30052);var label__$1 = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30052,map__30052__$1,label__$1,value,s__30046__$2,temp__4126__auto__,attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30052,map__30052__$1,label__$1,value,s__30046__$2,temp__4126__auto__,attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30045.call(null,cljs.core.rest.call(null,s__30046__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
,null,null));
});})(attrs30036,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30058 = output_checker30017.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30058))
{var error__6036__auto___30059 = temp__4126__auto___30058;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30059)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30059,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30014,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
,schema.core.make_fn_schema.call(null,output_schema30014,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30015], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30205 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30065 = schema.core.Any;var input_schema30066 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30063","map30063",-1197129890,null))], null);var input_checker30067 = schema.core.checker.call(null,input_schema30066);var output_checker30068 = schema.core.checker.call(null,output_schema30065);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068){
return (function constructor30061(G__30069){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30069], null);var temp__4126__auto___30207 = input_checker30067.call(null,args__6035__auto___30206);if(cljs.core.truth_(temp__4126__auto___30207))
{var error__6036__auto___30208 = temp__4126__auto___30207;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30061","constructor30061",1161527184,null),cljs.core.pr_str.call(null,error__6036__auto___30208)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30208,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30206,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30066,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30063 = G__30069;while(true){
if(cljs.core.map_QMARK_.call(null,map30063))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30063)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30063,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30064 = plumbing.fnk.schema.safe_get.call(null,map30063,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30064,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30063,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30136 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30136 = (function (component_spec,component_filter_rq_chan,owner,output_checker30068,data,map30064,filter_spec,constructor30061,input_schema30066,validate__6034__auto__,id,G__30069,input_checker30067,output_schema30065,ufv__,map30063,meta30137){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.output_checker30068 = output_checker30068;
this.data = data;
this.map30064 = map30064;
this.filter_spec = filter_spec;
this.constructor30061 = constructor30061;
this.input_schema30066 = input_schema30066;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__30069 = G__30069;
this.input_checker30067 = input_checker30067;
this.output_schema30065 = output_schema30065;
this.ufv__ = ufv__;
this.map30063 = map30063;
this.meta30137 = meta30137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30136.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30136.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30136";
clustermap.components.filters.tag_checkboxes_filter.t30136.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30136");
});})(owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068))
;
clustermap.components.filters.tag_checkboxes_filter.t30136.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30136.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068))
;
clustermap.components.filters.tag_checkboxes_filter.t30136.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30136.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068))
;
clustermap.components.filters.tag_checkboxes_filter.t30136.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30136.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068){
return (function (state_30176){var state_val_30177 = (state_30176[(1)]);if((state_val_30177 === (7)))
{var inst_30167 = (state_30176[(2)]);var state_30176__$1 = state_30176;if(cljs.core.truth_(inst_30167))
{var statearr_30178_30209 = state_30176__$1;(statearr_30178_30209[(1)] = (11));
} else
{var statearr_30179_30210 = state_30176__$1;(statearr_30179_30210[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30177 === (1)))
{var state_30176__$1 = state_30176;var statearr_30180_30211 = state_30176__$1;(statearr_30180_30211[(2)] = null);
(statearr_30180_30211[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30177 === (4)))
{var inst_30141 = (state_30176[(7)]);var inst_30141__$1 = (state_30176[(2)]);var state_30176__$1 = (function (){var statearr_30181 = state_30176;(statearr_30181[(7)] = inst_30141__$1);
return statearr_30181;
})();if(cljs.core.truth_(inst_30141__$1))
{var statearr_30182_30212 = state_30176__$1;(statearr_30182_30212[(1)] = (5));
} else
{var statearr_30183_30213 = state_30176__$1;(statearr_30183_30213[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30177 === (13)))
{var inst_30172 = (state_30176[(2)]);var state_30176__$1 = state_30176;var statearr_30184_30214 = state_30176__$1;(statearr_30184_30214[(2)] = inst_30172);
(statearr_30184_30214[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30177 === (6)))
{var state_30176__$1 = state_30176;var statearr_30185_30215 = state_30176__$1;(statearr_30185_30215[(2)] = null);
(statearr_30185_30215[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30177 === (3)))
{var inst_30174 = (state_30176[(2)]);var state_30176__$1 = state_30176;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30176__$1,inst_30174);
} else
{if((state_val_30177 === (12)))
{var state_30176__$1 = state_30176;var statearr_30186_30216 = state_30176__$1;(statearr_30186_30216[(2)] = null);
(statearr_30186_30216[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30177 === (2)))
{var state_30176__$1 = state_30176;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30176__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30177 === (11)))
{var state_30176__$1 = state_30176;var statearr_30187_30217 = state_30176__$1;(statearr_30187_30217[(2)] = null);
(statearr_30187_30217[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30177 === (9)))
{var inst_30147 = (state_30176[(8)]);var state_30176__$1 = state_30176;var statearr_30188_30218 = state_30176__$1;(statearr_30188_30218[(2)] = inst_30147);
(statearr_30188_30218[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30177 === (5)))
{var inst_30147 = (state_30176[(8)]);var inst_30141 = (state_30176[(7)]);var inst_30144 = cljs.core.nth.call(null,inst_30141,(0),null);var inst_30145 = cljs.core.nth.call(null,inst_30141,(1),null);var inst_30147__$1 = om.core.get_props.call(null,self__.owner);var inst_30148 = cljs.core.seq_QMARK_.call(null,inst_30147__$1);var state_30176__$1 = (function (){var statearr_30189 = state_30176;(statearr_30189[(8)] = inst_30147__$1);
(statearr_30189[(9)] = inst_30145);
(statearr_30189[(10)] = inst_30144);
return statearr_30189;
})();if(inst_30148)
{var statearr_30190_30219 = state_30176__$1;(statearr_30190_30219[(1)] = (8));
} else
{var statearr_30191_30220 = state_30176__$1;(statearr_30191_30220[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30177 === (10)))
{var inst_30145 = (state_30176[(9)]);var inst_30153 = (state_30176[(2)]);var inst_30154 = cljs.core.get.call(null,inst_30153,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30155 = cljs.core.get.call(null,inst_30153,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30156 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30157 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30145];var inst_30158 = (new cljs.core.PersistentVector(null,3,(5),inst_30156,inst_30157,null));var inst_30159 = cljs.core.clj__GT_js.call(null,inst_30158);var inst_30160 = console.log(inst_30159);var inst_30161 = cljs.core.deref.call(null,inst_30154);var inst_30162 = cljs.core.deref.call(null,inst_30155);var inst_30163 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30161,inst_30162,inst_30145);var inst_30164 = om.core.update_BANG_.call(null,inst_30154,inst_30163);var state_30176__$1 = (function (){var statearr_30192 = state_30176;(statearr_30192[(11)] = inst_30164);
(statearr_30192[(12)] = inst_30160);
return statearr_30192;
})();var statearr_30193_30221 = state_30176__$1;(statearr_30193_30221[(2)] = true);
(statearr_30193_30221[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30177 === (8)))
{var inst_30147 = (state_30176[(8)]);var inst_30150 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30147);var state_30176__$1 = state_30176;var statearr_30194_30222 = state_30176__$1;(statearr_30194_30222[(2)] = inst_30150);
(statearr_30194_30222[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30198 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30198[(0)] = state_machine__9111__auto__);
(statearr_30198[(1)] = (1));
return statearr_30198;
});
var state_machine__9111__auto____1 = (function (state_30176){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30176);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30199){if((e30199 instanceof Object))
{var ex__9114__auto__ = e30199;var statearr_30200_30223 = state_30176;(statearr_30200_30223[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30176);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30199;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30224 = state_30176;
state_30176 = G__30224;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30176){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068))
})();var state__9127__auto__ = (function (){var statearr_30201 = f__9126__auto__.call(null);(statearr_30201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068))
;
clustermap.components.filters.tag_checkboxes_filter.t30136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068){
return (function (_30138){var self__ = this;
var _30138__$1 = this;return self__.meta30137;
});})(owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068))
;
clustermap.components.filters.tag_checkboxes_filter.t30136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068){
return (function (_30138,meta30137__$1){var self__ = this;
var _30138__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30136(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.output_checker30068,self__.data,self__.map30064,self__.filter_spec,self__.constructor30061,self__.input_schema30066,self__.validate__6034__auto__,self__.id,self__.G__30069,self__.input_checker30067,self__.output_schema30065,self__.ufv__,self__.map30063,meta30137__$1));
});})(owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30136 = ((function (owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068){
return (function __GT_t30136(component_spec__$1,component_filter_rq_chan__$1,owner__$1,output_checker30068__$1,data__$1,map30064__$1,filter_spec__$1,constructor30061__$1,input_schema30066__$1,validate__6034__auto____$1,id__$1,G__30069__$1,input_checker30067__$1,output_schema30065__$1,ufv____$1,map30063__$1,meta30137){return (new clustermap.components.filters.tag_checkboxes_filter.t30136(component_spec__$1,component_filter_rq_chan__$1,owner__$1,output_checker30068__$1,data__$1,map30064__$1,filter_spec__$1,constructor30061__$1,input_schema30066__$1,validate__6034__auto____$1,id__$1,G__30069__$1,input_checker30067__$1,output_schema30065__$1,ufv____$1,map30063__$1,meta30137));
});})(owner,component_filter_rq_chan,map30064,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30136(component_spec,component_filter_rq_chan,owner,output_checker30068,data,map30064,filter_spec,constructor30061,input_schema30066,validate__6034__auto__,id,G__30069,input_checker30067,output_schema30065,ufv__,map30063,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30225 = output_checker30068.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30225))
{var error__6036__auto___30226 = temp__4126__auto___30225;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30061","constructor30061",1161527184,null),cljs.core.pr_str.call(null,error__6036__auto___30226)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30226,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30065,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30065,input_schema30066,input_checker30067,output_checker30068))
,schema.core.make_fn_schema.call(null,output_schema30065,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30066], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30205){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30060,p__30202){var vec__30204 = p__30202;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30204,(0),null);return component_fnk__7881__auto___30205.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30060,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30060,var_args){
var p__30202 = null;if (arguments.length > 2) {
  p__30202 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30060,p__30202);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30227){
var data__7882__auto__ = cljs.core.first(arglist__30227);
arglist__30227 = cljs.core.next(arglist__30227);
var owner30060 = cljs.core.first(arglist__30227);
var p__30202 = cljs.core.rest(arglist__30227);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30060,p__30202);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30205))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30062){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30062);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30062){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
