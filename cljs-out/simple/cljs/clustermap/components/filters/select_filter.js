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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__31009(s__31010){return (new cljs.core.LazySeq(null,(function (){var s__31010__$1 = s__31010;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31010__$1);if(temp__4126__auto__)
{var s__31010__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31010__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31010__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31012 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31011 = (0);while(true){
if((i__31011 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__31011);cljs.core.chunk_append.call(null,b__31012,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__31013 = (i__31011 + (1));
i__31011 = G__31013;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31012),iter__31009.call(null,cljs.core.chunk_rest.call(null,s__31010__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31012),null);
}
} else
{var o = cljs.core.first.call(null,s__31010__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__31009.call(null,cljs.core.rest.call(null,s__31010__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31017 = schema.core.Any;var input_schema31018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map31014","map31014",1523767899,null))], null);var input_checker31019 = schema.core.checker.call(null,input_schema31018);var output_checker31020 = schema.core.checker.call(null,output_schema31017);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31017,input_schema31018,input_checker31019,output_checker31020){
return (function get_option_value(G__31021){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31022 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31021], null);var temp__4126__auto___31023 = input_checker31019.call(null,args__6035__auto___31022);if(cljs.core.truth_(temp__4126__auto___31023))
{var error__6036__auto___31024 = temp__4126__auto___31023;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31024)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31024,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31022,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31018,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31014 = G__31021;while(true){
if(cljs.core.map_QMARK_.call(null,map31014))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31014)));
}
var map31016 = plumbing.fnk.schema.safe_get.call(null,map31014,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map31016,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map31016,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map31016,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31015 = plumbing.fnk.schema.safe_get.call(null,map31014,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map31015,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map31015,options,label,id,map31016,validate__6034__auto__,ufv__,output_schema31017,input_schema31018,input_checker31019,output_checker31020){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map31015,options,label,id,map31016,validate__6034__auto__,ufv__,output_schema31017,input_schema31018,input_checker31019,output_checker31020))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31025 = output_checker31020.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31025))
{var error__6036__auto___31026 = temp__4126__auto___31025;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31026)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31026,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31017,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31017,input_schema31018,input_checker31019,output_checker31020))
,schema.core.make_fn_schema.call(null,output_schema31017,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31018], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__31028,value){var map__31030 = p__31028;var map__31030__$1 = ((cljs.core.seq_QMARK_.call(null,map__31030))?cljs.core.apply.call(null,cljs.core.hash_map,map__31030):map__31030);var component_spec = map__31030__$1;var options = cljs.core.get.call(null,map__31030__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__31030__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31030,map__31030__$1,component_spec,options,label){
return (function (p1__31027_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31027_SHARP_));
});})(map__31030,map__31030__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__31031,value){var map__31033 = p__31031;var map__31033__$1 = ((cljs.core.seq_QMARK_.call(null,map__31033))?cljs.core.apply.call(null,cljs.core.hash_map,map__31033):map__31033);var component_spec = map__31033__$1;var options = cljs.core.get.call(null,map__31033__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__31033__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__31034_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31034_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__31035_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31035_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31036 = schema.core.Any;var input_schema31037 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31038 = schema.core.checker.call(null,input_schema31037);var output_checker31039 = schema.core.checker.call(null,output_schema31036);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31036,input_schema31037,input_checker31038,output_checker31039){
return (function render_STAR_(G__31040){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31040], null);var temp__4126__auto___31058 = input_checker31038.call(null,args__6035__auto___31057);if(cljs.core.truth_(temp__4126__auto___31058))
{var error__6036__auto___31059 = temp__4126__auto___31058;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31059)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31059,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31057,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31037,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31040;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31036,input_schema31037,input_checker31038,output_checker31039){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31036,input_schema31037,input_checker31038,output_checker31039))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31036,input_schema31037,input_checker31038,output_checker31039){
return (function iter__31049(s__31050){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31036,input_schema31037,input_checker31038,output_checker31039){
return (function (){var s__31050__$1 = s__31050;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31050__$1);if(temp__4126__auto__)
{var s__31050__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31050__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31050__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31052 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31051 = (0);while(true){
if((i__31051 < size__4376__auto__))
{var map__31055 = cljs.core._nth.call(null,c__4375__auto__,i__31051);var map__31055__$1 = ((cljs.core.seq_QMARK_.call(null,map__31055))?cljs.core.apply.call(null,cljs.core.hash_map,map__31055):map__31055);var option = map__31055__$1;var label__$1 = cljs.core.get.call(null,map__31055__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31055__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31052,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31060 = (i__31051 + (1));
i__31051 = G__31060;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31052),iter__31049.call(null,cljs.core.chunk_rest.call(null,s__31050__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31052),null);
}
} else
{var map__31056 = cljs.core.first.call(null,s__31050__$2);var map__31056__$1 = ((cljs.core.seq_QMARK_.call(null,map__31056))?cljs.core.apply.call(null,cljs.core.hash_map,map__31056):map__31056);var option = map__31056__$1;var label__$1 = cljs.core.get.call(null,map__31056__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31056__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31049.call(null,cljs.core.rest.call(null,s__31050__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31036,input_schema31037,input_checker31038,output_checker31039))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31036,input_schema31037,input_checker31038,output_checker31039))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31061 = output_checker31039.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31061))
{var error__6036__auto___31062 = temp__4126__auto___31061;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31062)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31062,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31036,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31036,input_schema31037,input_checker31038,output_checker31039))
,schema.core.make_fn_schema.call(null,output_schema31036,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31037], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31208 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31068 = schema.core.Any;var input_schema31069 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31066","map31066",-1411832234,null))], null);var input_checker31070 = schema.core.checker.call(null,input_schema31069);var output_checker31071 = schema.core.checker.call(null,output_schema31068);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071){
return (function constructor31064(G__31072){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31209 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31072], null);var temp__4126__auto___31210 = input_checker31070.call(null,args__6035__auto___31209);if(cljs.core.truth_(temp__4126__auto___31210))
{var error__6036__auto___31211 = temp__4126__auto___31210;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31064","constructor31064",439843912,null),cljs.core.pr_str.call(null,error__6036__auto___31211)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31211,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31209,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31069,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31066 = G__31072;while(true){
if(cljs.core.map_QMARK_.call(null,map31066))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31066)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31066,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31067 = plumbing.fnk.schema.safe_get.call(null,map31066,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31067,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31066,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t31139 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t31139 = (function (component_spec,component_filter_rq_chan,output_checker31071,owner,data,output_schema31068,constructor31064,G__31072,filter_spec,map31066,input_schema31069,input_checker31070,validate__6034__auto__,id,map31067,ufv__,meta31140){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_checker31071 = output_checker31071;
this.owner = owner;
this.data = data;
this.output_schema31068 = output_schema31068;
this.constructor31064 = constructor31064;
this.G__31072 = G__31072;
this.filter_spec = filter_spec;
this.map31066 = map31066;
this.input_schema31069 = input_schema31069;
this.input_checker31070 = input_checker31070;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map31067 = map31067;
this.ufv__ = ufv__;
this.meta31140 = meta31140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t31139.cljs$lang$type = true;
clustermap.components.filters.select_filter.t31139.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t31139";
clustermap.components.filters.select_filter.t31139.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t31139");
});})(owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071))
;
clustermap.components.filters.select_filter.t31139.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t31139.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071))
;
clustermap.components.filters.select_filter.t31139.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t31139.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071))
;
clustermap.components.filters.select_filter.t31139.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t31139.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071){
return (function (state_31179){var state_val_31180 = (state_31179[(1)]);if((state_val_31180 === (7)))
{var inst_31170 = (state_31179[(2)]);var state_31179__$1 = state_31179;if(cljs.core.truth_(inst_31170))
{var statearr_31181_31212 = state_31179__$1;(statearr_31181_31212[(1)] = (11));
} else
{var statearr_31182_31213 = state_31179__$1;(statearr_31182_31213[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31180 === (1)))
{var state_31179__$1 = state_31179;var statearr_31183_31214 = state_31179__$1;(statearr_31183_31214[(2)] = null);
(statearr_31183_31214[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31180 === (4)))
{var inst_31144 = (state_31179[(7)]);var inst_31144__$1 = (state_31179[(2)]);var state_31179__$1 = (function (){var statearr_31184 = state_31179;(statearr_31184[(7)] = inst_31144__$1);
return statearr_31184;
})();if(cljs.core.truth_(inst_31144__$1))
{var statearr_31185_31215 = state_31179__$1;(statearr_31185_31215[(1)] = (5));
} else
{var statearr_31186_31216 = state_31179__$1;(statearr_31186_31216[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31180 === (13)))
{var inst_31175 = (state_31179[(2)]);var state_31179__$1 = state_31179;var statearr_31187_31217 = state_31179__$1;(statearr_31187_31217[(2)] = inst_31175);
(statearr_31187_31217[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31180 === (6)))
{var state_31179__$1 = state_31179;var statearr_31188_31218 = state_31179__$1;(statearr_31188_31218[(2)] = null);
(statearr_31188_31218[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31180 === (3)))
{var inst_31177 = (state_31179[(2)]);var state_31179__$1 = state_31179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31179__$1,inst_31177);
} else
{if((state_val_31180 === (12)))
{var state_31179__$1 = state_31179;var statearr_31189_31219 = state_31179__$1;(statearr_31189_31219[(2)] = null);
(statearr_31189_31219[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31180 === (2)))
{var state_31179__$1 = state_31179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31179__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31180 === (11)))
{var state_31179__$1 = state_31179;var statearr_31190_31220 = state_31179__$1;(statearr_31190_31220[(2)] = null);
(statearr_31190_31220[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31180 === (9)))
{var inst_31150 = (state_31179[(8)]);var state_31179__$1 = state_31179;var statearr_31191_31221 = state_31179__$1;(statearr_31191_31221[(2)] = inst_31150);
(statearr_31191_31221[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31180 === (5)))
{var inst_31144 = (state_31179[(7)]);var inst_31150 = (state_31179[(8)]);var inst_31147 = cljs.core.nth.call(null,inst_31144,(0),null);var inst_31148 = cljs.core.nth.call(null,inst_31144,(1),null);var inst_31150__$1 = om.core.get_props.call(null,self__.owner);var inst_31151 = cljs.core.seq_QMARK_.call(null,inst_31150__$1);var state_31179__$1 = (function (){var statearr_31192 = state_31179;(statearr_31192[(9)] = inst_31147);
(statearr_31192[(10)] = inst_31148);
(statearr_31192[(8)] = inst_31150__$1);
return statearr_31192;
})();if(inst_31151)
{var statearr_31193_31222 = state_31179__$1;(statearr_31193_31222[(1)] = (8));
} else
{var statearr_31194_31223 = state_31179__$1;(statearr_31194_31223[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31180 === (10)))
{var inst_31148 = (state_31179[(10)]);var inst_31156 = (state_31179[(2)]);var inst_31157 = cljs.core.get.call(null,inst_31156,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31158 = cljs.core.get.call(null,inst_31156,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31159 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31160 = ["SELECT-FILTER-RQ",self__.id,inst_31148];var inst_31161 = (new cljs.core.PersistentVector(null,3,(5),inst_31159,inst_31160,null));var inst_31162 = cljs.core.clj__GT_js.call(null,inst_31161);var inst_31163 = console.log(inst_31162);var inst_31164 = cljs.core.deref.call(null,inst_31157);var inst_31165 = cljs.core.deref.call(null,inst_31158);var inst_31166 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_31164,inst_31165,inst_31148);var inst_31167 = om.core.update_BANG_.call(null,inst_31157,inst_31166);var state_31179__$1 = (function (){var statearr_31195 = state_31179;(statearr_31195[(11)] = inst_31167);
(statearr_31195[(12)] = inst_31163);
return statearr_31195;
})();var statearr_31196_31224 = state_31179__$1;(statearr_31196_31224[(2)] = true);
(statearr_31196_31224[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31180 === (8)))
{var inst_31150 = (state_31179[(8)]);var inst_31153 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31150);var state_31179__$1 = state_31179;var statearr_31197_31225 = state_31179__$1;(statearr_31197_31225[(2)] = inst_31153);
(statearr_31197_31225[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31201 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31201[(0)] = state_machine__9111__auto__);
(statearr_31201[(1)] = (1));
return statearr_31201;
});
var state_machine__9111__auto____1 = (function (state_31179){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31179);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31202){if((e31202 instanceof Object))
{var ex__9114__auto__ = e31202;var statearr_31203_31226 = state_31179;(statearr_31203_31226[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31202;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31227 = state_31179;
state_31179 = G__31227;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31179){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071))
})();var state__9127__auto__ = (function (){var statearr_31204 = f__9126__auto__.call(null);(statearr_31204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071))
;
clustermap.components.filters.select_filter.t31139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071){
return (function (_31141){var self__ = this;
var _31141__$1 = this;return self__.meta31140;
});})(owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071))
;
clustermap.components.filters.select_filter.t31139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071){
return (function (_31141,meta31140__$1){var self__ = this;
var _31141__$1 = this;return (new clustermap.components.filters.select_filter.t31139(self__.component_spec,self__.component_filter_rq_chan,self__.output_checker31071,self__.owner,self__.data,self__.output_schema31068,self__.constructor31064,self__.G__31072,self__.filter_spec,self__.map31066,self__.input_schema31069,self__.input_checker31070,self__.validate__6034__auto__,self__.id,self__.map31067,self__.ufv__,meta31140__$1));
});})(owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071))
;
clustermap.components.filters.select_filter.__GT_t31139 = ((function (owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071){
return (function __GT_t31139(component_spec__$1,component_filter_rq_chan__$1,output_checker31071__$1,owner__$1,data__$1,output_schema31068__$1,constructor31064__$1,G__31072__$1,filter_spec__$1,map31066__$1,input_schema31069__$1,input_checker31070__$1,validate__6034__auto____$1,id__$1,map31067__$1,ufv____$1,meta31140){return (new clustermap.components.filters.select_filter.t31139(component_spec__$1,component_filter_rq_chan__$1,output_checker31071__$1,owner__$1,data__$1,output_schema31068__$1,constructor31064__$1,G__31072__$1,filter_spec__$1,map31066__$1,input_schema31069__$1,input_checker31070__$1,validate__6034__auto____$1,id__$1,map31067__$1,ufv____$1,meta31140));
});})(owner,component_filter_rq_chan,map31067,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071))
;
}
return (new clustermap.components.filters.select_filter.t31139(component_spec,component_filter_rq_chan,output_checker31071,owner,data,output_schema31068,constructor31064,G__31072,filter_spec,map31066,input_schema31069,input_checker31070,validate__6034__auto__,id,map31067,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31228 = output_checker31071.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31228))
{var error__6036__auto___31229 = temp__4126__auto___31228;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31064","constructor31064",439843912,null),cljs.core.pr_str.call(null,error__6036__auto___31229)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31229,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31068,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31068,input_schema31069,input_checker31070,output_checker31071))
,schema.core.make_fn_schema.call(null,output_schema31068,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31069], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31208){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner31063,p__31205){var vec__31207 = p__31205;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31207,(0),null);return component_fnk__7881__auto___31208.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31063,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner31063,var_args){
var p__31205 = null;if (arguments.length > 2) {
  p__31205 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner31063,p__31205);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31230){
var data__7882__auto__ = cljs.core.first(arglist__31230);
arglist__31230 = cljs.core.next(arglist__31230);
var owner31063 = cljs.core.first(arglist__31230);
var p__31205 = cljs.core.rest(arglist__31230);
return select_filter_component__delegate(data__7882__auto__,owner31063,p__31205);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31208))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m31065){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m31065);
});
__GT_select_filter_component = function(cursor__7850__auto__,m31065){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m31065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
