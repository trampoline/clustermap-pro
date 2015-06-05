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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30156_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30156_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30157,value){var map__30159 = p__30157;var map__30159__$1 = ((cljs.core.seq_QMARK_.call(null,map__30159))?cljs.core.apply.call(null,cljs.core.hash_map,map__30159):map__30159);var component_spec = map__30159__$1;var tags = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30159__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30160,value){var map__30162 = p__30160;var map__30162__$1 = ((cljs.core.seq_QMARK_.call(null,map__30162))?cljs.core.apply.call(null,cljs.core.hash_map,map__30162):map__30162);var component_spec = map__30162__$1;var tags = cljs.core.get.call(null,map__30162__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30162__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30163,value){var map__30165 = p__30163;var map__30165__$1 = ((cljs.core.seq_QMARK_.call(null,map__30165))?cljs.core.apply.call(null,cljs.core.hash_map,map__30165):map__30165);var component_spec = map__30165__$1;var tags = cljs.core.get.call(null,map__30165__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30165__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30166_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30166_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30167_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30167_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30169 = schema.core.Any;var input_schema30170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30168","map30168",-783148613,null))], null);var input_checker30171 = schema.core.checker.call(null,input_schema30170);var output_checker30172 = schema.core.checker.call(null,output_schema30169);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30169,input_schema30170,input_checker30171,output_checker30172){
return (function render_STAR_(G__30173){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30173], null);var temp__4126__auto___30191 = input_checker30171.call(null,args__6035__auto___30190);if(cljs.core.truth_(temp__4126__auto___30191))
{var error__6036__auto___30192 = temp__4126__auto___30191;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30192)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30192,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30190,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30170,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30168 = G__30173;while(true){
if(cljs.core.map_QMARK_.call(null,map30168))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30168)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30168,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30168,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30169,input_schema30170,input_checker30171,output_checker30172){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30169,input_schema30170,input_checker30171,output_checker30172))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30169,input_schema30170,input_checker30171,output_checker30172){
return (function iter__30182(s__30183){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30169,input_schema30170,input_checker30171,output_checker30172){
return (function (){var s__30183__$1 = s__30183;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30183__$1);if(temp__4126__auto__)
{var s__30183__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30183__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30183__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30185 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30184 = (0);while(true){
if((i__30184 < size__4376__auto__))
{var map__30188 = cljs.core._nth.call(null,c__4375__auto__,i__30184);var map__30188__$1 = ((cljs.core.seq_QMARK_.call(null,map__30188))?cljs.core.apply.call(null,cljs.core.hash_map,map__30188):map__30188);var label__$1 = cljs.core.get.call(null,map__30188__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30188__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30185,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30193 = (i__30184 + (1));
i__30184 = G__30193;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30185),iter__30182.call(null,cljs.core.chunk_rest.call(null,s__30183__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30185),null);
}
} else
{var map__30189 = cljs.core.first.call(null,s__30183__$2);var map__30189__$1 = ((cljs.core.seq_QMARK_.call(null,map__30189))?cljs.core.apply.call(null,cljs.core.hash_map,map__30189):map__30189);var label__$1 = cljs.core.get.call(null,map__30189__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30189__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30182.call(null,cljs.core.rest.call(null,s__30183__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30169,input_schema30170,input_checker30171,output_checker30172))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30169,input_schema30170,input_checker30171,output_checker30172))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30194 = output_checker30172.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30194))
{var error__6036__auto___30195 = temp__4126__auto___30194;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30195)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30195,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30169,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30169,input_schema30170,input_checker30171,output_checker30172))
,schema.core.make_fn_schema.call(null,output_schema30169,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30170], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30341 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30201 = schema.core.Any;var input_schema30202 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30199","map30199",-514330581,null))], null);var input_checker30203 = schema.core.checker.call(null,input_schema30202);var output_checker30204 = schema.core.checker.call(null,output_schema30201);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function constructor30197(G__30205){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30342 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30205], null);var temp__4126__auto___30343 = input_checker30203.call(null,args__6035__auto___30342);if(cljs.core.truth_(temp__4126__auto___30343))
{var error__6036__auto___30344 = temp__4126__auto___30343;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30197","constructor30197",132662465,null),cljs.core.pr_str.call(null,error__6036__auto___30344)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30344,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30342,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30202,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30199 = G__30205;while(true){
if(cljs.core.map_QMARK_.call(null,map30199))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30199)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30199,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30200 = plumbing.fnk.schema.safe_get.call(null,map30199,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30200,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30199,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30272 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30272 = (function (component_spec,component_filter_rq_chan,output_checker30204,constructor30197,owner,data,map30200,map30199,filter_spec,input_checker30203,output_schema30201,input_schema30202,validate__6034__auto__,id,G__30205,ufv__,meta30273){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_checker30204 = output_checker30204;
this.constructor30197 = constructor30197;
this.owner = owner;
this.data = data;
this.map30200 = map30200;
this.map30199 = map30199;
this.filter_spec = filter_spec;
this.input_checker30203 = input_checker30203;
this.output_schema30201 = output_schema30201;
this.input_schema30202 = input_schema30202;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__30205 = G__30205;
this.ufv__ = ufv__;
this.meta30273 = meta30273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30272.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30272.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30272";
clustermap.components.filters.tag_filter.t30272.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t30272");
});})(owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
;
clustermap.components.filters.tag_filter.t30272.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30272.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
;
clustermap.components.filters.tag_filter.t30272.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30272.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
;
clustermap.components.filters.tag_filter.t30272.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30272.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function (state_30312){var state_val_30313 = (state_30312[(1)]);if((state_val_30313 === (7)))
{var inst_30303 = (state_30312[(2)]);var state_30312__$1 = state_30312;if(cljs.core.truth_(inst_30303))
{var statearr_30314_30345 = state_30312__$1;(statearr_30314_30345[(1)] = (11));
} else
{var statearr_30315_30346 = state_30312__$1;(statearr_30315_30346[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (1)))
{var state_30312__$1 = state_30312;var statearr_30316_30347 = state_30312__$1;(statearr_30316_30347[(2)] = null);
(statearr_30316_30347[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (4)))
{var inst_30277 = (state_30312[(7)]);var inst_30277__$1 = (state_30312[(2)]);var state_30312__$1 = (function (){var statearr_30317 = state_30312;(statearr_30317[(7)] = inst_30277__$1);
return statearr_30317;
})();if(cljs.core.truth_(inst_30277__$1))
{var statearr_30318_30348 = state_30312__$1;(statearr_30318_30348[(1)] = (5));
} else
{var statearr_30319_30349 = state_30312__$1;(statearr_30319_30349[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (13)))
{var inst_30308 = (state_30312[(2)]);var state_30312__$1 = state_30312;var statearr_30320_30350 = state_30312__$1;(statearr_30320_30350[(2)] = inst_30308);
(statearr_30320_30350[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (6)))
{var state_30312__$1 = state_30312;var statearr_30321_30351 = state_30312__$1;(statearr_30321_30351[(2)] = null);
(statearr_30321_30351[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (3)))
{var inst_30310 = (state_30312[(2)]);var state_30312__$1 = state_30312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30312__$1,inst_30310);
} else
{if((state_val_30313 === (12)))
{var state_30312__$1 = state_30312;var statearr_30322_30352 = state_30312__$1;(statearr_30322_30352[(2)] = null);
(statearr_30322_30352[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (2)))
{var state_30312__$1 = state_30312;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30312__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30313 === (11)))
{var state_30312__$1 = state_30312;var statearr_30323_30353 = state_30312__$1;(statearr_30323_30353[(2)] = null);
(statearr_30323_30353[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (9)))
{var inst_30283 = (state_30312[(8)]);var state_30312__$1 = state_30312;var statearr_30324_30354 = state_30312__$1;(statearr_30324_30354[(2)] = inst_30283);
(statearr_30324_30354[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (5)))
{var inst_30277 = (state_30312[(7)]);var inst_30283 = (state_30312[(8)]);var inst_30280 = cljs.core.nth.call(null,inst_30277,(0),null);var inst_30281 = cljs.core.nth.call(null,inst_30277,(1),null);var inst_30283__$1 = om.core.get_props.call(null,self__.owner);var inst_30284 = cljs.core.seq_QMARK_.call(null,inst_30283__$1);var state_30312__$1 = (function (){var statearr_30325 = state_30312;(statearr_30325[(9)] = inst_30281);
(statearr_30325[(10)] = inst_30280);
(statearr_30325[(8)] = inst_30283__$1);
return statearr_30325;
})();if(inst_30284)
{var statearr_30326_30355 = state_30312__$1;(statearr_30326_30355[(1)] = (8));
} else
{var statearr_30327_30356 = state_30312__$1;(statearr_30327_30356[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (10)))
{var inst_30281 = (state_30312[(9)]);var inst_30289 = (state_30312[(2)]);var inst_30290 = cljs.core.get.call(null,inst_30289,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30291 = cljs.core.get.call(null,inst_30289,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30292 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30293 = ["TAG-FILTER-RQ",self__.id,inst_30281];var inst_30294 = (new cljs.core.PersistentVector(null,3,(5),inst_30292,inst_30293,null));var inst_30295 = cljs.core.clj__GT_js.call(null,inst_30294);var inst_30296 = console.log(inst_30295);var inst_30297 = cljs.core.deref.call(null,inst_30290);var inst_30298 = cljs.core.deref.call(null,inst_30291);var inst_30299 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30297,inst_30298,inst_30281);var inst_30300 = om.core.update_BANG_.call(null,inst_30290,inst_30299);var state_30312__$1 = (function (){var statearr_30328 = state_30312;(statearr_30328[(11)] = inst_30300);
(statearr_30328[(12)] = inst_30296);
return statearr_30328;
})();var statearr_30329_30357 = state_30312__$1;(statearr_30329_30357[(2)] = true);
(statearr_30329_30357[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30313 === (8)))
{var inst_30283 = (state_30312[(8)]);var inst_30286 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30283);var state_30312__$1 = state_30312;var statearr_30330_30358 = state_30312__$1;(statearr_30330_30358[(2)] = inst_30286);
(statearr_30330_30358[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30334 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30334[(0)] = state_machine__9111__auto__);
(statearr_30334[(1)] = (1));
return statearr_30334;
});
var state_machine__9111__auto____1 = (function (state_30312){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30312);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30335){if((e30335 instanceof Object))
{var ex__9114__auto__ = e30335;var statearr_30336_30359 = state_30312;(statearr_30336_30359[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30335;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30360 = state_30312;
state_30312 = G__30360;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30312){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
})();var state__9127__auto__ = (function (){var statearr_30337 = f__9126__auto__.call(null);(statearr_30337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
;
clustermap.components.filters.tag_filter.t30272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function (_30274){var self__ = this;
var _30274__$1 = this;return self__.meta30273;
});})(owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
;
clustermap.components.filters.tag_filter.t30272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function (_30274,meta30273__$1){var self__ = this;
var _30274__$1 = this;return (new clustermap.components.filters.tag_filter.t30272(self__.component_spec,self__.component_filter_rq_chan,self__.output_checker30204,self__.constructor30197,self__.owner,self__.data,self__.map30200,self__.map30199,self__.filter_spec,self__.input_checker30203,self__.output_schema30201,self__.input_schema30202,self__.validate__6034__auto__,self__.id,self__.G__30205,self__.ufv__,meta30273__$1));
});})(owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
;
clustermap.components.filters.tag_filter.__GT_t30272 = ((function (owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function __GT_t30272(component_spec__$1,component_filter_rq_chan__$1,output_checker30204__$1,constructor30197__$1,owner__$1,data__$1,map30200__$1,map30199__$1,filter_spec__$1,input_checker30203__$1,output_schema30201__$1,input_schema30202__$1,validate__6034__auto____$1,id__$1,G__30205__$1,ufv____$1,meta30273){return (new clustermap.components.filters.tag_filter.t30272(component_spec__$1,component_filter_rq_chan__$1,output_checker30204__$1,constructor30197__$1,owner__$1,data__$1,map30200__$1,map30199__$1,filter_spec__$1,input_checker30203__$1,output_schema30201__$1,input_schema30202__$1,validate__6034__auto____$1,id__$1,G__30205__$1,ufv____$1,meta30273));
});})(owner,component_filter_rq_chan,map30200,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
;
}
return (new clustermap.components.filters.tag_filter.t30272(component_spec,component_filter_rq_chan,output_checker30204,constructor30197,owner,data,map30200,map30199,filter_spec,input_checker30203,output_schema30201,input_schema30202,validate__6034__auto__,id,G__30205,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30361 = output_checker30204.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30361))
{var error__6036__auto___30362 = temp__4126__auto___30361;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30197","constructor30197",132662465,null),cljs.core.pr_str.call(null,error__6036__auto___30362)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30362,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30201,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
,schema.core.make_fn_schema.call(null,output_schema30201,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30202], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___30341){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30196,p__30338){var vec__30340 = p__30338;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30340,(0),null);return component_fnk__7881__auto___30341.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30196,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30196,var_args){
var p__30338 = null;if (arguments.length > 2) {
  p__30338 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30196,p__30338);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__30363){
var data__7882__auto__ = cljs.core.first(arglist__30363);
arglist__30363 = cljs.core.next(arglist__30363);
var owner30196 = cljs.core.first(arglist__30363);
var p__30338 = cljs.core.rest(arglist__30363);
return tag_filter_component__delegate(data__7882__auto__,owner30196,p__30338);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___30341))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30198){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30198);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30198){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
