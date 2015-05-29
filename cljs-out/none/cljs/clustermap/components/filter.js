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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__27657){var map__27659 = p__27657;var map__27659__$1 = ((cljs.core.seq_QMARK_.call(null,map__27659))?cljs.core.apply.call(null,cljs.core.hash_map,map__27659):map__27659);var filter_spec = map__27659__$1;var component_descrs = cljs.core.get.call(null,map__27659__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__27659__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__27659__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__27660){var map__27662 = p__27660;var map__27662__$1 = ((cljs.core.seq_QMARK_.call(null,map__27662))?cljs.core.apply.call(null,cljs.core.hash_map,map__27662):map__27662);var filter_spec = map__27662__$1;var component_descrs = cljs.core.get.call(null,map__27662__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__27662__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__27662__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__27663,component_filter_rq_chan){var map__27668 = p__27663;var map__27668__$1 = ((cljs.core.seq_QMARK_.call(null,map__27668))?cljs.core.apply.call(null,cljs.core.hash_map,map__27668):map__27668);var component_spec = map__27668__$1;var type = cljs.core.get.call(null,map__27668__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__27669 = cljs.core._EQ_;var expr__27670 = type;if(cljs.core.truth_(pred__27669.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__27670)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__27669.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__27670)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__27669.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__27670)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__27669.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__27670)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__27669.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__27670)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27670))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__27672,component_filter_rq_chan){var map__27674 = p__27672;var map__27674__$1 = ((cljs.core.seq_QMARK_.call(null,map__27674))?cljs.core.apply.call(null,cljs.core.hash_map,map__27674):map__27674);var component_spec = map__27674__$1;var skip_label = cljs.core.get.call(null,map__27674__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__27674__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__27674__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(filter_spec)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema27676 = schema.core.Any;var input_schema27677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map27675","map27675",751982113,null))], null);var input_checker27678 = schema.core.checker.call(null,input_schema27677);var output_checker27679 = schema.core.checker.call(null,output_schema27676);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema27676,input_schema27677,input_checker27678,output_checker27679){
return (function render_STAR_(G__27680){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___27697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27680], null);var temp__4126__auto___27698 = input_checker27678.call(null,args__13910__auto___27697);if(cljs.core.truth_(temp__4126__auto___27698))
{var error__13911__auto___27699 = temp__4126__auto___27698;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___27699)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___27699,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___27697,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27677,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map27675 = G__27680;while(true){
if(cljs.core.map_QMARK_.call(null,map27675))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map27675)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map27675,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map27675,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map27675,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__12252__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__13909__auto__,ufv__,output_schema27676,input_schema27677,input_checker27678,output_checker27679){
return (function iter__27689(s__27690){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__13909__auto__,ufv__,output_schema27676,input_schema27677,input_checker27678,output_checker27679){
return (function (){var s__27690__$1 = s__27690;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27690__$1);if(temp__4126__auto__)
{var s__27690__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27690__$2))
{var c__12250__auto__ = cljs.core.chunk_first.call(null,s__27690__$2);var size__12251__auto__ = cljs.core.count.call(null,c__12250__auto__);var b__27692 = cljs.core.chunk_buffer.call(null,size__12251__auto__);if((function (){var i__27691 = (0);while(true){
if((i__27691 < size__12251__auto__))
{var map__27695 = cljs.core._nth.call(null,c__12250__auto__,i__27691);var map__27695__$1 = ((cljs.core.seq_QMARK_.call(null,map__27695))?cljs.core.apply.call(null,cljs.core.hash_map,map__27695):map__27695);var component_spec = map__27695__$1;var id = cljs.core.get.call(null,map__27695__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__27692,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__27700 = (i__27691 + (1));
i__27691 = G__27700;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27692),iter__27689.call(null,cljs.core.chunk_rest.call(null,s__27690__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27692),null);
}
} else
{var map__27696 = cljs.core.first.call(null,s__27690__$2);var map__27696__$1 = ((cljs.core.seq_QMARK_.call(null,map__27696))?cljs.core.apply.call(null,cljs.core.hash_map,map__27696):map__27696);var component_spec = map__27696__$1;var id = cljs.core.get.call(null,map__27696__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__27689.call(null,cljs.core.rest.call(null,s__27690__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__13909__auto__,ufv__,output_schema27676,input_schema27677,input_checker27678,output_checker27679))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__13909__auto__,ufv__,output_schema27676,input_schema27677,input_checker27678,output_checker27679))
;return iter__12252__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___27701 = output_checker27679.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___27701))
{var error__13911__auto___27702 = temp__4126__auto___27701;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___27702)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___27702,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27676,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema27676,input_schema27677,input_checker27678,output_checker27679))
,schema.core.make_fn_schema.call(null,output_schema27676,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27677], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__15756__auto___28039 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema27709 = schema.core.Any;var input_schema27710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map27706","map27706",316981983,null))], null);var input_checker27711 = schema.core.checker.call(null,input_schema27710);var output_checker27712 = schema.core.checker.call(null,output_schema27709);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function constructor27704(G__27713){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___28040 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27713], null);var temp__4126__auto___28041 = input_checker27711.call(null,args__13910__auto___28040);if(cljs.core.truth_(temp__4126__auto___28041))
{var error__13911__auto___28042 = temp__4126__auto___28041;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor27704","constructor27704",-1792428955,null),cljs.core.pr_str.call(null,error__13911__auto___28042)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28042,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___28040,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27710,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map27706 = G__27713;while(true){
if(cljs.core.map_QMARK_.call(null,map27706))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map27706)));
}
var map27708 = plumbing.fnk.schema.safe_get.call(null,map27706,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map27708,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map27707 = plumbing.fnk.schema.safe_get.call(null,map27706,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map27707,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map27707,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map27706,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t27875 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t27875 = (function (owner,constructor27704,output_checker27712,input_schema27710,validate__13909__auto__,G__27713,component_specs,filter_spec,map27708,history,input_checker27711,output_schema27709,components,id,filter_rq_pub,ufv__,map27707,url_components,map27706,meta27876){
this.owner = owner;
this.constructor27704 = constructor27704;
this.output_checker27712 = output_checker27712;
this.input_schema27710 = input_schema27710;
this.validate__13909__auto__ = validate__13909__auto__;
this.G__27713 = G__27713;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.map27708 = map27708;
this.history = history;
this.input_checker27711 = input_checker27711;
this.output_schema27709 = output_schema27709;
this.components = components;
this.id = id;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.map27707 = map27707;
this.url_components = url_components;
this.map27706 = map27706;
this.meta27876 = meta27876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t27875.cljs$lang$type = true;
clustermap.components.filter.t27875.cljs$lang$ctorStr = "clustermap.components.filter/t27875";
clustermap.components.filter.t27875.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.filter/t27875");
});})(owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
;
clustermap.components.filter.t27875.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t27875.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
;
clustermap.components.filter.t27875.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t27875.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function (_,p__27878,___$1){var self__ = this;
var map__27879 = p__27878;var map__27879__$1 = ((cljs.core.seq_QMARK_.call(null,map__27879))?cljs.core.apply.call(null,cljs.core.hash_map,map__27879):map__27879);var next_props = map__27879__$1;var map__27880 = cljs.core.get.call(null,map__27879__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__27880__$1 = ((cljs.core.seq_QMARK_.call(null,map__27880))?cljs.core.apply.call(null,cljs.core.hash_map,map__27880):map__27880);var next_filter_spec = map__27880__$1;var map__27881 = cljs.core.get.call(null,map__27880__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__27881__$1 = ((cljs.core.seq_QMARK_.call(null,map__27881))?cljs.core.apply.call(null,cljs.core.hash_map,map__27881):map__27881);var next_url_components = map__27881__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__11502__auto__ = self__.history;if(cljs.core.truth_(and__11502__auto__))
{return cljs.core.not_EQ_.call(null,next_url_components,self__.url_components);
} else
{return and__11502__auto__;
}
})()))
{var token = self__.history.getToken();var encoded_filter = clustermap.filters.filter_url_param_value.call(null,next_url_components);var new_token = clustermap.formats.url.add_param_to_token.call(null,token,self__.id,encoded_filter);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TOKEN-CHANGE",token,new_token], null)));
return self__.history.setToken(new_token);
} else
{return null;
}
});})(owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
;
clustermap.components.filter.t27875.prototype.om$core$IRender$ = true;
clustermap.components.filter.t27875.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
;
clustermap.components.filter.t27875.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t27875.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__27882_28043 = cljs.core.seq.call(null,chs);var chunk__27883_28044 = null;var count__27884_28045 = (0);var i__27885_28046 = (0);while(true){
if((i__27885_28046 < count__27884_28045))
{var vec__27886_28047 = cljs.core._nth.call(null,chunk__27883_28044,i__27885_28046);var component_id_28048 = cljs.core.nth.call(null,vec__27886_28047,(0),null);var ch_28049 = cljs.core.nth.call(null,vec__27886_28047,(1),null);cljs.core.async.close_BANG_.call(null,ch_28049);
{
var G__28050 = seq__27882_28043;
var G__28051 = chunk__27883_28044;
var G__28052 = count__27884_28045;
var G__28053 = (i__27885_28046 + (1));
seq__27882_28043 = G__28050;
chunk__27883_28044 = G__28051;
count__27884_28045 = G__28052;
i__27885_28046 = G__28053;
continue;
}
} else
{var temp__4126__auto___28054 = cljs.core.seq.call(null,seq__27882_28043);if(temp__4126__auto___28054)
{var seq__27882_28055__$1 = temp__4126__auto___28054;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27882_28055__$1))
{var c__12283__auto___28056 = cljs.core.chunk_first.call(null,seq__27882_28055__$1);{
var G__28057 = cljs.core.chunk_rest.call(null,seq__27882_28055__$1);
var G__28058 = c__12283__auto___28056;
var G__28059 = cljs.core.count.call(null,c__12283__auto___28056);
var G__28060 = (0);
seq__27882_28043 = G__28057;
chunk__27883_28044 = G__28058;
count__27884_28045 = G__28059;
i__27885_28046 = G__28060;
continue;
}
} else
{var vec__27887_28061 = cljs.core.first.call(null,seq__27882_28055__$1);var component_id_28062 = cljs.core.nth.call(null,vec__27887_28061,(0),null);var ch_28063 = cljs.core.nth.call(null,vec__27887_28061,(1),null);cljs.core.async.close_BANG_.call(null,ch_28063);
{
var G__28064 = cljs.core.next.call(null,seq__27882_28055__$1);
var G__28065 = null;
var G__28066 = (0);
var G__28067 = (0);
seq__27882_28043 = G__28064;
chunk__27883_28044 = G__28065;
count__27884_28045 = G__28066;
i__27885_28046 = G__28067;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
;
clustermap.components.filter.t27875.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t27875.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function (state_27983){var state_val_27984 = (state_27983[(1)]);if((state_val_27984 === (7)))
{var inst_27974 = (state_27983[(2)]);var state_27983__$1 = state_27983;if(cljs.core.truth_(inst_27974))
{var statearr_27985_28068 = state_27983__$1;(statearr_27985_28068[(1)] = (25));
} else
{var statearr_27986_28069 = state_27983__$1;(statearr_27986_28069[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (20)))
{var inst_27951 = (state_27983[(7)]);var inst_27893 = (state_27983[(8)]);var inst_27900 = (state_27983[(9)]);var inst_27935 = (state_27983[(10)]);var inst_27944 = (state_27983[(11)]);var inst_27894 = (state_27983[(12)]);var inst_27944__$1 = cljs.core.first.call(null,inst_27935);var inst_27945 = cljs.core.PersistentVector.EMPTY_NODE;var inst_27946 = cljs.core.get.call(null,inst_27894,inst_27944__$1);var inst_27947 = ["FILTER",inst_27893,inst_27944__$1,inst_27946];var inst_27948 = (new cljs.core.PersistentVector(null,4,(5),inst_27945,inst_27947,null));var inst_27949 = cljs.core.clj__GT_js.call(null,inst_27948);var inst_27950 = console.log(inst_27949);var inst_27951__$1 = cljs.core.get.call(null,inst_27900,inst_27944__$1);var state_27983__$1 = (function (){var statearr_27987 = state_27983;(statearr_27987[(7)] = inst_27951__$1);
(statearr_27987[(13)] = inst_27950);
(statearr_27987[(11)] = inst_27944__$1);
return statearr_27987;
})();if(cljs.core.truth_(inst_27951__$1))
{var statearr_27988_28070 = state_27983__$1;(statearr_27988_28070[(1)] = (22));
} else
{var statearr_27989_28071 = state_27983__$1;(statearr_27989_28071[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (27)))
{var inst_27979 = (state_27983[(2)]);var state_27983__$1 = state_27983;var statearr_27990_28072 = state_27983__$1;(statearr_27990_28072[(2)] = inst_27979);
(statearr_27990_28072[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (1)))
{var state_27983__$1 = state_27983;var statearr_27991_28073 = state_27983__$1;(statearr_27991_28073[(2)] = null);
(statearr_27991_28073[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (24)))
{var inst_27935 = (state_27983[(10)]);var inst_27960 = (state_27983[(2)]);var inst_27961 = cljs.core.next.call(null,inst_27935);var inst_27907 = inst_27961;var inst_27908 = null;var inst_27909 = (0);var inst_27910 = (0);var state_27983__$1 = (function (){var statearr_27995 = state_27983;(statearr_27995[(14)] = inst_27910);
(statearr_27995[(15)] = inst_27908);
(statearr_27995[(16)] = inst_27909);
(statearr_27995[(17)] = inst_27907);
(statearr_27995[(18)] = inst_27960);
return statearr_27995;
})();var statearr_27996_28074 = state_27983__$1;(statearr_27996_28074[(2)] = null);
(statearr_27996_28074[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (4)))
{var inst_27890 = (state_27983[(19)]);var inst_27890__$1 = (state_27983[(2)]);var state_27983__$1 = (function (){var statearr_27997 = state_27983;(statearr_27997[(19)] = inst_27890__$1);
return statearr_27997;
})();if(cljs.core.truth_(inst_27890__$1))
{var statearr_27998_28075 = state_27983__$1;(statearr_27998_28075[(1)] = (5));
} else
{var statearr_27999_28076 = state_27983__$1;(statearr_27999_28076[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (15)))
{var inst_27910 = (state_27983[(14)]);var inst_27908 = (state_27983[(15)]);var inst_27909 = (state_27983[(16)]);var inst_27907 = (state_27983[(17)]);var inst_27931 = (state_27983[(2)]);var inst_27932 = (inst_27910 + (1));var tmp27992 = inst_27908;var tmp27993 = inst_27909;var tmp27994 = inst_27907;var inst_27907__$1 = tmp27994;var inst_27908__$1 = tmp27992;var inst_27909__$1 = tmp27993;var inst_27910__$1 = inst_27932;var state_27983__$1 = (function (){var statearr_28000 = state_27983;(statearr_28000[(14)] = inst_27910__$1);
(statearr_28000[(15)] = inst_27908__$1);
(statearr_28000[(16)] = inst_27909__$1);
(statearr_28000[(20)] = inst_27931);
(statearr_28000[(17)] = inst_27907__$1);
return statearr_28000;
})();var statearr_28001_28077 = state_27983__$1;(statearr_28001_28077[(2)] = null);
(statearr_28001_28077[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (21)))
{var inst_27964 = (state_27983[(2)]);var state_27983__$1 = state_27983;var statearr_28002_28078 = state_27983__$1;(statearr_28002_28078[(2)] = inst_27964);
(statearr_28002_28078[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (13)))
{var inst_27922 = (state_27983[(21)]);var inst_27894 = (state_27983[(12)]);var inst_27915 = (state_27983[(22)]);var inst_27924 = cljs.core.PersistentVector.EMPTY_NODE;var inst_27925 = cljs.core.get.call(null,inst_27894,inst_27915);var inst_27926 = [inst_27915,inst_27925];var inst_27927 = (new cljs.core.PersistentVector(null,2,(5),inst_27924,inst_27926,null));var inst_27928 = cljs.core.async.put_BANG_.call(null,inst_27922,inst_27927);var state_27983__$1 = state_27983;var statearr_28003_28079 = state_27983__$1;(statearr_28003_28079[(2)] = inst_27928);
(statearr_28003_28079[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (22)))
{var inst_27951 = (state_27983[(7)]);var inst_27944 = (state_27983[(11)]);var inst_27894 = (state_27983[(12)]);var inst_27953 = cljs.core.PersistentVector.EMPTY_NODE;var inst_27954 = cljs.core.get.call(null,inst_27894,inst_27944);var inst_27955 = [inst_27944,inst_27954];var inst_27956 = (new cljs.core.PersistentVector(null,2,(5),inst_27953,inst_27955,null));var inst_27957 = cljs.core.async.put_BANG_.call(null,inst_27951,inst_27956);var state_27983__$1 = state_27983;var statearr_28004_28080 = state_27983__$1;(statearr_28004_28080[(2)] = inst_27957);
(statearr_28004_28080[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (6)))
{var state_27983__$1 = state_27983;var statearr_28005_28081 = state_27983__$1;(statearr_28005_28081[(2)] = null);
(statearr_28005_28081[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (25)))
{var state_27983__$1 = state_27983;var statearr_28006_28082 = state_27983__$1;(statearr_28006_28082[(2)] = null);
(statearr_28006_28082[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (17)))
{var state_27983__$1 = state_27983;var statearr_28007_28083 = state_27983__$1;(statearr_28007_28083[(2)] = null);
(statearr_28007_28083[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (3)))
{var inst_27981 = (state_27983[(2)]);var state_27983__$1 = state_27983;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27983__$1,inst_27981);
} else
{if((state_val_27984 === (12)))
{var inst_27969 = (state_27983[(2)]);var state_27983__$1 = state_27983;var statearr_28008_28084 = state_27983__$1;(statearr_28008_28084[(2)] = inst_27969);
(statearr_28008_28084[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (2)))
{var state_27983__$1 = state_27983;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27983__$1,(4),filter_rq_sub);
} else
{if((state_val_27984 === (23)))
{var state_27983__$1 = state_27983;var statearr_28009_28085 = state_27983__$1;(statearr_28009_28085[(2)] = null);
(statearr_28009_28085[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (19)))
{var inst_27935 = (state_27983[(10)]);var inst_27939 = cljs.core.chunk_first.call(null,inst_27935);var inst_27940 = cljs.core.chunk_rest.call(null,inst_27935);var inst_27941 = cljs.core.count.call(null,inst_27939);var inst_27907 = inst_27940;var inst_27908 = inst_27939;var inst_27909 = inst_27941;var inst_27910 = (0);var state_27983__$1 = (function (){var statearr_28010 = state_27983;(statearr_28010[(14)] = inst_27910);
(statearr_28010[(15)] = inst_27908);
(statearr_28010[(16)] = inst_27909);
(statearr_28010[(17)] = inst_27907);
return statearr_28010;
})();var statearr_28011_28086 = state_27983__$1;(statearr_28011_28086[(2)] = null);
(statearr_28011_28086[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (11)))
{var inst_27907 = (state_27983[(17)]);var inst_27935 = (state_27983[(10)]);var inst_27935__$1 = cljs.core.seq.call(null,inst_27907);var state_27983__$1 = (function (){var statearr_28012 = state_27983;(statearr_28012[(10)] = inst_27935__$1);
return statearr_28012;
})();if(inst_27935__$1)
{var statearr_28013_28087 = state_27983__$1;(statearr_28013_28087[(1)] = (16));
} else
{var statearr_28014_28088 = state_27983__$1;(statearr_28014_28088[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (9)))
{var inst_27971 = (state_27983[(2)]);var state_27983__$1 = (function (){var statearr_28015 = state_27983;(statearr_28015[(23)] = inst_27971);
return statearr_28015;
})();var statearr_28016_28089 = state_27983__$1;(statearr_28016_28089[(2)] = true);
(statearr_28016_28089[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (5)))
{var inst_27893 = (state_27983[(8)]);var inst_27890 = (state_27983[(19)]);var inst_27894 = (state_27983[(12)]);var inst_27893__$1 = cljs.core.nth.call(null,inst_27890,(0),null);var inst_27894__$1 = cljs.core.nth.call(null,inst_27890,(1),null);var inst_27895 = cljs.core.PersistentVector.EMPTY_NODE;var inst_27896 = ["FILTER-RQ",inst_27893__$1,inst_27894__$1];var inst_27897 = (new cljs.core.PersistentVector(null,3,(5),inst_27895,inst_27896,null));var inst_27898 = cljs.core.clj__GT_js.call(null,inst_27897);var inst_27899 = console.log(inst_27898);var inst_27900 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_27901 = cljs.core.keys.call(null,inst_27894__$1);var inst_27906 = cljs.core.seq.call(null,inst_27901);var inst_27907 = inst_27906;var inst_27908 = null;var inst_27909 = (0);var inst_27910 = (0);var state_27983__$1 = (function (){var statearr_28017 = state_27983;(statearr_28017[(14)] = inst_27910);
(statearr_28017[(15)] = inst_27908);
(statearr_28017[(8)] = inst_27893__$1);
(statearr_28017[(16)] = inst_27909);
(statearr_28017[(17)] = inst_27907);
(statearr_28017[(9)] = inst_27900);
(statearr_28017[(24)] = inst_27899);
(statearr_28017[(12)] = inst_27894__$1);
return statearr_28017;
})();var statearr_28018_28090 = state_27983__$1;(statearr_28018_28090[(2)] = null);
(statearr_28018_28090[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (14)))
{var state_27983__$1 = state_27983;var statearr_28019_28091 = state_27983__$1;(statearr_28019_28091[(2)] = null);
(statearr_28019_28091[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (26)))
{var state_27983__$1 = state_27983;var statearr_28020_28092 = state_27983__$1;(statearr_28020_28092[(2)] = null);
(statearr_28020_28092[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (16)))
{var inst_27935 = (state_27983[(10)]);var inst_27937 = cljs.core.chunked_seq_QMARK_.call(null,inst_27935);var state_27983__$1 = state_27983;if(inst_27937)
{var statearr_28021_28093 = state_27983__$1;(statearr_28021_28093[(1)] = (19));
} else
{var statearr_28022_28094 = state_27983__$1;(statearr_28022_28094[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (10)))
{var inst_27910 = (state_27983[(14)]);var inst_27908 = (state_27983[(15)]);var inst_27922 = (state_27983[(21)]);var inst_27893 = (state_27983[(8)]);var inst_27900 = (state_27983[(9)]);var inst_27894 = (state_27983[(12)]);var inst_27915 = (state_27983[(22)]);var inst_27915__$1 = cljs.core._nth.call(null,inst_27908,inst_27910);var inst_27916 = cljs.core.PersistentVector.EMPTY_NODE;var inst_27917 = cljs.core.get.call(null,inst_27894,inst_27915__$1);var inst_27918 = ["FILTER",inst_27893,inst_27915__$1,inst_27917];var inst_27919 = (new cljs.core.PersistentVector(null,4,(5),inst_27916,inst_27918,null));var inst_27920 = cljs.core.clj__GT_js.call(null,inst_27919);var inst_27921 = console.log(inst_27920);var inst_27922__$1 = cljs.core.get.call(null,inst_27900,inst_27915__$1);var state_27983__$1 = (function (){var statearr_28023 = state_27983;(statearr_28023[(25)] = inst_27921);
(statearr_28023[(21)] = inst_27922__$1);
(statearr_28023[(22)] = inst_27915__$1);
return statearr_28023;
})();if(cljs.core.truth_(inst_27922__$1))
{var statearr_28024_28095 = state_27983__$1;(statearr_28024_28095[(1)] = (13));
} else
{var statearr_28025_28096 = state_27983__$1;(statearr_28025_28096[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (18)))
{var inst_27967 = (state_27983[(2)]);var state_27983__$1 = state_27983;var statearr_28026_28097 = state_27983__$1;(statearr_28026_28097[(2)] = inst_27967);
(statearr_28026_28097[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27984 === (8)))
{var inst_27910 = (state_27983[(14)]);var inst_27909 = (state_27983[(16)]);var inst_27912 = (inst_27910 < inst_27909);var inst_27913 = inst_27912;var state_27983__$1 = state_27983;if(cljs.core.truth_(inst_27913))
{var statearr_28027_28098 = state_27983__$1;(statearr_28027_28098[(1)] = (10));
} else
{var statearr_28028_28099 = state_27983__$1;(statearr_28028_28099[(1)] = (11));
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
});})(c__18867__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
;return ((function (switch__18811__auto__,c__18867__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_28032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28032[(0)] = state_machine__18812__auto__);
(statearr_28032[(1)] = (1));
return statearr_28032;
});
var state_machine__18812__auto____1 = (function (state_27983){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_27983);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e28033){if((e28033 instanceof Object))
{var ex__18815__auto__ = e28033;var statearr_28034_28100 = state_27983;(statearr_28034_28100[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27983);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28033;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28101 = state_27983;
state_27983 = G__28101;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_27983){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_27983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
})();var state__18869__auto__ = (function (){var statearr_28035 = f__18868__auto__.call(null);(statearr_28035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_28035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
);
return c__18867__auto__;
});})(owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
;
clustermap.components.filter.t27875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function (_27877){var self__ = this;
var _27877__$1 = this;return self__.meta27876;
});})(owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
;
clustermap.components.filter.t27875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function (_27877,meta27876__$1){var self__ = this;
var _27877__$1 = this;return (new clustermap.components.filter.t27875(self__.owner,self__.constructor27704,self__.output_checker27712,self__.input_schema27710,self__.validate__13909__auto__,self__.G__27713,self__.component_specs,self__.filter_spec,self__.map27708,self__.history,self__.input_checker27711,self__.output_schema27709,self__.components,self__.id,self__.filter_rq_pub,self__.ufv__,self__.map27707,self__.url_components,self__.map27706,meta27876__$1));
});})(owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
;
clustermap.components.filter.__GT_t27875 = ((function (owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712){
return (function __GT_t27875(owner__$1,constructor27704__$1,output_checker27712__$1,input_schema27710__$1,validate__13909__auto____$1,G__27713__$1,component_specs__$1,filter_spec__$1,map27708__$1,history__$1,input_checker27711__$1,output_schema27709__$1,components__$1,id__$1,filter_rq_pub__$1,ufv____$1,map27707__$1,url_components__$1,map27706__$1,meta27876){return (new clustermap.components.filter.t27875(owner__$1,constructor27704__$1,output_checker27712__$1,input_schema27710__$1,validate__13909__auto____$1,G__27713__$1,component_specs__$1,filter_spec__$1,map27708__$1,history__$1,input_checker27711__$1,output_schema27709__$1,components__$1,id__$1,filter_rq_pub__$1,ufv____$1,map27707__$1,url_components__$1,map27706__$1,meta27876));
});})(owner,history,filter_rq_pub,map27707,url_components,components,component_specs,id,filter_spec,map27708,validate__13909__auto__,ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
;
}
return (new clustermap.components.filter.t27875(owner,constructor27704,output_checker27712,input_schema27710,validate__13909__auto__,G__27713,component_specs,filter_spec,map27708,history,input_checker27711,output_schema27709,components,id,filter_rq_pub,ufv__,map27707,url_components,map27706,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___28102 = output_checker27712.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___28102))
{var error__13911__auto___28103 = temp__4126__auto___28102;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor27704","constructor27704",-1792428955,null),cljs.core.pr_str.call(null,error__13911__auto___28103)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28103,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27709,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema27709,input_schema27710,input_checker27711,output_checker27712))
,schema.core.make_fn_schema.call(null,output_schema27709,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27710], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__15756__auto___28039){
return (function() { 
var filter_component__delegate = function (data__15757__auto__,owner27703,p__28036){var vec__28038 = p__28036;var opts__15758__auto__ = cljs.core.nth.call(null,vec__28038,(0),null);return component_fnk__15756__auto___28039.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15758__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner27703),new cljs.core.Keyword(null,"owner","owner",-392611939),owner27703,new cljs.core.Keyword(null,"data","data",-232669377),data__15757__auto__], null));
};
var filter_component = function (data__15757__auto__,owner27703,var_args){
var p__28036 = null;if (arguments.length > 2) {
  p__28036 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__15757__auto__,owner27703,p__28036);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__28104){
var data__15757__auto__ = cljs.core.first(arglist__28104);
arglist__28104 = cljs.core.next(arglist__28104);
var owner27703 = cljs.core.first(arglist__28104);
var p__28036 = cljs.core.rest(arglist__28104);
return filter_component__delegate(data__15757__auto__,owner27703,p__28036);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__15756__auto___28039))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__15725__auto__);
});
var __GT_filter_component__2 = (function (cursor__15725__auto__,m27705){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__15725__auto__,m27705);
});
__GT_filter_component = function(cursor__15725__auto__,m27705){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__15725__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__15725__auto__,m27705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;

//# sourceMappingURL=filter.js.map