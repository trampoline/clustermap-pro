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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__28558){var map__28560 = p__28558;var map__28560__$1 = ((cljs.core.seq_QMARK_.call(null,map__28560))?cljs.core.apply.call(null,cljs.core.hash_map,map__28560):map__28560);var filter_spec = map__28560__$1;var component_descrs = cljs.core.get.call(null,map__28560__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28560__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28560__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__28561){var map__28563 = p__28561;var map__28563__$1 = ((cljs.core.seq_QMARK_.call(null,map__28563))?cljs.core.apply.call(null,cljs.core.hash_map,map__28563):map__28563);var filter_spec = map__28563__$1;var component_descrs = cljs.core.get.call(null,map__28563__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28563__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28563__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__28564,component_filter_rq_chan){var map__28569 = p__28564;var map__28569__$1 = ((cljs.core.seq_QMARK_.call(null,map__28569))?cljs.core.apply.call(null,cljs.core.hash_map,map__28569):map__28569);var component_spec = map__28569__$1;var type = cljs.core.get.call(null,map__28569__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__28570 = cljs.core._EQ_;var expr__28571 = type;if(cljs.core.truth_(pred__28570.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__28571)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28570.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__28571)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28570.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__28571)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28570.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__28571)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28570.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__28571)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28571))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__28573,component_filter_rq_chan){var map__28575 = p__28573;var map__28575__$1 = ((cljs.core.seq_QMARK_.call(null,map__28575))?cljs.core.apply.call(null,cljs.core.hash_map,map__28575):map__28575);var component_spec = map__28575__$1;var visible = cljs.core.get.call(null,map__28575__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__28575__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__28575__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__28575__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28577 = schema.core.Any;var input_schema28578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28576","map28576",1931006453,null))], null);var input_checker28579 = schema.core.checker.call(null,input_schema28578);var output_checker28580 = schema.core.checker.call(null,output_schema28577);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28577,input_schema28578,input_checker28579,output_checker28580){
return (function render_STAR_(G__28581){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28581], null);var temp__4126__auto___28599 = input_checker28579.call(null,args__6035__auto___28598);if(cljs.core.truth_(temp__4126__auto___28599))
{var error__6036__auto___28600 = temp__4126__auto___28599;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28600)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28600,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28598,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28578,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28576 = G__28581;while(true){
if(cljs.core.map_QMARK_.call(null,map28576))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28576)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28576,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map28576,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map28576,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28577,input_schema28578,input_checker28579,output_checker28580){
return (function iter__28590(s__28591){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28577,input_schema28578,input_checker28579,output_checker28580){
return (function (){var s__28591__$1 = s__28591;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28591__$1);if(temp__4126__auto__)
{var s__28591__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28591__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28591__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28593 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28592 = (0);while(true){
if((i__28592 < size__4376__auto__))
{var map__28596 = cljs.core._nth.call(null,c__4375__auto__,i__28592);var map__28596__$1 = ((cljs.core.seq_QMARK_.call(null,map__28596))?cljs.core.apply.call(null,cljs.core.hash_map,map__28596):map__28596);var component_spec = map__28596__$1;var id = cljs.core.get.call(null,map__28596__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__28593,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__28601 = (i__28592 + (1));
i__28592 = G__28601;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28593),iter__28590.call(null,cljs.core.chunk_rest.call(null,s__28591__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28593),null);
}
} else
{var map__28597 = cljs.core.first.call(null,s__28591__$2);var map__28597__$1 = ((cljs.core.seq_QMARK_.call(null,map__28597))?cljs.core.apply.call(null,cljs.core.hash_map,map__28597):map__28597);var component_spec = map__28597__$1;var id = cljs.core.get.call(null,map__28597__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__28590.call(null,cljs.core.rest.call(null,s__28591__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28577,input_schema28578,input_checker28579,output_checker28580))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28577,input_schema28578,input_checker28579,output_checker28580))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28602 = output_checker28580.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28602))
{var error__6036__auto___28603 = temp__4126__auto___28602;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28603)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28603,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28577,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28577,input_schema28578,input_checker28579,output_checker28580))
,schema.core.make_fn_schema.call(null,output_schema28577,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28578], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___28940 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28610 = schema.core.Any;var input_schema28611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28607","map28607",-1804632569,null))], null);var input_checker28612 = schema.core.checker.call(null,input_schema28611);var output_checker28613 = schema.core.checker.call(null,output_schema28610);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function constructor28605(G__28614){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28614], null);var temp__4126__auto___28942 = input_checker28612.call(null,args__6035__auto___28941);if(cljs.core.truth_(temp__4126__auto___28942))
{var error__6036__auto___28943 = temp__4126__auto___28942;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28605","constructor28605",339357689,null),cljs.core.pr_str.call(null,error__6036__auto___28943)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28943,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28941,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28611,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28607 = G__28614;while(true){
if(cljs.core.map_QMARK_.call(null,map28607))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28607)));
}
var map28609 = plumbing.fnk.schema.safe_get.call(null,map28607,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28609,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map28608 = plumbing.fnk.schema.safe_get.call(null,map28607,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map28608,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map28608,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28607,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t28776 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t28776 = (function (input_checker28612,owner,map28609,map28607,output_checker28613,map28608,component_specs,filter_spec,history,components,constructor28605,G__28614,validate__6034__auto__,id,output_schema28610,filter_rq_pub,ufv__,url_components,input_schema28611,meta28777){
this.input_checker28612 = input_checker28612;
this.owner = owner;
this.map28609 = map28609;
this.map28607 = map28607;
this.output_checker28613 = output_checker28613;
this.map28608 = map28608;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.history = history;
this.components = components;
this.constructor28605 = constructor28605;
this.G__28614 = G__28614;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_schema28610 = output_schema28610;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.input_schema28611 = input_schema28611;
this.meta28777 = meta28777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t28776.cljs$lang$type = true;
clustermap.components.filter.t28776.cljs$lang$ctorStr = "clustermap.components.filter/t28776";
clustermap.components.filter.t28776.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t28776");
});})(owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
;
clustermap.components.filter.t28776.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t28776.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
;
clustermap.components.filter.t28776.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t28776.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function (_,p__28779,___$1){var self__ = this;
var map__28780 = p__28779;var map__28780__$1 = ((cljs.core.seq_QMARK_.call(null,map__28780))?cljs.core.apply.call(null,cljs.core.hash_map,map__28780):map__28780);var next_props = map__28780__$1;var map__28781 = cljs.core.get.call(null,map__28780__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28781__$1 = ((cljs.core.seq_QMARK_.call(null,map__28781))?cljs.core.apply.call(null,cljs.core.hash_map,map__28781):map__28781);var next_filter_spec = map__28781__$1;var map__28782 = cljs.core.get.call(null,map__28781__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__28782__$1 = ((cljs.core.seq_QMARK_.call(null,map__28782))?cljs.core.apply.call(null,cljs.core.hash_map,map__28782):map__28782);var next_url_components = map__28782__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
;
clustermap.components.filter.t28776.prototype.om$core$IRender$ = true;
clustermap.components.filter.t28776.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
;
clustermap.components.filter.t28776.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t28776.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__28783_28944 = cljs.core.seq.call(null,chs);var chunk__28784_28945 = null;var count__28785_28946 = (0);var i__28786_28947 = (0);while(true){
if((i__28786_28947 < count__28785_28946))
{var vec__28787_28948 = cljs.core._nth.call(null,chunk__28784_28945,i__28786_28947);var component_id_28949 = cljs.core.nth.call(null,vec__28787_28948,(0),null);var ch_28950 = cljs.core.nth.call(null,vec__28787_28948,(1),null);cljs.core.async.close_BANG_.call(null,ch_28950);
{
var G__28951 = seq__28783_28944;
var G__28952 = chunk__28784_28945;
var G__28953 = count__28785_28946;
var G__28954 = (i__28786_28947 + (1));
seq__28783_28944 = G__28951;
chunk__28784_28945 = G__28952;
count__28785_28946 = G__28953;
i__28786_28947 = G__28954;
continue;
}
} else
{var temp__4126__auto___28955 = cljs.core.seq.call(null,seq__28783_28944);if(temp__4126__auto___28955)
{var seq__28783_28956__$1 = temp__4126__auto___28955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28783_28956__$1))
{var c__4408__auto___28957 = cljs.core.chunk_first.call(null,seq__28783_28956__$1);{
var G__28958 = cljs.core.chunk_rest.call(null,seq__28783_28956__$1);
var G__28959 = c__4408__auto___28957;
var G__28960 = cljs.core.count.call(null,c__4408__auto___28957);
var G__28961 = (0);
seq__28783_28944 = G__28958;
chunk__28784_28945 = G__28959;
count__28785_28946 = G__28960;
i__28786_28947 = G__28961;
continue;
}
} else
{var vec__28788_28962 = cljs.core.first.call(null,seq__28783_28956__$1);var component_id_28963 = cljs.core.nth.call(null,vec__28788_28962,(0),null);var ch_28964 = cljs.core.nth.call(null,vec__28788_28962,(1),null);cljs.core.async.close_BANG_.call(null,ch_28964);
{
var G__28965 = cljs.core.next.call(null,seq__28783_28956__$1);
var G__28966 = null;
var G__28967 = (0);
var G__28968 = (0);
seq__28783_28944 = G__28965;
chunk__28784_28945 = G__28966;
count__28785_28946 = G__28967;
i__28786_28947 = G__28968;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
;
clustermap.components.filter.t28776.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t28776.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function (state_28884){var state_val_28885 = (state_28884[(1)]);if((state_val_28885 === (7)))
{var inst_28875 = (state_28884[(2)]);var state_28884__$1 = state_28884;if(cljs.core.truth_(inst_28875))
{var statearr_28886_28969 = state_28884__$1;(statearr_28886_28969[(1)] = (25));
} else
{var statearr_28887_28970 = state_28884__$1;(statearr_28887_28970[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (20)))
{var inst_28852 = (state_28884[(7)]);var inst_28801 = (state_28884[(8)]);var inst_28795 = (state_28884[(9)]);var inst_28845 = (state_28884[(10)]);var inst_28836 = (state_28884[(11)]);var inst_28794 = (state_28884[(12)]);var inst_28845__$1 = cljs.core.first.call(null,inst_28836);var inst_28846 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28847 = cljs.core.get.call(null,inst_28795,inst_28845__$1);var inst_28848 = ["FILTER",inst_28794,inst_28845__$1,inst_28847];var inst_28849 = (new cljs.core.PersistentVector(null,4,(5),inst_28846,inst_28848,null));var inst_28850 = cljs.core.clj__GT_js.call(null,inst_28849);var inst_28851 = console.log(inst_28850);var inst_28852__$1 = cljs.core.get.call(null,inst_28801,inst_28845__$1);var state_28884__$1 = (function (){var statearr_28888 = state_28884;(statearr_28888[(7)] = inst_28852__$1);
(statearr_28888[(10)] = inst_28845__$1);
(statearr_28888[(13)] = inst_28851);
return statearr_28888;
})();if(cljs.core.truth_(inst_28852__$1))
{var statearr_28889_28971 = state_28884__$1;(statearr_28889_28971[(1)] = (22));
} else
{var statearr_28890_28972 = state_28884__$1;(statearr_28890_28972[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (27)))
{var inst_28880 = (state_28884[(2)]);var state_28884__$1 = state_28884;var statearr_28891_28973 = state_28884__$1;(statearr_28891_28973[(2)] = inst_28880);
(statearr_28891_28973[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (1)))
{var state_28884__$1 = state_28884;var statearr_28892_28974 = state_28884__$1;(statearr_28892_28974[(2)] = null);
(statearr_28892_28974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (24)))
{var inst_28836 = (state_28884[(11)]);var inst_28861 = (state_28884[(2)]);var inst_28862 = cljs.core.next.call(null,inst_28836);var inst_28808 = inst_28862;var inst_28809 = null;var inst_28810 = (0);var inst_28811 = (0);var state_28884__$1 = (function (){var statearr_28896 = state_28884;(statearr_28896[(14)] = inst_28809);
(statearr_28896[(15)] = inst_28811);
(statearr_28896[(16)] = inst_28810);
(statearr_28896[(17)] = inst_28808);
(statearr_28896[(18)] = inst_28861);
return statearr_28896;
})();var statearr_28897_28975 = state_28884__$1;(statearr_28897_28975[(2)] = null);
(statearr_28897_28975[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (4)))
{var inst_28791 = (state_28884[(19)]);var inst_28791__$1 = (state_28884[(2)]);var state_28884__$1 = (function (){var statearr_28898 = state_28884;(statearr_28898[(19)] = inst_28791__$1);
return statearr_28898;
})();if(cljs.core.truth_(inst_28791__$1))
{var statearr_28899_28976 = state_28884__$1;(statearr_28899_28976[(1)] = (5));
} else
{var statearr_28900_28977 = state_28884__$1;(statearr_28900_28977[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (15)))
{var inst_28809 = (state_28884[(14)]);var inst_28811 = (state_28884[(15)]);var inst_28810 = (state_28884[(16)]);var inst_28808 = (state_28884[(17)]);var inst_28832 = (state_28884[(2)]);var inst_28833 = (inst_28811 + (1));var tmp28893 = inst_28809;var tmp28894 = inst_28810;var tmp28895 = inst_28808;var inst_28808__$1 = tmp28895;var inst_28809__$1 = tmp28893;var inst_28810__$1 = tmp28894;var inst_28811__$1 = inst_28833;var state_28884__$1 = (function (){var statearr_28901 = state_28884;(statearr_28901[(14)] = inst_28809__$1);
(statearr_28901[(15)] = inst_28811__$1);
(statearr_28901[(16)] = inst_28810__$1);
(statearr_28901[(20)] = inst_28832);
(statearr_28901[(17)] = inst_28808__$1);
return statearr_28901;
})();var statearr_28902_28978 = state_28884__$1;(statearr_28902_28978[(2)] = null);
(statearr_28902_28978[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (21)))
{var inst_28865 = (state_28884[(2)]);var state_28884__$1 = state_28884;var statearr_28903_28979 = state_28884__$1;(statearr_28903_28979[(2)] = inst_28865);
(statearr_28903_28979[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (13)))
{var inst_28816 = (state_28884[(21)]);var inst_28795 = (state_28884[(9)]);var inst_28823 = (state_28884[(22)]);var inst_28825 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28826 = cljs.core.get.call(null,inst_28795,inst_28816);var inst_28827 = [inst_28816,inst_28826];var inst_28828 = (new cljs.core.PersistentVector(null,2,(5),inst_28825,inst_28827,null));var inst_28829 = cljs.core.async.put_BANG_.call(null,inst_28823,inst_28828);var state_28884__$1 = state_28884;var statearr_28904_28980 = state_28884__$1;(statearr_28904_28980[(2)] = inst_28829);
(statearr_28904_28980[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (22)))
{var inst_28852 = (state_28884[(7)]);var inst_28795 = (state_28884[(9)]);var inst_28845 = (state_28884[(10)]);var inst_28854 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28855 = cljs.core.get.call(null,inst_28795,inst_28845);var inst_28856 = [inst_28845,inst_28855];var inst_28857 = (new cljs.core.PersistentVector(null,2,(5),inst_28854,inst_28856,null));var inst_28858 = cljs.core.async.put_BANG_.call(null,inst_28852,inst_28857);var state_28884__$1 = state_28884;var statearr_28905_28981 = state_28884__$1;(statearr_28905_28981[(2)] = inst_28858);
(statearr_28905_28981[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (6)))
{var state_28884__$1 = state_28884;var statearr_28906_28982 = state_28884__$1;(statearr_28906_28982[(2)] = null);
(statearr_28906_28982[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (25)))
{var state_28884__$1 = state_28884;var statearr_28907_28983 = state_28884__$1;(statearr_28907_28983[(2)] = null);
(statearr_28907_28983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (17)))
{var state_28884__$1 = state_28884;var statearr_28908_28984 = state_28884__$1;(statearr_28908_28984[(2)] = null);
(statearr_28908_28984[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (3)))
{var inst_28882 = (state_28884[(2)]);var state_28884__$1 = state_28884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28884__$1,inst_28882);
} else
{if((state_val_28885 === (12)))
{var inst_28870 = (state_28884[(2)]);var state_28884__$1 = state_28884;var statearr_28909_28985 = state_28884__$1;(statearr_28909_28985[(2)] = inst_28870);
(statearr_28909_28985[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (2)))
{var state_28884__$1 = state_28884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28884__$1,(4),filter_rq_sub);
} else
{if((state_val_28885 === (23)))
{var state_28884__$1 = state_28884;var statearr_28910_28986 = state_28884__$1;(statearr_28910_28986[(2)] = null);
(statearr_28910_28986[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (19)))
{var inst_28836 = (state_28884[(11)]);var inst_28840 = cljs.core.chunk_first.call(null,inst_28836);var inst_28841 = cljs.core.chunk_rest.call(null,inst_28836);var inst_28842 = cljs.core.count.call(null,inst_28840);var inst_28808 = inst_28841;var inst_28809 = inst_28840;var inst_28810 = inst_28842;var inst_28811 = (0);var state_28884__$1 = (function (){var statearr_28911 = state_28884;(statearr_28911[(14)] = inst_28809);
(statearr_28911[(15)] = inst_28811);
(statearr_28911[(16)] = inst_28810);
(statearr_28911[(17)] = inst_28808);
return statearr_28911;
})();var statearr_28912_28987 = state_28884__$1;(statearr_28912_28987[(2)] = null);
(statearr_28912_28987[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (11)))
{var inst_28836 = (state_28884[(11)]);var inst_28808 = (state_28884[(17)]);var inst_28836__$1 = cljs.core.seq.call(null,inst_28808);var state_28884__$1 = (function (){var statearr_28913 = state_28884;(statearr_28913[(11)] = inst_28836__$1);
return statearr_28913;
})();if(inst_28836__$1)
{var statearr_28914_28988 = state_28884__$1;(statearr_28914_28988[(1)] = (16));
} else
{var statearr_28915_28989 = state_28884__$1;(statearr_28915_28989[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (9)))
{var inst_28872 = (state_28884[(2)]);var state_28884__$1 = (function (){var statearr_28916 = state_28884;(statearr_28916[(23)] = inst_28872);
return statearr_28916;
})();var statearr_28917_28990 = state_28884__$1;(statearr_28917_28990[(2)] = true);
(statearr_28917_28990[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (5)))
{var inst_28791 = (state_28884[(19)]);var inst_28795 = (state_28884[(9)]);var inst_28794 = (state_28884[(12)]);var inst_28794__$1 = cljs.core.nth.call(null,inst_28791,(0),null);var inst_28795__$1 = cljs.core.nth.call(null,inst_28791,(1),null);var inst_28796 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28797 = ["FILTER-RQ",inst_28794__$1,inst_28795__$1];var inst_28798 = (new cljs.core.PersistentVector(null,3,(5),inst_28796,inst_28797,null));var inst_28799 = cljs.core.clj__GT_js.call(null,inst_28798);var inst_28800 = console.log(inst_28799);var inst_28801 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_28802 = cljs.core.keys.call(null,inst_28795__$1);var inst_28807 = cljs.core.seq.call(null,inst_28802);var inst_28808 = inst_28807;var inst_28809 = null;var inst_28810 = (0);var inst_28811 = (0);var state_28884__$1 = (function (){var statearr_28918 = state_28884;(statearr_28918[(14)] = inst_28809);
(statearr_28918[(8)] = inst_28801);
(statearr_28918[(9)] = inst_28795__$1);
(statearr_28918[(15)] = inst_28811);
(statearr_28918[(16)] = inst_28810);
(statearr_28918[(24)] = inst_28800);
(statearr_28918[(17)] = inst_28808);
(statearr_28918[(12)] = inst_28794__$1);
return statearr_28918;
})();var statearr_28919_28991 = state_28884__$1;(statearr_28919_28991[(2)] = null);
(statearr_28919_28991[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (14)))
{var state_28884__$1 = state_28884;var statearr_28920_28992 = state_28884__$1;(statearr_28920_28992[(2)] = null);
(statearr_28920_28992[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (26)))
{var state_28884__$1 = state_28884;var statearr_28921_28993 = state_28884__$1;(statearr_28921_28993[(2)] = null);
(statearr_28921_28993[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (16)))
{var inst_28836 = (state_28884[(11)]);var inst_28838 = cljs.core.chunked_seq_QMARK_.call(null,inst_28836);var state_28884__$1 = state_28884;if(inst_28838)
{var statearr_28922_28994 = state_28884__$1;(statearr_28922_28994[(1)] = (19));
} else
{var statearr_28923_28995 = state_28884__$1;(statearr_28923_28995[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (10)))
{var inst_28816 = (state_28884[(21)]);var inst_28809 = (state_28884[(14)]);var inst_28801 = (state_28884[(8)]);var inst_28795 = (state_28884[(9)]);var inst_28811 = (state_28884[(15)]);var inst_28823 = (state_28884[(22)]);var inst_28794 = (state_28884[(12)]);var inst_28816__$1 = cljs.core._nth.call(null,inst_28809,inst_28811);var inst_28817 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28818 = cljs.core.get.call(null,inst_28795,inst_28816__$1);var inst_28819 = ["FILTER",inst_28794,inst_28816__$1,inst_28818];var inst_28820 = (new cljs.core.PersistentVector(null,4,(5),inst_28817,inst_28819,null));var inst_28821 = cljs.core.clj__GT_js.call(null,inst_28820);var inst_28822 = console.log(inst_28821);var inst_28823__$1 = cljs.core.get.call(null,inst_28801,inst_28816__$1);var state_28884__$1 = (function (){var statearr_28924 = state_28884;(statearr_28924[(21)] = inst_28816__$1);
(statearr_28924[(25)] = inst_28822);
(statearr_28924[(22)] = inst_28823__$1);
return statearr_28924;
})();if(cljs.core.truth_(inst_28823__$1))
{var statearr_28925_28996 = state_28884__$1;(statearr_28925_28996[(1)] = (13));
} else
{var statearr_28926_28997 = state_28884__$1;(statearr_28926_28997[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (18)))
{var inst_28868 = (state_28884[(2)]);var state_28884__$1 = state_28884;var statearr_28927_28998 = state_28884__$1;(statearr_28927_28998[(2)] = inst_28868);
(statearr_28927_28998[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28885 === (8)))
{var inst_28811 = (state_28884[(15)]);var inst_28810 = (state_28884[(16)]);var inst_28813 = (inst_28811 < inst_28810);var inst_28814 = inst_28813;var state_28884__$1 = state_28884;if(cljs.core.truth_(inst_28814))
{var statearr_28928_28999 = state_28884__$1;(statearr_28928_28999[(1)] = (10));
} else
{var statearr_28929_29000 = state_28884__$1;(statearr_28929_29000[(1)] = (11));
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
});})(c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
;return ((function (switch__11461__auto__,c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28933[(0)] = state_machine__11462__auto__);
(statearr_28933[(1)] = (1));
return statearr_28933;
});
var state_machine__11462__auto____1 = (function (state_28884){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_28884);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28934){if((e28934 instanceof Object))
{var ex__11465__auto__ = e28934;var statearr_28935_29001 = state_28884;(statearr_28935_29001[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28884);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28934;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29002 = state_28884;
state_28884 = G__29002;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_28884){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_28884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
})();var state__11519__auto__ = (function (){var statearr_28936 = f__11518__auto__.call(null);(statearr_28936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_28936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
);
return c__11517__auto__;
});})(owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
;
clustermap.components.filter.t28776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function (_28778){var self__ = this;
var _28778__$1 = this;return self__.meta28777;
});})(owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
;
clustermap.components.filter.t28776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function (_28778,meta28777__$1){var self__ = this;
var _28778__$1 = this;return (new clustermap.components.filter.t28776(self__.input_checker28612,self__.owner,self__.map28609,self__.map28607,self__.output_checker28613,self__.map28608,self__.component_specs,self__.filter_spec,self__.history,self__.components,self__.constructor28605,self__.G__28614,self__.validate__6034__auto__,self__.id,self__.output_schema28610,self__.filter_rq_pub,self__.ufv__,self__.url_components,self__.input_schema28611,meta28777__$1));
});})(owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
;
clustermap.components.filter.__GT_t28776 = ((function (owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613){
return (function __GT_t28776(input_checker28612__$1,owner__$1,map28609__$1,map28607__$1,output_checker28613__$1,map28608__$1,component_specs__$1,filter_spec__$1,history__$1,components__$1,constructor28605__$1,G__28614__$1,validate__6034__auto____$1,id__$1,output_schema28610__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,input_schema28611__$1,meta28777){return (new clustermap.components.filter.t28776(input_checker28612__$1,owner__$1,map28609__$1,map28607__$1,output_checker28613__$1,map28608__$1,component_specs__$1,filter_spec__$1,history__$1,components__$1,constructor28605__$1,G__28614__$1,validate__6034__auto____$1,id__$1,output_schema28610__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,input_schema28611__$1,meta28777));
});})(owner,history,filter_rq_pub,map28608,url_components,components,component_specs,id,filter_spec,map28609,validate__6034__auto__,ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
;
}
return (new clustermap.components.filter.t28776(input_checker28612,owner,map28609,map28607,output_checker28613,map28608,component_specs,filter_spec,history,components,constructor28605,G__28614,validate__6034__auto__,id,output_schema28610,filter_rq_pub,ufv__,url_components,input_schema28611,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29003 = output_checker28613.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29003))
{var error__6036__auto___29004 = temp__4126__auto___29003;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28605","constructor28605",339357689,null),cljs.core.pr_str.call(null,error__6036__auto___29004)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29004,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28610,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28610,input_schema28611,input_checker28612,output_checker28613))
,schema.core.make_fn_schema.call(null,output_schema28610,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28611], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___28940){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner28604,p__28937){var vec__28939 = p__28937;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28939,(0),null);return component_fnk__7881__auto___28940.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28604),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28604,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner28604,var_args){
var p__28937 = null;if (arguments.length > 2) {
  p__28937 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner28604,p__28937);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__29005){
var data__7882__auto__ = cljs.core.first(arglist__29005);
arglist__29005 = cljs.core.next(arglist__29005);
var owner28604 = cljs.core.first(arglist__29005);
var p__28937 = cljs.core.rest(arglist__29005);
return filter_component__delegate(data__7882__auto__,owner28604,p__28937);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___28940))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m28606){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m28606);
});
__GT_filter_component = function(cursor__7850__auto__,m28606){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m28606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
