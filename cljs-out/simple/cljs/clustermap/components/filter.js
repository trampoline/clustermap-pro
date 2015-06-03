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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__28548){var map__28550 = p__28548;var map__28550__$1 = ((cljs.core.seq_QMARK_.call(null,map__28550))?cljs.core.apply.call(null,cljs.core.hash_map,map__28550):map__28550);var filter_spec = map__28550__$1;var component_descrs = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28550__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__28551){var map__28553 = p__28551;var map__28553__$1 = ((cljs.core.seq_QMARK_.call(null,map__28553))?cljs.core.apply.call(null,cljs.core.hash_map,map__28553):map__28553);var filter_spec = map__28553__$1;var component_descrs = cljs.core.get.call(null,map__28553__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28553__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28553__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__28554,component_filter_rq_chan){var map__28559 = p__28554;var map__28559__$1 = ((cljs.core.seq_QMARK_.call(null,map__28559))?cljs.core.apply.call(null,cljs.core.hash_map,map__28559):map__28559);var component_spec = map__28559__$1;var type = cljs.core.get.call(null,map__28559__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__28560 = cljs.core._EQ_;var expr__28561 = type;if(cljs.core.truth_(pred__28560.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__28561)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28560.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__28561)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28560.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__28561)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28560.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__28561)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28560.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__28561)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28561))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__28563,component_filter_rq_chan){var map__28565 = p__28563;var map__28565__$1 = ((cljs.core.seq_QMARK_.call(null,map__28565))?cljs.core.apply.call(null,cljs.core.hash_map,map__28565):map__28565);var component_spec = map__28565__$1;var skip_label = cljs.core.get.call(null,map__28565__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__28565__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__28565__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(filter_spec)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28567 = schema.core.Any;var input_schema28568 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28566","map28566",-1451794485,null))], null);var input_checker28569 = schema.core.checker.call(null,input_schema28568);var output_checker28570 = schema.core.checker.call(null,output_schema28567);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28567,input_schema28568,input_checker28569,output_checker28570){
return (function render_STAR_(G__28571){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28571], null);var temp__4126__auto___28589 = input_checker28569.call(null,args__6035__auto___28588);if(cljs.core.truth_(temp__4126__auto___28589))
{var error__6036__auto___28590 = temp__4126__auto___28589;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28590)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28590,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28588,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28568,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28566 = G__28571;while(true){
if(cljs.core.map_QMARK_.call(null,map28566))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28566)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28566,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map28566,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map28566,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28567,input_schema28568,input_checker28569,output_checker28570){
return (function iter__28580(s__28581){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28567,input_schema28568,input_checker28569,output_checker28570){
return (function (){var s__28581__$1 = s__28581;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28581__$1);if(temp__4126__auto__)
{var s__28581__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28581__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28581__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28583 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28582 = (0);while(true){
if((i__28582 < size__4376__auto__))
{var map__28586 = cljs.core._nth.call(null,c__4375__auto__,i__28582);var map__28586__$1 = ((cljs.core.seq_QMARK_.call(null,map__28586))?cljs.core.apply.call(null,cljs.core.hash_map,map__28586):map__28586);var component_spec = map__28586__$1;var id = cljs.core.get.call(null,map__28586__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__28583,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__28591 = (i__28582 + (1));
i__28582 = G__28591;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28583),iter__28580.call(null,cljs.core.chunk_rest.call(null,s__28581__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28583),null);
}
} else
{var map__28587 = cljs.core.first.call(null,s__28581__$2);var map__28587__$1 = ((cljs.core.seq_QMARK_.call(null,map__28587))?cljs.core.apply.call(null,cljs.core.hash_map,map__28587):map__28587);var component_spec = map__28587__$1;var id = cljs.core.get.call(null,map__28587__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__28580.call(null,cljs.core.rest.call(null,s__28581__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28567,input_schema28568,input_checker28569,output_checker28570))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28567,input_schema28568,input_checker28569,output_checker28570))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28592 = output_checker28570.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28592))
{var error__6036__auto___28593 = temp__4126__auto___28592;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28593)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28593,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28567,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28567,input_schema28568,input_checker28569,output_checker28570))
,schema.core.make_fn_schema.call(null,output_schema28567,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28568], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___28930 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28600 = schema.core.Any;var input_schema28601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28597","map28597",1060254908,null))], null);var input_checker28602 = schema.core.checker.call(null,input_schema28601);var output_checker28603 = schema.core.checker.call(null,output_schema28600);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function constructor28595(G__28604){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28604], null);var temp__4126__auto___28932 = input_checker28602.call(null,args__6035__auto___28931);if(cljs.core.truth_(temp__4126__auto___28932))
{var error__6036__auto___28933 = temp__4126__auto___28932;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28595","constructor28595",1091427643,null),cljs.core.pr_str.call(null,error__6036__auto___28933)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28933,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28931,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28601,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28597 = G__28604;while(true){
if(cljs.core.map_QMARK_.call(null,map28597))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28597)));
}
var map28599 = plumbing.fnk.schema.safe_get.call(null,map28597,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28599,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map28598 = plumbing.fnk.schema.safe_get.call(null,map28597,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map28598,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map28598,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28597,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t28766 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t28766 = (function (owner,G__28604,output_schema28600,component_specs,filter_spec,history,input_schema28601,components,map28598,validate__6034__auto__,map28599,id,constructor28595,input_checker28602,map28597,output_checker28603,filter_rq_pub,ufv__,url_components,meta28767){
this.owner = owner;
this.G__28604 = G__28604;
this.output_schema28600 = output_schema28600;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.history = history;
this.input_schema28601 = input_schema28601;
this.components = components;
this.map28598 = map28598;
this.validate__6034__auto__ = validate__6034__auto__;
this.map28599 = map28599;
this.id = id;
this.constructor28595 = constructor28595;
this.input_checker28602 = input_checker28602;
this.map28597 = map28597;
this.output_checker28603 = output_checker28603;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta28767 = meta28767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t28766.cljs$lang$type = true;
clustermap.components.filter.t28766.cljs$lang$ctorStr = "clustermap.components.filter/t28766";
clustermap.components.filter.t28766.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t28766");
});})(owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
;
clustermap.components.filter.t28766.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t28766.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
;
clustermap.components.filter.t28766.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t28766.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function (_,p__28769,___$1){var self__ = this;
var map__28770 = p__28769;var map__28770__$1 = ((cljs.core.seq_QMARK_.call(null,map__28770))?cljs.core.apply.call(null,cljs.core.hash_map,map__28770):map__28770);var next_props = map__28770__$1;var map__28771 = cljs.core.get.call(null,map__28770__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28771__$1 = ((cljs.core.seq_QMARK_.call(null,map__28771))?cljs.core.apply.call(null,cljs.core.hash_map,map__28771):map__28771);var next_filter_spec = map__28771__$1;var map__28772 = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__28772__$1 = ((cljs.core.seq_QMARK_.call(null,map__28772))?cljs.core.apply.call(null,cljs.core.hash_map,map__28772):map__28772);var next_url_components = map__28772__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
;
clustermap.components.filter.t28766.prototype.om$core$IRender$ = true;
clustermap.components.filter.t28766.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
;
clustermap.components.filter.t28766.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t28766.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__28773_28934 = cljs.core.seq.call(null,chs);var chunk__28774_28935 = null;var count__28775_28936 = (0);var i__28776_28937 = (0);while(true){
if((i__28776_28937 < count__28775_28936))
{var vec__28777_28938 = cljs.core._nth.call(null,chunk__28774_28935,i__28776_28937);var component_id_28939 = cljs.core.nth.call(null,vec__28777_28938,(0),null);var ch_28940 = cljs.core.nth.call(null,vec__28777_28938,(1),null);cljs.core.async.close_BANG_.call(null,ch_28940);
{
var G__28941 = seq__28773_28934;
var G__28942 = chunk__28774_28935;
var G__28943 = count__28775_28936;
var G__28944 = (i__28776_28937 + (1));
seq__28773_28934 = G__28941;
chunk__28774_28935 = G__28942;
count__28775_28936 = G__28943;
i__28776_28937 = G__28944;
continue;
}
} else
{var temp__4126__auto___28945 = cljs.core.seq.call(null,seq__28773_28934);if(temp__4126__auto___28945)
{var seq__28773_28946__$1 = temp__4126__auto___28945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28773_28946__$1))
{var c__4408__auto___28947 = cljs.core.chunk_first.call(null,seq__28773_28946__$1);{
var G__28948 = cljs.core.chunk_rest.call(null,seq__28773_28946__$1);
var G__28949 = c__4408__auto___28947;
var G__28950 = cljs.core.count.call(null,c__4408__auto___28947);
var G__28951 = (0);
seq__28773_28934 = G__28948;
chunk__28774_28935 = G__28949;
count__28775_28936 = G__28950;
i__28776_28937 = G__28951;
continue;
}
} else
{var vec__28778_28952 = cljs.core.first.call(null,seq__28773_28946__$1);var component_id_28953 = cljs.core.nth.call(null,vec__28778_28952,(0),null);var ch_28954 = cljs.core.nth.call(null,vec__28778_28952,(1),null);cljs.core.async.close_BANG_.call(null,ch_28954);
{
var G__28955 = cljs.core.next.call(null,seq__28773_28946__$1);
var G__28956 = null;
var G__28957 = (0);
var G__28958 = (0);
seq__28773_28934 = G__28955;
chunk__28774_28935 = G__28956;
count__28775_28936 = G__28957;
i__28776_28937 = G__28958;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
;
clustermap.components.filter.t28766.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t28766.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function (state_28874){var state_val_28875 = (state_28874[(1)]);if((state_val_28875 === (7)))
{var inst_28865 = (state_28874[(2)]);var state_28874__$1 = state_28874;if(cljs.core.truth_(inst_28865))
{var statearr_28876_28959 = state_28874__$1;(statearr_28876_28959[(1)] = (25));
} else
{var statearr_28877_28960 = state_28874__$1;(statearr_28877_28960[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (20)))
{var inst_28826 = (state_28874[(7)]);var inst_28842 = (state_28874[(8)]);var inst_28784 = (state_28874[(9)]);var inst_28791 = (state_28874[(10)]);var inst_28835 = (state_28874[(11)]);var inst_28785 = (state_28874[(12)]);var inst_28835__$1 = cljs.core.first.call(null,inst_28826);var inst_28836 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28837 = cljs.core.get.call(null,inst_28785,inst_28835__$1);var inst_28838 = ["FILTER",inst_28784,inst_28835__$1,inst_28837];var inst_28839 = (new cljs.core.PersistentVector(null,4,(5),inst_28836,inst_28838,null));var inst_28840 = cljs.core.clj__GT_js.call(null,inst_28839);var inst_28841 = console.log(inst_28840);var inst_28842__$1 = cljs.core.get.call(null,inst_28791,inst_28835__$1);var state_28874__$1 = (function (){var statearr_28878 = state_28874;(statearr_28878[(8)] = inst_28842__$1);
(statearr_28878[(11)] = inst_28835__$1);
(statearr_28878[(13)] = inst_28841);
return statearr_28878;
})();if(cljs.core.truth_(inst_28842__$1))
{var statearr_28879_28961 = state_28874__$1;(statearr_28879_28961[(1)] = (22));
} else
{var statearr_28880_28962 = state_28874__$1;(statearr_28880_28962[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (27)))
{var inst_28870 = (state_28874[(2)]);var state_28874__$1 = state_28874;var statearr_28881_28963 = state_28874__$1;(statearr_28881_28963[(2)] = inst_28870);
(statearr_28881_28963[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (1)))
{var state_28874__$1 = state_28874;var statearr_28882_28964 = state_28874__$1;(statearr_28882_28964[(2)] = null);
(statearr_28882_28964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (24)))
{var inst_28826 = (state_28874[(7)]);var inst_28851 = (state_28874[(2)]);var inst_28852 = cljs.core.next.call(null,inst_28826);var inst_28798 = inst_28852;var inst_28799 = null;var inst_28800 = (0);var inst_28801 = (0);var state_28874__$1 = (function (){var statearr_28886 = state_28874;(statearr_28886[(14)] = inst_28799);
(statearr_28886[(15)] = inst_28801);
(statearr_28886[(16)] = inst_28800);
(statearr_28886[(17)] = inst_28798);
(statearr_28886[(18)] = inst_28851);
return statearr_28886;
})();var statearr_28887_28965 = state_28874__$1;(statearr_28887_28965[(2)] = null);
(statearr_28887_28965[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (4)))
{var inst_28781 = (state_28874[(19)]);var inst_28781__$1 = (state_28874[(2)]);var state_28874__$1 = (function (){var statearr_28888 = state_28874;(statearr_28888[(19)] = inst_28781__$1);
return statearr_28888;
})();if(cljs.core.truth_(inst_28781__$1))
{var statearr_28889_28966 = state_28874__$1;(statearr_28889_28966[(1)] = (5));
} else
{var statearr_28890_28967 = state_28874__$1;(statearr_28890_28967[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (15)))
{var inst_28799 = (state_28874[(14)]);var inst_28801 = (state_28874[(15)]);var inst_28800 = (state_28874[(16)]);var inst_28798 = (state_28874[(17)]);var inst_28822 = (state_28874[(2)]);var inst_28823 = (inst_28801 + (1));var tmp28883 = inst_28799;var tmp28884 = inst_28800;var tmp28885 = inst_28798;var inst_28798__$1 = tmp28885;var inst_28799__$1 = tmp28883;var inst_28800__$1 = tmp28884;var inst_28801__$1 = inst_28823;var state_28874__$1 = (function (){var statearr_28891 = state_28874;(statearr_28891[(14)] = inst_28799__$1);
(statearr_28891[(15)] = inst_28801__$1);
(statearr_28891[(20)] = inst_28822);
(statearr_28891[(16)] = inst_28800__$1);
(statearr_28891[(17)] = inst_28798__$1);
return statearr_28891;
})();var statearr_28892_28968 = state_28874__$1;(statearr_28892_28968[(2)] = null);
(statearr_28892_28968[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (21)))
{var inst_28855 = (state_28874[(2)]);var state_28874__$1 = state_28874;var statearr_28893_28969 = state_28874__$1;(statearr_28893_28969[(2)] = inst_28855);
(statearr_28893_28969[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (13)))
{var inst_28813 = (state_28874[(21)]);var inst_28785 = (state_28874[(12)]);var inst_28806 = (state_28874[(22)]);var inst_28815 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28816 = cljs.core.get.call(null,inst_28785,inst_28806);var inst_28817 = [inst_28806,inst_28816];var inst_28818 = (new cljs.core.PersistentVector(null,2,(5),inst_28815,inst_28817,null));var inst_28819 = cljs.core.async.put_BANG_.call(null,inst_28813,inst_28818);var state_28874__$1 = state_28874;var statearr_28894_28970 = state_28874__$1;(statearr_28894_28970[(2)] = inst_28819);
(statearr_28894_28970[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (22)))
{var inst_28842 = (state_28874[(8)]);var inst_28835 = (state_28874[(11)]);var inst_28785 = (state_28874[(12)]);var inst_28844 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28845 = cljs.core.get.call(null,inst_28785,inst_28835);var inst_28846 = [inst_28835,inst_28845];var inst_28847 = (new cljs.core.PersistentVector(null,2,(5),inst_28844,inst_28846,null));var inst_28848 = cljs.core.async.put_BANG_.call(null,inst_28842,inst_28847);var state_28874__$1 = state_28874;var statearr_28895_28971 = state_28874__$1;(statearr_28895_28971[(2)] = inst_28848);
(statearr_28895_28971[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (6)))
{var state_28874__$1 = state_28874;var statearr_28896_28972 = state_28874__$1;(statearr_28896_28972[(2)] = null);
(statearr_28896_28972[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (25)))
{var state_28874__$1 = state_28874;var statearr_28897_28973 = state_28874__$1;(statearr_28897_28973[(2)] = null);
(statearr_28897_28973[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (17)))
{var state_28874__$1 = state_28874;var statearr_28898_28974 = state_28874__$1;(statearr_28898_28974[(2)] = null);
(statearr_28898_28974[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (3)))
{var inst_28872 = (state_28874[(2)]);var state_28874__$1 = state_28874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28874__$1,inst_28872);
} else
{if((state_val_28875 === (12)))
{var inst_28860 = (state_28874[(2)]);var state_28874__$1 = state_28874;var statearr_28899_28975 = state_28874__$1;(statearr_28899_28975[(2)] = inst_28860);
(statearr_28899_28975[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (2)))
{var state_28874__$1 = state_28874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28874__$1,(4),filter_rq_sub);
} else
{if((state_val_28875 === (23)))
{var state_28874__$1 = state_28874;var statearr_28900_28976 = state_28874__$1;(statearr_28900_28976[(2)] = null);
(statearr_28900_28976[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (19)))
{var inst_28826 = (state_28874[(7)]);var inst_28830 = cljs.core.chunk_first.call(null,inst_28826);var inst_28831 = cljs.core.chunk_rest.call(null,inst_28826);var inst_28832 = cljs.core.count.call(null,inst_28830);var inst_28798 = inst_28831;var inst_28799 = inst_28830;var inst_28800 = inst_28832;var inst_28801 = (0);var state_28874__$1 = (function (){var statearr_28901 = state_28874;(statearr_28901[(14)] = inst_28799);
(statearr_28901[(15)] = inst_28801);
(statearr_28901[(16)] = inst_28800);
(statearr_28901[(17)] = inst_28798);
return statearr_28901;
})();var statearr_28902_28977 = state_28874__$1;(statearr_28902_28977[(2)] = null);
(statearr_28902_28977[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (11)))
{var inst_28826 = (state_28874[(7)]);var inst_28798 = (state_28874[(17)]);var inst_28826__$1 = cljs.core.seq.call(null,inst_28798);var state_28874__$1 = (function (){var statearr_28903 = state_28874;(statearr_28903[(7)] = inst_28826__$1);
return statearr_28903;
})();if(inst_28826__$1)
{var statearr_28904_28978 = state_28874__$1;(statearr_28904_28978[(1)] = (16));
} else
{var statearr_28905_28979 = state_28874__$1;(statearr_28905_28979[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (9)))
{var inst_28862 = (state_28874[(2)]);var state_28874__$1 = (function (){var statearr_28906 = state_28874;(statearr_28906[(23)] = inst_28862);
return statearr_28906;
})();var statearr_28907_28980 = state_28874__$1;(statearr_28907_28980[(2)] = true);
(statearr_28907_28980[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (5)))
{var inst_28784 = (state_28874[(9)]);var inst_28785 = (state_28874[(12)]);var inst_28781 = (state_28874[(19)]);var inst_28784__$1 = cljs.core.nth.call(null,inst_28781,(0),null);var inst_28785__$1 = cljs.core.nth.call(null,inst_28781,(1),null);var inst_28786 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28787 = ["FILTER-RQ",inst_28784__$1,inst_28785__$1];var inst_28788 = (new cljs.core.PersistentVector(null,3,(5),inst_28786,inst_28787,null));var inst_28789 = cljs.core.clj__GT_js.call(null,inst_28788);var inst_28790 = console.log(inst_28789);var inst_28791 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_28792 = cljs.core.keys.call(null,inst_28785__$1);var inst_28797 = cljs.core.seq.call(null,inst_28792);var inst_28798 = inst_28797;var inst_28799 = null;var inst_28800 = (0);var inst_28801 = (0);var state_28874__$1 = (function (){var statearr_28908 = state_28874;(statearr_28908[(14)] = inst_28799);
(statearr_28908[(24)] = inst_28790);
(statearr_28908[(9)] = inst_28784__$1);
(statearr_28908[(15)] = inst_28801);
(statearr_28908[(10)] = inst_28791);
(statearr_28908[(16)] = inst_28800);
(statearr_28908[(12)] = inst_28785__$1);
(statearr_28908[(17)] = inst_28798);
return statearr_28908;
})();var statearr_28909_28981 = state_28874__$1;(statearr_28909_28981[(2)] = null);
(statearr_28909_28981[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (14)))
{var state_28874__$1 = state_28874;var statearr_28910_28982 = state_28874__$1;(statearr_28910_28982[(2)] = null);
(statearr_28910_28982[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (26)))
{var state_28874__$1 = state_28874;var statearr_28911_28983 = state_28874__$1;(statearr_28911_28983[(2)] = null);
(statearr_28911_28983[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (16)))
{var inst_28826 = (state_28874[(7)]);var inst_28828 = cljs.core.chunked_seq_QMARK_.call(null,inst_28826);var state_28874__$1 = state_28874;if(inst_28828)
{var statearr_28912_28984 = state_28874__$1;(statearr_28912_28984[(1)] = (19));
} else
{var statearr_28913_28985 = state_28874__$1;(statearr_28913_28985[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (10)))
{var inst_28799 = (state_28874[(14)]);var inst_28784 = (state_28874[(9)]);var inst_28801 = (state_28874[(15)]);var inst_28813 = (state_28874[(21)]);var inst_28791 = (state_28874[(10)]);var inst_28785 = (state_28874[(12)]);var inst_28806 = (state_28874[(22)]);var inst_28806__$1 = cljs.core._nth.call(null,inst_28799,inst_28801);var inst_28807 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28808 = cljs.core.get.call(null,inst_28785,inst_28806__$1);var inst_28809 = ["FILTER",inst_28784,inst_28806__$1,inst_28808];var inst_28810 = (new cljs.core.PersistentVector(null,4,(5),inst_28807,inst_28809,null));var inst_28811 = cljs.core.clj__GT_js.call(null,inst_28810);var inst_28812 = console.log(inst_28811);var inst_28813__$1 = cljs.core.get.call(null,inst_28791,inst_28806__$1);var state_28874__$1 = (function (){var statearr_28914 = state_28874;(statearr_28914[(25)] = inst_28812);
(statearr_28914[(21)] = inst_28813__$1);
(statearr_28914[(22)] = inst_28806__$1);
return statearr_28914;
})();if(cljs.core.truth_(inst_28813__$1))
{var statearr_28915_28986 = state_28874__$1;(statearr_28915_28986[(1)] = (13));
} else
{var statearr_28916_28987 = state_28874__$1;(statearr_28916_28987[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (18)))
{var inst_28858 = (state_28874[(2)]);var state_28874__$1 = state_28874;var statearr_28917_28988 = state_28874__$1;(statearr_28917_28988[(2)] = inst_28858);
(statearr_28917_28988[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28875 === (8)))
{var inst_28801 = (state_28874[(15)]);var inst_28800 = (state_28874[(16)]);var inst_28803 = (inst_28801 < inst_28800);var inst_28804 = inst_28803;var state_28874__$1 = state_28874;if(cljs.core.truth_(inst_28804))
{var statearr_28918_28989 = state_28874__$1;(statearr_28918_28989[(1)] = (10));
} else
{var statearr_28919_28990 = state_28874__$1;(statearr_28919_28990[(1)] = (11));
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
});})(c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
;return ((function (switch__11241__auto__,c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_28923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28923[(0)] = state_machine__11242__auto__);
(statearr_28923[(1)] = (1));
return statearr_28923;
});
var state_machine__11242__auto____1 = (function (state_28874){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_28874);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e28924){if((e28924 instanceof Object))
{var ex__11245__auto__ = e28924;var statearr_28925_28991 = state_28874;(statearr_28925_28991[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28874);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28924;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28992 = state_28874;
state_28874 = G__28992;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_28874){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_28874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
})();var state__11299__auto__ = (function (){var statearr_28926 = f__11298__auto__.call(null);(statearr_28926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_28926;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
);
return c__11297__auto__;
});})(owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
;
clustermap.components.filter.t28766.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function (_28768){var self__ = this;
var _28768__$1 = this;return self__.meta28767;
});})(owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
;
clustermap.components.filter.t28766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function (_28768,meta28767__$1){var self__ = this;
var _28768__$1 = this;return (new clustermap.components.filter.t28766(self__.owner,self__.G__28604,self__.output_schema28600,self__.component_specs,self__.filter_spec,self__.history,self__.input_schema28601,self__.components,self__.map28598,self__.validate__6034__auto__,self__.map28599,self__.id,self__.constructor28595,self__.input_checker28602,self__.map28597,self__.output_checker28603,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta28767__$1));
});})(owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
;
clustermap.components.filter.__GT_t28766 = ((function (owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603){
return (function __GT_t28766(owner__$1,G__28604__$1,output_schema28600__$1,component_specs__$1,filter_spec__$1,history__$1,input_schema28601__$1,components__$1,map28598__$1,validate__6034__auto____$1,map28599__$1,id__$1,constructor28595__$1,input_checker28602__$1,map28597__$1,output_checker28603__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta28767){return (new clustermap.components.filter.t28766(owner__$1,G__28604__$1,output_schema28600__$1,component_specs__$1,filter_spec__$1,history__$1,input_schema28601__$1,components__$1,map28598__$1,validate__6034__auto____$1,map28599__$1,id__$1,constructor28595__$1,input_checker28602__$1,map28597__$1,output_checker28603__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta28767));
});})(owner,history,filter_rq_pub,map28598,url_components,components,component_specs,id,filter_spec,map28599,validate__6034__auto__,ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
;
}
return (new clustermap.components.filter.t28766(owner,G__28604,output_schema28600,component_specs,filter_spec,history,input_schema28601,components,map28598,validate__6034__auto__,map28599,id,constructor28595,input_checker28602,map28597,output_checker28603,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28993 = output_checker28603.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28993))
{var error__6036__auto___28994 = temp__4126__auto___28993;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28595","constructor28595",1091427643,null),cljs.core.pr_str.call(null,error__6036__auto___28994)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28994,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28600,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28600,input_schema28601,input_checker28602,output_checker28603))
,schema.core.make_fn_schema.call(null,output_schema28600,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28601], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___28930){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner28594,p__28927){var vec__28929 = p__28927;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28929,(0),null);return component_fnk__7881__auto___28930.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28594),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28594,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner28594,var_args){
var p__28927 = null;if (arguments.length > 2) {
  p__28927 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner28594,p__28927);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__28995){
var data__7882__auto__ = cljs.core.first(arglist__28995);
arglist__28995 = cljs.core.next(arglist__28995);
var owner28594 = cljs.core.first(arglist__28995);
var p__28927 = cljs.core.rest(arglist__28995);
return filter_component__delegate(data__7882__auto__,owner28594,p__28927);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___28930))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m28596){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m28596);
});
__GT_filter_component = function(cursor__7850__auto__,m28596){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m28596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
