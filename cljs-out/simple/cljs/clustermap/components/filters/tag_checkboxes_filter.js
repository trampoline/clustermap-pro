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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30143(s__30144){return (new cljs.core.LazySeq(null,(function (){var s__30144__$1 = s__30144;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30144__$1);if(temp__4126__auto__)
{var s__30144__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30144__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30144__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30146 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30145 = (0);while(true){
if((i__30145 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30145);cljs.core.chunk_append.call(null,b__30146,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30147 = (i__30145 + (1));
i__30145 = G__30147;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30146),iter__30143.call(null,cljs.core.chunk_rest.call(null,s__30144__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30146),null);
}
} else
{var t = cljs.core.first.call(null,s__30144__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30143.call(null,cljs.core.rest.call(null,s__30144__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30148_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30148_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30149,value){var map__30151 = p__30149;var map__30151__$1 = ((cljs.core.seq_QMARK_.call(null,map__30151))?cljs.core.apply.call(null,cljs.core.hash_map,map__30151):map__30151);var component_spec = map__30151__$1;var tags = cljs.core.get.call(null,map__30151__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30151__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30152_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30152_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30154,values){var map__30156 = p__30154;var map__30156__$1 = ((cljs.core.seq_QMARK_.call(null,map__30156))?cljs.core.apply.call(null,cljs.core.hash_map,map__30156):map__30156);var component_spec = map__30156__$1;var sorted = cljs.core.get.call(null,map__30156__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30156__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30156__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30156,map__30156__$1,component_spec,sorted,tags,label){
return (function (p1__30153_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30153_SHARP_));
});})(values__$1,map__30156,map__30156__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30157,values){var map__30159 = p__30157;var map__30159__$1 = ((cljs.core.seq_QMARK_.call(null,map__30159))?cljs.core.apply.call(null,cljs.core.hash_map,map__30159):map__30159);var component_spec = map__30159__$1;var tags = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30160){var map__30162 = p__30160;var map__30162__$1 = ((cljs.core.seq_QMARK_.call(null,map__30162))?cljs.core.apply.call(null,cljs.core.hash_map,map__30162):map__30162);var component_spec = map__30162__$1;var tags = cljs.core.get.call(null,map__30162__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30162__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30163){var map__30165 = p__30163;var map__30165__$1 = ((cljs.core.seq_QMARK_.call(null,map__30165))?cljs.core.apply.call(null,cljs.core.hash_map,map__30165):map__30165);var component_spec = map__30165__$1;var tags = cljs.core.get.call(null,map__30165__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30165__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30167 = schema.core.Any;var input_schema30168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30166","map30166",1614041986,null))], null);var input_checker30169 = schema.core.checker.call(null,input_schema30168);var output_checker30170 = schema.core.checker.call(null,output_schema30167);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170){
return (function render_STAR_(G__30171){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30171], null);var temp__4126__auto___30207 = input_checker30169.call(null,args__6035__auto___30206);if(cljs.core.truth_(temp__4126__auto___30207))
{var error__6036__auto___30208 = temp__4126__auto___30207;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30208)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30208,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30206,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30168,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30166 = G__30171;while(true){
if(cljs.core.map_QMARK_.call(null,map30166))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30166)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30166,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30166,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30189 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30189))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30189)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30189))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170){
return (function iter__30190(s__30191){return (new cljs.core.LazySeq(null,((function (attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170){
return (function (){var s__30191__$1 = s__30191;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30191__$1);if(temp__4126__auto__)
{var s__30191__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30191__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30191__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30193 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30192 = (0);while(true){
if((i__30192 < size__4376__auto__))
{var map__30196 = cljs.core._nth.call(null,c__4375__auto__,i__30192);var map__30196__$1 = ((cljs.core.seq_QMARK_.call(null,map__30196))?cljs.core.apply.call(null,cljs.core.hash_map,map__30196):map__30196);var label__$1 = cljs.core.get.call(null,map__30196__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30196__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30193,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30192,map__30196,map__30196__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30193,s__30191__$2,temp__4126__auto__,attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30192,map__30196,map__30196__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30193,s__30191__$2,temp__4126__auto__,attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30209 = (i__30192 + (1));
i__30192 = G__30209;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30193),iter__30190.call(null,cljs.core.chunk_rest.call(null,s__30191__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30193),null);
}
} else
{var map__30197 = cljs.core.first.call(null,s__30191__$2);var map__30197__$1 = ((cljs.core.seq_QMARK_.call(null,map__30197))?cljs.core.apply.call(null,cljs.core.hash_map,map__30197):map__30197);var label__$1 = cljs.core.get.call(null,map__30197__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30197__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30197,map__30197__$1,label__$1,value,s__30191__$2,temp__4126__auto__,attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30197,map__30197__$1,label__$1,value,s__30191__$2,temp__4126__auto__,attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30190.call(null,cljs.core.rest.call(null,s__30191__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170))
,null,null));
});})(attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30189),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170){
return (function iter__30198(s__30199){return (new cljs.core.LazySeq(null,((function (attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170){
return (function (){var s__30199__$1 = s__30199;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30199__$1);if(temp__4126__auto__)
{var s__30199__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30199__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30199__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30201 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30200 = (0);while(true){
if((i__30200 < size__4376__auto__))
{var map__30204 = cljs.core._nth.call(null,c__4375__auto__,i__30200);var map__30204__$1 = ((cljs.core.seq_QMARK_.call(null,map__30204))?cljs.core.apply.call(null,cljs.core.hash_map,map__30204):map__30204);var label__$1 = cljs.core.get.call(null,map__30204__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30204__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30201,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30200,map__30204,map__30204__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30201,s__30199__$2,temp__4126__auto__,attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30200,map__30204,map__30204__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30201,s__30199__$2,temp__4126__auto__,attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30210 = (i__30200 + (1));
i__30200 = G__30210;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30201),iter__30198.call(null,cljs.core.chunk_rest.call(null,s__30199__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30201),null);
}
} else
{var map__30205 = cljs.core.first.call(null,s__30199__$2);var map__30205__$1 = ((cljs.core.seq_QMARK_.call(null,map__30205))?cljs.core.apply.call(null,cljs.core.hash_map,map__30205):map__30205);var label__$1 = cljs.core.get.call(null,map__30205__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30205__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30205,map__30205__$1,label__$1,value,s__30199__$2,temp__4126__auto__,attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30205,map__30205__$1,label__$1,value,s__30199__$2,temp__4126__auto__,attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30198.call(null,cljs.core.rest.call(null,s__30199__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170))
,null,null));
});})(attrs30189,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30211 = output_checker30170.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30211))
{var error__6036__auto___30212 = temp__4126__auto___30211;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30212)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30212,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30167,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30167,input_schema30168,input_checker30169,output_checker30170))
,schema.core.make_fn_schema.call(null,output_schema30167,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30168], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30358 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30218 = schema.core.Any;var input_schema30219 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30216","map30216",-852631949,null))], null);var input_checker30220 = schema.core.checker.call(null,input_schema30219);var output_checker30221 = schema.core.checker.call(null,output_schema30218);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221){
return (function constructor30214(G__30222){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30359 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30222], null);var temp__4126__auto___30360 = input_checker30220.call(null,args__6035__auto___30359);if(cljs.core.truth_(temp__4126__auto___30360))
{var error__6036__auto___30361 = temp__4126__auto___30360;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30214","constructor30214",-1711133281,null),cljs.core.pr_str.call(null,error__6036__auto___30361)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30361,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30359,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30219,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30216 = G__30222;while(true){
if(cljs.core.map_QMARK_.call(null,map30216))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30216)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30216,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30217 = plumbing.fnk.schema.safe_get.call(null,map30216,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30217,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30216,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30289 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30289 = (function (component_spec,component_filter_rq_chan,owner,input_checker30220,data,output_schema30218,input_schema30219,filter_spec,map30216,output_checker30221,map30217,validate__6034__auto__,id,G__30222,ufv__,constructor30214,meta30290){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.input_checker30220 = input_checker30220;
this.data = data;
this.output_schema30218 = output_schema30218;
this.input_schema30219 = input_schema30219;
this.filter_spec = filter_spec;
this.map30216 = map30216;
this.output_checker30221 = output_checker30221;
this.map30217 = map30217;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__30222 = G__30222;
this.ufv__ = ufv__;
this.constructor30214 = constructor30214;
this.meta30290 = meta30290;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30289.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30289.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30289";
clustermap.components.filters.tag_checkboxes_filter.t30289.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30289");
});})(owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221))
;
clustermap.components.filters.tag_checkboxes_filter.t30289.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30289.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221))
;
clustermap.components.filters.tag_checkboxes_filter.t30289.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30289.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221))
;
clustermap.components.filters.tag_checkboxes_filter.t30289.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30289.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221){
return (function (state_30329){var state_val_30330 = (state_30329[(1)]);if((state_val_30330 === (7)))
{var inst_30320 = (state_30329[(2)]);var state_30329__$1 = state_30329;if(cljs.core.truth_(inst_30320))
{var statearr_30331_30362 = state_30329__$1;(statearr_30331_30362[(1)] = (11));
} else
{var statearr_30332_30363 = state_30329__$1;(statearr_30332_30363[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30330 === (1)))
{var state_30329__$1 = state_30329;var statearr_30333_30364 = state_30329__$1;(statearr_30333_30364[(2)] = null);
(statearr_30333_30364[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30330 === (4)))
{var inst_30294 = (state_30329[(7)]);var inst_30294__$1 = (state_30329[(2)]);var state_30329__$1 = (function (){var statearr_30334 = state_30329;(statearr_30334[(7)] = inst_30294__$1);
return statearr_30334;
})();if(cljs.core.truth_(inst_30294__$1))
{var statearr_30335_30365 = state_30329__$1;(statearr_30335_30365[(1)] = (5));
} else
{var statearr_30336_30366 = state_30329__$1;(statearr_30336_30366[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30330 === (13)))
{var inst_30325 = (state_30329[(2)]);var state_30329__$1 = state_30329;var statearr_30337_30367 = state_30329__$1;(statearr_30337_30367[(2)] = inst_30325);
(statearr_30337_30367[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30330 === (6)))
{var state_30329__$1 = state_30329;var statearr_30338_30368 = state_30329__$1;(statearr_30338_30368[(2)] = null);
(statearr_30338_30368[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30330 === (3)))
{var inst_30327 = (state_30329[(2)]);var state_30329__$1 = state_30329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30329__$1,inst_30327);
} else
{if((state_val_30330 === (12)))
{var state_30329__$1 = state_30329;var statearr_30339_30369 = state_30329__$1;(statearr_30339_30369[(2)] = null);
(statearr_30339_30369[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30330 === (2)))
{var state_30329__$1 = state_30329;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30329__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30330 === (11)))
{var state_30329__$1 = state_30329;var statearr_30340_30370 = state_30329__$1;(statearr_30340_30370[(2)] = null);
(statearr_30340_30370[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30330 === (9)))
{var inst_30300 = (state_30329[(8)]);var state_30329__$1 = state_30329;var statearr_30341_30371 = state_30329__$1;(statearr_30341_30371[(2)] = inst_30300);
(statearr_30341_30371[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30330 === (5)))
{var inst_30300 = (state_30329[(8)]);var inst_30294 = (state_30329[(7)]);var inst_30297 = cljs.core.nth.call(null,inst_30294,(0),null);var inst_30298 = cljs.core.nth.call(null,inst_30294,(1),null);var inst_30300__$1 = om.core.get_props.call(null,self__.owner);var inst_30301 = cljs.core.seq_QMARK_.call(null,inst_30300__$1);var state_30329__$1 = (function (){var statearr_30342 = state_30329;(statearr_30342[(9)] = inst_30297);
(statearr_30342[(8)] = inst_30300__$1);
(statearr_30342[(10)] = inst_30298);
return statearr_30342;
})();if(inst_30301)
{var statearr_30343_30372 = state_30329__$1;(statearr_30343_30372[(1)] = (8));
} else
{var statearr_30344_30373 = state_30329__$1;(statearr_30344_30373[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30330 === (10)))
{var inst_30298 = (state_30329[(10)]);var inst_30306 = (state_30329[(2)]);var inst_30307 = cljs.core.get.call(null,inst_30306,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30308 = cljs.core.get.call(null,inst_30306,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30309 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30310 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30298];var inst_30311 = (new cljs.core.PersistentVector(null,3,(5),inst_30309,inst_30310,null));var inst_30312 = cljs.core.clj__GT_js.call(null,inst_30311);var inst_30313 = console.log(inst_30312);var inst_30314 = cljs.core.deref.call(null,inst_30307);var inst_30315 = cljs.core.deref.call(null,inst_30308);var inst_30316 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30314,inst_30315,inst_30298);var inst_30317 = om.core.update_BANG_.call(null,inst_30307,inst_30316);var state_30329__$1 = (function (){var statearr_30345 = state_30329;(statearr_30345[(11)] = inst_30317);
(statearr_30345[(12)] = inst_30313);
return statearr_30345;
})();var statearr_30346_30374 = state_30329__$1;(statearr_30346_30374[(2)] = true);
(statearr_30346_30374[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30330 === (8)))
{var inst_30300 = (state_30329[(8)]);var inst_30303 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30300);var state_30329__$1 = state_30329;var statearr_30347_30375 = state_30329__$1;(statearr_30347_30375[(2)] = inst_30303);
(statearr_30347_30375[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30351 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30351[(0)] = state_machine__9111__auto__);
(statearr_30351[(1)] = (1));
return statearr_30351;
});
var state_machine__9111__auto____1 = (function (state_30329){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30329);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30352){if((e30352 instanceof Object))
{var ex__9114__auto__ = e30352;var statearr_30353_30376 = state_30329;(statearr_30353_30376[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30329);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30352;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30377 = state_30329;
state_30329 = G__30377;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30329){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221))
})();var state__9127__auto__ = (function (){var statearr_30354 = f__9126__auto__.call(null);(statearr_30354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30354;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221))
;
clustermap.components.filters.tag_checkboxes_filter.t30289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221){
return (function (_30291){var self__ = this;
var _30291__$1 = this;return self__.meta30290;
});})(owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221))
;
clustermap.components.filters.tag_checkboxes_filter.t30289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221){
return (function (_30291,meta30290__$1){var self__ = this;
var _30291__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30289(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.input_checker30220,self__.data,self__.output_schema30218,self__.input_schema30219,self__.filter_spec,self__.map30216,self__.output_checker30221,self__.map30217,self__.validate__6034__auto__,self__.id,self__.G__30222,self__.ufv__,self__.constructor30214,meta30290__$1));
});})(owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30289 = ((function (owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221){
return (function __GT_t30289(component_spec__$1,component_filter_rq_chan__$1,owner__$1,input_checker30220__$1,data__$1,output_schema30218__$1,input_schema30219__$1,filter_spec__$1,map30216__$1,output_checker30221__$1,map30217__$1,validate__6034__auto____$1,id__$1,G__30222__$1,ufv____$1,constructor30214__$1,meta30290){return (new clustermap.components.filters.tag_checkboxes_filter.t30289(component_spec__$1,component_filter_rq_chan__$1,owner__$1,input_checker30220__$1,data__$1,output_schema30218__$1,input_schema30219__$1,filter_spec__$1,map30216__$1,output_checker30221__$1,map30217__$1,validate__6034__auto____$1,id__$1,G__30222__$1,ufv____$1,constructor30214__$1,meta30290));
});})(owner,component_filter_rq_chan,map30217,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30289(component_spec,component_filter_rq_chan,owner,input_checker30220,data,output_schema30218,input_schema30219,filter_spec,map30216,output_checker30221,map30217,validate__6034__auto__,id,G__30222,ufv__,constructor30214,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30378 = output_checker30221.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30378))
{var error__6036__auto___30379 = temp__4126__auto___30378;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30214","constructor30214",-1711133281,null),cljs.core.pr_str.call(null,error__6036__auto___30379)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30379,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30218,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30218,input_schema30219,input_checker30220,output_checker30221))
,schema.core.make_fn_schema.call(null,output_schema30218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30219], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30358){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30213,p__30355){var vec__30357 = p__30355;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30357,(0),null);return component_fnk__7881__auto___30358.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30213,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30213,var_args){
var p__30355 = null;if (arguments.length > 2) {
  p__30355 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30213,p__30355);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30380){
var data__7882__auto__ = cljs.core.first(arglist__30380);
arglist__30380 = cljs.core.next(arglist__30380);
var owner30213 = cljs.core.first(arglist__30380);
var p__30355 = cljs.core.rest(arglist__30380);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30213,p__30355);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30358))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30215){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30215);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30215){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
