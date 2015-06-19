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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12290__auto__ = (function iter__29548(s__29549){return (new cljs.core.LazySeq(null,(function (){var s__29549__$1 = s__29549;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29549__$1);if(temp__4126__auto__)
{var s__29549__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29549__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__29549__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__29551 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__29550 = (0);while(true){
if((i__29550 < size__12289__auto__))
{var o = cljs.core._nth.call(null,c__12288__auto__,i__29550);cljs.core.chunk_append.call(null,b__29551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__29552 = (i__29550 + (1));
i__29550 = G__29552;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29551),iter__29548.call(null,cljs.core.chunk_rest.call(null,s__29549__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29551),null);
}
} else
{var o = cljs.core.first.call(null,s__29549__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__29548.call(null,cljs.core.rest.call(null,s__29549__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12290__auto__.call(null,options);
})());
});
/**
* get the selected option-value by comparing the selected filter with the
* option filters
*/
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29556 = schema.core.Any;var input_schema29557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29553","map29553",4424541,null))], null);var input_checker29558 = schema.core.checker.call(null,input_schema29557);var output_checker29559 = schema.core.checker.call(null,output_schema29556);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29556,input_schema29557,input_checker29558,output_checker29559){
return (function get_option_value(G__29560){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___29561 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29560], null);var temp__4126__auto___29562 = input_checker29558.call(null,args__13948__auto___29561);if(cljs.core.truth_(temp__4126__auto___29562))
{var error__13949__auto___29563 = temp__4126__auto___29562;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__13949__auto___29563)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29563,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___29561,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29557,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map29553 = G__29560;while(true){
if(cljs.core.map_QMARK_.call(null,map29553))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29553)));
}
var map29555 = plumbing.fnk.schema.safe_get.call(null,map29553,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map29555,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map29555,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map29555,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29554 = plumbing.fnk.schema.safe_get.call(null,map29553,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map29554,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__11552__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map29554,options,label,id,map29555,validate__13947__auto__,ufv__,output_schema29556,input_schema29557,input_checker29558,output_checker29559){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map29554,options,label,id,map29555,validate__13947__auto__,ufv__,output_schema29556,input_schema29557,input_checker29558,output_checker29559))
,options));if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___29564 = output_checker29559.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___29564))
{var error__13949__auto___29565 = temp__4126__auto___29564;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__13949__auto___29565)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29565,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29556,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema29556,input_schema29557,input_checker29558,output_checker29559))
,schema.core.make_fn_schema.call(null,output_schema29556,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29557], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__29567,value){var map__29569 = p__29567;var map__29569__$1 = ((cljs.core.seq_QMARK_.call(null,map__29569))?cljs.core.apply.call(null,cljs.core.hash_map,map__29569):map__29569);var component_spec = map__29569__$1;var options = cljs.core.get.call(null,map__29569__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__29569__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__29569,map__29569__$1,component_spec,options,label){
return (function (p1__29566_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29566_SHARP_));
});})(map__29569,map__29569__$1,component_spec,options,label))
,options));if(cljs.core.truth_((function (){var and__11540__auto__ = option_spec;if(cljs.core.truth_(and__11540__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911).cljs$core$IFn$_invoke$arity$1(option_spec));
} else
{return and__11540__auto__;
}
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option_spec)));
} else
{return null;
}
});
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__29570,value){var map__29572 = p__29570;var map__29572__$1 = ((cljs.core.seq_QMARK_.call(null,map__29572))?cljs.core.apply.call(null,cljs.core.hash_map,map__29572):map__29572);var component_spec = map__29572__$1;var options = cljs.core.get.call(null,map__29572__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__29572__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__29573_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29573_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__29574_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29574_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29575 = schema.core.Any;var input_schema29576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29577 = schema.core.checker.call(null,input_schema29576);var output_checker29578 = schema.core.checker.call(null,output_schema29575);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function render_STAR_(G__29579){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___29596 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29579], null);var temp__4126__auto___29597 = input_checker29577.call(null,args__13948__auto___29596);if(cljs.core.truth_(temp__4126__auto___29597))
{var error__13949__auto___29598 = temp__4126__auto___29597;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___29598)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29598,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___29596,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29576,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var data = G__29579;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
},cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function iter__29588(s__29589){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function (){var s__29589__$1 = s__29589;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29589__$1);if(temp__4126__auto__)
{var s__29589__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29589__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__29589__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__29591 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__29590 = (0);while(true){
if((i__29590 < size__12289__auto__))
{var map__29594 = cljs.core._nth.call(null,c__12288__auto__,i__29590);var map__29594__$1 = ((cljs.core.seq_QMARK_.call(null,map__29594))?cljs.core.apply.call(null,cljs.core.hash_map,map__29594):map__29594);var option = map__29594__$1;var label__$1 = cljs.core.get.call(null,map__29594__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29594__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__29591,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__29599 = (i__29590 + (1));
i__29590 = G__29599;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29591),iter__29588.call(null,cljs.core.chunk_rest.call(null,s__29589__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29591),null);
}
} else
{var map__29595 = cljs.core.first.call(null,s__29589__$2);var map__29595__$1 = ((cljs.core.seq_QMARK_.call(null,map__29595))?cljs.core.apply.call(null,cljs.core.hash_map,map__29595):map__29595);var option = map__29595__$1;var label__$1 = cljs.core.get.call(null,map__29595__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__29595__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__29588.call(null,cljs.core.rest.call(null,s__29589__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
;return iter__12290__auto__.call(null,options__$1);
})())))));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___29600 = output_checker29578.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___29600))
{var error__13949__auto___29601 = temp__4126__auto___29600;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___29601)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29601,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29575,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
,schema.core.make_fn_schema.call(null,output_schema29575,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29576], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__15794__auto___29747 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29607 = schema.core.Any;var input_schema29608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29605","map29605",-1334364798,null))], null);var input_checker29609 = schema.core.checker.call(null,input_schema29608);var output_checker29610 = schema.core.checker.call(null,output_schema29607);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610){
return (function constructor29603(G__29611){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___29748 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29611], null);var temp__4126__auto___29749 = input_checker29609.call(null,args__13948__auto___29748);if(cljs.core.truth_(temp__4126__auto___29749))
{var error__13949__auto___29750 = temp__4126__auto___29749;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29603","constructor29603",826207313,null),cljs.core.pr_str.call(null,error__13949__auto___29750)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29750,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___29748,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29608,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map29605 = G__29611;while(true){
if(cljs.core.map_QMARK_.call(null,map29605))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29605)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29605,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29606 = plumbing.fnk.schema.safe_get.call(null,map29605,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29606,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29605,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t29678 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t29678 = (function (component_spec,component_filter_rq_chan,map29605,owner,data,output_checker29610,filter_spec,input_schema29608,constructor29603,validate__13947__auto__,G__29611,id,ufv__,input_checker29609,output_schema29607,map29606,meta29679){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map29605 = map29605;
this.owner = owner;
this.data = data;
this.output_checker29610 = output_checker29610;
this.filter_spec = filter_spec;
this.input_schema29608 = input_schema29608;
this.constructor29603 = constructor29603;
this.validate__13947__auto__ = validate__13947__auto__;
this.G__29611 = G__29611;
this.id = id;
this.ufv__ = ufv__;
this.input_checker29609 = input_checker29609;
this.output_schema29607 = output_schema29607;
this.map29606 = map29606;
this.meta29679 = meta29679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t29678.cljs$lang$type = true;
clustermap.components.filters.select_filter.t29678.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t29678";
clustermap.components.filters.select_filter.t29678.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.filters.select-filter/t29678");
});})(owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610))
;
clustermap.components.filters.select_filter.t29678.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t29678.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610))
;
clustermap.components.filters.select_filter.t29678.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t29678.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610))
;
clustermap.components.filters.select_filter.t29678.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t29678.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610){
return (function (_){var self__ = this;
var ___$1 = this;var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610){
return (function (state_29718){var state_val_29719 = (state_29718[(1)]);if((state_val_29719 === (7)))
{var inst_29709 = (state_29718[(2)]);var state_29718__$1 = state_29718;if(cljs.core.truth_(inst_29709))
{var statearr_29720_29751 = state_29718__$1;(statearr_29720_29751[(1)] = (11));
} else
{var statearr_29721_29752 = state_29718__$1;(statearr_29721_29752[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29719 === (1)))
{var state_29718__$1 = state_29718;var statearr_29722_29753 = state_29718__$1;(statearr_29722_29753[(2)] = null);
(statearr_29722_29753[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29719 === (4)))
{var inst_29683 = (state_29718[(7)]);var inst_29683__$1 = (state_29718[(2)]);var state_29718__$1 = (function (){var statearr_29723 = state_29718;(statearr_29723[(7)] = inst_29683__$1);
return statearr_29723;
})();if(cljs.core.truth_(inst_29683__$1))
{var statearr_29724_29754 = state_29718__$1;(statearr_29724_29754[(1)] = (5));
} else
{var statearr_29725_29755 = state_29718__$1;(statearr_29725_29755[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29719 === (13)))
{var inst_29714 = (state_29718[(2)]);var state_29718__$1 = state_29718;var statearr_29726_29756 = state_29718__$1;(statearr_29726_29756[(2)] = inst_29714);
(statearr_29726_29756[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29719 === (6)))
{var state_29718__$1 = state_29718;var statearr_29727_29757 = state_29718__$1;(statearr_29727_29757[(2)] = null);
(statearr_29727_29757[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29719 === (3)))
{var inst_29716 = (state_29718[(2)]);var state_29718__$1 = state_29718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29718__$1,inst_29716);
} else
{if((state_val_29719 === (12)))
{var state_29718__$1 = state_29718;var statearr_29728_29758 = state_29718__$1;(statearr_29728_29758[(2)] = null);
(statearr_29728_29758[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29719 === (2)))
{var state_29718__$1 = state_29718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29718__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29719 === (11)))
{var state_29718__$1 = state_29718;var statearr_29729_29759 = state_29718__$1;(statearr_29729_29759[(2)] = null);
(statearr_29729_29759[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29719 === (9)))
{var inst_29689 = (state_29718[(8)]);var state_29718__$1 = state_29718;var statearr_29730_29760 = state_29718__$1;(statearr_29730_29760[(2)] = inst_29689);
(statearr_29730_29760[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29719 === (5)))
{var inst_29683 = (state_29718[(7)]);var inst_29689 = (state_29718[(8)]);var inst_29686 = cljs.core.nth.call(null,inst_29683,(0),null);var inst_29687 = cljs.core.nth.call(null,inst_29683,(1),null);var inst_29689__$1 = om.core.get_props.call(null,self__.owner);var inst_29690 = cljs.core.seq_QMARK_.call(null,inst_29689__$1);var state_29718__$1 = (function (){var statearr_29731 = state_29718;(statearr_29731[(9)] = inst_29687);
(statearr_29731[(10)] = inst_29686);
(statearr_29731[(8)] = inst_29689__$1);
return statearr_29731;
})();if(inst_29690)
{var statearr_29732_29761 = state_29718__$1;(statearr_29732_29761[(1)] = (8));
} else
{var statearr_29733_29762 = state_29718__$1;(statearr_29733_29762[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29719 === (10)))
{var inst_29687 = (state_29718[(9)]);var inst_29695 = (state_29718[(2)]);var inst_29696 = cljs.core.get.call(null,inst_29695,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29697 = cljs.core.get.call(null,inst_29695,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29698 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29699 = ["SELECT-FILTER-RQ",self__.id,inst_29687];var inst_29700 = (new cljs.core.PersistentVector(null,3,(5),inst_29698,inst_29699,null));var inst_29701 = cljs.core.clj__GT_js.call(null,inst_29700);var inst_29702 = console.log(inst_29701);var inst_29703 = cljs.core.deref.call(null,inst_29696);var inst_29704 = cljs.core.deref.call(null,inst_29697);var inst_29705 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_29703,inst_29704,inst_29687);var inst_29706 = om.core.update_BANG_.call(null,inst_29696,inst_29705);var state_29718__$1 = (function (){var statearr_29734 = state_29718;(statearr_29734[(11)] = inst_29706);
(statearr_29734[(12)] = inst_29702);
return statearr_29734;
})();var statearr_29735_29763 = state_29718__$1;(statearr_29735_29763[(2)] = true);
(statearr_29735_29763[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29719 === (8)))
{var inst_29689 = (state_29718[(8)]);var inst_29692 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29689);var state_29718__$1 = state_29718;var statearr_29736_29764 = state_29718__$1;(statearr_29736_29764[(2)] = inst_29692);
(statearr_29736_29764[(1)] = (10));
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
});})(c__16733__auto__,___$1,owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_29740 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29740[(0)] = state_machine__16719__auto__);
(statearr_29740[(1)] = (1));
return statearr_29740;
});
var state_machine__16719__auto____1 = (function (state_29718){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_29718);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e29741){if((e29741 instanceof Object))
{var ex__16722__auto__ = e29741;var statearr_29742_29765 = state_29718;(statearr_29742_29765[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29718);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29741;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29766 = state_29718;
state_29718 = G__29766;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_29718){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_29718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610))
})();var state__16735__auto__ = (function (){var statearr_29743 = f__16734__auto__.call(null);(statearr_29743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_29743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610))
);
return c__16733__auto__;
});})(owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610))
;
clustermap.components.filters.select_filter.t29678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610){
return (function (_29680){var self__ = this;
var _29680__$1 = this;return self__.meta29679;
});})(owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610))
;
clustermap.components.filters.select_filter.t29678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610){
return (function (_29680,meta29679__$1){var self__ = this;
var _29680__$1 = this;return (new clustermap.components.filters.select_filter.t29678(self__.component_spec,self__.component_filter_rq_chan,self__.map29605,self__.owner,self__.data,self__.output_checker29610,self__.filter_spec,self__.input_schema29608,self__.constructor29603,self__.validate__13947__auto__,self__.G__29611,self__.id,self__.ufv__,self__.input_checker29609,self__.output_schema29607,self__.map29606,meta29679__$1));
});})(owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610))
;
clustermap.components.filters.select_filter.__GT_t29678 = ((function (owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610){
return (function __GT_t29678(component_spec__$1,component_filter_rq_chan__$1,map29605__$1,owner__$1,data__$1,output_checker29610__$1,filter_spec__$1,input_schema29608__$1,constructor29603__$1,validate__13947__auto____$1,G__29611__$1,id__$1,ufv____$1,input_checker29609__$1,output_schema29607__$1,map29606__$1,meta29679){return (new clustermap.components.filters.select_filter.t29678(component_spec__$1,component_filter_rq_chan__$1,map29605__$1,owner__$1,data__$1,output_checker29610__$1,filter_spec__$1,input_schema29608__$1,constructor29603__$1,validate__13947__auto____$1,G__29611__$1,id__$1,ufv____$1,input_checker29609__$1,output_schema29607__$1,map29606__$1,meta29679));
});})(owner,component_filter_rq_chan,map29606,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610))
;
}
return (new clustermap.components.filters.select_filter.t29678(component_spec,component_filter_rq_chan,map29605,owner,data,output_checker29610,filter_spec,input_schema29608,constructor29603,validate__13947__auto__,G__29611,id,ufv__,input_checker29609,output_schema29607,map29606,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___29767 = output_checker29610.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___29767))
{var error__13949__auto___29768 = temp__4126__auto___29767;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29603","constructor29603",826207313,null),cljs.core.pr_str.call(null,error__13949__auto___29768)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29768,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29607,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema29607,input_schema29608,input_checker29609,output_checker29610))
,schema.core.make_fn_schema.call(null,output_schema29607,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29608], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__15794__auto___29747){
return (function() { 
var select_filter_component__delegate = function (data__15795__auto__,owner29602,p__29744){var vec__29746 = p__29744;var opts__15796__auto__ = cljs.core.nth.call(null,vec__29746,(0),null);return component_fnk__15794__auto___29747.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29602,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var select_filter_component = function (data__15795__auto__,owner29602,var_args){
var p__29744 = null;if (arguments.length > 2) {
  p__29744 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__15795__auto__,owner29602,p__29744);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__29769){
var data__15795__auto__ = cljs.core.first(arglist__29769);
arglist__29769 = cljs.core.next(arglist__29769);
var owner29602 = cljs.core.first(arglist__29769);
var p__29744 = cljs.core.rest(arglist__29769);
return select_filter_component__delegate(data__15795__auto__,owner29602,p__29744);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__15794__auto___29747))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__15763__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__15763__auto__,m29604){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__15763__auto__,m29604);
});
__GT_select_filter_component = function(cursor__15763__auto__,m29604){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__15763__auto__,m29604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;

//# sourceMappingURL=select_filter.js.map