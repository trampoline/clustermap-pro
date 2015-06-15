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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30635_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30635_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30636,value){var map__30638 = p__30636;var map__30638__$1 = ((cljs.core.seq_QMARK_.call(null,map__30638))?cljs.core.apply.call(null,cljs.core.hash_map,map__30638):map__30638);var component_spec = map__30638__$1;var tags = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30639,value){var map__30641 = p__30639;var map__30641__$1 = ((cljs.core.seq_QMARK_.call(null,map__30641))?cljs.core.apply.call(null,cljs.core.hash_map,map__30641):map__30641);var component_spec = map__30641__$1;var tags = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30642,value){var map__30644 = p__30642;var map__30644__$1 = ((cljs.core.seq_QMARK_.call(null,map__30644))?cljs.core.apply.call(null,cljs.core.hash_map,map__30644):map__30644);var component_spec = map__30644__$1;var tags = cljs.core.get.call(null,map__30644__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30644__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30645_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30645_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30646_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30646_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30648 = schema.core.Any;var input_schema30649 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30647","map30647",-1458562632,null))], null);var input_checker30650 = schema.core.checker.call(null,input_schema30649);var output_checker30651 = schema.core.checker.call(null,output_schema30648);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30648,input_schema30649,input_checker30650,output_checker30651){
return (function render_STAR_(G__30652){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30652], null);var temp__4126__auto___30670 = input_checker30650.call(null,args__6035__auto___30669);if(cljs.core.truth_(temp__4126__auto___30670))
{var error__6036__auto___30671 = temp__4126__auto___30670;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30671)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30671,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30669,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30649,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30647 = G__30652;while(true){
if(cljs.core.map_QMARK_.call(null,map30647))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30647)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30647,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30647,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30648,input_schema30649,input_checker30650,output_checker30651){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30648,input_schema30649,input_checker30650,output_checker30651))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30648,input_schema30649,input_checker30650,output_checker30651){
return (function iter__30661(s__30662){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30648,input_schema30649,input_checker30650,output_checker30651){
return (function (){var s__30662__$1 = s__30662;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30662__$1);if(temp__4126__auto__)
{var s__30662__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30662__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30662__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30664 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30663 = (0);while(true){
if((i__30663 < size__4376__auto__))
{var map__30667 = cljs.core._nth.call(null,c__4375__auto__,i__30663);var map__30667__$1 = ((cljs.core.seq_QMARK_.call(null,map__30667))?cljs.core.apply.call(null,cljs.core.hash_map,map__30667):map__30667);var label__$1 = cljs.core.get.call(null,map__30667__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30667__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30664,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30672 = (i__30663 + (1));
i__30663 = G__30672;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30664),iter__30661.call(null,cljs.core.chunk_rest.call(null,s__30662__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30664),null);
}
} else
{var map__30668 = cljs.core.first.call(null,s__30662__$2);var map__30668__$1 = ((cljs.core.seq_QMARK_.call(null,map__30668))?cljs.core.apply.call(null,cljs.core.hash_map,map__30668):map__30668);var label__$1 = cljs.core.get.call(null,map__30668__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30668__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30661.call(null,cljs.core.rest.call(null,s__30662__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30648,input_schema30649,input_checker30650,output_checker30651))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30648,input_schema30649,input_checker30650,output_checker30651))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30673 = output_checker30651.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30673))
{var error__6036__auto___30674 = temp__4126__auto___30673;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30674)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30674,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30648,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30648,input_schema30649,input_checker30650,output_checker30651))
,schema.core.make_fn_schema.call(null,output_schema30648,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30649], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30820 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30680 = schema.core.Any;var input_schema30681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30678","map30678",1013913328,null))], null);var input_checker30682 = schema.core.checker.call(null,input_schema30681);var output_checker30683 = schema.core.checker.call(null,output_schema30680);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683){
return (function constructor30676(G__30684){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30821 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30684], null);var temp__4126__auto___30822 = input_checker30682.call(null,args__6035__auto___30821);if(cljs.core.truth_(temp__4126__auto___30822))
{var error__6036__auto___30823 = temp__4126__auto___30822;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30676","constructor30676",273716084,null),cljs.core.pr_str.call(null,error__6036__auto___30823)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30823,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30821,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30681,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30678 = G__30684;while(true){
if(cljs.core.map_QMARK_.call(null,map30678))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30678)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30678,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30679 = plumbing.fnk.schema.safe_get.call(null,map30678,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30679,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30678,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30751 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30751 = (function (component_spec,component_filter_rq_chan,input_checker30682,owner,data,G__30684,map30679,input_schema30681,filter_spec,output_schema30680,map30678,output_checker30683,constructor30676,validate__6034__auto__,id,ufv__,meta30752){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_checker30682 = input_checker30682;
this.owner = owner;
this.data = data;
this.G__30684 = G__30684;
this.map30679 = map30679;
this.input_schema30681 = input_schema30681;
this.filter_spec = filter_spec;
this.output_schema30680 = output_schema30680;
this.map30678 = map30678;
this.output_checker30683 = output_checker30683;
this.constructor30676 = constructor30676;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta30752 = meta30752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30751.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30751.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30751";
clustermap.components.filters.tag_filter.t30751.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t30751");
});})(owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683))
;
clustermap.components.filters.tag_filter.t30751.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30751.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683))
;
clustermap.components.filters.tag_filter.t30751.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30751.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683))
;
clustermap.components.filters.tag_filter.t30751.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30751.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683){
return (function (state_30791){var state_val_30792 = (state_30791[(1)]);if((state_val_30792 === (7)))
{var inst_30782 = (state_30791[(2)]);var state_30791__$1 = state_30791;if(cljs.core.truth_(inst_30782))
{var statearr_30793_30824 = state_30791__$1;(statearr_30793_30824[(1)] = (11));
} else
{var statearr_30794_30825 = state_30791__$1;(statearr_30794_30825[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30792 === (1)))
{var state_30791__$1 = state_30791;var statearr_30795_30826 = state_30791__$1;(statearr_30795_30826[(2)] = null);
(statearr_30795_30826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30792 === (4)))
{var inst_30756 = (state_30791[(7)]);var inst_30756__$1 = (state_30791[(2)]);var state_30791__$1 = (function (){var statearr_30796 = state_30791;(statearr_30796[(7)] = inst_30756__$1);
return statearr_30796;
})();if(cljs.core.truth_(inst_30756__$1))
{var statearr_30797_30827 = state_30791__$1;(statearr_30797_30827[(1)] = (5));
} else
{var statearr_30798_30828 = state_30791__$1;(statearr_30798_30828[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30792 === (13)))
{var inst_30787 = (state_30791[(2)]);var state_30791__$1 = state_30791;var statearr_30799_30829 = state_30791__$1;(statearr_30799_30829[(2)] = inst_30787);
(statearr_30799_30829[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30792 === (6)))
{var state_30791__$1 = state_30791;var statearr_30800_30830 = state_30791__$1;(statearr_30800_30830[(2)] = null);
(statearr_30800_30830[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30792 === (3)))
{var inst_30789 = (state_30791[(2)]);var state_30791__$1 = state_30791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30791__$1,inst_30789);
} else
{if((state_val_30792 === (12)))
{var state_30791__$1 = state_30791;var statearr_30801_30831 = state_30791__$1;(statearr_30801_30831[(2)] = null);
(statearr_30801_30831[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30792 === (2)))
{var state_30791__$1 = state_30791;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30791__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30792 === (11)))
{var state_30791__$1 = state_30791;var statearr_30802_30832 = state_30791__$1;(statearr_30802_30832[(2)] = null);
(statearr_30802_30832[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30792 === (9)))
{var inst_30762 = (state_30791[(8)]);var state_30791__$1 = state_30791;var statearr_30803_30833 = state_30791__$1;(statearr_30803_30833[(2)] = inst_30762);
(statearr_30803_30833[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30792 === (5)))
{var inst_30762 = (state_30791[(8)]);var inst_30756 = (state_30791[(7)]);var inst_30759 = cljs.core.nth.call(null,inst_30756,(0),null);var inst_30760 = cljs.core.nth.call(null,inst_30756,(1),null);var inst_30762__$1 = om.core.get_props.call(null,self__.owner);var inst_30763 = cljs.core.seq_QMARK_.call(null,inst_30762__$1);var state_30791__$1 = (function (){var statearr_30804 = state_30791;(statearr_30804[(8)] = inst_30762__$1);
(statearr_30804[(9)] = inst_30760);
(statearr_30804[(10)] = inst_30759);
return statearr_30804;
})();if(inst_30763)
{var statearr_30805_30834 = state_30791__$1;(statearr_30805_30834[(1)] = (8));
} else
{var statearr_30806_30835 = state_30791__$1;(statearr_30806_30835[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30792 === (10)))
{var inst_30760 = (state_30791[(9)]);var inst_30768 = (state_30791[(2)]);var inst_30769 = cljs.core.get.call(null,inst_30768,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30770 = cljs.core.get.call(null,inst_30768,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30771 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30772 = ["TAG-FILTER-RQ",self__.id,inst_30760];var inst_30773 = (new cljs.core.PersistentVector(null,3,(5),inst_30771,inst_30772,null));var inst_30774 = cljs.core.clj__GT_js.call(null,inst_30773);var inst_30775 = console.log(inst_30774);var inst_30776 = cljs.core.deref.call(null,inst_30769);var inst_30777 = cljs.core.deref.call(null,inst_30770);var inst_30778 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30776,inst_30777,inst_30760);var inst_30779 = om.core.update_BANG_.call(null,inst_30769,inst_30778);var state_30791__$1 = (function (){var statearr_30807 = state_30791;(statearr_30807[(11)] = inst_30775);
(statearr_30807[(12)] = inst_30779);
return statearr_30807;
})();var statearr_30808_30836 = state_30791__$1;(statearr_30808_30836[(2)] = true);
(statearr_30808_30836[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30792 === (8)))
{var inst_30762 = (state_30791[(8)]);var inst_30765 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30762);var state_30791__$1 = state_30791;var statearr_30809_30837 = state_30791__$1;(statearr_30809_30837[(2)] = inst_30765);
(statearr_30809_30837[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30813 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30813[(0)] = state_machine__9111__auto__);
(statearr_30813[(1)] = (1));
return statearr_30813;
});
var state_machine__9111__auto____1 = (function (state_30791){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30791);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30814){if((e30814 instanceof Object))
{var ex__9114__auto__ = e30814;var statearr_30815_30838 = state_30791;(statearr_30815_30838[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30814;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30839 = state_30791;
state_30791 = G__30839;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30791){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683))
})();var state__9127__auto__ = (function (){var statearr_30816 = f__9126__auto__.call(null);(statearr_30816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683))
;
clustermap.components.filters.tag_filter.t30751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683){
return (function (_30753){var self__ = this;
var _30753__$1 = this;return self__.meta30752;
});})(owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683))
;
clustermap.components.filters.tag_filter.t30751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683){
return (function (_30753,meta30752__$1){var self__ = this;
var _30753__$1 = this;return (new clustermap.components.filters.tag_filter.t30751(self__.component_spec,self__.component_filter_rq_chan,self__.input_checker30682,self__.owner,self__.data,self__.G__30684,self__.map30679,self__.input_schema30681,self__.filter_spec,self__.output_schema30680,self__.map30678,self__.output_checker30683,self__.constructor30676,self__.validate__6034__auto__,self__.id,self__.ufv__,meta30752__$1));
});})(owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683))
;
clustermap.components.filters.tag_filter.__GT_t30751 = ((function (owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683){
return (function __GT_t30751(component_spec__$1,component_filter_rq_chan__$1,input_checker30682__$1,owner__$1,data__$1,G__30684__$1,map30679__$1,input_schema30681__$1,filter_spec__$1,output_schema30680__$1,map30678__$1,output_checker30683__$1,constructor30676__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30752){return (new clustermap.components.filters.tag_filter.t30751(component_spec__$1,component_filter_rq_chan__$1,input_checker30682__$1,owner__$1,data__$1,G__30684__$1,map30679__$1,input_schema30681__$1,filter_spec__$1,output_schema30680__$1,map30678__$1,output_checker30683__$1,constructor30676__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30752));
});})(owner,component_filter_rq_chan,map30679,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683))
;
}
return (new clustermap.components.filters.tag_filter.t30751(component_spec,component_filter_rq_chan,input_checker30682,owner,data,G__30684,map30679,input_schema30681,filter_spec,output_schema30680,map30678,output_checker30683,constructor30676,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30840 = output_checker30683.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30840))
{var error__6036__auto___30841 = temp__4126__auto___30840;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30676","constructor30676",273716084,null),cljs.core.pr_str.call(null,error__6036__auto___30841)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30841,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30680,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30680,input_schema30681,input_checker30682,output_checker30683))
,schema.core.make_fn_schema.call(null,output_schema30680,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30681], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___30820){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30675,p__30817){var vec__30819 = p__30817;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30819,(0),null);return component_fnk__7881__auto___30820.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30675,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30675,var_args){
var p__30817 = null;if (arguments.length > 2) {
  p__30817 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30675,p__30817);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__30842){
var data__7882__auto__ = cljs.core.first(arglist__30842);
arglist__30842 = cljs.core.next(arglist__30842);
var owner30675 = cljs.core.first(arglist__30842);
var p__30817 = cljs.core.rest(arglist__30842);
return tag_filter_component__delegate(data__7882__auto__,owner30675,p__30817);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___30820))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30677){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30677);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30677){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
