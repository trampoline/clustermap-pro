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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30295(s__30296){return (new cljs.core.LazySeq(null,(function (){var s__30296__$1 = s__30296;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30296__$1);if(temp__4126__auto__)
{var s__30296__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30296__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30296__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30298 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30297 = (0);while(true){
if((i__30297 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30297);cljs.core.chunk_append.call(null,b__30298,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30299 = (i__30297 + (1));
i__30297 = G__30299;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30298),iter__30295.call(null,cljs.core.chunk_rest.call(null,s__30296__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30298),null);
}
} else
{var t = cljs.core.first.call(null,s__30296__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30295.call(null,cljs.core.rest.call(null,s__30296__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30300_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30300_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30301,value){var map__30303 = p__30301;var map__30303__$1 = ((cljs.core.seq_QMARK_.call(null,map__30303))?cljs.core.apply.call(null,cljs.core.hash_map,map__30303):map__30303);var component_spec = map__30303__$1;var tags = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30304_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30304_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30306,values){var map__30308 = p__30306;var map__30308__$1 = ((cljs.core.seq_QMARK_.call(null,map__30308))?cljs.core.apply.call(null,cljs.core.hash_map,map__30308):map__30308);var component_spec = map__30308__$1;var sorted = cljs.core.get.call(null,map__30308__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30308__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30308__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30308,map__30308__$1,component_spec,sorted,tags,label){
return (function (p1__30305_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30305_SHARP_));
});})(values__$1,map__30308,map__30308__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30309,values){var map__30311 = p__30309;var map__30311__$1 = ((cljs.core.seq_QMARK_.call(null,map__30311))?cljs.core.apply.call(null,cljs.core.hash_map,map__30311):map__30311);var component_spec = map__30311__$1;var tags = cljs.core.get.call(null,map__30311__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30311__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30312){var map__30314 = p__30312;var map__30314__$1 = ((cljs.core.seq_QMARK_.call(null,map__30314))?cljs.core.apply.call(null,cljs.core.hash_map,map__30314):map__30314);var component_spec = map__30314__$1;var tags = cljs.core.get.call(null,map__30314__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30314__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30315){var map__30317 = p__30315;var map__30317__$1 = ((cljs.core.seq_QMARK_.call(null,map__30317))?cljs.core.apply.call(null,cljs.core.hash_map,map__30317):map__30317);var component_spec = map__30317__$1;var tags = cljs.core.get.call(null,map__30317__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30317__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30319 = schema.core.Any;var input_schema30320 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30318","map30318",-1019149618,null))], null);var input_checker30321 = schema.core.checker.call(null,input_schema30320);var output_checker30322 = schema.core.checker.call(null,output_schema30319);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322){
return (function render_STAR_(G__30323){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30323], null);var temp__4126__auto___30359 = input_checker30321.call(null,args__6035__auto___30358);if(cljs.core.truth_(temp__4126__auto___30359))
{var error__6036__auto___30360 = temp__4126__auto___30359;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30360)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30360,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30358,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30320,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30318 = G__30323;while(true){
if(cljs.core.map_QMARK_.call(null,map30318))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30318)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30318,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30318,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30341 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30341))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30341)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30341))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322){
return (function iter__30342(s__30343){return (new cljs.core.LazySeq(null,((function (attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322){
return (function (){var s__30343__$1 = s__30343;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30343__$1);if(temp__4126__auto__)
{var s__30343__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30343__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30343__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30345 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30344 = (0);while(true){
if((i__30344 < size__4376__auto__))
{var map__30348 = cljs.core._nth.call(null,c__4375__auto__,i__30344);var map__30348__$1 = ((cljs.core.seq_QMARK_.call(null,map__30348))?cljs.core.apply.call(null,cljs.core.hash_map,map__30348):map__30348);var label__$1 = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30345,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30344,map__30348,map__30348__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30345,s__30343__$2,temp__4126__auto__,attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30344,map__30348,map__30348__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30345,s__30343__$2,temp__4126__auto__,attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30361 = (i__30344 + (1));
i__30344 = G__30361;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30345),iter__30342.call(null,cljs.core.chunk_rest.call(null,s__30343__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30345),null);
}
} else
{var map__30349 = cljs.core.first.call(null,s__30343__$2);var map__30349__$1 = ((cljs.core.seq_QMARK_.call(null,map__30349))?cljs.core.apply.call(null,cljs.core.hash_map,map__30349):map__30349);var label__$1 = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30349,map__30349__$1,label__$1,value,s__30343__$2,temp__4126__auto__,attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30349,map__30349__$1,label__$1,value,s__30343__$2,temp__4126__auto__,attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30342.call(null,cljs.core.rest.call(null,s__30343__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322))
,null,null));
});})(attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30341),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322){
return (function iter__30350(s__30351){return (new cljs.core.LazySeq(null,((function (attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322){
return (function (){var s__30351__$1 = s__30351;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30351__$1);if(temp__4126__auto__)
{var s__30351__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30351__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30351__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30353 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30352 = (0);while(true){
if((i__30352 < size__4376__auto__))
{var map__30356 = cljs.core._nth.call(null,c__4375__auto__,i__30352);var map__30356__$1 = ((cljs.core.seq_QMARK_.call(null,map__30356))?cljs.core.apply.call(null,cljs.core.hash_map,map__30356):map__30356);var label__$1 = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30356__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30353,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30352,map__30356,map__30356__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30353,s__30351__$2,temp__4126__auto__,attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30352,map__30356,map__30356__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30353,s__30351__$2,temp__4126__auto__,attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30362 = (i__30352 + (1));
i__30352 = G__30362;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30353),iter__30350.call(null,cljs.core.chunk_rest.call(null,s__30351__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30353),null);
}
} else
{var map__30357 = cljs.core.first.call(null,s__30351__$2);var map__30357__$1 = ((cljs.core.seq_QMARK_.call(null,map__30357))?cljs.core.apply.call(null,cljs.core.hash_map,map__30357):map__30357);var label__$1 = cljs.core.get.call(null,map__30357__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30357__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30357,map__30357__$1,label__$1,value,s__30351__$2,temp__4126__auto__,attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30357,map__30357__$1,label__$1,value,s__30351__$2,temp__4126__auto__,attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30350.call(null,cljs.core.rest.call(null,s__30351__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322))
,null,null));
});})(attrs30341,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30363 = output_checker30322.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30363))
{var error__6036__auto___30364 = temp__4126__auto___30363;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30364)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30364,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30319,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30319,input_schema30320,input_checker30321,output_checker30322))
,schema.core.make_fn_schema.call(null,output_schema30319,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30320], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30510 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30370 = schema.core.Any;var input_schema30371 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30368","map30368",-1165471807,null))], null);var input_checker30372 = schema.core.checker.call(null,input_schema30371);var output_checker30373 = schema.core.checker.call(null,output_schema30370);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373){
return (function constructor30366(G__30374){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30511 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30374], null);var temp__4126__auto___30512 = input_checker30372.call(null,args__6035__auto___30511);if(cljs.core.truth_(temp__4126__auto___30512))
{var error__6036__auto___30513 = temp__4126__auto___30512;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30366","constructor30366",635531094,null),cljs.core.pr_str.call(null,error__6036__auto___30513)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30513,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30511,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30371,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30368 = G__30374;while(true){
if(cljs.core.map_QMARK_.call(null,map30368))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30368)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30368,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30369 = plumbing.fnk.schema.safe_get.call(null,map30368,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30369,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30368,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30441 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30441 = (function (component_spec,component_filter_rq_chan,input_schema30371,map30368,owner,data,G__30374,map30369,filter_spec,output_checker30373,constructor30366,validate__6034__auto__,input_checker30372,id,output_schema30370,ufv__,meta30442){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema30371 = input_schema30371;
this.map30368 = map30368;
this.owner = owner;
this.data = data;
this.G__30374 = G__30374;
this.map30369 = map30369;
this.filter_spec = filter_spec;
this.output_checker30373 = output_checker30373;
this.constructor30366 = constructor30366;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_checker30372 = input_checker30372;
this.id = id;
this.output_schema30370 = output_schema30370;
this.ufv__ = ufv__;
this.meta30442 = meta30442;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30441.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30441.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30441";
clustermap.components.filters.tag_checkboxes_filter.t30441.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30441");
});})(owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373))
;
clustermap.components.filters.tag_checkboxes_filter.t30441.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30441.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373))
;
clustermap.components.filters.tag_checkboxes_filter.t30441.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30441.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373))
;
clustermap.components.filters.tag_checkboxes_filter.t30441.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30441.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373){
return (function (state_30481){var state_val_30482 = (state_30481[(1)]);if((state_val_30482 === (7)))
{var inst_30472 = (state_30481[(2)]);var state_30481__$1 = state_30481;if(cljs.core.truth_(inst_30472))
{var statearr_30483_30514 = state_30481__$1;(statearr_30483_30514[(1)] = (11));
} else
{var statearr_30484_30515 = state_30481__$1;(statearr_30484_30515[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30482 === (1)))
{var state_30481__$1 = state_30481;var statearr_30485_30516 = state_30481__$1;(statearr_30485_30516[(2)] = null);
(statearr_30485_30516[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30482 === (4)))
{var inst_30446 = (state_30481[(7)]);var inst_30446__$1 = (state_30481[(2)]);var state_30481__$1 = (function (){var statearr_30486 = state_30481;(statearr_30486[(7)] = inst_30446__$1);
return statearr_30486;
})();if(cljs.core.truth_(inst_30446__$1))
{var statearr_30487_30517 = state_30481__$1;(statearr_30487_30517[(1)] = (5));
} else
{var statearr_30488_30518 = state_30481__$1;(statearr_30488_30518[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30482 === (13)))
{var inst_30477 = (state_30481[(2)]);var state_30481__$1 = state_30481;var statearr_30489_30519 = state_30481__$1;(statearr_30489_30519[(2)] = inst_30477);
(statearr_30489_30519[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30482 === (6)))
{var state_30481__$1 = state_30481;var statearr_30490_30520 = state_30481__$1;(statearr_30490_30520[(2)] = null);
(statearr_30490_30520[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30482 === (3)))
{var inst_30479 = (state_30481[(2)]);var state_30481__$1 = state_30481;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30481__$1,inst_30479);
} else
{if((state_val_30482 === (12)))
{var state_30481__$1 = state_30481;var statearr_30491_30521 = state_30481__$1;(statearr_30491_30521[(2)] = null);
(statearr_30491_30521[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30482 === (2)))
{var state_30481__$1 = state_30481;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30481__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30482 === (11)))
{var state_30481__$1 = state_30481;var statearr_30492_30522 = state_30481__$1;(statearr_30492_30522[(2)] = null);
(statearr_30492_30522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30482 === (9)))
{var inst_30452 = (state_30481[(8)]);var state_30481__$1 = state_30481;var statearr_30493_30523 = state_30481__$1;(statearr_30493_30523[(2)] = inst_30452);
(statearr_30493_30523[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30482 === (5)))
{var inst_30452 = (state_30481[(8)]);var inst_30446 = (state_30481[(7)]);var inst_30449 = cljs.core.nth.call(null,inst_30446,(0),null);var inst_30450 = cljs.core.nth.call(null,inst_30446,(1),null);var inst_30452__$1 = om.core.get_props.call(null,self__.owner);var inst_30453 = cljs.core.seq_QMARK_.call(null,inst_30452__$1);var state_30481__$1 = (function (){var statearr_30494 = state_30481;(statearr_30494[(9)] = inst_30449);
(statearr_30494[(8)] = inst_30452__$1);
(statearr_30494[(10)] = inst_30450);
return statearr_30494;
})();if(inst_30453)
{var statearr_30495_30524 = state_30481__$1;(statearr_30495_30524[(1)] = (8));
} else
{var statearr_30496_30525 = state_30481__$1;(statearr_30496_30525[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30482 === (10)))
{var inst_30450 = (state_30481[(10)]);var inst_30458 = (state_30481[(2)]);var inst_30459 = cljs.core.get.call(null,inst_30458,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30460 = cljs.core.get.call(null,inst_30458,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30461 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30462 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30450];var inst_30463 = (new cljs.core.PersistentVector(null,3,(5),inst_30461,inst_30462,null));var inst_30464 = cljs.core.clj__GT_js.call(null,inst_30463);var inst_30465 = console.log(inst_30464);var inst_30466 = cljs.core.deref.call(null,inst_30459);var inst_30467 = cljs.core.deref.call(null,inst_30460);var inst_30468 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30466,inst_30467,inst_30450);var inst_30469 = om.core.update_BANG_.call(null,inst_30459,inst_30468);var state_30481__$1 = (function (){var statearr_30497 = state_30481;(statearr_30497[(11)] = inst_30465);
(statearr_30497[(12)] = inst_30469);
return statearr_30497;
})();var statearr_30498_30526 = state_30481__$1;(statearr_30498_30526[(2)] = true);
(statearr_30498_30526[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30482 === (8)))
{var inst_30452 = (state_30481[(8)]);var inst_30455 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30452);var state_30481__$1 = state_30481;var statearr_30499_30527 = state_30481__$1;(statearr_30499_30527[(2)] = inst_30455);
(statearr_30499_30527[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30503 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30503[(0)] = state_machine__9111__auto__);
(statearr_30503[(1)] = (1));
return statearr_30503;
});
var state_machine__9111__auto____1 = (function (state_30481){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30481);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30504){if((e30504 instanceof Object))
{var ex__9114__auto__ = e30504;var statearr_30505_30528 = state_30481;(statearr_30505_30528[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30481);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30504;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30529 = state_30481;
state_30481 = G__30529;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30481){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373))
})();var state__9127__auto__ = (function (){var statearr_30506 = f__9126__auto__.call(null);(statearr_30506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373))
;
clustermap.components.filters.tag_checkboxes_filter.t30441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373){
return (function (_30443){var self__ = this;
var _30443__$1 = this;return self__.meta30442;
});})(owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373))
;
clustermap.components.filters.tag_checkboxes_filter.t30441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373){
return (function (_30443,meta30442__$1){var self__ = this;
var _30443__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30441(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema30371,self__.map30368,self__.owner,self__.data,self__.G__30374,self__.map30369,self__.filter_spec,self__.output_checker30373,self__.constructor30366,self__.validate__6034__auto__,self__.input_checker30372,self__.id,self__.output_schema30370,self__.ufv__,meta30442__$1));
});})(owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30441 = ((function (owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373){
return (function __GT_t30441(component_spec__$1,component_filter_rq_chan__$1,input_schema30371__$1,map30368__$1,owner__$1,data__$1,G__30374__$1,map30369__$1,filter_spec__$1,output_checker30373__$1,constructor30366__$1,validate__6034__auto____$1,input_checker30372__$1,id__$1,output_schema30370__$1,ufv____$1,meta30442){return (new clustermap.components.filters.tag_checkboxes_filter.t30441(component_spec__$1,component_filter_rq_chan__$1,input_schema30371__$1,map30368__$1,owner__$1,data__$1,G__30374__$1,map30369__$1,filter_spec__$1,output_checker30373__$1,constructor30366__$1,validate__6034__auto____$1,input_checker30372__$1,id__$1,output_schema30370__$1,ufv____$1,meta30442));
});})(owner,component_filter_rq_chan,map30369,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30441(component_spec,component_filter_rq_chan,input_schema30371,map30368,owner,data,G__30374,map30369,filter_spec,output_checker30373,constructor30366,validate__6034__auto__,input_checker30372,id,output_schema30370,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30530 = output_checker30373.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30530))
{var error__6036__auto___30531 = temp__4126__auto___30530;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30366","constructor30366",635531094,null),cljs.core.pr_str.call(null,error__6036__auto___30531)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30531,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30370,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30370,input_schema30371,input_checker30372,output_checker30373))
,schema.core.make_fn_schema.call(null,output_schema30370,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30371], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30510){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30365,p__30507){var vec__30509 = p__30507;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30509,(0),null);return component_fnk__7881__auto___30510.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30365,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30365,var_args){
var p__30507 = null;if (arguments.length > 2) {
  p__30507 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30365,p__30507);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30532){
var data__7882__auto__ = cljs.core.first(arglist__30532);
arglist__30532 = cljs.core.next(arglist__30532);
var owner30365 = cljs.core.first(arglist__30532);
var p__30507 = cljs.core.rest(arglist__30532);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30365,p__30507);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30510))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30367){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30367);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30367){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
