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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30157(s__30158){return (new cljs.core.LazySeq(null,(function (){var s__30158__$1 = s__30158;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30158__$1);if(temp__4126__auto__)
{var s__30158__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30158__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30158__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30160 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30159 = (0);while(true){
if((i__30159 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30159);cljs.core.chunk_append.call(null,b__30160,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30161 = (i__30159 + (1));
i__30159 = G__30161;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30160),iter__30157.call(null,cljs.core.chunk_rest.call(null,s__30158__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30160),null);
}
} else
{var t = cljs.core.first.call(null,s__30158__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30157.call(null,cljs.core.rest.call(null,s__30158__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30162_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30162_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30163,value){var map__30165 = p__30163;var map__30165__$1 = ((cljs.core.seq_QMARK_.call(null,map__30165))?cljs.core.apply.call(null,cljs.core.hash_map,map__30165):map__30165);var component_spec = map__30165__$1;var tags = cljs.core.get.call(null,map__30165__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30165__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30166_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30166_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30168,values){var map__30170 = p__30168;var map__30170__$1 = ((cljs.core.seq_QMARK_.call(null,map__30170))?cljs.core.apply.call(null,cljs.core.hash_map,map__30170):map__30170);var component_spec = map__30170__$1;var sorted = cljs.core.get.call(null,map__30170__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30170__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30170__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30170,map__30170__$1,component_spec,sorted,tags,label){
return (function (p1__30167_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30167_SHARP_));
});})(values__$1,map__30170,map__30170__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30171,values){var map__30173 = p__30171;var map__30173__$1 = ((cljs.core.seq_QMARK_.call(null,map__30173))?cljs.core.apply.call(null,cljs.core.hash_map,map__30173):map__30173);var component_spec = map__30173__$1;var tags = cljs.core.get.call(null,map__30173__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30173__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30174){var map__30176 = p__30174;var map__30176__$1 = ((cljs.core.seq_QMARK_.call(null,map__30176))?cljs.core.apply.call(null,cljs.core.hash_map,map__30176):map__30176);var component_spec = map__30176__$1;var tags = cljs.core.get.call(null,map__30176__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30176__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30177){var map__30179 = p__30177;var map__30179__$1 = ((cljs.core.seq_QMARK_.call(null,map__30179))?cljs.core.apply.call(null,cljs.core.hash_map,map__30179):map__30179);var component_spec = map__30179__$1;var tags = cljs.core.get.call(null,map__30179__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30179__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30181 = schema.core.Any;var input_schema30182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30180","map30180",-1644373102,null))], null);var input_checker30183 = schema.core.checker.call(null,input_schema30182);var output_checker30184 = schema.core.checker.call(null,output_schema30181);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function render_STAR_(G__30185){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30220 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30185], null);var temp__4126__auto___30221 = input_checker30183.call(null,args__6035__auto___30220);if(cljs.core.truth_(temp__4126__auto___30221))
{var error__6036__auto___30222 = temp__4126__auto___30221;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30222)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30222,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30220,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30182,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30180 = G__30185;while(true){
if(cljs.core.map_QMARK_.call(null,map30180))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30180)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30180,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30180,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30203 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30203))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30203)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30203))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function iter__30204(s__30205){return (new cljs.core.LazySeq(null,((function (attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function (){var s__30205__$1 = s__30205;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30205__$1);if(temp__4126__auto__)
{var s__30205__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30205__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30205__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30207 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30206 = (0);while(true){
if((i__30206 < size__4376__auto__))
{var map__30210 = cljs.core._nth.call(null,c__4375__auto__,i__30206);var map__30210__$1 = ((cljs.core.seq_QMARK_.call(null,map__30210))?cljs.core.apply.call(null,cljs.core.hash_map,map__30210):map__30210);var label__$1 = cljs.core.get.call(null,map__30210__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30210__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30207,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30206,map__30210,map__30210__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30207,s__30205__$2,temp__4126__auto__,attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30206,map__30210,map__30210__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30207,s__30205__$2,temp__4126__auto__,attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30223 = (i__30206 + (1));
i__30206 = G__30223;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30207),iter__30204.call(null,cljs.core.chunk_rest.call(null,s__30205__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30207),null);
}
} else
{var map__30211 = cljs.core.first.call(null,s__30205__$2);var map__30211__$1 = ((cljs.core.seq_QMARK_.call(null,map__30211))?cljs.core.apply.call(null,cljs.core.hash_map,map__30211):map__30211);var label__$1 = cljs.core.get.call(null,map__30211__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30211__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30211,map__30211__$1,label__$1,value,s__30205__$2,temp__4126__auto__,attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30211,map__30211__$1,label__$1,value,s__30205__$2,temp__4126__auto__,attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30204.call(null,cljs.core.rest.call(null,s__30205__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
,null,null));
});})(attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30203),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function iter__30212(s__30213){return (new cljs.core.LazySeq(null,((function (attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function (){var s__30213__$1 = s__30213;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30213__$1);if(temp__4126__auto__)
{var s__30213__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30213__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30213__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30215 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30214 = (0);while(true){
if((i__30214 < size__4376__auto__))
{var map__30218 = cljs.core._nth.call(null,c__4375__auto__,i__30214);var map__30218__$1 = ((cljs.core.seq_QMARK_.call(null,map__30218))?cljs.core.apply.call(null,cljs.core.hash_map,map__30218):map__30218);var label__$1 = cljs.core.get.call(null,map__30218__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30218__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30215,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30214,map__30218,map__30218__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30215,s__30213__$2,temp__4126__auto__,attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30214,map__30218,map__30218__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30215,s__30213__$2,temp__4126__auto__,attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30224 = (i__30214 + (1));
i__30214 = G__30224;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30215),iter__30212.call(null,cljs.core.chunk_rest.call(null,s__30213__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30215),null);
}
} else
{var map__30219 = cljs.core.first.call(null,s__30213__$2);var map__30219__$1 = ((cljs.core.seq_QMARK_.call(null,map__30219))?cljs.core.apply.call(null,cljs.core.hash_map,map__30219):map__30219);var label__$1 = cljs.core.get.call(null,map__30219__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30219__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30219,map__30219__$1,label__$1,value,s__30213__$2,temp__4126__auto__,attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30219,map__30219__$1,label__$1,value,s__30213__$2,temp__4126__auto__,attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30212.call(null,cljs.core.rest.call(null,s__30213__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
,null,null));
});})(attrs30203,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30225 = output_checker30184.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30225))
{var error__6036__auto___30226 = temp__4126__auto___30225;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30226)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30226,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30181,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
,schema.core.make_fn_schema.call(null,output_schema30181,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30182], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30372 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30232 = schema.core.Any;var input_schema30233 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30230","map30230",-430295827,null))], null);var input_checker30234 = schema.core.checker.call(null,input_schema30233);var output_checker30235 = schema.core.checker.call(null,output_schema30232);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235){
return (function constructor30228(G__30236){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30236], null);var temp__4126__auto___30374 = input_checker30234.call(null,args__6035__auto___30373);if(cljs.core.truth_(temp__4126__auto___30374))
{var error__6036__auto___30375 = temp__4126__auto___30374;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30228","constructor30228",910926810,null),cljs.core.pr_str.call(null,error__6036__auto___30375)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30375,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30373,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30233,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30230 = G__30236;while(true){
if(cljs.core.map_QMARK_.call(null,map30230))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30230)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30230,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30231 = plumbing.fnk.schema.safe_get.call(null,map30230,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30231,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30230,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30303 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30303 = (function (component_spec,component_filter_rq_chan,input_schema30233,owner,data,input_checker30234,map30230,filter_spec,output_schema30232,G__30236,validate__6034__auto__,output_checker30235,constructor30228,id,ufv__,map30231,meta30304){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema30233 = input_schema30233;
this.owner = owner;
this.data = data;
this.input_checker30234 = input_checker30234;
this.map30230 = map30230;
this.filter_spec = filter_spec;
this.output_schema30232 = output_schema30232;
this.G__30236 = G__30236;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker30235 = output_checker30235;
this.constructor30228 = constructor30228;
this.id = id;
this.ufv__ = ufv__;
this.map30231 = map30231;
this.meta30304 = meta30304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30303.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30303.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30303";
clustermap.components.filters.tag_checkboxes_filter.t30303.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30303");
});})(owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235))
;
clustermap.components.filters.tag_checkboxes_filter.t30303.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30303.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235))
;
clustermap.components.filters.tag_checkboxes_filter.t30303.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30303.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235))
;
clustermap.components.filters.tag_checkboxes_filter.t30303.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30303.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235){
return (function (state_30343){var state_val_30344 = (state_30343[(1)]);if((state_val_30344 === (7)))
{var inst_30334 = (state_30343[(2)]);var state_30343__$1 = state_30343;if(cljs.core.truth_(inst_30334))
{var statearr_30345_30376 = state_30343__$1;(statearr_30345_30376[(1)] = (11));
} else
{var statearr_30346_30377 = state_30343__$1;(statearr_30346_30377[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30344 === (1)))
{var state_30343__$1 = state_30343;var statearr_30347_30378 = state_30343__$1;(statearr_30347_30378[(2)] = null);
(statearr_30347_30378[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30344 === (4)))
{var inst_30308 = (state_30343[(7)]);var inst_30308__$1 = (state_30343[(2)]);var state_30343__$1 = (function (){var statearr_30348 = state_30343;(statearr_30348[(7)] = inst_30308__$1);
return statearr_30348;
})();if(cljs.core.truth_(inst_30308__$1))
{var statearr_30349_30379 = state_30343__$1;(statearr_30349_30379[(1)] = (5));
} else
{var statearr_30350_30380 = state_30343__$1;(statearr_30350_30380[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30344 === (13)))
{var inst_30339 = (state_30343[(2)]);var state_30343__$1 = state_30343;var statearr_30351_30381 = state_30343__$1;(statearr_30351_30381[(2)] = inst_30339);
(statearr_30351_30381[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30344 === (6)))
{var state_30343__$1 = state_30343;var statearr_30352_30382 = state_30343__$1;(statearr_30352_30382[(2)] = null);
(statearr_30352_30382[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30344 === (3)))
{var inst_30341 = (state_30343[(2)]);var state_30343__$1 = state_30343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30343__$1,inst_30341);
} else
{if((state_val_30344 === (12)))
{var state_30343__$1 = state_30343;var statearr_30353_30383 = state_30343__$1;(statearr_30353_30383[(2)] = null);
(statearr_30353_30383[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30344 === (2)))
{var state_30343__$1 = state_30343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30343__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30344 === (11)))
{var state_30343__$1 = state_30343;var statearr_30354_30384 = state_30343__$1;(statearr_30354_30384[(2)] = null);
(statearr_30354_30384[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30344 === (9)))
{var inst_30314 = (state_30343[(8)]);var state_30343__$1 = state_30343;var statearr_30355_30385 = state_30343__$1;(statearr_30355_30385[(2)] = inst_30314);
(statearr_30355_30385[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30344 === (5)))
{var inst_30314 = (state_30343[(8)]);var inst_30308 = (state_30343[(7)]);var inst_30311 = cljs.core.nth.call(null,inst_30308,(0),null);var inst_30312 = cljs.core.nth.call(null,inst_30308,(1),null);var inst_30314__$1 = om.core.get_props.call(null,self__.owner);var inst_30315 = cljs.core.seq_QMARK_.call(null,inst_30314__$1);var state_30343__$1 = (function (){var statearr_30356 = state_30343;(statearr_30356[(8)] = inst_30314__$1);
(statearr_30356[(9)] = inst_30311);
(statearr_30356[(10)] = inst_30312);
return statearr_30356;
})();if(inst_30315)
{var statearr_30357_30386 = state_30343__$1;(statearr_30357_30386[(1)] = (8));
} else
{var statearr_30358_30387 = state_30343__$1;(statearr_30358_30387[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30344 === (10)))
{var inst_30312 = (state_30343[(10)]);var inst_30320 = (state_30343[(2)]);var inst_30321 = cljs.core.get.call(null,inst_30320,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30322 = cljs.core.get.call(null,inst_30320,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30323 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30324 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30312];var inst_30325 = (new cljs.core.PersistentVector(null,3,(5),inst_30323,inst_30324,null));var inst_30326 = cljs.core.clj__GT_js.call(null,inst_30325);var inst_30327 = console.log(inst_30326);var inst_30328 = cljs.core.deref.call(null,inst_30321);var inst_30329 = cljs.core.deref.call(null,inst_30322);var inst_30330 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30328,inst_30329,inst_30312);var inst_30331 = om.core.update_BANG_.call(null,inst_30321,inst_30330);var state_30343__$1 = (function (){var statearr_30359 = state_30343;(statearr_30359[(11)] = inst_30327);
(statearr_30359[(12)] = inst_30331);
return statearr_30359;
})();var statearr_30360_30388 = state_30343__$1;(statearr_30360_30388[(2)] = true);
(statearr_30360_30388[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30344 === (8)))
{var inst_30314 = (state_30343[(8)]);var inst_30317 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30314);var state_30343__$1 = state_30343;var statearr_30361_30389 = state_30343__$1;(statearr_30361_30389[(2)] = inst_30317);
(statearr_30361_30389[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30365 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30365[(0)] = state_machine__9111__auto__);
(statearr_30365[(1)] = (1));
return statearr_30365;
});
var state_machine__9111__auto____1 = (function (state_30343){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30343);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30366){if((e30366 instanceof Object))
{var ex__9114__auto__ = e30366;var statearr_30367_30390 = state_30343;(statearr_30367_30390[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30343);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30366;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30391 = state_30343;
state_30343 = G__30391;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30343){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235))
})();var state__9127__auto__ = (function (){var statearr_30368 = f__9126__auto__.call(null);(statearr_30368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30368;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235))
;
clustermap.components.filters.tag_checkboxes_filter.t30303.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235){
return (function (_30305){var self__ = this;
var _30305__$1 = this;return self__.meta30304;
});})(owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235))
;
clustermap.components.filters.tag_checkboxes_filter.t30303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235){
return (function (_30305,meta30304__$1){var self__ = this;
var _30305__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30303(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema30233,self__.owner,self__.data,self__.input_checker30234,self__.map30230,self__.filter_spec,self__.output_schema30232,self__.G__30236,self__.validate__6034__auto__,self__.output_checker30235,self__.constructor30228,self__.id,self__.ufv__,self__.map30231,meta30304__$1));
});})(owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30303 = ((function (owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235){
return (function __GT_t30303(component_spec__$1,component_filter_rq_chan__$1,input_schema30233__$1,owner__$1,data__$1,input_checker30234__$1,map30230__$1,filter_spec__$1,output_schema30232__$1,G__30236__$1,validate__6034__auto____$1,output_checker30235__$1,constructor30228__$1,id__$1,ufv____$1,map30231__$1,meta30304){return (new clustermap.components.filters.tag_checkboxes_filter.t30303(component_spec__$1,component_filter_rq_chan__$1,input_schema30233__$1,owner__$1,data__$1,input_checker30234__$1,map30230__$1,filter_spec__$1,output_schema30232__$1,G__30236__$1,validate__6034__auto____$1,output_checker30235__$1,constructor30228__$1,id__$1,ufv____$1,map30231__$1,meta30304));
});})(owner,component_filter_rq_chan,map30231,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30303(component_spec,component_filter_rq_chan,input_schema30233,owner,data,input_checker30234,map30230,filter_spec,output_schema30232,G__30236,validate__6034__auto__,output_checker30235,constructor30228,id,ufv__,map30231,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30392 = output_checker30235.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30392))
{var error__6036__auto___30393 = temp__4126__auto___30392;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30228","constructor30228",910926810,null),cljs.core.pr_str.call(null,error__6036__auto___30393)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30393,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30232,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30232,input_schema30233,input_checker30234,output_checker30235))
,schema.core.make_fn_schema.call(null,output_schema30232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30233], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30372){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30227,p__30369){var vec__30371 = p__30369;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30371,(0),null);return component_fnk__7881__auto___30372.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30227,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30227,var_args){
var p__30369 = null;if (arguments.length > 2) {
  p__30369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30227,p__30369);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30394){
var data__7882__auto__ = cljs.core.first(arglist__30394);
arglist__30394 = cljs.core.next(arglist__30394);
var owner30227 = cljs.core.first(arglist__30394);
var p__30369 = cljs.core.rest(arglist__30394);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30227,p__30369);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30372))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30229){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30229);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30229){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
