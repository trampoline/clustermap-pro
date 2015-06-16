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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29797){var map__29799 = p__29797;var map__29799__$1 = ((cljs.core.seq_QMARK_.call(null,map__29799))?cljs.core.apply.call(null,cljs.core.hash_map,map__29799):map__29799);var filter_spec = map__29799__$1;var component_descrs = cljs.core.get.call(null,map__29799__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29799__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29799__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29800){var map__29802 = p__29800;var map__29802__$1 = ((cljs.core.seq_QMARK_.call(null,map__29802))?cljs.core.apply.call(null,cljs.core.hash_map,map__29802):map__29802);var filter_spec = map__29802__$1;var component_descrs = cljs.core.get.call(null,map__29802__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29802__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29802__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29803,component_filter_rq_chan){var map__29808 = p__29803;var map__29808__$1 = ((cljs.core.seq_QMARK_.call(null,map__29808))?cljs.core.apply.call(null,cljs.core.hash_map,map__29808):map__29808);var component_spec = map__29808__$1;var type = cljs.core.get.call(null,map__29808__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29809 = cljs.core._EQ_;var expr__29810 = type;if(cljs.core.truth_(pred__29809.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29810)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29809.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29810)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29809.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29810)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29809.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29810)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29809.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29810)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29810))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29812,component_filter_rq_chan){var map__29814 = p__29812;var map__29814__$1 = ((cljs.core.seq_QMARK_.call(null,map__29814))?cljs.core.apply.call(null,cljs.core.hash_map,map__29814):map__29814);var component_spec = map__29814__$1;var visible = cljs.core.get.call(null,map__29814__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29814__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29814__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29814__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29816 = schema.core.Any;var input_schema29817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29815","map29815",-833234205,null))], null);var input_checker29818 = schema.core.checker.call(null,input_schema29817);var output_checker29819 = schema.core.checker.call(null,output_schema29816);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819){
return (function render_STAR_(G__29820){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29820], null);var temp__4126__auto___29838 = input_checker29818.call(null,args__6035__auto___29837);if(cljs.core.truth_(temp__4126__auto___29838))
{var error__6036__auto___29839 = temp__4126__auto___29838;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29839)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29839,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29837,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29817,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29815 = G__29820;while(true){
if(cljs.core.map_QMARK_.call(null,map29815))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29815)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29815,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29815,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29815,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819){
return (function iter__29829(s__29830){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819){
return (function (){var s__29830__$1 = s__29830;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29830__$1);if(temp__4126__auto__)
{var s__29830__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29830__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29830__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29832 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29831 = (0);while(true){
if((i__29831 < size__4376__auto__))
{var map__29835 = cljs.core._nth.call(null,c__4375__auto__,i__29831);var map__29835__$1 = ((cljs.core.seq_QMARK_.call(null,map__29835))?cljs.core.apply.call(null,cljs.core.hash_map,map__29835):map__29835);var component_spec = map__29835__$1;var id = cljs.core.get.call(null,map__29835__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29832,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29840 = (i__29831 + (1));
i__29831 = G__29840;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29832),iter__29829.call(null,cljs.core.chunk_rest.call(null,s__29830__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29832),null);
}
} else
{var map__29836 = cljs.core.first.call(null,s__29830__$2);var map__29836__$1 = ((cljs.core.seq_QMARK_.call(null,map__29836))?cljs.core.apply.call(null,cljs.core.hash_map,map__29836):map__29836);var component_spec = map__29836__$1;var id = cljs.core.get.call(null,map__29836__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29829.call(null,cljs.core.rest.call(null,s__29830__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29841 = output_checker29819.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29841))
{var error__6036__auto___29842 = temp__4126__auto___29841;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29842)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29842,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29816,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29816,input_schema29817,input_checker29818,output_checker29819))
,schema.core.make_fn_schema.call(null,output_schema29816,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29817], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30179 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29849 = schema.core.Any;var input_schema29850 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29846","map29846",1084985646,null))], null);var input_checker29851 = schema.core.checker.call(null,input_schema29850);var output_checker29852 = schema.core.checker.call(null,output_schema29849);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function constructor29844(G__29853){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30180 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29853], null);var temp__4126__auto___30181 = input_checker29851.call(null,args__6035__auto___30180);if(cljs.core.truth_(temp__4126__auto___30181))
{var error__6036__auto___30182 = temp__4126__auto___30181;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29844","constructor29844",-1636521529,null),cljs.core.pr_str.call(null,error__6036__auto___30182)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30182,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30180,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29850,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29846 = G__29853;while(true){
if(cljs.core.map_QMARK_.call(null,map29846))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29846)));
}
var map29848 = plumbing.fnk.schema.safe_get.call(null,map29846,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29848,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29847 = plumbing.fnk.schema.safe_get.call(null,map29846,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29847,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29847,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29846,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30015 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30015 = (function (map29847,owner,input_checker29851,constructor29844,G__29853,map29846,component_specs,filter_spec,output_schema29849,output_checker29852,history,components,validate__6034__auto__,id,map29848,filter_rq_pub,ufv__,input_schema29850,url_components,meta30016){
this.map29847 = map29847;
this.owner = owner;
this.input_checker29851 = input_checker29851;
this.constructor29844 = constructor29844;
this.G__29853 = G__29853;
this.map29846 = map29846;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.output_schema29849 = output_schema29849;
this.output_checker29852 = output_checker29852;
this.history = history;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map29848 = map29848;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.input_schema29850 = input_schema29850;
this.url_components = url_components;
this.meta30016 = meta30016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30015.cljs$lang$type = true;
clustermap.components.filter.t30015.cljs$lang$ctorStr = "clustermap.components.filter/t30015";
clustermap.components.filter.t30015.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30015");
});})(owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filter.t30015.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30015.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filter.t30015.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30015.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (_,p__30018,___$1){var self__ = this;
var map__30019 = p__30018;var map__30019__$1 = ((cljs.core.seq_QMARK_.call(null,map__30019))?cljs.core.apply.call(null,cljs.core.hash_map,map__30019):map__30019);var next_props = map__30019__$1;var map__30020 = cljs.core.get.call(null,map__30019__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30020__$1 = ((cljs.core.seq_QMARK_.call(null,map__30020))?cljs.core.apply.call(null,cljs.core.hash_map,map__30020):map__30020);var next_filter_spec = map__30020__$1;var map__30021 = cljs.core.get.call(null,map__30020__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30021__$1 = ((cljs.core.seq_QMARK_.call(null,map__30021))?cljs.core.apply.call(null,cljs.core.hash_map,map__30021):map__30021);var next_url_components = map__30021__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filter.t30015.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30015.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filter.t30015.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30015.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30022_30183 = cljs.core.seq.call(null,chs);var chunk__30023_30184 = null;var count__30024_30185 = (0);var i__30025_30186 = (0);while(true){
if((i__30025_30186 < count__30024_30185))
{var vec__30026_30187 = cljs.core._nth.call(null,chunk__30023_30184,i__30025_30186);var component_id_30188 = cljs.core.nth.call(null,vec__30026_30187,(0),null);var ch_30189 = cljs.core.nth.call(null,vec__30026_30187,(1),null);cljs.core.async.close_BANG_.call(null,ch_30189);
{
var G__30190 = seq__30022_30183;
var G__30191 = chunk__30023_30184;
var G__30192 = count__30024_30185;
var G__30193 = (i__30025_30186 + (1));
seq__30022_30183 = G__30190;
chunk__30023_30184 = G__30191;
count__30024_30185 = G__30192;
i__30025_30186 = G__30193;
continue;
}
} else
{var temp__4126__auto___30194 = cljs.core.seq.call(null,seq__30022_30183);if(temp__4126__auto___30194)
{var seq__30022_30195__$1 = temp__4126__auto___30194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30022_30195__$1))
{var c__4408__auto___30196 = cljs.core.chunk_first.call(null,seq__30022_30195__$1);{
var G__30197 = cljs.core.chunk_rest.call(null,seq__30022_30195__$1);
var G__30198 = c__4408__auto___30196;
var G__30199 = cljs.core.count.call(null,c__4408__auto___30196);
var G__30200 = (0);
seq__30022_30183 = G__30197;
chunk__30023_30184 = G__30198;
count__30024_30185 = G__30199;
i__30025_30186 = G__30200;
continue;
}
} else
{var vec__30027_30201 = cljs.core.first.call(null,seq__30022_30195__$1);var component_id_30202 = cljs.core.nth.call(null,vec__30027_30201,(0),null);var ch_30203 = cljs.core.nth.call(null,vec__30027_30201,(1),null);cljs.core.async.close_BANG_.call(null,ch_30203);
{
var G__30204 = cljs.core.next.call(null,seq__30022_30195__$1);
var G__30205 = null;
var G__30206 = (0);
var G__30207 = (0);
seq__30022_30183 = G__30204;
chunk__30023_30184 = G__30205;
count__30024_30185 = G__30206;
i__30025_30186 = G__30207;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filter.t30015.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30015.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (state_30123){var state_val_30124 = (state_30123[(1)]);if((state_val_30124 === (7)))
{var inst_30114 = (state_30123[(2)]);var state_30123__$1 = state_30123;if(cljs.core.truth_(inst_30114))
{var statearr_30125_30208 = state_30123__$1;(statearr_30125_30208[(1)] = (25));
} else
{var statearr_30126_30209 = state_30123__$1;(statearr_30126_30209[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (20)))
{var inst_30033 = (state_30123[(7)]);var inst_30040 = (state_30123[(8)]);var inst_30084 = (state_30123[(9)]);var inst_30091 = (state_30123[(10)]);var inst_30075 = (state_30123[(11)]);var inst_30034 = (state_30123[(12)]);var inst_30084__$1 = cljs.core.first.call(null,inst_30075);var inst_30085 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30086 = cljs.core.get.call(null,inst_30034,inst_30084__$1);var inst_30087 = ["FILTER",inst_30033,inst_30084__$1,inst_30086];var inst_30088 = (new cljs.core.PersistentVector(null,4,(5),inst_30085,inst_30087,null));var inst_30089 = cljs.core.clj__GT_js.call(null,inst_30088);var inst_30090 = console.log(inst_30089);var inst_30091__$1 = cljs.core.get.call(null,inst_30040,inst_30084__$1);var state_30123__$1 = (function (){var statearr_30127 = state_30123;(statearr_30127[(13)] = inst_30090);
(statearr_30127[(9)] = inst_30084__$1);
(statearr_30127[(10)] = inst_30091__$1);
return statearr_30127;
})();if(cljs.core.truth_(inst_30091__$1))
{var statearr_30128_30210 = state_30123__$1;(statearr_30128_30210[(1)] = (22));
} else
{var statearr_30129_30211 = state_30123__$1;(statearr_30129_30211[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (27)))
{var inst_30119 = (state_30123[(2)]);var state_30123__$1 = state_30123;var statearr_30130_30212 = state_30123__$1;(statearr_30130_30212[(2)] = inst_30119);
(statearr_30130_30212[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (1)))
{var state_30123__$1 = state_30123;var statearr_30131_30213 = state_30123__$1;(statearr_30131_30213[(2)] = null);
(statearr_30131_30213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (24)))
{var inst_30075 = (state_30123[(11)]);var inst_30100 = (state_30123[(2)]);var inst_30101 = cljs.core.next.call(null,inst_30075);var inst_30047 = inst_30101;var inst_30048 = null;var inst_30049 = (0);var inst_30050 = (0);var state_30123__$1 = (function (){var statearr_30135 = state_30123;(statearr_30135[(14)] = inst_30050);
(statearr_30135[(15)] = inst_30047);
(statearr_30135[(16)] = inst_30100);
(statearr_30135[(17)] = inst_30049);
(statearr_30135[(18)] = inst_30048);
return statearr_30135;
})();var statearr_30136_30214 = state_30123__$1;(statearr_30136_30214[(2)] = null);
(statearr_30136_30214[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (4)))
{var inst_30030 = (state_30123[(19)]);var inst_30030__$1 = (state_30123[(2)]);var state_30123__$1 = (function (){var statearr_30137 = state_30123;(statearr_30137[(19)] = inst_30030__$1);
return statearr_30137;
})();if(cljs.core.truth_(inst_30030__$1))
{var statearr_30138_30215 = state_30123__$1;(statearr_30138_30215[(1)] = (5));
} else
{var statearr_30139_30216 = state_30123__$1;(statearr_30139_30216[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (15)))
{var inst_30050 = (state_30123[(14)]);var inst_30047 = (state_30123[(15)]);var inst_30049 = (state_30123[(17)]);var inst_30048 = (state_30123[(18)]);var inst_30071 = (state_30123[(2)]);var inst_30072 = (inst_30050 + (1));var tmp30132 = inst_30047;var tmp30133 = inst_30049;var tmp30134 = inst_30048;var inst_30047__$1 = tmp30132;var inst_30048__$1 = tmp30134;var inst_30049__$1 = tmp30133;var inst_30050__$1 = inst_30072;var state_30123__$1 = (function (){var statearr_30140 = state_30123;(statearr_30140[(14)] = inst_30050__$1);
(statearr_30140[(20)] = inst_30071);
(statearr_30140[(15)] = inst_30047__$1);
(statearr_30140[(17)] = inst_30049__$1);
(statearr_30140[(18)] = inst_30048__$1);
return statearr_30140;
})();var statearr_30141_30217 = state_30123__$1;(statearr_30141_30217[(2)] = null);
(statearr_30141_30217[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (21)))
{var inst_30104 = (state_30123[(2)]);var state_30123__$1 = state_30123;var statearr_30142_30218 = state_30123__$1;(statearr_30142_30218[(2)] = inst_30104);
(statearr_30142_30218[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (13)))
{var inst_30055 = (state_30123[(21)]);var inst_30062 = (state_30123[(22)]);var inst_30034 = (state_30123[(12)]);var inst_30064 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30065 = cljs.core.get.call(null,inst_30034,inst_30055);var inst_30066 = [inst_30055,inst_30065];var inst_30067 = (new cljs.core.PersistentVector(null,2,(5),inst_30064,inst_30066,null));var inst_30068 = cljs.core.async.put_BANG_.call(null,inst_30062,inst_30067);var state_30123__$1 = state_30123;var statearr_30143_30219 = state_30123__$1;(statearr_30143_30219[(2)] = inst_30068);
(statearr_30143_30219[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (22)))
{var inst_30084 = (state_30123[(9)]);var inst_30091 = (state_30123[(10)]);var inst_30034 = (state_30123[(12)]);var inst_30093 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30094 = cljs.core.get.call(null,inst_30034,inst_30084);var inst_30095 = [inst_30084,inst_30094];var inst_30096 = (new cljs.core.PersistentVector(null,2,(5),inst_30093,inst_30095,null));var inst_30097 = cljs.core.async.put_BANG_.call(null,inst_30091,inst_30096);var state_30123__$1 = state_30123;var statearr_30144_30220 = state_30123__$1;(statearr_30144_30220[(2)] = inst_30097);
(statearr_30144_30220[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (6)))
{var state_30123__$1 = state_30123;var statearr_30145_30221 = state_30123__$1;(statearr_30145_30221[(2)] = null);
(statearr_30145_30221[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (25)))
{var state_30123__$1 = state_30123;var statearr_30146_30222 = state_30123__$1;(statearr_30146_30222[(2)] = null);
(statearr_30146_30222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (17)))
{var state_30123__$1 = state_30123;var statearr_30147_30223 = state_30123__$1;(statearr_30147_30223[(2)] = null);
(statearr_30147_30223[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (3)))
{var inst_30121 = (state_30123[(2)]);var state_30123__$1 = state_30123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30123__$1,inst_30121);
} else
{if((state_val_30124 === (12)))
{var inst_30109 = (state_30123[(2)]);var state_30123__$1 = state_30123;var statearr_30148_30224 = state_30123__$1;(statearr_30148_30224[(2)] = inst_30109);
(statearr_30148_30224[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (2)))
{var state_30123__$1 = state_30123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30123__$1,(4),filter_rq_sub);
} else
{if((state_val_30124 === (23)))
{var state_30123__$1 = state_30123;var statearr_30149_30225 = state_30123__$1;(statearr_30149_30225[(2)] = null);
(statearr_30149_30225[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (19)))
{var inst_30075 = (state_30123[(11)]);var inst_30079 = cljs.core.chunk_first.call(null,inst_30075);var inst_30080 = cljs.core.chunk_rest.call(null,inst_30075);var inst_30081 = cljs.core.count.call(null,inst_30079);var inst_30047 = inst_30080;var inst_30048 = inst_30079;var inst_30049 = inst_30081;var inst_30050 = (0);var state_30123__$1 = (function (){var statearr_30150 = state_30123;(statearr_30150[(14)] = inst_30050);
(statearr_30150[(15)] = inst_30047);
(statearr_30150[(17)] = inst_30049);
(statearr_30150[(18)] = inst_30048);
return statearr_30150;
})();var statearr_30151_30226 = state_30123__$1;(statearr_30151_30226[(2)] = null);
(statearr_30151_30226[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (11)))
{var inst_30047 = (state_30123[(15)]);var inst_30075 = (state_30123[(11)]);var inst_30075__$1 = cljs.core.seq.call(null,inst_30047);var state_30123__$1 = (function (){var statearr_30152 = state_30123;(statearr_30152[(11)] = inst_30075__$1);
return statearr_30152;
})();if(inst_30075__$1)
{var statearr_30153_30227 = state_30123__$1;(statearr_30153_30227[(1)] = (16));
} else
{var statearr_30154_30228 = state_30123__$1;(statearr_30154_30228[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (9)))
{var inst_30111 = (state_30123[(2)]);var state_30123__$1 = (function (){var statearr_30155 = state_30123;(statearr_30155[(23)] = inst_30111);
return statearr_30155;
})();var statearr_30156_30229 = state_30123__$1;(statearr_30156_30229[(2)] = true);
(statearr_30156_30229[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (5)))
{var inst_30033 = (state_30123[(7)]);var inst_30030 = (state_30123[(19)]);var inst_30034 = (state_30123[(12)]);var inst_30033__$1 = cljs.core.nth.call(null,inst_30030,(0),null);var inst_30034__$1 = cljs.core.nth.call(null,inst_30030,(1),null);var inst_30035 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30036 = ["FILTER-RQ",inst_30033__$1,inst_30034__$1];var inst_30037 = (new cljs.core.PersistentVector(null,3,(5),inst_30035,inst_30036,null));var inst_30038 = cljs.core.clj__GT_js.call(null,inst_30037);var inst_30039 = console.log(inst_30038);var inst_30040 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30041 = cljs.core.keys.call(null,inst_30034__$1);var inst_30046 = cljs.core.seq.call(null,inst_30041);var inst_30047 = inst_30046;var inst_30048 = null;var inst_30049 = (0);var inst_30050 = (0);var state_30123__$1 = (function (){var statearr_30157 = state_30123;(statearr_30157[(14)] = inst_30050);
(statearr_30157[(15)] = inst_30047);
(statearr_30157[(7)] = inst_30033__$1);
(statearr_30157[(8)] = inst_30040);
(statearr_30157[(24)] = inst_30039);
(statearr_30157[(17)] = inst_30049);
(statearr_30157[(18)] = inst_30048);
(statearr_30157[(12)] = inst_30034__$1);
return statearr_30157;
})();var statearr_30158_30230 = state_30123__$1;(statearr_30158_30230[(2)] = null);
(statearr_30158_30230[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (14)))
{var state_30123__$1 = state_30123;var statearr_30159_30231 = state_30123__$1;(statearr_30159_30231[(2)] = null);
(statearr_30159_30231[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (26)))
{var state_30123__$1 = state_30123;var statearr_30160_30232 = state_30123__$1;(statearr_30160_30232[(2)] = null);
(statearr_30160_30232[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (16)))
{var inst_30075 = (state_30123[(11)]);var inst_30077 = cljs.core.chunked_seq_QMARK_.call(null,inst_30075);var state_30123__$1 = state_30123;if(inst_30077)
{var statearr_30161_30233 = state_30123__$1;(statearr_30161_30233[(1)] = (19));
} else
{var statearr_30162_30234 = state_30123__$1;(statearr_30162_30234[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (10)))
{var inst_30050 = (state_30123[(14)]);var inst_30033 = (state_30123[(7)]);var inst_30040 = (state_30123[(8)]);var inst_30055 = (state_30123[(21)]);var inst_30048 = (state_30123[(18)]);var inst_30062 = (state_30123[(22)]);var inst_30034 = (state_30123[(12)]);var inst_30055__$1 = cljs.core._nth.call(null,inst_30048,inst_30050);var inst_30056 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30057 = cljs.core.get.call(null,inst_30034,inst_30055__$1);var inst_30058 = ["FILTER",inst_30033,inst_30055__$1,inst_30057];var inst_30059 = (new cljs.core.PersistentVector(null,4,(5),inst_30056,inst_30058,null));var inst_30060 = cljs.core.clj__GT_js.call(null,inst_30059);var inst_30061 = console.log(inst_30060);var inst_30062__$1 = cljs.core.get.call(null,inst_30040,inst_30055__$1);var state_30123__$1 = (function (){var statearr_30163 = state_30123;(statearr_30163[(25)] = inst_30061);
(statearr_30163[(21)] = inst_30055__$1);
(statearr_30163[(22)] = inst_30062__$1);
return statearr_30163;
})();if(cljs.core.truth_(inst_30062__$1))
{var statearr_30164_30235 = state_30123__$1;(statearr_30164_30235[(1)] = (13));
} else
{var statearr_30165_30236 = state_30123__$1;(statearr_30165_30236[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (18)))
{var inst_30107 = (state_30123[(2)]);var state_30123__$1 = state_30123;var statearr_30166_30237 = state_30123__$1;(statearr_30166_30237[(2)] = inst_30107);
(statearr_30166_30237[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30124 === (8)))
{var inst_30050 = (state_30123[(14)]);var inst_30049 = (state_30123[(17)]);var inst_30052 = (inst_30050 < inst_30049);var inst_30053 = inst_30052;var state_30123__$1 = state_30123;if(cljs.core.truth_(inst_30053))
{var statearr_30167_30238 = state_30123__$1;(statearr_30167_30238[(1)] = (10));
} else
{var statearr_30168_30239 = state_30123__$1;(statearr_30168_30239[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30172[(0)] = state_machine__9111__auto__);
(statearr_30172[(1)] = (1));
return statearr_30172;
});
var state_machine__9111__auto____1 = (function (state_30123){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30123);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30173){if((e30173 instanceof Object))
{var ex__9114__auto__ = e30173;var statearr_30174_30240 = state_30123;(statearr_30174_30240[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30173;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30241 = state_30123;
state_30123 = G__30241;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30123){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
})();var state__9127__auto__ = (function (){var statearr_30175 = f__9126__auto__.call(null);(statearr_30175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filter.t30015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (_30017){var self__ = this;
var _30017__$1 = this;return self__.meta30016;
});})(owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filter.t30015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function (_30017,meta30016__$1){var self__ = this;
var _30017__$1 = this;return (new clustermap.components.filter.t30015(self__.map29847,self__.owner,self__.input_checker29851,self__.constructor29844,self__.G__29853,self__.map29846,self__.component_specs,self__.filter_spec,self__.output_schema29849,self__.output_checker29852,self__.history,self__.components,self__.validate__6034__auto__,self__.id,self__.map29848,self__.filter_rq_pub,self__.ufv__,self__.input_schema29850,self__.url_components,meta30016__$1));
});})(owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
clustermap.components.filter.__GT_t30015 = ((function (owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852){
return (function __GT_t30015(map29847__$1,owner__$1,input_checker29851__$1,constructor29844__$1,G__29853__$1,map29846__$1,component_specs__$1,filter_spec__$1,output_schema29849__$1,output_checker29852__$1,history__$1,components__$1,validate__6034__auto____$1,id__$1,map29848__$1,filter_rq_pub__$1,ufv____$1,input_schema29850__$1,url_components__$1,meta30016){return (new clustermap.components.filter.t30015(map29847__$1,owner__$1,input_checker29851__$1,constructor29844__$1,G__29853__$1,map29846__$1,component_specs__$1,filter_spec__$1,output_schema29849__$1,output_checker29852__$1,history__$1,components__$1,validate__6034__auto____$1,id__$1,map29848__$1,filter_rq_pub__$1,ufv____$1,input_schema29850__$1,url_components__$1,meta30016));
});})(owner,history,filter_rq_pub,map29847,url_components,components,component_specs,id,filter_spec,map29848,validate__6034__auto__,ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
;
}
return (new clustermap.components.filter.t30015(map29847,owner,input_checker29851,constructor29844,G__29853,map29846,component_specs,filter_spec,output_schema29849,output_checker29852,history,components,validate__6034__auto__,id,map29848,filter_rq_pub,ufv__,input_schema29850,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30242 = output_checker29852.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30242))
{var error__6036__auto___30243 = temp__4126__auto___30242;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29844","constructor29844",-1636521529,null),cljs.core.pr_str.call(null,error__6036__auto___30243)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30243,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29849,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29849,input_schema29850,input_checker29851,output_checker29852))
,schema.core.make_fn_schema.call(null,output_schema29849,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29850], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30179){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29843,p__30176){var vec__30178 = p__30176;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30178,(0),null);return component_fnk__7881__auto___30179.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29843),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29843,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29843,var_args){
var p__30176 = null;if (arguments.length > 2) {
  p__30176 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29843,p__30176);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30244){
var data__7882__auto__ = cljs.core.first(arglist__30244);
arglist__30244 = cljs.core.next(arglist__30244);
var owner29843 = cljs.core.first(arglist__30244);
var p__30176 = cljs.core.rest(arglist__30244);
return filter_component__delegate(data__7882__auto__,owner29843,p__30176);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30179))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29845){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29845);
});
__GT_filter_component = function(cursor__7850__auto__,m29845){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
