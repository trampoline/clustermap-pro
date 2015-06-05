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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__28856){var map__28858 = p__28856;var map__28858__$1 = ((cljs.core.seq_QMARK_.call(null,map__28858))?cljs.core.apply.call(null,cljs.core.hash_map,map__28858):map__28858);var filter_spec = map__28858__$1;var component_descrs = cljs.core.get.call(null,map__28858__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28858__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28858__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__28859){var map__28861 = p__28859;var map__28861__$1 = ((cljs.core.seq_QMARK_.call(null,map__28861))?cljs.core.apply.call(null,cljs.core.hash_map,map__28861):map__28861);var filter_spec = map__28861__$1;var component_descrs = cljs.core.get.call(null,map__28861__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28861__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28861__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__28862,component_filter_rq_chan){var map__28867 = p__28862;var map__28867__$1 = ((cljs.core.seq_QMARK_.call(null,map__28867))?cljs.core.apply.call(null,cljs.core.hash_map,map__28867):map__28867);var component_spec = map__28867__$1;var type = cljs.core.get.call(null,map__28867__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__28868 = cljs.core._EQ_;var expr__28869 = type;if(cljs.core.truth_(pred__28868.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__28869)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28868.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__28869)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28868.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__28869)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28868.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__28869)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28868.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__28869)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28869))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__28871,component_filter_rq_chan){var map__28873 = p__28871;var map__28873__$1 = ((cljs.core.seq_QMARK_.call(null,map__28873))?cljs.core.apply.call(null,cljs.core.hash_map,map__28873):map__28873);var component_spec = map__28873__$1;var visible = cljs.core.get.call(null,map__28873__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__28873__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__28873__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__28873__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28875 = schema.core.Any;var input_schema28876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28874","map28874",1273700241,null))], null);var input_checker28877 = schema.core.checker.call(null,input_schema28876);var output_checker28878 = schema.core.checker.call(null,output_schema28875);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28875,input_schema28876,input_checker28877,output_checker28878){
return (function render_STAR_(G__28879){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28879], null);var temp__4126__auto___28897 = input_checker28877.call(null,args__6035__auto___28896);if(cljs.core.truth_(temp__4126__auto___28897))
{var error__6036__auto___28898 = temp__4126__auto___28897;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28898)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28898,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28896,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28876,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28874 = G__28879;while(true){
if(cljs.core.map_QMARK_.call(null,map28874))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28874)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28874,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map28874,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map28874,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28875,input_schema28876,input_checker28877,output_checker28878){
return (function iter__28888(s__28889){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28875,input_schema28876,input_checker28877,output_checker28878){
return (function (){var s__28889__$1 = s__28889;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28889__$1);if(temp__4126__auto__)
{var s__28889__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28889__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28889__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28891 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28890 = (0);while(true){
if((i__28890 < size__4376__auto__))
{var map__28894 = cljs.core._nth.call(null,c__4375__auto__,i__28890);var map__28894__$1 = ((cljs.core.seq_QMARK_.call(null,map__28894))?cljs.core.apply.call(null,cljs.core.hash_map,map__28894):map__28894);var component_spec = map__28894__$1;var id = cljs.core.get.call(null,map__28894__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__28891,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__28899 = (i__28890 + (1));
i__28890 = G__28899;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28891),iter__28888.call(null,cljs.core.chunk_rest.call(null,s__28889__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28891),null);
}
} else
{var map__28895 = cljs.core.first.call(null,s__28889__$2);var map__28895__$1 = ((cljs.core.seq_QMARK_.call(null,map__28895))?cljs.core.apply.call(null,cljs.core.hash_map,map__28895):map__28895);var component_spec = map__28895__$1;var id = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__28888.call(null,cljs.core.rest.call(null,s__28889__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28875,input_schema28876,input_checker28877,output_checker28878))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28875,input_schema28876,input_checker28877,output_checker28878))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28900 = output_checker28878.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28900))
{var error__6036__auto___28901 = temp__4126__auto___28900;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28901)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28901,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28875,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28875,input_schema28876,input_checker28877,output_checker28878))
,schema.core.make_fn_schema.call(null,output_schema28875,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28876], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___29238 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28908 = schema.core.Any;var input_schema28909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28905","map28905",-1347580116,null))], null);var input_checker28910 = schema.core.checker.call(null,input_schema28909);var output_checker28911 = schema.core.checker.call(null,output_schema28908);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function constructor28903(G__28912){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28912], null);var temp__4126__auto___29240 = input_checker28910.call(null,args__6035__auto___29239);if(cljs.core.truth_(temp__4126__auto___29240))
{var error__6036__auto___29241 = temp__4126__auto___29240;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28903","constructor28903",251194539,null),cljs.core.pr_str.call(null,error__6036__auto___29241)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29241,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29239,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28909,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28905 = G__28912;while(true){
if(cljs.core.map_QMARK_.call(null,map28905))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28905)));
}
var map28907 = plumbing.fnk.schema.safe_get.call(null,map28905,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28907,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map28906 = plumbing.fnk.schema.safe_get.call(null,map28905,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map28906,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map28906,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28905,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t29074 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t29074 = (function (G__28912,owner,input_schema28909,constructor28903,map28905,component_specs,filter_spec,output_schema28908,history,input_checker28910,map28907,components,validate__6034__auto__,id,map28906,filter_rq_pub,ufv__,output_checker28911,url_components,meta29075){
this.G__28912 = G__28912;
this.owner = owner;
this.input_schema28909 = input_schema28909;
this.constructor28903 = constructor28903;
this.map28905 = map28905;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.output_schema28908 = output_schema28908;
this.history = history;
this.input_checker28910 = input_checker28910;
this.map28907 = map28907;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map28906 = map28906;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.output_checker28911 = output_checker28911;
this.url_components = url_components;
this.meta29075 = meta29075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t29074.cljs$lang$type = true;
clustermap.components.filter.t29074.cljs$lang$ctorStr = "clustermap.components.filter/t29074";
clustermap.components.filter.t29074.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t29074");
});})(owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
;
clustermap.components.filter.t29074.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t29074.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
;
clustermap.components.filter.t29074.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t29074.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function (_,p__29077,___$1){var self__ = this;
var map__29078 = p__29077;var map__29078__$1 = ((cljs.core.seq_QMARK_.call(null,map__29078))?cljs.core.apply.call(null,cljs.core.hash_map,map__29078):map__29078);var next_props = map__29078__$1;var map__29079 = cljs.core.get.call(null,map__29078__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__29079__$1 = ((cljs.core.seq_QMARK_.call(null,map__29079))?cljs.core.apply.call(null,cljs.core.hash_map,map__29079):map__29079);var next_filter_spec = map__29079__$1;var map__29080 = cljs.core.get.call(null,map__29079__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__29080__$1 = ((cljs.core.seq_QMARK_.call(null,map__29080))?cljs.core.apply.call(null,cljs.core.hash_map,map__29080):map__29080);var next_url_components = map__29080__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
;
clustermap.components.filter.t29074.prototype.om$core$IRender$ = true;
clustermap.components.filter.t29074.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
;
clustermap.components.filter.t29074.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t29074.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__29081_29242 = cljs.core.seq.call(null,chs);var chunk__29082_29243 = null;var count__29083_29244 = (0);var i__29084_29245 = (0);while(true){
if((i__29084_29245 < count__29083_29244))
{var vec__29085_29246 = cljs.core._nth.call(null,chunk__29082_29243,i__29084_29245);var component_id_29247 = cljs.core.nth.call(null,vec__29085_29246,(0),null);var ch_29248 = cljs.core.nth.call(null,vec__29085_29246,(1),null);cljs.core.async.close_BANG_.call(null,ch_29248);
{
var G__29249 = seq__29081_29242;
var G__29250 = chunk__29082_29243;
var G__29251 = count__29083_29244;
var G__29252 = (i__29084_29245 + (1));
seq__29081_29242 = G__29249;
chunk__29082_29243 = G__29250;
count__29083_29244 = G__29251;
i__29084_29245 = G__29252;
continue;
}
} else
{var temp__4126__auto___29253 = cljs.core.seq.call(null,seq__29081_29242);if(temp__4126__auto___29253)
{var seq__29081_29254__$1 = temp__4126__auto___29253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29081_29254__$1))
{var c__4408__auto___29255 = cljs.core.chunk_first.call(null,seq__29081_29254__$1);{
var G__29256 = cljs.core.chunk_rest.call(null,seq__29081_29254__$1);
var G__29257 = c__4408__auto___29255;
var G__29258 = cljs.core.count.call(null,c__4408__auto___29255);
var G__29259 = (0);
seq__29081_29242 = G__29256;
chunk__29082_29243 = G__29257;
count__29083_29244 = G__29258;
i__29084_29245 = G__29259;
continue;
}
} else
{var vec__29086_29260 = cljs.core.first.call(null,seq__29081_29254__$1);var component_id_29261 = cljs.core.nth.call(null,vec__29086_29260,(0),null);var ch_29262 = cljs.core.nth.call(null,vec__29086_29260,(1),null);cljs.core.async.close_BANG_.call(null,ch_29262);
{
var G__29263 = cljs.core.next.call(null,seq__29081_29254__$1);
var G__29264 = null;
var G__29265 = (0);
var G__29266 = (0);
seq__29081_29242 = G__29263;
chunk__29082_29243 = G__29264;
count__29083_29244 = G__29265;
i__29084_29245 = G__29266;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
;
clustermap.components.filter.t29074.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t29074.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function (state_29182){var state_val_29183 = (state_29182[(1)]);if((state_val_29183 === (7)))
{var inst_29173 = (state_29182[(2)]);var state_29182__$1 = state_29182;if(cljs.core.truth_(inst_29173))
{var statearr_29184_29267 = state_29182__$1;(statearr_29184_29267[(1)] = (25));
} else
{var statearr_29185_29268 = state_29182__$1;(statearr_29185_29268[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (20)))
{var inst_29134 = (state_29182[(7)]);var inst_29093 = (state_29182[(8)]);var inst_29150 = (state_29182[(9)]);var inst_29099 = (state_29182[(10)]);var inst_29143 = (state_29182[(11)]);var inst_29092 = (state_29182[(12)]);var inst_29143__$1 = cljs.core.first.call(null,inst_29134);var inst_29144 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29145 = cljs.core.get.call(null,inst_29093,inst_29143__$1);var inst_29146 = ["FILTER",inst_29092,inst_29143__$1,inst_29145];var inst_29147 = (new cljs.core.PersistentVector(null,4,(5),inst_29144,inst_29146,null));var inst_29148 = cljs.core.clj__GT_js.call(null,inst_29147);var inst_29149 = console.log(inst_29148);var inst_29150__$1 = cljs.core.get.call(null,inst_29099,inst_29143__$1);var state_29182__$1 = (function (){var statearr_29186 = state_29182;(statearr_29186[(13)] = inst_29149);
(statearr_29186[(9)] = inst_29150__$1);
(statearr_29186[(11)] = inst_29143__$1);
return statearr_29186;
})();if(cljs.core.truth_(inst_29150__$1))
{var statearr_29187_29269 = state_29182__$1;(statearr_29187_29269[(1)] = (22));
} else
{var statearr_29188_29270 = state_29182__$1;(statearr_29188_29270[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (27)))
{var inst_29178 = (state_29182[(2)]);var state_29182__$1 = state_29182;var statearr_29189_29271 = state_29182__$1;(statearr_29189_29271[(2)] = inst_29178);
(statearr_29189_29271[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (1)))
{var state_29182__$1 = state_29182;var statearr_29190_29272 = state_29182__$1;(statearr_29190_29272[(2)] = null);
(statearr_29190_29272[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (24)))
{var inst_29134 = (state_29182[(7)]);var inst_29159 = (state_29182[(2)]);var inst_29160 = cljs.core.next.call(null,inst_29134);var inst_29106 = inst_29160;var inst_29107 = null;var inst_29108 = (0);var inst_29109 = (0);var state_29182__$1 = (function (){var statearr_29194 = state_29182;(statearr_29194[(14)] = inst_29109);
(statearr_29194[(15)] = inst_29107);
(statearr_29194[(16)] = inst_29108);
(statearr_29194[(17)] = inst_29159);
(statearr_29194[(18)] = inst_29106);
return statearr_29194;
})();var statearr_29195_29273 = state_29182__$1;(statearr_29195_29273[(2)] = null);
(statearr_29195_29273[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (4)))
{var inst_29089 = (state_29182[(19)]);var inst_29089__$1 = (state_29182[(2)]);var state_29182__$1 = (function (){var statearr_29196 = state_29182;(statearr_29196[(19)] = inst_29089__$1);
return statearr_29196;
})();if(cljs.core.truth_(inst_29089__$1))
{var statearr_29197_29274 = state_29182__$1;(statearr_29197_29274[(1)] = (5));
} else
{var statearr_29198_29275 = state_29182__$1;(statearr_29198_29275[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (15)))
{var inst_29109 = (state_29182[(14)]);var inst_29107 = (state_29182[(15)]);var inst_29108 = (state_29182[(16)]);var inst_29106 = (state_29182[(18)]);var inst_29130 = (state_29182[(2)]);var inst_29131 = (inst_29109 + (1));var tmp29191 = inst_29107;var tmp29192 = inst_29108;var tmp29193 = inst_29106;var inst_29106__$1 = tmp29193;var inst_29107__$1 = tmp29191;var inst_29108__$1 = tmp29192;var inst_29109__$1 = inst_29131;var state_29182__$1 = (function (){var statearr_29199 = state_29182;(statearr_29199[(14)] = inst_29109__$1);
(statearr_29199[(15)] = inst_29107__$1);
(statearr_29199[(20)] = inst_29130);
(statearr_29199[(16)] = inst_29108__$1);
(statearr_29199[(18)] = inst_29106__$1);
return statearr_29199;
})();var statearr_29200_29276 = state_29182__$1;(statearr_29200_29276[(2)] = null);
(statearr_29200_29276[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (21)))
{var inst_29163 = (state_29182[(2)]);var state_29182__$1 = state_29182;var statearr_29201_29277 = state_29182__$1;(statearr_29201_29277[(2)] = inst_29163);
(statearr_29201_29277[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (13)))
{var inst_29121 = (state_29182[(21)]);var inst_29114 = (state_29182[(22)]);var inst_29093 = (state_29182[(8)]);var inst_29123 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29124 = cljs.core.get.call(null,inst_29093,inst_29114);var inst_29125 = [inst_29114,inst_29124];var inst_29126 = (new cljs.core.PersistentVector(null,2,(5),inst_29123,inst_29125,null));var inst_29127 = cljs.core.async.put_BANG_.call(null,inst_29121,inst_29126);var state_29182__$1 = state_29182;var statearr_29202_29278 = state_29182__$1;(statearr_29202_29278[(2)] = inst_29127);
(statearr_29202_29278[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (22)))
{var inst_29093 = (state_29182[(8)]);var inst_29150 = (state_29182[(9)]);var inst_29143 = (state_29182[(11)]);var inst_29152 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29153 = cljs.core.get.call(null,inst_29093,inst_29143);var inst_29154 = [inst_29143,inst_29153];var inst_29155 = (new cljs.core.PersistentVector(null,2,(5),inst_29152,inst_29154,null));var inst_29156 = cljs.core.async.put_BANG_.call(null,inst_29150,inst_29155);var state_29182__$1 = state_29182;var statearr_29203_29279 = state_29182__$1;(statearr_29203_29279[(2)] = inst_29156);
(statearr_29203_29279[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (6)))
{var state_29182__$1 = state_29182;var statearr_29204_29280 = state_29182__$1;(statearr_29204_29280[(2)] = null);
(statearr_29204_29280[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (25)))
{var state_29182__$1 = state_29182;var statearr_29205_29281 = state_29182__$1;(statearr_29205_29281[(2)] = null);
(statearr_29205_29281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (17)))
{var state_29182__$1 = state_29182;var statearr_29206_29282 = state_29182__$1;(statearr_29206_29282[(2)] = null);
(statearr_29206_29282[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (3)))
{var inst_29180 = (state_29182[(2)]);var state_29182__$1 = state_29182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29182__$1,inst_29180);
} else
{if((state_val_29183 === (12)))
{var inst_29168 = (state_29182[(2)]);var state_29182__$1 = state_29182;var statearr_29207_29283 = state_29182__$1;(statearr_29207_29283[(2)] = inst_29168);
(statearr_29207_29283[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (2)))
{var state_29182__$1 = state_29182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29182__$1,(4),filter_rq_sub);
} else
{if((state_val_29183 === (23)))
{var state_29182__$1 = state_29182;var statearr_29208_29284 = state_29182__$1;(statearr_29208_29284[(2)] = null);
(statearr_29208_29284[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (19)))
{var inst_29134 = (state_29182[(7)]);var inst_29138 = cljs.core.chunk_first.call(null,inst_29134);var inst_29139 = cljs.core.chunk_rest.call(null,inst_29134);var inst_29140 = cljs.core.count.call(null,inst_29138);var inst_29106 = inst_29139;var inst_29107 = inst_29138;var inst_29108 = inst_29140;var inst_29109 = (0);var state_29182__$1 = (function (){var statearr_29209 = state_29182;(statearr_29209[(14)] = inst_29109);
(statearr_29209[(15)] = inst_29107);
(statearr_29209[(16)] = inst_29108);
(statearr_29209[(18)] = inst_29106);
return statearr_29209;
})();var statearr_29210_29285 = state_29182__$1;(statearr_29210_29285[(2)] = null);
(statearr_29210_29285[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (11)))
{var inst_29134 = (state_29182[(7)]);var inst_29106 = (state_29182[(18)]);var inst_29134__$1 = cljs.core.seq.call(null,inst_29106);var state_29182__$1 = (function (){var statearr_29211 = state_29182;(statearr_29211[(7)] = inst_29134__$1);
return statearr_29211;
})();if(inst_29134__$1)
{var statearr_29212_29286 = state_29182__$1;(statearr_29212_29286[(1)] = (16));
} else
{var statearr_29213_29287 = state_29182__$1;(statearr_29213_29287[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (9)))
{var inst_29170 = (state_29182[(2)]);var state_29182__$1 = (function (){var statearr_29214 = state_29182;(statearr_29214[(23)] = inst_29170);
return statearr_29214;
})();var statearr_29215_29288 = state_29182__$1;(statearr_29215_29288[(2)] = true);
(statearr_29215_29288[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (5)))
{var inst_29093 = (state_29182[(8)]);var inst_29089 = (state_29182[(19)]);var inst_29092 = (state_29182[(12)]);var inst_29092__$1 = cljs.core.nth.call(null,inst_29089,(0),null);var inst_29093__$1 = cljs.core.nth.call(null,inst_29089,(1),null);var inst_29094 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29095 = ["FILTER-RQ",inst_29092__$1,inst_29093__$1];var inst_29096 = (new cljs.core.PersistentVector(null,3,(5),inst_29094,inst_29095,null));var inst_29097 = cljs.core.clj__GT_js.call(null,inst_29096);var inst_29098 = console.log(inst_29097);var inst_29099 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_29100 = cljs.core.keys.call(null,inst_29093__$1);var inst_29105 = cljs.core.seq.call(null,inst_29100);var inst_29106 = inst_29105;var inst_29107 = null;var inst_29108 = (0);var inst_29109 = (0);var state_29182__$1 = (function (){var statearr_29216 = state_29182;(statearr_29216[(14)] = inst_29109);
(statearr_29216[(15)] = inst_29107);
(statearr_29216[(16)] = inst_29108);
(statearr_29216[(24)] = inst_29098);
(statearr_29216[(8)] = inst_29093__$1);
(statearr_29216[(10)] = inst_29099);
(statearr_29216[(18)] = inst_29106);
(statearr_29216[(12)] = inst_29092__$1);
return statearr_29216;
})();var statearr_29217_29289 = state_29182__$1;(statearr_29217_29289[(2)] = null);
(statearr_29217_29289[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (14)))
{var state_29182__$1 = state_29182;var statearr_29218_29290 = state_29182__$1;(statearr_29218_29290[(2)] = null);
(statearr_29218_29290[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (26)))
{var state_29182__$1 = state_29182;var statearr_29219_29291 = state_29182__$1;(statearr_29219_29291[(2)] = null);
(statearr_29219_29291[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (16)))
{var inst_29134 = (state_29182[(7)]);var inst_29136 = cljs.core.chunked_seq_QMARK_.call(null,inst_29134);var state_29182__$1 = state_29182;if(inst_29136)
{var statearr_29220_29292 = state_29182__$1;(statearr_29220_29292[(1)] = (19));
} else
{var statearr_29221_29293 = state_29182__$1;(statearr_29221_29293[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (10)))
{var inst_29109 = (state_29182[(14)]);var inst_29107 = (state_29182[(15)]);var inst_29121 = (state_29182[(21)]);var inst_29114 = (state_29182[(22)]);var inst_29093 = (state_29182[(8)]);var inst_29099 = (state_29182[(10)]);var inst_29092 = (state_29182[(12)]);var inst_29114__$1 = cljs.core._nth.call(null,inst_29107,inst_29109);var inst_29115 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29116 = cljs.core.get.call(null,inst_29093,inst_29114__$1);var inst_29117 = ["FILTER",inst_29092,inst_29114__$1,inst_29116];var inst_29118 = (new cljs.core.PersistentVector(null,4,(5),inst_29115,inst_29117,null));var inst_29119 = cljs.core.clj__GT_js.call(null,inst_29118);var inst_29120 = console.log(inst_29119);var inst_29121__$1 = cljs.core.get.call(null,inst_29099,inst_29114__$1);var state_29182__$1 = (function (){var statearr_29222 = state_29182;(statearr_29222[(21)] = inst_29121__$1);
(statearr_29222[(22)] = inst_29114__$1);
(statearr_29222[(25)] = inst_29120);
return statearr_29222;
})();if(cljs.core.truth_(inst_29121__$1))
{var statearr_29223_29294 = state_29182__$1;(statearr_29223_29294[(1)] = (13));
} else
{var statearr_29224_29295 = state_29182__$1;(statearr_29224_29295[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (18)))
{var inst_29166 = (state_29182[(2)]);var state_29182__$1 = state_29182;var statearr_29225_29296 = state_29182__$1;(statearr_29225_29296[(2)] = inst_29166);
(statearr_29225_29296[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29183 === (8)))
{var inst_29109 = (state_29182[(14)]);var inst_29108 = (state_29182[(16)]);var inst_29111 = (inst_29109 < inst_29108);var inst_29112 = inst_29111;var state_29182__$1 = state_29182;if(cljs.core.truth_(inst_29112))
{var statearr_29226_29297 = state_29182__$1;(statearr_29226_29297[(1)] = (10));
} else
{var statearr_29227_29298 = state_29182__$1;(statearr_29227_29298[(1)] = (11));
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
});})(c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
;return ((function (switch__11461__auto__,c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29231[(0)] = state_machine__11462__auto__);
(statearr_29231[(1)] = (1));
return statearr_29231;
});
var state_machine__11462__auto____1 = (function (state_29182){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29182);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29232){if((e29232 instanceof Object))
{var ex__11465__auto__ = e29232;var statearr_29233_29299 = state_29182;(statearr_29233_29299[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29182);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29232;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29300 = state_29182;
state_29182 = G__29300;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29182){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
})();var state__11519__auto__ = (function (){var statearr_29234 = f__11518__auto__.call(null);(statearr_29234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29234;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
);
return c__11517__auto__;
});})(owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
;
clustermap.components.filter.t29074.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function (_29076){var self__ = this;
var _29076__$1 = this;return self__.meta29075;
});})(owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
;
clustermap.components.filter.t29074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function (_29076,meta29075__$1){var self__ = this;
var _29076__$1 = this;return (new clustermap.components.filter.t29074(self__.G__28912,self__.owner,self__.input_schema28909,self__.constructor28903,self__.map28905,self__.component_specs,self__.filter_spec,self__.output_schema28908,self__.history,self__.input_checker28910,self__.map28907,self__.components,self__.validate__6034__auto__,self__.id,self__.map28906,self__.filter_rq_pub,self__.ufv__,self__.output_checker28911,self__.url_components,meta29075__$1));
});})(owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
;
clustermap.components.filter.__GT_t29074 = ((function (owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911){
return (function __GT_t29074(G__28912__$1,owner__$1,input_schema28909__$1,constructor28903__$1,map28905__$1,component_specs__$1,filter_spec__$1,output_schema28908__$1,history__$1,input_checker28910__$1,map28907__$1,components__$1,validate__6034__auto____$1,id__$1,map28906__$1,filter_rq_pub__$1,ufv____$1,output_checker28911__$1,url_components__$1,meta29075){return (new clustermap.components.filter.t29074(G__28912__$1,owner__$1,input_schema28909__$1,constructor28903__$1,map28905__$1,component_specs__$1,filter_spec__$1,output_schema28908__$1,history__$1,input_checker28910__$1,map28907__$1,components__$1,validate__6034__auto____$1,id__$1,map28906__$1,filter_rq_pub__$1,ufv____$1,output_checker28911__$1,url_components__$1,meta29075));
});})(owner,history,filter_rq_pub,map28906,url_components,components,component_specs,id,filter_spec,map28907,validate__6034__auto__,ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
;
}
return (new clustermap.components.filter.t29074(G__28912,owner,input_schema28909,constructor28903,map28905,component_specs,filter_spec,output_schema28908,history,input_checker28910,map28907,components,validate__6034__auto__,id,map28906,filter_rq_pub,ufv__,output_checker28911,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29301 = output_checker28911.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29301))
{var error__6036__auto___29302 = temp__4126__auto___29301;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28903","constructor28903",251194539,null),cljs.core.pr_str.call(null,error__6036__auto___29302)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29302,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28908,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28908,input_schema28909,input_checker28910,output_checker28911))
,schema.core.make_fn_schema.call(null,output_schema28908,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28909], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___29238){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner28902,p__29235){var vec__29237 = p__29235;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29237,(0),null);return component_fnk__7881__auto___29238.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28902),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28902,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner28902,var_args){
var p__29235 = null;if (arguments.length > 2) {
  p__29235 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner28902,p__29235);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__29303){
var data__7882__auto__ = cljs.core.first(arglist__29303);
arglist__29303 = cljs.core.next(arglist__29303);
var owner28902 = cljs.core.first(arglist__29303);
var p__29235 = cljs.core.rest(arglist__29303);
return filter_component__delegate(data__7882__auto__,owner28902,p__29235);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___29238))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m28904){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m28904);
});
__GT_filter_component = function(cursor__7850__auto__,m28904){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m28904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
