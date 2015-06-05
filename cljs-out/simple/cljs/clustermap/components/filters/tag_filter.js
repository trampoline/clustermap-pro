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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29782_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29782_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__29783,value){var map__29785 = p__29783;var map__29785__$1 = ((cljs.core.seq_QMARK_.call(null,map__29785))?cljs.core.apply.call(null,cljs.core.hash_map,map__29785):map__29785);var component_spec = map__29785__$1;var tags = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__29786,value){var map__29788 = p__29786;var map__29788__$1 = ((cljs.core.seq_QMARK_.call(null,map__29788))?cljs.core.apply.call(null,cljs.core.hash_map,map__29788):map__29788);var component_spec = map__29788__$1;var tags = cljs.core.get.call(null,map__29788__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29788__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29789,value){var map__29791 = p__29789;var map__29791__$1 = ((cljs.core.seq_QMARK_.call(null,map__29791))?cljs.core.apply.call(null,cljs.core.hash_map,map__29791):map__29791);var component_spec = map__29791__$1;var tags = cljs.core.get.call(null,map__29791__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29791__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29792_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29792_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__29793_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29793_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29795 = schema.core.Any;var input_schema29796 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29794","map29794",1399445638,null))], null);var input_checker29797 = schema.core.checker.call(null,input_schema29796);var output_checker29798 = schema.core.checker.call(null,output_schema29795);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29795,input_schema29796,input_checker29797,output_checker29798){
return (function render_STAR_(G__29799){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29816 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29799], null);var temp__4126__auto___29817 = input_checker29797.call(null,args__6035__auto___29816);if(cljs.core.truth_(temp__4126__auto___29817))
{var error__6036__auto___29818 = temp__4126__auto___29817;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29818)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29818,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29816,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29796,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29794 = G__29799;while(true){
if(cljs.core.map_QMARK_.call(null,map29794))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29794)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29794,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29794,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29795,input_schema29796,input_checker29797,output_checker29798){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29795,input_schema29796,input_checker29797,output_checker29798))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29795,input_schema29796,input_checker29797,output_checker29798){
return (function iter__29808(s__29809){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29795,input_schema29796,input_checker29797,output_checker29798){
return (function (){var s__29809__$1 = s__29809;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29809__$1);if(temp__4126__auto__)
{var s__29809__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29809__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29809__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29811 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29810 = (0);while(true){
if((i__29810 < size__4376__auto__))
{var map__29814 = cljs.core._nth.call(null,c__4375__auto__,i__29810);var map__29814__$1 = ((cljs.core.seq_QMARK_.call(null,map__29814))?cljs.core.apply.call(null,cljs.core.hash_map,map__29814):map__29814);var label__$1 = cljs.core.get.call(null,map__29814__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29814__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29811,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29819 = (i__29810 + (1));
i__29810 = G__29819;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29811),iter__29808.call(null,cljs.core.chunk_rest.call(null,s__29809__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29811),null);
}
} else
{var map__29815 = cljs.core.first.call(null,s__29809__$2);var map__29815__$1 = ((cljs.core.seq_QMARK_.call(null,map__29815))?cljs.core.apply.call(null,cljs.core.hash_map,map__29815):map__29815);var label__$1 = cljs.core.get.call(null,map__29815__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29815__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29808.call(null,cljs.core.rest.call(null,s__29809__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29795,input_schema29796,input_checker29797,output_checker29798))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29795,input_schema29796,input_checker29797,output_checker29798))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29820 = output_checker29798.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29820))
{var error__6036__auto___29821 = temp__4126__auto___29820;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29821)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29821,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29795,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29795,input_schema29796,input_checker29797,output_checker29798))
,schema.core.make_fn_schema.call(null,output_schema29795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29796], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29967 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29827 = schema.core.Any;var input_schema29828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29825","map29825",-256879357,null))], null);var input_checker29829 = schema.core.checker.call(null,input_schema29828);var output_checker29830 = schema.core.checker.call(null,output_schema29827);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830){
return (function constructor29823(G__29831){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29831], null);var temp__4126__auto___29969 = input_checker29829.call(null,args__6035__auto___29968);if(cljs.core.truth_(temp__4126__auto___29969))
{var error__6036__auto___29970 = temp__4126__auto___29969;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29823","constructor29823",-966647366,null),cljs.core.pr_str.call(null,error__6036__auto___29970)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29970,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29968,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29828,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29825 = G__29831;while(true){
if(cljs.core.map_QMARK_.call(null,map29825))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29825)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29825,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29826 = plumbing.fnk.schema.safe_get.call(null,map29825,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29826,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29825,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t29898 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t29898 = (function (component_spec,component_filter_rq_chan,map29825,owner,data,input_checker29829,input_schema29828,G__29831,filter_spec,map29826,validate__6034__auto__,constructor29823,id,ufv__,output_checker29830,output_schema29827,meta29899){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map29825 = map29825;
this.owner = owner;
this.data = data;
this.input_checker29829 = input_checker29829;
this.input_schema29828 = input_schema29828;
this.G__29831 = G__29831;
this.filter_spec = filter_spec;
this.map29826 = map29826;
this.validate__6034__auto__ = validate__6034__auto__;
this.constructor29823 = constructor29823;
this.id = id;
this.ufv__ = ufv__;
this.output_checker29830 = output_checker29830;
this.output_schema29827 = output_schema29827;
this.meta29899 = meta29899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t29898.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t29898.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t29898";
clustermap.components.filters.tag_filter.t29898.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t29898");
});})(owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830))
;
clustermap.components.filters.tag_filter.t29898.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t29898.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830))
;
clustermap.components.filters.tag_filter.t29898.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t29898.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830))
;
clustermap.components.filters.tag_filter.t29898.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t29898.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830){
return (function (state_29938){var state_val_29939 = (state_29938[(1)]);if((state_val_29939 === (7)))
{var inst_29929 = (state_29938[(2)]);var state_29938__$1 = state_29938;if(cljs.core.truth_(inst_29929))
{var statearr_29940_29971 = state_29938__$1;(statearr_29940_29971[(1)] = (11));
} else
{var statearr_29941_29972 = state_29938__$1;(statearr_29941_29972[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29939 === (1)))
{var state_29938__$1 = state_29938;var statearr_29942_29973 = state_29938__$1;(statearr_29942_29973[(2)] = null);
(statearr_29942_29973[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29939 === (4)))
{var inst_29903 = (state_29938[(7)]);var inst_29903__$1 = (state_29938[(2)]);var state_29938__$1 = (function (){var statearr_29943 = state_29938;(statearr_29943[(7)] = inst_29903__$1);
return statearr_29943;
})();if(cljs.core.truth_(inst_29903__$1))
{var statearr_29944_29974 = state_29938__$1;(statearr_29944_29974[(1)] = (5));
} else
{var statearr_29945_29975 = state_29938__$1;(statearr_29945_29975[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29939 === (13)))
{var inst_29934 = (state_29938[(2)]);var state_29938__$1 = state_29938;var statearr_29946_29976 = state_29938__$1;(statearr_29946_29976[(2)] = inst_29934);
(statearr_29946_29976[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29939 === (6)))
{var state_29938__$1 = state_29938;var statearr_29947_29977 = state_29938__$1;(statearr_29947_29977[(2)] = null);
(statearr_29947_29977[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29939 === (3)))
{var inst_29936 = (state_29938[(2)]);var state_29938__$1 = state_29938;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29938__$1,inst_29936);
} else
{if((state_val_29939 === (12)))
{var state_29938__$1 = state_29938;var statearr_29948_29978 = state_29938__$1;(statearr_29948_29978[(2)] = null);
(statearr_29948_29978[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29939 === (2)))
{var state_29938__$1 = state_29938;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29938__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29939 === (11)))
{var state_29938__$1 = state_29938;var statearr_29949_29979 = state_29938__$1;(statearr_29949_29979[(2)] = null);
(statearr_29949_29979[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29939 === (9)))
{var inst_29909 = (state_29938[(8)]);var state_29938__$1 = state_29938;var statearr_29950_29980 = state_29938__$1;(statearr_29950_29980[(2)] = inst_29909);
(statearr_29950_29980[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29939 === (5)))
{var inst_29903 = (state_29938[(7)]);var inst_29909 = (state_29938[(8)]);var inst_29906 = cljs.core.nth.call(null,inst_29903,(0),null);var inst_29907 = cljs.core.nth.call(null,inst_29903,(1),null);var inst_29909__$1 = om.core.get_props.call(null,self__.owner);var inst_29910 = cljs.core.seq_QMARK_.call(null,inst_29909__$1);var state_29938__$1 = (function (){var statearr_29951 = state_29938;(statearr_29951[(8)] = inst_29909__$1);
(statearr_29951[(9)] = inst_29906);
(statearr_29951[(10)] = inst_29907);
return statearr_29951;
})();if(inst_29910)
{var statearr_29952_29981 = state_29938__$1;(statearr_29952_29981[(1)] = (8));
} else
{var statearr_29953_29982 = state_29938__$1;(statearr_29953_29982[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29939 === (10)))
{var inst_29907 = (state_29938[(10)]);var inst_29915 = (state_29938[(2)]);var inst_29916 = cljs.core.get.call(null,inst_29915,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29917 = cljs.core.get.call(null,inst_29915,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29918 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29919 = ["TAG-FILTER-RQ",self__.id,inst_29907];var inst_29920 = (new cljs.core.PersistentVector(null,3,(5),inst_29918,inst_29919,null));var inst_29921 = cljs.core.clj__GT_js.call(null,inst_29920);var inst_29922 = console.log(inst_29921);var inst_29923 = cljs.core.deref.call(null,inst_29916);var inst_29924 = cljs.core.deref.call(null,inst_29917);var inst_29925 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_29923,inst_29924,inst_29907);var inst_29926 = om.core.update_BANG_.call(null,inst_29916,inst_29925);var state_29938__$1 = (function (){var statearr_29954 = state_29938;(statearr_29954[(11)] = inst_29922);
(statearr_29954[(12)] = inst_29926);
return statearr_29954;
})();var statearr_29955_29983 = state_29938__$1;(statearr_29955_29983[(2)] = true);
(statearr_29955_29983[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29939 === (8)))
{var inst_29909 = (state_29938[(8)]);var inst_29912 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29909);var state_29938__$1 = state_29938;var statearr_29956_29984 = state_29938__$1;(statearr_29956_29984[(2)] = inst_29912);
(statearr_29956_29984[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29960 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29960[(0)] = state_machine__11462__auto__);
(statearr_29960[(1)] = (1));
return statearr_29960;
});
var state_machine__11462__auto____1 = (function (state_29938){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29938);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29961){if((e29961 instanceof Object))
{var ex__11465__auto__ = e29961;var statearr_29962_29985 = state_29938;(statearr_29962_29985[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29938);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29961;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29986 = state_29938;
state_29938 = G__29986;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29938){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830))
})();var state__11519__auto__ = (function (){var statearr_29963 = f__11518__auto__.call(null);(statearr_29963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830))
;
clustermap.components.filters.tag_filter.t29898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830){
return (function (_29900){var self__ = this;
var _29900__$1 = this;return self__.meta29899;
});})(owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830))
;
clustermap.components.filters.tag_filter.t29898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830){
return (function (_29900,meta29899__$1){var self__ = this;
var _29900__$1 = this;return (new clustermap.components.filters.tag_filter.t29898(self__.component_spec,self__.component_filter_rq_chan,self__.map29825,self__.owner,self__.data,self__.input_checker29829,self__.input_schema29828,self__.G__29831,self__.filter_spec,self__.map29826,self__.validate__6034__auto__,self__.constructor29823,self__.id,self__.ufv__,self__.output_checker29830,self__.output_schema29827,meta29899__$1));
});})(owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830))
;
clustermap.components.filters.tag_filter.__GT_t29898 = ((function (owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830){
return (function __GT_t29898(component_spec__$1,component_filter_rq_chan__$1,map29825__$1,owner__$1,data__$1,input_checker29829__$1,input_schema29828__$1,G__29831__$1,filter_spec__$1,map29826__$1,validate__6034__auto____$1,constructor29823__$1,id__$1,ufv____$1,output_checker29830__$1,output_schema29827__$1,meta29899){return (new clustermap.components.filters.tag_filter.t29898(component_spec__$1,component_filter_rq_chan__$1,map29825__$1,owner__$1,data__$1,input_checker29829__$1,input_schema29828__$1,G__29831__$1,filter_spec__$1,map29826__$1,validate__6034__auto____$1,constructor29823__$1,id__$1,ufv____$1,output_checker29830__$1,output_schema29827__$1,meta29899));
});})(owner,component_filter_rq_chan,map29826,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830))
;
}
return (new clustermap.components.filters.tag_filter.t29898(component_spec,component_filter_rq_chan,map29825,owner,data,input_checker29829,input_schema29828,G__29831,filter_spec,map29826,validate__6034__auto__,constructor29823,id,ufv__,output_checker29830,output_schema29827,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29987 = output_checker29830.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29987))
{var error__6036__auto___29988 = temp__4126__auto___29987;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29823","constructor29823",-966647366,null),cljs.core.pr_str.call(null,error__6036__auto___29988)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29988,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29827,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29827,input_schema29828,input_checker29829,output_checker29830))
,schema.core.make_fn_schema.call(null,output_schema29827,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29828], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___29967){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner29822,p__29964){var vec__29966 = p__29964;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29966,(0),null);return component_fnk__7881__auto___29967.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29822,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner29822,var_args){
var p__29964 = null;if (arguments.length > 2) {
  p__29964 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner29822,p__29964);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__29989){
var data__7882__auto__ = cljs.core.first(arglist__29989);
arglist__29989 = cljs.core.next(arglist__29989);
var owner29822 = cljs.core.first(arglist__29989);
var p__29964 = cljs.core.rest(arglist__29989);
return tag_filter_component__delegate(data__7882__auto__,owner29822,p__29964);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___29967))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m29824){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m29824);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m29824){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m29824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
