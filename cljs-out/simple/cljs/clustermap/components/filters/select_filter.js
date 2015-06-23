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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__31203(s__31204){return (new cljs.core.LazySeq(null,(function (){var s__31204__$1 = s__31204;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31204__$1);if(temp__4126__auto__)
{var s__31204__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31204__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31204__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31206 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31205 = (0);while(true){
if((i__31205 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__31205);cljs.core.chunk_append.call(null,b__31206,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__31207 = (i__31205 + (1));
i__31205 = G__31207;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31206),iter__31203.call(null,cljs.core.chunk_rest.call(null,s__31204__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31206),null);
}
} else
{var o = cljs.core.first.call(null,s__31204__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__31203.call(null,cljs.core.rest.call(null,s__31204__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31211 = schema.core.Any;var input_schema31212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map31208","map31208",1951346529,null))], null);var input_checker31213 = schema.core.checker.call(null,input_schema31212);var output_checker31214 = schema.core.checker.call(null,output_schema31211);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31211,input_schema31212,input_checker31213,output_checker31214){
return (function get_option_value(G__31215){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31215], null);var temp__4126__auto___31217 = input_checker31213.call(null,args__6035__auto___31216);if(cljs.core.truth_(temp__4126__auto___31217))
{var error__6036__auto___31218 = temp__4126__auto___31217;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31218)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31218,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31216,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31212,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31208 = G__31215;while(true){
if(cljs.core.map_QMARK_.call(null,map31208))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31208)));
}
var map31210 = plumbing.fnk.schema.safe_get.call(null,map31208,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map31210,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map31210,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map31210,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31209 = plumbing.fnk.schema.safe_get.call(null,map31208,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map31209,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map31209,options,label,id,map31210,validate__6034__auto__,ufv__,output_schema31211,input_schema31212,input_checker31213,output_checker31214){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map31209,options,label,id,map31210,validate__6034__auto__,ufv__,output_schema31211,input_schema31212,input_checker31213,output_checker31214))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31219 = output_checker31214.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31219))
{var error__6036__auto___31220 = temp__4126__auto___31219;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___31220)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31220,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31211,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31211,input_schema31212,input_checker31213,output_checker31214))
,schema.core.make_fn_schema.call(null,output_schema31211,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31212], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__31222,value){var map__31224 = p__31222;var map__31224__$1 = ((cljs.core.seq_QMARK_.call(null,map__31224))?cljs.core.apply.call(null,cljs.core.hash_map,map__31224):map__31224);var component_spec = map__31224__$1;var options = cljs.core.get.call(null,map__31224__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__31224__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31224,map__31224__$1,component_spec,options,label){
return (function (p1__31221_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31221_SHARP_));
});})(map__31224,map__31224__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__31225,value){var map__31227 = p__31225;var map__31227__$1 = ((cljs.core.seq_QMARK_.call(null,map__31227))?cljs.core.apply.call(null,cljs.core.hash_map,map__31227):map__31227);var component_spec = map__31227__$1;var options = cljs.core.get.call(null,map__31227__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__31227__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__31228_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31228_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__31229_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__31229_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31230 = schema.core.Any;var input_schema31231 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31232 = schema.core.checker.call(null,input_schema31231);var output_checker31233 = schema.core.checker.call(null,output_schema31230);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31230,input_schema31231,input_checker31232,output_checker31233){
return (function render_STAR_(G__31234){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31251 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31234], null);var temp__4126__auto___31252 = input_checker31232.call(null,args__6035__auto___31251);if(cljs.core.truth_(temp__4126__auto___31252))
{var error__6036__auto___31253 = temp__4126__auto___31252;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31253)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31253,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31251,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31231,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31234;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31230,input_schema31231,input_checker31232,output_checker31233){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31230,input_schema31231,input_checker31232,output_checker31233))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31230,input_schema31231,input_checker31232,output_checker31233){
return (function iter__31243(s__31244){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31230,input_schema31231,input_checker31232,output_checker31233){
return (function (){var s__31244__$1 = s__31244;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31244__$1);if(temp__4126__auto__)
{var s__31244__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31244__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__31244__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__31246 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__31245 = (0);while(true){
if((i__31245 < size__4376__auto__))
{var map__31249 = cljs.core._nth.call(null,c__4375__auto__,i__31245);var map__31249__$1 = ((cljs.core.seq_QMARK_.call(null,map__31249))?cljs.core.apply.call(null,cljs.core.hash_map,map__31249):map__31249);var option = map__31249__$1;var label__$1 = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__31246,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__31254 = (i__31245 + (1));
i__31245 = G__31254;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31246),iter__31243.call(null,cljs.core.chunk_rest.call(null,s__31244__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31246),null);
}
} else
{var map__31250 = cljs.core.first.call(null,s__31244__$2);var map__31250__$1 = ((cljs.core.seq_QMARK_.call(null,map__31250))?cljs.core.apply.call(null,cljs.core.hash_map,map__31250):map__31250);var option = map__31250__$1;var label__$1 = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__31243.call(null,cljs.core.rest.call(null,s__31244__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31230,input_schema31231,input_checker31232,output_checker31233))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31230,input_schema31231,input_checker31232,output_checker31233))
;return iter__4377__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31255 = output_checker31233.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31255))
{var error__6036__auto___31256 = temp__4126__auto___31255;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31256)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31256,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31230,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31230,input_schema31231,input_checker31232,output_checker31233))
,schema.core.make_fn_schema.call(null,output_schema31230,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31231], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___31402 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31262 = schema.core.Any;var input_schema31263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31260","map31260",1432083387,null))], null);var input_checker31264 = schema.core.checker.call(null,input_schema31263);var output_checker31265 = schema.core.checker.call(null,output_schema31262);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265){
return (function constructor31258(G__31266){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31266], null);var temp__4126__auto___31404 = input_checker31264.call(null,args__6035__auto___31403);if(cljs.core.truth_(temp__4126__auto___31404))
{var error__6036__auto___31405 = temp__4126__auto___31404;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31258","constructor31258",-1456840358,null),cljs.core.pr_str.call(null,error__6036__auto___31405)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31405,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31403,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31263,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31260 = G__31266;while(true){
if(cljs.core.map_QMARK_.call(null,map31260))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31260)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31260,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31261 = plumbing.fnk.schema.safe_get.call(null,map31260,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31261,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31260,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t31333 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t31333 = (function (component_spec,component_filter_rq_chan,output_checker31265,owner,data,map31261,filter_spec,input_checker31264,output_schema31262,validate__6034__auto__,constructor31258,id,map31260,input_schema31263,ufv__,G__31266,meta31334){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_checker31265 = output_checker31265;
this.owner = owner;
this.data = data;
this.map31261 = map31261;
this.filter_spec = filter_spec;
this.input_checker31264 = input_checker31264;
this.output_schema31262 = output_schema31262;
this.validate__6034__auto__ = validate__6034__auto__;
this.constructor31258 = constructor31258;
this.id = id;
this.map31260 = map31260;
this.input_schema31263 = input_schema31263;
this.ufv__ = ufv__;
this.G__31266 = G__31266;
this.meta31334 = meta31334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t31333.cljs$lang$type = true;
clustermap.components.filters.select_filter.t31333.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t31333";
clustermap.components.filters.select_filter.t31333.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t31333");
});})(owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265))
;
clustermap.components.filters.select_filter.t31333.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t31333.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265))
;
clustermap.components.filters.select_filter.t31333.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t31333.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265))
;
clustermap.components.filters.select_filter.t31333.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t31333.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265){
return (function (state_31373){var state_val_31374 = (state_31373[(1)]);if((state_val_31374 === (7)))
{var inst_31364 = (state_31373[(2)]);var state_31373__$1 = state_31373;if(cljs.core.truth_(inst_31364))
{var statearr_31375_31406 = state_31373__$1;(statearr_31375_31406[(1)] = (11));
} else
{var statearr_31376_31407 = state_31373__$1;(statearr_31376_31407[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31374 === (1)))
{var state_31373__$1 = state_31373;var statearr_31377_31408 = state_31373__$1;(statearr_31377_31408[(2)] = null);
(statearr_31377_31408[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31374 === (4)))
{var inst_31338 = (state_31373[(7)]);var inst_31338__$1 = (state_31373[(2)]);var state_31373__$1 = (function (){var statearr_31378 = state_31373;(statearr_31378[(7)] = inst_31338__$1);
return statearr_31378;
})();if(cljs.core.truth_(inst_31338__$1))
{var statearr_31379_31409 = state_31373__$1;(statearr_31379_31409[(1)] = (5));
} else
{var statearr_31380_31410 = state_31373__$1;(statearr_31380_31410[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31374 === (13)))
{var inst_31369 = (state_31373[(2)]);var state_31373__$1 = state_31373;var statearr_31381_31411 = state_31373__$1;(statearr_31381_31411[(2)] = inst_31369);
(statearr_31381_31411[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31374 === (6)))
{var state_31373__$1 = state_31373;var statearr_31382_31412 = state_31373__$1;(statearr_31382_31412[(2)] = null);
(statearr_31382_31412[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31374 === (3)))
{var inst_31371 = (state_31373[(2)]);var state_31373__$1 = state_31373;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31373__$1,inst_31371);
} else
{if((state_val_31374 === (12)))
{var state_31373__$1 = state_31373;var statearr_31383_31413 = state_31373__$1;(statearr_31383_31413[(2)] = null);
(statearr_31383_31413[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31374 === (2)))
{var state_31373__$1 = state_31373;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31373__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31374 === (11)))
{var state_31373__$1 = state_31373;var statearr_31384_31414 = state_31373__$1;(statearr_31384_31414[(2)] = null);
(statearr_31384_31414[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31374 === (9)))
{var inst_31344 = (state_31373[(8)]);var state_31373__$1 = state_31373;var statearr_31385_31415 = state_31373__$1;(statearr_31385_31415[(2)] = inst_31344);
(statearr_31385_31415[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31374 === (5)))
{var inst_31338 = (state_31373[(7)]);var inst_31344 = (state_31373[(8)]);var inst_31341 = cljs.core.nth.call(null,inst_31338,(0),null);var inst_31342 = cljs.core.nth.call(null,inst_31338,(1),null);var inst_31344__$1 = om.core.get_props.call(null,self__.owner);var inst_31345 = cljs.core.seq_QMARK_.call(null,inst_31344__$1);var state_31373__$1 = (function (){var statearr_31386 = state_31373;(statearr_31386[(9)] = inst_31341);
(statearr_31386[(10)] = inst_31342);
(statearr_31386[(8)] = inst_31344__$1);
return statearr_31386;
})();if(inst_31345)
{var statearr_31387_31416 = state_31373__$1;(statearr_31387_31416[(1)] = (8));
} else
{var statearr_31388_31417 = state_31373__$1;(statearr_31388_31417[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31374 === (10)))
{var inst_31342 = (state_31373[(10)]);var inst_31350 = (state_31373[(2)]);var inst_31351 = cljs.core.get.call(null,inst_31350,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31352 = cljs.core.get.call(null,inst_31350,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31353 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31354 = ["SELECT-FILTER-RQ",self__.id,inst_31342];var inst_31355 = (new cljs.core.PersistentVector(null,3,(5),inst_31353,inst_31354,null));var inst_31356 = cljs.core.clj__GT_js.call(null,inst_31355);var inst_31357 = console.log(inst_31356);var inst_31358 = cljs.core.deref.call(null,inst_31351);var inst_31359 = cljs.core.deref.call(null,inst_31352);var inst_31360 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_31358,inst_31359,inst_31342);var inst_31361 = om.core.update_BANG_.call(null,inst_31351,inst_31360);var state_31373__$1 = (function (){var statearr_31389 = state_31373;(statearr_31389[(11)] = inst_31361);
(statearr_31389[(12)] = inst_31357);
return statearr_31389;
})();var statearr_31390_31418 = state_31373__$1;(statearr_31390_31418[(2)] = true);
(statearr_31390_31418[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31374 === (8)))
{var inst_31344 = (state_31373[(8)]);var inst_31347 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31344);var state_31373__$1 = state_31373;var statearr_31391_31419 = state_31373__$1;(statearr_31391_31419[(2)] = inst_31347);
(statearr_31391_31419[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31395 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31395[(0)] = state_machine__9111__auto__);
(statearr_31395[(1)] = (1));
return statearr_31395;
});
var state_machine__9111__auto____1 = (function (state_31373){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31373);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31396){if((e31396 instanceof Object))
{var ex__9114__auto__ = e31396;var statearr_31397_31420 = state_31373;(statearr_31397_31420[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31373);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31396;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31421 = state_31373;
state_31373 = G__31421;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31373){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265))
})();var state__9127__auto__ = (function (){var statearr_31398 = f__9126__auto__.call(null);(statearr_31398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265))
;
clustermap.components.filters.select_filter.t31333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265){
return (function (_31335){var self__ = this;
var _31335__$1 = this;return self__.meta31334;
});})(owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265))
;
clustermap.components.filters.select_filter.t31333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265){
return (function (_31335,meta31334__$1){var self__ = this;
var _31335__$1 = this;return (new clustermap.components.filters.select_filter.t31333(self__.component_spec,self__.component_filter_rq_chan,self__.output_checker31265,self__.owner,self__.data,self__.map31261,self__.filter_spec,self__.input_checker31264,self__.output_schema31262,self__.validate__6034__auto__,self__.constructor31258,self__.id,self__.map31260,self__.input_schema31263,self__.ufv__,self__.G__31266,meta31334__$1));
});})(owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265))
;
clustermap.components.filters.select_filter.__GT_t31333 = ((function (owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265){
return (function __GT_t31333(component_spec__$1,component_filter_rq_chan__$1,output_checker31265__$1,owner__$1,data__$1,map31261__$1,filter_spec__$1,input_checker31264__$1,output_schema31262__$1,validate__6034__auto____$1,constructor31258__$1,id__$1,map31260__$1,input_schema31263__$1,ufv____$1,G__31266__$1,meta31334){return (new clustermap.components.filters.select_filter.t31333(component_spec__$1,component_filter_rq_chan__$1,output_checker31265__$1,owner__$1,data__$1,map31261__$1,filter_spec__$1,input_checker31264__$1,output_schema31262__$1,validate__6034__auto____$1,constructor31258__$1,id__$1,map31260__$1,input_schema31263__$1,ufv____$1,G__31266__$1,meta31334));
});})(owner,component_filter_rq_chan,map31261,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265))
;
}
return (new clustermap.components.filters.select_filter.t31333(component_spec,component_filter_rq_chan,output_checker31265,owner,data,map31261,filter_spec,input_checker31264,output_schema31262,validate__6034__auto__,constructor31258,id,map31260,input_schema31263,ufv__,G__31266,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31422 = output_checker31265.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31422))
{var error__6036__auto___31423 = temp__4126__auto___31422;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31258","constructor31258",-1456840358,null),cljs.core.pr_str.call(null,error__6036__auto___31423)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31423,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31262,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31262,input_schema31263,input_checker31264,output_checker31265))
,schema.core.make_fn_schema.call(null,output_schema31262,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31263], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___31402){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner31257,p__31399){var vec__31401 = p__31399;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31401,(0),null);return component_fnk__7881__auto___31402.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31257,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner31257,var_args){
var p__31399 = null;if (arguments.length > 2) {
  p__31399 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner31257,p__31399);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__31424){
var data__7882__auto__ = cljs.core.first(arglist__31424);
arglist__31424 = cljs.core.next(arglist__31424);
var owner31257 = cljs.core.first(arglist__31424);
var p__31399 = cljs.core.rest(arglist__31424);
return select_filter_component__delegate(data__7882__auto__,owner31257,p__31399);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___31402))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m31259){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m31259);
});
__GT_select_filter_component = function(cursor__7850__auto__,m31259){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m31259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
