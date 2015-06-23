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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29885){var map__29887 = p__29885;var map__29887__$1 = ((cljs.core.seq_QMARK_.call(null,map__29887))?cljs.core.apply.call(null,cljs.core.hash_map,map__29887):map__29887);var filter_spec = map__29887__$1;var component_descrs = cljs.core.get.call(null,map__29887__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29887__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29887__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29888){var map__29890 = p__29888;var map__29890__$1 = ((cljs.core.seq_QMARK_.call(null,map__29890))?cljs.core.apply.call(null,cljs.core.hash_map,map__29890):map__29890);var filter_spec = map__29890__$1;var component_descrs = cljs.core.get.call(null,map__29890__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29890__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29890__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29891,component_filter_rq_chan){var map__29896 = p__29891;var map__29896__$1 = ((cljs.core.seq_QMARK_.call(null,map__29896))?cljs.core.apply.call(null,cljs.core.hash_map,map__29896):map__29896);var component_spec = map__29896__$1;var type = cljs.core.get.call(null,map__29896__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29897 = cljs.core._EQ_;var expr__29898 = type;if(cljs.core.truth_(pred__29897.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29898)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29897.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29898)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29897.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29898)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29897.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29898)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29897.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29898)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29898))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29900,component_filter_rq_chan){var map__29902 = p__29900;var map__29902__$1 = ((cljs.core.seq_QMARK_.call(null,map__29902))?cljs.core.apply.call(null,cljs.core.hash_map,map__29902):map__29902);var component_spec = map__29902__$1;var visible = cljs.core.get.call(null,map__29902__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29902__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29902__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29902__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29904 = schema.core.Any;var input_schema29905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29903","map29903",-1623204315,null))], null);var input_checker29906 = schema.core.checker.call(null,input_schema29905);var output_checker29907 = schema.core.checker.call(null,output_schema29904);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29904,input_schema29905,input_checker29906,output_checker29907){
return (function render_STAR_(G__29908){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29925 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29908], null);var temp__4126__auto___29926 = input_checker29906.call(null,args__6035__auto___29925);if(cljs.core.truth_(temp__4126__auto___29926))
{var error__6036__auto___29927 = temp__4126__auto___29926;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29927)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29927,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29925,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29905,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29903 = G__29908;while(true){
if(cljs.core.map_QMARK_.call(null,map29903))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29903)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29903,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29903,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29903,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29904,input_schema29905,input_checker29906,output_checker29907){
return (function iter__29917(s__29918){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29904,input_schema29905,input_checker29906,output_checker29907){
return (function (){var s__29918__$1 = s__29918;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29918__$1);if(temp__4126__auto__)
{var s__29918__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29918__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29918__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29920 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29919 = (0);while(true){
if((i__29919 < size__4376__auto__))
{var map__29923 = cljs.core._nth.call(null,c__4375__auto__,i__29919);var map__29923__$1 = ((cljs.core.seq_QMARK_.call(null,map__29923))?cljs.core.apply.call(null,cljs.core.hash_map,map__29923):map__29923);var component_spec = map__29923__$1;var id = cljs.core.get.call(null,map__29923__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29920,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29928 = (i__29919 + (1));
i__29919 = G__29928;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29920),iter__29917.call(null,cljs.core.chunk_rest.call(null,s__29918__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29920),null);
}
} else
{var map__29924 = cljs.core.first.call(null,s__29918__$2);var map__29924__$1 = ((cljs.core.seq_QMARK_.call(null,map__29924))?cljs.core.apply.call(null,cljs.core.hash_map,map__29924):map__29924);var component_spec = map__29924__$1;var id = cljs.core.get.call(null,map__29924__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29917.call(null,cljs.core.rest.call(null,s__29918__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29904,input_schema29905,input_checker29906,output_checker29907))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29904,input_schema29905,input_checker29906,output_checker29907))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29929 = output_checker29907.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29929))
{var error__6036__auto___29930 = temp__4126__auto___29929;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29930)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29930,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29904,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29904,input_schema29905,input_checker29906,output_checker29907))
,schema.core.make_fn_schema.call(null,output_schema29904,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29905], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30267 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29937 = schema.core.Any;var input_schema29938 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29934","map29934",-1834834022,null))], null);var input_checker29939 = schema.core.checker.call(null,input_schema29938);var output_checker29940 = schema.core.checker.call(null,output_schema29937);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function constructor29932(G__29941){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29941], null);var temp__4126__auto___30269 = input_checker29939.call(null,args__6035__auto___30268);if(cljs.core.truth_(temp__4126__auto___30269))
{var error__6036__auto___30270 = temp__4126__auto___30269;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29932","constructor29932",1415343915,null),cljs.core.pr_str.call(null,error__6036__auto___30270)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30270,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30268,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29938,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29934 = G__29941;while(true){
if(cljs.core.map_QMARK_.call(null,map29934))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29934)));
}
var map29936 = plumbing.fnk.schema.safe_get.call(null,map29934,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29936,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29935 = plumbing.fnk.schema.safe_get.call(null,map29934,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29935,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29935,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29934,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30103 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30103 = (function (output_schema29937,G__29941,owner,input_schema29938,constructor29932,map29936,output_checker29940,component_specs,filter_spec,history,map29935,components,validate__6034__auto__,map29934,id,input_checker29939,filter_rq_pub,ufv__,url_components,meta30104){
this.output_schema29937 = output_schema29937;
this.G__29941 = G__29941;
this.owner = owner;
this.input_schema29938 = input_schema29938;
this.constructor29932 = constructor29932;
this.map29936 = map29936;
this.output_checker29940 = output_checker29940;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.history = history;
this.map29935 = map29935;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.map29934 = map29934;
this.id = id;
this.input_checker29939 = input_checker29939;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta30104 = meta30104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30103.cljs$lang$type = true;
clustermap.components.filter.t30103.cljs$lang$ctorStr = "clustermap.components.filter/t30103";
clustermap.components.filter.t30103.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30103");
});})(owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
;
clustermap.components.filter.t30103.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30103.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
;
clustermap.components.filter.t30103.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30103.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function (_,p__30106,___$1){var self__ = this;
var map__30107 = p__30106;var map__30107__$1 = ((cljs.core.seq_QMARK_.call(null,map__30107))?cljs.core.apply.call(null,cljs.core.hash_map,map__30107):map__30107);var next_props = map__30107__$1;var map__30108 = cljs.core.get.call(null,map__30107__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30108__$1 = ((cljs.core.seq_QMARK_.call(null,map__30108))?cljs.core.apply.call(null,cljs.core.hash_map,map__30108):map__30108);var next_filter_spec = map__30108__$1;var map__30109 = cljs.core.get.call(null,map__30108__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30109__$1 = ((cljs.core.seq_QMARK_.call(null,map__30109))?cljs.core.apply.call(null,cljs.core.hash_map,map__30109):map__30109);var next_url_components = map__30109__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
;
clustermap.components.filter.t30103.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30103.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
;
clustermap.components.filter.t30103.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30103.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30110_30271 = cljs.core.seq.call(null,chs);var chunk__30111_30272 = null;var count__30112_30273 = (0);var i__30113_30274 = (0);while(true){
if((i__30113_30274 < count__30112_30273))
{var vec__30114_30275 = cljs.core._nth.call(null,chunk__30111_30272,i__30113_30274);var component_id_30276 = cljs.core.nth.call(null,vec__30114_30275,(0),null);var ch_30277 = cljs.core.nth.call(null,vec__30114_30275,(1),null);cljs.core.async.close_BANG_.call(null,ch_30277);
{
var G__30278 = seq__30110_30271;
var G__30279 = chunk__30111_30272;
var G__30280 = count__30112_30273;
var G__30281 = (i__30113_30274 + (1));
seq__30110_30271 = G__30278;
chunk__30111_30272 = G__30279;
count__30112_30273 = G__30280;
i__30113_30274 = G__30281;
continue;
}
} else
{var temp__4126__auto___30282 = cljs.core.seq.call(null,seq__30110_30271);if(temp__4126__auto___30282)
{var seq__30110_30283__$1 = temp__4126__auto___30282;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30110_30283__$1))
{var c__4408__auto___30284 = cljs.core.chunk_first.call(null,seq__30110_30283__$1);{
var G__30285 = cljs.core.chunk_rest.call(null,seq__30110_30283__$1);
var G__30286 = c__4408__auto___30284;
var G__30287 = cljs.core.count.call(null,c__4408__auto___30284);
var G__30288 = (0);
seq__30110_30271 = G__30285;
chunk__30111_30272 = G__30286;
count__30112_30273 = G__30287;
i__30113_30274 = G__30288;
continue;
}
} else
{var vec__30115_30289 = cljs.core.first.call(null,seq__30110_30283__$1);var component_id_30290 = cljs.core.nth.call(null,vec__30115_30289,(0),null);var ch_30291 = cljs.core.nth.call(null,vec__30115_30289,(1),null);cljs.core.async.close_BANG_.call(null,ch_30291);
{
var G__30292 = cljs.core.next.call(null,seq__30110_30283__$1);
var G__30293 = null;
var G__30294 = (0);
var G__30295 = (0);
seq__30110_30271 = G__30292;
chunk__30111_30272 = G__30293;
count__30112_30273 = G__30294;
i__30113_30274 = G__30295;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
;
clustermap.components.filter.t30103.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30103.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function (state_30211){var state_val_30212 = (state_30211[(1)]);if((state_val_30212 === (7)))
{var inst_30202 = (state_30211[(2)]);var state_30211__$1 = state_30211;if(cljs.core.truth_(inst_30202))
{var statearr_30213_30296 = state_30211__$1;(statearr_30213_30296[(1)] = (25));
} else
{var statearr_30214_30297 = state_30211__$1;(statearr_30214_30297[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (20)))
{var inst_30121 = (state_30211[(7)]);var inst_30122 = (state_30211[(8)]);var inst_30128 = (state_30211[(9)]);var inst_30172 = (state_30211[(10)]);var inst_30163 = (state_30211[(11)]);var inst_30179 = (state_30211[(12)]);var inst_30172__$1 = cljs.core.first.call(null,inst_30163);var inst_30173 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30174 = cljs.core.get.call(null,inst_30122,inst_30172__$1);var inst_30175 = ["FILTER",inst_30121,inst_30172__$1,inst_30174];var inst_30176 = (new cljs.core.PersistentVector(null,4,(5),inst_30173,inst_30175,null));var inst_30177 = cljs.core.clj__GT_js.call(null,inst_30176);var inst_30178 = console.log(inst_30177);var inst_30179__$1 = cljs.core.get.call(null,inst_30128,inst_30172__$1);var state_30211__$1 = (function (){var statearr_30215 = state_30211;(statearr_30215[(10)] = inst_30172__$1);
(statearr_30215[(13)] = inst_30178);
(statearr_30215[(12)] = inst_30179__$1);
return statearr_30215;
})();if(cljs.core.truth_(inst_30179__$1))
{var statearr_30216_30298 = state_30211__$1;(statearr_30216_30298[(1)] = (22));
} else
{var statearr_30217_30299 = state_30211__$1;(statearr_30217_30299[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (27)))
{var inst_30207 = (state_30211[(2)]);var state_30211__$1 = state_30211;var statearr_30218_30300 = state_30211__$1;(statearr_30218_30300[(2)] = inst_30207);
(statearr_30218_30300[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (1)))
{var state_30211__$1 = state_30211;var statearr_30219_30301 = state_30211__$1;(statearr_30219_30301[(2)] = null);
(statearr_30219_30301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (24)))
{var inst_30163 = (state_30211[(11)]);var inst_30188 = (state_30211[(2)]);var inst_30189 = cljs.core.next.call(null,inst_30163);var inst_30135 = inst_30189;var inst_30136 = null;var inst_30137 = (0);var inst_30138 = (0);var state_30211__$1 = (function (){var statearr_30223 = state_30211;(statearr_30223[(14)] = inst_30136);
(statearr_30223[(15)] = inst_30138);
(statearr_30223[(16)] = inst_30188);
(statearr_30223[(17)] = inst_30137);
(statearr_30223[(18)] = inst_30135);
return statearr_30223;
})();var statearr_30224_30302 = state_30211__$1;(statearr_30224_30302[(2)] = null);
(statearr_30224_30302[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (4)))
{var inst_30118 = (state_30211[(19)]);var inst_30118__$1 = (state_30211[(2)]);var state_30211__$1 = (function (){var statearr_30225 = state_30211;(statearr_30225[(19)] = inst_30118__$1);
return statearr_30225;
})();if(cljs.core.truth_(inst_30118__$1))
{var statearr_30226_30303 = state_30211__$1;(statearr_30226_30303[(1)] = (5));
} else
{var statearr_30227_30304 = state_30211__$1;(statearr_30227_30304[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (15)))
{var inst_30136 = (state_30211[(14)]);var inst_30138 = (state_30211[(15)]);var inst_30137 = (state_30211[(17)]);var inst_30135 = (state_30211[(18)]);var inst_30159 = (state_30211[(2)]);var inst_30160 = (inst_30138 + (1));var tmp30220 = inst_30136;var tmp30221 = inst_30137;var tmp30222 = inst_30135;var inst_30135__$1 = tmp30222;var inst_30136__$1 = tmp30220;var inst_30137__$1 = tmp30221;var inst_30138__$1 = inst_30160;var state_30211__$1 = (function (){var statearr_30228 = state_30211;(statearr_30228[(14)] = inst_30136__$1);
(statearr_30228[(15)] = inst_30138__$1);
(statearr_30228[(20)] = inst_30159);
(statearr_30228[(17)] = inst_30137__$1);
(statearr_30228[(18)] = inst_30135__$1);
return statearr_30228;
})();var statearr_30229_30305 = state_30211__$1;(statearr_30229_30305[(2)] = null);
(statearr_30229_30305[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (21)))
{var inst_30192 = (state_30211[(2)]);var state_30211__$1 = state_30211;var statearr_30230_30306 = state_30211__$1;(statearr_30230_30306[(2)] = inst_30192);
(statearr_30230_30306[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (13)))
{var inst_30150 = (state_30211[(21)]);var inst_30122 = (state_30211[(8)]);var inst_30143 = (state_30211[(22)]);var inst_30152 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30153 = cljs.core.get.call(null,inst_30122,inst_30143);var inst_30154 = [inst_30143,inst_30153];var inst_30155 = (new cljs.core.PersistentVector(null,2,(5),inst_30152,inst_30154,null));var inst_30156 = cljs.core.async.put_BANG_.call(null,inst_30150,inst_30155);var state_30211__$1 = state_30211;var statearr_30231_30307 = state_30211__$1;(statearr_30231_30307[(2)] = inst_30156);
(statearr_30231_30307[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (22)))
{var inst_30122 = (state_30211[(8)]);var inst_30172 = (state_30211[(10)]);var inst_30179 = (state_30211[(12)]);var inst_30181 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30182 = cljs.core.get.call(null,inst_30122,inst_30172);var inst_30183 = [inst_30172,inst_30182];var inst_30184 = (new cljs.core.PersistentVector(null,2,(5),inst_30181,inst_30183,null));var inst_30185 = cljs.core.async.put_BANG_.call(null,inst_30179,inst_30184);var state_30211__$1 = state_30211;var statearr_30232_30308 = state_30211__$1;(statearr_30232_30308[(2)] = inst_30185);
(statearr_30232_30308[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (6)))
{var state_30211__$1 = state_30211;var statearr_30233_30309 = state_30211__$1;(statearr_30233_30309[(2)] = null);
(statearr_30233_30309[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (25)))
{var state_30211__$1 = state_30211;var statearr_30234_30310 = state_30211__$1;(statearr_30234_30310[(2)] = null);
(statearr_30234_30310[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (17)))
{var state_30211__$1 = state_30211;var statearr_30235_30311 = state_30211__$1;(statearr_30235_30311[(2)] = null);
(statearr_30235_30311[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (3)))
{var inst_30209 = (state_30211[(2)]);var state_30211__$1 = state_30211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30211__$1,inst_30209);
} else
{if((state_val_30212 === (12)))
{var inst_30197 = (state_30211[(2)]);var state_30211__$1 = state_30211;var statearr_30236_30312 = state_30211__$1;(statearr_30236_30312[(2)] = inst_30197);
(statearr_30236_30312[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (2)))
{var state_30211__$1 = state_30211;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30211__$1,(4),filter_rq_sub);
} else
{if((state_val_30212 === (23)))
{var state_30211__$1 = state_30211;var statearr_30237_30313 = state_30211__$1;(statearr_30237_30313[(2)] = null);
(statearr_30237_30313[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (19)))
{var inst_30163 = (state_30211[(11)]);var inst_30167 = cljs.core.chunk_first.call(null,inst_30163);var inst_30168 = cljs.core.chunk_rest.call(null,inst_30163);var inst_30169 = cljs.core.count.call(null,inst_30167);var inst_30135 = inst_30168;var inst_30136 = inst_30167;var inst_30137 = inst_30169;var inst_30138 = (0);var state_30211__$1 = (function (){var statearr_30238 = state_30211;(statearr_30238[(14)] = inst_30136);
(statearr_30238[(15)] = inst_30138);
(statearr_30238[(17)] = inst_30137);
(statearr_30238[(18)] = inst_30135);
return statearr_30238;
})();var statearr_30239_30314 = state_30211__$1;(statearr_30239_30314[(2)] = null);
(statearr_30239_30314[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (11)))
{var inst_30163 = (state_30211[(11)]);var inst_30135 = (state_30211[(18)]);var inst_30163__$1 = cljs.core.seq.call(null,inst_30135);var state_30211__$1 = (function (){var statearr_30240 = state_30211;(statearr_30240[(11)] = inst_30163__$1);
return statearr_30240;
})();if(inst_30163__$1)
{var statearr_30241_30315 = state_30211__$1;(statearr_30241_30315[(1)] = (16));
} else
{var statearr_30242_30316 = state_30211__$1;(statearr_30242_30316[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (9)))
{var inst_30199 = (state_30211[(2)]);var state_30211__$1 = (function (){var statearr_30243 = state_30211;(statearr_30243[(23)] = inst_30199);
return statearr_30243;
})();var statearr_30244_30317 = state_30211__$1;(statearr_30244_30317[(2)] = true);
(statearr_30244_30317[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (5)))
{var inst_30121 = (state_30211[(7)]);var inst_30122 = (state_30211[(8)]);var inst_30118 = (state_30211[(19)]);var inst_30121__$1 = cljs.core.nth.call(null,inst_30118,(0),null);var inst_30122__$1 = cljs.core.nth.call(null,inst_30118,(1),null);var inst_30123 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30124 = ["FILTER-RQ",inst_30121__$1,inst_30122__$1];var inst_30125 = (new cljs.core.PersistentVector(null,3,(5),inst_30123,inst_30124,null));var inst_30126 = cljs.core.clj__GT_js.call(null,inst_30125);var inst_30127 = console.log(inst_30126);var inst_30128 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30129 = cljs.core.keys.call(null,inst_30122__$1);var inst_30134 = cljs.core.seq.call(null,inst_30129);var inst_30135 = inst_30134;var inst_30136 = null;var inst_30137 = (0);var inst_30138 = (0);var state_30211__$1 = (function (){var statearr_30245 = state_30211;(statearr_30245[(14)] = inst_30136);
(statearr_30245[(15)] = inst_30138);
(statearr_30245[(7)] = inst_30121__$1);
(statearr_30245[(8)] = inst_30122__$1);
(statearr_30245[(9)] = inst_30128);
(statearr_30245[(17)] = inst_30137);
(statearr_30245[(24)] = inst_30127);
(statearr_30245[(18)] = inst_30135);
return statearr_30245;
})();var statearr_30246_30318 = state_30211__$1;(statearr_30246_30318[(2)] = null);
(statearr_30246_30318[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (14)))
{var state_30211__$1 = state_30211;var statearr_30247_30319 = state_30211__$1;(statearr_30247_30319[(2)] = null);
(statearr_30247_30319[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (26)))
{var state_30211__$1 = state_30211;var statearr_30248_30320 = state_30211__$1;(statearr_30248_30320[(2)] = null);
(statearr_30248_30320[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (16)))
{var inst_30163 = (state_30211[(11)]);var inst_30165 = cljs.core.chunked_seq_QMARK_.call(null,inst_30163);var state_30211__$1 = state_30211;if(inst_30165)
{var statearr_30249_30321 = state_30211__$1;(statearr_30249_30321[(1)] = (19));
} else
{var statearr_30250_30322 = state_30211__$1;(statearr_30250_30322[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (10)))
{var inst_30136 = (state_30211[(14)]);var inst_30138 = (state_30211[(15)]);var inst_30121 = (state_30211[(7)]);var inst_30150 = (state_30211[(21)]);var inst_30122 = (state_30211[(8)]);var inst_30128 = (state_30211[(9)]);var inst_30143 = (state_30211[(22)]);var inst_30143__$1 = cljs.core._nth.call(null,inst_30136,inst_30138);var inst_30144 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30145 = cljs.core.get.call(null,inst_30122,inst_30143__$1);var inst_30146 = ["FILTER",inst_30121,inst_30143__$1,inst_30145];var inst_30147 = (new cljs.core.PersistentVector(null,4,(5),inst_30144,inst_30146,null));var inst_30148 = cljs.core.clj__GT_js.call(null,inst_30147);var inst_30149 = console.log(inst_30148);var inst_30150__$1 = cljs.core.get.call(null,inst_30128,inst_30143__$1);var state_30211__$1 = (function (){var statearr_30251 = state_30211;(statearr_30251[(21)] = inst_30150__$1);
(statearr_30251[(25)] = inst_30149);
(statearr_30251[(22)] = inst_30143__$1);
return statearr_30251;
})();if(cljs.core.truth_(inst_30150__$1))
{var statearr_30252_30323 = state_30211__$1;(statearr_30252_30323[(1)] = (13));
} else
{var statearr_30253_30324 = state_30211__$1;(statearr_30253_30324[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (18)))
{var inst_30195 = (state_30211[(2)]);var state_30211__$1 = state_30211;var statearr_30254_30325 = state_30211__$1;(statearr_30254_30325[(2)] = inst_30195);
(statearr_30254_30325[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30212 === (8)))
{var inst_30138 = (state_30211[(15)]);var inst_30137 = (state_30211[(17)]);var inst_30140 = (inst_30138 < inst_30137);var inst_30141 = inst_30140;var state_30211__$1 = state_30211;if(cljs.core.truth_(inst_30141))
{var statearr_30255_30326 = state_30211__$1;(statearr_30255_30326[(1)] = (10));
} else
{var statearr_30256_30327 = state_30211__$1;(statearr_30256_30327[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30260[(0)] = state_machine__9111__auto__);
(statearr_30260[(1)] = (1));
return statearr_30260;
});
var state_machine__9111__auto____1 = (function (state_30211){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30211);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30261){if((e30261 instanceof Object))
{var ex__9114__auto__ = e30261;var statearr_30262_30328 = state_30211;(statearr_30262_30328[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30211);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30261;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30329 = state_30211;
state_30211 = G__30329;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30211){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
})();var state__9127__auto__ = (function (){var statearr_30263 = f__9126__auto__.call(null);(statearr_30263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30263;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
;
clustermap.components.filter.t30103.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function (_30105){var self__ = this;
var _30105__$1 = this;return self__.meta30104;
});})(owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
;
clustermap.components.filter.t30103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function (_30105,meta30104__$1){var self__ = this;
var _30105__$1 = this;return (new clustermap.components.filter.t30103(self__.output_schema29937,self__.G__29941,self__.owner,self__.input_schema29938,self__.constructor29932,self__.map29936,self__.output_checker29940,self__.component_specs,self__.filter_spec,self__.history,self__.map29935,self__.components,self__.validate__6034__auto__,self__.map29934,self__.id,self__.input_checker29939,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta30104__$1));
});})(owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
;
clustermap.components.filter.__GT_t30103 = ((function (owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940){
return (function __GT_t30103(output_schema29937__$1,G__29941__$1,owner__$1,input_schema29938__$1,constructor29932__$1,map29936__$1,output_checker29940__$1,component_specs__$1,filter_spec__$1,history__$1,map29935__$1,components__$1,validate__6034__auto____$1,map29934__$1,id__$1,input_checker29939__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30104){return (new clustermap.components.filter.t30103(output_schema29937__$1,G__29941__$1,owner__$1,input_schema29938__$1,constructor29932__$1,map29936__$1,output_checker29940__$1,component_specs__$1,filter_spec__$1,history__$1,map29935__$1,components__$1,validate__6034__auto____$1,map29934__$1,id__$1,input_checker29939__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30104));
});})(owner,history,filter_rq_pub,map29935,url_components,components,component_specs,id,filter_spec,map29936,validate__6034__auto__,ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
;
}
return (new clustermap.components.filter.t30103(output_schema29937,G__29941,owner,input_schema29938,constructor29932,map29936,output_checker29940,component_specs,filter_spec,history,map29935,components,validate__6034__auto__,map29934,id,input_checker29939,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30330 = output_checker29940.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30330))
{var error__6036__auto___30331 = temp__4126__auto___30330;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29932","constructor29932",1415343915,null),cljs.core.pr_str.call(null,error__6036__auto___30331)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30331,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29937,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29937,input_schema29938,input_checker29939,output_checker29940))
,schema.core.make_fn_schema.call(null,output_schema29937,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29938], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30267){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29931,p__30264){var vec__30266 = p__30264;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30266,(0),null);return component_fnk__7881__auto___30267.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29931),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29931,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29931,var_args){
var p__30264 = null;if (arguments.length > 2) {
  p__30264 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29931,p__30264);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30332){
var data__7882__auto__ = cljs.core.first(arglist__30332);
arglist__30332 = cljs.core.next(arglist__30332);
var owner29931 = cljs.core.first(arglist__30332);
var p__30264 = cljs.core.rest(arglist__30332);
return filter_component__delegate(data__7882__auto__,owner29931,p__30264);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30267))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29933){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29933);
});
__GT_filter_component = function(cursor__7850__auto__,m29933){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
