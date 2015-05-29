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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29430_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29430_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__29431,value){var map__29433 = p__29431;var map__29433__$1 = ((cljs.core.seq_QMARK_.call(null,map__29433))?cljs.core.apply.call(null,cljs.core.hash_map,map__29433):map__29433);var component_spec = map__29433__$1;var tags = cljs.core.get.call(null,map__29433__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29433__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__29434,value){var map__29436 = p__29434;var map__29436__$1 = ((cljs.core.seq_QMARK_.call(null,map__29436))?cljs.core.apply.call(null,cljs.core.hash_map,map__29436):map__29436);var component_spec = map__29436__$1;var tags = cljs.core.get.call(null,map__29436__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29436__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29437,value){var map__29439 = p__29437;var map__29439__$1 = ((cljs.core.seq_QMARK_.call(null,map__29439))?cljs.core.apply.call(null,cljs.core.hash_map,map__29439):map__29439);var component_spec = map__29439__$1;var tags = cljs.core.get.call(null,map__29439__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29439__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29440_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29440_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__29441_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29441_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29443 = schema.core.Any;var input_schema29444 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29442","map29442",445652851,null))], null);var input_checker29445 = schema.core.checker.call(null,input_schema29444);var output_checker29446 = schema.core.checker.call(null,output_schema29443);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29443,input_schema29444,input_checker29445,output_checker29446){
return (function render_STAR_(G__29447){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29464 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29447], null);var temp__4126__auto___29465 = input_checker29445.call(null,args__6035__auto___29464);if(cljs.core.truth_(temp__4126__auto___29465))
{var error__6036__auto___29466 = temp__4126__auto___29465;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29466)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29466,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29464,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29444,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29442 = G__29447;while(true){
if(cljs.core.map_QMARK_.call(null,map29442))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29442)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29442,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29442,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29443,input_schema29444,input_checker29445,output_checker29446){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29443,input_schema29444,input_checker29445,output_checker29446))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29443,input_schema29444,input_checker29445,output_checker29446){
return (function iter__29456(s__29457){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29443,input_schema29444,input_checker29445,output_checker29446){
return (function (){var s__29457__$1 = s__29457;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29457__$1);if(temp__4126__auto__)
{var s__29457__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29457__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29457__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29459 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29458 = (0);while(true){
if((i__29458 < size__4376__auto__))
{var map__29462 = cljs.core._nth.call(null,c__4375__auto__,i__29458);var map__29462__$1 = ((cljs.core.seq_QMARK_.call(null,map__29462))?cljs.core.apply.call(null,cljs.core.hash_map,map__29462):map__29462);var label__$1 = cljs.core.get.call(null,map__29462__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29462__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29459,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29467 = (i__29458 + (1));
i__29458 = G__29467;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29459),iter__29456.call(null,cljs.core.chunk_rest.call(null,s__29457__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29459),null);
}
} else
{var map__29463 = cljs.core.first.call(null,s__29457__$2);var map__29463__$1 = ((cljs.core.seq_QMARK_.call(null,map__29463))?cljs.core.apply.call(null,cljs.core.hash_map,map__29463):map__29463);var label__$1 = cljs.core.get.call(null,map__29463__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29463__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29456.call(null,cljs.core.rest.call(null,s__29457__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29443,input_schema29444,input_checker29445,output_checker29446))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29443,input_schema29444,input_checker29445,output_checker29446))
;return iter__4377__auto__.call(null,tags__$1);
})()))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29468 = output_checker29446.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29468))
{var error__6036__auto___29469 = temp__4126__auto___29468;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29469)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29469,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29443,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29443,input_schema29444,input_checker29445,output_checker29446))
,schema.core.make_fn_schema.call(null,output_schema29443,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29444], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29615 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29475 = schema.core.Any;var input_schema29476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29473","map29473",641519429,null))], null);var input_checker29477 = schema.core.checker.call(null,input_schema29476);var output_checker29478 = schema.core.checker.call(null,output_schema29475);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478){
return (function constructor29471(G__29479){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29616 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29479], null);var temp__4126__auto___29617 = input_checker29477.call(null,args__6035__auto___29616);if(cljs.core.truth_(temp__4126__auto___29617))
{var error__6036__auto___29618 = temp__4126__auto___29617;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29471","constructor29471",-1649685504,null),cljs.core.pr_str.call(null,error__6036__auto___29618)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29618,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29616,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29476,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29473 = G__29479;while(true){
if(cljs.core.map_QMARK_.call(null,map29473))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29473)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29473,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29474 = plumbing.fnk.schema.safe_get.call(null,map29473,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29474,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29473,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t29546 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t29546 = (function (constructor29471,component_spec,component_filter_rq_chan,map29474,owner,map29473,data,output_checker29478,G__29479,filter_spec,input_schema29476,output_schema29475,validate__6034__auto__,id,ufv__,input_checker29477,meta29547){
this.constructor29471 = constructor29471;
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map29474 = map29474;
this.owner = owner;
this.map29473 = map29473;
this.data = data;
this.output_checker29478 = output_checker29478;
this.G__29479 = G__29479;
this.filter_spec = filter_spec;
this.input_schema29476 = input_schema29476;
this.output_schema29475 = output_schema29475;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.input_checker29477 = input_checker29477;
this.meta29547 = meta29547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t29546.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t29546.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t29546";
clustermap.components.filters.tag_filter.t29546.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t29546");
});})(owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478))
;
clustermap.components.filters.tag_filter.t29546.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t29546.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478))
;
clustermap.components.filters.tag_filter.t29546.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t29546.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478))
;
clustermap.components.filters.tag_filter.t29546.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t29546.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478){
return (function (_){var self__ = this;
var ___$1 = this;var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478){
return (function (state_29586){var state_val_29587 = (state_29586[(1)]);if((state_val_29587 === (7)))
{var inst_29577 = (state_29586[(2)]);var state_29586__$1 = state_29586;if(cljs.core.truth_(inst_29577))
{var statearr_29588_29619 = state_29586__$1;(statearr_29588_29619[(1)] = (11));
} else
{var statearr_29589_29620 = state_29586__$1;(statearr_29589_29620[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29587 === (1)))
{var state_29586__$1 = state_29586;var statearr_29590_29621 = state_29586__$1;(statearr_29590_29621[(2)] = null);
(statearr_29590_29621[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29587 === (4)))
{var inst_29551 = (state_29586[(7)]);var inst_29551__$1 = (state_29586[(2)]);var state_29586__$1 = (function (){var statearr_29591 = state_29586;(statearr_29591[(7)] = inst_29551__$1);
return statearr_29591;
})();if(cljs.core.truth_(inst_29551__$1))
{var statearr_29592_29622 = state_29586__$1;(statearr_29592_29622[(1)] = (5));
} else
{var statearr_29593_29623 = state_29586__$1;(statearr_29593_29623[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29587 === (13)))
{var inst_29582 = (state_29586[(2)]);var state_29586__$1 = state_29586;var statearr_29594_29624 = state_29586__$1;(statearr_29594_29624[(2)] = inst_29582);
(statearr_29594_29624[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29587 === (6)))
{var state_29586__$1 = state_29586;var statearr_29595_29625 = state_29586__$1;(statearr_29595_29625[(2)] = null);
(statearr_29595_29625[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29587 === (3)))
{var inst_29584 = (state_29586[(2)]);var state_29586__$1 = state_29586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29586__$1,inst_29584);
} else
{if((state_val_29587 === (12)))
{var state_29586__$1 = state_29586;var statearr_29596_29626 = state_29586__$1;(statearr_29596_29626[(2)] = null);
(statearr_29596_29626[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29587 === (2)))
{var state_29586__$1 = state_29586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29586__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29587 === (11)))
{var state_29586__$1 = state_29586;var statearr_29597_29627 = state_29586__$1;(statearr_29597_29627[(2)] = null);
(statearr_29597_29627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29587 === (9)))
{var inst_29557 = (state_29586[(8)]);var state_29586__$1 = state_29586;var statearr_29598_29628 = state_29586__$1;(statearr_29598_29628[(2)] = inst_29557);
(statearr_29598_29628[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29587 === (5)))
{var inst_29551 = (state_29586[(7)]);var inst_29557 = (state_29586[(8)]);var inst_29554 = cljs.core.nth.call(null,inst_29551,(0),null);var inst_29555 = cljs.core.nth.call(null,inst_29551,(1),null);var inst_29557__$1 = om.core.get_props.call(null,self__.owner);var inst_29558 = cljs.core.seq_QMARK_.call(null,inst_29557__$1);var state_29586__$1 = (function (){var statearr_29599 = state_29586;(statearr_29599[(9)] = inst_29554);
(statearr_29599[(8)] = inst_29557__$1);
(statearr_29599[(10)] = inst_29555);
return statearr_29599;
})();if(inst_29558)
{var statearr_29600_29629 = state_29586__$1;(statearr_29600_29629[(1)] = (8));
} else
{var statearr_29601_29630 = state_29586__$1;(statearr_29601_29630[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29587 === (10)))
{var inst_29555 = (state_29586[(10)]);var inst_29563 = (state_29586[(2)]);var inst_29564 = cljs.core.get.call(null,inst_29563,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29565 = cljs.core.get.call(null,inst_29563,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29566 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29567 = ["TAG-FILTER-RQ",self__.id,inst_29555];var inst_29568 = (new cljs.core.PersistentVector(null,3,(5),inst_29566,inst_29567,null));var inst_29569 = cljs.core.clj__GT_js.call(null,inst_29568);var inst_29570 = console.log(inst_29569);var inst_29571 = cljs.core.deref.call(null,inst_29564);var inst_29572 = cljs.core.deref.call(null,inst_29565);var inst_29573 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_29571,inst_29572,inst_29555);var inst_29574 = om.core.update_BANG_.call(null,inst_29564,inst_29573);var state_29586__$1 = (function (){var statearr_29602 = state_29586;(statearr_29602[(11)] = inst_29570);
(statearr_29602[(12)] = inst_29574);
return statearr_29602;
})();var statearr_29603_29631 = state_29586__$1;(statearr_29603_29631[(2)] = true);
(statearr_29603_29631[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29587 === (8)))
{var inst_29557 = (state_29586[(8)]);var inst_29560 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29557);var state_29586__$1 = state_29586;var statearr_29604_29632 = state_29586__$1;(statearr_29604_29632[(2)] = inst_29560);
(statearr_29604_29632[(1)] = (10));
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
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478))
;return ((function (switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_29608 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29608[(0)] = state_machine__11242__auto__);
(statearr_29608[(1)] = (1));
return statearr_29608;
});
var state_machine__11242__auto____1 = (function (state_29586){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_29586);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e29609){if((e29609 instanceof Object))
{var ex__11245__auto__ = e29609;var statearr_29610_29633 = state_29586;(statearr_29610_29633[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29586);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29609;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29634 = state_29586;
state_29586 = G__29634;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_29586){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_29586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478))
})();var state__11299__auto__ = (function (){var statearr_29611 = f__11298__auto__.call(null);(statearr_29611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_29611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478))
);
return c__11297__auto__;
});})(owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478))
;
clustermap.components.filters.tag_filter.t29546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478){
return (function (_29548){var self__ = this;
var _29548__$1 = this;return self__.meta29547;
});})(owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478))
;
clustermap.components.filters.tag_filter.t29546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478){
return (function (_29548,meta29547__$1){var self__ = this;
var _29548__$1 = this;return (new clustermap.components.filters.tag_filter.t29546(self__.constructor29471,self__.component_spec,self__.component_filter_rq_chan,self__.map29474,self__.owner,self__.map29473,self__.data,self__.output_checker29478,self__.G__29479,self__.filter_spec,self__.input_schema29476,self__.output_schema29475,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.input_checker29477,meta29547__$1));
});})(owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478))
;
clustermap.components.filters.tag_filter.__GT_t29546 = ((function (owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478){
return (function __GT_t29546(constructor29471__$1,component_spec__$1,component_filter_rq_chan__$1,map29474__$1,owner__$1,map29473__$1,data__$1,output_checker29478__$1,G__29479__$1,filter_spec__$1,input_schema29476__$1,output_schema29475__$1,validate__6034__auto____$1,id__$1,ufv____$1,input_checker29477__$1,meta29547){return (new clustermap.components.filters.tag_filter.t29546(constructor29471__$1,component_spec__$1,component_filter_rq_chan__$1,map29474__$1,owner__$1,map29473__$1,data__$1,output_checker29478__$1,G__29479__$1,filter_spec__$1,input_schema29476__$1,output_schema29475__$1,validate__6034__auto____$1,id__$1,ufv____$1,input_checker29477__$1,meta29547));
});})(owner,component_filter_rq_chan,map29474,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478))
;
}
return (new clustermap.components.filters.tag_filter.t29546(constructor29471,component_spec,component_filter_rq_chan,map29474,owner,map29473,data,output_checker29478,G__29479,filter_spec,input_schema29476,output_schema29475,validate__6034__auto__,id,ufv__,input_checker29477,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29635 = output_checker29478.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29635))
{var error__6036__auto___29636 = temp__4126__auto___29635;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29471","constructor29471",-1649685504,null),cljs.core.pr_str.call(null,error__6036__auto___29636)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29636,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29475,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29475,input_schema29476,input_checker29477,output_checker29478))
,schema.core.make_fn_schema.call(null,output_schema29475,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29476], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___29615){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner29470,p__29612){var vec__29614 = p__29612;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29614,(0),null);return component_fnk__7881__auto___29615.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29470,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner29470,var_args){
var p__29612 = null;if (arguments.length > 2) {
  p__29612 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner29470,p__29612);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__29637){
var data__7882__auto__ = cljs.core.first(arglist__29637);
arglist__29637 = cljs.core.next(arglist__29637);
var owner29470 = cljs.core.first(arglist__29637);
var p__29612 = cljs.core.rest(arglist__29637);
return tag_filter_component__delegate(data__7882__auto__,owner29470,p__29612);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___29615))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m29472){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m29472);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m29472){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m29472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
