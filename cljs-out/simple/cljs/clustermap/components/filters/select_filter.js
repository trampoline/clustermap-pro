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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__30194(s__30195){return (new cljs.core.LazySeq(null,(function (){var s__30195__$1 = s__30195;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30195__$1);if(temp__4126__auto__)
{var s__30195__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30195__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30195__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30197 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30196 = (0);while(true){
if((i__30196 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__30196);cljs.core.chunk_append.call(null,b__30197,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__30198 = (i__30196 + (1));
i__30196 = G__30198;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30197),iter__30194.call(null,cljs.core.chunk_rest.call(null,s__30195__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30197),null);
}
} else
{var o = cljs.core.first.call(null,s__30195__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__30194.call(null,cljs.core.rest.call(null,s__30195__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30202 = schema.core.Any;var input_schema30203 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30199","map30199",-514330581,null))], null);var input_checker30204 = schema.core.checker.call(null,input_schema30203);var output_checker30205 = schema.core.checker.call(null,output_schema30202);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function get_option_value(G__30206){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30207 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30206], null);var temp__4126__auto___30208 = input_checker30204.call(null,args__6035__auto___30207);if(cljs.core.truth_(temp__4126__auto___30208))
{var error__6036__auto___30209 = temp__4126__auto___30208;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30209)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30209,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30207,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30203,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30199 = G__30206;while(true){
if(cljs.core.map_QMARK_.call(null,map30199))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30199)));
}
var map30201 = plumbing.fnk.schema.safe_get.call(null,map30199,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map30201,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map30201,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map30201,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30200 = plumbing.fnk.schema.safe_get.call(null,map30199,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map30200,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map30200,options,label,id,map30201,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map30200,options,label,id,map30201,validate__6034__auto__,ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30210 = output_checker30205.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30210))
{var error__6036__auto___30211 = temp__4126__auto___30210;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___30211)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30211,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30202,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30202,input_schema30203,input_checker30204,output_checker30205))
,schema.core.make_fn_schema.call(null,output_schema30202,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30203], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__30213,value){var map__30215 = p__30213;var map__30215__$1 = ((cljs.core.seq_QMARK_.call(null,map__30215))?cljs.core.apply.call(null,cljs.core.hash_map,map__30215):map__30215);var component_spec = map__30215__$1;var options = cljs.core.get.call(null,map__30215__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__30215__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__30215,map__30215__$1,component_spec,options,label){
return (function (p1__30212_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30212_SHARP_));
});})(map__30215,map__30215__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__30216,value){var map__30218 = p__30216;var map__30218__$1 = ((cljs.core.seq_QMARK_.call(null,map__30218))?cljs.core.apply.call(null,cljs.core.hash_map,map__30218):map__30218);var component_spec = map__30218__$1;var options = cljs.core.get.call(null,map__30218__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__30218__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__30219_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30219_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__30220_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30220_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30221 = schema.core.Any;var input_schema30222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30223 = schema.core.checker.call(null,input_schema30222);var output_checker30224 = schema.core.checker.call(null,output_schema30221);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30221,input_schema30222,input_checker30223,output_checker30224){
return (function render_STAR_(G__30225){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30225], null);var temp__4126__auto___30243 = input_checker30223.call(null,args__6035__auto___30242);if(cljs.core.truth_(temp__4126__auto___30243))
{var error__6036__auto___30244 = temp__4126__auto___30243;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30244)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30244,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30242,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30222,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30225;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30221,input_schema30222,input_checker30223,output_checker30224){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30221,input_schema30222,input_checker30223,output_checker30224))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30221,input_schema30222,input_checker30223,output_checker30224){
return (function iter__30234(s__30235){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30221,input_schema30222,input_checker30223,output_checker30224){
return (function (){var s__30235__$1 = s__30235;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30235__$1);if(temp__4126__auto__)
{var s__30235__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30235__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30235__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30237 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30236 = (0);while(true){
if((i__30236 < size__4376__auto__))
{var map__30240 = cljs.core._nth.call(null,c__4375__auto__,i__30236);var map__30240__$1 = ((cljs.core.seq_QMARK_.call(null,map__30240))?cljs.core.apply.call(null,cljs.core.hash_map,map__30240):map__30240);var option = map__30240__$1;var label__$1 = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__30237,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__30245 = (i__30236 + (1));
i__30236 = G__30245;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30237),iter__30234.call(null,cljs.core.chunk_rest.call(null,s__30235__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30237),null);
}
} else
{var map__30241 = cljs.core.first.call(null,s__30235__$2);var map__30241__$1 = ((cljs.core.seq_QMARK_.call(null,map__30241))?cljs.core.apply.call(null,cljs.core.hash_map,map__30241):map__30241);var option = map__30241__$1;var label__$1 = cljs.core.get.call(null,map__30241__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__30241__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__30234.call(null,cljs.core.rest.call(null,s__30235__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30221,input_schema30222,input_checker30223,output_checker30224))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30221,input_schema30222,input_checker30223,output_checker30224))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30246 = output_checker30224.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30246))
{var error__6036__auto___30247 = temp__4126__auto___30246;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30247)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30247,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30221,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30221,input_schema30222,input_checker30223,output_checker30224))
,schema.core.make_fn_schema.call(null,output_schema30221,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30222], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30393 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30253 = schema.core.Any;var input_schema30254 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30251","map30251",-827621737,null))], null);var input_checker30255 = schema.core.checker.call(null,input_schema30254);var output_checker30256 = schema.core.checker.call(null,output_schema30253);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256){
return (function constructor30249(G__30257){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30257], null);var temp__4126__auto___30395 = input_checker30255.call(null,args__6035__auto___30394);if(cljs.core.truth_(temp__4126__auto___30395))
{var error__6036__auto___30396 = temp__4126__auto___30395;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30249","constructor30249",-993592498,null),cljs.core.pr_str.call(null,error__6036__auto___30396)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30396,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30394,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30254,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30251 = G__30257;while(true){
if(cljs.core.map_QMARK_.call(null,map30251))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30251)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30251,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30252 = plumbing.fnk.schema.safe_get.call(null,map30251,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30252,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30251,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t30324 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t30324 = (function (input_schema30254,component_spec,component_filter_rq_chan,owner,data,G__30257,map30252,constructor30249,filter_spec,output_checker30256,input_checker30255,map30251,output_schema30253,validate__6034__auto__,id,ufv__,meta30325){
this.input_schema30254 = input_schema30254;
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.G__30257 = G__30257;
this.map30252 = map30252;
this.constructor30249 = constructor30249;
this.filter_spec = filter_spec;
this.output_checker30256 = output_checker30256;
this.input_checker30255 = input_checker30255;
this.map30251 = map30251;
this.output_schema30253 = output_schema30253;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta30325 = meta30325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t30324.cljs$lang$type = true;
clustermap.components.filters.select_filter.t30324.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t30324";
clustermap.components.filters.select_filter.t30324.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t30324");
});})(owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256))
;
clustermap.components.filters.select_filter.t30324.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t30324.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256))
;
clustermap.components.filters.select_filter.t30324.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t30324.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256))
;
clustermap.components.filters.select_filter.t30324.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t30324.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256){
return (function (_){var self__ = this;
var ___$1 = this;var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256){
return (function (state_30364){var state_val_30365 = (state_30364[(1)]);if((state_val_30365 === (7)))
{var inst_30355 = (state_30364[(2)]);var state_30364__$1 = state_30364;if(cljs.core.truth_(inst_30355))
{var statearr_30366_30397 = state_30364__$1;(statearr_30366_30397[(1)] = (11));
} else
{var statearr_30367_30398 = state_30364__$1;(statearr_30367_30398[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30365 === (1)))
{var state_30364__$1 = state_30364;var statearr_30368_30399 = state_30364__$1;(statearr_30368_30399[(2)] = null);
(statearr_30368_30399[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30365 === (4)))
{var inst_30329 = (state_30364[(7)]);var inst_30329__$1 = (state_30364[(2)]);var state_30364__$1 = (function (){var statearr_30369 = state_30364;(statearr_30369[(7)] = inst_30329__$1);
return statearr_30369;
})();if(cljs.core.truth_(inst_30329__$1))
{var statearr_30370_30400 = state_30364__$1;(statearr_30370_30400[(1)] = (5));
} else
{var statearr_30371_30401 = state_30364__$1;(statearr_30371_30401[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30365 === (13)))
{var inst_30360 = (state_30364[(2)]);var state_30364__$1 = state_30364;var statearr_30372_30402 = state_30364__$1;(statearr_30372_30402[(2)] = inst_30360);
(statearr_30372_30402[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30365 === (6)))
{var state_30364__$1 = state_30364;var statearr_30373_30403 = state_30364__$1;(statearr_30373_30403[(2)] = null);
(statearr_30373_30403[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30365 === (3)))
{var inst_30362 = (state_30364[(2)]);var state_30364__$1 = state_30364;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30364__$1,inst_30362);
} else
{if((state_val_30365 === (12)))
{var state_30364__$1 = state_30364;var statearr_30374_30404 = state_30364__$1;(statearr_30374_30404[(2)] = null);
(statearr_30374_30404[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30365 === (2)))
{var state_30364__$1 = state_30364;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30364__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30365 === (11)))
{var state_30364__$1 = state_30364;var statearr_30375_30405 = state_30364__$1;(statearr_30375_30405[(2)] = null);
(statearr_30375_30405[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30365 === (9)))
{var inst_30335 = (state_30364[(8)]);var state_30364__$1 = state_30364;var statearr_30376_30406 = state_30364__$1;(statearr_30376_30406[(2)] = inst_30335);
(statearr_30376_30406[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30365 === (5)))
{var inst_30335 = (state_30364[(8)]);var inst_30329 = (state_30364[(7)]);var inst_30332 = cljs.core.nth.call(null,inst_30329,(0),null);var inst_30333 = cljs.core.nth.call(null,inst_30329,(1),null);var inst_30335__$1 = om.core.get_props.call(null,self__.owner);var inst_30336 = cljs.core.seq_QMARK_.call(null,inst_30335__$1);var state_30364__$1 = (function (){var statearr_30377 = state_30364;(statearr_30377[(8)] = inst_30335__$1);
(statearr_30377[(9)] = inst_30333);
(statearr_30377[(10)] = inst_30332);
return statearr_30377;
})();if(inst_30336)
{var statearr_30378_30407 = state_30364__$1;(statearr_30378_30407[(1)] = (8));
} else
{var statearr_30379_30408 = state_30364__$1;(statearr_30379_30408[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30365 === (10)))
{var inst_30333 = (state_30364[(9)]);var inst_30341 = (state_30364[(2)]);var inst_30342 = cljs.core.get.call(null,inst_30341,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30343 = cljs.core.get.call(null,inst_30341,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30344 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30345 = ["SELECT-FILTER-RQ",self__.id,inst_30333];var inst_30346 = (new cljs.core.PersistentVector(null,3,(5),inst_30344,inst_30345,null));var inst_30347 = cljs.core.clj__GT_js.call(null,inst_30346);var inst_30348 = console.log(inst_30347);var inst_30349 = cljs.core.deref.call(null,inst_30342);var inst_30350 = cljs.core.deref.call(null,inst_30343);var inst_30351 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_30349,inst_30350,inst_30333);var inst_30352 = om.core.update_BANG_.call(null,inst_30342,inst_30351);var state_30364__$1 = (function (){var statearr_30380 = state_30364;(statearr_30380[(11)] = inst_30348);
(statearr_30380[(12)] = inst_30352);
return statearr_30380;
})();var statearr_30381_30409 = state_30364__$1;(statearr_30381_30409[(2)] = true);
(statearr_30381_30409[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30365 === (8)))
{var inst_30335 = (state_30364[(8)]);var inst_30338 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30335);var state_30364__$1 = state_30364;var statearr_30382_30410 = state_30364__$1;(statearr_30382_30410[(2)] = inst_30338);
(statearr_30382_30410[(1)] = (10));
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
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_30386 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30386[(0)] = state_machine__11099__auto__);
(statearr_30386[(1)] = (1));
return statearr_30386;
});
var state_machine__11099__auto____1 = (function (state_30364){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_30364);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e30387){if((e30387 instanceof Object))
{var ex__11102__auto__ = e30387;var statearr_30388_30411 = state_30364;(statearr_30388_30411[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30364);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30387;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30412 = state_30364;
state_30364 = G__30412;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_30364){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_30364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256))
})();var state__11156__auto__ = (function (){var statearr_30389 = f__11155__auto__.call(null);(statearr_30389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_30389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256))
);
return c__11154__auto__;
});})(owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256))
;
clustermap.components.filters.select_filter.t30324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256){
return (function (_30326){var self__ = this;
var _30326__$1 = this;return self__.meta30325;
});})(owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256))
;
clustermap.components.filters.select_filter.t30324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256){
return (function (_30326,meta30325__$1){var self__ = this;
var _30326__$1 = this;return (new clustermap.components.filters.select_filter.t30324(self__.input_schema30254,self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.G__30257,self__.map30252,self__.constructor30249,self__.filter_spec,self__.output_checker30256,self__.input_checker30255,self__.map30251,self__.output_schema30253,self__.validate__6034__auto__,self__.id,self__.ufv__,meta30325__$1));
});})(owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256))
;
clustermap.components.filters.select_filter.__GT_t30324 = ((function (owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256){
return (function __GT_t30324(input_schema30254__$1,component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,G__30257__$1,map30252__$1,constructor30249__$1,filter_spec__$1,output_checker30256__$1,input_checker30255__$1,map30251__$1,output_schema30253__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30325){return (new clustermap.components.filters.select_filter.t30324(input_schema30254__$1,component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,G__30257__$1,map30252__$1,constructor30249__$1,filter_spec__$1,output_checker30256__$1,input_checker30255__$1,map30251__$1,output_schema30253__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta30325));
});})(owner,component_filter_rq_chan,map30252,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256))
;
}
return (new clustermap.components.filters.select_filter.t30324(input_schema30254,component_spec,component_filter_rq_chan,owner,data,G__30257,map30252,constructor30249,filter_spec,output_checker30256,input_checker30255,map30251,output_schema30253,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30413 = output_checker30256.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30413))
{var error__6036__auto___30414 = temp__4126__auto___30413;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30249","constructor30249",-993592498,null),cljs.core.pr_str.call(null,error__6036__auto___30414)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30414,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30253,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30253,input_schema30254,input_checker30255,output_checker30256))
,schema.core.make_fn_schema.call(null,output_schema30253,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30254], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___30393){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner30248,p__30390){var vec__30392 = p__30390;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30392,(0),null);return component_fnk__7881__auto___30393.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30248,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner30248,var_args){
var p__30390 = null;if (arguments.length > 2) {
  p__30390 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner30248,p__30390);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__30415){
var data__7882__auto__ = cljs.core.first(arglist__30415);
arglist__30415 = cljs.core.next(arglist__30415);
var owner30248 = cljs.core.first(arglist__30415);
var p__30390 = cljs.core.rest(arglist__30415);
return select_filter_component__delegate(data__7882__auto__,owner30248,p__30390);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___30393))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m30250){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m30250);
});
__GT_select_filter_component = function(cursor__7850__auto__,m30250){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m30250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
