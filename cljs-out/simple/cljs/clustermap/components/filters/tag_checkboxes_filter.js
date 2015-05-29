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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29002(s__29003){return (new cljs.core.LazySeq(null,(function (){var s__29003__$1 = s__29003;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29003__$1);if(temp__4126__auto__)
{var s__29003__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29003__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29003__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29005 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29004 = (0);while(true){
if((i__29004 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__29004);cljs.core.chunk_append.call(null,b__29005,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__29006 = (i__29004 + (1));
i__29004 = G__29006;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29005),iter__29002.call(null,cljs.core.chunk_rest.call(null,s__29003__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29005),null);
}
} else
{var t = cljs.core.first.call(null,s__29003__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__29002.call(null,cljs.core.rest.call(null,s__29003__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29007_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29007_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__29008,value){var map__29010 = p__29008;var map__29010__$1 = ((cljs.core.seq_QMARK_.call(null,map__29010))?cljs.core.apply.call(null,cljs.core.hash_map,map__29010):map__29010);var component_spec = map__29010__$1;var tags = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29010__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__29011_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__29011_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__29013,values){var map__29015 = p__29013;var map__29015__$1 = ((cljs.core.seq_QMARK_.call(null,map__29015))?cljs.core.apply.call(null,cljs.core.hash_map,map__29015):map__29015);var component_spec = map__29015__$1;var sorted = cljs.core.get.call(null,map__29015__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__29015__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29015__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29015,map__29015__$1,component_spec,sorted,tags,label){
return (function (p1__29012_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29012_SHARP_));
});})(values__$1,map__29015,map__29015__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29016,values){var map__29018 = p__29016;var map__29018__$1 = ((cljs.core.seq_QMARK_.call(null,map__29018))?cljs.core.apply.call(null,cljs.core.hash_map,map__29018):map__29018);var component_spec = map__29018__$1;var tags = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29020 = schema.core.Any;var input_schema29021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29019","map29019",1539117517,null))], null);var input_checker29022 = schema.core.checker.call(null,input_schema29021);var output_checker29023 = schema.core.checker.call(null,output_schema29020);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29020,input_schema29021,input_checker29022,output_checker29023){
return (function render_STAR_(G__29024){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29024], null);var temp__4126__auto___29042 = input_checker29022.call(null,args__6035__auto___29041);if(cljs.core.truth_(temp__4126__auto___29042))
{var error__6036__auto___29043 = temp__4126__auto___29042;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29043)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29043,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29041,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29021,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29019 = G__29024;while(true){
if(cljs.core.map_QMARK_.call(null,map29019))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29019)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29019,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29019,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);return React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29020,input_schema29021,input_checker29022,output_checker29023){
return (function iter__29033(s__29034){return (new cljs.core.LazySeq(null,((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29020,input_schema29021,input_checker29022,output_checker29023){
return (function (){var s__29034__$1 = s__29034;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29034__$1);if(temp__4126__auto__)
{var s__29034__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29034__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29034__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29036 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29035 = (0);while(true){
if((i__29035 < size__4376__auto__))
{var map__29039 = cljs.core._nth.call(null,c__4375__auto__,i__29035);var map__29039__$1 = ((cljs.core.seq_QMARK_.call(null,map__29039))?cljs.core.apply.call(null,cljs.core.hash_map,map__29039):map__29039);var label__$1 = cljs.core.get.call(null,map__29039__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29039__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29036,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29035,map__29039,map__29039__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29036,s__29034__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29020,input_schema29021,input_checker29022,output_checker29023){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29035,map__29039,map__29039__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29036,s__29034__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29020,input_schema29021,input_checker29022,output_checker29023))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29044 = (i__29035 + (1));
i__29035 = G__29044;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29036),iter__29033.call(null,cljs.core.chunk_rest.call(null,s__29034__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29036),null);
}
} else
{var map__29040 = cljs.core.first.call(null,s__29034__$2);var map__29040__$1 = ((cljs.core.seq_QMARK_.call(null,map__29040))?cljs.core.apply.call(null,cljs.core.hash_map,map__29040):map__29040);var label__$1 = cljs.core.get.call(null,map__29040__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29040__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29040,map__29040__$1,label__$1,value,s__29034__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29020,input_schema29021,input_checker29022,output_checker29023){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29040,map__29040__$1,label__$1,value,s__29034__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29020,input_schema29021,input_checker29022,output_checker29023))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29033.call(null,cljs.core.rest.call(null,s__29034__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29020,input_schema29021,input_checker29022,output_checker29023))
,null,null));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29020,input_schema29021,input_checker29022,output_checker29023))
;return iter__4377__auto__.call(null,tags__$1);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29045 = output_checker29023.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29045))
{var error__6036__auto___29046 = temp__4126__auto___29045;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29046)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29046,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29020,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29020,input_schema29021,input_checker29022,output_checker29023))
,schema.core.make_fn_schema.call(null,output_schema29020,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29021], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29192 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29052 = schema.core.Any;var input_schema29053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29050","map29050",1310020721,null))], null);var input_checker29054 = schema.core.checker.call(null,input_schema29053);var output_checker29055 = schema.core.checker.call(null,output_schema29052);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055){
return (function constructor29048(G__29056){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29056], null);var temp__4126__auto___29194 = input_checker29054.call(null,args__6035__auto___29193);if(cljs.core.truth_(temp__4126__auto___29194))
{var error__6036__auto___29195 = temp__4126__auto___29194;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29048","constructor29048",1805810627,null),cljs.core.pr_str.call(null,error__6036__auto___29195)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29195,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29193,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29053,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29050 = G__29056;while(true){
if(cljs.core.map_QMARK_.call(null,map29050))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29050)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29050,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29051 = plumbing.fnk.schema.safe_get.call(null,map29050,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29051,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29050,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t29123 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t29123 = (function (component_spec,component_filter_rq_chan,constructor29048,input_schema29053,owner,data,output_schema29052,G__29056,filter_spec,map29051,input_checker29054,map29050,validate__6034__auto__,id,output_checker29055,ufv__,meta29124){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.constructor29048 = constructor29048;
this.input_schema29053 = input_schema29053;
this.owner = owner;
this.data = data;
this.output_schema29052 = output_schema29052;
this.G__29056 = G__29056;
this.filter_spec = filter_spec;
this.map29051 = map29051;
this.input_checker29054 = input_checker29054;
this.map29050 = map29050;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_checker29055 = output_checker29055;
this.ufv__ = ufv__;
this.meta29124 = meta29124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t29123.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t29123.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t29123";
clustermap.components.filters.tag_checkboxes_filter.t29123.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t29123");
});})(owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055))
;
clustermap.components.filters.tag_checkboxes_filter.t29123.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29123.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055))
;
clustermap.components.filters.tag_checkboxes_filter.t29123.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29123.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055))
;
clustermap.components.filters.tag_checkboxes_filter.t29123.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29123.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055){
return (function (_){var self__ = this;
var ___$1 = this;var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055){
return (function (state_29163){var state_val_29164 = (state_29163[(1)]);if((state_val_29164 === (7)))
{var inst_29154 = (state_29163[(2)]);var state_29163__$1 = state_29163;if(cljs.core.truth_(inst_29154))
{var statearr_29165_29196 = state_29163__$1;(statearr_29165_29196[(1)] = (11));
} else
{var statearr_29166_29197 = state_29163__$1;(statearr_29166_29197[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29164 === (1)))
{var state_29163__$1 = state_29163;var statearr_29167_29198 = state_29163__$1;(statearr_29167_29198[(2)] = null);
(statearr_29167_29198[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29164 === (4)))
{var inst_29128 = (state_29163[(7)]);var inst_29128__$1 = (state_29163[(2)]);var state_29163__$1 = (function (){var statearr_29168 = state_29163;(statearr_29168[(7)] = inst_29128__$1);
return statearr_29168;
})();if(cljs.core.truth_(inst_29128__$1))
{var statearr_29169_29199 = state_29163__$1;(statearr_29169_29199[(1)] = (5));
} else
{var statearr_29170_29200 = state_29163__$1;(statearr_29170_29200[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29164 === (13)))
{var inst_29159 = (state_29163[(2)]);var state_29163__$1 = state_29163;var statearr_29171_29201 = state_29163__$1;(statearr_29171_29201[(2)] = inst_29159);
(statearr_29171_29201[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29164 === (6)))
{var state_29163__$1 = state_29163;var statearr_29172_29202 = state_29163__$1;(statearr_29172_29202[(2)] = null);
(statearr_29172_29202[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29164 === (3)))
{var inst_29161 = (state_29163[(2)]);var state_29163__$1 = state_29163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29163__$1,inst_29161);
} else
{if((state_val_29164 === (12)))
{var state_29163__$1 = state_29163;var statearr_29173_29203 = state_29163__$1;(statearr_29173_29203[(2)] = null);
(statearr_29173_29203[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29164 === (2)))
{var state_29163__$1 = state_29163;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29163__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29164 === (11)))
{var state_29163__$1 = state_29163;var statearr_29174_29204 = state_29163__$1;(statearr_29174_29204[(2)] = null);
(statearr_29174_29204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29164 === (9)))
{var inst_29134 = (state_29163[(8)]);var state_29163__$1 = state_29163;var statearr_29175_29205 = state_29163__$1;(statearr_29175_29205[(2)] = inst_29134);
(statearr_29175_29205[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29164 === (5)))
{var inst_29128 = (state_29163[(7)]);var inst_29134 = (state_29163[(8)]);var inst_29131 = cljs.core.nth.call(null,inst_29128,(0),null);var inst_29132 = cljs.core.nth.call(null,inst_29128,(1),null);var inst_29134__$1 = om.core.get_props.call(null,self__.owner);var inst_29135 = cljs.core.seq_QMARK_.call(null,inst_29134__$1);var state_29163__$1 = (function (){var statearr_29176 = state_29163;(statearr_29176[(9)] = inst_29131);
(statearr_29176[(10)] = inst_29132);
(statearr_29176[(8)] = inst_29134__$1);
return statearr_29176;
})();if(inst_29135)
{var statearr_29177_29206 = state_29163__$1;(statearr_29177_29206[(1)] = (8));
} else
{var statearr_29178_29207 = state_29163__$1;(statearr_29178_29207[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29164 === (10)))
{var inst_29132 = (state_29163[(10)]);var inst_29140 = (state_29163[(2)]);var inst_29141 = cljs.core.get.call(null,inst_29140,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29142 = cljs.core.get.call(null,inst_29140,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29143 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29144 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_29132];var inst_29145 = (new cljs.core.PersistentVector(null,3,(5),inst_29143,inst_29144,null));var inst_29146 = cljs.core.clj__GT_js.call(null,inst_29145);var inst_29147 = console.log(inst_29146);var inst_29148 = cljs.core.deref.call(null,inst_29141);var inst_29149 = cljs.core.deref.call(null,inst_29142);var inst_29150 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_29148,inst_29149,inst_29132);var inst_29151 = om.core.update_BANG_.call(null,inst_29141,inst_29150);var state_29163__$1 = (function (){var statearr_29179 = state_29163;(statearr_29179[(11)] = inst_29147);
(statearr_29179[(12)] = inst_29151);
return statearr_29179;
})();var statearr_29180_29208 = state_29163__$1;(statearr_29180_29208[(2)] = true);
(statearr_29180_29208[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29164 === (8)))
{var inst_29134 = (state_29163[(8)]);var inst_29137 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29134);var state_29163__$1 = state_29163;var statearr_29181_29209 = state_29163__$1;(statearr_29181_29209[(2)] = inst_29137);
(statearr_29181_29209[(1)] = (10));
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
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055))
;return ((function (switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_29185 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29185[(0)] = state_machine__11242__auto__);
(statearr_29185[(1)] = (1));
return statearr_29185;
});
var state_machine__11242__auto____1 = (function (state_29163){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_29163);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e29186){if((e29186 instanceof Object))
{var ex__11245__auto__ = e29186;var statearr_29187_29210 = state_29163;(statearr_29187_29210[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29163);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29186;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29211 = state_29163;
state_29163 = G__29211;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_29163){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_29163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055))
})();var state__11299__auto__ = (function (){var statearr_29188 = f__11298__auto__.call(null);(statearr_29188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_29188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055))
);
return c__11297__auto__;
});})(owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055))
;
clustermap.components.filters.tag_checkboxes_filter.t29123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055){
return (function (_29125){var self__ = this;
var _29125__$1 = this;return self__.meta29124;
});})(owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055))
;
clustermap.components.filters.tag_checkboxes_filter.t29123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055){
return (function (_29125,meta29124__$1){var self__ = this;
var _29125__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t29123(self__.component_spec,self__.component_filter_rq_chan,self__.constructor29048,self__.input_schema29053,self__.owner,self__.data,self__.output_schema29052,self__.G__29056,self__.filter_spec,self__.map29051,self__.input_checker29054,self__.map29050,self__.validate__6034__auto__,self__.id,self__.output_checker29055,self__.ufv__,meta29124__$1));
});})(owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t29123 = ((function (owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055){
return (function __GT_t29123(component_spec__$1,component_filter_rq_chan__$1,constructor29048__$1,input_schema29053__$1,owner__$1,data__$1,output_schema29052__$1,G__29056__$1,filter_spec__$1,map29051__$1,input_checker29054__$1,map29050__$1,validate__6034__auto____$1,id__$1,output_checker29055__$1,ufv____$1,meta29124){return (new clustermap.components.filters.tag_checkboxes_filter.t29123(component_spec__$1,component_filter_rq_chan__$1,constructor29048__$1,input_schema29053__$1,owner__$1,data__$1,output_schema29052__$1,G__29056__$1,filter_spec__$1,map29051__$1,input_checker29054__$1,map29050__$1,validate__6034__auto____$1,id__$1,output_checker29055__$1,ufv____$1,meta29124));
});})(owner,component_filter_rq_chan,map29051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t29123(component_spec,component_filter_rq_chan,constructor29048,input_schema29053,owner,data,output_schema29052,G__29056,filter_spec,map29051,input_checker29054,map29050,validate__6034__auto__,id,output_checker29055,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29212 = output_checker29055.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29212))
{var error__6036__auto___29213 = temp__4126__auto___29212;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29048","constructor29048",1805810627,null),cljs.core.pr_str.call(null,error__6036__auto___29213)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29213,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29052,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29052,input_schema29053,input_checker29054,output_checker29055))
,schema.core.make_fn_schema.call(null,output_schema29052,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29053], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___29192){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner29047,p__29189){var vec__29191 = p__29189;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29191,(0),null);return component_fnk__7881__auto___29192.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29047,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner29047,var_args){
var p__29189 = null;if (arguments.length > 2) {
  p__29189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29047,p__29189);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29214){
var data__7882__auto__ = cljs.core.first(arglist__29214);
arglist__29214 = cljs.core.next(arglist__29214);
var owner29047 = cljs.core.first(arglist__29214);
var p__29189 = cljs.core.rest(arglist__29214);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner29047,p__29189);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29192))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29049){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m29049);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m29049){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
