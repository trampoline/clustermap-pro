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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30941_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30941_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30942,value){var map__30944 = p__30942;var map__30944__$1 = ((cljs.core.seq_QMARK_.call(null,map__30944))?cljs.core.apply.call(null,cljs.core.hash_map,map__30944):map__30944);var component_spec = map__30944__$1;var tags = cljs.core.get.call(null,map__30944__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30944__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30945,value){var map__30947 = p__30945;var map__30947__$1 = ((cljs.core.seq_QMARK_.call(null,map__30947))?cljs.core.apply.call(null,cljs.core.hash_map,map__30947):map__30947);var component_spec = map__30947__$1;var tags = cljs.core.get.call(null,map__30947__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30947__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30948,value){var map__30950 = p__30948;var map__30950__$1 = ((cljs.core.seq_QMARK_.call(null,map__30950))?cljs.core.apply.call(null,cljs.core.hash_map,map__30950):map__30950);var component_spec = map__30950__$1;var tags = cljs.core.get.call(null,map__30950__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30950__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30951_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30951_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30952_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30952_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30954 = schema.core.Any;var input_schema30955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30953","map30953",1177073128,null))], null);var input_checker30956 = schema.core.checker.call(null,input_schema30955);var output_checker30957 = schema.core.checker.call(null,output_schema30954);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30954,input_schema30955,input_checker30956,output_checker30957){
return (function render_STAR_(G__30958){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30975 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30958], null);var temp__4126__auto___30976 = input_checker30956.call(null,args__6035__auto___30975);if(cljs.core.truth_(temp__4126__auto___30976))
{var error__6036__auto___30977 = temp__4126__auto___30976;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30977)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30977,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30975,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30955,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30953 = G__30958;while(true){
if(cljs.core.map_QMARK_.call(null,map30953))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30953)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30953,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30953,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30954,input_schema30955,input_checker30956,output_checker30957){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30954,input_schema30955,input_checker30956,output_checker30957))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30954,input_schema30955,input_checker30956,output_checker30957){
return (function iter__30967(s__30968){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30954,input_schema30955,input_checker30956,output_checker30957){
return (function (){var s__30968__$1 = s__30968;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30968__$1);if(temp__4126__auto__)
{var s__30968__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30968__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30968__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30970 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30969 = (0);while(true){
if((i__30969 < size__4376__auto__))
{var map__30973 = cljs.core._nth.call(null,c__4375__auto__,i__30969);var map__30973__$1 = ((cljs.core.seq_QMARK_.call(null,map__30973))?cljs.core.apply.call(null,cljs.core.hash_map,map__30973):map__30973);var label__$1 = cljs.core.get.call(null,map__30973__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30973__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30970,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30978 = (i__30969 + (1));
i__30969 = G__30978;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30970),iter__30967.call(null,cljs.core.chunk_rest.call(null,s__30968__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30970),null);
}
} else
{var map__30974 = cljs.core.first.call(null,s__30968__$2);var map__30974__$1 = ((cljs.core.seq_QMARK_.call(null,map__30974))?cljs.core.apply.call(null,cljs.core.hash_map,map__30974):map__30974);var label__$1 = cljs.core.get.call(null,map__30974__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30974__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30967.call(null,cljs.core.rest.call(null,s__30968__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30954,input_schema30955,input_checker30956,output_checker30957))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30954,input_schema30955,input_checker30956,output_checker30957))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30979 = output_checker30957.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30979))
{var error__6036__auto___30980 = temp__4126__auto___30979;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30980)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30980,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30954,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30954,input_schema30955,input_checker30956,output_checker30957))
,schema.core.make_fn_schema.call(null,output_schema30954,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30955], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31126 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30986 = schema.core.Any;var input_schema30987 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30984","map30984",464504002,null))], null);var input_checker30988 = schema.core.checker.call(null,input_schema30987);var output_checker30989 = schema.core.checker.call(null,output_schema30986);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989){
return (function constructor30982(G__30990){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31127 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30990], null);var temp__4126__auto___31128 = input_checker30988.call(null,args__6035__auto___31127);if(cljs.core.truth_(temp__4126__auto___31128))
{var error__6036__auto___31129 = temp__4126__auto___31128;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30982","constructor30982",-542441677,null),cljs.core.pr_str.call(null,error__6036__auto___31129)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31129,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31127,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30987,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30984 = G__30990;while(true){
if(cljs.core.map_QMARK_.call(null,map30984))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30984)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30984,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30985 = plumbing.fnk.schema.safe_get.call(null,map30984,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30985,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30984,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t31057 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t31057 = (function (map30985,component_spec,component_filter_rq_chan,map30984,owner,data,input_schema30987,filter_spec,constructor30982,G__30990,validate__6034__auto__,id,output_schema30986,ufv__,output_checker30989,input_checker30988,meta31058){
this.map30985 = map30985;
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map30984 = map30984;
this.owner = owner;
this.data = data;
this.input_schema30987 = input_schema30987;
this.filter_spec = filter_spec;
this.constructor30982 = constructor30982;
this.G__30990 = G__30990;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_schema30986 = output_schema30986;
this.ufv__ = ufv__;
this.output_checker30989 = output_checker30989;
this.input_checker30988 = input_checker30988;
this.meta31058 = meta31058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t31057.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t31057.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t31057";
clustermap.components.filters.tag_filter.t31057.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t31057");
});})(owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989))
;
clustermap.components.filters.tag_filter.t31057.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t31057.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989))
;
clustermap.components.filters.tag_filter.t31057.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t31057.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989))
;
clustermap.components.filters.tag_filter.t31057.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t31057.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989){
return (function (state_31097){var state_val_31098 = (state_31097[(1)]);if((state_val_31098 === (7)))
{var inst_31088 = (state_31097[(2)]);var state_31097__$1 = state_31097;if(cljs.core.truth_(inst_31088))
{var statearr_31099_31130 = state_31097__$1;(statearr_31099_31130[(1)] = (11));
} else
{var statearr_31100_31131 = state_31097__$1;(statearr_31100_31131[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31098 === (1)))
{var state_31097__$1 = state_31097;var statearr_31101_31132 = state_31097__$1;(statearr_31101_31132[(2)] = null);
(statearr_31101_31132[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31098 === (4)))
{var inst_31062 = (state_31097[(7)]);var inst_31062__$1 = (state_31097[(2)]);var state_31097__$1 = (function (){var statearr_31102 = state_31097;(statearr_31102[(7)] = inst_31062__$1);
return statearr_31102;
})();if(cljs.core.truth_(inst_31062__$1))
{var statearr_31103_31133 = state_31097__$1;(statearr_31103_31133[(1)] = (5));
} else
{var statearr_31104_31134 = state_31097__$1;(statearr_31104_31134[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31098 === (13)))
{var inst_31093 = (state_31097[(2)]);var state_31097__$1 = state_31097;var statearr_31105_31135 = state_31097__$1;(statearr_31105_31135[(2)] = inst_31093);
(statearr_31105_31135[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31098 === (6)))
{var state_31097__$1 = state_31097;var statearr_31106_31136 = state_31097__$1;(statearr_31106_31136[(2)] = null);
(statearr_31106_31136[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31098 === (3)))
{var inst_31095 = (state_31097[(2)]);var state_31097__$1 = state_31097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31097__$1,inst_31095);
} else
{if((state_val_31098 === (12)))
{var state_31097__$1 = state_31097;var statearr_31107_31137 = state_31097__$1;(statearr_31107_31137[(2)] = null);
(statearr_31107_31137[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31098 === (2)))
{var state_31097__$1 = state_31097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31097__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31098 === (11)))
{var state_31097__$1 = state_31097;var statearr_31108_31138 = state_31097__$1;(statearr_31108_31138[(2)] = null);
(statearr_31108_31138[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31098 === (9)))
{var inst_31068 = (state_31097[(8)]);var state_31097__$1 = state_31097;var statearr_31109_31139 = state_31097__$1;(statearr_31109_31139[(2)] = inst_31068);
(statearr_31109_31139[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31098 === (5)))
{var inst_31068 = (state_31097[(8)]);var inst_31062 = (state_31097[(7)]);var inst_31065 = cljs.core.nth.call(null,inst_31062,(0),null);var inst_31066 = cljs.core.nth.call(null,inst_31062,(1),null);var inst_31068__$1 = om.core.get_props.call(null,self__.owner);var inst_31069 = cljs.core.seq_QMARK_.call(null,inst_31068__$1);var state_31097__$1 = (function (){var statearr_31110 = state_31097;(statearr_31110[(9)] = inst_31066);
(statearr_31110[(8)] = inst_31068__$1);
(statearr_31110[(10)] = inst_31065);
return statearr_31110;
})();if(inst_31069)
{var statearr_31111_31140 = state_31097__$1;(statearr_31111_31140[(1)] = (8));
} else
{var statearr_31112_31141 = state_31097__$1;(statearr_31112_31141[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31098 === (10)))
{var inst_31066 = (state_31097[(9)]);var inst_31074 = (state_31097[(2)]);var inst_31075 = cljs.core.get.call(null,inst_31074,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31076 = cljs.core.get.call(null,inst_31074,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31077 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31078 = ["TAG-FILTER-RQ",self__.id,inst_31066];var inst_31079 = (new cljs.core.PersistentVector(null,3,(5),inst_31077,inst_31078,null));var inst_31080 = cljs.core.clj__GT_js.call(null,inst_31079);var inst_31081 = console.log(inst_31080);var inst_31082 = cljs.core.deref.call(null,inst_31075);var inst_31083 = cljs.core.deref.call(null,inst_31076);var inst_31084 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_31082,inst_31083,inst_31066);var inst_31085 = om.core.update_BANG_.call(null,inst_31075,inst_31084);var state_31097__$1 = (function (){var statearr_31113 = state_31097;(statearr_31113[(11)] = inst_31081);
(statearr_31113[(12)] = inst_31085);
return statearr_31113;
})();var statearr_31114_31142 = state_31097__$1;(statearr_31114_31142[(2)] = true);
(statearr_31114_31142[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31098 === (8)))
{var inst_31068 = (state_31097[(8)]);var inst_31071 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31068);var state_31097__$1 = state_31097;var statearr_31115_31143 = state_31097__$1;(statearr_31115_31143[(2)] = inst_31071);
(statearr_31115_31143[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31119 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31119[(0)] = state_machine__9111__auto__);
(statearr_31119[(1)] = (1));
return statearr_31119;
});
var state_machine__9111__auto____1 = (function (state_31097){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31097);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31120){if((e31120 instanceof Object))
{var ex__9114__auto__ = e31120;var statearr_31121_31144 = state_31097;(statearr_31121_31144[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31097);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31120;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31145 = state_31097;
state_31097 = G__31145;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31097){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989))
})();var state__9127__auto__ = (function (){var statearr_31122 = f__9126__auto__.call(null);(statearr_31122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989))
;
clustermap.components.filters.tag_filter.t31057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989){
return (function (_31059){var self__ = this;
var _31059__$1 = this;return self__.meta31058;
});})(owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989))
;
clustermap.components.filters.tag_filter.t31057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989){
return (function (_31059,meta31058__$1){var self__ = this;
var _31059__$1 = this;return (new clustermap.components.filters.tag_filter.t31057(self__.map30985,self__.component_spec,self__.component_filter_rq_chan,self__.map30984,self__.owner,self__.data,self__.input_schema30987,self__.filter_spec,self__.constructor30982,self__.G__30990,self__.validate__6034__auto__,self__.id,self__.output_schema30986,self__.ufv__,self__.output_checker30989,self__.input_checker30988,meta31058__$1));
});})(owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989))
;
clustermap.components.filters.tag_filter.__GT_t31057 = ((function (owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989){
return (function __GT_t31057(map30985__$1,component_spec__$1,component_filter_rq_chan__$1,map30984__$1,owner__$1,data__$1,input_schema30987__$1,filter_spec__$1,constructor30982__$1,G__30990__$1,validate__6034__auto____$1,id__$1,output_schema30986__$1,ufv____$1,output_checker30989__$1,input_checker30988__$1,meta31058){return (new clustermap.components.filters.tag_filter.t31057(map30985__$1,component_spec__$1,component_filter_rq_chan__$1,map30984__$1,owner__$1,data__$1,input_schema30987__$1,filter_spec__$1,constructor30982__$1,G__30990__$1,validate__6034__auto____$1,id__$1,output_schema30986__$1,ufv____$1,output_checker30989__$1,input_checker30988__$1,meta31058));
});})(owner,component_filter_rq_chan,map30985,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989))
;
}
return (new clustermap.components.filters.tag_filter.t31057(map30985,component_spec,component_filter_rq_chan,map30984,owner,data,input_schema30987,filter_spec,constructor30982,G__30990,validate__6034__auto__,id,output_schema30986,ufv__,output_checker30989,input_checker30988,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31146 = output_checker30989.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31146))
{var error__6036__auto___31147 = temp__4126__auto___31146;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30982","constructor30982",-542441677,null),cljs.core.pr_str.call(null,error__6036__auto___31147)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31147,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30986,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30986,input_schema30987,input_checker30988,output_checker30989))
,schema.core.make_fn_schema.call(null,output_schema30986,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30987], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___31126){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30981,p__31123){var vec__31125 = p__31123;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31125,(0),null);return component_fnk__7881__auto___31126.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30981,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30981,var_args){
var p__31123 = null;if (arguments.length > 2) {
  p__31123 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30981,p__31123);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__31148){
var data__7882__auto__ = cljs.core.first(arglist__31148);
arglist__31148 = cljs.core.next(arglist__31148);
var owner30981 = cljs.core.first(arglist__31148);
var p__31123 = cljs.core.rest(arglist__31148);
return tag_filter_component__delegate(data__7882__auto__,owner30981,p__31123);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___31126))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30983){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30983);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30983){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
