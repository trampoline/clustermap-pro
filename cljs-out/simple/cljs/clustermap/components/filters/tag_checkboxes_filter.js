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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29328(s__29329){return (new cljs.core.LazySeq(null,(function (){var s__29329__$1 = s__29329;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29329__$1);if(temp__4126__auto__)
{var s__29329__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29329__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29329__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29331 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29330 = (0);while(true){
if((i__29330 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__29330);cljs.core.chunk_append.call(null,b__29331,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__29332 = (i__29330 + (1));
i__29330 = G__29332;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29331),iter__29328.call(null,cljs.core.chunk_rest.call(null,s__29329__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29331),null);
}
} else
{var t = cljs.core.first.call(null,s__29329__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__29328.call(null,cljs.core.rest.call(null,s__29329__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29333_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29333_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__29334,value){var map__29336 = p__29334;var map__29336__$1 = ((cljs.core.seq_QMARK_.call(null,map__29336))?cljs.core.apply.call(null,cljs.core.hash_map,map__29336):map__29336);var component_spec = map__29336__$1;var tags = cljs.core.get.call(null,map__29336__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29336__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__29337_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__29337_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__29339,values){var map__29341 = p__29339;var map__29341__$1 = ((cljs.core.seq_QMARK_.call(null,map__29341))?cljs.core.apply.call(null,cljs.core.hash_map,map__29341):map__29341);var component_spec = map__29341__$1;var sorted = cljs.core.get.call(null,map__29341__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__29341__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29341__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29341,map__29341__$1,component_spec,sorted,tags,label){
return (function (p1__29338_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29338_SHARP_));
});})(values__$1,map__29341,map__29341__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29342,values){var map__29344 = p__29342;var map__29344__$1 = ((cljs.core.seq_QMARK_.call(null,map__29344))?cljs.core.apply.call(null,cljs.core.hash_map,map__29344):map__29344);var component_spec = map__29344__$1;var tags = cljs.core.get.call(null,map__29344__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29344__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__29345){var map__29347 = p__29345;var map__29347__$1 = ((cljs.core.seq_QMARK_.call(null,map__29347))?cljs.core.apply.call(null,cljs.core.hash_map,map__29347):map__29347);var component_spec = map__29347__$1;var tags = cljs.core.get.call(null,map__29347__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29347__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__29348){var map__29350 = p__29348;var map__29350__$1 = ((cljs.core.seq_QMARK_.call(null,map__29350))?cljs.core.apply.call(null,cljs.core.hash_map,map__29350):map__29350);var component_spec = map__29350__$1;var tags = cljs.core.get.call(null,map__29350__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29350__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29352 = schema.core.Any;var input_schema29353 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29351","map29351",1452462207,null))], null);var input_checker29354 = schema.core.checker.call(null,input_schema29353);var output_checker29355 = schema.core.checker.call(null,output_schema29352);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355){
return (function render_STAR_(G__29356){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29391 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29356], null);var temp__4126__auto___29392 = input_checker29354.call(null,args__6035__auto___29391);if(cljs.core.truth_(temp__4126__auto___29392))
{var error__6036__auto___29393 = temp__4126__auto___29392;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29393)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29393,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29391,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29353,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29351 = G__29356;while(true){
if(cljs.core.map_QMARK_.call(null,map29351))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29351)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29351,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29351,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs29374 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29374))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs29374)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29374))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355){
return (function iter__29375(s__29376){return (new cljs.core.LazySeq(null,((function (attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355){
return (function (){var s__29376__$1 = s__29376;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29376__$1);if(temp__4126__auto__)
{var s__29376__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29376__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29376__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29378 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29377 = (0);while(true){
if((i__29377 < size__4376__auto__))
{var map__29381 = cljs.core._nth.call(null,c__4375__auto__,i__29377);var map__29381__$1 = ((cljs.core.seq_QMARK_.call(null,map__29381))?cljs.core.apply.call(null,cljs.core.hash_map,map__29381):map__29381);var label__$1 = cljs.core.get.call(null,map__29381__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29381__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29378,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29377,map__29381,map__29381__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29378,s__29376__$2,temp__4126__auto__,attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29377,map__29381,map__29381__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29378,s__29376__$2,temp__4126__auto__,attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29394 = (i__29377 + (1));
i__29377 = G__29394;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29378),iter__29375.call(null,cljs.core.chunk_rest.call(null,s__29376__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29378),null);
}
} else
{var map__29382 = cljs.core.first.call(null,s__29376__$2);var map__29382__$1 = ((cljs.core.seq_QMARK_.call(null,map__29382))?cljs.core.apply.call(null,cljs.core.hash_map,map__29382):map__29382);var label__$1 = cljs.core.get.call(null,map__29382__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29382__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29382,map__29382__$1,label__$1,value,s__29376__$2,temp__4126__auto__,attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29382,map__29382__$1,label__$1,value,s__29376__$2,temp__4126__auto__,attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29375.call(null,cljs.core.rest.call(null,s__29376__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355))
,null,null));
});})(attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29374),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355){
return (function iter__29383(s__29384){return (new cljs.core.LazySeq(null,((function (attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355){
return (function (){var s__29384__$1 = s__29384;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29384__$1);if(temp__4126__auto__)
{var s__29384__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29384__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29384__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29386 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29385 = (0);while(true){
if((i__29385 < size__4376__auto__))
{var map__29389 = cljs.core._nth.call(null,c__4375__auto__,i__29385);var map__29389__$1 = ((cljs.core.seq_QMARK_.call(null,map__29389))?cljs.core.apply.call(null,cljs.core.hash_map,map__29389):map__29389);var label__$1 = cljs.core.get.call(null,map__29389__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29389__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29386,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29385,map__29389,map__29389__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29386,s__29384__$2,temp__4126__auto__,attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29385,map__29389,map__29389__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29386,s__29384__$2,temp__4126__auto__,attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29395 = (i__29385 + (1));
i__29385 = G__29395;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29386),iter__29383.call(null,cljs.core.chunk_rest.call(null,s__29384__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29386),null);
}
} else
{var map__29390 = cljs.core.first.call(null,s__29384__$2);var map__29390__$1 = ((cljs.core.seq_QMARK_.call(null,map__29390))?cljs.core.apply.call(null,cljs.core.hash_map,map__29390):map__29390);var label__$1 = cljs.core.get.call(null,map__29390__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29390__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29390,map__29390__$1,label__$1,value,s__29384__$2,temp__4126__auto__,attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29390,map__29390__$1,label__$1,value,s__29384__$2,temp__4126__auto__,attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29383.call(null,cljs.core.rest.call(null,s__29384__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355))
,null,null));
});})(attrs29374,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29396 = output_checker29355.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29396))
{var error__6036__auto___29397 = temp__4126__auto___29396;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29397)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29397,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29352,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29352,input_schema29353,input_checker29354,output_checker29355))
,schema.core.make_fn_schema.call(null,output_schema29352,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29353], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29543 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29403 = schema.core.Any;var input_schema29404 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29401","map29401",-452953622,null))], null);var input_checker29405 = schema.core.checker.call(null,input_schema29404);var output_checker29406 = schema.core.checker.call(null,output_schema29403);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function constructor29399(G__29407){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29544 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29407], null);var temp__4126__auto___29545 = input_checker29405.call(null,args__6035__auto___29544);if(cljs.core.truth_(temp__4126__auto___29545))
{var error__6036__auto___29546 = temp__4126__auto___29545;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29399","constructor29399",-1371953417,null),cljs.core.pr_str.call(null,error__6036__auto___29546)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29546,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29544,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29404,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29401 = G__29407;while(true){
if(cljs.core.map_QMARK_.call(null,map29401))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29401)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29401,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29402 = plumbing.fnk.schema.safe_get.call(null,map29401,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29402,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29401,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t29474 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t29474 = (function (component_spec,component_filter_rq_chan,G__29407,owner,data,map29401,output_schema29403,input_checker29405,filter_spec,output_checker29406,constructor29399,validate__6034__auto__,id,map29402,ufv__,input_schema29404,meta29475){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.G__29407 = G__29407;
this.owner = owner;
this.data = data;
this.map29401 = map29401;
this.output_schema29403 = output_schema29403;
this.input_checker29405 = input_checker29405;
this.filter_spec = filter_spec;
this.output_checker29406 = output_checker29406;
this.constructor29399 = constructor29399;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map29402 = map29402;
this.ufv__ = ufv__;
this.input_schema29404 = input_schema29404;
this.meta29475 = meta29475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t29474.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t29474.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t29474";
clustermap.components.filters.tag_checkboxes_filter.t29474.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t29474");
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
clustermap.components.filters.tag_checkboxes_filter.t29474.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29474.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
clustermap.components.filters.tag_checkboxes_filter.t29474.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29474.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
clustermap.components.filters.tag_checkboxes_filter.t29474.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29474.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (_){var self__ = this;
var ___$1 = this;var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (state_29514){var state_val_29515 = (state_29514[(1)]);if((state_val_29515 === (7)))
{var inst_29505 = (state_29514[(2)]);var state_29514__$1 = state_29514;if(cljs.core.truth_(inst_29505))
{var statearr_29516_29547 = state_29514__$1;(statearr_29516_29547[(1)] = (11));
} else
{var statearr_29517_29548 = state_29514__$1;(statearr_29517_29548[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (1)))
{var state_29514__$1 = state_29514;var statearr_29518_29549 = state_29514__$1;(statearr_29518_29549[(2)] = null);
(statearr_29518_29549[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (4)))
{var inst_29479 = (state_29514[(7)]);var inst_29479__$1 = (state_29514[(2)]);var state_29514__$1 = (function (){var statearr_29519 = state_29514;(statearr_29519[(7)] = inst_29479__$1);
return statearr_29519;
})();if(cljs.core.truth_(inst_29479__$1))
{var statearr_29520_29550 = state_29514__$1;(statearr_29520_29550[(1)] = (5));
} else
{var statearr_29521_29551 = state_29514__$1;(statearr_29521_29551[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (13)))
{var inst_29510 = (state_29514[(2)]);var state_29514__$1 = state_29514;var statearr_29522_29552 = state_29514__$1;(statearr_29522_29552[(2)] = inst_29510);
(statearr_29522_29552[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (6)))
{var state_29514__$1 = state_29514;var statearr_29523_29553 = state_29514__$1;(statearr_29523_29553[(2)] = null);
(statearr_29523_29553[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (3)))
{var inst_29512 = (state_29514[(2)]);var state_29514__$1 = state_29514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29514__$1,inst_29512);
} else
{if((state_val_29515 === (12)))
{var state_29514__$1 = state_29514;var statearr_29524_29554 = state_29514__$1;(statearr_29524_29554[(2)] = null);
(statearr_29524_29554[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (2)))
{var state_29514__$1 = state_29514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29514__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29515 === (11)))
{var state_29514__$1 = state_29514;var statearr_29525_29555 = state_29514__$1;(statearr_29525_29555[(2)] = null);
(statearr_29525_29555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (9)))
{var inst_29485 = (state_29514[(8)]);var state_29514__$1 = state_29514;var statearr_29526_29556 = state_29514__$1;(statearr_29526_29556[(2)] = inst_29485);
(statearr_29526_29556[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (5)))
{var inst_29479 = (state_29514[(7)]);var inst_29485 = (state_29514[(8)]);var inst_29482 = cljs.core.nth.call(null,inst_29479,(0),null);var inst_29483 = cljs.core.nth.call(null,inst_29479,(1),null);var inst_29485__$1 = om.core.get_props.call(null,self__.owner);var inst_29486 = cljs.core.seq_QMARK_.call(null,inst_29485__$1);var state_29514__$1 = (function (){var statearr_29527 = state_29514;(statearr_29527[(8)] = inst_29485__$1);
(statearr_29527[(9)] = inst_29482);
(statearr_29527[(10)] = inst_29483);
return statearr_29527;
})();if(inst_29486)
{var statearr_29528_29557 = state_29514__$1;(statearr_29528_29557[(1)] = (8));
} else
{var statearr_29529_29558 = state_29514__$1;(statearr_29529_29558[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (10)))
{var inst_29483 = (state_29514[(10)]);var inst_29491 = (state_29514[(2)]);var inst_29492 = cljs.core.get.call(null,inst_29491,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29493 = cljs.core.get.call(null,inst_29491,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29494 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29495 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_29483];var inst_29496 = (new cljs.core.PersistentVector(null,3,(5),inst_29494,inst_29495,null));var inst_29497 = cljs.core.clj__GT_js.call(null,inst_29496);var inst_29498 = console.log(inst_29497);var inst_29499 = cljs.core.deref.call(null,inst_29492);var inst_29500 = cljs.core.deref.call(null,inst_29493);var inst_29501 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_29499,inst_29500,inst_29483);var inst_29502 = om.core.update_BANG_.call(null,inst_29492,inst_29501);var state_29514__$1 = (function (){var statearr_29530 = state_29514;(statearr_29530[(11)] = inst_29502);
(statearr_29530[(12)] = inst_29498);
return statearr_29530;
})();var statearr_29531_29559 = state_29514__$1;(statearr_29531_29559[(2)] = true);
(statearr_29531_29559[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (8)))
{var inst_29485 = (state_29514[(8)]);var inst_29488 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29485);var state_29514__$1 = state_29514;var statearr_29532_29560 = state_29514__$1;(statearr_29532_29560[(2)] = inst_29488);
(statearr_29532_29560[(1)] = (10));
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
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_29536 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29536[(0)] = state_machine__11099__auto__);
(statearr_29536[(1)] = (1));
return statearr_29536;
});
var state_machine__11099__auto____1 = (function (state_29514){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_29514);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e29537){if((e29537 instanceof Object))
{var ex__11102__auto__ = e29537;var statearr_29538_29561 = state_29514;(statearr_29538_29561[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29514);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29537;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29562 = state_29514;
state_29514 = G__29562;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_29514){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_29514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
})();var state__11156__auto__ = (function (){var statearr_29539 = f__11155__auto__.call(null);(statearr_29539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_29539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
);
return c__11154__auto__;
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
clustermap.components.filters.tag_checkboxes_filter.t29474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (_29476){var self__ = this;
var _29476__$1 = this;return self__.meta29475;
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
clustermap.components.filters.tag_checkboxes_filter.t29474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (_29476,meta29475__$1){var self__ = this;
var _29476__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t29474(self__.component_spec,self__.component_filter_rq_chan,self__.G__29407,self__.owner,self__.data,self__.map29401,self__.output_schema29403,self__.input_checker29405,self__.filter_spec,self__.output_checker29406,self__.constructor29399,self__.validate__6034__auto__,self__.id,self__.map29402,self__.ufv__,self__.input_schema29404,meta29475__$1));
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t29474 = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function __GT_t29474(component_spec__$1,component_filter_rq_chan__$1,G__29407__$1,owner__$1,data__$1,map29401__$1,output_schema29403__$1,input_checker29405__$1,filter_spec__$1,output_checker29406__$1,constructor29399__$1,validate__6034__auto____$1,id__$1,map29402__$1,ufv____$1,input_schema29404__$1,meta29475){return (new clustermap.components.filters.tag_checkboxes_filter.t29474(component_spec__$1,component_filter_rq_chan__$1,G__29407__$1,owner__$1,data__$1,map29401__$1,output_schema29403__$1,input_checker29405__$1,filter_spec__$1,output_checker29406__$1,constructor29399__$1,validate__6034__auto____$1,id__$1,map29402__$1,ufv____$1,input_schema29404__$1,meta29475));
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t29474(component_spec,component_filter_rq_chan,G__29407,owner,data,map29401,output_schema29403,input_checker29405,filter_spec,output_checker29406,constructor29399,validate__6034__auto__,id,map29402,ufv__,input_schema29404,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29563 = output_checker29406.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29563))
{var error__6036__auto___29564 = temp__4126__auto___29563;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29399","constructor29399",-1371953417,null),cljs.core.pr_str.call(null,error__6036__auto___29564)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29564,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29403,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
,schema.core.make_fn_schema.call(null,output_schema29403,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29404], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___29543){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner29398,p__29540){var vec__29542 = p__29540;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29542,(0),null);return component_fnk__7881__auto___29543.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29398,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner29398,var_args){
var p__29540 = null;if (arguments.length > 2) {
  p__29540 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29398,p__29540);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29565){
var data__7882__auto__ = cljs.core.first(arglist__29565);
arglist__29565 = cljs.core.next(arglist__29565);
var owner29398 = cljs.core.first(arglist__29565);
var p__29540 = cljs.core.rest(arglist__29565);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner29398,p__29540);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29543))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29400){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m29400);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m29400){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
