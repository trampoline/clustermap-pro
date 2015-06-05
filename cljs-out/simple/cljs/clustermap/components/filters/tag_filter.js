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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30168_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30168_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30169,value){var map__30171 = p__30169;var map__30171__$1 = ((cljs.core.seq_QMARK_.call(null,map__30171))?cljs.core.apply.call(null,cljs.core.hash_map,map__30171):map__30171);var component_spec = map__30171__$1;var tags = cljs.core.get.call(null,map__30171__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30171__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30172,value){var map__30174 = p__30172;var map__30174__$1 = ((cljs.core.seq_QMARK_.call(null,map__30174))?cljs.core.apply.call(null,cljs.core.hash_map,map__30174):map__30174);var component_spec = map__30174__$1;var tags = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30174__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30175,value){var map__30177 = p__30175;var map__30177__$1 = ((cljs.core.seq_QMARK_.call(null,map__30177))?cljs.core.apply.call(null,cljs.core.hash_map,map__30177):map__30177);var component_spec = map__30177__$1;var tags = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30178_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30178_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30179_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30179_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30181 = schema.core.Any;var input_schema30182 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30180","map30180",-1644373102,null))], null);var input_checker30183 = schema.core.checker.call(null,input_schema30182);var output_checker30184 = schema.core.checker.call(null,output_schema30181);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function render_STAR_(G__30185){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30202 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30185], null);var temp__4126__auto___30203 = input_checker30183.call(null,args__6035__auto___30202);if(cljs.core.truth_(temp__4126__auto___30203))
{var error__6036__auto___30204 = temp__4126__auto___30203;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30204)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30204,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30202,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30182,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30180 = G__30185;while(true){
if(cljs.core.map_QMARK_.call(null,map30180))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30180)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30180,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30180,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function iter__30194(s__30195){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184){
return (function (){var s__30195__$1 = s__30195;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30195__$1);if(temp__4126__auto__)
{var s__30195__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30195__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30195__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30197 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30196 = (0);while(true){
if((i__30196 < size__4376__auto__))
{var map__30200 = cljs.core._nth.call(null,c__4375__auto__,i__30196);var map__30200__$1 = ((cljs.core.seq_QMARK_.call(null,map__30200))?cljs.core.apply.call(null,cljs.core.hash_map,map__30200):map__30200);var label__$1 = cljs.core.get.call(null,map__30200__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30200__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30197,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30205 = (i__30196 + (1));
i__30196 = G__30205;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30197),iter__30194.call(null,cljs.core.chunk_rest.call(null,s__30195__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30197),null);
}
} else
{var map__30201 = cljs.core.first.call(null,s__30195__$2);var map__30201__$1 = ((cljs.core.seq_QMARK_.call(null,map__30201))?cljs.core.apply.call(null,cljs.core.hash_map,map__30201):map__30201);var label__$1 = cljs.core.get.call(null,map__30201__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30201__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30194.call(null,cljs.core.rest.call(null,s__30195__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30206 = output_checker30184.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30206))
{var error__6036__auto___30207 = temp__4126__auto___30206;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30207)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30207,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30181,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30181,input_schema30182,input_checker30183,output_checker30184))
,schema.core.make_fn_schema.call(null,output_schema30181,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30182], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30353 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30213 = schema.core.Any;var input_schema30214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30211","map30211",844853436,null))], null);var input_checker30215 = schema.core.checker.call(null,input_schema30214);var output_checker30216 = schema.core.checker.call(null,output_schema30213);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216){
return (function constructor30209(G__30217){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30354 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30217], null);var temp__4126__auto___30355 = input_checker30215.call(null,args__6035__auto___30354);if(cljs.core.truth_(temp__4126__auto___30355))
{var error__6036__auto___30356 = temp__4126__auto___30355;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30209","constructor30209",-616386476,null),cljs.core.pr_str.call(null,error__6036__auto___30356)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30356,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30354,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30214,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30211 = G__30217;while(true){
if(cljs.core.map_QMARK_.call(null,map30211))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30211)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30211,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30212 = plumbing.fnk.schema.safe_get.call(null,map30211,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30212,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30211,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30284 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30284 = (function (component_spec,component_filter_rq_chan,owner,data,input_schema30214,map30212,filter_spec,G__30217,constructor30209,validate__6034__auto__,id,output_checker30216,input_checker30215,map30211,output_schema30213,ufv__,meta30285){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.input_schema30214 = input_schema30214;
this.map30212 = map30212;
this.filter_spec = filter_spec;
this.G__30217 = G__30217;
this.constructor30209 = constructor30209;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_checker30216 = output_checker30216;
this.input_checker30215 = input_checker30215;
this.map30211 = map30211;
this.output_schema30213 = output_schema30213;
this.ufv__ = ufv__;
this.meta30285 = meta30285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30284.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30284.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30284";
clustermap.components.filters.tag_filter.t30284.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t30284");
});})(owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216))
;
clustermap.components.filters.tag_filter.t30284.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30284.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216))
;
clustermap.components.filters.tag_filter.t30284.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30284.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216))
;
clustermap.components.filters.tag_filter.t30284.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30284.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216){
return (function (_){var self__ = this;
var ___$1 = this;var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216){
return (function (state_30324){var state_val_30325 = (state_30324[(1)]);if((state_val_30325 === (7)))
{var inst_30315 = (state_30324[(2)]);var state_30324__$1 = state_30324;if(cljs.core.truth_(inst_30315))
{var statearr_30326_30357 = state_30324__$1;(statearr_30326_30357[(1)] = (11));
} else
{var statearr_30327_30358 = state_30324__$1;(statearr_30327_30358[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30325 === (1)))
{var state_30324__$1 = state_30324;var statearr_30328_30359 = state_30324__$1;(statearr_30328_30359[(2)] = null);
(statearr_30328_30359[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30325 === (4)))
{var inst_30289 = (state_30324[(7)]);var inst_30289__$1 = (state_30324[(2)]);var state_30324__$1 = (function (){var statearr_30329 = state_30324;(statearr_30329[(7)] = inst_30289__$1);
return statearr_30329;
})();if(cljs.core.truth_(inst_30289__$1))
{var statearr_30330_30360 = state_30324__$1;(statearr_30330_30360[(1)] = (5));
} else
{var statearr_30331_30361 = state_30324__$1;(statearr_30331_30361[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30325 === (13)))
{var inst_30320 = (state_30324[(2)]);var state_30324__$1 = state_30324;var statearr_30332_30362 = state_30324__$1;(statearr_30332_30362[(2)] = inst_30320);
(statearr_30332_30362[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30325 === (6)))
{var state_30324__$1 = state_30324;var statearr_30333_30363 = state_30324__$1;(statearr_30333_30363[(2)] = null);
(statearr_30333_30363[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30325 === (3)))
{var inst_30322 = (state_30324[(2)]);var state_30324__$1 = state_30324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30324__$1,inst_30322);
} else
{if((state_val_30325 === (12)))
{var state_30324__$1 = state_30324;var statearr_30334_30364 = state_30324__$1;(statearr_30334_30364[(2)] = null);
(statearr_30334_30364[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30325 === (2)))
{var state_30324__$1 = state_30324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30324__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30325 === (11)))
{var state_30324__$1 = state_30324;var statearr_30335_30365 = state_30324__$1;(statearr_30335_30365[(2)] = null);
(statearr_30335_30365[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30325 === (9)))
{var inst_30295 = (state_30324[(8)]);var state_30324__$1 = state_30324;var statearr_30336_30366 = state_30324__$1;(statearr_30336_30366[(2)] = inst_30295);
(statearr_30336_30366[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30325 === (5)))
{var inst_30289 = (state_30324[(7)]);var inst_30295 = (state_30324[(8)]);var inst_30292 = cljs.core.nth.call(null,inst_30289,(0),null);var inst_30293 = cljs.core.nth.call(null,inst_30289,(1),null);var inst_30295__$1 = om.core.get_props.call(null,self__.owner);var inst_30296 = cljs.core.seq_QMARK_.call(null,inst_30295__$1);var state_30324__$1 = (function (){var statearr_30337 = state_30324;(statearr_30337[(9)] = inst_30293);
(statearr_30337[(10)] = inst_30292);
(statearr_30337[(8)] = inst_30295__$1);
return statearr_30337;
})();if(inst_30296)
{var statearr_30338_30367 = state_30324__$1;(statearr_30338_30367[(1)] = (8));
} else
{var statearr_30339_30368 = state_30324__$1;(statearr_30339_30368[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30325 === (10)))
{var inst_30293 = (state_30324[(9)]);var inst_30301 = (state_30324[(2)]);var inst_30302 = cljs.core.get.call(null,inst_30301,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30303 = cljs.core.get.call(null,inst_30301,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30304 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30305 = ["TAG-FILTER-RQ",self__.id,inst_30293];var inst_30306 = (new cljs.core.PersistentVector(null,3,(5),inst_30304,inst_30305,null));var inst_30307 = cljs.core.clj__GT_js.call(null,inst_30306);var inst_30308 = console.log(inst_30307);var inst_30309 = cljs.core.deref.call(null,inst_30302);var inst_30310 = cljs.core.deref.call(null,inst_30303);var inst_30311 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30309,inst_30310,inst_30293);var inst_30312 = om.core.update_BANG_.call(null,inst_30302,inst_30311);var state_30324__$1 = (function (){var statearr_30340 = state_30324;(statearr_30340[(11)] = inst_30308);
(statearr_30340[(12)] = inst_30312);
return statearr_30340;
})();var statearr_30341_30369 = state_30324__$1;(statearr_30341_30369[(2)] = true);
(statearr_30341_30369[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30325 === (8)))
{var inst_30295 = (state_30324[(8)]);var inst_30298 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30295);var state_30324__$1 = state_30324;var statearr_30342_30370 = state_30324__$1;(statearr_30342_30370[(2)] = inst_30298);
(statearr_30342_30370[(1)] = (10));
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
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_30346 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30346[(0)] = state_machine__11099__auto__);
(statearr_30346[(1)] = (1));
return statearr_30346;
});
var state_machine__11099__auto____1 = (function (state_30324){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_30324);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e30347){if((e30347 instanceof Object))
{var ex__11102__auto__ = e30347;var statearr_30348_30371 = state_30324;(statearr_30348_30371[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30324);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30347;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30372 = state_30324;
state_30324 = G__30372;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_30324){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_30324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216))
})();var state__11156__auto__ = (function (){var statearr_30349 = f__11155__auto__.call(null);(statearr_30349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_30349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216))
);
return c__11154__auto__;
});})(owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216))
;
clustermap.components.filters.tag_filter.t30284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216){
return (function (_30286){var self__ = this;
var _30286__$1 = this;return self__.meta30285;
});})(owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216))
;
clustermap.components.filters.tag_filter.t30284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216){
return (function (_30286,meta30285__$1){var self__ = this;
var _30286__$1 = this;return (new clustermap.components.filters.tag_filter.t30284(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.input_schema30214,self__.map30212,self__.filter_spec,self__.G__30217,self__.constructor30209,self__.validate__6034__auto__,self__.id,self__.output_checker30216,self__.input_checker30215,self__.map30211,self__.output_schema30213,self__.ufv__,meta30285__$1));
});})(owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216))
;
clustermap.components.filters.tag_filter.__GT_t30284 = ((function (owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216){
return (function __GT_t30284(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,input_schema30214__$1,map30212__$1,filter_spec__$1,G__30217__$1,constructor30209__$1,validate__6034__auto____$1,id__$1,output_checker30216__$1,input_checker30215__$1,map30211__$1,output_schema30213__$1,ufv____$1,meta30285){return (new clustermap.components.filters.tag_filter.t30284(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,input_schema30214__$1,map30212__$1,filter_spec__$1,G__30217__$1,constructor30209__$1,validate__6034__auto____$1,id__$1,output_checker30216__$1,input_checker30215__$1,map30211__$1,output_schema30213__$1,ufv____$1,meta30285));
});})(owner,component_filter_rq_chan,map30212,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216))
;
}
return (new clustermap.components.filters.tag_filter.t30284(component_spec,component_filter_rq_chan,owner,data,input_schema30214,map30212,filter_spec,G__30217,constructor30209,validate__6034__auto__,id,output_checker30216,input_checker30215,map30211,output_schema30213,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30373 = output_checker30216.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30373))
{var error__6036__auto___30374 = temp__4126__auto___30373;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30209","constructor30209",-616386476,null),cljs.core.pr_str.call(null,error__6036__auto___30374)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30374,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30213,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30213,input_schema30214,input_checker30215,output_checker30216))
,schema.core.make_fn_schema.call(null,output_schema30213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30214], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___30353){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30208,p__30350){var vec__30352 = p__30350;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30352,(0),null);return component_fnk__7881__auto___30353.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30208,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30208,var_args){
var p__30350 = null;if (arguments.length > 2) {
  p__30350 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30208,p__30350);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__30375){
var data__7882__auto__ = cljs.core.first(arglist__30375);
arglist__30375 = cljs.core.next(arglist__30375);
var owner30208 = cljs.core.first(arglist__30375);
var p__30350 = cljs.core.rest(arglist__30375);
return tag_filter_component__delegate(data__7882__auto__,owner30208,p__30350);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___30353))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30210){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30210);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30210){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
