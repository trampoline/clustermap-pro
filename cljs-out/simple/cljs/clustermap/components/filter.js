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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29691){var map__29693 = p__29691;var map__29693__$1 = ((cljs.core.seq_QMARK_.call(null,map__29693))?cljs.core.apply.call(null,cljs.core.hash_map,map__29693):map__29693);var filter_spec = map__29693__$1;var component_descrs = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29693__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29694){var map__29696 = p__29694;var map__29696__$1 = ((cljs.core.seq_QMARK_.call(null,map__29696))?cljs.core.apply.call(null,cljs.core.hash_map,map__29696):map__29696);var filter_spec = map__29696__$1;var component_descrs = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29696__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29697,component_filter_rq_chan){var map__29702 = p__29697;var map__29702__$1 = ((cljs.core.seq_QMARK_.call(null,map__29702))?cljs.core.apply.call(null,cljs.core.hash_map,map__29702):map__29702);var component_spec = map__29702__$1;var type = cljs.core.get.call(null,map__29702__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29703 = cljs.core._EQ_;var expr__29704 = type;if(cljs.core.truth_(pred__29703.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29704)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29703.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29704)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29703.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29704)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29703.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29704)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29703.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29704)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29704))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29706,component_filter_rq_chan){var map__29708 = p__29706;var map__29708__$1 = ((cljs.core.seq_QMARK_.call(null,map__29708))?cljs.core.apply.call(null,cljs.core.hash_map,map__29708):map__29708);var component_spec = map__29708__$1;var visible = cljs.core.get.call(null,map__29708__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29708__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29708__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29708__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29710 = schema.core.Any;var input_schema29711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29709","map29709",-1227803182,null))], null);var input_checker29712 = schema.core.checker.call(null,input_schema29711);var output_checker29713 = schema.core.checker.call(null,output_schema29710);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29710,input_schema29711,input_checker29712,output_checker29713){
return (function render_STAR_(G__29714){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29731 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29714], null);var temp__4126__auto___29732 = input_checker29712.call(null,args__6035__auto___29731);if(cljs.core.truth_(temp__4126__auto___29732))
{var error__6036__auto___29733 = temp__4126__auto___29732;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29733)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29733,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29731,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29711,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29709 = G__29714;while(true){
if(cljs.core.map_QMARK_.call(null,map29709))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29709)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29709,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29709,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29709,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29710,input_schema29711,input_checker29712,output_checker29713){
return (function iter__29723(s__29724){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29710,input_schema29711,input_checker29712,output_checker29713){
return (function (){var s__29724__$1 = s__29724;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29724__$1);if(temp__4126__auto__)
{var s__29724__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29724__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29724__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29726 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29725 = (0);while(true){
if((i__29725 < size__4376__auto__))
{var map__29729 = cljs.core._nth.call(null,c__4375__auto__,i__29725);var map__29729__$1 = ((cljs.core.seq_QMARK_.call(null,map__29729))?cljs.core.apply.call(null,cljs.core.hash_map,map__29729):map__29729);var component_spec = map__29729__$1;var id = cljs.core.get.call(null,map__29729__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29726,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29734 = (i__29725 + (1));
i__29725 = G__29734;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29726),iter__29723.call(null,cljs.core.chunk_rest.call(null,s__29724__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29726),null);
}
} else
{var map__29730 = cljs.core.first.call(null,s__29724__$2);var map__29730__$1 = ((cljs.core.seq_QMARK_.call(null,map__29730))?cljs.core.apply.call(null,cljs.core.hash_map,map__29730):map__29730);var component_spec = map__29730__$1;var id = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29723.call(null,cljs.core.rest.call(null,s__29724__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29710,input_schema29711,input_checker29712,output_checker29713))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29710,input_schema29711,input_checker29712,output_checker29713))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29735 = output_checker29713.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29735))
{var error__6036__auto___29736 = temp__4126__auto___29735;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29736)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29736,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29710,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29710,input_schema29711,input_checker29712,output_checker29713))
,schema.core.make_fn_schema.call(null,output_schema29710,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29711], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30073 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29743 = schema.core.Any;var input_schema29744 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29740","map29740",853367104,null))], null);var input_checker29745 = schema.core.checker.call(null,input_schema29744);var output_checker29746 = schema.core.checker.call(null,output_schema29743);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function constructor29738(G__29747){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29747], null);var temp__4126__auto___30075 = input_checker29745.call(null,args__6035__auto___30074);if(cljs.core.truth_(temp__4126__auto___30075))
{var error__6036__auto___30076 = temp__4126__auto___30075;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29738","constructor29738",884285526,null),cljs.core.pr_str.call(null,error__6036__auto___30076)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30076,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30074,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29744,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29740 = G__29747;while(true){
if(cljs.core.map_QMARK_.call(null,map29740))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29740)));
}
var map29742 = plumbing.fnk.schema.safe_get.call(null,map29740,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29742,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29741 = plumbing.fnk.schema.safe_get.call(null,map29740,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29741,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29741,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29740,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t29909 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t29909 = (function (map29740,output_schema29743,G__29747,owner,output_checker29746,component_specs,filter_spec,input_checker29745,history,constructor29738,map29742,components,input_schema29744,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,map29741,meta29910){
this.map29740 = map29740;
this.output_schema29743 = output_schema29743;
this.G__29747 = G__29747;
this.owner = owner;
this.output_checker29746 = output_checker29746;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.input_checker29745 = input_checker29745;
this.history = history;
this.constructor29738 = constructor29738;
this.map29742 = map29742;
this.components = components;
this.input_schema29744 = input_schema29744;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.map29741 = map29741;
this.meta29910 = meta29910;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t29909.cljs$lang$type = true;
clustermap.components.filter.t29909.cljs$lang$ctorStr = "clustermap.components.filter/t29909";
clustermap.components.filter.t29909.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t29909");
});})(owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
;
clustermap.components.filter.t29909.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t29909.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
;
clustermap.components.filter.t29909.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t29909.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function (_,p__29912,___$1){var self__ = this;
var map__29913 = p__29912;var map__29913__$1 = ((cljs.core.seq_QMARK_.call(null,map__29913))?cljs.core.apply.call(null,cljs.core.hash_map,map__29913):map__29913);var next_props = map__29913__$1;var map__29914 = cljs.core.get.call(null,map__29913__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__29914__$1 = ((cljs.core.seq_QMARK_.call(null,map__29914))?cljs.core.apply.call(null,cljs.core.hash_map,map__29914):map__29914);var next_filter_spec = map__29914__$1;var map__29915 = cljs.core.get.call(null,map__29914__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__29915__$1 = ((cljs.core.seq_QMARK_.call(null,map__29915))?cljs.core.apply.call(null,cljs.core.hash_map,map__29915):map__29915);var next_url_components = map__29915__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
;
clustermap.components.filter.t29909.prototype.om$core$IRender$ = true;
clustermap.components.filter.t29909.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
;
clustermap.components.filter.t29909.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t29909.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__29916_30077 = cljs.core.seq.call(null,chs);var chunk__29917_30078 = null;var count__29918_30079 = (0);var i__29919_30080 = (0);while(true){
if((i__29919_30080 < count__29918_30079))
{var vec__29920_30081 = cljs.core._nth.call(null,chunk__29917_30078,i__29919_30080);var component_id_30082 = cljs.core.nth.call(null,vec__29920_30081,(0),null);var ch_30083 = cljs.core.nth.call(null,vec__29920_30081,(1),null);cljs.core.async.close_BANG_.call(null,ch_30083);
{
var G__30084 = seq__29916_30077;
var G__30085 = chunk__29917_30078;
var G__30086 = count__29918_30079;
var G__30087 = (i__29919_30080 + (1));
seq__29916_30077 = G__30084;
chunk__29917_30078 = G__30085;
count__29918_30079 = G__30086;
i__29919_30080 = G__30087;
continue;
}
} else
{var temp__4126__auto___30088 = cljs.core.seq.call(null,seq__29916_30077);if(temp__4126__auto___30088)
{var seq__29916_30089__$1 = temp__4126__auto___30088;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29916_30089__$1))
{var c__4408__auto___30090 = cljs.core.chunk_first.call(null,seq__29916_30089__$1);{
var G__30091 = cljs.core.chunk_rest.call(null,seq__29916_30089__$1);
var G__30092 = c__4408__auto___30090;
var G__30093 = cljs.core.count.call(null,c__4408__auto___30090);
var G__30094 = (0);
seq__29916_30077 = G__30091;
chunk__29917_30078 = G__30092;
count__29918_30079 = G__30093;
i__29919_30080 = G__30094;
continue;
}
} else
{var vec__29921_30095 = cljs.core.first.call(null,seq__29916_30089__$1);var component_id_30096 = cljs.core.nth.call(null,vec__29921_30095,(0),null);var ch_30097 = cljs.core.nth.call(null,vec__29921_30095,(1),null);cljs.core.async.close_BANG_.call(null,ch_30097);
{
var G__30098 = cljs.core.next.call(null,seq__29916_30089__$1);
var G__30099 = null;
var G__30100 = (0);
var G__30101 = (0);
seq__29916_30077 = G__30098;
chunk__29917_30078 = G__30099;
count__29918_30079 = G__30100;
i__29919_30080 = G__30101;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
;
clustermap.components.filter.t29909.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t29909.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function (state_30017){var state_val_30018 = (state_30017[(1)]);if((state_val_30018 === (7)))
{var inst_30008 = (state_30017[(2)]);var state_30017__$1 = state_30017;if(cljs.core.truth_(inst_30008))
{var statearr_30019_30102 = state_30017__$1;(statearr_30019_30102[(1)] = (25));
} else
{var statearr_30020_30103 = state_30017__$1;(statearr_30020_30103[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (20)))
{var inst_29927 = (state_30017[(7)]);var inst_29928 = (state_30017[(8)]);var inst_29978 = (state_30017[(9)]);var inst_29934 = (state_30017[(10)]);var inst_29969 = (state_30017[(11)]);var inst_29985 = (state_30017[(12)]);var inst_29978__$1 = cljs.core.first.call(null,inst_29969);var inst_29979 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29980 = cljs.core.get.call(null,inst_29928,inst_29978__$1);var inst_29981 = ["FILTER",inst_29927,inst_29978__$1,inst_29980];var inst_29982 = (new cljs.core.PersistentVector(null,4,(5),inst_29979,inst_29981,null));var inst_29983 = cljs.core.clj__GT_js.call(null,inst_29982);var inst_29984 = console.log(inst_29983);var inst_29985__$1 = cljs.core.get.call(null,inst_29934,inst_29978__$1);var state_30017__$1 = (function (){var statearr_30021 = state_30017;(statearr_30021[(9)] = inst_29978__$1);
(statearr_30021[(12)] = inst_29985__$1);
(statearr_30021[(13)] = inst_29984);
return statearr_30021;
})();if(cljs.core.truth_(inst_29985__$1))
{var statearr_30022_30104 = state_30017__$1;(statearr_30022_30104[(1)] = (22));
} else
{var statearr_30023_30105 = state_30017__$1;(statearr_30023_30105[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (27)))
{var inst_30013 = (state_30017[(2)]);var state_30017__$1 = state_30017;var statearr_30024_30106 = state_30017__$1;(statearr_30024_30106[(2)] = inst_30013);
(statearr_30024_30106[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (1)))
{var state_30017__$1 = state_30017;var statearr_30025_30107 = state_30017__$1;(statearr_30025_30107[(2)] = null);
(statearr_30025_30107[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (24)))
{var inst_29969 = (state_30017[(11)]);var inst_29994 = (state_30017[(2)]);var inst_29995 = cljs.core.next.call(null,inst_29969);var inst_29941 = inst_29995;var inst_29942 = null;var inst_29943 = (0);var inst_29944 = (0);var state_30017__$1 = (function (){var statearr_30029 = state_30017;(statearr_30029[(14)] = inst_29994);
(statearr_30029[(15)] = inst_29941);
(statearr_30029[(16)] = inst_29944);
(statearr_30029[(17)] = inst_29942);
(statearr_30029[(18)] = inst_29943);
return statearr_30029;
})();var statearr_30030_30108 = state_30017__$1;(statearr_30030_30108[(2)] = null);
(statearr_30030_30108[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (4)))
{var inst_29924 = (state_30017[(19)]);var inst_29924__$1 = (state_30017[(2)]);var state_30017__$1 = (function (){var statearr_30031 = state_30017;(statearr_30031[(19)] = inst_29924__$1);
return statearr_30031;
})();if(cljs.core.truth_(inst_29924__$1))
{var statearr_30032_30109 = state_30017__$1;(statearr_30032_30109[(1)] = (5));
} else
{var statearr_30033_30110 = state_30017__$1;(statearr_30033_30110[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (15)))
{var inst_29941 = (state_30017[(15)]);var inst_29944 = (state_30017[(16)]);var inst_29942 = (state_30017[(17)]);var inst_29943 = (state_30017[(18)]);var inst_29965 = (state_30017[(2)]);var inst_29966 = (inst_29944 + (1));var tmp30026 = inst_29941;var tmp30027 = inst_29942;var tmp30028 = inst_29943;var inst_29941__$1 = tmp30026;var inst_29942__$1 = tmp30027;var inst_29943__$1 = tmp30028;var inst_29944__$1 = inst_29966;var state_30017__$1 = (function (){var statearr_30034 = state_30017;(statearr_30034[(15)] = inst_29941__$1);
(statearr_30034[(16)] = inst_29944__$1);
(statearr_30034[(17)] = inst_29942__$1);
(statearr_30034[(18)] = inst_29943__$1);
(statearr_30034[(20)] = inst_29965);
return statearr_30034;
})();var statearr_30035_30111 = state_30017__$1;(statearr_30035_30111[(2)] = null);
(statearr_30035_30111[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (21)))
{var inst_29998 = (state_30017[(2)]);var state_30017__$1 = state_30017;var statearr_30036_30112 = state_30017__$1;(statearr_30036_30112[(2)] = inst_29998);
(statearr_30036_30112[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (13)))
{var inst_29956 = (state_30017[(21)]);var inst_29928 = (state_30017[(8)]);var inst_29949 = (state_30017[(22)]);var inst_29958 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29959 = cljs.core.get.call(null,inst_29928,inst_29949);var inst_29960 = [inst_29949,inst_29959];var inst_29961 = (new cljs.core.PersistentVector(null,2,(5),inst_29958,inst_29960,null));var inst_29962 = cljs.core.async.put_BANG_.call(null,inst_29956,inst_29961);var state_30017__$1 = state_30017;var statearr_30037_30113 = state_30017__$1;(statearr_30037_30113[(2)] = inst_29962);
(statearr_30037_30113[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (22)))
{var inst_29928 = (state_30017[(8)]);var inst_29978 = (state_30017[(9)]);var inst_29985 = (state_30017[(12)]);var inst_29987 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29988 = cljs.core.get.call(null,inst_29928,inst_29978);var inst_29989 = [inst_29978,inst_29988];var inst_29990 = (new cljs.core.PersistentVector(null,2,(5),inst_29987,inst_29989,null));var inst_29991 = cljs.core.async.put_BANG_.call(null,inst_29985,inst_29990);var state_30017__$1 = state_30017;var statearr_30038_30114 = state_30017__$1;(statearr_30038_30114[(2)] = inst_29991);
(statearr_30038_30114[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (6)))
{var state_30017__$1 = state_30017;var statearr_30039_30115 = state_30017__$1;(statearr_30039_30115[(2)] = null);
(statearr_30039_30115[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (25)))
{var state_30017__$1 = state_30017;var statearr_30040_30116 = state_30017__$1;(statearr_30040_30116[(2)] = null);
(statearr_30040_30116[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (17)))
{var state_30017__$1 = state_30017;var statearr_30041_30117 = state_30017__$1;(statearr_30041_30117[(2)] = null);
(statearr_30041_30117[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (3)))
{var inst_30015 = (state_30017[(2)]);var state_30017__$1 = state_30017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30017__$1,inst_30015);
} else
{if((state_val_30018 === (12)))
{var inst_30003 = (state_30017[(2)]);var state_30017__$1 = state_30017;var statearr_30042_30118 = state_30017__$1;(statearr_30042_30118[(2)] = inst_30003);
(statearr_30042_30118[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (2)))
{var state_30017__$1 = state_30017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30017__$1,(4),filter_rq_sub);
} else
{if((state_val_30018 === (23)))
{var state_30017__$1 = state_30017;var statearr_30043_30119 = state_30017__$1;(statearr_30043_30119[(2)] = null);
(statearr_30043_30119[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (19)))
{var inst_29969 = (state_30017[(11)]);var inst_29973 = cljs.core.chunk_first.call(null,inst_29969);var inst_29974 = cljs.core.chunk_rest.call(null,inst_29969);var inst_29975 = cljs.core.count.call(null,inst_29973);var inst_29941 = inst_29974;var inst_29942 = inst_29973;var inst_29943 = inst_29975;var inst_29944 = (0);var state_30017__$1 = (function (){var statearr_30044 = state_30017;(statearr_30044[(15)] = inst_29941);
(statearr_30044[(16)] = inst_29944);
(statearr_30044[(17)] = inst_29942);
(statearr_30044[(18)] = inst_29943);
return statearr_30044;
})();var statearr_30045_30120 = state_30017__$1;(statearr_30045_30120[(2)] = null);
(statearr_30045_30120[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (11)))
{var inst_29941 = (state_30017[(15)]);var inst_29969 = (state_30017[(11)]);var inst_29969__$1 = cljs.core.seq.call(null,inst_29941);var state_30017__$1 = (function (){var statearr_30046 = state_30017;(statearr_30046[(11)] = inst_29969__$1);
return statearr_30046;
})();if(inst_29969__$1)
{var statearr_30047_30121 = state_30017__$1;(statearr_30047_30121[(1)] = (16));
} else
{var statearr_30048_30122 = state_30017__$1;(statearr_30048_30122[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (9)))
{var inst_30005 = (state_30017[(2)]);var state_30017__$1 = (function (){var statearr_30049 = state_30017;(statearr_30049[(23)] = inst_30005);
return statearr_30049;
})();var statearr_30050_30123 = state_30017__$1;(statearr_30050_30123[(2)] = true);
(statearr_30050_30123[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (5)))
{var inst_29927 = (state_30017[(7)]);var inst_29928 = (state_30017[(8)]);var inst_29924 = (state_30017[(19)]);var inst_29927__$1 = cljs.core.nth.call(null,inst_29924,(0),null);var inst_29928__$1 = cljs.core.nth.call(null,inst_29924,(1),null);var inst_29929 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29930 = ["FILTER-RQ",inst_29927__$1,inst_29928__$1];var inst_29931 = (new cljs.core.PersistentVector(null,3,(5),inst_29929,inst_29930,null));var inst_29932 = cljs.core.clj__GT_js.call(null,inst_29931);var inst_29933 = console.log(inst_29932);var inst_29934 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_29935 = cljs.core.keys.call(null,inst_29928__$1);var inst_29940 = cljs.core.seq.call(null,inst_29935);var inst_29941 = inst_29940;var inst_29942 = null;var inst_29943 = (0);var inst_29944 = (0);var state_30017__$1 = (function (){var statearr_30051 = state_30017;(statearr_30051[(7)] = inst_29927__$1);
(statearr_30051[(15)] = inst_29941);
(statearr_30051[(16)] = inst_29944);
(statearr_30051[(17)] = inst_29942);
(statearr_30051[(8)] = inst_29928__$1);
(statearr_30051[(10)] = inst_29934);
(statearr_30051[(18)] = inst_29943);
(statearr_30051[(24)] = inst_29933);
return statearr_30051;
})();var statearr_30052_30124 = state_30017__$1;(statearr_30052_30124[(2)] = null);
(statearr_30052_30124[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (14)))
{var state_30017__$1 = state_30017;var statearr_30053_30125 = state_30017__$1;(statearr_30053_30125[(2)] = null);
(statearr_30053_30125[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (26)))
{var state_30017__$1 = state_30017;var statearr_30054_30126 = state_30017__$1;(statearr_30054_30126[(2)] = null);
(statearr_30054_30126[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (16)))
{var inst_29969 = (state_30017[(11)]);var inst_29971 = cljs.core.chunked_seq_QMARK_.call(null,inst_29969);var state_30017__$1 = state_30017;if(inst_29971)
{var statearr_30055_30127 = state_30017__$1;(statearr_30055_30127[(1)] = (19));
} else
{var statearr_30056_30128 = state_30017__$1;(statearr_30056_30128[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (10)))
{var inst_29927 = (state_30017[(7)]);var inst_29944 = (state_30017[(16)]);var inst_29956 = (state_30017[(21)]);var inst_29942 = (state_30017[(17)]);var inst_29928 = (state_30017[(8)]);var inst_29934 = (state_30017[(10)]);var inst_29949 = (state_30017[(22)]);var inst_29949__$1 = cljs.core._nth.call(null,inst_29942,inst_29944);var inst_29950 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29951 = cljs.core.get.call(null,inst_29928,inst_29949__$1);var inst_29952 = ["FILTER",inst_29927,inst_29949__$1,inst_29951];var inst_29953 = (new cljs.core.PersistentVector(null,4,(5),inst_29950,inst_29952,null));var inst_29954 = cljs.core.clj__GT_js.call(null,inst_29953);var inst_29955 = console.log(inst_29954);var inst_29956__$1 = cljs.core.get.call(null,inst_29934,inst_29949__$1);var state_30017__$1 = (function (){var statearr_30057 = state_30017;(statearr_30057[(25)] = inst_29955);
(statearr_30057[(21)] = inst_29956__$1);
(statearr_30057[(22)] = inst_29949__$1);
return statearr_30057;
})();if(cljs.core.truth_(inst_29956__$1))
{var statearr_30058_30129 = state_30017__$1;(statearr_30058_30129[(1)] = (13));
} else
{var statearr_30059_30130 = state_30017__$1;(statearr_30059_30130[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (18)))
{var inst_30001 = (state_30017[(2)]);var state_30017__$1 = state_30017;var statearr_30060_30131 = state_30017__$1;(statearr_30060_30131[(2)] = inst_30001);
(statearr_30060_30131[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30018 === (8)))
{var inst_29944 = (state_30017[(16)]);var inst_29943 = (state_30017[(18)]);var inst_29946 = (inst_29944 < inst_29943);var inst_29947 = inst_29946;var state_30017__$1 = state_30017;if(cljs.core.truth_(inst_29947))
{var statearr_30061_30132 = state_30017__$1;(statearr_30061_30132[(1)] = (10));
} else
{var statearr_30062_30133 = state_30017__$1;(statearr_30062_30133[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30066[(0)] = state_machine__9111__auto__);
(statearr_30066[(1)] = (1));
return statearr_30066;
});
var state_machine__9111__auto____1 = (function (state_30017){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30017);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30067){if((e30067 instanceof Object))
{var ex__9114__auto__ = e30067;var statearr_30068_30134 = state_30017;(statearr_30068_30134[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30017);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30067;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30135 = state_30017;
state_30017 = G__30135;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30017){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
})();var state__9127__auto__ = (function (){var statearr_30069 = f__9126__auto__.call(null);(statearr_30069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
;
clustermap.components.filter.t29909.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function (_29911){var self__ = this;
var _29911__$1 = this;return self__.meta29910;
});})(owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
;
clustermap.components.filter.t29909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function (_29911,meta29910__$1){var self__ = this;
var _29911__$1 = this;return (new clustermap.components.filter.t29909(self__.map29740,self__.output_schema29743,self__.G__29747,self__.owner,self__.output_checker29746,self__.component_specs,self__.filter_spec,self__.input_checker29745,self__.history,self__.constructor29738,self__.map29742,self__.components,self__.input_schema29744,self__.validate__6034__auto__,self__.id,self__.filter_rq_pub,self__.ufv__,self__.url_components,self__.map29741,meta29910__$1));
});})(owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
;
clustermap.components.filter.__GT_t29909 = ((function (owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746){
return (function __GT_t29909(map29740__$1,output_schema29743__$1,G__29747__$1,owner__$1,output_checker29746__$1,component_specs__$1,filter_spec__$1,input_checker29745__$1,history__$1,constructor29738__$1,map29742__$1,components__$1,input_schema29744__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,map29741__$1,meta29910){return (new clustermap.components.filter.t29909(map29740__$1,output_schema29743__$1,G__29747__$1,owner__$1,output_checker29746__$1,component_specs__$1,filter_spec__$1,input_checker29745__$1,history__$1,constructor29738__$1,map29742__$1,components__$1,input_schema29744__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,map29741__$1,meta29910));
});})(owner,history,filter_rq_pub,map29741,url_components,components,component_specs,id,filter_spec,map29742,validate__6034__auto__,ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
;
}
return (new clustermap.components.filter.t29909(map29740,output_schema29743,G__29747,owner,output_checker29746,component_specs,filter_spec,input_checker29745,history,constructor29738,map29742,components,input_schema29744,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,map29741,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30136 = output_checker29746.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30136))
{var error__6036__auto___30137 = temp__4126__auto___30136;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29738","constructor29738",884285526,null),cljs.core.pr_str.call(null,error__6036__auto___30137)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30137,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29743,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29743,input_schema29744,input_checker29745,output_checker29746))
,schema.core.make_fn_schema.call(null,output_schema29743,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29744], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30073){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29737,p__30070){var vec__30072 = p__30070;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30072,(0),null);return component_fnk__7881__auto___30073.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29737),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29737,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29737,var_args){
var p__30070 = null;if (arguments.length > 2) {
  p__30070 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29737,p__30070);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30138){
var data__7882__auto__ = cljs.core.first(arglist__30138);
arglist__30138 = cljs.core.next(arglist__30138);
var owner29737 = cljs.core.first(arglist__30138);
var p__30070 = cljs.core.rest(arglist__30138);
return filter_component__delegate(data__7882__auto__,owner29737,p__30070);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30073))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29739){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29739);
});
__GT_filter_component = function(cursor__7850__auto__,m29739){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
