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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30755_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30755_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30756,value){var map__30758 = p__30756;var map__30758__$1 = ((cljs.core.seq_QMARK_.call(null,map__30758))?cljs.core.apply.call(null,cljs.core.hash_map,map__30758):map__30758);var component_spec = map__30758__$1;var tags = cljs.core.get.call(null,map__30758__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30758__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30759,value){var map__30761 = p__30759;var map__30761__$1 = ((cljs.core.seq_QMARK_.call(null,map__30761))?cljs.core.apply.call(null,cljs.core.hash_map,map__30761):map__30761);var component_spec = map__30761__$1;var tags = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30762,value){var map__30764 = p__30762;var map__30764__$1 = ((cljs.core.seq_QMARK_.call(null,map__30764))?cljs.core.apply.call(null,cljs.core.hash_map,map__30764):map__30764);var component_spec = map__30764__$1;var tags = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30765_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30765_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30766_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30766_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30768 = schema.core.Any;var input_schema30769 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30767","map30767",-946870098,null))], null);var input_checker30770 = schema.core.checker.call(null,input_schema30769);var output_checker30771 = schema.core.checker.call(null,output_schema30768);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30768,input_schema30769,input_checker30770,output_checker30771){
return (function render_STAR_(G__30772){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30772], null);var temp__4126__auto___30790 = input_checker30770.call(null,args__6035__auto___30789);if(cljs.core.truth_(temp__4126__auto___30790))
{var error__6036__auto___30791 = temp__4126__auto___30790;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30791)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30791,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30789,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30769,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30767 = G__30772;while(true){
if(cljs.core.map_QMARK_.call(null,map30767))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30767)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30767,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30767,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30768,input_schema30769,input_checker30770,output_checker30771){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30768,input_schema30769,input_checker30770,output_checker30771))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30768,input_schema30769,input_checker30770,output_checker30771){
return (function iter__30781(s__30782){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30768,input_schema30769,input_checker30770,output_checker30771){
return (function (){var s__30782__$1 = s__30782;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30782__$1);if(temp__4126__auto__)
{var s__30782__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30782__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30782__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30784 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30783 = (0);while(true){
if((i__30783 < size__4376__auto__))
{var map__30787 = cljs.core._nth.call(null,c__4375__auto__,i__30783);var map__30787__$1 = ((cljs.core.seq_QMARK_.call(null,map__30787))?cljs.core.apply.call(null,cljs.core.hash_map,map__30787):map__30787);var label__$1 = cljs.core.get.call(null,map__30787__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30787__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30784,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30792 = (i__30783 + (1));
i__30783 = G__30792;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30784),iter__30781.call(null,cljs.core.chunk_rest.call(null,s__30782__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30784),null);
}
} else
{var map__30788 = cljs.core.first.call(null,s__30782__$2);var map__30788__$1 = ((cljs.core.seq_QMARK_.call(null,map__30788))?cljs.core.apply.call(null,cljs.core.hash_map,map__30788):map__30788);var label__$1 = cljs.core.get.call(null,map__30788__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30788__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30781.call(null,cljs.core.rest.call(null,s__30782__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30768,input_schema30769,input_checker30770,output_checker30771))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30768,input_schema30769,input_checker30770,output_checker30771))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30793 = output_checker30771.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30793))
{var error__6036__auto___30794 = temp__4126__auto___30793;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30794)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30794,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30768,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30768,input_schema30769,input_checker30770,output_checker30771))
,schema.core.make_fn_schema.call(null,output_schema30768,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30769], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30940 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30800 = schema.core.Any;var input_schema30801 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30798","map30798",-1374474512,null))], null);var input_checker30802 = schema.core.checker.call(null,input_schema30801);var output_checker30803 = schema.core.checker.call(null,output_schema30800);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803){
return (function constructor30796(G__30804){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30804], null);var temp__4126__auto___30942 = input_checker30802.call(null,args__6035__auto___30941);if(cljs.core.truth_(temp__4126__auto___30942))
{var error__6036__auto___30943 = temp__4126__auto___30942;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30796","constructor30796",742160448,null),cljs.core.pr_str.call(null,error__6036__auto___30943)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30943,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30941,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30801,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30798 = G__30804;while(true){
if(cljs.core.map_QMARK_.call(null,map30798))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30798)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30798,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30799 = plumbing.fnk.schema.safe_get.call(null,map30798,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30799,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30798,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30871 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30871 = (function (constructor30796,component_spec,output_schema30800,component_filter_rq_chan,input_schema30801,owner,data,filter_spec,output_checker30803,map30798,G__30804,input_checker30802,validate__6034__auto__,id,map30799,ufv__,meta30872){
this.constructor30796 = constructor30796;
this.component_spec = component_spec;
this.output_schema30800 = output_schema30800;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema30801 = input_schema30801;
this.owner = owner;
this.data = data;
this.filter_spec = filter_spec;
this.output_checker30803 = output_checker30803;
this.map30798 = map30798;
this.G__30804 = G__30804;
this.input_checker30802 = input_checker30802;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map30799 = map30799;
this.ufv__ = ufv__;
this.meta30872 = meta30872;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30871.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30871.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30871";
clustermap.components.filters.tag_filter.t30871.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t30871");
});})(owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803))
;
clustermap.components.filters.tag_filter.t30871.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30871.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803))
;
clustermap.components.filters.tag_filter.t30871.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30871.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803))
;
clustermap.components.filters.tag_filter.t30871.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30871.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803){
return (function (state_30911){var state_val_30912 = (state_30911[(1)]);if((state_val_30912 === (7)))
{var inst_30902 = (state_30911[(2)]);var state_30911__$1 = state_30911;if(cljs.core.truth_(inst_30902))
{var statearr_30913_30944 = state_30911__$1;(statearr_30913_30944[(1)] = (11));
} else
{var statearr_30914_30945 = state_30911__$1;(statearr_30914_30945[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30912 === (1)))
{var state_30911__$1 = state_30911;var statearr_30915_30946 = state_30911__$1;(statearr_30915_30946[(2)] = null);
(statearr_30915_30946[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30912 === (4)))
{var inst_30876 = (state_30911[(7)]);var inst_30876__$1 = (state_30911[(2)]);var state_30911__$1 = (function (){var statearr_30916 = state_30911;(statearr_30916[(7)] = inst_30876__$1);
return statearr_30916;
})();if(cljs.core.truth_(inst_30876__$1))
{var statearr_30917_30947 = state_30911__$1;(statearr_30917_30947[(1)] = (5));
} else
{var statearr_30918_30948 = state_30911__$1;(statearr_30918_30948[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30912 === (13)))
{var inst_30907 = (state_30911[(2)]);var state_30911__$1 = state_30911;var statearr_30919_30949 = state_30911__$1;(statearr_30919_30949[(2)] = inst_30907);
(statearr_30919_30949[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30912 === (6)))
{var state_30911__$1 = state_30911;var statearr_30920_30950 = state_30911__$1;(statearr_30920_30950[(2)] = null);
(statearr_30920_30950[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30912 === (3)))
{var inst_30909 = (state_30911[(2)]);var state_30911__$1 = state_30911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30911__$1,inst_30909);
} else
{if((state_val_30912 === (12)))
{var state_30911__$1 = state_30911;var statearr_30921_30951 = state_30911__$1;(statearr_30921_30951[(2)] = null);
(statearr_30921_30951[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30912 === (2)))
{var state_30911__$1 = state_30911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30911__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30912 === (11)))
{var state_30911__$1 = state_30911;var statearr_30922_30952 = state_30911__$1;(statearr_30922_30952[(2)] = null);
(statearr_30922_30952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30912 === (9)))
{var inst_30882 = (state_30911[(8)]);var state_30911__$1 = state_30911;var statearr_30923_30953 = state_30911__$1;(statearr_30923_30953[(2)] = inst_30882);
(statearr_30923_30953[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30912 === (5)))
{var inst_30876 = (state_30911[(7)]);var inst_30882 = (state_30911[(8)]);var inst_30879 = cljs.core.nth.call(null,inst_30876,(0),null);var inst_30880 = cljs.core.nth.call(null,inst_30876,(1),null);var inst_30882__$1 = om.core.get_props.call(null,self__.owner);var inst_30883 = cljs.core.seq_QMARK_.call(null,inst_30882__$1);var state_30911__$1 = (function (){var statearr_30924 = state_30911;(statearr_30924[(9)] = inst_30879);
(statearr_30924[(10)] = inst_30880);
(statearr_30924[(8)] = inst_30882__$1);
return statearr_30924;
})();if(inst_30883)
{var statearr_30925_30954 = state_30911__$1;(statearr_30925_30954[(1)] = (8));
} else
{var statearr_30926_30955 = state_30911__$1;(statearr_30926_30955[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30912 === (10)))
{var inst_30880 = (state_30911[(10)]);var inst_30888 = (state_30911[(2)]);var inst_30889 = cljs.core.get.call(null,inst_30888,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30890 = cljs.core.get.call(null,inst_30888,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30891 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30892 = ["TAG-FILTER-RQ",self__.id,inst_30880];var inst_30893 = (new cljs.core.PersistentVector(null,3,(5),inst_30891,inst_30892,null));var inst_30894 = cljs.core.clj__GT_js.call(null,inst_30893);var inst_30895 = console.log(inst_30894);var inst_30896 = cljs.core.deref.call(null,inst_30889);var inst_30897 = cljs.core.deref.call(null,inst_30890);var inst_30898 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30896,inst_30897,inst_30880);var inst_30899 = om.core.update_BANG_.call(null,inst_30889,inst_30898);var state_30911__$1 = (function (){var statearr_30927 = state_30911;(statearr_30927[(11)] = inst_30895);
(statearr_30927[(12)] = inst_30899);
return statearr_30927;
})();var statearr_30928_30956 = state_30911__$1;(statearr_30928_30956[(2)] = true);
(statearr_30928_30956[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30912 === (8)))
{var inst_30882 = (state_30911[(8)]);var inst_30885 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30882);var state_30911__$1 = state_30911;var statearr_30929_30957 = state_30911__$1;(statearr_30929_30957[(2)] = inst_30885);
(statearr_30929_30957[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30933 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30933[(0)] = state_machine__9111__auto__);
(statearr_30933[(1)] = (1));
return statearr_30933;
});
var state_machine__9111__auto____1 = (function (state_30911){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30911);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30934){if((e30934 instanceof Object))
{var ex__9114__auto__ = e30934;var statearr_30935_30958 = state_30911;(statearr_30935_30958[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30911);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30934;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30959 = state_30911;
state_30911 = G__30959;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30911){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803))
})();var state__9127__auto__ = (function (){var statearr_30936 = f__9126__auto__.call(null);(statearr_30936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803))
;
clustermap.components.filters.tag_filter.t30871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803){
return (function (_30873){var self__ = this;
var _30873__$1 = this;return self__.meta30872;
});})(owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803))
;
clustermap.components.filters.tag_filter.t30871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803){
return (function (_30873,meta30872__$1){var self__ = this;
var _30873__$1 = this;return (new clustermap.components.filters.tag_filter.t30871(self__.constructor30796,self__.component_spec,self__.output_schema30800,self__.component_filter_rq_chan,self__.input_schema30801,self__.owner,self__.data,self__.filter_spec,self__.output_checker30803,self__.map30798,self__.G__30804,self__.input_checker30802,self__.validate__6034__auto__,self__.id,self__.map30799,self__.ufv__,meta30872__$1));
});})(owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803))
;
clustermap.components.filters.tag_filter.__GT_t30871 = ((function (owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803){
return (function __GT_t30871(constructor30796__$1,component_spec__$1,output_schema30800__$1,component_filter_rq_chan__$1,input_schema30801__$1,owner__$1,data__$1,filter_spec__$1,output_checker30803__$1,map30798__$1,G__30804__$1,input_checker30802__$1,validate__6034__auto____$1,id__$1,map30799__$1,ufv____$1,meta30872){return (new clustermap.components.filters.tag_filter.t30871(constructor30796__$1,component_spec__$1,output_schema30800__$1,component_filter_rq_chan__$1,input_schema30801__$1,owner__$1,data__$1,filter_spec__$1,output_checker30803__$1,map30798__$1,G__30804__$1,input_checker30802__$1,validate__6034__auto____$1,id__$1,map30799__$1,ufv____$1,meta30872));
});})(owner,component_filter_rq_chan,map30799,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803))
;
}
return (new clustermap.components.filters.tag_filter.t30871(constructor30796,component_spec,output_schema30800,component_filter_rq_chan,input_schema30801,owner,data,filter_spec,output_checker30803,map30798,G__30804,input_checker30802,validate__6034__auto__,id,map30799,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30960 = output_checker30803.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30960))
{var error__6036__auto___30961 = temp__4126__auto___30960;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30796","constructor30796",742160448,null),cljs.core.pr_str.call(null,error__6036__auto___30961)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30961,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30800,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30800,input_schema30801,input_checker30802,output_checker30803))
,schema.core.make_fn_schema.call(null,output_schema30800,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30801], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___30940){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30795,p__30937){var vec__30939 = p__30937;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30939,(0),null);return component_fnk__7881__auto___30940.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30795,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30795,var_args){
var p__30937 = null;if (arguments.length > 2) {
  p__30937 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30795,p__30937);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__30962){
var data__7882__auto__ = cljs.core.first(arglist__30962);
arglist__30962 = cljs.core.next(arglist__30962);
var owner30795 = cljs.core.first(arglist__30962);
var p__30937 = cljs.core.rest(arglist__30962);
return tag_filter_component__delegate(data__7882__auto__,owner30795,p__30937);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___30940))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30797){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30797);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30797){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
