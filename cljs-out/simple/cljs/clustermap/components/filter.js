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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29705){var map__29707 = p__29705;var map__29707__$1 = ((cljs.core.seq_QMARK_.call(null,map__29707))?cljs.core.apply.call(null,cljs.core.hash_map,map__29707):map__29707);var filter_spec = map__29707__$1;var component_descrs = cljs.core.get.call(null,map__29707__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29707__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29707__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29708){var map__29710 = p__29708;var map__29710__$1 = ((cljs.core.seq_QMARK_.call(null,map__29710))?cljs.core.apply.call(null,cljs.core.hash_map,map__29710):map__29710);var filter_spec = map__29710__$1;var component_descrs = cljs.core.get.call(null,map__29710__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29710__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29710__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29711,component_filter_rq_chan){var map__29716 = p__29711;var map__29716__$1 = ((cljs.core.seq_QMARK_.call(null,map__29716))?cljs.core.apply.call(null,cljs.core.hash_map,map__29716):map__29716);var component_spec = map__29716__$1;var type = cljs.core.get.call(null,map__29716__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29717 = cljs.core._EQ_;var expr__29718 = type;if(cljs.core.truth_(pred__29717.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29718)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29717.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29718)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29717.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29718)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29717.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29718)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29717.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29718)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29718))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29720,component_filter_rq_chan){var map__29722 = p__29720;var map__29722__$1 = ((cljs.core.seq_QMARK_.call(null,map__29722))?cljs.core.apply.call(null,cljs.core.hash_map,map__29722):map__29722);var component_spec = map__29722__$1;var visible = cljs.core.get.call(null,map__29722__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29722__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29722__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29722__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29724 = schema.core.Any;var input_schema29725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29723","map29723",-227966797,null))], null);var input_checker29726 = schema.core.checker.call(null,input_schema29725);var output_checker29727 = schema.core.checker.call(null,output_schema29724);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29724,input_schema29725,input_checker29726,output_checker29727){
return (function render_STAR_(G__29728){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29745 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29728], null);var temp__4126__auto___29746 = input_checker29726.call(null,args__6035__auto___29745);if(cljs.core.truth_(temp__4126__auto___29746))
{var error__6036__auto___29747 = temp__4126__auto___29746;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29747)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29747,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29745,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29725,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29723 = G__29728;while(true){
if(cljs.core.map_QMARK_.call(null,map29723))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29723)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29723,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29723,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29723,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29724,input_schema29725,input_checker29726,output_checker29727){
return (function iter__29737(s__29738){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29724,input_schema29725,input_checker29726,output_checker29727){
return (function (){var s__29738__$1 = s__29738;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29738__$1);if(temp__4126__auto__)
{var s__29738__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29738__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29738__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29740 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29739 = (0);while(true){
if((i__29739 < size__4376__auto__))
{var map__29743 = cljs.core._nth.call(null,c__4375__auto__,i__29739);var map__29743__$1 = ((cljs.core.seq_QMARK_.call(null,map__29743))?cljs.core.apply.call(null,cljs.core.hash_map,map__29743):map__29743);var component_spec = map__29743__$1;var id = cljs.core.get.call(null,map__29743__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29740,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29748 = (i__29739 + (1));
i__29739 = G__29748;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29740),iter__29737.call(null,cljs.core.chunk_rest.call(null,s__29738__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29740),null);
}
} else
{var map__29744 = cljs.core.first.call(null,s__29738__$2);var map__29744__$1 = ((cljs.core.seq_QMARK_.call(null,map__29744))?cljs.core.apply.call(null,cljs.core.hash_map,map__29744):map__29744);var component_spec = map__29744__$1;var id = cljs.core.get.call(null,map__29744__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29737.call(null,cljs.core.rest.call(null,s__29738__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29724,input_schema29725,input_checker29726,output_checker29727))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29724,input_schema29725,input_checker29726,output_checker29727))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29749 = output_checker29727.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29749))
{var error__6036__auto___29750 = temp__4126__auto___29749;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29750)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29750,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29724,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29724,input_schema29725,input_checker29726,output_checker29727))
,schema.core.make_fn_schema.call(null,output_schema29724,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29725], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30087 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29757 = schema.core.Any;var input_schema29758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29754","map29754",-247096425,null))], null);var input_checker29759 = schema.core.checker.call(null,input_schema29758);var output_checker29760 = schema.core.checker.call(null,output_schema29757);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function constructor29752(G__29761){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30088 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29761], null);var temp__4126__auto___30089 = input_checker29759.call(null,args__6035__auto___30088);if(cljs.core.truth_(temp__4126__auto___30089))
{var error__6036__auto___30090 = temp__4126__auto___30089;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29752","constructor29752",-593974087,null),cljs.core.pr_str.call(null,error__6036__auto___30090)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30090,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30088,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29758,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29754 = G__29761;while(true){
if(cljs.core.map_QMARK_.call(null,map29754))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29754)));
}
var map29756 = plumbing.fnk.schema.safe_get.call(null,map29754,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29756,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29755 = plumbing.fnk.schema.safe_get.call(null,map29754,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29755,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29755,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29754,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t29923 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t29923 = (function (owner,G__29761,component_specs,input_checker29759,filter_spec,map29755,history,output_checker29760,map29754,constructor29752,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,map29756,input_schema29758,output_schema29757,meta29924){
this.owner = owner;
this.G__29761 = G__29761;
this.component_specs = component_specs;
this.input_checker29759 = input_checker29759;
this.filter_spec = filter_spec;
this.map29755 = map29755;
this.history = history;
this.output_checker29760 = output_checker29760;
this.map29754 = map29754;
this.constructor29752 = constructor29752;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.map29756 = map29756;
this.input_schema29758 = input_schema29758;
this.output_schema29757 = output_schema29757;
this.meta29924 = meta29924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t29923.cljs$lang$type = true;
clustermap.components.filter.t29923.cljs$lang$ctorStr = "clustermap.components.filter/t29923";
clustermap.components.filter.t29923.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t29923");
});})(owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
;
clustermap.components.filter.t29923.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t29923.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
;
clustermap.components.filter.t29923.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t29923.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function (_,p__29926,___$1){var self__ = this;
var map__29927 = p__29926;var map__29927__$1 = ((cljs.core.seq_QMARK_.call(null,map__29927))?cljs.core.apply.call(null,cljs.core.hash_map,map__29927):map__29927);var next_props = map__29927__$1;var map__29928 = cljs.core.get.call(null,map__29927__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__29928__$1 = ((cljs.core.seq_QMARK_.call(null,map__29928))?cljs.core.apply.call(null,cljs.core.hash_map,map__29928):map__29928);var next_filter_spec = map__29928__$1;var map__29929 = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__29929__$1 = ((cljs.core.seq_QMARK_.call(null,map__29929))?cljs.core.apply.call(null,cljs.core.hash_map,map__29929):map__29929);var next_url_components = map__29929__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
;
clustermap.components.filter.t29923.prototype.om$core$IRender$ = true;
clustermap.components.filter.t29923.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
;
clustermap.components.filter.t29923.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t29923.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__29930_30091 = cljs.core.seq.call(null,chs);var chunk__29931_30092 = null;var count__29932_30093 = (0);var i__29933_30094 = (0);while(true){
if((i__29933_30094 < count__29932_30093))
{var vec__29934_30095 = cljs.core._nth.call(null,chunk__29931_30092,i__29933_30094);var component_id_30096 = cljs.core.nth.call(null,vec__29934_30095,(0),null);var ch_30097 = cljs.core.nth.call(null,vec__29934_30095,(1),null);cljs.core.async.close_BANG_.call(null,ch_30097);
{
var G__30098 = seq__29930_30091;
var G__30099 = chunk__29931_30092;
var G__30100 = count__29932_30093;
var G__30101 = (i__29933_30094 + (1));
seq__29930_30091 = G__30098;
chunk__29931_30092 = G__30099;
count__29932_30093 = G__30100;
i__29933_30094 = G__30101;
continue;
}
} else
{var temp__4126__auto___30102 = cljs.core.seq.call(null,seq__29930_30091);if(temp__4126__auto___30102)
{var seq__29930_30103__$1 = temp__4126__auto___30102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29930_30103__$1))
{var c__4408__auto___30104 = cljs.core.chunk_first.call(null,seq__29930_30103__$1);{
var G__30105 = cljs.core.chunk_rest.call(null,seq__29930_30103__$1);
var G__30106 = c__4408__auto___30104;
var G__30107 = cljs.core.count.call(null,c__4408__auto___30104);
var G__30108 = (0);
seq__29930_30091 = G__30105;
chunk__29931_30092 = G__30106;
count__29932_30093 = G__30107;
i__29933_30094 = G__30108;
continue;
}
} else
{var vec__29935_30109 = cljs.core.first.call(null,seq__29930_30103__$1);var component_id_30110 = cljs.core.nth.call(null,vec__29935_30109,(0),null);var ch_30111 = cljs.core.nth.call(null,vec__29935_30109,(1),null);cljs.core.async.close_BANG_.call(null,ch_30111);
{
var G__30112 = cljs.core.next.call(null,seq__29930_30103__$1);
var G__30113 = null;
var G__30114 = (0);
var G__30115 = (0);
seq__29930_30091 = G__30112;
chunk__29931_30092 = G__30113;
count__29932_30093 = G__30114;
i__29933_30094 = G__30115;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
;
clustermap.components.filter.t29923.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t29923.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function (state_30031){var state_val_30032 = (state_30031[(1)]);if((state_val_30032 === (7)))
{var inst_30022 = (state_30031[(2)]);var state_30031__$1 = state_30031;if(cljs.core.truth_(inst_30022))
{var statearr_30033_30116 = state_30031__$1;(statearr_30033_30116[(1)] = (25));
} else
{var statearr_30034_30117 = state_30031__$1;(statearr_30034_30117[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (20)))
{var inst_29941 = (state_30031[(7)]);var inst_29942 = (state_30031[(8)]);var inst_29992 = (state_30031[(9)]);var inst_29999 = (state_30031[(10)]);var inst_29948 = (state_30031[(11)]);var inst_29983 = (state_30031[(12)]);var inst_29992__$1 = cljs.core.first.call(null,inst_29983);var inst_29993 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29994 = cljs.core.get.call(null,inst_29942,inst_29992__$1);var inst_29995 = ["FILTER",inst_29941,inst_29992__$1,inst_29994];var inst_29996 = (new cljs.core.PersistentVector(null,4,(5),inst_29993,inst_29995,null));var inst_29997 = cljs.core.clj__GT_js.call(null,inst_29996);var inst_29998 = console.log(inst_29997);var inst_29999__$1 = cljs.core.get.call(null,inst_29948,inst_29992__$1);var state_30031__$1 = (function (){var statearr_30035 = state_30031;(statearr_30035[(9)] = inst_29992__$1);
(statearr_30035[(10)] = inst_29999__$1);
(statearr_30035[(13)] = inst_29998);
return statearr_30035;
})();if(cljs.core.truth_(inst_29999__$1))
{var statearr_30036_30118 = state_30031__$1;(statearr_30036_30118[(1)] = (22));
} else
{var statearr_30037_30119 = state_30031__$1;(statearr_30037_30119[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (27)))
{var inst_30027 = (state_30031[(2)]);var state_30031__$1 = state_30031;var statearr_30038_30120 = state_30031__$1;(statearr_30038_30120[(2)] = inst_30027);
(statearr_30038_30120[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (1)))
{var state_30031__$1 = state_30031;var statearr_30039_30121 = state_30031__$1;(statearr_30039_30121[(2)] = null);
(statearr_30039_30121[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (24)))
{var inst_29983 = (state_30031[(12)]);var inst_30008 = (state_30031[(2)]);var inst_30009 = cljs.core.next.call(null,inst_29983);var inst_29955 = inst_30009;var inst_29956 = null;var inst_29957 = (0);var inst_29958 = (0);var state_30031__$1 = (function (){var statearr_30043 = state_30031;(statearr_30043[(14)] = inst_29955);
(statearr_30043[(15)] = inst_29956);
(statearr_30043[(16)] = inst_30008);
(statearr_30043[(17)] = inst_29958);
(statearr_30043[(18)] = inst_29957);
return statearr_30043;
})();var statearr_30044_30122 = state_30031__$1;(statearr_30044_30122[(2)] = null);
(statearr_30044_30122[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (4)))
{var inst_29938 = (state_30031[(19)]);var inst_29938__$1 = (state_30031[(2)]);var state_30031__$1 = (function (){var statearr_30045 = state_30031;(statearr_30045[(19)] = inst_29938__$1);
return statearr_30045;
})();if(cljs.core.truth_(inst_29938__$1))
{var statearr_30046_30123 = state_30031__$1;(statearr_30046_30123[(1)] = (5));
} else
{var statearr_30047_30124 = state_30031__$1;(statearr_30047_30124[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (15)))
{var inst_29955 = (state_30031[(14)]);var inst_29956 = (state_30031[(15)]);var inst_29958 = (state_30031[(17)]);var inst_29957 = (state_30031[(18)]);var inst_29979 = (state_30031[(2)]);var inst_29980 = (inst_29958 + (1));var tmp30040 = inst_29955;var tmp30041 = inst_29956;var tmp30042 = inst_29957;var inst_29955__$1 = tmp30040;var inst_29956__$1 = tmp30041;var inst_29957__$1 = tmp30042;var inst_29958__$1 = inst_29980;var state_30031__$1 = (function (){var statearr_30048 = state_30031;(statearr_30048[(14)] = inst_29955__$1);
(statearr_30048[(15)] = inst_29956__$1);
(statearr_30048[(20)] = inst_29979);
(statearr_30048[(17)] = inst_29958__$1);
(statearr_30048[(18)] = inst_29957__$1);
return statearr_30048;
})();var statearr_30049_30125 = state_30031__$1;(statearr_30049_30125[(2)] = null);
(statearr_30049_30125[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (21)))
{var inst_30012 = (state_30031[(2)]);var state_30031__$1 = state_30031;var statearr_30050_30126 = state_30031__$1;(statearr_30050_30126[(2)] = inst_30012);
(statearr_30050_30126[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (13)))
{var inst_29970 = (state_30031[(21)]);var inst_29942 = (state_30031[(8)]);var inst_29963 = (state_30031[(22)]);var inst_29972 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29973 = cljs.core.get.call(null,inst_29942,inst_29963);var inst_29974 = [inst_29963,inst_29973];var inst_29975 = (new cljs.core.PersistentVector(null,2,(5),inst_29972,inst_29974,null));var inst_29976 = cljs.core.async.put_BANG_.call(null,inst_29970,inst_29975);var state_30031__$1 = state_30031;var statearr_30051_30127 = state_30031__$1;(statearr_30051_30127[(2)] = inst_29976);
(statearr_30051_30127[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (22)))
{var inst_29942 = (state_30031[(8)]);var inst_29992 = (state_30031[(9)]);var inst_29999 = (state_30031[(10)]);var inst_30001 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30002 = cljs.core.get.call(null,inst_29942,inst_29992);var inst_30003 = [inst_29992,inst_30002];var inst_30004 = (new cljs.core.PersistentVector(null,2,(5),inst_30001,inst_30003,null));var inst_30005 = cljs.core.async.put_BANG_.call(null,inst_29999,inst_30004);var state_30031__$1 = state_30031;var statearr_30052_30128 = state_30031__$1;(statearr_30052_30128[(2)] = inst_30005);
(statearr_30052_30128[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (6)))
{var state_30031__$1 = state_30031;var statearr_30053_30129 = state_30031__$1;(statearr_30053_30129[(2)] = null);
(statearr_30053_30129[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (25)))
{var state_30031__$1 = state_30031;var statearr_30054_30130 = state_30031__$1;(statearr_30054_30130[(2)] = null);
(statearr_30054_30130[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (17)))
{var state_30031__$1 = state_30031;var statearr_30055_30131 = state_30031__$1;(statearr_30055_30131[(2)] = null);
(statearr_30055_30131[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (3)))
{var inst_30029 = (state_30031[(2)]);var state_30031__$1 = state_30031;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30031__$1,inst_30029);
} else
{if((state_val_30032 === (12)))
{var inst_30017 = (state_30031[(2)]);var state_30031__$1 = state_30031;var statearr_30056_30132 = state_30031__$1;(statearr_30056_30132[(2)] = inst_30017);
(statearr_30056_30132[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (2)))
{var state_30031__$1 = state_30031;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30031__$1,(4),filter_rq_sub);
} else
{if((state_val_30032 === (23)))
{var state_30031__$1 = state_30031;var statearr_30057_30133 = state_30031__$1;(statearr_30057_30133[(2)] = null);
(statearr_30057_30133[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (19)))
{var inst_29983 = (state_30031[(12)]);var inst_29987 = cljs.core.chunk_first.call(null,inst_29983);var inst_29988 = cljs.core.chunk_rest.call(null,inst_29983);var inst_29989 = cljs.core.count.call(null,inst_29987);var inst_29955 = inst_29988;var inst_29956 = inst_29987;var inst_29957 = inst_29989;var inst_29958 = (0);var state_30031__$1 = (function (){var statearr_30058 = state_30031;(statearr_30058[(14)] = inst_29955);
(statearr_30058[(15)] = inst_29956);
(statearr_30058[(17)] = inst_29958);
(statearr_30058[(18)] = inst_29957);
return statearr_30058;
})();var statearr_30059_30134 = state_30031__$1;(statearr_30059_30134[(2)] = null);
(statearr_30059_30134[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (11)))
{var inst_29955 = (state_30031[(14)]);var inst_29983 = (state_30031[(12)]);var inst_29983__$1 = cljs.core.seq.call(null,inst_29955);var state_30031__$1 = (function (){var statearr_30060 = state_30031;(statearr_30060[(12)] = inst_29983__$1);
return statearr_30060;
})();if(inst_29983__$1)
{var statearr_30061_30135 = state_30031__$1;(statearr_30061_30135[(1)] = (16));
} else
{var statearr_30062_30136 = state_30031__$1;(statearr_30062_30136[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (9)))
{var inst_30019 = (state_30031[(2)]);var state_30031__$1 = (function (){var statearr_30063 = state_30031;(statearr_30063[(23)] = inst_30019);
return statearr_30063;
})();var statearr_30064_30137 = state_30031__$1;(statearr_30064_30137[(2)] = true);
(statearr_30064_30137[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (5)))
{var inst_29941 = (state_30031[(7)]);var inst_29938 = (state_30031[(19)]);var inst_29942 = (state_30031[(8)]);var inst_29941__$1 = cljs.core.nth.call(null,inst_29938,(0),null);var inst_29942__$1 = cljs.core.nth.call(null,inst_29938,(1),null);var inst_29943 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29944 = ["FILTER-RQ",inst_29941__$1,inst_29942__$1];var inst_29945 = (new cljs.core.PersistentVector(null,3,(5),inst_29943,inst_29944,null));var inst_29946 = cljs.core.clj__GT_js.call(null,inst_29945);var inst_29947 = console.log(inst_29946);var inst_29948 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_29949 = cljs.core.keys.call(null,inst_29942__$1);var inst_29954 = cljs.core.seq.call(null,inst_29949);var inst_29955 = inst_29954;var inst_29956 = null;var inst_29957 = (0);var inst_29958 = (0);var state_30031__$1 = (function (){var statearr_30065 = state_30031;(statearr_30065[(14)] = inst_29955);
(statearr_30065[(7)] = inst_29941__$1);
(statearr_30065[(15)] = inst_29956);
(statearr_30065[(24)] = inst_29947);
(statearr_30065[(8)] = inst_29942__$1);
(statearr_30065[(11)] = inst_29948);
(statearr_30065[(17)] = inst_29958);
(statearr_30065[(18)] = inst_29957);
return statearr_30065;
})();var statearr_30066_30138 = state_30031__$1;(statearr_30066_30138[(2)] = null);
(statearr_30066_30138[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (14)))
{var state_30031__$1 = state_30031;var statearr_30067_30139 = state_30031__$1;(statearr_30067_30139[(2)] = null);
(statearr_30067_30139[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (26)))
{var state_30031__$1 = state_30031;var statearr_30068_30140 = state_30031__$1;(statearr_30068_30140[(2)] = null);
(statearr_30068_30140[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (16)))
{var inst_29983 = (state_30031[(12)]);var inst_29985 = cljs.core.chunked_seq_QMARK_.call(null,inst_29983);var state_30031__$1 = state_30031;if(inst_29985)
{var statearr_30069_30141 = state_30031__$1;(statearr_30069_30141[(1)] = (19));
} else
{var statearr_30070_30142 = state_30031__$1;(statearr_30070_30142[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (10)))
{var inst_29941 = (state_30031[(7)]);var inst_29970 = (state_30031[(21)]);var inst_29956 = (state_30031[(15)]);var inst_29942 = (state_30031[(8)]);var inst_29948 = (state_30031[(11)]);var inst_29958 = (state_30031[(17)]);var inst_29963 = (state_30031[(22)]);var inst_29963__$1 = cljs.core._nth.call(null,inst_29956,inst_29958);var inst_29964 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29965 = cljs.core.get.call(null,inst_29942,inst_29963__$1);var inst_29966 = ["FILTER",inst_29941,inst_29963__$1,inst_29965];var inst_29967 = (new cljs.core.PersistentVector(null,4,(5),inst_29964,inst_29966,null));var inst_29968 = cljs.core.clj__GT_js.call(null,inst_29967);var inst_29969 = console.log(inst_29968);var inst_29970__$1 = cljs.core.get.call(null,inst_29948,inst_29963__$1);var state_30031__$1 = (function (){var statearr_30071 = state_30031;(statearr_30071[(21)] = inst_29970__$1);
(statearr_30071[(25)] = inst_29969);
(statearr_30071[(22)] = inst_29963__$1);
return statearr_30071;
})();if(cljs.core.truth_(inst_29970__$1))
{var statearr_30072_30143 = state_30031__$1;(statearr_30072_30143[(1)] = (13));
} else
{var statearr_30073_30144 = state_30031__$1;(statearr_30073_30144[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (18)))
{var inst_30015 = (state_30031[(2)]);var state_30031__$1 = state_30031;var statearr_30074_30145 = state_30031__$1;(statearr_30074_30145[(2)] = inst_30015);
(statearr_30074_30145[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30032 === (8)))
{var inst_29958 = (state_30031[(17)]);var inst_29957 = (state_30031[(18)]);var inst_29960 = (inst_29958 < inst_29957);var inst_29961 = inst_29960;var state_30031__$1 = state_30031;if(cljs.core.truth_(inst_29961))
{var statearr_30075_30146 = state_30031__$1;(statearr_30075_30146[(1)] = (10));
} else
{var statearr_30076_30147 = state_30031__$1;(statearr_30076_30147[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30080[(0)] = state_machine__9111__auto__);
(statearr_30080[(1)] = (1));
return statearr_30080;
});
var state_machine__9111__auto____1 = (function (state_30031){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30031);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30081){if((e30081 instanceof Object))
{var ex__9114__auto__ = e30081;var statearr_30082_30148 = state_30031;(statearr_30082_30148[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30031);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30081;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30149 = state_30031;
state_30031 = G__30149;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30031){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
})();var state__9127__auto__ = (function (){var statearr_30083 = f__9126__auto__.call(null);(statearr_30083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
;
clustermap.components.filter.t29923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function (_29925){var self__ = this;
var _29925__$1 = this;return self__.meta29924;
});})(owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
;
clustermap.components.filter.t29923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function (_29925,meta29924__$1){var self__ = this;
var _29925__$1 = this;return (new clustermap.components.filter.t29923(self__.owner,self__.G__29761,self__.component_specs,self__.input_checker29759,self__.filter_spec,self__.map29755,self__.history,self__.output_checker29760,self__.map29754,self__.constructor29752,self__.components,self__.validate__6034__auto__,self__.id,self__.filter_rq_pub,self__.ufv__,self__.url_components,self__.map29756,self__.input_schema29758,self__.output_schema29757,meta29924__$1));
});})(owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
;
clustermap.components.filter.__GT_t29923 = ((function (owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760){
return (function __GT_t29923(owner__$1,G__29761__$1,component_specs__$1,input_checker29759__$1,filter_spec__$1,map29755__$1,history__$1,output_checker29760__$1,map29754__$1,constructor29752__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,map29756__$1,input_schema29758__$1,output_schema29757__$1,meta29924){return (new clustermap.components.filter.t29923(owner__$1,G__29761__$1,component_specs__$1,input_checker29759__$1,filter_spec__$1,map29755__$1,history__$1,output_checker29760__$1,map29754__$1,constructor29752__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,map29756__$1,input_schema29758__$1,output_schema29757__$1,meta29924));
});})(owner,history,filter_rq_pub,map29755,url_components,components,component_specs,id,filter_spec,map29756,validate__6034__auto__,ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
;
}
return (new clustermap.components.filter.t29923(owner,G__29761,component_specs,input_checker29759,filter_spec,map29755,history,output_checker29760,map29754,constructor29752,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,map29756,input_schema29758,output_schema29757,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30150 = output_checker29760.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30150))
{var error__6036__auto___30151 = temp__4126__auto___30150;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29752","constructor29752",-593974087,null),cljs.core.pr_str.call(null,error__6036__auto___30151)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30151,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29757,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29757,input_schema29758,input_checker29759,output_checker29760))
,schema.core.make_fn_schema.call(null,output_schema29757,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29758], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30087){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29751,p__30084){var vec__30086 = p__30084;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30086,(0),null);return component_fnk__7881__auto___30087.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29751),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29751,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29751,var_args){
var p__30084 = null;if (arguments.length > 2) {
  p__30084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29751,p__30084);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30152){
var data__7882__auto__ = cljs.core.first(arglist__30152);
arglist__30152 = cljs.core.next(arglist__30152);
var owner29751 = cljs.core.first(arglist__30152);
var p__30084 = cljs.core.rest(arglist__30152);
return filter_component__delegate(data__7882__auto__,owner29751,p__30084);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30087))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29753){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29753);
});
__GT_filter_component = function(cursor__7850__auto__,m29753){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
