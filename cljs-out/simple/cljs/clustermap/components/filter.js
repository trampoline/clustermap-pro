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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29675){var map__29677 = p__29675;var map__29677__$1 = ((cljs.core.seq_QMARK_.call(null,map__29677))?cljs.core.apply.call(null,cljs.core.hash_map,map__29677):map__29677);var filter_spec = map__29677__$1;var component_descrs = cljs.core.get.call(null,map__29677__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29677__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29677__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29678){var map__29680 = p__29678;var map__29680__$1 = ((cljs.core.seq_QMARK_.call(null,map__29680))?cljs.core.apply.call(null,cljs.core.hash_map,map__29680):map__29680);var filter_spec = map__29680__$1;var component_descrs = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29681,component_filter_rq_chan){var map__29686 = p__29681;var map__29686__$1 = ((cljs.core.seq_QMARK_.call(null,map__29686))?cljs.core.apply.call(null,cljs.core.hash_map,map__29686):map__29686);var component_spec = map__29686__$1;var type = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29687 = cljs.core._EQ_;var expr__29688 = type;if(cljs.core.truth_(pred__29687.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29688)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29687.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29688)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29687.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29688)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29687.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29688)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29687.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29688)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29688))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29690,component_filter_rq_chan){var map__29692 = p__29690;var map__29692__$1 = ((cljs.core.seq_QMARK_.call(null,map__29692))?cljs.core.apply.call(null,cljs.core.hash_map,map__29692):map__29692);var component_spec = map__29692__$1;var visible = cljs.core.get.call(null,map__29692__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29692__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29692__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29692__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29694 = schema.core.Any;var input_schema29695 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29693","map29693",-1176951306,null))], null);var input_checker29696 = schema.core.checker.call(null,input_schema29695);var output_checker29697 = schema.core.checker.call(null,output_schema29694);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29694,input_schema29695,input_checker29696,output_checker29697){
return (function render_STAR_(G__29698){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29715 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29698], null);var temp__4126__auto___29716 = input_checker29696.call(null,args__6035__auto___29715);if(cljs.core.truth_(temp__4126__auto___29716))
{var error__6036__auto___29717 = temp__4126__auto___29716;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29717)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29717,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29715,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29695,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29693 = G__29698;while(true){
if(cljs.core.map_QMARK_.call(null,map29693))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29693)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29693,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29693,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29693,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29694,input_schema29695,input_checker29696,output_checker29697){
return (function iter__29707(s__29708){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29694,input_schema29695,input_checker29696,output_checker29697){
return (function (){var s__29708__$1 = s__29708;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29708__$1);if(temp__4126__auto__)
{var s__29708__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29708__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29708__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29710 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29709 = (0);while(true){
if((i__29709 < size__4376__auto__))
{var map__29713 = cljs.core._nth.call(null,c__4375__auto__,i__29709);var map__29713__$1 = ((cljs.core.seq_QMARK_.call(null,map__29713))?cljs.core.apply.call(null,cljs.core.hash_map,map__29713):map__29713);var component_spec = map__29713__$1;var id = cljs.core.get.call(null,map__29713__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29710,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29718 = (i__29709 + (1));
i__29709 = G__29718;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29710),iter__29707.call(null,cljs.core.chunk_rest.call(null,s__29708__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29710),null);
}
} else
{var map__29714 = cljs.core.first.call(null,s__29708__$2);var map__29714__$1 = ((cljs.core.seq_QMARK_.call(null,map__29714))?cljs.core.apply.call(null,cljs.core.hash_map,map__29714):map__29714);var component_spec = map__29714__$1;var id = cljs.core.get.call(null,map__29714__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29707.call(null,cljs.core.rest.call(null,s__29708__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29694,input_schema29695,input_checker29696,output_checker29697))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29694,input_schema29695,input_checker29696,output_checker29697))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29719 = output_checker29697.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29719))
{var error__6036__auto___29720 = temp__4126__auto___29719;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29720)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29720,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29694,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29694,input_schema29695,input_checker29696,output_checker29697))
,schema.core.make_fn_schema.call(null,output_schema29694,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29695], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30057 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29727 = schema.core.Any;var input_schema29728 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29724","map29724",352247774,null))], null);var input_checker29729 = schema.core.checker.call(null,input_schema29728);var output_checker29730 = schema.core.checker.call(null,output_schema29727);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function constructor29722(G__29731){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30058 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29731], null);var temp__4126__auto___30059 = input_checker29729.call(null,args__6035__auto___30058);if(cljs.core.truth_(temp__4126__auto___30059))
{var error__6036__auto___30060 = temp__4126__auto___30059;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29722","constructor29722",1747178075,null),cljs.core.pr_str.call(null,error__6036__auto___30060)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30060,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30058,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29728,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29724 = G__29731;while(true){
if(cljs.core.map_QMARK_.call(null,map29724))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29724)));
}
var map29726 = plumbing.fnk.schema.safe_get.call(null,map29724,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29726,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29725 = plumbing.fnk.schema.safe_get.call(null,map29724,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29725,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29725,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29724,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t29893 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t29893 = (function (G__29731,input_checker29729,map29726,map29725,owner,input_schema29728,output_checker29730,component_specs,filter_spec,history,components,validate__6034__auto__,id,constructor29722,output_schema29727,filter_rq_pub,ufv__,url_components,map29724,meta29894){
this.G__29731 = G__29731;
this.input_checker29729 = input_checker29729;
this.map29726 = map29726;
this.map29725 = map29725;
this.owner = owner;
this.input_schema29728 = input_schema29728;
this.output_checker29730 = output_checker29730;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.history = history;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.constructor29722 = constructor29722;
this.output_schema29727 = output_schema29727;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.map29724 = map29724;
this.meta29894 = meta29894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t29893.cljs$lang$type = true;
clustermap.components.filter.t29893.cljs$lang$ctorStr = "clustermap.components.filter/t29893";
clustermap.components.filter.t29893.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t29893");
});})(owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
;
clustermap.components.filter.t29893.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t29893.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
;
clustermap.components.filter.t29893.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t29893.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function (_,p__29896,___$1){var self__ = this;
var map__29897 = p__29896;var map__29897__$1 = ((cljs.core.seq_QMARK_.call(null,map__29897))?cljs.core.apply.call(null,cljs.core.hash_map,map__29897):map__29897);var next_props = map__29897__$1;var map__29898 = cljs.core.get.call(null,map__29897__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__29898__$1 = ((cljs.core.seq_QMARK_.call(null,map__29898))?cljs.core.apply.call(null,cljs.core.hash_map,map__29898):map__29898);var next_filter_spec = map__29898__$1;var map__29899 = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__29899__$1 = ((cljs.core.seq_QMARK_.call(null,map__29899))?cljs.core.apply.call(null,cljs.core.hash_map,map__29899):map__29899);var next_url_components = map__29899__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
;
clustermap.components.filter.t29893.prototype.om$core$IRender$ = true;
clustermap.components.filter.t29893.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
;
clustermap.components.filter.t29893.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t29893.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__29900_30061 = cljs.core.seq.call(null,chs);var chunk__29901_30062 = null;var count__29902_30063 = (0);var i__29903_30064 = (0);while(true){
if((i__29903_30064 < count__29902_30063))
{var vec__29904_30065 = cljs.core._nth.call(null,chunk__29901_30062,i__29903_30064);var component_id_30066 = cljs.core.nth.call(null,vec__29904_30065,(0),null);var ch_30067 = cljs.core.nth.call(null,vec__29904_30065,(1),null);cljs.core.async.close_BANG_.call(null,ch_30067);
{
var G__30068 = seq__29900_30061;
var G__30069 = chunk__29901_30062;
var G__30070 = count__29902_30063;
var G__30071 = (i__29903_30064 + (1));
seq__29900_30061 = G__30068;
chunk__29901_30062 = G__30069;
count__29902_30063 = G__30070;
i__29903_30064 = G__30071;
continue;
}
} else
{var temp__4126__auto___30072 = cljs.core.seq.call(null,seq__29900_30061);if(temp__4126__auto___30072)
{var seq__29900_30073__$1 = temp__4126__auto___30072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29900_30073__$1))
{var c__4408__auto___30074 = cljs.core.chunk_first.call(null,seq__29900_30073__$1);{
var G__30075 = cljs.core.chunk_rest.call(null,seq__29900_30073__$1);
var G__30076 = c__4408__auto___30074;
var G__30077 = cljs.core.count.call(null,c__4408__auto___30074);
var G__30078 = (0);
seq__29900_30061 = G__30075;
chunk__29901_30062 = G__30076;
count__29902_30063 = G__30077;
i__29903_30064 = G__30078;
continue;
}
} else
{var vec__29905_30079 = cljs.core.first.call(null,seq__29900_30073__$1);var component_id_30080 = cljs.core.nth.call(null,vec__29905_30079,(0),null);var ch_30081 = cljs.core.nth.call(null,vec__29905_30079,(1),null);cljs.core.async.close_BANG_.call(null,ch_30081);
{
var G__30082 = cljs.core.next.call(null,seq__29900_30073__$1);
var G__30083 = null;
var G__30084 = (0);
var G__30085 = (0);
seq__29900_30061 = G__30082;
chunk__29901_30062 = G__30083;
count__29902_30063 = G__30084;
i__29903_30064 = G__30085;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
;
clustermap.components.filter.t29893.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t29893.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function (state_30001){var state_val_30002 = (state_30001[(1)]);if((state_val_30002 === (7)))
{var inst_29992 = (state_30001[(2)]);var state_30001__$1 = state_30001;if(cljs.core.truth_(inst_29992))
{var statearr_30003_30086 = state_30001__$1;(statearr_30003_30086[(1)] = (25));
} else
{var statearr_30004_30087 = state_30001__$1;(statearr_30004_30087[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (20)))
{var inst_29953 = (state_30001[(7)]);var inst_29912 = (state_30001[(8)]);var inst_29969 = (state_30001[(9)]);var inst_29911 = (state_30001[(10)]);var inst_29918 = (state_30001[(11)]);var inst_29962 = (state_30001[(12)]);var inst_29962__$1 = cljs.core.first.call(null,inst_29953);var inst_29963 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29964 = cljs.core.get.call(null,inst_29912,inst_29962__$1);var inst_29965 = ["FILTER",inst_29911,inst_29962__$1,inst_29964];var inst_29966 = (new cljs.core.PersistentVector(null,4,(5),inst_29963,inst_29965,null));var inst_29967 = cljs.core.clj__GT_js.call(null,inst_29966);var inst_29968 = console.log(inst_29967);var inst_29969__$1 = cljs.core.get.call(null,inst_29918,inst_29962__$1);var state_30001__$1 = (function (){var statearr_30005 = state_30001;(statearr_30005[(13)] = inst_29968);
(statearr_30005[(9)] = inst_29969__$1);
(statearr_30005[(12)] = inst_29962__$1);
return statearr_30005;
})();if(cljs.core.truth_(inst_29969__$1))
{var statearr_30006_30088 = state_30001__$1;(statearr_30006_30088[(1)] = (22));
} else
{var statearr_30007_30089 = state_30001__$1;(statearr_30007_30089[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (27)))
{var inst_29997 = (state_30001[(2)]);var state_30001__$1 = state_30001;var statearr_30008_30090 = state_30001__$1;(statearr_30008_30090[(2)] = inst_29997);
(statearr_30008_30090[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (1)))
{var state_30001__$1 = state_30001;var statearr_30009_30091 = state_30001__$1;(statearr_30009_30091[(2)] = null);
(statearr_30009_30091[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (24)))
{var inst_29953 = (state_30001[(7)]);var inst_29978 = (state_30001[(2)]);var inst_29979 = cljs.core.next.call(null,inst_29953);var inst_29925 = inst_29979;var inst_29926 = null;var inst_29927 = (0);var inst_29928 = (0);var state_30001__$1 = (function (){var statearr_30013 = state_30001;(statearr_30013[(14)] = inst_29927);
(statearr_30013[(15)] = inst_29928);
(statearr_30013[(16)] = inst_29978);
(statearr_30013[(17)] = inst_29925);
(statearr_30013[(18)] = inst_29926);
return statearr_30013;
})();var statearr_30014_30092 = state_30001__$1;(statearr_30014_30092[(2)] = null);
(statearr_30014_30092[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (4)))
{var inst_29908 = (state_30001[(19)]);var inst_29908__$1 = (state_30001[(2)]);var state_30001__$1 = (function (){var statearr_30015 = state_30001;(statearr_30015[(19)] = inst_29908__$1);
return statearr_30015;
})();if(cljs.core.truth_(inst_29908__$1))
{var statearr_30016_30093 = state_30001__$1;(statearr_30016_30093[(1)] = (5));
} else
{var statearr_30017_30094 = state_30001__$1;(statearr_30017_30094[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (15)))
{var inst_29927 = (state_30001[(14)]);var inst_29928 = (state_30001[(15)]);var inst_29925 = (state_30001[(17)]);var inst_29926 = (state_30001[(18)]);var inst_29949 = (state_30001[(2)]);var inst_29950 = (inst_29928 + (1));var tmp30010 = inst_29927;var tmp30011 = inst_29925;var tmp30012 = inst_29926;var inst_29925__$1 = tmp30011;var inst_29926__$1 = tmp30012;var inst_29927__$1 = tmp30010;var inst_29928__$1 = inst_29950;var state_30001__$1 = (function (){var statearr_30018 = state_30001;(statearr_30018[(14)] = inst_29927__$1);
(statearr_30018[(15)] = inst_29928__$1);
(statearr_30018[(17)] = inst_29925__$1);
(statearr_30018[(18)] = inst_29926__$1);
(statearr_30018[(20)] = inst_29949);
return statearr_30018;
})();var statearr_30019_30095 = state_30001__$1;(statearr_30019_30095[(2)] = null);
(statearr_30019_30095[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (21)))
{var inst_29982 = (state_30001[(2)]);var state_30001__$1 = state_30001;var statearr_30020_30096 = state_30001__$1;(statearr_30020_30096[(2)] = inst_29982);
(statearr_30020_30096[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (13)))
{var inst_29912 = (state_30001[(8)]);var inst_29940 = (state_30001[(21)]);var inst_29933 = (state_30001[(22)]);var inst_29942 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29943 = cljs.core.get.call(null,inst_29912,inst_29933);var inst_29944 = [inst_29933,inst_29943];var inst_29945 = (new cljs.core.PersistentVector(null,2,(5),inst_29942,inst_29944,null));var inst_29946 = cljs.core.async.put_BANG_.call(null,inst_29940,inst_29945);var state_30001__$1 = state_30001;var statearr_30021_30097 = state_30001__$1;(statearr_30021_30097[(2)] = inst_29946);
(statearr_30021_30097[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (22)))
{var inst_29912 = (state_30001[(8)]);var inst_29969 = (state_30001[(9)]);var inst_29962 = (state_30001[(12)]);var inst_29971 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29972 = cljs.core.get.call(null,inst_29912,inst_29962);var inst_29973 = [inst_29962,inst_29972];var inst_29974 = (new cljs.core.PersistentVector(null,2,(5),inst_29971,inst_29973,null));var inst_29975 = cljs.core.async.put_BANG_.call(null,inst_29969,inst_29974);var state_30001__$1 = state_30001;var statearr_30022_30098 = state_30001__$1;(statearr_30022_30098[(2)] = inst_29975);
(statearr_30022_30098[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (6)))
{var state_30001__$1 = state_30001;var statearr_30023_30099 = state_30001__$1;(statearr_30023_30099[(2)] = null);
(statearr_30023_30099[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (25)))
{var state_30001__$1 = state_30001;var statearr_30024_30100 = state_30001__$1;(statearr_30024_30100[(2)] = null);
(statearr_30024_30100[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (17)))
{var state_30001__$1 = state_30001;var statearr_30025_30101 = state_30001__$1;(statearr_30025_30101[(2)] = null);
(statearr_30025_30101[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (3)))
{var inst_29999 = (state_30001[(2)]);var state_30001__$1 = state_30001;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30001__$1,inst_29999);
} else
{if((state_val_30002 === (12)))
{var inst_29987 = (state_30001[(2)]);var state_30001__$1 = state_30001;var statearr_30026_30102 = state_30001__$1;(statearr_30026_30102[(2)] = inst_29987);
(statearr_30026_30102[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (2)))
{var state_30001__$1 = state_30001;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30001__$1,(4),filter_rq_sub);
} else
{if((state_val_30002 === (23)))
{var state_30001__$1 = state_30001;var statearr_30027_30103 = state_30001__$1;(statearr_30027_30103[(2)] = null);
(statearr_30027_30103[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (19)))
{var inst_29953 = (state_30001[(7)]);var inst_29957 = cljs.core.chunk_first.call(null,inst_29953);var inst_29958 = cljs.core.chunk_rest.call(null,inst_29953);var inst_29959 = cljs.core.count.call(null,inst_29957);var inst_29925 = inst_29958;var inst_29926 = inst_29957;var inst_29927 = inst_29959;var inst_29928 = (0);var state_30001__$1 = (function (){var statearr_30028 = state_30001;(statearr_30028[(14)] = inst_29927);
(statearr_30028[(15)] = inst_29928);
(statearr_30028[(17)] = inst_29925);
(statearr_30028[(18)] = inst_29926);
return statearr_30028;
})();var statearr_30029_30104 = state_30001__$1;(statearr_30029_30104[(2)] = null);
(statearr_30029_30104[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (11)))
{var inst_29953 = (state_30001[(7)]);var inst_29925 = (state_30001[(17)]);var inst_29953__$1 = cljs.core.seq.call(null,inst_29925);var state_30001__$1 = (function (){var statearr_30030 = state_30001;(statearr_30030[(7)] = inst_29953__$1);
return statearr_30030;
})();if(inst_29953__$1)
{var statearr_30031_30105 = state_30001__$1;(statearr_30031_30105[(1)] = (16));
} else
{var statearr_30032_30106 = state_30001__$1;(statearr_30032_30106[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (9)))
{var inst_29989 = (state_30001[(2)]);var state_30001__$1 = (function (){var statearr_30033 = state_30001;(statearr_30033[(23)] = inst_29989);
return statearr_30033;
})();var statearr_30034_30107 = state_30001__$1;(statearr_30034_30107[(2)] = true);
(statearr_30034_30107[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (5)))
{var inst_29912 = (state_30001[(8)]);var inst_29908 = (state_30001[(19)]);var inst_29911 = (state_30001[(10)]);var inst_29911__$1 = cljs.core.nth.call(null,inst_29908,(0),null);var inst_29912__$1 = cljs.core.nth.call(null,inst_29908,(1),null);var inst_29913 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29914 = ["FILTER-RQ",inst_29911__$1,inst_29912__$1];var inst_29915 = (new cljs.core.PersistentVector(null,3,(5),inst_29913,inst_29914,null));var inst_29916 = cljs.core.clj__GT_js.call(null,inst_29915);var inst_29917 = console.log(inst_29916);var inst_29918 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_29919 = cljs.core.keys.call(null,inst_29912__$1);var inst_29924 = cljs.core.seq.call(null,inst_29919);var inst_29925 = inst_29924;var inst_29926 = null;var inst_29927 = (0);var inst_29928 = (0);var state_30001__$1 = (function (){var statearr_30035 = state_30001;(statearr_30035[(14)] = inst_29927);
(statearr_30035[(8)] = inst_29912__$1);
(statearr_30035[(24)] = inst_29917);
(statearr_30035[(15)] = inst_29928);
(statearr_30035[(10)] = inst_29911__$1);
(statearr_30035[(11)] = inst_29918);
(statearr_30035[(17)] = inst_29925);
(statearr_30035[(18)] = inst_29926);
return statearr_30035;
})();var statearr_30036_30108 = state_30001__$1;(statearr_30036_30108[(2)] = null);
(statearr_30036_30108[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (14)))
{var state_30001__$1 = state_30001;var statearr_30037_30109 = state_30001__$1;(statearr_30037_30109[(2)] = null);
(statearr_30037_30109[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (26)))
{var state_30001__$1 = state_30001;var statearr_30038_30110 = state_30001__$1;(statearr_30038_30110[(2)] = null);
(statearr_30038_30110[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (16)))
{var inst_29953 = (state_30001[(7)]);var inst_29955 = cljs.core.chunked_seq_QMARK_.call(null,inst_29953);var state_30001__$1 = state_30001;if(inst_29955)
{var statearr_30039_30111 = state_30001__$1;(statearr_30039_30111[(1)] = (19));
} else
{var statearr_30040_30112 = state_30001__$1;(statearr_30040_30112[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (10)))
{var inst_29912 = (state_30001[(8)]);var inst_29940 = (state_30001[(21)]);var inst_29928 = (state_30001[(15)]);var inst_29911 = (state_30001[(10)]);var inst_29918 = (state_30001[(11)]);var inst_29926 = (state_30001[(18)]);var inst_29933 = (state_30001[(22)]);var inst_29933__$1 = cljs.core._nth.call(null,inst_29926,inst_29928);var inst_29934 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29935 = cljs.core.get.call(null,inst_29912,inst_29933__$1);var inst_29936 = ["FILTER",inst_29911,inst_29933__$1,inst_29935];var inst_29937 = (new cljs.core.PersistentVector(null,4,(5),inst_29934,inst_29936,null));var inst_29938 = cljs.core.clj__GT_js.call(null,inst_29937);var inst_29939 = console.log(inst_29938);var inst_29940__$1 = cljs.core.get.call(null,inst_29918,inst_29933__$1);var state_30001__$1 = (function (){var statearr_30041 = state_30001;(statearr_30041[(25)] = inst_29939);
(statearr_30041[(21)] = inst_29940__$1);
(statearr_30041[(22)] = inst_29933__$1);
return statearr_30041;
})();if(cljs.core.truth_(inst_29940__$1))
{var statearr_30042_30113 = state_30001__$1;(statearr_30042_30113[(1)] = (13));
} else
{var statearr_30043_30114 = state_30001__$1;(statearr_30043_30114[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (18)))
{var inst_29985 = (state_30001[(2)]);var state_30001__$1 = state_30001;var statearr_30044_30115 = state_30001__$1;(statearr_30044_30115[(2)] = inst_29985);
(statearr_30044_30115[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30002 === (8)))
{var inst_29927 = (state_30001[(14)]);var inst_29928 = (state_30001[(15)]);var inst_29930 = (inst_29928 < inst_29927);var inst_29931 = inst_29930;var state_30001__$1 = state_30001;if(cljs.core.truth_(inst_29931))
{var statearr_30045_30116 = state_30001__$1;(statearr_30045_30116[(1)] = (10));
} else
{var statearr_30046_30117 = state_30001__$1;(statearr_30046_30117[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30050[(0)] = state_machine__9111__auto__);
(statearr_30050[(1)] = (1));
return statearr_30050;
});
var state_machine__9111__auto____1 = (function (state_30001){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30001);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30051){if((e30051 instanceof Object))
{var ex__9114__auto__ = e30051;var statearr_30052_30118 = state_30001;(statearr_30052_30118[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30001);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30051;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30119 = state_30001;
state_30001 = G__30119;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30001){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
})();var state__9127__auto__ = (function (){var statearr_30053 = f__9126__auto__.call(null);(statearr_30053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30053;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
;
clustermap.components.filter.t29893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function (_29895){var self__ = this;
var _29895__$1 = this;return self__.meta29894;
});})(owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
;
clustermap.components.filter.t29893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function (_29895,meta29894__$1){var self__ = this;
var _29895__$1 = this;return (new clustermap.components.filter.t29893(self__.G__29731,self__.input_checker29729,self__.map29726,self__.map29725,self__.owner,self__.input_schema29728,self__.output_checker29730,self__.component_specs,self__.filter_spec,self__.history,self__.components,self__.validate__6034__auto__,self__.id,self__.constructor29722,self__.output_schema29727,self__.filter_rq_pub,self__.ufv__,self__.url_components,self__.map29724,meta29894__$1));
});})(owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
;
clustermap.components.filter.__GT_t29893 = ((function (owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730){
return (function __GT_t29893(G__29731__$1,input_checker29729__$1,map29726__$1,map29725__$1,owner__$1,input_schema29728__$1,output_checker29730__$1,component_specs__$1,filter_spec__$1,history__$1,components__$1,validate__6034__auto____$1,id__$1,constructor29722__$1,output_schema29727__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,map29724__$1,meta29894){return (new clustermap.components.filter.t29893(G__29731__$1,input_checker29729__$1,map29726__$1,map29725__$1,owner__$1,input_schema29728__$1,output_checker29730__$1,component_specs__$1,filter_spec__$1,history__$1,components__$1,validate__6034__auto____$1,id__$1,constructor29722__$1,output_schema29727__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,map29724__$1,meta29894));
});})(owner,history,filter_rq_pub,map29725,url_components,components,component_specs,id,filter_spec,map29726,validate__6034__auto__,ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
;
}
return (new clustermap.components.filter.t29893(G__29731,input_checker29729,map29726,map29725,owner,input_schema29728,output_checker29730,component_specs,filter_spec,history,components,validate__6034__auto__,id,constructor29722,output_schema29727,filter_rq_pub,ufv__,url_components,map29724,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30120 = output_checker29730.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30120))
{var error__6036__auto___30121 = temp__4126__auto___30120;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29722","constructor29722",1747178075,null),cljs.core.pr_str.call(null,error__6036__auto___30121)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30121,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29727,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29727,input_schema29728,input_checker29729,output_checker29730))
,schema.core.make_fn_schema.call(null,output_schema29727,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29728], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30057){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29721,p__30054){var vec__30056 = p__30054;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30056,(0),null);return component_fnk__7881__auto___30057.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29721),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29721,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29721,var_args){
var p__30054 = null;if (arguments.length > 2) {
  p__30054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29721,p__30054);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30122){
var data__7882__auto__ = cljs.core.first(arglist__30122);
arglist__30122 = cljs.core.next(arglist__30122);
var owner29721 = cljs.core.first(arglist__30122);
var p__30054 = cljs.core.rest(arglist__30122);
return filter_component__delegate(data__7882__auto__,owner29721,p__30054);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30057))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29723){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29723);
});
__GT_filter_component = function(cursor__7850__auto__,m29723){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
