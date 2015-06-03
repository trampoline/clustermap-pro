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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__28931(s__28932){return (new cljs.core.LazySeq(null,(function (){var s__28932__$1 = s__28932;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28932__$1);if(temp__4126__auto__)
{var s__28932__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28932__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28932__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28934 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28933 = (0);while(true){
if((i__28933 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__28933);cljs.core.chunk_append.call(null,b__28934,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__28935 = (i__28933 + (1));
i__28933 = G__28935;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28934),iter__28931.call(null,cljs.core.chunk_rest.call(null,s__28932__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28934),null);
}
} else
{var t = cljs.core.first.call(null,s__28932__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__28931.call(null,cljs.core.rest.call(null,s__28932__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28936_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28936_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__28937,value){var map__28939 = p__28937;var map__28939__$1 = ((cljs.core.seq_QMARK_.call(null,map__28939))?cljs.core.apply.call(null,cljs.core.hash_map,map__28939):map__28939);var component_spec = map__28939__$1;var tags = cljs.core.get.call(null,map__28939__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__28939__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__28940_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__28940_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__28942,values){var map__28944 = p__28942;var map__28944__$1 = ((cljs.core.seq_QMARK_.call(null,map__28944))?cljs.core.apply.call(null,cljs.core.hash_map,map__28944):map__28944);var component_spec = map__28944__$1;var sorted = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__28944__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__28944,map__28944__$1,component_spec,sorted,tags,label){
return (function (p1__28941_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28941_SHARP_));
});})(values__$1,map__28944,map__28944__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__28945,values){var map__28947 = p__28945;var map__28947__$1 = ((cljs.core.seq_QMARK_.call(null,map__28947))?cljs.core.apply.call(null,cljs.core.hash_map,map__28947):map__28947);var component_spec = map__28947__$1;var tags = cljs.core.get.call(null,map__28947__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__28947__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28949 = schema.core.Any;var input_schema28950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28948","map28948",-1462663870,null))], null);var input_checker28951 = schema.core.checker.call(null,input_schema28950);var output_checker28952 = schema.core.checker.call(null,output_schema28949);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952){
return (function render_STAR_(G__28953){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28953], null);var temp__4126__auto___28971 = input_checker28951.call(null,args__6035__auto___28970);if(cljs.core.truth_(temp__4126__auto___28971))
{var error__6036__auto___28972 = temp__4126__auto___28971;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28972)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28972,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28970,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28950,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28948 = G__28953;while(true){
if(cljs.core.map_QMARK_.call(null,map28948))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28948)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28948,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map28948,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);return React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952){
return (function iter__28962(s__28963){return (new cljs.core.LazySeq(null,((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952){
return (function (){var s__28963__$1 = s__28963;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28963__$1);if(temp__4126__auto__)
{var s__28963__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28963__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28963__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28965 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28964 = (0);while(true){
if((i__28964 < size__4376__auto__))
{var map__28968 = cljs.core._nth.call(null,c__4375__auto__,i__28964);var map__28968__$1 = ((cljs.core.seq_QMARK_.call(null,map__28968))?cljs.core.apply.call(null,cljs.core.hash_map,map__28968):map__28968);var label__$1 = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__28968__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__28965,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__28964,map__28968,map__28968__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__28965,s__28963__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__28964,map__28968,map__28968__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__28965,s__28963__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__28973 = (i__28964 + (1));
i__28964 = G__28973;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28965),iter__28962.call(null,cljs.core.chunk_rest.call(null,s__28963__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28965),null);
}
} else
{var map__28969 = cljs.core.first.call(null,s__28963__$2);var map__28969__$1 = ((cljs.core.seq_QMARK_.call(null,map__28969))?cljs.core.apply.call(null,cljs.core.hash_map,map__28969):map__28969);var label__$1 = cljs.core.get.call(null,map__28969__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__28969__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__28969,map__28969__$1,label__$1,value,s__28963__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__28969,map__28969__$1,label__$1,value,s__28963__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__28962.call(null,cljs.core.rest.call(null,s__28963__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952))
,null,null));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952))
;return iter__4377__auto__.call(null,tags__$1);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28974 = output_checker28952.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28974))
{var error__6036__auto___28975 = temp__4126__auto___28974;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28975)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28975,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28949,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952))
,schema.core.make_fn_schema.call(null,output_schema28949,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28950], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29121 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28981 = schema.core.Any;var input_schema28982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28979","map28979",1800008941,null))], null);var input_checker28983 = schema.core.checker.call(null,input_schema28982);var output_checker28984 = schema.core.checker.call(null,output_schema28981);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984){
return (function constructor28977(G__28985){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28985], null);var temp__4126__auto___29123 = input_checker28983.call(null,args__6035__auto___29122);if(cljs.core.truth_(temp__4126__auto___29123))
{var error__6036__auto___29124 = temp__4126__auto___29123;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28977","constructor28977",122637856,null),cljs.core.pr_str.call(null,error__6036__auto___29124)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29124,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29122,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28982,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28979 = G__28985;while(true){
if(cljs.core.map_QMARK_.call(null,map28979))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28979)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map28979,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map28980 = plumbing.fnk.schema.safe_get.call(null,map28979,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map28980,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28979,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t29052 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t29052 = (function (component_spec,constructor28977,component_filter_rq_chan,owner,input_checker28983,data,output_schema28981,map28979,filter_spec,map28980,G__28985,input_schema28982,validate__6034__auto__,id,ufv__,output_checker28984,meta29053){
this.component_spec = component_spec;
this.constructor28977 = constructor28977;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.input_checker28983 = input_checker28983;
this.data = data;
this.output_schema28981 = output_schema28981;
this.map28979 = map28979;
this.filter_spec = filter_spec;
this.map28980 = map28980;
this.G__28985 = G__28985;
this.input_schema28982 = input_schema28982;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.output_checker28984 = output_checker28984;
this.meta29053 = meta29053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t29052.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t29052.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t29052";
clustermap.components.filters.tag_checkboxes_filter.t29052.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t29052");
});})(owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984))
;
clustermap.components.filters.tag_checkboxes_filter.t29052.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29052.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984))
;
clustermap.components.filters.tag_checkboxes_filter.t29052.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29052.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984))
;
clustermap.components.filters.tag_checkboxes_filter.t29052.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29052.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984){
return (function (state_29092){var state_val_29093 = (state_29092[(1)]);if((state_val_29093 === (7)))
{var inst_29083 = (state_29092[(2)]);var state_29092__$1 = state_29092;if(cljs.core.truth_(inst_29083))
{var statearr_29094_29125 = state_29092__$1;(statearr_29094_29125[(1)] = (11));
} else
{var statearr_29095_29126 = state_29092__$1;(statearr_29095_29126[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (1)))
{var state_29092__$1 = state_29092;var statearr_29096_29127 = state_29092__$1;(statearr_29096_29127[(2)] = null);
(statearr_29096_29127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (4)))
{var inst_29057 = (state_29092[(7)]);var inst_29057__$1 = (state_29092[(2)]);var state_29092__$1 = (function (){var statearr_29097 = state_29092;(statearr_29097[(7)] = inst_29057__$1);
return statearr_29097;
})();if(cljs.core.truth_(inst_29057__$1))
{var statearr_29098_29128 = state_29092__$1;(statearr_29098_29128[(1)] = (5));
} else
{var statearr_29099_29129 = state_29092__$1;(statearr_29099_29129[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (13)))
{var inst_29088 = (state_29092[(2)]);var state_29092__$1 = state_29092;var statearr_29100_29130 = state_29092__$1;(statearr_29100_29130[(2)] = inst_29088);
(statearr_29100_29130[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (6)))
{var state_29092__$1 = state_29092;var statearr_29101_29131 = state_29092__$1;(statearr_29101_29131[(2)] = null);
(statearr_29101_29131[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (3)))
{var inst_29090 = (state_29092[(2)]);var state_29092__$1 = state_29092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29092__$1,inst_29090);
} else
{if((state_val_29093 === (12)))
{var state_29092__$1 = state_29092;var statearr_29102_29132 = state_29092__$1;(statearr_29102_29132[(2)] = null);
(statearr_29102_29132[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (2)))
{var state_29092__$1 = state_29092;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29092__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29093 === (11)))
{var state_29092__$1 = state_29092;var statearr_29103_29133 = state_29092__$1;(statearr_29103_29133[(2)] = null);
(statearr_29103_29133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (9)))
{var inst_29063 = (state_29092[(8)]);var state_29092__$1 = state_29092;var statearr_29104_29134 = state_29092__$1;(statearr_29104_29134[(2)] = inst_29063);
(statearr_29104_29134[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (5)))
{var inst_29057 = (state_29092[(7)]);var inst_29063 = (state_29092[(8)]);var inst_29060 = cljs.core.nth.call(null,inst_29057,(0),null);var inst_29061 = cljs.core.nth.call(null,inst_29057,(1),null);var inst_29063__$1 = om.core.get_props.call(null,self__.owner);var inst_29064 = cljs.core.seq_QMARK_.call(null,inst_29063__$1);var state_29092__$1 = (function (){var statearr_29105 = state_29092;(statearr_29105[(9)] = inst_29060);
(statearr_29105[(10)] = inst_29061);
(statearr_29105[(8)] = inst_29063__$1);
return statearr_29105;
})();if(inst_29064)
{var statearr_29106_29135 = state_29092__$1;(statearr_29106_29135[(1)] = (8));
} else
{var statearr_29107_29136 = state_29092__$1;(statearr_29107_29136[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (10)))
{var inst_29061 = (state_29092[(10)]);var inst_29069 = (state_29092[(2)]);var inst_29070 = cljs.core.get.call(null,inst_29069,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29071 = cljs.core.get.call(null,inst_29069,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29072 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29073 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_29061];var inst_29074 = (new cljs.core.PersistentVector(null,3,(5),inst_29072,inst_29073,null));var inst_29075 = cljs.core.clj__GT_js.call(null,inst_29074);var inst_29076 = console.log(inst_29075);var inst_29077 = cljs.core.deref.call(null,inst_29070);var inst_29078 = cljs.core.deref.call(null,inst_29071);var inst_29079 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_29077,inst_29078,inst_29061);var inst_29080 = om.core.update_BANG_.call(null,inst_29070,inst_29079);var state_29092__$1 = (function (){var statearr_29108 = state_29092;(statearr_29108[(11)] = inst_29076);
(statearr_29108[(12)] = inst_29080);
return statearr_29108;
})();var statearr_29109_29137 = state_29092__$1;(statearr_29109_29137[(2)] = true);
(statearr_29109_29137[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29093 === (8)))
{var inst_29063 = (state_29092[(8)]);var inst_29066 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29063);var state_29092__$1 = state_29092;var statearr_29110_29138 = state_29092__$1;(statearr_29110_29138[(2)] = inst_29066);
(statearr_29110_29138[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29114 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29114[(0)] = state_machine__11462__auto__);
(statearr_29114[(1)] = (1));
return statearr_29114;
});
var state_machine__11462__auto____1 = (function (state_29092){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29092);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29115){if((e29115 instanceof Object))
{var ex__11465__auto__ = e29115;var statearr_29116_29139 = state_29092;(statearr_29116_29139[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29092);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29115;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29140 = state_29092;
state_29092 = G__29140;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29092){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984))
})();var state__11519__auto__ = (function (){var statearr_29117 = f__11518__auto__.call(null);(statearr_29117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984))
;
clustermap.components.filters.tag_checkboxes_filter.t29052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984){
return (function (_29054){var self__ = this;
var _29054__$1 = this;return self__.meta29053;
});})(owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984))
;
clustermap.components.filters.tag_checkboxes_filter.t29052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984){
return (function (_29054,meta29053__$1){var self__ = this;
var _29054__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t29052(self__.component_spec,self__.constructor28977,self__.component_filter_rq_chan,self__.owner,self__.input_checker28983,self__.data,self__.output_schema28981,self__.map28979,self__.filter_spec,self__.map28980,self__.G__28985,self__.input_schema28982,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.output_checker28984,meta29053__$1));
});})(owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t29052 = ((function (owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984){
return (function __GT_t29052(component_spec__$1,constructor28977__$1,component_filter_rq_chan__$1,owner__$1,input_checker28983__$1,data__$1,output_schema28981__$1,map28979__$1,filter_spec__$1,map28980__$1,G__28985__$1,input_schema28982__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_checker28984__$1,meta29053){return (new clustermap.components.filters.tag_checkboxes_filter.t29052(component_spec__$1,constructor28977__$1,component_filter_rq_chan__$1,owner__$1,input_checker28983__$1,data__$1,output_schema28981__$1,map28979__$1,filter_spec__$1,map28980__$1,G__28985__$1,input_schema28982__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_checker28984__$1,meta29053));
});})(owner,component_filter_rq_chan,map28980,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t29052(component_spec,constructor28977,component_filter_rq_chan,owner,input_checker28983,data,output_schema28981,map28979,filter_spec,map28980,G__28985,input_schema28982,validate__6034__auto__,id,ufv__,output_checker28984,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29141 = output_checker28984.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29141))
{var error__6036__auto___29142 = temp__4126__auto___29141;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28977","constructor28977",122637856,null),cljs.core.pr_str.call(null,error__6036__auto___29142)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29142,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28981,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28981,input_schema28982,input_checker28983,output_checker28984))
,schema.core.make_fn_schema.call(null,output_schema28981,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28982], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___29121){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner28976,p__29118){var vec__29120 = p__29118;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29120,(0),null);return component_fnk__7881__auto___29121.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28976,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner28976,var_args){
var p__29118 = null;if (arguments.length > 2) {
  p__29118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner28976,p__29118);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29143){
var data__7882__auto__ = cljs.core.first(arglist__29143);
arglist__29143 = cljs.core.next(arglist__29143);
var owner28976 = cljs.core.first(arglist__29143);
var p__29118 = cljs.core.rest(arglist__29143);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner28976,p__29118);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29121))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m28978){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m28978);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m28978){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m28978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
