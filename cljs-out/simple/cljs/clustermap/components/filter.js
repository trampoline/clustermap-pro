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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__28478){var map__28480 = p__28478;var map__28480__$1 = ((cljs.core.seq_QMARK_.call(null,map__28480))?cljs.core.apply.call(null,cljs.core.hash_map,map__28480):map__28480);var filter_spec = map__28480__$1;var component_descrs = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28480__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__28481){var map__28483 = p__28481;var map__28483__$1 = ((cljs.core.seq_QMARK_.call(null,map__28483))?cljs.core.apply.call(null,cljs.core.hash_map,map__28483):map__28483);var filter_spec = map__28483__$1;var component_descrs = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28483__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__28484,component_filter_rq_chan){var map__28489 = p__28484;var map__28489__$1 = ((cljs.core.seq_QMARK_.call(null,map__28489))?cljs.core.apply.call(null,cljs.core.hash_map,map__28489):map__28489);var component_spec = map__28489__$1;var type = cljs.core.get.call(null,map__28489__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__28490 = cljs.core._EQ_;var expr__28491 = type;if(cljs.core.truth_(pred__28490.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__28491)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28490.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__28491)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28490.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__28491)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28490.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__28491)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28490.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__28491)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28491))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__28493,component_filter_rq_chan){var map__28495 = p__28493;var map__28495__$1 = ((cljs.core.seq_QMARK_.call(null,map__28495))?cljs.core.apply.call(null,cljs.core.hash_map,map__28495):map__28495);var component_spec = map__28495__$1;var skip_label = cljs.core.get.call(null,map__28495__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__28495__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__28495__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(filter_spec)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28497 = schema.core.Any;var input_schema28498 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28496","map28496",359624568,null))], null);var input_checker28499 = schema.core.checker.call(null,input_schema28498);var output_checker28500 = schema.core.checker.call(null,output_schema28497);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28497,input_schema28498,input_checker28499,output_checker28500){
return (function render_STAR_(G__28501){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28518 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28501], null);var temp__4126__auto___28519 = input_checker28499.call(null,args__6035__auto___28518);if(cljs.core.truth_(temp__4126__auto___28519))
{var error__6036__auto___28520 = temp__4126__auto___28519;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28520)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28520,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28518,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28498,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28496 = G__28501;while(true){
if(cljs.core.map_QMARK_.call(null,map28496))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28496)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28496,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map28496,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map28496,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28497,input_schema28498,input_checker28499,output_checker28500){
return (function iter__28510(s__28511){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28497,input_schema28498,input_checker28499,output_checker28500){
return (function (){var s__28511__$1 = s__28511;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28511__$1);if(temp__4126__auto__)
{var s__28511__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28511__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28511__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28513 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28512 = (0);while(true){
if((i__28512 < size__4376__auto__))
{var map__28516 = cljs.core._nth.call(null,c__4375__auto__,i__28512);var map__28516__$1 = ((cljs.core.seq_QMARK_.call(null,map__28516))?cljs.core.apply.call(null,cljs.core.hash_map,map__28516):map__28516);var component_spec = map__28516__$1;var id = cljs.core.get.call(null,map__28516__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__28513,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__28521 = (i__28512 + (1));
i__28512 = G__28521;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28513),iter__28510.call(null,cljs.core.chunk_rest.call(null,s__28511__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28513),null);
}
} else
{var map__28517 = cljs.core.first.call(null,s__28511__$2);var map__28517__$1 = ((cljs.core.seq_QMARK_.call(null,map__28517))?cljs.core.apply.call(null,cljs.core.hash_map,map__28517):map__28517);var component_spec = map__28517__$1;var id = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__28510.call(null,cljs.core.rest.call(null,s__28511__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28497,input_schema28498,input_checker28499,output_checker28500))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28497,input_schema28498,input_checker28499,output_checker28500))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28522 = output_checker28500.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28522))
{var error__6036__auto___28523 = temp__4126__auto___28522;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28523)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28523,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28497,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28497,input_schema28498,input_checker28499,output_checker28500))
,schema.core.make_fn_schema.call(null,output_schema28497,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28498], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___28860 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28530 = schema.core.Any;var input_schema28531 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28527","map28527",258866095,null))], null);var input_checker28532 = schema.core.checker.call(null,input_schema28531);var output_checker28533 = schema.core.checker.call(null,output_schema28530);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function constructor28525(G__28534){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28534], null);var temp__4126__auto___28862 = input_checker28532.call(null,args__6035__auto___28861);if(cljs.core.truth_(temp__4126__auto___28862))
{var error__6036__auto___28863 = temp__4126__auto___28862;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28525","constructor28525",-339138018,null),cljs.core.pr_str.call(null,error__6036__auto___28863)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28863,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28861,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28531,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28527 = G__28534;while(true){
if(cljs.core.map_QMARK_.call(null,map28527))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28527)));
}
var map28529 = plumbing.fnk.schema.safe_get.call(null,map28527,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28529,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map28528 = plumbing.fnk.schema.safe_get.call(null,map28527,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map28528,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map28528,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28527,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t28696 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t28696 = (function (map28528,owner,input_checker28532,output_schema28530,map28529,component_specs,filter_spec,map28527,input_schema28531,G__28534,history,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,constructor28525,output_checker28533,meta28697){
this.map28528 = map28528;
this.owner = owner;
this.input_checker28532 = input_checker28532;
this.output_schema28530 = output_schema28530;
this.map28529 = map28529;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.map28527 = map28527;
this.input_schema28531 = input_schema28531;
this.G__28534 = G__28534;
this.history = history;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.constructor28525 = constructor28525;
this.output_checker28533 = output_checker28533;
this.meta28697 = meta28697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t28696.cljs$lang$type = true;
clustermap.components.filter.t28696.cljs$lang$ctorStr = "clustermap.components.filter/t28696";
clustermap.components.filter.t28696.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t28696");
});})(owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
;
clustermap.components.filter.t28696.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t28696.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
;
clustermap.components.filter.t28696.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t28696.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function (_,p__28699,___$1){var self__ = this;
var map__28700 = p__28699;var map__28700__$1 = ((cljs.core.seq_QMARK_.call(null,map__28700))?cljs.core.apply.call(null,cljs.core.hash_map,map__28700):map__28700);var next_props = map__28700__$1;var map__28701 = cljs.core.get.call(null,map__28700__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28701__$1 = ((cljs.core.seq_QMARK_.call(null,map__28701))?cljs.core.apply.call(null,cljs.core.hash_map,map__28701):map__28701);var next_filter_spec = map__28701__$1;var map__28702 = cljs.core.get.call(null,map__28701__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__28702__$1 = ((cljs.core.seq_QMARK_.call(null,map__28702))?cljs.core.apply.call(null,cljs.core.hash_map,map__28702):map__28702);var next_url_components = map__28702__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
;
clustermap.components.filter.t28696.prototype.om$core$IRender$ = true;
clustermap.components.filter.t28696.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
;
clustermap.components.filter.t28696.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t28696.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__28703_28864 = cljs.core.seq.call(null,chs);var chunk__28704_28865 = null;var count__28705_28866 = (0);var i__28706_28867 = (0);while(true){
if((i__28706_28867 < count__28705_28866))
{var vec__28707_28868 = cljs.core._nth.call(null,chunk__28704_28865,i__28706_28867);var component_id_28869 = cljs.core.nth.call(null,vec__28707_28868,(0),null);var ch_28870 = cljs.core.nth.call(null,vec__28707_28868,(1),null);cljs.core.async.close_BANG_.call(null,ch_28870);
{
var G__28871 = seq__28703_28864;
var G__28872 = chunk__28704_28865;
var G__28873 = count__28705_28866;
var G__28874 = (i__28706_28867 + (1));
seq__28703_28864 = G__28871;
chunk__28704_28865 = G__28872;
count__28705_28866 = G__28873;
i__28706_28867 = G__28874;
continue;
}
} else
{var temp__4126__auto___28875 = cljs.core.seq.call(null,seq__28703_28864);if(temp__4126__auto___28875)
{var seq__28703_28876__$1 = temp__4126__auto___28875;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28703_28876__$1))
{var c__4408__auto___28877 = cljs.core.chunk_first.call(null,seq__28703_28876__$1);{
var G__28878 = cljs.core.chunk_rest.call(null,seq__28703_28876__$1);
var G__28879 = c__4408__auto___28877;
var G__28880 = cljs.core.count.call(null,c__4408__auto___28877);
var G__28881 = (0);
seq__28703_28864 = G__28878;
chunk__28704_28865 = G__28879;
count__28705_28866 = G__28880;
i__28706_28867 = G__28881;
continue;
}
} else
{var vec__28708_28882 = cljs.core.first.call(null,seq__28703_28876__$1);var component_id_28883 = cljs.core.nth.call(null,vec__28708_28882,(0),null);var ch_28884 = cljs.core.nth.call(null,vec__28708_28882,(1),null);cljs.core.async.close_BANG_.call(null,ch_28884);
{
var G__28885 = cljs.core.next.call(null,seq__28703_28876__$1);
var G__28886 = null;
var G__28887 = (0);
var G__28888 = (0);
seq__28703_28864 = G__28885;
chunk__28704_28865 = G__28886;
count__28705_28866 = G__28887;
i__28706_28867 = G__28888;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
;
clustermap.components.filter.t28696.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t28696.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function (state_28804){var state_val_28805 = (state_28804[(1)]);if((state_val_28805 === (7)))
{var inst_28795 = (state_28804[(2)]);var state_28804__$1 = state_28804;if(cljs.core.truth_(inst_28795))
{var statearr_28806_28889 = state_28804__$1;(statearr_28806_28889[(1)] = (25));
} else
{var statearr_28807_28890 = state_28804__$1;(statearr_28807_28890[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (20)))
{var inst_28765 = (state_28804[(7)]);var inst_28721 = (state_28804[(8)]);var inst_28715 = (state_28804[(9)]);var inst_28714 = (state_28804[(10)]);var inst_28756 = (state_28804[(11)]);var inst_28772 = (state_28804[(12)]);var inst_28765__$1 = cljs.core.first.call(null,inst_28756);var inst_28766 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28767 = cljs.core.get.call(null,inst_28715,inst_28765__$1);var inst_28768 = ["FILTER",inst_28714,inst_28765__$1,inst_28767];var inst_28769 = (new cljs.core.PersistentVector(null,4,(5),inst_28766,inst_28768,null));var inst_28770 = cljs.core.clj__GT_js.call(null,inst_28769);var inst_28771 = console.log(inst_28770);var inst_28772__$1 = cljs.core.get.call(null,inst_28721,inst_28765__$1);var state_28804__$1 = (function (){var statearr_28808 = state_28804;(statearr_28808[(7)] = inst_28765__$1);
(statearr_28808[(13)] = inst_28771);
(statearr_28808[(12)] = inst_28772__$1);
return statearr_28808;
})();if(cljs.core.truth_(inst_28772__$1))
{var statearr_28809_28891 = state_28804__$1;(statearr_28809_28891[(1)] = (22));
} else
{var statearr_28810_28892 = state_28804__$1;(statearr_28810_28892[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (27)))
{var inst_28800 = (state_28804[(2)]);var state_28804__$1 = state_28804;var statearr_28811_28893 = state_28804__$1;(statearr_28811_28893[(2)] = inst_28800);
(statearr_28811_28893[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (1)))
{var state_28804__$1 = state_28804;var statearr_28812_28894 = state_28804__$1;(statearr_28812_28894[(2)] = null);
(statearr_28812_28894[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (24)))
{var inst_28756 = (state_28804[(11)]);var inst_28781 = (state_28804[(2)]);var inst_28782 = cljs.core.next.call(null,inst_28756);var inst_28728 = inst_28782;var inst_28729 = null;var inst_28730 = (0);var inst_28731 = (0);var state_28804__$1 = (function (){var statearr_28816 = state_28804;(statearr_28816[(14)] = inst_28729);
(statearr_28816[(15)] = inst_28731);
(statearr_28816[(16)] = inst_28728);
(statearr_28816[(17)] = inst_28730);
(statearr_28816[(18)] = inst_28781);
return statearr_28816;
})();var statearr_28817_28895 = state_28804__$1;(statearr_28817_28895[(2)] = null);
(statearr_28817_28895[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (4)))
{var inst_28711 = (state_28804[(19)]);var inst_28711__$1 = (state_28804[(2)]);var state_28804__$1 = (function (){var statearr_28818 = state_28804;(statearr_28818[(19)] = inst_28711__$1);
return statearr_28818;
})();if(cljs.core.truth_(inst_28711__$1))
{var statearr_28819_28896 = state_28804__$1;(statearr_28819_28896[(1)] = (5));
} else
{var statearr_28820_28897 = state_28804__$1;(statearr_28820_28897[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (15)))
{var inst_28729 = (state_28804[(14)]);var inst_28731 = (state_28804[(15)]);var inst_28728 = (state_28804[(16)]);var inst_28730 = (state_28804[(17)]);var inst_28752 = (state_28804[(2)]);var inst_28753 = (inst_28731 + (1));var tmp28813 = inst_28729;var tmp28814 = inst_28728;var tmp28815 = inst_28730;var inst_28728__$1 = tmp28814;var inst_28729__$1 = tmp28813;var inst_28730__$1 = tmp28815;var inst_28731__$1 = inst_28753;var state_28804__$1 = (function (){var statearr_28821 = state_28804;(statearr_28821[(14)] = inst_28729__$1);
(statearr_28821[(15)] = inst_28731__$1);
(statearr_28821[(16)] = inst_28728__$1);
(statearr_28821[(17)] = inst_28730__$1);
(statearr_28821[(20)] = inst_28752);
return statearr_28821;
})();var statearr_28822_28898 = state_28804__$1;(statearr_28822_28898[(2)] = null);
(statearr_28822_28898[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (21)))
{var inst_28785 = (state_28804[(2)]);var state_28804__$1 = state_28804;var statearr_28823_28899 = state_28804__$1;(statearr_28823_28899[(2)] = inst_28785);
(statearr_28823_28899[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (13)))
{var inst_28715 = (state_28804[(9)]);var inst_28736 = (state_28804[(21)]);var inst_28743 = (state_28804[(22)]);var inst_28745 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28746 = cljs.core.get.call(null,inst_28715,inst_28736);var inst_28747 = [inst_28736,inst_28746];var inst_28748 = (new cljs.core.PersistentVector(null,2,(5),inst_28745,inst_28747,null));var inst_28749 = cljs.core.async.put_BANG_.call(null,inst_28743,inst_28748);var state_28804__$1 = state_28804;var statearr_28824_28900 = state_28804__$1;(statearr_28824_28900[(2)] = inst_28749);
(statearr_28824_28900[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (22)))
{var inst_28765 = (state_28804[(7)]);var inst_28715 = (state_28804[(9)]);var inst_28772 = (state_28804[(12)]);var inst_28774 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28775 = cljs.core.get.call(null,inst_28715,inst_28765);var inst_28776 = [inst_28765,inst_28775];var inst_28777 = (new cljs.core.PersistentVector(null,2,(5),inst_28774,inst_28776,null));var inst_28778 = cljs.core.async.put_BANG_.call(null,inst_28772,inst_28777);var state_28804__$1 = state_28804;var statearr_28825_28901 = state_28804__$1;(statearr_28825_28901[(2)] = inst_28778);
(statearr_28825_28901[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (6)))
{var state_28804__$1 = state_28804;var statearr_28826_28902 = state_28804__$1;(statearr_28826_28902[(2)] = null);
(statearr_28826_28902[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (25)))
{var state_28804__$1 = state_28804;var statearr_28827_28903 = state_28804__$1;(statearr_28827_28903[(2)] = null);
(statearr_28827_28903[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (17)))
{var state_28804__$1 = state_28804;var statearr_28828_28904 = state_28804__$1;(statearr_28828_28904[(2)] = null);
(statearr_28828_28904[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (3)))
{var inst_28802 = (state_28804[(2)]);var state_28804__$1 = state_28804;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28804__$1,inst_28802);
} else
{if((state_val_28805 === (12)))
{var inst_28790 = (state_28804[(2)]);var state_28804__$1 = state_28804;var statearr_28829_28905 = state_28804__$1;(statearr_28829_28905[(2)] = inst_28790);
(statearr_28829_28905[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (2)))
{var state_28804__$1 = state_28804;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28804__$1,(4),filter_rq_sub);
} else
{if((state_val_28805 === (23)))
{var state_28804__$1 = state_28804;var statearr_28830_28906 = state_28804__$1;(statearr_28830_28906[(2)] = null);
(statearr_28830_28906[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (19)))
{var inst_28756 = (state_28804[(11)]);var inst_28760 = cljs.core.chunk_first.call(null,inst_28756);var inst_28761 = cljs.core.chunk_rest.call(null,inst_28756);var inst_28762 = cljs.core.count.call(null,inst_28760);var inst_28728 = inst_28761;var inst_28729 = inst_28760;var inst_28730 = inst_28762;var inst_28731 = (0);var state_28804__$1 = (function (){var statearr_28831 = state_28804;(statearr_28831[(14)] = inst_28729);
(statearr_28831[(15)] = inst_28731);
(statearr_28831[(16)] = inst_28728);
(statearr_28831[(17)] = inst_28730);
return statearr_28831;
})();var statearr_28832_28907 = state_28804__$1;(statearr_28832_28907[(2)] = null);
(statearr_28832_28907[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (11)))
{var inst_28756 = (state_28804[(11)]);var inst_28728 = (state_28804[(16)]);var inst_28756__$1 = cljs.core.seq.call(null,inst_28728);var state_28804__$1 = (function (){var statearr_28833 = state_28804;(statearr_28833[(11)] = inst_28756__$1);
return statearr_28833;
})();if(inst_28756__$1)
{var statearr_28834_28908 = state_28804__$1;(statearr_28834_28908[(1)] = (16));
} else
{var statearr_28835_28909 = state_28804__$1;(statearr_28835_28909[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (9)))
{var inst_28792 = (state_28804[(2)]);var state_28804__$1 = (function (){var statearr_28836 = state_28804;(statearr_28836[(23)] = inst_28792);
return statearr_28836;
})();var statearr_28837_28910 = state_28804__$1;(statearr_28837_28910[(2)] = true);
(statearr_28837_28910[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (5)))
{var inst_28715 = (state_28804[(9)]);var inst_28714 = (state_28804[(10)]);var inst_28711 = (state_28804[(19)]);var inst_28714__$1 = cljs.core.nth.call(null,inst_28711,(0),null);var inst_28715__$1 = cljs.core.nth.call(null,inst_28711,(1),null);var inst_28716 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28717 = ["FILTER-RQ",inst_28714__$1,inst_28715__$1];var inst_28718 = (new cljs.core.PersistentVector(null,3,(5),inst_28716,inst_28717,null));var inst_28719 = cljs.core.clj__GT_js.call(null,inst_28718);var inst_28720 = console.log(inst_28719);var inst_28721 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_28722 = cljs.core.keys.call(null,inst_28715__$1);var inst_28727 = cljs.core.seq.call(null,inst_28722);var inst_28728 = inst_28727;var inst_28729 = null;var inst_28730 = (0);var inst_28731 = (0);var state_28804__$1 = (function (){var statearr_28838 = state_28804;(statearr_28838[(8)] = inst_28721);
(statearr_28838[(14)] = inst_28729);
(statearr_28838[(9)] = inst_28715__$1);
(statearr_28838[(24)] = inst_28720);
(statearr_28838[(10)] = inst_28714__$1);
(statearr_28838[(15)] = inst_28731);
(statearr_28838[(16)] = inst_28728);
(statearr_28838[(17)] = inst_28730);
return statearr_28838;
})();var statearr_28839_28911 = state_28804__$1;(statearr_28839_28911[(2)] = null);
(statearr_28839_28911[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (14)))
{var state_28804__$1 = state_28804;var statearr_28840_28912 = state_28804__$1;(statearr_28840_28912[(2)] = null);
(statearr_28840_28912[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (26)))
{var state_28804__$1 = state_28804;var statearr_28841_28913 = state_28804__$1;(statearr_28841_28913[(2)] = null);
(statearr_28841_28913[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (16)))
{var inst_28756 = (state_28804[(11)]);var inst_28758 = cljs.core.chunked_seq_QMARK_.call(null,inst_28756);var state_28804__$1 = state_28804;if(inst_28758)
{var statearr_28842_28914 = state_28804__$1;(statearr_28842_28914[(1)] = (19));
} else
{var statearr_28843_28915 = state_28804__$1;(statearr_28843_28915[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (10)))
{var inst_28721 = (state_28804[(8)]);var inst_28729 = (state_28804[(14)]);var inst_28715 = (state_28804[(9)]);var inst_28714 = (state_28804[(10)]);var inst_28731 = (state_28804[(15)]);var inst_28736 = (state_28804[(21)]);var inst_28743 = (state_28804[(22)]);var inst_28736__$1 = cljs.core._nth.call(null,inst_28729,inst_28731);var inst_28737 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28738 = cljs.core.get.call(null,inst_28715,inst_28736__$1);var inst_28739 = ["FILTER",inst_28714,inst_28736__$1,inst_28738];var inst_28740 = (new cljs.core.PersistentVector(null,4,(5),inst_28737,inst_28739,null));var inst_28741 = cljs.core.clj__GT_js.call(null,inst_28740);var inst_28742 = console.log(inst_28741);var inst_28743__$1 = cljs.core.get.call(null,inst_28721,inst_28736__$1);var state_28804__$1 = (function (){var statearr_28844 = state_28804;(statearr_28844[(25)] = inst_28742);
(statearr_28844[(21)] = inst_28736__$1);
(statearr_28844[(22)] = inst_28743__$1);
return statearr_28844;
})();if(cljs.core.truth_(inst_28743__$1))
{var statearr_28845_28916 = state_28804__$1;(statearr_28845_28916[(1)] = (13));
} else
{var statearr_28846_28917 = state_28804__$1;(statearr_28846_28917[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (18)))
{var inst_28788 = (state_28804[(2)]);var state_28804__$1 = state_28804;var statearr_28847_28918 = state_28804__$1;(statearr_28847_28918[(2)] = inst_28788);
(statearr_28847_28918[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28805 === (8)))
{var inst_28731 = (state_28804[(15)]);var inst_28730 = (state_28804[(17)]);var inst_28733 = (inst_28731 < inst_28730);var inst_28734 = inst_28733;var state_28804__$1 = state_28804;if(cljs.core.truth_(inst_28734))
{var statearr_28848_28919 = state_28804__$1;(statearr_28848_28919[(1)] = (10));
} else
{var statearr_28849_28920 = state_28804__$1;(statearr_28849_28920[(1)] = (11));
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
});})(c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
;return ((function (switch__11461__auto__,c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28853[(0)] = state_machine__11462__auto__);
(statearr_28853[(1)] = (1));
return statearr_28853;
});
var state_machine__11462__auto____1 = (function (state_28804){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_28804);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28854){if((e28854 instanceof Object))
{var ex__11465__auto__ = e28854;var statearr_28855_28921 = state_28804;(statearr_28855_28921[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28804);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28854;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28922 = state_28804;
state_28804 = G__28922;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_28804){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_28804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
})();var state__11519__auto__ = (function (){var statearr_28856 = f__11518__auto__.call(null);(statearr_28856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_28856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
);
return c__11517__auto__;
});})(owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
;
clustermap.components.filter.t28696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function (_28698){var self__ = this;
var _28698__$1 = this;return self__.meta28697;
});})(owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
;
clustermap.components.filter.t28696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function (_28698,meta28697__$1){var self__ = this;
var _28698__$1 = this;return (new clustermap.components.filter.t28696(self__.map28528,self__.owner,self__.input_checker28532,self__.output_schema28530,self__.map28529,self__.component_specs,self__.filter_spec,self__.map28527,self__.input_schema28531,self__.G__28534,self__.history,self__.components,self__.validate__6034__auto__,self__.id,self__.filter_rq_pub,self__.ufv__,self__.url_components,self__.constructor28525,self__.output_checker28533,meta28697__$1));
});})(owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
;
clustermap.components.filter.__GT_t28696 = ((function (owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533){
return (function __GT_t28696(map28528__$1,owner__$1,input_checker28532__$1,output_schema28530__$1,map28529__$1,component_specs__$1,filter_spec__$1,map28527__$1,input_schema28531__$1,G__28534__$1,history__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,constructor28525__$1,output_checker28533__$1,meta28697){return (new clustermap.components.filter.t28696(map28528__$1,owner__$1,input_checker28532__$1,output_schema28530__$1,map28529__$1,component_specs__$1,filter_spec__$1,map28527__$1,input_schema28531__$1,G__28534__$1,history__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,constructor28525__$1,output_checker28533__$1,meta28697));
});})(owner,history,filter_rq_pub,map28528,url_components,components,component_specs,id,filter_spec,map28529,validate__6034__auto__,ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
;
}
return (new clustermap.components.filter.t28696(map28528,owner,input_checker28532,output_schema28530,map28529,component_specs,filter_spec,map28527,input_schema28531,G__28534,history,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,constructor28525,output_checker28533,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28923 = output_checker28533.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28923))
{var error__6036__auto___28924 = temp__4126__auto___28923;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28525","constructor28525",-339138018,null),cljs.core.pr_str.call(null,error__6036__auto___28924)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28924,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28530,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28530,input_schema28531,input_checker28532,output_checker28533))
,schema.core.make_fn_schema.call(null,output_schema28530,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28531], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___28860){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner28524,p__28857){var vec__28859 = p__28857;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28859,(0),null);return component_fnk__7881__auto___28860.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28524),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28524,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner28524,var_args){
var p__28857 = null;if (arguments.length > 2) {
  p__28857 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner28524,p__28857);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__28925){
var data__7882__auto__ = cljs.core.first(arglist__28925);
arglist__28925 = cljs.core.next(arglist__28925);
var owner28524 = cljs.core.first(arglist__28925);
var p__28857 = cljs.core.rest(arglist__28925);
return filter_component__delegate(data__7882__auto__,owner28524,p__28857);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___28860))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m28526){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m28526);
});
__GT_filter_component = function(cursor__7850__auto__,m28526){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m28526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
