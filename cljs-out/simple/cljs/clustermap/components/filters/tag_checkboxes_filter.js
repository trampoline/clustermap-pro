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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30249(s__30250){return (new cljs.core.LazySeq(null,(function (){var s__30250__$1 = s__30250;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30250__$1);if(temp__4126__auto__)
{var s__30250__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30250__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30250__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30252 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30251 = (0);while(true){
if((i__30251 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30251);cljs.core.chunk_append.call(null,b__30252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30253 = (i__30251 + (1));
i__30251 = G__30253;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30252),iter__30249.call(null,cljs.core.chunk_rest.call(null,s__30250__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30252),null);
}
} else
{var t = cljs.core.first.call(null,s__30250__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30249.call(null,cljs.core.rest.call(null,s__30250__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30254_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30254_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30255,value){var map__30257 = p__30255;var map__30257__$1 = ((cljs.core.seq_QMARK_.call(null,map__30257))?cljs.core.apply.call(null,cljs.core.hash_map,map__30257):map__30257);var component_spec = map__30257__$1;var tags = cljs.core.get.call(null,map__30257__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30257__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30258_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30258_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30260,values){var map__30262 = p__30260;var map__30262__$1 = ((cljs.core.seq_QMARK_.call(null,map__30262))?cljs.core.apply.call(null,cljs.core.hash_map,map__30262):map__30262);var component_spec = map__30262__$1;var sorted = cljs.core.get.call(null,map__30262__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30262__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30262__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30262,map__30262__$1,component_spec,sorted,tags,label){
return (function (p1__30259_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30259_SHARP_));
});})(values__$1,map__30262,map__30262__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30263,values){var map__30265 = p__30263;var map__30265__$1 = ((cljs.core.seq_QMARK_.call(null,map__30265))?cljs.core.apply.call(null,cljs.core.hash_map,map__30265):map__30265);var component_spec = map__30265__$1;var tags = cljs.core.get.call(null,map__30265__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30265__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30266){var map__30268 = p__30266;var map__30268__$1 = ((cljs.core.seq_QMARK_.call(null,map__30268))?cljs.core.apply.call(null,cljs.core.hash_map,map__30268):map__30268);var component_spec = map__30268__$1;var tags = cljs.core.get.call(null,map__30268__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30268__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30269){var map__30271 = p__30269;var map__30271__$1 = ((cljs.core.seq_QMARK_.call(null,map__30271))?cljs.core.apply.call(null,cljs.core.hash_map,map__30271):map__30271);var component_spec = map__30271__$1;var tags = cljs.core.get.call(null,map__30271__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30271__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30273 = schema.core.Any;var input_schema30274 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30272","map30272",80142231,null))], null);var input_checker30275 = schema.core.checker.call(null,input_schema30274);var output_checker30276 = schema.core.checker.call(null,output_schema30273);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276){
return (function render_STAR_(G__30277){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30312 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30277], null);var temp__4126__auto___30313 = input_checker30275.call(null,args__6035__auto___30312);if(cljs.core.truth_(temp__4126__auto___30313))
{var error__6036__auto___30314 = temp__4126__auto___30313;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30314)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30314,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30312,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30274,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30272 = G__30277;while(true){
if(cljs.core.map_QMARK_.call(null,map30272))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30272)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30272,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30272,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30295 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30295))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30295)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30295))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276){
return (function iter__30296(s__30297){return (new cljs.core.LazySeq(null,((function (attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276){
return (function (){var s__30297__$1 = s__30297;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30297__$1);if(temp__4126__auto__)
{var s__30297__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30297__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30297__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30299 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30298 = (0);while(true){
if((i__30298 < size__4376__auto__))
{var map__30302 = cljs.core._nth.call(null,c__4375__auto__,i__30298);var map__30302__$1 = ((cljs.core.seq_QMARK_.call(null,map__30302))?cljs.core.apply.call(null,cljs.core.hash_map,map__30302):map__30302);var label__$1 = cljs.core.get.call(null,map__30302__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30302__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30299,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30298,map__30302,map__30302__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30299,s__30297__$2,temp__4126__auto__,attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30298,map__30302,map__30302__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30299,s__30297__$2,temp__4126__auto__,attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30315 = (i__30298 + (1));
i__30298 = G__30315;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30299),iter__30296.call(null,cljs.core.chunk_rest.call(null,s__30297__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30299),null);
}
} else
{var map__30303 = cljs.core.first.call(null,s__30297__$2);var map__30303__$1 = ((cljs.core.seq_QMARK_.call(null,map__30303))?cljs.core.apply.call(null,cljs.core.hash_map,map__30303):map__30303);var label__$1 = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30303,map__30303__$1,label__$1,value,s__30297__$2,temp__4126__auto__,attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30303,map__30303__$1,label__$1,value,s__30297__$2,temp__4126__auto__,attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30296.call(null,cljs.core.rest.call(null,s__30297__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276))
,null,null));
});})(attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30295),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276){
return (function iter__30304(s__30305){return (new cljs.core.LazySeq(null,((function (attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276){
return (function (){var s__30305__$1 = s__30305;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30305__$1);if(temp__4126__auto__)
{var s__30305__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30305__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30305__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30307 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30306 = (0);while(true){
if((i__30306 < size__4376__auto__))
{var map__30310 = cljs.core._nth.call(null,c__4375__auto__,i__30306);var map__30310__$1 = ((cljs.core.seq_QMARK_.call(null,map__30310))?cljs.core.apply.call(null,cljs.core.hash_map,map__30310):map__30310);var label__$1 = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30310__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30307,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30306,map__30310,map__30310__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30307,s__30305__$2,temp__4126__auto__,attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30306,map__30310,map__30310__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30307,s__30305__$2,temp__4126__auto__,attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30316 = (i__30306 + (1));
i__30306 = G__30316;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30307),iter__30304.call(null,cljs.core.chunk_rest.call(null,s__30305__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30307),null);
}
} else
{var map__30311 = cljs.core.first.call(null,s__30305__$2);var map__30311__$1 = ((cljs.core.seq_QMARK_.call(null,map__30311))?cljs.core.apply.call(null,cljs.core.hash_map,map__30311):map__30311);var label__$1 = cljs.core.get.call(null,map__30311__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30311__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30311,map__30311__$1,label__$1,value,s__30305__$2,temp__4126__auto__,attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30311,map__30311__$1,label__$1,value,s__30305__$2,temp__4126__auto__,attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30304.call(null,cljs.core.rest.call(null,s__30305__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276))
,null,null));
});})(attrs30295,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30317 = output_checker30276.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30317))
{var error__6036__auto___30318 = temp__4126__auto___30317;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30318)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30318,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30273,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30273,input_schema30274,input_checker30275,output_checker30276))
,schema.core.make_fn_schema.call(null,output_schema30273,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30274], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30464 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30324 = schema.core.Any;var input_schema30325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30322","map30322",258675313,null))], null);var input_checker30326 = schema.core.checker.call(null,input_schema30325);var output_checker30327 = schema.core.checker.call(null,output_schema30324);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327){
return (function constructor30320(G__30328){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30465 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30328], null);var temp__4126__auto___30466 = input_checker30326.call(null,args__6035__auto___30465);if(cljs.core.truth_(temp__4126__auto___30466))
{var error__6036__auto___30467 = temp__4126__auto___30466;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30320","constructor30320",774240918,null),cljs.core.pr_str.call(null,error__6036__auto___30467)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30467,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30465,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30325,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30322 = G__30328;while(true){
if(cljs.core.map_QMARK_.call(null,map30322))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30322)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30322,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30323 = plumbing.fnk.schema.safe_get.call(null,map30322,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30323,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30322,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30395 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30395 = (function (component_spec,component_filter_rq_chan,owner,input_schema30325,data,output_checker30327,filter_spec,map30322,map30323,constructor30320,output_schema30324,input_checker30326,validate__6034__auto__,id,G__30328,ufv__,meta30396){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.input_schema30325 = input_schema30325;
this.data = data;
this.output_checker30327 = output_checker30327;
this.filter_spec = filter_spec;
this.map30322 = map30322;
this.map30323 = map30323;
this.constructor30320 = constructor30320;
this.output_schema30324 = output_schema30324;
this.input_checker30326 = input_checker30326;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__30328 = G__30328;
this.ufv__ = ufv__;
this.meta30396 = meta30396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30395.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30395.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30395";
clustermap.components.filters.tag_checkboxes_filter.t30395.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30395");
});})(owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327))
;
clustermap.components.filters.tag_checkboxes_filter.t30395.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30395.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327))
;
clustermap.components.filters.tag_checkboxes_filter.t30395.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30395.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327))
;
clustermap.components.filters.tag_checkboxes_filter.t30395.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30395.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327){
return (function (state_30435){var state_val_30436 = (state_30435[(1)]);if((state_val_30436 === (7)))
{var inst_30426 = (state_30435[(2)]);var state_30435__$1 = state_30435;if(cljs.core.truth_(inst_30426))
{var statearr_30437_30468 = state_30435__$1;(statearr_30437_30468[(1)] = (11));
} else
{var statearr_30438_30469 = state_30435__$1;(statearr_30438_30469[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30436 === (1)))
{var state_30435__$1 = state_30435;var statearr_30439_30470 = state_30435__$1;(statearr_30439_30470[(2)] = null);
(statearr_30439_30470[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30436 === (4)))
{var inst_30400 = (state_30435[(7)]);var inst_30400__$1 = (state_30435[(2)]);var state_30435__$1 = (function (){var statearr_30440 = state_30435;(statearr_30440[(7)] = inst_30400__$1);
return statearr_30440;
})();if(cljs.core.truth_(inst_30400__$1))
{var statearr_30441_30471 = state_30435__$1;(statearr_30441_30471[(1)] = (5));
} else
{var statearr_30442_30472 = state_30435__$1;(statearr_30442_30472[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30436 === (13)))
{var inst_30431 = (state_30435[(2)]);var state_30435__$1 = state_30435;var statearr_30443_30473 = state_30435__$1;(statearr_30443_30473[(2)] = inst_30431);
(statearr_30443_30473[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30436 === (6)))
{var state_30435__$1 = state_30435;var statearr_30444_30474 = state_30435__$1;(statearr_30444_30474[(2)] = null);
(statearr_30444_30474[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30436 === (3)))
{var inst_30433 = (state_30435[(2)]);var state_30435__$1 = state_30435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30435__$1,inst_30433);
} else
{if((state_val_30436 === (12)))
{var state_30435__$1 = state_30435;var statearr_30445_30475 = state_30435__$1;(statearr_30445_30475[(2)] = null);
(statearr_30445_30475[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30436 === (2)))
{var state_30435__$1 = state_30435;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30435__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30436 === (11)))
{var state_30435__$1 = state_30435;var statearr_30446_30476 = state_30435__$1;(statearr_30446_30476[(2)] = null);
(statearr_30446_30476[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30436 === (9)))
{var inst_30406 = (state_30435[(8)]);var state_30435__$1 = state_30435;var statearr_30447_30477 = state_30435__$1;(statearr_30447_30477[(2)] = inst_30406);
(statearr_30447_30477[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30436 === (5)))
{var inst_30400 = (state_30435[(7)]);var inst_30406 = (state_30435[(8)]);var inst_30403 = cljs.core.nth.call(null,inst_30400,(0),null);var inst_30404 = cljs.core.nth.call(null,inst_30400,(1),null);var inst_30406__$1 = om.core.get_props.call(null,self__.owner);var inst_30407 = cljs.core.seq_QMARK_.call(null,inst_30406__$1);var state_30435__$1 = (function (){var statearr_30448 = state_30435;(statearr_30448[(9)] = inst_30404);
(statearr_30448[(10)] = inst_30403);
(statearr_30448[(8)] = inst_30406__$1);
return statearr_30448;
})();if(inst_30407)
{var statearr_30449_30478 = state_30435__$1;(statearr_30449_30478[(1)] = (8));
} else
{var statearr_30450_30479 = state_30435__$1;(statearr_30450_30479[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30436 === (10)))
{var inst_30404 = (state_30435[(9)]);var inst_30412 = (state_30435[(2)]);var inst_30413 = cljs.core.get.call(null,inst_30412,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30414 = cljs.core.get.call(null,inst_30412,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30415 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30416 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30404];var inst_30417 = (new cljs.core.PersistentVector(null,3,(5),inst_30415,inst_30416,null));var inst_30418 = cljs.core.clj__GT_js.call(null,inst_30417);var inst_30419 = console.log(inst_30418);var inst_30420 = cljs.core.deref.call(null,inst_30413);var inst_30421 = cljs.core.deref.call(null,inst_30414);var inst_30422 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30420,inst_30421,inst_30404);var inst_30423 = om.core.update_BANG_.call(null,inst_30413,inst_30422);var state_30435__$1 = (function (){var statearr_30451 = state_30435;(statearr_30451[(11)] = inst_30423);
(statearr_30451[(12)] = inst_30419);
return statearr_30451;
})();var statearr_30452_30480 = state_30435__$1;(statearr_30452_30480[(2)] = true);
(statearr_30452_30480[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30436 === (8)))
{var inst_30406 = (state_30435[(8)]);var inst_30409 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30406);var state_30435__$1 = state_30435;var statearr_30453_30481 = state_30435__$1;(statearr_30453_30481[(2)] = inst_30409);
(statearr_30453_30481[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30457 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30457[(0)] = state_machine__9111__auto__);
(statearr_30457[(1)] = (1));
return statearr_30457;
});
var state_machine__9111__auto____1 = (function (state_30435){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30435);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30458){if((e30458 instanceof Object))
{var ex__9114__auto__ = e30458;var statearr_30459_30482 = state_30435;(statearr_30459_30482[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30435);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30458;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30483 = state_30435;
state_30435 = G__30483;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30435){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327))
})();var state__9127__auto__ = (function (){var statearr_30460 = f__9126__auto__.call(null);(statearr_30460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327))
;
clustermap.components.filters.tag_checkboxes_filter.t30395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327){
return (function (_30397){var self__ = this;
var _30397__$1 = this;return self__.meta30396;
});})(owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327))
;
clustermap.components.filters.tag_checkboxes_filter.t30395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327){
return (function (_30397,meta30396__$1){var self__ = this;
var _30397__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30395(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.input_schema30325,self__.data,self__.output_checker30327,self__.filter_spec,self__.map30322,self__.map30323,self__.constructor30320,self__.output_schema30324,self__.input_checker30326,self__.validate__6034__auto__,self__.id,self__.G__30328,self__.ufv__,meta30396__$1));
});})(owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30395 = ((function (owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327){
return (function __GT_t30395(component_spec__$1,component_filter_rq_chan__$1,owner__$1,input_schema30325__$1,data__$1,output_checker30327__$1,filter_spec__$1,map30322__$1,map30323__$1,constructor30320__$1,output_schema30324__$1,input_checker30326__$1,validate__6034__auto____$1,id__$1,G__30328__$1,ufv____$1,meta30396){return (new clustermap.components.filters.tag_checkboxes_filter.t30395(component_spec__$1,component_filter_rq_chan__$1,owner__$1,input_schema30325__$1,data__$1,output_checker30327__$1,filter_spec__$1,map30322__$1,map30323__$1,constructor30320__$1,output_schema30324__$1,input_checker30326__$1,validate__6034__auto____$1,id__$1,G__30328__$1,ufv____$1,meta30396));
});})(owner,component_filter_rq_chan,map30323,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30395(component_spec,component_filter_rq_chan,owner,input_schema30325,data,output_checker30327,filter_spec,map30322,map30323,constructor30320,output_schema30324,input_checker30326,validate__6034__auto__,id,G__30328,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30484 = output_checker30327.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30484))
{var error__6036__auto___30485 = temp__4126__auto___30484;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30320","constructor30320",774240918,null),cljs.core.pr_str.call(null,error__6036__auto___30485)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30485,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30324,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30324,input_schema30325,input_checker30326,output_checker30327))
,schema.core.make_fn_schema.call(null,output_schema30324,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30325], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30464){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30319,p__30461){var vec__30463 = p__30461;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30463,(0),null);return component_fnk__7881__auto___30464.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30319,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30319,var_args){
var p__30461 = null;if (arguments.length > 2) {
  p__30461 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30319,p__30461);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30486){
var data__7882__auto__ = cljs.core.first(arglist__30486);
arglist__30486 = cljs.core.next(arglist__30486);
var owner30319 = cljs.core.first(arglist__30486);
var p__30461 = cljs.core.rest(arglist__30486);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30319,p__30461);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30464))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30321){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30321);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30321){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
