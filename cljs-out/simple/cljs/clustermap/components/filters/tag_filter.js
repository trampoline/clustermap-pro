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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30727_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30727_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30728,value){var map__30730 = p__30728;var map__30730__$1 = ((cljs.core.seq_QMARK_.call(null,map__30730))?cljs.core.apply.call(null,cljs.core.hash_map,map__30730):map__30730);var component_spec = map__30730__$1;var tags = cljs.core.get.call(null,map__30730__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30730__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30731,value){var map__30733 = p__30731;var map__30733__$1 = ((cljs.core.seq_QMARK_.call(null,map__30733))?cljs.core.apply.call(null,cljs.core.hash_map,map__30733):map__30733);var component_spec = map__30733__$1;var tags = cljs.core.get.call(null,map__30733__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30733__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30734,value){var map__30736 = p__30734;var map__30736__$1 = ((cljs.core.seq_QMARK_.call(null,map__30736))?cljs.core.apply.call(null,cljs.core.hash_map,map__30736):map__30736);var component_spec = map__30736__$1;var tags = cljs.core.get.call(null,map__30736__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30736__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30737_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30737_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30738_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30738_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30740 = schema.core.Any;var input_schema30741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30739","map30739",-1833579484,null))], null);var input_checker30742 = schema.core.checker.call(null,input_schema30741);var output_checker30743 = schema.core.checker.call(null,output_schema30740);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30740,input_schema30741,input_checker30742,output_checker30743){
return (function render_STAR_(G__30744){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30761 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30744], null);var temp__4126__auto___30762 = input_checker30742.call(null,args__6035__auto___30761);if(cljs.core.truth_(temp__4126__auto___30762))
{var error__6036__auto___30763 = temp__4126__auto___30762;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30763)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30763,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30761,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30741,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30739 = G__30744;while(true){
if(cljs.core.map_QMARK_.call(null,map30739))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30739)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30739,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30739,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30740,input_schema30741,input_checker30742,output_checker30743){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30740,input_schema30741,input_checker30742,output_checker30743))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30740,input_schema30741,input_checker30742,output_checker30743){
return (function iter__30753(s__30754){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30740,input_schema30741,input_checker30742,output_checker30743){
return (function (){var s__30754__$1 = s__30754;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30754__$1);if(temp__4126__auto__)
{var s__30754__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30754__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30754__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30756 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30755 = (0);while(true){
if((i__30755 < size__4376__auto__))
{var map__30759 = cljs.core._nth.call(null,c__4375__auto__,i__30755);var map__30759__$1 = ((cljs.core.seq_QMARK_.call(null,map__30759))?cljs.core.apply.call(null,cljs.core.hash_map,map__30759):map__30759);var label__$1 = cljs.core.get.call(null,map__30759__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30759__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30756,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30764 = (i__30755 + (1));
i__30755 = G__30764;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30756),iter__30753.call(null,cljs.core.chunk_rest.call(null,s__30754__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30756),null);
}
} else
{var map__30760 = cljs.core.first.call(null,s__30754__$2);var map__30760__$1 = ((cljs.core.seq_QMARK_.call(null,map__30760))?cljs.core.apply.call(null,cljs.core.hash_map,map__30760):map__30760);var label__$1 = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30753.call(null,cljs.core.rest.call(null,s__30754__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30740,input_schema30741,input_checker30742,output_checker30743))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30740,input_schema30741,input_checker30742,output_checker30743))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30765 = output_checker30743.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30765))
{var error__6036__auto___30766 = temp__4126__auto___30765;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30766)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30766,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30740,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30740,input_schema30741,input_checker30742,output_checker30743))
,schema.core.make_fn_schema.call(null,output_schema30740,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30741], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30912 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30772 = schema.core.Any;var input_schema30773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30770","map30770",828640934,null))], null);var input_checker30774 = schema.core.checker.call(null,input_schema30773);var output_checker30775 = schema.core.checker.call(null,output_schema30772);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775){
return (function constructor30768(G__30776){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30776], null);var temp__4126__auto___30914 = input_checker30774.call(null,args__6035__auto___30913);if(cljs.core.truth_(temp__4126__auto___30914))
{var error__6036__auto___30915 = temp__4126__auto___30914;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30768","constructor30768",1872234620,null),cljs.core.pr_str.call(null,error__6036__auto___30915)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30915,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30913,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30773,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30770 = G__30776;while(true){
if(cljs.core.map_QMARK_.call(null,map30770))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30770)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30770,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30771 = plumbing.fnk.schema.safe_get.call(null,map30770,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30771,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30770,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30843 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30843 = (function (component_spec,component_filter_rq_chan,output_checker30775,map30771,owner,data,map30770,input_schema30773,output_schema30772,G__30776,filter_spec,input_checker30774,validate__6034__auto__,id,constructor30768,ufv__,meta30844){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_checker30775 = output_checker30775;
this.map30771 = map30771;
this.owner = owner;
this.data = data;
this.map30770 = map30770;
this.input_schema30773 = input_schema30773;
this.output_schema30772 = output_schema30772;
this.G__30776 = G__30776;
this.filter_spec = filter_spec;
this.input_checker30774 = input_checker30774;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.constructor30768 = constructor30768;
this.ufv__ = ufv__;
this.meta30844 = meta30844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30843.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30843.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30843";
clustermap.components.filters.tag_filter.t30843.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t30843");
});})(owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775))
;
clustermap.components.filters.tag_filter.t30843.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30843.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775))
;
clustermap.components.filters.tag_filter.t30843.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30843.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775))
;
clustermap.components.filters.tag_filter.t30843.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30843.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775){
return (function (state_30883){var state_val_30884 = (state_30883[(1)]);if((state_val_30884 === (7)))
{var inst_30874 = (state_30883[(2)]);var state_30883__$1 = state_30883;if(cljs.core.truth_(inst_30874))
{var statearr_30885_30916 = state_30883__$1;(statearr_30885_30916[(1)] = (11));
} else
{var statearr_30886_30917 = state_30883__$1;(statearr_30886_30917[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30884 === (1)))
{var state_30883__$1 = state_30883;var statearr_30887_30918 = state_30883__$1;(statearr_30887_30918[(2)] = null);
(statearr_30887_30918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30884 === (4)))
{var inst_30848 = (state_30883[(7)]);var inst_30848__$1 = (state_30883[(2)]);var state_30883__$1 = (function (){var statearr_30888 = state_30883;(statearr_30888[(7)] = inst_30848__$1);
return statearr_30888;
})();if(cljs.core.truth_(inst_30848__$1))
{var statearr_30889_30919 = state_30883__$1;(statearr_30889_30919[(1)] = (5));
} else
{var statearr_30890_30920 = state_30883__$1;(statearr_30890_30920[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30884 === (13)))
{var inst_30879 = (state_30883[(2)]);var state_30883__$1 = state_30883;var statearr_30891_30921 = state_30883__$1;(statearr_30891_30921[(2)] = inst_30879);
(statearr_30891_30921[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30884 === (6)))
{var state_30883__$1 = state_30883;var statearr_30892_30922 = state_30883__$1;(statearr_30892_30922[(2)] = null);
(statearr_30892_30922[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30884 === (3)))
{var inst_30881 = (state_30883[(2)]);var state_30883__$1 = state_30883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30883__$1,inst_30881);
} else
{if((state_val_30884 === (12)))
{var state_30883__$1 = state_30883;var statearr_30893_30923 = state_30883__$1;(statearr_30893_30923[(2)] = null);
(statearr_30893_30923[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30884 === (2)))
{var state_30883__$1 = state_30883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30883__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30884 === (11)))
{var state_30883__$1 = state_30883;var statearr_30894_30924 = state_30883__$1;(statearr_30894_30924[(2)] = null);
(statearr_30894_30924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30884 === (9)))
{var inst_30854 = (state_30883[(8)]);var state_30883__$1 = state_30883;var statearr_30895_30925 = state_30883__$1;(statearr_30895_30925[(2)] = inst_30854);
(statearr_30895_30925[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30884 === (5)))
{var inst_30848 = (state_30883[(7)]);var inst_30854 = (state_30883[(8)]);var inst_30851 = cljs.core.nth.call(null,inst_30848,(0),null);var inst_30852 = cljs.core.nth.call(null,inst_30848,(1),null);var inst_30854__$1 = om.core.get_props.call(null,self__.owner);var inst_30855 = cljs.core.seq_QMARK_.call(null,inst_30854__$1);var state_30883__$1 = (function (){var statearr_30896 = state_30883;(statearr_30896[(9)] = inst_30851);
(statearr_30896[(10)] = inst_30852);
(statearr_30896[(8)] = inst_30854__$1);
return statearr_30896;
})();if(inst_30855)
{var statearr_30897_30926 = state_30883__$1;(statearr_30897_30926[(1)] = (8));
} else
{var statearr_30898_30927 = state_30883__$1;(statearr_30898_30927[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30884 === (10)))
{var inst_30852 = (state_30883[(10)]);var inst_30860 = (state_30883[(2)]);var inst_30861 = cljs.core.get.call(null,inst_30860,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30862 = cljs.core.get.call(null,inst_30860,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30863 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30864 = ["TAG-FILTER-RQ",self__.id,inst_30852];var inst_30865 = (new cljs.core.PersistentVector(null,3,(5),inst_30863,inst_30864,null));var inst_30866 = cljs.core.clj__GT_js.call(null,inst_30865);var inst_30867 = console.log(inst_30866);var inst_30868 = cljs.core.deref.call(null,inst_30861);var inst_30869 = cljs.core.deref.call(null,inst_30862);var inst_30870 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30868,inst_30869,inst_30852);var inst_30871 = om.core.update_BANG_.call(null,inst_30861,inst_30870);var state_30883__$1 = (function (){var statearr_30899 = state_30883;(statearr_30899[(11)] = inst_30867);
(statearr_30899[(12)] = inst_30871);
return statearr_30899;
})();var statearr_30900_30928 = state_30883__$1;(statearr_30900_30928[(2)] = true);
(statearr_30900_30928[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30884 === (8)))
{var inst_30854 = (state_30883[(8)]);var inst_30857 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30854);var state_30883__$1 = state_30883;var statearr_30901_30929 = state_30883__$1;(statearr_30901_30929[(2)] = inst_30857);
(statearr_30901_30929[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30905 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30905[(0)] = state_machine__9111__auto__);
(statearr_30905[(1)] = (1));
return statearr_30905;
});
var state_machine__9111__auto____1 = (function (state_30883){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30883);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30906){if((e30906 instanceof Object))
{var ex__9114__auto__ = e30906;var statearr_30907_30930 = state_30883;(statearr_30907_30930[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30906;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30931 = state_30883;
state_30883 = G__30931;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30883){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775))
})();var state__9127__auto__ = (function (){var statearr_30908 = f__9126__auto__.call(null);(statearr_30908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775))
;
clustermap.components.filters.tag_filter.t30843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775){
return (function (_30845){var self__ = this;
var _30845__$1 = this;return self__.meta30844;
});})(owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775))
;
clustermap.components.filters.tag_filter.t30843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775){
return (function (_30845,meta30844__$1){var self__ = this;
var _30845__$1 = this;return (new clustermap.components.filters.tag_filter.t30843(self__.component_spec,self__.component_filter_rq_chan,self__.output_checker30775,self__.map30771,self__.owner,self__.data,self__.map30770,self__.input_schema30773,self__.output_schema30772,self__.G__30776,self__.filter_spec,self__.input_checker30774,self__.validate__6034__auto__,self__.id,self__.constructor30768,self__.ufv__,meta30844__$1));
});})(owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775))
;
clustermap.components.filters.tag_filter.__GT_t30843 = ((function (owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775){
return (function __GT_t30843(component_spec__$1,component_filter_rq_chan__$1,output_checker30775__$1,map30771__$1,owner__$1,data__$1,map30770__$1,input_schema30773__$1,output_schema30772__$1,G__30776__$1,filter_spec__$1,input_checker30774__$1,validate__6034__auto____$1,id__$1,constructor30768__$1,ufv____$1,meta30844){return (new clustermap.components.filters.tag_filter.t30843(component_spec__$1,component_filter_rq_chan__$1,output_checker30775__$1,map30771__$1,owner__$1,data__$1,map30770__$1,input_schema30773__$1,output_schema30772__$1,G__30776__$1,filter_spec__$1,input_checker30774__$1,validate__6034__auto____$1,id__$1,constructor30768__$1,ufv____$1,meta30844));
});})(owner,component_filter_rq_chan,map30771,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775))
;
}
return (new clustermap.components.filters.tag_filter.t30843(component_spec,component_filter_rq_chan,output_checker30775,map30771,owner,data,map30770,input_schema30773,output_schema30772,G__30776,filter_spec,input_checker30774,validate__6034__auto__,id,constructor30768,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30932 = output_checker30775.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30932))
{var error__6036__auto___30933 = temp__4126__auto___30932;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30768","constructor30768",1872234620,null),cljs.core.pr_str.call(null,error__6036__auto___30933)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30933,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30772,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30772,input_schema30773,input_checker30774,output_checker30775))
,schema.core.make_fn_schema.call(null,output_schema30772,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30773], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___30912){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30767,p__30909){var vec__30911 = p__30909;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30911,(0),null);return component_fnk__7881__auto___30912.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30767,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30767,var_args){
var p__30909 = null;if (arguments.length > 2) {
  p__30909 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30767,p__30909);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__30934){
var data__7882__auto__ = cljs.core.first(arglist__30934);
arglist__30934 = cljs.core.next(arglist__30934);
var owner30767 = cljs.core.first(arglist__30934);
var p__30909 = cljs.core.rest(arglist__30934);
return tag_filter_component__delegate(data__7882__auto__,owner30767,p__30909);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___30912))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30769){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30769);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30769){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
