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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__30011){var map__30013 = p__30011;var map__30013__$1 = ((cljs.core.seq_QMARK_.call(null,map__30013))?cljs.core.apply.call(null,cljs.core.hash_map,map__30013):map__30013);var filter_spec = map__30013__$1;var component_descrs = cljs.core.get.call(null,map__30013__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30013__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30013__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__30014){var map__30016 = p__30014;var map__30016__$1 = ((cljs.core.seq_QMARK_.call(null,map__30016))?cljs.core.apply.call(null,cljs.core.hash_map,map__30016):map__30016);var filter_spec = map__30016__$1;var component_descrs = cljs.core.get.call(null,map__30016__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__30016__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__30016__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__30017,component_filter_rq_chan){var map__30022 = p__30017;var map__30022__$1 = ((cljs.core.seq_QMARK_.call(null,map__30022))?cljs.core.apply.call(null,cljs.core.hash_map,map__30022):map__30022);var component_spec = map__30022__$1;var type = cljs.core.get.call(null,map__30022__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__30023 = cljs.core._EQ_;var expr__30024 = type;if(cljs.core.truth_(pred__30023.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__30024)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30023.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__30024)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30023.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__30024)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30023.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__30024)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__30023.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__30024)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30024))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__30026,component_filter_rq_chan){var map__30028 = p__30026;var map__30028__$1 = ((cljs.core.seq_QMARK_.call(null,map__30028))?cljs.core.apply.call(null,cljs.core.hash_map,map__30028):map__30028);var component_spec = map__30028__$1;var visible = cljs.core.get.call(null,map__30028__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__30028__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__30028__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__30028__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30030 = schema.core.Any;var input_schema30031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map30029","map30029",-756466906,null))], null);var input_checker30032 = schema.core.checker.call(null,input_schema30031);var output_checker30033 = schema.core.checker.call(null,output_schema30030);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30030,input_schema30031,input_checker30032,output_checker30033){
return (function render_STAR_(G__30034){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30034], null);var temp__4126__auto___30052 = input_checker30032.call(null,args__6035__auto___30051);if(cljs.core.truth_(temp__4126__auto___30052))
{var error__6036__auto___30053 = temp__4126__auto___30052;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30053)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30053,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30051,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30031,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30029 = G__30034;while(true){
if(cljs.core.map_QMARK_.call(null,map30029))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30029)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30029,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map30029,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map30029,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30030,input_schema30031,input_checker30032,output_checker30033){
return (function iter__30043(s__30044){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30030,input_schema30031,input_checker30032,output_checker30033){
return (function (){var s__30044__$1 = s__30044;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30044__$1);if(temp__4126__auto__)
{var s__30044__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30044__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__30044__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__30046 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__30045 = (0);while(true){
if((i__30045 < size__4376__auto__))
{var map__30049 = cljs.core._nth.call(null,c__4375__auto__,i__30045);var map__30049__$1 = ((cljs.core.seq_QMARK_.call(null,map__30049))?cljs.core.apply.call(null,cljs.core.hash_map,map__30049):map__30049);var component_spec = map__30049__$1;var id = cljs.core.get.call(null,map__30049__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__30046,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__30054 = (i__30045 + (1));
i__30045 = G__30054;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30046),iter__30043.call(null,cljs.core.chunk_rest.call(null,s__30044__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30046),null);
}
} else
{var map__30050 = cljs.core.first.call(null,s__30044__$2);var map__30050__$1 = ((cljs.core.seq_QMARK_.call(null,map__30050))?cljs.core.apply.call(null,cljs.core.hash_map,map__30050):map__30050);var component_spec = map__30050__$1;var id = cljs.core.get.call(null,map__30050__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__30043.call(null,cljs.core.rest.call(null,s__30044__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30030,input_schema30031,input_checker30032,output_checker30033))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema30030,input_schema30031,input_checker30032,output_checker30033))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30055 = output_checker30033.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30055))
{var error__6036__auto___30056 = temp__4126__auto___30055;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30056)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30056,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30030,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30030,input_schema30031,input_checker30032,output_checker30033))
,schema.core.make_fn_schema.call(null,output_schema30030,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30031], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30393 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30063 = schema.core.Any;var input_schema30064 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30060","map30060",911122969,null))], null);var input_checker30065 = schema.core.checker.call(null,input_schema30064);var output_checker30066 = schema.core.checker.call(null,output_schema30063);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function constructor30058(G__30067){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30067], null);var temp__4126__auto___30395 = input_checker30065.call(null,args__6035__auto___30394);if(cljs.core.truth_(temp__4126__auto___30395))
{var error__6036__auto___30396 = temp__4126__auto___30395;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30058","constructor30058",-399500452,null),cljs.core.pr_str.call(null,error__6036__auto___30396)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30396,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30394,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30064,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30060 = G__30067;while(true){
if(cljs.core.map_QMARK_.call(null,map30060))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30060)));
}
var map30062 = plumbing.fnk.schema.safe_get.call(null,map30060,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30062,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map30061 = plumbing.fnk.schema.safe_get.call(null,map30060,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map30061,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map30061,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30060,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30229 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30229 = (function (owner,G__30067,map30061,input_checker30065,component_specs,filter_spec,history,output_schema30063,output_checker30066,components,map30060,validate__6034__auto__,input_schema30064,id,map30062,constructor30058,filter_rq_pub,ufv__,url_components,meta30230){
this.owner = owner;
this.G__30067 = G__30067;
this.map30061 = map30061;
this.input_checker30065 = input_checker30065;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.history = history;
this.output_schema30063 = output_schema30063;
this.output_checker30066 = output_checker30066;
this.components = components;
this.map30060 = map30060;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_schema30064 = input_schema30064;
this.id = id;
this.map30062 = map30062;
this.constructor30058 = constructor30058;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta30230 = meta30230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30229.cljs$lang$type = true;
clustermap.components.filter.t30229.cljs$lang$ctorStr = "clustermap.components.filter/t30229";
clustermap.components.filter.t30229.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30229");
});})(owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
;
clustermap.components.filter.t30229.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30229.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
;
clustermap.components.filter.t30229.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30229.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function (_,p__30232,___$1){var self__ = this;
var map__30233 = p__30232;var map__30233__$1 = ((cljs.core.seq_QMARK_.call(null,map__30233))?cljs.core.apply.call(null,cljs.core.hash_map,map__30233):map__30233);var next_props = map__30233__$1;var map__30234 = cljs.core.get.call(null,map__30233__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30234__$1 = ((cljs.core.seq_QMARK_.call(null,map__30234))?cljs.core.apply.call(null,cljs.core.hash_map,map__30234):map__30234);var next_filter_spec = map__30234__$1;var map__30235 = cljs.core.get.call(null,map__30234__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30235__$1 = ((cljs.core.seq_QMARK_.call(null,map__30235))?cljs.core.apply.call(null,cljs.core.hash_map,map__30235):map__30235);var next_url_components = map__30235__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
;
clustermap.components.filter.t30229.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30229.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
;
clustermap.components.filter.t30229.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30229.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30236_30397 = cljs.core.seq.call(null,chs);var chunk__30237_30398 = null;var count__30238_30399 = (0);var i__30239_30400 = (0);while(true){
if((i__30239_30400 < count__30238_30399))
{var vec__30240_30401 = cljs.core._nth.call(null,chunk__30237_30398,i__30239_30400);var component_id_30402 = cljs.core.nth.call(null,vec__30240_30401,(0),null);var ch_30403 = cljs.core.nth.call(null,vec__30240_30401,(1),null);cljs.core.async.close_BANG_.call(null,ch_30403);
{
var G__30404 = seq__30236_30397;
var G__30405 = chunk__30237_30398;
var G__30406 = count__30238_30399;
var G__30407 = (i__30239_30400 + (1));
seq__30236_30397 = G__30404;
chunk__30237_30398 = G__30405;
count__30238_30399 = G__30406;
i__30239_30400 = G__30407;
continue;
}
} else
{var temp__4126__auto___30408 = cljs.core.seq.call(null,seq__30236_30397);if(temp__4126__auto___30408)
{var seq__30236_30409__$1 = temp__4126__auto___30408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30236_30409__$1))
{var c__4408__auto___30410 = cljs.core.chunk_first.call(null,seq__30236_30409__$1);{
var G__30411 = cljs.core.chunk_rest.call(null,seq__30236_30409__$1);
var G__30412 = c__4408__auto___30410;
var G__30413 = cljs.core.count.call(null,c__4408__auto___30410);
var G__30414 = (0);
seq__30236_30397 = G__30411;
chunk__30237_30398 = G__30412;
count__30238_30399 = G__30413;
i__30239_30400 = G__30414;
continue;
}
} else
{var vec__30241_30415 = cljs.core.first.call(null,seq__30236_30409__$1);var component_id_30416 = cljs.core.nth.call(null,vec__30241_30415,(0),null);var ch_30417 = cljs.core.nth.call(null,vec__30241_30415,(1),null);cljs.core.async.close_BANG_.call(null,ch_30417);
{
var G__30418 = cljs.core.next.call(null,seq__30236_30409__$1);
var G__30419 = null;
var G__30420 = (0);
var G__30421 = (0);
seq__30236_30397 = G__30418;
chunk__30237_30398 = G__30419;
count__30238_30399 = G__30420;
i__30239_30400 = G__30421;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
;
clustermap.components.filter.t30229.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30229.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function (state_30337){var state_val_30338 = (state_30337[(1)]);if((state_val_30338 === (7)))
{var inst_30328 = (state_30337[(2)]);var state_30337__$1 = state_30337;if(cljs.core.truth_(inst_30328))
{var statearr_30339_30422 = state_30337__$1;(statearr_30339_30422[(1)] = (25));
} else
{var statearr_30340_30423 = state_30337__$1;(statearr_30340_30423[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (20)))
{var inst_30289 = (state_30337[(7)]);var inst_30247 = (state_30337[(8)]);var inst_30305 = (state_30337[(9)]);var inst_30248 = (state_30337[(10)]);var inst_30254 = (state_30337[(11)]);var inst_30298 = (state_30337[(12)]);var inst_30298__$1 = cljs.core.first.call(null,inst_30289);var inst_30299 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30300 = cljs.core.get.call(null,inst_30248,inst_30298__$1);var inst_30301 = ["FILTER",inst_30247,inst_30298__$1,inst_30300];var inst_30302 = (new cljs.core.PersistentVector(null,4,(5),inst_30299,inst_30301,null));var inst_30303 = cljs.core.clj__GT_js.call(null,inst_30302);var inst_30304 = console.log(inst_30303);var inst_30305__$1 = cljs.core.get.call(null,inst_30254,inst_30298__$1);var state_30337__$1 = (function (){var statearr_30341 = state_30337;(statearr_30341[(13)] = inst_30304);
(statearr_30341[(9)] = inst_30305__$1);
(statearr_30341[(12)] = inst_30298__$1);
return statearr_30341;
})();if(cljs.core.truth_(inst_30305__$1))
{var statearr_30342_30424 = state_30337__$1;(statearr_30342_30424[(1)] = (22));
} else
{var statearr_30343_30425 = state_30337__$1;(statearr_30343_30425[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (27)))
{var inst_30333 = (state_30337[(2)]);var state_30337__$1 = state_30337;var statearr_30344_30426 = state_30337__$1;(statearr_30344_30426[(2)] = inst_30333);
(statearr_30344_30426[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (1)))
{var state_30337__$1 = state_30337;var statearr_30345_30427 = state_30337__$1;(statearr_30345_30427[(2)] = null);
(statearr_30345_30427[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (24)))
{var inst_30289 = (state_30337[(7)]);var inst_30314 = (state_30337[(2)]);var inst_30315 = cljs.core.next.call(null,inst_30289);var inst_30261 = inst_30315;var inst_30262 = null;var inst_30263 = (0);var inst_30264 = (0);var state_30337__$1 = (function (){var statearr_30349 = state_30337;(statearr_30349[(14)] = inst_30262);
(statearr_30349[(15)] = inst_30314);
(statearr_30349[(16)] = inst_30263);
(statearr_30349[(17)] = inst_30264);
(statearr_30349[(18)] = inst_30261);
return statearr_30349;
})();var statearr_30350_30428 = state_30337__$1;(statearr_30350_30428[(2)] = null);
(statearr_30350_30428[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (4)))
{var inst_30244 = (state_30337[(19)]);var inst_30244__$1 = (state_30337[(2)]);var state_30337__$1 = (function (){var statearr_30351 = state_30337;(statearr_30351[(19)] = inst_30244__$1);
return statearr_30351;
})();if(cljs.core.truth_(inst_30244__$1))
{var statearr_30352_30429 = state_30337__$1;(statearr_30352_30429[(1)] = (5));
} else
{var statearr_30353_30430 = state_30337__$1;(statearr_30353_30430[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (15)))
{var inst_30262 = (state_30337[(14)]);var inst_30263 = (state_30337[(16)]);var inst_30264 = (state_30337[(17)]);var inst_30261 = (state_30337[(18)]);var inst_30285 = (state_30337[(2)]);var inst_30286 = (inst_30264 + (1));var tmp30346 = inst_30262;var tmp30347 = inst_30263;var tmp30348 = inst_30261;var inst_30261__$1 = tmp30348;var inst_30262__$1 = tmp30346;var inst_30263__$1 = tmp30347;var inst_30264__$1 = inst_30286;var state_30337__$1 = (function (){var statearr_30354 = state_30337;(statearr_30354[(20)] = inst_30285);
(statearr_30354[(14)] = inst_30262__$1);
(statearr_30354[(16)] = inst_30263__$1);
(statearr_30354[(17)] = inst_30264__$1);
(statearr_30354[(18)] = inst_30261__$1);
return statearr_30354;
})();var statearr_30355_30431 = state_30337__$1;(statearr_30355_30431[(2)] = null);
(statearr_30355_30431[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (21)))
{var inst_30318 = (state_30337[(2)]);var state_30337__$1 = state_30337;var statearr_30356_30432 = state_30337__$1;(statearr_30356_30432[(2)] = inst_30318);
(statearr_30356_30432[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (13)))
{var inst_30269 = (state_30337[(21)]);var inst_30276 = (state_30337[(22)]);var inst_30248 = (state_30337[(10)]);var inst_30278 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30279 = cljs.core.get.call(null,inst_30248,inst_30269);var inst_30280 = [inst_30269,inst_30279];var inst_30281 = (new cljs.core.PersistentVector(null,2,(5),inst_30278,inst_30280,null));var inst_30282 = cljs.core.async.put_BANG_.call(null,inst_30276,inst_30281);var state_30337__$1 = state_30337;var statearr_30357_30433 = state_30337__$1;(statearr_30357_30433[(2)] = inst_30282);
(statearr_30357_30433[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (22)))
{var inst_30305 = (state_30337[(9)]);var inst_30248 = (state_30337[(10)]);var inst_30298 = (state_30337[(12)]);var inst_30307 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30308 = cljs.core.get.call(null,inst_30248,inst_30298);var inst_30309 = [inst_30298,inst_30308];var inst_30310 = (new cljs.core.PersistentVector(null,2,(5),inst_30307,inst_30309,null));var inst_30311 = cljs.core.async.put_BANG_.call(null,inst_30305,inst_30310);var state_30337__$1 = state_30337;var statearr_30358_30434 = state_30337__$1;(statearr_30358_30434[(2)] = inst_30311);
(statearr_30358_30434[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (6)))
{var state_30337__$1 = state_30337;var statearr_30359_30435 = state_30337__$1;(statearr_30359_30435[(2)] = null);
(statearr_30359_30435[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (25)))
{var state_30337__$1 = state_30337;var statearr_30360_30436 = state_30337__$1;(statearr_30360_30436[(2)] = null);
(statearr_30360_30436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (17)))
{var state_30337__$1 = state_30337;var statearr_30361_30437 = state_30337__$1;(statearr_30361_30437[(2)] = null);
(statearr_30361_30437[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (3)))
{var inst_30335 = (state_30337[(2)]);var state_30337__$1 = state_30337;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30337__$1,inst_30335);
} else
{if((state_val_30338 === (12)))
{var inst_30323 = (state_30337[(2)]);var state_30337__$1 = state_30337;var statearr_30362_30438 = state_30337__$1;(statearr_30362_30438[(2)] = inst_30323);
(statearr_30362_30438[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (2)))
{var state_30337__$1 = state_30337;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30337__$1,(4),filter_rq_sub);
} else
{if((state_val_30338 === (23)))
{var state_30337__$1 = state_30337;var statearr_30363_30439 = state_30337__$1;(statearr_30363_30439[(2)] = null);
(statearr_30363_30439[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (19)))
{var inst_30289 = (state_30337[(7)]);var inst_30293 = cljs.core.chunk_first.call(null,inst_30289);var inst_30294 = cljs.core.chunk_rest.call(null,inst_30289);var inst_30295 = cljs.core.count.call(null,inst_30293);var inst_30261 = inst_30294;var inst_30262 = inst_30293;var inst_30263 = inst_30295;var inst_30264 = (0);var state_30337__$1 = (function (){var statearr_30364 = state_30337;(statearr_30364[(14)] = inst_30262);
(statearr_30364[(16)] = inst_30263);
(statearr_30364[(17)] = inst_30264);
(statearr_30364[(18)] = inst_30261);
return statearr_30364;
})();var statearr_30365_30440 = state_30337__$1;(statearr_30365_30440[(2)] = null);
(statearr_30365_30440[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (11)))
{var inst_30289 = (state_30337[(7)]);var inst_30261 = (state_30337[(18)]);var inst_30289__$1 = cljs.core.seq.call(null,inst_30261);var state_30337__$1 = (function (){var statearr_30366 = state_30337;(statearr_30366[(7)] = inst_30289__$1);
return statearr_30366;
})();if(inst_30289__$1)
{var statearr_30367_30441 = state_30337__$1;(statearr_30367_30441[(1)] = (16));
} else
{var statearr_30368_30442 = state_30337__$1;(statearr_30368_30442[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (9)))
{var inst_30325 = (state_30337[(2)]);var state_30337__$1 = (function (){var statearr_30369 = state_30337;(statearr_30369[(23)] = inst_30325);
return statearr_30369;
})();var statearr_30370_30443 = state_30337__$1;(statearr_30370_30443[(2)] = true);
(statearr_30370_30443[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (5)))
{var inst_30247 = (state_30337[(8)]);var inst_30244 = (state_30337[(19)]);var inst_30248 = (state_30337[(10)]);var inst_30247__$1 = cljs.core.nth.call(null,inst_30244,(0),null);var inst_30248__$1 = cljs.core.nth.call(null,inst_30244,(1),null);var inst_30249 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30250 = ["FILTER-RQ",inst_30247__$1,inst_30248__$1];var inst_30251 = (new cljs.core.PersistentVector(null,3,(5),inst_30249,inst_30250,null));var inst_30252 = cljs.core.clj__GT_js.call(null,inst_30251);var inst_30253 = console.log(inst_30252);var inst_30254 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30255 = cljs.core.keys.call(null,inst_30248__$1);var inst_30260 = cljs.core.seq.call(null,inst_30255);var inst_30261 = inst_30260;var inst_30262 = null;var inst_30263 = (0);var inst_30264 = (0);var state_30337__$1 = (function (){var statearr_30371 = state_30337;(statearr_30371[(14)] = inst_30262);
(statearr_30371[(24)] = inst_30253);
(statearr_30371[(16)] = inst_30263);
(statearr_30371[(8)] = inst_30247__$1);
(statearr_30371[(17)] = inst_30264);
(statearr_30371[(10)] = inst_30248__$1);
(statearr_30371[(11)] = inst_30254);
(statearr_30371[(18)] = inst_30261);
return statearr_30371;
})();var statearr_30372_30444 = state_30337__$1;(statearr_30372_30444[(2)] = null);
(statearr_30372_30444[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (14)))
{var state_30337__$1 = state_30337;var statearr_30373_30445 = state_30337__$1;(statearr_30373_30445[(2)] = null);
(statearr_30373_30445[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (26)))
{var state_30337__$1 = state_30337;var statearr_30374_30446 = state_30337__$1;(statearr_30374_30446[(2)] = null);
(statearr_30374_30446[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (16)))
{var inst_30289 = (state_30337[(7)]);var inst_30291 = cljs.core.chunked_seq_QMARK_.call(null,inst_30289);var state_30337__$1 = state_30337;if(inst_30291)
{var statearr_30375_30447 = state_30337__$1;(statearr_30375_30447[(1)] = (19));
} else
{var statearr_30376_30448 = state_30337__$1;(statearr_30376_30448[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (10)))
{var inst_30262 = (state_30337[(14)]);var inst_30269 = (state_30337[(21)]);var inst_30247 = (state_30337[(8)]);var inst_30276 = (state_30337[(22)]);var inst_30264 = (state_30337[(17)]);var inst_30248 = (state_30337[(10)]);var inst_30254 = (state_30337[(11)]);var inst_30269__$1 = cljs.core._nth.call(null,inst_30262,inst_30264);var inst_30270 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30271 = cljs.core.get.call(null,inst_30248,inst_30269__$1);var inst_30272 = ["FILTER",inst_30247,inst_30269__$1,inst_30271];var inst_30273 = (new cljs.core.PersistentVector(null,4,(5),inst_30270,inst_30272,null));var inst_30274 = cljs.core.clj__GT_js.call(null,inst_30273);var inst_30275 = console.log(inst_30274);var inst_30276__$1 = cljs.core.get.call(null,inst_30254,inst_30269__$1);var state_30337__$1 = (function (){var statearr_30377 = state_30337;(statearr_30377[(21)] = inst_30269__$1);
(statearr_30377[(25)] = inst_30275);
(statearr_30377[(22)] = inst_30276__$1);
return statearr_30377;
})();if(cljs.core.truth_(inst_30276__$1))
{var statearr_30378_30449 = state_30337__$1;(statearr_30378_30449[(1)] = (13));
} else
{var statearr_30379_30450 = state_30337__$1;(statearr_30379_30450[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (18)))
{var inst_30321 = (state_30337[(2)]);var state_30337__$1 = state_30337;var statearr_30380_30451 = state_30337__$1;(statearr_30380_30451[(2)] = inst_30321);
(statearr_30380_30451[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30338 === (8)))
{var inst_30263 = (state_30337[(16)]);var inst_30264 = (state_30337[(17)]);var inst_30266 = (inst_30264 < inst_30263);var inst_30267 = inst_30266;var state_30337__$1 = state_30337;if(cljs.core.truth_(inst_30267))
{var statearr_30381_30452 = state_30337__$1;(statearr_30381_30452[(1)] = (10));
} else
{var statearr_30382_30453 = state_30337__$1;(statearr_30382_30453[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30386[(0)] = state_machine__9111__auto__);
(statearr_30386[(1)] = (1));
return statearr_30386;
});
var state_machine__9111__auto____1 = (function (state_30337){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30337);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30387){if((e30387 instanceof Object))
{var ex__9114__auto__ = e30387;var statearr_30388_30454 = state_30337;(statearr_30388_30454[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30337);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30387;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30455 = state_30337;
state_30337 = G__30455;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30337){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
})();var state__9127__auto__ = (function (){var statearr_30389 = f__9126__auto__.call(null);(statearr_30389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
;
clustermap.components.filter.t30229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function (_30231){var self__ = this;
var _30231__$1 = this;return self__.meta30230;
});})(owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
;
clustermap.components.filter.t30229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function (_30231,meta30230__$1){var self__ = this;
var _30231__$1 = this;return (new clustermap.components.filter.t30229(self__.owner,self__.G__30067,self__.map30061,self__.input_checker30065,self__.component_specs,self__.filter_spec,self__.history,self__.output_schema30063,self__.output_checker30066,self__.components,self__.map30060,self__.validate__6034__auto__,self__.input_schema30064,self__.id,self__.map30062,self__.constructor30058,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta30230__$1));
});})(owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
;
clustermap.components.filter.__GT_t30229 = ((function (owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066){
return (function __GT_t30229(owner__$1,G__30067__$1,map30061__$1,input_checker30065__$1,component_specs__$1,filter_spec__$1,history__$1,output_schema30063__$1,output_checker30066__$1,components__$1,map30060__$1,validate__6034__auto____$1,input_schema30064__$1,id__$1,map30062__$1,constructor30058__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30230){return (new clustermap.components.filter.t30229(owner__$1,G__30067__$1,map30061__$1,input_checker30065__$1,component_specs__$1,filter_spec__$1,history__$1,output_schema30063__$1,output_checker30066__$1,components__$1,map30060__$1,validate__6034__auto____$1,input_schema30064__$1,id__$1,map30062__$1,constructor30058__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30230));
});})(owner,history,filter_rq_pub,map30061,url_components,components,component_specs,id,filter_spec,map30062,validate__6034__auto__,ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
;
}
return (new clustermap.components.filter.t30229(owner,G__30067,map30061,input_checker30065,component_specs,filter_spec,history,output_schema30063,output_checker30066,components,map30060,validate__6034__auto__,input_schema30064,id,map30062,constructor30058,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30456 = output_checker30066.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30456))
{var error__6036__auto___30457 = temp__4126__auto___30456;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30058","constructor30058",-399500452,null),cljs.core.pr_str.call(null,error__6036__auto___30457)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30457,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30063,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30063,input_schema30064,input_checker30065,output_checker30066))
,schema.core.make_fn_schema.call(null,output_schema30063,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30064], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30393){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner30057,p__30390){var vec__30392 = p__30390;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30392,(0),null);return component_fnk__7881__auto___30393.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner30057),new cljs.core.Keyword(null,"owner","owner",-392611939),owner30057,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner30057,var_args){
var p__30390 = null;if (arguments.length > 2) {
  p__30390 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner30057,p__30390);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30458){
var data__7882__auto__ = cljs.core.first(arglist__30458);
arglist__30458 = cljs.core.next(arglist__30458);
var owner30057 = cljs.core.first(arglist__30458);
var p__30390 = cljs.core.rest(arglist__30458);
return filter_component__delegate(data__7882__auto__,owner30057,p__30390);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30393))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m30059){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m30059);
});
__GT_filter_component = function(cursor__7850__auto__,m30059){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m30059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
