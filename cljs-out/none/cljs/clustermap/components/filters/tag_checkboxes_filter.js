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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12290__auto__ = (function iter__29774(s__29775){return (new cljs.core.LazySeq(null,(function (){var s__29775__$1 = s__29775;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29775__$1);if(temp__4126__auto__)
{var s__29775__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29775__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__29775__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__29777 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__29776 = (0);while(true){
if((i__29776 < size__12289__auto__))
{var t = cljs.core._nth.call(null,c__12288__auto__,i__29776);cljs.core.chunk_append.call(null,b__29777,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__29778 = (i__29776 + (1));
i__29776 = G__29778;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29777),iter__29774.call(null,cljs.core.chunk_rest.call(null,s__29775__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29777),null);
}
} else
{var t = cljs.core.first.call(null,s__29775__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__29774.call(null,cljs.core.rest.call(null,s__29775__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12290__auto__.call(null,tags);
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29779_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29779_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__29780,value){var map__29782 = p__29780;var map__29782__$1 = ((cljs.core.seq_QMARK_.call(null,map__29782))?cljs.core.apply.call(null,cljs.core.hash_map,map__29782):map__29782);var component_spec = map__29782__$1;var tags = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29782__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__29783_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__29783_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__29785,values){var map__29787 = p__29785;var map__29787__$1 = ((cljs.core.seq_QMARK_.call(null,map__29787))?cljs.core.apply.call(null,cljs.core.hash_map,map__29787):map__29787);var component_spec = map__29787__$1;var sorted = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29787,map__29787__$1,component_spec,sorted,tags,label){
return (function (p1__29784_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29784_SHARP_));
});})(values__$1,map__29787,map__29787__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29788,values){var map__29790 = p__29788;var map__29790__$1 = ((cljs.core.seq_QMARK_.call(null,map__29790))?cljs.core.apply.call(null,cljs.core.hash_map,map__29790):map__29790);var component_spec = map__29790__$1;var tags = cljs.core.get.call(null,map__29790__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29790__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__29791){var map__29793 = p__29791;var map__29793__$1 = ((cljs.core.seq_QMARK_.call(null,map__29793))?cljs.core.apply.call(null,cljs.core.hash_map,map__29793):map__29793);var component_spec = map__29793__$1;var tags = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__29794){var map__29796 = p__29794;var map__29796__$1 = ((cljs.core.seq_QMARK_.call(null,map__29796))?cljs.core.apply.call(null,cljs.core.hash_map,map__29796):map__29796);var component_spec = map__29796__$1;var tags = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29798 = schema.core.Any;var input_schema29799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29797","map29797",-1862078005,null))], null);var input_checker29800 = schema.core.checker.call(null,input_schema29799);var output_checker29801 = schema.core.checker.call(null,output_schema29798);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801){
return (function render_STAR_(G__29802){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___29837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29802], null);var temp__4126__auto___29838 = input_checker29800.call(null,args__13948__auto___29837);if(cljs.core.truth_(temp__4126__auto___29838))
{var error__13949__auto___29839 = temp__4126__auto___29838;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___29839)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29839,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___29837,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29799,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map29797 = G__29802;while(true){
if(cljs.core.map_QMARK_.call(null,map29797))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29797)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29797,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29797,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs29820 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29820))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs29820)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29820))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801){
return (function iter__29821(s__29822){return (new cljs.core.LazySeq(null,((function (attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801){
return (function (){var s__29822__$1 = s__29822;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29822__$1);if(temp__4126__auto__)
{var s__29822__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29822__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__29822__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__29824 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__29823 = (0);while(true){
if((i__29823 < size__12289__auto__))
{var map__29827 = cljs.core._nth.call(null,c__12288__auto__,i__29823);var map__29827__$1 = ((cljs.core.seq_QMARK_.call(null,map__29827))?cljs.core.apply.call(null,cljs.core.hash_map,map__29827):map__29827);var label__$1 = cljs.core.get.call(null,map__29827__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29827__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29824,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29823,map__29827,map__29827__$1,label__$1,value,c__12288__auto__,size__12289__auto__,b__29824,s__29822__$2,temp__4126__auto__,attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29823,map__29827,map__29827__$1,label__$1,value,c__12288__auto__,size__12289__auto__,b__29824,s__29822__$2,temp__4126__auto__,attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29840 = (i__29823 + (1));
i__29823 = G__29840;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29824),iter__29821.call(null,cljs.core.chunk_rest.call(null,s__29822__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29824),null);
}
} else
{var map__29828 = cljs.core.first.call(null,s__29822__$2);var map__29828__$1 = ((cljs.core.seq_QMARK_.call(null,map__29828))?cljs.core.apply.call(null,cljs.core.hash_map,map__29828):map__29828);var label__$1 = cljs.core.get.call(null,map__29828__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29828__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29828,map__29828__$1,label__$1,value,s__29822__$2,temp__4126__auto__,attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29828,map__29828__$1,label__$1,value,s__29822__$2,temp__4126__auto__,attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29821.call(null,cljs.core.rest.call(null,s__29822__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801))
,null,null));
});})(attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801))
;return iter__12290__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29820),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801){
return (function iter__29829(s__29830){return (new cljs.core.LazySeq(null,((function (attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801){
return (function (){var s__29830__$1 = s__29830;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29830__$1);if(temp__4126__auto__)
{var s__29830__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29830__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__29830__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__29832 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__29831 = (0);while(true){
if((i__29831 < size__12289__auto__))
{var map__29835 = cljs.core._nth.call(null,c__12288__auto__,i__29831);var map__29835__$1 = ((cljs.core.seq_QMARK_.call(null,map__29835))?cljs.core.apply.call(null,cljs.core.hash_map,map__29835):map__29835);var label__$1 = cljs.core.get.call(null,map__29835__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29835__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29832,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29831,map__29835,map__29835__$1,label__$1,value,c__12288__auto__,size__12289__auto__,b__29832,s__29830__$2,temp__4126__auto__,attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29831,map__29835,map__29835__$1,label__$1,value,c__12288__auto__,size__12289__auto__,b__29832,s__29830__$2,temp__4126__auto__,attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29841 = (i__29831 + (1));
i__29831 = G__29841;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29832),iter__29829.call(null,cljs.core.chunk_rest.call(null,s__29830__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29832),null);
}
} else
{var map__29836 = cljs.core.first.call(null,s__29830__$2);var map__29836__$1 = ((cljs.core.seq_QMARK_.call(null,map__29836))?cljs.core.apply.call(null,cljs.core.hash_map,map__29836):map__29836);var label__$1 = cljs.core.get.call(null,map__29836__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29836__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29836,map__29836__$1,label__$1,value,s__29830__$2,temp__4126__auto__,attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29836,map__29836__$1,label__$1,value,s__29830__$2,temp__4126__auto__,attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29829.call(null,cljs.core.rest.call(null,s__29830__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801))
,null,null));
});})(attrs29820,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801))
;return iter__12290__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___29842 = output_checker29801.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___29842))
{var error__13949__auto___29843 = temp__4126__auto___29842;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___29843)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29843,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29798,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema29798,input_schema29799,input_checker29800,output_checker29801))
,schema.core.make_fn_schema.call(null,output_schema29798,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29799], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__15794__auto___29989 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29849 = schema.core.Any;var input_schema29850 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29847","map29847",-1113724480,null))], null);var input_checker29851 = schema.core.checker.call(null,input_schema29850);var output_checker29852 = schema.core.checker.call(null,output_schema29849);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function constructor29845(G__29853){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___29990 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29853], null);var temp__4126__auto___29991 = input_checker29851.call(null,args__13948__auto___29990);if(cljs.core.truth_(temp__4126__auto___29991))
{var error__13949__auto___29992 = temp__4126__auto___29991;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29845","constructor29845",182884276,null),cljs.core.pr_str.call(null,error__13949__auto___29992)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29992,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___29990,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29850,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map29847 = G__29853;while(true){
if(cljs.core.map_QMARK_.call(null,map29847))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29847)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29847,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29848 = plumbing.fnk.schema.safe_get.call(null,map29847,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29848,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29847,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t29920 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t29920 = (function (component_spec,map29847,component_filter_rq_chan,owner,input_checker29851,data,G__29853,filter_spec,output_schema29849,output_checker29852,constructor29845,validate__13947__auto__,id,map29848,ufv__,input_schema29850,meta29921){
this.component_spec = component_spec;
this.map29847 = map29847;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.input_checker29851 = input_checker29851;
this.data = data;
this.G__29853 = G__29853;
this.filter_spec = filter_spec;
this.output_schema29849 = output_schema29849;
this.output_checker29852 = output_checker29852;
this.constructor29845 = constructor29845;
this.validate__13947__auto__ = validate__13947__auto__;
this.id = id;
this.map29848 = map29848;
this.ufv__ = ufv__;
this.input_schema29850 = input_schema29850;
this.meta29921 = meta29921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t29920.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t29920.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t29920";
clustermap.components.filters.tag_checkboxes_filter.t29920.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.filters.tag-checkboxes-filter/t29920");
});})(owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filters.tag_checkboxes_filter.t29920.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29920.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filters.tag_checkboxes_filter.t29920.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29920.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filters.tag_checkboxes_filter.t29920.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29920.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (_){var self__ = this;
var ___$1 = this;var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (state_29960){var state_val_29961 = (state_29960[(1)]);if((state_val_29961 === (7)))
{var inst_29951 = (state_29960[(2)]);var state_29960__$1 = state_29960;if(cljs.core.truth_(inst_29951))
{var statearr_29962_29993 = state_29960__$1;(statearr_29962_29993[(1)] = (11));
} else
{var statearr_29963_29994 = state_29960__$1;(statearr_29963_29994[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29961 === (1)))
{var state_29960__$1 = state_29960;var statearr_29964_29995 = state_29960__$1;(statearr_29964_29995[(2)] = null);
(statearr_29964_29995[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29961 === (4)))
{var inst_29925 = (state_29960[(7)]);var inst_29925__$1 = (state_29960[(2)]);var state_29960__$1 = (function (){var statearr_29965 = state_29960;(statearr_29965[(7)] = inst_29925__$1);
return statearr_29965;
})();if(cljs.core.truth_(inst_29925__$1))
{var statearr_29966_29996 = state_29960__$1;(statearr_29966_29996[(1)] = (5));
} else
{var statearr_29967_29997 = state_29960__$1;(statearr_29967_29997[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29961 === (13)))
{var inst_29956 = (state_29960[(2)]);var state_29960__$1 = state_29960;var statearr_29968_29998 = state_29960__$1;(statearr_29968_29998[(2)] = inst_29956);
(statearr_29968_29998[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29961 === (6)))
{var state_29960__$1 = state_29960;var statearr_29969_29999 = state_29960__$1;(statearr_29969_29999[(2)] = null);
(statearr_29969_29999[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29961 === (3)))
{var inst_29958 = (state_29960[(2)]);var state_29960__$1 = state_29960;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29960__$1,inst_29958);
} else
{if((state_val_29961 === (12)))
{var state_29960__$1 = state_29960;var statearr_29970_30000 = state_29960__$1;(statearr_29970_30000[(2)] = null);
(statearr_29970_30000[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29961 === (2)))
{var state_29960__$1 = state_29960;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29960__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29961 === (11)))
{var state_29960__$1 = state_29960;var statearr_29971_30001 = state_29960__$1;(statearr_29971_30001[(2)] = null);
(statearr_29971_30001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29961 === (9)))
{var inst_29931 = (state_29960[(8)]);var state_29960__$1 = state_29960;var statearr_29972_30002 = state_29960__$1;(statearr_29972_30002[(2)] = inst_29931);
(statearr_29972_30002[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29961 === (5)))
{var inst_29925 = (state_29960[(7)]);var inst_29931 = (state_29960[(8)]);var inst_29928 = cljs.core.nth.call(null,inst_29925,(0),null);var inst_29929 = cljs.core.nth.call(null,inst_29925,(1),null);var inst_29931__$1 = om.core.get_props.call(null,self__.owner);var inst_29932 = cljs.core.seq_QMARK_.call(null,inst_29931__$1);var state_29960__$1 = (function (){var statearr_29973 = state_29960;(statearr_29973[(9)] = inst_29929);
(statearr_29973[(10)] = inst_29928);
(statearr_29973[(8)] = inst_29931__$1);
return statearr_29973;
})();if(inst_29932)
{var statearr_29974_30003 = state_29960__$1;(statearr_29974_30003[(1)] = (8));
} else
{var statearr_29975_30004 = state_29960__$1;(statearr_29975_30004[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29961 === (10)))
{var inst_29929 = (state_29960[(9)]);var inst_29937 = (state_29960[(2)]);var inst_29938 = cljs.core.get.call(null,inst_29937,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29939 = cljs.core.get.call(null,inst_29937,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29940 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29941 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_29929];var inst_29942 = (new cljs.core.PersistentVector(null,3,(5),inst_29940,inst_29941,null));var inst_29943 = cljs.core.clj__GT_js.call(null,inst_29942);var inst_29944 = console.log(inst_29943);var inst_29945 = cljs.core.deref.call(null,inst_29938);var inst_29946 = cljs.core.deref.call(null,inst_29939);var inst_29947 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_29945,inst_29946,inst_29929);var inst_29948 = om.core.update_BANG_.call(null,inst_29938,inst_29947);var state_29960__$1 = (function (){var statearr_29976 = state_29960;(statearr_29976[(11)] = inst_29944);
(statearr_29976[(12)] = inst_29948);
return statearr_29976;
})();var statearr_29977_30005 = state_29960__$1;(statearr_29977_30005[(2)] = true);
(statearr_29977_30005[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29961 === (8)))
{var inst_29931 = (state_29960[(8)]);var inst_29934 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29931);var state_29960__$1 = state_29960;var statearr_29978_30006 = state_29960__$1;(statearr_29978_30006[(2)] = inst_29934);
(statearr_29978_30006[(1)] = (10));
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
});})(c__16733__auto__,___$1,owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_29982 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29982[(0)] = state_machine__16719__auto__);
(statearr_29982[(1)] = (1));
return statearr_29982;
});
var state_machine__16719__auto____1 = (function (state_29960){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_29960);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e29983){if((e29983 instanceof Object))
{var ex__16722__auto__ = e29983;var statearr_29984_30007 = state_29960;(statearr_29984_30007[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29960);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29983;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30008 = state_29960;
state_29960 = G__30008;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_29960){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_29960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
})();var state__16735__auto__ = (function (){var statearr_29985 = f__16734__auto__.call(null);(statearr_29985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_29985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
);
return c__16733__auto__;
});})(owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filters.tag_checkboxes_filter.t29920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (_29922){var self__ = this;
var _29922__$1 = this;return self__.meta29921;
});})(owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filters.tag_checkboxes_filter.t29920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (_29922,meta29921__$1){var self__ = this;
var _29922__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t29920(self__.component_spec,self__.map29847,self__.component_filter_rq_chan,self__.owner,self__.input_checker29851,self__.data,self__.G__29853,self__.filter_spec,self__.output_schema29849,self__.output_checker29852,self__.constructor29845,self__.validate__13947__auto__,self__.id,self__.map29848,self__.ufv__,self__.input_schema29850,meta29921__$1));
});})(owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t29920 = ((function (owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function __GT_t29920(component_spec__$1,map29847__$1,component_filter_rq_chan__$1,owner__$1,input_checker29851__$1,data__$1,G__29853__$1,filter_spec__$1,output_schema29849__$1,output_checker29852__$1,constructor29845__$1,validate__13947__auto____$1,id__$1,map29848__$1,ufv____$1,input_schema29850__$1,meta29921){return (new clustermap.components.filters.tag_checkboxes_filter.t29920(component_spec__$1,map29847__$1,component_filter_rq_chan__$1,owner__$1,input_checker29851__$1,data__$1,G__29853__$1,filter_spec__$1,output_schema29849__$1,output_checker29852__$1,constructor29845__$1,validate__13947__auto____$1,id__$1,map29848__$1,ufv____$1,input_schema29850__$1,meta29921));
});})(owner,component_filter_rq_chan,map29848,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t29920(component_spec,map29847,component_filter_rq_chan,owner,input_checker29851,data,G__29853,filter_spec,output_schema29849,output_checker29852,constructor29845,validate__13947__auto__,id,map29848,ufv__,input_schema29850,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___30009 = output_checker29852.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___30009))
{var error__13949__auto___30010 = temp__4126__auto___30009;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29845","constructor29845",182884276,null),cljs.core.pr_str.call(null,error__13949__auto___30010)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___30010,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29849,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
,schema.core.make_fn_schema.call(null,output_schema29849,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29850], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__15794__auto___29989){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__15795__auto__,owner29844,p__29986){var vec__29988 = p__29986;var opts__15796__auto__ = cljs.core.nth.call(null,vec__29988,(0),null);return component_fnk__15794__auto___29989.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29844,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var tag_checkboxes_filter_component = function (data__15795__auto__,owner29844,var_args){
var p__29986 = null;if (arguments.length > 2) {
  p__29986 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__15795__auto__,owner29844,p__29986);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30011){
var data__15795__auto__ = cljs.core.first(arglist__30011);
arglist__30011 = cljs.core.next(arglist__30011);
var owner29844 = cljs.core.first(arglist__30011);
var p__29986 = cljs.core.rest(arglist__30011);
return tag_checkboxes_filter_component__delegate(data__15795__auto__,owner29844,p__29986);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__15794__auto___29989))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__15763__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__15763__auto__,m29846){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__15763__auto__,m29846);
});
__GT_tag_checkboxes_filter_component = function(cursor__15763__auto__,m29846){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__15763__auto__,m29846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;

//# sourceMappingURL=tag_checkboxes_filter.js.map