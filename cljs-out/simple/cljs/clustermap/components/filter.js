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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29538){var map__29540 = p__29538;var map__29540__$1 = ((cljs.core.seq_QMARK_.call(null,map__29540))?cljs.core.apply.call(null,cljs.core.hash_map,map__29540):map__29540);var filter_spec = map__29540__$1;var component_descrs = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29541){var map__29543 = p__29541;var map__29543__$1 = ((cljs.core.seq_QMARK_.call(null,map__29543))?cljs.core.apply.call(null,cljs.core.hash_map,map__29543):map__29543);var filter_spec = map__29543__$1;var component_descrs = cljs.core.get.call(null,map__29543__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29543__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29543__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29544,component_filter_rq_chan){var map__29549 = p__29544;var map__29549__$1 = ((cljs.core.seq_QMARK_.call(null,map__29549))?cljs.core.apply.call(null,cljs.core.hash_map,map__29549):map__29549);var component_spec = map__29549__$1;var type = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29550 = cljs.core._EQ_;var expr__29551 = type;if(cljs.core.truth_(pred__29550.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29551)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29550.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29551)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29550.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29551)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29550.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29551)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29550.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29551)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29551))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29553,component_filter_rq_chan){var map__29555 = p__29553;var map__29555__$1 = ((cljs.core.seq_QMARK_.call(null,map__29555))?cljs.core.apply.call(null,cljs.core.hash_map,map__29555):map__29555);var component_spec = map__29555__$1;var visible = cljs.core.get.call(null,map__29555__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29555__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29555__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29555__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29557 = schema.core.Any;var input_schema29558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29556","map29556",-1859846187,null))], null);var input_checker29559 = schema.core.checker.call(null,input_schema29558);var output_checker29560 = schema.core.checker.call(null,output_schema29557);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29557,input_schema29558,input_checker29559,output_checker29560){
return (function render_STAR_(G__29561){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29561], null);var temp__4126__auto___29579 = input_checker29559.call(null,args__6035__auto___29578);if(cljs.core.truth_(temp__4126__auto___29579))
{var error__6036__auto___29580 = temp__4126__auto___29579;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29580)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29580,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29578,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29558,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29556 = G__29561;while(true){
if(cljs.core.map_QMARK_.call(null,map29556))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29556)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29556,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29556,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29556,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29557,input_schema29558,input_checker29559,output_checker29560){
return (function iter__29570(s__29571){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29557,input_schema29558,input_checker29559,output_checker29560){
return (function (){var s__29571__$1 = s__29571;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29571__$1);if(temp__4126__auto__)
{var s__29571__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29571__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29571__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29573 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29572 = (0);while(true){
if((i__29572 < size__4376__auto__))
{var map__29576 = cljs.core._nth.call(null,c__4375__auto__,i__29572);var map__29576__$1 = ((cljs.core.seq_QMARK_.call(null,map__29576))?cljs.core.apply.call(null,cljs.core.hash_map,map__29576):map__29576);var component_spec = map__29576__$1;var id = cljs.core.get.call(null,map__29576__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29573,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29581 = (i__29572 + (1));
i__29572 = G__29581;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29573),iter__29570.call(null,cljs.core.chunk_rest.call(null,s__29571__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29573),null);
}
} else
{var map__29577 = cljs.core.first.call(null,s__29571__$2);var map__29577__$1 = ((cljs.core.seq_QMARK_.call(null,map__29577))?cljs.core.apply.call(null,cljs.core.hash_map,map__29577):map__29577);var component_spec = map__29577__$1;var id = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29570.call(null,cljs.core.rest.call(null,s__29571__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29557,input_schema29558,input_checker29559,output_checker29560))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29557,input_schema29558,input_checker29559,output_checker29560))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29582 = output_checker29560.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29582))
{var error__6036__auto___29583 = temp__4126__auto___29582;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29583)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29583,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29557,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29557,input_schema29558,input_checker29559,output_checker29560))
,schema.core.make_fn_schema.call(null,output_schema29557,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29558], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___29920 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29590 = schema.core.Any;var input_schema29591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29587","map29587",-1055743920,null))], null);var input_checker29592 = schema.core.checker.call(null,input_schema29591);var output_checker29593 = schema.core.checker.call(null,output_schema29590);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function constructor29585(G__29594){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29921 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29594], null);var temp__4126__auto___29922 = input_checker29592.call(null,args__6035__auto___29921);if(cljs.core.truth_(temp__4126__auto___29922))
{var error__6036__auto___29923 = temp__4126__auto___29922;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29585","constructor29585",-254105279,null),cljs.core.pr_str.call(null,error__6036__auto___29923)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29923,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29921,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29591,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29587 = G__29594;while(true){
if(cljs.core.map_QMARK_.call(null,map29587))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29587)));
}
var map29589 = plumbing.fnk.schema.safe_get.call(null,map29587,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29589,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29588 = plumbing.fnk.schema.safe_get.call(null,map29587,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29588,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29588,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29587,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t29756 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t29756 = (function (constructor29585,owner,map29589,G__29594,input_checker29592,component_specs,filter_spec,map29587,history,input_schema29591,output_checker29593,output_schema29590,map29588,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,meta29757){
this.constructor29585 = constructor29585;
this.owner = owner;
this.map29589 = map29589;
this.G__29594 = G__29594;
this.input_checker29592 = input_checker29592;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.map29587 = map29587;
this.history = history;
this.input_schema29591 = input_schema29591;
this.output_checker29593 = output_checker29593;
this.output_schema29590 = output_schema29590;
this.map29588 = map29588;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta29757 = meta29757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t29756.cljs$lang$type = true;
clustermap.components.filter.t29756.cljs$lang$ctorStr = "clustermap.components.filter/t29756";
clustermap.components.filter.t29756.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t29756");
});})(owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
;
clustermap.components.filter.t29756.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t29756.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
;
clustermap.components.filter.t29756.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t29756.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function (_,p__29759,___$1){var self__ = this;
var map__29760 = p__29759;var map__29760__$1 = ((cljs.core.seq_QMARK_.call(null,map__29760))?cljs.core.apply.call(null,cljs.core.hash_map,map__29760):map__29760);var next_props = map__29760__$1;var map__29761 = cljs.core.get.call(null,map__29760__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__29761__$1 = ((cljs.core.seq_QMARK_.call(null,map__29761))?cljs.core.apply.call(null,cljs.core.hash_map,map__29761):map__29761);var next_filter_spec = map__29761__$1;var map__29762 = cljs.core.get.call(null,map__29761__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__29762__$1 = ((cljs.core.seq_QMARK_.call(null,map__29762))?cljs.core.apply.call(null,cljs.core.hash_map,map__29762):map__29762);var next_url_components = map__29762__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
;
clustermap.components.filter.t29756.prototype.om$core$IRender$ = true;
clustermap.components.filter.t29756.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
;
clustermap.components.filter.t29756.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t29756.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__29763_29924 = cljs.core.seq.call(null,chs);var chunk__29764_29925 = null;var count__29765_29926 = (0);var i__29766_29927 = (0);while(true){
if((i__29766_29927 < count__29765_29926))
{var vec__29767_29928 = cljs.core._nth.call(null,chunk__29764_29925,i__29766_29927);var component_id_29929 = cljs.core.nth.call(null,vec__29767_29928,(0),null);var ch_29930 = cljs.core.nth.call(null,vec__29767_29928,(1),null);cljs.core.async.close_BANG_.call(null,ch_29930);
{
var G__29931 = seq__29763_29924;
var G__29932 = chunk__29764_29925;
var G__29933 = count__29765_29926;
var G__29934 = (i__29766_29927 + (1));
seq__29763_29924 = G__29931;
chunk__29764_29925 = G__29932;
count__29765_29926 = G__29933;
i__29766_29927 = G__29934;
continue;
}
} else
{var temp__4126__auto___29935 = cljs.core.seq.call(null,seq__29763_29924);if(temp__4126__auto___29935)
{var seq__29763_29936__$1 = temp__4126__auto___29935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29763_29936__$1))
{var c__4408__auto___29937 = cljs.core.chunk_first.call(null,seq__29763_29936__$1);{
var G__29938 = cljs.core.chunk_rest.call(null,seq__29763_29936__$1);
var G__29939 = c__4408__auto___29937;
var G__29940 = cljs.core.count.call(null,c__4408__auto___29937);
var G__29941 = (0);
seq__29763_29924 = G__29938;
chunk__29764_29925 = G__29939;
count__29765_29926 = G__29940;
i__29766_29927 = G__29941;
continue;
}
} else
{var vec__29768_29942 = cljs.core.first.call(null,seq__29763_29936__$1);var component_id_29943 = cljs.core.nth.call(null,vec__29768_29942,(0),null);var ch_29944 = cljs.core.nth.call(null,vec__29768_29942,(1),null);cljs.core.async.close_BANG_.call(null,ch_29944);
{
var G__29945 = cljs.core.next.call(null,seq__29763_29936__$1);
var G__29946 = null;
var G__29947 = (0);
var G__29948 = (0);
seq__29763_29924 = G__29945;
chunk__29764_29925 = G__29946;
count__29765_29926 = G__29947;
i__29766_29927 = G__29948;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
;
clustermap.components.filter.t29756.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t29756.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function (state_29864){var state_val_29865 = (state_29864[(1)]);if((state_val_29865 === (7)))
{var inst_29855 = (state_29864[(2)]);var state_29864__$1 = state_29864;if(cljs.core.truth_(inst_29855))
{var statearr_29866_29949 = state_29864__$1;(statearr_29866_29949[(1)] = (25));
} else
{var statearr_29867_29950 = state_29864__$1;(statearr_29867_29950[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (20)))
{var inst_29781 = (state_29864[(7)]);var inst_29816 = (state_29864[(8)]);var inst_29832 = (state_29864[(9)]);var inst_29775 = (state_29864[(10)]);var inst_29825 = (state_29864[(11)]);var inst_29774 = (state_29864[(12)]);var inst_29825__$1 = cljs.core.first.call(null,inst_29816);var inst_29826 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29827 = cljs.core.get.call(null,inst_29775,inst_29825__$1);var inst_29828 = ["FILTER",inst_29774,inst_29825__$1,inst_29827];var inst_29829 = (new cljs.core.PersistentVector(null,4,(5),inst_29826,inst_29828,null));var inst_29830 = cljs.core.clj__GT_js.call(null,inst_29829);var inst_29831 = console.log(inst_29830);var inst_29832__$1 = cljs.core.get.call(null,inst_29781,inst_29825__$1);var state_29864__$1 = (function (){var statearr_29868 = state_29864;(statearr_29868[(13)] = inst_29831);
(statearr_29868[(9)] = inst_29832__$1);
(statearr_29868[(11)] = inst_29825__$1);
return statearr_29868;
})();if(cljs.core.truth_(inst_29832__$1))
{var statearr_29869_29951 = state_29864__$1;(statearr_29869_29951[(1)] = (22));
} else
{var statearr_29870_29952 = state_29864__$1;(statearr_29870_29952[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (27)))
{var inst_29860 = (state_29864[(2)]);var state_29864__$1 = state_29864;var statearr_29871_29953 = state_29864__$1;(statearr_29871_29953[(2)] = inst_29860);
(statearr_29871_29953[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (1)))
{var state_29864__$1 = state_29864;var statearr_29872_29954 = state_29864__$1;(statearr_29872_29954[(2)] = null);
(statearr_29872_29954[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (24)))
{var inst_29816 = (state_29864[(8)]);var inst_29841 = (state_29864[(2)]);var inst_29842 = cljs.core.next.call(null,inst_29816);var inst_29788 = inst_29842;var inst_29789 = null;var inst_29790 = (0);var inst_29791 = (0);var state_29864__$1 = (function (){var statearr_29876 = state_29864;(statearr_29876[(14)] = inst_29790);
(statearr_29876[(15)] = inst_29841);
(statearr_29876[(16)] = inst_29788);
(statearr_29876[(17)] = inst_29791);
(statearr_29876[(18)] = inst_29789);
return statearr_29876;
})();var statearr_29877_29955 = state_29864__$1;(statearr_29877_29955[(2)] = null);
(statearr_29877_29955[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (4)))
{var inst_29771 = (state_29864[(19)]);var inst_29771__$1 = (state_29864[(2)]);var state_29864__$1 = (function (){var statearr_29878 = state_29864;(statearr_29878[(19)] = inst_29771__$1);
return statearr_29878;
})();if(cljs.core.truth_(inst_29771__$1))
{var statearr_29879_29956 = state_29864__$1;(statearr_29879_29956[(1)] = (5));
} else
{var statearr_29880_29957 = state_29864__$1;(statearr_29880_29957[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (15)))
{var inst_29790 = (state_29864[(14)]);var inst_29788 = (state_29864[(16)]);var inst_29791 = (state_29864[(17)]);var inst_29789 = (state_29864[(18)]);var inst_29812 = (state_29864[(2)]);var inst_29813 = (inst_29791 + (1));var tmp29873 = inst_29790;var tmp29874 = inst_29788;var tmp29875 = inst_29789;var inst_29788__$1 = tmp29874;var inst_29789__$1 = tmp29875;var inst_29790__$1 = tmp29873;var inst_29791__$1 = inst_29813;var state_29864__$1 = (function (){var statearr_29881 = state_29864;(statearr_29881[(20)] = inst_29812);
(statearr_29881[(14)] = inst_29790__$1);
(statearr_29881[(16)] = inst_29788__$1);
(statearr_29881[(17)] = inst_29791__$1);
(statearr_29881[(18)] = inst_29789__$1);
return statearr_29881;
})();var statearr_29882_29958 = state_29864__$1;(statearr_29882_29958[(2)] = null);
(statearr_29882_29958[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (21)))
{var inst_29845 = (state_29864[(2)]);var state_29864__$1 = state_29864;var statearr_29883_29959 = state_29864__$1;(statearr_29883_29959[(2)] = inst_29845);
(statearr_29883_29959[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (13)))
{var inst_29796 = (state_29864[(21)]);var inst_29775 = (state_29864[(10)]);var inst_29803 = (state_29864[(22)]);var inst_29805 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29806 = cljs.core.get.call(null,inst_29775,inst_29796);var inst_29807 = [inst_29796,inst_29806];var inst_29808 = (new cljs.core.PersistentVector(null,2,(5),inst_29805,inst_29807,null));var inst_29809 = cljs.core.async.put_BANG_.call(null,inst_29803,inst_29808);var state_29864__$1 = state_29864;var statearr_29884_29960 = state_29864__$1;(statearr_29884_29960[(2)] = inst_29809);
(statearr_29884_29960[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (22)))
{var inst_29832 = (state_29864[(9)]);var inst_29775 = (state_29864[(10)]);var inst_29825 = (state_29864[(11)]);var inst_29834 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29835 = cljs.core.get.call(null,inst_29775,inst_29825);var inst_29836 = [inst_29825,inst_29835];var inst_29837 = (new cljs.core.PersistentVector(null,2,(5),inst_29834,inst_29836,null));var inst_29838 = cljs.core.async.put_BANG_.call(null,inst_29832,inst_29837);var state_29864__$1 = state_29864;var statearr_29885_29961 = state_29864__$1;(statearr_29885_29961[(2)] = inst_29838);
(statearr_29885_29961[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (6)))
{var state_29864__$1 = state_29864;var statearr_29886_29962 = state_29864__$1;(statearr_29886_29962[(2)] = null);
(statearr_29886_29962[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (25)))
{var state_29864__$1 = state_29864;var statearr_29887_29963 = state_29864__$1;(statearr_29887_29963[(2)] = null);
(statearr_29887_29963[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (17)))
{var state_29864__$1 = state_29864;var statearr_29888_29964 = state_29864__$1;(statearr_29888_29964[(2)] = null);
(statearr_29888_29964[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (3)))
{var inst_29862 = (state_29864[(2)]);var state_29864__$1 = state_29864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29864__$1,inst_29862);
} else
{if((state_val_29865 === (12)))
{var inst_29850 = (state_29864[(2)]);var state_29864__$1 = state_29864;var statearr_29889_29965 = state_29864__$1;(statearr_29889_29965[(2)] = inst_29850);
(statearr_29889_29965[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (2)))
{var state_29864__$1 = state_29864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29864__$1,(4),filter_rq_sub);
} else
{if((state_val_29865 === (23)))
{var state_29864__$1 = state_29864;var statearr_29890_29966 = state_29864__$1;(statearr_29890_29966[(2)] = null);
(statearr_29890_29966[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (19)))
{var inst_29816 = (state_29864[(8)]);var inst_29820 = cljs.core.chunk_first.call(null,inst_29816);var inst_29821 = cljs.core.chunk_rest.call(null,inst_29816);var inst_29822 = cljs.core.count.call(null,inst_29820);var inst_29788 = inst_29821;var inst_29789 = inst_29820;var inst_29790 = inst_29822;var inst_29791 = (0);var state_29864__$1 = (function (){var statearr_29891 = state_29864;(statearr_29891[(14)] = inst_29790);
(statearr_29891[(16)] = inst_29788);
(statearr_29891[(17)] = inst_29791);
(statearr_29891[(18)] = inst_29789);
return statearr_29891;
})();var statearr_29892_29967 = state_29864__$1;(statearr_29892_29967[(2)] = null);
(statearr_29892_29967[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (11)))
{var inst_29816 = (state_29864[(8)]);var inst_29788 = (state_29864[(16)]);var inst_29816__$1 = cljs.core.seq.call(null,inst_29788);var state_29864__$1 = (function (){var statearr_29893 = state_29864;(statearr_29893[(8)] = inst_29816__$1);
return statearr_29893;
})();if(inst_29816__$1)
{var statearr_29894_29968 = state_29864__$1;(statearr_29894_29968[(1)] = (16));
} else
{var statearr_29895_29969 = state_29864__$1;(statearr_29895_29969[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (9)))
{var inst_29852 = (state_29864[(2)]);var state_29864__$1 = (function (){var statearr_29896 = state_29864;(statearr_29896[(23)] = inst_29852);
return statearr_29896;
})();var statearr_29897_29970 = state_29864__$1;(statearr_29897_29970[(2)] = true);
(statearr_29897_29970[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (5)))
{var inst_29771 = (state_29864[(19)]);var inst_29775 = (state_29864[(10)]);var inst_29774 = (state_29864[(12)]);var inst_29774__$1 = cljs.core.nth.call(null,inst_29771,(0),null);var inst_29775__$1 = cljs.core.nth.call(null,inst_29771,(1),null);var inst_29776 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29777 = ["FILTER-RQ",inst_29774__$1,inst_29775__$1];var inst_29778 = (new cljs.core.PersistentVector(null,3,(5),inst_29776,inst_29777,null));var inst_29779 = cljs.core.clj__GT_js.call(null,inst_29778);var inst_29780 = console.log(inst_29779);var inst_29781 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_29782 = cljs.core.keys.call(null,inst_29775__$1);var inst_29787 = cljs.core.seq.call(null,inst_29782);var inst_29788 = inst_29787;var inst_29789 = null;var inst_29790 = (0);var inst_29791 = (0);var state_29864__$1 = (function (){var statearr_29898 = state_29864;(statearr_29898[(24)] = inst_29780);
(statearr_29898[(7)] = inst_29781);
(statearr_29898[(10)] = inst_29775__$1);
(statearr_29898[(14)] = inst_29790);
(statearr_29898[(16)] = inst_29788);
(statearr_29898[(17)] = inst_29791);
(statearr_29898[(18)] = inst_29789);
(statearr_29898[(12)] = inst_29774__$1);
return statearr_29898;
})();var statearr_29899_29971 = state_29864__$1;(statearr_29899_29971[(2)] = null);
(statearr_29899_29971[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (14)))
{var state_29864__$1 = state_29864;var statearr_29900_29972 = state_29864__$1;(statearr_29900_29972[(2)] = null);
(statearr_29900_29972[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (26)))
{var state_29864__$1 = state_29864;var statearr_29901_29973 = state_29864__$1;(statearr_29901_29973[(2)] = null);
(statearr_29901_29973[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (16)))
{var inst_29816 = (state_29864[(8)]);var inst_29818 = cljs.core.chunked_seq_QMARK_.call(null,inst_29816);var state_29864__$1 = state_29864;if(inst_29818)
{var statearr_29902_29974 = state_29864__$1;(statearr_29902_29974[(1)] = (19));
} else
{var statearr_29903_29975 = state_29864__$1;(statearr_29903_29975[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (10)))
{var inst_29796 = (state_29864[(21)]);var inst_29781 = (state_29864[(7)]);var inst_29775 = (state_29864[(10)]);var inst_29791 = (state_29864[(17)]);var inst_29789 = (state_29864[(18)]);var inst_29774 = (state_29864[(12)]);var inst_29803 = (state_29864[(22)]);var inst_29796__$1 = cljs.core._nth.call(null,inst_29789,inst_29791);var inst_29797 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29798 = cljs.core.get.call(null,inst_29775,inst_29796__$1);var inst_29799 = ["FILTER",inst_29774,inst_29796__$1,inst_29798];var inst_29800 = (new cljs.core.PersistentVector(null,4,(5),inst_29797,inst_29799,null));var inst_29801 = cljs.core.clj__GT_js.call(null,inst_29800);var inst_29802 = console.log(inst_29801);var inst_29803__$1 = cljs.core.get.call(null,inst_29781,inst_29796__$1);var state_29864__$1 = (function (){var statearr_29904 = state_29864;(statearr_29904[(21)] = inst_29796__$1);
(statearr_29904[(22)] = inst_29803__$1);
(statearr_29904[(25)] = inst_29802);
return statearr_29904;
})();if(cljs.core.truth_(inst_29803__$1))
{var statearr_29905_29976 = state_29864__$1;(statearr_29905_29976[(1)] = (13));
} else
{var statearr_29906_29977 = state_29864__$1;(statearr_29906_29977[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (18)))
{var inst_29848 = (state_29864[(2)]);var state_29864__$1 = state_29864;var statearr_29907_29978 = state_29864__$1;(statearr_29907_29978[(2)] = inst_29848);
(statearr_29907_29978[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29865 === (8)))
{var inst_29790 = (state_29864[(14)]);var inst_29791 = (state_29864[(17)]);var inst_29793 = (inst_29791 < inst_29790);var inst_29794 = inst_29793;var state_29864__$1 = state_29864;if(cljs.core.truth_(inst_29794))
{var statearr_29908_29979 = state_29864__$1;(statearr_29908_29979[(1)] = (10));
} else
{var statearr_29909_29980 = state_29864__$1;(statearr_29909_29980[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29913[(0)] = state_machine__9111__auto__);
(statearr_29913[(1)] = (1));
return statearr_29913;
});
var state_machine__9111__auto____1 = (function (state_29864){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29864);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29914){if((e29914 instanceof Object))
{var ex__9114__auto__ = e29914;var statearr_29915_29981 = state_29864;(statearr_29915_29981[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29864);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29914;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29982 = state_29864;
state_29864 = G__29982;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29864){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
})();var state__9127__auto__ = (function (){var statearr_29916 = f__9126__auto__.call(null);(statearr_29916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
;
clustermap.components.filter.t29756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function (_29758){var self__ = this;
var _29758__$1 = this;return self__.meta29757;
});})(owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
;
clustermap.components.filter.t29756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function (_29758,meta29757__$1){var self__ = this;
var _29758__$1 = this;return (new clustermap.components.filter.t29756(self__.constructor29585,self__.owner,self__.map29589,self__.G__29594,self__.input_checker29592,self__.component_specs,self__.filter_spec,self__.map29587,self__.history,self__.input_schema29591,self__.output_checker29593,self__.output_schema29590,self__.map29588,self__.components,self__.validate__6034__auto__,self__.id,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta29757__$1));
});})(owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
;
clustermap.components.filter.__GT_t29756 = ((function (owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593){
return (function __GT_t29756(constructor29585__$1,owner__$1,map29589__$1,G__29594__$1,input_checker29592__$1,component_specs__$1,filter_spec__$1,map29587__$1,history__$1,input_schema29591__$1,output_checker29593__$1,output_schema29590__$1,map29588__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta29757){return (new clustermap.components.filter.t29756(constructor29585__$1,owner__$1,map29589__$1,G__29594__$1,input_checker29592__$1,component_specs__$1,filter_spec__$1,map29587__$1,history__$1,input_schema29591__$1,output_checker29593__$1,output_schema29590__$1,map29588__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta29757));
});})(owner,history,filter_rq_pub,map29588,url_components,components,component_specs,id,filter_spec,map29589,validate__6034__auto__,ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
;
}
return (new clustermap.components.filter.t29756(constructor29585,owner,map29589,G__29594,input_checker29592,component_specs,filter_spec,map29587,history,input_schema29591,output_checker29593,output_schema29590,map29588,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29983 = output_checker29593.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29983))
{var error__6036__auto___29984 = temp__4126__auto___29983;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29585","constructor29585",-254105279,null),cljs.core.pr_str.call(null,error__6036__auto___29984)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29984,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29590,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29590,input_schema29591,input_checker29592,output_checker29593))
,schema.core.make_fn_schema.call(null,output_schema29590,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29591], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___29920){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29584,p__29917){var vec__29919 = p__29917;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29919,(0),null);return component_fnk__7881__auto___29920.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29584),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29584,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29584,var_args){
var p__29917 = null;if (arguments.length > 2) {
  p__29917 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29584,p__29917);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__29985){
var data__7882__auto__ = cljs.core.first(arglist__29985);
arglist__29985 = cljs.core.next(arglist__29985);
var owner29584 = cljs.core.first(arglist__29985);
var p__29917 = cljs.core.rest(arglist__29985);
return filter_component__delegate(data__7882__auto__,owner29584,p__29917);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___29920))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29586){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29586);
});
__GT_filter_component = function(cursor__7850__auto__,m29586){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
