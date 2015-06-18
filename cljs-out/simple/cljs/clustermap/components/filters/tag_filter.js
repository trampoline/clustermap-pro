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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30808_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30808_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30809,value){var map__30811 = p__30809;var map__30811__$1 = ((cljs.core.seq_QMARK_.call(null,map__30811))?cljs.core.apply.call(null,cljs.core.hash_map,map__30811):map__30811);var component_spec = map__30811__$1;var tags = cljs.core.get.call(null,map__30811__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30811__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30812,value){var map__30814 = p__30812;var map__30814__$1 = ((cljs.core.seq_QMARK_.call(null,map__30814))?cljs.core.apply.call(null,cljs.core.hash_map,map__30814):map__30814);var component_spec = map__30814__$1;var tags = cljs.core.get.call(null,map__30814__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30814__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30815,value){var map__30817 = p__30815;var map__30817__$1 = ((cljs.core.seq_QMARK_.call(null,map__30817))?cljs.core.apply.call(null,cljs.core.hash_map,map__30817):map__30817);var component_spec = map__30817__$1;var tags = cljs.core.get.call(null,map__30817__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30817__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30818_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30818_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30819_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30819_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30821 = schema.core.Any;var input_schema30822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30820","map30820",-1548250644,null))], null);var input_checker30823 = schema.core.checker.call(null,input_schema30822);var output_checker30824 = schema.core.checker.call(null,output_schema30821);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30821,input_schema30822,input_checker30823,output_checker30824){
return (function render_STAR_(G__30825){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30842 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30825], null);var temp__4126__auto___30843 = input_checker30823.call(null,args__6035__auto___30842);if(cljs.core.truth_(temp__4126__auto___30843))
{var error__6036__auto___30844 = temp__4126__auto___30843;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30844)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30844,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30842,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30822,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30820 = G__30825;while(true){
if(cljs.core.map_QMARK_.call(null,map30820))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30820)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30820,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30820,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30821,input_schema30822,input_checker30823,output_checker30824){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30821,input_schema30822,input_checker30823,output_checker30824))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30821,input_schema30822,input_checker30823,output_checker30824){
return (function iter__30834(s__30835){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30821,input_schema30822,input_checker30823,output_checker30824){
return (function (){var s__30835__$1 = s__30835;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30835__$1);if(temp__4126__auto__)
{var s__30835__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30835__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30835__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30837 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30836 = (0);while(true){
if((i__30836 < size__4376__auto__))
{var map__30840 = cljs.core._nth.call(null,c__4375__auto__,i__30836);var map__30840__$1 = ((cljs.core.seq_QMARK_.call(null,map__30840))?cljs.core.apply.call(null,cljs.core.hash_map,map__30840):map__30840);var label__$1 = cljs.core.get.call(null,map__30840__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30840__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30837,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30845 = (i__30836 + (1));
i__30836 = G__30845;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30837),iter__30834.call(null,cljs.core.chunk_rest.call(null,s__30835__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30837),null);
}
} else
{var map__30841 = cljs.core.first.call(null,s__30835__$2);var map__30841__$1 = ((cljs.core.seq_QMARK_.call(null,map__30841))?cljs.core.apply.call(null,cljs.core.hash_map,map__30841):map__30841);var label__$1 = cljs.core.get.call(null,map__30841__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30841__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30834.call(null,cljs.core.rest.call(null,s__30835__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30821,input_schema30822,input_checker30823,output_checker30824))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30821,input_schema30822,input_checker30823,output_checker30824))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30846 = output_checker30824.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30846))
{var error__6036__auto___30847 = temp__4126__auto___30846;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30847)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30847,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30821,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30821,input_schema30822,input_checker30823,output_checker30824))
,schema.core.make_fn_schema.call(null,output_schema30821,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30822], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30993 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30853 = schema.core.Any;var input_schema30854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30851","map30851",1046280728,null))], null);var input_checker30855 = schema.core.checker.call(null,input_schema30854);var output_checker30856 = schema.core.checker.call(null,output_schema30853);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856){
return (function constructor30849(G__30857){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30857], null);var temp__4126__auto___30995 = input_checker30855.call(null,args__6035__auto___30994);if(cljs.core.truth_(temp__4126__auto___30995))
{var error__6036__auto___30996 = temp__4126__auto___30995;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30849","constructor30849",866514390,null),cljs.core.pr_str.call(null,error__6036__auto___30996)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30996,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30994,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30854,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30851 = G__30857;while(true){
if(cljs.core.map_QMARK_.call(null,map30851))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30851)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30851,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30852 = plumbing.fnk.schema.safe_get.call(null,map30851,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30852,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30851,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30924 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30924 = (function (component_spec,component_filter_rq_chan,owner,data,input_checker30855,filter_spec,map30852,constructor30849,output_schema30853,input_schema30854,map30851,validate__6034__auto__,id,G__30857,ufv__,output_checker30856,meta30925){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.input_checker30855 = input_checker30855;
this.filter_spec = filter_spec;
this.map30852 = map30852;
this.constructor30849 = constructor30849;
this.output_schema30853 = output_schema30853;
this.input_schema30854 = input_schema30854;
this.map30851 = map30851;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__30857 = G__30857;
this.ufv__ = ufv__;
this.output_checker30856 = output_checker30856;
this.meta30925 = meta30925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30924.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30924.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30924";
clustermap.components.filters.tag_filter.t30924.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t30924");
});})(owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856))
;
clustermap.components.filters.tag_filter.t30924.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30924.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856))
;
clustermap.components.filters.tag_filter.t30924.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30924.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856))
;
clustermap.components.filters.tag_filter.t30924.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30924.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856){
return (function (state_30964){var state_val_30965 = (state_30964[(1)]);if((state_val_30965 === (7)))
{var inst_30955 = (state_30964[(2)]);var state_30964__$1 = state_30964;if(cljs.core.truth_(inst_30955))
{var statearr_30966_30997 = state_30964__$1;(statearr_30966_30997[(1)] = (11));
} else
{var statearr_30967_30998 = state_30964__$1;(statearr_30967_30998[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30965 === (1)))
{var state_30964__$1 = state_30964;var statearr_30968_30999 = state_30964__$1;(statearr_30968_30999[(2)] = null);
(statearr_30968_30999[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30965 === (4)))
{var inst_30929 = (state_30964[(7)]);var inst_30929__$1 = (state_30964[(2)]);var state_30964__$1 = (function (){var statearr_30969 = state_30964;(statearr_30969[(7)] = inst_30929__$1);
return statearr_30969;
})();if(cljs.core.truth_(inst_30929__$1))
{var statearr_30970_31000 = state_30964__$1;(statearr_30970_31000[(1)] = (5));
} else
{var statearr_30971_31001 = state_30964__$1;(statearr_30971_31001[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30965 === (13)))
{var inst_30960 = (state_30964[(2)]);var state_30964__$1 = state_30964;var statearr_30972_31002 = state_30964__$1;(statearr_30972_31002[(2)] = inst_30960);
(statearr_30972_31002[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30965 === (6)))
{var state_30964__$1 = state_30964;var statearr_30973_31003 = state_30964__$1;(statearr_30973_31003[(2)] = null);
(statearr_30973_31003[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30965 === (3)))
{var inst_30962 = (state_30964[(2)]);var state_30964__$1 = state_30964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30964__$1,inst_30962);
} else
{if((state_val_30965 === (12)))
{var state_30964__$1 = state_30964;var statearr_30974_31004 = state_30964__$1;(statearr_30974_31004[(2)] = null);
(statearr_30974_31004[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30965 === (2)))
{var state_30964__$1 = state_30964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30964__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30965 === (11)))
{var state_30964__$1 = state_30964;var statearr_30975_31005 = state_30964__$1;(statearr_30975_31005[(2)] = null);
(statearr_30975_31005[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30965 === (9)))
{var inst_30935 = (state_30964[(8)]);var state_30964__$1 = state_30964;var statearr_30976_31006 = state_30964__$1;(statearr_30976_31006[(2)] = inst_30935);
(statearr_30976_31006[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30965 === (5)))
{var inst_30929 = (state_30964[(7)]);var inst_30935 = (state_30964[(8)]);var inst_30932 = cljs.core.nth.call(null,inst_30929,(0),null);var inst_30933 = cljs.core.nth.call(null,inst_30929,(1),null);var inst_30935__$1 = om.core.get_props.call(null,self__.owner);var inst_30936 = cljs.core.seq_QMARK_.call(null,inst_30935__$1);var state_30964__$1 = (function (){var statearr_30977 = state_30964;(statearr_30977[(9)] = inst_30933);
(statearr_30977[(8)] = inst_30935__$1);
(statearr_30977[(10)] = inst_30932);
return statearr_30977;
})();if(inst_30936)
{var statearr_30978_31007 = state_30964__$1;(statearr_30978_31007[(1)] = (8));
} else
{var statearr_30979_31008 = state_30964__$1;(statearr_30979_31008[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30965 === (10)))
{var inst_30933 = (state_30964[(9)]);var inst_30941 = (state_30964[(2)]);var inst_30942 = cljs.core.get.call(null,inst_30941,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30943 = cljs.core.get.call(null,inst_30941,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30944 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30945 = ["TAG-FILTER-RQ",self__.id,inst_30933];var inst_30946 = (new cljs.core.PersistentVector(null,3,(5),inst_30944,inst_30945,null));var inst_30947 = cljs.core.clj__GT_js.call(null,inst_30946);var inst_30948 = console.log(inst_30947);var inst_30949 = cljs.core.deref.call(null,inst_30942);var inst_30950 = cljs.core.deref.call(null,inst_30943);var inst_30951 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30949,inst_30950,inst_30933);var inst_30952 = om.core.update_BANG_.call(null,inst_30942,inst_30951);var state_30964__$1 = (function (){var statearr_30980 = state_30964;(statearr_30980[(11)] = inst_30952);
(statearr_30980[(12)] = inst_30948);
return statearr_30980;
})();var statearr_30981_31009 = state_30964__$1;(statearr_30981_31009[(2)] = true);
(statearr_30981_31009[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30965 === (8)))
{var inst_30935 = (state_30964[(8)]);var inst_30938 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30935);var state_30964__$1 = state_30964;var statearr_30982_31010 = state_30964__$1;(statearr_30982_31010[(2)] = inst_30938);
(statearr_30982_31010[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30986 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30986[(0)] = state_machine__9111__auto__);
(statearr_30986[(1)] = (1));
return statearr_30986;
});
var state_machine__9111__auto____1 = (function (state_30964){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30964);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30987){if((e30987 instanceof Object))
{var ex__9114__auto__ = e30987;var statearr_30988_31011 = state_30964;(statearr_30988_31011[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30964);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30987;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31012 = state_30964;
state_30964 = G__31012;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30964){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856))
})();var state__9127__auto__ = (function (){var statearr_30989 = f__9126__auto__.call(null);(statearr_30989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856))
;
clustermap.components.filters.tag_filter.t30924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856){
return (function (_30926){var self__ = this;
var _30926__$1 = this;return self__.meta30925;
});})(owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856))
;
clustermap.components.filters.tag_filter.t30924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856){
return (function (_30926,meta30925__$1){var self__ = this;
var _30926__$1 = this;return (new clustermap.components.filters.tag_filter.t30924(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.input_checker30855,self__.filter_spec,self__.map30852,self__.constructor30849,self__.output_schema30853,self__.input_schema30854,self__.map30851,self__.validate__6034__auto__,self__.id,self__.G__30857,self__.ufv__,self__.output_checker30856,meta30925__$1));
});})(owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856))
;
clustermap.components.filters.tag_filter.__GT_t30924 = ((function (owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856){
return (function __GT_t30924(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,input_checker30855__$1,filter_spec__$1,map30852__$1,constructor30849__$1,output_schema30853__$1,input_schema30854__$1,map30851__$1,validate__6034__auto____$1,id__$1,G__30857__$1,ufv____$1,output_checker30856__$1,meta30925){return (new clustermap.components.filters.tag_filter.t30924(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,input_checker30855__$1,filter_spec__$1,map30852__$1,constructor30849__$1,output_schema30853__$1,input_schema30854__$1,map30851__$1,validate__6034__auto____$1,id__$1,G__30857__$1,ufv____$1,output_checker30856__$1,meta30925));
});})(owner,component_filter_rq_chan,map30852,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856))
;
}
return (new clustermap.components.filters.tag_filter.t30924(component_spec,component_filter_rq_chan,owner,data,input_checker30855,filter_spec,map30852,constructor30849,output_schema30853,input_schema30854,map30851,validate__6034__auto__,id,G__30857,ufv__,output_checker30856,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31013 = output_checker30856.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31013))
{var error__6036__auto___31014 = temp__4126__auto___31013;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30849","constructor30849",866514390,null),cljs.core.pr_str.call(null,error__6036__auto___31014)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31014,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30853,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30853,input_schema30854,input_checker30855,output_checker30856))
,schema.core.make_fn_schema.call(null,output_schema30853,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30854], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___30993){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30848,p__30990){var vec__30992 = p__30990;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30992,(0),null);return component_fnk__7881__auto___30993.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30848,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30848,var_args){
var p__30990 = null;if (arguments.length > 2) {
  p__30990 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30848,p__30990);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__31015){
var data__7882__auto__ = cljs.core.first(arglist__31015);
arglist__31015 = cljs.core.next(arglist__31015);
var owner30848 = cljs.core.first(arglist__31015);
var p__30990 = cljs.core.rest(arglist__31015);
return tag_filter_component__delegate(data__7882__auto__,owner30848,p__30990);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___30993))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30850){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30850);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30850){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
