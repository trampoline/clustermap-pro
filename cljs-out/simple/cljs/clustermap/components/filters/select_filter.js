// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.select_filter');
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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30556(s__30557){return (new cljs.core.LazySeq(null,(function (){var s__30557__$1 = s__30557;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30557__$1);if(temp__4126__auto__)
{var s__30557__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30557__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30557__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30559 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30558 = (0);while(true){
if((i__30558 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30558);cljs.core.chunk_append.call(null,b__30559,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30560 = (i__30558 + (1));
i__30558 = G__30560;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30559),iter__30556.call(null,cljs.core.chunk_rest.call(null,s__30557__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30559),null);
}
} else
{var o = cljs.core.first.call(null,s__30557__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30556.call(null,cljs.core.rest.call(null,s__30557__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4377__auto__.call(null,options);
})());
});
/**
* get the selected option-value by comparing the selected filter with the
* option filters
*/
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30564 = schema.core.Any;var input_schema30565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30561","map30561",1558324561,null))], null);var input_checker30566 = schema.core.checker.call(null,input_schema30565);var output_checker30567 = schema.core.checker.call(null,output_schema30564);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function get_option_value(G__30568){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30568], null);var temp__4126__auto___30570 = input_checker30566.call(null,args__6035__auto___30569);if(cljs.core.truth_(temp__4126__auto___30570))
{var error__6036__auto___30571 = temp__4126__auto___30570;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30571)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30571,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30569,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30565,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30561 = G__30568;while(true){
if(cljs.core.map_QMARK_.call(null,map30561))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30561)));
}
var map30563 = plumbing.fnk.schema.safe_get.call(null,map30561,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map30563,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map30563,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map30563,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30562 = plumbing.fnk.schema.safe_get.call(null,map30561,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map30562,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map30562,options,label,id,map30563,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map30562,options,label,id,map30563,validate__6034__auto__,ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30572 = output_checker30567.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30572))
{var error__6036__auto___30573 = temp__4126__auto___30572;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30573)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30573,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30564,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30564,input_schema30565,input_checker30566,output_checker30567))
,schema.core.make_fn_schema.call(null,output_schema30564,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30565], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__30575,value){var map__30577 = p__30575;var map__30577__$1 = ((cljs.core.seq_QMARK_.call(null,map__30577))?cljs.core.apply.call(null,cljs.core.hash_map,map__30577):map__30577);var component_spec = map__30577__$1;var options = cljs.core.get.call(null,map__30577__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30577__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__30577,map__30577__$1,component_spec,options,label){
return (function (p1__30574_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30574_SHARP_));
});})(map__30577,map__30577__$1,component_spec,options,label))
,options));if(cljs.core.truth_((function (){var and__3627__auto__ = option_spec;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911).cljs$core$IFn$_invoke$arity$1(option_spec));
} else
{return and__3627__auto__;
}
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option_spec)));
} else
{return null;
}
});
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30578,value){var map__30580 = p__30578;var map__30580__$1 = ((cljs.core.seq_QMARK_.call(null,map__30580))?cljs.core.apply.call(null,cljs.core.hash_map,map__30580):map__30580);var component_spec = map__30580__$1;var options = cljs.core.get.call(null,map__30580__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30580__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30581_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30581_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__30582_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30582_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30583 = schema.core.Any;var input_schema30584 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30585 = schema.core.checker.call(null,input_schema30584);var output_checker30586 = schema.core.checker.call(null,output_schema30583);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30583,input_schema30584,input_checker30585,output_checker30586){
return (function render_STAR_(G__30587){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30587], null);var temp__4126__auto___30605 = input_checker30585.call(null,args__6035__auto___30604);if(cljs.core.truth_(temp__4126__auto___30605))
{var error__6036__auto___30606 = temp__4126__auto___30605;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30606)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30606,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30604,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30584,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30587;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30583,input_schema30584,input_checker30585,output_checker30586){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30583,input_schema30584,input_checker30585,output_checker30586))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30583,input_schema30584,input_checker30585,output_checker30586){
return (function iter__30596(s__30597){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30583,input_schema30584,input_checker30585,output_checker30586){
return (function (){var s__30597__$1 = s__30597;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30597__$1);if(temp__4126__auto__)
{var s__30597__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30597__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30597__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30599 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30598 = (0);while(true){
if((i__30598 < size__4376__auto__))
{var map__30602 = cljs.core._nth.call(null,c__4375__auto__,i__30598);var map__30602__$1 = ((cljs.core.seq_QMARK_.call(null,map__30602))?cljs.core.apply.call(null,cljs.core.hash_map,map__30602):map__30602);var option = map__30602__$1;var label__$1 = cljs.core.get.call(null,map__30602__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30602__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30599,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30607 = (i__30598 + (1));
i__30598 = G__30607;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30599),iter__30596.call(null,cljs.core.chunk_rest.call(null,s__30597__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30599),null);
}
} else
{var map__30603 = cljs.core.first.call(null,s__30597__$2);var map__30603__$1 = ((cljs.core.seq_QMARK_.call(null,map__30603))?cljs.core.apply.call(null,cljs.core.hash_map,map__30603):map__30603);var option = map__30603__$1;var label__$1 = cljs.core.get.call(null,map__30603__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30603__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30596.call(null,cljs.core.rest.call(null,s__30597__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30583,input_schema30584,input_checker30585,output_checker30586))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30583,input_schema30584,input_checker30585,output_checker30586))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30608 = output_checker30586.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30608))
{var error__6036__auto___30609 = temp__4126__auto___30608;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30609)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30609,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30583,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30583,input_schema30584,input_checker30585,output_checker30586))
,schema.core.make_fn_schema.call(null,output_schema30583,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30584], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30755 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30615 = schema.core.Any;var input_schema30616 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30613","map30613",-842416530,null))], null);var input_checker30617 = schema.core.checker.call(null,input_schema30616);var output_checker30618 = schema.core.checker.call(null,output_schema30615);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618){
return (function constructor30611(G__30619){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30756 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30619], null);var temp__4126__auto___30757 = input_checker30617.call(null,args__6035__auto___30756);if(cljs.core.truth_(temp__4126__auto___30757))
{var error__6036__auto___30758 = temp__4126__auto___30757;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30611","constructor30611",1131893218,null),cljs.core.pr_str.call(null,error__6036__auto___30758)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30758,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30756,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30616,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30613 = G__30619;while(true){
if(cljs.core.map_QMARK_.call(null,map30613))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30613)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30613,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30614 = plumbing.fnk.schema.safe_get.call(null,map30613,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30614,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30613,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t30686 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t30686 = (function (component_spec,component_filter_rq_chan,constructor30611,owner,data,input_checker30617,map30614,map30613,filter_spec,output_checker30618,output_schema30615,validate__6034__auto__,id,G__30619,ufv__,input_schema30616,meta30687){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.constructor30611 = constructor30611;
this.owner = owner;
this.data = data;
this.input_checker30617 = input_checker30617;
this.map30614 = map30614;
this.map30613 = map30613;
this.filter_spec = filter_spec;
this.output_checker30618 = output_checker30618;
this.output_schema30615 = output_schema30615;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__30619 = G__30619;
this.ufv__ = ufv__;
this.input_schema30616 = input_schema30616;
this.meta30687 = meta30687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t30686.cljs$lang$type = true;
clustermap.components.filters.select_filter.t30686.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t30686";
clustermap.components.filters.select_filter.t30686.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t30686");
});})(owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618))
;
clustermap.components.filters.select_filter.t30686.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t30686.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618))
;
clustermap.components.filters.select_filter.t30686.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t30686.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618))
;
clustermap.components.filters.select_filter.t30686.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t30686.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618){
return (function (_){var self__ = this;
var ___$1 = this;var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618){
return (function (state_30726){var state_val_30727 = (state_30726[(1)]);if((state_val_30727 === (7)))
{var inst_30717 = (state_30726[(2)]);var state_30726__$1 = state_30726;if(cljs.core.truth_(inst_30717))
{var statearr_30728_30759 = state_30726__$1;(statearr_30728_30759[(1)] = (11));
} else
{var statearr_30729_30760 = state_30726__$1;(statearr_30729_30760[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30727 === (1)))
{var state_30726__$1 = state_30726;var statearr_30730_30761 = state_30726__$1;(statearr_30730_30761[(2)] = null);
(statearr_30730_30761[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30727 === (4)))
{var inst_30691 = (state_30726[(7)]);var inst_30691__$1 = (state_30726[(2)]);var state_30726__$1 = (function (){var statearr_30731 = state_30726;(statearr_30731[(7)] = inst_30691__$1);
return statearr_30731;
})();if(cljs.core.truth_(inst_30691__$1))
{var statearr_30732_30762 = state_30726__$1;(statearr_30732_30762[(1)] = (5));
} else
{var statearr_30733_30763 = state_30726__$1;(statearr_30733_30763[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30727 === (13)))
{var inst_30722 = (state_30726[(2)]);var state_30726__$1 = state_30726;var statearr_30734_30764 = state_30726__$1;(statearr_30734_30764[(2)] = inst_30722);
(statearr_30734_30764[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30727 === (6)))
{var state_30726__$1 = state_30726;var statearr_30735_30765 = state_30726__$1;(statearr_30735_30765[(2)] = null);
(statearr_30735_30765[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30727 === (3)))
{var inst_30724 = (state_30726[(2)]);var state_30726__$1 = state_30726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30726__$1,inst_30724);
} else
{if((state_val_30727 === (12)))
{var state_30726__$1 = state_30726;var statearr_30736_30766 = state_30726__$1;(statearr_30736_30766[(2)] = null);
(statearr_30736_30766[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30727 === (2)))
{var state_30726__$1 = state_30726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30726__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30727 === (11)))
{var state_30726__$1 = state_30726;var statearr_30737_30767 = state_30726__$1;(statearr_30737_30767[(2)] = null);
(statearr_30737_30767[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30727 === (9)))
{var inst_30697 = (state_30726[(8)]);var state_30726__$1 = state_30726;var statearr_30738_30768 = state_30726__$1;(statearr_30738_30768[(2)] = inst_30697);
(statearr_30738_30768[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30727 === (5)))
{var inst_30697 = (state_30726[(8)]);var inst_30691 = (state_30726[(7)]);var inst_30694 = cljs.core.nth.call(null,inst_30691,(0),null);var inst_30695 = cljs.core.nth.call(null,inst_30691,(1),null);var inst_30697__$1 = om.core.get_props.call(null,self__.owner);var inst_30698 = cljs.core.seq_QMARK_.call(null,inst_30697__$1);var state_30726__$1 = (function (){var statearr_30739 = state_30726;(statearr_30739[(8)] = inst_30697__$1);
(statearr_30739[(9)] = inst_30694);
(statearr_30739[(10)] = inst_30695);
return statearr_30739;
})();if(inst_30698)
{var statearr_30740_30769 = state_30726__$1;(statearr_30740_30769[(1)] = (8));
} else
{var statearr_30741_30770 = state_30726__$1;(statearr_30741_30770[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30727 === (10)))
{var inst_30695 = (state_30726[(10)]);var inst_30703 = (state_30726[(2)]);var inst_30704 = cljs.core.get.call(null,inst_30703,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30705 = cljs.core.get.call(null,inst_30703,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30706 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30707 = ["SELECT-FILTER-RQ",self__.id,inst_30695];var inst_30708 = (new cljs.core.PersistentVector(null,3,(5),inst_30706,inst_30707,null));var inst_30709 = cljs.core.clj__GT_js.call(null,inst_30708);var inst_30710 = console.log(inst_30709);var inst_30711 = cljs.core.deref.call(null,inst_30704);var inst_30712 = cljs.core.deref.call(null,inst_30705);var inst_30713 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_30711,inst_30712,inst_30695);var inst_30714 = om.core.update_BANG_.call(null,inst_30704,inst_30713);var state_30726__$1 = (function (){var statearr_30742 = state_30726;(statearr_30742[(11)] = inst_30714);
(statearr_30742[(12)] = inst_30710);
return statearr_30742;
})();var statearr_30743_30771 = state_30726__$1;(statearr_30743_30771[(2)] = true);
(statearr_30743_30771[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30727 === (8)))
{var inst_30697 = (state_30726[(8)]);var inst_30700 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30697);var state_30726__$1 = state_30726;var statearr_30744_30772 = state_30726__$1;(statearr_30744_30772[(2)] = inst_30700);
(statearr_30744_30772[(1)] = (10));
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
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_30748 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30748[(0)] = state_machine__11099__auto__);
(statearr_30748[(1)] = (1));
return statearr_30748;
});
var state_machine__11099__auto____1 = (function (state_30726){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_30726);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e30749){if((e30749 instanceof Object))
{var ex__11102__auto__ = e30749;var statearr_30750_30773 = state_30726;(statearr_30750_30773[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30726);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30749;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30774 = state_30726;
state_30726 = G__30774;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_30726){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_30726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618))
})();var state__11156__auto__ = (function (){var statearr_30751 = f__11155__auto__.call(null);(statearr_30751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_30751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618))
);
return c__11154__auto__;
});})(owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618))
;
clustermap.components.filters.select_filter.t30686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618){
return (function (_30688){var self__ = this;
var _30688__$1 = this;return self__.meta30687;
});})(owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618))
;
clustermap.components.filters.select_filter.t30686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618){
return (function (_30688,meta30687__$1){var self__ = this;
var _30688__$1 = this;return (new clustermap.components.filters.select_filter.t30686(self__.component_spec,self__.component_filter_rq_chan,self__.constructor30611,self__.owner,self__.data,self__.input_checker30617,self__.map30614,self__.map30613,self__.filter_spec,self__.output_checker30618,self__.output_schema30615,self__.validate__6034__auto__,self__.id,self__.G__30619,self__.ufv__,self__.input_schema30616,meta30687__$1));
});})(owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618))
;
clustermap.components.filters.select_filter.__GT_t30686 = ((function (owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618){
return (function __GT_t30686(component_spec__$1,component_filter_rq_chan__$1,constructor30611__$1,owner__$1,data__$1,input_checker30617__$1,map30614__$1,map30613__$1,filter_spec__$1,output_checker30618__$1,output_schema30615__$1,validate__6034__auto____$1,id__$1,G__30619__$1,ufv____$1,input_schema30616__$1,meta30687){return (new clustermap.components.filters.select_filter.t30686(component_spec__$1,component_filter_rq_chan__$1,constructor30611__$1,owner__$1,data__$1,input_checker30617__$1,map30614__$1,map30613__$1,filter_spec__$1,output_checker30618__$1,output_schema30615__$1,validate__6034__auto____$1,id__$1,G__30619__$1,ufv____$1,input_schema30616__$1,meta30687));
});})(owner,component_filter_rq_chan,map30614,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618))
;
}
return (new clustermap.components.filters.select_filter.t30686(component_spec,component_filter_rq_chan,constructor30611,owner,data,input_checker30617,map30614,map30613,filter_spec,output_checker30618,output_schema30615,validate__6034__auto__,id,G__30619,ufv__,input_schema30616,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30775 = output_checker30618.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30775))
{var error__6036__auto___30776 = temp__4126__auto___30775;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30611","constructor30611",1131893218,null),cljs.core.pr_str.call(null,error__6036__auto___30776)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30776,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30615,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30615,input_schema30616,input_checker30617,output_checker30618))
,schema.core.make_fn_schema.call(null,output_schema30615,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30616], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___30755){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner30610,p__30752){var vec__30754 = p__30752;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30754,(0),null);return component_fnk__7881__auto___30755.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30610,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner30610,var_args){
var p__30752 = null;if (arguments.length > 2) {
  p__30752 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner30610,p__30752);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__30777){
var data__7882__auto__ = cljs.core.first(arglist__30777);
arglist__30777 = cljs.core.next(arglist__30777);
var owner30610 = cljs.core.first(arglist__30777);
var p__30752 = cljs.core.rest(arglist__30777);
return select_filter_component__delegate(data__7882__auto__,owner30610,p__30752);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___30755))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m30612){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m30612);
});
__GT_select_filter_component = function(cursor__7850__auto__,m30612){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m30612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
