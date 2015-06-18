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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29878){var map__29880 = p__29878;var map__29880__$1 = ((cljs.core.seq_QMARK_.call(null,map__29880))?cljs.core.apply.call(null,cljs.core.hash_map,map__29880):map__29880);var filter_spec = map__29880__$1;var component_descrs = cljs.core.get.call(null,map__29880__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29880__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29880__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29881){var map__29883 = p__29881;var map__29883__$1 = ((cljs.core.seq_QMARK_.call(null,map__29883))?cljs.core.apply.call(null,cljs.core.hash_map,map__29883):map__29883);var filter_spec = map__29883__$1;var component_descrs = cljs.core.get.call(null,map__29883__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29883__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29883__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29884,component_filter_rq_chan){var map__29889 = p__29884;var map__29889__$1 = ((cljs.core.seq_QMARK_.call(null,map__29889))?cljs.core.apply.call(null,cljs.core.hash_map,map__29889):map__29889);var component_spec = map__29889__$1;var type = cljs.core.get.call(null,map__29889__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29890 = cljs.core._EQ_;var expr__29891 = type;if(cljs.core.truth_(pred__29890.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29891)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29890.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29891)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29890.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29891)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29890.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29891)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29890.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29891)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29891))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29893,component_filter_rq_chan){var map__29895 = p__29893;var map__29895__$1 = ((cljs.core.seq_QMARK_.call(null,map__29895))?cljs.core.apply.call(null,cljs.core.hash_map,map__29895):map__29895);var component_spec = map__29895__$1;var visible = cljs.core.get.call(null,map__29895__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29895__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29895__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29895__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29897 = schema.core.Any;var input_schema29898 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29896","map29896",1421365636,null))], null);var input_checker29899 = schema.core.checker.call(null,input_schema29898);var output_checker29900 = schema.core.checker.call(null,output_schema29897);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29897,input_schema29898,input_checker29899,output_checker29900){
return (function render_STAR_(G__29901){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29901], null);var temp__4126__auto___29919 = input_checker29899.call(null,args__6035__auto___29918);if(cljs.core.truth_(temp__4126__auto___29919))
{var error__6036__auto___29920 = temp__4126__auto___29919;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29920)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29920,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29918,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29898,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29896 = G__29901;while(true){
if(cljs.core.map_QMARK_.call(null,map29896))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29896)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29896,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29896,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29896,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29897,input_schema29898,input_checker29899,output_checker29900){
return (function iter__29910(s__29911){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29897,input_schema29898,input_checker29899,output_checker29900){
return (function (){var s__29911__$1 = s__29911;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29911__$1);if(temp__4126__auto__)
{var s__29911__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29911__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29911__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29913 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29912 = (0);while(true){
if((i__29912 < size__4376__auto__))
{var map__29916 = cljs.core._nth.call(null,c__4375__auto__,i__29912);var map__29916__$1 = ((cljs.core.seq_QMARK_.call(null,map__29916))?cljs.core.apply.call(null,cljs.core.hash_map,map__29916):map__29916);var component_spec = map__29916__$1;var id = cljs.core.get.call(null,map__29916__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29913,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29921 = (i__29912 + (1));
i__29912 = G__29921;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29913),iter__29910.call(null,cljs.core.chunk_rest.call(null,s__29911__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29913),null);
}
} else
{var map__29917 = cljs.core.first.call(null,s__29911__$2);var map__29917__$1 = ((cljs.core.seq_QMARK_.call(null,map__29917))?cljs.core.apply.call(null,cljs.core.hash_map,map__29917):map__29917);var component_spec = map__29917__$1;var id = cljs.core.get.call(null,map__29917__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29910.call(null,cljs.core.rest.call(null,s__29911__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29897,input_schema29898,input_checker29899,output_checker29900))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29897,input_schema29898,input_checker29899,output_checker29900))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29922 = output_checker29900.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29922))
{var error__6036__auto___29923 = temp__4126__auto___29922;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29923)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29923,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29897,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29897,input_schema29898,input_checker29899,output_checker29900))
,schema.core.make_fn_schema.call(null,output_schema29897,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29898], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30260 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29930 = schema.core.Any;var input_schema29931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29927","map29927",-1348084642,null))], null);var input_checker29932 = schema.core.checker.call(null,input_schema29931);var output_checker29933 = schema.core.checker.call(null,output_schema29930);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function constructor29925(G__29934){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29934], null);var temp__4126__auto___30262 = input_checker29932.call(null,args__6035__auto___30261);if(cljs.core.truth_(temp__4126__auto___30262))
{var error__6036__auto___30263 = temp__4126__auto___30262;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29925","constructor29925",-115450593,null),cljs.core.pr_str.call(null,error__6036__auto___30263)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30263,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30261,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29931,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29927 = G__29934;while(true){
if(cljs.core.map_QMARK_.call(null,map29927))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29927)));
}
var map29929 = plumbing.fnk.schema.safe_get.call(null,map29927,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29929,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29928 = plumbing.fnk.schema.safe_get.call(null,map29927,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29928,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29928,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29927,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30096 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30096 = (function (output_schema29930,owner,map29928,map29929,G__29934,input_schema29931,component_specs,filter_spec,history,output_checker29933,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,map29927,input_checker29932,constructor29925,meta30097){
this.output_schema29930 = output_schema29930;
this.owner = owner;
this.map29928 = map29928;
this.map29929 = map29929;
this.G__29934 = G__29934;
this.input_schema29931 = input_schema29931;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.history = history;
this.output_checker29933 = output_checker29933;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.map29927 = map29927;
this.input_checker29932 = input_checker29932;
this.constructor29925 = constructor29925;
this.meta30097 = meta30097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30096.cljs$lang$type = true;
clustermap.components.filter.t30096.cljs$lang$ctorStr = "clustermap.components.filter/t30096";
clustermap.components.filter.t30096.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30096");
});})(owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
;
clustermap.components.filter.t30096.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30096.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
;
clustermap.components.filter.t30096.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30096.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function (_,p__30099,___$1){var self__ = this;
var map__30100 = p__30099;var map__30100__$1 = ((cljs.core.seq_QMARK_.call(null,map__30100))?cljs.core.apply.call(null,cljs.core.hash_map,map__30100):map__30100);var next_props = map__30100__$1;var map__30101 = cljs.core.get.call(null,map__30100__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30101__$1 = ((cljs.core.seq_QMARK_.call(null,map__30101))?cljs.core.apply.call(null,cljs.core.hash_map,map__30101):map__30101);var next_filter_spec = map__30101__$1;var map__30102 = cljs.core.get.call(null,map__30101__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30102__$1 = ((cljs.core.seq_QMARK_.call(null,map__30102))?cljs.core.apply.call(null,cljs.core.hash_map,map__30102):map__30102);var next_url_components = map__30102__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
;
clustermap.components.filter.t30096.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30096.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
;
clustermap.components.filter.t30096.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30096.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30103_30264 = cljs.core.seq.call(null,chs);var chunk__30104_30265 = null;var count__30105_30266 = (0);var i__30106_30267 = (0);while(true){
if((i__30106_30267 < count__30105_30266))
{var vec__30107_30268 = cljs.core._nth.call(null,chunk__30104_30265,i__30106_30267);var component_id_30269 = cljs.core.nth.call(null,vec__30107_30268,(0),null);var ch_30270 = cljs.core.nth.call(null,vec__30107_30268,(1),null);cljs.core.async.close_BANG_.call(null,ch_30270);
{
var G__30271 = seq__30103_30264;
var G__30272 = chunk__30104_30265;
var G__30273 = count__30105_30266;
var G__30274 = (i__30106_30267 + (1));
seq__30103_30264 = G__30271;
chunk__30104_30265 = G__30272;
count__30105_30266 = G__30273;
i__30106_30267 = G__30274;
continue;
}
} else
{var temp__4126__auto___30275 = cljs.core.seq.call(null,seq__30103_30264);if(temp__4126__auto___30275)
{var seq__30103_30276__$1 = temp__4126__auto___30275;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30103_30276__$1))
{var c__4408__auto___30277 = cljs.core.chunk_first.call(null,seq__30103_30276__$1);{
var G__30278 = cljs.core.chunk_rest.call(null,seq__30103_30276__$1);
var G__30279 = c__4408__auto___30277;
var G__30280 = cljs.core.count.call(null,c__4408__auto___30277);
var G__30281 = (0);
seq__30103_30264 = G__30278;
chunk__30104_30265 = G__30279;
count__30105_30266 = G__30280;
i__30106_30267 = G__30281;
continue;
}
} else
{var vec__30108_30282 = cljs.core.first.call(null,seq__30103_30276__$1);var component_id_30283 = cljs.core.nth.call(null,vec__30108_30282,(0),null);var ch_30284 = cljs.core.nth.call(null,vec__30108_30282,(1),null);cljs.core.async.close_BANG_.call(null,ch_30284);
{
var G__30285 = cljs.core.next.call(null,seq__30103_30276__$1);
var G__30286 = null;
var G__30287 = (0);
var G__30288 = (0);
seq__30103_30264 = G__30285;
chunk__30104_30265 = G__30286;
count__30105_30266 = G__30287;
i__30106_30267 = G__30288;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
;
clustermap.components.filter.t30096.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30096.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function (state_30204){var state_val_30205 = (state_30204[(1)]);if((state_val_30205 === (7)))
{var inst_30195 = (state_30204[(2)]);var state_30204__$1 = state_30204;if(cljs.core.truth_(inst_30195))
{var statearr_30206_30289 = state_30204__$1;(statearr_30206_30289[(1)] = (25));
} else
{var statearr_30207_30290 = state_30204__$1;(statearr_30207_30290[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (20)))
{var inst_30156 = (state_30204[(7)]);var inst_30114 = (state_30204[(8)]);var inst_30121 = (state_30204[(9)]);var inst_30172 = (state_30204[(10)]);var inst_30165 = (state_30204[(11)]);var inst_30115 = (state_30204[(12)]);var inst_30165__$1 = cljs.core.first.call(null,inst_30156);var inst_30166 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30167 = cljs.core.get.call(null,inst_30115,inst_30165__$1);var inst_30168 = ["FILTER",inst_30114,inst_30165__$1,inst_30167];var inst_30169 = (new cljs.core.PersistentVector(null,4,(5),inst_30166,inst_30168,null));var inst_30170 = cljs.core.clj__GT_js.call(null,inst_30169);var inst_30171 = console.log(inst_30170);var inst_30172__$1 = cljs.core.get.call(null,inst_30121,inst_30165__$1);var state_30204__$1 = (function (){var statearr_30208 = state_30204;(statearr_30208[(10)] = inst_30172__$1);
(statearr_30208[(13)] = inst_30171);
(statearr_30208[(11)] = inst_30165__$1);
return statearr_30208;
})();if(cljs.core.truth_(inst_30172__$1))
{var statearr_30209_30291 = state_30204__$1;(statearr_30209_30291[(1)] = (22));
} else
{var statearr_30210_30292 = state_30204__$1;(statearr_30210_30292[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (27)))
{var inst_30200 = (state_30204[(2)]);var state_30204__$1 = state_30204;var statearr_30211_30293 = state_30204__$1;(statearr_30211_30293[(2)] = inst_30200);
(statearr_30211_30293[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (1)))
{var state_30204__$1 = state_30204;var statearr_30212_30294 = state_30204__$1;(statearr_30212_30294[(2)] = null);
(statearr_30212_30294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (24)))
{var inst_30156 = (state_30204[(7)]);var inst_30181 = (state_30204[(2)]);var inst_30182 = cljs.core.next.call(null,inst_30156);var inst_30128 = inst_30182;var inst_30129 = null;var inst_30130 = (0);var inst_30131 = (0);var state_30204__$1 = (function (){var statearr_30216 = state_30204;(statearr_30216[(14)] = inst_30130);
(statearr_30216[(15)] = inst_30129);
(statearr_30216[(16)] = inst_30128);
(statearr_30216[(17)] = inst_30131);
(statearr_30216[(18)] = inst_30181);
return statearr_30216;
})();var statearr_30217_30295 = state_30204__$1;(statearr_30217_30295[(2)] = null);
(statearr_30217_30295[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (4)))
{var inst_30111 = (state_30204[(19)]);var inst_30111__$1 = (state_30204[(2)]);var state_30204__$1 = (function (){var statearr_30218 = state_30204;(statearr_30218[(19)] = inst_30111__$1);
return statearr_30218;
})();if(cljs.core.truth_(inst_30111__$1))
{var statearr_30219_30296 = state_30204__$1;(statearr_30219_30296[(1)] = (5));
} else
{var statearr_30220_30297 = state_30204__$1;(statearr_30220_30297[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (15)))
{var inst_30130 = (state_30204[(14)]);var inst_30129 = (state_30204[(15)]);var inst_30128 = (state_30204[(16)]);var inst_30131 = (state_30204[(17)]);var inst_30152 = (state_30204[(2)]);var inst_30153 = (inst_30131 + (1));var tmp30213 = inst_30130;var tmp30214 = inst_30129;var tmp30215 = inst_30128;var inst_30128__$1 = tmp30215;var inst_30129__$1 = tmp30214;var inst_30130__$1 = tmp30213;var inst_30131__$1 = inst_30153;var state_30204__$1 = (function (){var statearr_30221 = state_30204;(statearr_30221[(14)] = inst_30130__$1);
(statearr_30221[(15)] = inst_30129__$1);
(statearr_30221[(16)] = inst_30128__$1);
(statearr_30221[(17)] = inst_30131__$1);
(statearr_30221[(20)] = inst_30152);
return statearr_30221;
})();var statearr_30222_30298 = state_30204__$1;(statearr_30222_30298[(2)] = null);
(statearr_30222_30298[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (21)))
{var inst_30185 = (state_30204[(2)]);var state_30204__$1 = state_30204;var statearr_30223_30299 = state_30204__$1;(statearr_30223_30299[(2)] = inst_30185);
(statearr_30223_30299[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (13)))
{var inst_30136 = (state_30204[(21)]);var inst_30143 = (state_30204[(22)]);var inst_30115 = (state_30204[(12)]);var inst_30145 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30146 = cljs.core.get.call(null,inst_30115,inst_30136);var inst_30147 = [inst_30136,inst_30146];var inst_30148 = (new cljs.core.PersistentVector(null,2,(5),inst_30145,inst_30147,null));var inst_30149 = cljs.core.async.put_BANG_.call(null,inst_30143,inst_30148);var state_30204__$1 = state_30204;var statearr_30224_30300 = state_30204__$1;(statearr_30224_30300[(2)] = inst_30149);
(statearr_30224_30300[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (22)))
{var inst_30172 = (state_30204[(10)]);var inst_30165 = (state_30204[(11)]);var inst_30115 = (state_30204[(12)]);var inst_30174 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30175 = cljs.core.get.call(null,inst_30115,inst_30165);var inst_30176 = [inst_30165,inst_30175];var inst_30177 = (new cljs.core.PersistentVector(null,2,(5),inst_30174,inst_30176,null));var inst_30178 = cljs.core.async.put_BANG_.call(null,inst_30172,inst_30177);var state_30204__$1 = state_30204;var statearr_30225_30301 = state_30204__$1;(statearr_30225_30301[(2)] = inst_30178);
(statearr_30225_30301[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (6)))
{var state_30204__$1 = state_30204;var statearr_30226_30302 = state_30204__$1;(statearr_30226_30302[(2)] = null);
(statearr_30226_30302[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (25)))
{var state_30204__$1 = state_30204;var statearr_30227_30303 = state_30204__$1;(statearr_30227_30303[(2)] = null);
(statearr_30227_30303[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (17)))
{var state_30204__$1 = state_30204;var statearr_30228_30304 = state_30204__$1;(statearr_30228_30304[(2)] = null);
(statearr_30228_30304[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (3)))
{var inst_30202 = (state_30204[(2)]);var state_30204__$1 = state_30204;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30204__$1,inst_30202);
} else
{if((state_val_30205 === (12)))
{var inst_30190 = (state_30204[(2)]);var state_30204__$1 = state_30204;var statearr_30229_30305 = state_30204__$1;(statearr_30229_30305[(2)] = inst_30190);
(statearr_30229_30305[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (2)))
{var state_30204__$1 = state_30204;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30204__$1,(4),filter_rq_sub);
} else
{if((state_val_30205 === (23)))
{var state_30204__$1 = state_30204;var statearr_30230_30306 = state_30204__$1;(statearr_30230_30306[(2)] = null);
(statearr_30230_30306[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (19)))
{var inst_30156 = (state_30204[(7)]);var inst_30160 = cljs.core.chunk_first.call(null,inst_30156);var inst_30161 = cljs.core.chunk_rest.call(null,inst_30156);var inst_30162 = cljs.core.count.call(null,inst_30160);var inst_30128 = inst_30161;var inst_30129 = inst_30160;var inst_30130 = inst_30162;var inst_30131 = (0);var state_30204__$1 = (function (){var statearr_30231 = state_30204;(statearr_30231[(14)] = inst_30130);
(statearr_30231[(15)] = inst_30129);
(statearr_30231[(16)] = inst_30128);
(statearr_30231[(17)] = inst_30131);
return statearr_30231;
})();var statearr_30232_30307 = state_30204__$1;(statearr_30232_30307[(2)] = null);
(statearr_30232_30307[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (11)))
{var inst_30156 = (state_30204[(7)]);var inst_30128 = (state_30204[(16)]);var inst_30156__$1 = cljs.core.seq.call(null,inst_30128);var state_30204__$1 = (function (){var statearr_30233 = state_30204;(statearr_30233[(7)] = inst_30156__$1);
return statearr_30233;
})();if(inst_30156__$1)
{var statearr_30234_30308 = state_30204__$1;(statearr_30234_30308[(1)] = (16));
} else
{var statearr_30235_30309 = state_30204__$1;(statearr_30235_30309[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (9)))
{var inst_30192 = (state_30204[(2)]);var state_30204__$1 = (function (){var statearr_30236 = state_30204;(statearr_30236[(23)] = inst_30192);
return statearr_30236;
})();var statearr_30237_30310 = state_30204__$1;(statearr_30237_30310[(2)] = true);
(statearr_30237_30310[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (5)))
{var inst_30114 = (state_30204[(8)]);var inst_30111 = (state_30204[(19)]);var inst_30115 = (state_30204[(12)]);var inst_30114__$1 = cljs.core.nth.call(null,inst_30111,(0),null);var inst_30115__$1 = cljs.core.nth.call(null,inst_30111,(1),null);var inst_30116 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30117 = ["FILTER-RQ",inst_30114__$1,inst_30115__$1];var inst_30118 = (new cljs.core.PersistentVector(null,3,(5),inst_30116,inst_30117,null));var inst_30119 = cljs.core.clj__GT_js.call(null,inst_30118);var inst_30120 = console.log(inst_30119);var inst_30121 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30122 = cljs.core.keys.call(null,inst_30115__$1);var inst_30127 = cljs.core.seq.call(null,inst_30122);var inst_30128 = inst_30127;var inst_30129 = null;var inst_30130 = (0);var inst_30131 = (0);var state_30204__$1 = (function (){var statearr_30238 = state_30204;(statearr_30238[(14)] = inst_30130);
(statearr_30238[(8)] = inst_30114__$1);
(statearr_30238[(9)] = inst_30121);
(statearr_30238[(15)] = inst_30129);
(statearr_30238[(16)] = inst_30128);
(statearr_30238[(17)] = inst_30131);
(statearr_30238[(24)] = inst_30120);
(statearr_30238[(12)] = inst_30115__$1);
return statearr_30238;
})();var statearr_30239_30311 = state_30204__$1;(statearr_30239_30311[(2)] = null);
(statearr_30239_30311[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (14)))
{var state_30204__$1 = state_30204;var statearr_30240_30312 = state_30204__$1;(statearr_30240_30312[(2)] = null);
(statearr_30240_30312[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (26)))
{var state_30204__$1 = state_30204;var statearr_30241_30313 = state_30204__$1;(statearr_30241_30313[(2)] = null);
(statearr_30241_30313[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (16)))
{var inst_30156 = (state_30204[(7)]);var inst_30158 = cljs.core.chunked_seq_QMARK_.call(null,inst_30156);var state_30204__$1 = state_30204;if(inst_30158)
{var statearr_30242_30314 = state_30204__$1;(statearr_30242_30314[(1)] = (19));
} else
{var statearr_30243_30315 = state_30204__$1;(statearr_30243_30315[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (10)))
{var inst_30136 = (state_30204[(21)]);var inst_30114 = (state_30204[(8)]);var inst_30121 = (state_30204[(9)]);var inst_30129 = (state_30204[(15)]);var inst_30131 = (state_30204[(17)]);var inst_30143 = (state_30204[(22)]);var inst_30115 = (state_30204[(12)]);var inst_30136__$1 = cljs.core._nth.call(null,inst_30129,inst_30131);var inst_30137 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30138 = cljs.core.get.call(null,inst_30115,inst_30136__$1);var inst_30139 = ["FILTER",inst_30114,inst_30136__$1,inst_30138];var inst_30140 = (new cljs.core.PersistentVector(null,4,(5),inst_30137,inst_30139,null));var inst_30141 = cljs.core.clj__GT_js.call(null,inst_30140);var inst_30142 = console.log(inst_30141);var inst_30143__$1 = cljs.core.get.call(null,inst_30121,inst_30136__$1);var state_30204__$1 = (function (){var statearr_30244 = state_30204;(statearr_30244[(21)] = inst_30136__$1);
(statearr_30244[(25)] = inst_30142);
(statearr_30244[(22)] = inst_30143__$1);
return statearr_30244;
})();if(cljs.core.truth_(inst_30143__$1))
{var statearr_30245_30316 = state_30204__$1;(statearr_30245_30316[(1)] = (13));
} else
{var statearr_30246_30317 = state_30204__$1;(statearr_30246_30317[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (18)))
{var inst_30188 = (state_30204[(2)]);var state_30204__$1 = state_30204;var statearr_30247_30318 = state_30204__$1;(statearr_30247_30318[(2)] = inst_30188);
(statearr_30247_30318[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30205 === (8)))
{var inst_30130 = (state_30204[(14)]);var inst_30131 = (state_30204[(17)]);var inst_30133 = (inst_30131 < inst_30130);var inst_30134 = inst_30133;var state_30204__$1 = state_30204;if(cljs.core.truth_(inst_30134))
{var statearr_30248_30319 = state_30204__$1;(statearr_30248_30319[(1)] = (10));
} else
{var statearr_30249_30320 = state_30204__$1;(statearr_30249_30320[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30253[(0)] = state_machine__9111__auto__);
(statearr_30253[(1)] = (1));
return statearr_30253;
});
var state_machine__9111__auto____1 = (function (state_30204){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30204);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30254){if((e30254 instanceof Object))
{var ex__9114__auto__ = e30254;var statearr_30255_30321 = state_30204;(statearr_30255_30321[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30204);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30254;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30322 = state_30204;
state_30204 = G__30322;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30204){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
})();var state__9127__auto__ = (function (){var statearr_30256 = f__9126__auto__.call(null);(statearr_30256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
;
clustermap.components.filter.t30096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function (_30098){var self__ = this;
var _30098__$1 = this;return self__.meta30097;
});})(owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
;
clustermap.components.filter.t30096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function (_30098,meta30097__$1){var self__ = this;
var _30098__$1 = this;return (new clustermap.components.filter.t30096(self__.output_schema29930,self__.owner,self__.map29928,self__.map29929,self__.G__29934,self__.input_schema29931,self__.component_specs,self__.filter_spec,self__.history,self__.output_checker29933,self__.components,self__.validate__6034__auto__,self__.id,self__.filter_rq_pub,self__.ufv__,self__.url_components,self__.map29927,self__.input_checker29932,self__.constructor29925,meta30097__$1));
});})(owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
;
clustermap.components.filter.__GT_t30096 = ((function (owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933){
return (function __GT_t30096(output_schema29930__$1,owner__$1,map29928__$1,map29929__$1,G__29934__$1,input_schema29931__$1,component_specs__$1,filter_spec__$1,history__$1,output_checker29933__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,map29927__$1,input_checker29932__$1,constructor29925__$1,meta30097){return (new clustermap.components.filter.t30096(output_schema29930__$1,owner__$1,map29928__$1,map29929__$1,G__29934__$1,input_schema29931__$1,component_specs__$1,filter_spec__$1,history__$1,output_checker29933__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,map29927__$1,input_checker29932__$1,constructor29925__$1,meta30097));
});})(owner,history,filter_rq_pub,map29928,url_components,components,component_specs,id,filter_spec,map29929,validate__6034__auto__,ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
;
}
return (new clustermap.components.filter.t30096(output_schema29930,owner,map29928,map29929,G__29934,input_schema29931,component_specs,filter_spec,history,output_checker29933,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,map29927,input_checker29932,constructor29925,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30323 = output_checker29933.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30323))
{var error__6036__auto___30324 = temp__4126__auto___30323;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29925","constructor29925",-115450593,null),cljs.core.pr_str.call(null,error__6036__auto___30324)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30324,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29930,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29930,input_schema29931,input_checker29932,output_checker29933))
,schema.core.make_fn_schema.call(null,output_schema29930,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29931], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30260){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29924,p__30257){var vec__30259 = p__30257;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30259,(0),null);return component_fnk__7881__auto___30260.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29924),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29924,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29924,var_args){
var p__30257 = null;if (arguments.length > 2) {
  p__30257 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29924,p__30257);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30325){
var data__7882__auto__ = cljs.core.first(arglist__30325);
arglist__30325 = cljs.core.next(arglist__30325);
var owner29924 = cljs.core.first(arglist__30325);
var p__30257 = cljs.core.rest(arglist__30325);
return filter_component__delegate(data__7882__auto__,owner29924,p__30257);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30260))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29926){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29926);
});
__GT_filter_component = function(cursor__7850__auto__,m29926){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
