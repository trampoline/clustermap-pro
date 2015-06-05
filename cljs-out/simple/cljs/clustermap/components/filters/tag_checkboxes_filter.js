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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29304(s__29305){return (new cljs.core.LazySeq(null,(function (){var s__29305__$1 = s__29305;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29305__$1);if(temp__4126__auto__)
{var s__29305__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29305__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29305__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29307 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29306 = (0);while(true){
if((i__29306 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__29306);cljs.core.chunk_append.call(null,b__29307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__29308 = (i__29306 + (1));
i__29306 = G__29308;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29307),iter__29304.call(null,cljs.core.chunk_rest.call(null,s__29305__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29307),null);
}
} else
{var t = cljs.core.first.call(null,s__29305__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__29304.call(null,cljs.core.rest.call(null,s__29305__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29309_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29309_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__29310,value){var map__29312 = p__29310;var map__29312__$1 = ((cljs.core.seq_QMARK_.call(null,map__29312))?cljs.core.apply.call(null,cljs.core.hash_map,map__29312):map__29312);var component_spec = map__29312__$1;var tags = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__29313_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__29313_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__29315,values){var map__29317 = p__29315;var map__29317__$1 = ((cljs.core.seq_QMARK_.call(null,map__29317))?cljs.core.apply.call(null,cljs.core.hash_map,map__29317):map__29317);var component_spec = map__29317__$1;var sorted = cljs.core.get.call(null,map__29317__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__29317__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29317__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29317,map__29317__$1,component_spec,sorted,tags,label){
return (function (p1__29314_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29314_SHARP_));
});})(values__$1,map__29317,map__29317__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29318,values){var map__29320 = p__29318;var map__29320__$1 = ((cljs.core.seq_QMARK_.call(null,map__29320))?cljs.core.apply.call(null,cljs.core.hash_map,map__29320):map__29320);var component_spec = map__29320__$1;var tags = cljs.core.get.call(null,map__29320__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29320__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__29321){var map__29323 = p__29321;var map__29323__$1 = ((cljs.core.seq_QMARK_.call(null,map__29323))?cljs.core.apply.call(null,cljs.core.hash_map,map__29323):map__29323);var component_spec = map__29323__$1;var tags = cljs.core.get.call(null,map__29323__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29323__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__29324){var map__29326 = p__29324;var map__29326__$1 = ((cljs.core.seq_QMARK_.call(null,map__29326))?cljs.core.apply.call(null,cljs.core.hash_map,map__29326):map__29326);var component_spec = map__29326__$1;var tags = cljs.core.get.call(null,map__29326__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29326__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29328 = schema.core.Any;var input_schema29329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29327","map29327",-1792168756,null))], null);var input_checker29330 = schema.core.checker.call(null,input_schema29329);var output_checker29331 = schema.core.checker.call(null,output_schema29328);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331){
return (function render_STAR_(G__29332){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29332], null);var temp__4126__auto___29368 = input_checker29330.call(null,args__6035__auto___29367);if(cljs.core.truth_(temp__4126__auto___29368))
{var error__6036__auto___29369 = temp__4126__auto___29368;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29369)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29369,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29367,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29329,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29327 = G__29332;while(true){
if(cljs.core.map_QMARK_.call(null,map29327))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29327)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29327,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29327,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs29350 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29350))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs29350)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29350))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331){
return (function iter__29351(s__29352){return (new cljs.core.LazySeq(null,((function (attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331){
return (function (){var s__29352__$1 = s__29352;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29352__$1);if(temp__4126__auto__)
{var s__29352__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29352__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29352__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29354 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29353 = (0);while(true){
if((i__29353 < size__4376__auto__))
{var map__29357 = cljs.core._nth.call(null,c__4375__auto__,i__29353);var map__29357__$1 = ((cljs.core.seq_QMARK_.call(null,map__29357))?cljs.core.apply.call(null,cljs.core.hash_map,map__29357):map__29357);var label__$1 = cljs.core.get.call(null,map__29357__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29357__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29354,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29353,map__29357,map__29357__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29354,s__29352__$2,temp__4126__auto__,attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29353,map__29357,map__29357__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29354,s__29352__$2,temp__4126__auto__,attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29370 = (i__29353 + (1));
i__29353 = G__29370;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29354),iter__29351.call(null,cljs.core.chunk_rest.call(null,s__29352__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29354),null);
}
} else
{var map__29358 = cljs.core.first.call(null,s__29352__$2);var map__29358__$1 = ((cljs.core.seq_QMARK_.call(null,map__29358))?cljs.core.apply.call(null,cljs.core.hash_map,map__29358):map__29358);var label__$1 = cljs.core.get.call(null,map__29358__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29358__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29358,map__29358__$1,label__$1,value,s__29352__$2,temp__4126__auto__,attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29358,map__29358__$1,label__$1,value,s__29352__$2,temp__4126__auto__,attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29351.call(null,cljs.core.rest.call(null,s__29352__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331))
,null,null));
});})(attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29350),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331){
return (function iter__29359(s__29360){return (new cljs.core.LazySeq(null,((function (attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331){
return (function (){var s__29360__$1 = s__29360;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29360__$1);if(temp__4126__auto__)
{var s__29360__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29360__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29360__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29362 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29361 = (0);while(true){
if((i__29361 < size__4376__auto__))
{var map__29365 = cljs.core._nth.call(null,c__4375__auto__,i__29361);var map__29365__$1 = ((cljs.core.seq_QMARK_.call(null,map__29365))?cljs.core.apply.call(null,cljs.core.hash_map,map__29365):map__29365);var label__$1 = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29362,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29361,map__29365,map__29365__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29362,s__29360__$2,temp__4126__auto__,attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29361,map__29365,map__29365__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29362,s__29360__$2,temp__4126__auto__,attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29371 = (i__29361 + (1));
i__29361 = G__29371;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29362),iter__29359.call(null,cljs.core.chunk_rest.call(null,s__29360__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29362),null);
}
} else
{var map__29366 = cljs.core.first.call(null,s__29360__$2);var map__29366__$1 = ((cljs.core.seq_QMARK_.call(null,map__29366))?cljs.core.apply.call(null,cljs.core.hash_map,map__29366):map__29366);var label__$1 = cljs.core.get.call(null,map__29366__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29366__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29366,map__29366__$1,label__$1,value,s__29360__$2,temp__4126__auto__,attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29366,map__29366__$1,label__$1,value,s__29360__$2,temp__4126__auto__,attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29359.call(null,cljs.core.rest.call(null,s__29360__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331))
,null,null));
});})(attrs29350,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29372 = output_checker29331.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29372))
{var error__6036__auto___29373 = temp__4126__auto___29372;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29373)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29373,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29328,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29328,input_schema29329,input_checker29330,output_checker29331))
,schema.core.make_fn_schema.call(null,output_schema29328,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29329], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29519 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29379 = schema.core.Any;var input_schema29380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29377","map29377",326576310,null))], null);var input_checker29381 = schema.core.checker.call(null,input_schema29380);var output_checker29382 = schema.core.checker.call(null,output_schema29379);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382){
return (function constructor29375(G__29383){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29520 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29383], null);var temp__4126__auto___29521 = input_checker29381.call(null,args__6035__auto___29520);if(cljs.core.truth_(temp__4126__auto___29521))
{var error__6036__auto___29522 = temp__4126__auto___29521;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29375","constructor29375",1493410972,null),cljs.core.pr_str.call(null,error__6036__auto___29522)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29522,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29520,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29380,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29377 = G__29383;while(true){
if(cljs.core.map_QMARK_.call(null,map29377))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29377)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29377,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29378 = plumbing.fnk.schema.safe_get.call(null,map29377,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29378,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29377,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t29450 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t29450 = (function (component_spec,component_filter_rq_chan,input_schema29380,owner,G__29383,data,output_checker29382,filter_spec,map29378,map29377,validate__6034__auto__,output_schema29379,id,constructor29375,ufv__,input_checker29381,meta29451){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema29380 = input_schema29380;
this.owner = owner;
this.G__29383 = G__29383;
this.data = data;
this.output_checker29382 = output_checker29382;
this.filter_spec = filter_spec;
this.map29378 = map29378;
this.map29377 = map29377;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_schema29379 = output_schema29379;
this.id = id;
this.constructor29375 = constructor29375;
this.ufv__ = ufv__;
this.input_checker29381 = input_checker29381;
this.meta29451 = meta29451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t29450.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t29450.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t29450";
clustermap.components.filters.tag_checkboxes_filter.t29450.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t29450");
});})(owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382))
;
clustermap.components.filters.tag_checkboxes_filter.t29450.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29450.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382))
;
clustermap.components.filters.tag_checkboxes_filter.t29450.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29450.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382))
;
clustermap.components.filters.tag_checkboxes_filter.t29450.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29450.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382){
return (function (state_29490){var state_val_29491 = (state_29490[(1)]);if((state_val_29491 === (7)))
{var inst_29481 = (state_29490[(2)]);var state_29490__$1 = state_29490;if(cljs.core.truth_(inst_29481))
{var statearr_29492_29523 = state_29490__$1;(statearr_29492_29523[(1)] = (11));
} else
{var statearr_29493_29524 = state_29490__$1;(statearr_29493_29524[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29491 === (1)))
{var state_29490__$1 = state_29490;var statearr_29494_29525 = state_29490__$1;(statearr_29494_29525[(2)] = null);
(statearr_29494_29525[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29491 === (4)))
{var inst_29455 = (state_29490[(7)]);var inst_29455__$1 = (state_29490[(2)]);var state_29490__$1 = (function (){var statearr_29495 = state_29490;(statearr_29495[(7)] = inst_29455__$1);
return statearr_29495;
})();if(cljs.core.truth_(inst_29455__$1))
{var statearr_29496_29526 = state_29490__$1;(statearr_29496_29526[(1)] = (5));
} else
{var statearr_29497_29527 = state_29490__$1;(statearr_29497_29527[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29491 === (13)))
{var inst_29486 = (state_29490[(2)]);var state_29490__$1 = state_29490;var statearr_29498_29528 = state_29490__$1;(statearr_29498_29528[(2)] = inst_29486);
(statearr_29498_29528[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29491 === (6)))
{var state_29490__$1 = state_29490;var statearr_29499_29529 = state_29490__$1;(statearr_29499_29529[(2)] = null);
(statearr_29499_29529[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29491 === (3)))
{var inst_29488 = (state_29490[(2)]);var state_29490__$1 = state_29490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29490__$1,inst_29488);
} else
{if((state_val_29491 === (12)))
{var state_29490__$1 = state_29490;var statearr_29500_29530 = state_29490__$1;(statearr_29500_29530[(2)] = null);
(statearr_29500_29530[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29491 === (2)))
{var state_29490__$1 = state_29490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29490__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29491 === (11)))
{var state_29490__$1 = state_29490;var statearr_29501_29531 = state_29490__$1;(statearr_29501_29531[(2)] = null);
(statearr_29501_29531[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29491 === (9)))
{var inst_29461 = (state_29490[(8)]);var state_29490__$1 = state_29490;var statearr_29502_29532 = state_29490__$1;(statearr_29502_29532[(2)] = inst_29461);
(statearr_29502_29532[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29491 === (5)))
{var inst_29461 = (state_29490[(8)]);var inst_29455 = (state_29490[(7)]);var inst_29458 = cljs.core.nth.call(null,inst_29455,(0),null);var inst_29459 = cljs.core.nth.call(null,inst_29455,(1),null);var inst_29461__$1 = om.core.get_props.call(null,self__.owner);var inst_29462 = cljs.core.seq_QMARK_.call(null,inst_29461__$1);var state_29490__$1 = (function (){var statearr_29503 = state_29490;(statearr_29503[(8)] = inst_29461__$1);
(statearr_29503[(9)] = inst_29459);
(statearr_29503[(10)] = inst_29458);
return statearr_29503;
})();if(inst_29462)
{var statearr_29504_29533 = state_29490__$1;(statearr_29504_29533[(1)] = (8));
} else
{var statearr_29505_29534 = state_29490__$1;(statearr_29505_29534[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29491 === (10)))
{var inst_29459 = (state_29490[(9)]);var inst_29467 = (state_29490[(2)]);var inst_29468 = cljs.core.get.call(null,inst_29467,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29469 = cljs.core.get.call(null,inst_29467,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29470 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29471 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_29459];var inst_29472 = (new cljs.core.PersistentVector(null,3,(5),inst_29470,inst_29471,null));var inst_29473 = cljs.core.clj__GT_js.call(null,inst_29472);var inst_29474 = console.log(inst_29473);var inst_29475 = cljs.core.deref.call(null,inst_29468);var inst_29476 = cljs.core.deref.call(null,inst_29469);var inst_29477 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_29475,inst_29476,inst_29459);var inst_29478 = om.core.update_BANG_.call(null,inst_29468,inst_29477);var state_29490__$1 = (function (){var statearr_29506 = state_29490;(statearr_29506[(11)] = inst_29474);
(statearr_29506[(12)] = inst_29478);
return statearr_29506;
})();var statearr_29507_29535 = state_29490__$1;(statearr_29507_29535[(2)] = true);
(statearr_29507_29535[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29491 === (8)))
{var inst_29461 = (state_29490[(8)]);var inst_29464 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29461);var state_29490__$1 = state_29490;var statearr_29508_29536 = state_29490__$1;(statearr_29508_29536[(2)] = inst_29464);
(statearr_29508_29536[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29512 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29512[(0)] = state_machine__11462__auto__);
(statearr_29512[(1)] = (1));
return statearr_29512;
});
var state_machine__11462__auto____1 = (function (state_29490){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29490);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29513){if((e29513 instanceof Object))
{var ex__11465__auto__ = e29513;var statearr_29514_29537 = state_29490;(statearr_29514_29537[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29513;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29538 = state_29490;
state_29490 = G__29538;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29490){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382))
})();var state__11519__auto__ = (function (){var statearr_29515 = f__11518__auto__.call(null);(statearr_29515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382))
;
clustermap.components.filters.tag_checkboxes_filter.t29450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382){
return (function (_29452){var self__ = this;
var _29452__$1 = this;return self__.meta29451;
});})(owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382))
;
clustermap.components.filters.tag_checkboxes_filter.t29450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382){
return (function (_29452,meta29451__$1){var self__ = this;
var _29452__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t29450(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema29380,self__.owner,self__.G__29383,self__.data,self__.output_checker29382,self__.filter_spec,self__.map29378,self__.map29377,self__.validate__6034__auto__,self__.output_schema29379,self__.id,self__.constructor29375,self__.ufv__,self__.input_checker29381,meta29451__$1));
});})(owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t29450 = ((function (owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382){
return (function __GT_t29450(component_spec__$1,component_filter_rq_chan__$1,input_schema29380__$1,owner__$1,G__29383__$1,data__$1,output_checker29382__$1,filter_spec__$1,map29378__$1,map29377__$1,validate__6034__auto____$1,output_schema29379__$1,id__$1,constructor29375__$1,ufv____$1,input_checker29381__$1,meta29451){return (new clustermap.components.filters.tag_checkboxes_filter.t29450(component_spec__$1,component_filter_rq_chan__$1,input_schema29380__$1,owner__$1,G__29383__$1,data__$1,output_checker29382__$1,filter_spec__$1,map29378__$1,map29377__$1,validate__6034__auto____$1,output_schema29379__$1,id__$1,constructor29375__$1,ufv____$1,input_checker29381__$1,meta29451));
});})(owner,component_filter_rq_chan,map29378,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t29450(component_spec,component_filter_rq_chan,input_schema29380,owner,G__29383,data,output_checker29382,filter_spec,map29378,map29377,validate__6034__auto__,output_schema29379,id,constructor29375,ufv__,input_checker29381,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29539 = output_checker29382.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29539))
{var error__6036__auto___29540 = temp__4126__auto___29539;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29375","constructor29375",1493410972,null),cljs.core.pr_str.call(null,error__6036__auto___29540)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29540,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29379,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29379,input_schema29380,input_checker29381,output_checker29382))
,schema.core.make_fn_schema.call(null,output_schema29379,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29380], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___29519){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner29374,p__29516){var vec__29518 = p__29516;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29518,(0),null);return component_fnk__7881__auto___29519.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29374,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner29374,var_args){
var p__29516 = null;if (arguments.length > 2) {
  p__29516 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29374,p__29516);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29541){
var data__7882__auto__ = cljs.core.first(arglist__29541);
arglist__29541 = cljs.core.next(arglist__29541);
var owner29374 = cljs.core.first(arglist__29541);
var p__29516 = cljs.core.rest(arglist__29541);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner29374,p__29516);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29519))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29376){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m29376);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m29376){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
