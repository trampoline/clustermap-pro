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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30841(s__30842){return (new cljs.core.LazySeq(null,(function (){var s__30842__$1 = s__30842;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30842__$1);if(temp__4126__auto__)
{var s__30842__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30842__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30842__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30844 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30843 = (0);while(true){
if((i__30843 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30843);cljs.core.chunk_append.call(null,b__30844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30845 = (i__30843 + (1));
i__30843 = G__30845;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30844),iter__30841.call(null,cljs.core.chunk_rest.call(null,s__30842__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30844),null);
}
} else
{var o = cljs.core.first.call(null,s__30842__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30841.call(null,cljs.core.rest.call(null,s__30842__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30849 = schema.core.Any;var input_schema30850 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30846","map30846",77847420,null))], null);var input_checker30851 = schema.core.checker.call(null,input_schema30850);var output_checker30852 = schema.core.checker.call(null,output_schema30849);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30849,input_schema30850,input_checker30851,output_checker30852){
return (function get_option_value(G__30853){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30853], null);var temp__4126__auto___30855 = input_checker30851.call(null,args__6035__auto___30854);if(cljs.core.truth_(temp__4126__auto___30855))
{var error__6036__auto___30856 = temp__4126__auto___30855;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30856)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30856,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30854,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30850,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30846 = G__30853;while(true){
if(cljs.core.map_QMARK_.call(null,map30846))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30846)));
}
var map30848 = plumbing.fnk.schema.safe_get.call(null,map30846,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map30848,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map30848,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map30848,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30847 = plumbing.fnk.schema.safe_get.call(null,map30846,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map30847,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map30847,options,label,id,map30848,validate__6034__auto__,ufv__,output_schema30849,input_schema30850,input_checker30851,output_checker30852){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map30847,options,label,id,map30848,validate__6034__auto__,ufv__,output_schema30849,input_schema30850,input_checker30851,output_checker30852))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30857 = output_checker30852.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30857))
{var error__6036__auto___30858 = temp__4126__auto___30857;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30858)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30858,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30849,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30849,input_schema30850,input_checker30851,output_checker30852))
,schema.core.make_fn_schema.call(null,output_schema30849,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30850], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__30860,value){var map__30862 = p__30860;var map__30862__$1 = ((cljs.core.seq_QMARK_.call(null,map__30862))?cljs.core.apply.call(null,cljs.core.hash_map,map__30862):map__30862);var component_spec = map__30862__$1;var options = cljs.core.get.call(null,map__30862__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30862__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__30862,map__30862__$1,component_spec,options,label){
return (function (p1__30859_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30859_SHARP_));
});})(map__30862,map__30862__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30863,value){var map__30865 = p__30863;var map__30865__$1 = ((cljs.core.seq_QMARK_.call(null,map__30865))?cljs.core.apply.call(null,cljs.core.hash_map,map__30865):map__30865);var component_spec = map__30865__$1;var options = cljs.core.get.call(null,map__30865__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30865__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30866_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30866_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__30867_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30867_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30868 = schema.core.Any;var input_schema30869 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30870 = schema.core.checker.call(null,input_schema30869);var output_checker30871 = schema.core.checker.call(null,output_schema30868);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30868,input_schema30869,input_checker30870,output_checker30871){
return (function render_STAR_(G__30872){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30872], null);var temp__4126__auto___30890 = input_checker30870.call(null,args__6035__auto___30889);if(cljs.core.truth_(temp__4126__auto___30890))
{var error__6036__auto___30891 = temp__4126__auto___30890;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30891)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30891,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30889,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30869,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30872;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30868,input_schema30869,input_checker30870,output_checker30871){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30868,input_schema30869,input_checker30870,output_checker30871))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30868,input_schema30869,input_checker30870,output_checker30871){
return (function iter__30881(s__30882){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30868,input_schema30869,input_checker30870,output_checker30871){
return (function (){var s__30882__$1 = s__30882;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30882__$1);if(temp__4126__auto__)
{var s__30882__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30882__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30882__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30884 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30883 = (0);while(true){
if((i__30883 < size__4376__auto__))
{var map__30887 = cljs.core._nth.call(null,c__4375__auto__,i__30883);var map__30887__$1 = ((cljs.core.seq_QMARK_.call(null,map__30887))?cljs.core.apply.call(null,cljs.core.hash_map,map__30887):map__30887);var option = map__30887__$1;var label__$1 = cljs.core.get.call(null,map__30887__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30887__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30884,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30892 = (i__30883 + (1));
i__30883 = G__30892;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30884),iter__30881.call(null,cljs.core.chunk_rest.call(null,s__30882__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30884),null);
}
} else
{var map__30888 = cljs.core.first.call(null,s__30882__$2);var map__30888__$1 = ((cljs.core.seq_QMARK_.call(null,map__30888))?cljs.core.apply.call(null,cljs.core.hash_map,map__30888):map__30888);var option = map__30888__$1;var label__$1 = cljs.core.get.call(null,map__30888__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30888__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30881.call(null,cljs.core.rest.call(null,s__30882__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30868,input_schema30869,input_checker30870,output_checker30871))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30868,input_schema30869,input_checker30870,output_checker30871))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30893 = output_checker30871.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30893))
{var error__6036__auto___30894 = temp__4126__auto___30893;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30894)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30894,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30868,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30868,input_schema30869,input_checker30870,output_checker30871))
,schema.core.make_fn_schema.call(null,output_schema30868,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30869], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31040 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30900 = schema.core.Any;var input_schema30901 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30898","map30898",-812084856,null))], null);var input_checker30902 = schema.core.checker.call(null,input_schema30901);var output_checker30903 = schema.core.checker.call(null,output_schema30900);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903){
return (function constructor30896(G__30904){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30904], null);var temp__4126__auto___31042 = input_checker30902.call(null,args__6035__auto___31041);if(cljs.core.truth_(temp__4126__auto___31042))
{var error__6036__auto___31043 = temp__4126__auto___31042;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30896","constructor30896",1281698855,null),cljs.core.pr_str.call(null,error__6036__auto___31043)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31043,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31041,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30901,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30898 = G__30904;while(true){
if(cljs.core.map_QMARK_.call(null,map30898))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30898)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30898,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30899 = plumbing.fnk.schema.safe_get.call(null,map30898,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30899,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30898,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t30971 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t30971 = (function (component_spec,component_filter_rq_chan,input_checker30902,owner,data,constructor30896,map30898,output_checker30903,filter_spec,output_schema30900,input_schema30901,validate__6034__auto__,id,ufv__,G__30904,map30899,meta30972){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_checker30902 = input_checker30902;
this.owner = owner;
this.data = data;
this.constructor30896 = constructor30896;
this.map30898 = map30898;
this.output_checker30903 = output_checker30903;
this.filter_spec = filter_spec;
this.output_schema30900 = output_schema30900;
this.input_schema30901 = input_schema30901;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.G__30904 = G__30904;
this.map30899 = map30899;
this.meta30972 = meta30972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t30971.cljs$lang$type = true;
clustermap.components.filters.select_filter.t30971.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t30971";
clustermap.components.filters.select_filter.t30971.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t30971");
});})(owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903))
;
clustermap.components.filters.select_filter.t30971.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t30971.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903))
;
clustermap.components.filters.select_filter.t30971.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t30971.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903))
;
clustermap.components.filters.select_filter.t30971.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t30971.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903){
return (function (state_31011){var state_val_31012 = (state_31011[(1)]);if((state_val_31012 === (7)))
{var inst_31002 = (state_31011[(2)]);var state_31011__$1 = state_31011;if(cljs.core.truth_(inst_31002))
{var statearr_31013_31044 = state_31011__$1;(statearr_31013_31044[(1)] = (11));
} else
{var statearr_31014_31045 = state_31011__$1;(statearr_31014_31045[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31012 === (1)))
{var state_31011__$1 = state_31011;var statearr_31015_31046 = state_31011__$1;(statearr_31015_31046[(2)] = null);
(statearr_31015_31046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31012 === (4)))
{var inst_30976 = (state_31011[(7)]);var inst_30976__$1 = (state_31011[(2)]);var state_31011__$1 = (function (){var statearr_31016 = state_31011;(statearr_31016[(7)] = inst_30976__$1);
return statearr_31016;
})();if(cljs.core.truth_(inst_30976__$1))
{var statearr_31017_31047 = state_31011__$1;(statearr_31017_31047[(1)] = (5));
} else
{var statearr_31018_31048 = state_31011__$1;(statearr_31018_31048[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31012 === (13)))
{var inst_31007 = (state_31011[(2)]);var state_31011__$1 = state_31011;var statearr_31019_31049 = state_31011__$1;(statearr_31019_31049[(2)] = inst_31007);
(statearr_31019_31049[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31012 === (6)))
{var state_31011__$1 = state_31011;var statearr_31020_31050 = state_31011__$1;(statearr_31020_31050[(2)] = null);
(statearr_31020_31050[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31012 === (3)))
{var inst_31009 = (state_31011[(2)]);var state_31011__$1 = state_31011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31011__$1,inst_31009);
} else
{if((state_val_31012 === (12)))
{var state_31011__$1 = state_31011;var statearr_31021_31051 = state_31011__$1;(statearr_31021_31051[(2)] = null);
(statearr_31021_31051[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31012 === (2)))
{var state_31011__$1 = state_31011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31012 === (11)))
{var state_31011__$1 = state_31011;var statearr_31022_31052 = state_31011__$1;(statearr_31022_31052[(2)] = null);
(statearr_31022_31052[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31012 === (9)))
{var inst_30982 = (state_31011[(8)]);var state_31011__$1 = state_31011;var statearr_31023_31053 = state_31011__$1;(statearr_31023_31053[(2)] = inst_30982);
(statearr_31023_31053[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31012 === (5)))
{var inst_30976 = (state_31011[(7)]);var inst_30982 = (state_31011[(8)]);var inst_30979 = cljs.core.nth.call(null,inst_30976,(0),null);var inst_30980 = cljs.core.nth.call(null,inst_30976,(1),null);var inst_30982__$1 = om.core.get_props.call(null,self__.owner);var inst_30983 = cljs.core.seq_QMARK_.call(null,inst_30982__$1);var state_31011__$1 = (function (){var statearr_31024 = state_31011;(statearr_31024[(9)] = inst_30980);
(statearr_31024[(8)] = inst_30982__$1);
(statearr_31024[(10)] = inst_30979);
return statearr_31024;
})();if(inst_30983)
{var statearr_31025_31054 = state_31011__$1;(statearr_31025_31054[(1)] = (8));
} else
{var statearr_31026_31055 = state_31011__$1;(statearr_31026_31055[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31012 === (10)))
{var inst_30980 = (state_31011[(9)]);var inst_30988 = (state_31011[(2)]);var inst_30989 = cljs.core.get.call(null,inst_30988,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30990 = cljs.core.get.call(null,inst_30988,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30991 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30992 = ["SELECT-FILTER-RQ",self__.id,inst_30980];var inst_30993 = (new cljs.core.PersistentVector(null,3,(5),inst_30991,inst_30992,null));var inst_30994 = cljs.core.clj__GT_js.call(null,inst_30993);var inst_30995 = console.log(inst_30994);var inst_30996 = cljs.core.deref.call(null,inst_30989);var inst_30997 = cljs.core.deref.call(null,inst_30990);var inst_30998 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_30996,inst_30997,inst_30980);var inst_30999 = om.core.update_BANG_.call(null,inst_30989,inst_30998);var state_31011__$1 = (function (){var statearr_31027 = state_31011;(statearr_31027[(11)] = inst_30995);
(statearr_31027[(12)] = inst_30999);
return statearr_31027;
})();var statearr_31028_31056 = state_31011__$1;(statearr_31028_31056[(2)] = true);
(statearr_31028_31056[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31012 === (8)))
{var inst_30982 = (state_31011[(8)]);var inst_30985 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30982);var state_31011__$1 = state_31011;var statearr_31029_31057 = state_31011__$1;(statearr_31029_31057[(2)] = inst_30985);
(statearr_31029_31057[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31033 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31033[(0)] = state_machine__9111__auto__);
(statearr_31033[(1)] = (1));
return statearr_31033;
});
var state_machine__9111__auto____1 = (function (state_31011){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31011);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31034){if((e31034 instanceof Object))
{var ex__9114__auto__ = e31034;var statearr_31035_31058 = state_31011;(statearr_31035_31058[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31011);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31034;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31059 = state_31011;
state_31011 = G__31059;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31011){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903))
})();var state__9127__auto__ = (function (){var statearr_31036 = f__9126__auto__.call(null);(statearr_31036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903))
;
clustermap.components.filters.select_filter.t30971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903){
return (function (_30973){var self__ = this;
var _30973__$1 = this;return self__.meta30972;
});})(owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903))
;
clustermap.components.filters.select_filter.t30971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903){
return (function (_30973,meta30972__$1){var self__ = this;
var _30973__$1 = this;return (new clustermap.components.filters.select_filter.t30971(self__.component_spec,self__.component_filter_rq_chan,self__.input_checker30902,self__.owner,self__.data,self__.constructor30896,self__.map30898,self__.output_checker30903,self__.filter_spec,self__.output_schema30900,self__.input_schema30901,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.G__30904,self__.map30899,meta30972__$1));
});})(owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903))
;
clustermap.components.filters.select_filter.__GT_t30971 = ((function (owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903){
return (function __GT_t30971(component_spec__$1,component_filter_rq_chan__$1,input_checker30902__$1,owner__$1,data__$1,constructor30896__$1,map30898__$1,output_checker30903__$1,filter_spec__$1,output_schema30900__$1,input_schema30901__$1,validate__6034__auto____$1,id__$1,ufv____$1,G__30904__$1,map30899__$1,meta30972){return (new clustermap.components.filters.select_filter.t30971(component_spec__$1,component_filter_rq_chan__$1,input_checker30902__$1,owner__$1,data__$1,constructor30896__$1,map30898__$1,output_checker30903__$1,filter_spec__$1,output_schema30900__$1,input_schema30901__$1,validate__6034__auto____$1,id__$1,ufv____$1,G__30904__$1,map30899__$1,meta30972));
});})(owner,component_filter_rq_chan,map30899,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903))
;
}
return (new clustermap.components.filters.select_filter.t30971(component_spec,component_filter_rq_chan,input_checker30902,owner,data,constructor30896,map30898,output_checker30903,filter_spec,output_schema30900,input_schema30901,validate__6034__auto__,id,ufv__,G__30904,map30899,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31060 = output_checker30903.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31060))
{var error__6036__auto___31061 = temp__4126__auto___31060;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30896","constructor30896",1281698855,null),cljs.core.pr_str.call(null,error__6036__auto___31061)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31061,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30900,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30900,input_schema30901,input_checker30902,output_checker30903))
,schema.core.make_fn_schema.call(null,output_schema30900,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30901], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31040){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner30895,p__31037){var vec__31039 = p__31037;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31039,(0),null);return component_fnk__7881__auto___31040.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30895,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner30895,var_args){
var p__31037 = null;if (arguments.length > 2) {
  p__31037 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner30895,p__31037);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31062){
var data__7882__auto__ = cljs.core.first(arglist__31062);
arglist__31062 = cljs.core.next(arglist__31062);
var owner30895 = cljs.core.first(arglist__31062);
var p__31037 = cljs.core.rest(arglist__31062);
return select_filter_component__delegate(data__7882__auto__,owner30895,p__31037);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31040))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m30897){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m30897);
});
__GT_select_filter_component = function(cursor__7850__auto__,m30897){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m30897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
