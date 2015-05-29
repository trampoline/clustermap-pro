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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__28550){var map__28552 = p__28550;var map__28552__$1 = ((cljs.core.seq_QMARK_.call(null,map__28552))?cljs.core.apply.call(null,cljs.core.hash_map,map__28552):map__28552);var filter_spec = map__28552__$1;var component_descrs = cljs.core.get.call(null,map__28552__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28552__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28552__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__28553){var map__28555 = p__28553;var map__28555__$1 = ((cljs.core.seq_QMARK_.call(null,map__28555))?cljs.core.apply.call(null,cljs.core.hash_map,map__28555):map__28555);var filter_spec = map__28555__$1;var component_descrs = cljs.core.get.call(null,map__28555__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28555__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28555__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__28556,component_filter_rq_chan){var map__28561 = p__28556;var map__28561__$1 = ((cljs.core.seq_QMARK_.call(null,map__28561))?cljs.core.apply.call(null,cljs.core.hash_map,map__28561):map__28561);var component_spec = map__28561__$1;var type = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__28562 = cljs.core._EQ_;var expr__28563 = type;if(cljs.core.truth_(pred__28562.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__28563)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28562.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__28563)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28562.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__28563)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28562.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__28563)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28562.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__28563)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28563))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__28565,component_filter_rq_chan){var map__28567 = p__28565;var map__28567__$1 = ((cljs.core.seq_QMARK_.call(null,map__28567))?cljs.core.apply.call(null,cljs.core.hash_map,map__28567):map__28567);var component_spec = map__28567__$1;var skip_label = cljs.core.get.call(null,map__28567__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__28567__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__28567__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(filter_spec)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28569 = schema.core.Any;var input_schema28570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28568","map28568",1720681262,null))], null);var input_checker28571 = schema.core.checker.call(null,input_schema28570);var output_checker28572 = schema.core.checker.call(null,output_schema28569);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28569,input_schema28570,input_checker28571,output_checker28572){
return (function render_STAR_(G__28573){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28573], null);var temp__4126__auto___28591 = input_checker28571.call(null,args__6035__auto___28590);if(cljs.core.truth_(temp__4126__auto___28591))
{var error__6036__auto___28592 = temp__4126__auto___28591;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28592)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28592,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28590,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28570,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28568 = G__28573;while(true){
if(cljs.core.map_QMARK_.call(null,map28568))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28568)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28568,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map28568,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map28568,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28569,input_schema28570,input_checker28571,output_checker28572){
return (function iter__28582(s__28583){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28569,input_schema28570,input_checker28571,output_checker28572){
return (function (){var s__28583__$1 = s__28583;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28583__$1);if(temp__4126__auto__)
{var s__28583__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28583__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28583__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28585 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28584 = (0);while(true){
if((i__28584 < size__4376__auto__))
{var map__28588 = cljs.core._nth.call(null,c__4375__auto__,i__28584);var map__28588__$1 = ((cljs.core.seq_QMARK_.call(null,map__28588))?cljs.core.apply.call(null,cljs.core.hash_map,map__28588):map__28588);var component_spec = map__28588__$1;var id = cljs.core.get.call(null,map__28588__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__28585,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__28593 = (i__28584 + (1));
i__28584 = G__28593;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28585),iter__28582.call(null,cljs.core.chunk_rest.call(null,s__28583__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28585),null);
}
} else
{var map__28589 = cljs.core.first.call(null,s__28583__$2);var map__28589__$1 = ((cljs.core.seq_QMARK_.call(null,map__28589))?cljs.core.apply.call(null,cljs.core.hash_map,map__28589):map__28589);var component_spec = map__28589__$1;var id = cljs.core.get.call(null,map__28589__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__28582.call(null,cljs.core.rest.call(null,s__28583__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28569,input_schema28570,input_checker28571,output_checker28572))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28569,input_schema28570,input_checker28571,output_checker28572))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28594 = output_checker28572.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28594))
{var error__6036__auto___28595 = temp__4126__auto___28594;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28595)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28595,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28569,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28569,input_schema28570,input_checker28571,output_checker28572))
,schema.core.make_fn_schema.call(null,output_schema28569,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28570], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___28932 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28602 = schema.core.Any;var input_schema28603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28599","map28599",2118252667,null))], null);var input_checker28604 = schema.core.checker.call(null,input_schema28603);var output_checker28605 = schema.core.checker.call(null,output_schema28602);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function constructor28597(G__28606){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28933 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28606], null);var temp__4126__auto___28934 = input_checker28604.call(null,args__6035__auto___28933);if(cljs.core.truth_(temp__4126__auto___28934))
{var error__6036__auto___28935 = temp__4126__auto___28934;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28597","constructor28597",1246197478,null),cljs.core.pr_str.call(null,error__6036__auto___28935)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28935,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28933,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28603,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28599 = G__28606;while(true){
if(cljs.core.map_QMARK_.call(null,map28599))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28599)));
}
var map28601 = plumbing.fnk.schema.safe_get.call(null,map28599,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28601,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map28600 = plumbing.fnk.schema.safe_get.call(null,map28599,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map28600,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map28600,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28599,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t28768 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t28768 = (function (input_schema28603,owner,constructor28597,map28600,G__28606,component_specs,filter_spec,output_checker28605,map28601,history,components,validate__6034__auto__,map28599,id,output_schema28602,input_checker28604,filter_rq_pub,ufv__,url_components,meta28769){
this.input_schema28603 = input_schema28603;
this.owner = owner;
this.constructor28597 = constructor28597;
this.map28600 = map28600;
this.G__28606 = G__28606;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.output_checker28605 = output_checker28605;
this.map28601 = map28601;
this.history = history;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.map28599 = map28599;
this.id = id;
this.output_schema28602 = output_schema28602;
this.input_checker28604 = input_checker28604;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta28769 = meta28769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t28768.cljs$lang$type = true;
clustermap.components.filter.t28768.cljs$lang$ctorStr = "clustermap.components.filter/t28768";
clustermap.components.filter.t28768.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t28768");
});})(owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
;
clustermap.components.filter.t28768.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t28768.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
;
clustermap.components.filter.t28768.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t28768.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function (_,p__28771,___$1){var self__ = this;
var map__28772 = p__28771;var map__28772__$1 = ((cljs.core.seq_QMARK_.call(null,map__28772))?cljs.core.apply.call(null,cljs.core.hash_map,map__28772):map__28772);var next_props = map__28772__$1;var map__28773 = cljs.core.get.call(null,map__28772__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28773__$1 = ((cljs.core.seq_QMARK_.call(null,map__28773))?cljs.core.apply.call(null,cljs.core.hash_map,map__28773):map__28773);var next_filter_spec = map__28773__$1;var map__28774 = cljs.core.get.call(null,map__28773__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__28774__$1 = ((cljs.core.seq_QMARK_.call(null,map__28774))?cljs.core.apply.call(null,cljs.core.hash_map,map__28774):map__28774);var next_url_components = map__28774__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
;
clustermap.components.filter.t28768.prototype.om$core$IRender$ = true;
clustermap.components.filter.t28768.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
;
clustermap.components.filter.t28768.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t28768.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__28775_28936 = cljs.core.seq.call(null,chs);var chunk__28776_28937 = null;var count__28777_28938 = (0);var i__28778_28939 = (0);while(true){
if((i__28778_28939 < count__28777_28938))
{var vec__28779_28940 = cljs.core._nth.call(null,chunk__28776_28937,i__28778_28939);var component_id_28941 = cljs.core.nth.call(null,vec__28779_28940,(0),null);var ch_28942 = cljs.core.nth.call(null,vec__28779_28940,(1),null);cljs.core.async.close_BANG_.call(null,ch_28942);
{
var G__28943 = seq__28775_28936;
var G__28944 = chunk__28776_28937;
var G__28945 = count__28777_28938;
var G__28946 = (i__28778_28939 + (1));
seq__28775_28936 = G__28943;
chunk__28776_28937 = G__28944;
count__28777_28938 = G__28945;
i__28778_28939 = G__28946;
continue;
}
} else
{var temp__4126__auto___28947 = cljs.core.seq.call(null,seq__28775_28936);if(temp__4126__auto___28947)
{var seq__28775_28948__$1 = temp__4126__auto___28947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28775_28948__$1))
{var c__4408__auto___28949 = cljs.core.chunk_first.call(null,seq__28775_28948__$1);{
var G__28950 = cljs.core.chunk_rest.call(null,seq__28775_28948__$1);
var G__28951 = c__4408__auto___28949;
var G__28952 = cljs.core.count.call(null,c__4408__auto___28949);
var G__28953 = (0);
seq__28775_28936 = G__28950;
chunk__28776_28937 = G__28951;
count__28777_28938 = G__28952;
i__28778_28939 = G__28953;
continue;
}
} else
{var vec__28780_28954 = cljs.core.first.call(null,seq__28775_28948__$1);var component_id_28955 = cljs.core.nth.call(null,vec__28780_28954,(0),null);var ch_28956 = cljs.core.nth.call(null,vec__28780_28954,(1),null);cljs.core.async.close_BANG_.call(null,ch_28956);
{
var G__28957 = cljs.core.next.call(null,seq__28775_28948__$1);
var G__28958 = null;
var G__28959 = (0);
var G__28960 = (0);
seq__28775_28936 = G__28957;
chunk__28776_28937 = G__28958;
count__28777_28938 = G__28959;
i__28778_28939 = G__28960;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
;
clustermap.components.filter.t28768.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t28768.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function (state_28876){var state_val_28877 = (state_28876[(1)]);if((state_val_28877 === (7)))
{var inst_28867 = (state_28876[(2)]);var state_28876__$1 = state_28876;if(cljs.core.truth_(inst_28867))
{var statearr_28878_28961 = state_28876__$1;(statearr_28878_28961[(1)] = (25));
} else
{var statearr_28879_28962 = state_28876__$1;(statearr_28879_28962[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (20)))
{var inst_28844 = (state_28876[(7)]);var inst_28793 = (state_28876[(8)]);var inst_28787 = (state_28876[(9)]);var inst_28837 = (state_28876[(10)]);var inst_28786 = (state_28876[(11)]);var inst_28828 = (state_28876[(12)]);var inst_28837__$1 = cljs.core.first.call(null,inst_28828);var inst_28838 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28839 = cljs.core.get.call(null,inst_28787,inst_28837__$1);var inst_28840 = ["FILTER",inst_28786,inst_28837__$1,inst_28839];var inst_28841 = (new cljs.core.PersistentVector(null,4,(5),inst_28838,inst_28840,null));var inst_28842 = cljs.core.clj__GT_js.call(null,inst_28841);var inst_28843 = console.log(inst_28842);var inst_28844__$1 = cljs.core.get.call(null,inst_28793,inst_28837__$1);var state_28876__$1 = (function (){var statearr_28880 = state_28876;(statearr_28880[(7)] = inst_28844__$1);
(statearr_28880[(10)] = inst_28837__$1);
(statearr_28880[(13)] = inst_28843);
return statearr_28880;
})();if(cljs.core.truth_(inst_28844__$1))
{var statearr_28881_28963 = state_28876__$1;(statearr_28881_28963[(1)] = (22));
} else
{var statearr_28882_28964 = state_28876__$1;(statearr_28882_28964[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (27)))
{var inst_28872 = (state_28876[(2)]);var state_28876__$1 = state_28876;var statearr_28883_28965 = state_28876__$1;(statearr_28883_28965[(2)] = inst_28872);
(statearr_28883_28965[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (1)))
{var state_28876__$1 = state_28876;var statearr_28884_28966 = state_28876__$1;(statearr_28884_28966[(2)] = null);
(statearr_28884_28966[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (24)))
{var inst_28828 = (state_28876[(12)]);var inst_28853 = (state_28876[(2)]);var inst_28854 = cljs.core.next.call(null,inst_28828);var inst_28800 = inst_28854;var inst_28801 = null;var inst_28802 = (0);var inst_28803 = (0);var state_28876__$1 = (function (){var statearr_28888 = state_28876;(statearr_28888[(14)] = inst_28801);
(statearr_28888[(15)] = inst_28853);
(statearr_28888[(16)] = inst_28803);
(statearr_28888[(17)] = inst_28802);
(statearr_28888[(18)] = inst_28800);
return statearr_28888;
})();var statearr_28889_28967 = state_28876__$1;(statearr_28889_28967[(2)] = null);
(statearr_28889_28967[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (4)))
{var inst_28783 = (state_28876[(19)]);var inst_28783__$1 = (state_28876[(2)]);var state_28876__$1 = (function (){var statearr_28890 = state_28876;(statearr_28890[(19)] = inst_28783__$1);
return statearr_28890;
})();if(cljs.core.truth_(inst_28783__$1))
{var statearr_28891_28968 = state_28876__$1;(statearr_28891_28968[(1)] = (5));
} else
{var statearr_28892_28969 = state_28876__$1;(statearr_28892_28969[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (15)))
{var inst_28801 = (state_28876[(14)]);var inst_28803 = (state_28876[(16)]);var inst_28802 = (state_28876[(17)]);var inst_28800 = (state_28876[(18)]);var inst_28824 = (state_28876[(2)]);var inst_28825 = (inst_28803 + (1));var tmp28885 = inst_28801;var tmp28886 = inst_28802;var tmp28887 = inst_28800;var inst_28800__$1 = tmp28887;var inst_28801__$1 = tmp28885;var inst_28802__$1 = tmp28886;var inst_28803__$1 = inst_28825;var state_28876__$1 = (function (){var statearr_28893 = state_28876;(statearr_28893[(14)] = inst_28801__$1);
(statearr_28893[(20)] = inst_28824);
(statearr_28893[(16)] = inst_28803__$1);
(statearr_28893[(17)] = inst_28802__$1);
(statearr_28893[(18)] = inst_28800__$1);
return statearr_28893;
})();var statearr_28894_28970 = state_28876__$1;(statearr_28894_28970[(2)] = null);
(statearr_28894_28970[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (21)))
{var inst_28857 = (state_28876[(2)]);var state_28876__$1 = state_28876;var statearr_28895_28971 = state_28876__$1;(statearr_28895_28971[(2)] = inst_28857);
(statearr_28895_28971[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (13)))
{var inst_28815 = (state_28876[(21)]);var inst_28787 = (state_28876[(9)]);var inst_28808 = (state_28876[(22)]);var inst_28817 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28818 = cljs.core.get.call(null,inst_28787,inst_28808);var inst_28819 = [inst_28808,inst_28818];var inst_28820 = (new cljs.core.PersistentVector(null,2,(5),inst_28817,inst_28819,null));var inst_28821 = cljs.core.async.put_BANG_.call(null,inst_28815,inst_28820);var state_28876__$1 = state_28876;var statearr_28896_28972 = state_28876__$1;(statearr_28896_28972[(2)] = inst_28821);
(statearr_28896_28972[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (22)))
{var inst_28844 = (state_28876[(7)]);var inst_28787 = (state_28876[(9)]);var inst_28837 = (state_28876[(10)]);var inst_28846 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28847 = cljs.core.get.call(null,inst_28787,inst_28837);var inst_28848 = [inst_28837,inst_28847];var inst_28849 = (new cljs.core.PersistentVector(null,2,(5),inst_28846,inst_28848,null));var inst_28850 = cljs.core.async.put_BANG_.call(null,inst_28844,inst_28849);var state_28876__$1 = state_28876;var statearr_28897_28973 = state_28876__$1;(statearr_28897_28973[(2)] = inst_28850);
(statearr_28897_28973[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (6)))
{var state_28876__$1 = state_28876;var statearr_28898_28974 = state_28876__$1;(statearr_28898_28974[(2)] = null);
(statearr_28898_28974[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (25)))
{var state_28876__$1 = state_28876;var statearr_28899_28975 = state_28876__$1;(statearr_28899_28975[(2)] = null);
(statearr_28899_28975[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (17)))
{var state_28876__$1 = state_28876;var statearr_28900_28976 = state_28876__$1;(statearr_28900_28976[(2)] = null);
(statearr_28900_28976[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (3)))
{var inst_28874 = (state_28876[(2)]);var state_28876__$1 = state_28876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28876__$1,inst_28874);
} else
{if((state_val_28877 === (12)))
{var inst_28862 = (state_28876[(2)]);var state_28876__$1 = state_28876;var statearr_28901_28977 = state_28876__$1;(statearr_28901_28977[(2)] = inst_28862);
(statearr_28901_28977[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (2)))
{var state_28876__$1 = state_28876;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28876__$1,(4),filter_rq_sub);
} else
{if((state_val_28877 === (23)))
{var state_28876__$1 = state_28876;var statearr_28902_28978 = state_28876__$1;(statearr_28902_28978[(2)] = null);
(statearr_28902_28978[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (19)))
{var inst_28828 = (state_28876[(12)]);var inst_28832 = cljs.core.chunk_first.call(null,inst_28828);var inst_28833 = cljs.core.chunk_rest.call(null,inst_28828);var inst_28834 = cljs.core.count.call(null,inst_28832);var inst_28800 = inst_28833;var inst_28801 = inst_28832;var inst_28802 = inst_28834;var inst_28803 = (0);var state_28876__$1 = (function (){var statearr_28903 = state_28876;(statearr_28903[(14)] = inst_28801);
(statearr_28903[(16)] = inst_28803);
(statearr_28903[(17)] = inst_28802);
(statearr_28903[(18)] = inst_28800);
return statearr_28903;
})();var statearr_28904_28979 = state_28876__$1;(statearr_28904_28979[(2)] = null);
(statearr_28904_28979[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (11)))
{var inst_28800 = (state_28876[(18)]);var inst_28828 = (state_28876[(12)]);var inst_28828__$1 = cljs.core.seq.call(null,inst_28800);var state_28876__$1 = (function (){var statearr_28905 = state_28876;(statearr_28905[(12)] = inst_28828__$1);
return statearr_28905;
})();if(inst_28828__$1)
{var statearr_28906_28980 = state_28876__$1;(statearr_28906_28980[(1)] = (16));
} else
{var statearr_28907_28981 = state_28876__$1;(statearr_28907_28981[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (9)))
{var inst_28864 = (state_28876[(2)]);var state_28876__$1 = (function (){var statearr_28908 = state_28876;(statearr_28908[(23)] = inst_28864);
return statearr_28908;
})();var statearr_28909_28982 = state_28876__$1;(statearr_28909_28982[(2)] = true);
(statearr_28909_28982[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (5)))
{var inst_28787 = (state_28876[(9)]);var inst_28786 = (state_28876[(11)]);var inst_28783 = (state_28876[(19)]);var inst_28786__$1 = cljs.core.nth.call(null,inst_28783,(0),null);var inst_28787__$1 = cljs.core.nth.call(null,inst_28783,(1),null);var inst_28788 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28789 = ["FILTER-RQ",inst_28786__$1,inst_28787__$1];var inst_28790 = (new cljs.core.PersistentVector(null,3,(5),inst_28788,inst_28789,null));var inst_28791 = cljs.core.clj__GT_js.call(null,inst_28790);var inst_28792 = console.log(inst_28791);var inst_28793 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_28794 = cljs.core.keys.call(null,inst_28787__$1);var inst_28799 = cljs.core.seq.call(null,inst_28794);var inst_28800 = inst_28799;var inst_28801 = null;var inst_28802 = (0);var inst_28803 = (0);var state_28876__$1 = (function (){var statearr_28910 = state_28876;(statearr_28910[(8)] = inst_28793);
(statearr_28910[(9)] = inst_28787__$1);
(statearr_28910[(14)] = inst_28801);
(statearr_28910[(11)] = inst_28786__$1);
(statearr_28910[(16)] = inst_28803);
(statearr_28910[(17)] = inst_28802);
(statearr_28910[(18)] = inst_28800);
(statearr_28910[(24)] = inst_28792);
return statearr_28910;
})();var statearr_28911_28983 = state_28876__$1;(statearr_28911_28983[(2)] = null);
(statearr_28911_28983[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (14)))
{var state_28876__$1 = state_28876;var statearr_28912_28984 = state_28876__$1;(statearr_28912_28984[(2)] = null);
(statearr_28912_28984[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (26)))
{var state_28876__$1 = state_28876;var statearr_28913_28985 = state_28876__$1;(statearr_28913_28985[(2)] = null);
(statearr_28913_28985[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (16)))
{var inst_28828 = (state_28876[(12)]);var inst_28830 = cljs.core.chunked_seq_QMARK_.call(null,inst_28828);var state_28876__$1 = state_28876;if(inst_28830)
{var statearr_28914_28986 = state_28876__$1;(statearr_28914_28986[(1)] = (19));
} else
{var statearr_28915_28987 = state_28876__$1;(statearr_28915_28987[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (10)))
{var inst_28793 = (state_28876[(8)]);var inst_28815 = (state_28876[(21)]);var inst_28787 = (state_28876[(9)]);var inst_28801 = (state_28876[(14)]);var inst_28786 = (state_28876[(11)]);var inst_28803 = (state_28876[(16)]);var inst_28808 = (state_28876[(22)]);var inst_28808__$1 = cljs.core._nth.call(null,inst_28801,inst_28803);var inst_28809 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28810 = cljs.core.get.call(null,inst_28787,inst_28808__$1);var inst_28811 = ["FILTER",inst_28786,inst_28808__$1,inst_28810];var inst_28812 = (new cljs.core.PersistentVector(null,4,(5),inst_28809,inst_28811,null));var inst_28813 = cljs.core.clj__GT_js.call(null,inst_28812);var inst_28814 = console.log(inst_28813);var inst_28815__$1 = cljs.core.get.call(null,inst_28793,inst_28808__$1);var state_28876__$1 = (function (){var statearr_28916 = state_28876;(statearr_28916[(21)] = inst_28815__$1);
(statearr_28916[(25)] = inst_28814);
(statearr_28916[(22)] = inst_28808__$1);
return statearr_28916;
})();if(cljs.core.truth_(inst_28815__$1))
{var statearr_28917_28988 = state_28876__$1;(statearr_28917_28988[(1)] = (13));
} else
{var statearr_28918_28989 = state_28876__$1;(statearr_28918_28989[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (18)))
{var inst_28860 = (state_28876[(2)]);var state_28876__$1 = state_28876;var statearr_28919_28990 = state_28876__$1;(statearr_28919_28990[(2)] = inst_28860);
(statearr_28919_28990[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28877 === (8)))
{var inst_28803 = (state_28876[(16)]);var inst_28802 = (state_28876[(17)]);var inst_28805 = (inst_28803 < inst_28802);var inst_28806 = inst_28805;var state_28876__$1 = state_28876;if(cljs.core.truth_(inst_28806))
{var statearr_28920_28991 = state_28876__$1;(statearr_28920_28991[(1)] = (10));
} else
{var statearr_28921_28992 = state_28876__$1;(statearr_28921_28992[(1)] = (11));
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
});})(c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
;return ((function (switch__11241__auto__,c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_28925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28925[(0)] = state_machine__11242__auto__);
(statearr_28925[(1)] = (1));
return statearr_28925;
});
var state_machine__11242__auto____1 = (function (state_28876){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_28876);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e28926){if((e28926 instanceof Object))
{var ex__11245__auto__ = e28926;var statearr_28927_28993 = state_28876;(statearr_28927_28993[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28876);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28926;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28994 = state_28876;
state_28876 = G__28994;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_28876){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_28876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
})();var state__11299__auto__ = (function (){var statearr_28928 = f__11298__auto__.call(null);(statearr_28928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_28928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
);
return c__11297__auto__;
});})(owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
;
clustermap.components.filter.t28768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function (_28770){var self__ = this;
var _28770__$1 = this;return self__.meta28769;
});})(owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
;
clustermap.components.filter.t28768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function (_28770,meta28769__$1){var self__ = this;
var _28770__$1 = this;return (new clustermap.components.filter.t28768(self__.input_schema28603,self__.owner,self__.constructor28597,self__.map28600,self__.G__28606,self__.component_specs,self__.filter_spec,self__.output_checker28605,self__.map28601,self__.history,self__.components,self__.validate__6034__auto__,self__.map28599,self__.id,self__.output_schema28602,self__.input_checker28604,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta28769__$1));
});})(owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
;
clustermap.components.filter.__GT_t28768 = ((function (owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605){
return (function __GT_t28768(input_schema28603__$1,owner__$1,constructor28597__$1,map28600__$1,G__28606__$1,component_specs__$1,filter_spec__$1,output_checker28605__$1,map28601__$1,history__$1,components__$1,validate__6034__auto____$1,map28599__$1,id__$1,output_schema28602__$1,input_checker28604__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta28769){return (new clustermap.components.filter.t28768(input_schema28603__$1,owner__$1,constructor28597__$1,map28600__$1,G__28606__$1,component_specs__$1,filter_spec__$1,output_checker28605__$1,map28601__$1,history__$1,components__$1,validate__6034__auto____$1,map28599__$1,id__$1,output_schema28602__$1,input_checker28604__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta28769));
});})(owner,history,filter_rq_pub,map28600,url_components,components,component_specs,id,filter_spec,map28601,validate__6034__auto__,ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
;
}
return (new clustermap.components.filter.t28768(input_schema28603,owner,constructor28597,map28600,G__28606,component_specs,filter_spec,output_checker28605,map28601,history,components,validate__6034__auto__,map28599,id,output_schema28602,input_checker28604,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28995 = output_checker28605.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28995))
{var error__6036__auto___28996 = temp__4126__auto___28995;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28597","constructor28597",1246197478,null),cljs.core.pr_str.call(null,error__6036__auto___28996)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28996,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28602,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28602,input_schema28603,input_checker28604,output_checker28605))
,schema.core.make_fn_schema.call(null,output_schema28602,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28603], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___28932){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner28596,p__28929){var vec__28931 = p__28929;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28931,(0),null);return component_fnk__7881__auto___28932.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28596),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28596,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner28596,var_args){
var p__28929 = null;if (arguments.length > 2) {
  p__28929 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner28596,p__28929);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__28997){
var data__7882__auto__ = cljs.core.first(arglist__28997);
arglist__28997 = cljs.core.next(arglist__28997);
var owner28596 = cljs.core.first(arglist__28997);
var p__28929 = cljs.core.rest(arglist__28997);
return filter_component__delegate(data__7882__auto__,owner28596,p__28929);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___28932))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m28598){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m28598);
});
__GT_filter_component = function(cursor__7850__auto__,m28598){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m28598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
