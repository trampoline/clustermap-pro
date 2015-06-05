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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29488_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29488_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__29489,value){var map__29491 = p__29489;var map__29491__$1 = ((cljs.core.seq_QMARK_.call(null,map__29491))?cljs.core.apply.call(null,cljs.core.hash_map,map__29491):map__29491);var component_spec = map__29491__$1;var tags = cljs.core.get.call(null,map__29491__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29491__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__29492,value){var map__29494 = p__29492;var map__29494__$1 = ((cljs.core.seq_QMARK_.call(null,map__29494))?cljs.core.apply.call(null,cljs.core.hash_map,map__29494):map__29494);var component_spec = map__29494__$1;var tags = cljs.core.get.call(null,map__29494__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29494__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29495,value){var map__29497 = p__29495;var map__29497__$1 = ((cljs.core.seq_QMARK_.call(null,map__29497))?cljs.core.apply.call(null,cljs.core.hash_map,map__29497):map__29497);var component_spec = map__29497__$1;var tags = cljs.core.get.call(null,map__29497__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29497__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29498_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29498_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__29499_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29499_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29501 = schema.core.Any;var input_schema29502 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29500","map29500",1562048111,null))], null);var input_checker29503 = schema.core.checker.call(null,input_schema29502);var output_checker29504 = schema.core.checker.call(null,output_schema29501);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29501,input_schema29502,input_checker29503,output_checker29504){
return (function render_STAR_(G__29505){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29522 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29505], null);var temp__4126__auto___29523 = input_checker29503.call(null,args__6035__auto___29522);if(cljs.core.truth_(temp__4126__auto___29523))
{var error__6036__auto___29524 = temp__4126__auto___29523;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29524)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29524,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29522,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29502,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29500 = G__29505;while(true){
if(cljs.core.map_QMARK_.call(null,map29500))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29500)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29500,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29500,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29501,input_schema29502,input_checker29503,output_checker29504){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29501,input_schema29502,input_checker29503,output_checker29504))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29501,input_schema29502,input_checker29503,output_checker29504){
return (function iter__29514(s__29515){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29501,input_schema29502,input_checker29503,output_checker29504){
return (function (){var s__29515__$1 = s__29515;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29515__$1);if(temp__4126__auto__)
{var s__29515__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29515__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29515__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29517 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29516 = (0);while(true){
if((i__29516 < size__4376__auto__))
{var map__29520 = cljs.core._nth.call(null,c__4375__auto__,i__29516);var map__29520__$1 = ((cljs.core.seq_QMARK_.call(null,map__29520))?cljs.core.apply.call(null,cljs.core.hash_map,map__29520):map__29520);var label__$1 = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29520__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29517,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29525 = (i__29516 + (1));
i__29516 = G__29525;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29517),iter__29514.call(null,cljs.core.chunk_rest.call(null,s__29515__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29517),null);
}
} else
{var map__29521 = cljs.core.first.call(null,s__29515__$2);var map__29521__$1 = ((cljs.core.seq_QMARK_.call(null,map__29521))?cljs.core.apply.call(null,cljs.core.hash_map,map__29521):map__29521);var label__$1 = cljs.core.get.call(null,map__29521__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29521__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29514.call(null,cljs.core.rest.call(null,s__29515__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29501,input_schema29502,input_checker29503,output_checker29504))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29501,input_schema29502,input_checker29503,output_checker29504))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29526 = output_checker29504.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29526))
{var error__6036__auto___29527 = temp__4126__auto___29526;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29527)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29527,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29501,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29501,input_schema29502,input_checker29503,output_checker29504))
,schema.core.make_fn_schema.call(null,output_schema29501,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29502], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29673 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29533 = schema.core.Any;var input_schema29534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29531","map29531",1911408496,null))], null);var input_checker29535 = schema.core.checker.call(null,input_schema29534);var output_checker29536 = schema.core.checker.call(null,output_schema29533);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536){
return (function constructor29529(G__29537){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29537], null);var temp__4126__auto___29675 = input_checker29535.call(null,args__6035__auto___29674);if(cljs.core.truth_(temp__4126__auto___29675))
{var error__6036__auto___29676 = temp__4126__auto___29675;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29529","constructor29529",-2082747379,null),cljs.core.pr_str.call(null,error__6036__auto___29676)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29676,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29674,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29534,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29531 = G__29537;while(true){
if(cljs.core.map_QMARK_.call(null,map29531))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29531)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29531,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29532 = plumbing.fnk.schema.safe_get.call(null,map29531,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29532,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29531,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t29604 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t29604 = (function (component_spec,input_schema29534,component_filter_rq_chan,input_checker29535,owner,data,output_schema29533,constructor29529,filter_spec,map29531,output_checker29536,map29532,G__29537,validate__6034__auto__,id,ufv__,meta29605){
this.component_spec = component_spec;
this.input_schema29534 = input_schema29534;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_checker29535 = input_checker29535;
this.owner = owner;
this.data = data;
this.output_schema29533 = output_schema29533;
this.constructor29529 = constructor29529;
this.filter_spec = filter_spec;
this.map29531 = map29531;
this.output_checker29536 = output_checker29536;
this.map29532 = map29532;
this.G__29537 = G__29537;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta29605 = meta29605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t29604.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t29604.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t29604";
clustermap.components.filters.tag_filter.t29604.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t29604");
});})(owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536))
;
clustermap.components.filters.tag_filter.t29604.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t29604.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536))
;
clustermap.components.filters.tag_filter.t29604.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t29604.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536))
;
clustermap.components.filters.tag_filter.t29604.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t29604.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536){
return (function (state_29644){var state_val_29645 = (state_29644[(1)]);if((state_val_29645 === (7)))
{var inst_29635 = (state_29644[(2)]);var state_29644__$1 = state_29644;if(cljs.core.truth_(inst_29635))
{var statearr_29646_29677 = state_29644__$1;(statearr_29646_29677[(1)] = (11));
} else
{var statearr_29647_29678 = state_29644__$1;(statearr_29647_29678[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29645 === (1)))
{var state_29644__$1 = state_29644;var statearr_29648_29679 = state_29644__$1;(statearr_29648_29679[(2)] = null);
(statearr_29648_29679[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29645 === (4)))
{var inst_29609 = (state_29644[(7)]);var inst_29609__$1 = (state_29644[(2)]);var state_29644__$1 = (function (){var statearr_29649 = state_29644;(statearr_29649[(7)] = inst_29609__$1);
return statearr_29649;
})();if(cljs.core.truth_(inst_29609__$1))
{var statearr_29650_29680 = state_29644__$1;(statearr_29650_29680[(1)] = (5));
} else
{var statearr_29651_29681 = state_29644__$1;(statearr_29651_29681[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29645 === (13)))
{var inst_29640 = (state_29644[(2)]);var state_29644__$1 = state_29644;var statearr_29652_29682 = state_29644__$1;(statearr_29652_29682[(2)] = inst_29640);
(statearr_29652_29682[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29645 === (6)))
{var state_29644__$1 = state_29644;var statearr_29653_29683 = state_29644__$1;(statearr_29653_29683[(2)] = null);
(statearr_29653_29683[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29645 === (3)))
{var inst_29642 = (state_29644[(2)]);var state_29644__$1 = state_29644;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29644__$1,inst_29642);
} else
{if((state_val_29645 === (12)))
{var state_29644__$1 = state_29644;var statearr_29654_29684 = state_29644__$1;(statearr_29654_29684[(2)] = null);
(statearr_29654_29684[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29645 === (2)))
{var state_29644__$1 = state_29644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29644__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29645 === (11)))
{var state_29644__$1 = state_29644;var statearr_29655_29685 = state_29644__$1;(statearr_29655_29685[(2)] = null);
(statearr_29655_29685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29645 === (9)))
{var inst_29615 = (state_29644[(8)]);var state_29644__$1 = state_29644;var statearr_29656_29686 = state_29644__$1;(statearr_29656_29686[(2)] = inst_29615);
(statearr_29656_29686[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29645 === (5)))
{var inst_29615 = (state_29644[(8)]);var inst_29609 = (state_29644[(7)]);var inst_29612 = cljs.core.nth.call(null,inst_29609,(0),null);var inst_29613 = cljs.core.nth.call(null,inst_29609,(1),null);var inst_29615__$1 = om.core.get_props.call(null,self__.owner);var inst_29616 = cljs.core.seq_QMARK_.call(null,inst_29615__$1);var state_29644__$1 = (function (){var statearr_29657 = state_29644;(statearr_29657[(8)] = inst_29615__$1);
(statearr_29657[(9)] = inst_29613);
(statearr_29657[(10)] = inst_29612);
return statearr_29657;
})();if(inst_29616)
{var statearr_29658_29687 = state_29644__$1;(statearr_29658_29687[(1)] = (8));
} else
{var statearr_29659_29688 = state_29644__$1;(statearr_29659_29688[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29645 === (10)))
{var inst_29613 = (state_29644[(9)]);var inst_29621 = (state_29644[(2)]);var inst_29622 = cljs.core.get.call(null,inst_29621,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29623 = cljs.core.get.call(null,inst_29621,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29624 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29625 = ["TAG-FILTER-RQ",self__.id,inst_29613];var inst_29626 = (new cljs.core.PersistentVector(null,3,(5),inst_29624,inst_29625,null));var inst_29627 = cljs.core.clj__GT_js.call(null,inst_29626);var inst_29628 = console.log(inst_29627);var inst_29629 = cljs.core.deref.call(null,inst_29622);var inst_29630 = cljs.core.deref.call(null,inst_29623);var inst_29631 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_29629,inst_29630,inst_29613);var inst_29632 = om.core.update_BANG_.call(null,inst_29622,inst_29631);var state_29644__$1 = (function (){var statearr_29660 = state_29644;(statearr_29660[(11)] = inst_29632);
(statearr_29660[(12)] = inst_29628);
return statearr_29660;
})();var statearr_29661_29689 = state_29644__$1;(statearr_29661_29689[(2)] = true);
(statearr_29661_29689[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29645 === (8)))
{var inst_29615 = (state_29644[(8)]);var inst_29618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29615);var state_29644__$1 = state_29644;var statearr_29662_29690 = state_29644__$1;(statearr_29662_29690[(2)] = inst_29618);
(statearr_29662_29690[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29666 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29666[(0)] = state_machine__11462__auto__);
(statearr_29666[(1)] = (1));
return statearr_29666;
});
var state_machine__11462__auto____1 = (function (state_29644){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29644);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29667){if((e29667 instanceof Object))
{var ex__11465__auto__ = e29667;var statearr_29668_29691 = state_29644;(statearr_29668_29691[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29644);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29667;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29692 = state_29644;
state_29644 = G__29692;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29644){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536))
})();var state__11519__auto__ = (function (){var statearr_29669 = f__11518__auto__.call(null);(statearr_29669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536))
;
clustermap.components.filters.tag_filter.t29604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536){
return (function (_29606){var self__ = this;
var _29606__$1 = this;return self__.meta29605;
});})(owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536))
;
clustermap.components.filters.tag_filter.t29604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536){
return (function (_29606,meta29605__$1){var self__ = this;
var _29606__$1 = this;return (new clustermap.components.filters.tag_filter.t29604(self__.component_spec,self__.input_schema29534,self__.component_filter_rq_chan,self__.input_checker29535,self__.owner,self__.data,self__.output_schema29533,self__.constructor29529,self__.filter_spec,self__.map29531,self__.output_checker29536,self__.map29532,self__.G__29537,self__.validate__6034__auto__,self__.id,self__.ufv__,meta29605__$1));
});})(owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536))
;
clustermap.components.filters.tag_filter.__GT_t29604 = ((function (owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536){
return (function __GT_t29604(component_spec__$1,input_schema29534__$1,component_filter_rq_chan__$1,input_checker29535__$1,owner__$1,data__$1,output_schema29533__$1,constructor29529__$1,filter_spec__$1,map29531__$1,output_checker29536__$1,map29532__$1,G__29537__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29605){return (new clustermap.components.filters.tag_filter.t29604(component_spec__$1,input_schema29534__$1,component_filter_rq_chan__$1,input_checker29535__$1,owner__$1,data__$1,output_schema29533__$1,constructor29529__$1,filter_spec__$1,map29531__$1,output_checker29536__$1,map29532__$1,G__29537__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29605));
});})(owner,component_filter_rq_chan,map29532,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536))
;
}
return (new clustermap.components.filters.tag_filter.t29604(component_spec,input_schema29534,component_filter_rq_chan,input_checker29535,owner,data,output_schema29533,constructor29529,filter_spec,map29531,output_checker29536,map29532,G__29537,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29693 = output_checker29536.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29693))
{var error__6036__auto___29694 = temp__4126__auto___29693;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29529","constructor29529",-2082747379,null),cljs.core.pr_str.call(null,error__6036__auto___29694)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29694,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29533,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29533,input_schema29534,input_checker29535,output_checker29536))
,schema.core.make_fn_schema.call(null,output_schema29533,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29534], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___29673){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner29528,p__29670){var vec__29672 = p__29670;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29672,(0),null);return component_fnk__7881__auto___29673.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29528,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner29528,var_args){
var p__29670 = null;if (arguments.length > 2) {
  p__29670 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner29528,p__29670);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__29695){
var data__7882__auto__ = cljs.core.first(arglist__29695);
arglist__29695 = cljs.core.next(arglist__29695);
var owner29528 = cljs.core.first(arglist__29695);
var p__29670 = cljs.core.rest(arglist__29695);
return tag_filter_component__delegate(data__7882__auto__,owner29528,p__29670);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___29673))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m29530){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m29530);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m29530){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m29530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
