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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29358_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29358_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__29359,value){var map__29361 = p__29359;var map__29361__$1 = ((cljs.core.seq_QMARK_.call(null,map__29361))?cljs.core.apply.call(null,cljs.core.hash_map,map__29361):map__29361);var component_spec = map__29361__$1;var tags = cljs.core.get.call(null,map__29361__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29361__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__29362,value){var map__29364 = p__29362;var map__29364__$1 = ((cljs.core.seq_QMARK_.call(null,map__29364))?cljs.core.apply.call(null,cljs.core.hash_map,map__29364):map__29364);var component_spec = map__29364__$1;var tags = cljs.core.get.call(null,map__29364__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29364__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29365,value){var map__29367 = p__29365;var map__29367__$1 = ((cljs.core.seq_QMARK_.call(null,map__29367))?cljs.core.apply.call(null,cljs.core.hash_map,map__29367):map__29367);var component_spec = map__29367__$1;var tags = cljs.core.get.call(null,map__29367__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29367__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29368_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29368_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__29369_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29369_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29371 = schema.core.Any;var input_schema29372 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29370","map29370",-1578578464,null))], null);var input_checker29373 = schema.core.checker.call(null,input_schema29372);var output_checker29374 = schema.core.checker.call(null,output_schema29371);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29371,input_schema29372,input_checker29373,output_checker29374){
return (function render_STAR_(G__29375){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29392 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29375], null);var temp__4126__auto___29393 = input_checker29373.call(null,args__6035__auto___29392);if(cljs.core.truth_(temp__4126__auto___29393))
{var error__6036__auto___29394 = temp__4126__auto___29393;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29394)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29394,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29392,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29372,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29370 = G__29375;while(true){
if(cljs.core.map_QMARK_.call(null,map29370))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29370)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29370,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29370,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29371,input_schema29372,input_checker29373,output_checker29374){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29371,input_schema29372,input_checker29373,output_checker29374))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29371,input_schema29372,input_checker29373,output_checker29374){
return (function iter__29384(s__29385){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29371,input_schema29372,input_checker29373,output_checker29374){
return (function (){var s__29385__$1 = s__29385;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29385__$1);if(temp__4126__auto__)
{var s__29385__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29385__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29385__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29387 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29386 = (0);while(true){
if((i__29386 < size__4376__auto__))
{var map__29390 = cljs.core._nth.call(null,c__4375__auto__,i__29386);var map__29390__$1 = ((cljs.core.seq_QMARK_.call(null,map__29390))?cljs.core.apply.call(null,cljs.core.hash_map,map__29390):map__29390);var label__$1 = cljs.core.get.call(null,map__29390__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29390__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29387,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29395 = (i__29386 + (1));
i__29386 = G__29395;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29387),iter__29384.call(null,cljs.core.chunk_rest.call(null,s__29385__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29387),null);
}
} else
{var map__29391 = cljs.core.first.call(null,s__29385__$2);var map__29391__$1 = ((cljs.core.seq_QMARK_.call(null,map__29391))?cljs.core.apply.call(null,cljs.core.hash_map,map__29391):map__29391);var label__$1 = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29391__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29384.call(null,cljs.core.rest.call(null,s__29385__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29371,input_schema29372,input_checker29373,output_checker29374))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29371,input_schema29372,input_checker29373,output_checker29374))
;return iter__4377__auto__.call(null,tags__$1);
})()))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29396 = output_checker29374.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29396))
{var error__6036__auto___29397 = temp__4126__auto___29396;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29397)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29397,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29371,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29371,input_schema29372,input_checker29373,output_checker29374))
,schema.core.make_fn_schema.call(null,output_schema29371,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29372], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29543 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29403 = schema.core.Any;var input_schema29404 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29401","map29401",-452953622,null))], null);var input_checker29405 = schema.core.checker.call(null,input_schema29404);var output_checker29406 = schema.core.checker.call(null,output_schema29403);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function constructor29399(G__29407){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29544 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29407], null);var temp__4126__auto___29545 = input_checker29405.call(null,args__6035__auto___29544);if(cljs.core.truth_(temp__4126__auto___29545))
{var error__6036__auto___29546 = temp__4126__auto___29545;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29399","constructor29399",-1371953417,null),cljs.core.pr_str.call(null,error__6036__auto___29546)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29546,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29544,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29404,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29401 = G__29407;while(true){
if(cljs.core.map_QMARK_.call(null,map29401))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29401)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29401,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29402 = plumbing.fnk.schema.safe_get.call(null,map29401,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29402,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29401,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t29474 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t29474 = (function (component_spec,component_filter_rq_chan,G__29407,owner,data,map29401,output_schema29403,input_checker29405,filter_spec,output_checker29406,constructor29399,validate__6034__auto__,id,map29402,ufv__,input_schema29404,meta29475){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.G__29407 = G__29407;
this.owner = owner;
this.data = data;
this.map29401 = map29401;
this.output_schema29403 = output_schema29403;
this.input_checker29405 = input_checker29405;
this.filter_spec = filter_spec;
this.output_checker29406 = output_checker29406;
this.constructor29399 = constructor29399;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map29402 = map29402;
this.ufv__ = ufv__;
this.input_schema29404 = input_schema29404;
this.meta29475 = meta29475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t29474.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t29474.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t29474";
clustermap.components.filters.tag_filter.t29474.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t29474");
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
clustermap.components.filters.tag_filter.t29474.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t29474.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
clustermap.components.filters.tag_filter.t29474.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t29474.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
clustermap.components.filters.tag_filter.t29474.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t29474.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (state_29514){var state_val_29515 = (state_29514[(1)]);if((state_val_29515 === (7)))
{var inst_29505 = (state_29514[(2)]);var state_29514__$1 = state_29514;if(cljs.core.truth_(inst_29505))
{var statearr_29516_29547 = state_29514__$1;(statearr_29516_29547[(1)] = (11));
} else
{var statearr_29517_29548 = state_29514__$1;(statearr_29517_29548[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (1)))
{var state_29514__$1 = state_29514;var statearr_29518_29549 = state_29514__$1;(statearr_29518_29549[(2)] = null);
(statearr_29518_29549[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (4)))
{var inst_29479 = (state_29514[(7)]);var inst_29479__$1 = (state_29514[(2)]);var state_29514__$1 = (function (){var statearr_29519 = state_29514;(statearr_29519[(7)] = inst_29479__$1);
return statearr_29519;
})();if(cljs.core.truth_(inst_29479__$1))
{var statearr_29520_29550 = state_29514__$1;(statearr_29520_29550[(1)] = (5));
} else
{var statearr_29521_29551 = state_29514__$1;(statearr_29521_29551[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (13)))
{var inst_29510 = (state_29514[(2)]);var state_29514__$1 = state_29514;var statearr_29522_29552 = state_29514__$1;(statearr_29522_29552[(2)] = inst_29510);
(statearr_29522_29552[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (6)))
{var state_29514__$1 = state_29514;var statearr_29523_29553 = state_29514__$1;(statearr_29523_29553[(2)] = null);
(statearr_29523_29553[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (3)))
{var inst_29512 = (state_29514[(2)]);var state_29514__$1 = state_29514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29514__$1,inst_29512);
} else
{if((state_val_29515 === (12)))
{var state_29514__$1 = state_29514;var statearr_29524_29554 = state_29514__$1;(statearr_29524_29554[(2)] = null);
(statearr_29524_29554[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (2)))
{var state_29514__$1 = state_29514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29514__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29515 === (11)))
{var state_29514__$1 = state_29514;var statearr_29525_29555 = state_29514__$1;(statearr_29525_29555[(2)] = null);
(statearr_29525_29555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (9)))
{var inst_29485 = (state_29514[(8)]);var state_29514__$1 = state_29514;var statearr_29526_29556 = state_29514__$1;(statearr_29526_29556[(2)] = inst_29485);
(statearr_29526_29556[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (5)))
{var inst_29479 = (state_29514[(7)]);var inst_29485 = (state_29514[(8)]);var inst_29482 = cljs.core.nth.call(null,inst_29479,(0),null);var inst_29483 = cljs.core.nth.call(null,inst_29479,(1),null);var inst_29485__$1 = om.core.get_props.call(null,self__.owner);var inst_29486 = cljs.core.seq_QMARK_.call(null,inst_29485__$1);var state_29514__$1 = (function (){var statearr_29527 = state_29514;(statearr_29527[(8)] = inst_29485__$1);
(statearr_29527[(9)] = inst_29482);
(statearr_29527[(10)] = inst_29483);
return statearr_29527;
})();if(inst_29486)
{var statearr_29528_29557 = state_29514__$1;(statearr_29528_29557[(1)] = (8));
} else
{var statearr_29529_29558 = state_29514__$1;(statearr_29529_29558[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (10)))
{var inst_29483 = (state_29514[(10)]);var inst_29491 = (state_29514[(2)]);var inst_29492 = cljs.core.get.call(null,inst_29491,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29493 = cljs.core.get.call(null,inst_29491,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29494 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29495 = ["TAG-FILTER-RQ",self__.id,inst_29483];var inst_29496 = (new cljs.core.PersistentVector(null,3,(5),inst_29494,inst_29495,null));var inst_29497 = cljs.core.clj__GT_js.call(null,inst_29496);var inst_29498 = console.log(inst_29497);var inst_29499 = cljs.core.deref.call(null,inst_29492);var inst_29500 = cljs.core.deref.call(null,inst_29493);var inst_29501 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_29499,inst_29500,inst_29483);var inst_29502 = om.core.update_BANG_.call(null,inst_29492,inst_29501);var state_29514__$1 = (function (){var statearr_29530 = state_29514;(statearr_29530[(11)] = inst_29502);
(statearr_29530[(12)] = inst_29498);
return statearr_29530;
})();var statearr_29531_29559 = state_29514__$1;(statearr_29531_29559[(2)] = true);
(statearr_29531_29559[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29515 === (8)))
{var inst_29485 = (state_29514[(8)]);var inst_29488 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29485);var state_29514__$1 = state_29514;var statearr_29532_29560 = state_29514__$1;(statearr_29532_29560[(2)] = inst_29488);
(statearr_29532_29560[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29536 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29536[(0)] = state_machine__11462__auto__);
(statearr_29536[(1)] = (1));
return statearr_29536;
});
var state_machine__11462__auto____1 = (function (state_29514){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29514);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29537){if((e29537 instanceof Object))
{var ex__11465__auto__ = e29537;var statearr_29538_29561 = state_29514;(statearr_29538_29561[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29514);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29537;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29562 = state_29514;
state_29514 = G__29562;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29514){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
})();var state__11519__auto__ = (function (){var statearr_29539 = f__11518__auto__.call(null);(statearr_29539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29539;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
clustermap.components.filters.tag_filter.t29474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (_29476){var self__ = this;
var _29476__$1 = this;return self__.meta29475;
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
clustermap.components.filters.tag_filter.t29474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function (_29476,meta29475__$1){var self__ = this;
var _29476__$1 = this;return (new clustermap.components.filters.tag_filter.t29474(self__.component_spec,self__.component_filter_rq_chan,self__.G__29407,self__.owner,self__.data,self__.map29401,self__.output_schema29403,self__.input_checker29405,self__.filter_spec,self__.output_checker29406,self__.constructor29399,self__.validate__6034__auto__,self__.id,self__.map29402,self__.ufv__,self__.input_schema29404,meta29475__$1));
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
clustermap.components.filters.tag_filter.__GT_t29474 = ((function (owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406){
return (function __GT_t29474(component_spec__$1,component_filter_rq_chan__$1,G__29407__$1,owner__$1,data__$1,map29401__$1,output_schema29403__$1,input_checker29405__$1,filter_spec__$1,output_checker29406__$1,constructor29399__$1,validate__6034__auto____$1,id__$1,map29402__$1,ufv____$1,input_schema29404__$1,meta29475){return (new clustermap.components.filters.tag_filter.t29474(component_spec__$1,component_filter_rq_chan__$1,G__29407__$1,owner__$1,data__$1,map29401__$1,output_schema29403__$1,input_checker29405__$1,filter_spec__$1,output_checker29406__$1,constructor29399__$1,validate__6034__auto____$1,id__$1,map29402__$1,ufv____$1,input_schema29404__$1,meta29475));
});})(owner,component_filter_rq_chan,map29402,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
;
}
return (new clustermap.components.filters.tag_filter.t29474(component_spec,component_filter_rq_chan,G__29407,owner,data,map29401,output_schema29403,input_checker29405,filter_spec,output_checker29406,constructor29399,validate__6034__auto__,id,map29402,ufv__,input_schema29404,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29563 = output_checker29406.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29563))
{var error__6036__auto___29564 = temp__4126__auto___29563;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29399","constructor29399",-1371953417,null),cljs.core.pr_str.call(null,error__6036__auto___29564)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29564,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29403,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29403,input_schema29404,input_checker29405,output_checker29406))
,schema.core.make_fn_schema.call(null,output_schema29403,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29404], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___29543){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner29398,p__29540){var vec__29542 = p__29540;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29542,(0),null);return component_fnk__7881__auto___29543.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29398,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner29398,var_args){
var p__29540 = null;if (arguments.length > 2) {
  p__29540 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner29398,p__29540);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__29565){
var data__7882__auto__ = cljs.core.first(arglist__29565);
arglist__29565 = cljs.core.next(arglist__29565);
var owner29398 = cljs.core.first(arglist__29565);
var p__29540 = cljs.core.rest(arglist__29565);
return tag_filter_component__delegate(data__7882__auto__,owner29398,p__29540);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___29543))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m29400){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m29400);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m29400){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m29400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
