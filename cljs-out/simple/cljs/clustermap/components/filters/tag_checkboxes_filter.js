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
clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value = (function get_tags_by_value(tags){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__28962(s__28963){return (new cljs.core.LazySeq(null,(function (){var s__28963__$1 = s__28963;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28963__$1);if(temp__4126__auto__)
{var s__28963__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28963__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28963__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28965 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28964 = (0);while(true){
if((i__28964 < size__4376__auto__))
{var t = cljs.core._nth.call(null,c__4375__auto__,i__28964);cljs.core.chunk_append.call(null,b__28965,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null));
{
var G__28966 = (i__28964 + (1));
i__28964 = G__28966;
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
{var t = cljs.core.first.call(null,s__28963__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t),t], null),iter__28962.call(null,cljs.core.rest.call(null,s__28963__$2)));
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
clustermap.components.filters.tag_checkboxes_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28967_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28967_SHARP_));
}),tags));
});
/**
* a filter for a single tag value
*/
clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value = (function filter_for_tag_value(p__28968,value){var map__28970 = p__28968;var map__28970__$1 = ((cljs.core.seq_QMARK_.call(null,map__28970))?cljs.core.apply.call(null,cljs.core.hash_map,map__28970):map__28970);var component_spec = map__28970__$1;var tags = cljs.core.get.call(null,map__28970__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__28970__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
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
clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values = (function combine_filter_for_tag_values(component_spec,values){var fs = cljs.core.map.call(null,(function (p1__28971_SHARP_){return clustermap.components.filters.tag_checkboxes_filter.filter_for_tag_value.call(null,component_spec,p1__28971_SHARP_);
}),values);return clustermap.filters.or_filters.call(null,fs);
});
clustermap.components.filters.tag_checkboxes_filter.get_tags_description = (function get_tags_description(p__28973,values){var map__28975 = p__28973;var map__28975__$1 = ((cljs.core.seq_QMARK_.call(null,map__28975))?cljs.core.apply.call(null,cljs.core.hash_map,map__28975):map__28975);var component_spec = map__28975__$1;var sorted = cljs.core.get.call(null,map__28975__$1,new cljs.core.Keyword(null,"sorted","sorted",-896746253));var tags = cljs.core.get.call(null,map__28975__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__28975__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__28975,map__28975__$1,component_spec,sorted,tags,label){
return (function (p1__28972_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28972_SHARP_));
});})(values__$1,map__28975,map__28975__$1,component_spec,sorted,tags,label))
,tags);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__28976,values){var map__28978 = p__28976;var map__28978__$1 = ((cljs.core.seq_QMARK_.call(null,map__28978))?cljs.core.apply.call(null,cljs.core.hash_map,map__28978):map__28978);var component_spec = map__28978__$1;var tags = cljs.core.get.call(null,map__28978__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__28978__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_checkboxes_filter.combine_filter_for_tag_values.call(null,component_spec,values);var d = clustermap.components.filters.tag_checkboxes_filter.get_tags_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-CHECKBOXES-FILTER",id,cljs.core.val,f,d,u], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
clustermap.components.filters.tag_checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28980 = schema.core.Any;var input_schema28981 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28979","map28979",1800008941,null))], null);var input_checker28982 = schema.core.checker.call(null,input_schema28981);var output_checker28983 = schema.core.checker.call(null,output_schema28980);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function render_STAR_(G__28984){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28984], null);var temp__4126__auto___29002 = input_checker28982.call(null,args__6035__auto___29001);if(cljs.core.truth_(temp__4126__auto___29002))
{var error__6036__auto___29003 = temp__4126__auto___29002;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29003)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29003,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29001,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28981,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28979 = G__28984;while(true){
if(cljs.core.map_QMARK_.call(null,map28979))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28979)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28979,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map28979,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),tags):tags);var tags_by_value = clustermap.components.filters.tag_checkboxes_filter.get_tags_by_value.call(null,tags__$1);var current_tag_values = clustermap.components.filters.tag_checkboxes_filter.extract_tag_values_from_filters.call(null,components,id);return React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function iter__28993(s__28994){return (new cljs.core.LazySeq(null,((function (tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function (){var s__28994__$1 = s__28994;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28994__$1);if(temp__4126__auto__)
{var s__28994__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28994__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28994__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28996 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28995 = (0);while(true){
if((i__28995 < size__4376__auto__))
{var map__28999 = cljs.core._nth.call(null,c__4375__auto__,i__28995);var map__28999__$1 = ((cljs.core.seq_QMARK_.call(null,map__28999))?cljs.core.apply.call(null,cljs.core.hash_map,map__28999):map__28999);var label__$1 = cljs.core.get.call(null,map__28999__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__28999__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__28996,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (i__28995,map__28999,map__28999__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__28996,s__28994__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__28995,map__28999,map__28999__$1,label__$1,value,c__4375__auto__,size__4376__auto__,b__28996,s__28994__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__29004 = (i__28995 + (1));
i__28995 = G__29004;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28996),iter__28993.call(null,cljs.core.chunk_rest.call(null,s__28994__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28996),null);
}
} else
{var map__29000 = cljs.core.first.call(null,s__28994__$2);var map__29000__$1 = ((cljs.core.seq_QMARK_.call(null,map__29000))?cljs.core.apply.call(null,cljs.core.hash_map,map__29000):map__29000);var label__$1 = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_tag_values.call(null,value), "onChange": ((function (map__29000,map__29000__$1,label__$1,value,s__28994__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_tag_values,value):cljs.core.disj.call(null,current_tag_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__29000,map__29000__$1,label__$1,value,s__28994__$2,temp__4126__auto__,tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__28993.call(null,cljs.core.rest.call(null,s__28994__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
,null,null));
});})(tags__$1,tags_by_value,current_tag_values,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
;return iter__4377__auto__.call(null,tags__$1);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29005 = output_checker28983.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29005))
{var error__6036__auto___29006 = temp__4126__auto___29005;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29006)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29006,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28980,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28980,input_schema28981,input_checker28982,output_checker28983))
,schema.core.make_fn_schema.call(null,output_schema28980,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28981], null)));
})();
clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29152 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29012 = schema.core.Any;var input_schema29013 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_checkboxes_filter.TagCheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29010","map29010",1373248624,null))], null);var input_checker29014 = schema.core.checker.call(null,input_schema29013);var output_checker29015 = schema.core.checker.call(null,output_schema29012);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015){
return (function constructor29008(G__29016){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29016], null);var temp__4126__auto___29154 = input_checker29014.call(null,args__6035__auto___29153);if(cljs.core.truth_(temp__4126__auto___29154))
{var error__6036__auto___29155 = temp__4126__auto___29154;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29008","constructor29008",2125196634,null),cljs.core.pr_str.call(null,error__6036__auto___29155)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29155,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29153,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29013,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29010 = G__29016;while(true){
if(cljs.core.map_QMARK_.call(null,map29010))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29010)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29010,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29011 = plumbing.fnk.schema.safe_get.call(null,map29010,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29011,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29010,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_checkboxes_filter.t29083 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_checkboxes_filter.t29083 = (function (component_spec,G__29016,component_filter_rq_chan,owner,data,output_checker29015,filter_spec,map29010,input_checker29014,validate__6034__auto__,constructor29008,id,input_schema29013,ufv__,map29011,output_schema29012,meta29084){
this.component_spec = component_spec;
this.G__29016 = G__29016;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.output_checker29015 = output_checker29015;
this.filter_spec = filter_spec;
this.map29010 = map29010;
this.input_checker29014 = input_checker29014;
this.validate__6034__auto__ = validate__6034__auto__;
this.constructor29008 = constructor29008;
this.id = id;
this.input_schema29013 = input_schema29013;
this.ufv__ = ufv__;
this.map29011 = map29011;
this.output_schema29012 = output_schema29012;
this.meta29084 = meta29084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_checkboxes_filter.t29083.cljs$lang$type = true;
clustermap.components.filters.tag_checkboxes_filter.t29083.cljs$lang$ctorStr = "clustermap.components.filters.tag-checkboxes-filter/t29083";
clustermap.components.filters.tag_checkboxes_filter.t29083.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-checkboxes-filter/t29083");
});})(owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015))
;
clustermap.components.filters.tag_checkboxes_filter.t29083.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29083.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015))
;
clustermap.components.filters.tag_checkboxes_filter.t29083.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29083.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015))
;
clustermap.components.filters.tag_checkboxes_filter.t29083.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_checkboxes_filter.t29083.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015){
return (function (state_29123){var state_val_29124 = (state_29123[(1)]);if((state_val_29124 === (7)))
{var inst_29114 = (state_29123[(2)]);var state_29123__$1 = state_29123;if(cljs.core.truth_(inst_29114))
{var statearr_29125_29156 = state_29123__$1;(statearr_29125_29156[(1)] = (11));
} else
{var statearr_29126_29157 = state_29123__$1;(statearr_29126_29157[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29124 === (1)))
{var state_29123__$1 = state_29123;var statearr_29127_29158 = state_29123__$1;(statearr_29127_29158[(2)] = null);
(statearr_29127_29158[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29124 === (4)))
{var inst_29088 = (state_29123[(7)]);var inst_29088__$1 = (state_29123[(2)]);var state_29123__$1 = (function (){var statearr_29128 = state_29123;(statearr_29128[(7)] = inst_29088__$1);
return statearr_29128;
})();if(cljs.core.truth_(inst_29088__$1))
{var statearr_29129_29159 = state_29123__$1;(statearr_29129_29159[(1)] = (5));
} else
{var statearr_29130_29160 = state_29123__$1;(statearr_29130_29160[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29124 === (13)))
{var inst_29119 = (state_29123[(2)]);var state_29123__$1 = state_29123;var statearr_29131_29161 = state_29123__$1;(statearr_29131_29161[(2)] = inst_29119);
(statearr_29131_29161[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29124 === (6)))
{var state_29123__$1 = state_29123;var statearr_29132_29162 = state_29123__$1;(statearr_29132_29162[(2)] = null);
(statearr_29132_29162[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29124 === (3)))
{var inst_29121 = (state_29123[(2)]);var state_29123__$1 = state_29123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29123__$1,inst_29121);
} else
{if((state_val_29124 === (12)))
{var state_29123__$1 = state_29123;var statearr_29133_29163 = state_29123__$1;(statearr_29133_29163[(2)] = null);
(statearr_29133_29163[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29124 === (2)))
{var state_29123__$1 = state_29123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29123__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29124 === (11)))
{var state_29123__$1 = state_29123;var statearr_29134_29164 = state_29123__$1;(statearr_29134_29164[(2)] = null);
(statearr_29134_29164[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29124 === (9)))
{var inst_29094 = (state_29123[(8)]);var state_29123__$1 = state_29123;var statearr_29135_29165 = state_29123__$1;(statearr_29135_29165[(2)] = inst_29094);
(statearr_29135_29165[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29124 === (5)))
{var inst_29094 = (state_29123[(8)]);var inst_29088 = (state_29123[(7)]);var inst_29091 = cljs.core.nth.call(null,inst_29088,(0),null);var inst_29092 = cljs.core.nth.call(null,inst_29088,(1),null);var inst_29094__$1 = om.core.get_props.call(null,self__.owner);var inst_29095 = cljs.core.seq_QMARK_.call(null,inst_29094__$1);var state_29123__$1 = (function (){var statearr_29136 = state_29123;(statearr_29136[(8)] = inst_29094__$1);
(statearr_29136[(9)] = inst_29091);
(statearr_29136[(10)] = inst_29092);
return statearr_29136;
})();if(inst_29095)
{var statearr_29137_29166 = state_29123__$1;(statearr_29137_29166[(1)] = (8));
} else
{var statearr_29138_29167 = state_29123__$1;(statearr_29138_29167[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29124 === (10)))
{var inst_29092 = (state_29123[(10)]);var inst_29100 = (state_29123[(2)]);var inst_29101 = cljs.core.get.call(null,inst_29100,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29102 = cljs.core.get.call(null,inst_29100,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29103 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29104 = ["TAG-CHECKBOXES-FILTER-RQ",self__.id,inst_29092];var inst_29105 = (new cljs.core.PersistentVector(null,3,(5),inst_29103,inst_29104,null));var inst_29106 = cljs.core.clj__GT_js.call(null,inst_29105);var inst_29107 = console.log(inst_29106);var inst_29108 = cljs.core.deref.call(null,inst_29101);var inst_29109 = cljs.core.deref.call(null,inst_29102);var inst_29110 = clustermap.components.filters.tag_checkboxes_filter.set_filters_for_values.call(null,inst_29108,inst_29109,inst_29092);var inst_29111 = om.core.update_BANG_.call(null,inst_29101,inst_29110);var state_29123__$1 = (function (){var statearr_29139 = state_29123;(statearr_29139[(11)] = inst_29107);
(statearr_29139[(12)] = inst_29111);
return statearr_29139;
})();var statearr_29140_29168 = state_29123__$1;(statearr_29140_29168[(2)] = true);
(statearr_29140_29168[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29124 === (8)))
{var inst_29094 = (state_29123[(8)]);var inst_29097 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29094);var state_29123__$1 = state_29123;var statearr_29141_29169 = state_29123__$1;(statearr_29141_29169[(2)] = inst_29097);
(statearr_29141_29169[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29145 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29145[(0)] = state_machine__11462__auto__);
(statearr_29145[(1)] = (1));
return statearr_29145;
});
var state_machine__11462__auto____1 = (function (state_29123){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29123);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29146){if((e29146 instanceof Object))
{var ex__11465__auto__ = e29146;var statearr_29147_29170 = state_29123;(statearr_29147_29170[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29146;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29171 = state_29123;
state_29123 = G__29171;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29123){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015))
})();var state__11519__auto__ = (function (){var statearr_29148 = f__11518__auto__.call(null);(statearr_29148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29148;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015))
;
clustermap.components.filters.tag_checkboxes_filter.t29083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015){
return (function (_29085){var self__ = this;
var _29085__$1 = this;return self__.meta29084;
});})(owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015))
;
clustermap.components.filters.tag_checkboxes_filter.t29083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015){
return (function (_29085,meta29084__$1){var self__ = this;
var _29085__$1 = this;return (new clustermap.components.filters.tag_checkboxes_filter.t29083(self__.component_spec,self__.G__29016,self__.component_filter_rq_chan,self__.owner,self__.data,self__.output_checker29015,self__.filter_spec,self__.map29010,self__.input_checker29014,self__.validate__6034__auto__,self__.constructor29008,self__.id,self__.input_schema29013,self__.ufv__,self__.map29011,self__.output_schema29012,meta29084__$1));
});})(owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_t29083 = ((function (owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015){
return (function __GT_t29083(component_spec__$1,G__29016__$1,component_filter_rq_chan__$1,owner__$1,data__$1,output_checker29015__$1,filter_spec__$1,map29010__$1,input_checker29014__$1,validate__6034__auto____$1,constructor29008__$1,id__$1,input_schema29013__$1,ufv____$1,map29011__$1,output_schema29012__$1,meta29084){return (new clustermap.components.filters.tag_checkboxes_filter.t29083(component_spec__$1,G__29016__$1,component_filter_rq_chan__$1,owner__$1,data__$1,output_checker29015__$1,filter_spec__$1,map29010__$1,input_checker29014__$1,validate__6034__auto____$1,constructor29008__$1,id__$1,input_schema29013__$1,ufv____$1,map29011__$1,output_schema29012__$1,meta29084));
});})(owner,component_filter_rq_chan,map29011,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015))
;
}
return (new clustermap.components.filters.tag_checkboxes_filter.t29083(component_spec,G__29016,component_filter_rq_chan,owner,data,output_checker29015,filter_spec,map29010,input_checker29014,validate__6034__auto__,constructor29008,id,input_schema29013,ufv__,map29011,output_schema29012,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29172 = output_checker29015.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29172))
{var error__6036__auto___29173 = temp__4126__auto___29172;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29008","constructor29008",2125196634,null),cljs.core.pr_str.call(null,error__6036__auto___29173)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29173,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29012,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29012,input_schema29013,input_checker29014,output_checker29015))
,schema.core.make_fn_schema.call(null,output_schema29012,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29013], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component = ((function (component_fnk__7881__auto___29152){
return (function() { 
var tag_checkboxes_filter_component__delegate = function (data__7882__auto__,owner29007,p__29149){var vec__29151 = p__29149;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29151,(0),null);return component_fnk__7881__auto___29152.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29007,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_checkboxes_filter_component = function (data__7882__auto__,owner29007,var_args){
var p__29149 = null;if (arguments.length > 2) {
  p__29149 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_checkboxes_filter_component__delegate.call(this,data__7882__auto__,owner29007,p__29149);};
tag_checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
tag_checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__29174){
var data__7882__auto__ = cljs.core.first(arglist__29174);
arglist__29174 = cljs.core.next(arglist__29174);
var owner29007 = cljs.core.first(arglist__29174);
var p__29149 = cljs.core.rest(arglist__29174);
return tag_checkboxes_filter_component__delegate(data__7882__auto__,owner29007,p__29149);
});
tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_checkboxes_filter_component__delegate;
return tag_checkboxes_filter_component;
})()
;})(component_fnk__7881__auto___29152))
;
clustermap.components.filters.tag_checkboxes_filter.__GT_tag_checkboxes_filter_component = (function() {
var __GT_tag_checkboxes_filter_component = null;
var __GT_tag_checkboxes_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__);
});
var __GT_tag_checkboxes_filter_component__2 = (function (cursor__7850__auto__,m29009){return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,cursor__7850__auto__,m29009);
});
__GT_tag_checkboxes_filter_component = function(cursor__7850__auto__,m29009){
switch(arguments.length){
case 1:
return __GT_tag_checkboxes_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_checkboxes_filter_component__2.call(this,cursor__7850__auto__,m29009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_checkboxes_filter_component__1;
__GT_tag_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_checkboxes_filter_component__2;
return __GT_tag_checkboxes_filter_component;
})()
;
