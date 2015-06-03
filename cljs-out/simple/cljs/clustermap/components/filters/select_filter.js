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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29749(s__29750){return (new cljs.core.LazySeq(null,(function (){var s__29750__$1 = s__29750;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29750__$1);if(temp__4126__auto__)
{var s__29750__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29750__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29750__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29752 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29751 = (0);while(true){
if((i__29751 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29751);cljs.core.chunk_append.call(null,b__29752,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29753 = (i__29751 + (1));
i__29751 = G__29753;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29752),iter__29749.call(null,cljs.core.chunk_rest.call(null,s__29750__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29752),null);
}
} else
{var o = cljs.core.first.call(null,s__29750__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29749.call(null,cljs.core.rest.call(null,s__29750__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29757 = schema.core.Any;var input_schema29758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29754","map29754",-247096425,null))], null);var input_checker29759 = schema.core.checker.call(null,input_schema29758);var output_checker29760 = schema.core.checker.call(null,output_schema29757);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function get_option_value(G__29761){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29761], null);var temp__4126__auto___29763 = input_checker29759.call(null,args__6035__auto___29762);if(cljs.core.truth_(temp__4126__auto___29763))
{var error__6036__auto___29764 = temp__4126__auto___29763;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___29764)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29764,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29762,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29758,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29754 = G__29761;while(true){
if(cljs.core.map_QMARK_.call(null,map29754))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29754)));
}
var map29756 = plumbing.fnk.schema.safe_get.call(null,map29754,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map29756,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map29756,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map29756,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29755 = plumbing.fnk.schema.safe_get.call(null,map29754,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map29755,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map29755,options,label,id,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map29755,options,label,id,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29765 = output_checker29760.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29765))
{var error__6036__auto___29766 = temp__4126__auto___29765;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___29766)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29766,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29757,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
,schema.core.make_fn_schema.call(null,output_schema29757,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29758], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__29768,value){var map__29770 = p__29768;var map__29770__$1 = ((cljs.core.seq_QMARK_.call(null,map__29770))?cljs.core.apply.call(null,cljs.core.hash_map,map__29770):map__29770);var component_spec = map__29770__$1;var options = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__29770,map__29770__$1,component_spec,options,label){
return (function (p1__29767_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29767_SHARP_));
});})(map__29770,map__29770__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29771,value){var map__29773 = p__29771;var map__29773__$1 = ((cljs.core.seq_QMARK_.call(null,map__29773))?cljs.core.apply.call(null,cljs.core.hash_map,map__29773):map__29773);var component_spec = map__29773__$1;var options = cljs.core.get.call(null,map__29773__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29773__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29774_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29774_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__29775_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29775_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29776 = schema.core.Any;var input_schema29777 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29778 = schema.core.checker.call(null,input_schema29777);var output_checker29779 = schema.core.checker.call(null,output_schema29776);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29776,input_schema29777,input_checker29778,output_checker29779){
return (function render_STAR_(G__29780){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29797 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29780], null);var temp__4126__auto___29798 = input_checker29778.call(null,args__6035__auto___29797);if(cljs.core.truth_(temp__4126__auto___29798))
{var error__6036__auto___29799 = temp__4126__auto___29798;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29799)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29799,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29797,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29777,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29780;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29776,input_schema29777,input_checker29778,output_checker29779){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29776,input_schema29777,input_checker29778,output_checker29779))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29776,input_schema29777,input_checker29778,output_checker29779){
return (function iter__29789(s__29790){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29776,input_schema29777,input_checker29778,output_checker29779){
return (function (){var s__29790__$1 = s__29790;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29790__$1);if(temp__4126__auto__)
{var s__29790__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29790__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29790__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29792 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29791 = (0);while(true){
if((i__29791 < size__4376__auto__))
{var map__29795 = cljs.core._nth.call(null,c__4375__auto__,i__29791);var map__29795__$1 = ((cljs.core.seq_QMARK_.call(null,map__29795))?cljs.core.apply.call(null,cljs.core.hash_map,map__29795):map__29795);var option = map__29795__$1;var label__$1 = cljs.core.get.call(null,map__29795__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29795__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29792,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29800 = (i__29791 + (1));
i__29791 = G__29800;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29792),iter__29789.call(null,cljs.core.chunk_rest.call(null,s__29790__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29792),null);
}
} else
{var map__29796 = cljs.core.first.call(null,s__29790__$2);var map__29796__$1 = ((cljs.core.seq_QMARK_.call(null,map__29796))?cljs.core.apply.call(null,cljs.core.hash_map,map__29796):map__29796);var option = map__29796__$1;var label__$1 = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29796__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29789.call(null,cljs.core.rest.call(null,s__29790__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29776,input_schema29777,input_checker29778,output_checker29779))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29776,input_schema29777,input_checker29778,output_checker29779))
;return iter__4377__auto__.call(null,options__$1);
})()))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29801 = output_checker29779.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29801))
{var error__6036__auto___29802 = temp__4126__auto___29801;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29802)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29802,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29776,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29776,input_schema29777,input_checker29778,output_checker29779))
,schema.core.make_fn_schema.call(null,output_schema29776,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29777], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29948 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29808 = schema.core.Any;var input_schema29809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29806","map29806",-937275570,null))], null);var input_checker29810 = schema.core.checker.call(null,input_schema29809);var output_checker29811 = schema.core.checker.call(null,output_schema29808);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811){
return (function constructor29804(G__29812){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29812], null);var temp__4126__auto___29950 = input_checker29810.call(null,args__6035__auto___29949);if(cljs.core.truth_(temp__4126__auto___29950))
{var error__6036__auto___29951 = temp__4126__auto___29950;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29804","constructor29804",-61807544,null),cljs.core.pr_str.call(null,error__6036__auto___29951)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29951,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29949,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29809,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29806 = G__29812;while(true){
if(cljs.core.map_QMARK_.call(null,map29806))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29806)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29806,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29807 = plumbing.fnk.schema.safe_get.call(null,map29806,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29807,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29806,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t29879 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t29879 = (function (component_spec,component_filter_rq_chan,input_schema29809,owner,map29807,data,input_checker29810,constructor29804,output_checker29811,output_schema29808,map29806,filter_spec,G__29812,validate__6034__auto__,id,ufv__,meta29880){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema29809 = input_schema29809;
this.owner = owner;
this.map29807 = map29807;
this.data = data;
this.input_checker29810 = input_checker29810;
this.constructor29804 = constructor29804;
this.output_checker29811 = output_checker29811;
this.output_schema29808 = output_schema29808;
this.map29806 = map29806;
this.filter_spec = filter_spec;
this.G__29812 = G__29812;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta29880 = meta29880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t29879.cljs$lang$type = true;
clustermap.components.filters.select_filter.t29879.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t29879";
clustermap.components.filters.select_filter.t29879.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t29879");
});})(owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811))
;
clustermap.components.filters.select_filter.t29879.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t29879.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811))
;
clustermap.components.filters.select_filter.t29879.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t29879.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811))
;
clustermap.components.filters.select_filter.t29879.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t29879.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811){
return (function (_){var self__ = this;
var ___$1 = this;var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811){
return (function (state_29919){var state_val_29920 = (state_29919[(1)]);if((state_val_29920 === (7)))
{var inst_29910 = (state_29919[(2)]);var state_29919__$1 = state_29919;if(cljs.core.truth_(inst_29910))
{var statearr_29921_29952 = state_29919__$1;(statearr_29921_29952[(1)] = (11));
} else
{var statearr_29922_29953 = state_29919__$1;(statearr_29922_29953[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29920 === (1)))
{var state_29919__$1 = state_29919;var statearr_29923_29954 = state_29919__$1;(statearr_29923_29954[(2)] = null);
(statearr_29923_29954[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29920 === (4)))
{var inst_29884 = (state_29919[(7)]);var inst_29884__$1 = (state_29919[(2)]);var state_29919__$1 = (function (){var statearr_29924 = state_29919;(statearr_29924[(7)] = inst_29884__$1);
return statearr_29924;
})();if(cljs.core.truth_(inst_29884__$1))
{var statearr_29925_29955 = state_29919__$1;(statearr_29925_29955[(1)] = (5));
} else
{var statearr_29926_29956 = state_29919__$1;(statearr_29926_29956[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29920 === (13)))
{var inst_29915 = (state_29919[(2)]);var state_29919__$1 = state_29919;var statearr_29927_29957 = state_29919__$1;(statearr_29927_29957[(2)] = inst_29915);
(statearr_29927_29957[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29920 === (6)))
{var state_29919__$1 = state_29919;var statearr_29928_29958 = state_29919__$1;(statearr_29928_29958[(2)] = null);
(statearr_29928_29958[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29920 === (3)))
{var inst_29917 = (state_29919[(2)]);var state_29919__$1 = state_29919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29919__$1,inst_29917);
} else
{if((state_val_29920 === (12)))
{var state_29919__$1 = state_29919;var statearr_29929_29959 = state_29919__$1;(statearr_29929_29959[(2)] = null);
(statearr_29929_29959[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29920 === (2)))
{var state_29919__$1 = state_29919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29919__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29920 === (11)))
{var state_29919__$1 = state_29919;var statearr_29930_29960 = state_29919__$1;(statearr_29930_29960[(2)] = null);
(statearr_29930_29960[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29920 === (9)))
{var inst_29890 = (state_29919[(8)]);var state_29919__$1 = state_29919;var statearr_29931_29961 = state_29919__$1;(statearr_29931_29961[(2)] = inst_29890);
(statearr_29931_29961[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29920 === (5)))
{var inst_29884 = (state_29919[(7)]);var inst_29890 = (state_29919[(8)]);var inst_29887 = cljs.core.nth.call(null,inst_29884,(0),null);var inst_29888 = cljs.core.nth.call(null,inst_29884,(1),null);var inst_29890__$1 = om.core.get_props.call(null,self__.owner);var inst_29891 = cljs.core.seq_QMARK_.call(null,inst_29890__$1);var state_29919__$1 = (function (){var statearr_29932 = state_29919;(statearr_29932[(9)] = inst_29888);
(statearr_29932[(10)] = inst_29887);
(statearr_29932[(8)] = inst_29890__$1);
return statearr_29932;
})();if(inst_29891)
{var statearr_29933_29962 = state_29919__$1;(statearr_29933_29962[(1)] = (8));
} else
{var statearr_29934_29963 = state_29919__$1;(statearr_29934_29963[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29920 === (10)))
{var inst_29888 = (state_29919[(9)]);var inst_29896 = (state_29919[(2)]);var inst_29897 = cljs.core.get.call(null,inst_29896,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29898 = cljs.core.get.call(null,inst_29896,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29899 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29900 = ["SELECT-FILTER-RQ",self__.id,inst_29888];var inst_29901 = (new cljs.core.PersistentVector(null,3,(5),inst_29899,inst_29900,null));var inst_29902 = cljs.core.clj__GT_js.call(null,inst_29901);var inst_29903 = console.log(inst_29902);var inst_29904 = cljs.core.deref.call(null,inst_29897);var inst_29905 = cljs.core.deref.call(null,inst_29898);var inst_29906 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_29904,inst_29905,inst_29888);var inst_29907 = om.core.update_BANG_.call(null,inst_29897,inst_29906);var state_29919__$1 = (function (){var statearr_29935 = state_29919;(statearr_29935[(11)] = inst_29903);
(statearr_29935[(12)] = inst_29907);
return statearr_29935;
})();var statearr_29936_29964 = state_29919__$1;(statearr_29936_29964[(2)] = true);
(statearr_29936_29964[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29920 === (8)))
{var inst_29890 = (state_29919[(8)]);var inst_29893 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29890);var state_29919__$1 = state_29919;var statearr_29937_29965 = state_29919__$1;(statearr_29937_29965[(2)] = inst_29893);
(statearr_29937_29965[(1)] = (10));
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
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811))
;return ((function (switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_29941 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29941[(0)] = state_machine__11242__auto__);
(statearr_29941[(1)] = (1));
return statearr_29941;
});
var state_machine__11242__auto____1 = (function (state_29919){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_29919);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e29942){if((e29942 instanceof Object))
{var ex__11245__auto__ = e29942;var statearr_29943_29966 = state_29919;(statearr_29943_29966[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29919);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29942;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29967 = state_29919;
state_29919 = G__29967;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_29919){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_29919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811))
})();var state__11299__auto__ = (function (){var statearr_29944 = f__11298__auto__.call(null);(statearr_29944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_29944;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811))
);
return c__11297__auto__;
});})(owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811))
;
clustermap.components.filters.select_filter.t29879.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811){
return (function (_29881){var self__ = this;
var _29881__$1 = this;return self__.meta29880;
});})(owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811))
;
clustermap.components.filters.select_filter.t29879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811){
return (function (_29881,meta29880__$1){var self__ = this;
var _29881__$1 = this;return (new clustermap.components.filters.select_filter.t29879(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema29809,self__.owner,self__.map29807,self__.data,self__.input_checker29810,self__.constructor29804,self__.output_checker29811,self__.output_schema29808,self__.map29806,self__.filter_spec,self__.G__29812,self__.validate__6034__auto__,self__.id,self__.ufv__,meta29880__$1));
});})(owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811))
;
clustermap.components.filters.select_filter.__GT_t29879 = ((function (owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811){
return (function __GT_t29879(component_spec__$1,component_filter_rq_chan__$1,input_schema29809__$1,owner__$1,map29807__$1,data__$1,input_checker29810__$1,constructor29804__$1,output_checker29811__$1,output_schema29808__$1,map29806__$1,filter_spec__$1,G__29812__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29880){return (new clustermap.components.filters.select_filter.t29879(component_spec__$1,component_filter_rq_chan__$1,input_schema29809__$1,owner__$1,map29807__$1,data__$1,input_checker29810__$1,constructor29804__$1,output_checker29811__$1,output_schema29808__$1,map29806__$1,filter_spec__$1,G__29812__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29880));
});})(owner,component_filter_rq_chan,map29807,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811))
;
}
return (new clustermap.components.filters.select_filter.t29879(component_spec,component_filter_rq_chan,input_schema29809,owner,map29807,data,input_checker29810,constructor29804,output_checker29811,output_schema29808,map29806,filter_spec,G__29812,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29968 = output_checker29811.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29968))
{var error__6036__auto___29969 = temp__4126__auto___29968;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29804","constructor29804",-61807544,null),cljs.core.pr_str.call(null,error__6036__auto___29969)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29969,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29808,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29808,input_schema29809,input_checker29810,output_checker29811))
,schema.core.make_fn_schema.call(null,output_schema29808,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29809], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___29948){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner29803,p__29945){var vec__29947 = p__29945;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29947,(0),null);return component_fnk__7881__auto___29948.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29803,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner29803,var_args){
var p__29945 = null;if (arguments.length > 2) {
  p__29945 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner29803,p__29945);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__29970){
var data__7882__auto__ = cljs.core.first(arglist__29970);
arglist__29970 = cljs.core.next(arglist__29970);
var owner29803 = cljs.core.first(arglist__29970);
var p__29945 = cljs.core.rest(arglist__29970);
return select_filter_component__delegate(data__7882__auto__,owner29803,p__29945);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___29948))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m29805){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m29805);
});
__GT_select_filter_component = function(cursor__7850__auto__,m29805){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m29805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
