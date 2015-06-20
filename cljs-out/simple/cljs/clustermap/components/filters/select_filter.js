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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__31161(s__31162){return (new cljs.core.LazySeq(null,(function (){var s__31162__$1 = s__31162;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31162__$1);if(temp__4126__auto__)
{var s__31162__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31162__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31162__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31164 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31163 = (0);while(true){
if((i__31163 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__31163);cljs.core.chunk_append.call(null,b__31164,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__31165 = (i__31163 + (1));
i__31163 = G__31165;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31164),iter__31161.call(null,cljs.core.chunk_rest.call(null,s__31162__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31164),null);
}
} else
{var o = cljs.core.first.call(null,s__31162__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__31161.call(null,cljs.core.rest.call(null,s__31162__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31169 = schema.core.Any;var input_schema31170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map31166","map31166",-1374146170,null))], null);var input_checker31171 = schema.core.checker.call(null,input_schema31170);var output_checker31172 = schema.core.checker.call(null,output_schema31169);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31169,input_schema31170,input_checker31171,output_checker31172){
return (function get_option_value(G__31173){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31173], null);var temp__4126__auto___31175 = input_checker31171.call(null,args__6035__auto___31174);if(cljs.core.truth_(temp__4126__auto___31175))
{var error__6036__auto___31176 = temp__4126__auto___31175;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31176)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31176,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31174,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31170,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31166 = G__31173;while(true){
if(cljs.core.map_QMARK_.call(null,map31166))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31166)));
}
var map31168 = plumbing.fnk.schema.safe_get.call(null,map31166,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map31168,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map31168,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map31168,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31167 = plumbing.fnk.schema.safe_get.call(null,map31166,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map31167,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map31167,options,label,id,map31168,validate__6034__auto__,ufv__,output_schema31169,input_schema31170,input_checker31171,output_checker31172){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map31167,options,label,id,map31168,validate__6034__auto__,ufv__,output_schema31169,input_schema31170,input_checker31171,output_checker31172))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31177 = output_checker31172.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31177))
{var error__6036__auto___31178 = temp__4126__auto___31177;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31178)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31178,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31169,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31169,input_schema31170,input_checker31171,output_checker31172))
,schema.core.make_fn_schema.call(null,output_schema31169,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31170], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__31180,value){var map__31182 = p__31180;var map__31182__$1 = ((cljs.core.seq_QMARK_.call(null,map__31182))?cljs.core.apply.call(null,cljs.core.hash_map,map__31182):map__31182);var component_spec = map__31182__$1;var options = cljs.core.get.call(null,map__31182__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__31182__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31182,map__31182__$1,component_spec,options,label){
return (function (p1__31179_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31179_SHARP_));
});})(map__31182,map__31182__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__31183,value){var map__31185 = p__31183;var map__31185__$1 = ((cljs.core.seq_QMARK_.call(null,map__31185))?cljs.core.apply.call(null,cljs.core.hash_map,map__31185):map__31185);var component_spec = map__31185__$1;var options = cljs.core.get.call(null,map__31185__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__31185__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__31186_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31186_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__31187_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31187_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31188 = schema.core.Any;var input_schema31189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31190 = schema.core.checker.call(null,input_schema31189);var output_checker31191 = schema.core.checker.call(null,output_schema31188);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31188,input_schema31189,input_checker31190,output_checker31191){
return (function render_STAR_(G__31192){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31209 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31192], null);var temp__4126__auto___31210 = input_checker31190.call(null,args__6035__auto___31209);if(cljs.core.truth_(temp__4126__auto___31210))
{var error__6036__auto___31211 = temp__4126__auto___31210;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31211)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31211,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31209,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31189,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31192;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31188,input_schema31189,input_checker31190,output_checker31191){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31188,input_schema31189,input_checker31190,output_checker31191))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31188,input_schema31189,input_checker31190,output_checker31191){
return (function iter__31201(s__31202){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31188,input_schema31189,input_checker31190,output_checker31191){
return (function (){var s__31202__$1 = s__31202;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31202__$1);if(temp__4126__auto__)
{var s__31202__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31202__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31202__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31204 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31203 = (0);while(true){
if((i__31203 < size__4376__auto__))
{var map__31207 = cljs.core._nth.call(null,c__4375__auto__,i__31203);var map__31207__$1 = ((cljs.core.seq_QMARK_.call(null,map__31207))?cljs.core.apply.call(null,cljs.core.hash_map,map__31207):map__31207);var option = map__31207__$1;var label__$1 = cljs.core.get.call(null,map__31207__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31207__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31204,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31212 = (i__31203 + (1));
i__31203 = G__31212;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31204),iter__31201.call(null,cljs.core.chunk_rest.call(null,s__31202__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31204),null);
}
} else
{var map__31208 = cljs.core.first.call(null,s__31202__$2);var map__31208__$1 = ((cljs.core.seq_QMARK_.call(null,map__31208))?cljs.core.apply.call(null,cljs.core.hash_map,map__31208):map__31208);var option = map__31208__$1;var label__$1 = cljs.core.get.call(null,map__31208__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31208__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31201.call(null,cljs.core.rest.call(null,s__31202__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31188,input_schema31189,input_checker31190,output_checker31191))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31188,input_schema31189,input_checker31190,output_checker31191))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31213 = output_checker31191.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31213))
{var error__6036__auto___31214 = temp__4126__auto___31213;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31214)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31214,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31188,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31188,input_schema31189,input_checker31190,output_checker31191))
,schema.core.make_fn_schema.call(null,output_schema31188,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31189], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31360 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31220 = schema.core.Any;var input_schema31221 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31218","map31218",156952629,null))], null);var input_checker31222 = schema.core.checker.call(null,input_schema31221);var output_checker31223 = schema.core.checker.call(null,output_schema31220);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223){
return (function constructor31216(G__31224){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31224], null);var temp__4126__auto___31362 = input_checker31222.call(null,args__6035__auto___31361);if(cljs.core.truth_(temp__4126__auto___31362))
{var error__6036__auto___31363 = temp__4126__auto___31362;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31216","constructor31216",-1436066287,null),cljs.core.pr_str.call(null,error__6036__auto___31363)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31363,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31361,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31221,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31218 = G__31224;while(true){
if(cljs.core.map_QMARK_.call(null,map31218))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31218)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31218,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31219 = plumbing.fnk.schema.safe_get.call(null,map31218,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31219,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31218,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t31291 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t31291 = (function (component_spec,component_filter_rq_chan,G__31224,output_schema31220,input_schema31221,owner,data,input_checker31222,filter_spec,constructor31216,output_checker31223,map31218,validate__6034__auto__,map31219,id,ufv__,meta31292){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.G__31224 = G__31224;
this.output_schema31220 = output_schema31220;
this.input_schema31221 = input_schema31221;
this.owner = owner;
this.data = data;
this.input_checker31222 = input_checker31222;
this.filter_spec = filter_spec;
this.constructor31216 = constructor31216;
this.output_checker31223 = output_checker31223;
this.map31218 = map31218;
this.validate__6034__auto__ = validate__6034__auto__;
this.map31219 = map31219;
this.id = id;
this.ufv__ = ufv__;
this.meta31292 = meta31292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t31291.cljs$lang$type = true;
clustermap.components.filters.select_filter.t31291.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t31291";
clustermap.components.filters.select_filter.t31291.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t31291");
});})(owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223))
;
clustermap.components.filters.select_filter.t31291.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t31291.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223))
;
clustermap.components.filters.select_filter.t31291.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t31291.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223))
;
clustermap.components.filters.select_filter.t31291.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t31291.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223){
return (function (state_31331){var state_val_31332 = (state_31331[(1)]);if((state_val_31332 === (7)))
{var inst_31322 = (state_31331[(2)]);var state_31331__$1 = state_31331;if(cljs.core.truth_(inst_31322))
{var statearr_31333_31364 = state_31331__$1;(statearr_31333_31364[(1)] = (11));
} else
{var statearr_31334_31365 = state_31331__$1;(statearr_31334_31365[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31332 === (1)))
{var state_31331__$1 = state_31331;var statearr_31335_31366 = state_31331__$1;(statearr_31335_31366[(2)] = null);
(statearr_31335_31366[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31332 === (4)))
{var inst_31296 = (state_31331[(7)]);var inst_31296__$1 = (state_31331[(2)]);var state_31331__$1 = (function (){var statearr_31336 = state_31331;(statearr_31336[(7)] = inst_31296__$1);
return statearr_31336;
})();if(cljs.core.truth_(inst_31296__$1))
{var statearr_31337_31367 = state_31331__$1;(statearr_31337_31367[(1)] = (5));
} else
{var statearr_31338_31368 = state_31331__$1;(statearr_31338_31368[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31332 === (13)))
{var inst_31327 = (state_31331[(2)]);var state_31331__$1 = state_31331;var statearr_31339_31369 = state_31331__$1;(statearr_31339_31369[(2)] = inst_31327);
(statearr_31339_31369[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31332 === (6)))
{var state_31331__$1 = state_31331;var statearr_31340_31370 = state_31331__$1;(statearr_31340_31370[(2)] = null);
(statearr_31340_31370[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31332 === (3)))
{var inst_31329 = (state_31331[(2)]);var state_31331__$1 = state_31331;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31331__$1,inst_31329);
} else
{if((state_val_31332 === (12)))
{var state_31331__$1 = state_31331;var statearr_31341_31371 = state_31331__$1;(statearr_31341_31371[(2)] = null);
(statearr_31341_31371[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31332 === (2)))
{var state_31331__$1 = state_31331;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31331__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31332 === (11)))
{var state_31331__$1 = state_31331;var statearr_31342_31372 = state_31331__$1;(statearr_31342_31372[(2)] = null);
(statearr_31342_31372[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31332 === (9)))
{var inst_31302 = (state_31331[(8)]);var state_31331__$1 = state_31331;var statearr_31343_31373 = state_31331__$1;(statearr_31343_31373[(2)] = inst_31302);
(statearr_31343_31373[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31332 === (5)))
{var inst_31302 = (state_31331[(8)]);var inst_31296 = (state_31331[(7)]);var inst_31299 = cljs.core.nth.call(null,inst_31296,(0),null);var inst_31300 = cljs.core.nth.call(null,inst_31296,(1),null);var inst_31302__$1 = om.core.get_props.call(null,self__.owner);var inst_31303 = cljs.core.seq_QMARK_.call(null,inst_31302__$1);var state_31331__$1 = (function (){var statearr_31344 = state_31331;(statearr_31344[(8)] = inst_31302__$1);
(statearr_31344[(9)] = inst_31299);
(statearr_31344[(10)] = inst_31300);
return statearr_31344;
})();if(inst_31303)
{var statearr_31345_31374 = state_31331__$1;(statearr_31345_31374[(1)] = (8));
} else
{var statearr_31346_31375 = state_31331__$1;(statearr_31346_31375[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31332 === (10)))
{var inst_31300 = (state_31331[(10)]);var inst_31308 = (state_31331[(2)]);var inst_31309 = cljs.core.get.call(null,inst_31308,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31310 = cljs.core.get.call(null,inst_31308,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31311 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31312 = ["SELECT-FILTER-RQ",self__.id,inst_31300];var inst_31313 = (new cljs.core.PersistentVector(null,3,(5),inst_31311,inst_31312,null));var inst_31314 = cljs.core.clj__GT_js.call(null,inst_31313);var inst_31315 = console.log(inst_31314);var inst_31316 = cljs.core.deref.call(null,inst_31309);var inst_31317 = cljs.core.deref.call(null,inst_31310);var inst_31318 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_31316,inst_31317,inst_31300);var inst_31319 = om.core.update_BANG_.call(null,inst_31309,inst_31318);var state_31331__$1 = (function (){var statearr_31347 = state_31331;(statearr_31347[(11)] = inst_31319);
(statearr_31347[(12)] = inst_31315);
return statearr_31347;
})();var statearr_31348_31376 = state_31331__$1;(statearr_31348_31376[(2)] = true);
(statearr_31348_31376[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31332 === (8)))
{var inst_31302 = (state_31331[(8)]);var inst_31305 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31302);var state_31331__$1 = state_31331;var statearr_31349_31377 = state_31331__$1;(statearr_31349_31377[(2)] = inst_31305);
(statearr_31349_31377[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31353 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31353[(0)] = state_machine__9111__auto__);
(statearr_31353[(1)] = (1));
return statearr_31353;
});
var state_machine__9111__auto____1 = (function (state_31331){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31331);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31354){if((e31354 instanceof Object))
{var ex__9114__auto__ = e31354;var statearr_31355_31378 = state_31331;(statearr_31355_31378[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31331);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31354;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31379 = state_31331;
state_31331 = G__31379;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31331){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223))
})();var state__9127__auto__ = (function (){var statearr_31356 = f__9126__auto__.call(null);(statearr_31356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223))
;
clustermap.components.filters.select_filter.t31291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223){
return (function (_31293){var self__ = this;
var _31293__$1 = this;return self__.meta31292;
});})(owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223))
;
clustermap.components.filters.select_filter.t31291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223){
return (function (_31293,meta31292__$1){var self__ = this;
var _31293__$1 = this;return (new clustermap.components.filters.select_filter.t31291(self__.component_spec,self__.component_filter_rq_chan,self__.G__31224,self__.output_schema31220,self__.input_schema31221,self__.owner,self__.data,self__.input_checker31222,self__.filter_spec,self__.constructor31216,self__.output_checker31223,self__.map31218,self__.validate__6034__auto__,self__.map31219,self__.id,self__.ufv__,meta31292__$1));
});})(owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223))
;
clustermap.components.filters.select_filter.__GT_t31291 = ((function (owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223){
return (function __GT_t31291(component_spec__$1,component_filter_rq_chan__$1,G__31224__$1,output_schema31220__$1,input_schema31221__$1,owner__$1,data__$1,input_checker31222__$1,filter_spec__$1,constructor31216__$1,output_checker31223__$1,map31218__$1,validate__6034__auto____$1,map31219__$1,id__$1,ufv____$1,meta31292){return (new clustermap.components.filters.select_filter.t31291(component_spec__$1,component_filter_rq_chan__$1,G__31224__$1,output_schema31220__$1,input_schema31221__$1,owner__$1,data__$1,input_checker31222__$1,filter_spec__$1,constructor31216__$1,output_checker31223__$1,map31218__$1,validate__6034__auto____$1,map31219__$1,id__$1,ufv____$1,meta31292));
});})(owner,component_filter_rq_chan,map31219,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223))
;
}
return (new clustermap.components.filters.select_filter.t31291(component_spec,component_filter_rq_chan,G__31224,output_schema31220,input_schema31221,owner,data,input_checker31222,filter_spec,constructor31216,output_checker31223,map31218,validate__6034__auto__,map31219,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31380 = output_checker31223.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31380))
{var error__6036__auto___31381 = temp__4126__auto___31380;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31216","constructor31216",-1436066287,null),cljs.core.pr_str.call(null,error__6036__auto___31381)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31381,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31220,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31220,input_schema31221,input_checker31222,output_checker31223))
,schema.core.make_fn_schema.call(null,output_schema31220,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31221], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31360){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner31215,p__31357){var vec__31359 = p__31357;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31359,(0),null);return component_fnk__7881__auto___31360.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31215,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner31215,var_args){
var p__31357 = null;if (arguments.length > 2) {
  p__31357 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner31215,p__31357);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31382){
var data__7882__auto__ = cljs.core.first(arglist__31382);
arglist__31382 = cljs.core.next(arglist__31382);
var owner31215 = cljs.core.first(arglist__31382);
var p__31357 = cljs.core.rest(arglist__31382);
return select_filter_component__delegate(data__7882__auto__,owner31215,p__31357);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31360))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m31217){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m31217);
});
__GT_select_filter_component = function(cursor__7850__auto__,m31217){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m31217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
