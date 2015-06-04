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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29390_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29390_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__29391,value){var map__29393 = p__29391;var map__29393__$1 = ((cljs.core.seq_QMARK_.call(null,map__29393))?cljs.core.apply.call(null,cljs.core.hash_map,map__29393):map__29393);var component_spec = map__29393__$1;var tags = cljs.core.get.call(null,map__29393__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29393__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__29394,value){var map__29396 = p__29394;var map__29396__$1 = ((cljs.core.seq_QMARK_.call(null,map__29396))?cljs.core.apply.call(null,cljs.core.hash_map,map__29396):map__29396);var component_spec = map__29396__$1;var tags = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29396__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29397,value){var map__29399 = p__29397;var map__29399__$1 = ((cljs.core.seq_QMARK_.call(null,map__29399))?cljs.core.apply.call(null,cljs.core.hash_map,map__29399):map__29399);var component_spec = map__29399__$1;var tags = cljs.core.get.call(null,map__29399__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29399__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29400_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29400_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__29401_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29401_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29403 = schema.core.Any;var input_schema29404 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29402","map29402",-590293923,null))], null);var input_checker29405 = schema.core.checker.call(null,input_schema29404);var output_checker29406 = schema.core.checker.call(null,output_schema29403);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function render_STAR_(G__29407){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29424 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29407], null);var temp__4126__auto___29425 = input_checker29405.call(null,args__6035__auto___29424);if(cljs.core.truth_(temp__4126__auto___29425))
{var error__6036__auto___29426 = temp__4126__auto___29425;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29426)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29426,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29424,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29404,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29402 = G__29407;while(true){
if(cljs.core.map_QMARK_.call(null,map29402))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29402)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29402,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29402,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function iter__29416(s__29417){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (){var s__29417__$1 = s__29417;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29417__$1);if(temp__4126__auto__)
{var s__29417__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29417__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29417__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29419 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29418 = (0);while(true){
if((i__29418 < size__4376__auto__))
{var map__29422 = cljs.core._nth.call(null,c__4375__auto__,i__29418);var map__29422__$1 = ((cljs.core.seq_QMARK_.call(null,map__29422))?cljs.core.apply.call(null,cljs.core.hash_map,map__29422):map__29422);var label__$1 = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29419,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29427 = (i__29418 + (1));
i__29418 = G__29427;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29419),iter__29416.call(null,cljs.core.chunk_rest.call(null,s__29417__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29419),null);
}
} else
{var map__29423 = cljs.core.first.call(null,s__29417__$2);var map__29423__$1 = ((cljs.core.seq_QMARK_.call(null,map__29423))?cljs.core.apply.call(null,cljs.core.hash_map,map__29423):map__29423);var label__$1 = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29423__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29416.call(null,cljs.core.rest.call(null,s__29417__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;return iter__4377__auto__.call(null,tags__$1);
})()))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29428 = output_checker29406.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29428))
{var error__6036__auto___29429 = temp__4126__auto___29428;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29429)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29429,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29403,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
,schema.core.make_fn_schema.call(null,output_schema29403,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29404], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29575 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29435 = schema.core.Any;var input_schema29436 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29433","map29433",502363628,null))], null);var input_checker29437 = schema.core.checker.call(null,input_schema29436);var output_checker29438 = schema.core.checker.call(null,output_schema29435);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438){
return (function constructor29431(G__29439){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29439], null);var temp__4126__auto___29577 = input_checker29437.call(null,args__6035__auto___29576);if(cljs.core.truth_(temp__4126__auto___29577))
{var error__6036__auto___29578 = temp__4126__auto___29577;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29431","constructor29431",-1154762877,null),cljs.core.pr_str.call(null,error__6036__auto___29578)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29578,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29576,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29436,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29433 = G__29439;while(true){
if(cljs.core.map_QMARK_.call(null,map29433))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29433)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29433,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29434 = plumbing.fnk.schema.safe_get.call(null,map29433,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29434,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29433,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t29506 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t29506 = (function (component_spec,component_filter_rq_chan,G__29439,constructor29431,owner,output_schema29435,data,output_checker29438,map29434,map29433,input_checker29437,filter_spec,input_schema29436,validate__6034__auto__,id,ufv__,meta29507){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.G__29439 = G__29439;
this.constructor29431 = constructor29431;
this.owner = owner;
this.output_schema29435 = output_schema29435;
this.data = data;
this.output_checker29438 = output_checker29438;
this.map29434 = map29434;
this.map29433 = map29433;
this.input_checker29437 = input_checker29437;
this.filter_spec = filter_spec;
this.input_schema29436 = input_schema29436;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta29507 = meta29507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t29506.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t29506.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t29506";
clustermap.components.filters.tag_filter.t29506.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t29506");
});})(owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438))
;
clustermap.components.filters.tag_filter.t29506.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t29506.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438))
;
clustermap.components.filters.tag_filter.t29506.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t29506.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438))
;
clustermap.components.filters.tag_filter.t29506.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t29506.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438){
return (function (state_29546){var state_val_29547 = (state_29546[(1)]);if((state_val_29547 === (7)))
{var inst_29537 = (state_29546[(2)]);var state_29546__$1 = state_29546;if(cljs.core.truth_(inst_29537))
{var statearr_29548_29579 = state_29546__$1;(statearr_29548_29579[(1)] = (11));
} else
{var statearr_29549_29580 = state_29546__$1;(statearr_29549_29580[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29547 === (1)))
{var state_29546__$1 = state_29546;var statearr_29550_29581 = state_29546__$1;(statearr_29550_29581[(2)] = null);
(statearr_29550_29581[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29547 === (4)))
{var inst_29511 = (state_29546[(7)]);var inst_29511__$1 = (state_29546[(2)]);var state_29546__$1 = (function (){var statearr_29551 = state_29546;(statearr_29551[(7)] = inst_29511__$1);
return statearr_29551;
})();if(cljs.core.truth_(inst_29511__$1))
{var statearr_29552_29582 = state_29546__$1;(statearr_29552_29582[(1)] = (5));
} else
{var statearr_29553_29583 = state_29546__$1;(statearr_29553_29583[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29547 === (13)))
{var inst_29542 = (state_29546[(2)]);var state_29546__$1 = state_29546;var statearr_29554_29584 = state_29546__$1;(statearr_29554_29584[(2)] = inst_29542);
(statearr_29554_29584[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29547 === (6)))
{var state_29546__$1 = state_29546;var statearr_29555_29585 = state_29546__$1;(statearr_29555_29585[(2)] = null);
(statearr_29555_29585[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29547 === (3)))
{var inst_29544 = (state_29546[(2)]);var state_29546__$1 = state_29546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29546__$1,inst_29544);
} else
{if((state_val_29547 === (12)))
{var state_29546__$1 = state_29546;var statearr_29556_29586 = state_29546__$1;(statearr_29556_29586[(2)] = null);
(statearr_29556_29586[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29547 === (2)))
{var state_29546__$1 = state_29546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29546__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29547 === (11)))
{var state_29546__$1 = state_29546;var statearr_29557_29587 = state_29546__$1;(statearr_29557_29587[(2)] = null);
(statearr_29557_29587[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29547 === (9)))
{var inst_29517 = (state_29546[(8)]);var state_29546__$1 = state_29546;var statearr_29558_29588 = state_29546__$1;(statearr_29558_29588[(2)] = inst_29517);
(statearr_29558_29588[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29547 === (5)))
{var inst_29511 = (state_29546[(7)]);var inst_29517 = (state_29546[(8)]);var inst_29514 = cljs.core.nth.call(null,inst_29511,(0),null);var inst_29515 = cljs.core.nth.call(null,inst_29511,(1),null);var inst_29517__$1 = om.core.get_props.call(null,self__.owner);var inst_29518 = cljs.core.seq_QMARK_.call(null,inst_29517__$1);var state_29546__$1 = (function (){var statearr_29559 = state_29546;(statearr_29559[(8)] = inst_29517__$1);
(statearr_29559[(9)] = inst_29515);
(statearr_29559[(10)] = inst_29514);
return statearr_29559;
})();if(inst_29518)
{var statearr_29560_29589 = state_29546__$1;(statearr_29560_29589[(1)] = (8));
} else
{var statearr_29561_29590 = state_29546__$1;(statearr_29561_29590[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29547 === (10)))
{var inst_29515 = (state_29546[(9)]);var inst_29523 = (state_29546[(2)]);var inst_29524 = cljs.core.get.call(null,inst_29523,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29525 = cljs.core.get.call(null,inst_29523,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29526 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29527 = ["TAG-FILTER-RQ",self__.id,inst_29515];var inst_29528 = (new cljs.core.PersistentVector(null,3,(5),inst_29526,inst_29527,null));var inst_29529 = cljs.core.clj__GT_js.call(null,inst_29528);var inst_29530 = console.log(inst_29529);var inst_29531 = cljs.core.deref.call(null,inst_29524);var inst_29532 = cljs.core.deref.call(null,inst_29525);var inst_29533 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_29531,inst_29532,inst_29515);var inst_29534 = om.core.update_BANG_.call(null,inst_29524,inst_29533);var state_29546__$1 = (function (){var statearr_29562 = state_29546;(statearr_29562[(11)] = inst_29530);
(statearr_29562[(12)] = inst_29534);
return statearr_29562;
})();var statearr_29563_29591 = state_29546__$1;(statearr_29563_29591[(2)] = true);
(statearr_29563_29591[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29547 === (8)))
{var inst_29517 = (state_29546[(8)]);var inst_29520 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29517);var state_29546__$1 = state_29546;var statearr_29564_29592 = state_29546__$1;(statearr_29564_29592[(2)] = inst_29520);
(statearr_29564_29592[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29568 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29568[(0)] = state_machine__11462__auto__);
(statearr_29568[(1)] = (1));
return statearr_29568;
});
var state_machine__11462__auto____1 = (function (state_29546){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29546);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29569){if((e29569 instanceof Object))
{var ex__11465__auto__ = e29569;var statearr_29570_29593 = state_29546;(statearr_29570_29593[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29546);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29569;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29594 = state_29546;
state_29546 = G__29594;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29546){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438))
})();var state__11519__auto__ = (function (){var statearr_29571 = f__11518__auto__.call(null);(statearr_29571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438))
;
clustermap.components.filters.tag_filter.t29506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438){
return (function (_29508){var self__ = this;
var _29508__$1 = this;return self__.meta29507;
});})(owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438))
;
clustermap.components.filters.tag_filter.t29506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438){
return (function (_29508,meta29507__$1){var self__ = this;
var _29508__$1 = this;return (new clustermap.components.filters.tag_filter.t29506(self__.component_spec,self__.component_filter_rq_chan,self__.G__29439,self__.constructor29431,self__.owner,self__.output_schema29435,self__.data,self__.output_checker29438,self__.map29434,self__.map29433,self__.input_checker29437,self__.filter_spec,self__.input_schema29436,self__.validate__6034__auto__,self__.id,self__.ufv__,meta29507__$1));
});})(owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438))
;
clustermap.components.filters.tag_filter.__GT_t29506 = ((function (owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438){
return (function __GT_t29506(component_spec__$1,component_filter_rq_chan__$1,G__29439__$1,constructor29431__$1,owner__$1,output_schema29435__$1,data__$1,output_checker29438__$1,map29434__$1,map29433__$1,input_checker29437__$1,filter_spec__$1,input_schema29436__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29507){return (new clustermap.components.filters.tag_filter.t29506(component_spec__$1,component_filter_rq_chan__$1,G__29439__$1,constructor29431__$1,owner__$1,output_schema29435__$1,data__$1,output_checker29438__$1,map29434__$1,map29433__$1,input_checker29437__$1,filter_spec__$1,input_schema29436__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29507));
});})(owner,component_filter_rq_chan,map29434,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438))
;
}
return (new clustermap.components.filters.tag_filter.t29506(component_spec,component_filter_rq_chan,G__29439,constructor29431,owner,output_schema29435,data,output_checker29438,map29434,map29433,input_checker29437,filter_spec,input_schema29436,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29595 = output_checker29438.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29595))
{var error__6036__auto___29596 = temp__4126__auto___29595;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29431","constructor29431",-1154762877,null),cljs.core.pr_str.call(null,error__6036__auto___29596)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29596,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29435,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29435,input_schema29436,input_checker29437,output_checker29438))
,schema.core.make_fn_schema.call(null,output_schema29435,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29436], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___29575){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner29430,p__29572){var vec__29574 = p__29572;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29574,(0),null);return component_fnk__7881__auto___29575.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29430,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner29430,var_args){
var p__29572 = null;if (arguments.length > 2) {
  p__29572 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner29430,p__29572);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__29597){
var data__7882__auto__ = cljs.core.first(arglist__29597);
arglist__29597 = cljs.core.next(arglist__29597);
var owner29430 = cljs.core.first(arglist__29597);
var p__29572 = cljs.core.rest(arglist__29597);
return tag_filter_component__delegate(data__7882__auto__,owner29430,p__29572);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___29575))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m29432){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m29432);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m29432){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m29432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
