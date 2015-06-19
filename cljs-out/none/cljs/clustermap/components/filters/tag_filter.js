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
clustermap.components.filters.tag_filter.get_current_value = (function get_current_value(components,id){var or__11552__auto__ = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"must","must",-243952061),(1),new cljs.core.Keyword(null,"term","term",-1817390416),"tag"], null));if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return "";
}
});
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30012_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30012_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30013,value){var map__30015 = p__30013;var map__30015__$1 = ((cljs.core.seq_QMARK_.call(null,map__30015))?cljs.core.apply.call(null,cljs.core.hash_map,map__30015):map__30015);var component_spec = map__30015__$1;var tags = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30016,value){var map__30018 = p__30016;var map__30018__$1 = ((cljs.core.seq_QMARK_.call(null,map__30018))?cljs.core.apply.call(null,cljs.core.hash_map,map__30018):map__30018);var component_spec = map__30018__$1;var tags = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30018__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__11540__auto__ = tag_spec;if(cljs.core.truth_(and__11540__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911).cljs$core$IFn$_invoke$arity$1(tag_spec));
} else
{return and__11540__auto__;
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30019,value){var map__30021 = p__30019;var map__30021__$1 = ((cljs.core.seq_QMARK_.call(null,map__30021))?cljs.core.apply.call(null,cljs.core.hash_map,map__30021):map__30021);var component_spec = map__30021__$1;var tags = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30022_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30022_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30023_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30023_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30025 = schema.core.Any;var input_schema30026 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30024","map30024",-125932419,null))], null);var input_checker30027 = schema.core.checker.call(null,input_schema30026);var output_checker30028 = schema.core.checker.call(null,output_schema30025);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028){
return (function render_STAR_(G__30029){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___30046 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30029], null);var temp__4126__auto___30047 = input_checker30027.call(null,args__13948__auto___30046);if(cljs.core.truth_(temp__4126__auto___30047))
{var error__13949__auto___30048 = temp__4126__auto___30047;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___30048)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___30048,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___30046,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30026,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map30024 = G__30029;while(true){
if(cljs.core.map_QMARK_.call(null,map30024))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30024)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30024,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30024,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028))
},cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028){
return (function iter__30038(s__30039){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028){
return (function (){var s__30039__$1 = s__30039;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30039__$1);if(temp__4126__auto__)
{var s__30039__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30039__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__30039__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__30041 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__30040 = (0);while(true){
if((i__30040 < size__12289__auto__))
{var map__30044 = cljs.core._nth.call(null,c__12288__auto__,i__30040);var map__30044__$1 = ((cljs.core.seq_QMARK_.call(null,map__30044))?cljs.core.apply.call(null,cljs.core.hash_map,map__30044):map__30044);var label__$1 = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30041,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30049 = (i__30040 + (1));
i__30040 = G__30049;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30041),iter__30038.call(null,cljs.core.chunk_rest.call(null,s__30039__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30041),null);
}
} else
{var map__30045 = cljs.core.first.call(null,s__30039__$2);var map__30045__$1 = ((cljs.core.seq_QMARK_.call(null,map__30045))?cljs.core.apply.call(null,cljs.core.hash_map,map__30045):map__30045);var label__$1 = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30045__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30038.call(null,cljs.core.rest.call(null,s__30039__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028))
;return iter__12290__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___30050 = output_checker30028.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___30050))
{var error__13949__auto___30051 = temp__4126__auto___30050;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___30051)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___30051,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30025,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema30025,input_schema30026,input_checker30027,output_checker30028))
,schema.core.make_fn_schema.call(null,output_schema30025,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30026], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__15794__auto___30197 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30057 = schema.core.Any;var input_schema30058 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30055","map30055",-555156224,null))], null);var input_checker30059 = schema.core.checker.call(null,input_schema30058);var output_checker30060 = schema.core.checker.call(null,output_schema30057);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060){
return (function constructor30053(G__30061){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___30198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30061], null);var temp__4126__auto___30199 = input_checker30059.call(null,args__13948__auto___30198);if(cljs.core.truth_(temp__4126__auto___30199))
{var error__13949__auto___30200 = temp__4126__auto___30199;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30053","constructor30053",-638510205,null),cljs.core.pr_str.call(null,error__13949__auto___30200)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___30200,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___30198,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30058,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map30055 = G__30061;while(true){
if(cljs.core.map_QMARK_.call(null,map30055))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30055)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30055,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30056 = plumbing.fnk.schema.safe_get.call(null,map30055,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30056,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30055,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30128 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30128 = (function (map30055,component_spec,component_filter_rq_chan,constructor30053,owner,data,filter_spec,input_schema30058,map30056,output_checker30060,G__30061,validate__13947__auto__,input_checker30059,id,ufv__,output_schema30057,meta30129){
this.map30055 = map30055;
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.constructor30053 = constructor30053;
this.owner = owner;
this.data = data;
this.filter_spec = filter_spec;
this.input_schema30058 = input_schema30058;
this.map30056 = map30056;
this.output_checker30060 = output_checker30060;
this.G__30061 = G__30061;
this.validate__13947__auto__ = validate__13947__auto__;
this.input_checker30059 = input_checker30059;
this.id = id;
this.ufv__ = ufv__;
this.output_schema30057 = output_schema30057;
this.meta30129 = meta30129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30128.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30128.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30128";
clustermap.components.filters.tag_filter.t30128.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.filters.tag-filter/t30128");
});})(owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060))
;
clustermap.components.filters.tag_filter.t30128.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30128.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060))
;
clustermap.components.filters.tag_filter.t30128.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30128.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060))
;
clustermap.components.filters.tag_filter.t30128.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30128.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060){
return (function (_){var self__ = this;
var ___$1 = this;var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060){
return (function (state_30168){var state_val_30169 = (state_30168[(1)]);if((state_val_30169 === (7)))
{var inst_30159 = (state_30168[(2)]);var state_30168__$1 = state_30168;if(cljs.core.truth_(inst_30159))
{var statearr_30170_30201 = state_30168__$1;(statearr_30170_30201[(1)] = (11));
} else
{var statearr_30171_30202 = state_30168__$1;(statearr_30171_30202[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30169 === (1)))
{var state_30168__$1 = state_30168;var statearr_30172_30203 = state_30168__$1;(statearr_30172_30203[(2)] = null);
(statearr_30172_30203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30169 === (4)))
{var inst_30133 = (state_30168[(7)]);var inst_30133__$1 = (state_30168[(2)]);var state_30168__$1 = (function (){var statearr_30173 = state_30168;(statearr_30173[(7)] = inst_30133__$1);
return statearr_30173;
})();if(cljs.core.truth_(inst_30133__$1))
{var statearr_30174_30204 = state_30168__$1;(statearr_30174_30204[(1)] = (5));
} else
{var statearr_30175_30205 = state_30168__$1;(statearr_30175_30205[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30169 === (13)))
{var inst_30164 = (state_30168[(2)]);var state_30168__$1 = state_30168;var statearr_30176_30206 = state_30168__$1;(statearr_30176_30206[(2)] = inst_30164);
(statearr_30176_30206[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30169 === (6)))
{var state_30168__$1 = state_30168;var statearr_30177_30207 = state_30168__$1;(statearr_30177_30207[(2)] = null);
(statearr_30177_30207[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30169 === (3)))
{var inst_30166 = (state_30168[(2)]);var state_30168__$1 = state_30168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30168__$1,inst_30166);
} else
{if((state_val_30169 === (12)))
{var state_30168__$1 = state_30168;var statearr_30178_30208 = state_30168__$1;(statearr_30178_30208[(2)] = null);
(statearr_30178_30208[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30169 === (2)))
{var state_30168__$1 = state_30168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30168__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30169 === (11)))
{var state_30168__$1 = state_30168;var statearr_30179_30209 = state_30168__$1;(statearr_30179_30209[(2)] = null);
(statearr_30179_30209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30169 === (9)))
{var inst_30139 = (state_30168[(8)]);var state_30168__$1 = state_30168;var statearr_30180_30210 = state_30168__$1;(statearr_30180_30210[(2)] = inst_30139);
(statearr_30180_30210[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30169 === (5)))
{var inst_30133 = (state_30168[(7)]);var inst_30139 = (state_30168[(8)]);var inst_30136 = cljs.core.nth.call(null,inst_30133,(0),null);var inst_30137 = cljs.core.nth.call(null,inst_30133,(1),null);var inst_30139__$1 = om.core.get_props.call(null,self__.owner);var inst_30140 = cljs.core.seq_QMARK_.call(null,inst_30139__$1);var state_30168__$1 = (function (){var statearr_30181 = state_30168;(statearr_30181[(9)] = inst_30136);
(statearr_30181[(10)] = inst_30137);
(statearr_30181[(8)] = inst_30139__$1);
return statearr_30181;
})();if(inst_30140)
{var statearr_30182_30211 = state_30168__$1;(statearr_30182_30211[(1)] = (8));
} else
{var statearr_30183_30212 = state_30168__$1;(statearr_30183_30212[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30169 === (10)))
{var inst_30137 = (state_30168[(10)]);var inst_30145 = (state_30168[(2)]);var inst_30146 = cljs.core.get.call(null,inst_30145,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30147 = cljs.core.get.call(null,inst_30145,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30148 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30149 = ["TAG-FILTER-RQ",self__.id,inst_30137];var inst_30150 = (new cljs.core.PersistentVector(null,3,(5),inst_30148,inst_30149,null));var inst_30151 = cljs.core.clj__GT_js.call(null,inst_30150);var inst_30152 = console.log(inst_30151);var inst_30153 = cljs.core.deref.call(null,inst_30146);var inst_30154 = cljs.core.deref.call(null,inst_30147);var inst_30155 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30153,inst_30154,inst_30137);var inst_30156 = om.core.update_BANG_.call(null,inst_30146,inst_30155);var state_30168__$1 = (function (){var statearr_30184 = state_30168;(statearr_30184[(11)] = inst_30156);
(statearr_30184[(12)] = inst_30152);
return statearr_30184;
})();var statearr_30185_30213 = state_30168__$1;(statearr_30185_30213[(2)] = true);
(statearr_30185_30213[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30169 === (8)))
{var inst_30139 = (state_30168[(8)]);var inst_30142 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30139);var state_30168__$1 = state_30168;var statearr_30186_30214 = state_30168__$1;(statearr_30186_30214[(2)] = inst_30142);
(statearr_30186_30214[(1)] = (10));
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
});})(c__16733__auto__,___$1,owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_30190 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30190[(0)] = state_machine__16719__auto__);
(statearr_30190[(1)] = (1));
return statearr_30190;
});
var state_machine__16719__auto____1 = (function (state_30168){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_30168);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e30191){if((e30191 instanceof Object))
{var ex__16722__auto__ = e30191;var statearr_30192_30215 = state_30168;(statearr_30192_30215[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30168);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30191;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30216 = state_30168;
state_30168 = G__30216;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_30168){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_30168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060))
})();var state__16735__auto__ = (function (){var statearr_30193 = f__16734__auto__.call(null);(statearr_30193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_30193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060))
);
return c__16733__auto__;
});})(owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060))
;
clustermap.components.filters.tag_filter.t30128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060){
return (function (_30130){var self__ = this;
var _30130__$1 = this;return self__.meta30129;
});})(owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060))
;
clustermap.components.filters.tag_filter.t30128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060){
return (function (_30130,meta30129__$1){var self__ = this;
var _30130__$1 = this;return (new clustermap.components.filters.tag_filter.t30128(self__.map30055,self__.component_spec,self__.component_filter_rq_chan,self__.constructor30053,self__.owner,self__.data,self__.filter_spec,self__.input_schema30058,self__.map30056,self__.output_checker30060,self__.G__30061,self__.validate__13947__auto__,self__.input_checker30059,self__.id,self__.ufv__,self__.output_schema30057,meta30129__$1));
});})(owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060))
;
clustermap.components.filters.tag_filter.__GT_t30128 = ((function (owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060){
return (function __GT_t30128(map30055__$1,component_spec__$1,component_filter_rq_chan__$1,constructor30053__$1,owner__$1,data__$1,filter_spec__$1,input_schema30058__$1,map30056__$1,output_checker30060__$1,G__30061__$1,validate__13947__auto____$1,input_checker30059__$1,id__$1,ufv____$1,output_schema30057__$1,meta30129){return (new clustermap.components.filters.tag_filter.t30128(map30055__$1,component_spec__$1,component_filter_rq_chan__$1,constructor30053__$1,owner__$1,data__$1,filter_spec__$1,input_schema30058__$1,map30056__$1,output_checker30060__$1,G__30061__$1,validate__13947__auto____$1,input_checker30059__$1,id__$1,ufv____$1,output_schema30057__$1,meta30129));
});})(owner,component_filter_rq_chan,map30056,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060))
;
}
return (new clustermap.components.filters.tag_filter.t30128(map30055,component_spec,component_filter_rq_chan,constructor30053,owner,data,filter_spec,input_schema30058,map30056,output_checker30060,G__30061,validate__13947__auto__,input_checker30059,id,ufv__,output_schema30057,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___30217 = output_checker30060.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___30217))
{var error__13949__auto___30218 = temp__4126__auto___30217;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30053","constructor30053",-638510205,null),cljs.core.pr_str.call(null,error__13949__auto___30218)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___30218,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30057,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema30057,input_schema30058,input_checker30059,output_checker30060))
,schema.core.make_fn_schema.call(null,output_schema30057,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30058], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__15794__auto___30197){
return (function() { 
var tag_filter_component__delegate = function (data__15795__auto__,owner30052,p__30194){var vec__30196 = p__30194;var opts__15796__auto__ = cljs.core.nth.call(null,vec__30196,(0),null);return component_fnk__15794__auto___30197.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30052,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var tag_filter_component = function (data__15795__auto__,owner30052,var_args){
var p__30194 = null;if (arguments.length > 2) {
  p__30194 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__15795__auto__,owner30052,p__30194);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__30219){
var data__15795__auto__ = cljs.core.first(arglist__30219);
arglist__30219 = cljs.core.next(arglist__30219);
var owner30052 = cljs.core.first(arglist__30219);
var p__30194 = cljs.core.rest(arglist__30219);
return tag_filter_component__delegate(data__15795__auto__,owner30052,p__30194);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__15794__auto___30197))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__15763__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__15763__auto__,m30054){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__15763__auto__,m30054);
});
__GT_tag_filter_component = function(cursor__15763__auto__,m30054){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__15763__auto__,m30054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;

//# sourceMappingURL=tag_filter.js.map