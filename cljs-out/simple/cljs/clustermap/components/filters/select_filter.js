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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__31143(s__31144){return (new cljs.core.LazySeq(null,(function (){var s__31144__$1 = s__31144;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31144__$1);if(temp__4126__auto__)
{var s__31144__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31144__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31144__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31146 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31145 = (0);while(true){
if((i__31145 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__31145);cljs.core.chunk_append.call(null,b__31146,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__31147 = (i__31145 + (1));
i__31145 = G__31147;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31146),iter__31143.call(null,cljs.core.chunk_rest.call(null,s__31144__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31146),null);
}
} else
{var o = cljs.core.first.call(null,s__31144__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__31143.call(null,cljs.core.rest.call(null,s__31144__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31151 = schema.core.Any;var input_schema31152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map31148","map31148",203556196,null))], null);var input_checker31153 = schema.core.checker.call(null,input_schema31152);var output_checker31154 = schema.core.checker.call(null,output_schema31151);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31151,input_schema31152,input_checker31153,output_checker31154){
return (function get_option_value(G__31155){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31155], null);var temp__4126__auto___31157 = input_checker31153.call(null,args__6035__auto___31156);if(cljs.core.truth_(temp__4126__auto___31157))
{var error__6036__auto___31158 = temp__4126__auto___31157;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31158)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31158,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31156,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31152,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31148 = G__31155;while(true){
if(cljs.core.map_QMARK_.call(null,map31148))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31148)));
}
var map31150 = plumbing.fnk.schema.safe_get.call(null,map31148,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map31150,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map31150,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map31150,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31149 = plumbing.fnk.schema.safe_get.call(null,map31148,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map31149,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map31149,options,label,id,map31150,validate__6034__auto__,ufv__,output_schema31151,input_schema31152,input_checker31153,output_checker31154){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map31149,options,label,id,map31150,validate__6034__auto__,ufv__,output_schema31151,input_schema31152,input_checker31153,output_checker31154))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31159 = output_checker31154.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31159))
{var error__6036__auto___31160 = temp__4126__auto___31159;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31160)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31160,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31151,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31151,input_schema31152,input_checker31153,output_checker31154))
,schema.core.make_fn_schema.call(null,output_schema31151,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31152], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__31162,value){var map__31164 = p__31162;var map__31164__$1 = ((cljs.core.seq_QMARK_.call(null,map__31164))?cljs.core.apply.call(null,cljs.core.hash_map,map__31164):map__31164);var component_spec = map__31164__$1;var options = cljs.core.get.call(null,map__31164__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__31164__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31164,map__31164__$1,component_spec,options,label){
return (function (p1__31161_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31161_SHARP_));
});})(map__31164,map__31164__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__31165,value){var map__31167 = p__31165;var map__31167__$1 = ((cljs.core.seq_QMARK_.call(null,map__31167))?cljs.core.apply.call(null,cljs.core.hash_map,map__31167):map__31167);var component_spec = map__31167__$1;var options = cljs.core.get.call(null,map__31167__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__31167__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__31168_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31168_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__31169_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31169_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31170 = schema.core.Any;var input_schema31171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31172 = schema.core.checker.call(null,input_schema31171);var output_checker31173 = schema.core.checker.call(null,output_schema31170);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31170,input_schema31171,input_checker31172,output_checker31173){
return (function render_STAR_(G__31174){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31191 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31174], null);var temp__4126__auto___31192 = input_checker31172.call(null,args__6035__auto___31191);if(cljs.core.truth_(temp__4126__auto___31192))
{var error__6036__auto___31193 = temp__4126__auto___31192;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31193)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31193,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31191,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31171,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31174;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31170,input_schema31171,input_checker31172,output_checker31173){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31170,input_schema31171,input_checker31172,output_checker31173))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31170,input_schema31171,input_checker31172,output_checker31173){
return (function iter__31183(s__31184){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31170,input_schema31171,input_checker31172,output_checker31173){
return (function (){var s__31184__$1 = s__31184;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31184__$1);if(temp__4126__auto__)
{var s__31184__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31184__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31184__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31186 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31185 = (0);while(true){
if((i__31185 < size__4376__auto__))
{var map__31189 = cljs.core._nth.call(null,c__4375__auto__,i__31185);var map__31189__$1 = ((cljs.core.seq_QMARK_.call(null,map__31189))?cljs.core.apply.call(null,cljs.core.hash_map,map__31189):map__31189);var option = map__31189__$1;var label__$1 = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31186,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31194 = (i__31185 + (1));
i__31185 = G__31194;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31186),iter__31183.call(null,cljs.core.chunk_rest.call(null,s__31184__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31186),null);
}
} else
{var map__31190 = cljs.core.first.call(null,s__31184__$2);var map__31190__$1 = ((cljs.core.seq_QMARK_.call(null,map__31190))?cljs.core.apply.call(null,cljs.core.hash_map,map__31190):map__31190);var option = map__31190__$1;var label__$1 = cljs.core.get.call(null,map__31190__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31190__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31183.call(null,cljs.core.rest.call(null,s__31184__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31170,input_schema31171,input_checker31172,output_checker31173))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31170,input_schema31171,input_checker31172,output_checker31173))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31195 = output_checker31173.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31195))
{var error__6036__auto___31196 = temp__4126__auto___31195;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31196)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31196,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31170,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31170,input_schema31171,input_checker31172,output_checker31173))
,schema.core.make_fn_schema.call(null,output_schema31170,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31171], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31342 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31202 = schema.core.Any;var input_schema31203 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31200","map31200",1919756395,null))], null);var input_checker31204 = schema.core.checker.call(null,input_schema31203);var output_checker31205 = schema.core.checker.call(null,output_schema31202);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205){
return (function constructor31198(G__31206){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31343 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31206], null);var temp__4126__auto___31344 = input_checker31204.call(null,args__6035__auto___31343);if(cljs.core.truth_(temp__4126__auto___31344))
{var error__6036__auto___31345 = temp__4126__auto___31344;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31198","constructor31198",1421585884,null),cljs.core.pr_str.call(null,error__6036__auto___31345)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31345,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31343,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31203,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31200 = G__31206;while(true){
if(cljs.core.map_QMARK_.call(null,map31200))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31200)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31200,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31201 = plumbing.fnk.schema.safe_get.call(null,map31200,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31201,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31200,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t31273 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t31273 = (function (map31201,component_spec,component_filter_rq_chan,owner,data,output_schema31202,input_checker31204,map31200,filter_spec,output_checker31205,validate__6034__auto__,id,input_schema31203,constructor31198,ufv__,G__31206,meta31274){
this.map31201 = map31201;
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.output_schema31202 = output_schema31202;
this.input_checker31204 = input_checker31204;
this.map31200 = map31200;
this.filter_spec = filter_spec;
this.output_checker31205 = output_checker31205;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.input_schema31203 = input_schema31203;
this.constructor31198 = constructor31198;
this.ufv__ = ufv__;
this.G__31206 = G__31206;
this.meta31274 = meta31274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t31273.cljs$lang$type = true;
clustermap.components.filters.select_filter.t31273.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t31273";
clustermap.components.filters.select_filter.t31273.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t31273");
});})(owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205))
;
clustermap.components.filters.select_filter.t31273.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t31273.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205))
;
clustermap.components.filters.select_filter.t31273.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t31273.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205))
;
clustermap.components.filters.select_filter.t31273.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t31273.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205){
return (function (state_31313){var state_val_31314 = (state_31313[(1)]);if((state_val_31314 === (7)))
{var inst_31304 = (state_31313[(2)]);var state_31313__$1 = state_31313;if(cljs.core.truth_(inst_31304))
{var statearr_31315_31346 = state_31313__$1;(statearr_31315_31346[(1)] = (11));
} else
{var statearr_31316_31347 = state_31313__$1;(statearr_31316_31347[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31314 === (1)))
{var state_31313__$1 = state_31313;var statearr_31317_31348 = state_31313__$1;(statearr_31317_31348[(2)] = null);
(statearr_31317_31348[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31314 === (4)))
{var inst_31278 = (state_31313[(7)]);var inst_31278__$1 = (state_31313[(2)]);var state_31313__$1 = (function (){var statearr_31318 = state_31313;(statearr_31318[(7)] = inst_31278__$1);
return statearr_31318;
})();if(cljs.core.truth_(inst_31278__$1))
{var statearr_31319_31349 = state_31313__$1;(statearr_31319_31349[(1)] = (5));
} else
{var statearr_31320_31350 = state_31313__$1;(statearr_31320_31350[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31314 === (13)))
{var inst_31309 = (state_31313[(2)]);var state_31313__$1 = state_31313;var statearr_31321_31351 = state_31313__$1;(statearr_31321_31351[(2)] = inst_31309);
(statearr_31321_31351[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31314 === (6)))
{var state_31313__$1 = state_31313;var statearr_31322_31352 = state_31313__$1;(statearr_31322_31352[(2)] = null);
(statearr_31322_31352[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31314 === (3)))
{var inst_31311 = (state_31313[(2)]);var state_31313__$1 = state_31313;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31313__$1,inst_31311);
} else
{if((state_val_31314 === (12)))
{var state_31313__$1 = state_31313;var statearr_31323_31353 = state_31313__$1;(statearr_31323_31353[(2)] = null);
(statearr_31323_31353[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31314 === (2)))
{var state_31313__$1 = state_31313;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31313__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31314 === (11)))
{var state_31313__$1 = state_31313;var statearr_31324_31354 = state_31313__$1;(statearr_31324_31354[(2)] = null);
(statearr_31324_31354[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31314 === (9)))
{var inst_31284 = (state_31313[(8)]);var state_31313__$1 = state_31313;var statearr_31325_31355 = state_31313__$1;(statearr_31325_31355[(2)] = inst_31284);
(statearr_31325_31355[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31314 === (5)))
{var inst_31278 = (state_31313[(7)]);var inst_31284 = (state_31313[(8)]);var inst_31281 = cljs.core.nth.call(null,inst_31278,(0),null);var inst_31282 = cljs.core.nth.call(null,inst_31278,(1),null);var inst_31284__$1 = om.core.get_props.call(null,self__.owner);var inst_31285 = cljs.core.seq_QMARK_.call(null,inst_31284__$1);var state_31313__$1 = (function (){var statearr_31326 = state_31313;(statearr_31326[(9)] = inst_31281);
(statearr_31326[(8)] = inst_31284__$1);
(statearr_31326[(10)] = inst_31282);
return statearr_31326;
})();if(inst_31285)
{var statearr_31327_31356 = state_31313__$1;(statearr_31327_31356[(1)] = (8));
} else
{var statearr_31328_31357 = state_31313__$1;(statearr_31328_31357[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31314 === (10)))
{var inst_31282 = (state_31313[(10)]);var inst_31290 = (state_31313[(2)]);var inst_31291 = cljs.core.get.call(null,inst_31290,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31292 = cljs.core.get.call(null,inst_31290,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31293 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31294 = ["SELECT-FILTER-RQ",self__.id,inst_31282];var inst_31295 = (new cljs.core.PersistentVector(null,3,(5),inst_31293,inst_31294,null));var inst_31296 = cljs.core.clj__GT_js.call(null,inst_31295);var inst_31297 = console.log(inst_31296);var inst_31298 = cljs.core.deref.call(null,inst_31291);var inst_31299 = cljs.core.deref.call(null,inst_31292);var inst_31300 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_31298,inst_31299,inst_31282);var inst_31301 = om.core.update_BANG_.call(null,inst_31291,inst_31300);var state_31313__$1 = (function (){var statearr_31329 = state_31313;(statearr_31329[(11)] = inst_31301);
(statearr_31329[(12)] = inst_31297);
return statearr_31329;
})();var statearr_31330_31358 = state_31313__$1;(statearr_31330_31358[(2)] = true);
(statearr_31330_31358[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31314 === (8)))
{var inst_31284 = (state_31313[(8)]);var inst_31287 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31284);var state_31313__$1 = state_31313;var statearr_31331_31359 = state_31313__$1;(statearr_31331_31359[(2)] = inst_31287);
(statearr_31331_31359[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31335 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31335[(0)] = state_machine__9111__auto__);
(statearr_31335[(1)] = (1));
return statearr_31335;
});
var state_machine__9111__auto____1 = (function (state_31313){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31313);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31336){if((e31336 instanceof Object))
{var ex__9114__auto__ = e31336;var statearr_31337_31360 = state_31313;(statearr_31337_31360[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31313);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31336;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31361 = state_31313;
state_31313 = G__31361;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31313){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205))
})();var state__9127__auto__ = (function (){var statearr_31338 = f__9126__auto__.call(null);(statearr_31338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205))
;
clustermap.components.filters.select_filter.t31273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205){
return (function (_31275){var self__ = this;
var _31275__$1 = this;return self__.meta31274;
});})(owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205))
;
clustermap.components.filters.select_filter.t31273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205){
return (function (_31275,meta31274__$1){var self__ = this;
var _31275__$1 = this;return (new clustermap.components.filters.select_filter.t31273(self__.map31201,self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.output_schema31202,self__.input_checker31204,self__.map31200,self__.filter_spec,self__.output_checker31205,self__.validate__6034__auto__,self__.id,self__.input_schema31203,self__.constructor31198,self__.ufv__,self__.G__31206,meta31274__$1));
});})(owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205))
;
clustermap.components.filters.select_filter.__GT_t31273 = ((function (owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205){
return (function __GT_t31273(map31201__$1,component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,output_schema31202__$1,input_checker31204__$1,map31200__$1,filter_spec__$1,output_checker31205__$1,validate__6034__auto____$1,id__$1,input_schema31203__$1,constructor31198__$1,ufv____$1,G__31206__$1,meta31274){return (new clustermap.components.filters.select_filter.t31273(map31201__$1,component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,output_schema31202__$1,input_checker31204__$1,map31200__$1,filter_spec__$1,output_checker31205__$1,validate__6034__auto____$1,id__$1,input_schema31203__$1,constructor31198__$1,ufv____$1,G__31206__$1,meta31274));
});})(owner,component_filter_rq_chan,map31201,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205))
;
}
return (new clustermap.components.filters.select_filter.t31273(map31201,component_spec,component_filter_rq_chan,owner,data,output_schema31202,input_checker31204,map31200,filter_spec,output_checker31205,validate__6034__auto__,id,input_schema31203,constructor31198,ufv__,G__31206,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31362 = output_checker31205.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31362))
{var error__6036__auto___31363 = temp__4126__auto___31362;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31198","constructor31198",1421585884,null),cljs.core.pr_str.call(null,error__6036__auto___31363)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31363,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31202,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31202,input_schema31203,input_checker31204,output_checker31205))
,schema.core.make_fn_schema.call(null,output_schema31202,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31203], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31342){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner31197,p__31339){var vec__31341 = p__31339;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31341,(0),null);return component_fnk__7881__auto___31342.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31197,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner31197,var_args){
var p__31339 = null;if (arguments.length > 2) {
  p__31339 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner31197,p__31339);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31364){
var data__7882__auto__ = cljs.core.first(arglist__31364);
arglist__31364 = cljs.core.next(arglist__31364);
var owner31197 = cljs.core.first(arglist__31364);
var p__31339 = cljs.core.rest(arglist__31364);
return select_filter_component__delegate(data__7882__auto__,owner31197,p__31339);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31342))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m31199){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m31199);
});
__GT_select_filter_component = function(cursor__7850__auto__,m31199){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m31199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
