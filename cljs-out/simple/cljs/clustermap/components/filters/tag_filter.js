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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30621_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30621_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30622,value){var map__30624 = p__30622;var map__30624__$1 = ((cljs.core.seq_QMARK_.call(null,map__30624))?cljs.core.apply.call(null,cljs.core.hash_map,map__30624):map__30624);var component_spec = map__30624__$1;var tags = cljs.core.get.call(null,map__30624__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30624__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30625,value){var map__30627 = p__30625;var map__30627__$1 = ((cljs.core.seq_QMARK_.call(null,map__30627))?cljs.core.apply.call(null,cljs.core.hash_map,map__30627):map__30627);var component_spec = map__30627__$1;var tags = cljs.core.get.call(null,map__30627__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30627__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30628,value){var map__30630 = p__30628;var map__30630__$1 = ((cljs.core.seq_QMARK_.call(null,map__30630))?cljs.core.apply.call(null,cljs.core.hash_map,map__30630):map__30630);var component_spec = map__30630__$1;var tags = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30630__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30631_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30631_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30632_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30632_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30634 = schema.core.Any;var input_schema30635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30633","map30633",-2001998492,null))], null);var input_checker30636 = schema.core.checker.call(null,input_schema30635);var output_checker30637 = schema.core.checker.call(null,output_schema30634);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30634,input_schema30635,input_checker30636,output_checker30637){
return (function render_STAR_(G__30638){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30655 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30638], null);var temp__4126__auto___30656 = input_checker30636.call(null,args__6035__auto___30655);if(cljs.core.truth_(temp__4126__auto___30656))
{var error__6036__auto___30657 = temp__4126__auto___30656;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30657)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30657,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30655,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30635,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30633 = G__30638;while(true){
if(cljs.core.map_QMARK_.call(null,map30633))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30633)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30633,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30633,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30634,input_schema30635,input_checker30636,output_checker30637){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30634,input_schema30635,input_checker30636,output_checker30637))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30634,input_schema30635,input_checker30636,output_checker30637){
return (function iter__30647(s__30648){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30634,input_schema30635,input_checker30636,output_checker30637){
return (function (){var s__30648__$1 = s__30648;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30648__$1);if(temp__4126__auto__)
{var s__30648__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30648__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30648__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30650 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30649 = (0);while(true){
if((i__30649 < size__4376__auto__))
{var map__30653 = cljs.core._nth.call(null,c__4375__auto__,i__30649);var map__30653__$1 = ((cljs.core.seq_QMARK_.call(null,map__30653))?cljs.core.apply.call(null,cljs.core.hash_map,map__30653):map__30653);var label__$1 = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30650,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30658 = (i__30649 + (1));
i__30649 = G__30658;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30650),iter__30647.call(null,cljs.core.chunk_rest.call(null,s__30648__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30650),null);
}
} else
{var map__30654 = cljs.core.first.call(null,s__30648__$2);var map__30654__$1 = ((cljs.core.seq_QMARK_.call(null,map__30654))?cljs.core.apply.call(null,cljs.core.hash_map,map__30654):map__30654);var label__$1 = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30647.call(null,cljs.core.rest.call(null,s__30648__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30634,input_schema30635,input_checker30636,output_checker30637))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30634,input_schema30635,input_checker30636,output_checker30637))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30659 = output_checker30637.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30659))
{var error__6036__auto___30660 = temp__4126__auto___30659;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30660)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30660,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30634,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30634,input_schema30635,input_checker30636,output_checker30637))
,schema.core.make_fn_schema.call(null,output_schema30634,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30635], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30806 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30666 = schema.core.Any;var input_schema30667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30664","map30664",-1732096159,null))], null);var input_checker30668 = schema.core.checker.call(null,input_schema30667);var output_checker30669 = schema.core.checker.call(null,output_schema30666);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669){
return (function constructor30662(G__30670){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30670], null);var temp__4126__auto___30808 = input_checker30668.call(null,args__6035__auto___30807);if(cljs.core.truth_(temp__4126__auto___30808))
{var error__6036__auto___30809 = temp__4126__auto___30808;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30662","constructor30662",453276265,null),cljs.core.pr_str.call(null,error__6036__auto___30809)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30809,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30807,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30667,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30664 = G__30670;while(true){
if(cljs.core.map_QMARK_.call(null,map30664))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30664)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30664,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30665 = plumbing.fnk.schema.safe_get.call(null,map30664,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30665,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30664,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30737 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30737 = (function (component_spec,component_filter_rq_chan,map30664,map30665,owner,data,output_checker30669,constructor30662,input_checker30668,filter_spec,input_schema30667,G__30670,output_schema30666,validate__6034__auto__,id,ufv__,meta30738){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map30664 = map30664;
this.map30665 = map30665;
this.owner = owner;
this.data = data;
this.output_checker30669 = output_checker30669;
this.constructor30662 = constructor30662;
this.input_checker30668 = input_checker30668;
this.filter_spec = filter_spec;
this.input_schema30667 = input_schema30667;
this.G__30670 = G__30670;
this.output_schema30666 = output_schema30666;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta30738 = meta30738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30737.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30737.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30737";
clustermap.components.filters.tag_filter.t30737.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t30737");
});})(owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669))
;
clustermap.components.filters.tag_filter.t30737.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30737.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669))
;
clustermap.components.filters.tag_filter.t30737.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30737.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669))
;
clustermap.components.filters.tag_filter.t30737.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30737.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669){
return (function (state_30777){var state_val_30778 = (state_30777[(1)]);if((state_val_30778 === (7)))
{var inst_30768 = (state_30777[(2)]);var state_30777__$1 = state_30777;if(cljs.core.truth_(inst_30768))
{var statearr_30779_30810 = state_30777__$1;(statearr_30779_30810[(1)] = (11));
} else
{var statearr_30780_30811 = state_30777__$1;(statearr_30780_30811[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30778 === (1)))
{var state_30777__$1 = state_30777;var statearr_30781_30812 = state_30777__$1;(statearr_30781_30812[(2)] = null);
(statearr_30781_30812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30778 === (4)))
{var inst_30742 = (state_30777[(7)]);var inst_30742__$1 = (state_30777[(2)]);var state_30777__$1 = (function (){var statearr_30782 = state_30777;(statearr_30782[(7)] = inst_30742__$1);
return statearr_30782;
})();if(cljs.core.truth_(inst_30742__$1))
{var statearr_30783_30813 = state_30777__$1;(statearr_30783_30813[(1)] = (5));
} else
{var statearr_30784_30814 = state_30777__$1;(statearr_30784_30814[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30778 === (13)))
{var inst_30773 = (state_30777[(2)]);var state_30777__$1 = state_30777;var statearr_30785_30815 = state_30777__$1;(statearr_30785_30815[(2)] = inst_30773);
(statearr_30785_30815[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30778 === (6)))
{var state_30777__$1 = state_30777;var statearr_30786_30816 = state_30777__$1;(statearr_30786_30816[(2)] = null);
(statearr_30786_30816[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30778 === (3)))
{var inst_30775 = (state_30777[(2)]);var state_30777__$1 = state_30777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30777__$1,inst_30775);
} else
{if((state_val_30778 === (12)))
{var state_30777__$1 = state_30777;var statearr_30787_30817 = state_30777__$1;(statearr_30787_30817[(2)] = null);
(statearr_30787_30817[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30778 === (2)))
{var state_30777__$1 = state_30777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30777__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30778 === (11)))
{var state_30777__$1 = state_30777;var statearr_30788_30818 = state_30777__$1;(statearr_30788_30818[(2)] = null);
(statearr_30788_30818[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30778 === (9)))
{var inst_30748 = (state_30777[(8)]);var state_30777__$1 = state_30777;var statearr_30789_30819 = state_30777__$1;(statearr_30789_30819[(2)] = inst_30748);
(statearr_30789_30819[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30778 === (5)))
{var inst_30742 = (state_30777[(7)]);var inst_30748 = (state_30777[(8)]);var inst_30745 = cljs.core.nth.call(null,inst_30742,(0),null);var inst_30746 = cljs.core.nth.call(null,inst_30742,(1),null);var inst_30748__$1 = om.core.get_props.call(null,self__.owner);var inst_30749 = cljs.core.seq_QMARK_.call(null,inst_30748__$1);var state_30777__$1 = (function (){var statearr_30790 = state_30777;(statearr_30790[(9)] = inst_30746);
(statearr_30790[(10)] = inst_30745);
(statearr_30790[(8)] = inst_30748__$1);
return statearr_30790;
})();if(inst_30749)
{var statearr_30791_30820 = state_30777__$1;(statearr_30791_30820[(1)] = (8));
} else
{var statearr_30792_30821 = state_30777__$1;(statearr_30792_30821[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30778 === (10)))
{var inst_30746 = (state_30777[(9)]);var inst_30754 = (state_30777[(2)]);var inst_30755 = cljs.core.get.call(null,inst_30754,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30756 = cljs.core.get.call(null,inst_30754,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30757 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30758 = ["TAG-FILTER-RQ",self__.id,inst_30746];var inst_30759 = (new cljs.core.PersistentVector(null,3,(5),inst_30757,inst_30758,null));var inst_30760 = cljs.core.clj__GT_js.call(null,inst_30759);var inst_30761 = console.log(inst_30760);var inst_30762 = cljs.core.deref.call(null,inst_30755);var inst_30763 = cljs.core.deref.call(null,inst_30756);var inst_30764 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30762,inst_30763,inst_30746);var inst_30765 = om.core.update_BANG_.call(null,inst_30755,inst_30764);var state_30777__$1 = (function (){var statearr_30793 = state_30777;(statearr_30793[(11)] = inst_30761);
(statearr_30793[(12)] = inst_30765);
return statearr_30793;
})();var statearr_30794_30822 = state_30777__$1;(statearr_30794_30822[(2)] = true);
(statearr_30794_30822[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30778 === (8)))
{var inst_30748 = (state_30777[(8)]);var inst_30751 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30748);var state_30777__$1 = state_30777;var statearr_30795_30823 = state_30777__$1;(statearr_30795_30823[(2)] = inst_30751);
(statearr_30795_30823[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30799 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30799[(0)] = state_machine__9111__auto__);
(statearr_30799[(1)] = (1));
return statearr_30799;
});
var state_machine__9111__auto____1 = (function (state_30777){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30777);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30800){if((e30800 instanceof Object))
{var ex__9114__auto__ = e30800;var statearr_30801_30824 = state_30777;(statearr_30801_30824[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30777);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30800;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30825 = state_30777;
state_30777 = G__30825;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30777){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669))
})();var state__9127__auto__ = (function (){var statearr_30802 = f__9126__auto__.call(null);(statearr_30802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669))
;
clustermap.components.filters.tag_filter.t30737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669){
return (function (_30739){var self__ = this;
var _30739__$1 = this;return self__.meta30738;
});})(owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669))
;
clustermap.components.filters.tag_filter.t30737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669){
return (function (_30739,meta30738__$1){var self__ = this;
var _30739__$1 = this;return (new clustermap.components.filters.tag_filter.t30737(self__.component_spec,self__.component_filter_rq_chan,self__.map30664,self__.map30665,self__.owner,self__.data,self__.output_checker30669,self__.constructor30662,self__.input_checker30668,self__.filter_spec,self__.input_schema30667,self__.G__30670,self__.output_schema30666,self__.validate__6034__auto__,self__.id,self__.ufv__,meta30738__$1));
});})(owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669))
;
clustermap.components.filters.tag_filter.__GT_t30737 = ((function (owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669){
return (function __GT_t30737(component_spec__$1,component_filter_rq_chan__$1,map30664__$1,map30665__$1,owner__$1,data__$1,output_checker30669__$1,constructor30662__$1,input_checker30668__$1,filter_spec__$1,input_schema30667__$1,G__30670__$1,output_schema30666__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30738){return (new clustermap.components.filters.tag_filter.t30737(component_spec__$1,component_filter_rq_chan__$1,map30664__$1,map30665__$1,owner__$1,data__$1,output_checker30669__$1,constructor30662__$1,input_checker30668__$1,filter_spec__$1,input_schema30667__$1,G__30670__$1,output_schema30666__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30738));
});})(owner,component_filter_rq_chan,map30665,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669))
;
}
return (new clustermap.components.filters.tag_filter.t30737(component_spec,component_filter_rq_chan,map30664,map30665,owner,data,output_checker30669,constructor30662,input_checker30668,filter_spec,input_schema30667,G__30670,output_schema30666,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30826 = output_checker30669.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30826))
{var error__6036__auto___30827 = temp__4126__auto___30826;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30662","constructor30662",453276265,null),cljs.core.pr_str.call(null,error__6036__auto___30827)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30827,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30666,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30666,input_schema30667,input_checker30668,output_checker30669))
,schema.core.make_fn_schema.call(null,output_schema30666,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30667], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___30806){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30661,p__30803){var vec__30805 = p__30803;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30805,(0),null);return component_fnk__7881__auto___30806.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30661,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30661,var_args){
var p__30803 = null;if (arguments.length > 2) {
  p__30803 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30661,p__30803);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__30828){
var data__7882__auto__ = cljs.core.first(arglist__30828);
arglist__30828 = cljs.core.next(arglist__30828);
var owner30661 = cljs.core.first(arglist__30828);
var p__30803 = cljs.core.rest(arglist__30828);
return tag_filter_component__delegate(data__7882__auto__,owner30661,p__30803);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___30806))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30663){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30663);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30663){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
