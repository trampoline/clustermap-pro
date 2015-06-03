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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__28479){var map__28481 = p__28479;var map__28481__$1 = ((cljs.core.seq_QMARK_.call(null,map__28481))?cljs.core.apply.call(null,cljs.core.hash_map,map__28481):map__28481);var filter_spec = map__28481__$1;var component_descrs = cljs.core.get.call(null,map__28481__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28481__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28481__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__28482){var map__28484 = p__28482;var map__28484__$1 = ((cljs.core.seq_QMARK_.call(null,map__28484))?cljs.core.apply.call(null,cljs.core.hash_map,map__28484):map__28484);var filter_spec = map__28484__$1;var component_descrs = cljs.core.get.call(null,map__28484__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28484__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28484__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__28485,component_filter_rq_chan){var map__28490 = p__28485;var map__28490__$1 = ((cljs.core.seq_QMARK_.call(null,map__28490))?cljs.core.apply.call(null,cljs.core.hash_map,map__28490):map__28490);var component_spec = map__28490__$1;var type = cljs.core.get.call(null,map__28490__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__28491 = cljs.core._EQ_;var expr__28492 = type;if(cljs.core.truth_(pred__28491.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__28492)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28491.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__28492)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28491.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__28492)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28491.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__28492)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28491.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__28492)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28492))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__28494,component_filter_rq_chan){var map__28496 = p__28494;var map__28496__$1 = ((cljs.core.seq_QMARK_.call(null,map__28496))?cljs.core.apply.call(null,cljs.core.hash_map,map__28496):map__28496);var component_spec = map__28496__$1;var skip_label = cljs.core.get.call(null,map__28496__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__28496__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__28496__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(filter_spec)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28498 = schema.core.Any;var input_schema28499 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28497","map28497",2035402039,null))], null);var input_checker28500 = schema.core.checker.call(null,input_schema28499);var output_checker28501 = schema.core.checker.call(null,output_schema28498);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28498,input_schema28499,input_checker28500,output_checker28501){
return (function render_STAR_(G__28502){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28519 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28502], null);var temp__4126__auto___28520 = input_checker28500.call(null,args__6035__auto___28519);if(cljs.core.truth_(temp__4126__auto___28520))
{var error__6036__auto___28521 = temp__4126__auto___28520;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28521)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28521,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28519,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28499,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28497 = G__28502;while(true){
if(cljs.core.map_QMARK_.call(null,map28497))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28497)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28497,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map28497,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map28497,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28498,input_schema28499,input_checker28500,output_checker28501){
return (function iter__28511(s__28512){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28498,input_schema28499,input_checker28500,output_checker28501){
return (function (){var s__28512__$1 = s__28512;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28512__$1);if(temp__4126__auto__)
{var s__28512__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28512__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28512__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28514 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28513 = (0);while(true){
if((i__28513 < size__4376__auto__))
{var map__28517 = cljs.core._nth.call(null,c__4375__auto__,i__28513);var map__28517__$1 = ((cljs.core.seq_QMARK_.call(null,map__28517))?cljs.core.apply.call(null,cljs.core.hash_map,map__28517):map__28517);var component_spec = map__28517__$1;var id = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__28514,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__28522 = (i__28513 + (1));
i__28513 = G__28522;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28514),iter__28511.call(null,cljs.core.chunk_rest.call(null,s__28512__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28514),null);
}
} else
{var map__28518 = cljs.core.first.call(null,s__28512__$2);var map__28518__$1 = ((cljs.core.seq_QMARK_.call(null,map__28518))?cljs.core.apply.call(null,cljs.core.hash_map,map__28518):map__28518);var component_spec = map__28518__$1;var id = cljs.core.get.call(null,map__28518__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__28511.call(null,cljs.core.rest.call(null,s__28512__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28498,input_schema28499,input_checker28500,output_checker28501))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28498,input_schema28499,input_checker28500,output_checker28501))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28523 = output_checker28501.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28523))
{var error__6036__auto___28524 = temp__4126__auto___28523;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28524)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28524,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28498,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28498,input_schema28499,input_checker28500,output_checker28501))
,schema.core.make_fn_schema.call(null,output_schema28498,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28499], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___28861 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28531 = schema.core.Any;var input_schema28532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28528","map28528",696868419,null))], null);var input_checker28533 = schema.core.checker.call(null,input_schema28532);var output_checker28534 = schema.core.checker.call(null,output_schema28531);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function constructor28526(G__28535){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28862 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28535], null);var temp__4126__auto___28863 = input_checker28533.call(null,args__6035__auto___28862);if(cljs.core.truth_(temp__4126__auto___28863))
{var error__6036__auto___28864 = temp__4126__auto___28863;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28526","constructor28526",1366176412,null),cljs.core.pr_str.call(null,error__6036__auto___28864)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28864,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28862,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28532,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28528 = G__28535;while(true){
if(cljs.core.map_QMARK_.call(null,map28528))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28528)));
}
var map28530 = plumbing.fnk.schema.safe_get.call(null,map28528,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28530,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map28529 = plumbing.fnk.schema.safe_get.call(null,map28528,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map28529,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map28529,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28528,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t28697 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t28697 = (function (map28528,owner,input_schema28532,map28529,component_specs,filter_spec,output_checker28534,history,input_checker28533,map28530,components,validate__6034__auto__,id,G__28535,constructor28526,filter_rq_pub,ufv__,url_components,output_schema28531,meta28698){
this.map28528 = map28528;
this.owner = owner;
this.input_schema28532 = input_schema28532;
this.map28529 = map28529;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.output_checker28534 = output_checker28534;
this.history = history;
this.input_checker28533 = input_checker28533;
this.map28530 = map28530;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.G__28535 = G__28535;
this.constructor28526 = constructor28526;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.output_schema28531 = output_schema28531;
this.meta28698 = meta28698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t28697.cljs$lang$type = true;
clustermap.components.filter.t28697.cljs$lang$ctorStr = "clustermap.components.filter/t28697";
clustermap.components.filter.t28697.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t28697");
});})(owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
;
clustermap.components.filter.t28697.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t28697.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
;
clustermap.components.filter.t28697.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t28697.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function (_,p__28700,___$1){var self__ = this;
var map__28701 = p__28700;var map__28701__$1 = ((cljs.core.seq_QMARK_.call(null,map__28701))?cljs.core.apply.call(null,cljs.core.hash_map,map__28701):map__28701);var next_props = map__28701__$1;var map__28702 = cljs.core.get.call(null,map__28701__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28702__$1 = ((cljs.core.seq_QMARK_.call(null,map__28702))?cljs.core.apply.call(null,cljs.core.hash_map,map__28702):map__28702);var next_filter_spec = map__28702__$1;var map__28703 = cljs.core.get.call(null,map__28702__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__28703__$1 = ((cljs.core.seq_QMARK_.call(null,map__28703))?cljs.core.apply.call(null,cljs.core.hash_map,map__28703):map__28703);var next_url_components = map__28703__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
;
clustermap.components.filter.t28697.prototype.om$core$IRender$ = true;
clustermap.components.filter.t28697.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
;
clustermap.components.filter.t28697.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t28697.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__28704_28865 = cljs.core.seq.call(null,chs);var chunk__28705_28866 = null;var count__28706_28867 = (0);var i__28707_28868 = (0);while(true){
if((i__28707_28868 < count__28706_28867))
{var vec__28708_28869 = cljs.core._nth.call(null,chunk__28705_28866,i__28707_28868);var component_id_28870 = cljs.core.nth.call(null,vec__28708_28869,(0),null);var ch_28871 = cljs.core.nth.call(null,vec__28708_28869,(1),null);cljs.core.async.close_BANG_.call(null,ch_28871);
{
var G__28872 = seq__28704_28865;
var G__28873 = chunk__28705_28866;
var G__28874 = count__28706_28867;
var G__28875 = (i__28707_28868 + (1));
seq__28704_28865 = G__28872;
chunk__28705_28866 = G__28873;
count__28706_28867 = G__28874;
i__28707_28868 = G__28875;
continue;
}
} else
{var temp__4126__auto___28876 = cljs.core.seq.call(null,seq__28704_28865);if(temp__4126__auto___28876)
{var seq__28704_28877__$1 = temp__4126__auto___28876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28704_28877__$1))
{var c__4408__auto___28878 = cljs.core.chunk_first.call(null,seq__28704_28877__$1);{
var G__28879 = cljs.core.chunk_rest.call(null,seq__28704_28877__$1);
var G__28880 = c__4408__auto___28878;
var G__28881 = cljs.core.count.call(null,c__4408__auto___28878);
var G__28882 = (0);
seq__28704_28865 = G__28879;
chunk__28705_28866 = G__28880;
count__28706_28867 = G__28881;
i__28707_28868 = G__28882;
continue;
}
} else
{var vec__28709_28883 = cljs.core.first.call(null,seq__28704_28877__$1);var component_id_28884 = cljs.core.nth.call(null,vec__28709_28883,(0),null);var ch_28885 = cljs.core.nth.call(null,vec__28709_28883,(1),null);cljs.core.async.close_BANG_.call(null,ch_28885);
{
var G__28886 = cljs.core.next.call(null,seq__28704_28877__$1);
var G__28887 = null;
var G__28888 = (0);
var G__28889 = (0);
seq__28704_28865 = G__28886;
chunk__28705_28866 = G__28887;
count__28706_28867 = G__28888;
i__28707_28868 = G__28889;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
;
clustermap.components.filter.t28697.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t28697.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function (state_28805){var state_val_28806 = (state_28805[(1)]);if((state_val_28806 === (7)))
{var inst_28796 = (state_28805[(2)]);var state_28805__$1 = state_28805;if(cljs.core.truth_(inst_28796))
{var statearr_28807_28890 = state_28805__$1;(statearr_28807_28890[(1)] = (25));
} else
{var statearr_28808_28891 = state_28805__$1;(statearr_28808_28891[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (20)))
{var inst_28773 = (state_28805[(7)]);var inst_28757 = (state_28805[(8)]);var inst_28715 = (state_28805[(9)]);var inst_28722 = (state_28805[(10)]);var inst_28766 = (state_28805[(11)]);var inst_28716 = (state_28805[(12)]);var inst_28766__$1 = cljs.core.first.call(null,inst_28757);var inst_28767 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28768 = cljs.core.get.call(null,inst_28716,inst_28766__$1);var inst_28769 = ["FILTER",inst_28715,inst_28766__$1,inst_28768];var inst_28770 = (new cljs.core.PersistentVector(null,4,(5),inst_28767,inst_28769,null));var inst_28771 = cljs.core.clj__GT_js.call(null,inst_28770);var inst_28772 = console.log(inst_28771);var inst_28773__$1 = cljs.core.get.call(null,inst_28722,inst_28766__$1);var state_28805__$1 = (function (){var statearr_28809 = state_28805;(statearr_28809[(7)] = inst_28773__$1);
(statearr_28809[(13)] = inst_28772);
(statearr_28809[(11)] = inst_28766__$1);
return statearr_28809;
})();if(cljs.core.truth_(inst_28773__$1))
{var statearr_28810_28892 = state_28805__$1;(statearr_28810_28892[(1)] = (22));
} else
{var statearr_28811_28893 = state_28805__$1;(statearr_28811_28893[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (27)))
{var inst_28801 = (state_28805[(2)]);var state_28805__$1 = state_28805;var statearr_28812_28894 = state_28805__$1;(statearr_28812_28894[(2)] = inst_28801);
(statearr_28812_28894[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (1)))
{var state_28805__$1 = state_28805;var statearr_28813_28895 = state_28805__$1;(statearr_28813_28895[(2)] = null);
(statearr_28813_28895[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (24)))
{var inst_28757 = (state_28805[(8)]);var inst_28782 = (state_28805[(2)]);var inst_28783 = cljs.core.next.call(null,inst_28757);var inst_28729 = inst_28783;var inst_28730 = null;var inst_28731 = (0);var inst_28732 = (0);var state_28805__$1 = (function (){var statearr_28817 = state_28805;(statearr_28817[(14)] = inst_28729);
(statearr_28817[(15)] = inst_28782);
(statearr_28817[(16)] = inst_28731);
(statearr_28817[(17)] = inst_28732);
(statearr_28817[(18)] = inst_28730);
return statearr_28817;
})();var statearr_28818_28896 = state_28805__$1;(statearr_28818_28896[(2)] = null);
(statearr_28818_28896[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (4)))
{var inst_28712 = (state_28805[(19)]);var inst_28712__$1 = (state_28805[(2)]);var state_28805__$1 = (function (){var statearr_28819 = state_28805;(statearr_28819[(19)] = inst_28712__$1);
return statearr_28819;
})();if(cljs.core.truth_(inst_28712__$1))
{var statearr_28820_28897 = state_28805__$1;(statearr_28820_28897[(1)] = (5));
} else
{var statearr_28821_28898 = state_28805__$1;(statearr_28821_28898[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (15)))
{var inst_28729 = (state_28805[(14)]);var inst_28731 = (state_28805[(16)]);var inst_28732 = (state_28805[(17)]);var inst_28730 = (state_28805[(18)]);var inst_28753 = (state_28805[(2)]);var inst_28754 = (inst_28732 + (1));var tmp28814 = inst_28729;var tmp28815 = inst_28731;var tmp28816 = inst_28730;var inst_28729__$1 = tmp28814;var inst_28730__$1 = tmp28816;var inst_28731__$1 = tmp28815;var inst_28732__$1 = inst_28754;var state_28805__$1 = (function (){var statearr_28822 = state_28805;(statearr_28822[(14)] = inst_28729__$1);
(statearr_28822[(16)] = inst_28731__$1);
(statearr_28822[(17)] = inst_28732__$1);
(statearr_28822[(20)] = inst_28753);
(statearr_28822[(18)] = inst_28730__$1);
return statearr_28822;
})();var statearr_28823_28899 = state_28805__$1;(statearr_28823_28899[(2)] = null);
(statearr_28823_28899[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (21)))
{var inst_28786 = (state_28805[(2)]);var state_28805__$1 = state_28805;var statearr_28824_28900 = state_28805__$1;(statearr_28824_28900[(2)] = inst_28786);
(statearr_28824_28900[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (13)))
{var inst_28737 = (state_28805[(21)]);var inst_28744 = (state_28805[(22)]);var inst_28716 = (state_28805[(12)]);var inst_28746 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28747 = cljs.core.get.call(null,inst_28716,inst_28737);var inst_28748 = [inst_28737,inst_28747];var inst_28749 = (new cljs.core.PersistentVector(null,2,(5),inst_28746,inst_28748,null));var inst_28750 = cljs.core.async.put_BANG_.call(null,inst_28744,inst_28749);var state_28805__$1 = state_28805;var statearr_28825_28901 = state_28805__$1;(statearr_28825_28901[(2)] = inst_28750);
(statearr_28825_28901[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (22)))
{var inst_28773 = (state_28805[(7)]);var inst_28766 = (state_28805[(11)]);var inst_28716 = (state_28805[(12)]);var inst_28775 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28776 = cljs.core.get.call(null,inst_28716,inst_28766);var inst_28777 = [inst_28766,inst_28776];var inst_28778 = (new cljs.core.PersistentVector(null,2,(5),inst_28775,inst_28777,null));var inst_28779 = cljs.core.async.put_BANG_.call(null,inst_28773,inst_28778);var state_28805__$1 = state_28805;var statearr_28826_28902 = state_28805__$1;(statearr_28826_28902[(2)] = inst_28779);
(statearr_28826_28902[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (6)))
{var state_28805__$1 = state_28805;var statearr_28827_28903 = state_28805__$1;(statearr_28827_28903[(2)] = null);
(statearr_28827_28903[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (25)))
{var state_28805__$1 = state_28805;var statearr_28828_28904 = state_28805__$1;(statearr_28828_28904[(2)] = null);
(statearr_28828_28904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (17)))
{var state_28805__$1 = state_28805;var statearr_28829_28905 = state_28805__$1;(statearr_28829_28905[(2)] = null);
(statearr_28829_28905[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (3)))
{var inst_28803 = (state_28805[(2)]);var state_28805__$1 = state_28805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28805__$1,inst_28803);
} else
{if((state_val_28806 === (12)))
{var inst_28791 = (state_28805[(2)]);var state_28805__$1 = state_28805;var statearr_28830_28906 = state_28805__$1;(statearr_28830_28906[(2)] = inst_28791);
(statearr_28830_28906[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (2)))
{var state_28805__$1 = state_28805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28805__$1,(4),filter_rq_sub);
} else
{if((state_val_28806 === (23)))
{var state_28805__$1 = state_28805;var statearr_28831_28907 = state_28805__$1;(statearr_28831_28907[(2)] = null);
(statearr_28831_28907[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (19)))
{var inst_28757 = (state_28805[(8)]);var inst_28761 = cljs.core.chunk_first.call(null,inst_28757);var inst_28762 = cljs.core.chunk_rest.call(null,inst_28757);var inst_28763 = cljs.core.count.call(null,inst_28761);var inst_28729 = inst_28762;var inst_28730 = inst_28761;var inst_28731 = inst_28763;var inst_28732 = (0);var state_28805__$1 = (function (){var statearr_28832 = state_28805;(statearr_28832[(14)] = inst_28729);
(statearr_28832[(16)] = inst_28731);
(statearr_28832[(17)] = inst_28732);
(statearr_28832[(18)] = inst_28730);
return statearr_28832;
})();var statearr_28833_28908 = state_28805__$1;(statearr_28833_28908[(2)] = null);
(statearr_28833_28908[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (11)))
{var inst_28729 = (state_28805[(14)]);var inst_28757 = (state_28805[(8)]);var inst_28757__$1 = cljs.core.seq.call(null,inst_28729);var state_28805__$1 = (function (){var statearr_28834 = state_28805;(statearr_28834[(8)] = inst_28757__$1);
return statearr_28834;
})();if(inst_28757__$1)
{var statearr_28835_28909 = state_28805__$1;(statearr_28835_28909[(1)] = (16));
} else
{var statearr_28836_28910 = state_28805__$1;(statearr_28836_28910[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (9)))
{var inst_28793 = (state_28805[(2)]);var state_28805__$1 = (function (){var statearr_28837 = state_28805;(statearr_28837[(23)] = inst_28793);
return statearr_28837;
})();var statearr_28838_28911 = state_28805__$1;(statearr_28838_28911[(2)] = true);
(statearr_28838_28911[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (5)))
{var inst_28715 = (state_28805[(9)]);var inst_28716 = (state_28805[(12)]);var inst_28712 = (state_28805[(19)]);var inst_28715__$1 = cljs.core.nth.call(null,inst_28712,(0),null);var inst_28716__$1 = cljs.core.nth.call(null,inst_28712,(1),null);var inst_28717 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28718 = ["FILTER-RQ",inst_28715__$1,inst_28716__$1];var inst_28719 = (new cljs.core.PersistentVector(null,3,(5),inst_28717,inst_28718,null));var inst_28720 = cljs.core.clj__GT_js.call(null,inst_28719);var inst_28721 = console.log(inst_28720);var inst_28722 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_28723 = cljs.core.keys.call(null,inst_28716__$1);var inst_28728 = cljs.core.seq.call(null,inst_28723);var inst_28729 = inst_28728;var inst_28730 = null;var inst_28731 = (0);var inst_28732 = (0);var state_28805__$1 = (function (){var statearr_28839 = state_28805;(statearr_28839[(24)] = inst_28721);
(statearr_28839[(14)] = inst_28729);
(statearr_28839[(9)] = inst_28715__$1);
(statearr_28839[(16)] = inst_28731);
(statearr_28839[(10)] = inst_28722);
(statearr_28839[(17)] = inst_28732);
(statearr_28839[(18)] = inst_28730);
(statearr_28839[(12)] = inst_28716__$1);
return statearr_28839;
})();var statearr_28840_28912 = state_28805__$1;(statearr_28840_28912[(2)] = null);
(statearr_28840_28912[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (14)))
{var state_28805__$1 = state_28805;var statearr_28841_28913 = state_28805__$1;(statearr_28841_28913[(2)] = null);
(statearr_28841_28913[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (26)))
{var state_28805__$1 = state_28805;var statearr_28842_28914 = state_28805__$1;(statearr_28842_28914[(2)] = null);
(statearr_28842_28914[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (16)))
{var inst_28757 = (state_28805[(8)]);var inst_28759 = cljs.core.chunked_seq_QMARK_.call(null,inst_28757);var state_28805__$1 = state_28805;if(inst_28759)
{var statearr_28843_28915 = state_28805__$1;(statearr_28843_28915[(1)] = (19));
} else
{var statearr_28844_28916 = state_28805__$1;(statearr_28844_28916[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (10)))
{var inst_28715 = (state_28805[(9)]);var inst_28722 = (state_28805[(10)]);var inst_28732 = (state_28805[(17)]);var inst_28737 = (state_28805[(21)]);var inst_28730 = (state_28805[(18)]);var inst_28744 = (state_28805[(22)]);var inst_28716 = (state_28805[(12)]);var inst_28737__$1 = cljs.core._nth.call(null,inst_28730,inst_28732);var inst_28738 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28739 = cljs.core.get.call(null,inst_28716,inst_28737__$1);var inst_28740 = ["FILTER",inst_28715,inst_28737__$1,inst_28739];var inst_28741 = (new cljs.core.PersistentVector(null,4,(5),inst_28738,inst_28740,null));var inst_28742 = cljs.core.clj__GT_js.call(null,inst_28741);var inst_28743 = console.log(inst_28742);var inst_28744__$1 = cljs.core.get.call(null,inst_28722,inst_28737__$1);var state_28805__$1 = (function (){var statearr_28845 = state_28805;(statearr_28845[(21)] = inst_28737__$1);
(statearr_28845[(25)] = inst_28743);
(statearr_28845[(22)] = inst_28744__$1);
return statearr_28845;
})();if(cljs.core.truth_(inst_28744__$1))
{var statearr_28846_28917 = state_28805__$1;(statearr_28846_28917[(1)] = (13));
} else
{var statearr_28847_28918 = state_28805__$1;(statearr_28847_28918[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (18)))
{var inst_28789 = (state_28805[(2)]);var state_28805__$1 = state_28805;var statearr_28848_28919 = state_28805__$1;(statearr_28848_28919[(2)] = inst_28789);
(statearr_28848_28919[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28806 === (8)))
{var inst_28731 = (state_28805[(16)]);var inst_28732 = (state_28805[(17)]);var inst_28734 = (inst_28732 < inst_28731);var inst_28735 = inst_28734;var state_28805__$1 = state_28805;if(cljs.core.truth_(inst_28735))
{var statearr_28849_28920 = state_28805__$1;(statearr_28849_28920[(1)] = (10));
} else
{var statearr_28850_28921 = state_28805__$1;(statearr_28850_28921[(1)] = (11));
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
});})(c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
;return ((function (switch__11461__auto__,c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28854 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28854[(0)] = state_machine__11462__auto__);
(statearr_28854[(1)] = (1));
return statearr_28854;
});
var state_machine__11462__auto____1 = (function (state_28805){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_28805);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28855){if((e28855 instanceof Object))
{var ex__11465__auto__ = e28855;var statearr_28856_28922 = state_28805;(statearr_28856_28922[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28805);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28855;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28923 = state_28805;
state_28805 = G__28923;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_28805){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_28805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
})();var state__11519__auto__ = (function (){var statearr_28857 = f__11518__auto__.call(null);(statearr_28857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_28857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
);
return c__11517__auto__;
});})(owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
;
clustermap.components.filter.t28697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function (_28699){var self__ = this;
var _28699__$1 = this;return self__.meta28698;
});})(owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
;
clustermap.components.filter.t28697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function (_28699,meta28698__$1){var self__ = this;
var _28699__$1 = this;return (new clustermap.components.filter.t28697(self__.map28528,self__.owner,self__.input_schema28532,self__.map28529,self__.component_specs,self__.filter_spec,self__.output_checker28534,self__.history,self__.input_checker28533,self__.map28530,self__.components,self__.validate__6034__auto__,self__.id,self__.G__28535,self__.constructor28526,self__.filter_rq_pub,self__.ufv__,self__.url_components,self__.output_schema28531,meta28698__$1));
});})(owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
;
clustermap.components.filter.__GT_t28697 = ((function (owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534){
return (function __GT_t28697(map28528__$1,owner__$1,input_schema28532__$1,map28529__$1,component_specs__$1,filter_spec__$1,output_checker28534__$1,history__$1,input_checker28533__$1,map28530__$1,components__$1,validate__6034__auto____$1,id__$1,G__28535__$1,constructor28526__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,output_schema28531__$1,meta28698){return (new clustermap.components.filter.t28697(map28528__$1,owner__$1,input_schema28532__$1,map28529__$1,component_specs__$1,filter_spec__$1,output_checker28534__$1,history__$1,input_checker28533__$1,map28530__$1,components__$1,validate__6034__auto____$1,id__$1,G__28535__$1,constructor28526__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,output_schema28531__$1,meta28698));
});})(owner,history,filter_rq_pub,map28529,url_components,components,component_specs,id,filter_spec,map28530,validate__6034__auto__,ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
;
}
return (new clustermap.components.filter.t28697(map28528,owner,input_schema28532,map28529,component_specs,filter_spec,output_checker28534,history,input_checker28533,map28530,components,validate__6034__auto__,id,G__28535,constructor28526,filter_rq_pub,ufv__,url_components,output_schema28531,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28924 = output_checker28534.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28924))
{var error__6036__auto___28925 = temp__4126__auto___28924;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28526","constructor28526",1366176412,null),cljs.core.pr_str.call(null,error__6036__auto___28925)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28925,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28531,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28531,input_schema28532,input_checker28533,output_checker28534))
,schema.core.make_fn_schema.call(null,output_schema28531,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28532], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___28861){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner28525,p__28858){var vec__28860 = p__28858;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28860,(0),null);return component_fnk__7881__auto___28861.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28525),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28525,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner28525,var_args){
var p__28858 = null;if (arguments.length > 2) {
  p__28858 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner28525,p__28858);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__28926){
var data__7882__auto__ = cljs.core.first(arglist__28926);
arglist__28926 = cljs.core.next(arglist__28926);
var owner28525 = cljs.core.first(arglist__28926);
var p__28858 = cljs.core.rest(arglist__28926);
return filter_component__delegate(data__7882__auto__,owner28525,p__28858);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___28861))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m28527){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m28527);
});
__GT_filter_component = function(cursor__7850__auto__,m28527){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m28527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
