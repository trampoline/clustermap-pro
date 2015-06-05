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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29238){var map__29240 = p__29238;var map__29240__$1 = ((cljs.core.seq_QMARK_.call(null,map__29240))?cljs.core.apply.call(null,cljs.core.hash_map,map__29240):map__29240);var filter_spec = map__29240__$1;var component_descrs = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29240__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29241){var map__29243 = p__29241;var map__29243__$1 = ((cljs.core.seq_QMARK_.call(null,map__29243))?cljs.core.apply.call(null,cljs.core.hash_map,map__29243):map__29243);var filter_spec = map__29243__$1;var component_descrs = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29244,component_filter_rq_chan){var map__29249 = p__29244;var map__29249__$1 = ((cljs.core.seq_QMARK_.call(null,map__29249))?cljs.core.apply.call(null,cljs.core.hash_map,map__29249):map__29249);var component_spec = map__29249__$1;var type = cljs.core.get.call(null,map__29249__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29250 = cljs.core._EQ_;var expr__29251 = type;if(cljs.core.truth_(pred__29250.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29251)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29250.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29251)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29250.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29251)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29250.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29251)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29250.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29251)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29251))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29253,component_filter_rq_chan){var map__29255 = p__29253;var map__29255__$1 = ((cljs.core.seq_QMARK_.call(null,map__29255))?cljs.core.apply.call(null,cljs.core.hash_map,map__29255):map__29255);var component_spec = map__29255__$1;var visible = cljs.core.get.call(null,map__29255__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29255__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29255__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29255__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29257 = schema.core.Any;var input_schema29258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29256","map29256",259826665,null))], null);var input_checker29259 = schema.core.checker.call(null,input_schema29258);var output_checker29260 = schema.core.checker.call(null,output_schema29257);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29257,input_schema29258,input_checker29259,output_checker29260){
return (function render_STAR_(G__29261){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29278 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29261], null);var temp__4126__auto___29279 = input_checker29259.call(null,args__6035__auto___29278);if(cljs.core.truth_(temp__4126__auto___29279))
{var error__6036__auto___29280 = temp__4126__auto___29279;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29280)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29280,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29278,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29258,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29256 = G__29261;while(true){
if(cljs.core.map_QMARK_.call(null,map29256))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29256)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29256,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29256,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29256,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29257,input_schema29258,input_checker29259,output_checker29260){
return (function iter__29270(s__29271){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29257,input_schema29258,input_checker29259,output_checker29260){
return (function (){var s__29271__$1 = s__29271;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29271__$1);if(temp__4126__auto__)
{var s__29271__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29271__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29271__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29273 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29272 = (0);while(true){
if((i__29272 < size__4376__auto__))
{var map__29276 = cljs.core._nth.call(null,c__4375__auto__,i__29272);var map__29276__$1 = ((cljs.core.seq_QMARK_.call(null,map__29276))?cljs.core.apply.call(null,cljs.core.hash_map,map__29276):map__29276);var component_spec = map__29276__$1;var id = cljs.core.get.call(null,map__29276__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29273,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29281 = (i__29272 + (1));
i__29272 = G__29281;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29273),iter__29270.call(null,cljs.core.chunk_rest.call(null,s__29271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29273),null);
}
} else
{var map__29277 = cljs.core.first.call(null,s__29271__$2);var map__29277__$1 = ((cljs.core.seq_QMARK_.call(null,map__29277))?cljs.core.apply.call(null,cljs.core.hash_map,map__29277):map__29277);var component_spec = map__29277__$1;var id = cljs.core.get.call(null,map__29277__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29270.call(null,cljs.core.rest.call(null,s__29271__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29257,input_schema29258,input_checker29259,output_checker29260))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29257,input_schema29258,input_checker29259,output_checker29260))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29282 = output_checker29260.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29282))
{var error__6036__auto___29283 = temp__4126__auto___29282;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29283)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29283,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29257,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29257,input_schema29258,input_checker29259,output_checker29260))
,schema.core.make_fn_schema.call(null,output_schema29257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29258], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___29620 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29290 = schema.core.Any;var input_schema29291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29287","map29287",-882198933,null))], null);var input_checker29292 = schema.core.checker.call(null,input_schema29291);var output_checker29293 = schema.core.checker.call(null,output_schema29290);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function constructor29285(G__29294){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29294], null);var temp__4126__auto___29622 = input_checker29292.call(null,args__6035__auto___29621);if(cljs.core.truth_(temp__4126__auto___29622))
{var error__6036__auto___29623 = temp__4126__auto___29622;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29285","constructor29285",48624906,null),cljs.core.pr_str.call(null,error__6036__auto___29623)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29623,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29621,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29291,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29287 = G__29294;while(true){
if(cljs.core.map_QMARK_.call(null,map29287))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29287)));
}
var map29289 = plumbing.fnk.schema.safe_get.call(null,map29287,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29289,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29288 = plumbing.fnk.schema.safe_get.call(null,map29287,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29288,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29288,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29287,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t29456 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t29456 = (function (map29289,map29288,owner,constructor29285,map29287,input_schema29291,component_specs,filter_spec,input_checker29292,history,G__29294,output_schema29290,output_checker29293,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,meta29457){
this.map29289 = map29289;
this.map29288 = map29288;
this.owner = owner;
this.constructor29285 = constructor29285;
this.map29287 = map29287;
this.input_schema29291 = input_schema29291;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.input_checker29292 = input_checker29292;
this.history = history;
this.G__29294 = G__29294;
this.output_schema29290 = output_schema29290;
this.output_checker29293 = output_checker29293;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta29457 = meta29457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t29456.cljs$lang$type = true;
clustermap.components.filter.t29456.cljs$lang$ctorStr = "clustermap.components.filter/t29456";
clustermap.components.filter.t29456.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t29456");
});})(owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
;
clustermap.components.filter.t29456.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t29456.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
;
clustermap.components.filter.t29456.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t29456.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function (_,p__29459,___$1){var self__ = this;
var map__29460 = p__29459;var map__29460__$1 = ((cljs.core.seq_QMARK_.call(null,map__29460))?cljs.core.apply.call(null,cljs.core.hash_map,map__29460):map__29460);var next_props = map__29460__$1;var map__29461 = cljs.core.get.call(null,map__29460__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__29461__$1 = ((cljs.core.seq_QMARK_.call(null,map__29461))?cljs.core.apply.call(null,cljs.core.hash_map,map__29461):map__29461);var next_filter_spec = map__29461__$1;var map__29462 = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__29462__$1 = ((cljs.core.seq_QMARK_.call(null,map__29462))?cljs.core.apply.call(null,cljs.core.hash_map,map__29462):map__29462);var next_url_components = map__29462__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
;
clustermap.components.filter.t29456.prototype.om$core$IRender$ = true;
clustermap.components.filter.t29456.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
;
clustermap.components.filter.t29456.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t29456.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__29463_29624 = cljs.core.seq.call(null,chs);var chunk__29464_29625 = null;var count__29465_29626 = (0);var i__29466_29627 = (0);while(true){
if((i__29466_29627 < count__29465_29626))
{var vec__29467_29628 = cljs.core._nth.call(null,chunk__29464_29625,i__29466_29627);var component_id_29629 = cljs.core.nth.call(null,vec__29467_29628,(0),null);var ch_29630 = cljs.core.nth.call(null,vec__29467_29628,(1),null);cljs.core.async.close_BANG_.call(null,ch_29630);
{
var G__29631 = seq__29463_29624;
var G__29632 = chunk__29464_29625;
var G__29633 = count__29465_29626;
var G__29634 = (i__29466_29627 + (1));
seq__29463_29624 = G__29631;
chunk__29464_29625 = G__29632;
count__29465_29626 = G__29633;
i__29466_29627 = G__29634;
continue;
}
} else
{var temp__4126__auto___29635 = cljs.core.seq.call(null,seq__29463_29624);if(temp__4126__auto___29635)
{var seq__29463_29636__$1 = temp__4126__auto___29635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29463_29636__$1))
{var c__4408__auto___29637 = cljs.core.chunk_first.call(null,seq__29463_29636__$1);{
var G__29638 = cljs.core.chunk_rest.call(null,seq__29463_29636__$1);
var G__29639 = c__4408__auto___29637;
var G__29640 = cljs.core.count.call(null,c__4408__auto___29637);
var G__29641 = (0);
seq__29463_29624 = G__29638;
chunk__29464_29625 = G__29639;
count__29465_29626 = G__29640;
i__29466_29627 = G__29641;
continue;
}
} else
{var vec__29468_29642 = cljs.core.first.call(null,seq__29463_29636__$1);var component_id_29643 = cljs.core.nth.call(null,vec__29468_29642,(0),null);var ch_29644 = cljs.core.nth.call(null,vec__29468_29642,(1),null);cljs.core.async.close_BANG_.call(null,ch_29644);
{
var G__29645 = cljs.core.next.call(null,seq__29463_29636__$1);
var G__29646 = null;
var G__29647 = (0);
var G__29648 = (0);
seq__29463_29624 = G__29645;
chunk__29464_29625 = G__29646;
count__29465_29626 = G__29647;
i__29466_29627 = G__29648;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
;
clustermap.components.filter.t29456.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t29456.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function (state_29564){var state_val_29565 = (state_29564[(1)]);if((state_val_29565 === (7)))
{var inst_29555 = (state_29564[(2)]);var state_29564__$1 = state_29564;if(cljs.core.truth_(inst_29555))
{var statearr_29566_29649 = state_29564__$1;(statearr_29566_29649[(1)] = (25));
} else
{var statearr_29567_29650 = state_29564__$1;(statearr_29567_29650[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (20)))
{var inst_29474 = (state_29564[(7)]);var inst_29475 = (state_29564[(8)]);var inst_29532 = (state_29564[(9)]);var inst_29525 = (state_29564[(10)]);var inst_29481 = (state_29564[(11)]);var inst_29516 = (state_29564[(12)]);var inst_29525__$1 = cljs.core.first.call(null,inst_29516);var inst_29526 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29527 = cljs.core.get.call(null,inst_29475,inst_29525__$1);var inst_29528 = ["FILTER",inst_29474,inst_29525__$1,inst_29527];var inst_29529 = (new cljs.core.PersistentVector(null,4,(5),inst_29526,inst_29528,null));var inst_29530 = cljs.core.clj__GT_js.call(null,inst_29529);var inst_29531 = console.log(inst_29530);var inst_29532__$1 = cljs.core.get.call(null,inst_29481,inst_29525__$1);var state_29564__$1 = (function (){var statearr_29568 = state_29564;(statearr_29568[(9)] = inst_29532__$1);
(statearr_29568[(10)] = inst_29525__$1);
(statearr_29568[(13)] = inst_29531);
return statearr_29568;
})();if(cljs.core.truth_(inst_29532__$1))
{var statearr_29569_29651 = state_29564__$1;(statearr_29569_29651[(1)] = (22));
} else
{var statearr_29570_29652 = state_29564__$1;(statearr_29570_29652[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (27)))
{var inst_29560 = (state_29564[(2)]);var state_29564__$1 = state_29564;var statearr_29571_29653 = state_29564__$1;(statearr_29571_29653[(2)] = inst_29560);
(statearr_29571_29653[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (1)))
{var state_29564__$1 = state_29564;var statearr_29572_29654 = state_29564__$1;(statearr_29572_29654[(2)] = null);
(statearr_29572_29654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (24)))
{var inst_29516 = (state_29564[(12)]);var inst_29541 = (state_29564[(2)]);var inst_29542 = cljs.core.next.call(null,inst_29516);var inst_29488 = inst_29542;var inst_29489 = null;var inst_29490 = (0);var inst_29491 = (0);var state_29564__$1 = (function (){var statearr_29576 = state_29564;(statearr_29576[(14)] = inst_29491);
(statearr_29576[(15)] = inst_29488);
(statearr_29576[(16)] = inst_29489);
(statearr_29576[(17)] = inst_29490);
(statearr_29576[(18)] = inst_29541);
return statearr_29576;
})();var statearr_29577_29655 = state_29564__$1;(statearr_29577_29655[(2)] = null);
(statearr_29577_29655[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (4)))
{var inst_29471 = (state_29564[(19)]);var inst_29471__$1 = (state_29564[(2)]);var state_29564__$1 = (function (){var statearr_29578 = state_29564;(statearr_29578[(19)] = inst_29471__$1);
return statearr_29578;
})();if(cljs.core.truth_(inst_29471__$1))
{var statearr_29579_29656 = state_29564__$1;(statearr_29579_29656[(1)] = (5));
} else
{var statearr_29580_29657 = state_29564__$1;(statearr_29580_29657[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (15)))
{var inst_29491 = (state_29564[(14)]);var inst_29488 = (state_29564[(15)]);var inst_29489 = (state_29564[(16)]);var inst_29490 = (state_29564[(17)]);var inst_29512 = (state_29564[(2)]);var inst_29513 = (inst_29491 + (1));var tmp29573 = inst_29488;var tmp29574 = inst_29489;var tmp29575 = inst_29490;var inst_29488__$1 = tmp29573;var inst_29489__$1 = tmp29574;var inst_29490__$1 = tmp29575;var inst_29491__$1 = inst_29513;var state_29564__$1 = (function (){var statearr_29581 = state_29564;(statearr_29581[(14)] = inst_29491__$1);
(statearr_29581[(15)] = inst_29488__$1);
(statearr_29581[(16)] = inst_29489__$1);
(statearr_29581[(17)] = inst_29490__$1);
(statearr_29581[(20)] = inst_29512);
return statearr_29581;
})();var statearr_29582_29658 = state_29564__$1;(statearr_29582_29658[(2)] = null);
(statearr_29582_29658[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (21)))
{var inst_29545 = (state_29564[(2)]);var state_29564__$1 = state_29564;var statearr_29583_29659 = state_29564__$1;(statearr_29583_29659[(2)] = inst_29545);
(statearr_29583_29659[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (13)))
{var inst_29503 = (state_29564[(21)]);var inst_29475 = (state_29564[(8)]);var inst_29496 = (state_29564[(22)]);var inst_29505 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29506 = cljs.core.get.call(null,inst_29475,inst_29496);var inst_29507 = [inst_29496,inst_29506];var inst_29508 = (new cljs.core.PersistentVector(null,2,(5),inst_29505,inst_29507,null));var inst_29509 = cljs.core.async.put_BANG_.call(null,inst_29503,inst_29508);var state_29564__$1 = state_29564;var statearr_29584_29660 = state_29564__$1;(statearr_29584_29660[(2)] = inst_29509);
(statearr_29584_29660[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (22)))
{var inst_29475 = (state_29564[(8)]);var inst_29532 = (state_29564[(9)]);var inst_29525 = (state_29564[(10)]);var inst_29534 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29535 = cljs.core.get.call(null,inst_29475,inst_29525);var inst_29536 = [inst_29525,inst_29535];var inst_29537 = (new cljs.core.PersistentVector(null,2,(5),inst_29534,inst_29536,null));var inst_29538 = cljs.core.async.put_BANG_.call(null,inst_29532,inst_29537);var state_29564__$1 = state_29564;var statearr_29585_29661 = state_29564__$1;(statearr_29585_29661[(2)] = inst_29538);
(statearr_29585_29661[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (6)))
{var state_29564__$1 = state_29564;var statearr_29586_29662 = state_29564__$1;(statearr_29586_29662[(2)] = null);
(statearr_29586_29662[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (25)))
{var state_29564__$1 = state_29564;var statearr_29587_29663 = state_29564__$1;(statearr_29587_29663[(2)] = null);
(statearr_29587_29663[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (17)))
{var state_29564__$1 = state_29564;var statearr_29588_29664 = state_29564__$1;(statearr_29588_29664[(2)] = null);
(statearr_29588_29664[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (3)))
{var inst_29562 = (state_29564[(2)]);var state_29564__$1 = state_29564;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29564__$1,inst_29562);
} else
{if((state_val_29565 === (12)))
{var inst_29550 = (state_29564[(2)]);var state_29564__$1 = state_29564;var statearr_29589_29665 = state_29564__$1;(statearr_29589_29665[(2)] = inst_29550);
(statearr_29589_29665[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (2)))
{var state_29564__$1 = state_29564;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29564__$1,(4),filter_rq_sub);
} else
{if((state_val_29565 === (23)))
{var state_29564__$1 = state_29564;var statearr_29590_29666 = state_29564__$1;(statearr_29590_29666[(2)] = null);
(statearr_29590_29666[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (19)))
{var inst_29516 = (state_29564[(12)]);var inst_29520 = cljs.core.chunk_first.call(null,inst_29516);var inst_29521 = cljs.core.chunk_rest.call(null,inst_29516);var inst_29522 = cljs.core.count.call(null,inst_29520);var inst_29488 = inst_29521;var inst_29489 = inst_29520;var inst_29490 = inst_29522;var inst_29491 = (0);var state_29564__$1 = (function (){var statearr_29591 = state_29564;(statearr_29591[(14)] = inst_29491);
(statearr_29591[(15)] = inst_29488);
(statearr_29591[(16)] = inst_29489);
(statearr_29591[(17)] = inst_29490);
return statearr_29591;
})();var statearr_29592_29667 = state_29564__$1;(statearr_29592_29667[(2)] = null);
(statearr_29592_29667[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (11)))
{var inst_29488 = (state_29564[(15)]);var inst_29516 = (state_29564[(12)]);var inst_29516__$1 = cljs.core.seq.call(null,inst_29488);var state_29564__$1 = (function (){var statearr_29593 = state_29564;(statearr_29593[(12)] = inst_29516__$1);
return statearr_29593;
})();if(inst_29516__$1)
{var statearr_29594_29668 = state_29564__$1;(statearr_29594_29668[(1)] = (16));
} else
{var statearr_29595_29669 = state_29564__$1;(statearr_29595_29669[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (9)))
{var inst_29552 = (state_29564[(2)]);var state_29564__$1 = (function (){var statearr_29596 = state_29564;(statearr_29596[(23)] = inst_29552);
return statearr_29596;
})();var statearr_29597_29670 = state_29564__$1;(statearr_29597_29670[(2)] = true);
(statearr_29597_29670[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (5)))
{var inst_29474 = (state_29564[(7)]);var inst_29475 = (state_29564[(8)]);var inst_29471 = (state_29564[(19)]);var inst_29474__$1 = cljs.core.nth.call(null,inst_29471,(0),null);var inst_29475__$1 = cljs.core.nth.call(null,inst_29471,(1),null);var inst_29476 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29477 = ["FILTER-RQ",inst_29474__$1,inst_29475__$1];var inst_29478 = (new cljs.core.PersistentVector(null,3,(5),inst_29476,inst_29477,null));var inst_29479 = cljs.core.clj__GT_js.call(null,inst_29478);var inst_29480 = console.log(inst_29479);var inst_29481 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_29482 = cljs.core.keys.call(null,inst_29475__$1);var inst_29487 = cljs.core.seq.call(null,inst_29482);var inst_29488 = inst_29487;var inst_29489 = null;var inst_29490 = (0);var inst_29491 = (0);var state_29564__$1 = (function (){var statearr_29598 = state_29564;(statearr_29598[(14)] = inst_29491);
(statearr_29598[(15)] = inst_29488);
(statearr_29598[(7)] = inst_29474__$1);
(statearr_29598[(8)] = inst_29475__$1);
(statearr_29598[(16)] = inst_29489);
(statearr_29598[(17)] = inst_29490);
(statearr_29598[(24)] = inst_29480);
(statearr_29598[(11)] = inst_29481);
return statearr_29598;
})();var statearr_29599_29671 = state_29564__$1;(statearr_29599_29671[(2)] = null);
(statearr_29599_29671[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (14)))
{var state_29564__$1 = state_29564;var statearr_29600_29672 = state_29564__$1;(statearr_29600_29672[(2)] = null);
(statearr_29600_29672[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (26)))
{var state_29564__$1 = state_29564;var statearr_29601_29673 = state_29564__$1;(statearr_29601_29673[(2)] = null);
(statearr_29601_29673[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (16)))
{var inst_29516 = (state_29564[(12)]);var inst_29518 = cljs.core.chunked_seq_QMARK_.call(null,inst_29516);var state_29564__$1 = state_29564;if(inst_29518)
{var statearr_29602_29674 = state_29564__$1;(statearr_29602_29674[(1)] = (19));
} else
{var statearr_29603_29675 = state_29564__$1;(statearr_29603_29675[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (10)))
{var inst_29503 = (state_29564[(21)]);var inst_29491 = (state_29564[(14)]);var inst_29474 = (state_29564[(7)]);var inst_29475 = (state_29564[(8)]);var inst_29489 = (state_29564[(16)]);var inst_29496 = (state_29564[(22)]);var inst_29481 = (state_29564[(11)]);var inst_29496__$1 = cljs.core._nth.call(null,inst_29489,inst_29491);var inst_29497 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29498 = cljs.core.get.call(null,inst_29475,inst_29496__$1);var inst_29499 = ["FILTER",inst_29474,inst_29496__$1,inst_29498];var inst_29500 = (new cljs.core.PersistentVector(null,4,(5),inst_29497,inst_29499,null));var inst_29501 = cljs.core.clj__GT_js.call(null,inst_29500);var inst_29502 = console.log(inst_29501);var inst_29503__$1 = cljs.core.get.call(null,inst_29481,inst_29496__$1);var state_29564__$1 = (function (){var statearr_29604 = state_29564;(statearr_29604[(21)] = inst_29503__$1);
(statearr_29604[(25)] = inst_29502);
(statearr_29604[(22)] = inst_29496__$1);
return statearr_29604;
})();if(cljs.core.truth_(inst_29503__$1))
{var statearr_29605_29676 = state_29564__$1;(statearr_29605_29676[(1)] = (13));
} else
{var statearr_29606_29677 = state_29564__$1;(statearr_29606_29677[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (18)))
{var inst_29548 = (state_29564[(2)]);var state_29564__$1 = state_29564;var statearr_29607_29678 = state_29564__$1;(statearr_29607_29678[(2)] = inst_29548);
(statearr_29607_29678[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29565 === (8)))
{var inst_29491 = (state_29564[(14)]);var inst_29490 = (state_29564[(17)]);var inst_29493 = (inst_29491 < inst_29490);var inst_29494 = inst_29493;var state_29564__$1 = state_29564;if(cljs.core.truth_(inst_29494))
{var statearr_29608_29679 = state_29564__$1;(statearr_29608_29679[(1)] = (10));
} else
{var statearr_29609_29680 = state_29564__$1;(statearr_29609_29680[(1)] = (11));
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
});})(c__11154__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
;return ((function (switch__11098__auto__,c__11154__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_29613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29613[(0)] = state_machine__11099__auto__);
(statearr_29613[(1)] = (1));
return statearr_29613;
});
var state_machine__11099__auto____1 = (function (state_29564){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_29564);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e29614){if((e29614 instanceof Object))
{var ex__11102__auto__ = e29614;var statearr_29615_29681 = state_29564;(statearr_29615_29681[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29564);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29614;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29682 = state_29564;
state_29564 = G__29682;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_29564){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_29564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
})();var state__11156__auto__ = (function (){var statearr_29616 = f__11155__auto__.call(null);(statearr_29616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_29616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
);
return c__11154__auto__;
});})(owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
;
clustermap.components.filter.t29456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function (_29458){var self__ = this;
var _29458__$1 = this;return self__.meta29457;
});})(owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
;
clustermap.components.filter.t29456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function (_29458,meta29457__$1){var self__ = this;
var _29458__$1 = this;return (new clustermap.components.filter.t29456(self__.map29289,self__.map29288,self__.owner,self__.constructor29285,self__.map29287,self__.input_schema29291,self__.component_specs,self__.filter_spec,self__.input_checker29292,self__.history,self__.G__29294,self__.output_schema29290,self__.output_checker29293,self__.components,self__.validate__6034__auto__,self__.id,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta29457__$1));
});})(owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
;
clustermap.components.filter.__GT_t29456 = ((function (owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293){
return (function __GT_t29456(map29289__$1,map29288__$1,owner__$1,constructor29285__$1,map29287__$1,input_schema29291__$1,component_specs__$1,filter_spec__$1,input_checker29292__$1,history__$1,G__29294__$1,output_schema29290__$1,output_checker29293__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta29457){return (new clustermap.components.filter.t29456(map29289__$1,map29288__$1,owner__$1,constructor29285__$1,map29287__$1,input_schema29291__$1,component_specs__$1,filter_spec__$1,input_checker29292__$1,history__$1,G__29294__$1,output_schema29290__$1,output_checker29293__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta29457));
});})(owner,history,filter_rq_pub,map29288,url_components,components,component_specs,id,filter_spec,map29289,validate__6034__auto__,ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
;
}
return (new clustermap.components.filter.t29456(map29289,map29288,owner,constructor29285,map29287,input_schema29291,component_specs,filter_spec,input_checker29292,history,G__29294,output_schema29290,output_checker29293,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29683 = output_checker29293.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29683))
{var error__6036__auto___29684 = temp__4126__auto___29683;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29285","constructor29285",48624906,null),cljs.core.pr_str.call(null,error__6036__auto___29684)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29684,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29290,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29290,input_schema29291,input_checker29292,output_checker29293))
,schema.core.make_fn_schema.call(null,output_schema29290,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29291], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___29620){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29284,p__29617){var vec__29619 = p__29617;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29619,(0),null);return component_fnk__7881__auto___29620.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29284),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29284,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29284,var_args){
var p__29617 = null;if (arguments.length > 2) {
  p__29617 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29284,p__29617);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__29685){
var data__7882__auto__ = cljs.core.first(arglist__29685);
arglist__29685 = cljs.core.next(arglist__29685);
var owner29284 = cljs.core.first(arglist__29685);
var p__29617 = cljs.core.rest(arglist__29685);
return filter_component__delegate(data__7882__auto__,owner29284,p__29617);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___29620))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29286){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29286);
});
__GT_filter_component = function(cursor__7850__auto__,m29286){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
