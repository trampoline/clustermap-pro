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
clustermap.components.filters.tag_filter.tag_for_value = (function tag_for_value(tags,value){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__30468_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30468_SHARP_));
}),tags));
});
clustermap.components.filters.tag_filter.filter_for_value = (function filter_for_value(p__30469,value){var map__30471 = p__30469;var map__30471__$1 = ((cljs.core.seq_QMARK_.call(null,map__30471))?cljs.core.apply.call(null,cljs.core.hash_map,map__30471):map__30471);var component_spec = map__30471__$1;var tags = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var tag_type = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355));if(cljs.core.truth_(cljs.core.not_empty.call(null,value)))
{var temp__4126__auto__ = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_(temp__4126__auto__))
{var t = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type",tag_type], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",value], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.filters.tag_filter.get_tag_description = (function get_tag_description(p__30472,value){var map__30474 = p__30472;var map__30474__$1 = ((cljs.core.seq_QMARK_.call(null,map__30474))?cljs.core.apply.call(null,cljs.core.hash_map,map__30474):map__30474);var component_spec = map__30474__$1;var tags = cljs.core.get.call(null,map__30474__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var label = cljs.core.get.call(null,map__30474__$1,new cljs.core.Keyword(null,"label","label",1718410804));var tag_spec = clustermap.components.filters.tag_filter.tag_for_value.call(null,tags,value);if(cljs.core.truth_((function (){var and__3627__auto__ = tag_spec;if(cljs.core.truth_(and__3627__auto__))
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
clustermap.components.filters.tag_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30475,value){var map__30477 = p__30475;var map__30477__$1 = ((cljs.core.seq_QMARK_.call(null,map__30477))?cljs.core.apply.call(null,cljs.core.hash_map,map__30477):map__30477);var component_spec = map__30477__$1;var tags = cljs.core.get.call(null,map__30477__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));var id = cljs.core.get.call(null,map__30477__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.tag_filter.filter_for_value.call(null,component_spec,value);var d = clustermap.components.filters.tag_filter.get_tag_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TAG-FILTER",id,cljs.core.val,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.tag_filter.sort_tags = (function sort_tags(tags){var empty_tag = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30478_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30478_SHARP_));
}),tags));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_tag){
return (function (p1__30479_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30479_SHARP_));
});})(empty_tag))
,tags));return cljs.core.into.call(null,empty_tag,sorted);
});
clustermap.components.filters.tag_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30481 = schema.core.Any;var input_schema30482 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30480","map30480",1626679778,null))], null);var input_checker30483 = schema.core.checker.call(null,input_schema30482);var output_checker30484 = schema.core.checker.call(null,output_schema30481);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30481,input_schema30482,input_checker30483,output_checker30484){
return (function render_STAR_(G__30485){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30502 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30485], null);var temp__4126__auto___30503 = input_checker30483.call(null,args__6035__auto___30502);if(cljs.core.truth_(temp__4126__auto___30503))
{var error__6036__auto___30504 = temp__4126__auto___30503;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30504)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30504,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30502,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30482,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30480 = G__30485;while(true){
if(cljs.core.map_QMARK_.call(null,map30480))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30480)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30480,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,map30480,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var tag_type = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var tags__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.tag_filter.sort_tags.call(null,tags):tags);var select_value = clustermap.components.filters.tag_filter.get_current_value.call(null,components,id);return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": select_value, "style": {"width": "100%"}, "onChange": ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30481,input_schema30482,input_checker30483,output_checker30484){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.tag_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30481,input_schema30482,input_checker30483,output_checker30484))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30481,input_schema30482,input_checker30483,output_checker30484){
return (function iter__30494(s__30495){return (new cljs.core.LazySeq(null,((function (tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30481,input_schema30482,input_checker30483,output_checker30484){
return (function (){var s__30495__$1 = s__30495;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30495__$1);if(temp__4126__auto__)
{var s__30495__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30495__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30495__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30497 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30496 = (0);while(true){
if((i__30496 < size__4376__auto__))
{var map__30500 = cljs.core._nth.call(null,c__4375__auto__,i__30496);var map__30500__$1 = ((cljs.core.seq_QMARK_.call(null,map__30500))?cljs.core.apply.call(null,cljs.core.hash_map,map__30500):map__30500);var label__$1 = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30500__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30497,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30505 = (i__30496 + (1));
i__30496 = G__30505;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30497),iter__30494.call(null,cljs.core.chunk_rest.call(null,s__30495__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30497),null);
}
} else
{var map__30501 = cljs.core.first.call(null,s__30495__$2);var map__30501__$1 = ((cljs.core.seq_QMARK_.call(null,map__30501))?cljs.core.apply.call(null,cljs.core.hash_map,map__30501):map__30501);var label__$1 = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30501__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30494.call(null,cljs.core.rest.call(null,s__30495__$2)));
}
} else
{return null;
}
break;
}
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30481,input_schema30482,input_checker30483,output_checker30484))
,null,null));
});})(tags__$1,select_value,tags,tag_type,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30481,input_schema30482,input_checker30483,output_checker30484))
;return iter__4377__auto__.call(null,tags__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30506 = output_checker30484.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30506))
{var error__6036__auto___30507 = temp__4126__auto___30506;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30507)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30507,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30481,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30481,input_schema30482,input_checker30483,output_checker30484))
,schema.core.make_fn_schema.call(null,output_schema30481,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30482], null)));
})();
clustermap.components.filters.tag_filter.TagFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"tag-type","tag-type",-1992326355),schema.core.Str,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.Str,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30653 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30513 = schema.core.Any;var input_schema30514 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.tag_filter.TagFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30511","map30511",-1448724718,null))], null);var input_checker30515 = schema.core.checker.call(null,input_schema30514);var output_checker30516 = schema.core.checker.call(null,output_schema30513);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function constructor30509(G__30517){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30517], null);var temp__4126__auto___30655 = input_checker30515.call(null,args__6035__auto___30654);if(cljs.core.truth_(temp__4126__auto___30655))
{var error__6036__auto___30656 = temp__4126__auto___30655;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30509","constructor30509",540882256,null),cljs.core.pr_str.call(null,error__6036__auto___30656)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30656,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30654,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30514,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30511 = G__30517;while(true){
if(cljs.core.map_QMARK_.call(null,map30511))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30511)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30511,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30512 = plumbing.fnk.schema.safe_get.call(null,map30511,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30512,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30511,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.tag_filter.t30584 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.tag_filter.t30584 = (function (G__30517,component_spec,component_filter_rq_chan,map30512,owner,input_schema30514,data,input_checker30515,output_checker30516,filter_spec,constructor30509,map30511,validate__6034__auto__,id,ufv__,output_schema30513,meta30585){
this.G__30517 = G__30517;
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map30512 = map30512;
this.owner = owner;
this.input_schema30514 = input_schema30514;
this.data = data;
this.input_checker30515 = input_checker30515;
this.output_checker30516 = output_checker30516;
this.filter_spec = filter_spec;
this.constructor30509 = constructor30509;
this.map30511 = map30511;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.output_schema30513 = output_schema30513;
this.meta30585 = meta30585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.tag_filter.t30584.cljs$lang$type = true;
clustermap.components.filters.tag_filter.t30584.cljs$lang$ctorStr = "clustermap.components.filters.tag-filter/t30584";
clustermap.components.filters.tag_filter.t30584.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.tag-filter/t30584");
});})(owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
;
clustermap.components.filters.tag_filter.t30584.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.tag_filter.t30584.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (_){var self__ = this;
var ___$1 = this;return "tag-filter-component";
});})(owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
;
clustermap.components.filters.tag_filter.t30584.prototype.om$core$IRender$ = true;
clustermap.components.filters.tag_filter.t30584.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.tag_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
;
clustermap.components.filters.tag_filter.t30584.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.tag_filter.t30584.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (state_30624){var state_val_30625 = (state_30624[(1)]);if((state_val_30625 === (7)))
{var inst_30615 = (state_30624[(2)]);var state_30624__$1 = state_30624;if(cljs.core.truth_(inst_30615))
{var statearr_30626_30657 = state_30624__$1;(statearr_30626_30657[(1)] = (11));
} else
{var statearr_30627_30658 = state_30624__$1;(statearr_30627_30658[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30625 === (1)))
{var state_30624__$1 = state_30624;var statearr_30628_30659 = state_30624__$1;(statearr_30628_30659[(2)] = null);
(statearr_30628_30659[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30625 === (4)))
{var inst_30589 = (state_30624[(7)]);var inst_30589__$1 = (state_30624[(2)]);var state_30624__$1 = (function (){var statearr_30629 = state_30624;(statearr_30629[(7)] = inst_30589__$1);
return statearr_30629;
})();if(cljs.core.truth_(inst_30589__$1))
{var statearr_30630_30660 = state_30624__$1;(statearr_30630_30660[(1)] = (5));
} else
{var statearr_30631_30661 = state_30624__$1;(statearr_30631_30661[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30625 === (13)))
{var inst_30620 = (state_30624[(2)]);var state_30624__$1 = state_30624;var statearr_30632_30662 = state_30624__$1;(statearr_30632_30662[(2)] = inst_30620);
(statearr_30632_30662[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30625 === (6)))
{var state_30624__$1 = state_30624;var statearr_30633_30663 = state_30624__$1;(statearr_30633_30663[(2)] = null);
(statearr_30633_30663[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30625 === (3)))
{var inst_30622 = (state_30624[(2)]);var state_30624__$1 = state_30624;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30624__$1,inst_30622);
} else
{if((state_val_30625 === (12)))
{var state_30624__$1 = state_30624;var statearr_30634_30664 = state_30624__$1;(statearr_30634_30664[(2)] = null);
(statearr_30634_30664[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30625 === (2)))
{var state_30624__$1 = state_30624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30624__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30625 === (11)))
{var state_30624__$1 = state_30624;var statearr_30635_30665 = state_30624__$1;(statearr_30635_30665[(2)] = null);
(statearr_30635_30665[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30625 === (9)))
{var inst_30595 = (state_30624[(8)]);var state_30624__$1 = state_30624;var statearr_30636_30666 = state_30624__$1;(statearr_30636_30666[(2)] = inst_30595);
(statearr_30636_30666[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30625 === (5)))
{var inst_30595 = (state_30624[(8)]);var inst_30589 = (state_30624[(7)]);var inst_30592 = cljs.core.nth.call(null,inst_30589,(0),null);var inst_30593 = cljs.core.nth.call(null,inst_30589,(1),null);var inst_30595__$1 = om.core.get_props.call(null,self__.owner);var inst_30596 = cljs.core.seq_QMARK_.call(null,inst_30595__$1);var state_30624__$1 = (function (){var statearr_30637 = state_30624;(statearr_30637[(9)] = inst_30592);
(statearr_30637[(10)] = inst_30593);
(statearr_30637[(8)] = inst_30595__$1);
return statearr_30637;
})();if(inst_30596)
{var statearr_30638_30667 = state_30624__$1;(statearr_30638_30667[(1)] = (8));
} else
{var statearr_30639_30668 = state_30624__$1;(statearr_30639_30668[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30625 === (10)))
{var inst_30593 = (state_30624[(10)]);var inst_30601 = (state_30624[(2)]);var inst_30602 = cljs.core.get.call(null,inst_30601,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30603 = cljs.core.get.call(null,inst_30601,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30604 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30605 = ["TAG-FILTER-RQ",self__.id,inst_30593];var inst_30606 = (new cljs.core.PersistentVector(null,3,(5),inst_30604,inst_30605,null));var inst_30607 = cljs.core.clj__GT_js.call(null,inst_30606);var inst_30608 = console.log(inst_30607);var inst_30609 = cljs.core.deref.call(null,inst_30602);var inst_30610 = cljs.core.deref.call(null,inst_30603);var inst_30611 = clustermap.components.filters.tag_filter.set_filters_for_value.call(null,inst_30609,inst_30610,inst_30593);var inst_30612 = om.core.update_BANG_.call(null,inst_30602,inst_30611);var state_30624__$1 = (function (){var statearr_30640 = state_30624;(statearr_30640[(11)] = inst_30612);
(statearr_30640[(12)] = inst_30608);
return statearr_30640;
})();var statearr_30641_30669 = state_30624__$1;(statearr_30641_30669[(2)] = true);
(statearr_30641_30669[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30625 === (8)))
{var inst_30595 = (state_30624[(8)]);var inst_30598 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30595);var state_30624__$1 = state_30624;var statearr_30642_30670 = state_30624__$1;(statearr_30642_30670[(2)] = inst_30598);
(statearr_30642_30670[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30646 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30646[(0)] = state_machine__9111__auto__);
(statearr_30646[(1)] = (1));
return statearr_30646;
});
var state_machine__9111__auto____1 = (function (state_30624){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30624);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30647){if((e30647 instanceof Object))
{var ex__9114__auto__ = e30647;var statearr_30648_30671 = state_30624;(statearr_30648_30671[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30624);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30647;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30672 = state_30624;
state_30624 = G__30672;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30624){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
})();var state__9127__auto__ = (function (){var statearr_30649 = f__9126__auto__.call(null);(statearr_30649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
;
clustermap.components.filters.tag_filter.t30584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (_30586){var self__ = this;
var _30586__$1 = this;return self__.meta30585;
});})(owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
;
clustermap.components.filters.tag_filter.t30584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function (_30586,meta30585__$1){var self__ = this;
var _30586__$1 = this;return (new clustermap.components.filters.tag_filter.t30584(self__.G__30517,self__.component_spec,self__.component_filter_rq_chan,self__.map30512,self__.owner,self__.input_schema30514,self__.data,self__.input_checker30515,self__.output_checker30516,self__.filter_spec,self__.constructor30509,self__.map30511,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.output_schema30513,meta30585__$1));
});})(owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
;
clustermap.components.filters.tag_filter.__GT_t30584 = ((function (owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516){
return (function __GT_t30584(G__30517__$1,component_spec__$1,component_filter_rq_chan__$1,map30512__$1,owner__$1,input_schema30514__$1,data__$1,input_checker30515__$1,output_checker30516__$1,filter_spec__$1,constructor30509__$1,map30511__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_schema30513__$1,meta30585){return (new clustermap.components.filters.tag_filter.t30584(G__30517__$1,component_spec__$1,component_filter_rq_chan__$1,map30512__$1,owner__$1,input_schema30514__$1,data__$1,input_checker30515__$1,output_checker30516__$1,filter_spec__$1,constructor30509__$1,map30511__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_schema30513__$1,meta30585));
});})(owner,component_filter_rq_chan,map30512,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
;
}
return (new clustermap.components.filters.tag_filter.t30584(G__30517,component_spec,component_filter_rq_chan,map30512,owner,input_schema30514,data,input_checker30515,output_checker30516,filter_spec,constructor30509,map30511,validate__6034__auto__,id,ufv__,output_schema30513,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30673 = output_checker30516.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30673))
{var error__6036__auto___30674 = temp__4126__auto___30673;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30509","constructor30509",540882256,null),cljs.core.pr_str.call(null,error__6036__auto___30674)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30674,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30513,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30513,input_schema30514,input_checker30515,output_checker30516))
,schema.core.make_fn_schema.call(null,output_schema30513,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30514], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.tag_filter.tag_filter_component = ((function (component_fnk__7881__auto___30653){
return (function() { 
var tag_filter_component__delegate = function (data__7882__auto__,owner30508,p__30650){var vec__30652 = p__30650;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30652,(0),null);return component_fnk__7881__auto___30653.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30508,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var tag_filter_component = function (data__7882__auto__,owner30508,var_args){
var p__30650 = null;if (arguments.length > 2) {
  p__30650 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return tag_filter_component__delegate.call(this,data__7882__auto__,owner30508,p__30650);};
tag_filter_component.cljs$lang$maxFixedArity = 2;
tag_filter_component.cljs$lang$applyTo = (function (arglist__30675){
var data__7882__auto__ = cljs.core.first(arglist__30675);
arglist__30675 = cljs.core.next(arglist__30675);
var owner30508 = cljs.core.first(arglist__30675);
var p__30650 = cljs.core.rest(arglist__30675);
return tag_filter_component__delegate(data__7882__auto__,owner30508,p__30650);
});
tag_filter_component.cljs$core$IFn$_invoke$arity$variadic = tag_filter_component__delegate;
return tag_filter_component;
})()
;})(component_fnk__7881__auto___30653))
;
clustermap.components.filters.tag_filter.__GT_tag_filter_component = (function() {
var __GT_tag_filter_component = null;
var __GT_tag_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__);
});
var __GT_tag_filter_component__2 = (function (cursor__7850__auto__,m30510){return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,cursor__7850__auto__,m30510);
});
__GT_tag_filter_component = function(cursor__7850__auto__,m30510){
switch(arguments.length){
case 1:
return __GT_tag_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_tag_filter_component__2.call(this,cursor__7850__auto__,m30510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_tag_filter_component__1;
__GT_tag_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_tag_filter_component__2;
return __GT_tag_filter_component;
})()
;
