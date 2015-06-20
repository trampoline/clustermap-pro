// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.tag_filter');
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
goog.require('clustermap.filters');
clustermap.components.filters.tag_filter.get_current_value = (function get_current_value(components,id){var or__3639__auto__ = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"must","must",-243952061),(1),new cljs.core.Keyword(null,"term","term",-1817390416),"tag"], null));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
});
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30811_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30811_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30812,value){var map__30814 = p__30812;var map__30814__$1 = ((cljs.core.seq_QMARK_.call(null,map__30814))?cljs.core.apply.call(null,cljs.core.hash_map,map__30814):map__30814);var component_spec = map__30814__$1;var tags = cljs.core.get.call(null,map__30814__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30814__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30815,value){var map__30817 = p__30815;var map__30817__$1 = ((cljs.core.seq_QMARK_.call(null,map__30817))?cljs.core.apply.call(null,cljs.core.hash_map,map__30817):map__30817);var component_spec = map__30817__$1;var tags = cljs.core.get.call(null,map__30817__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30817__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911).cljs$core$IFn$_invoke$arity$1(tag_spec));
} else
{return and__3627__auto__;
}
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(tag_spec)));
} else
{return null;
}
});
/**
* return an updated filter-spec value (doesn't update the cursor)
*/
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30818,value){var map__30820 = p__30818;var map__30820__$1 = ((cljs.core.seq_QMARK_.call(null,map__30820))?cljs.core.apply.call(null,cljs.core.hash_map,map__30820):map__30820);var component_spec = map__30820__$1;var tags = cljs.core.get.call(null,map__30820__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30820__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30821_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30821_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30822_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30822_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30824 = schema.core.Any;var input_schema30825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30823","map30823",1470546144,null))], null);var input_checker30826 = schema.core.checker.call(null,input_schema30825);var output_checker30827 = schema.core.checker.call(null,output_schema30824);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30824,input_schema30825,input_checker30826,output_checker30827){
return (function render_STAR_(G__30828){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30845 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30828], null);var temp__4126__auto___30846 = input_checker30826.call(null,args__6035__auto___30845);if(cljs.core.truth_(temp__4126__auto___30846))
{var error__6036__auto___30847 = temp__4126__auto___30846;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30847)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30847,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30845,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30825,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30823 = G__30828;while(true){
if(cljs.core.map_QMARK_.call(null,map30823))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30823)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30823,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30823,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30824,input_schema30825,input_checker30826,output_checker30827){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30824,input_schema30825,input_checker30826,output_checker30827))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30824,input_schema30825,input_checker30826,output_checker30827){
return (function iter__30837(s__30838){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30824,input_schema30825,input_checker30826,output_checker30827){
return (function (){var s__30838__$1 = s__30838;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30838__$1);if(temp__4126__auto__)
{var s__30838__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30838__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30838__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30840 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30839 = (0);while(true){
if((i__30839 < size__4376__auto__))
{var map__30843 = cljs.core._nth.call(null,c__4375__auto__,i__30839);var map__30843__$1 = ((cljs.core.seq_QMARK_.call(null,map__30843))?cljs.core.apply.call(null,cljs.core.hash_map,map__30843):map__30843);var label__$1 = cljs.core.get.call(null,map__30843__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30843__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30840,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30848 = (i__30839 + (1));
i__30839 = G__30848;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30840),iter__30837.call(null,cljs.core.chunk_rest.call(null,s__30838__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30840),null);
}
} else
{var map__30844 = cljs.core.first.call(null,s__30838__$2);var map__30844__$1 = ((cljs.core.seq_QMARK_.call(null,map__30844))?cljs.core.apply.call(null,cljs.core.hash_map,map__30844):map__30844);var label__$1 = cljs.core.get.call(null,map__30844__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30844__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30837.call(null,cljs.core.rest.call(null,s__30838__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30824,input_schema30825,input_checker30826,output_checker30827))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30824,input_schema30825,input_checker30826,output_checker30827))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30849 = output_checker30827.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30849))
{var error__6036__auto___30850 = temp__4126__auto___30849;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30850)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30850,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30824,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30824,input_schema30825,input_checker30826,output_checker30827))
,schema.core.make_fn_schema.call(null,output_schema30824,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30825], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30996 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30856 = schema.core.Any;var input_schema30857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30854","map30854",-1790289225,null))], null);var input_checker30858 = schema.core.checker.call(null,input_schema30857);var output_checker30859 = schema.core.checker.call(null,output_schema30856);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859){
return (function constructor30852(G__30860){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30860], null);var temp__4126__auto___30998 = input_checker30858.call(null,args__6035__auto___30997);if(cljs.core.truth_(temp__4126__auto___30998))
{var error__6036__auto___30999 = temp__4126__auto___30998;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30852","constructor30852",-942290012,null),cljs.core.pr_str.call(null,error__6036__auto___30999)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30999,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30997,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30857,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30854 = G__30860;while(true){
if(cljs.core.map_QMARK_.call(null,map30854))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30854)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30854,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30855 = plumbing.fnk.schema.safe_get.call(null,map30854,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30855,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30854,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30927 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30927 = (function (component_spec,component_filter_rq_chan,owner,constructor30852,map30855,input_schema30857,data,G__30860,filter_spec,output_schema30856,output_checker30859,input_checker30858,map30854,validate__6034__auto__,id,ufv__,meta30928){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.constructor30852 = constructor30852;
this.map30855 = map30855;
this.input_schema30857 = input_schema30857;
this.data = data;
this.G__30860 = G__30860;
this.filter_spec = filter_spec;
this.output_schema30856 = output_schema30856;
this.output_checker30859 = output_checker30859;
this.input_checker30858 = input_checker30858;
this.map30854 = map30854;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta30928 = meta30928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30927.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30927.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30927";
clustermap.components.filters.tag_filter.t30927.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t30927");
});})(owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859))
;
clustermap.components.filters.tag_filter.t30927.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30927.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859))
;
clustermap.components.filters.tag_filter.t30927.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30927.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859))
;
clustermap.components.filters.tag_filter.t30927.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30927.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859){
return (function (state_30967){var state_val_30968 = (state_30967[(1)]);if((state_val_30968 === (7)))
{var inst_30958 = (state_30967[(2)]);var state_30967__$1 = state_30967;if(cljs.core.truth_(inst_30958))
{var statearr_30969_31000 = state_30967__$1;(statearr_30969_31000[(1)] = (11));
} else
{var statearr_30970_31001 = state_30967__$1;(statearr_30970_31001[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (1)))
{var state_30967__$1 = state_30967;var statearr_30971_31002 = state_30967__$1;(statearr_30971_31002[(2)] = null);
(statearr_30971_31002[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (4)))
{var inst_30932 = (state_30967[(7)]);var inst_30932__$1 = (state_30967[(2)]);var state_30967__$1 = (function (){var statearr_30972 = state_30967;(statearr_30972[(7)] = inst_30932__$1);
return statearr_30972;
})();if(cljs.core.truth_(inst_30932__$1))
{var statearr_30973_31003 = state_30967__$1;(statearr_30973_31003[(1)] = (5));
} else
{var statearr_30974_31004 = state_30967__$1;(statearr_30974_31004[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (13)))
{var inst_30963 = (state_30967[(2)]);var state_30967__$1 = state_30967;var statearr_30975_31005 = state_30967__$1;(statearr_30975_31005[(2)] = inst_30963);
(statearr_30975_31005[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (6)))
{var state_30967__$1 = state_30967;var statearr_30976_31006 = state_30967__$1;(statearr_30976_31006[(2)] = null);
(statearr_30976_31006[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (3)))
{var inst_30965 = (state_30967[(2)]);var state_30967__$1 = state_30967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30967__$1,inst_30965);
} else
{if((state_val_30968 === (12)))
{var state_30967__$1 = state_30967;var statearr_30977_31007 = state_30967__$1;(statearr_30977_31007[(2)] = null);
(statearr_30977_31007[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (2)))
{var state_30967__$1 = state_30967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30967__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30968 === (11)))
{var state_30967__$1 = state_30967;var statearr_30978_31008 = state_30967__$1;(statearr_30978_31008[(2)] = null);
(statearr_30978_31008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (9)))
{var inst_30938 = (state_30967[(8)]);var state_30967__$1 = state_30967;var statearr_30979_31009 = state_30967__$1;(statearr_30979_31009[(2)] = inst_30938);
(statearr_30979_31009[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (5)))
{var inst_30938 = (state_30967[(8)]);var inst_30932 = (state_30967[(7)]);var inst_30935 = cljs.core.nth.call(null,inst_30932,(0),null);var inst_30936 = cljs.core.nth.call(null,inst_30932,(1),null);var inst_30938__$1 = om.core.get_props.call(null,self__.owner);var inst_30939 = cljs.core.seq_QMARK_.call(null,inst_30938__$1);var state_30967__$1 = (function (){var statearr_30980 = state_30967;(statearr_30980[(8)] = inst_30938__$1);
(statearr_30980[(9)] = inst_30936);
(statearr_30980[(10)] = inst_30935);
return statearr_30980;
})();if(inst_30939)
{var statearr_30981_31010 = state_30967__$1;(statearr_30981_31010[(1)] = (8));
} else
{var statearr_30982_31011 = state_30967__$1;(statearr_30982_31011[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (10)))
{var inst_30936 = (state_30967[(9)]);var inst_30944 = (state_30967[(2)]);var inst_30945 = cljs.core.get.call(null,inst_30944,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30946 = cljs.core.get.call(null,inst_30944,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30947 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30948 = ["TAG-FILTER-RQ",self__.id,inst_30936];var inst_30949 = (new cljs.core.PersistentVector(null,3,(5),inst_30947,inst_30948,null));var inst_30950 = cljs.core.clj__GT_js.call(null,inst_30949);var inst_30951 = console.log(inst_30950);var inst_30952 = cljs.core.deref.call(null,inst_30945);var inst_30953 = cljs.core.deref.call(null,inst_30946);var inst_30954 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30952,inst_30953,inst_30936);var inst_30955 = om.core.update_BANG_.call(null,inst_30945,inst_30954);var state_30967__$1 = (function (){var statearr_30983 = state_30967;(statearr_30983[(11)] = inst_30951);
(statearr_30983[(12)] = inst_30955);
return statearr_30983;
})();var statearr_30984_31012 = state_30967__$1;(statearr_30984_31012[(2)] = true);
(statearr_30984_31012[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (8)))
{var inst_30938 = (state_30967[(8)]);var inst_30941 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30938);var state_30967__$1 = state_30967;var statearr_30985_31013 = state_30967__$1;(statearr_30985_31013[(2)] = inst_30941);
(statearr_30985_31013[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30989 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30989[(0)] = state_machine__9111__auto__);
(statearr_30989[(1)] = (1));
return statearr_30989;
});
var state_machine__9111__auto____1 = (function (state_30967){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30967);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30990){if((e30990 instanceof Object))
{var ex__9114__auto__ = e30990;var statearr_30991_31014 = state_30967;(statearr_30991_31014[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30967);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30990;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31015 = state_30967;
state_30967 = G__31015;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30967){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859))
})();var state__9127__auto__ = (function (){var statearr_30992 = f__9126__auto__.call(null);(statearr_30992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859))
;
clustermap.components.filters.tag_filter.t30927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859){
return (function (_30929){var self__ = this;
var _30929__$1 = this;return self__.meta30928;
});})(owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859))
;
clustermap.components.filters.tag_filter.t30927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859){
return (function (_30929,meta30928__$1){var self__ = this;
var _30929__$1 = this;return (new clustermap.components.filters.tag_filter.t30927(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.constructor30852,self__.map30855,self__.input_schema30857,self__.data,self__.G__30860,self__.filter_spec,self__.output_schema30856,self__.output_checker30859,self__.input_checker30858,self__.map30854,self__.validate__6034__auto__,self__.id,self__.ufv__,meta30928__$1));
});})(owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859))
;
clustermap.components.filters.tag_filter.__GT_t30927 = ((function (owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859){
return (function __GT_t30927(component_spec__$1,component_filter_rq_chan__$1,owner__$1,constructor30852__$1,map30855__$1,input_schema30857__$1,data__$1,G__30860__$1,filter_spec__$1,output_schema30856__$1,output_checker30859__$1,input_checker30858__$1,map30854__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30928){return (new clustermap.components.filters.tag_filter.t30927(component_spec__$1,component_filter_rq_chan__$1,owner__$1,constructor30852__$1,map30855__$1,input_schema30857__$1,data__$1,G__30860__$1,filter_spec__$1,output_schema30856__$1,output_checker30859__$1,input_checker30858__$1,map30854__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30928));
});})(owner,component_filter_rq_chan,map30855,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859))
;
}
return (new clustermap.components.filters.tag_filter.t30927(component_spec,component_filter_rq_chan,owner,constructor30852,map30855,input_schema30857,data,G__30860,filter_spec,output_schema30856,output_checker30859,input_checker30858,map30854,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31016 = output_checker30859.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31016))
{var error__6036__auto___31017 = temp__4126__auto___31016;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30852","constructor30852",-942290012,null),cljs.core.pr_str.call(null,error__6036__auto___31017)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31017,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30856,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30856,input_schema30857,input_checker30858,output_checker30859))
,schema.core.make_fn_schema.call(null,output_schema30856,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30857], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___30996){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30851,p__30993){var vec__30995 = p__30993;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30995,(0),null);return component_fnk__7881__auto___30996.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30851,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30851,var_args){
var p__30993 = null;if (arguments.length > 2) {
  p__30993 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30851,p__30993);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__31018){
var data__7882__auto__ = cljs.core.first(arglist__31018);
arglist__31018 = cljs.core.next(arglist__31018);
var owner30851 = cljs.core.first(arglist__31018);
var p__30993 = cljs.core.rest(arglist__31018);
return tag_filter_component__delegate(data__7882__auto__,owner30851,p__30993);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___30996))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30853){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30853);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30853){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
