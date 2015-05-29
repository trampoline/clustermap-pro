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
clustermap.components.filters.select_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12252__auto__ = (function iter__28558(s__28559){return (new cljs.core.LazySeq(null,(function (){var s__28559__$1 = s__28559;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28559__$1);if(temp__4126__auto__)
{var s__28559__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28559__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__28559__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__28561 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__28560 = (0);while(true){
if((i__28560 < size__12251__auto__))
{var o = cljs.core._nth.call(null,c__12250__auto__,i__28560);cljs.core.chunk_append.call(null,b__28561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__28562 = (i__28560 + (1));
i__28560 = G__28562;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28561),iter__28558.call(null,cljs.core.chunk_rest.call(null,s__28559__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28561),null);
}
} else
{var o = cljs.core.first.call(null,s__28559__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__28558.call(null,cljs.core.rest.call(null,s__28559__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12252__auto__.call(null,options);
})());
});
/**
* get the selected option-value by comparing the selected filter with the
* option filters
*/
clustermap.components.filters.select_filter.get_option_value = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28566 = schema.core.Any;var input_schema28567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28563","map28563",-1734952564,null))], null);var input_checker28568 = schema.core.checker.call(null,input_schema28567);var output_checker28569 = schema.core.checker.call(null,output_schema28566);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28566,input_schema28567,input_checker28568,output_checker28569){
return (function get_option_value(G__28570){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___28571 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28570], null);var temp__4126__auto___28572 = input_checker28568.call(null,args__13910__auto___28571);if(cljs.core.truth_(temp__4126__auto___28572))
{var error__13911__auto___28573 = temp__4126__auto___28572;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__13911__auto___28573)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28573,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___28571,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28567,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map28563 = G__28570;while(true){
if(cljs.core.map_QMARK_.call(null,map28563))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28563)));
}
var map28565 = plumbing.fnk.schema.safe_get.call(null,map28563,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,map28565,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,map28565,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options = plumbing.fnk.schema.safe_get.call(null,map28565,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map28564 = plumbing.fnk.schema.safe_get.call(null,map28563,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map28564,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var current_filter = cljs.core.get_in.call(null,components,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));var or__11514__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.some.call(null,((function (current_filter,components,map28564,options,label,id,map28565,validate__13909__auto__,ufv__,output_schema28566,input_schema28567,input_checker28568,output_checker28569){
return (function (o){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(o),current_filter))
{return o;
} else
{return null;
}
});})(current_filter,components,map28564,options,label,id,map28565,validate__13909__auto__,ufv__,output_schema28566,input_schema28567,input_checker28568,output_checker28569))
,options));if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return "";
}
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___28574 = output_checker28569.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___28574))
{var error__13911__auto___28575 = temp__4126__auto___28574;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"get-option-value","get-option-value",-1863278678,null),cljs.core.pr_str.call(null,error__13911__auto___28575)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28575,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28566,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema28566,input_schema28567,input_checker28568,output_checker28569))
,schema.core.make_fn_schema.call(null,output_schema28566,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28567], null)));
})();
clustermap.components.filters.select_filter.filter_for_option_value = (function filter_for_option_value(options,value){var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options);var option_spec = cljs.core.get.call(null,options_by_value,value);return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(option_spec);
});
/**
* describe the selected option
*/
clustermap.components.filters.select_filter.get_option_description = (function get_option_description(p__28577,value){var map__28579 = p__28577;var map__28579__$1 = ((cljs.core.seq_QMARK_.call(null,map__28579))?cljs.core.apply.call(null,cljs.core.hash_map,map__28579):map__28579);var component_spec = map__28579__$1;var options = cljs.core.get.call(null,map__28579__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__28579__$1,new cljs.core.Keyword(null,"label","label",1718410804));var option_spec = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__28579,map__28579__$1,component_spec,options,label){
return (function (p1__28576_SHARP_){return cljs.core._EQ_.call(null,value,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28576_SHARP_));
});})(map__28579,map__28579__$1,component_spec,options,label))
,options));if(cljs.core.truth_((function (){var and__11502__auto__ = option_spec;if(cljs.core.truth_(and__11502__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911).cljs$core$IFn$_invoke$arity$1(option_spec));
} else
{return and__11502__auto__;
}
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option_spec)));
} else
{return null;
}
});
clustermap.components.filters.select_filter.set_filters_for_value = (function set_filters_for_value(filter_spec,p__28580,value){var map__28582 = p__28580;var map__28582__$1 = ((cljs.core.seq_QMARK_.call(null,map__28582))?cljs.core.apply.call(null,cljs.core.hash_map,map__28582):map__28582);var component_spec = map__28582__$1;var options = cljs.core.get.call(null,map__28582__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__28582__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.select_filter.filter_for_option_value.call(null,options,value);var d = clustermap.components.filters.select_filter.get_option_description.call(null,component_spec,value);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-FILTER",id,value,f,d], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,value);
});
clustermap.components.filters.select_filter.sort_options = (function sort_options(options){var empty_option = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__28583_SHARP_){return cljs.core._EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28583_SHARP_));
}),options));var sorted = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.filter.call(null,((function (empty_option){
return (function (p1__28584_SHARP_){return cljs.core.not_EQ_.call(null,"",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28584_SHARP_));
});})(empty_option))
,options));return cljs.core.into.call(null,empty_option,sorted);
});
clustermap.components.filters.select_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28585 = schema.core.Any;var input_schema28586 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker28587 = schema.core.checker.call(null,input_schema28586);var output_checker28588 = schema.core.checker.call(null,output_schema28585);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28585,input_schema28586,input_checker28587,output_checker28588){
return (function render_STAR_(G__28589){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___28606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28589], null);var temp__4126__auto___28607 = input_checker28587.call(null,args__13910__auto___28606);if(cljs.core.truth_(temp__4126__auto___28607))
{var error__13911__auto___28608 = temp__4126__auto___28607;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___28608)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28608,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___28606,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28586,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var data = G__28589;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?clustermap.components.filters.select_filter.sort_options.call(null,options):options);var current_option_value = clustermap.components.filters.select_filter.get_option_value.call(null,data);var options_by_value = clustermap.components.filters.select_filter.get_options_by_value.call(null,options__$1);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-OPTION",id,current_option_value], null)));
return React.DOM.ul({"className": "filter-items"},React.DOM.li(null,React.DOM.select({"value": current_option_value, "onChange": ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28585,input_schema28586,input_checker28587,output_checker28588){
return (function (e){var val = e.target.value;return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.select_filter.set_filters_for_value.call(null,filter_spec,component_spec,val));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28585,input_schema28586,input_checker28587,output_checker28588))
},cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28585,input_schema28586,input_checker28587,output_checker28588){
return (function iter__28598(s__28599){return (new cljs.core.LazySeq(null,((function (options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28585,input_schema28586,input_checker28587,output_checker28588){
return (function (){var s__28599__$1 = s__28599;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28599__$1);if(temp__4126__auto__)
{var s__28599__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28599__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__28599__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__28601 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__28600 = (0);while(true){
if((i__28600 < size__12251__auto__))
{var map__28604 = cljs.core._nth.call(null,c__12250__auto__,i__28600);var map__28604__$1 = ((cljs.core.seq_QMARK_.call(null,map__28604))?cljs.core.apply.call(null,cljs.core.hash_map,map__28604):map__28604);var option = map__28604__$1;var label__$1 = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__28604__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__28601,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)));
{
var G__28609 = (i__28600 + (1));
i__28600 = G__28609;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28601),iter__28598.call(null,cljs.core.chunk_rest.call(null,s__28599__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28601),null);
}
} else
{var map__28605 = cljs.core.first.call(null,s__28599__$2);var map__28605__$1 = ((cljs.core.seq_QMARK_.call(null,map__28605))?cljs.core.apply.call(null,cljs.core.hash_map,map__28605):map__28605);var option = map__28605__$1;var label__$1 = cljs.core.get.call(null,map__28605__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__28605__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,label__$1)),iter__28598.call(null,cljs.core.rest.call(null,s__28599__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28585,input_schema28586,input_checker28587,output_checker28588))
,null,null));
});})(options__$1,current_option_value,options_by_value,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28585,input_schema28586,input_checker28587,output_checker28588))
;return iter__12252__auto__.call(null,options__$1);
})()))));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___28610 = output_checker28588.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___28610))
{var error__13911__auto___28611 = temp__4126__auto___28610;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___28611)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28611,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28585,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema28585,input_schema28586,input_checker28587,output_checker28588))
,schema.core.make_fn_schema.call(null,output_schema28585,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28586], null)));
})();
clustermap.components.filters.select_filter.SelectFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__15756__auto___28757 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28617 = schema.core.Any;var input_schema28618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.select_filter.SelectFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28615","map28615",261116058,null))], null);var input_checker28619 = schema.core.checker.call(null,input_schema28618);var output_checker28620 = schema.core.checker.call(null,output_schema28617);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620){
return (function constructor28613(G__28621){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___28758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28621], null);var temp__4126__auto___28759 = input_checker28619.call(null,args__13910__auto___28758);if(cljs.core.truth_(temp__4126__auto___28759))
{var error__13911__auto___28760 = temp__4126__auto___28759;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28613","constructor28613",-1791212019,null),cljs.core.pr_str.call(null,error__13911__auto___28760)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28760,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___28758,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28618,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map28615 = G__28621;while(true){
if(cljs.core.map_QMARK_.call(null,map28615))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28615)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map28615,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map28616 = plumbing.fnk.schema.safe_get.call(null,map28615,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map28616,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28615,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.select_filter.t28688 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.select_filter.t28688 = (function (component_spec,component_filter_rq_chan,output_schema28617,input_schema28618,owner,data,map28616,validate__13909__auto__,constructor28613,input_checker28619,filter_spec,G__28621,output_checker28620,map28615,id,ufv__,meta28689){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_schema28617 = output_schema28617;
this.input_schema28618 = input_schema28618;
this.owner = owner;
this.data = data;
this.map28616 = map28616;
this.validate__13909__auto__ = validate__13909__auto__;
this.constructor28613 = constructor28613;
this.input_checker28619 = input_checker28619;
this.filter_spec = filter_spec;
this.G__28621 = G__28621;
this.output_checker28620 = output_checker28620;
this.map28615 = map28615;
this.id = id;
this.ufv__ = ufv__;
this.meta28689 = meta28689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.select_filter.t28688.cljs$lang$type = true;
clustermap.components.filters.select_filter.t28688.cljs$lang$ctorStr = "clustermap.components.filters.select-filter/t28688";
clustermap.components.filters.select_filter.t28688.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.filters.select-filter/t28688");
});})(owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620))
;
clustermap.components.filters.select_filter.t28688.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.select_filter.t28688.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620){
return (function (_){var self__ = this;
var ___$1 = this;return "select-filter-component";
});})(owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620))
;
clustermap.components.filters.select_filter.t28688.prototype.om$core$IRender$ = true;
clustermap.components.filters.select_filter.t28688.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.select_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620))
;
clustermap.components.filters.select_filter.t28688.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.select_filter.t28688.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620){
return (function (_){var self__ = this;
var ___$1 = this;var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,___$1,owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,___$1,owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620){
return (function (state_28728){var state_val_28729 = (state_28728[(1)]);if((state_val_28729 === (7)))
{var inst_28719 = (state_28728[(2)]);var state_28728__$1 = state_28728;if(cljs.core.truth_(inst_28719))
{var statearr_28730_28761 = state_28728__$1;(statearr_28730_28761[(1)] = (11));
} else
{var statearr_28731_28762 = state_28728__$1;(statearr_28731_28762[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (1)))
{var state_28728__$1 = state_28728;var statearr_28732_28763 = state_28728__$1;(statearr_28732_28763[(2)] = null);
(statearr_28732_28763[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (4)))
{var inst_28693 = (state_28728[(7)]);var inst_28693__$1 = (state_28728[(2)]);var state_28728__$1 = (function (){var statearr_28733 = state_28728;(statearr_28733[(7)] = inst_28693__$1);
return statearr_28733;
})();if(cljs.core.truth_(inst_28693__$1))
{var statearr_28734_28764 = state_28728__$1;(statearr_28734_28764[(1)] = (5));
} else
{var statearr_28735_28765 = state_28728__$1;(statearr_28735_28765[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (13)))
{var inst_28724 = (state_28728[(2)]);var state_28728__$1 = state_28728;var statearr_28736_28766 = state_28728__$1;(statearr_28736_28766[(2)] = inst_28724);
(statearr_28736_28766[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (6)))
{var state_28728__$1 = state_28728;var statearr_28737_28767 = state_28728__$1;(statearr_28737_28767[(2)] = null);
(statearr_28737_28767[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (3)))
{var inst_28726 = (state_28728[(2)]);var state_28728__$1 = state_28728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28728__$1,inst_28726);
} else
{if((state_val_28729 === (12)))
{var state_28728__$1 = state_28728;var statearr_28738_28768 = state_28728__$1;(statearr_28738_28768[(2)] = null);
(statearr_28738_28768[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (2)))
{var state_28728__$1 = state_28728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28728__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_28729 === (11)))
{var state_28728__$1 = state_28728;var statearr_28739_28769 = state_28728__$1;(statearr_28739_28769[(2)] = null);
(statearr_28739_28769[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (9)))
{var inst_28699 = (state_28728[(8)]);var state_28728__$1 = state_28728;var statearr_28740_28770 = state_28728__$1;(statearr_28740_28770[(2)] = inst_28699);
(statearr_28740_28770[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (5)))
{var inst_28699 = (state_28728[(8)]);var inst_28693 = (state_28728[(7)]);var inst_28696 = cljs.core.nth.call(null,inst_28693,(0),null);var inst_28697 = cljs.core.nth.call(null,inst_28693,(1),null);var inst_28699__$1 = om.core.get_props.call(null,self__.owner);var inst_28700 = cljs.core.seq_QMARK_.call(null,inst_28699__$1);var state_28728__$1 = (function (){var statearr_28741 = state_28728;(statearr_28741[(8)] = inst_28699__$1);
(statearr_28741[(9)] = inst_28696);
(statearr_28741[(10)] = inst_28697);
return statearr_28741;
})();if(inst_28700)
{var statearr_28742_28771 = state_28728__$1;(statearr_28742_28771[(1)] = (8));
} else
{var statearr_28743_28772 = state_28728__$1;(statearr_28743_28772[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (10)))
{var inst_28697 = (state_28728[(10)]);var inst_28705 = (state_28728[(2)]);var inst_28706 = cljs.core.get.call(null,inst_28705,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_28707 = cljs.core.get.call(null,inst_28705,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_28708 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28709 = ["SELECT-FILTER-RQ",self__.id,inst_28697];var inst_28710 = (new cljs.core.PersistentVector(null,3,(5),inst_28708,inst_28709,null));var inst_28711 = cljs.core.clj__GT_js.call(null,inst_28710);var inst_28712 = console.log(inst_28711);var inst_28713 = cljs.core.deref.call(null,inst_28706);var inst_28714 = cljs.core.deref.call(null,inst_28707);var inst_28715 = clustermap.components.filters.select_filter.set_filters_for_value.call(null,inst_28713,inst_28714,inst_28697);var inst_28716 = om.core.update_BANG_.call(null,inst_28706,inst_28715);var state_28728__$1 = (function (){var statearr_28744 = state_28728;(statearr_28744[(11)] = inst_28716);
(statearr_28744[(12)] = inst_28712);
return statearr_28744;
})();var statearr_28745_28773 = state_28728__$1;(statearr_28745_28773[(2)] = true);
(statearr_28745_28773[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28729 === (8)))
{var inst_28699 = (state_28728[(8)]);var inst_28702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28699);var state_28728__$1 = state_28728;var statearr_28746_28774 = state_28728__$1;(statearr_28746_28774[(2)] = inst_28702);
(statearr_28746_28774[(1)] = (10));
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
});})(c__18867__auto__,___$1,owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620))
;return ((function (switch__18811__auto__,c__18867__auto__,___$1,owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_28750 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28750[(0)] = state_machine__18812__auto__);
(statearr_28750[(1)] = (1));
return statearr_28750;
});
var state_machine__18812__auto____1 = (function (state_28728){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_28728);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e28751){if((e28751 instanceof Object))
{var ex__18815__auto__ = e28751;var statearr_28752_28775 = state_28728;(statearr_28752_28775[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28751;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28776 = state_28728;
state_28728 = G__28776;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_28728){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_28728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,___$1,owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620))
})();var state__18869__auto__ = (function (){var statearr_28753 = f__18868__auto__.call(null);(statearr_28753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_28753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,___$1,owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620))
);
return c__18867__auto__;
});})(owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620))
;
clustermap.components.filters.select_filter.t28688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620){
return (function (_28690){var self__ = this;
var _28690__$1 = this;return self__.meta28689;
});})(owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620))
;
clustermap.components.filters.select_filter.t28688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620){
return (function (_28690,meta28689__$1){var self__ = this;
var _28690__$1 = this;return (new clustermap.components.filters.select_filter.t28688(self__.component_spec,self__.component_filter_rq_chan,self__.output_schema28617,self__.input_schema28618,self__.owner,self__.data,self__.map28616,self__.validate__13909__auto__,self__.constructor28613,self__.input_checker28619,self__.filter_spec,self__.G__28621,self__.output_checker28620,self__.map28615,self__.id,self__.ufv__,meta28689__$1));
});})(owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620))
;
clustermap.components.filters.select_filter.__GT_t28688 = ((function (owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620){
return (function __GT_t28688(component_spec__$1,component_filter_rq_chan__$1,output_schema28617__$1,input_schema28618__$1,owner__$1,data__$1,map28616__$1,validate__13909__auto____$1,constructor28613__$1,input_checker28619__$1,filter_spec__$1,G__28621__$1,output_checker28620__$1,map28615__$1,id__$1,ufv____$1,meta28689){return (new clustermap.components.filters.select_filter.t28688(component_spec__$1,component_filter_rq_chan__$1,output_schema28617__$1,input_schema28618__$1,owner__$1,data__$1,map28616__$1,validate__13909__auto____$1,constructor28613__$1,input_checker28619__$1,filter_spec__$1,G__28621__$1,output_checker28620__$1,map28615__$1,id__$1,ufv____$1,meta28689));
});})(owner,component_filter_rq_chan,map28616,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620))
;
}
return (new clustermap.components.filters.select_filter.t28688(component_spec,component_filter_rq_chan,output_schema28617,input_schema28618,owner,data,map28616,validate__13909__auto__,constructor28613,input_checker28619,filter_spec,G__28621,output_checker28620,map28615,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___28777 = output_checker28620.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___28777))
{var error__13911__auto___28778 = temp__4126__auto___28777;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28613","constructor28613",-1791212019,null),cljs.core.pr_str.call(null,error__13911__auto___28778)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28778,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28617,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema28617,input_schema28618,input_checker28619,output_checker28620))
,schema.core.make_fn_schema.call(null,output_schema28617,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28618], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.select_filter.select_filter_component = ((function (component_fnk__15756__auto___28757){
return (function() { 
var select_filter_component__delegate = function (data__15757__auto__,owner28612,p__28754){var vec__28756 = p__28754;var opts__15758__auto__ = cljs.core.nth.call(null,vec__28756,(0),null);return component_fnk__15756__auto___28757.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15758__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28612,new cljs.core.Keyword(null,"data","data",-232669377),data__15757__auto__], null));
};
var select_filter_component = function (data__15757__auto__,owner28612,var_args){
var p__28754 = null;if (arguments.length > 2) {
  p__28754 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return select_filter_component__delegate.call(this,data__15757__auto__,owner28612,p__28754);};
select_filter_component.cljs$lang$maxFixedArity = 2;
select_filter_component.cljs$lang$applyTo = (function (arglist__28779){
var data__15757__auto__ = cljs.core.first(arglist__28779);
arglist__28779 = cljs.core.next(arglist__28779);
var owner28612 = cljs.core.first(arglist__28779);
var p__28754 = cljs.core.rest(arglist__28779);
return select_filter_component__delegate(data__15757__auto__,owner28612,p__28754);
});
select_filter_component.cljs$core$IFn$_invoke$arity$variadic = select_filter_component__delegate;
return select_filter_component;
})()
;})(component_fnk__15756__auto___28757))
;
clustermap.components.filters.select_filter.__GT_select_filter_component = (function() {
var __GT_select_filter_component = null;
var __GT_select_filter_component__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__15725__auto__);
});
var __GT_select_filter_component__2 = (function (cursor__15725__auto__,m28614){return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,cursor__15725__auto__,m28614);
});
__GT_select_filter_component = function(cursor__15725__auto__,m28614){
switch(arguments.length){
case 1:
return __GT_select_filter_component__1.call(this,cursor__15725__auto__);
case 2:
return __GT_select_filter_component__2.call(this,cursor__15725__auto__,m28614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_select_filter_component__1;
__GT_select_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_select_filter_component__2;
return __GT_select_filter_component;
})()
;

//# sourceMappingURL=select_filter.js.map