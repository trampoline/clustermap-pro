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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29361_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29361_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__29362,value){var map__29364 = p__29362;var map__29364__$1 = ((cljs.core.seq_QMARK_.call(null,map__29364))?cljs.core.apply.call(null,cljs.core.hash_map,map__29364):map__29364);var component_spec = map__29364__$1;var tags = cljs.core.get.call(null,map__29364__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29364__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__29365,value){var map__29367 = p__29365;var map__29367__$1 = ((cljs.core.seq_QMARK_.call(null,map__29367))?cljs.core.apply.call(null,cljs.core.hash_map,map__29367):map__29367);var component_spec = map__29367__$1;var tags = cljs.core.get.call(null,map__29367__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29367__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29368,value){var map__29370 = p__29368;var map__29370__$1 = ((cljs.core.seq_QMARK_.call(null,map__29370))?cljs.core.apply.call(null,cljs.core.hash_map,map__29370):map__29370);var component_spec = map__29370__$1;var tags = cljs.core.get.call(null,map__29370__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29370__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29371_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29371_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__29372_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29372_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29374 = schema.core.Any;var input_schema29375 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29373","map29373",1594362671,null))], null);var input_checker29376 = schema.core.checker.call(null,input_schema29375);var output_checker29377 = schema.core.checker.call(null,output_schema29374);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29374,input_schema29375,input_checker29376,output_checker29377){
return (function render_STAR_(G__29378){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29378], null);var temp__4126__auto___29396 = input_checker29376.call(null,args__6035__auto___29395);if(cljs.core.truth_(temp__4126__auto___29396))
{var error__6036__auto___29397 = temp__4126__auto___29396;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29397)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29397,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29395,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29375,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29373 = G__29378;while(true){
if(cljs.core.map_QMARK_.call(null,map29373))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29373)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29373,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29373,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29374,input_schema29375,input_checker29376,output_checker29377){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29374,input_schema29375,input_checker29376,output_checker29377))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29374,input_schema29375,input_checker29376,output_checker29377){
return (function iter__29387(s__29388){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29374,input_schema29375,input_checker29376,output_checker29377){
return (function (){var s__29388__$1 = s__29388;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29388__$1);if(temp__4126__auto__)
{var s__29388__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29388__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29388__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29390 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29389 = (0);while(true){
if((i__29389 < size__4376__auto__))
{var map__29393 = cljs.core._nth.call(null,c__4375__auto__,i__29389);var map__29393__$1 = ((cljs.core.seq_QMARK_.call(null,map__29393))?cljs.core.apply.call(null,cljs.core.hash_map,map__29393):map__29393);var label__$1 = cljs.core.get.call(null,map__29393__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29393__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29390,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29398 = (i__29389 + (1));
i__29389 = G__29398;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29390),iter__29387.call(null,cljs.core.chunk_rest.call(null,s__29388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29390),null);
}
} else
{var map__29394 = cljs.core.first.call(null,s__29388__$2);var map__29394__$1 = ((cljs.core.seq_QMARK_.call(null,map__29394))?cljs.core.apply.call(null,cljs.core.hash_map,map__29394):map__29394);var label__$1 = cljs.core.get.call(null,map__29394__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29394__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29387.call(null,cljs.core.rest.call(null,s__29388__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29374,input_schema29375,input_checker29376,output_checker29377))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29374,input_schema29375,input_checker29376,output_checker29377))
;return iter__4377__auto__.call(null,tags__$1);
})()))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29399 = output_checker29377.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29399))
{var error__6036__auto___29400 = temp__4126__auto___29399;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29400)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29400,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29374,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29374,input_schema29375,input_checker29376,output_checker29377))
,schema.core.make_fn_schema.call(null,output_schema29374,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29375], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29546 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29406 = schema.core.Any;var input_schema29407 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29404","map29404",1001291740,null))], null);var input_checker29408 = schema.core.checker.call(null,input_schema29407);var output_checker29409 = schema.core.checker.call(null,output_schema29406);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409){
return (function constructor29402(G__29410){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29410], null);var temp__4126__auto___29548 = input_checker29408.call(null,args__6035__auto___29547);if(cljs.core.truth_(temp__4126__auto___29548))
{var error__6036__auto___29549 = temp__4126__auto___29548;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29402","constructor29402",149246355,null),cljs.core.pr_str.call(null,error__6036__auto___29549)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29549,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29547,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29407,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29404 = G__29410;while(true){
if(cljs.core.map_QMARK_.call(null,map29404))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29404)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29404,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29405 = plumbing.fnk.schema.safe_get.call(null,map29404,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29405,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29404,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t29477 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t29477 = (function (component_spec,component_filter_rq_chan,input_checker29408,owner,data,input_schema29407,map29405,filter_spec,G__29410,constructor29402,output_schema29406,validate__6034__auto__,id,output_checker29409,map29404,ufv__,meta29478){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_checker29408 = input_checker29408;
this.owner = owner;
this.data = data;
this.input_schema29407 = input_schema29407;
this.map29405 = map29405;
this.filter_spec = filter_spec;
this.G__29410 = G__29410;
this.constructor29402 = constructor29402;
this.output_schema29406 = output_schema29406;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_checker29409 = output_checker29409;
this.map29404 = map29404;
this.ufv__ = ufv__;
this.meta29478 = meta29478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t29477.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t29477.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t29477";
clustermap.components.filters.tag_filter.t29477.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t29477");
});})(owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409))
;
clustermap.components.filters.tag_filter.t29477.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t29477.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409))
;
clustermap.components.filters.tag_filter.t29477.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t29477.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409))
;
clustermap.components.filters.tag_filter.t29477.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t29477.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409){
return (function (_){var self__ = this;
var ___$1 = this;var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409){
return (function (state_29517){var state_val_29518 = (state_29517[(1)]);if((state_val_29518 === (7)))
{var inst_29508 = (state_29517[(2)]);var state_29517__$1 = state_29517;if(cljs.core.truth_(inst_29508))
{var statearr_29519_29550 = state_29517__$1;(statearr_29519_29550[(1)] = (11));
} else
{var statearr_29520_29551 = state_29517__$1;(statearr_29520_29551[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29518 === (1)))
{var state_29517__$1 = state_29517;var statearr_29521_29552 = state_29517__$1;(statearr_29521_29552[(2)] = null);
(statearr_29521_29552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29518 === (4)))
{var inst_29482 = (state_29517[(7)]);var inst_29482__$1 = (state_29517[(2)]);var state_29517__$1 = (function (){var statearr_29522 = state_29517;(statearr_29522[(7)] = inst_29482__$1);
return statearr_29522;
})();if(cljs.core.truth_(inst_29482__$1))
{var statearr_29523_29553 = state_29517__$1;(statearr_29523_29553[(1)] = (5));
} else
{var statearr_29524_29554 = state_29517__$1;(statearr_29524_29554[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29518 === (13)))
{var inst_29513 = (state_29517[(2)]);var state_29517__$1 = state_29517;var statearr_29525_29555 = state_29517__$1;(statearr_29525_29555[(2)] = inst_29513);
(statearr_29525_29555[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29518 === (6)))
{var state_29517__$1 = state_29517;var statearr_29526_29556 = state_29517__$1;(statearr_29526_29556[(2)] = null);
(statearr_29526_29556[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29518 === (3)))
{var inst_29515 = (state_29517[(2)]);var state_29517__$1 = state_29517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29517__$1,inst_29515);
} else
{if((state_val_29518 === (12)))
{var state_29517__$1 = state_29517;var statearr_29527_29557 = state_29517__$1;(statearr_29527_29557[(2)] = null);
(statearr_29527_29557[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29518 === (2)))
{var state_29517__$1 = state_29517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29517__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29518 === (11)))
{var state_29517__$1 = state_29517;var statearr_29528_29558 = state_29517__$1;(statearr_29528_29558[(2)] = null);
(statearr_29528_29558[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29518 === (9)))
{var inst_29488 = (state_29517[(8)]);var state_29517__$1 = state_29517;var statearr_29529_29559 = state_29517__$1;(statearr_29529_29559[(2)] = inst_29488);
(statearr_29529_29559[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29518 === (5)))
{var inst_29488 = (state_29517[(8)]);var inst_29482 = (state_29517[(7)]);var inst_29485 = cljs.core.nth.call(null,inst_29482,(0),null);var inst_29486 = cljs.core.nth.call(null,inst_29482,(1),null);var inst_29488__$1 = om.core.get_props.call(null,self__.owner);var inst_29489 = cljs.core.seq_QMARK_.call(null,inst_29488__$1);var state_29517__$1 = (function (){var statearr_29530 = state_29517;(statearr_29530[(9)] = inst_29486);
(statearr_29530[(8)] = inst_29488__$1);
(statearr_29530[(10)] = inst_29485);
return statearr_29530;
})();if(inst_29489)
{var statearr_29531_29560 = state_29517__$1;(statearr_29531_29560[(1)] = (8));
} else
{var statearr_29532_29561 = state_29517__$1;(statearr_29532_29561[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29518 === (10)))
{var inst_29486 = (state_29517[(9)]);var inst_29494 = (state_29517[(2)]);var inst_29495 = cljs.core.get.call(null,inst_29494,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29496 = cljs.core.get.call(null,inst_29494,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29497 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29498 = ["TAG-FILTER-RQ",self__.id,inst_29486];var inst_29499 = (new cljs.core.PersistentVector(null,3,(5),inst_29497,inst_29498,null));var inst_29500 = cljs.core.clj__GT_js.call(null,inst_29499);var inst_29501 = console.log(inst_29500);var inst_29502 = cljs.core.deref.call(null,inst_29495);var inst_29503 = cljs.core.deref.call(null,inst_29496);var inst_29504 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_29502,inst_29503,inst_29486);var inst_29505 = om.core.update_BANG_.call(null,inst_29495,inst_29504);var state_29517__$1 = (function (){var statearr_29533 = state_29517;(statearr_29533[(11)] = inst_29505);
(statearr_29533[(12)] = inst_29501);
return statearr_29533;
})();var statearr_29534_29562 = state_29517__$1;(statearr_29534_29562[(2)] = true);
(statearr_29534_29562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29518 === (8)))
{var inst_29488 = (state_29517[(8)]);var inst_29491 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29488);var state_29517__$1 = state_29517;var statearr_29535_29563 = state_29517__$1;(statearr_29535_29563[(2)] = inst_29491);
(statearr_29535_29563[(1)] = (10));
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
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409))
;return ((function (switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_29539 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29539[(0)] = state_machine__11242__auto__);
(statearr_29539[(1)] = (1));
return statearr_29539;
});
var state_machine__11242__auto____1 = (function (state_29517){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_29517);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e29540){if((e29540 instanceof Object))
{var ex__11245__auto__ = e29540;var statearr_29541_29564 = state_29517;(statearr_29541_29564[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29517);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29540;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29565 = state_29517;
state_29517 = G__29565;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_29517){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_29517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409))
})();var state__11299__auto__ = (function (){var statearr_29542 = f__11298__auto__.call(null);(statearr_29542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_29542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409))
);
return c__11297__auto__;
});})(owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409))
;
clustermap.components.filters.tag_filter.t29477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409){
return (function (_29479){var self__ = this;
var _29479__$1 = this;return self__.meta29478;
});})(owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409))
;
clustermap.components.filters.tag_filter.t29477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409){
return (function (_29479,meta29478__$1){var self__ = this;
var _29479__$1 = this;return (new clustermap.components.filters.tag_filter.t29477(self__.component_spec,self__.component_filter_rq_chan,self__.input_checker29408,self__.owner,self__.data,self__.input_schema29407,self__.map29405,self__.filter_spec,self__.G__29410,self__.constructor29402,self__.output_schema29406,self__.validate__6034__auto__,self__.id,self__.output_checker29409,self__.map29404,self__.ufv__,meta29478__$1));
});})(owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409))
;
clustermap.components.filters.tag_filter.__GT_t29477 = ((function (owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409){
return (function __GT_t29477(component_spec__$1,component_filter_rq_chan__$1,input_checker29408__$1,owner__$1,data__$1,input_schema29407__$1,map29405__$1,filter_spec__$1,G__29410__$1,constructor29402__$1,output_schema29406__$1,validate__6034__auto____$1,id__$1,output_checker29409__$1,map29404__$1,ufv____$1,meta29478){return (new clustermap.components.filters.tag_filter.t29477(component_spec__$1,component_filter_rq_chan__$1,input_checker29408__$1,owner__$1,data__$1,input_schema29407__$1,map29405__$1,filter_spec__$1,G__29410__$1,constructor29402__$1,output_schema29406__$1,validate__6034__auto____$1,id__$1,output_checker29409__$1,map29404__$1,ufv____$1,meta29478));
});})(owner,component_filter_rq_chan,map29405,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409))
;
}
return (new clustermap.components.filters.tag_filter.t29477(component_spec,component_filter_rq_chan,input_checker29408,owner,data,input_schema29407,map29405,filter_spec,G__29410,constructor29402,output_schema29406,validate__6034__auto__,id,output_checker29409,map29404,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29566 = output_checker29409.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29566))
{var error__6036__auto___29567 = temp__4126__auto___29566;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29402","constructor29402",149246355,null),cljs.core.pr_str.call(null,error__6036__auto___29567)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29567,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29406,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29406,input_schema29407,input_checker29408,output_checker29409))
,schema.core.make_fn_schema.call(null,output_schema29406,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29407], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___29546){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner29401,p__29543){var vec__29545 = p__29543;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29545,(0),null);return component_fnk__7881__auto___29546.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29401,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner29401,var_args){
var p__29543 = null;if (arguments.length > 2) {
  p__29543 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner29401,p__29543);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__29568){
var data__7882__auto__ = cljs.core.first(arglist__29568);
arglist__29568 = cljs.core.next(arglist__29568);
var owner29401 = cljs.core.first(arglist__29568);
var p__29543 = cljs.core.rest(arglist__29568);
return tag_filter_component__delegate(data__7882__auto__,owner29401,p__29543);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___29546))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m29403){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m29403);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m29403){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m29403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
