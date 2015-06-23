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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30815_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30815_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30816,value){var map__30818 = p__30816;var map__30818__$1 = ((cljs.core.seq_QMARK_.call(null,map__30818))?cljs.core.apply.call(null,cljs.core.hash_map,map__30818):map__30818);var component_spec = map__30818__$1;var tags = cljs.core.get.call(null,map__30818__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30818__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30819,value){var map__30821 = p__30819;var map__30821__$1 = ((cljs.core.seq_QMARK_.call(null,map__30821))?cljs.core.apply.call(null,cljs.core.hash_map,map__30821):map__30821);var component_spec = map__30821__$1;var tags = cljs.core.get.call(null,map__30821__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30821__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30822,value){var map__30824 = p__30822;var map__30824__$1 = ((cljs.core.seq_QMARK_.call(null,map__30824))?cljs.core.apply.call(null,cljs.core.hash_map,map__30824):map__30824);var component_spec = map__30824__$1;var tags = cljs.core.get.call(null,map__30824__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30824__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30825_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30825_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30826_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30826_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30828 = schema.core.Any;var input_schema30829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30827","map30827",-2041130733,null))], null);var input_checker30830 = schema.core.checker.call(null,input_schema30829);var output_checker30831 = schema.core.checker.call(null,output_schema30828);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30828,input_schema30829,input_checker30830,output_checker30831){
return (function render_STAR_(G__30832){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30832], null);var temp__4126__auto___30850 = input_checker30830.call(null,args__6035__auto___30849);if(cljs.core.truth_(temp__4126__auto___30850))
{var error__6036__auto___30851 = temp__4126__auto___30850;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30851)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30851,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30849,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30829,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30827 = G__30832;while(true){
if(cljs.core.map_QMARK_.call(null,map30827))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30827)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30827,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30827,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30828,input_schema30829,input_checker30830,output_checker30831){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30828,input_schema30829,input_checker30830,output_checker30831))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30828,input_schema30829,input_checker30830,output_checker30831){
return (function iter__30841(s__30842){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30828,input_schema30829,input_checker30830,output_checker30831){
return (function (){var s__30842__$1 = s__30842;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30842__$1);if(temp__4126__auto__)
{var s__30842__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30842__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30842__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30844 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30843 = (0);while(true){
if((i__30843 < size__4376__auto__))
{var map__30847 = cljs.core._nth.call(null,c__4375__auto__,i__30843);var map__30847__$1 = ((cljs.core.seq_QMARK_.call(null,map__30847))?cljs.core.apply.call(null,cljs.core.hash_map,map__30847):map__30847);var label__$1 = cljs.core.get.call(null,map__30847__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30847__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30844,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30852 = (i__30843 + (1));
i__30843 = G__30852;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30844),iter__30841.call(null,cljs.core.chunk_rest.call(null,s__30842__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30844),null);
}
} else
{var map__30848 = cljs.core.first.call(null,s__30842__$2);var map__30848__$1 = ((cljs.core.seq_QMARK_.call(null,map__30848))?cljs.core.apply.call(null,cljs.core.hash_map,map__30848):map__30848);var label__$1 = cljs.core.get.call(null,map__30848__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30848__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30841.call(null,cljs.core.rest.call(null,s__30842__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30828,input_schema30829,input_checker30830,output_checker30831))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30828,input_schema30829,input_checker30830,output_checker30831))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30853 = output_checker30831.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30853))
{var error__6036__auto___30854 = temp__4126__auto___30853;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30854)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30854,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30828,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30828,input_schema30829,input_checker30830,output_checker30831))
,schema.core.make_fn_schema.call(null,output_schema30828,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30829], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31000 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30860 = schema.core.Any;var input_schema30861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30858","map30858",-810200124,null))], null);var input_checker30862 = schema.core.checker.call(null,input_schema30861);var output_checker30863 = schema.core.checker.call(null,output_schema30860);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function constructor30856(G__30864){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30864], null);var temp__4126__auto___31002 = input_checker30862.call(null,args__6035__auto___31001);if(cljs.core.truth_(temp__4126__auto___31002))
{var error__6036__auto___31003 = temp__4126__auto___31002;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30856","constructor30856",1943432285,null),cljs.core.pr_str.call(null,error__6036__auto___31003)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31003,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31001,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30861,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30858 = G__30864;while(true){
if(cljs.core.map_QMARK_.call(null,map30858))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30858)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30858,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30859 = plumbing.fnk.schema.safe_get.call(null,map30858,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30859,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30858,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30931 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30931 = (function (component_spec,component_filter_rq_chan,input_schema30861,owner,map30858,data,input_checker30862,G__30864,filter_spec,output_schema30860,output_checker30863,validate__6034__auto__,id,map30859,constructor30856,ufv__,meta30932){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema30861 = input_schema30861;
this.owner = owner;
this.map30858 = map30858;
this.data = data;
this.input_checker30862 = input_checker30862;
this.G__30864 = G__30864;
this.filter_spec = filter_spec;
this.output_schema30860 = output_schema30860;
this.output_checker30863 = output_checker30863;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map30859 = map30859;
this.constructor30856 = constructor30856;
this.ufv__ = ufv__;
this.meta30932 = meta30932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30931.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30931.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30931";
clustermap.components.filters.tag_filter.t30931.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t30931");
});})(owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
clustermap.components.filters.tag_filter.t30931.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30931.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
clustermap.components.filters.tag_filter.t30931.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30931.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
clustermap.components.filters.tag_filter.t30931.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30931.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (state_30971){var state_val_30972 = (state_30971[(1)]);if((state_val_30972 === (7)))
{var inst_30962 = (state_30971[(2)]);var state_30971__$1 = state_30971;if(cljs.core.truth_(inst_30962))
{var statearr_30973_31004 = state_30971__$1;(statearr_30973_31004[(1)] = (11));
} else
{var statearr_30974_31005 = state_30971__$1;(statearr_30974_31005[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30972 === (1)))
{var state_30971__$1 = state_30971;var statearr_30975_31006 = state_30971__$1;(statearr_30975_31006[(2)] = null);
(statearr_30975_31006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30972 === (4)))
{var inst_30936 = (state_30971[(7)]);var inst_30936__$1 = (state_30971[(2)]);var state_30971__$1 = (function (){var statearr_30976 = state_30971;(statearr_30976[(7)] = inst_30936__$1);
return statearr_30976;
})();if(cljs.core.truth_(inst_30936__$1))
{var statearr_30977_31007 = state_30971__$1;(statearr_30977_31007[(1)] = (5));
} else
{var statearr_30978_31008 = state_30971__$1;(statearr_30978_31008[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30972 === (13)))
{var inst_30967 = (state_30971[(2)]);var state_30971__$1 = state_30971;var statearr_30979_31009 = state_30971__$1;(statearr_30979_31009[(2)] = inst_30967);
(statearr_30979_31009[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30972 === (6)))
{var state_30971__$1 = state_30971;var statearr_30980_31010 = state_30971__$1;(statearr_30980_31010[(2)] = null);
(statearr_30980_31010[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30972 === (3)))
{var inst_30969 = (state_30971[(2)]);var state_30971__$1 = state_30971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30971__$1,inst_30969);
} else
{if((state_val_30972 === (12)))
{var state_30971__$1 = state_30971;var statearr_30981_31011 = state_30971__$1;(statearr_30981_31011[(2)] = null);
(statearr_30981_31011[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30972 === (2)))
{var state_30971__$1 = state_30971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30971__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30972 === (11)))
{var state_30971__$1 = state_30971;var statearr_30982_31012 = state_30971__$1;(statearr_30982_31012[(2)] = null);
(statearr_30982_31012[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30972 === (9)))
{var inst_30942 = (state_30971[(8)]);var state_30971__$1 = state_30971;var statearr_30983_31013 = state_30971__$1;(statearr_30983_31013[(2)] = inst_30942);
(statearr_30983_31013[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30972 === (5)))
{var inst_30936 = (state_30971[(7)]);var inst_30942 = (state_30971[(8)]);var inst_30939 = cljs.core.nth.call(null,inst_30936,(0),null);var inst_30940 = cljs.core.nth.call(null,inst_30936,(1),null);var inst_30942__$1 = om.core.get_props.call(null,self__.owner);var inst_30943 = cljs.core.seq_QMARK_.call(null,inst_30942__$1);var state_30971__$1 = (function (){var statearr_30984 = state_30971;(statearr_30984[(9)] = inst_30939);
(statearr_30984[(10)] = inst_30940);
(statearr_30984[(8)] = inst_30942__$1);
return statearr_30984;
})();if(inst_30943)
{var statearr_30985_31014 = state_30971__$1;(statearr_30985_31014[(1)] = (8));
} else
{var statearr_30986_31015 = state_30971__$1;(statearr_30986_31015[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30972 === (10)))
{var inst_30940 = (state_30971[(10)]);var inst_30948 = (state_30971[(2)]);var inst_30949 = cljs.core.get.call(null,inst_30948,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30950 = cljs.core.get.call(null,inst_30948,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30951 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30952 = ["TAG-FILTER-RQ",self__.id,inst_30940];var inst_30953 = (new cljs.core.PersistentVector(null,3,(5),inst_30951,inst_30952,null));var inst_30954 = cljs.core.clj__GT_js.call(null,inst_30953);var inst_30955 = console.log(inst_30954);var inst_30956 = cljs.core.deref.call(null,inst_30949);var inst_30957 = cljs.core.deref.call(null,inst_30950);var inst_30958 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30956,inst_30957,inst_30940);var inst_30959 = om.core.update_BANG_.call(null,inst_30949,inst_30958);var state_30971__$1 = (function (){var statearr_30987 = state_30971;(statearr_30987[(11)] = inst_30955);
(statearr_30987[(12)] = inst_30959);
return statearr_30987;
})();var statearr_30988_31016 = state_30971__$1;(statearr_30988_31016[(2)] = true);
(statearr_30988_31016[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30972 === (8)))
{var inst_30942 = (state_30971[(8)]);var inst_30945 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30942);var state_30971__$1 = state_30971;var statearr_30989_31017 = state_30971__$1;(statearr_30989_31017[(2)] = inst_30945);
(statearr_30989_31017[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30993 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30993[(0)] = state_machine__9111__auto__);
(statearr_30993[(1)] = (1));
return statearr_30993;
});
var state_machine__9111__auto____1 = (function (state_30971){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30971);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30994){if((e30994 instanceof Object))
{var ex__9114__auto__ = e30994;var statearr_30995_31018 = state_30971;(statearr_30995_31018[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30971);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30994;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31019 = state_30971;
state_30971 = G__31019;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30971){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
})();var state__9127__auto__ = (function (){var statearr_30996 = f__9126__auto__.call(null);(statearr_30996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
clustermap.components.filters.tag_filter.t30931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (_30933){var self__ = this;
var _30933__$1 = this;return self__.meta30932;
});})(owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
clustermap.components.filters.tag_filter.t30931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (_30933,meta30932__$1){var self__ = this;
var _30933__$1 = this;return (new clustermap.components.filters.tag_filter.t30931(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema30861,self__.owner,self__.map30858,self__.data,self__.input_checker30862,self__.G__30864,self__.filter_spec,self__.output_schema30860,self__.output_checker30863,self__.validate__6034__auto__,self__.id,self__.map30859,self__.constructor30856,self__.ufv__,meta30932__$1));
});})(owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
clustermap.components.filters.tag_filter.__GT_t30931 = ((function (owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function __GT_t30931(component_spec__$1,component_filter_rq_chan__$1,input_schema30861__$1,owner__$1,map30858__$1,data__$1,input_checker30862__$1,G__30864__$1,filter_spec__$1,output_schema30860__$1,output_checker30863__$1,validate__6034__auto____$1,id__$1,map30859__$1,constructor30856__$1,ufv____$1,meta30932){return (new clustermap.components.filters.tag_filter.t30931(component_spec__$1,component_filter_rq_chan__$1,input_schema30861__$1,owner__$1,map30858__$1,data__$1,input_checker30862__$1,G__30864__$1,filter_spec__$1,output_schema30860__$1,output_checker30863__$1,validate__6034__auto____$1,id__$1,map30859__$1,constructor30856__$1,ufv____$1,meta30932));
});})(owner,component_filter_rq_chan,map30859,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
}
return (new clustermap.components.filters.tag_filter.t30931(component_spec,component_filter_rq_chan,input_schema30861,owner,map30858,data,input_checker30862,G__30864,filter_spec,output_schema30860,output_checker30863,validate__6034__auto__,id,map30859,constructor30856,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31020 = output_checker30863.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31020))
{var error__6036__auto___31021 = temp__4126__auto___31020;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30856","constructor30856",1943432285,null),cljs.core.pr_str.call(null,error__6036__auto___31021)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31021,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30860,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
,schema.core.make_fn_schema.call(null,output_schema30860,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30861], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___31000){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30855,p__30997){var vec__30999 = p__30997;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30999,(0),null);return component_fnk__7881__auto___31000.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30855,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30855,var_args){
var p__30997 = null;if (arguments.length > 2) {
  p__30997 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30855,p__30997);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__31022){
var data__7882__auto__ = cljs.core.first(arglist__31022);
arglist__31022 = cljs.core.next(arglist__31022);
var owner30855 = cljs.core.first(arglist__31022);
var p__30997 = cljs.core.rest(arglist__31022);
return tag_filter_component__delegate(data__7882__auto__,owner30855,p__30997);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___31000))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30857){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30857);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30857){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
