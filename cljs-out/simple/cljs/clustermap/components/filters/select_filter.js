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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4377__auto__ = (function iter__29747(s__29748){return (new cljs.core.LazySeq(null,(function (){var s__29748__$1 = s__29748;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29748__$1);if(temp__4126__auto__)
{var s__29748__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29748__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29748__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29750 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29749 = (0);while(true){
if((i__29749 < size__4376__auto__))
{var o = cljs.core._nth.call(null,c__4375__auto__,i__29749);cljs.core.chunk_append.call(null,b__29750,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29751 = (i__29749 + (1));
i__29749 = G__29751;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29750),iter__29747.call(null,cljs.core.chunk_rest.call(null,s__29748__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29750),null);
}
} else
{var o = cljs.core.first.call(null,s__29748__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29747.call(null,cljs.core.rest.call(null,s__29748__$2)));
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
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29755 = schema.core.Any;var input_schema29756 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29752","map29752",-260977403,null))], null);var input_checker29757 = schema.core.checker.call(null,input_schema29756);var output_checker29758 = schema.core.checker.call(null,output_schema29755);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29755,input_schema29756,input_checker29757,output_checker29758){
return (function get_option_value(G__29759){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29759], null);var temp__4126__auto___29761 = input_checker29757.call(null,args__6035__auto___29760);if(cljs.core.truth_(temp__4126__auto___29761))
{var error__6036__auto___29762 = temp__4126__auto___29761;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___29762)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29762,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29760,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29756,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29752 = G__29759;while(true){
if(cljs.core.map_QMARK_.call(null,map29752))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29752)));
}
var map29754 = plumbing.fnk.schema.safe_get.call(null,map29752,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map29754,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map29754,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map29754,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29753 = plumbing.fnk.schema.safe_get.call(null,map29752,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map29753,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__3639__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map29753,options,label,id,map29754,validate__6034__auto__,ufv__,output_schema29755,input_schema29756,input_checker29757,output_checker29758){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map29753,options,label,id,map29754,validate__6034__auto__,ufv__,output_schema29755,input_schema29756,input_checker29757,output_checker29758))
,options));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29763 = output_checker29758.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29763))
{var error__6036__auto___29764 = temp__4126__auto___29763;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__6036__auto___29764)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29764,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29755,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29755,input_schema29756,input_checker29757,output_checker29758))
,schema.core.make_fn_schema.call(null,output_schema29755,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29756], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__29766,value){var map__29768 = p__29766;var map__29768__$1 = ((cljs.core.seq_QMARK_.call(null,map__29768))?cljs.core.apply.call(null,cljs.core.hash_map,map__29768):map__29768);var component_spec = map__29768__$1;var options = cljs.core.get.call(null,map__29768__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29768__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__29768,map__29768__$1,component_spec,options,label){
return (function (p1__29765_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29765_SHARP_));
});})(map__29768,map__29768__$1,component_spec,options,label))
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
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29769,value){var map__29771 = p__29769;var map__29771__$1 = ((cljs.core.seq_QMARK_.call(null,map__29771))?cljs.core.apply.call(null,cljs.core.hash_map,map__29771):map__29771);var component_spec = map__29771__$1;var options = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29772_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29772_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__29773_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29773_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29774 = schema.core.Any;var input_schema29775 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29776 = schema.core.checker.call(null,input_schema29775);var output_checker29777 = schema.core.checker.call(null,output_schema29774);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29774,input_schema29775,input_checker29776,output_checker29777){
return (function render_STAR_(G__29778){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29778], null);var temp__4126__auto___29796 = input_checker29776.call(null,args__6035__auto___29795);if(cljs.core.truth_(temp__4126__auto___29796))
{var error__6036__auto___29797 = temp__4126__auto___29796;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29797)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29797,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29795,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29775,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29778;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29774,input_schema29775,input_checker29776,output_checker29777){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29774,input_schema29775,input_checker29776,output_checker29777))
},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29774,input_schema29775,input_checker29776,output_checker29777){
return (function iter__29787(s__29788){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29774,input_schema29775,input_checker29776,output_checker29777){
return (function (){var s__29788__$1 = s__29788;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29788__$1);if(temp__4126__auto__)
{var s__29788__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29788__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29788__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29790 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29789 = (0);while(true){
if((i__29789 < size__4376__auto__))
{var map__29793 = cljs.core._nth.call(null,c__4375__auto__,i__29789);var map__29793__$1 = ((cljs.core.seq_QMARK_.call(null,map__29793))?cljs.core.apply.call(null,cljs.core.hash_map,map__29793):map__29793);var option = map__29793__$1;var label__$1 = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29790,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29798 = (i__29789 + (1));
i__29789 = G__29798;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29790),iter__29787.call(null,cljs.core.chunk_rest.call(null,s__29788__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29790),null);
}
} else
{var map__29794 = cljs.core.first.call(null,s__29788__$2);var map__29794__$1 = ((cljs.core.seq_QMARK_.call(null,map__29794))?cljs.core.apply.call(null,cljs.core.hash_map,map__29794):map__29794);var option = map__29794__$1;var label__$1 = cljs.core.get.call(null,map__29794__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29794__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29787.call(null,cljs.core.rest.call(null,s__29788__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29774,input_schema29775,input_checker29776,output_checker29777))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29774,input_schema29775,input_checker29776,output_checker29777))
;return iter__4377__auto__.call(null,options__$1);
})()))));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29799 = output_checker29777.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29799))
{var error__6036__auto___29800 = temp__4126__auto___29799;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29800)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29800,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29774,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29774,input_schema29775,input_checker29776,output_checker29777))
,schema.core.make_fn_schema.call(null,output_schema29774,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29775], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__7881__auto___29946 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29806 = schema.core.Any;var input_schema29807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29804","map29804",-1886860561,null))], null);var input_checker29808 = schema.core.checker.call(null,input_schema29807);var output_checker29809 = schema.core.checker.call(null,output_schema29806);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809){
return (function constructor29802(G__29810){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29810], null);var temp__4126__auto___29948 = input_checker29808.call(null,args__6035__auto___29947);if(cljs.core.truth_(temp__4126__auto___29948))
{var error__6036__auto___29949 = temp__4126__auto___29948;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29802","constructor29802",-293920644,null),cljs.core.pr_str.call(null,error__6036__auto___29949)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29949,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29947,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29807,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29804 = G__29810;while(true){
if(cljs.core.map_QMARK_.call(null,map29804))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29804)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29804,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29805 = plumbing.fnk.schema.safe_get.call(null,map29804,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29805,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29804,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t29877 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t29877 = (function (input_checker29808,component_spec,component_filter_rq_chan,owner,output_schema29806,data,input_schema29807,G__29810,filter_spec,map29804,output_checker29809,map29805,validate__6034__auto__,id,constructor29802,ufv__,meta29878){
this.input_checker29808 = input_checker29808;
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.output_schema29806 = output_schema29806;
this.data = data;
this.input_schema29807 = input_schema29807;
this.G__29810 = G__29810;
this.filter_spec = filter_spec;
this.map29804 = map29804;
this.output_checker29809 = output_checker29809;
this.map29805 = map29805;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.constructor29802 = constructor29802;
this.ufv__ = ufv__;
this.meta29878 = meta29878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t29877.cljs$lang$type = true;
clustermap.components.filters.select_filter.t29877.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t29877";
clustermap.components.filters.select_filter.t29877.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.select-filter/t29877");
});})(owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809))
;
clustermap.components.filters.select_filter.t29877.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t29877.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809))
;
clustermap.components.filters.select_filter.t29877.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t29877.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809))
;
clustermap.components.filters.select_filter.t29877.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t29877.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809){
return (function (state_29917){var state_val_29918 = (state_29917[(1)]);if((state_val_29918 === (7)))
{var inst_29908 = (state_29917[(2)]);var state_29917__$1 = state_29917;if(cljs.core.truth_(inst_29908))
{var statearr_29919_29950 = state_29917__$1;(statearr_29919_29950[(1)] = (11));
} else
{var statearr_29920_29951 = state_29917__$1;(statearr_29920_29951[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (1)))
{var state_29917__$1 = state_29917;var statearr_29921_29952 = state_29917__$1;(statearr_29921_29952[(2)] = null);
(statearr_29921_29952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (4)))
{var inst_29882 = (state_29917[(7)]);var inst_29882__$1 = (state_29917[(2)]);var state_29917__$1 = (function (){var statearr_29922 = state_29917;(statearr_29922[(7)] = inst_29882__$1);
return statearr_29922;
})();if(cljs.core.truth_(inst_29882__$1))
{var statearr_29923_29953 = state_29917__$1;(statearr_29923_29953[(1)] = (5));
} else
{var statearr_29924_29954 = state_29917__$1;(statearr_29924_29954[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (13)))
{var inst_29913 = (state_29917[(2)]);var state_29917__$1 = state_29917;var statearr_29925_29955 = state_29917__$1;(statearr_29925_29955[(2)] = inst_29913);
(statearr_29925_29955[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (6)))
{var state_29917__$1 = state_29917;var statearr_29926_29956 = state_29917__$1;(statearr_29926_29956[(2)] = null);
(statearr_29926_29956[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (3)))
{var inst_29915 = (state_29917[(2)]);var state_29917__$1 = state_29917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29917__$1,inst_29915);
} else
{if((state_val_29918 === (12)))
{var state_29917__$1 = state_29917;var statearr_29927_29957 = state_29917__$1;(statearr_29927_29957[(2)] = null);
(statearr_29927_29957[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (2)))
{var state_29917__$1 = state_29917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29917__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29918 === (11)))
{var state_29917__$1 = state_29917;var statearr_29928_29958 = state_29917__$1;(statearr_29928_29958[(2)] = null);
(statearr_29928_29958[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (9)))
{var inst_29888 = (state_29917[(8)]);var state_29917__$1 = state_29917;var statearr_29929_29959 = state_29917__$1;(statearr_29929_29959[(2)] = inst_29888);
(statearr_29929_29959[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (5)))
{var inst_29888 = (state_29917[(8)]);var inst_29882 = (state_29917[(7)]);var inst_29885 = cljs.core.nth.call(null,inst_29882,(0),null);var inst_29886 = cljs.core.nth.call(null,inst_29882,(1),null);var inst_29888__$1 = om.core.get_props.call(null,self__.owner);var inst_29889 = cljs.core.seq_QMARK_.call(null,inst_29888__$1);var state_29917__$1 = (function (){var statearr_29930 = state_29917;(statearr_29930[(8)] = inst_29888__$1);
(statearr_29930[(9)] = inst_29885);
(statearr_29930[(10)] = inst_29886);
return statearr_29930;
})();if(inst_29889)
{var statearr_29931_29960 = state_29917__$1;(statearr_29931_29960[(1)] = (8));
} else
{var statearr_29932_29961 = state_29917__$1;(statearr_29932_29961[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (10)))
{var inst_29886 = (state_29917[(10)]);var inst_29894 = (state_29917[(2)]);var inst_29895 = cljs.core.get.call(null,inst_29894,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29896 = cljs.core.get.call(null,inst_29894,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29897 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29898 = ["SELECT-FILTER-RQ",self__.id,inst_29886];var inst_29899 = (new cljs.core.PersistentVector(null,3,(5),inst_29897,inst_29898,null));var inst_29900 = cljs.core.clj__GT_js.call(null,inst_29899);var inst_29901 = console.log(inst_29900);var inst_29902 = cljs.core.deref.call(null,inst_29895);var inst_29903 = cljs.core.deref.call(null,inst_29896);var inst_29904 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_29902,inst_29903,inst_29886);var inst_29905 = om.core.update_BANG_.call(null,inst_29895,inst_29904);var state_29917__$1 = (function (){var statearr_29933 = state_29917;(statearr_29933[(11)] = inst_29901);
(statearr_29933[(12)] = inst_29905);
return statearr_29933;
})();var statearr_29934_29962 = state_29917__$1;(statearr_29934_29962[(2)] = true);
(statearr_29934_29962[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29918 === (8)))
{var inst_29888 = (state_29917[(8)]);var inst_29891 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29888);var state_29917__$1 = state_29917;var statearr_29935_29963 = state_29917__$1;(statearr_29935_29963[(2)] = inst_29891);
(statearr_29935_29963[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29939 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29939[(0)] = state_machine__11462__auto__);
(statearr_29939[(1)] = (1));
return statearr_29939;
});
var state_machine__11462__auto____1 = (function (state_29917){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29917);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29940){if((e29940 instanceof Object))
{var ex__11465__auto__ = e29940;var statearr_29941_29964 = state_29917;(statearr_29941_29964[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29940;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29965 = state_29917;
state_29917 = G__29965;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29917){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809))
})();var state__11519__auto__ = (function (){var statearr_29942 = f__11518__auto__.call(null);(statearr_29942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809))
;
clustermap.components.filters.select_filter.t29877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809){
return (function (_29879){var self__ = this;
var _29879__$1 = this;return self__.meta29878;
});})(owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809))
;
clustermap.components.filters.select_filter.t29877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809){
return (function (_29879,meta29878__$1){var self__ = this;
var _29879__$1 = this;return (new clustermap.components.filters.select_filter.t29877(self__.input_checker29808,self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.output_schema29806,self__.data,self__.input_schema29807,self__.G__29810,self__.filter_spec,self__.map29804,self__.output_checker29809,self__.map29805,self__.validate__6034__auto__,self__.id,self__.constructor29802,self__.ufv__,meta29878__$1));
});})(owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809))
;
clustermap.components.filters.select_filter.__GT_t29877 = ((function (owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809){
return (function __GT_t29877(input_checker29808__$1,component_spec__$1,component_filter_rq_chan__$1,owner__$1,output_schema29806__$1,data__$1,input_schema29807__$1,G__29810__$1,filter_spec__$1,map29804__$1,output_checker29809__$1,map29805__$1,validate__6034__auto____$1,id__$1,constructor29802__$1,ufv____$1,meta29878){return (new clustermap.components.filters.select_filter.t29877(input_checker29808__$1,component_spec__$1,component_filter_rq_chan__$1,owner__$1,output_schema29806__$1,data__$1,input_schema29807__$1,G__29810__$1,filter_spec__$1,map29804__$1,output_checker29809__$1,map29805__$1,validate__6034__auto____$1,id__$1,constructor29802__$1,ufv____$1,meta29878));
});})(owner,component_filter_rq_chan,map29805,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809))
;
}
return (new clustermap.components.filters.select_filter.t29877(input_checker29808,component_spec,component_filter_rq_chan,owner,output_schema29806,data,input_schema29807,G__29810,filter_spec,map29804,output_checker29809,map29805,validate__6034__auto__,id,constructor29802,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29966 = output_checker29809.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29966))
{var error__6036__auto___29967 = temp__4126__auto___29966;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29802","constructor29802",-293920644,null),cljs.core.pr_str.call(null,error__6036__auto___29967)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29967,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29806,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29806,input_schema29807,input_checker29808,output_checker29809))
,schema.core.make_fn_schema.call(null,output_schema29806,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29807], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__7881__auto___29946){
return (function() { 
var select_filter_component__delegate = function (data__7882__auto__,owner29801,p__29943){var vec__29945 = p__29943;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29945,(0),null);return component_fnk__7881__auto___29946.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29801,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var select_filter_component = function (data__7882__auto__,owner29801,var_args){
var p__29943 = null;if (arguments.length > 2) {
  p__29943 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__7882__auto__,owner29801,p__29943);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__29968){
var data__7882__auto__ = cljs.core.first(arglist__29968);
arglist__29968 = cljs.core.next(arglist__29968);
var owner29801 = cljs.core.first(arglist__29968);
var p__29943 = cljs.core.rest(arglist__29968);
return select_filter_component__delegate(data__7882__auto__,owner29801,p__29943);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__7881__auto___29946))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__7850__auto__,m29803){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__7850__auto__,m29803);
});
__GT_select_filter_component = function(cursor__7850__auto__,m29803){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__7850__auto__,m29803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;
