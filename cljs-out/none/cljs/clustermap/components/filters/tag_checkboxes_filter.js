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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12252__auto__ = (function iter__28784(s__28785){return (new cljs.core.LazySeq(null,(function (){var s__28785__$1 = s__28785;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28785__$1);if(temp__4126__auto__)
{var s__28785__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28785__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__28785__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__28787 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__28786 = (0);while(true){
if((i__28786 < size__12251__auto__))
{var t = cljs.core._nth.call(null,c__12250__auto__,i__28786);cljs.core.chunk_append.call(null,b__28787,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__28788 = (i__28786 + (1));
i__28786 = G__28788;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28787),iter__28784.call(null,cljs.core.chunk_rest.call(null,s__28785__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28787),null);
}
} else
{var t = cljs.core.first.call(null,s__28785__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__28784.call(null,cljs.core.rest.call(null,s__28785__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12252__auto__.call(null,tags);
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28789_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28789_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__28790,value){var map__28792 = p__28790;var map__28792__$1 = ((cljs.core.seq_QMARK_.call(null,map__28792))?cljs.core.apply.call(null,cljs.core.hash_map,map__28792):map__28792);var component_spec = map__28792__$1;var tags = cljs.core.get.call(null,map__28792__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__28792__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__28793_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__28793_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__28795,values){var map__28797 = p__28795;var map__28797__$1 = ((cljs.core.seq_QMARK_.call(null,map__28797))?cljs.core.apply.call(null,cljs.core.hash_map,map__28797):map__28797);var component_spec = map__28797__$1;var sorted = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__28797__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__28797,map__28797__$1,component_spec,sorted,tags,label){
return (function (p1__28794_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28794_SHARP_));
});})(values__$1,map__28797,map__28797__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__28798,values){var map__28800 = p__28798;var map__28800__$1 = ((cljs.core.seq_QMARK_.call(null,map__28800))?cljs.core.apply.call(null,cljs.core.hash_map,map__28800):map__28800);var component_spec = map__28800__$1;var tags = cljs.core.get.call(null,map__28800__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__28800__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28802 = schema.core.Any;var input_schema28803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28801","map28801",-2067369744,null))], null);var input_checker28804 = schema.core.checker.call(null,input_schema28803);var output_checker28805 = schema.core.checker.call(null,output_schema28802);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28802,input_schema28803,input_checker28804,output_checker28805){
return (function render_STAR_(G__28806){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___28823 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28806], null);var temp__4126__auto___28824 = input_checker28804.call(null,args__13910__auto___28823);if(cljs.core.truth_(temp__4126__auto___28824))
{var error__13911__auto___28825 = temp__4126__auto___28824;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___28825)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28825,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___28823,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28803,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map28801 = G__28806;while(true){
if(cljs.core.map_QMARK_.call(null,map28801))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28801)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28801,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map28801,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);return React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28802,input_schema28803,input_checker28804,output_checker28805){
return (function iter__28815(s__28816){return (new cljs.core.LazySeq(null,((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28802,input_schema28803,input_checker28804,output_checker28805){
return (function (){var s__28816__$1 = s__28816;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28816__$1);if(temp__4126__auto__)
{var s__28816__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28816__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__28816__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__28818 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__28817 = (0);while(true){
if((i__28817 < size__12251__auto__))
{var map__28821 = cljs.core._nth.call(null,c__12250__auto__,i__28817);var map__28821__$1 = ((cljs.core.seq_QMARK_.call(null,map__28821))?cljs.core.apply.call(null,cljs.core.hash_map,map__28821):map__28821);var label__$1 = cljs.core.get.call(null,map__28821__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__28821__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__28818,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__28817,map__28821,map__28821__$1,label__$1,value,c__12250__auto__,size__12251__auto__,b__28818,s__28816__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28802,input_schema28803,input_checker28804,output_checker28805){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__28817,map__28821,map__28821__$1,label__$1,value,c__12250__auto__,size__12251__auto__,b__28818,s__28816__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28802,input_schema28803,input_checker28804,output_checker28805))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__28826 = (i__28817 + (1));
i__28817 = G__28826;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28818),iter__28815.call(null,cljs.core.chunk_rest.call(null,s__28816__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28818),null);
}
} else
{var map__28822 = cljs.core.first.call(null,s__28816__$2);var map__28822__$1 = ((cljs.core.seq_QMARK_.call(null,map__28822))?cljs.core.apply.call(null,cljs.core.hash_map,map__28822):map__28822);var label__$1 = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__28822,map__28822__$1,label__$1,value,s__28816__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28802,input_schema28803,input_checker28804,output_checker28805){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__28822,map__28822__$1,label__$1,value,s__28816__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28802,input_schema28803,input_checker28804,output_checker28805))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__28815.call(null,cljs.core.rest.call(null,s__28816__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28802,input_schema28803,input_checker28804,output_checker28805))
,null,null));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28802,input_schema28803,input_checker28804,output_checker28805))
;return iter__12252__auto__.call(null,tags__$1);
})()));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___28827 = output_checker28805.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___28827))
{var error__13911__auto___28828 = temp__4126__auto___28827;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___28828)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28828,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28802,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema28802,input_schema28803,input_checker28804,output_checker28805))
,schema.core.make_fn_schema.call(null,output_schema28802,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28803], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__15756__auto___28974 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28834 = schema.core.Any;var input_schema28835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28832","map28832",-1955170342,null))], null);var input_checker28836 = schema.core.checker.call(null,input_schema28835);var output_checker28837 = schema.core.checker.call(null,output_schema28834);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837){
return (function constructor28830(G__28838){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___28975 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28838], null);var temp__4126__auto___28976 = input_checker28836.call(null,args__13910__auto___28975);if(cljs.core.truth_(temp__4126__auto___28976))
{var error__13911__auto___28977 = temp__4126__auto___28976;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28830","constructor28830",-311536570,null),cljs.core.pr_str.call(null,error__13911__auto___28977)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28977,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___28975,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28835,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map28832 = G__28838;while(true){
if(cljs.core.map_QMARK_.call(null,map28832))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28832)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map28832,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map28833 = plumbing.fnk.schema.safe_get.call(null,map28832,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map28833,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28832,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t28905 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t28905 = (function (component_spec,map28833,component_filter_rq_chan,owner,constructor28830,data,input_checker28836,validate__13909__auto__,output_schema28834,filter_spec,G__28838,input_schema28835,output_checker28837,map28832,id,ufv__,meta28906){
this.component_spec = component_spec;
this.map28833 = map28833;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.constructor28830 = constructor28830;
this.data = data;
this.input_checker28836 = input_checker28836;
this.validate__13909__auto__ = validate__13909__auto__;
this.output_schema28834 = output_schema28834;
this.filter_spec = filter_spec;
this.G__28838 = G__28838;
this.input_schema28835 = input_schema28835;
this.output_checker28837 = output_checker28837;
this.map28832 = map28832;
this.id = id;
this.ufv__ = ufv__;
this.meta28906 = meta28906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t28905.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t28905.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t28905";
clustermap.components.filters.tag_checkboxes_filter.t28905.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.filters.tag-checkboxes-filter/t28905");
});})(owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837))
;
clustermap.components.filters.tag_checkboxes_filter.t28905.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t28905.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837))
;
clustermap.components.filters.tag_checkboxes_filter.t28905.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t28905.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837))
;
clustermap.components.filters.tag_checkboxes_filter.t28905.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t28905.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837){
return (function (_){var self__ = this;
var ___$1 = this;var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,___$1,owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,___$1,owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837){
return (function (state_28945){var state_val_28946 = (state_28945[(1)]);if((state_val_28946 === (7)))
{var inst_28936 = (state_28945[(2)]);var state_28945__$1 = state_28945;if(cljs.core.truth_(inst_28936))
{var statearr_28947_28978 = state_28945__$1;(statearr_28947_28978[(1)] = (11));
} else
{var statearr_28948_28979 = state_28945__$1;(statearr_28948_28979[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28946 === (1)))
{var state_28945__$1 = state_28945;var statearr_28949_28980 = state_28945__$1;(statearr_28949_28980[(2)] = null);
(statearr_28949_28980[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28946 === (4)))
{var inst_28910 = (state_28945[(7)]);var inst_28910__$1 = (state_28945[(2)]);var state_28945__$1 = (function (){var statearr_28950 = state_28945;(statearr_28950[(7)] = inst_28910__$1);
return statearr_28950;
})();if(cljs.core.truth_(inst_28910__$1))
{var statearr_28951_28981 = state_28945__$1;(statearr_28951_28981[(1)] = (5));
} else
{var statearr_28952_28982 = state_28945__$1;(statearr_28952_28982[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28946 === (13)))
{var inst_28941 = (state_28945[(2)]);var state_28945__$1 = state_28945;var statearr_28953_28983 = state_28945__$1;(statearr_28953_28983[(2)] = inst_28941);
(statearr_28953_28983[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28946 === (6)))
{var state_28945__$1 = state_28945;var statearr_28954_28984 = state_28945__$1;(statearr_28954_28984[(2)] = null);
(statearr_28954_28984[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28946 === (3)))
{var inst_28943 = (state_28945[(2)]);var state_28945__$1 = state_28945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28945__$1,inst_28943);
} else
{if((state_val_28946 === (12)))
{var state_28945__$1 = state_28945;var statearr_28955_28985 = state_28945__$1;(statearr_28955_28985[(2)] = null);
(statearr_28955_28985[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28946 === (2)))
{var state_28945__$1 = state_28945;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28945__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_28946 === (11)))
{var state_28945__$1 = state_28945;var statearr_28956_28986 = state_28945__$1;(statearr_28956_28986[(2)] = null);
(statearr_28956_28986[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28946 === (9)))
{var inst_28916 = (state_28945[(8)]);var state_28945__$1 = state_28945;var statearr_28957_28987 = state_28945__$1;(statearr_28957_28987[(2)] = inst_28916);
(statearr_28957_28987[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28946 === (5)))
{var inst_28916 = (state_28945[(8)]);var inst_28910 = (state_28945[(7)]);var inst_28913 = cljs.core.nth.call(null,inst_28910,(0),null);var inst_28914 = cljs.core.nth.call(null,inst_28910,(1),null);var inst_28916__$1 = om.core.get_props.call(null,self__.owner);var inst_28917 = cljs.core.seq_QMARK_.call(null,inst_28916__$1);var state_28945__$1 = (function (){var statearr_28958 = state_28945;(statearr_28958[(9)] = inst_28913);
(statearr_28958[(10)] = inst_28914);
(statearr_28958[(8)] = inst_28916__$1);
return statearr_28958;
})();if(inst_28917)
{var statearr_28959_28988 = state_28945__$1;(statearr_28959_28988[(1)] = (8));
} else
{var statearr_28960_28989 = state_28945__$1;(statearr_28960_28989[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28946 === (10)))
{var inst_28914 = (state_28945[(10)]);var inst_28922 = (state_28945[(2)]);var inst_28923 = cljs.core.get.call(null,inst_28922,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_28924 = cljs.core.get.call(null,inst_28922,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_28925 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28926 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_28914];var inst_28927 = (new cljs.core.PersistentVector(null,3,(5),inst_28925,inst_28926,null));var inst_28928 = cljs.core.clj__GT_js.call(null,inst_28927);var inst_28929 = console.log(inst_28928);var inst_28930 = cljs.core.deref.call(null,inst_28923);var inst_28931 = cljs.core.deref.call(null,inst_28924);var inst_28932 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_28930,inst_28931,inst_28914);var inst_28933 = om.core.update_BANG_.call(null,inst_28923,inst_28932);var state_28945__$1 = (function (){var statearr_28961 = state_28945;(statearr_28961[(11)] = inst_28929);
(statearr_28961[(12)] = inst_28933);
return statearr_28961;
})();var statearr_28962_28990 = state_28945__$1;(statearr_28962_28990[(2)] = true);
(statearr_28962_28990[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28946 === (8)))
{var inst_28916 = (state_28945[(8)]);var inst_28919 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28916);var state_28945__$1 = state_28945;var statearr_28963_28991 = state_28945__$1;(statearr_28963_28991[(2)] = inst_28919);
(statearr_28963_28991[(1)] = (10));
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
});})(c__18867__auto__,___$1,owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837))
;return ((function (switch__18811__auto__,c__18867__auto__,___$1,owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_28967 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28967[(0)] = state_machine__18812__auto__);
(statearr_28967[(1)] = (1));
return statearr_28967;
});
var state_machine__18812__auto____1 = (function (state_28945){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_28945);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e28968){if((e28968 instanceof Object))
{var ex__18815__auto__ = e28968;var statearr_28969_28992 = state_28945;(statearr_28969_28992[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28945);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28968;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28993 = state_28945;
state_28945 = G__28993;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_28945){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_28945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,___$1,owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837))
})();var state__18869__auto__ = (function (){var statearr_28970 = f__18868__auto__.call(null);(statearr_28970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_28970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,___$1,owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837))
);
return c__18867__auto__;
});})(owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837))
;
clustermap.components.filters.tag_checkboxes_filter.t28905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837){
return (function (_28907){var self__ = this;
var _28907__$1 = this;return self__.meta28906;
});})(owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837))
;
clustermap.components.filters.tag_checkboxes_filter.t28905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837){
return (function (_28907,meta28906__$1){var self__ = this;
var _28907__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t28905(self__.component_spec,self__.map28833,self__.component_filter_rq_chan,self__.owner,self__.constructor28830,self__.data,self__.input_checker28836,self__.validate__13909__auto__,self__.output_schema28834,self__.filter_spec,self__.G__28838,self__.input_schema28835,self__.output_checker28837,self__.map28832,self__.id,self__.ufv__,meta28906__$1));
});})(owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t28905 = ((function (owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837){
return (function __GT_t28905(component_spec__$1,map28833__$1,component_filter_rq_chan__$1,owner__$1,constructor28830__$1,data__$1,input_checker28836__$1,validate__13909__auto____$1,output_schema28834__$1,filter_spec__$1,G__28838__$1,input_schema28835__$1,output_checker28837__$1,map28832__$1,id__$1,ufv____$1,meta28906){return (new clustermap.components.filters.tag_checkboxes_filter.t28905(component_spec__$1,map28833__$1,component_filter_rq_chan__$1,owner__$1,constructor28830__$1,data__$1,input_checker28836__$1,validate__13909__auto____$1,output_schema28834__$1,filter_spec__$1,G__28838__$1,input_schema28835__$1,output_checker28837__$1,map28832__$1,id__$1,ufv____$1,meta28906));
});})(owner,component_filter_rq_chan,map28833,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t28905(component_spec,map28833,component_filter_rq_chan,owner,constructor28830,data,input_checker28836,validate__13909__auto__,output_schema28834,filter_spec,G__28838,input_schema28835,output_checker28837,map28832,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___28994 = output_checker28837.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___28994))
{var error__13911__auto___28995 = temp__4126__auto___28994;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28830","constructor28830",-311536570,null),cljs.core.pr_str.call(null,error__13911__auto___28995)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28995,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28834,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema28834,input_schema28835,input_checker28836,output_checker28837))
,schema.core.make_fn_schema.call(null,output_schema28834,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28835], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__15756__auto___28974){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__15757__auto__,owner28829,p__28971){var vec__28973 = p__28971;var opts__15758__auto__ = cljs.core.nth.call(null,vec__28973,(0),null);return component_fnk__15756__auto___28974.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15758__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28829,new cljs.core.Keyword(null,"data","data",-232669377),data__15757__auto__], null));
};
var tag_checkboxes_filter_component = function (data__15757__auto__,owner28829,var_args){
var p__28971 = null;if (arguments.length > 2) {
  p__28971 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__15757__auto__,owner28829,p__28971);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__28996){
var data__15757__auto__ = cljs.core.first(arglist__28996);
arglist__28996 = cljs.core.next(arglist__28996);
var owner28829 = cljs.core.first(arglist__28996);
var p__28971 = cljs.core.rest(arglist__28996);
return tag_checkboxes_filter_component__delegate(data__15757__auto__,owner28829,p__28971);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__15756__auto___28974))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__15725__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__15725__auto__,m28831){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__15725__auto__,m28831);
});
__GT_tag_checkboxes_filter_component = function(cursor__15725__auto__,m28831){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__15725__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__15725__auto__,m28831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;

//# sourceMappingURL=tag_checkboxes_filter.js.map