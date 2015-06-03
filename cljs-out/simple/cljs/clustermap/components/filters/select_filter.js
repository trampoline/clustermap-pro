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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29746(s__29747){return (new cljs.core.LazySeq(null,(function (){var s__29747__$1 = s__29747;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29747__$1);if(temp__4126__auto__)
{var s__29747__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29747__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29747__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29749 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29748 = (0);while(true){
if((i__29748 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29748);cljs.core.chunk_append.call(null,b__29749,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29750 = (i__29748 + (1));
i__29748 = G__29750;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29749),iter__29746.call(null,cljs.core.chunk_rest.call(null,s__29747__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29749),null);
}
} else
{var o = cljs.core.first.call(null,s__29747__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29746.call(null,cljs.core.rest.call(null,s__29747__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29754 = schema.core.Any;var input_schema29755 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29751","map29751",8555071,null))], null);var input_checker29756 = schema.core.checker.call(null,input_schema29755);var output_checker29757 = schema.core.checker.call(null,output_schema29754);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29754,input_schema29755,input_checker29756,output_checker29757){
return (function get_option_value(G__29758){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29758], null);var temp__4126__auto___29760 = input_checker29756.call(null,args__6035__auto___29759);if(cljs.core.truth_(temp__4126__auto___29760))
{var error__6036__auto___29761 = temp__4126__auto___29760;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___29761)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29761,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29759,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29755,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29751 = G__29758;while(true){
if(cljs.core.map_QMARK_.call(null,map29751))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29751)));
}
var map29753 = plumbing.fnk.schema.safe_get.call(null,map29751,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map29753,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map29753,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map29753,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29752 = plumbing.fnk.schema.safe_get.call(null,map29751,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map29752,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map29752,options,label,id,map29753,validate__6034__auto__,ufv__,output_schema29754,input_schema29755,input_checker29756,output_checker29757){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map29752,options,label,id,map29753,validate__6034__auto__,ufv__,output_schema29754,input_schema29755,input_checker29756,output_checker29757))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29762 = output_checker29757.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29762))
{var error__6036__auto___29763 = temp__4126__auto___29762;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___29763)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29763,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29754,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29754,input_schema29755,input_checker29756,output_checker29757))
,schema.core.make_fn_schema.call(null,output_schema29754,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29755], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__29765,value){var map__29767 = p__29765;var map__29767__$1 = ((cljs.core.seq_QMARK_.call(null,map__29767))?cljs.core.apply.call(null,cljs.core.hash_map,map__29767):map__29767);var component_spec = map__29767__$1;var options = cljs.core.get.call(null,map__29767__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29767__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__29767,map__29767__$1,component_spec,options,label){
return (function (p1__29764_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29764_SHARP_));
});})(map__29767,map__29767__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29768,value){var map__29770 = p__29768;var map__29770__$1 = ((cljs.core.seq_QMARK_.call(null,map__29770))?cljs.core.apply.call(null,cljs.core.hash_map,map__29770):map__29770);var component_spec = map__29770__$1;var options = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29770__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29771_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29771_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__29772_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29772_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29773 = schema.core.Any;var input_schema29774 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29775 = schema.core.checker.call(null,input_schema29774);var output_checker29776 = schema.core.checker.call(null,output_schema29773);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29773,input_schema29774,input_checker29775,output_checker29776){
return (function render_STAR_(G__29777){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29794 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29777], null);var temp__4126__auto___29795 = input_checker29775.call(null,args__6035__auto___29794);if(cljs.core.truth_(temp__4126__auto___29795))
{var error__6036__auto___29796 = temp__4126__auto___29795;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29796)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29796,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29794,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29774,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29777;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29773,input_schema29774,input_checker29775,output_checker29776){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29773,input_schema29774,input_checker29775,output_checker29776))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29773,input_schema29774,input_checker29775,output_checker29776){
return (function iter__29786(s__29787){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29773,input_schema29774,input_checker29775,output_checker29776){
return (function (){var s__29787__$1 = s__29787;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29787__$1);if(temp__4126__auto__)
{var s__29787__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29787__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29787__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29789 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29788 = (0);while(true){
if((i__29788 < size__4376__auto__))
{var map__29792 = cljs.core._nth.call(null,c__4375__auto__,i__29788);var map__29792__$1 = ((cljs.core.seq_QMARK_.call(null,map__29792))?cljs.core.apply.call(null,cljs.core.hash_map,map__29792):map__29792);var option = map__29792__$1;var label__$1 = cljs.core.get.call(null,map__29792__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29792__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29789,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29797 = (i__29788 + (1));
i__29788 = G__29797;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29789),iter__29786.call(null,cljs.core.chunk_rest.call(null,s__29787__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29789),null);
}
} else
{var map__29793 = cljs.core.first.call(null,s__29787__$2);var map__29793__$1 = ((cljs.core.seq_QMARK_.call(null,map__29793))?cljs.core.apply.call(null,cljs.core.hash_map,map__29793):map__29793);var option = map__29793__$1;var label__$1 = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29786.call(null,cljs.core.rest.call(null,s__29787__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29773,input_schema29774,input_checker29775,output_checker29776))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29773,input_schema29774,input_checker29775,output_checker29776))
;return iter__4377__auto__.call(null,options__$1);
})()))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29798 = output_checker29776.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29798))
{var error__6036__auto___29799 = temp__4126__auto___29798;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29799)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29799,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29773,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29773,input_schema29774,input_checker29775,output_checker29776))
,schema.core.make_fn_schema.call(null,output_schema29773,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29774], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29945 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29805 = schema.core.Any;var input_schema29806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29803","map29803",-592841865,null))], null);var input_checker29807 = schema.core.checker.call(null,input_schema29806);var output_checker29808 = schema.core.checker.call(null,output_schema29805);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808){
return (function constructor29801(G__29809){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29946 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29809], null);var temp__4126__auto___29947 = input_checker29807.call(null,args__6035__auto___29946);if(cljs.core.truth_(temp__4126__auto___29947))
{var error__6036__auto___29948 = temp__4126__auto___29947;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29801","constructor29801",129818662,null),cljs.core.pr_str.call(null,error__6036__auto___29948)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29948,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29946,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29806,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29803 = G__29809;while(true){
if(cljs.core.map_QMARK_.call(null,map29803))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29803)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29803,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29804 = plumbing.fnk.schema.safe_get.call(null,map29803,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29804,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29803,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t29876 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t29876 = (function (component_spec,component_filter_rq_chan,owner,constructor29801,data,input_checker29807,filter_spec,map29804,input_schema29806,G__29809,output_checker29808,output_schema29805,map29803,validate__6034__auto__,id,ufv__,meta29877){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.constructor29801 = constructor29801;
this.data = data;
this.input_checker29807 = input_checker29807;
this.filter_spec = filter_spec;
this.map29804 = map29804;
this.input_schema29806 = input_schema29806;
this.G__29809 = G__29809;
this.output_checker29808 = output_checker29808;
this.output_schema29805 = output_schema29805;
this.map29803 = map29803;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta29877 = meta29877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t29876.cljs$lang$type = true;
clustermap.components.filters.select_filter.t29876.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t29876";
clustermap.components.filters.select_filter.t29876.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t29876");
});})(owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808))
;
clustermap.components.filters.select_filter.t29876.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t29876.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808))
;
clustermap.components.filters.select_filter.t29876.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t29876.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808))
;
clustermap.components.filters.select_filter.t29876.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t29876.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808){
return (function (state_29916){var state_val_29917 = (state_29916[(1)]);if((state_val_29917 === (7)))
{var inst_29907 = (state_29916[(2)]);var state_29916__$1 = state_29916;if(cljs.core.truth_(inst_29907))
{var statearr_29918_29949 = state_29916__$1;(statearr_29918_29949[(1)] = (11));
} else
{var statearr_29919_29950 = state_29916__$1;(statearr_29919_29950[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (1)))
{var state_29916__$1 = state_29916;var statearr_29920_29951 = state_29916__$1;(statearr_29920_29951[(2)] = null);
(statearr_29920_29951[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (4)))
{var inst_29881 = (state_29916[(7)]);var inst_29881__$1 = (state_29916[(2)]);var state_29916__$1 = (function (){var statearr_29921 = state_29916;(statearr_29921[(7)] = inst_29881__$1);
return statearr_29921;
})();if(cljs.core.truth_(inst_29881__$1))
{var statearr_29922_29952 = state_29916__$1;(statearr_29922_29952[(1)] = (5));
} else
{var statearr_29923_29953 = state_29916__$1;(statearr_29923_29953[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (13)))
{var inst_29912 = (state_29916[(2)]);var state_29916__$1 = state_29916;var statearr_29924_29954 = state_29916__$1;(statearr_29924_29954[(2)] = inst_29912);
(statearr_29924_29954[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (6)))
{var state_29916__$1 = state_29916;var statearr_29925_29955 = state_29916__$1;(statearr_29925_29955[(2)] = null);
(statearr_29925_29955[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (3)))
{var inst_29914 = (state_29916[(2)]);var state_29916__$1 = state_29916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29916__$1,inst_29914);
} else
{if((state_val_29917 === (12)))
{var state_29916__$1 = state_29916;var statearr_29926_29956 = state_29916__$1;(statearr_29926_29956[(2)] = null);
(statearr_29926_29956[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (2)))
{var state_29916__$1 = state_29916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29916__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29917 === (11)))
{var state_29916__$1 = state_29916;var statearr_29927_29957 = state_29916__$1;(statearr_29927_29957[(2)] = null);
(statearr_29927_29957[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (9)))
{var inst_29887 = (state_29916[(8)]);var state_29916__$1 = state_29916;var statearr_29928_29958 = state_29916__$1;(statearr_29928_29958[(2)] = inst_29887);
(statearr_29928_29958[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (5)))
{var inst_29887 = (state_29916[(8)]);var inst_29881 = (state_29916[(7)]);var inst_29884 = cljs.core.nth.call(null,inst_29881,(0),null);var inst_29885 = cljs.core.nth.call(null,inst_29881,(1),null);var inst_29887__$1 = om.core.get_props.call(null,self__.owner);var inst_29888 = cljs.core.seq_QMARK_.call(null,inst_29887__$1);var state_29916__$1 = (function (){var statearr_29929 = state_29916;(statearr_29929[(8)] = inst_29887__$1);
(statearr_29929[(9)] = inst_29884);
(statearr_29929[(10)] = inst_29885);
return statearr_29929;
})();if(inst_29888)
{var statearr_29930_29959 = state_29916__$1;(statearr_29930_29959[(1)] = (8));
} else
{var statearr_29931_29960 = state_29916__$1;(statearr_29931_29960[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (10)))
{var inst_29885 = (state_29916[(10)]);var inst_29893 = (state_29916[(2)]);var inst_29894 = cljs.core.get.call(null,inst_29893,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29895 = cljs.core.get.call(null,inst_29893,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29896 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29897 = ["SELECT-FILTER-RQ",self__.id,inst_29885];var inst_29898 = (new cljs.core.PersistentVector(null,3,(5),inst_29896,inst_29897,null));var inst_29899 = cljs.core.clj__GT_js.call(null,inst_29898);var inst_29900 = console.log(inst_29899);var inst_29901 = cljs.core.deref.call(null,inst_29894);var inst_29902 = cljs.core.deref.call(null,inst_29895);var inst_29903 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_29901,inst_29902,inst_29885);var inst_29904 = om.core.update_BANG_.call(null,inst_29894,inst_29903);var state_29916__$1 = (function (){var statearr_29932 = state_29916;(statearr_29932[(11)] = inst_29904);
(statearr_29932[(12)] = inst_29900);
return statearr_29932;
})();var statearr_29933_29961 = state_29916__$1;(statearr_29933_29961[(2)] = true);
(statearr_29933_29961[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (8)))
{var inst_29887 = (state_29916[(8)]);var inst_29890 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29887);var state_29916__$1 = state_29916;var statearr_29934_29962 = state_29916__$1;(statearr_29934_29962[(2)] = inst_29890);
(statearr_29934_29962[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29938 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29938[(0)] = state_machine__11462__auto__);
(statearr_29938[(1)] = (1));
return statearr_29938;
});
var state_machine__11462__auto____1 = (function (state_29916){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29916);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29939){if((e29939 instanceof Object))
{var ex__11465__auto__ = e29939;var statearr_29940_29963 = state_29916;(statearr_29940_29963[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29916);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29939;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29964 = state_29916;
state_29916 = G__29964;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29916){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808))
})();var state__11519__auto__ = (function (){var statearr_29941 = f__11518__auto__.call(null);(statearr_29941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808))
;
clustermap.components.filters.select_filter.t29876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808){
return (function (_29878){var self__ = this;
var _29878__$1 = this;return self__.meta29877;
});})(owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808))
;
clustermap.components.filters.select_filter.t29876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808){
return (function (_29878,meta29877__$1){var self__ = this;
var _29878__$1 = this;return (new clustermap.components.filters.select_filter.t29876(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.constructor29801,self__.data,self__.input_checker29807,self__.filter_spec,self__.map29804,self__.input_schema29806,self__.G__29809,self__.output_checker29808,self__.output_schema29805,self__.map29803,self__.validate__6034__auto__,self__.id,self__.ufv__,meta29877__$1));
});})(owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808))
;
clustermap.components.filters.select_filter.__GT_t29876 = ((function (owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808){
return (function __GT_t29876(component_spec__$1,component_filter_rq_chan__$1,owner__$1,constructor29801__$1,data__$1,input_checker29807__$1,filter_spec__$1,map29804__$1,input_schema29806__$1,G__29809__$1,output_checker29808__$1,output_schema29805__$1,map29803__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29877){return (new clustermap.components.filters.select_filter.t29876(component_spec__$1,component_filter_rq_chan__$1,owner__$1,constructor29801__$1,data__$1,input_checker29807__$1,filter_spec__$1,map29804__$1,input_schema29806__$1,G__29809__$1,output_checker29808__$1,output_schema29805__$1,map29803__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29877));
});})(owner,component_filter_rq_chan,map29804,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808))
;
}
return (new clustermap.components.filters.select_filter.t29876(component_spec,component_filter_rq_chan,owner,constructor29801,data,input_checker29807,filter_spec,map29804,input_schema29806,G__29809,output_checker29808,output_schema29805,map29803,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29965 = output_checker29808.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29965))
{var error__6036__auto___29966 = temp__4126__auto___29965;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29801","constructor29801",129818662,null),cljs.core.pr_str.call(null,error__6036__auto___29966)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29966,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29805,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29805,input_schema29806,input_checker29807,output_checker29808))
,schema.core.make_fn_schema.call(null,output_schema29805,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29806], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___29945){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner29800,p__29942){var vec__29944 = p__29942;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29944,(0),null);return component_fnk__7881__auto___29945.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29800,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner29800,var_args){
var p__29942 = null;if (arguments.length > 2) {
  p__29942 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner29800,p__29942);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__29967){
var data__7882__auto__ = cljs.core.first(arglist__29967);
arglist__29967 = cljs.core.next(arglist__29967);
var owner29800 = cljs.core.first(arglist__29967);
var p__29942 = cljs.core.rest(arglist__29967);
return select_filter_component__delegate(data__7882__auto__,owner29800,p__29942);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___29945))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m29802){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m29802);
});
__GT_select_filter_component = function(cursor__7850__auto__,m29802){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m29802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
