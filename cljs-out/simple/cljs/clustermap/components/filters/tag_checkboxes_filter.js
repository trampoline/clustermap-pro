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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29000(s__29001){return (new cljs.core.LazySeq(null,(function (){var s__29001__$1 = s__29001;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29001__$1);if(temp__4126__auto__)
{var s__29001__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29001__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29001__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29003 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29002 = (0);while(true){
if((i__29002 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__29002);cljs.core.chunk_append.call(null,b__29003,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__29004 = (i__29002 + (1));
i__29002 = G__29004;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29003),iter__29000.call(null,cljs.core.chunk_rest.call(null,s__29001__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29003),null);
}
} else
{var t = cljs.core.first.call(null,s__29001__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__29000.call(null,cljs.core.rest.call(null,s__29001__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29005_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29005_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__29006,value){var map__29008 = p__29006;var map__29008__$1 = ((cljs.core.seq_QMARK_.call(null,map__29008))?cljs.core.apply.call(null,cljs.core.hash_map,map__29008):map__29008);var component_spec = map__29008__$1;var tags = cljs.core.get.call(null,map__29008__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29008__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__29009_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__29009_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__29011,values){var map__29013 = p__29011;var map__29013__$1 = ((cljs.core.seq_QMARK_.call(null,map__29013))?cljs.core.apply.call(null,cljs.core.hash_map,map__29013):map__29013);var component_spec = map__29013__$1;var sorted = cljs.core.get.call(null,map__29013__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__29013__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29013__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__29013,map__29013__$1,component_spec,sorted,tags,label){
return (function (p1__29010_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29010_SHARP_));
});})(values__$1,map__29013,map__29013__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__29014,values){var map__29016 = p__29014;var map__29016__$1 = ((cljs.core.seq_QMARK_.call(null,map__29016))?cljs.core.apply.call(null,cljs.core.hash_map,map__29016):map__29016);var component_spec = map__29016__$1;var tags = cljs.core.get.call(null,map__29016__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29018 = schema.core.Any;var input_schema29019 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29017","map29017",313057300,null))], null);var input_checker29020 = schema.core.checker.call(null,input_schema29019);var output_checker29021 = schema.core.checker.call(null,output_schema29018);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29018,input_schema29019,input_checker29020,output_checker29021){
return (function render_STAR_(G__29022){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29039 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29022], null);var temp__4126__auto___29040 = input_checker29020.call(null,args__6035__auto___29039);if(cljs.core.truth_(temp__4126__auto___29040))
{var error__6036__auto___29041 = temp__4126__auto___29040;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29041)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29041,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29039,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29019,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29017 = G__29022;while(true){
if(cljs.core.map_QMARK_.call(null,map29017))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29017)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29017,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29017,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);return React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29018,input_schema29019,input_checker29020,output_checker29021){
return (function iter__29031(s__29032){return (new cljs.core.LazySeq(null,((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29018,input_schema29019,input_checker29020,output_checker29021){
return (function (){var s__29032__$1 = s__29032;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29032__$1);if(temp__4126__auto__)
{var s__29032__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29032__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29032__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29034 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29033 = (0);while(true){
if((i__29033 < size__4376__auto__))
{var map__29037 = cljs.core._nth.call(null,c__4375__auto__,i__29033);var map__29037__$1 = ((cljs.core.seq_QMARK_.call(null,map__29037))?cljs.core.apply.call(null,cljs.core.hash_map,map__29037):map__29037);var label__$1 = cljs.core.get.call(null,map__29037__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29037__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29034,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__29033,map__29037,map__29037__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29034,s__29032__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29018,input_schema29019,input_checker29020,output_checker29021){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__29033,map__29037,map__29037__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__29034,s__29032__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29018,input_schema29019,input_checker29020,output_checker29021))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29042 = (i__29033 + (1));
i__29033 = G__29042;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29034),iter__29031.call(null,cljs.core.chunk_rest.call(null,s__29032__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29034),null);
}
} else
{var map__29038 = cljs.core.first.call(null,s__29032__$2);var map__29038__$1 = ((cljs.core.seq_QMARK_.call(null,map__29038))?cljs.core.apply.call(null,cljs.core.hash_map,map__29038):map__29038);var label__$1 = cljs.core.get.call(null,map__29038__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29038__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29038,map__29038__$1,label__$1,value,s__29032__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29018,input_schema29019,input_checker29020,output_checker29021){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29038,map__29038__$1,label__$1,value,s__29032__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29018,input_schema29019,input_checker29020,output_checker29021))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__29031.call(null,cljs.core.rest.call(null,s__29032__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29018,input_schema29019,input_checker29020,output_checker29021))
,null,null));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29018,input_schema29019,input_checker29020,output_checker29021))
;return iter__4377__auto__.call(null,tags__$1);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29043 = output_checker29021.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29043))
{var error__6036__auto___29044 = temp__4126__auto___29043;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29044)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29044,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29018,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29018,input_schema29019,input_checker29020,output_checker29021))
,schema.core.make_fn_schema.call(null,output_schema29018,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29019], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29190 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29050 = schema.core.Any;var input_schema29051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29048","map29048",768870531,null))], null);var input_checker29052 = schema.core.checker.call(null,input_schema29051);var output_checker29053 = schema.core.checker.call(null,output_schema29050);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053){
return (function constructor29046(G__29054){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29054], null);var temp__4126__auto___29192 = input_checker29052.call(null,args__6035__auto___29191);if(cljs.core.truth_(temp__4126__auto___29192))
{var error__6036__auto___29193 = temp__4126__auto___29192;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29046","constructor29046",669808832,null),cljs.core.pr_str.call(null,error__6036__auto___29193)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29193,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29191,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29051,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29048 = G__29054;while(true){
if(cljs.core.map_QMARK_.call(null,map29048))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29048)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29048,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29049 = plumbing.fnk.schema.safe_get.call(null,map29048,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29049,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29048,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t29121 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t29121 = (function (constructor29046,component_spec,output_schema29050,component_filter_rq_chan,output_checker29053,map29048,input_schema29051,owner,data,G__29054,input_checker29052,map29049,filter_spec,validate__6034__auto__,id,ufv__,meta29122){
this.constructor29046 = constructor29046;
this.component_spec = component_spec;
this.output_schema29050 = output_schema29050;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_checker29053 = output_checker29053;
this.map29048 = map29048;
this.input_schema29051 = input_schema29051;
this.owner = owner;
this.data = data;
this.G__29054 = G__29054;
this.input_checker29052 = input_checker29052;
this.map29049 = map29049;
this.filter_spec = filter_spec;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta29122 = meta29122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t29121.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t29121.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t29121";
clustermap.components.filters.tag_checkboxes_filter.t29121.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t29121");
});})(owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053))
;
clustermap.components.filters.tag_checkboxes_filter.t29121.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29121.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053))
;
clustermap.components.filters.tag_checkboxes_filter.t29121.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29121.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053))
;
clustermap.components.filters.tag_checkboxes_filter.t29121.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29121.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053){
return (function (_){var self__ = this;
var ___$1 = this;var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053){
return (function (state_29161){var state_val_29162 = (state_29161[(1)]);if((state_val_29162 === (7)))
{var inst_29152 = (state_29161[(2)]);var state_29161__$1 = state_29161;if(cljs.core.truth_(inst_29152))
{var statearr_29163_29194 = state_29161__$1;(statearr_29163_29194[(1)] = (11));
} else
{var statearr_29164_29195 = state_29161__$1;(statearr_29164_29195[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29162 === (1)))
{var state_29161__$1 = state_29161;var statearr_29165_29196 = state_29161__$1;(statearr_29165_29196[(2)] = null);
(statearr_29165_29196[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29162 === (4)))
{var inst_29126 = (state_29161[(7)]);var inst_29126__$1 = (state_29161[(2)]);var state_29161__$1 = (function (){var statearr_29166 = state_29161;(statearr_29166[(7)] = inst_29126__$1);
return statearr_29166;
})();if(cljs.core.truth_(inst_29126__$1))
{var statearr_29167_29197 = state_29161__$1;(statearr_29167_29197[(1)] = (5));
} else
{var statearr_29168_29198 = state_29161__$1;(statearr_29168_29198[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29162 === (13)))
{var inst_29157 = (state_29161[(2)]);var state_29161__$1 = state_29161;var statearr_29169_29199 = state_29161__$1;(statearr_29169_29199[(2)] = inst_29157);
(statearr_29169_29199[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29162 === (6)))
{var state_29161__$1 = state_29161;var statearr_29170_29200 = state_29161__$1;(statearr_29170_29200[(2)] = null);
(statearr_29170_29200[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29162 === (3)))
{var inst_29159 = (state_29161[(2)]);var state_29161__$1 = state_29161;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29161__$1,inst_29159);
} else
{if((state_val_29162 === (12)))
{var state_29161__$1 = state_29161;var statearr_29171_29201 = state_29161__$1;(statearr_29171_29201[(2)] = null);
(statearr_29171_29201[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29162 === (2)))
{var state_29161__$1 = state_29161;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29161__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29162 === (11)))
{var state_29161__$1 = state_29161;var statearr_29172_29202 = state_29161__$1;(statearr_29172_29202[(2)] = null);
(statearr_29172_29202[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29162 === (9)))
{var inst_29132 = (state_29161[(8)]);var state_29161__$1 = state_29161;var statearr_29173_29203 = state_29161__$1;(statearr_29173_29203[(2)] = inst_29132);
(statearr_29173_29203[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29162 === (5)))
{var inst_29132 = (state_29161[(8)]);var inst_29126 = (state_29161[(7)]);var inst_29129 = cljs.core.nth.call(null,inst_29126,(0),null);var inst_29130 = cljs.core.nth.call(null,inst_29126,(1),null);var inst_29132__$1 = om.core.get_props.call(null,self__.owner);var inst_29133 = cljs.core.seq_QMARK_.call(null,inst_29132__$1);var state_29161__$1 = (function (){var statearr_29174 = state_29161;(statearr_29174[(9)] = inst_29130);
(statearr_29174[(8)] = inst_29132__$1);
(statearr_29174[(10)] = inst_29129);
return statearr_29174;
})();if(inst_29133)
{var statearr_29175_29204 = state_29161__$1;(statearr_29175_29204[(1)] = (8));
} else
{var statearr_29176_29205 = state_29161__$1;(statearr_29176_29205[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29162 === (10)))
{var inst_29130 = (state_29161[(9)]);var inst_29138 = (state_29161[(2)]);var inst_29139 = cljs.core.get.call(null,inst_29138,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29140 = cljs.core.get.call(null,inst_29138,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29141 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29142 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_29130];var inst_29143 = (new cljs.core.PersistentVector(null,3,(5),inst_29141,inst_29142,null));var inst_29144 = cljs.core.clj__GT_js.call(null,inst_29143);var inst_29145 = console.log(inst_29144);var inst_29146 = cljs.core.deref.call(null,inst_29139);var inst_29147 = cljs.core.deref.call(null,inst_29140);var inst_29148 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_29146,inst_29147,inst_29130);var inst_29149 = om.core.update_BANG_.call(null,inst_29139,inst_29148);var state_29161__$1 = (function (){var statearr_29177 = state_29161;(statearr_29177[(11)] = inst_29149);
(statearr_29177[(12)] = inst_29145);
return statearr_29177;
})();var statearr_29178_29206 = state_29161__$1;(statearr_29178_29206[(2)] = true);
(statearr_29178_29206[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29162 === (8)))
{var inst_29132 = (state_29161[(8)]);var inst_29135 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29132);var state_29161__$1 = state_29161;var statearr_29179_29207 = state_29161__$1;(statearr_29179_29207[(2)] = inst_29135);
(statearr_29179_29207[(1)] = (10));
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
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053))
;return ((function (switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_29183 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29183[(0)] = state_machine__11242__auto__);
(statearr_29183[(1)] = (1));
return statearr_29183;
});
var state_machine__11242__auto____1 = (function (state_29161){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_29161);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e29184){if((e29184 instanceof Object))
{var ex__11245__auto__ = e29184;var statearr_29185_29208 = state_29161;(statearr_29185_29208[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29161);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29184;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29209 = state_29161;
state_29161 = G__29209;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_29161){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_29161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053))
})();var state__11299__auto__ = (function (){var statearr_29186 = f__11298__auto__.call(null);(statearr_29186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_29186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053))
);
return c__11297__auto__;
});})(owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053))
;
clustermap.components.filters.tag_checkboxes_filter.t29121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053){
return (function (_29123){var self__ = this;
var _29123__$1 = this;return self__.meta29122;
});})(owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053))
;
clustermap.components.filters.tag_checkboxes_filter.t29121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053){
return (function (_29123,meta29122__$1){var self__ = this;
var _29123__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t29121(self__.constructor29046,self__.component_spec,self__.output_schema29050,self__.component_filter_rq_chan,self__.output_checker29053,self__.map29048,self__.input_schema29051,self__.owner,self__.data,self__.G__29054,self__.input_checker29052,self__.map29049,self__.filter_spec,self__.validate__6034__auto__,self__.id,self__.ufv__,meta29122__$1));
});})(owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t29121 = ((function (owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053){
return (function __GT_t29121(constructor29046__$1,component_spec__$1,output_schema29050__$1,component_filter_rq_chan__$1,output_checker29053__$1,map29048__$1,input_schema29051__$1,owner__$1,data__$1,G__29054__$1,input_checker29052__$1,map29049__$1,filter_spec__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29122){return (new clustermap.components.filters.tag_checkboxes_filter.t29121(constructor29046__$1,component_spec__$1,output_schema29050__$1,component_filter_rq_chan__$1,output_checker29053__$1,map29048__$1,input_schema29051__$1,owner__$1,data__$1,G__29054__$1,input_checker29052__$1,map29049__$1,filter_spec__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29122));
});})(owner,component_filter_rq_chan,map29049,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t29121(constructor29046,component_spec,output_schema29050,component_filter_rq_chan,output_checker29053,map29048,input_schema29051,owner,data,G__29054,input_checker29052,map29049,filter_spec,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29210 = output_checker29053.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29210))
{var error__6036__auto___29211 = temp__4126__auto___29210;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29046","constructor29046",669808832,null),cljs.core.pr_str.call(null,error__6036__auto___29211)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29211,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29050,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29050,input_schema29051,input_checker29052,output_checker29053))
,schema.core.make_fn_schema.call(null,output_schema29050,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29051], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___29190){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner29045,p__29187){var vec__29189 = p__29187;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29189,(0),null);return component_fnk__7881__auto___29190.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29045,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner29045,var_args){
var p__29187 = null;if (arguments.length > 2) {
  p__29187 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29045,p__29187);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29212){
var data__7882__auto__ = cljs.core.first(arglist__29212);
arglist__29212 = cljs.core.next(arglist__29212);
var owner29045 = cljs.core.first(arglist__29212);
var p__29187 = cljs.core.rest(arglist__29212);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner29045,p__29187);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29190))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29047){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m29047);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m29047){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
