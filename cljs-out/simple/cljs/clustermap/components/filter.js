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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29523){var map__29525 = p__29523;var map__29525__$1 = ((cljs.core.seq_QMARK_.call(null,map__29525))?cljs.core.apply.call(null,cljs.core.hash_map,map__29525):map__29525);var filter_spec = map__29525__$1;var component_descrs = cljs.core.get.call(null,map__29525__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29525__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29525__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29526){var map__29528 = p__29526;var map__29528__$1 = ((cljs.core.seq_QMARK_.call(null,map__29528))?cljs.core.apply.call(null,cljs.core.hash_map,map__29528):map__29528);var filter_spec = map__29528__$1;var component_descrs = cljs.core.get.call(null,map__29528__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29528__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29528__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29529,component_filter_rq_chan){var map__29534 = p__29529;var map__29534__$1 = ((cljs.core.seq_QMARK_.call(null,map__29534))?cljs.core.apply.call(null,cljs.core.hash_map,map__29534):map__29534);var component_spec = map__29534__$1;var type = cljs.core.get.call(null,map__29534__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29535 = cljs.core._EQ_;var expr__29536 = type;if(cljs.core.truth_(pred__29535.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29536)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29535.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29536)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29535.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29536)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29535.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29536)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29535.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29536)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29536))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29538,component_filter_rq_chan){var map__29540 = p__29538;var map__29540__$1 = ((cljs.core.seq_QMARK_.call(null,map__29540))?cljs.core.apply.call(null,cljs.core.hash_map,map__29540):map__29540);var component_spec = map__29540__$1;var visible = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29542 = schema.core.Any;var input_schema29543 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29541","map29541",2097570644,null))], null);var input_checker29544 = schema.core.checker.call(null,input_schema29543);var output_checker29545 = schema.core.checker.call(null,output_schema29542);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29542,input_schema29543,input_checker29544,output_checker29545){
return (function render_STAR_(G__29546){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29546], null);var temp__4126__auto___29564 = input_checker29544.call(null,args__6035__auto___29563);if(cljs.core.truth_(temp__4126__auto___29564))
{var error__6036__auto___29565 = temp__4126__auto___29564;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29565)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29565,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29563,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29543,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29541 = G__29546;while(true){
if(cljs.core.map_QMARK_.call(null,map29541))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29541)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29541,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29541,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29541,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29542,input_schema29543,input_checker29544,output_checker29545){
return (function iter__29555(s__29556){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29542,input_schema29543,input_checker29544,output_checker29545){
return (function (){var s__29556__$1 = s__29556;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29556__$1);if(temp__4126__auto__)
{var s__29556__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29556__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29556__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29558 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29557 = (0);while(true){
if((i__29557 < size__4376__auto__))
{var map__29561 = cljs.core._nth.call(null,c__4375__auto__,i__29557);var map__29561__$1 = ((cljs.core.seq_QMARK_.call(null,map__29561))?cljs.core.apply.call(null,cljs.core.hash_map,map__29561):map__29561);var component_spec = map__29561__$1;var id = cljs.core.get.call(null,map__29561__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29558,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29566 = (i__29557 + (1));
i__29557 = G__29566;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29558),iter__29555.call(null,cljs.core.chunk_rest.call(null,s__29556__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29558),null);
}
} else
{var map__29562 = cljs.core.first.call(null,s__29556__$2);var map__29562__$1 = ((cljs.core.seq_QMARK_.call(null,map__29562))?cljs.core.apply.call(null,cljs.core.hash_map,map__29562):map__29562);var component_spec = map__29562__$1;var id = cljs.core.get.call(null,map__29562__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29555.call(null,cljs.core.rest.call(null,s__29556__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29542,input_schema29543,input_checker29544,output_checker29545))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29542,input_schema29543,input_checker29544,output_checker29545))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29567 = output_checker29545.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29567))
{var error__6036__auto___29568 = temp__4126__auto___29567;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29568)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29568,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29542,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29542,input_schema29543,input_checker29544,output_checker29545))
,schema.core.make_fn_schema.call(null,output_schema29542,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29543], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___29905 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29575 = schema.core.Any;var input_schema29576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29572","map29572",2016882268,null))], null);var input_checker29577 = schema.core.checker.call(null,input_schema29576);var output_checker29578 = schema.core.checker.call(null,output_schema29575);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function constructor29570(G__29579){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29579], null);var temp__4126__auto___29907 = input_checker29577.call(null,args__6035__auto___29906);if(cljs.core.truth_(temp__4126__auto___29907))
{var error__6036__auto___29908 = temp__4126__auto___29907;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29570","constructor29570",890425511,null),cljs.core.pr_str.call(null,error__6036__auto___29908)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29908,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29906,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29576,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29572 = G__29579;while(true){
if(cljs.core.map_QMARK_.call(null,map29572))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29572)));
}
var map29574 = plumbing.fnk.schema.safe_get.call(null,map29572,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29574,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29573 = plumbing.fnk.schema.safe_get.call(null,map29572,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29573,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29573,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29572,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t29741 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t29741 = (function (map29574,output_checker29578,owner,G__29579,constructor29570,map29573,component_specs,filter_spec,history,input_schema29576,components,validate__6034__auto__,output_schema29575,id,input_checker29577,map29572,filter_rq_pub,ufv__,url_components,meta29742){
this.map29574 = map29574;
this.output_checker29578 = output_checker29578;
this.owner = owner;
this.G__29579 = G__29579;
this.constructor29570 = constructor29570;
this.map29573 = map29573;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.history = history;
this.input_schema29576 = input_schema29576;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_schema29575 = output_schema29575;
this.id = id;
this.input_checker29577 = input_checker29577;
this.map29572 = map29572;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta29742 = meta29742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t29741.cljs$lang$type = true;
clustermap.components.filter.t29741.cljs$lang$ctorStr = "clustermap.components.filter/t29741";
clustermap.components.filter.t29741.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t29741");
});})(owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
;
clustermap.components.filter.t29741.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t29741.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
;
clustermap.components.filter.t29741.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t29741.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function (_,p__29744,___$1){var self__ = this;
var map__29745 = p__29744;var map__29745__$1 = ((cljs.core.seq_QMARK_.call(null,map__29745))?cljs.core.apply.call(null,cljs.core.hash_map,map__29745):map__29745);var next_props = map__29745__$1;var map__29746 = cljs.core.get.call(null,map__29745__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__29746__$1 = ((cljs.core.seq_QMARK_.call(null,map__29746))?cljs.core.apply.call(null,cljs.core.hash_map,map__29746):map__29746);var next_filter_spec = map__29746__$1;var map__29747 = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__29747__$1 = ((cljs.core.seq_QMARK_.call(null,map__29747))?cljs.core.apply.call(null,cljs.core.hash_map,map__29747):map__29747);var next_url_components = map__29747__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
;
clustermap.components.filter.t29741.prototype.om$core$IRender$ = true;
clustermap.components.filter.t29741.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
;
clustermap.components.filter.t29741.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t29741.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__29748_29909 = cljs.core.seq.call(null,chs);var chunk__29749_29910 = null;var count__29750_29911 = (0);var i__29751_29912 = (0);while(true){
if((i__29751_29912 < count__29750_29911))
{var vec__29752_29913 = cljs.core._nth.call(null,chunk__29749_29910,i__29751_29912);var component_id_29914 = cljs.core.nth.call(null,vec__29752_29913,(0),null);var ch_29915 = cljs.core.nth.call(null,vec__29752_29913,(1),null);cljs.core.async.close_BANG_.call(null,ch_29915);
{
var G__29916 = seq__29748_29909;
var G__29917 = chunk__29749_29910;
var G__29918 = count__29750_29911;
var G__29919 = (i__29751_29912 + (1));
seq__29748_29909 = G__29916;
chunk__29749_29910 = G__29917;
count__29750_29911 = G__29918;
i__29751_29912 = G__29919;
continue;
}
} else
{var temp__4126__auto___29920 = cljs.core.seq.call(null,seq__29748_29909);if(temp__4126__auto___29920)
{var seq__29748_29921__$1 = temp__4126__auto___29920;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29748_29921__$1))
{var c__4408__auto___29922 = cljs.core.chunk_first.call(null,seq__29748_29921__$1);{
var G__29923 = cljs.core.chunk_rest.call(null,seq__29748_29921__$1);
var G__29924 = c__4408__auto___29922;
var G__29925 = cljs.core.count.call(null,c__4408__auto___29922);
var G__29926 = (0);
seq__29748_29909 = G__29923;
chunk__29749_29910 = G__29924;
count__29750_29911 = G__29925;
i__29751_29912 = G__29926;
continue;
}
} else
{var vec__29753_29927 = cljs.core.first.call(null,seq__29748_29921__$1);var component_id_29928 = cljs.core.nth.call(null,vec__29753_29927,(0),null);var ch_29929 = cljs.core.nth.call(null,vec__29753_29927,(1),null);cljs.core.async.close_BANG_.call(null,ch_29929);
{
var G__29930 = cljs.core.next.call(null,seq__29748_29921__$1);
var G__29931 = null;
var G__29932 = (0);
var G__29933 = (0);
seq__29748_29909 = G__29930;
chunk__29749_29910 = G__29931;
count__29750_29911 = G__29932;
i__29751_29912 = G__29933;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
;
clustermap.components.filter.t29741.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t29741.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function (state_29849){var state_val_29850 = (state_29849[(1)]);if((state_val_29850 === (7)))
{var inst_29840 = (state_29849[(2)]);var state_29849__$1 = state_29849;if(cljs.core.truth_(inst_29840))
{var statearr_29851_29934 = state_29849__$1;(statearr_29851_29934[(1)] = (25));
} else
{var statearr_29852_29935 = state_29849__$1;(statearr_29852_29935[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (20)))
{var inst_29759 = (state_29849[(7)]);var inst_29810 = (state_29849[(8)]);var inst_29801 = (state_29849[(9)]);var inst_29760 = (state_29849[(10)]);var inst_29817 = (state_29849[(11)]);var inst_29766 = (state_29849[(12)]);var inst_29810__$1 = cljs.core.first.call(null,inst_29801);var inst_29811 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29812 = cljs.core.get.call(null,inst_29760,inst_29810__$1);var inst_29813 = ["FILTER",inst_29759,inst_29810__$1,inst_29812];var inst_29814 = (new cljs.core.PersistentVector(null,4,(5),inst_29811,inst_29813,null));var inst_29815 = cljs.core.clj__GT_js.call(null,inst_29814);var inst_29816 = console.log(inst_29815);var inst_29817__$1 = cljs.core.get.call(null,inst_29766,inst_29810__$1);var state_29849__$1 = (function (){var statearr_29853 = state_29849;(statearr_29853[(13)] = inst_29816);
(statearr_29853[(8)] = inst_29810__$1);
(statearr_29853[(11)] = inst_29817__$1);
return statearr_29853;
})();if(cljs.core.truth_(inst_29817__$1))
{var statearr_29854_29936 = state_29849__$1;(statearr_29854_29936[(1)] = (22));
} else
{var statearr_29855_29937 = state_29849__$1;(statearr_29855_29937[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (27)))
{var inst_29845 = (state_29849[(2)]);var state_29849__$1 = state_29849;var statearr_29856_29938 = state_29849__$1;(statearr_29856_29938[(2)] = inst_29845);
(statearr_29856_29938[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (1)))
{var state_29849__$1 = state_29849;var statearr_29857_29939 = state_29849__$1;(statearr_29857_29939[(2)] = null);
(statearr_29857_29939[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (24)))
{var inst_29801 = (state_29849[(9)]);var inst_29826 = (state_29849[(2)]);var inst_29827 = cljs.core.next.call(null,inst_29801);var inst_29773 = inst_29827;var inst_29774 = null;var inst_29775 = (0);var inst_29776 = (0);var state_29849__$1 = (function (){var statearr_29861 = state_29849;(statearr_29861[(14)] = inst_29826);
(statearr_29861[(15)] = inst_29775);
(statearr_29861[(16)] = inst_29773);
(statearr_29861[(17)] = inst_29774);
(statearr_29861[(18)] = inst_29776);
return statearr_29861;
})();var statearr_29862_29940 = state_29849__$1;(statearr_29862_29940[(2)] = null);
(statearr_29862_29940[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (4)))
{var inst_29756 = (state_29849[(19)]);var inst_29756__$1 = (state_29849[(2)]);var state_29849__$1 = (function (){var statearr_29863 = state_29849;(statearr_29863[(19)] = inst_29756__$1);
return statearr_29863;
})();if(cljs.core.truth_(inst_29756__$1))
{var statearr_29864_29941 = state_29849__$1;(statearr_29864_29941[(1)] = (5));
} else
{var statearr_29865_29942 = state_29849__$1;(statearr_29865_29942[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (15)))
{var inst_29775 = (state_29849[(15)]);var inst_29773 = (state_29849[(16)]);var inst_29774 = (state_29849[(17)]);var inst_29776 = (state_29849[(18)]);var inst_29797 = (state_29849[(2)]);var inst_29798 = (inst_29776 + (1));var tmp29858 = inst_29775;var tmp29859 = inst_29773;var tmp29860 = inst_29774;var inst_29773__$1 = tmp29859;var inst_29774__$1 = tmp29860;var inst_29775__$1 = tmp29858;var inst_29776__$1 = inst_29798;var state_29849__$1 = (function (){var statearr_29866 = state_29849;(statearr_29866[(20)] = inst_29797);
(statearr_29866[(15)] = inst_29775__$1);
(statearr_29866[(16)] = inst_29773__$1);
(statearr_29866[(17)] = inst_29774__$1);
(statearr_29866[(18)] = inst_29776__$1);
return statearr_29866;
})();var statearr_29867_29943 = state_29849__$1;(statearr_29867_29943[(2)] = null);
(statearr_29867_29943[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (21)))
{var inst_29830 = (state_29849[(2)]);var state_29849__$1 = state_29849;var statearr_29868_29944 = state_29849__$1;(statearr_29868_29944[(2)] = inst_29830);
(statearr_29868_29944[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (13)))
{var inst_29781 = (state_29849[(21)]);var inst_29788 = (state_29849[(22)]);var inst_29760 = (state_29849[(10)]);var inst_29790 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29791 = cljs.core.get.call(null,inst_29760,inst_29781);var inst_29792 = [inst_29781,inst_29791];var inst_29793 = (new cljs.core.PersistentVector(null,2,(5),inst_29790,inst_29792,null));var inst_29794 = cljs.core.async.put_BANG_.call(null,inst_29788,inst_29793);var state_29849__$1 = state_29849;var statearr_29869_29945 = state_29849__$1;(statearr_29869_29945[(2)] = inst_29794);
(statearr_29869_29945[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (22)))
{var inst_29810 = (state_29849[(8)]);var inst_29760 = (state_29849[(10)]);var inst_29817 = (state_29849[(11)]);var inst_29819 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29820 = cljs.core.get.call(null,inst_29760,inst_29810);var inst_29821 = [inst_29810,inst_29820];var inst_29822 = (new cljs.core.PersistentVector(null,2,(5),inst_29819,inst_29821,null));var inst_29823 = cljs.core.async.put_BANG_.call(null,inst_29817,inst_29822);var state_29849__$1 = state_29849;var statearr_29870_29946 = state_29849__$1;(statearr_29870_29946[(2)] = inst_29823);
(statearr_29870_29946[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (6)))
{var state_29849__$1 = state_29849;var statearr_29871_29947 = state_29849__$1;(statearr_29871_29947[(2)] = null);
(statearr_29871_29947[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (25)))
{var state_29849__$1 = state_29849;var statearr_29872_29948 = state_29849__$1;(statearr_29872_29948[(2)] = null);
(statearr_29872_29948[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (17)))
{var state_29849__$1 = state_29849;var statearr_29873_29949 = state_29849__$1;(statearr_29873_29949[(2)] = null);
(statearr_29873_29949[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (3)))
{var inst_29847 = (state_29849[(2)]);var state_29849__$1 = state_29849;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29849__$1,inst_29847);
} else
{if((state_val_29850 === (12)))
{var inst_29835 = (state_29849[(2)]);var state_29849__$1 = state_29849;var statearr_29874_29950 = state_29849__$1;(statearr_29874_29950[(2)] = inst_29835);
(statearr_29874_29950[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (2)))
{var state_29849__$1 = state_29849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29849__$1,(4),filter_rq_sub);
} else
{if((state_val_29850 === (23)))
{var state_29849__$1 = state_29849;var statearr_29875_29951 = state_29849__$1;(statearr_29875_29951[(2)] = null);
(statearr_29875_29951[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (19)))
{var inst_29801 = (state_29849[(9)]);var inst_29805 = cljs.core.chunk_first.call(null,inst_29801);var inst_29806 = cljs.core.chunk_rest.call(null,inst_29801);var inst_29807 = cljs.core.count.call(null,inst_29805);var inst_29773 = inst_29806;var inst_29774 = inst_29805;var inst_29775 = inst_29807;var inst_29776 = (0);var state_29849__$1 = (function (){var statearr_29876 = state_29849;(statearr_29876[(15)] = inst_29775);
(statearr_29876[(16)] = inst_29773);
(statearr_29876[(17)] = inst_29774);
(statearr_29876[(18)] = inst_29776);
return statearr_29876;
})();var statearr_29877_29952 = state_29849__$1;(statearr_29877_29952[(2)] = null);
(statearr_29877_29952[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (11)))
{var inst_29773 = (state_29849[(16)]);var inst_29801 = (state_29849[(9)]);var inst_29801__$1 = cljs.core.seq.call(null,inst_29773);var state_29849__$1 = (function (){var statearr_29878 = state_29849;(statearr_29878[(9)] = inst_29801__$1);
return statearr_29878;
})();if(inst_29801__$1)
{var statearr_29879_29953 = state_29849__$1;(statearr_29879_29953[(1)] = (16));
} else
{var statearr_29880_29954 = state_29849__$1;(statearr_29880_29954[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (9)))
{var inst_29837 = (state_29849[(2)]);var state_29849__$1 = (function (){var statearr_29881 = state_29849;(statearr_29881[(23)] = inst_29837);
return statearr_29881;
})();var statearr_29882_29955 = state_29849__$1;(statearr_29882_29955[(2)] = true);
(statearr_29882_29955[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (5)))
{var inst_29759 = (state_29849[(7)]);var inst_29760 = (state_29849[(10)]);var inst_29756 = (state_29849[(19)]);var inst_29759__$1 = cljs.core.nth.call(null,inst_29756,(0),null);var inst_29760__$1 = cljs.core.nth.call(null,inst_29756,(1),null);var inst_29761 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29762 = ["FILTER-RQ",inst_29759__$1,inst_29760__$1];var inst_29763 = (new cljs.core.PersistentVector(null,3,(5),inst_29761,inst_29762,null));var inst_29764 = cljs.core.clj__GT_js.call(null,inst_29763);var inst_29765 = console.log(inst_29764);var inst_29766 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_29767 = cljs.core.keys.call(null,inst_29760__$1);var inst_29772 = cljs.core.seq.call(null,inst_29767);var inst_29773 = inst_29772;var inst_29774 = null;var inst_29775 = (0);var inst_29776 = (0);var state_29849__$1 = (function (){var statearr_29883 = state_29849;(statearr_29883[(15)] = inst_29775);
(statearr_29883[(7)] = inst_29759__$1);
(statearr_29883[(16)] = inst_29773);
(statearr_29883[(17)] = inst_29774);
(statearr_29883[(10)] = inst_29760__$1);
(statearr_29883[(18)] = inst_29776);
(statearr_29883[(24)] = inst_29765);
(statearr_29883[(12)] = inst_29766);
return statearr_29883;
})();var statearr_29884_29956 = state_29849__$1;(statearr_29884_29956[(2)] = null);
(statearr_29884_29956[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (14)))
{var state_29849__$1 = state_29849;var statearr_29885_29957 = state_29849__$1;(statearr_29885_29957[(2)] = null);
(statearr_29885_29957[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (26)))
{var state_29849__$1 = state_29849;var statearr_29886_29958 = state_29849__$1;(statearr_29886_29958[(2)] = null);
(statearr_29886_29958[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (16)))
{var inst_29801 = (state_29849[(9)]);var inst_29803 = cljs.core.chunked_seq_QMARK_.call(null,inst_29801);var state_29849__$1 = state_29849;if(inst_29803)
{var statearr_29887_29959 = state_29849__$1;(statearr_29887_29959[(1)] = (19));
} else
{var statearr_29888_29960 = state_29849__$1;(statearr_29888_29960[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (10)))
{var inst_29781 = (state_29849[(21)]);var inst_29759 = (state_29849[(7)]);var inst_29788 = (state_29849[(22)]);var inst_29774 = (state_29849[(17)]);var inst_29760 = (state_29849[(10)]);var inst_29776 = (state_29849[(18)]);var inst_29766 = (state_29849[(12)]);var inst_29781__$1 = cljs.core._nth.call(null,inst_29774,inst_29776);var inst_29782 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29783 = cljs.core.get.call(null,inst_29760,inst_29781__$1);var inst_29784 = ["FILTER",inst_29759,inst_29781__$1,inst_29783];var inst_29785 = (new cljs.core.PersistentVector(null,4,(5),inst_29782,inst_29784,null));var inst_29786 = cljs.core.clj__GT_js.call(null,inst_29785);var inst_29787 = console.log(inst_29786);var inst_29788__$1 = cljs.core.get.call(null,inst_29766,inst_29781__$1);var state_29849__$1 = (function (){var statearr_29889 = state_29849;(statearr_29889[(21)] = inst_29781__$1);
(statearr_29889[(22)] = inst_29788__$1);
(statearr_29889[(25)] = inst_29787);
return statearr_29889;
})();if(cljs.core.truth_(inst_29788__$1))
{var statearr_29890_29961 = state_29849__$1;(statearr_29890_29961[(1)] = (13));
} else
{var statearr_29891_29962 = state_29849__$1;(statearr_29891_29962[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (18)))
{var inst_29833 = (state_29849[(2)]);var state_29849__$1 = state_29849;var statearr_29892_29963 = state_29849__$1;(statearr_29892_29963[(2)] = inst_29833);
(statearr_29892_29963[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29850 === (8)))
{var inst_29775 = (state_29849[(15)]);var inst_29776 = (state_29849[(18)]);var inst_29778 = (inst_29776 < inst_29775);var inst_29779 = inst_29778;var state_29849__$1 = state_29849;if(cljs.core.truth_(inst_29779))
{var statearr_29893_29964 = state_29849__$1;(statearr_29893_29964[(1)] = (10));
} else
{var statearr_29894_29965 = state_29849__$1;(statearr_29894_29965[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29898[(0)] = state_machine__9111__auto__);
(statearr_29898[(1)] = (1));
return statearr_29898;
});
var state_machine__9111__auto____1 = (function (state_29849){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29849);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29899){if((e29899 instanceof Object))
{var ex__9114__auto__ = e29899;var statearr_29900_29966 = state_29849;(statearr_29900_29966[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29849);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29899;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29967 = state_29849;
state_29849 = G__29967;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29849){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
})();var state__9127__auto__ = (function (){var statearr_29901 = f__9126__auto__.call(null);(statearr_29901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
;
clustermap.components.filter.t29741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function (_29743){var self__ = this;
var _29743__$1 = this;return self__.meta29742;
});})(owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
;
clustermap.components.filter.t29741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function (_29743,meta29742__$1){var self__ = this;
var _29743__$1 = this;return (new clustermap.components.filter.t29741(self__.map29574,self__.output_checker29578,self__.owner,self__.G__29579,self__.constructor29570,self__.map29573,self__.component_specs,self__.filter_spec,self__.history,self__.input_schema29576,self__.components,self__.validate__6034__auto__,self__.output_schema29575,self__.id,self__.input_checker29577,self__.map29572,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta29742__$1));
});})(owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
;
clustermap.components.filter.__GT_t29741 = ((function (owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578){
return (function __GT_t29741(map29574__$1,output_checker29578__$1,owner__$1,G__29579__$1,constructor29570__$1,map29573__$1,component_specs__$1,filter_spec__$1,history__$1,input_schema29576__$1,components__$1,validate__6034__auto____$1,output_schema29575__$1,id__$1,input_checker29577__$1,map29572__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta29742){return (new clustermap.components.filter.t29741(map29574__$1,output_checker29578__$1,owner__$1,G__29579__$1,constructor29570__$1,map29573__$1,component_specs__$1,filter_spec__$1,history__$1,input_schema29576__$1,components__$1,validate__6034__auto____$1,output_schema29575__$1,id__$1,input_checker29577__$1,map29572__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta29742));
});})(owner,history,filter_rq_pub,map29573,url_components,components,component_specs,id,filter_spec,map29574,validate__6034__auto__,ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
;
}
return (new clustermap.components.filter.t29741(map29574,output_checker29578,owner,G__29579,constructor29570,map29573,component_specs,filter_spec,history,input_schema29576,components,validate__6034__auto__,output_schema29575,id,input_checker29577,map29572,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29968 = output_checker29578.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29968))
{var error__6036__auto___29969 = temp__4126__auto___29968;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29570","constructor29570",890425511,null),cljs.core.pr_str.call(null,error__6036__auto___29969)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29969,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29575,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29575,input_schema29576,input_checker29577,output_checker29578))
,schema.core.make_fn_schema.call(null,output_schema29575,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29576], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___29905){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29569,p__29902){var vec__29904 = p__29902;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29904,(0),null);return component_fnk__7881__auto___29905.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29569),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29569,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29569,var_args){
var p__29902 = null;if (arguments.length > 2) {
  p__29902 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29569,p__29902);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__29970){
var data__7882__auto__ = cljs.core.first(arglist__29970);
arglist__29970 = cljs.core.next(arglist__29970);
var owner29569 = cljs.core.first(arglist__29970);
var p__29902 = cljs.core.rest(arglist__29970);
return filter_component__delegate(data__7882__auto__,owner29569,p__29902);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___29905))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29571){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29571);
});
__GT_filter_component = function(cursor__7850__auto__,m29571){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
