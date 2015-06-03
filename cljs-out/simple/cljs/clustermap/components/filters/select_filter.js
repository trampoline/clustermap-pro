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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29816(s__29817){return (new cljs.core.LazySeq(null,(function (){var s__29817__$1 = s__29817;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29817__$1);if(temp__4126__auto__)
{var s__29817__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29817__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29817__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29819 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29818 = (0);while(true){
if((i__29818 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29818);cljs.core.chunk_append.call(null,b__29819,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29820 = (i__29818 + (1));
i__29818 = G__29820;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29819),iter__29816.call(null,cljs.core.chunk_rest.call(null,s__29817__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29819),null);
}
} else
{var o = cljs.core.first.call(null,s__29817__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29816.call(null,cljs.core.rest.call(null,s__29817__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29824 = schema.core.Any;var input_schema29825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29821","map29821",1077133178,null))], null);var input_checker29826 = schema.core.checker.call(null,input_schema29825);var output_checker29827 = schema.core.checker.call(null,output_schema29824);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29824,input_schema29825,input_checker29826,output_checker29827){
return (function get_option_value(G__29828){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29828], null);var temp__4126__auto___29830 = input_checker29826.call(null,args__6035__auto___29829);if(cljs.core.truth_(temp__4126__auto___29830))
{var error__6036__auto___29831 = temp__4126__auto___29830;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___29831)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29831,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29829,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29825,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29821 = G__29828;while(true){
if(cljs.core.map_QMARK_.call(null,map29821))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29821)));
}
var map29823 = plumbing.fnk.schema.safe_get.call(null,map29821,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map29823,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map29823,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map29823,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29822 = plumbing.fnk.schema.safe_get.call(null,map29821,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map29822,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map29822,options,label,id,map29823,validate__6034__auto__,ufv__,output_schema29824,input_schema29825,input_checker29826,output_checker29827){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map29822,options,label,id,map29823,validate__6034__auto__,ufv__,output_schema29824,input_schema29825,input_checker29826,output_checker29827))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29832 = output_checker29827.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29832))
{var error__6036__auto___29833 = temp__4126__auto___29832;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___29833)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29833,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29824,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29824,input_schema29825,input_checker29826,output_checker29827))
,schema.core.make_fn_schema.call(null,output_schema29824,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29825], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__29835,value){var map__29837 = p__29835;var map__29837__$1 = ((cljs.core.seq_QMARK_.call(null,map__29837))?cljs.core.apply.call(null,cljs.core.hash_map,map__29837):map__29837);var component_spec = map__29837__$1;var options = cljs.core.get.call(null,map__29837__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29837__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__29837,map__29837__$1,component_spec,options,label){
return (function (p1__29834_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29834_SHARP_));
});})(map__29837,map__29837__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29838,value){var map__29840 = p__29838;var map__29840__$1 = ((cljs.core.seq_QMARK_.call(null,map__29840))?cljs.core.apply.call(null,cljs.core.hash_map,map__29840):map__29840);var component_spec = map__29840__$1;var options = cljs.core.get.call(null,map__29840__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29840__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29841_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29841_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__29842_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29842_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29843 = schema.core.Any;var input_schema29844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29845 = schema.core.checker.call(null,input_schema29844);var output_checker29846 = schema.core.checker.call(null,output_schema29843);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29843,input_schema29844,input_checker29845,output_checker29846){
return (function render_STAR_(G__29847){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29847], null);var temp__4126__auto___29865 = input_checker29845.call(null,args__6035__auto___29864);if(cljs.core.truth_(temp__4126__auto___29865))
{var error__6036__auto___29866 = temp__4126__auto___29865;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29866)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29866,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29864,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29844,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29847;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29843,input_schema29844,input_checker29845,output_checker29846){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29843,input_schema29844,input_checker29845,output_checker29846))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29843,input_schema29844,input_checker29845,output_checker29846){
return (function iter__29856(s__29857){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29843,input_schema29844,input_checker29845,output_checker29846){
return (function (){var s__29857__$1 = s__29857;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29857__$1);if(temp__4126__auto__)
{var s__29857__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29857__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29857__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29859 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29858 = (0);while(true){
if((i__29858 < size__4376__auto__))
{var map__29862 = cljs.core._nth.call(null,c__4375__auto__,i__29858);var map__29862__$1 = ((cljs.core.seq_QMARK_.call(null,map__29862))?cljs.core.apply.call(null,cljs.core.hash_map,map__29862):map__29862);var option = map__29862__$1;var label__$1 = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29859,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29867 = (i__29858 + (1));
i__29858 = G__29867;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29859),iter__29856.call(null,cljs.core.chunk_rest.call(null,s__29857__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29859),null);
}
} else
{var map__29863 = cljs.core.first.call(null,s__29857__$2);var map__29863__$1 = ((cljs.core.seq_QMARK_.call(null,map__29863))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863):map__29863);var option = map__29863__$1;var label__$1 = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29856.call(null,cljs.core.rest.call(null,s__29857__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29843,input_schema29844,input_checker29845,output_checker29846))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29843,input_schema29844,input_checker29845,output_checker29846))
;return iter__4377__auto__.call(null,options__$1);
})()))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29868 = output_checker29846.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29868))
{var error__6036__auto___29869 = temp__4126__auto___29868;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29869)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29869,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29843,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29843,input_schema29844,input_checker29845,output_checker29846))
,schema.core.make_fn_schema.call(null,output_schema29843,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29844], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___30015 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29875 = schema.core.Any;var input_schema29876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29873","map29873",272394529,null))], null);var input_checker29877 = schema.core.checker.call(null,input_schema29876);var output_checker29878 = schema.core.checker.call(null,output_schema29875);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878){
return (function constructor29871(G__29879){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29879], null);var temp__4126__auto___30017 = input_checker29877.call(null,args__6035__auto___30016);if(cljs.core.truth_(temp__4126__auto___30017))
{var error__6036__auto___30018 = temp__4126__auto___30017;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29871","constructor29871",-1616376178,null),cljs.core.pr_str.call(null,error__6036__auto___30018)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30018,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30016,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29876,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29873 = G__29879;while(true){
if(cljs.core.map_QMARK_.call(null,map29873))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29873)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29873,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29874 = plumbing.fnk.schema.safe_get.call(null,map29873,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29874,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29873,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t29946 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t29946 = (function (component_spec,component_filter_rq_chan,map29873,output_checker29878,owner,input_schema29876,input_checker29877,data,constructor29871,filter_spec,map29874,output_schema29875,G__29879,validate__6034__auto__,id,ufv__,meta29947){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map29873 = map29873;
this.output_checker29878 = output_checker29878;
this.owner = owner;
this.input_schema29876 = input_schema29876;
this.input_checker29877 = input_checker29877;
this.data = data;
this.constructor29871 = constructor29871;
this.filter_spec = filter_spec;
this.map29874 = map29874;
this.output_schema29875 = output_schema29875;
this.G__29879 = G__29879;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta29947 = meta29947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t29946.cljs$lang$type = true;
clustermap.components.filters.select_filter.t29946.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t29946";
clustermap.components.filters.select_filter.t29946.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t29946");
});})(owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878))
;
clustermap.components.filters.select_filter.t29946.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t29946.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878))
;
clustermap.components.filters.select_filter.t29946.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t29946.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878))
;
clustermap.components.filters.select_filter.t29946.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t29946.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878){
return (function (_){var self__ = this;
var ___$1 = this;var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878){
return (function (state_29986){var state_val_29987 = (state_29986[(1)]);if((state_val_29987 === (7)))
{var inst_29977 = (state_29986[(2)]);var state_29986__$1 = state_29986;if(cljs.core.truth_(inst_29977))
{var statearr_29988_30019 = state_29986__$1;(statearr_29988_30019[(1)] = (11));
} else
{var statearr_29989_30020 = state_29986__$1;(statearr_29989_30020[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (1)))
{var state_29986__$1 = state_29986;var statearr_29990_30021 = state_29986__$1;(statearr_29990_30021[(2)] = null);
(statearr_29990_30021[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (4)))
{var inst_29951 = (state_29986[(7)]);var inst_29951__$1 = (state_29986[(2)]);var state_29986__$1 = (function (){var statearr_29991 = state_29986;(statearr_29991[(7)] = inst_29951__$1);
return statearr_29991;
})();if(cljs.core.truth_(inst_29951__$1))
{var statearr_29992_30022 = state_29986__$1;(statearr_29992_30022[(1)] = (5));
} else
{var statearr_29993_30023 = state_29986__$1;(statearr_29993_30023[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (13)))
{var inst_29982 = (state_29986[(2)]);var state_29986__$1 = state_29986;var statearr_29994_30024 = state_29986__$1;(statearr_29994_30024[(2)] = inst_29982);
(statearr_29994_30024[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (6)))
{var state_29986__$1 = state_29986;var statearr_29995_30025 = state_29986__$1;(statearr_29995_30025[(2)] = null);
(statearr_29995_30025[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (3)))
{var inst_29984 = (state_29986[(2)]);var state_29986__$1 = state_29986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29986__$1,inst_29984);
} else
{if((state_val_29987 === (12)))
{var state_29986__$1 = state_29986;var statearr_29996_30026 = state_29986__$1;(statearr_29996_30026[(2)] = null);
(statearr_29996_30026[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (2)))
{var state_29986__$1 = state_29986;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29986__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29987 === (11)))
{var state_29986__$1 = state_29986;var statearr_29997_30027 = state_29986__$1;(statearr_29997_30027[(2)] = null);
(statearr_29997_30027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (9)))
{var inst_29957 = (state_29986[(8)]);var state_29986__$1 = state_29986;var statearr_29998_30028 = state_29986__$1;(statearr_29998_30028[(2)] = inst_29957);
(statearr_29998_30028[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (5)))
{var inst_29951 = (state_29986[(7)]);var inst_29957 = (state_29986[(8)]);var inst_29954 = cljs.core.nth.call(null,inst_29951,(0),null);var inst_29955 = cljs.core.nth.call(null,inst_29951,(1),null);var inst_29957__$1 = om.core.get_props.call(null,self__.owner);var inst_29958 = cljs.core.seq_QMARK_.call(null,inst_29957__$1);var state_29986__$1 = (function (){var statearr_29999 = state_29986;(statearr_29999[(9)] = inst_29955);
(statearr_29999[(10)] = inst_29954);
(statearr_29999[(8)] = inst_29957__$1);
return statearr_29999;
})();if(inst_29958)
{var statearr_30000_30029 = state_29986__$1;(statearr_30000_30029[(1)] = (8));
} else
{var statearr_30001_30030 = state_29986__$1;(statearr_30001_30030[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (10)))
{var inst_29955 = (state_29986[(9)]);var inst_29963 = (state_29986[(2)]);var inst_29964 = cljs.core.get.call(null,inst_29963,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29965 = cljs.core.get.call(null,inst_29963,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29966 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29967 = ["SELECT-FILTER-RQ",self__.id,inst_29955];var inst_29968 = (new cljs.core.PersistentVector(null,3,(5),inst_29966,inst_29967,null));var inst_29969 = cljs.core.clj__GT_js.call(null,inst_29968);var inst_29970 = console.log(inst_29969);var inst_29971 = cljs.core.deref.call(null,inst_29964);var inst_29972 = cljs.core.deref.call(null,inst_29965);var inst_29973 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_29971,inst_29972,inst_29955);var inst_29974 = om.core.update_BANG_.call(null,inst_29964,inst_29973);var state_29986__$1 = (function (){var statearr_30002 = state_29986;(statearr_30002[(11)] = inst_29970);
(statearr_30002[(12)] = inst_29974);
return statearr_30002;
})();var statearr_30003_30031 = state_29986__$1;(statearr_30003_30031[(2)] = true);
(statearr_30003_30031[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29987 === (8)))
{var inst_29957 = (state_29986[(8)]);var inst_29960 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29957);var state_29986__$1 = state_29986;var statearr_30004_30032 = state_29986__$1;(statearr_30004_30032[(2)] = inst_29960);
(statearr_30004_30032[(1)] = (10));
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
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878))
;return ((function (switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_30008 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30008[(0)] = state_machine__11242__auto__);
(statearr_30008[(1)] = (1));
return statearr_30008;
});
var state_machine__11242__auto____1 = (function (state_29986){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_29986);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e30009){if((e30009 instanceof Object))
{var ex__11245__auto__ = e30009;var statearr_30010_30033 = state_29986;(statearr_30010_30033[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29986);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30009;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30034 = state_29986;
state_29986 = G__30034;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_29986){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_29986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878))
})();var state__11299__auto__ = (function (){var statearr_30011 = f__11298__auto__.call(null);(statearr_30011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_30011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878))
);
return c__11297__auto__;
});})(owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878))
;
clustermap.components.filters.select_filter.t29946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878){
return (function (_29948){var self__ = this;
var _29948__$1 = this;return self__.meta29947;
});})(owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878))
;
clustermap.components.filters.select_filter.t29946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878){
return (function (_29948,meta29947__$1){var self__ = this;
var _29948__$1 = this;return (new clustermap.components.filters.select_filter.t29946(self__.component_spec,self__.component_filter_rq_chan,self__.map29873,self__.output_checker29878,self__.owner,self__.input_schema29876,self__.input_checker29877,self__.data,self__.constructor29871,self__.filter_spec,self__.map29874,self__.output_schema29875,self__.G__29879,self__.validate__6034__auto__,self__.id,self__.ufv__,meta29947__$1));
});})(owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878))
;
clustermap.components.filters.select_filter.__GT_t29946 = ((function (owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878){
return (function __GT_t29946(component_spec__$1,component_filter_rq_chan__$1,map29873__$1,output_checker29878__$1,owner__$1,input_schema29876__$1,input_checker29877__$1,data__$1,constructor29871__$1,filter_spec__$1,map29874__$1,output_schema29875__$1,G__29879__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29947){return (new clustermap.components.filters.select_filter.t29946(component_spec__$1,component_filter_rq_chan__$1,map29873__$1,output_checker29878__$1,owner__$1,input_schema29876__$1,input_checker29877__$1,data__$1,constructor29871__$1,filter_spec__$1,map29874__$1,output_schema29875__$1,G__29879__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29947));
});})(owner,component_filter_rq_chan,map29874,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878))
;
}
return (new clustermap.components.filters.select_filter.t29946(component_spec,component_filter_rq_chan,map29873,output_checker29878,owner,input_schema29876,input_checker29877,data,constructor29871,filter_spec,map29874,output_schema29875,G__29879,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30035 = output_checker29878.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30035))
{var error__6036__auto___30036 = temp__4126__auto___30035;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29871","constructor29871",-1616376178,null),cljs.core.pr_str.call(null,error__6036__auto___30036)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30036,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29875,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29875,input_schema29876,input_checker29877,output_checker29878))
,schema.core.make_fn_schema.call(null,output_schema29875,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29876], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___30015){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner29870,p__30012){var vec__30014 = p__30012;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30014,(0),null);return component_fnk__7881__auto___30015.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29870,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner29870,var_args){
var p__30012 = null;if (arguments.length > 2) {
  p__30012 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner29870,p__30012);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__30037){
var data__7882__auto__ = cljs.core.first(arglist__30037);
arglist__30037 = cljs.core.next(arglist__30037);
var owner29870 = cljs.core.first(arglist__30037);
var p__30012 = cljs.core.rest(arglist__30037);
return select_filter_component__delegate(data__7882__auto__,owner29870,p__30012);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___30015))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m29872){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m29872);
});
__GT_select_filter_component = function(cursor__7850__auto__,m29872){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m29872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
