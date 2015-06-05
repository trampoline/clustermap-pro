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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29226){var map__29228 = p__29226;var map__29228__$1 = ((cljs.core.seq_QMARK_.call(null,map__29228))?cljs.core.apply.call(null,cljs.core.hash_map,map__29228):map__29228);var filter_spec = map__29228__$1;var component_descrs = cljs.core.get.call(null,map__29228__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29228__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29228__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29229){var map__29231 = p__29229;var map__29231__$1 = ((cljs.core.seq_QMARK_.call(null,map__29231))?cljs.core.apply.call(null,cljs.core.hash_map,map__29231):map__29231);var filter_spec = map__29231__$1;var component_descrs = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29232,component_filter_rq_chan){var map__29237 = p__29232;var map__29237__$1 = ((cljs.core.seq_QMARK_.call(null,map__29237))?cljs.core.apply.call(null,cljs.core.hash_map,map__29237):map__29237);var component_spec = map__29237__$1;var type = cljs.core.get.call(null,map__29237__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29238 = cljs.core._EQ_;var expr__29239 = type;if(cljs.core.truth_(pred__29238.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29239)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29238.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29239)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29238.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29239)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29238.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29239)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29238.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29239)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29239))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29241,component_filter_rq_chan){var map__29243 = p__29241;var map__29243__$1 = ((cljs.core.seq_QMARK_.call(null,map__29243))?cljs.core.apply.call(null,cljs.core.hash_map,map__29243):map__29243);var component_spec = map__29243__$1;var visible = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29243__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29245 = schema.core.Any;var input_schema29246 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29244","map29244",-662661939,null))], null);var input_checker29247 = schema.core.checker.call(null,input_schema29246);var output_checker29248 = schema.core.checker.call(null,output_schema29245);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29245,input_schema29246,input_checker29247,output_checker29248){
return (function render_STAR_(G__29249){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29249], null);var temp__4126__auto___29267 = input_checker29247.call(null,args__6035__auto___29266);if(cljs.core.truth_(temp__4126__auto___29267))
{var error__6036__auto___29268 = temp__4126__auto___29267;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29268)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29268,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29266,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29246,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29244 = G__29249;while(true){
if(cljs.core.map_QMARK_.call(null,map29244))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29244)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29244,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29244,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29244,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29245,input_schema29246,input_checker29247,output_checker29248){
return (function iter__29258(s__29259){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29245,input_schema29246,input_checker29247,output_checker29248){
return (function (){var s__29259__$1 = s__29259;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29259__$1);if(temp__4126__auto__)
{var s__29259__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29259__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29259__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29261 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29260 = (0);while(true){
if((i__29260 < size__4376__auto__))
{var map__29264 = cljs.core._nth.call(null,c__4375__auto__,i__29260);var map__29264__$1 = ((cljs.core.seq_QMARK_.call(null,map__29264))?cljs.core.apply.call(null,cljs.core.hash_map,map__29264):map__29264);var component_spec = map__29264__$1;var id = cljs.core.get.call(null,map__29264__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29261,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29269 = (i__29260 + (1));
i__29260 = G__29269;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29261),iter__29258.call(null,cljs.core.chunk_rest.call(null,s__29259__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29261),null);
}
} else
{var map__29265 = cljs.core.first.call(null,s__29259__$2);var map__29265__$1 = ((cljs.core.seq_QMARK_.call(null,map__29265))?cljs.core.apply.call(null,cljs.core.hash_map,map__29265):map__29265);var component_spec = map__29265__$1;var id = cljs.core.get.call(null,map__29265__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29258.call(null,cljs.core.rest.call(null,s__29259__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29245,input_schema29246,input_checker29247,output_checker29248))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29245,input_schema29246,input_checker29247,output_checker29248))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29270 = output_checker29248.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29270))
{var error__6036__auto___29271 = temp__4126__auto___29270;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29271)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29271,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29245,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29245,input_schema29246,input_checker29247,output_checker29248))
,schema.core.make_fn_schema.call(null,output_schema29245,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29246], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___29608 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29278 = schema.core.Any;var input_schema29279 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29275","map29275",-656963845,null))], null);var input_checker29280 = schema.core.checker.call(null,input_schema29279);var output_checker29281 = schema.core.checker.call(null,output_schema29278);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function constructor29273(G__29282){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29282], null);var temp__4126__auto___29610 = input_checker29280.call(null,args__6035__auto___29609);if(cljs.core.truth_(temp__4126__auto___29610))
{var error__6036__auto___29611 = temp__4126__auto___29610;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29273","constructor29273",1175712345,null),cljs.core.pr_str.call(null,error__6036__auto___29611)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29611,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29609,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29279,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29275 = G__29282;while(true){
if(cljs.core.map_QMARK_.call(null,map29275))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29275)));
}
var map29277 = plumbing.fnk.schema.safe_get.call(null,map29275,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29277,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29276 = plumbing.fnk.schema.safe_get.call(null,map29275,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29276,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29276,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29275,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t29444 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t29444 = (function (owner,G__29282,input_schema29279,input_checker29280,output_schema29278,component_specs,filter_spec,map29277,map29276,output_checker29281,history,components,constructor29273,validate__6034__auto__,id,map29275,filter_rq_pub,ufv__,url_components,meta29445){
this.owner = owner;
this.G__29282 = G__29282;
this.input_schema29279 = input_schema29279;
this.input_checker29280 = input_checker29280;
this.output_schema29278 = output_schema29278;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.map29277 = map29277;
this.map29276 = map29276;
this.output_checker29281 = output_checker29281;
this.history = history;
this.components = components;
this.constructor29273 = constructor29273;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map29275 = map29275;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta29445 = meta29445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t29444.cljs$lang$type = true;
clustermap.components.filter.t29444.cljs$lang$ctorStr = "clustermap.components.filter/t29444";
clustermap.components.filter.t29444.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t29444");
});})(owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
;
clustermap.components.filter.t29444.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t29444.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
;
clustermap.components.filter.t29444.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t29444.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function (_,p__29447,___$1){var self__ = this;
var map__29448 = p__29447;var map__29448__$1 = ((cljs.core.seq_QMARK_.call(null,map__29448))?cljs.core.apply.call(null,cljs.core.hash_map,map__29448):map__29448);var next_props = map__29448__$1;var map__29449 = cljs.core.get.call(null,map__29448__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__29449__$1 = ((cljs.core.seq_QMARK_.call(null,map__29449))?cljs.core.apply.call(null,cljs.core.hash_map,map__29449):map__29449);var next_filter_spec = map__29449__$1;var map__29450 = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__29450__$1 = ((cljs.core.seq_QMARK_.call(null,map__29450))?cljs.core.apply.call(null,cljs.core.hash_map,map__29450):map__29450);var next_url_components = map__29450__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
;
clustermap.components.filter.t29444.prototype.om$core$IRender$ = true;
clustermap.components.filter.t29444.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
;
clustermap.components.filter.t29444.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t29444.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__29451_29612 = cljs.core.seq.call(null,chs);var chunk__29452_29613 = null;var count__29453_29614 = (0);var i__29454_29615 = (0);while(true){
if((i__29454_29615 < count__29453_29614))
{var vec__29455_29616 = cljs.core._nth.call(null,chunk__29452_29613,i__29454_29615);var component_id_29617 = cljs.core.nth.call(null,vec__29455_29616,(0),null);var ch_29618 = cljs.core.nth.call(null,vec__29455_29616,(1),null);cljs.core.async.close_BANG_.call(null,ch_29618);
{
var G__29619 = seq__29451_29612;
var G__29620 = chunk__29452_29613;
var G__29621 = count__29453_29614;
var G__29622 = (i__29454_29615 + (1));
seq__29451_29612 = G__29619;
chunk__29452_29613 = G__29620;
count__29453_29614 = G__29621;
i__29454_29615 = G__29622;
continue;
}
} else
{var temp__4126__auto___29623 = cljs.core.seq.call(null,seq__29451_29612);if(temp__4126__auto___29623)
{var seq__29451_29624__$1 = temp__4126__auto___29623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29451_29624__$1))
{var c__4408__auto___29625 = cljs.core.chunk_first.call(null,seq__29451_29624__$1);{
var G__29626 = cljs.core.chunk_rest.call(null,seq__29451_29624__$1);
var G__29627 = c__4408__auto___29625;
var G__29628 = cljs.core.count.call(null,c__4408__auto___29625);
var G__29629 = (0);
seq__29451_29612 = G__29626;
chunk__29452_29613 = G__29627;
count__29453_29614 = G__29628;
i__29454_29615 = G__29629;
continue;
}
} else
{var vec__29456_29630 = cljs.core.first.call(null,seq__29451_29624__$1);var component_id_29631 = cljs.core.nth.call(null,vec__29456_29630,(0),null);var ch_29632 = cljs.core.nth.call(null,vec__29456_29630,(1),null);cljs.core.async.close_BANG_.call(null,ch_29632);
{
var G__29633 = cljs.core.next.call(null,seq__29451_29624__$1);
var G__29634 = null;
var G__29635 = (0);
var G__29636 = (0);
seq__29451_29612 = G__29633;
chunk__29452_29613 = G__29634;
count__29453_29614 = G__29635;
i__29454_29615 = G__29636;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
;
clustermap.components.filter.t29444.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t29444.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function (state_29552){var state_val_29553 = (state_29552[(1)]);if((state_val_29553 === (7)))
{var inst_29543 = (state_29552[(2)]);var state_29552__$1 = state_29552;if(cljs.core.truth_(inst_29543))
{var statearr_29554_29637 = state_29552__$1;(statearr_29554_29637[(1)] = (25));
} else
{var statearr_29555_29638 = state_29552__$1;(statearr_29555_29638[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (20)))
{var inst_29504 = (state_29552[(7)]);var inst_29513 = (state_29552[(8)]);var inst_29462 = (state_29552[(9)]);var inst_29469 = (state_29552[(10)]);var inst_29463 = (state_29552[(11)]);var inst_29520 = (state_29552[(12)]);var inst_29513__$1 = cljs.core.first.call(null,inst_29504);var inst_29514 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29515 = cljs.core.get.call(null,inst_29463,inst_29513__$1);var inst_29516 = ["FILTER",inst_29462,inst_29513__$1,inst_29515];var inst_29517 = (new cljs.core.PersistentVector(null,4,(5),inst_29514,inst_29516,null));var inst_29518 = cljs.core.clj__GT_js.call(null,inst_29517);var inst_29519 = console.log(inst_29518);var inst_29520__$1 = cljs.core.get.call(null,inst_29469,inst_29513__$1);var state_29552__$1 = (function (){var statearr_29556 = state_29552;(statearr_29556[(8)] = inst_29513__$1);
(statearr_29556[(13)] = inst_29519);
(statearr_29556[(12)] = inst_29520__$1);
return statearr_29556;
})();if(cljs.core.truth_(inst_29520__$1))
{var statearr_29557_29639 = state_29552__$1;(statearr_29557_29639[(1)] = (22));
} else
{var statearr_29558_29640 = state_29552__$1;(statearr_29558_29640[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (27)))
{var inst_29548 = (state_29552[(2)]);var state_29552__$1 = state_29552;var statearr_29559_29641 = state_29552__$1;(statearr_29559_29641[(2)] = inst_29548);
(statearr_29559_29641[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (1)))
{var state_29552__$1 = state_29552;var statearr_29560_29642 = state_29552__$1;(statearr_29560_29642[(2)] = null);
(statearr_29560_29642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (24)))
{var inst_29504 = (state_29552[(7)]);var inst_29529 = (state_29552[(2)]);var inst_29530 = cljs.core.next.call(null,inst_29504);var inst_29476 = inst_29530;var inst_29477 = null;var inst_29478 = (0);var inst_29479 = (0);var state_29552__$1 = (function (){var statearr_29564 = state_29552;(statearr_29564[(14)] = inst_29479);
(statearr_29564[(15)] = inst_29529);
(statearr_29564[(16)] = inst_29477);
(statearr_29564[(17)] = inst_29476);
(statearr_29564[(18)] = inst_29478);
return statearr_29564;
})();var statearr_29565_29643 = state_29552__$1;(statearr_29565_29643[(2)] = null);
(statearr_29565_29643[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (4)))
{var inst_29459 = (state_29552[(19)]);var inst_29459__$1 = (state_29552[(2)]);var state_29552__$1 = (function (){var statearr_29566 = state_29552;(statearr_29566[(19)] = inst_29459__$1);
return statearr_29566;
})();if(cljs.core.truth_(inst_29459__$1))
{var statearr_29567_29644 = state_29552__$1;(statearr_29567_29644[(1)] = (5));
} else
{var statearr_29568_29645 = state_29552__$1;(statearr_29568_29645[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (15)))
{var inst_29479 = (state_29552[(14)]);var inst_29477 = (state_29552[(16)]);var inst_29476 = (state_29552[(17)]);var inst_29478 = (state_29552[(18)]);var inst_29500 = (state_29552[(2)]);var inst_29501 = (inst_29479 + (1));var tmp29561 = inst_29477;var tmp29562 = inst_29476;var tmp29563 = inst_29478;var inst_29476__$1 = tmp29562;var inst_29477__$1 = tmp29561;var inst_29478__$1 = tmp29563;var inst_29479__$1 = inst_29501;var state_29552__$1 = (function (){var statearr_29569 = state_29552;(statearr_29569[(20)] = inst_29500);
(statearr_29569[(14)] = inst_29479__$1);
(statearr_29569[(16)] = inst_29477__$1);
(statearr_29569[(17)] = inst_29476__$1);
(statearr_29569[(18)] = inst_29478__$1);
return statearr_29569;
})();var statearr_29570_29646 = state_29552__$1;(statearr_29570_29646[(2)] = null);
(statearr_29570_29646[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (21)))
{var inst_29533 = (state_29552[(2)]);var state_29552__$1 = state_29552;var statearr_29571_29647 = state_29552__$1;(statearr_29571_29647[(2)] = inst_29533);
(statearr_29571_29647[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (13)))
{var inst_29484 = (state_29552[(21)]);var inst_29491 = (state_29552[(22)]);var inst_29463 = (state_29552[(11)]);var inst_29493 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29494 = cljs.core.get.call(null,inst_29463,inst_29484);var inst_29495 = [inst_29484,inst_29494];var inst_29496 = (new cljs.core.PersistentVector(null,2,(5),inst_29493,inst_29495,null));var inst_29497 = cljs.core.async.put_BANG_.call(null,inst_29491,inst_29496);var state_29552__$1 = state_29552;var statearr_29572_29648 = state_29552__$1;(statearr_29572_29648[(2)] = inst_29497);
(statearr_29572_29648[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (22)))
{var inst_29513 = (state_29552[(8)]);var inst_29463 = (state_29552[(11)]);var inst_29520 = (state_29552[(12)]);var inst_29522 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29523 = cljs.core.get.call(null,inst_29463,inst_29513);var inst_29524 = [inst_29513,inst_29523];var inst_29525 = (new cljs.core.PersistentVector(null,2,(5),inst_29522,inst_29524,null));var inst_29526 = cljs.core.async.put_BANG_.call(null,inst_29520,inst_29525);var state_29552__$1 = state_29552;var statearr_29573_29649 = state_29552__$1;(statearr_29573_29649[(2)] = inst_29526);
(statearr_29573_29649[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (6)))
{var state_29552__$1 = state_29552;var statearr_29574_29650 = state_29552__$1;(statearr_29574_29650[(2)] = null);
(statearr_29574_29650[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (25)))
{var state_29552__$1 = state_29552;var statearr_29575_29651 = state_29552__$1;(statearr_29575_29651[(2)] = null);
(statearr_29575_29651[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (17)))
{var state_29552__$1 = state_29552;var statearr_29576_29652 = state_29552__$1;(statearr_29576_29652[(2)] = null);
(statearr_29576_29652[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (3)))
{var inst_29550 = (state_29552[(2)]);var state_29552__$1 = state_29552;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29552__$1,inst_29550);
} else
{if((state_val_29553 === (12)))
{var inst_29538 = (state_29552[(2)]);var state_29552__$1 = state_29552;var statearr_29577_29653 = state_29552__$1;(statearr_29577_29653[(2)] = inst_29538);
(statearr_29577_29653[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (2)))
{var state_29552__$1 = state_29552;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29552__$1,(4),filter_rq_sub);
} else
{if((state_val_29553 === (23)))
{var state_29552__$1 = state_29552;var statearr_29578_29654 = state_29552__$1;(statearr_29578_29654[(2)] = null);
(statearr_29578_29654[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (19)))
{var inst_29504 = (state_29552[(7)]);var inst_29508 = cljs.core.chunk_first.call(null,inst_29504);var inst_29509 = cljs.core.chunk_rest.call(null,inst_29504);var inst_29510 = cljs.core.count.call(null,inst_29508);var inst_29476 = inst_29509;var inst_29477 = inst_29508;var inst_29478 = inst_29510;var inst_29479 = (0);var state_29552__$1 = (function (){var statearr_29579 = state_29552;(statearr_29579[(14)] = inst_29479);
(statearr_29579[(16)] = inst_29477);
(statearr_29579[(17)] = inst_29476);
(statearr_29579[(18)] = inst_29478);
return statearr_29579;
})();var statearr_29580_29655 = state_29552__$1;(statearr_29580_29655[(2)] = null);
(statearr_29580_29655[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (11)))
{var inst_29504 = (state_29552[(7)]);var inst_29476 = (state_29552[(17)]);var inst_29504__$1 = cljs.core.seq.call(null,inst_29476);var state_29552__$1 = (function (){var statearr_29581 = state_29552;(statearr_29581[(7)] = inst_29504__$1);
return statearr_29581;
})();if(inst_29504__$1)
{var statearr_29582_29656 = state_29552__$1;(statearr_29582_29656[(1)] = (16));
} else
{var statearr_29583_29657 = state_29552__$1;(statearr_29583_29657[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (9)))
{var inst_29540 = (state_29552[(2)]);var state_29552__$1 = (function (){var statearr_29584 = state_29552;(statearr_29584[(23)] = inst_29540);
return statearr_29584;
})();var statearr_29585_29658 = state_29552__$1;(statearr_29585_29658[(2)] = true);
(statearr_29585_29658[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (5)))
{var inst_29459 = (state_29552[(19)]);var inst_29462 = (state_29552[(9)]);var inst_29463 = (state_29552[(11)]);var inst_29462__$1 = cljs.core.nth.call(null,inst_29459,(0),null);var inst_29463__$1 = cljs.core.nth.call(null,inst_29459,(1),null);var inst_29464 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29465 = ["FILTER-RQ",inst_29462__$1,inst_29463__$1];var inst_29466 = (new cljs.core.PersistentVector(null,3,(5),inst_29464,inst_29465,null));var inst_29467 = cljs.core.clj__GT_js.call(null,inst_29466);var inst_29468 = console.log(inst_29467);var inst_29469 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_29470 = cljs.core.keys.call(null,inst_29463__$1);var inst_29475 = cljs.core.seq.call(null,inst_29470);var inst_29476 = inst_29475;var inst_29477 = null;var inst_29478 = (0);var inst_29479 = (0);var state_29552__$1 = (function (){var statearr_29586 = state_29552;(statearr_29586[(14)] = inst_29479);
(statearr_29586[(24)] = inst_29468);
(statearr_29586[(16)] = inst_29477);
(statearr_29586[(9)] = inst_29462__$1);
(statearr_29586[(17)] = inst_29476);
(statearr_29586[(10)] = inst_29469);
(statearr_29586[(11)] = inst_29463__$1);
(statearr_29586[(18)] = inst_29478);
return statearr_29586;
})();var statearr_29587_29659 = state_29552__$1;(statearr_29587_29659[(2)] = null);
(statearr_29587_29659[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (14)))
{var state_29552__$1 = state_29552;var statearr_29588_29660 = state_29552__$1;(statearr_29588_29660[(2)] = null);
(statearr_29588_29660[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (26)))
{var state_29552__$1 = state_29552;var statearr_29589_29661 = state_29552__$1;(statearr_29589_29661[(2)] = null);
(statearr_29589_29661[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (16)))
{var inst_29504 = (state_29552[(7)]);var inst_29506 = cljs.core.chunked_seq_QMARK_.call(null,inst_29504);var state_29552__$1 = state_29552;if(inst_29506)
{var statearr_29590_29662 = state_29552__$1;(statearr_29590_29662[(1)] = (19));
} else
{var statearr_29591_29663 = state_29552__$1;(statearr_29591_29663[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (10)))
{var inst_29484 = (state_29552[(21)]);var inst_29479 = (state_29552[(14)]);var inst_29491 = (state_29552[(22)]);var inst_29477 = (state_29552[(16)]);var inst_29462 = (state_29552[(9)]);var inst_29469 = (state_29552[(10)]);var inst_29463 = (state_29552[(11)]);var inst_29484__$1 = cljs.core._nth.call(null,inst_29477,inst_29479);var inst_29485 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29486 = cljs.core.get.call(null,inst_29463,inst_29484__$1);var inst_29487 = ["FILTER",inst_29462,inst_29484__$1,inst_29486];var inst_29488 = (new cljs.core.PersistentVector(null,4,(5),inst_29485,inst_29487,null));var inst_29489 = cljs.core.clj__GT_js.call(null,inst_29488);var inst_29490 = console.log(inst_29489);var inst_29491__$1 = cljs.core.get.call(null,inst_29469,inst_29484__$1);var state_29552__$1 = (function (){var statearr_29592 = state_29552;(statearr_29592[(21)] = inst_29484__$1);
(statearr_29592[(22)] = inst_29491__$1);
(statearr_29592[(25)] = inst_29490);
return statearr_29592;
})();if(cljs.core.truth_(inst_29491__$1))
{var statearr_29593_29664 = state_29552__$1;(statearr_29593_29664[(1)] = (13));
} else
{var statearr_29594_29665 = state_29552__$1;(statearr_29594_29665[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (18)))
{var inst_29536 = (state_29552[(2)]);var state_29552__$1 = state_29552;var statearr_29595_29666 = state_29552__$1;(statearr_29595_29666[(2)] = inst_29536);
(statearr_29595_29666[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29553 === (8)))
{var inst_29479 = (state_29552[(14)]);var inst_29478 = (state_29552[(18)]);var inst_29481 = (inst_29479 < inst_29478);var inst_29482 = inst_29481;var state_29552__$1 = state_29552;if(cljs.core.truth_(inst_29482))
{var statearr_29596_29667 = state_29552__$1;(statearr_29596_29667[(1)] = (10));
} else
{var statearr_29597_29668 = state_29552__$1;(statearr_29597_29668[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_29601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29601[(0)] = state_machine__9111__auto__);
(statearr_29601[(1)] = (1));
return statearr_29601;
});
var state_machine__9111__auto____1 = (function (state_29552){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_29552);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e29602){if((e29602 instanceof Object))
{var ex__9114__auto__ = e29602;var statearr_29603_29669 = state_29552;(statearr_29603_29669[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29552);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29602;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29670 = state_29552;
state_29552 = G__29670;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_29552){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_29552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
})();var state__9127__auto__ = (function (){var statearr_29604 = f__9126__auto__.call(null);(statearr_29604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_29604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
;
clustermap.components.filter.t29444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function (_29446){var self__ = this;
var _29446__$1 = this;return self__.meta29445;
});})(owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
;
clustermap.components.filter.t29444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function (_29446,meta29445__$1){var self__ = this;
var _29446__$1 = this;return (new clustermap.components.filter.t29444(self__.owner,self__.G__29282,self__.input_schema29279,self__.input_checker29280,self__.output_schema29278,self__.component_specs,self__.filter_spec,self__.map29277,self__.map29276,self__.output_checker29281,self__.history,self__.components,self__.constructor29273,self__.validate__6034__auto__,self__.id,self__.map29275,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta29445__$1));
});})(owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
;
clustermap.components.filter.__GT_t29444 = ((function (owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281){
return (function __GT_t29444(owner__$1,G__29282__$1,input_schema29279__$1,input_checker29280__$1,output_schema29278__$1,component_specs__$1,filter_spec__$1,map29277__$1,map29276__$1,output_checker29281__$1,history__$1,components__$1,constructor29273__$1,validate__6034__auto____$1,id__$1,map29275__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta29445){return (new clustermap.components.filter.t29444(owner__$1,G__29282__$1,input_schema29279__$1,input_checker29280__$1,output_schema29278__$1,component_specs__$1,filter_spec__$1,map29277__$1,map29276__$1,output_checker29281__$1,history__$1,components__$1,constructor29273__$1,validate__6034__auto____$1,id__$1,map29275__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta29445));
});})(owner,history,filter_rq_pub,map29276,url_components,components,component_specs,id,filter_spec,map29277,validate__6034__auto__,ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
;
}
return (new clustermap.components.filter.t29444(owner,G__29282,input_schema29279,input_checker29280,output_schema29278,component_specs,filter_spec,map29277,map29276,output_checker29281,history,components,constructor29273,validate__6034__auto__,id,map29275,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29671 = output_checker29281.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29671))
{var error__6036__auto___29672 = temp__4126__auto___29671;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29273","constructor29273",1175712345,null),cljs.core.pr_str.call(null,error__6036__auto___29672)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29672,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29278,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29278,input_schema29279,input_checker29280,output_checker29281))
,schema.core.make_fn_schema.call(null,output_schema29278,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29279], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___29608){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29272,p__29605){var vec__29607 = p__29605;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29607,(0),null);return component_fnk__7881__auto___29608.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29272),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29272,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29272,var_args){
var p__29605 = null;if (arguments.length > 2) {
  p__29605 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29272,p__29605);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__29673){
var data__7882__auto__ = cljs.core.first(arglist__29673);
arglist__29673 = cljs.core.next(arglist__29673);
var owner29272 = cljs.core.first(arglist__29673);
var p__29605 = cljs.core.rest(arglist__29673);
return filter_component__delegate(data__7882__auto__,owner29272,p__29605);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___29608))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29274){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29274);
});
__GT_filter_component = function(cursor__7850__auto__,m29274){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
