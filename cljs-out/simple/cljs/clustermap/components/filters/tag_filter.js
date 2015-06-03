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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29359_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29359_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__29360,value){var map__29362 = p__29360;var map__29362__$1 = ((cljs.core.seq_QMARK_.call(null,map__29362))?cljs.core.apply.call(null,cljs.core.hash_map,map__29362):map__29362);var component_spec = map__29362__$1;var tags = cljs.core.get.call(null,map__29362__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29362__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__29363,value){var map__29365 = p__29363;var map__29365__$1 = ((cljs.core.seq_QMARK_.call(null,map__29365))?cljs.core.apply.call(null,cljs.core.hash_map,map__29365):map__29365);var component_spec = map__29365__$1;var tags = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29365__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29366,value){var map__29368 = p__29366;var map__29368__$1 = ((cljs.core.seq_QMARK_.call(null,map__29368))?cljs.core.apply.call(null,cljs.core.hash_map,map__29368):map__29368);var component_spec = map__29368__$1;var tags = cljs.core.get.call(null,map__29368__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29368__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29369_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29369_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__29370_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29370_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29372 = schema.core.Any;var input_schema29373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29371","map29371",-1607182080,null))], null);var input_checker29374 = schema.core.checker.call(null,input_schema29373);var output_checker29375 = schema.core.checker.call(null,output_schema29372);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29372,input_schema29373,input_checker29374,output_checker29375){
return (function render_STAR_(G__29376){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29393 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29376], null);var temp__4126__auto___29394 = input_checker29374.call(null,args__6035__auto___29393);if(cljs.core.truth_(temp__4126__auto___29394))
{var error__6036__auto___29395 = temp__4126__auto___29394;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29395)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29395,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29393,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29373,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29371 = G__29376;while(true){
if(cljs.core.map_QMARK_.call(null,map29371))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29371)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29371,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29371,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29372,input_schema29373,input_checker29374,output_checker29375){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29372,input_schema29373,input_checker29374,output_checker29375))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29372,input_schema29373,input_checker29374,output_checker29375){
return (function iter__29385(s__29386){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29372,input_schema29373,input_checker29374,output_checker29375){
return (function (){var s__29386__$1 = s__29386;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29386__$1);if(temp__4126__auto__)
{var s__29386__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29386__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29386__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29388 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29387 = (0);while(true){
if((i__29387 < size__4376__auto__))
{var map__29391 = cljs.core._nth.call(null,c__4375__auto__,i__29387);var map__29391__$1 = ((cljs.core.seq_QMARK_.call(null,map__29391))?cljs.core.apply.call(null,cljs.core.hash_map,map__29391):map__29391);var label__$1 = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29388,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29396 = (i__29387 + (1));
i__29387 = G__29396;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29388),iter__29385.call(null,cljs.core.chunk_rest.call(null,s__29386__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29388),null);
}
} else
{var map__29392 = cljs.core.first.call(null,s__29386__$2);var map__29392__$1 = ((cljs.core.seq_QMARK_.call(null,map__29392))?cljs.core.apply.call(null,cljs.core.hash_map,map__29392):map__29392);var label__$1 = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29385.call(null,cljs.core.rest.call(null,s__29386__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29372,input_schema29373,input_checker29374,output_checker29375))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29372,input_schema29373,input_checker29374,output_checker29375))
;return iter__4377__auto__.call(null,tags__$1);
})()))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29397 = output_checker29375.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29397))
{var error__6036__auto___29398 = temp__4126__auto___29397;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29398)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29398,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29372,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29372,input_schema29373,input_checker29374,output_checker29375))
,schema.core.make_fn_schema.call(null,output_schema29372,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29373], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29544 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29404 = schema.core.Any;var input_schema29405 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29402","map29402",-590293923,null))], null);var input_checker29406 = schema.core.checker.call(null,input_schema29405);var output_checker29407 = schema.core.checker.call(null,output_schema29404);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407){
return (function constructor29400(G__29408){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29408], null);var temp__4126__auto___29546 = input_checker29406.call(null,args__6035__auto___29545);if(cljs.core.truth_(temp__4126__auto___29546))
{var error__6036__auto___29547 = temp__4126__auto___29546;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29400","constructor29400",-886413157,null),cljs.core.pr_str.call(null,error__6036__auto___29547)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29547,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29545,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29405,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29402 = G__29408;while(true){
if(cljs.core.map_QMARK_.call(null,map29402))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29402)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29402,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29403 = plumbing.fnk.schema.safe_get.call(null,map29402,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29403,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29402,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t29475 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t29475 = (function (component_spec,component_filter_rq_chan,output_checker29407,owner,map29403,G__29408,data,input_schema29405,filter_spec,output_schema29404,input_checker29406,validate__6034__auto__,id,constructor29400,map29402,ufv__,meta29476){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_checker29407 = output_checker29407;
this.owner = owner;
this.map29403 = map29403;
this.G__29408 = G__29408;
this.data = data;
this.input_schema29405 = input_schema29405;
this.filter_spec = filter_spec;
this.output_schema29404 = output_schema29404;
this.input_checker29406 = input_checker29406;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.constructor29400 = constructor29400;
this.map29402 = map29402;
this.ufv__ = ufv__;
this.meta29476 = meta29476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t29475.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t29475.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t29475";
clustermap.components.filters.tag_filter.t29475.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t29475");
});})(owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407))
;
clustermap.components.filters.tag_filter.t29475.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t29475.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407))
;
clustermap.components.filters.tag_filter.t29475.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t29475.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407))
;
clustermap.components.filters.tag_filter.t29475.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t29475.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407){
return (function (state_29515){var state_val_29516 = (state_29515[(1)]);if((state_val_29516 === (7)))
{var inst_29506 = (state_29515[(2)]);var state_29515__$1 = state_29515;if(cljs.core.truth_(inst_29506))
{var statearr_29517_29548 = state_29515__$1;(statearr_29517_29548[(1)] = (11));
} else
{var statearr_29518_29549 = state_29515__$1;(statearr_29518_29549[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29516 === (1)))
{var state_29515__$1 = state_29515;var statearr_29519_29550 = state_29515__$1;(statearr_29519_29550[(2)] = null);
(statearr_29519_29550[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29516 === (4)))
{var inst_29480 = (state_29515[(7)]);var inst_29480__$1 = (state_29515[(2)]);var state_29515__$1 = (function (){var statearr_29520 = state_29515;(statearr_29520[(7)] = inst_29480__$1);
return statearr_29520;
})();if(cljs.core.truth_(inst_29480__$1))
{var statearr_29521_29551 = state_29515__$1;(statearr_29521_29551[(1)] = (5));
} else
{var statearr_29522_29552 = state_29515__$1;(statearr_29522_29552[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29516 === (13)))
{var inst_29511 = (state_29515[(2)]);var state_29515__$1 = state_29515;var statearr_29523_29553 = state_29515__$1;(statearr_29523_29553[(2)] = inst_29511);
(statearr_29523_29553[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29516 === (6)))
{var state_29515__$1 = state_29515;var statearr_29524_29554 = state_29515__$1;(statearr_29524_29554[(2)] = null);
(statearr_29524_29554[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29516 === (3)))
{var inst_29513 = (state_29515[(2)]);var state_29515__$1 = state_29515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29515__$1,inst_29513);
} else
{if((state_val_29516 === (12)))
{var state_29515__$1 = state_29515;var statearr_29525_29555 = state_29515__$1;(statearr_29525_29555[(2)] = null);
(statearr_29525_29555[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29516 === (2)))
{var state_29515__$1 = state_29515;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29515__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29516 === (11)))
{var state_29515__$1 = state_29515;var statearr_29526_29556 = state_29515__$1;(statearr_29526_29556[(2)] = null);
(statearr_29526_29556[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29516 === (9)))
{var inst_29486 = (state_29515[(8)]);var state_29515__$1 = state_29515;var statearr_29527_29557 = state_29515__$1;(statearr_29527_29557[(2)] = inst_29486);
(statearr_29527_29557[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29516 === (5)))
{var inst_29486 = (state_29515[(8)]);var inst_29480 = (state_29515[(7)]);var inst_29483 = cljs.core.nth.call(null,inst_29480,(0),null);var inst_29484 = cljs.core.nth.call(null,inst_29480,(1),null);var inst_29486__$1 = om.core.get_props.call(null,self__.owner);var inst_29487 = cljs.core.seq_QMARK_.call(null,inst_29486__$1);var state_29515__$1 = (function (){var statearr_29528 = state_29515;(statearr_29528[(8)] = inst_29486__$1);
(statearr_29528[(9)] = inst_29484);
(statearr_29528[(10)] = inst_29483);
return statearr_29528;
})();if(inst_29487)
{var statearr_29529_29558 = state_29515__$1;(statearr_29529_29558[(1)] = (8));
} else
{var statearr_29530_29559 = state_29515__$1;(statearr_29530_29559[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29516 === (10)))
{var inst_29484 = (state_29515[(9)]);var inst_29492 = (state_29515[(2)]);var inst_29493 = cljs.core.get.call(null,inst_29492,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29494 = cljs.core.get.call(null,inst_29492,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29495 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29496 = ["TAG-FILTER-RQ",self__.id,inst_29484];var inst_29497 = (new cljs.core.PersistentVector(null,3,(5),inst_29495,inst_29496,null));var inst_29498 = cljs.core.clj__GT_js.call(null,inst_29497);var inst_29499 = console.log(inst_29498);var inst_29500 = cljs.core.deref.call(null,inst_29493);var inst_29501 = cljs.core.deref.call(null,inst_29494);var inst_29502 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_29500,inst_29501,inst_29484);var inst_29503 = om.core.update_BANG_.call(null,inst_29493,inst_29502);var state_29515__$1 = (function (){var statearr_29531 = state_29515;(statearr_29531[(11)] = inst_29503);
(statearr_29531[(12)] = inst_29499);
return statearr_29531;
})();var statearr_29532_29560 = state_29515__$1;(statearr_29532_29560[(2)] = true);
(statearr_29532_29560[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29516 === (8)))
{var inst_29486 = (state_29515[(8)]);var inst_29489 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29486);var state_29515__$1 = state_29515;var statearr_29533_29561 = state_29515__$1;(statearr_29533_29561[(2)] = inst_29489);
(statearr_29533_29561[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29537 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29537[(0)] = state_machine__11462__auto__);
(statearr_29537[(1)] = (1));
return statearr_29537;
});
var state_machine__11462__auto____1 = (function (state_29515){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29515);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29538){if((e29538 instanceof Object))
{var ex__11465__auto__ = e29538;var statearr_29539_29562 = state_29515;(statearr_29539_29562[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29515);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29538;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29563 = state_29515;
state_29515 = G__29563;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29515){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407))
})();var state__11519__auto__ = (function (){var statearr_29540 = f__11518__auto__.call(null);(statearr_29540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29540;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407))
;
clustermap.components.filters.tag_filter.t29475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407){
return (function (_29477){var self__ = this;
var _29477__$1 = this;return self__.meta29476;
});})(owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407))
;
clustermap.components.filters.tag_filter.t29475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407){
return (function (_29477,meta29476__$1){var self__ = this;
var _29477__$1 = this;return (new clustermap.components.filters.tag_filter.t29475(self__.component_spec,self__.component_filter_rq_chan,self__.output_checker29407,self__.owner,self__.map29403,self__.G__29408,self__.data,self__.input_schema29405,self__.filter_spec,self__.output_schema29404,self__.input_checker29406,self__.validate__6034__auto__,self__.id,self__.constructor29400,self__.map29402,self__.ufv__,meta29476__$1));
});})(owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407))
;
clustermap.components.filters.tag_filter.__GT_t29475 = ((function (owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407){
return (function __GT_t29475(component_spec__$1,component_filter_rq_chan__$1,output_checker29407__$1,owner__$1,map29403__$1,G__29408__$1,data__$1,input_schema29405__$1,filter_spec__$1,output_schema29404__$1,input_checker29406__$1,validate__6034__auto____$1,id__$1,constructor29400__$1,map29402__$1,ufv____$1,meta29476){return (new clustermap.components.filters.tag_filter.t29475(component_spec__$1,component_filter_rq_chan__$1,output_checker29407__$1,owner__$1,map29403__$1,G__29408__$1,data__$1,input_schema29405__$1,filter_spec__$1,output_schema29404__$1,input_checker29406__$1,validate__6034__auto____$1,id__$1,constructor29400__$1,map29402__$1,ufv____$1,meta29476));
});})(owner,component_filter_rq_chan,map29403,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407))
;
}
return (new clustermap.components.filters.tag_filter.t29475(component_spec,component_filter_rq_chan,output_checker29407,owner,map29403,G__29408,data,input_schema29405,filter_spec,output_schema29404,input_checker29406,validate__6034__auto__,id,constructor29400,map29402,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29564 = output_checker29407.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29564))
{var error__6036__auto___29565 = temp__4126__auto___29564;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29400","constructor29400",-886413157,null),cljs.core.pr_str.call(null,error__6036__auto___29565)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29565,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29404,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29404,input_schema29405,input_checker29406,output_checker29407))
,schema.core.make_fn_schema.call(null,output_schema29404,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29405], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___29544){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner29399,p__29541){var vec__29543 = p__29541;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29543,(0),null);return component_fnk__7881__auto___29544.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29399,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner29399,var_args){
var p__29541 = null;if (arguments.length > 2) {
  p__29541 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner29399,p__29541);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__29566){
var data__7882__auto__ = cljs.core.first(arglist__29566);
arglist__29566 = cljs.core.next(arglist__29566);
var owner29399 = cljs.core.first(arglist__29566);
var p__29541 = cljs.core.rest(arglist__29566);
return tag_filter_component__delegate(data__7882__auto__,owner29399,p__29541);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___29544))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m29401){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m29401);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m29401){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m29401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
