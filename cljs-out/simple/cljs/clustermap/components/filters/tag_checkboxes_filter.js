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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29678(s__29679){return (new cljs.core.LazySeq(null,(function (){var s__29679__$1 = s__29679;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29679__$1);if(temp__4126__auto__)
{var s__29679__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29679__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29679__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29681 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29680 = (0);while(true){
if((i__29680 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__29680);cljs.core.chunk_append.call(null,b__29681,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__29682 = (i__29680 + (1));
i__29680 = G__29682;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29681),iter__29678.call(null,cljs.core.chunk_rest.call(null,s__29679__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29681),null);
}
} else
{var t = cljs.core.first.call(null,s__29679__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__29678.call(null,cljs.core.rest.call(null,s__29679__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29683_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29683_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__29684,value){var map__29686 = p__29684;var map__29686__$1 = ((cljs.core.seq_QMARK_.call(null,map__29686))?cljs.core.apply.call(null,cljs.core.hash_map,map__29686):map__29686);var component_spec = map__29686__$1;var tags = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__29687_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__29687_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__29689,values){var map__29691 = p__29689;var map__29691__$1 = ((cljs.core.seq_QMARK_.call(null,map__29691))?cljs.core.apply.call(null,cljs.core.hash_map,map__29691):map__29691);var component_spec = map__29691__$1;var sorted = cljs.core.get.call(null,map__29691__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__29691__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29691__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29691,map__29691__$1,component_spec,sorted,tags,label){
return (function (p1__29688_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29688_SHARP_));
});})(values__$1,map__29691,map__29691__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29692,values){var map__29694 = p__29692;var map__29694__$1 = ((cljs.core.seq_QMARK_.call(null,map__29694))?cljs.core.apply.call(null,cljs.core.hash_map,map__29694):map__29694);var component_spec = map__29694__$1;var tags = cljs.core.get.call(null,map__29694__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29694__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
/**
* returns an updated filter-spec value with all checkboxes selected (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_all = (function set_all(filter_spec,p__29695){var map__29697 = p__29695;var map__29697__$1 = ((cljs.core.seq_QMARK_.call(null,map__29697))?cljs.core.apply.call(null,cljs.core.hash_map,map__29697):map__29697);var component_spec = map__29697__$1;var tags = cljs.core.get.call(null,map__29697__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29697__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),tags));
});
/**
* returns an updated filter-spec value with all checkboxes cleared (doesn't update cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.clear_all = (function clear_all(filter_spec,p__29698){var map__29700 = p__29698;var map__29700__$1 = ((cljs.core.seq_QMARK_.call(null,map__29700))?cljs.core.apply.call(null,cljs.core.hash_map,map__29700):map__29700);var component_spec = map__29700__$1;var tags = cljs.core.get.call(null,map__29700__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29700__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,null);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29702 = schema.core.Any;var input_schema29703 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29701","map29701",541864536,null))], null);var input_checker29704 = schema.core.checker.call(null,input_schema29703);var output_checker29705 = schema.core.checker.call(null,output_schema29702);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705){
return (function render_STAR_(G__29706){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29706], null);var temp__4126__auto___29742 = input_checker29704.call(null,args__6035__auto___29741);if(cljs.core.truth_(temp__4126__auto___29742))
{var error__6036__auto___29743 = temp__4126__auto___29742;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29743)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29743,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29741,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29703,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29701 = G__29706;while(true){
if(cljs.core.map_QMARK_.call(null,map29701))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29701)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29701,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29701,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var controls = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"controls","controls",1340701452),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);var attrs29724 = (cljs.core.truth_(controls)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-controls","div.filter-controls",-1377146228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705))
], null),"Select all"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-sm","button.btn.btn-default.btn-sm",-768282372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705){
return (function (e){return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.clear_all.call(null,filter_spec,component_spec));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705))
], null),"Clear"], null)], null):null);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs29724))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-body"], null)], null),attrs29724)):{"className": "filter-body"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29724))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705){
return (function iter__29725(s__29726){return (new cljs.core.LazySeq(null,((function (attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705){
return (function (){var s__29726__$1 = s__29726;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29726__$1);if(temp__4126__auto__)
{var s__29726__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29726__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29726__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29728 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29727 = (0);while(true){
if((i__29727 < size__4376__auto__))
{var map__29731 = cljs.core._nth.call(null,c__4375__auto__,i__29727);var map__29731__$1 = ((cljs.core.seq_QMARK_.call(null,map__29731))?cljs.core.apply.call(null,cljs.core.hash_map,map__29731):map__29731);var label__$1 = cljs.core.get.call(null,map__29731__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29731__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29728,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29727,map__29731,map__29731__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29728,s__29726__$2,temp__4126__auto__,attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29727,map__29731,map__29731__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29728,s__29726__$2,temp__4126__auto__,attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29744 = (i__29727 + (1));
i__29727 = G__29744;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29728),iter__29725.call(null,cljs.core.chunk_rest.call(null,s__29726__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29728),null);
}
} else
{var map__29732 = cljs.core.first.call(null,s__29726__$2);var map__29732__$1 = ((cljs.core.seq_QMARK_.call(null,map__29732))?cljs.core.apply.call(null,cljs.core.hash_map,map__29732):map__29732);var label__$1 = cljs.core.get.call(null,map__29732__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29732__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29732,map__29732__$1,label__$1,value,s__29726__$2,temp__4126__auto__,attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29732,map__29732__$1,label__$1,value,s__29726__$2,temp__4126__auto__,attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29725.call(null,cljs.core.rest.call(null,s__29726__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705))
,null,null));
});})(attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29724),React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705){
return (function iter__29733(s__29734){return (new cljs.core.LazySeq(null,((function (attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705){
return (function (){var s__29734__$1 = s__29734;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29734__$1);if(temp__4126__auto__)
{var s__29734__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29734__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29734__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29736 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29735 = (0);while(true){
if((i__29735 < size__4376__auto__))
{var map__29739 = cljs.core._nth.call(null,c__4375__auto__,i__29735);var map__29739__$1 = ((cljs.core.seq_QMARK_.call(null,map__29739))?cljs.core.apply.call(null,cljs.core.hash_map,map__29739):map__29739);var label__$1 = cljs.core.get.call(null,map__29739__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29739__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29736,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29735,map__29739,map__29739__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29736,s__29734__$2,temp__4126__auto__,attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29735,map__29739,map__29739__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29736,s__29734__$2,temp__4126__auto__,attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29745 = (i__29735 + (1));
i__29735 = G__29745;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29736),iter__29733.call(null,cljs.core.chunk_rest.call(null,s__29734__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29736),null);
}
} else
{var map__29740 = cljs.core.first.call(null,s__29734__$2);var map__29740__$1 = ((cljs.core.seq_QMARK_.call(null,map__29740))?cljs.core.apply.call(null,cljs.core.hash_map,map__29740):map__29740);var label__$1 = cljs.core.get.call(null,map__29740__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29740__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29740,map__29740__$1,label__$1,value,s__29734__$2,temp__4126__auto__,attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29740,map__29740__$1,label__$1,value,s__29734__$2,temp__4126__auto__,attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29733.call(null,cljs.core.rest.call(null,s__29734__$2)));
}
} else
{return null;
}
break;
}
});})(attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705))
,null,null));
});})(attrs29724,tags__$1,tags_by_value,current_tag_values,tags,tag_type,controls,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705))
;return iter__4377__auto__.call(null,tags__$1);
})()))], null))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29746 = output_checker29705.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29746))
{var error__6036__auto___29747 = temp__4126__auto___29746;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29747)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29747,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29702,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29702,input_schema29703,input_checker29704,output_checker29705))
,schema.core.make_fn_schema.call(null,output_schema29702,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29703], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29893 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29753 = schema.core.Any;var input_schema29754 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29751","map29751",8555071,null))], null);var input_checker29755 = schema.core.checker.call(null,input_schema29754);var output_checker29756 = schema.core.checker.call(null,output_schema29753);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756){
return (function constructor29749(G__29757){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29894 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29757], null);var temp__4126__auto___29895 = input_checker29755.call(null,args__6035__auto___29894);if(cljs.core.truth_(temp__4126__auto___29895))
{var error__6036__auto___29896 = temp__4126__auto___29895;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29749","constructor29749",-959916220,null),cljs.core.pr_str.call(null,error__6036__auto___29896)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29896,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29894,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29754,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29751 = G__29757;while(true){
if(cljs.core.map_QMARK_.call(null,map29751))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29751)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29751,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29752 = plumbing.fnk.schema.safe_get.call(null,map29751,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29752,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29751,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t29824 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t29824 = (function (component_spec,component_filter_rq_chan,input_schema29754,owner,constructor29749,map29752,data,input_checker29755,G__29757,filter_spec,validate__6034__auto__,output_schema29753,id,output_checker29756,ufv__,map29751,meta29825){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema29754 = input_schema29754;
this.owner = owner;
this.constructor29749 = constructor29749;
this.map29752 = map29752;
this.data = data;
this.input_checker29755 = input_checker29755;
this.G__29757 = G__29757;
this.filter_spec = filter_spec;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_schema29753 = output_schema29753;
this.id = id;
this.output_checker29756 = output_checker29756;
this.ufv__ = ufv__;
this.map29751 = map29751;
this.meta29825 = meta29825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t29824.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t29824.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t29824";
clustermap.components.filters.tag_checkboxes_filter.t29824.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t29824");
});})(owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756))
;
clustermap.components.filters.tag_checkboxes_filter.t29824.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29824.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756))
;
clustermap.components.filters.tag_checkboxes_filter.t29824.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29824.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756))
;
clustermap.components.filters.tag_checkboxes_filter.t29824.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29824.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756){
return (function (state_29864){var state_val_29865 = (state_29864[(1)]);if((state_val_29865 === (7)))
{var inst_29855 = (state_29864[(2)]);var state_29864__$1 = state_29864;if(cljs.core.truth_(inst_29855))
{var statearr_29866_29897 = state_29864__$1;(statearr_29866_29897[(1)] = (11));
} else
{var statearr_29867_29898 = state_29864__$1;(statearr_29867_29898[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (1)))
{var state_29864__$1 = state_29864;var statearr_29868_29899 = state_29864__$1;(statearr_29868_29899[(2)] = null);
(statearr_29868_29899[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (4)))
{var inst_29829 = (state_29864[(7)]);var inst_29829__$1 = (state_29864[(2)]);var state_29864__$1 = (function (){var statearr_29869 = state_29864;(statearr_29869[(7)] = inst_29829__$1);
return statearr_29869;
})();if(cljs.core.truth_(inst_29829__$1))
{var statearr_29870_29900 = state_29864__$1;(statearr_29870_29900[(1)] = (5));
} else
{var statearr_29871_29901 = state_29864__$1;(statearr_29871_29901[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (13)))
{var inst_29860 = (state_29864[(2)]);var state_29864__$1 = state_29864;var statearr_29872_29902 = state_29864__$1;(statearr_29872_29902[(2)] = inst_29860);
(statearr_29872_29902[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (6)))
{var state_29864__$1 = state_29864;var statearr_29873_29903 = state_29864__$1;(statearr_29873_29903[(2)] = null);
(statearr_29873_29903[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (3)))
{var inst_29862 = (state_29864[(2)]);var state_29864__$1 = state_29864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29864__$1,inst_29862);
} else
{if((state_val_29865 === (12)))
{var state_29864__$1 = state_29864;var statearr_29874_29904 = state_29864__$1;(statearr_29874_29904[(2)] = null);
(statearr_29874_29904[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (2)))
{var state_29864__$1 = state_29864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29864__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29865 === (11)))
{var state_29864__$1 = state_29864;var statearr_29875_29905 = state_29864__$1;(statearr_29875_29905[(2)] = null);
(statearr_29875_29905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (9)))
{var inst_29835 = (state_29864[(8)]);var state_29864__$1 = state_29864;var statearr_29876_29906 = state_29864__$1;(statearr_29876_29906[(2)] = inst_29835);
(statearr_29876_29906[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (5)))
{var inst_29835 = (state_29864[(8)]);var inst_29829 = (state_29864[(7)]);var inst_29832 = cljs.core.nth.call(null,inst_29829,(0),null);var inst_29833 = cljs.core.nth.call(null,inst_29829,(1),null);var inst_29835__$1 = om.core.get_props.call(null,self__.owner);var inst_29836 = cljs.core.seq_QMARK_.call(null,inst_29835__$1);var state_29864__$1 = (function (){var statearr_29877 = state_29864;(statearr_29877[(9)] = inst_29832);
(statearr_29877[(8)] = inst_29835__$1);
(statearr_29877[(10)] = inst_29833);
return statearr_29877;
})();if(inst_29836)
{var statearr_29878_29907 = state_29864__$1;(statearr_29878_29907[(1)] = (8));
} else
{var statearr_29879_29908 = state_29864__$1;(statearr_29879_29908[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (10)))
{var inst_29833 = (state_29864[(10)]);var inst_29841 = (state_29864[(2)]);var inst_29842 = cljs.core.get.call(null,inst_29841,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29843 = cljs.core.get.call(null,inst_29841,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29844 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29845 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_29833];var inst_29846 = (new cljs.core.PersistentVector(null,3,(5),inst_29844,inst_29845,null));var inst_29847 = cljs.core.clj__GT_js.call(null,inst_29846);var inst_29848 = console.log(inst_29847);var inst_29849 = cljs.core.deref.call(null,inst_29842);var inst_29850 = cljs.core.deref.call(null,inst_29843);var inst_29851 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_29849,inst_29850,inst_29833);var inst_29852 = om.core.update_BANG_.call(null,inst_29842,inst_29851);var state_29864__$1 = (function (){var statearr_29880 = state_29864;(statearr_29880[(11)] = inst_29848);
(statearr_29880[(12)] = inst_29852);
return statearr_29880;
})();var statearr_29881_29909 = state_29864__$1;(statearr_29881_29909[(2)] = true);
(statearr_29881_29909[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (8)))
{var inst_29835 = (state_29864[(8)]);var inst_29838 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29835);var state_29864__$1 = state_29864;var statearr_29882_29910 = state_29864__$1;(statearr_29882_29910[(2)] = inst_29838);
(statearr_29882_29910[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29886 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29886[(0)] = state_machine__9111__auto__);
(statearr_29886[(1)] = (1));
return statearr_29886;
});
var state_machine__9111__auto____1 = (function (state_29864){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29864);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29887){if((e29887 instanceof Object))
{var ex__9114__auto__ = e29887;var statearr_29888_29911 = state_29864;(statearr_29888_29911[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29864);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29887;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29912 = state_29864;
state_29864 = G__29912;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29864){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756))
})();var state__9127__auto__ = (function (){var statearr_29889 = f__9126__auto__.call(null);(statearr_29889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756))
;
clustermap.components.filters.tag_checkboxes_filter.t29824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756){
return (function (_29826){var self__ = this;
var _29826__$1 = this;return self__.meta29825;
});})(owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756))
;
clustermap.components.filters.tag_checkboxes_filter.t29824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756){
return (function (_29826,meta29825__$1){var self__ = this;
var _29826__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t29824(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema29754,self__.owner,self__.constructor29749,self__.map29752,self__.data,self__.input_checker29755,self__.G__29757,self__.filter_spec,self__.validate__6034__auto__,self__.output_schema29753,self__.id,self__.output_checker29756,self__.ufv__,self__.map29751,meta29825__$1));
});})(owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t29824 = ((function (owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756){
return (function __GT_t29824(component_spec__$1,component_filter_rq_chan__$1,input_schema29754__$1,owner__$1,constructor29749__$1,map29752__$1,data__$1,input_checker29755__$1,G__29757__$1,filter_spec__$1,validate__6034__auto____$1,output_schema29753__$1,id__$1,output_checker29756__$1,ufv____$1,map29751__$1,meta29825){return (new clustermap.components.filters.tag_checkboxes_filter.t29824(component_spec__$1,component_filter_rq_chan__$1,input_schema29754__$1,owner__$1,constructor29749__$1,map29752__$1,data__$1,input_checker29755__$1,G__29757__$1,filter_spec__$1,validate__6034__auto____$1,output_schema29753__$1,id__$1,output_checker29756__$1,ufv____$1,map29751__$1,meta29825));
});})(owner,component_filter_rq_chan,map29752,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t29824(component_spec,component_filter_rq_chan,input_schema29754,owner,constructor29749,map29752,data,input_checker29755,G__29757,filter_spec,validate__6034__auto__,output_schema29753,id,output_checker29756,ufv__,map29751,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29913 = output_checker29756.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29913))
{var error__6036__auto___29914 = temp__4126__auto___29913;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29749","constructor29749",-959916220,null),cljs.core.pr_str.call(null,error__6036__auto___29914)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29914,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29753,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29753,input_schema29754,input_checker29755,output_checker29756))
,schema.core.make_fn_schema.call(null,output_schema29753,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29754], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___29893){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner29748,p__29890){var vec__29892 = p__29890;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29892,(0),null);return component_fnk__7881__auto___29893.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29748,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner29748,var_args){
var p__29890 = null;if (arguments.length > 2) {
  p__29890 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29748,p__29890);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29915){
var data__7882__auto__ = cljs.core.first(arglist__29915);
arglist__29915 = cljs.core.next(arglist__29915);
var owner29748 = cljs.core.first(arglist__29915);
var p__29890 = cljs.core.rest(arglist__29915);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner29748,p__29890);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29893))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29750){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m29750);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m29750){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
