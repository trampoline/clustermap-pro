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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30277(s__30278){return (new cljs.core.LazySeq(null,(function (){var s__30278__$1 = s__30278;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30278__$1);if(temp__4126__auto__)
{var s__30278__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30278__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30278__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30280 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30279 = (0);while(true){
if((i__30279 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30279);cljs.core.chunk_append.call(null,b__30280,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30281 = (i__30279 + (1));
i__30279 = G__30281;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30280),iter__30277.call(null,cljs.core.chunk_rest.call(null,s__30278__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30280),null);
}
} else
{var t = cljs.core.first.call(null,s__30278__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30277.call(null,cljs.core.rest.call(null,s__30278__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30282_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30282_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30283,value){var map__30285 = p__30283;var map__30285__$1 = ((cljs.core.seq_QMARK_.call(null,map__30285))?cljs.core.apply.call(null,cljs.core.hash_map,map__30285):map__30285);var component_spec = map__30285__$1;var tags = cljs.core.get.call(null,map__30285__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30285__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30286_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30286_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30288,values){var map__30290 = p__30288;var map__30290__$1 = ((cljs.core.seq_QMARK_.call(null,map__30290))?cljs.core.apply.call(null,cljs.core.hash_map,map__30290):map__30290);var component_spec = map__30290__$1;var sorted = cljs.core.get.call(null,map__30290__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30290__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30290__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30290,map__30290__$1,component_spec,sorted,tags,label){
return (function (p1__30287_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30287_SHARP_));
});})(values__$1,map__30290,map__30290__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30291,values){var map__30293 = p__30291;var map__30293__$1 = ((cljs.core.seq_QMARK_.call(null,map__30293))?cljs.core.apply.call(null,cljs.core.hash_map,map__30293):map__30293);var component_spec = map__30293__$1;var tags = cljs.core.get.call(null,map__30293__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30293__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30294){var map__30296 = p__30294;var map__30296__$1 = ((cljs.core.seq_QMARK_.call(null,map__30296))?cljs.core.apply.call(null,cljs.core.hash_map,map__30296):map__30296);var component_spec = map__30296__$1;var tags = cljs.core.get.call(null,map__30296__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30296__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30297){var map__30299 = p__30297;var map__30299__$1 = ((cljs.core.seq_QMARK_.call(null,map__30299))?cljs.core.apply.call(null,cljs.core.hash_map,map__30299):map__30299);var component_spec = map__30299__$1;var tags = cljs.core.get.call(null,map__30299__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30299__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30301 = schema.core.Any;var input_schema30302 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30300","map30300",-856175031,null))], null);var input_checker30303 = schema.core.checker.call(null,input_schema30302);var output_checker30304 = schema.core.checker.call(null,output_schema30301);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304){
return (function render_STAR_(G__30305){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30305], null);var temp__4126__auto___30341 = input_checker30303.call(null,args__6035__auto___30340);if(cljs.core.truth_(temp__4126__auto___30341))
{var error__6036__auto___30342 = temp__4126__auto___30341;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30342)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30342,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30340,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30302,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30300 = G__30305;while(true){
if(cljs.core.map_QMARK_.call(null,map30300))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30300)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30300,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30300,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30323 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30323))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30323)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30323))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304){
return (function iter__30324(s__30325){return (new cljs.core.LazySeq(null,((function (attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304){
return (function (){var s__30325__$1 = s__30325;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30325__$1);if(temp__4126__auto__)
{var s__30325__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30325__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30325__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30327 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30326 = (0);while(true){
if((i__30326 < size__4376__auto__))
{var map__30330 = cljs.core._nth.call(null,c__4375__auto__,i__30326);var map__30330__$1 = ((cljs.core.seq_QMARK_.call(null,map__30330))?cljs.core.apply.call(null,cljs.core.hash_map,map__30330):map__30330);var label__$1 = cljs.core.get.call(null,map__30330__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30330__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30327,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30326,map__30330,map__30330__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30327,s__30325__$2,temp__4126__auto__,attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30326,map__30330,map__30330__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30327,s__30325__$2,temp__4126__auto__,attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30343 = (i__30326 + (1));
i__30326 = G__30343;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30327),iter__30324.call(null,cljs.core.chunk_rest.call(null,s__30325__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30327),null);
}
} else
{var map__30331 = cljs.core.first.call(null,s__30325__$2);var map__30331__$1 = ((cljs.core.seq_QMARK_.call(null,map__30331))?cljs.core.apply.call(null,cljs.core.hash_map,map__30331):map__30331);var label__$1 = cljs.core.get.call(null,map__30331__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30331__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30331,map__30331__$1,label__$1,value,s__30325__$2,temp__4126__auto__,attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30331,map__30331__$1,label__$1,value,s__30325__$2,temp__4126__auto__,attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30324.call(null,cljs.core.rest.call(null,s__30325__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304))
,null,null));
});})(attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30323),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304){
return (function iter__30332(s__30333){return (new cljs.core.LazySeq(null,((function (attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304){
return (function (){var s__30333__$1 = s__30333;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30333__$1);if(temp__4126__auto__)
{var s__30333__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30333__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30333__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30335 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30334 = (0);while(true){
if((i__30334 < size__4376__auto__))
{var map__30338 = cljs.core._nth.call(null,c__4375__auto__,i__30334);var map__30338__$1 = ((cljs.core.seq_QMARK_.call(null,map__30338))?cljs.core.apply.call(null,cljs.core.hash_map,map__30338):map__30338);var label__$1 = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30338__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30335,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30334,map__30338,map__30338__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30335,s__30333__$2,temp__4126__auto__,attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30334,map__30338,map__30338__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30335,s__30333__$2,temp__4126__auto__,attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30344 = (i__30334 + (1));
i__30334 = G__30344;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30335),iter__30332.call(null,cljs.core.chunk_rest.call(null,s__30333__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30335),null);
}
} else
{var map__30339 = cljs.core.first.call(null,s__30333__$2);var map__30339__$1 = ((cljs.core.seq_QMARK_.call(null,map__30339))?cljs.core.apply.call(null,cljs.core.hash_map,map__30339):map__30339);var label__$1 = cljs.core.get.call(null,map__30339__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30339__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30339,map__30339__$1,label__$1,value,s__30333__$2,temp__4126__auto__,attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30339,map__30339__$1,label__$1,value,s__30333__$2,temp__4126__auto__,attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30332.call(null,cljs.core.rest.call(null,s__30333__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304))
,null,null));
});})(attrs30323,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30345 = output_checker30304.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30345))
{var error__6036__auto___30346 = temp__4126__auto___30345;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30346)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30346,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30301,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30301,input_schema30302,input_checker30303,output_checker30304))
,schema.core.make_fn_schema.call(null,output_schema30301,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30302], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30492 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30352 = schema.core.Any;var input_schema30353 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30350","map30350",1771694556,null))], null);var input_checker30354 = schema.core.checker.call(null,input_schema30353);var output_checker30355 = schema.core.checker.call(null,output_schema30352);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355){
return (function constructor30348(G__30356){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30493 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30356], null);var temp__4126__auto___30494 = input_checker30354.call(null,args__6035__auto___30493);if(cljs.core.truth_(temp__4126__auto___30494))
{var error__6036__auto___30495 = temp__4126__auto___30494;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30348","constructor30348",2052546115,null),cljs.core.pr_str.call(null,error__6036__auto___30495)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30495,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30493,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30353,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30350 = G__30356;while(true){
if(cljs.core.map_QMARK_.call(null,map30350))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30350)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30350,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30351 = plumbing.fnk.schema.safe_get.call(null,map30350,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30351,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30350,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30423 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30423 = (function (component_spec,component_filter_rq_chan,constructor30348,owner,data,output_schema30352,output_checker30355,filter_spec,input_checker30354,map30351,input_schema30353,G__30356,validate__6034__auto__,id,map30350,ufv__,meta30424){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.constructor30348 = constructor30348;
this.owner = owner;
this.data = data;
this.output_schema30352 = output_schema30352;
this.output_checker30355 = output_checker30355;
this.filter_spec = filter_spec;
this.input_checker30354 = input_checker30354;
this.map30351 = map30351;
this.input_schema30353 = input_schema30353;
this.G__30356 = G__30356;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map30350 = map30350;
this.ufv__ = ufv__;
this.meta30424 = meta30424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30423.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30423.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30423";
clustermap.components.filters.tag_checkboxes_filter.t30423.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30423");
});})(owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355))
;
clustermap.components.filters.tag_checkboxes_filter.t30423.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30423.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355))
;
clustermap.components.filters.tag_checkboxes_filter.t30423.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30423.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355))
;
clustermap.components.filters.tag_checkboxes_filter.t30423.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30423.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355){
return (function (state_30463){var state_val_30464 = (state_30463[(1)]);if((state_val_30464 === (7)))
{var inst_30454 = (state_30463[(2)]);var state_30463__$1 = state_30463;if(cljs.core.truth_(inst_30454))
{var statearr_30465_30496 = state_30463__$1;(statearr_30465_30496[(1)] = (11));
} else
{var statearr_30466_30497 = state_30463__$1;(statearr_30466_30497[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (1)))
{var state_30463__$1 = state_30463;var statearr_30467_30498 = state_30463__$1;(statearr_30467_30498[(2)] = null);
(statearr_30467_30498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (4)))
{var inst_30428 = (state_30463[(7)]);var inst_30428__$1 = (state_30463[(2)]);var state_30463__$1 = (function (){var statearr_30468 = state_30463;(statearr_30468[(7)] = inst_30428__$1);
return statearr_30468;
})();if(cljs.core.truth_(inst_30428__$1))
{var statearr_30469_30499 = state_30463__$1;(statearr_30469_30499[(1)] = (5));
} else
{var statearr_30470_30500 = state_30463__$1;(statearr_30470_30500[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (13)))
{var inst_30459 = (state_30463[(2)]);var state_30463__$1 = state_30463;var statearr_30471_30501 = state_30463__$1;(statearr_30471_30501[(2)] = inst_30459);
(statearr_30471_30501[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (6)))
{var state_30463__$1 = state_30463;var statearr_30472_30502 = state_30463__$1;(statearr_30472_30502[(2)] = null);
(statearr_30472_30502[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (3)))
{var inst_30461 = (state_30463[(2)]);var state_30463__$1 = state_30463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30463__$1,inst_30461);
} else
{if((state_val_30464 === (12)))
{var state_30463__$1 = state_30463;var statearr_30473_30503 = state_30463__$1;(statearr_30473_30503[(2)] = null);
(statearr_30473_30503[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (2)))
{var state_30463__$1 = state_30463;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30464 === (11)))
{var state_30463__$1 = state_30463;var statearr_30474_30504 = state_30463__$1;(statearr_30474_30504[(2)] = null);
(statearr_30474_30504[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (9)))
{var inst_30434 = (state_30463[(8)]);var state_30463__$1 = state_30463;var statearr_30475_30505 = state_30463__$1;(statearr_30475_30505[(2)] = inst_30434);
(statearr_30475_30505[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (5)))
{var inst_30428 = (state_30463[(7)]);var inst_30434 = (state_30463[(8)]);var inst_30431 = cljs.core.nth.call(null,inst_30428,(0),null);var inst_30432 = cljs.core.nth.call(null,inst_30428,(1),null);var inst_30434__$1 = om.core.get_props.call(null,self__.owner);var inst_30435 = cljs.core.seq_QMARK_.call(null,inst_30434__$1);var state_30463__$1 = (function (){var statearr_30476 = state_30463;(statearr_30476[(8)] = inst_30434__$1);
(statearr_30476[(9)] = inst_30431);
(statearr_30476[(10)] = inst_30432);
return statearr_30476;
})();if(inst_30435)
{var statearr_30477_30506 = state_30463__$1;(statearr_30477_30506[(1)] = (8));
} else
{var statearr_30478_30507 = state_30463__$1;(statearr_30478_30507[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (10)))
{var inst_30432 = (state_30463[(10)]);var inst_30440 = (state_30463[(2)]);var inst_30441 = cljs.core.get.call(null,inst_30440,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30442 = cljs.core.get.call(null,inst_30440,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30443 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30444 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30432];var inst_30445 = (new cljs.core.PersistentVector(null,3,(5),inst_30443,inst_30444,null));var inst_30446 = cljs.core.clj__GT_js.call(null,inst_30445);var inst_30447 = console.log(inst_30446);var inst_30448 = cljs.core.deref.call(null,inst_30441);var inst_30449 = cljs.core.deref.call(null,inst_30442);var inst_30450 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30448,inst_30449,inst_30432);var inst_30451 = om.core.update_BANG_.call(null,inst_30441,inst_30450);var state_30463__$1 = (function (){var statearr_30479 = state_30463;(statearr_30479[(11)] = inst_30447);
(statearr_30479[(12)] = inst_30451);
return statearr_30479;
})();var statearr_30480_30508 = state_30463__$1;(statearr_30480_30508[(2)] = true);
(statearr_30480_30508[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30464 === (8)))
{var inst_30434 = (state_30463[(8)]);var inst_30437 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30434);var state_30463__$1 = state_30463;var statearr_30481_30509 = state_30463__$1;(statearr_30481_30509[(2)] = inst_30437);
(statearr_30481_30509[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30485 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30485[(0)] = state_machine__9111__auto__);
(statearr_30485[(1)] = (1));
return statearr_30485;
});
var state_machine__9111__auto____1 = (function (state_30463){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30463);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30486){if((e30486 instanceof Object))
{var ex__9114__auto__ = e30486;var statearr_30487_30510 = state_30463;(statearr_30487_30510[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30463);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30486;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30511 = state_30463;
state_30463 = G__30511;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30463){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355))
})();var state__9127__auto__ = (function (){var statearr_30488 = f__9126__auto__.call(null);(statearr_30488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30488;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355))
;
clustermap.components.filters.tag_checkboxes_filter.t30423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355){
return (function (_30425){var self__ = this;
var _30425__$1 = this;return self__.meta30424;
});})(owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355))
;
clustermap.components.filters.tag_checkboxes_filter.t30423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355){
return (function (_30425,meta30424__$1){var self__ = this;
var _30425__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30423(self__.component_spec,self__.component_filter_rq_chan,self__.constructor30348,self__.owner,self__.data,self__.output_schema30352,self__.output_checker30355,self__.filter_spec,self__.input_checker30354,self__.map30351,self__.input_schema30353,self__.G__30356,self__.validate__6034__auto__,self__.id,self__.map30350,self__.ufv__,meta30424__$1));
});})(owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30423 = ((function (owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355){
return (function __GT_t30423(component_spec__$1,component_filter_rq_chan__$1,constructor30348__$1,owner__$1,data__$1,output_schema30352__$1,output_checker30355__$1,filter_spec__$1,input_checker30354__$1,map30351__$1,input_schema30353__$1,G__30356__$1,validate__6034__auto____$1,id__$1,map30350__$1,ufv____$1,meta30424){return (new clustermap.components.filters.tag_checkboxes_filter.t30423(component_spec__$1,component_filter_rq_chan__$1,constructor30348__$1,owner__$1,data__$1,output_schema30352__$1,output_checker30355__$1,filter_spec__$1,input_checker30354__$1,map30351__$1,input_schema30353__$1,G__30356__$1,validate__6034__auto____$1,id__$1,map30350__$1,ufv____$1,meta30424));
});})(owner,component_filter_rq_chan,map30351,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30423(component_spec,component_filter_rq_chan,constructor30348,owner,data,output_schema30352,output_checker30355,filter_spec,input_checker30354,map30351,input_schema30353,G__30356,validate__6034__auto__,id,map30350,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30512 = output_checker30355.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30512))
{var error__6036__auto___30513 = temp__4126__auto___30512;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30348","constructor30348",2052546115,null),cljs.core.pr_str.call(null,error__6036__auto___30513)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30513,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30352,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30352,input_schema30353,input_checker30354,output_checker30355))
,schema.core.make_fn_schema.call(null,output_schema30352,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30353], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30492){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30347,p__30489){var vec__30491 = p__30489;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30491,(0),null);return component_fnk__7881__auto___30492.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30347,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30347,var_args){
var p__30489 = null;if (arguments.length > 2) {
  p__30489 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30347,p__30489);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30514){
var data__7882__auto__ = cljs.core.first(arglist__30514);
arglist__30514 = cljs.core.next(arglist__30514);
var owner30347 = cljs.core.first(arglist__30514);
var p__30489 = cljs.core.rest(arglist__30514);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30347,p__30489);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30492))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30349){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30349);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30349){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
