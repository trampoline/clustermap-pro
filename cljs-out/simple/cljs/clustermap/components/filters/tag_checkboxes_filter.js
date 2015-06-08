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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30127(s__30128){return (new cljs.core.LazySeq(null,(function (){var s__30128__$1 = s__30128;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30128__$1);if(temp__4126__auto__)
{var s__30128__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30128__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30128__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30130 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30129 = (0);while(true){
if((i__30129 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__30129);cljs.core.chunk_append.call(null,b__30130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__30131 = (i__30129 + (1));
i__30129 = G__30131;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30130),iter__30127.call(null,cljs.core.chunk_rest.call(null,s__30128__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30130),null);
}
} else
{var t = cljs.core.first.call(null,s__30128__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__30127.call(null,cljs.core.rest.call(null,s__30128__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30132_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30132_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__30133,value){var map__30135 = p__30133;var map__30135__$1 = ((cljs.core.seq_QMARK_.call(null,map__30135))?cljs.core.apply.call(null,cljs.core.hash_map,map__30135):map__30135);var component_spec = map__30135__$1;var tags = cljs.core.get.call(null,map__30135__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30135__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__30136_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__30136_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__30138,values){var map__30140 = p__30138;var map__30140__$1 = ((cljs.core.seq_QMARK_.call(null,map__30140))?cljs.core.apply.call(null,cljs.core.hash_map,map__30140):map__30140);var component_spec = map__30140__$1;var sorted = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30140__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__30140,map__30140__$1,component_spec,sorted,tags,label){
return (function (p1__30137_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30137_SHARP_));
});})(values__$1,map__30140,map__30140__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__30141,values){var map__30143 = p__30141;var map__30143__$1 = ((cljs.core.seq_QMARK_.call(null,map__30143))?cljs.core.apply.call(null,cljs.core.hash_map,map__30143):map__30143);var component_spec = map__30143__$1;var tags = cljs.core.get.call(null,map__30143__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30143__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__30144){var map__30146 = p__30144;var map__30146__$1 = ((cljs.core.seq_QMARK_.call(null,map__30146))?cljs.core.apply.call(null,cljs.core.hash_map,map__30146):map__30146);var component_spec = map__30146__$1;var tags = cljs.core.get.call(null,map__30146__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30146__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__30147){var map__30149 = p__30147;var map__30149__$1 = ((cljs.core.seq_QMARK_.call(null,map__30149))?cljs.core.apply.call(null,cljs.core.hash_map,map__30149):map__30149);var component_spec = map__30149__$1;var tags = cljs.core.get.call(null,map__30149__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30149__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30151 = schema.core.Any;var input_schema30152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30150","map30150",-497085843,null))], null);var input_checker30153 = schema.core.checker.call(null,input_schema30152);var output_checker30154 = schema.core.checker.call(null,output_schema30151);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154){
return (function render_STAR_(G__30155){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30155], null);var temp__4126__auto___30191 = input_checker30153.call(null,args__6035__auto___30190);if(cljs.core.truth_(temp__4126__auto___30191))
{var error__6036__auto___30192 = temp__4126__auto___30191;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30192)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30192,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30190,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30152,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30150 = G__30155;while(true){
if(cljs.core.map_QMARK_.call(null,map30150))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30150)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30150,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30150,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs30173 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs30173))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs30173)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30173))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154){
return (function iter__30174(s__30175){return (new cljs.core.LazySeq(null,((function (attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154){
return (function (){var s__30175__$1 = s__30175;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30175__$1);if(temp__4126__auto__)
{var s__30175__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30175__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30175__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30177 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30176 = (0);while(true){
if((i__30176 < size__4376__auto__))
{var map__30180 = cljs.core._nth.call(null,c__4375__auto__,i__30176);var map__30180__$1 = ((cljs.core.seq_QMARK_.call(null,map__30180))?cljs.core.apply.call(null,cljs.core.hash_map,map__30180):map__30180);var label__$1 = cljs.core.get.call(null,map__30180__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30180__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30177,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30176,map__30180,map__30180__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30177,s__30175__$2,temp__4126__auto__,attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30176,map__30180,map__30180__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30177,s__30175__$2,temp__4126__auto__,attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30193 = (i__30176 + (1));
i__30176 = G__30193;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30177),iter__30174.call(null,cljs.core.chunk_rest.call(null,s__30175__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30177),null);
}
} else
{var map__30181 = cljs.core.first.call(null,s__30175__$2);var map__30181__$1 = ((cljs.core.seq_QMARK_.call(null,map__30181))?cljs.core.apply.call(null,cljs.core.hash_map,map__30181):map__30181);var label__$1 = cljs.core.get.call(null,map__30181__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30181__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30181,map__30181__$1,label__$1,value,s__30175__$2,temp__4126__auto__,attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30181,map__30181__$1,label__$1,value,s__30175__$2,temp__4126__auto__,attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30174.call(null,cljs.core.rest.call(null,s__30175__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154))
,null,null));
});})(attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30173),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154){
return (function iter__30182(s__30183){return (new cljs.core.LazySeq(null,((function (attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154){
return (function (){var s__30183__$1 = s__30183;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30183__$1);if(temp__4126__auto__)
{var s__30183__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30183__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30183__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30185 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30184 = (0);while(true){
if((i__30184 < size__4376__auto__))
{var map__30188 = cljs.core._nth.call(null,c__4375__auto__,i__30184);var map__30188__$1 = ((cljs.core.seq_QMARK_.call(null,map__30188))?cljs.core.apply.call(null,cljs.core.hash_map,map__30188):map__30188);var label__$1 = cljs.core.get.call(null,map__30188__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30188__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30185,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__30184,map__30188,map__30188__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30185,s__30183__$2,temp__4126__auto__,attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__30184,map__30188,map__30188__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__30185,s__30183__$2,temp__4126__auto__,attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__30194 = (i__30184 + (1));
i__30184 = G__30194;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30185),iter__30182.call(null,cljs.core.chunk_rest.call(null,s__30183__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30185),null);
}
} else
{var map__30189 = cljs.core.first.call(null,s__30183__$2);var map__30189__$1 = ((cljs.core.seq_QMARK_.call(null,map__30189))?cljs.core.apply.call(null,cljs.core.hash_map,map__30189):map__30189);var label__$1 = cljs.core.get.call(null,map__30189__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30189__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__30189,map__30189__$1,label__$1,value,s__30183__$2,temp__4126__auto__,attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__30189,map__30189__$1,label__$1,value,s__30183__$2,temp__4126__auto__,attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__30182.call(null,cljs.core.rest.call(null,s__30183__$2)));
}
} else
{return null;
}
break;
}
});})(attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154))
,null,null));
});})(attrs30173,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30195 = output_checker30154.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30195))
{var error__6036__auto___30196 = temp__4126__auto___30195;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30196)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30196,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30151,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30151,input_schema30152,input_checker30153,output_checker30154))
,schema.core.make_fn_schema.call(null,output_schema30151,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30152], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30342 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30202 = schema.core.Any;var input_schema30203 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30200","map30200",-1107106233,null))], null);var input_checker30204 = schema.core.checker.call(null,input_schema30203);var output_checker30205 = schema.core.checker.call(null,output_schema30202);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function constructor30198(G__30206){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30343 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30206], null);var temp__4126__auto___30344 = input_checker30204.call(null,args__6035__auto___30343);if(cljs.core.truth_(temp__4126__auto___30344))
{var error__6036__auto___30345 = temp__4126__auto___30344;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30198","constructor30198",149087366,null),cljs.core.pr_str.call(null,error__6036__auto___30345)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30345,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30343,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30203,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30200 = G__30206;while(true){
if(cljs.core.map_QMARK_.call(null,map30200))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30200)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30200,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30201 = plumbing.fnk.schema.safe_get.call(null,map30200,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30201,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30200,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t30273 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t30273 = (function (component_spec,input_checker30204,component_filter_rq_chan,owner,constructor30198,data,map30200,G__30206,filter_spec,map30201,input_schema30203,output_schema30202,validate__6034__auto__,id,output_checker30205,ufv__,meta30274){
this.component_spec = component_spec;
this.input_checker30204 = input_checker30204;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.constructor30198 = constructor30198;
this.data = data;
this.map30200 = map30200;
this.G__30206 = G__30206;
this.filter_spec = filter_spec;
this.map30201 = map30201;
this.input_schema30203 = input_schema30203;
this.output_schema30202 = output_schema30202;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_checker30205 = output_checker30205;
this.ufv__ = ufv__;
this.meta30274 = meta30274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t30273.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t30273.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t30273";
clustermap.components.filters.tag_checkboxes_filter.t30273.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t30273");
});})(owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
;
clustermap.components.filters.tag_checkboxes_filter.t30273.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30273.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
;
clustermap.components.filters.tag_checkboxes_filter.t30273.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30273.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
;
clustermap.components.filters.tag_checkboxes_filter.t30273.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t30273.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function (state_30313){var state_val_30314 = (state_30313[(1)]);if((state_val_30314 === (7)))
{var inst_30304 = (state_30313[(2)]);var state_30313__$1 = state_30313;if(cljs.core.truth_(inst_30304))
{var statearr_30315_30346 = state_30313__$1;(statearr_30315_30346[(1)] = (11));
} else
{var statearr_30316_30347 = state_30313__$1;(statearr_30316_30347[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30314 === (1)))
{var state_30313__$1 = state_30313;var statearr_30317_30348 = state_30313__$1;(statearr_30317_30348[(2)] = null);
(statearr_30317_30348[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30314 === (4)))
{var inst_30278 = (state_30313[(7)]);var inst_30278__$1 = (state_30313[(2)]);var state_30313__$1 = (function (){var statearr_30318 = state_30313;(statearr_30318[(7)] = inst_30278__$1);
return statearr_30318;
})();if(cljs.core.truth_(inst_30278__$1))
{var statearr_30319_30349 = state_30313__$1;(statearr_30319_30349[(1)] = (5));
} else
{var statearr_30320_30350 = state_30313__$1;(statearr_30320_30350[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30314 === (13)))
{var inst_30309 = (state_30313[(2)]);var state_30313__$1 = state_30313;var statearr_30321_30351 = state_30313__$1;(statearr_30321_30351[(2)] = inst_30309);
(statearr_30321_30351[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30314 === (6)))
{var state_30313__$1 = state_30313;var statearr_30322_30352 = state_30313__$1;(statearr_30322_30352[(2)] = null);
(statearr_30322_30352[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30314 === (3)))
{var inst_30311 = (state_30313[(2)]);var state_30313__$1 = state_30313;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30313__$1,inst_30311);
} else
{if((state_val_30314 === (12)))
{var state_30313__$1 = state_30313;var statearr_30323_30353 = state_30313__$1;(statearr_30323_30353[(2)] = null);
(statearr_30323_30353[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30314 === (2)))
{var state_30313__$1 = state_30313;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30313__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30314 === (11)))
{var state_30313__$1 = state_30313;var statearr_30324_30354 = state_30313__$1;(statearr_30324_30354[(2)] = null);
(statearr_30324_30354[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30314 === (9)))
{var inst_30284 = (state_30313[(8)]);var state_30313__$1 = state_30313;var statearr_30325_30355 = state_30313__$1;(statearr_30325_30355[(2)] = inst_30284);
(statearr_30325_30355[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30314 === (5)))
{var inst_30278 = (state_30313[(7)]);var inst_30284 = (state_30313[(8)]);var inst_30281 = cljs.core.nth.call(null,inst_30278,(0),null);var inst_30282 = cljs.core.nth.call(null,inst_30278,(1),null);var inst_30284__$1 = om.core.get_props.call(null,self__.owner);var inst_30285 = cljs.core.seq_QMARK_.call(null,inst_30284__$1);var state_30313__$1 = (function (){var statearr_30326 = state_30313;(statearr_30326[(9)] = inst_30281);
(statearr_30326[(10)] = inst_30282);
(statearr_30326[(8)] = inst_30284__$1);
return statearr_30326;
})();if(inst_30285)
{var statearr_30327_30356 = state_30313__$1;(statearr_30327_30356[(1)] = (8));
} else
{var statearr_30328_30357 = state_30313__$1;(statearr_30328_30357[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30314 === (10)))
{var inst_30282 = (state_30313[(10)]);var inst_30290 = (state_30313[(2)]);var inst_30291 = cljs.core.get.call(null,inst_30290,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30292 = cljs.core.get.call(null,inst_30290,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30293 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30294 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_30282];var inst_30295 = (new cljs.core.PersistentVector(null,3,(5),inst_30293,inst_30294,null));var inst_30296 = cljs.core.clj__GT_js.call(null,inst_30295);var inst_30297 = console.log(inst_30296);var inst_30298 = cljs.core.deref.call(null,inst_30291);var inst_30299 = cljs.core.deref.call(null,inst_30292);var inst_30300 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_30298,inst_30299,inst_30282);var inst_30301 = om.core.update_BANG_.call(null,inst_30291,inst_30300);var state_30313__$1 = (function (){var statearr_30329 = state_30313;(statearr_30329[(11)] = inst_30301);
(statearr_30329[(12)] = inst_30297);
return statearr_30329;
})();var statearr_30330_30358 = state_30313__$1;(statearr_30330_30358[(2)] = true);
(statearr_30330_30358[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30314 === (8)))
{var inst_30284 = (state_30313[(8)]);var inst_30287 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30284);var state_30313__$1 = state_30313;var statearr_30331_30359 = state_30313__$1;(statearr_30331_30359[(2)] = inst_30287);
(statearr_30331_30359[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30335 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30335[(0)] = state_machine__9111__auto__);
(statearr_30335[(1)] = (1));
return statearr_30335;
});
var state_machine__9111__auto____1 = (function (state_30313){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30313);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30336){if((e30336 instanceof Object))
{var ex__9114__auto__ = e30336;var statearr_30337_30360 = state_30313;(statearr_30337_30360[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30313);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30336;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30361 = state_30313;
state_30313 = G__30361;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30313){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
})();var state__9127__auto__ = (function (){var statearr_30338 = f__9126__auto__.call(null);(statearr_30338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
;
clustermap.components.filters.tag_checkboxes_filter.t30273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function (_30275){var self__ = this;
var _30275__$1 = this;return self__.meta30274;
});})(owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
;
clustermap.components.filters.tag_checkboxes_filter.t30273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function (_30275,meta30274__$1){var self__ = this;
var _30275__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t30273(self__.component_spec,self__.input_checker30204,self__.component_filter_rq_chan,self__.owner,self__.constructor30198,self__.data,self__.map30200,self__.G__30206,self__.filter_spec,self__.map30201,self__.input_schema30203,self__.output_schema30202,self__.validate__6034__auto__,self__.id,self__.output_checker30205,self__.ufv__,meta30274__$1));
});})(owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t30273 = ((function (owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function __GT_t30273(component_spec__$1,input_checker30204__$1,component_filter_rq_chan__$1,owner__$1,constructor30198__$1,data__$1,map30200__$1,G__30206__$1,filter_spec__$1,map30201__$1,input_schema30203__$1,output_schema30202__$1,validate__6034__auto____$1,id__$1,output_checker30205__$1,ufv____$1,meta30274){return (new clustermap.components.filters.tag_checkboxes_filter.t30273(component_spec__$1,input_checker30204__$1,component_filter_rq_chan__$1,owner__$1,constructor30198__$1,data__$1,map30200__$1,G__30206__$1,filter_spec__$1,map30201__$1,input_schema30203__$1,output_schema30202__$1,validate__6034__auto____$1,id__$1,output_checker30205__$1,ufv____$1,meta30274));
});})(owner,component_filter_rq_chan,map30201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t30273(component_spec,input_checker30204,component_filter_rq_chan,owner,constructor30198,data,map30200,G__30206,filter_spec,map30201,input_schema30203,output_schema30202,validate__6034__auto__,id,output_checker30205,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30362 = output_checker30205.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30362))
{var error__6036__auto___30363 = temp__4126__auto___30362;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30198","constructor30198",149087366,null),cljs.core.pr_str.call(null,error__6036__auto___30363)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30363,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30202,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
,schema.core.make_fn_schema.call(null,output_schema30202,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30203], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___30342){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner30197,p__30339){var vec__30341 = p__30339;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30341,(0),null);return component_fnk__7881__auto___30342.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30197,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner30197,var_args){
var p__30339 = null;if (arguments.length > 2) {
  p__30339 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner30197,p__30339);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__30364){
var data__7882__auto__ = cljs.core.first(arglist__30364);
arglist__30364 = cljs.core.next(arglist__30364);
var owner30197 = cljs.core.first(arglist__30364);
var p__30339 = cljs.core.rest(arglist__30364);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner30197,p__30339);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___30342))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m30199){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m30199);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m30199){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m30199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
