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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29881){var map__29883 = p__29881;var map__29883__$1 = ((cljs.core.seq_QMARK_.call(null,map__29883))?cljs.core.apply.call(null,cljs.core.hash_map,map__29883):map__29883);var filter_spec = map__29883__$1;var component_descrs = cljs.core.get.call(null,map__29883__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29883__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29883__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29884){var map__29886 = p__29884;var map__29886__$1 = ((cljs.core.seq_QMARK_.call(null,map__29886))?cljs.core.apply.call(null,cljs.core.hash_map,map__29886):map__29886);var filter_spec = map__29886__$1;var component_descrs = cljs.core.get.call(null,map__29886__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29886__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29886__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29887,component_filter_rq_chan){var map__29892 = p__29887;var map__29892__$1 = ((cljs.core.seq_QMARK_.call(null,map__29892))?cljs.core.apply.call(null,cljs.core.hash_map,map__29892):map__29892);var component_spec = map__29892__$1;var type = cljs.core.get.call(null,map__29892__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29893 = cljs.core._EQ_;var expr__29894 = type;if(cljs.core.truth_(pred__29893.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29894)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29893.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29894)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29893.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29894)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29893.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29894)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29893.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29894)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29894))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29896,component_filter_rq_chan){var map__29898 = p__29896;var map__29898__$1 = ((cljs.core.seq_QMARK_.call(null,map__29898))?cljs.core.apply.call(null,cljs.core.hash_map,map__29898):map__29898);var component_spec = map__29898__$1;var visible = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29898__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29900 = schema.core.Any;var input_schema29901 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29899","map29899",2007708122,null))], null);var input_checker29902 = schema.core.checker.call(null,input_schema29901);var output_checker29903 = schema.core.checker.call(null,output_schema29900);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29900,input_schema29901,input_checker29902,output_checker29903){
return (function render_STAR_(G__29904){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29921 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29904], null);var temp__4126__auto___29922 = input_checker29902.call(null,args__6035__auto___29921);if(cljs.core.truth_(temp__4126__auto___29922))
{var error__6036__auto___29923 = temp__4126__auto___29922;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29923)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29923,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29921,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29901,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29899 = G__29904;while(true){
if(cljs.core.map_QMARK_.call(null,map29899))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29899)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29899,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29899,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29899,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29900,input_schema29901,input_checker29902,output_checker29903){
return (function iter__29913(s__29914){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29900,input_schema29901,input_checker29902,output_checker29903){
return (function (){var s__29914__$1 = s__29914;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29914__$1);if(temp__4126__auto__)
{var s__29914__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29914__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29914__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29916 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29915 = (0);while(true){
if((i__29915 < size__4376__auto__))
{var map__29919 = cljs.core._nth.call(null,c__4375__auto__,i__29915);var map__29919__$1 = ((cljs.core.seq_QMARK_.call(null,map__29919))?cljs.core.apply.call(null,cljs.core.hash_map,map__29919):map__29919);var component_spec = map__29919__$1;var id = cljs.core.get.call(null,map__29919__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29916,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29924 = (i__29915 + (1));
i__29915 = G__29924;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29916),iter__29913.call(null,cljs.core.chunk_rest.call(null,s__29914__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29916),null);
}
} else
{var map__29920 = cljs.core.first.call(null,s__29914__$2);var map__29920__$1 = ((cljs.core.seq_QMARK_.call(null,map__29920))?cljs.core.apply.call(null,cljs.core.hash_map,map__29920):map__29920);var component_spec = map__29920__$1;var id = cljs.core.get.call(null,map__29920__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29913.call(null,cljs.core.rest.call(null,s__29914__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29900,input_schema29901,input_checker29902,output_checker29903))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29900,input_schema29901,input_checker29902,output_checker29903))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29925 = output_checker29903.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29925))
{var error__6036__auto___29926 = temp__4126__auto___29925;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29926)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29926,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29900,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29900,input_schema29901,input_checker29902,output_checker29903))
,schema.core.make_fn_schema.call(null,output_schema29900,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29901], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30263 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29933 = schema.core.Any;var input_schema29934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29930","map29930",-332344390,null))], null);var input_checker29935 = schema.core.checker.call(null,input_schema29934);var output_checker29936 = schema.core.checker.call(null,output_schema29933);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function constructor29928(G__29937){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29937], null);var temp__4126__auto___30265 = input_checker29935.call(null,args__6035__auto___30264);if(cljs.core.truth_(temp__4126__auto___30265))
{var error__6036__auto___30266 = temp__4126__auto___30265;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29928","constructor29928",-200757927,null),cljs.core.pr_str.call(null,error__6036__auto___30266)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30266,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30264,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29934,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29930 = G__29937;while(true){
if(cljs.core.map_QMARK_.call(null,map29930))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29930)));
}
var map29932 = plumbing.fnk.schema.safe_get.call(null,map29930,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29932,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29931 = plumbing.fnk.schema.safe_get.call(null,map29930,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29931,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29931,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29930,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30099 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30099 = (function (input_schema29934,G__29937,owner,map29932,output_schema29933,input_checker29935,component_specs,filter_spec,history,constructor29928,components,validate__6034__auto__,map29930,id,output_checker29936,filter_rq_pub,ufv__,url_components,map29931,meta30100){
this.input_schema29934 = input_schema29934;
this.G__29937 = G__29937;
this.owner = owner;
this.map29932 = map29932;
this.output_schema29933 = output_schema29933;
this.input_checker29935 = input_checker29935;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.history = history;
this.constructor29928 = constructor29928;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.map29930 = map29930;
this.id = id;
this.output_checker29936 = output_checker29936;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.map29931 = map29931;
this.meta30100 = meta30100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30099.cljs$lang$type = true;
clustermap.components.filter.t30099.cljs$lang$ctorStr = "clustermap.components.filter/t30099";
clustermap.components.filter.t30099.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30099");
});})(owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
;
clustermap.components.filter.t30099.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30099.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
;
clustermap.components.filter.t30099.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30099.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function (_,p__30102,___$1){var self__ = this;
var map__30103 = p__30102;var map__30103__$1 = ((cljs.core.seq_QMARK_.call(null,map__30103))?cljs.core.apply.call(null,cljs.core.hash_map,map__30103):map__30103);var next_props = map__30103__$1;var map__30104 = cljs.core.get.call(null,map__30103__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30104__$1 = ((cljs.core.seq_QMARK_.call(null,map__30104))?cljs.core.apply.call(null,cljs.core.hash_map,map__30104):map__30104);var next_filter_spec = map__30104__$1;var map__30105 = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30105__$1 = ((cljs.core.seq_QMARK_.call(null,map__30105))?cljs.core.apply.call(null,cljs.core.hash_map,map__30105):map__30105);var next_url_components = map__30105__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
;
clustermap.components.filter.t30099.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30099.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
;
clustermap.components.filter.t30099.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30099.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30106_30267 = cljs.core.seq.call(null,chs);var chunk__30107_30268 = null;var count__30108_30269 = (0);var i__30109_30270 = (0);while(true){
if((i__30109_30270 < count__30108_30269))
{var vec__30110_30271 = cljs.core._nth.call(null,chunk__30107_30268,i__30109_30270);var component_id_30272 = cljs.core.nth.call(null,vec__30110_30271,(0),null);var ch_30273 = cljs.core.nth.call(null,vec__30110_30271,(1),null);cljs.core.async.close_BANG_.call(null,ch_30273);
{
var G__30274 = seq__30106_30267;
var G__30275 = chunk__30107_30268;
var G__30276 = count__30108_30269;
var G__30277 = (i__30109_30270 + (1));
seq__30106_30267 = G__30274;
chunk__30107_30268 = G__30275;
count__30108_30269 = G__30276;
i__30109_30270 = G__30277;
continue;
}
} else
{var temp__4126__auto___30278 = cljs.core.seq.call(null,seq__30106_30267);if(temp__4126__auto___30278)
{var seq__30106_30279__$1 = temp__4126__auto___30278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30106_30279__$1))
{var c__4408__auto___30280 = cljs.core.chunk_first.call(null,seq__30106_30279__$1);{
var G__30281 = cljs.core.chunk_rest.call(null,seq__30106_30279__$1);
var G__30282 = c__4408__auto___30280;
var G__30283 = cljs.core.count.call(null,c__4408__auto___30280);
var G__30284 = (0);
seq__30106_30267 = G__30281;
chunk__30107_30268 = G__30282;
count__30108_30269 = G__30283;
i__30109_30270 = G__30284;
continue;
}
} else
{var vec__30111_30285 = cljs.core.first.call(null,seq__30106_30279__$1);var component_id_30286 = cljs.core.nth.call(null,vec__30111_30285,(0),null);var ch_30287 = cljs.core.nth.call(null,vec__30111_30285,(1),null);cljs.core.async.close_BANG_.call(null,ch_30287);
{
var G__30288 = cljs.core.next.call(null,seq__30106_30279__$1);
var G__30289 = null;
var G__30290 = (0);
var G__30291 = (0);
seq__30106_30267 = G__30288;
chunk__30107_30268 = G__30289;
count__30108_30269 = G__30290;
i__30109_30270 = G__30291;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
;
clustermap.components.filter.t30099.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30099.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function (state_30207){var state_val_30208 = (state_30207[(1)]);if((state_val_30208 === (7)))
{var inst_30198 = (state_30207[(2)]);var state_30207__$1 = state_30207;if(cljs.core.truth_(inst_30198))
{var statearr_30209_30292 = state_30207__$1;(statearr_30209_30292[(1)] = (25));
} else
{var statearr_30210_30293 = state_30207__$1;(statearr_30210_30293[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (20)))
{var inst_30159 = (state_30207[(7)]);var inst_30117 = (state_30207[(8)]);var inst_30124 = (state_30207[(9)]);var inst_30175 = (state_30207[(10)]);var inst_30168 = (state_30207[(11)]);var inst_30118 = (state_30207[(12)]);var inst_30168__$1 = cljs.core.first.call(null,inst_30159);var inst_30169 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30170 = cljs.core.get.call(null,inst_30118,inst_30168__$1);var inst_30171 = ["FILTER",inst_30117,inst_30168__$1,inst_30170];var inst_30172 = (new cljs.core.PersistentVector(null,4,(5),inst_30169,inst_30171,null));var inst_30173 = cljs.core.clj__GT_js.call(null,inst_30172);var inst_30174 = console.log(inst_30173);var inst_30175__$1 = cljs.core.get.call(null,inst_30124,inst_30168__$1);var state_30207__$1 = (function (){var statearr_30211 = state_30207;(statearr_30211[(13)] = inst_30174);
(statearr_30211[(10)] = inst_30175__$1);
(statearr_30211[(11)] = inst_30168__$1);
return statearr_30211;
})();if(cljs.core.truth_(inst_30175__$1))
{var statearr_30212_30294 = state_30207__$1;(statearr_30212_30294[(1)] = (22));
} else
{var statearr_30213_30295 = state_30207__$1;(statearr_30213_30295[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (27)))
{var inst_30203 = (state_30207[(2)]);var state_30207__$1 = state_30207;var statearr_30214_30296 = state_30207__$1;(statearr_30214_30296[(2)] = inst_30203);
(statearr_30214_30296[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (1)))
{var state_30207__$1 = state_30207;var statearr_30215_30297 = state_30207__$1;(statearr_30215_30297[(2)] = null);
(statearr_30215_30297[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (24)))
{var inst_30159 = (state_30207[(7)]);var inst_30184 = (state_30207[(2)]);var inst_30185 = cljs.core.next.call(null,inst_30159);var inst_30131 = inst_30185;var inst_30132 = null;var inst_30133 = (0);var inst_30134 = (0);var state_30207__$1 = (function (){var statearr_30219 = state_30207;(statearr_30219[(14)] = inst_30184);
(statearr_30219[(15)] = inst_30131);
(statearr_30219[(16)] = inst_30134);
(statearr_30219[(17)] = inst_30133);
(statearr_30219[(18)] = inst_30132);
return statearr_30219;
})();var statearr_30220_30298 = state_30207__$1;(statearr_30220_30298[(2)] = null);
(statearr_30220_30298[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (4)))
{var inst_30114 = (state_30207[(19)]);var inst_30114__$1 = (state_30207[(2)]);var state_30207__$1 = (function (){var statearr_30221 = state_30207;(statearr_30221[(19)] = inst_30114__$1);
return statearr_30221;
})();if(cljs.core.truth_(inst_30114__$1))
{var statearr_30222_30299 = state_30207__$1;(statearr_30222_30299[(1)] = (5));
} else
{var statearr_30223_30300 = state_30207__$1;(statearr_30223_30300[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (15)))
{var inst_30131 = (state_30207[(15)]);var inst_30134 = (state_30207[(16)]);var inst_30133 = (state_30207[(17)]);var inst_30132 = (state_30207[(18)]);var inst_30155 = (state_30207[(2)]);var inst_30156 = (inst_30134 + (1));var tmp30216 = inst_30131;var tmp30217 = inst_30133;var tmp30218 = inst_30132;var inst_30131__$1 = tmp30216;var inst_30132__$1 = tmp30218;var inst_30133__$1 = tmp30217;var inst_30134__$1 = inst_30156;var state_30207__$1 = (function (){var statearr_30224 = state_30207;(statearr_30224[(15)] = inst_30131__$1);
(statearr_30224[(16)] = inst_30134__$1);
(statearr_30224[(17)] = inst_30133__$1);
(statearr_30224[(18)] = inst_30132__$1);
(statearr_30224[(20)] = inst_30155);
return statearr_30224;
})();var statearr_30225_30301 = state_30207__$1;(statearr_30225_30301[(2)] = null);
(statearr_30225_30301[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (21)))
{var inst_30188 = (state_30207[(2)]);var state_30207__$1 = state_30207;var statearr_30226_30302 = state_30207__$1;(statearr_30226_30302[(2)] = inst_30188);
(statearr_30226_30302[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (13)))
{var inst_30146 = (state_30207[(21)]);var inst_30118 = (state_30207[(12)]);var inst_30139 = (state_30207[(22)]);var inst_30148 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30149 = cljs.core.get.call(null,inst_30118,inst_30139);var inst_30150 = [inst_30139,inst_30149];var inst_30151 = (new cljs.core.PersistentVector(null,2,(5),inst_30148,inst_30150,null));var inst_30152 = cljs.core.async.put_BANG_.call(null,inst_30146,inst_30151);var state_30207__$1 = state_30207;var statearr_30227_30303 = state_30207__$1;(statearr_30227_30303[(2)] = inst_30152);
(statearr_30227_30303[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (22)))
{var inst_30175 = (state_30207[(10)]);var inst_30168 = (state_30207[(11)]);var inst_30118 = (state_30207[(12)]);var inst_30177 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30178 = cljs.core.get.call(null,inst_30118,inst_30168);var inst_30179 = [inst_30168,inst_30178];var inst_30180 = (new cljs.core.PersistentVector(null,2,(5),inst_30177,inst_30179,null));var inst_30181 = cljs.core.async.put_BANG_.call(null,inst_30175,inst_30180);var state_30207__$1 = state_30207;var statearr_30228_30304 = state_30207__$1;(statearr_30228_30304[(2)] = inst_30181);
(statearr_30228_30304[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (6)))
{var state_30207__$1 = state_30207;var statearr_30229_30305 = state_30207__$1;(statearr_30229_30305[(2)] = null);
(statearr_30229_30305[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (25)))
{var state_30207__$1 = state_30207;var statearr_30230_30306 = state_30207__$1;(statearr_30230_30306[(2)] = null);
(statearr_30230_30306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (17)))
{var state_30207__$1 = state_30207;var statearr_30231_30307 = state_30207__$1;(statearr_30231_30307[(2)] = null);
(statearr_30231_30307[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (3)))
{var inst_30205 = (state_30207[(2)]);var state_30207__$1 = state_30207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30207__$1,inst_30205);
} else
{if((state_val_30208 === (12)))
{var inst_30193 = (state_30207[(2)]);var state_30207__$1 = state_30207;var statearr_30232_30308 = state_30207__$1;(statearr_30232_30308[(2)] = inst_30193);
(statearr_30232_30308[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (2)))
{var state_30207__$1 = state_30207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30207__$1,(4),filter_rq_sub);
} else
{if((state_val_30208 === (23)))
{var state_30207__$1 = state_30207;var statearr_30233_30309 = state_30207__$1;(statearr_30233_30309[(2)] = null);
(statearr_30233_30309[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (19)))
{var inst_30159 = (state_30207[(7)]);var inst_30163 = cljs.core.chunk_first.call(null,inst_30159);var inst_30164 = cljs.core.chunk_rest.call(null,inst_30159);var inst_30165 = cljs.core.count.call(null,inst_30163);var inst_30131 = inst_30164;var inst_30132 = inst_30163;var inst_30133 = inst_30165;var inst_30134 = (0);var state_30207__$1 = (function (){var statearr_30234 = state_30207;(statearr_30234[(15)] = inst_30131);
(statearr_30234[(16)] = inst_30134);
(statearr_30234[(17)] = inst_30133);
(statearr_30234[(18)] = inst_30132);
return statearr_30234;
})();var statearr_30235_30310 = state_30207__$1;(statearr_30235_30310[(2)] = null);
(statearr_30235_30310[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (11)))
{var inst_30159 = (state_30207[(7)]);var inst_30131 = (state_30207[(15)]);var inst_30159__$1 = cljs.core.seq.call(null,inst_30131);var state_30207__$1 = (function (){var statearr_30236 = state_30207;(statearr_30236[(7)] = inst_30159__$1);
return statearr_30236;
})();if(inst_30159__$1)
{var statearr_30237_30311 = state_30207__$1;(statearr_30237_30311[(1)] = (16));
} else
{var statearr_30238_30312 = state_30207__$1;(statearr_30238_30312[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (9)))
{var inst_30195 = (state_30207[(2)]);var state_30207__$1 = (function (){var statearr_30239 = state_30207;(statearr_30239[(23)] = inst_30195);
return statearr_30239;
})();var statearr_30240_30313 = state_30207__$1;(statearr_30240_30313[(2)] = true);
(statearr_30240_30313[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (5)))
{var inst_30114 = (state_30207[(19)]);var inst_30117 = (state_30207[(8)]);var inst_30118 = (state_30207[(12)]);var inst_30117__$1 = cljs.core.nth.call(null,inst_30114,(0),null);var inst_30118__$1 = cljs.core.nth.call(null,inst_30114,(1),null);var inst_30119 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30120 = ["FILTER-RQ",inst_30117__$1,inst_30118__$1];var inst_30121 = (new cljs.core.PersistentVector(null,3,(5),inst_30119,inst_30120,null));var inst_30122 = cljs.core.clj__GT_js.call(null,inst_30121);var inst_30123 = console.log(inst_30122);var inst_30124 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30125 = cljs.core.keys.call(null,inst_30118__$1);var inst_30130 = cljs.core.seq.call(null,inst_30125);var inst_30131 = inst_30130;var inst_30132 = null;var inst_30133 = (0);var inst_30134 = (0);var state_30207__$1 = (function (){var statearr_30241 = state_30207;(statearr_30241[(8)] = inst_30117__$1);
(statearr_30241[(9)] = inst_30124);
(statearr_30241[(24)] = inst_30123);
(statearr_30241[(15)] = inst_30131);
(statearr_30241[(16)] = inst_30134);
(statearr_30241[(17)] = inst_30133);
(statearr_30241[(18)] = inst_30132);
(statearr_30241[(12)] = inst_30118__$1);
return statearr_30241;
})();var statearr_30242_30314 = state_30207__$1;(statearr_30242_30314[(2)] = null);
(statearr_30242_30314[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (14)))
{var state_30207__$1 = state_30207;var statearr_30243_30315 = state_30207__$1;(statearr_30243_30315[(2)] = null);
(statearr_30243_30315[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (26)))
{var state_30207__$1 = state_30207;var statearr_30244_30316 = state_30207__$1;(statearr_30244_30316[(2)] = null);
(statearr_30244_30316[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (16)))
{var inst_30159 = (state_30207[(7)]);var inst_30161 = cljs.core.chunked_seq_QMARK_.call(null,inst_30159);var state_30207__$1 = state_30207;if(inst_30161)
{var statearr_30245_30317 = state_30207__$1;(statearr_30245_30317[(1)] = (19));
} else
{var statearr_30246_30318 = state_30207__$1;(statearr_30246_30318[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (10)))
{var inst_30146 = (state_30207[(21)]);var inst_30117 = (state_30207[(8)]);var inst_30124 = (state_30207[(9)]);var inst_30134 = (state_30207[(16)]);var inst_30132 = (state_30207[(18)]);var inst_30118 = (state_30207[(12)]);var inst_30139 = (state_30207[(22)]);var inst_30139__$1 = cljs.core._nth.call(null,inst_30132,inst_30134);var inst_30140 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30141 = cljs.core.get.call(null,inst_30118,inst_30139__$1);var inst_30142 = ["FILTER",inst_30117,inst_30139__$1,inst_30141];var inst_30143 = (new cljs.core.PersistentVector(null,4,(5),inst_30140,inst_30142,null));var inst_30144 = cljs.core.clj__GT_js.call(null,inst_30143);var inst_30145 = console.log(inst_30144);var inst_30146__$1 = cljs.core.get.call(null,inst_30124,inst_30139__$1);var state_30207__$1 = (function (){var statearr_30247 = state_30207;(statearr_30247[(21)] = inst_30146__$1);
(statearr_30247[(25)] = inst_30145);
(statearr_30247[(22)] = inst_30139__$1);
return statearr_30247;
})();if(cljs.core.truth_(inst_30146__$1))
{var statearr_30248_30319 = state_30207__$1;(statearr_30248_30319[(1)] = (13));
} else
{var statearr_30249_30320 = state_30207__$1;(statearr_30249_30320[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (18)))
{var inst_30191 = (state_30207[(2)]);var state_30207__$1 = state_30207;var statearr_30250_30321 = state_30207__$1;(statearr_30250_30321[(2)] = inst_30191);
(statearr_30250_30321[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30208 === (8)))
{var inst_30134 = (state_30207[(16)]);var inst_30133 = (state_30207[(17)]);var inst_30136 = (inst_30134 < inst_30133);var inst_30137 = inst_30136;var state_30207__$1 = state_30207;if(cljs.core.truth_(inst_30137))
{var statearr_30251_30322 = state_30207__$1;(statearr_30251_30322[(1)] = (10));
} else
{var statearr_30252_30323 = state_30207__$1;(statearr_30252_30323[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30256[(0)] = state_machine__9111__auto__);
(statearr_30256[(1)] = (1));
return statearr_30256;
});
var state_machine__9111__auto____1 = (function (state_30207){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30207);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30257){if((e30257 instanceof Object))
{var ex__9114__auto__ = e30257;var statearr_30258_30324 = state_30207;(statearr_30258_30324[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30207);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30257;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30325 = state_30207;
state_30207 = G__30325;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30207){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
})();var state__9127__auto__ = (function (){var statearr_30259 = f__9126__auto__.call(null);(statearr_30259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30259;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
;
clustermap.components.filter.t30099.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function (_30101){var self__ = this;
var _30101__$1 = this;return self__.meta30100;
});})(owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
;
clustermap.components.filter.t30099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function (_30101,meta30100__$1){var self__ = this;
var _30101__$1 = this;return (new clustermap.components.filter.t30099(self__.input_schema29934,self__.G__29937,self__.owner,self__.map29932,self__.output_schema29933,self__.input_checker29935,self__.component_specs,self__.filter_spec,self__.history,self__.constructor29928,self__.components,self__.validate__6034__auto__,self__.map29930,self__.id,self__.output_checker29936,self__.filter_rq_pub,self__.ufv__,self__.url_components,self__.map29931,meta30100__$1));
});})(owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
;
clustermap.components.filter.__GT_t30099 = ((function (owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936){
return (function __GT_t30099(input_schema29934__$1,G__29937__$1,owner__$1,map29932__$1,output_schema29933__$1,input_checker29935__$1,component_specs__$1,filter_spec__$1,history__$1,constructor29928__$1,components__$1,validate__6034__auto____$1,map29930__$1,id__$1,output_checker29936__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,map29931__$1,meta30100){return (new clustermap.components.filter.t30099(input_schema29934__$1,G__29937__$1,owner__$1,map29932__$1,output_schema29933__$1,input_checker29935__$1,component_specs__$1,filter_spec__$1,history__$1,constructor29928__$1,components__$1,validate__6034__auto____$1,map29930__$1,id__$1,output_checker29936__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,map29931__$1,meta30100));
});})(owner,history,filter_rq_pub,map29931,url_components,components,component_specs,id,filter_spec,map29932,validate__6034__auto__,ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
;
}
return (new clustermap.components.filter.t30099(input_schema29934,G__29937,owner,map29932,output_schema29933,input_checker29935,component_specs,filter_spec,history,constructor29928,components,validate__6034__auto__,map29930,id,output_checker29936,filter_rq_pub,ufv__,url_components,map29931,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30326 = output_checker29936.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30326))
{var error__6036__auto___30327 = temp__4126__auto___30326;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29928","constructor29928",-200757927,null),cljs.core.pr_str.call(null,error__6036__auto___30327)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30327,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29933,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29933,input_schema29934,input_checker29935,output_checker29936))
,schema.core.make_fn_schema.call(null,output_schema29933,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29934], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30263){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29927,p__30260){var vec__30262 = p__30260;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30262,(0),null);return component_fnk__7881__auto___30263.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29927),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29927,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29927,var_args){
var p__30260 = null;if (arguments.length > 2) {
  p__30260 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29927,p__30260);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30328){
var data__7882__auto__ = cljs.core.first(arglist__30328);
arglist__30328 = cljs.core.next(arglist__30328);
var owner29927 = cljs.core.first(arglist__30328);
var p__30260 = cljs.core.rest(arglist__30328);
return filter_component__delegate(data__7882__auto__,owner29927,p__30260);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30263))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29929){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29929);
});
__GT_filter_component = function(cursor__7850__auto__,m29929){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
