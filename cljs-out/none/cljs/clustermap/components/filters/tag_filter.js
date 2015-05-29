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
clustermap.components.filters.tag_filter.get_current_value = (function get_current_value(components,id){var or__11514__auto__ = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"must","must",-243952061),(1),new cljs.core.Keyword(null,"term","term",-1817390416),"tag"], null));if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return "";
}
});
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28997_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28997_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__28998,value){var map__29000 = p__28998;var map__29000__$1 = ((cljs.core.seq_QMARK_.call(null,map__29000))?cljs.core.apply.call(null,cljs.core.hash_map,map__29000):map__29000);var component_spec = map__29000__$1;var tags = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__29000__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__29001,value){var map__29003 = p__29001;var map__29003__$1 = ((cljs.core.seq_QMARK_.call(null,map__29003))?cljs.core.apply.call(null,cljs.core.hash_map,map__29003):map__29003);var component_spec = map__29003__$1;var tags = cljs.core.get.call(null,map__29003__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__29003__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__11502__auto__ = tag_spec;if(cljs.core.truth_(and__11502__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911).cljs$core$IFn$_invoke$arity$1(tag_spec));
} else
{return and__11502__auto__;
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29004,value){var map__29006 = p__29004;var map__29006__$1 = ((cljs.core.seq_QMARK_.call(null,map__29006))?cljs.core.apply.call(null,cljs.core.hash_map,map__29006):map__29006);var component_spec = map__29006__$1;var tags = cljs.core.get.call(null,map__29006__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__29006__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29007_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29007_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__29008_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29008_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29010 = schema.core.Any;var input_schema29011 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29009","map29009",252252532,null))], null);var input_checker29012 = schema.core.checker.call(null,input_schema29011);var output_checker29013 = schema.core.checker.call(null,output_schema29010);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29010,input_schema29011,input_checker29012,output_checker29013){
return (function render_STAR_(G__29014){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___29031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29014], null);var temp__4126__auto___29032 = input_checker29012.call(null,args__13910__auto___29031);if(cljs.core.truth_(temp__4126__auto___29032))
{var error__13911__auto___29033 = temp__4126__auto___29032;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___29033)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___29033,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___29031,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29011,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map29009 = G__29014;while(true){
if(cljs.core.map_QMARK_.call(null,map29009))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29009)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29009,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map29009,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema29010,input_schema29011,input_checker29012,output_checker29013){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema29010,input_schema29011,input_checker29012,output_checker29013))
},cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema29010,input_schema29011,input_checker29012,output_checker29013){
return (function iter__29023(s__29024){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema29010,input_schema29011,input_checker29012,output_checker29013){
return (function (){var s__29024__$1 = s__29024;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29024__$1);if(temp__4126__auto__)
{var s__29024__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29024__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__29024__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__29026 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__29025 = (0);while(true){
if((i__29025 < size__12251__auto__))
{var map__29029 = cljs.core._nth.call(null,c__12250__auto__,i__29025);var map__29029__$1 = ((cljs.core.seq_QMARK_.call(null,map__29029))?cljs.core.apply.call(null,cljs.core.hash_map,map__29029):map__29029);var label__$1 = cljs.core.get.call(null,map__29029__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29029__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29026,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29034 = (i__29025 + (1));
i__29025 = G__29034;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29026),iter__29023.call(null,cljs.core.chunk_rest.call(null,s__29024__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29026),null);
}
} else
{var map__29030 = cljs.core.first.call(null,s__29024__$2);var map__29030__$1 = ((cljs.core.seq_QMARK_.call(null,map__29030))?cljs.core.apply.call(null,cljs.core.hash_map,map__29030):map__29030);var label__$1 = cljs.core.get.call(null,map__29030__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29030__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29023.call(null,cljs.core.rest.call(null,s__29024__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema29010,input_schema29011,input_checker29012,output_checker29013))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema29010,input_schema29011,input_checker29012,output_checker29013))
;return iter__12252__auto__.call(null,tags__$1);
})()))));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___29035 = output_checker29013.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___29035))
{var error__13911__auto___29036 = temp__4126__auto___29035;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___29036)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___29036,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29010,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema29010,input_schema29011,input_checker29012,output_checker29013))
,schema.core.make_fn_schema.call(null,output_schema29010,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29011], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__15756__auto___29182 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29042 = schema.core.Any;var input_schema29043 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29040","map29040",-1073461477,null))], null);var input_checker29044 = schema.core.checker.call(null,input_schema29043);var output_checker29045 = schema.core.checker.call(null,output_schema29042);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045){
return (function constructor29038(G__29046){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___29183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29046], null);var temp__4126__auto___29184 = input_checker29044.call(null,args__13910__auto___29183);if(cljs.core.truth_(temp__4126__auto___29184))
{var error__13911__auto___29185 = temp__4126__auto___29184;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29038","constructor29038",-401263888,null),cljs.core.pr_str.call(null,error__13911__auto___29185)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___29185,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___29183,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29043,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map29040 = G__29046;while(true){
if(cljs.core.map_QMARK_.call(null,map29040))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29040)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29040,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29041 = plumbing.fnk.schema.safe_get.call(null,map29040,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29041,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29040,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t29113 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t29113 = (function (G__29046,component_spec,component_filter_rq_chan,owner,data,output_schema29042,validate__13909__auto__,map29041,filter_spec,constructor29038,output_checker29045,id,input_schema29043,map29040,ufv__,input_checker29044,meta29114){
this.G__29046 = G__29046;
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.output_schema29042 = output_schema29042;
this.validate__13909__auto__ = validate__13909__auto__;
this.map29041 = map29041;
this.filter_spec = filter_spec;
this.constructor29038 = constructor29038;
this.output_checker29045 = output_checker29045;
this.id = id;
this.input_schema29043 = input_schema29043;
this.map29040 = map29040;
this.ufv__ = ufv__;
this.input_checker29044 = input_checker29044;
this.meta29114 = meta29114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t29113.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t29113.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t29113";
clustermap.components.filters.tag_filter.t29113.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.filters.tag-filter/t29113");
});})(owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045))
;
clustermap.components.filters.tag_filter.t29113.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t29113.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045))
;
clustermap.components.filters.tag_filter.t29113.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t29113.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045))
;
clustermap.components.filters.tag_filter.t29113.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t29113.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045){
return (function (_){var self__ = this;
var ___$1 = this;var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,___$1,owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,___$1,owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045){
return (function (state_29153){var state_val_29154 = (state_29153[(1)]);if((state_val_29154 === (7)))
{var inst_29144 = (state_29153[(2)]);var state_29153__$1 = state_29153;if(cljs.core.truth_(inst_29144))
{var statearr_29155_29186 = state_29153__$1;(statearr_29155_29186[(1)] = (11));
} else
{var statearr_29156_29187 = state_29153__$1;(statearr_29156_29187[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29154 === (1)))
{var state_29153__$1 = state_29153;var statearr_29157_29188 = state_29153__$1;(statearr_29157_29188[(2)] = null);
(statearr_29157_29188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29154 === (4)))
{var inst_29118 = (state_29153[(7)]);var inst_29118__$1 = (state_29153[(2)]);var state_29153__$1 = (function (){var statearr_29158 = state_29153;(statearr_29158[(7)] = inst_29118__$1);
return statearr_29158;
})();if(cljs.core.truth_(inst_29118__$1))
{var statearr_29159_29189 = state_29153__$1;(statearr_29159_29189[(1)] = (5));
} else
{var statearr_29160_29190 = state_29153__$1;(statearr_29160_29190[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29154 === (13)))
{var inst_29149 = (state_29153[(2)]);var state_29153__$1 = state_29153;var statearr_29161_29191 = state_29153__$1;(statearr_29161_29191[(2)] = inst_29149);
(statearr_29161_29191[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29154 === (6)))
{var state_29153__$1 = state_29153;var statearr_29162_29192 = state_29153__$1;(statearr_29162_29192[(2)] = null);
(statearr_29162_29192[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29154 === (3)))
{var inst_29151 = (state_29153[(2)]);var state_29153__$1 = state_29153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29153__$1,inst_29151);
} else
{if((state_val_29154 === (12)))
{var state_29153__$1 = state_29153;var statearr_29163_29193 = state_29153__$1;(statearr_29163_29193[(2)] = null);
(statearr_29163_29193[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29154 === (2)))
{var state_29153__$1 = state_29153;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29153__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29154 === (11)))
{var state_29153__$1 = state_29153;var statearr_29164_29194 = state_29153__$1;(statearr_29164_29194[(2)] = null);
(statearr_29164_29194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29154 === (9)))
{var inst_29124 = (state_29153[(8)]);var state_29153__$1 = state_29153;var statearr_29165_29195 = state_29153__$1;(statearr_29165_29195[(2)] = inst_29124);
(statearr_29165_29195[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29154 === (5)))
{var inst_29118 = (state_29153[(7)]);var inst_29124 = (state_29153[(8)]);var inst_29121 = cljs.core.nth.call(null,inst_29118,(0),null);var inst_29122 = cljs.core.nth.call(null,inst_29118,(1),null);var inst_29124__$1 = om.core.get_props.call(null,self__.owner);var inst_29125 = cljs.core.seq_QMARK_.call(null,inst_29124__$1);var state_29153__$1 = (function (){var statearr_29166 = state_29153;(statearr_29166[(9)] = inst_29121);
(statearr_29166[(10)] = inst_29122);
(statearr_29166[(8)] = inst_29124__$1);
return statearr_29166;
})();if(inst_29125)
{var statearr_29167_29196 = state_29153__$1;(statearr_29167_29196[(1)] = (8));
} else
{var statearr_29168_29197 = state_29153__$1;(statearr_29168_29197[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29154 === (10)))
{var inst_29122 = (state_29153[(10)]);var inst_29130 = (state_29153[(2)]);var inst_29131 = cljs.core.get.call(null,inst_29130,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29132 = cljs.core.get.call(null,inst_29130,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29133 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29134 = ["TAG-FILTER-RQ",self__.id,inst_29122];var inst_29135 = (new cljs.core.PersistentVector(null,3,(5),inst_29133,inst_29134,null));var inst_29136 = cljs.core.clj__GT_js.call(null,inst_29135);var inst_29137 = console.log(inst_29136);var inst_29138 = cljs.core.deref.call(null,inst_29131);var inst_29139 = cljs.core.deref.call(null,inst_29132);var inst_29140 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_29138,inst_29139,inst_29122);var inst_29141 = om.core.update_BANG_.call(null,inst_29131,inst_29140);var state_29153__$1 = (function (){var statearr_29169 = state_29153;(statearr_29169[(11)] = inst_29141);
(statearr_29169[(12)] = inst_29137);
return statearr_29169;
})();var statearr_29170_29198 = state_29153__$1;(statearr_29170_29198[(2)] = true);
(statearr_29170_29198[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29154 === (8)))
{var inst_29124 = (state_29153[(8)]);var inst_29127 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29124);var state_29153__$1 = state_29153;var statearr_29171_29199 = state_29153__$1;(statearr_29171_29199[(2)] = inst_29127);
(statearr_29171_29199[(1)] = (10));
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
});})(c__18867__auto__,___$1,owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045))
;return ((function (switch__18811__auto__,c__18867__auto__,___$1,owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_29175 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29175[(0)] = state_machine__18812__auto__);
(statearr_29175[(1)] = (1));
return statearr_29175;
});
var state_machine__18812__auto____1 = (function (state_29153){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_29153);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e29176){if((e29176 instanceof Object))
{var ex__18815__auto__ = e29176;var statearr_29177_29200 = state_29153;(statearr_29177_29200[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29153);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29176;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29201 = state_29153;
state_29153 = G__29201;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_29153){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_29153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,___$1,owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045))
})();var state__18869__auto__ = (function (){var statearr_29178 = f__18868__auto__.call(null);(statearr_29178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_29178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,___$1,owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045))
);
return c__18867__auto__;
});})(owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045))
;
clustermap.components.filters.tag_filter.t29113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045){
return (function (_29115){var self__ = this;
var _29115__$1 = this;return self__.meta29114;
});})(owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045))
;
clustermap.components.filters.tag_filter.t29113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045){
return (function (_29115,meta29114__$1){var self__ = this;
var _29115__$1 = this;return (new clustermap.components.filters.tag_filter.t29113(self__.G__29046,self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.output_schema29042,self__.validate__13909__auto__,self__.map29041,self__.filter_spec,self__.constructor29038,self__.output_checker29045,self__.id,self__.input_schema29043,self__.map29040,self__.ufv__,self__.input_checker29044,meta29114__$1));
});})(owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045))
;
clustermap.components.filters.tag_filter.__GT_t29113 = ((function (owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045){
return (function __GT_t29113(G__29046__$1,component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,output_schema29042__$1,validate__13909__auto____$1,map29041__$1,filter_spec__$1,constructor29038__$1,output_checker29045__$1,id__$1,input_schema29043__$1,map29040__$1,ufv____$1,input_checker29044__$1,meta29114){return (new clustermap.components.filters.tag_filter.t29113(G__29046__$1,component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,output_schema29042__$1,validate__13909__auto____$1,map29041__$1,filter_spec__$1,constructor29038__$1,output_checker29045__$1,id__$1,input_schema29043__$1,map29040__$1,ufv____$1,input_checker29044__$1,meta29114));
});})(owner,component_filter_rq_chan,map29041,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045))
;
}
return (new clustermap.components.filters.tag_filter.t29113(G__29046,component_spec,component_filter_rq_chan,owner,data,output_schema29042,validate__13909__auto__,map29041,filter_spec,constructor29038,output_checker29045,id,input_schema29043,map29040,ufv__,input_checker29044,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___29202 = output_checker29045.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___29202))
{var error__13911__auto___29203 = temp__4126__auto___29202;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29038","constructor29038",-401263888,null),cljs.core.pr_str.call(null,error__13911__auto___29203)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___29203,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29042,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema29042,input_schema29043,input_checker29044,output_checker29045))
,schema.core.make_fn_schema.call(null,output_schema29042,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29043], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__15756__auto___29182){
return (function() { 
var tag_filter_component__delegate = function (data__15757__auto__,owner29037,p__29179){var vec__29181 = p__29179;var opts__15758__auto__ = cljs.core.nth.call(null,vec__29181,(0),null);return component_fnk__15756__auto___29182.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15758__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29037,new cljs.core.Keyword(null,"data","data",-232669377),data__15757__auto__], null));
};
var tag_filter_component = function (data__15757__auto__,owner29037,var_args){
var p__29179 = null;if (arguments.length > 2) {
  p__29179 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__15757__auto__,owner29037,p__29179);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__29204){
var data__15757__auto__ = cljs.core.first(arglist__29204);
arglist__29204 = cljs.core.next(arglist__29204);
var owner29037 = cljs.core.first(arglist__29204);
var p__29179 = cljs.core.rest(arglist__29204);
return tag_filter_component__delegate(data__15757__auto__,owner29037,p__29179);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__15756__auto___29182))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__15725__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__15725__auto__,m29039){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__15725__auto__,m29039);
});
__GT_tag_filter_component = function(cursor__15725__auto__,m29039){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__15725__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__15725__auto__,m29039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;

//# sourceMappingURL=tag_filter.js.map