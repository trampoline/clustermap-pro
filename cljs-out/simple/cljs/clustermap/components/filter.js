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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__28510){var map__28512 = p__28510;var map__28512__$1 = ((cljs.core.seq_QMARK_.call(null,map__28512))?cljs.core.apply.call(null,cljs.core.hash_map,map__28512):map__28512);var filter_spec = map__28512__$1;var component_descrs = cljs.core.get.call(null,map__28512__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28512__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28512__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__28513){var map__28515 = p__28513;var map__28515__$1 = ((cljs.core.seq_QMARK_.call(null,map__28515))?cljs.core.apply.call(null,cljs.core.hash_map,map__28515):map__28515);var filter_spec = map__28515__$1;var component_descrs = cljs.core.get.call(null,map__28515__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28515__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28515__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__28516,component_filter_rq_chan){var map__28521 = p__28516;var map__28521__$1 = ((cljs.core.seq_QMARK_.call(null,map__28521))?cljs.core.apply.call(null,cljs.core.hash_map,map__28521):map__28521);var component_spec = map__28521__$1;var type = cljs.core.get.call(null,map__28521__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__28522 = cljs.core._EQ_;var expr__28523 = type;if(cljs.core.truth_(pred__28522.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__28523)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28522.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__28523)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28522.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__28523)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28522.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__28523)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28522.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__28523)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28523))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__28525,component_filter_rq_chan){var map__28527 = p__28525;var map__28527__$1 = ((cljs.core.seq_QMARK_.call(null,map__28527))?cljs.core.apply.call(null,cljs.core.hash_map,map__28527):map__28527);var component_spec = map__28527__$1;var skip_label = cljs.core.get.call(null,map__28527__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__28527__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__28527__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(filter_spec)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28529 = schema.core.Any;var input_schema28530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28528","map28528",696868419,null))], null);var input_checker28531 = schema.core.checker.call(null,input_schema28530);var output_checker28532 = schema.core.checker.call(null,output_schema28529);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28529,input_schema28530,input_checker28531,output_checker28532){
return (function render_STAR_(G__28533){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28533], null);var temp__4126__auto___28551 = input_checker28531.call(null,args__6035__auto___28550);if(cljs.core.truth_(temp__4126__auto___28551))
{var error__6036__auto___28552 = temp__4126__auto___28551;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28552)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28552,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28550,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28530,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28528 = G__28533;while(true){
if(cljs.core.map_QMARK_.call(null,map28528))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28528)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28528,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map28528,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map28528,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28529,input_schema28530,input_checker28531,output_checker28532){
return (function iter__28542(s__28543){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28529,input_schema28530,input_checker28531,output_checker28532){
return (function (){var s__28543__$1 = s__28543;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28543__$1);if(temp__4126__auto__)
{var s__28543__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28543__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28543__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28545 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28544 = (0);while(true){
if((i__28544 < size__4376__auto__))
{var map__28548 = cljs.core._nth.call(null,c__4375__auto__,i__28544);var map__28548__$1 = ((cljs.core.seq_QMARK_.call(null,map__28548))?cljs.core.apply.call(null,cljs.core.hash_map,map__28548):map__28548);var component_spec = map__28548__$1;var id = cljs.core.get.call(null,map__28548__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__28545,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__28553 = (i__28544 + (1));
i__28544 = G__28553;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28545),iter__28542.call(null,cljs.core.chunk_rest.call(null,s__28543__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28545),null);
}
} else
{var map__28549 = cljs.core.first.call(null,s__28543__$2);var map__28549__$1 = ((cljs.core.seq_QMARK_.call(null,map__28549))?cljs.core.apply.call(null,cljs.core.hash_map,map__28549):map__28549);var component_spec = map__28549__$1;var id = cljs.core.get.call(null,map__28549__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__28542.call(null,cljs.core.rest.call(null,s__28543__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28529,input_schema28530,input_checker28531,output_checker28532))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28529,input_schema28530,input_checker28531,output_checker28532))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28554 = output_checker28532.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28554))
{var error__6036__auto___28555 = temp__4126__auto___28554;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28555)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28555,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28529,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28529,input_schema28530,input_checker28531,output_checker28532))
,schema.core.make_fn_schema.call(null,output_schema28529,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28530], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___28892 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28562 = schema.core.Any;var input_schema28563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28559","map28559",423627342,null))], null);var input_checker28564 = schema.core.checker.call(null,input_schema28563);var output_checker28565 = schema.core.checker.call(null,output_schema28562);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function constructor28557(G__28566){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28566], null);var temp__4126__auto___28894 = input_checker28564.call(null,args__6035__auto___28893);if(cljs.core.truth_(temp__4126__auto___28894))
{var error__6036__auto___28895 = temp__4126__auto___28894;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28557","constructor28557",1108156366,null),cljs.core.pr_str.call(null,error__6036__auto___28895)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28895,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28893,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28563,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28559 = G__28566;while(true){
if(cljs.core.map_QMARK_.call(null,map28559))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28559)));
}
var map28561 = plumbing.fnk.schema.safe_get.call(null,map28559,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28561,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map28560 = plumbing.fnk.schema.safe_get.call(null,map28559,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map28560,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map28560,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28559,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t28728 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t28728 = (function (G__28566,map28560,owner,output_checker28565,input_checker28564,output_schema28562,map28559,constructor28557,component_specs,filter_spec,history,input_schema28563,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,map28561,meta28729){
this.G__28566 = G__28566;
this.map28560 = map28560;
this.owner = owner;
this.output_checker28565 = output_checker28565;
this.input_checker28564 = input_checker28564;
this.output_schema28562 = output_schema28562;
this.map28559 = map28559;
this.constructor28557 = constructor28557;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.history = history;
this.input_schema28563 = input_schema28563;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.map28561 = map28561;
this.meta28729 = meta28729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t28728.cljs$lang$type = true;
clustermap.components.filter.t28728.cljs$lang$ctorStr = "clustermap.components.filter/t28728";
clustermap.components.filter.t28728.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t28728");
});})(owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
;
clustermap.components.filter.t28728.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t28728.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
;
clustermap.components.filter.t28728.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t28728.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function (_,p__28731,___$1){var self__ = this;
var map__28732 = p__28731;var map__28732__$1 = ((cljs.core.seq_QMARK_.call(null,map__28732))?cljs.core.apply.call(null,cljs.core.hash_map,map__28732):map__28732);var next_props = map__28732__$1;var map__28733 = cljs.core.get.call(null,map__28732__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28733__$1 = ((cljs.core.seq_QMARK_.call(null,map__28733))?cljs.core.apply.call(null,cljs.core.hash_map,map__28733):map__28733);var next_filter_spec = map__28733__$1;var map__28734 = cljs.core.get.call(null,map__28733__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__28734__$1 = ((cljs.core.seq_QMARK_.call(null,map__28734))?cljs.core.apply.call(null,cljs.core.hash_map,map__28734):map__28734);var next_url_components = map__28734__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
;
clustermap.components.filter.t28728.prototype.om$core$IRender$ = true;
clustermap.components.filter.t28728.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
;
clustermap.components.filter.t28728.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t28728.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__28735_28896 = cljs.core.seq.call(null,chs);var chunk__28736_28897 = null;var count__28737_28898 = (0);var i__28738_28899 = (0);while(true){
if((i__28738_28899 < count__28737_28898))
{var vec__28739_28900 = cljs.core._nth.call(null,chunk__28736_28897,i__28738_28899);var component_id_28901 = cljs.core.nth.call(null,vec__28739_28900,(0),null);var ch_28902 = cljs.core.nth.call(null,vec__28739_28900,(1),null);cljs.core.async.close_BANG_.call(null,ch_28902);
{
var G__28903 = seq__28735_28896;
var G__28904 = chunk__28736_28897;
var G__28905 = count__28737_28898;
var G__28906 = (i__28738_28899 + (1));
seq__28735_28896 = G__28903;
chunk__28736_28897 = G__28904;
count__28737_28898 = G__28905;
i__28738_28899 = G__28906;
continue;
}
} else
{var temp__4126__auto___28907 = cljs.core.seq.call(null,seq__28735_28896);if(temp__4126__auto___28907)
{var seq__28735_28908__$1 = temp__4126__auto___28907;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28735_28908__$1))
{var c__4408__auto___28909 = cljs.core.chunk_first.call(null,seq__28735_28908__$1);{
var G__28910 = cljs.core.chunk_rest.call(null,seq__28735_28908__$1);
var G__28911 = c__4408__auto___28909;
var G__28912 = cljs.core.count.call(null,c__4408__auto___28909);
var G__28913 = (0);
seq__28735_28896 = G__28910;
chunk__28736_28897 = G__28911;
count__28737_28898 = G__28912;
i__28738_28899 = G__28913;
continue;
}
} else
{var vec__28740_28914 = cljs.core.first.call(null,seq__28735_28908__$1);var component_id_28915 = cljs.core.nth.call(null,vec__28740_28914,(0),null);var ch_28916 = cljs.core.nth.call(null,vec__28740_28914,(1),null);cljs.core.async.close_BANG_.call(null,ch_28916);
{
var G__28917 = cljs.core.next.call(null,seq__28735_28908__$1);
var G__28918 = null;
var G__28919 = (0);
var G__28920 = (0);
seq__28735_28896 = G__28917;
chunk__28736_28897 = G__28918;
count__28737_28898 = G__28919;
i__28738_28899 = G__28920;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
;
clustermap.components.filter.t28728.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t28728.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function (state_28836){var state_val_28837 = (state_28836[(1)]);if((state_val_28837 === (7)))
{var inst_28827 = (state_28836[(2)]);var state_28836__$1 = state_28836;if(cljs.core.truth_(inst_28827))
{var statearr_28838_28921 = state_28836__$1;(statearr_28838_28921[(1)] = (25));
} else
{var statearr_28839_28922 = state_28836__$1;(statearr_28839_28922[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (20)))
{var inst_28804 = (state_28836[(7)]);var inst_28788 = (state_28836[(8)]);var inst_28797 = (state_28836[(9)]);var inst_28746 = (state_28836[(10)]);var inst_28753 = (state_28836[(11)]);var inst_28747 = (state_28836[(12)]);var inst_28797__$1 = cljs.core.first.call(null,inst_28788);var inst_28798 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28799 = cljs.core.get.call(null,inst_28747,inst_28797__$1);var inst_28800 = ["FILTER",inst_28746,inst_28797__$1,inst_28799];var inst_28801 = (new cljs.core.PersistentVector(null,4,(5),inst_28798,inst_28800,null));var inst_28802 = cljs.core.clj__GT_js.call(null,inst_28801);var inst_28803 = console.log(inst_28802);var inst_28804__$1 = cljs.core.get.call(null,inst_28753,inst_28797__$1);var state_28836__$1 = (function (){var statearr_28840 = state_28836;(statearr_28840[(7)] = inst_28804__$1);
(statearr_28840[(9)] = inst_28797__$1);
(statearr_28840[(13)] = inst_28803);
return statearr_28840;
})();if(cljs.core.truth_(inst_28804__$1))
{var statearr_28841_28923 = state_28836__$1;(statearr_28841_28923[(1)] = (22));
} else
{var statearr_28842_28924 = state_28836__$1;(statearr_28842_28924[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (27)))
{var inst_28832 = (state_28836[(2)]);var state_28836__$1 = state_28836;var statearr_28843_28925 = state_28836__$1;(statearr_28843_28925[(2)] = inst_28832);
(statearr_28843_28925[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (1)))
{var state_28836__$1 = state_28836;var statearr_28844_28926 = state_28836__$1;(statearr_28844_28926[(2)] = null);
(statearr_28844_28926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (24)))
{var inst_28788 = (state_28836[(8)]);var inst_28813 = (state_28836[(2)]);var inst_28814 = cljs.core.next.call(null,inst_28788);var inst_28760 = inst_28814;var inst_28761 = null;var inst_28762 = (0);var inst_28763 = (0);var state_28836__$1 = (function (){var statearr_28848 = state_28836;(statearr_28848[(14)] = inst_28762);
(statearr_28848[(15)] = inst_28813);
(statearr_28848[(16)] = inst_28761);
(statearr_28848[(17)] = inst_28760);
(statearr_28848[(18)] = inst_28763);
return statearr_28848;
})();var statearr_28849_28927 = state_28836__$1;(statearr_28849_28927[(2)] = null);
(statearr_28849_28927[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (4)))
{var inst_28743 = (state_28836[(19)]);var inst_28743__$1 = (state_28836[(2)]);var state_28836__$1 = (function (){var statearr_28850 = state_28836;(statearr_28850[(19)] = inst_28743__$1);
return statearr_28850;
})();if(cljs.core.truth_(inst_28743__$1))
{var statearr_28851_28928 = state_28836__$1;(statearr_28851_28928[(1)] = (5));
} else
{var statearr_28852_28929 = state_28836__$1;(statearr_28852_28929[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (15)))
{var inst_28762 = (state_28836[(14)]);var inst_28761 = (state_28836[(16)]);var inst_28760 = (state_28836[(17)]);var inst_28763 = (state_28836[(18)]);var inst_28784 = (state_28836[(2)]);var inst_28785 = (inst_28763 + (1));var tmp28845 = inst_28762;var tmp28846 = inst_28761;var tmp28847 = inst_28760;var inst_28760__$1 = tmp28847;var inst_28761__$1 = tmp28846;var inst_28762__$1 = tmp28845;var inst_28763__$1 = inst_28785;var state_28836__$1 = (function (){var statearr_28853 = state_28836;(statearr_28853[(14)] = inst_28762__$1);
(statearr_28853[(20)] = inst_28784);
(statearr_28853[(16)] = inst_28761__$1);
(statearr_28853[(17)] = inst_28760__$1);
(statearr_28853[(18)] = inst_28763__$1);
return statearr_28853;
})();var statearr_28854_28930 = state_28836__$1;(statearr_28854_28930[(2)] = null);
(statearr_28854_28930[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (21)))
{var inst_28817 = (state_28836[(2)]);var state_28836__$1 = state_28836;var statearr_28855_28931 = state_28836__$1;(statearr_28855_28931[(2)] = inst_28817);
(statearr_28855_28931[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (13)))
{var inst_28775 = (state_28836[(21)]);var inst_28768 = (state_28836[(22)]);var inst_28747 = (state_28836[(12)]);var inst_28777 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28778 = cljs.core.get.call(null,inst_28747,inst_28768);var inst_28779 = [inst_28768,inst_28778];var inst_28780 = (new cljs.core.PersistentVector(null,2,(5),inst_28777,inst_28779,null));var inst_28781 = cljs.core.async.put_BANG_.call(null,inst_28775,inst_28780);var state_28836__$1 = state_28836;var statearr_28856_28932 = state_28836__$1;(statearr_28856_28932[(2)] = inst_28781);
(statearr_28856_28932[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (22)))
{var inst_28804 = (state_28836[(7)]);var inst_28797 = (state_28836[(9)]);var inst_28747 = (state_28836[(12)]);var inst_28806 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28807 = cljs.core.get.call(null,inst_28747,inst_28797);var inst_28808 = [inst_28797,inst_28807];var inst_28809 = (new cljs.core.PersistentVector(null,2,(5),inst_28806,inst_28808,null));var inst_28810 = cljs.core.async.put_BANG_.call(null,inst_28804,inst_28809);var state_28836__$1 = state_28836;var statearr_28857_28933 = state_28836__$1;(statearr_28857_28933[(2)] = inst_28810);
(statearr_28857_28933[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (6)))
{var state_28836__$1 = state_28836;var statearr_28858_28934 = state_28836__$1;(statearr_28858_28934[(2)] = null);
(statearr_28858_28934[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (25)))
{var state_28836__$1 = state_28836;var statearr_28859_28935 = state_28836__$1;(statearr_28859_28935[(2)] = null);
(statearr_28859_28935[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (17)))
{var state_28836__$1 = state_28836;var statearr_28860_28936 = state_28836__$1;(statearr_28860_28936[(2)] = null);
(statearr_28860_28936[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (3)))
{var inst_28834 = (state_28836[(2)]);var state_28836__$1 = state_28836;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28836__$1,inst_28834);
} else
{if((state_val_28837 === (12)))
{var inst_28822 = (state_28836[(2)]);var state_28836__$1 = state_28836;var statearr_28861_28937 = state_28836__$1;(statearr_28861_28937[(2)] = inst_28822);
(statearr_28861_28937[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (2)))
{var state_28836__$1 = state_28836;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28836__$1,(4),filter_rq_sub);
} else
{if((state_val_28837 === (23)))
{var state_28836__$1 = state_28836;var statearr_28862_28938 = state_28836__$1;(statearr_28862_28938[(2)] = null);
(statearr_28862_28938[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (19)))
{var inst_28788 = (state_28836[(8)]);var inst_28792 = cljs.core.chunk_first.call(null,inst_28788);var inst_28793 = cljs.core.chunk_rest.call(null,inst_28788);var inst_28794 = cljs.core.count.call(null,inst_28792);var inst_28760 = inst_28793;var inst_28761 = inst_28792;var inst_28762 = inst_28794;var inst_28763 = (0);var state_28836__$1 = (function (){var statearr_28863 = state_28836;(statearr_28863[(14)] = inst_28762);
(statearr_28863[(16)] = inst_28761);
(statearr_28863[(17)] = inst_28760);
(statearr_28863[(18)] = inst_28763);
return statearr_28863;
})();var statearr_28864_28939 = state_28836__$1;(statearr_28864_28939[(2)] = null);
(statearr_28864_28939[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (11)))
{var inst_28788 = (state_28836[(8)]);var inst_28760 = (state_28836[(17)]);var inst_28788__$1 = cljs.core.seq.call(null,inst_28760);var state_28836__$1 = (function (){var statearr_28865 = state_28836;(statearr_28865[(8)] = inst_28788__$1);
return statearr_28865;
})();if(inst_28788__$1)
{var statearr_28866_28940 = state_28836__$1;(statearr_28866_28940[(1)] = (16));
} else
{var statearr_28867_28941 = state_28836__$1;(statearr_28867_28941[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (9)))
{var inst_28824 = (state_28836[(2)]);var state_28836__$1 = (function (){var statearr_28868 = state_28836;(statearr_28868[(23)] = inst_28824);
return statearr_28868;
})();var statearr_28869_28942 = state_28836__$1;(statearr_28869_28942[(2)] = true);
(statearr_28869_28942[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (5)))
{var inst_28746 = (state_28836[(10)]);var inst_28743 = (state_28836[(19)]);var inst_28747 = (state_28836[(12)]);var inst_28746__$1 = cljs.core.nth.call(null,inst_28743,(0),null);var inst_28747__$1 = cljs.core.nth.call(null,inst_28743,(1),null);var inst_28748 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28749 = ["FILTER-RQ",inst_28746__$1,inst_28747__$1];var inst_28750 = (new cljs.core.PersistentVector(null,3,(5),inst_28748,inst_28749,null));var inst_28751 = cljs.core.clj__GT_js.call(null,inst_28750);var inst_28752 = console.log(inst_28751);var inst_28753 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_28754 = cljs.core.keys.call(null,inst_28747__$1);var inst_28759 = cljs.core.seq.call(null,inst_28754);var inst_28760 = inst_28759;var inst_28761 = null;var inst_28762 = (0);var inst_28763 = (0);var state_28836__$1 = (function (){var statearr_28870 = state_28836;(statearr_28870[(14)] = inst_28762);
(statearr_28870[(10)] = inst_28746__$1);
(statearr_28870[(16)] = inst_28761);
(statearr_28870[(11)] = inst_28753);
(statearr_28870[(24)] = inst_28752);
(statearr_28870[(17)] = inst_28760);
(statearr_28870[(18)] = inst_28763);
(statearr_28870[(12)] = inst_28747__$1);
return statearr_28870;
})();var statearr_28871_28943 = state_28836__$1;(statearr_28871_28943[(2)] = null);
(statearr_28871_28943[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (14)))
{var state_28836__$1 = state_28836;var statearr_28872_28944 = state_28836__$1;(statearr_28872_28944[(2)] = null);
(statearr_28872_28944[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (26)))
{var state_28836__$1 = state_28836;var statearr_28873_28945 = state_28836__$1;(statearr_28873_28945[(2)] = null);
(statearr_28873_28945[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (16)))
{var inst_28788 = (state_28836[(8)]);var inst_28790 = cljs.core.chunked_seq_QMARK_.call(null,inst_28788);var state_28836__$1 = state_28836;if(inst_28790)
{var statearr_28874_28946 = state_28836__$1;(statearr_28874_28946[(1)] = (19));
} else
{var statearr_28875_28947 = state_28836__$1;(statearr_28875_28947[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (10)))
{var inst_28775 = (state_28836[(21)]);var inst_28768 = (state_28836[(22)]);var inst_28746 = (state_28836[(10)]);var inst_28761 = (state_28836[(16)]);var inst_28753 = (state_28836[(11)]);var inst_28763 = (state_28836[(18)]);var inst_28747 = (state_28836[(12)]);var inst_28768__$1 = cljs.core._nth.call(null,inst_28761,inst_28763);var inst_28769 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28770 = cljs.core.get.call(null,inst_28747,inst_28768__$1);var inst_28771 = ["FILTER",inst_28746,inst_28768__$1,inst_28770];var inst_28772 = (new cljs.core.PersistentVector(null,4,(5),inst_28769,inst_28771,null));var inst_28773 = cljs.core.clj__GT_js.call(null,inst_28772);var inst_28774 = console.log(inst_28773);var inst_28775__$1 = cljs.core.get.call(null,inst_28753,inst_28768__$1);var state_28836__$1 = (function (){var statearr_28876 = state_28836;(statearr_28876[(21)] = inst_28775__$1);
(statearr_28876[(22)] = inst_28768__$1);
(statearr_28876[(25)] = inst_28774);
return statearr_28876;
})();if(cljs.core.truth_(inst_28775__$1))
{var statearr_28877_28948 = state_28836__$1;(statearr_28877_28948[(1)] = (13));
} else
{var statearr_28878_28949 = state_28836__$1;(statearr_28878_28949[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (18)))
{var inst_28820 = (state_28836[(2)]);var state_28836__$1 = state_28836;var statearr_28879_28950 = state_28836__$1;(statearr_28879_28950[(2)] = inst_28820);
(statearr_28879_28950[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28837 === (8)))
{var inst_28762 = (state_28836[(14)]);var inst_28763 = (state_28836[(18)]);var inst_28765 = (inst_28763 < inst_28762);var inst_28766 = inst_28765;var state_28836__$1 = state_28836;if(cljs.core.truth_(inst_28766))
{var statearr_28880_28951 = state_28836__$1;(statearr_28880_28951[(1)] = (10));
} else
{var statearr_28881_28952 = state_28836__$1;(statearr_28881_28952[(1)] = (11));
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
});})(c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
;return ((function (switch__11461__auto__,c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_28885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28885[(0)] = state_machine__11462__auto__);
(statearr_28885[(1)] = (1));
return statearr_28885;
});
var state_machine__11462__auto____1 = (function (state_28836){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_28836);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e28886){if((e28886 instanceof Object))
{var ex__11465__auto__ = e28886;var statearr_28887_28953 = state_28836;(statearr_28887_28953[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28836);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28886;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28954 = state_28836;
state_28836 = G__28954;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_28836){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_28836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
})();var state__11519__auto__ = (function (){var statearr_28888 = f__11518__auto__.call(null);(statearr_28888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_28888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
);
return c__11517__auto__;
});})(owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
;
clustermap.components.filter.t28728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function (_28730){var self__ = this;
var _28730__$1 = this;return self__.meta28729;
});})(owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
;
clustermap.components.filter.t28728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function (_28730,meta28729__$1){var self__ = this;
var _28730__$1 = this;return (new clustermap.components.filter.t28728(self__.G__28566,self__.map28560,self__.owner,self__.output_checker28565,self__.input_checker28564,self__.output_schema28562,self__.map28559,self__.constructor28557,self__.component_specs,self__.filter_spec,self__.history,self__.input_schema28563,self__.components,self__.validate__6034__auto__,self__.id,self__.filter_rq_pub,self__.ufv__,self__.url_components,self__.map28561,meta28729__$1));
});})(owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
;
clustermap.components.filter.__GT_t28728 = ((function (owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565){
return (function __GT_t28728(G__28566__$1,map28560__$1,owner__$1,output_checker28565__$1,input_checker28564__$1,output_schema28562__$1,map28559__$1,constructor28557__$1,component_specs__$1,filter_spec__$1,history__$1,input_schema28563__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,map28561__$1,meta28729){return (new clustermap.components.filter.t28728(G__28566__$1,map28560__$1,owner__$1,output_checker28565__$1,input_checker28564__$1,output_schema28562__$1,map28559__$1,constructor28557__$1,component_specs__$1,filter_spec__$1,history__$1,input_schema28563__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,map28561__$1,meta28729));
});})(owner,history,filter_rq_pub,map28560,url_components,components,component_specs,id,filter_spec,map28561,validate__6034__auto__,ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
;
}
return (new clustermap.components.filter.t28728(G__28566,map28560,owner,output_checker28565,input_checker28564,output_schema28562,map28559,constructor28557,component_specs,filter_spec,history,input_schema28563,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,map28561,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28955 = output_checker28565.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28955))
{var error__6036__auto___28956 = temp__4126__auto___28955;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28557","constructor28557",1108156366,null),cljs.core.pr_str.call(null,error__6036__auto___28956)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28956,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28562,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28562,input_schema28563,input_checker28564,output_checker28565))
,schema.core.make_fn_schema.call(null,output_schema28562,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28563], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___28892){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner28556,p__28889){var vec__28891 = p__28889;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28891,(0),null);return component_fnk__7881__auto___28892.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28556),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28556,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner28556,var_args){
var p__28889 = null;if (arguments.length > 2) {
  p__28889 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner28556,p__28889);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__28957){
var data__7882__auto__ = cljs.core.first(arglist__28957);
arglist__28957 = cljs.core.next(arglist__28957);
var owner28556 = cljs.core.first(arglist__28957);
var p__28889 = cljs.core.rest(arglist__28957);
return filter_component__delegate(data__7882__auto__,owner28556,p__28889);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___28892))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m28558){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m28558);
});
__GT_filter_component = function(cursor__7850__auto__,m28558){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m28558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
