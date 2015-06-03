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
goog.require('clustermap.formats.url');
goog.require('clustermap.formats.url');
goog.require('clustermap.filters');
/**
* delegate to filter-component type parsers for each fragment param
* which matches a component id
*/
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__28481){var map__28483 = p__28481;var map__28483__$1 = ((cljs.core.seq_QMARK_.call(null,map__28483))?cljs.core.apply.call(null,cljs.core.hash_map,map__28483):map__28483);var filter_spec = map__28483__$1;var component_descrs = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__28484){var map__28486 = p__28484;var map__28486__$1 = ((cljs.core.seq_QMARK_.call(null,map__28486))?cljs.core.apply.call(null,cljs.core.hash_map,map__28486):map__28486);var filter_spec = map__28486__$1;var component_descrs = cljs.core.get.call(null,map__28486__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28486__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28486__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__28487,component_filter_rq_chan){var map__28492 = p__28487;var map__28492__$1 = ((cljs.core.seq_QMARK_.call(null,map__28492))?cljs.core.apply.call(null,cljs.core.hash_map,map__28492):map__28492);var component_spec = map__28492__$1;var type = cljs.core.get.call(null,map__28492__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__28493 = cljs.core._EQ_;var expr__28494 = type;if(cljs.core.truth_(pred__28493.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__28494)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28493.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__28494)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28493.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__28494)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28493.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__28494)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28493.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__28494)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28494))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__28496,component_filter_rq_chan){var map__28498 = p__28496;var map__28498__$1 = ((cljs.core.seq_QMARK_.call(null,map__28498))?cljs.core.apply.call(null,cljs.core.hash_map,map__28498):map__28498);var component_spec = map__28498__$1;var skip_label = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__28498__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(filter_spec)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28500 = schema.core.Any;var input_schema28501 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28499","map28499",-26351787,null))], null);var input_checker28502 = schema.core.checker.call(null,input_schema28501);var output_checker28503 = schema.core.checker.call(null,output_schema28500);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28500,input_schema28501,input_checker28502,output_checker28503){
return (function render_STAR_(G__28504){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28521 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28504], null);var temp__4126__auto___28522 = input_checker28502.call(null,args__6035__auto___28521);if(cljs.core.truth_(temp__4126__auto___28522))
{var error__6036__auto___28523 = temp__4126__auto___28522;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28523)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28523,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28521,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28501,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28499 = G__28504;while(true){
if(cljs.core.map_QMARK_.call(null,map28499))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28499)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28499,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map28499,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map28499,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28500,input_schema28501,input_checker28502,output_checker28503){
return (function iter__28513(s__28514){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28500,input_schema28501,input_checker28502,output_checker28503){
return (function (){var s__28514__$1 = s__28514;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28514__$1);if(temp__4126__auto__)
{var s__28514__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28514__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28514__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28516 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28515 = (0);while(true){
if((i__28515 < size__4376__auto__))
{var map__28519 = cljs.core._nth.call(null,c__4375__auto__,i__28515);var map__28519__$1 = ((cljs.core.seq_QMARK_.call(null,map__28519))?cljs.core.apply.call(null,cljs.core.hash_map,map__28519):map__28519);var component_spec = map__28519__$1;var id = cljs.core.get.call(null,map__28519__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__28516,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__28524 = (i__28515 + (1));
i__28515 = G__28524;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28516),iter__28513.call(null,cljs.core.chunk_rest.call(null,s__28514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28516),null);
}
} else
{var map__28520 = cljs.core.first.call(null,s__28514__$2);var map__28520__$1 = ((cljs.core.seq_QMARK_.call(null,map__28520))?cljs.core.apply.call(null,cljs.core.hash_map,map__28520):map__28520);var component_spec = map__28520__$1;var id = cljs.core.get.call(null,map__28520__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__28513.call(null,cljs.core.rest.call(null,s__28514__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28500,input_schema28501,input_checker28502,output_checker28503))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28500,input_schema28501,input_checker28502,output_checker28503))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28525 = output_checker28503.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28525))
{var error__6036__auto___28526 = temp__4126__auto___28525;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28526)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28526,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28500,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28500,input_schema28501,input_checker28502,output_checker28503))
,schema.core.make_fn_schema.call(null,output_schema28500,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28501], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___28863 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28533 = schema.core.Any;var input_schema28534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28530","map28530",179079416,null))], null);var input_checker28535 = schema.core.checker.call(null,input_schema28534);var output_checker28536 = schema.core.checker.call(null,output_schema28533);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function constructor28528(G__28537){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28537], null);var temp__4126__auto___28865 = input_checker28535.call(null,args__6035__auto___28864);if(cljs.core.truth_(temp__4126__auto___28865))
{var error__6036__auto___28866 = temp__4126__auto___28865;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28528","constructor28528",-1062087108,null),cljs.core.pr_str.call(null,error__6036__auto___28866)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28866,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28864,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28534,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28530 = G__28537;while(true){
if(cljs.core.map_QMARK_.call(null,map28530))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28530)));
}
var map28532 = plumbing.fnk.schema.safe_get.call(null,map28530,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28532,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map28531 = plumbing.fnk.schema.safe_get.call(null,map28530,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map28531,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map28531,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28530,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t28699 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t28699 = (function (G__28537,owner,output_schema28533,component_specs,filter_spec,map28531,input_checker28535,history,map28530,components,validate__6034__auto__,map28532,output_checker28536,id,constructor28528,filter_rq_pub,ufv__,url_components,input_schema28534,meta28700){
this.G__28537 = G__28537;
this.owner = owner;
this.output_schema28533 = output_schema28533;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.map28531 = map28531;
this.input_checker28535 = input_checker28535;
this.history = history;
this.map28530 = map28530;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.map28532 = map28532;
this.output_checker28536 = output_checker28536;
this.id = id;
this.constructor28528 = constructor28528;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.input_schema28534 = input_schema28534;
this.meta28700 = meta28700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t28699.cljs$lang$type = true;
clustermap.components.filter.t28699.cljs$lang$ctorStr = "clustermap.components.filter/t28699";
clustermap.components.filter.t28699.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t28699");
});})(owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
;
clustermap.components.filter.t28699.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t28699.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
;
clustermap.components.filter.t28699.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t28699.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function (_,p__28702,___$1){var self__ = this;
var map__28703 = p__28702;var map__28703__$1 = ((cljs.core.seq_QMARK_.call(null,map__28703))?cljs.core.apply.call(null,cljs.core.hash_map,map__28703):map__28703);var next_props = map__28703__$1;var map__28704 = cljs.core.get.call(null,map__28703__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28704__$1 = ((cljs.core.seq_QMARK_.call(null,map__28704))?cljs.core.apply.call(null,cljs.core.hash_map,map__28704):map__28704);var next_filter_spec = map__28704__$1;var map__28705 = cljs.core.get.call(null,map__28704__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__28705__$1 = ((cljs.core.seq_QMARK_.call(null,map__28705))?cljs.core.apply.call(null,cljs.core.hash_map,map__28705):map__28705);var next_url_components = map__28705__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
;
clustermap.components.filter.t28699.prototype.om$core$IRender$ = true;
clustermap.components.filter.t28699.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
;
clustermap.components.filter.t28699.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t28699.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__28706_28867 = cljs.core.seq.call(null,chs);var chunk__28707_28868 = null;var count__28708_28869 = (0);var i__28709_28870 = (0);while(true){
if((i__28709_28870 < count__28708_28869))
{var vec__28710_28871 = cljs.core._nth.call(null,chunk__28707_28868,i__28709_28870);var component_id_28872 = cljs.core.nth.call(null,vec__28710_28871,(0),null);var ch_28873 = cljs.core.nth.call(null,vec__28710_28871,(1),null);cljs.core.async.close_BANG_.call(null,ch_28873);
{
var G__28874 = seq__28706_28867;
var G__28875 = chunk__28707_28868;
var G__28876 = count__28708_28869;
var G__28877 = (i__28709_28870 + (1));
seq__28706_28867 = G__28874;
chunk__28707_28868 = G__28875;
count__28708_28869 = G__28876;
i__28709_28870 = G__28877;
continue;
}
} else
{var temp__4126__auto___28878 = cljs.core.seq.call(null,seq__28706_28867);if(temp__4126__auto___28878)
{var seq__28706_28879__$1 = temp__4126__auto___28878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28706_28879__$1))
{var c__4408__auto___28880 = cljs.core.chunk_first.call(null,seq__28706_28879__$1);{
var G__28881 = cljs.core.chunk_rest.call(null,seq__28706_28879__$1);
var G__28882 = c__4408__auto___28880;
var G__28883 = cljs.core.count.call(null,c__4408__auto___28880);
var G__28884 = (0);
seq__28706_28867 = G__28881;
chunk__28707_28868 = G__28882;
count__28708_28869 = G__28883;
i__28709_28870 = G__28884;
continue;
}
} else
{var vec__28711_28885 = cljs.core.first.call(null,seq__28706_28879__$1);var component_id_28886 = cljs.core.nth.call(null,vec__28711_28885,(0),null);var ch_28887 = cljs.core.nth.call(null,vec__28711_28885,(1),null);cljs.core.async.close_BANG_.call(null,ch_28887);
{
var G__28888 = cljs.core.next.call(null,seq__28706_28879__$1);
var G__28889 = null;
var G__28890 = (0);
var G__28891 = (0);
seq__28706_28867 = G__28888;
chunk__28707_28868 = G__28889;
count__28708_28869 = G__28890;
i__28709_28870 = G__28891;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
;
clustermap.components.filter.t28699.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t28699.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function (state_28807){var state_val_28808 = (state_28807[(1)]);if((state_val_28808 === (7)))
{var inst_28798 = (state_28807[(2)]);var state_28807__$1 = state_28807;if(cljs.core.truth_(inst_28798))
{var statearr_28809_28892 = state_28807__$1;(statearr_28809_28892[(1)] = (25));
} else
{var statearr_28810_28893 = state_28807__$1;(statearr_28810_28893[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (20)))
{var inst_28775 = (state_28807[(7)]);var inst_28724 = (state_28807[(8)]);var inst_28759 = (state_28807[(9)]);var inst_28718 = (state_28807[(10)]);var inst_28768 = (state_28807[(11)]);var inst_28717 = (state_28807[(12)]);var inst_28768__$1 = cljs.core.first.call(null,inst_28759);var inst_28769 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28770 = cljs.core.get.call(null,inst_28718,inst_28768__$1);var inst_28771 = ["FILTER",inst_28717,inst_28768__$1,inst_28770];var inst_28772 = (new cljs.core.PersistentVector(null,4,(5),inst_28769,inst_28771,null));var inst_28773 = cljs.core.clj__GT_js.call(null,inst_28772);var inst_28774 = console.log(inst_28773);var inst_28775__$1 = cljs.core.get.call(null,inst_28724,inst_28768__$1);var state_28807__$1 = (function (){var statearr_28811 = state_28807;(statearr_28811[(7)] = inst_28775__$1);
(statearr_28811[(11)] = inst_28768__$1);
(statearr_28811[(13)] = inst_28774);
return statearr_28811;
})();if(cljs.core.truth_(inst_28775__$1))
{var statearr_28812_28894 = state_28807__$1;(statearr_28812_28894[(1)] = (22));
} else
{var statearr_28813_28895 = state_28807__$1;(statearr_28813_28895[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (27)))
{var inst_28803 = (state_28807[(2)]);var state_28807__$1 = state_28807;var statearr_28814_28896 = state_28807__$1;(statearr_28814_28896[(2)] = inst_28803);
(statearr_28814_28896[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (1)))
{var state_28807__$1 = state_28807;var statearr_28815_28897 = state_28807__$1;(statearr_28815_28897[(2)] = null);
(statearr_28815_28897[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (24)))
{var inst_28759 = (state_28807[(9)]);var inst_28784 = (state_28807[(2)]);var inst_28785 = cljs.core.next.call(null,inst_28759);var inst_28731 = inst_28785;var inst_28732 = null;var inst_28733 = (0);var inst_28734 = (0);var state_28807__$1 = (function (){var statearr_28819 = state_28807;(statearr_28819[(14)] = inst_28784);
(statearr_28819[(15)] = inst_28733);
(statearr_28819[(16)] = inst_28731);
(statearr_28819[(17)] = inst_28732);
(statearr_28819[(18)] = inst_28734);
return statearr_28819;
})();var statearr_28820_28898 = state_28807__$1;(statearr_28820_28898[(2)] = null);
(statearr_28820_28898[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (4)))
{var inst_28714 = (state_28807[(19)]);var inst_28714__$1 = (state_28807[(2)]);var state_28807__$1 = (function (){var statearr_28821 = state_28807;(statearr_28821[(19)] = inst_28714__$1);
return statearr_28821;
})();if(cljs.core.truth_(inst_28714__$1))
{var statearr_28822_28899 = state_28807__$1;(statearr_28822_28899[(1)] = (5));
} else
{var statearr_28823_28900 = state_28807__$1;(statearr_28823_28900[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (15)))
{var inst_28733 = (state_28807[(15)]);var inst_28731 = (state_28807[(16)]);var inst_28732 = (state_28807[(17)]);var inst_28734 = (state_28807[(18)]);var inst_28755 = (state_28807[(2)]);var inst_28756 = (inst_28734 + (1));var tmp28816 = inst_28733;var tmp28817 = inst_28731;var tmp28818 = inst_28732;var inst_28731__$1 = tmp28817;var inst_28732__$1 = tmp28818;var inst_28733__$1 = tmp28816;var inst_28734__$1 = inst_28756;var state_28807__$1 = (function (){var statearr_28824 = state_28807;(statearr_28824[(15)] = inst_28733__$1);
(statearr_28824[(16)] = inst_28731__$1);
(statearr_28824[(17)] = inst_28732__$1);
(statearr_28824[(18)] = inst_28734__$1);
(statearr_28824[(20)] = inst_28755);
return statearr_28824;
})();var statearr_28825_28901 = state_28807__$1;(statearr_28825_28901[(2)] = null);
(statearr_28825_28901[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (21)))
{var inst_28788 = (state_28807[(2)]);var state_28807__$1 = state_28807;var statearr_28826_28902 = state_28807__$1;(statearr_28826_28902[(2)] = inst_28788);
(statearr_28826_28902[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (13)))
{var inst_28739 = (state_28807[(21)]);var inst_28718 = (state_28807[(10)]);var inst_28746 = (state_28807[(22)]);var inst_28748 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28749 = cljs.core.get.call(null,inst_28718,inst_28739);var inst_28750 = [inst_28739,inst_28749];var inst_28751 = (new cljs.core.PersistentVector(null,2,(5),inst_28748,inst_28750,null));var inst_28752 = cljs.core.async.put_BANG_.call(null,inst_28746,inst_28751);var state_28807__$1 = state_28807;var statearr_28827_28903 = state_28807__$1;(statearr_28827_28903[(2)] = inst_28752);
(statearr_28827_28903[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (22)))
{var inst_28775 = (state_28807[(7)]);var inst_28718 = (state_28807[(10)]);var inst_28768 = (state_28807[(11)]);var inst_28777 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28778 = cljs.core.get.call(null,inst_28718,inst_28768);var inst_28779 = [inst_28768,inst_28778];var inst_28780 = (new cljs.core.PersistentVector(null,2,(5),inst_28777,inst_28779,null));var inst_28781 = cljs.core.async.put_BANG_.call(null,inst_28775,inst_28780);var state_28807__$1 = state_28807;var statearr_28828_28904 = state_28807__$1;(statearr_28828_28904[(2)] = inst_28781);
(statearr_28828_28904[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (6)))
{var state_28807__$1 = state_28807;var statearr_28829_28905 = state_28807__$1;(statearr_28829_28905[(2)] = null);
(statearr_28829_28905[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (25)))
{var state_28807__$1 = state_28807;var statearr_28830_28906 = state_28807__$1;(statearr_28830_28906[(2)] = null);
(statearr_28830_28906[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (17)))
{var state_28807__$1 = state_28807;var statearr_28831_28907 = state_28807__$1;(statearr_28831_28907[(2)] = null);
(statearr_28831_28907[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (3)))
{var inst_28805 = (state_28807[(2)]);var state_28807__$1 = state_28807;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28807__$1,inst_28805);
} else
{if((state_val_28808 === (12)))
{var inst_28793 = (state_28807[(2)]);var state_28807__$1 = state_28807;var statearr_28832_28908 = state_28807__$1;(statearr_28832_28908[(2)] = inst_28793);
(statearr_28832_28908[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (2)))
{var state_28807__$1 = state_28807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28807__$1,(4),filter_rq_sub);
} else
{if((state_val_28808 === (23)))
{var state_28807__$1 = state_28807;var statearr_28833_28909 = state_28807__$1;(statearr_28833_28909[(2)] = null);
(statearr_28833_28909[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (19)))
{var inst_28759 = (state_28807[(9)]);var inst_28763 = cljs.core.chunk_first.call(null,inst_28759);var inst_28764 = cljs.core.chunk_rest.call(null,inst_28759);var inst_28765 = cljs.core.count.call(null,inst_28763);var inst_28731 = inst_28764;var inst_28732 = inst_28763;var inst_28733 = inst_28765;var inst_28734 = (0);var state_28807__$1 = (function (){var statearr_28834 = state_28807;(statearr_28834[(15)] = inst_28733);
(statearr_28834[(16)] = inst_28731);
(statearr_28834[(17)] = inst_28732);
(statearr_28834[(18)] = inst_28734);
return statearr_28834;
})();var statearr_28835_28910 = state_28807__$1;(statearr_28835_28910[(2)] = null);
(statearr_28835_28910[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (11)))
{var inst_28759 = (state_28807[(9)]);var inst_28731 = (state_28807[(16)]);var inst_28759__$1 = cljs.core.seq.call(null,inst_28731);var state_28807__$1 = (function (){var statearr_28836 = state_28807;(statearr_28836[(9)] = inst_28759__$1);
return statearr_28836;
})();if(inst_28759__$1)
{var statearr_28837_28911 = state_28807__$1;(statearr_28837_28911[(1)] = (16));
} else
{var statearr_28838_28912 = state_28807__$1;(statearr_28838_28912[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (9)))
{var inst_28795 = (state_28807[(2)]);var state_28807__$1 = (function (){var statearr_28839 = state_28807;(statearr_28839[(23)] = inst_28795);
return statearr_28839;
})();var statearr_28840_28913 = state_28807__$1;(statearr_28840_28913[(2)] = true);
(statearr_28840_28913[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (5)))
{var inst_28718 = (state_28807[(10)]);var inst_28714 = (state_28807[(19)]);var inst_28717 = (state_28807[(12)]);var inst_28717__$1 = cljs.core.nth.call(null,inst_28714,(0),null);var inst_28718__$1 = cljs.core.nth.call(null,inst_28714,(1),null);var inst_28719 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28720 = ["FILTER-RQ",inst_28717__$1,inst_28718__$1];var inst_28721 = (new cljs.core.PersistentVector(null,3,(5),inst_28719,inst_28720,null));var inst_28722 = cljs.core.clj__GT_js.call(null,inst_28721);var inst_28723 = console.log(inst_28722);var inst_28724 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_28725 = cljs.core.keys.call(null,inst_28718__$1);var inst_28730 = cljs.core.seq.call(null,inst_28725);var inst_28731 = inst_28730;var inst_28732 = null;var inst_28733 = (0);var inst_28734 = (0);var state_28807__$1 = (function (){var statearr_28841 = state_28807;(statearr_28841[(24)] = inst_28723);
(statearr_28841[(8)] = inst_28724);
(statearr_28841[(10)] = inst_28718__$1);
(statearr_28841[(15)] = inst_28733);
(statearr_28841[(16)] = inst_28731);
(statearr_28841[(12)] = inst_28717__$1);
(statearr_28841[(17)] = inst_28732);
(statearr_28841[(18)] = inst_28734);
return statearr_28841;
})();var statearr_28842_28914 = state_28807__$1;(statearr_28842_28914[(2)] = null);
(statearr_28842_28914[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (14)))
{var state_28807__$1 = state_28807;var statearr_28843_28915 = state_28807__$1;(statearr_28843_28915[(2)] = null);
(statearr_28843_28915[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (26)))
{var state_28807__$1 = state_28807;var statearr_28844_28916 = state_28807__$1;(statearr_28844_28916[(2)] = null);
(statearr_28844_28916[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (16)))
{var inst_28759 = (state_28807[(9)]);var inst_28761 = cljs.core.chunked_seq_QMARK_.call(null,inst_28759);var state_28807__$1 = state_28807;if(inst_28761)
{var statearr_28845_28917 = state_28807__$1;(statearr_28845_28917[(1)] = (19));
} else
{var statearr_28846_28918 = state_28807__$1;(statearr_28846_28918[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (10)))
{var inst_28739 = (state_28807[(21)]);var inst_28724 = (state_28807[(8)]);var inst_28718 = (state_28807[(10)]);var inst_28717 = (state_28807[(12)]);var inst_28746 = (state_28807[(22)]);var inst_28732 = (state_28807[(17)]);var inst_28734 = (state_28807[(18)]);var inst_28739__$1 = cljs.core._nth.call(null,inst_28732,inst_28734);var inst_28740 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28741 = cljs.core.get.call(null,inst_28718,inst_28739__$1);var inst_28742 = ["FILTER",inst_28717,inst_28739__$1,inst_28741];var inst_28743 = (new cljs.core.PersistentVector(null,4,(5),inst_28740,inst_28742,null));var inst_28744 = cljs.core.clj__GT_js.call(null,inst_28743);var inst_28745 = console.log(inst_28744);var inst_28746__$1 = cljs.core.get.call(null,inst_28724,inst_28739__$1);var state_28807__$1 = (function (){var statearr_28847 = state_28807;(statearr_28847[(21)] = inst_28739__$1);
(statearr_28847[(22)] = inst_28746__$1);
(statearr_28847[(25)] = inst_28745);
return statearr_28847;
})();if(cljs.core.truth_(inst_28746__$1))
{var statearr_28848_28919 = state_28807__$1;(statearr_28848_28919[(1)] = (13));
} else
{var statearr_28849_28920 = state_28807__$1;(statearr_28849_28920[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (18)))
{var inst_28791 = (state_28807[(2)]);var state_28807__$1 = state_28807;var statearr_28850_28921 = state_28807__$1;(statearr_28850_28921[(2)] = inst_28791);
(statearr_28850_28921[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28808 === (8)))
{var inst_28733 = (state_28807[(15)]);var inst_28734 = (state_28807[(18)]);var inst_28736 = (inst_28734 < inst_28733);var inst_28737 = inst_28736;var state_28807__$1 = state_28807;if(cljs.core.truth_(inst_28737))
{var statearr_28851_28922 = state_28807__$1;(statearr_28851_28922[(1)] = (10));
} else
{var statearr_28852_28923 = state_28807__$1;(statearr_28852_28923[(1)] = (11));
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
});})(c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
;return ((function (switch__11241__auto__,c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_28856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28856[(0)] = state_machine__11242__auto__);
(statearr_28856[(1)] = (1));
return statearr_28856;
});
var state_machine__11242__auto____1 = (function (state_28807){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_28807);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e28857){if((e28857 instanceof Object))
{var ex__11245__auto__ = e28857;var statearr_28858_28924 = state_28807;(statearr_28858_28924[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28807);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28857;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28925 = state_28807;
state_28807 = G__28925;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_28807){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_28807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
})();var state__11299__auto__ = (function (){var statearr_28859 = f__11298__auto__.call(null);(statearr_28859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_28859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
);
return c__11297__auto__;
});})(owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
;
clustermap.components.filter.t28699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function (_28701){var self__ = this;
var _28701__$1 = this;return self__.meta28700;
});})(owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
;
clustermap.components.filter.t28699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function (_28701,meta28700__$1){var self__ = this;
var _28701__$1 = this;return (new clustermap.components.filter.t28699(self__.G__28537,self__.owner,self__.output_schema28533,self__.component_specs,self__.filter_spec,self__.map28531,self__.input_checker28535,self__.history,self__.map28530,self__.components,self__.validate__6034__auto__,self__.map28532,self__.output_checker28536,self__.id,self__.constructor28528,self__.filter_rq_pub,self__.ufv__,self__.url_components,self__.input_schema28534,meta28700__$1));
});})(owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
;
clustermap.components.filter.__GT_t28699 = ((function (owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536){
return (function __GT_t28699(G__28537__$1,owner__$1,output_schema28533__$1,component_specs__$1,filter_spec__$1,map28531__$1,input_checker28535__$1,history__$1,map28530__$1,components__$1,validate__6034__auto____$1,map28532__$1,output_checker28536__$1,id__$1,constructor28528__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,input_schema28534__$1,meta28700){return (new clustermap.components.filter.t28699(G__28537__$1,owner__$1,output_schema28533__$1,component_specs__$1,filter_spec__$1,map28531__$1,input_checker28535__$1,history__$1,map28530__$1,components__$1,validate__6034__auto____$1,map28532__$1,output_checker28536__$1,id__$1,constructor28528__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,input_schema28534__$1,meta28700));
});})(owner,history,filter_rq_pub,map28531,url_components,components,component_specs,id,filter_spec,map28532,validate__6034__auto__,ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
;
}
return (new clustermap.components.filter.t28699(G__28537,owner,output_schema28533,component_specs,filter_spec,map28531,input_checker28535,history,map28530,components,validate__6034__auto__,map28532,output_checker28536,id,constructor28528,filter_rq_pub,ufv__,url_components,input_schema28534,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28926 = output_checker28536.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28926))
{var error__6036__auto___28927 = temp__4126__auto___28926;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28528","constructor28528",-1062087108,null),cljs.core.pr_str.call(null,error__6036__auto___28927)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28927,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28533,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28533,input_schema28534,input_checker28535,output_checker28536))
,schema.core.make_fn_schema.call(null,output_schema28533,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28534], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___28863){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner28527,p__28860){var vec__28862 = p__28860;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28862,(0),null);return component_fnk__7881__auto___28863.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28527),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28527,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner28527,var_args){
var p__28860 = null;if (arguments.length > 2) {
  p__28860 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner28527,p__28860);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__28928){
var data__7882__auto__ = cljs.core.first(arglist__28928);
arglist__28928 = cljs.core.next(arglist__28928);
var owner28527 = cljs.core.first(arglist__28928);
var p__28860 = cljs.core.rest(arglist__28928);
return filter_component__delegate(data__7882__auto__,owner28527,p__28860);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___28863))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m28529){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m28529);
});
__GT_filter_component = function(cursor__7850__auto__,m28529){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m28529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
