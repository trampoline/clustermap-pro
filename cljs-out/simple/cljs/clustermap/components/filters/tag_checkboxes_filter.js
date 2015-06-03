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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__28930(s__28931){return (new cljs.core.LazySeq(null,(function (){var s__28931__$1 = s__28931;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28931__$1);if(temp__4126__auto__)
{var s__28931__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28931__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28931__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28933 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28932 = (0);while(true){
if((i__28932 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__28932);cljs.core.chunk_append.call(null,b__28933,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__28934 = (i__28932 + (1));
i__28932 = G__28934;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28933),iter__28930.call(null,cljs.core.chunk_rest.call(null,s__28931__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28933),null);
}
} else
{var t = cljs.core.first.call(null,s__28931__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__28930.call(null,cljs.core.rest.call(null,s__28931__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28935_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28935_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__28936,value){var map__28938 = p__28936;var map__28938__$1 = ((cljs.core.seq_QMARK_.call(null,map__28938))?cljs.core.apply.call(null,cljs.core.hash_map,map__28938):map__28938);var component_spec = map__28938__$1;var tags = cljs.core.get.call(null,map__28938__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__28938__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__28939_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__28939_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__28941,values){var map__28943 = p__28941;var map__28943__$1 = ((cljs.core.seq_QMARK_.call(null,map__28943))?cljs.core.apply.call(null,cljs.core.hash_map,map__28943):map__28943);var component_spec = map__28943__$1;var sorted = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__28943,map__28943__$1,component_spec,sorted,tags,label){
return (function (p1__28940_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28940_SHARP_));
});})(values__$1,map__28943,map__28943__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__28944,values){var map__28946 = p__28944;var map__28946__$1 = ((cljs.core.seq_QMARK_.call(null,map__28946))?cljs.core.apply.call(null,cljs.core.hash_map,map__28946):map__28946);var component_spec = map__28946__$1;var tags = cljs.core.get.call(null,map__28946__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__28946__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28948 = schema.core.Any;var input_schema28949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28947","map28947",-1222636613,null))], null);var input_checker28950 = schema.core.checker.call(null,input_schema28949);var output_checker28951 = schema.core.checker.call(null,output_schema28948);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28948,input_schema28949,input_checker28950,output_checker28951){
return (function render_STAR_(G__28952){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28952], null);var temp__4126__auto___28970 = input_checker28950.call(null,args__6035__auto___28969);if(cljs.core.truth_(temp__4126__auto___28970))
{var error__6036__auto___28971 = temp__4126__auto___28970;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28971)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28971,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28969,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28949,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28947 = G__28952;while(true){
if(cljs.core.map_QMARK_.call(null,map28947))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28947)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28947,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map28947,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);return React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28948,input_schema28949,input_checker28950,output_checker28951){
return (function iter__28961(s__28962){return (new cljs.core.LazySeq(null,((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28948,input_schema28949,input_checker28950,output_checker28951){
return (function (){var s__28962__$1 = s__28962;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28962__$1);if(temp__4126__auto__)
{var s__28962__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28962__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28962__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28964 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28963 = (0);while(true){
if((i__28963 < size__4376__auto__))
{var map__28967 = cljs.core._nth.call(null,c__4375__auto__,i__28963);var map__28967__$1 = ((cljs.core.seq_QMARK_.call(null,map__28967))?cljs.core.apply.call(null,cljs.core.hash_map,map__28967):map__28967);var label__$1 = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__28964,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__28963,map__28967,map__28967__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__28964,s__28962__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28948,input_schema28949,input_checker28950,output_checker28951){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__28963,map__28967,map__28967__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__28964,s__28962__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28948,input_schema28949,input_checker28950,output_checker28951))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__28972 = (i__28963 + (1));
i__28963 = G__28972;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28964),iter__28961.call(null,cljs.core.chunk_rest.call(null,s__28962__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28964),null);
}
} else
{var map__28968 = cljs.core.first.call(null,s__28962__$2);var map__28968__$1 = ((cljs.core.seq_QMARK_.call(null,map__28968))?cljs.core.apply.call(null,cljs.core.hash_map,map__28968):map__28968);var label__$1 = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__28968,map__28968__$1,label__$1,value,s__28962__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28948,input_schema28949,input_checker28950,output_checker28951){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__28968,map__28968__$1,label__$1,value,s__28962__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28948,input_schema28949,input_checker28950,output_checker28951))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__28961.call(null,cljs.core.rest.call(null,s__28962__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28948,input_schema28949,input_checker28950,output_checker28951))
,null,null));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28948,input_schema28949,input_checker28950,output_checker28951))
;return iter__4377__auto__.call(null,tags__$1);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28973 = output_checker28951.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28973))
{var error__6036__auto___28974 = temp__4126__auto___28973;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28974)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28974,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28948,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28948,input_schema28949,input_checker28950,output_checker28951))
,schema.core.make_fn_schema.call(null,output_schema28948,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28949], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29120 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28980 = schema.core.Any;var input_schema28981 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28978","map28978",1885213998,null))], null);var input_checker28982 = schema.core.checker.call(null,input_schema28981);var output_checker28983 = schema.core.checker.call(null,output_schema28980);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function constructor28976(G__28984){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28984], null);var temp__4126__auto___29122 = input_checker28982.call(null,args__6035__auto___29121);if(cljs.core.truth_(temp__4126__auto___29122))
{var error__6036__auto___29123 = temp__4126__auto___29122;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28976","constructor28976",759731562,null),cljs.core.pr_str.call(null,error__6036__auto___29123)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29123,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29121,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28981,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28978 = G__28984;while(true){
if(cljs.core.map_QMARK_.call(null,map28978))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28978)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map28978,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map28979 = plumbing.fnk.schema.safe_get.call(null,map28978,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map28979,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28978,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t29051 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t29051 = (function (component_spec,component_filter_rq_chan,owner,data,input_schema28981,constructor28976,map28979,map28978,filter_spec,output_schema28980,input_checker28982,validate__6034__auto__,id,G__28984,output_checker28983,ufv__,meta29052){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.input_schema28981 = input_schema28981;
this.constructor28976 = constructor28976;
this.map28979 = map28979;
this.map28978 = map28978;
this.filter_spec = filter_spec;
this.output_schema28980 = output_schema28980;
this.input_checker28982 = input_checker28982;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__28984 = G__28984;
this.output_checker28983 = output_checker28983;
this.ufv__ = ufv__;
this.meta29052 = meta29052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t29051.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t29051.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t29051";
clustermap.components.filters.tag_checkboxes_filter.t29051.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t29051");
});})(owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
;
clustermap.components.filters.tag_checkboxes_filter.t29051.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29051.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
;
clustermap.components.filters.tag_checkboxes_filter.t29051.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29051.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
;
clustermap.components.filters.tag_checkboxes_filter.t29051.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29051.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function (state_29091){var state_val_29092 = (state_29091[(1)]);if((state_val_29092 === (7)))
{var inst_29082 = (state_29091[(2)]);var state_29091__$1 = state_29091;if(cljs.core.truth_(inst_29082))
{var statearr_29093_29124 = state_29091__$1;(statearr_29093_29124[(1)] = (11));
} else
{var statearr_29094_29125 = state_29091__$1;(statearr_29094_29125[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29092 === (1)))
{var state_29091__$1 = state_29091;var statearr_29095_29126 = state_29091__$1;(statearr_29095_29126[(2)] = null);
(statearr_29095_29126[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29092 === (4)))
{var inst_29056 = (state_29091[(7)]);var inst_29056__$1 = (state_29091[(2)]);var state_29091__$1 = (function (){var statearr_29096 = state_29091;(statearr_29096[(7)] = inst_29056__$1);
return statearr_29096;
})();if(cljs.core.truth_(inst_29056__$1))
{var statearr_29097_29127 = state_29091__$1;(statearr_29097_29127[(1)] = (5));
} else
{var statearr_29098_29128 = state_29091__$1;(statearr_29098_29128[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29092 === (13)))
{var inst_29087 = (state_29091[(2)]);var state_29091__$1 = state_29091;var statearr_29099_29129 = state_29091__$1;(statearr_29099_29129[(2)] = inst_29087);
(statearr_29099_29129[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29092 === (6)))
{var state_29091__$1 = state_29091;var statearr_29100_29130 = state_29091__$1;(statearr_29100_29130[(2)] = null);
(statearr_29100_29130[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29092 === (3)))
{var inst_29089 = (state_29091[(2)]);var state_29091__$1 = state_29091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29091__$1,inst_29089);
} else
{if((state_val_29092 === (12)))
{var state_29091__$1 = state_29091;var statearr_29101_29131 = state_29091__$1;(statearr_29101_29131[(2)] = null);
(statearr_29101_29131[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29092 === (2)))
{var state_29091__$1 = state_29091;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29091__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29092 === (11)))
{var state_29091__$1 = state_29091;var statearr_29102_29132 = state_29091__$1;(statearr_29102_29132[(2)] = null);
(statearr_29102_29132[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29092 === (9)))
{var inst_29062 = (state_29091[(8)]);var state_29091__$1 = state_29091;var statearr_29103_29133 = state_29091__$1;(statearr_29103_29133[(2)] = inst_29062);
(statearr_29103_29133[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29092 === (5)))
{var inst_29062 = (state_29091[(8)]);var inst_29056 = (state_29091[(7)]);var inst_29059 = cljs.core.nth.call(null,inst_29056,(0),null);var inst_29060 = cljs.core.nth.call(null,inst_29056,(1),null);var inst_29062__$1 = om.core.get_props.call(null,self__.owner);var inst_29063 = cljs.core.seq_QMARK_.call(null,inst_29062__$1);var state_29091__$1 = (function (){var statearr_29104 = state_29091;(statearr_29104[(8)] = inst_29062__$1);
(statearr_29104[(9)] = inst_29060);
(statearr_29104[(10)] = inst_29059);
return statearr_29104;
})();if(inst_29063)
{var statearr_29105_29134 = state_29091__$1;(statearr_29105_29134[(1)] = (8));
} else
{var statearr_29106_29135 = state_29091__$1;(statearr_29106_29135[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29092 === (10)))
{var inst_29060 = (state_29091[(9)]);var inst_29068 = (state_29091[(2)]);var inst_29069 = cljs.core.get.call(null,inst_29068,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29070 = cljs.core.get.call(null,inst_29068,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29071 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29072 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_29060];var inst_29073 = (new cljs.core.PersistentVector(null,3,(5),inst_29071,inst_29072,null));var inst_29074 = cljs.core.clj__GT_js.call(null,inst_29073);var inst_29075 = console.log(inst_29074);var inst_29076 = cljs.core.deref.call(null,inst_29069);var inst_29077 = cljs.core.deref.call(null,inst_29070);var inst_29078 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_29076,inst_29077,inst_29060);var inst_29079 = om.core.update_BANG_.call(null,inst_29069,inst_29078);var state_29091__$1 = (function (){var statearr_29107 = state_29091;(statearr_29107[(11)] = inst_29075);
(statearr_29107[(12)] = inst_29079);
return statearr_29107;
})();var statearr_29108_29136 = state_29091__$1;(statearr_29108_29136[(2)] = true);
(statearr_29108_29136[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29092 === (8)))
{var inst_29062 = (state_29091[(8)]);var inst_29065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29062);var state_29091__$1 = state_29091;var statearr_29109_29137 = state_29091__$1;(statearr_29109_29137[(2)] = inst_29065);
(statearr_29109_29137[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29113 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29113[(0)] = state_machine__11462__auto__);
(statearr_29113[(1)] = (1));
return statearr_29113;
});
var state_machine__11462__auto____1 = (function (state_29091){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29091);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29114){if((e29114 instanceof Object))
{var ex__11465__auto__ = e29114;var statearr_29115_29138 = state_29091;(statearr_29115_29138[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29091);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29114;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29139 = state_29091;
state_29091 = G__29139;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29091){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
})();var state__11519__auto__ = (function (){var statearr_29116 = f__11518__auto__.call(null);(statearr_29116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29116;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
;
clustermap.components.filters.tag_checkboxes_filter.t29051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function (_29053){var self__ = this;
var _29053__$1 = this;return self__.meta29052;
});})(owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
;
clustermap.components.filters.tag_checkboxes_filter.t29051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function (_29053,meta29052__$1){var self__ = this;
var _29053__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t29051(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.input_schema28981,self__.constructor28976,self__.map28979,self__.map28978,self__.filter_spec,self__.output_schema28980,self__.input_checker28982,self__.validate__6034__auto__,self__.id,self__.G__28984,self__.output_checker28983,self__.ufv__,meta29052__$1));
});})(owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t29051 = ((function (owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function __GT_t29051(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,input_schema28981__$1,constructor28976__$1,map28979__$1,map28978__$1,filter_spec__$1,output_schema28980__$1,input_checker28982__$1,validate__6034__auto____$1,id__$1,G__28984__$1,output_checker28983__$1,ufv____$1,meta29052){return (new clustermap.components.filters.tag_checkboxes_filter.t29051(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,input_schema28981__$1,constructor28976__$1,map28979__$1,map28978__$1,filter_spec__$1,output_schema28980__$1,input_checker28982__$1,validate__6034__auto____$1,id__$1,G__28984__$1,output_checker28983__$1,ufv____$1,meta29052));
});})(owner,component_filter_rq_chan,map28979,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t29051(component_spec,component_filter_rq_chan,owner,data,input_schema28981,constructor28976,map28979,map28978,filter_spec,output_schema28980,input_checker28982,validate__6034__auto__,id,G__28984,output_checker28983,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29140 = output_checker28983.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29140))
{var error__6036__auto___29141 = temp__4126__auto___29140;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28976","constructor28976",759731562,null),cljs.core.pr_str.call(null,error__6036__auto___29141)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29141,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28980,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
,schema.core.make_fn_schema.call(null,output_schema28980,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28981], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___29120){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner28975,p__29117){var vec__29119 = p__29117;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29119,(0),null);return component_fnk__7881__auto___29120.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28975,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner28975,var_args){
var p__29117 = null;if (arguments.length > 2) {
  p__29117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner28975,p__29117);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29142){
var data__7882__auto__ = cljs.core.first(arglist__29142);
arglist__29142 = cljs.core.next(arglist__29142);
var owner28975 = cljs.core.first(arglist__29142);
var p__29117 = cljs.core.rest(arglist__29142);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner28975,p__29117);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29120))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m28977){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m28977);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m28977){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m28977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
