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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30605_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30605_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30606,value){var map__30608 = p__30606;var map__30608__$1 = ((cljs.core.seq_QMARK_.call(null,map__30608))?cljs.core.apply.call(null,cljs.core.hash_map,map__30608):map__30608);var component_spec = map__30608__$1;var tags = cljs.core.get.call(null,map__30608__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30608__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30609,value){var map__30611 = p__30609;var map__30611__$1 = ((cljs.core.seq_QMARK_.call(null,map__30611))?cljs.core.apply.call(null,cljs.core.hash_map,map__30611):map__30611);var component_spec = map__30611__$1;var tags = cljs.core.get.call(null,map__30611__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30611__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30612,value){var map__30614 = p__30612;var map__30614__$1 = ((cljs.core.seq_QMARK_.call(null,map__30614))?cljs.core.apply.call(null,cljs.core.hash_map,map__30614):map__30614);var component_spec = map__30614__$1;var tags = cljs.core.get.call(null,map__30614__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30614__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30615_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30615_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30616_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30616_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30618 = schema.core.Any;var input_schema30619 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30617","map30617",-221017014,null))], null);var input_checker30620 = schema.core.checker.call(null,input_schema30619);var output_checker30621 = schema.core.checker.call(null,output_schema30618);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30618,input_schema30619,input_checker30620,output_checker30621){
return (function render_STAR_(G__30622){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30639 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30622], null);var temp__4126__auto___30640 = input_checker30620.call(null,args__6035__auto___30639);if(cljs.core.truth_(temp__4126__auto___30640))
{var error__6036__auto___30641 = temp__4126__auto___30640;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30641)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30641,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30639,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30619,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30617 = G__30622;while(true){
if(cljs.core.map_QMARK_.call(null,map30617))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30617)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30617,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30617,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30618,input_schema30619,input_checker30620,output_checker30621){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30618,input_schema30619,input_checker30620,output_checker30621))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30618,input_schema30619,input_checker30620,output_checker30621){
return (function iter__30631(s__30632){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30618,input_schema30619,input_checker30620,output_checker30621){
return (function (){var s__30632__$1 = s__30632;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30632__$1);if(temp__4126__auto__)
{var s__30632__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30632__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30632__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30634 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30633 = (0);while(true){
if((i__30633 < size__4376__auto__))
{var map__30637 = cljs.core._nth.call(null,c__4375__auto__,i__30633);var map__30637__$1 = ((cljs.core.seq_QMARK_.call(null,map__30637))?cljs.core.apply.call(null,cljs.core.hash_map,map__30637):map__30637);var label__$1 = cljs.core.get.call(null,map__30637__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30637__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30634,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30642 = (i__30633 + (1));
i__30633 = G__30642;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30634),iter__30631.call(null,cljs.core.chunk_rest.call(null,s__30632__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30634),null);
}
} else
{var map__30638 = cljs.core.first.call(null,s__30632__$2);var map__30638__$1 = ((cljs.core.seq_QMARK_.call(null,map__30638))?cljs.core.apply.call(null,cljs.core.hash_map,map__30638):map__30638);var label__$1 = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30631.call(null,cljs.core.rest.call(null,s__30632__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30618,input_schema30619,input_checker30620,output_checker30621))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30618,input_schema30619,input_checker30620,output_checker30621))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30643 = output_checker30621.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30643))
{var error__6036__auto___30644 = temp__4126__auto___30643;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30644)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30644,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30618,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30618,input_schema30619,input_checker30620,output_checker30621))
,schema.core.make_fn_schema.call(null,output_schema30618,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30619], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30790 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30650 = schema.core.Any;var input_schema30651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30648","map30648",1011665128,null))], null);var input_checker30652 = schema.core.checker.call(null,input_schema30651);var output_checker30653 = schema.core.checker.call(null,output_schema30650);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653){
return (function constructor30646(G__30654){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30791 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30654], null);var temp__4126__auto___30792 = input_checker30652.call(null,args__6035__auto___30791);if(cljs.core.truth_(temp__4126__auto___30792))
{var error__6036__auto___30793 = temp__4126__auto___30792;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30646","constructor30646",-852854233,null),cljs.core.pr_str.call(null,error__6036__auto___30793)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30793,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30791,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30651,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30648 = G__30654;while(true){
if(cljs.core.map_QMARK_.call(null,map30648))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30648)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30648,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30649 = plumbing.fnk.schema.safe_get.call(null,map30648,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30649,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30648,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30721 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30721 = (function (component_spec,component_filter_rq_chan,owner,input_checker30652,data,constructor30646,map30648,output_checker30653,output_schema30650,filter_spec,map30649,G__30654,input_schema30651,validate__6034__auto__,id,ufv__,meta30722){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.input_checker30652 = input_checker30652;
this.data = data;
this.constructor30646 = constructor30646;
this.map30648 = map30648;
this.output_checker30653 = output_checker30653;
this.output_schema30650 = output_schema30650;
this.filter_spec = filter_spec;
this.map30649 = map30649;
this.G__30654 = G__30654;
this.input_schema30651 = input_schema30651;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta30722 = meta30722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30721.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30721.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30721";
clustermap.components.filters.tag_filter.t30721.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t30721");
});})(owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653))
;
clustermap.components.filters.tag_filter.t30721.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30721.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653))
;
clustermap.components.filters.tag_filter.t30721.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30721.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653))
;
clustermap.components.filters.tag_filter.t30721.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30721.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653){
return (function (state_30761){var state_val_30762 = (state_30761[(1)]);if((state_val_30762 === (7)))
{var inst_30752 = (state_30761[(2)]);var state_30761__$1 = state_30761;if(cljs.core.truth_(inst_30752))
{var statearr_30763_30794 = state_30761__$1;(statearr_30763_30794[(1)] = (11));
} else
{var statearr_30764_30795 = state_30761__$1;(statearr_30764_30795[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30762 === (1)))
{var state_30761__$1 = state_30761;var statearr_30765_30796 = state_30761__$1;(statearr_30765_30796[(2)] = null);
(statearr_30765_30796[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30762 === (4)))
{var inst_30726 = (state_30761[(7)]);var inst_30726__$1 = (state_30761[(2)]);var state_30761__$1 = (function (){var statearr_30766 = state_30761;(statearr_30766[(7)] = inst_30726__$1);
return statearr_30766;
})();if(cljs.core.truth_(inst_30726__$1))
{var statearr_30767_30797 = state_30761__$1;(statearr_30767_30797[(1)] = (5));
} else
{var statearr_30768_30798 = state_30761__$1;(statearr_30768_30798[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30762 === (13)))
{var inst_30757 = (state_30761[(2)]);var state_30761__$1 = state_30761;var statearr_30769_30799 = state_30761__$1;(statearr_30769_30799[(2)] = inst_30757);
(statearr_30769_30799[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30762 === (6)))
{var state_30761__$1 = state_30761;var statearr_30770_30800 = state_30761__$1;(statearr_30770_30800[(2)] = null);
(statearr_30770_30800[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30762 === (3)))
{var inst_30759 = (state_30761[(2)]);var state_30761__$1 = state_30761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30761__$1,inst_30759);
} else
{if((state_val_30762 === (12)))
{var state_30761__$1 = state_30761;var statearr_30771_30801 = state_30761__$1;(statearr_30771_30801[(2)] = null);
(statearr_30771_30801[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30762 === (2)))
{var state_30761__$1 = state_30761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30761__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30762 === (11)))
{var state_30761__$1 = state_30761;var statearr_30772_30802 = state_30761__$1;(statearr_30772_30802[(2)] = null);
(statearr_30772_30802[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30762 === (9)))
{var inst_30732 = (state_30761[(8)]);var state_30761__$1 = state_30761;var statearr_30773_30803 = state_30761__$1;(statearr_30773_30803[(2)] = inst_30732);
(statearr_30773_30803[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30762 === (5)))
{var inst_30726 = (state_30761[(7)]);var inst_30732 = (state_30761[(8)]);var inst_30729 = cljs.core.nth.call(null,inst_30726,(0),null);var inst_30730 = cljs.core.nth.call(null,inst_30726,(1),null);var inst_30732__$1 = om.core.get_props.call(null,self__.owner);var inst_30733 = cljs.core.seq_QMARK_.call(null,inst_30732__$1);var state_30761__$1 = (function (){var statearr_30774 = state_30761;(statearr_30774[(9)] = inst_30730);
(statearr_30774[(8)] = inst_30732__$1);
(statearr_30774[(10)] = inst_30729);
return statearr_30774;
})();if(inst_30733)
{var statearr_30775_30804 = state_30761__$1;(statearr_30775_30804[(1)] = (8));
} else
{var statearr_30776_30805 = state_30761__$1;(statearr_30776_30805[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30762 === (10)))
{var inst_30730 = (state_30761[(9)]);var inst_30738 = (state_30761[(2)]);var inst_30739 = cljs.core.get.call(null,inst_30738,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30740 = cljs.core.get.call(null,inst_30738,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30741 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30742 = ["TAG-FILTER-RQ",self__.id,inst_30730];var inst_30743 = (new cljs.core.PersistentVector(null,3,(5),inst_30741,inst_30742,null));var inst_30744 = cljs.core.clj__GT_js.call(null,inst_30743);var inst_30745 = console.log(inst_30744);var inst_30746 = cljs.core.deref.call(null,inst_30739);var inst_30747 = cljs.core.deref.call(null,inst_30740);var inst_30748 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30746,inst_30747,inst_30730);var inst_30749 = om.core.update_BANG_.call(null,inst_30739,inst_30748);var state_30761__$1 = (function (){var statearr_30777 = state_30761;(statearr_30777[(11)] = inst_30745);
(statearr_30777[(12)] = inst_30749);
return statearr_30777;
})();var statearr_30778_30806 = state_30761__$1;(statearr_30778_30806[(2)] = true);
(statearr_30778_30806[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30762 === (8)))
{var inst_30732 = (state_30761[(8)]);var inst_30735 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30732);var state_30761__$1 = state_30761;var statearr_30779_30807 = state_30761__$1;(statearr_30779_30807[(2)] = inst_30735);
(statearr_30779_30807[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30783 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30783[(0)] = state_machine__9111__auto__);
(statearr_30783[(1)] = (1));
return statearr_30783;
});
var state_machine__9111__auto____1 = (function (state_30761){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30761);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30784){if((e30784 instanceof Object))
{var ex__9114__auto__ = e30784;var statearr_30785_30808 = state_30761;(statearr_30785_30808[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30761);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30784;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30809 = state_30761;
state_30761 = G__30809;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30761){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653))
})();var state__9127__auto__ = (function (){var statearr_30786 = f__9126__auto__.call(null);(statearr_30786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653))
;
clustermap.components.filters.tag_filter.t30721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653){
return (function (_30723){var self__ = this;
var _30723__$1 = this;return self__.meta30722;
});})(owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653))
;
clustermap.components.filters.tag_filter.t30721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653){
return (function (_30723,meta30722__$1){var self__ = this;
var _30723__$1 = this;return (new clustermap.components.filters.tag_filter.t30721(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.input_checker30652,self__.data,self__.constructor30646,self__.map30648,self__.output_checker30653,self__.output_schema30650,self__.filter_spec,self__.map30649,self__.G__30654,self__.input_schema30651,self__.validate__6034__auto__,self__.id,self__.ufv__,meta30722__$1));
});})(owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653))
;
clustermap.components.filters.tag_filter.__GT_t30721 = ((function (owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653){
return (function __GT_t30721(component_spec__$1,component_filter_rq_chan__$1,owner__$1,input_checker30652__$1,data__$1,constructor30646__$1,map30648__$1,output_checker30653__$1,output_schema30650__$1,filter_spec__$1,map30649__$1,G__30654__$1,input_schema30651__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30722){return (new clustermap.components.filters.tag_filter.t30721(component_spec__$1,component_filter_rq_chan__$1,owner__$1,input_checker30652__$1,data__$1,constructor30646__$1,map30648__$1,output_checker30653__$1,output_schema30650__$1,filter_spec__$1,map30649__$1,G__30654__$1,input_schema30651__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30722));
});})(owner,component_filter_rq_chan,map30649,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653))
;
}
return (new clustermap.components.filters.tag_filter.t30721(component_spec,component_filter_rq_chan,owner,input_checker30652,data,constructor30646,map30648,output_checker30653,output_schema30650,filter_spec,map30649,G__30654,input_schema30651,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30810 = output_checker30653.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30810))
{var error__6036__auto___30811 = temp__4126__auto___30810;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30646","constructor30646",-852854233,null),cljs.core.pr_str.call(null,error__6036__auto___30811)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30811,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30650,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30650,input_schema30651,input_checker30652,output_checker30653))
,schema.core.make_fn_schema.call(null,output_schema30650,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30651], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___30790){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30645,p__30787){var vec__30789 = p__30787;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30789,(0),null);return component_fnk__7881__auto___30790.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30645,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30645,var_args){
var p__30787 = null;if (arguments.length > 2) {
  p__30787 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30645,p__30787);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__30812){
var data__7882__auto__ = cljs.core.first(arglist__30812);
arglist__30812 = cljs.core.next(arglist__30812);
var owner30645 = cljs.core.first(arglist__30812);
var p__30787 = cljs.core.rest(arglist__30812);
return tag_filter_component__delegate(data__7882__auto__,owner30645,p__30787);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___30790))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30647){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30647);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30647){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
