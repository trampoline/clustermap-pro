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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30993(s__30994){return (new cljs.core.LazySeq(null,(function (){var s__30994__$1 = s__30994;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30994__$1);if(temp__4126__auto__)
{var s__30994__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30994__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30994__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30996 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30995 = (0);while(true){
if((i__30995 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30995);cljs.core.chunk_append.call(null,b__30996,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30997 = (i__30995 + (1));
i__30995 = G__30997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30996),iter__30993.call(null,cljs.core.chunk_rest.call(null,s__30994__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30996),null);
}
} else
{var o = cljs.core.first.call(null,s__30994__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30993.call(null,cljs.core.rest.call(null,s__30994__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31001 = schema.core.Any;var input_schema31002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30998","map30998",-658791516,null))], null);var input_checker31003 = schema.core.checker.call(null,input_schema31002);var output_checker31004 = schema.core.checker.call(null,output_schema31001);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31001,input_schema31002,input_checker31003,output_checker31004){
return (function get_option_value(G__31005){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31005], null);var temp__4126__auto___31007 = input_checker31003.call(null,args__6035__auto___31006);if(cljs.core.truth_(temp__4126__auto___31007))
{var error__6036__auto___31008 = temp__4126__auto___31007;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31008)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31008,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31006,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31002,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30998 = G__31005;while(true){
if(cljs.core.map_QMARK_.call(null,map30998))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30998)));
}
var map31000 = plumbing.fnk.schema.safe_get.call(null,map30998,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map31000,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map31000,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map31000,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30999 = plumbing.fnk.schema.safe_get.call(null,map30998,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map30999,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map30999,options,label,id,map31000,validate__6034__auto__,ufv__,output_schema31001,input_schema31002,input_checker31003,output_checker31004){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map30999,options,label,id,map31000,validate__6034__auto__,ufv__,output_schema31001,input_schema31002,input_checker31003,output_checker31004))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31009 = output_checker31004.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31009))
{var error__6036__auto___31010 = temp__4126__auto___31009;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31010)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31010,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31001,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31001,input_schema31002,input_checker31003,output_checker31004))
,schema.core.make_fn_schema.call(null,output_schema31001,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31002], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__31012,value){var map__31014 = p__31012;var map__31014__$1 = ((cljs.core.seq_QMARK_.call(null,map__31014))?cljs.core.apply.call(null,cljs.core.hash_map,map__31014):map__31014);var component_spec = map__31014__$1;var options = cljs.core.get.call(null,map__31014__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__31014__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31014,map__31014__$1,component_spec,options,label){
return (function (p1__31011_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31011_SHARP_));
});})(map__31014,map__31014__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__31015,value){var map__31017 = p__31015;var map__31017__$1 = ((cljs.core.seq_QMARK_.call(null,map__31017))?cljs.core.apply.call(null,cljs.core.hash_map,map__31017):map__31017);var component_spec = map__31017__$1;var options = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__31018_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31018_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__31019_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31019_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31020 = schema.core.Any;var input_schema31021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31022 = schema.core.checker.call(null,input_schema31021);var output_checker31023 = schema.core.checker.call(null,output_schema31020);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31020,input_schema31021,input_checker31022,output_checker31023){
return (function render_STAR_(G__31024){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31024], null);var temp__4126__auto___31042 = input_checker31022.call(null,args__6035__auto___31041);if(cljs.core.truth_(temp__4126__auto___31042))
{var error__6036__auto___31043 = temp__4126__auto___31042;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31043)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31043,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31041,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31021,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31024;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31020,input_schema31021,input_checker31022,output_checker31023){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31020,input_schema31021,input_checker31022,output_checker31023))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31020,input_schema31021,input_checker31022,output_checker31023){
return (function iter__31033(s__31034){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31020,input_schema31021,input_checker31022,output_checker31023){
return (function (){var s__31034__$1 = s__31034;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31034__$1);if(temp__4126__auto__)
{var s__31034__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31034__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31034__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31036 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31035 = (0);while(true){
if((i__31035 < size__4376__auto__))
{var map__31039 = cljs.core._nth.call(null,c__4375__auto__,i__31035);var map__31039__$1 = ((cljs.core.seq_QMARK_.call(null,map__31039))?cljs.core.apply.call(null,cljs.core.hash_map,map__31039):map__31039);var option = map__31039__$1;var label__$1 = cljs.core.get.call(null,map__31039__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31039__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31036,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31044 = (i__31035 + (1));
i__31035 = G__31044;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31036),iter__31033.call(null,cljs.core.chunk_rest.call(null,s__31034__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31036),null);
}
} else
{var map__31040 = cljs.core.first.call(null,s__31034__$2);var map__31040__$1 = ((cljs.core.seq_QMARK_.call(null,map__31040))?cljs.core.apply.call(null,cljs.core.hash_map,map__31040):map__31040);var option = map__31040__$1;var label__$1 = cljs.core.get.call(null,map__31040__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31040__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31033.call(null,cljs.core.rest.call(null,s__31034__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31020,input_schema31021,input_checker31022,output_checker31023))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31020,input_schema31021,input_checker31022,output_checker31023))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31045 = output_checker31023.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31045))
{var error__6036__auto___31046 = temp__4126__auto___31045;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31046)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31046,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31020,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31020,input_schema31021,input_checker31022,output_checker31023))
,schema.core.make_fn_schema.call(null,output_schema31020,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31021], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31192 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31052 = schema.core.Any;var input_schema31053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31050","map31050",524975439,null))], null);var input_checker31054 = schema.core.checker.call(null,input_schema31053);var output_checker31055 = schema.core.checker.call(null,output_schema31052);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055){
return (function constructor31048(G__31056){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31056], null);var temp__4126__auto___31194 = input_checker31054.call(null,args__6035__auto___31193);if(cljs.core.truth_(temp__4126__auto___31194))
{var error__6036__auto___31195 = temp__4126__auto___31194;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31048","constructor31048",-963847135,null),cljs.core.pr_str.call(null,error__6036__auto___31195)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31195,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31193,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31053,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31050 = G__31056;while(true){
if(cljs.core.map_QMARK_.call(null,map31050))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31050)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31050,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31051 = plumbing.fnk.schema.safe_get.call(null,map31050,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31051,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31050,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t31123 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t31123 = (function (component_spec,component_filter_rq_chan,constructor31048,input_schema31053,owner,output_schema31052,data,filter_spec,map31050,G__31056,map31051,validate__6034__auto__,id,ufv__,input_checker31054,output_checker31055,meta31124){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.constructor31048 = constructor31048;
this.input_schema31053 = input_schema31053;
this.owner = owner;
this.output_schema31052 = output_schema31052;
this.data = data;
this.filter_spec = filter_spec;
this.map31050 = map31050;
this.G__31056 = G__31056;
this.map31051 = map31051;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.input_checker31054 = input_checker31054;
this.output_checker31055 = output_checker31055;
this.meta31124 = meta31124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t31123.cljs$lang$type = true;
clustermap.components.filters.select_filter.t31123.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t31123";
clustermap.components.filters.select_filter.t31123.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t31123");
});})(owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055))
;
clustermap.components.filters.select_filter.t31123.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t31123.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055))
;
clustermap.components.filters.select_filter.t31123.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t31123.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055))
;
clustermap.components.filters.select_filter.t31123.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t31123.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055){
return (function (state_31163){var state_val_31164 = (state_31163[(1)]);if((state_val_31164 === (7)))
{var inst_31154 = (state_31163[(2)]);var state_31163__$1 = state_31163;if(cljs.core.truth_(inst_31154))
{var statearr_31165_31196 = state_31163__$1;(statearr_31165_31196[(1)] = (11));
} else
{var statearr_31166_31197 = state_31163__$1;(statearr_31166_31197[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31164 === (1)))
{var state_31163__$1 = state_31163;var statearr_31167_31198 = state_31163__$1;(statearr_31167_31198[(2)] = null);
(statearr_31167_31198[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31164 === (4)))
{var inst_31128 = (state_31163[(7)]);var inst_31128__$1 = (state_31163[(2)]);var state_31163__$1 = (function (){var statearr_31168 = state_31163;(statearr_31168[(7)] = inst_31128__$1);
return statearr_31168;
})();if(cljs.core.truth_(inst_31128__$1))
{var statearr_31169_31199 = state_31163__$1;(statearr_31169_31199[(1)] = (5));
} else
{var statearr_31170_31200 = state_31163__$1;(statearr_31170_31200[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31164 === (13)))
{var inst_31159 = (state_31163[(2)]);var state_31163__$1 = state_31163;var statearr_31171_31201 = state_31163__$1;(statearr_31171_31201[(2)] = inst_31159);
(statearr_31171_31201[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31164 === (6)))
{var state_31163__$1 = state_31163;var statearr_31172_31202 = state_31163__$1;(statearr_31172_31202[(2)] = null);
(statearr_31172_31202[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31164 === (3)))
{var inst_31161 = (state_31163[(2)]);var state_31163__$1 = state_31163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31163__$1,inst_31161);
} else
{if((state_val_31164 === (12)))
{var state_31163__$1 = state_31163;var statearr_31173_31203 = state_31163__$1;(statearr_31173_31203[(2)] = null);
(statearr_31173_31203[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31164 === (2)))
{var state_31163__$1 = state_31163;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31163__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31164 === (11)))
{var state_31163__$1 = state_31163;var statearr_31174_31204 = state_31163__$1;(statearr_31174_31204[(2)] = null);
(statearr_31174_31204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31164 === (9)))
{var inst_31134 = (state_31163[(8)]);var state_31163__$1 = state_31163;var statearr_31175_31205 = state_31163__$1;(statearr_31175_31205[(2)] = inst_31134);
(statearr_31175_31205[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31164 === (5)))
{var inst_31128 = (state_31163[(7)]);var inst_31134 = (state_31163[(8)]);var inst_31131 = cljs.core.nth.call(null,inst_31128,(0),null);var inst_31132 = cljs.core.nth.call(null,inst_31128,(1),null);var inst_31134__$1 = om.core.get_props.call(null,self__.owner);var inst_31135 = cljs.core.seq_QMARK_.call(null,inst_31134__$1);var state_31163__$1 = (function (){var statearr_31176 = state_31163;(statearr_31176[(9)] = inst_31132);
(statearr_31176[(8)] = inst_31134__$1);
(statearr_31176[(10)] = inst_31131);
return statearr_31176;
})();if(inst_31135)
{var statearr_31177_31206 = state_31163__$1;(statearr_31177_31206[(1)] = (8));
} else
{var statearr_31178_31207 = state_31163__$1;(statearr_31178_31207[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31164 === (10)))
{var inst_31132 = (state_31163[(9)]);var inst_31140 = (state_31163[(2)]);var inst_31141 = cljs.core.get.call(null,inst_31140,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31142 = cljs.core.get.call(null,inst_31140,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31143 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31144 = ["SELECT-FILTER-RQ",self__.id,inst_31132];var inst_31145 = (new cljs.core.PersistentVector(null,3,(5),inst_31143,inst_31144,null));var inst_31146 = cljs.core.clj__GT_js.call(null,inst_31145);var inst_31147 = console.log(inst_31146);var inst_31148 = cljs.core.deref.call(null,inst_31141);var inst_31149 = cljs.core.deref.call(null,inst_31142);var inst_31150 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_31148,inst_31149,inst_31132);var inst_31151 = om.core.update_BANG_.call(null,inst_31141,inst_31150);var state_31163__$1 = (function (){var statearr_31179 = state_31163;(statearr_31179[(11)] = inst_31147);
(statearr_31179[(12)] = inst_31151);
return statearr_31179;
})();var statearr_31180_31208 = state_31163__$1;(statearr_31180_31208[(2)] = true);
(statearr_31180_31208[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31164 === (8)))
{var inst_31134 = (state_31163[(8)]);var inst_31137 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31134);var state_31163__$1 = state_31163;var statearr_31181_31209 = state_31163__$1;(statearr_31181_31209[(2)] = inst_31137);
(statearr_31181_31209[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31185 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31185[(0)] = state_machine__9111__auto__);
(statearr_31185[(1)] = (1));
return statearr_31185;
});
var state_machine__9111__auto____1 = (function (state_31163){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31163);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31186){if((e31186 instanceof Object))
{var ex__9114__auto__ = e31186;var statearr_31187_31210 = state_31163;(statearr_31187_31210[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31163);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31186;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31211 = state_31163;
state_31163 = G__31211;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31163){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055))
})();var state__9127__auto__ = (function (){var statearr_31188 = f__9126__auto__.call(null);(statearr_31188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055))
;
clustermap.components.filters.select_filter.t31123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055){
return (function (_31125){var self__ = this;
var _31125__$1 = this;return self__.meta31124;
});})(owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055))
;
clustermap.components.filters.select_filter.t31123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055){
return (function (_31125,meta31124__$1){var self__ = this;
var _31125__$1 = this;return (new clustermap.components.filters.select_filter.t31123(self__.component_spec,self__.component_filter_rq_chan,self__.constructor31048,self__.input_schema31053,self__.owner,self__.output_schema31052,self__.data,self__.filter_spec,self__.map31050,self__.G__31056,self__.map31051,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.input_checker31054,self__.output_checker31055,meta31124__$1));
});})(owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055))
;
clustermap.components.filters.select_filter.__GT_t31123 = ((function (owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055){
return (function __GT_t31123(component_spec__$1,component_filter_rq_chan__$1,constructor31048__$1,input_schema31053__$1,owner__$1,output_schema31052__$1,data__$1,filter_spec__$1,map31050__$1,G__31056__$1,map31051__$1,validate__6034__auto____$1,id__$1,ufv____$1,input_checker31054__$1,output_checker31055__$1,meta31124){return (new clustermap.components.filters.select_filter.t31123(component_spec__$1,component_filter_rq_chan__$1,constructor31048__$1,input_schema31053__$1,owner__$1,output_schema31052__$1,data__$1,filter_spec__$1,map31050__$1,G__31056__$1,map31051__$1,validate__6034__auto____$1,id__$1,ufv____$1,input_checker31054__$1,output_checker31055__$1,meta31124));
});})(owner,component_filter_rq_chan,map31051,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055))
;
}
return (new clustermap.components.filters.select_filter.t31123(component_spec,component_filter_rq_chan,constructor31048,input_schema31053,owner,output_schema31052,data,filter_spec,map31050,G__31056,map31051,validate__6034__auto__,id,ufv__,input_checker31054,output_checker31055,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31212 = output_checker31055.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31212))
{var error__6036__auto___31213 = temp__4126__auto___31212;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31048","constructor31048",-963847135,null),cljs.core.pr_str.call(null,error__6036__auto___31213)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31213,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31052,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31052,input_schema31053,input_checker31054,output_checker31055))
,schema.core.make_fn_schema.call(null,output_schema31052,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31053], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31192){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner31047,p__31189){var vec__31191 = p__31189;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31191,(0),null);return component_fnk__7881__auto___31192.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31047,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner31047,var_args){
var p__31189 = null;if (arguments.length > 2) {
  p__31189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner31047,p__31189);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31214){
var data__7882__auto__ = cljs.core.first(arglist__31214);
arglist__31214 = cljs.core.next(arglist__31214);
var owner31047 = cljs.core.first(arglist__31214);
var p__31189 = cljs.core.rest(arglist__31214);
return select_filter_component__delegate(data__7882__auto__,owner31047,p__31189);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31192))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m31049){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m31049);
});
__GT_select_filter_component = function(cursor__7850__auto__,m31049){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m31049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
