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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30174(s__30175){return (new cljs.core.LazySeq(null,(function (){var s__30175__$1 = s__30175;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30175__$1);if(temp__4126__auto__)
{var s__30175__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30175__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30175__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30177 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30176 = (0);while(true){
if((i__30176 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30176);cljs.core.chunk_append.call(null,b__30177,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30178 = (i__30176 + (1));
i__30176 = G__30178;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30177),iter__30174.call(null,cljs.core.chunk_rest.call(null,s__30175__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30177),null);
}
} else
{var o = cljs.core.first.call(null,s__30175__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30174.call(null,cljs.core.rest.call(null,s__30175__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30182 = schema.core.Any;var input_schema30183 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30179","map30179",1094502654,null))], null);var input_checker30184 = schema.core.checker.call(null,input_schema30183);var output_checker30185 = schema.core.checker.call(null,output_schema30182);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30182,input_schema30183,input_checker30184,output_checker30185){
return (function get_option_value(G__30186){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30187 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30186], null);var temp__4126__auto___30188 = input_checker30184.call(null,args__6035__auto___30187);if(cljs.core.truth_(temp__4126__auto___30188))
{var error__6036__auto___30189 = temp__4126__auto___30188;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30189)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30189,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30187,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30183,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30179 = G__30186;while(true){
if(cljs.core.map_QMARK_.call(null,map30179))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30179)));
}
var map30181 = plumbing.fnk.schema.safe_get.call(null,map30179,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map30181,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map30181,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map30181,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30180 = plumbing.fnk.schema.safe_get.call(null,map30179,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map30180,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map30180,options,label,id,map30181,validate__6034__auto__,ufv__,output_schema30182,input_schema30183,input_checker30184,output_checker30185){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map30180,options,label,id,map30181,validate__6034__auto__,ufv__,output_schema30182,input_schema30183,input_checker30184,output_checker30185))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30190 = output_checker30185.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30190))
{var error__6036__auto___30191 = temp__4126__auto___30190;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30191)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30191,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30182,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30182,input_schema30183,input_checker30184,output_checker30185))
,schema.core.make_fn_schema.call(null,output_schema30182,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30183], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__30193,value){var map__30195 = p__30193;var map__30195__$1 = ((cljs.core.seq_QMARK_.call(null,map__30195))?cljs.core.apply.call(null,cljs.core.hash_map,map__30195):map__30195);var component_spec = map__30195__$1;var options = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30195__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__30195,map__30195__$1,component_spec,options,label){
return (function (p1__30192_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30192_SHARP_));
});})(map__30195,map__30195__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30196,value){var map__30198 = p__30196;var map__30198__$1 = ((cljs.core.seq_QMARK_.call(null,map__30198))?cljs.core.apply.call(null,cljs.core.hash_map,map__30198):map__30198);var component_spec = map__30198__$1;var options = cljs.core.get.call(null,map__30198__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30198__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30199_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30199_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__30200_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30200_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30201 = schema.core.Any;var input_schema30202 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30203 = schema.core.checker.call(null,input_schema30202);var output_checker30204 = schema.core.checker.call(null,output_schema30201);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function render_STAR_(G__30205){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30205], null);var temp__4126__auto___30223 = input_checker30203.call(null,args__6035__auto___30222);if(cljs.core.truth_(temp__4126__auto___30223))
{var error__6036__auto___30224 = temp__4126__auto___30223;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30224)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30224,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30222,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30202,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30205;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function iter__30214(s__30215){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204){
return (function (){var s__30215__$1 = s__30215;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30215__$1);if(temp__4126__auto__)
{var s__30215__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30215__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30215__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30217 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30216 = (0);while(true){
if((i__30216 < size__4376__auto__))
{var map__30220 = cljs.core._nth.call(null,c__4375__auto__,i__30216);var map__30220__$1 = ((cljs.core.seq_QMARK_.call(null,map__30220))?cljs.core.apply.call(null,cljs.core.hash_map,map__30220):map__30220);var option = map__30220__$1;var label__$1 = cljs.core.get.call(null,map__30220__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30220__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30217,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30225 = (i__30216 + (1));
i__30216 = G__30225;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30217),iter__30214.call(null,cljs.core.chunk_rest.call(null,s__30215__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30217),null);
}
} else
{var map__30221 = cljs.core.first.call(null,s__30215__$2);var map__30221__$1 = ((cljs.core.seq_QMARK_.call(null,map__30221))?cljs.core.apply.call(null,cljs.core.hash_map,map__30221):map__30221);var option = map__30221__$1;var label__$1 = cljs.core.get.call(null,map__30221__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30221__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30214.call(null,cljs.core.rest.call(null,s__30215__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30226 = output_checker30204.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30226))
{var error__6036__auto___30227 = temp__4126__auto___30226;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30227)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30227,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30201,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30201,input_schema30202,input_checker30203,output_checker30204))
,schema.core.make_fn_schema.call(null,output_schema30201,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30202], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30373 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30233 = schema.core.Any;var input_schema30234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30231","map30231",-1641298913,null))], null);var input_checker30235 = schema.core.checker.call(null,input_schema30234);var output_checker30236 = schema.core.checker.call(null,output_schema30233);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236){
return (function constructor30229(G__30237){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30237], null);var temp__4126__auto___30375 = input_checker30235.call(null,args__6035__auto___30374);if(cljs.core.truth_(temp__4126__auto___30375))
{var error__6036__auto___30376 = temp__4126__auto___30375;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30229","constructor30229",-1328490113,null),cljs.core.pr_str.call(null,error__6036__auto___30376)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30376,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30374,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30234,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30231 = G__30237;while(true){
if(cljs.core.map_QMARK_.call(null,map30231))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30231)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30231,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30232 = plumbing.fnk.schema.safe_get.call(null,map30231,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30232,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30231,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t30304 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t30304 = (function (component_spec,component_filter_rq_chan,owner,data,output_checker30236,input_schema30234,G__30237,input_checker30235,filter_spec,map30232,validate__6034__auto__,id,ufv__,output_schema30233,map30231,constructor30229,meta30305){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.output_checker30236 = output_checker30236;
this.input_schema30234 = input_schema30234;
this.G__30237 = G__30237;
this.input_checker30235 = input_checker30235;
this.filter_spec = filter_spec;
this.map30232 = map30232;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.output_schema30233 = output_schema30233;
this.map30231 = map30231;
this.constructor30229 = constructor30229;
this.meta30305 = meta30305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t30304.cljs$lang$type = true;
clustermap.components.filters.select_filter.t30304.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t30304";
clustermap.components.filters.select_filter.t30304.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t30304");
});})(owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236))
;
clustermap.components.filters.select_filter.t30304.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t30304.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236))
;
clustermap.components.filters.select_filter.t30304.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t30304.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236))
;
clustermap.components.filters.select_filter.t30304.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t30304.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236){
return (function (state_30344){var state_val_30345 = (state_30344[(1)]);if((state_val_30345 === (7)))
{var inst_30335 = (state_30344[(2)]);var state_30344__$1 = state_30344;if(cljs.core.truth_(inst_30335))
{var statearr_30346_30377 = state_30344__$1;(statearr_30346_30377[(1)] = (11));
} else
{var statearr_30347_30378 = state_30344__$1;(statearr_30347_30378[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (1)))
{var state_30344__$1 = state_30344;var statearr_30348_30379 = state_30344__$1;(statearr_30348_30379[(2)] = null);
(statearr_30348_30379[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (4)))
{var inst_30309 = (state_30344[(7)]);var inst_30309__$1 = (state_30344[(2)]);var state_30344__$1 = (function (){var statearr_30349 = state_30344;(statearr_30349[(7)] = inst_30309__$1);
return statearr_30349;
})();if(cljs.core.truth_(inst_30309__$1))
{var statearr_30350_30380 = state_30344__$1;(statearr_30350_30380[(1)] = (5));
} else
{var statearr_30351_30381 = state_30344__$1;(statearr_30351_30381[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (13)))
{var inst_30340 = (state_30344[(2)]);var state_30344__$1 = state_30344;var statearr_30352_30382 = state_30344__$1;(statearr_30352_30382[(2)] = inst_30340);
(statearr_30352_30382[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (6)))
{var state_30344__$1 = state_30344;var statearr_30353_30383 = state_30344__$1;(statearr_30353_30383[(2)] = null);
(statearr_30353_30383[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (3)))
{var inst_30342 = (state_30344[(2)]);var state_30344__$1 = state_30344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30344__$1,inst_30342);
} else
{if((state_val_30345 === (12)))
{var state_30344__$1 = state_30344;var statearr_30354_30384 = state_30344__$1;(statearr_30354_30384[(2)] = null);
(statearr_30354_30384[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (2)))
{var state_30344__$1 = state_30344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30344__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30345 === (11)))
{var state_30344__$1 = state_30344;var statearr_30355_30385 = state_30344__$1;(statearr_30355_30385[(2)] = null);
(statearr_30355_30385[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (9)))
{var inst_30315 = (state_30344[(8)]);var state_30344__$1 = state_30344;var statearr_30356_30386 = state_30344__$1;(statearr_30356_30386[(2)] = inst_30315);
(statearr_30356_30386[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (5)))
{var inst_30309 = (state_30344[(7)]);var inst_30315 = (state_30344[(8)]);var inst_30312 = cljs.core.nth.call(null,inst_30309,(0),null);var inst_30313 = cljs.core.nth.call(null,inst_30309,(1),null);var inst_30315__$1 = om.core.get_props.call(null,self__.owner);var inst_30316 = cljs.core.seq_QMARK_.call(null,inst_30315__$1);var state_30344__$1 = (function (){var statearr_30357 = state_30344;(statearr_30357[(9)] = inst_30313);
(statearr_30357[(8)] = inst_30315__$1);
(statearr_30357[(10)] = inst_30312);
return statearr_30357;
})();if(inst_30316)
{var statearr_30358_30387 = state_30344__$1;(statearr_30358_30387[(1)] = (8));
} else
{var statearr_30359_30388 = state_30344__$1;(statearr_30359_30388[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (10)))
{var inst_30313 = (state_30344[(9)]);var inst_30321 = (state_30344[(2)]);var inst_30322 = cljs.core.get.call(null,inst_30321,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30323 = cljs.core.get.call(null,inst_30321,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30324 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30325 = ["SELECT-FILTER-RQ",self__.id,inst_30313];var inst_30326 = (new cljs.core.PersistentVector(null,3,(5),inst_30324,inst_30325,null));var inst_30327 = cljs.core.clj__GT_js.call(null,inst_30326);var inst_30328 = console.log(inst_30327);var inst_30329 = cljs.core.deref.call(null,inst_30322);var inst_30330 = cljs.core.deref.call(null,inst_30323);var inst_30331 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_30329,inst_30330,inst_30313);var inst_30332 = om.core.update_BANG_.call(null,inst_30322,inst_30331);var state_30344__$1 = (function (){var statearr_30360 = state_30344;(statearr_30360[(11)] = inst_30328);
(statearr_30360[(12)] = inst_30332);
return statearr_30360;
})();var statearr_30361_30389 = state_30344__$1;(statearr_30361_30389[(2)] = true);
(statearr_30361_30389[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30345 === (8)))
{var inst_30315 = (state_30344[(8)]);var inst_30318 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30315);var state_30344__$1 = state_30344;var statearr_30362_30390 = state_30344__$1;(statearr_30362_30390[(2)] = inst_30318);
(statearr_30362_30390[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30366 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30366[(0)] = state_machine__11462__auto__);
(statearr_30366[(1)] = (1));
return statearr_30366;
});
var state_machine__11462__auto____1 = (function (state_30344){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30344);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30367){if((e30367 instanceof Object))
{var ex__11465__auto__ = e30367;var statearr_30368_30391 = state_30344;(statearr_30368_30391[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30344);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30367;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30392 = state_30344;
state_30344 = G__30392;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30344){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236))
})();var state__11519__auto__ = (function (){var statearr_30369 = f__11518__auto__.call(null);(statearr_30369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236))
;
clustermap.components.filters.select_filter.t30304.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236){
return (function (_30306){var self__ = this;
var _30306__$1 = this;return self__.meta30305;
});})(owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236))
;
clustermap.components.filters.select_filter.t30304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236){
return (function (_30306,meta30305__$1){var self__ = this;
var _30306__$1 = this;return (new clustermap.components.filters.select_filter.t30304(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.output_checker30236,self__.input_schema30234,self__.G__30237,self__.input_checker30235,self__.filter_spec,self__.map30232,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.output_schema30233,self__.map30231,self__.constructor30229,meta30305__$1));
});})(owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236))
;
clustermap.components.filters.select_filter.__GT_t30304 = ((function (owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236){
return (function __GT_t30304(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,output_checker30236__$1,input_schema30234__$1,G__30237__$1,input_checker30235__$1,filter_spec__$1,map30232__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_schema30233__$1,map30231__$1,constructor30229__$1,meta30305){return (new clustermap.components.filters.select_filter.t30304(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,output_checker30236__$1,input_schema30234__$1,G__30237__$1,input_checker30235__$1,filter_spec__$1,map30232__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_schema30233__$1,map30231__$1,constructor30229__$1,meta30305));
});})(owner,component_filter_rq_chan,map30232,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236))
;
}
return (new clustermap.components.filters.select_filter.t30304(component_spec,component_filter_rq_chan,owner,data,output_checker30236,input_schema30234,G__30237,input_checker30235,filter_spec,map30232,validate__6034__auto__,id,ufv__,output_schema30233,map30231,constructor30229,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30393 = output_checker30236.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30393))
{var error__6036__auto___30394 = temp__4126__auto___30393;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30229","constructor30229",-1328490113,null),cljs.core.pr_str.call(null,error__6036__auto___30394)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30394,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30233,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30233,input_schema30234,input_checker30235,output_checker30236))
,schema.core.make_fn_schema.call(null,output_schema30233,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30234], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___30373){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner30228,p__30370){var vec__30372 = p__30370;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30372,(0),null);return component_fnk__7881__auto___30373.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30228,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner30228,var_args){
var p__30370 = null;if (arguments.length > 2) {
  p__30370 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner30228,p__30370);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__30395){
var data__7882__auto__ = cljs.core.first(arglist__30395);
arglist__30395 = cljs.core.next(arglist__30395);
var owner30228 = cljs.core.first(arglist__30395);
var p__30370 = cljs.core.rest(arglist__30395);
return select_filter_component__delegate(data__7882__auto__,owner30228,p__30370);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___30373))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m30230){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m30230);
});
__GT_select_filter_component = function(cursor__7850__auto__,m30230){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m30230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
