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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29786_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29786_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__29787,value){var map__29789 = p__29787;var map__29789__$1 = ((cljs.core.seq_QMARK_.call(null,map__29789))?cljs.core.apply.call(null,cljs.core.hash_map,map__29789):map__29789);var component_spec = map__29789__$1;var tags = cljs.core.get.call(null,map__29789__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29789__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__29790,value){var map__29792 = p__29790;var map__29792__$1 = ((cljs.core.seq_QMARK_.call(null,map__29792))?cljs.core.apply.call(null,cljs.core.hash_map,map__29792):map__29792);var component_spec = map__29792__$1;var tags = cljs.core.get.call(null,map__29792__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29792__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29793,value){var map__29795 = p__29793;var map__29795__$1 = ((cljs.core.seq_QMARK_.call(null,map__29795))?cljs.core.apply.call(null,cljs.core.hash_map,map__29795):map__29795);var component_spec = map__29795__$1;var tags = cljs.core.get.call(null,map__29795__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29795__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29796_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29796_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__29797_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29797_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29799 = schema.core.Any;var input_schema29800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29798","map29798",704260721,null))], null);var input_checker29801 = schema.core.checker.call(null,input_schema29800);var output_checker29802 = schema.core.checker.call(null,output_schema29799);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29799,input_schema29800,input_checker29801,output_checker29802){
return (function render_STAR_(G__29803){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29820 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29803], null);var temp__4126__auto___29821 = input_checker29801.call(null,args__6035__auto___29820);if(cljs.core.truth_(temp__4126__auto___29821))
{var error__6036__auto___29822 = temp__4126__auto___29821;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29822)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29822,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29820,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29800,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29798 = G__29803;while(true){
if(cljs.core.map_QMARK_.call(null,map29798))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29798)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29798,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29798,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29799,input_schema29800,input_checker29801,output_checker29802){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29799,input_schema29800,input_checker29801,output_checker29802))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29799,input_schema29800,input_checker29801,output_checker29802){
return (function iter__29812(s__29813){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29799,input_schema29800,input_checker29801,output_checker29802){
return (function (){var s__29813__$1 = s__29813;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29813__$1);if(temp__4126__auto__)
{var s__29813__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29813__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29813__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29815 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29814 = (0);while(true){
if((i__29814 < size__4376__auto__))
{var map__29818 = cljs.core._nth.call(null,c__4375__auto__,i__29814);var map__29818__$1 = ((cljs.core.seq_QMARK_.call(null,map__29818))?cljs.core.apply.call(null,cljs.core.hash_map,map__29818):map__29818);var label__$1 = cljs.core.get.call(null,map__29818__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29818__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29815,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29823 = (i__29814 + (1));
i__29814 = G__29823;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29815),iter__29812.call(null,cljs.core.chunk_rest.call(null,s__29813__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29815),null);
}
} else
{var map__29819 = cljs.core.first.call(null,s__29813__$2);var map__29819__$1 = ((cljs.core.seq_QMARK_.call(null,map__29819))?cljs.core.apply.call(null,cljs.core.hash_map,map__29819):map__29819);var label__$1 = cljs.core.get.call(null,map__29819__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29819__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29812.call(null,cljs.core.rest.call(null,s__29813__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29799,input_schema29800,input_checker29801,output_checker29802))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29799,input_schema29800,input_checker29801,output_checker29802))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29824 = output_checker29802.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29824))
{var error__6036__auto___29825 = temp__4126__auto___29824;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29825)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29825,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29799,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29799,input_schema29800,input_checker29801,output_checker29802))
,schema.core.make_fn_schema.call(null,output_schema29799,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29800], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29971 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29831 = schema.core.Any;var input_schema29832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29829","map29829",1444938316,null))], null);var input_checker29833 = schema.core.checker.call(null,input_schema29832);var output_checker29834 = schema.core.checker.call(null,output_schema29831);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834){
return (function constructor29827(G__29835){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29835], null);var temp__4126__auto___29973 = input_checker29833.call(null,args__6035__auto___29972);if(cljs.core.truth_(temp__4126__auto___29973))
{var error__6036__auto___29974 = temp__4126__auto___29973;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29827","constructor29827",539254516,null),cljs.core.pr_str.call(null,error__6036__auto___29974)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29974,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29972,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29832,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29829 = G__29835;while(true){
if(cljs.core.map_QMARK_.call(null,map29829))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29829)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29829,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29830 = plumbing.fnk.schema.safe_get.call(null,map29829,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29830,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29829,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t29902 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t29902 = (function (component_spec,component_filter_rq_chan,owner,G__29835,data,output_schema29831,input_schema29832,map29829,filter_spec,input_checker29833,map29830,constructor29827,output_checker29834,validate__6034__auto__,id,ufv__,meta29903){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.G__29835 = G__29835;
this.data = data;
this.output_schema29831 = output_schema29831;
this.input_schema29832 = input_schema29832;
this.map29829 = map29829;
this.filter_spec = filter_spec;
this.input_checker29833 = input_checker29833;
this.map29830 = map29830;
this.constructor29827 = constructor29827;
this.output_checker29834 = output_checker29834;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta29903 = meta29903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t29902.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t29902.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t29902";
clustermap.components.filters.tag_filter.t29902.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t29902");
});})(owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834))
;
clustermap.components.filters.tag_filter.t29902.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t29902.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834))
;
clustermap.components.filters.tag_filter.t29902.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t29902.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834))
;
clustermap.components.filters.tag_filter.t29902.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t29902.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834){
return (function (state_29942){var state_val_29943 = (state_29942[(1)]);if((state_val_29943 === (7)))
{var inst_29933 = (state_29942[(2)]);var state_29942__$1 = state_29942;if(cljs.core.truth_(inst_29933))
{var statearr_29944_29975 = state_29942__$1;(statearr_29944_29975[(1)] = (11));
} else
{var statearr_29945_29976 = state_29942__$1;(statearr_29945_29976[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29943 === (1)))
{var state_29942__$1 = state_29942;var statearr_29946_29977 = state_29942__$1;(statearr_29946_29977[(2)] = null);
(statearr_29946_29977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29943 === (4)))
{var inst_29907 = (state_29942[(7)]);var inst_29907__$1 = (state_29942[(2)]);var state_29942__$1 = (function (){var statearr_29947 = state_29942;(statearr_29947[(7)] = inst_29907__$1);
return statearr_29947;
})();if(cljs.core.truth_(inst_29907__$1))
{var statearr_29948_29978 = state_29942__$1;(statearr_29948_29978[(1)] = (5));
} else
{var statearr_29949_29979 = state_29942__$1;(statearr_29949_29979[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29943 === (13)))
{var inst_29938 = (state_29942[(2)]);var state_29942__$1 = state_29942;var statearr_29950_29980 = state_29942__$1;(statearr_29950_29980[(2)] = inst_29938);
(statearr_29950_29980[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29943 === (6)))
{var state_29942__$1 = state_29942;var statearr_29951_29981 = state_29942__$1;(statearr_29951_29981[(2)] = null);
(statearr_29951_29981[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29943 === (3)))
{var inst_29940 = (state_29942[(2)]);var state_29942__$1 = state_29942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29942__$1,inst_29940);
} else
{if((state_val_29943 === (12)))
{var state_29942__$1 = state_29942;var statearr_29952_29982 = state_29942__$1;(statearr_29952_29982[(2)] = null);
(statearr_29952_29982[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29943 === (2)))
{var state_29942__$1 = state_29942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29942__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29943 === (11)))
{var state_29942__$1 = state_29942;var statearr_29953_29983 = state_29942__$1;(statearr_29953_29983[(2)] = null);
(statearr_29953_29983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29943 === (9)))
{var inst_29913 = (state_29942[(8)]);var state_29942__$1 = state_29942;var statearr_29954_29984 = state_29942__$1;(statearr_29954_29984[(2)] = inst_29913);
(statearr_29954_29984[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29943 === (5)))
{var inst_29913 = (state_29942[(8)]);var inst_29907 = (state_29942[(7)]);var inst_29910 = cljs.core.nth.call(null,inst_29907,(0),null);var inst_29911 = cljs.core.nth.call(null,inst_29907,(1),null);var inst_29913__$1 = om.core.get_props.call(null,self__.owner);var inst_29914 = cljs.core.seq_QMARK_.call(null,inst_29913__$1);var state_29942__$1 = (function (){var statearr_29955 = state_29942;(statearr_29955[(8)] = inst_29913__$1);
(statearr_29955[(9)] = inst_29911);
(statearr_29955[(10)] = inst_29910);
return statearr_29955;
})();if(inst_29914)
{var statearr_29956_29985 = state_29942__$1;(statearr_29956_29985[(1)] = (8));
} else
{var statearr_29957_29986 = state_29942__$1;(statearr_29957_29986[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29943 === (10)))
{var inst_29911 = (state_29942[(9)]);var inst_29919 = (state_29942[(2)]);var inst_29920 = cljs.core.get.call(null,inst_29919,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29921 = cljs.core.get.call(null,inst_29919,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29922 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29923 = ["TAG-FILTER-RQ",self__.id,inst_29911];var inst_29924 = (new cljs.core.PersistentVector(null,3,(5),inst_29922,inst_29923,null));var inst_29925 = cljs.core.clj__GT_js.call(null,inst_29924);var inst_29926 = console.log(inst_29925);var inst_29927 = cljs.core.deref.call(null,inst_29920);var inst_29928 = cljs.core.deref.call(null,inst_29921);var inst_29929 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_29927,inst_29928,inst_29911);var inst_29930 = om.core.update_BANG_.call(null,inst_29920,inst_29929);var state_29942__$1 = (function (){var statearr_29958 = state_29942;(statearr_29958[(11)] = inst_29930);
(statearr_29958[(12)] = inst_29926);
return statearr_29958;
})();var statearr_29959_29987 = state_29942__$1;(statearr_29959_29987[(2)] = true);
(statearr_29959_29987[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29943 === (8)))
{var inst_29913 = (state_29942[(8)]);var inst_29916 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29913);var state_29942__$1 = state_29942;var statearr_29960_29988 = state_29942__$1;(statearr_29960_29988[(2)] = inst_29916);
(statearr_29960_29988[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29964 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29964[(0)] = state_machine__11462__auto__);
(statearr_29964[(1)] = (1));
return statearr_29964;
});
var state_machine__11462__auto____1 = (function (state_29942){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29942);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29965){if((e29965 instanceof Object))
{var ex__11465__auto__ = e29965;var statearr_29966_29989 = state_29942;(statearr_29966_29989[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29965;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29990 = state_29942;
state_29942 = G__29990;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29942){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834))
})();var state__11519__auto__ = (function (){var statearr_29967 = f__11518__auto__.call(null);(statearr_29967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834))
;
clustermap.components.filters.tag_filter.t29902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834){
return (function (_29904){var self__ = this;
var _29904__$1 = this;return self__.meta29903;
});})(owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834))
;
clustermap.components.filters.tag_filter.t29902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834){
return (function (_29904,meta29903__$1){var self__ = this;
var _29904__$1 = this;return (new clustermap.components.filters.tag_filter.t29902(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.G__29835,self__.data,self__.output_schema29831,self__.input_schema29832,self__.map29829,self__.filter_spec,self__.input_checker29833,self__.map29830,self__.constructor29827,self__.output_checker29834,self__.validate__6034__auto__,self__.id,self__.ufv__,meta29903__$1));
});})(owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834))
;
clustermap.components.filters.tag_filter.__GT_t29902 = ((function (owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834){
return (function __GT_t29902(component_spec__$1,component_filter_rq_chan__$1,owner__$1,G__29835__$1,data__$1,output_schema29831__$1,input_schema29832__$1,map29829__$1,filter_spec__$1,input_checker29833__$1,map29830__$1,constructor29827__$1,output_checker29834__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29903){return (new clustermap.components.filters.tag_filter.t29902(component_spec__$1,component_filter_rq_chan__$1,owner__$1,G__29835__$1,data__$1,output_schema29831__$1,input_schema29832__$1,map29829__$1,filter_spec__$1,input_checker29833__$1,map29830__$1,constructor29827__$1,output_checker29834__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29903));
});})(owner,component_filter_rq_chan,map29830,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834))
;
}
return (new clustermap.components.filters.tag_filter.t29902(component_spec,component_filter_rq_chan,owner,G__29835,data,output_schema29831,input_schema29832,map29829,filter_spec,input_checker29833,map29830,constructor29827,output_checker29834,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29991 = output_checker29834.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29991))
{var error__6036__auto___29992 = temp__4126__auto___29991;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29827","constructor29827",539254516,null),cljs.core.pr_str.call(null,error__6036__auto___29992)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29992,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29831,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29831,input_schema29832,input_checker29833,output_checker29834))
,schema.core.make_fn_schema.call(null,output_schema29831,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29832], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___29971){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner29826,p__29968){var vec__29970 = p__29968;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29970,(0),null);return component_fnk__7881__auto___29971.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29826,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner29826,var_args){
var p__29968 = null;if (arguments.length > 2) {
  p__29968 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner29826,p__29968);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__29993){
var data__7882__auto__ = cljs.core.first(arglist__29993);
arglist__29993 = cljs.core.next(arglist__29993);
var owner29826 = cljs.core.first(arglist__29993);
var p__29968 = cljs.core.rest(arglist__29993);
return tag_filter_component__delegate(data__7882__auto__,owner29826,p__29968);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___29971))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m29828){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m29828);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m29828){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m29828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
