// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filter');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clustermap.components.filters.select_filter');
goog.require('clustermap.components.filters.external_filter');
goog.require('clustermap.components.filters.tag_filter');
goog.require('plumbing.core');
goog.require('clustermap.components.filters.tag_checkboxes_filter');
goog.require('schema.core');
goog.require('clustermap.components.filters.checkboxes_filter');
goog.require('sablono.core');
goog.require('clustermap.components.filters.checkboxes_filter');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('clustermap.filters');
goog.require('clustermap.components.filters.external_filter');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('clustermap.components.filters.tag_filter');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.components.filters.select_filter');
goog.require('clustermap.components.filters.tag_checkboxes_filter');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clustermap.formats.url');
goog.require('clustermap.formats.url');
goog.require('clustermap.filters');
/**
* delegate to filter-component type parsers for each fragment param
* which matches a component id
*/
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__28852){var map__28854 = p__28852;var map__28854__$1 = ((cljs.core.seq_QMARK_.call(null,map__28854))?cljs.core.apply.call(null,cljs.core.hash_map,map__28854):map__28854);var filter_spec = map__28854__$1;var component_descrs = cljs.core.get.call(null,map__28854__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28854__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28854__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__28855){var map__28857 = p__28855;var map__28857__$1 = ((cljs.core.seq_QMARK_.call(null,map__28857))?cljs.core.apply.call(null,cljs.core.hash_map,map__28857):map__28857);var filter_spec = map__28857__$1;var component_descrs = cljs.core.get.call(null,map__28857__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28857__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28857__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__28858,component_filter_rq_chan){var map__28863 = p__28858;var map__28863__$1 = ((cljs.core.seq_QMARK_.call(null,map__28863))?cljs.core.apply.call(null,cljs.core.hash_map,map__28863):map__28863);var component_spec = map__28863__$1;var type = cljs.core.get.call(null,map__28863__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__28864 = cljs.core._EQ_;var expr__28865 = type;if(cljs.core.truth_(pred__28864.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__28865)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28864.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__28865)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28864.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__28865)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28864.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__28865)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28864.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__28865)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28865))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__28867,component_filter_rq_chan){var map__28869 = p__28867;var map__28869__$1 = ((cljs.core.seq_QMARK_.call(null,map__28869))?cljs.core.apply.call(null,cljs.core.hash_map,map__28869):map__28869);var component_spec = map__28869__$1;var visible = cljs.core.get.call(null,map__28869__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__28869__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__28869__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__28869__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
});
clustermap.components.filter.update_component_filter_rq_chans = (function update_component_filter_rq_chans(component_filter_rq_chans,component_ids){var existing_ids = cljs.core.set.call(null,cljs.core.keys.call(null,component_filter_rq_chans));var required_ids = cljs.core.set.call(null,component_ids);var new_ids = clojure.set.difference.call(null,required_ids,existing_ids);var dead_ids = clojure.set.difference.call(null,existing_ids,required_ids);var changing_ids = clojure.set.union.call(null,new_ids,dead_ids);return cljs.core.reduce.call(null,((function (existing_ids,required_ids,new_ids,dead_ids,changing_ids){
return (function (chs,id){if(cljs.core.truth_(new_ids.call(null,id)))
{var ch = cljs.core.async.chan.call(null);return cljs.core.assoc.call(null,chs,id,ch);
} else
{if(cljs.core.truth_(dead_ids.call(null,id)))
{var ch = cljs.core.get.call(null,chs,id);cljs.core.dissoc.call(null,chs,id);
return cljs.core.async.close_BANG_.call(null,ch);
} else
{return null;
}
}
});})(existing_ids,required_ids,new_ids,dead_ids,changing_ids))
,component_filter_rq_chans,changing_ids);
});
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28871 = schema.core.Any;var input_schema28872 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28870","map28870",-309099012,null))], null);var input_checker28873 = schema.core.checker.call(null,input_schema28872);var output_checker28874 = schema.core.checker.call(null,output_schema28871);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28871,input_schema28872,input_checker28873,output_checker28874){
return (function render_STAR_(G__28875){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28875], null);var temp__4126__auto___28893 = input_checker28873.call(null,args__6035__auto___28892);if(cljs.core.truth_(temp__4126__auto___28893))
{var error__6036__auto___28894 = temp__4126__auto___28893;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28894)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28894,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28892,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28872,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28870 = G__28875;while(true){
if(cljs.core.map_QMARK_.call(null,map28870))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28870)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28870,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map28870,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map28870,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28871,input_schema28872,input_checker28873,output_checker28874){
return (function iter__28884(s__28885){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28871,input_schema28872,input_checker28873,output_checker28874){
return (function (){var s__28885__$1 = s__28885;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28885__$1);if(temp__4126__auto__)
{var s__28885__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28885__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28885__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28887 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28886 = (0);while(true){
if((i__28886 < size__4376__auto__))
{var map__28890 = cljs.core._nth.call(null,c__4375__auto__,i__28886);var map__28890__$1 = ((cljs.core.seq_QMARK_.call(null,map__28890))?cljs.core.apply.call(null,cljs.core.hash_map,map__28890):map__28890);var component_spec = map__28890__$1;var id = cljs.core.get.call(null,map__28890__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__28887,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__28895 = (i__28886 + (1));
i__28886 = G__28895;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28887),iter__28884.call(null,cljs.core.chunk_rest.call(null,s__28885__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28887),null);
}
} else
{var map__28891 = cljs.core.first.call(null,s__28885__$2);var map__28891__$1 = ((cljs.core.seq_QMARK_.call(null,map__28891))?cljs.core.apply.call(null,cljs.core.hash_map,map__28891):map__28891);var component_spec = map__28891__$1;var id = cljs.core.get.call(null,map__28891__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__28884.call(null,cljs.core.rest.call(null,s__28885__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28871,input_schema28872,input_checker28873,output_checker28874))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28871,input_schema28872,input_checker28873,output_checker28874))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28896 = output_checker28874.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28896))
{var error__6036__auto___28897 = temp__4126__auto___28896;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28897)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28897,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28871,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28871,input_schema28872,input_checker28873,output_checker28874))
,schema.core.make_fn_schema.call(null,output_schema28871,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28872], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___29234 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28904 = schema.core.Any;var input_schema28905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28901","map28901",113639895,null))], null);var input_checker28906 = schema.core.checker.call(null,input_schema28905);var output_checker28907 = schema.core.checker.call(null,output_schema28904);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function constructor28899(G__28908){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29235 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28908], null);var temp__4126__auto___29236 = input_checker28906.call(null,args__6035__auto___29235);if(cljs.core.truth_(temp__4126__auto___29236))
{var error__6036__auto___29237 = temp__4126__auto___29236;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28899","constructor28899",-631297871,null),cljs.core.pr_str.call(null,error__6036__auto___29237)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29237,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29235,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28905,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28901 = G__28908;while(true){
if(cljs.core.map_QMARK_.call(null,map28901))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28901)));
}
var map28903 = plumbing.fnk.schema.safe_get.call(null,map28901,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28903,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map28902 = plumbing.fnk.schema.safe_get.call(null,map28901,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map28902,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map28902,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28901,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t29070 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t29070 = (function (output_checker28907,input_schema28905,input_checker28906,owner,G__28908,component_specs,filter_spec,constructor28899,history,map28903,map28901,components,validate__6034__auto__,map28902,id,output_schema28904,filter_rq_pub,ufv__,url_components,meta29071){
this.output_checker28907 = output_checker28907;
this.input_schema28905 = input_schema28905;
this.input_checker28906 = input_checker28906;
this.owner = owner;
this.G__28908 = G__28908;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.constructor28899 = constructor28899;
this.history = history;
this.map28903 = map28903;
this.map28901 = map28901;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.map28902 = map28902;
this.id = id;
this.output_schema28904 = output_schema28904;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta29071 = meta29071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t29070.cljs$lang$type = true;
clustermap.components.filter.t29070.cljs$lang$ctorStr = "clustermap.components.filter/t29070";
clustermap.components.filter.t29070.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t29070");
});})(owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
;
clustermap.components.filter.t29070.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t29070.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
;
clustermap.components.filter.t29070.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t29070.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function (_,p__29073,___$1){var self__ = this;
var map__29074 = p__29073;var map__29074__$1 = ((cljs.core.seq_QMARK_.call(null,map__29074))?cljs.core.apply.call(null,cljs.core.hash_map,map__29074):map__29074);var next_props = map__29074__$1;var map__29075 = cljs.core.get.call(null,map__29074__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__29075__$1 = ((cljs.core.seq_QMARK_.call(null,map__29075))?cljs.core.apply.call(null,cljs.core.hash_map,map__29075):map__29075);var next_filter_spec = map__29075__$1;var map__29076 = cljs.core.get.call(null,map__29075__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__29076__$1 = ((cljs.core.seq_QMARK_.call(null,map__29076))?cljs.core.apply.call(null,cljs.core.hash_map,map__29076):map__29076);var next_url_components = map__29076__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
{return cljs.core.not_EQ_.call(null,next_url_components,self__.url_components);
} else
{return and__3627__auto__;
}
})()))
{var token = self__.history.getToken();var encoded_filter = clustermap.filters.filter_url_param_value.call(null,next_url_components);var new_token = clustermap.formats.url.add_param_to_token.call(null,token,self__.id,encoded_filter);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TOKEN-CHANGE",token,new_token], null)));
return self__.history.setToken(new_token);
} else
{return null;
}
});})(owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
;
clustermap.components.filter.t29070.prototype.om$core$IRender$ = true;
clustermap.components.filter.t29070.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
;
clustermap.components.filter.t29070.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t29070.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__29077_29238 = cljs.core.seq.call(null,chs);var chunk__29078_29239 = null;var count__29079_29240 = (0);var i__29080_29241 = (0);while(true){
if((i__29080_29241 < count__29079_29240))
{var vec__29081_29242 = cljs.core._nth.call(null,chunk__29078_29239,i__29080_29241);var component_id_29243 = cljs.core.nth.call(null,vec__29081_29242,(0),null);var ch_29244 = cljs.core.nth.call(null,vec__29081_29242,(1),null);cljs.core.async.close_BANG_.call(null,ch_29244);
{
var G__29245 = seq__29077_29238;
var G__29246 = chunk__29078_29239;
var G__29247 = count__29079_29240;
var G__29248 = (i__29080_29241 + (1));
seq__29077_29238 = G__29245;
chunk__29078_29239 = G__29246;
count__29079_29240 = G__29247;
i__29080_29241 = G__29248;
continue;
}
} else
{var temp__4126__auto___29249 = cljs.core.seq.call(null,seq__29077_29238);if(temp__4126__auto___29249)
{var seq__29077_29250__$1 = temp__4126__auto___29249;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29077_29250__$1))
{var c__4408__auto___29251 = cljs.core.chunk_first.call(null,seq__29077_29250__$1);{
var G__29252 = cljs.core.chunk_rest.call(null,seq__29077_29250__$1);
var G__29253 = c__4408__auto___29251;
var G__29254 = cljs.core.count.call(null,c__4408__auto___29251);
var G__29255 = (0);
seq__29077_29238 = G__29252;
chunk__29078_29239 = G__29253;
count__29079_29240 = G__29254;
i__29080_29241 = G__29255;
continue;
}
} else
{var vec__29082_29256 = cljs.core.first.call(null,seq__29077_29250__$1);var component_id_29257 = cljs.core.nth.call(null,vec__29082_29256,(0),null);var ch_29258 = cljs.core.nth.call(null,vec__29082_29256,(1),null);cljs.core.async.close_BANG_.call(null,ch_29258);
{
var G__29259 = cljs.core.next.call(null,seq__29077_29250__$1);
var G__29260 = null;
var G__29261 = (0);
var G__29262 = (0);
seq__29077_29238 = G__29259;
chunk__29078_29239 = G__29260;
count__29079_29240 = G__29261;
i__29080_29241 = G__29262;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
;
clustermap.components.filter.t29070.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t29070.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function (state_29178){var state_val_29179 = (state_29178[(1)]);if((state_val_29179 === (7)))
{var inst_29169 = (state_29178[(2)]);var state_29178__$1 = state_29178;if(cljs.core.truth_(inst_29169))
{var statearr_29180_29263 = state_29178__$1;(statearr_29180_29263[(1)] = (25));
} else
{var statearr_29181_29264 = state_29178__$1;(statearr_29181_29264[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (20)))
{var inst_29139 = (state_29178[(7)]);var inst_29146 = (state_29178[(8)]);var inst_29130 = (state_29178[(9)]);var inst_29095 = (state_29178[(10)]);var inst_29088 = (state_29178[(11)]);var inst_29089 = (state_29178[(12)]);var inst_29139__$1 = cljs.core.first.call(null,inst_29130);var inst_29140 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29141 = cljs.core.get.call(null,inst_29089,inst_29139__$1);var inst_29142 = ["FILTER",inst_29088,inst_29139__$1,inst_29141];var inst_29143 = (new cljs.core.PersistentVector(null,4,(5),inst_29140,inst_29142,null));var inst_29144 = cljs.core.clj__GT_js.call(null,inst_29143);var inst_29145 = console.log(inst_29144);var inst_29146__$1 = cljs.core.get.call(null,inst_29095,inst_29139__$1);var state_29178__$1 = (function (){var statearr_29182 = state_29178;(statearr_29182[(7)] = inst_29139__$1);
(statearr_29182[(8)] = inst_29146__$1);
(statearr_29182[(13)] = inst_29145);
return statearr_29182;
})();if(cljs.core.truth_(inst_29146__$1))
{var statearr_29183_29265 = state_29178__$1;(statearr_29183_29265[(1)] = (22));
} else
{var statearr_29184_29266 = state_29178__$1;(statearr_29184_29266[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (27)))
{var inst_29174 = (state_29178[(2)]);var state_29178__$1 = state_29178;var statearr_29185_29267 = state_29178__$1;(statearr_29185_29267[(2)] = inst_29174);
(statearr_29185_29267[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (1)))
{var state_29178__$1 = state_29178;var statearr_29186_29268 = state_29178__$1;(statearr_29186_29268[(2)] = null);
(statearr_29186_29268[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (24)))
{var inst_29130 = (state_29178[(9)]);var inst_29155 = (state_29178[(2)]);var inst_29156 = cljs.core.next.call(null,inst_29130);var inst_29102 = inst_29156;var inst_29103 = null;var inst_29104 = (0);var inst_29105 = (0);var state_29178__$1 = (function (){var statearr_29190 = state_29178;(statearr_29190[(14)] = inst_29155);
(statearr_29190[(15)] = inst_29105);
(statearr_29190[(16)] = inst_29103);
(statearr_29190[(17)] = inst_29104);
(statearr_29190[(18)] = inst_29102);
return statearr_29190;
})();var statearr_29191_29269 = state_29178__$1;(statearr_29191_29269[(2)] = null);
(statearr_29191_29269[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (4)))
{var inst_29085 = (state_29178[(19)]);var inst_29085__$1 = (state_29178[(2)]);var state_29178__$1 = (function (){var statearr_29192 = state_29178;(statearr_29192[(19)] = inst_29085__$1);
return statearr_29192;
})();if(cljs.core.truth_(inst_29085__$1))
{var statearr_29193_29270 = state_29178__$1;(statearr_29193_29270[(1)] = (5));
} else
{var statearr_29194_29271 = state_29178__$1;(statearr_29194_29271[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (15)))
{var inst_29105 = (state_29178[(15)]);var inst_29103 = (state_29178[(16)]);var inst_29104 = (state_29178[(17)]);var inst_29102 = (state_29178[(18)]);var inst_29126 = (state_29178[(2)]);var inst_29127 = (inst_29105 + (1));var tmp29187 = inst_29103;var tmp29188 = inst_29104;var tmp29189 = inst_29102;var inst_29102__$1 = tmp29189;var inst_29103__$1 = tmp29187;var inst_29104__$1 = tmp29188;var inst_29105__$1 = inst_29127;var state_29178__$1 = (function (){var statearr_29195 = state_29178;(statearr_29195[(15)] = inst_29105__$1);
(statearr_29195[(20)] = inst_29126);
(statearr_29195[(16)] = inst_29103__$1);
(statearr_29195[(17)] = inst_29104__$1);
(statearr_29195[(18)] = inst_29102__$1);
return statearr_29195;
})();var statearr_29196_29272 = state_29178__$1;(statearr_29196_29272[(2)] = null);
(statearr_29196_29272[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (21)))
{var inst_29159 = (state_29178[(2)]);var state_29178__$1 = state_29178;var statearr_29197_29273 = state_29178__$1;(statearr_29197_29273[(2)] = inst_29159);
(statearr_29197_29273[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (13)))
{var inst_29110 = (state_29178[(21)]);var inst_29117 = (state_29178[(22)]);var inst_29089 = (state_29178[(12)]);var inst_29119 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29120 = cljs.core.get.call(null,inst_29089,inst_29110);var inst_29121 = [inst_29110,inst_29120];var inst_29122 = (new cljs.core.PersistentVector(null,2,(5),inst_29119,inst_29121,null));var inst_29123 = cljs.core.async.put_BANG_.call(null,inst_29117,inst_29122);var state_29178__$1 = state_29178;var statearr_29198_29274 = state_29178__$1;(statearr_29198_29274[(2)] = inst_29123);
(statearr_29198_29274[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (22)))
{var inst_29139 = (state_29178[(7)]);var inst_29146 = (state_29178[(8)]);var inst_29089 = (state_29178[(12)]);var inst_29148 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29149 = cljs.core.get.call(null,inst_29089,inst_29139);var inst_29150 = [inst_29139,inst_29149];var inst_29151 = (new cljs.core.PersistentVector(null,2,(5),inst_29148,inst_29150,null));var inst_29152 = cljs.core.async.put_BANG_.call(null,inst_29146,inst_29151);var state_29178__$1 = state_29178;var statearr_29199_29275 = state_29178__$1;(statearr_29199_29275[(2)] = inst_29152);
(statearr_29199_29275[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (6)))
{var state_29178__$1 = state_29178;var statearr_29200_29276 = state_29178__$1;(statearr_29200_29276[(2)] = null);
(statearr_29200_29276[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (25)))
{var state_29178__$1 = state_29178;var statearr_29201_29277 = state_29178__$1;(statearr_29201_29277[(2)] = null);
(statearr_29201_29277[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (17)))
{var state_29178__$1 = state_29178;var statearr_29202_29278 = state_29178__$1;(statearr_29202_29278[(2)] = null);
(statearr_29202_29278[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (3)))
{var inst_29176 = (state_29178[(2)]);var state_29178__$1 = state_29178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29178__$1,inst_29176);
} else
{if((state_val_29179 === (12)))
{var inst_29164 = (state_29178[(2)]);var state_29178__$1 = state_29178;var statearr_29203_29279 = state_29178__$1;(statearr_29203_29279[(2)] = inst_29164);
(statearr_29203_29279[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (2)))
{var state_29178__$1 = state_29178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29178__$1,(4),filter_rq_sub);
} else
{if((state_val_29179 === (23)))
{var state_29178__$1 = state_29178;var statearr_29204_29280 = state_29178__$1;(statearr_29204_29280[(2)] = null);
(statearr_29204_29280[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (19)))
{var inst_29130 = (state_29178[(9)]);var inst_29134 = cljs.core.chunk_first.call(null,inst_29130);var inst_29135 = cljs.core.chunk_rest.call(null,inst_29130);var inst_29136 = cljs.core.count.call(null,inst_29134);var inst_29102 = inst_29135;var inst_29103 = inst_29134;var inst_29104 = inst_29136;var inst_29105 = (0);var state_29178__$1 = (function (){var statearr_29205 = state_29178;(statearr_29205[(15)] = inst_29105);
(statearr_29205[(16)] = inst_29103);
(statearr_29205[(17)] = inst_29104);
(statearr_29205[(18)] = inst_29102);
return statearr_29205;
})();var statearr_29206_29281 = state_29178__$1;(statearr_29206_29281[(2)] = null);
(statearr_29206_29281[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (11)))
{var inst_29130 = (state_29178[(9)]);var inst_29102 = (state_29178[(18)]);var inst_29130__$1 = cljs.core.seq.call(null,inst_29102);var state_29178__$1 = (function (){var statearr_29207 = state_29178;(statearr_29207[(9)] = inst_29130__$1);
return statearr_29207;
})();if(inst_29130__$1)
{var statearr_29208_29282 = state_29178__$1;(statearr_29208_29282[(1)] = (16));
} else
{var statearr_29209_29283 = state_29178__$1;(statearr_29209_29283[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (9)))
{var inst_29166 = (state_29178[(2)]);var state_29178__$1 = (function (){var statearr_29210 = state_29178;(statearr_29210[(23)] = inst_29166);
return statearr_29210;
})();var statearr_29211_29284 = state_29178__$1;(statearr_29211_29284[(2)] = true);
(statearr_29211_29284[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (5)))
{var inst_29085 = (state_29178[(19)]);var inst_29088 = (state_29178[(11)]);var inst_29089 = (state_29178[(12)]);var inst_29088__$1 = cljs.core.nth.call(null,inst_29085,(0),null);var inst_29089__$1 = cljs.core.nth.call(null,inst_29085,(1),null);var inst_29090 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29091 = ["FILTER-RQ",inst_29088__$1,inst_29089__$1];var inst_29092 = (new cljs.core.PersistentVector(null,3,(5),inst_29090,inst_29091,null));var inst_29093 = cljs.core.clj__GT_js.call(null,inst_29092);var inst_29094 = console.log(inst_29093);var inst_29095 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_29096 = cljs.core.keys.call(null,inst_29089__$1);var inst_29101 = cljs.core.seq.call(null,inst_29096);var inst_29102 = inst_29101;var inst_29103 = null;var inst_29104 = (0);var inst_29105 = (0);var state_29178__$1 = (function (){var statearr_29212 = state_29178;(statearr_29212[(15)] = inst_29105);
(statearr_29212[(24)] = inst_29094);
(statearr_29212[(16)] = inst_29103);
(statearr_29212[(17)] = inst_29104);
(statearr_29212[(10)] = inst_29095);
(statearr_29212[(11)] = inst_29088__$1);
(statearr_29212[(12)] = inst_29089__$1);
(statearr_29212[(18)] = inst_29102);
return statearr_29212;
})();var statearr_29213_29285 = state_29178__$1;(statearr_29213_29285[(2)] = null);
(statearr_29213_29285[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (14)))
{var state_29178__$1 = state_29178;var statearr_29214_29286 = state_29178__$1;(statearr_29214_29286[(2)] = null);
(statearr_29214_29286[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (26)))
{var state_29178__$1 = state_29178;var statearr_29215_29287 = state_29178__$1;(statearr_29215_29287[(2)] = null);
(statearr_29215_29287[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (16)))
{var inst_29130 = (state_29178[(9)]);var inst_29132 = cljs.core.chunked_seq_QMARK_.call(null,inst_29130);var state_29178__$1 = state_29178;if(inst_29132)
{var statearr_29216_29288 = state_29178__$1;(statearr_29216_29288[(1)] = (19));
} else
{var statearr_29217_29289 = state_29178__$1;(statearr_29217_29289[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (10)))
{var inst_29105 = (state_29178[(15)]);var inst_29110 = (state_29178[(21)]);var inst_29103 = (state_29178[(16)]);var inst_29117 = (state_29178[(22)]);var inst_29095 = (state_29178[(10)]);var inst_29088 = (state_29178[(11)]);var inst_29089 = (state_29178[(12)]);var inst_29110__$1 = cljs.core._nth.call(null,inst_29103,inst_29105);var inst_29111 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29112 = cljs.core.get.call(null,inst_29089,inst_29110__$1);var inst_29113 = ["FILTER",inst_29088,inst_29110__$1,inst_29112];var inst_29114 = (new cljs.core.PersistentVector(null,4,(5),inst_29111,inst_29113,null));var inst_29115 = cljs.core.clj__GT_js.call(null,inst_29114);var inst_29116 = console.log(inst_29115);var inst_29117__$1 = cljs.core.get.call(null,inst_29095,inst_29110__$1);var state_29178__$1 = (function (){var statearr_29218 = state_29178;(statearr_29218[(25)] = inst_29116);
(statearr_29218[(21)] = inst_29110__$1);
(statearr_29218[(22)] = inst_29117__$1);
return statearr_29218;
})();if(cljs.core.truth_(inst_29117__$1))
{var statearr_29219_29290 = state_29178__$1;(statearr_29219_29290[(1)] = (13));
} else
{var statearr_29220_29291 = state_29178__$1;(statearr_29220_29291[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (18)))
{var inst_29162 = (state_29178[(2)]);var state_29178__$1 = state_29178;var statearr_29221_29292 = state_29178__$1;(statearr_29221_29292[(2)] = inst_29162);
(statearr_29221_29292[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (8)))
{var inst_29105 = (state_29178[(15)]);var inst_29104 = (state_29178[(17)]);var inst_29107 = (inst_29105 < inst_29104);var inst_29108 = inst_29107;var state_29178__$1 = state_29178;if(cljs.core.truth_(inst_29108))
{var statearr_29222_29293 = state_29178__$1;(statearr_29222_29293[(1)] = (10));
} else
{var statearr_29223_29294 = state_29178__$1;(statearr_29223_29294[(1)] = (11));
}
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
}
});})(c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
;return ((function (switch__11461__auto__,c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29227[(0)] = state_machine__11462__auto__);
(statearr_29227[(1)] = (1));
return statearr_29227;
});
var state_machine__11462__auto____1 = (function (state_29178){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29178);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29228){if((e29228 instanceof Object))
{var ex__11465__auto__ = e29228;var statearr_29229_29295 = state_29178;(statearr_29229_29295[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29178);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29228;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29296 = state_29178;
state_29178 = G__29296;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29178){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
})();var state__11519__auto__ = (function (){var statearr_29230 = f__11518__auto__.call(null);(statearr_29230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
);
return c__11517__auto__;
});})(owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
;
clustermap.components.filter.t29070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function (_29072){var self__ = this;
var _29072__$1 = this;return self__.meta29071;
});})(owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
;
clustermap.components.filter.t29070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function (_29072,meta29071__$1){var self__ = this;
var _29072__$1 = this;return (new clustermap.components.filter.t29070(self__.output_checker28907,self__.input_schema28905,self__.input_checker28906,self__.owner,self__.G__28908,self__.component_specs,self__.filter_spec,self__.constructor28899,self__.history,self__.map28903,self__.map28901,self__.components,self__.validate__6034__auto__,self__.map28902,self__.id,self__.output_schema28904,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta29071__$1));
});})(owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
;
clustermap.components.filter.__GT_t29070 = ((function (owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907){
return (function __GT_t29070(output_checker28907__$1,input_schema28905__$1,input_checker28906__$1,owner__$1,G__28908__$1,component_specs__$1,filter_spec__$1,constructor28899__$1,history__$1,map28903__$1,map28901__$1,components__$1,validate__6034__auto____$1,map28902__$1,id__$1,output_schema28904__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta29071){return (new clustermap.components.filter.t29070(output_checker28907__$1,input_schema28905__$1,input_checker28906__$1,owner__$1,G__28908__$1,component_specs__$1,filter_spec__$1,constructor28899__$1,history__$1,map28903__$1,map28901__$1,components__$1,validate__6034__auto____$1,map28902__$1,id__$1,output_schema28904__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta29071));
});})(owner,history,filter_rq_pub,map28902,url_components,components,component_specs,id,filter_spec,map28903,validate__6034__auto__,ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
;
}
return (new clustermap.components.filter.t29070(output_checker28907,input_schema28905,input_checker28906,owner,G__28908,component_specs,filter_spec,constructor28899,history,map28903,map28901,components,validate__6034__auto__,map28902,id,output_schema28904,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29297 = output_checker28907.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29297))
{var error__6036__auto___29298 = temp__4126__auto___29297;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28899","constructor28899",-631297871,null),cljs.core.pr_str.call(null,error__6036__auto___29298)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29298,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28904,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28904,input_schema28905,input_checker28906,output_checker28907))
,schema.core.make_fn_schema.call(null,output_schema28904,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28905], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___29234){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner28898,p__29231){var vec__29233 = p__29231;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29233,(0),null);return component_fnk__7881__auto___29234.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28898),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28898,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner28898,var_args){
var p__29231 = null;if (arguments.length > 2) {
  p__29231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner28898,p__29231);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__29299){
var data__7882__auto__ = cljs.core.first(arglist__29299);
arglist__29299 = cljs.core.next(arglist__29299);
var owner28898 = cljs.core.first(arglist__29299);
var p__29231 = cljs.core.rest(arglist__29299);
return filter_component__delegate(data__7882__auto__,owner28898,p__29231);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___29234))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m28900){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m28900);
});
__GT_filter_component = function(cursor__7850__auto__,m28900){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m28900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
