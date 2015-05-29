// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.checkboxes_filter');
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
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clustermap.filters');
clustermap.components.filters.checkboxes_filter.make_sequential = (function make_sequential(s){if((s == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,s))
{return s;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);

}
}
});
/**
* return a map of options keyed by value
*/
clustermap.components.filters.checkboxes_filter.get_options_by_value = (function get_options_by_value(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12252__auto__ = (function iter__28167(s__28168){return (new cljs.core.LazySeq(null,(function (){var s__28168__$1 = s__28168;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28168__$1);if(temp__4126__auto__)
{var s__28168__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28168__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__28168__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__28170 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__28169 = (0);while(true){
if((i__28169 < size__12251__auto__))
{var o = cljs.core._nth.call(null,c__12250__auto__,i__28169);cljs.core.chunk_append.call(null,b__28170,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null));
{
var G__28171 = (i__28169 + (1));
i__28169 = G__28171;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28170),iter__28167.call(null,cljs.core.chunk_rest.call(null,s__28168__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28170),null);
}
} else
{var o = cljs.core.first.call(null,s__28168__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(o),o], null),iter__28167.call(null,cljs.core.rest.call(null,s__28168__$2)));
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
* given a combined filter, extract the set of option ids this represents
*/
clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter = (function extract_option_values_from_filter(options,f){var fs = cljs.core.set.call(null,clustermap.filters.de_or_filters.call(null,f));return cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.filter.call(null,((function (fs){
return (function (p1__28172_SHARP_){return fs.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(p1__28172_SHARP_));
});})(fs))
,options)));
});
/**
* given a seq of option values, combine a filter representing them
*/
clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values = (function combine_filter_for_option_values(options,values){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMBINE-FILTER",options,values], null)));
var values__$1 = cljs.core.set.call(null,values);var fs = (function (){var G__28175 = options;var G__28175__$1 = (((G__28175 == null))?null:cljs.core.filter.call(null,((function (G__28175,values__$1){
return (function (p1__28173_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28173_SHARP_));
});})(G__28175,values__$1))
,G__28175));var G__28175__$2 = (((G__28175__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),G__28175__$1));return G__28175__$2;
})();return clustermap.filters.or_filters.call(null,fs);
});
/**
* describe the selected options given a seq of their values
*/
clustermap.components.filters.checkboxes_filter.get_options_description = (function get_options_description(p__28177,values){var map__28179 = p__28177;var map__28179__$1 = ((cljs.core.seq_QMARK_.call(null,map__28179))?cljs.core.apply.call(null,cljs.core.hash_map,map__28179):map__28179);var component_spec = map__28179__$1;var options = cljs.core.get.call(null,map__28179__$1,new cljs.core.Keyword(null,"options","options",99638489));var label = cljs.core.get.call(null,map__28179__$1,new cljs.core.Keyword(null,"label","label",1718410804));var values__$1 = cljs.core.set.call(null,values);var sel = cljs.core.filter.call(null,((function (values__$1,map__28179,map__28179__$1,component_spec,options,label){
return (function (p1__28176_SHARP_){return values__$1.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__28176_SHARP_));
});})(values__$1,map__28179,map__28179__$1,component_spec,options,label))
,options);if(cljs.core.truth_(cljs.core.not_empty.call(null,sel)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),sel))));
} else
{return null;
}
});
/**
* given a seq of option values set the filters.
* returns an updated filter-spec value, but doesn't update the cursor
*/
clustermap.components.filters.checkboxes_filter.set_filters_for_values = (function set_filters_for_values(filter_spec,p__28180,values){var map__28182 = p__28180;var map__28182__$1 = ((cljs.core.seq_QMARK_.call(null,map__28182))?cljs.core.apply.call(null,cljs.core.hash_map,map__28182):map__28182);var component_spec = map__28182__$1;var options = cljs.core.get.call(null,map__28182__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = cljs.core.get.call(null,map__28182__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var f = clustermap.components.filters.checkboxes_filter.combine_filter_for_option_values.call(null,options,values);var d = clustermap.components.filters.checkboxes_filter.get_options_description.call(null,component_spec,values);var u = (cljs.core.truth_(cljs.core.not_empty.call(null,values))?values:null);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CHECBOXES-FILTER",id,cljs.core.val,f], null)));
return clustermap.filters.update_filter_component.call(null,filter_spec,id,f,d,u);
});
clustermap.components.filters.checkboxes_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28183 = schema.core.Any;var input_schema28184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"options","options",99638489),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker28185 = schema.core.checker.call(null,input_schema28184);var output_checker28186 = schema.core.checker.call(null,output_schema28183);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28183,input_schema28184,input_checker28185,output_checker28186){
return (function render_STAR_(G__28187){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___28204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28187], null);var temp__4126__auto___28205 = input_checker28185.call(null,args__13910__auto___28204);if(cljs.core.truth_(temp__4126__auto___28205))
{var error__13911__auto___28206 = temp__4126__auto___28205;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___28206)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28206,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___28204,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28184,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var data = G__28187;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var sorted = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"sorted","sorted",-896746253),null);var options = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var options__$1 = (cljs.core.truth_(sorted)?cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options):options);var options_by_value = clustermap.components.filters.checkboxes_filter.get_options_by_value.call(null,options__$1);var current_option_values = clustermap.components.filters.checkboxes_filter.extract_option_values_from_filter.call(null,options__$1,cljs.core.get.call(null,components,id));console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT-CHECKBOXES",id,current_option_values], null)));
return React.DOM.ul({"className": "filter-items"},cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28183,input_schema28184,input_checker28185,output_checker28186){
return (function iter__28196(s__28197){return (new cljs.core.LazySeq(null,((function (options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28183,input_schema28184,input_checker28185,output_checker28186){
return (function (){var s__28197__$1 = s__28197;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28197__$1);if(temp__4126__auto__)
{var s__28197__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28197__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__28197__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__28199 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__28198 = (0);while(true){
if((i__28198 < size__12251__auto__))
{var map__28202 = cljs.core._nth.call(null,c__12250__auto__,i__28198);var map__28202__$1 = ((cljs.core.seq_QMARK_.call(null,map__28202))?cljs.core.apply.call(null,cljs.core.hash_map,map__28202):map__28202);var filter = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"value","value",305978217));cljs.core.chunk_append.call(null,b__28199,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (i__28198,map__28202,map__28202__$1,filter,label__$1,value,c__12250__auto__,size__12251__auto__,b__28199,s__28197__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28183,input_schema28184,input_checker28185,output_checker28186){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(i__28198,map__28202,map__28202__$1,filter,label__$1,value,c__12250__auto__,size__12251__auto__,b__28199,s__28197__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28183,input_schema28184,input_checker28185,output_checker28186))
}),sablono.interpreter.interpret.call(null,label__$1))))));
{
var G__28207 = (i__28198 + (1));
i__28198 = G__28207;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28199),iter__28196.call(null,cljs.core.chunk_rest.call(null,s__28197__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28199),null);
}
} else
{var map__28203 = cljs.core.first.call(null,s__28197__$2);var map__28203__$1 = ((cljs.core.seq_QMARK_.call(null,map__28203))?cljs.core.apply.call(null,cljs.core.hash_map,map__28203):map__28203);var filter = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var label__$1 = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"label","label",1718410804));var value = cljs.core.get.call(null,map__28203__$1,new cljs.core.Keyword(null,"value","value",305978217));return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.label(null,React.DOM.div(null,React.DOM.span({"className": "label"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": id, "value": value, "checked": current_option_values.call(null,value), "onChange": ((function (map__28203,map__28203__$1,filter,label__$1,value,s__28197__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28183,input_schema28184,input_checker28185,output_checker28186){
return (function (e){var val = e.target.value;var checked = e.target.checked;var values = (cljs.core.truth_(checked)?cljs.core.conj.call(null,current_option_values,value):cljs.core.disj.call(null,current_option_values,value));return om.core.update_BANG_.call(null,filter_spec,clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,filter_spec,component_spec,values));
});})(map__28203,map__28203__$1,filter,label__$1,value,s__28197__$2,temp__4126__auto__,options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28183,input_schema28184,input_checker28185,output_checker28186))
}),sablono.interpreter.interpret.call(null,label__$1))))),iter__28196.call(null,cljs.core.rest.call(null,s__28197__$2)));
}
} else
{return null;
}
break;
}
});})(options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28183,input_schema28184,input_checker28185,output_checker28186))
,null,null));
});})(options__$1,options_by_value,current_option_values,options,sorted,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28183,input_schema28184,input_checker28185,output_checker28186))
;return iter__12252__auto__.call(null,options__$1);
})()));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___28208 = output_checker28186.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___28208))
{var error__13911__auto___28209 = temp__4126__auto___28208;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___28209)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28209,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28183,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema28183,input_schema28184,input_checker28185,output_checker28186))
,schema.core.make_fn_schema.call(null,output_schema28183,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28184], null)));
})();
clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"sorted","sorted",-896746253)),schema.core.Bool,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"value","value",305978217),schema.core.either.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,new cljs.core.Keyword(null,"filter","filter",-948537934),schema.core.maybe.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"omit-description","omit-description",-1018558911)),schema.core.maybe.call(null,schema.core.Bool)], true, false)], null)], true, false)], null);
var component_fnk__15756__auto___28355 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28215 = schema.core.Any;var input_schema28216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.checkboxes_filter.CheckboxesFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28213","map28213",-1548464326,null))], null);var input_checker28217 = schema.core.checker.call(null,input_schema28216);var output_checker28218 = schema.core.checker.call(null,output_schema28215);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218){
return (function constructor28211(G__28219){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___28356 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28219], null);var temp__4126__auto___28357 = input_checker28217.call(null,args__13910__auto___28356);if(cljs.core.truth_(temp__4126__auto___28357))
{var error__13911__auto___28358 = temp__4126__auto___28357;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28211","constructor28211",1631700679,null),cljs.core.pr_str.call(null,error__13911__auto___28358)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28358,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___28356,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28216,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map28213 = G__28219;while(true){
if(cljs.core.map_QMARK_.call(null,map28213))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28213)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map28213,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map28214 = plumbing.fnk.schema.safe_get.call(null,map28213,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map28214,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28213,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.checkboxes_filter.t28286 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.checkboxes_filter.t28286 = (function (component_spec,component_filter_rq_chan,owner,data,constructor28211,G__28219,validate__13909__auto__,map28214,filter_spec,output_schema28215,input_checker28217,output_checker28218,map28213,id,ufv__,input_schema28216,meta28287){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.constructor28211 = constructor28211;
this.G__28219 = G__28219;
this.validate__13909__auto__ = validate__13909__auto__;
this.map28214 = map28214;
this.filter_spec = filter_spec;
this.output_schema28215 = output_schema28215;
this.input_checker28217 = input_checker28217;
this.output_checker28218 = output_checker28218;
this.map28213 = map28213;
this.id = id;
this.ufv__ = ufv__;
this.input_schema28216 = input_schema28216;
this.meta28287 = meta28287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.checkboxes_filter.t28286.cljs$lang$type = true;
clustermap.components.filters.checkboxes_filter.t28286.cljs$lang$ctorStr = "clustermap.components.filters.checkboxes-filter/t28286";
clustermap.components.filters.checkboxes_filter.t28286.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.filters.checkboxes-filter/t28286");
});})(owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218))
;
clustermap.components.filters.checkboxes_filter.t28286.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.checkboxes_filter.t28286.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218){
return (function (_){var self__ = this;
var ___$1 = this;return "checkboxes-filter-component";
});})(owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218))
;
clustermap.components.filters.checkboxes_filter.t28286.prototype.om$core$IRender$ = true;
clustermap.components.filters.checkboxes_filter.t28286.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.checkboxes_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218))
;
clustermap.components.filters.checkboxes_filter.t28286.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.checkboxes_filter.t28286.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218){
return (function (_){var self__ = this;
var ___$1 = this;var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,___$1,owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,___$1,owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218){
return (function (state_28326){var state_val_28327 = (state_28326[(1)]);if((state_val_28327 === (7)))
{var inst_28317 = (state_28326[(2)]);var state_28326__$1 = state_28326;if(cljs.core.truth_(inst_28317))
{var statearr_28328_28359 = state_28326__$1;(statearr_28328_28359[(1)] = (11));
} else
{var statearr_28329_28360 = state_28326__$1;(statearr_28329_28360[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28327 === (1)))
{var state_28326__$1 = state_28326;var statearr_28330_28361 = state_28326__$1;(statearr_28330_28361[(2)] = null);
(statearr_28330_28361[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28327 === (4)))
{var inst_28291 = (state_28326[(7)]);var inst_28291__$1 = (state_28326[(2)]);var state_28326__$1 = (function (){var statearr_28331 = state_28326;(statearr_28331[(7)] = inst_28291__$1);
return statearr_28331;
})();if(cljs.core.truth_(inst_28291__$1))
{var statearr_28332_28362 = state_28326__$1;(statearr_28332_28362[(1)] = (5));
} else
{var statearr_28333_28363 = state_28326__$1;(statearr_28333_28363[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28327 === (13)))
{var inst_28322 = (state_28326[(2)]);var state_28326__$1 = state_28326;var statearr_28334_28364 = state_28326__$1;(statearr_28334_28364[(2)] = inst_28322);
(statearr_28334_28364[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28327 === (6)))
{var state_28326__$1 = state_28326;var statearr_28335_28365 = state_28326__$1;(statearr_28335_28365[(2)] = null);
(statearr_28335_28365[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28327 === (3)))
{var inst_28324 = (state_28326[(2)]);var state_28326__$1 = state_28326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28326__$1,inst_28324);
} else
{if((state_val_28327 === (12)))
{var state_28326__$1 = state_28326;var statearr_28336_28366 = state_28326__$1;(statearr_28336_28366[(2)] = null);
(statearr_28336_28366[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28327 === (2)))
{var state_28326__$1 = state_28326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28326__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_28327 === (11)))
{var state_28326__$1 = state_28326;var statearr_28337_28367 = state_28326__$1;(statearr_28337_28367[(2)] = null);
(statearr_28337_28367[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28327 === (9)))
{var inst_28297 = (state_28326[(8)]);var state_28326__$1 = state_28326;var statearr_28338_28368 = state_28326__$1;(statearr_28338_28368[(2)] = inst_28297);
(statearr_28338_28368[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28327 === (5)))
{var inst_28297 = (state_28326[(8)]);var inst_28291 = (state_28326[(7)]);var inst_28294 = cljs.core.nth.call(null,inst_28291,(0),null);var inst_28295 = cljs.core.nth.call(null,inst_28291,(1),null);var inst_28297__$1 = om.core.get_props.call(null,self__.owner);var inst_28298 = cljs.core.seq_QMARK_.call(null,inst_28297__$1);var state_28326__$1 = (function (){var statearr_28339 = state_28326;(statearr_28339[(8)] = inst_28297__$1);
(statearr_28339[(9)] = inst_28294);
(statearr_28339[(10)] = inst_28295);
return statearr_28339;
})();if(inst_28298)
{var statearr_28340_28369 = state_28326__$1;(statearr_28340_28369[(1)] = (8));
} else
{var statearr_28341_28370 = state_28326__$1;(statearr_28341_28370[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28327 === (10)))
{var inst_28295 = (state_28326[(10)]);var inst_28303 = (state_28326[(2)]);var inst_28304 = cljs.core.get.call(null,inst_28303,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_28305 = cljs.core.get.call(null,inst_28303,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_28306 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28307 = ["CHECKBOXES-FILTER-RQ",self__.id,inst_28295];var inst_28308 = (new cljs.core.PersistentVector(null,3,(5),inst_28306,inst_28307,null));var inst_28309 = cljs.core.clj__GT_js.call(null,inst_28308);var inst_28310 = console.log(inst_28309);var inst_28311 = cljs.core.deref.call(null,inst_28305);var inst_28312 = cljs.core.deref.call(null,inst_28304);var inst_28313 = clustermap.components.filters.checkboxes_filter.set_filters_for_values.call(null,inst_28311,inst_28312,inst_28295);var inst_28314 = om.core.update_BANG_.call(null,inst_28305,inst_28313);var state_28326__$1 = (function (){var statearr_28342 = state_28326;(statearr_28342[(11)] = inst_28314);
(statearr_28342[(12)] = inst_28310);
return statearr_28342;
})();var statearr_28343_28371 = state_28326__$1;(statearr_28343_28371[(2)] = true);
(statearr_28343_28371[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28327 === (8)))
{var inst_28297 = (state_28326[(8)]);var inst_28300 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28297);var state_28326__$1 = state_28326;var statearr_28344_28372 = state_28326__$1;(statearr_28344_28372[(2)] = inst_28300);
(statearr_28344_28372[(1)] = (10));
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
});})(c__18867__auto__,___$1,owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218))
;return ((function (switch__18811__auto__,c__18867__auto__,___$1,owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_28348 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28348[(0)] = state_machine__18812__auto__);
(statearr_28348[(1)] = (1));
return statearr_28348;
});
var state_machine__18812__auto____1 = (function (state_28326){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_28326);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e28349){if((e28349 instanceof Object))
{var ex__18815__auto__ = e28349;var statearr_28350_28373 = state_28326;(statearr_28350_28373[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28326);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28349;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28374 = state_28326;
state_28326 = G__28374;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_28326){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_28326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,___$1,owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218))
})();var state__18869__auto__ = (function (){var statearr_28351 = f__18868__auto__.call(null);(statearr_28351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_28351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,___$1,owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218))
);
return c__18867__auto__;
});})(owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218))
;
clustermap.components.filters.checkboxes_filter.t28286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218){
return (function (_28288){var self__ = this;
var _28288__$1 = this;return self__.meta28287;
});})(owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218))
;
clustermap.components.filters.checkboxes_filter.t28286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218){
return (function (_28288,meta28287__$1){var self__ = this;
var _28288__$1 = this;return (new clustermap.components.filters.checkboxes_filter.t28286(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.constructor28211,self__.G__28219,self__.validate__13909__auto__,self__.map28214,self__.filter_spec,self__.output_schema28215,self__.input_checker28217,self__.output_checker28218,self__.map28213,self__.id,self__.ufv__,self__.input_schema28216,meta28287__$1));
});})(owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218))
;
clustermap.components.filters.checkboxes_filter.__GT_t28286 = ((function (owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218){
return (function __GT_t28286(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,constructor28211__$1,G__28219__$1,validate__13909__auto____$1,map28214__$1,filter_spec__$1,output_schema28215__$1,input_checker28217__$1,output_checker28218__$1,map28213__$1,id__$1,ufv____$1,input_schema28216__$1,meta28287){return (new clustermap.components.filters.checkboxes_filter.t28286(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,constructor28211__$1,G__28219__$1,validate__13909__auto____$1,map28214__$1,filter_spec__$1,output_schema28215__$1,input_checker28217__$1,output_checker28218__$1,map28213__$1,id__$1,ufv____$1,input_schema28216__$1,meta28287));
});})(owner,component_filter_rq_chan,map28214,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218))
;
}
return (new clustermap.components.filters.checkboxes_filter.t28286(component_spec,component_filter_rq_chan,owner,data,constructor28211,G__28219,validate__13909__auto__,map28214,filter_spec,output_schema28215,input_checker28217,output_checker28218,map28213,id,ufv__,input_schema28216,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___28375 = output_checker28218.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___28375))
{var error__13911__auto___28376 = temp__4126__auto___28375;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28211","constructor28211",1631700679,null),cljs.core.pr_str.call(null,error__13911__auto___28376)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28376,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28215,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema28215,input_schema28216,input_checker28217,output_checker28218))
,schema.core.make_fn_schema.call(null,output_schema28215,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28216], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.checkboxes_filter.checkboxes_filter_component = ((function (component_fnk__15756__auto___28355){
return (function() { 
var checkboxes_filter_component__delegate = function (data__15757__auto__,owner28210,p__28352){var vec__28354 = p__28352;var opts__15758__auto__ = cljs.core.nth.call(null,vec__28354,(0),null);return component_fnk__15756__auto___28355.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15758__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28210,new cljs.core.Keyword(null,"data","data",-232669377),data__15757__auto__], null));
};
var checkboxes_filter_component = function (data__15757__auto__,owner28210,var_args){
var p__28352 = null;if (arguments.length > 2) {
  p__28352 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return checkboxes_filter_component__delegate.call(this,data__15757__auto__,owner28210,p__28352);};
checkboxes_filter_component.cljs$lang$maxFixedArity = 2;
checkboxes_filter_component.cljs$lang$applyTo = (function (arglist__28377){
var data__15757__auto__ = cljs.core.first(arglist__28377);
arglist__28377 = cljs.core.next(arglist__28377);
var owner28210 = cljs.core.first(arglist__28377);
var p__28352 = cljs.core.rest(arglist__28377);
return checkboxes_filter_component__delegate(data__15757__auto__,owner28210,p__28352);
});
checkboxes_filter_component.cljs$core$IFn$_invoke$arity$variadic = checkboxes_filter_component__delegate;
return checkboxes_filter_component;
})()
;})(component_fnk__15756__auto___28355))
;
clustermap.components.filters.checkboxes_filter.__GT_checkboxes_filter_component = (function() {
var __GT_checkboxes_filter_component = null;
var __GT_checkboxes_filter_component__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__15725__auto__);
});
var __GT_checkboxes_filter_component__2 = (function (cursor__15725__auto__,m28212){return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,cursor__15725__auto__,m28212);
});
__GT_checkboxes_filter_component = function(cursor__15725__auto__,m28212){
switch(arguments.length){
case 1:
return __GT_checkboxes_filter_component__1.call(this,cursor__15725__auto__);
case 2:
return __GT_checkboxes_filter_component__2.call(this,cursor__15725__auto__,m28212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_checkboxes_filter_component__1;
__GT_checkboxes_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_checkboxes_filter_component__2;
return __GT_checkboxes_filter_component;
})()
;

//# sourceMappingURL=checkboxes_filter.js.map