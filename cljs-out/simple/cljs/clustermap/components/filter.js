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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29843){var map__29845 = p__29843;var map__29845__$1 = ((cljs.core.seq_QMARK_.call(null,map__29845))?cljs.core.apply.call(null,cljs.core.hash_map,map__29845):map__29845);var filter_spec = map__29845__$1;var component_descrs = cljs.core.get.call(null,map__29845__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29845__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29845__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29846){var map__29848 = p__29846;var map__29848__$1 = ((cljs.core.seq_QMARK_.call(null,map__29848))?cljs.core.apply.call(null,cljs.core.hash_map,map__29848):map__29848);var filter_spec = map__29848__$1;var component_descrs = cljs.core.get.call(null,map__29848__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29848__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29848__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29849,component_filter_rq_chan){var map__29854 = p__29849;var map__29854__$1 = ((cljs.core.seq_QMARK_.call(null,map__29854))?cljs.core.apply.call(null,cljs.core.hash_map,map__29854):map__29854);var component_spec = map__29854__$1;var type = cljs.core.get.call(null,map__29854__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29855 = cljs.core._EQ_;var expr__29856 = type;if(cljs.core.truth_(pred__29855.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29856)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29855.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29856)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29855.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29856)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29855.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29856)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29855.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29856)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29856))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29858,component_filter_rq_chan){var map__29860 = p__29858;var map__29860__$1 = ((cljs.core.seq_QMARK_.call(null,map__29860))?cljs.core.apply.call(null,cljs.core.hash_map,map__29860):map__29860);var component_spec = map__29860__$1;var visible = cljs.core.get.call(null,map__29860__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29860__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29860__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29860__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29862 = schema.core.Any;var input_schema29863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29861","map29861",2024752037,null))], null);var input_checker29864 = schema.core.checker.call(null,input_schema29863);var output_checker29865 = schema.core.checker.call(null,output_schema29862);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29862,input_schema29863,input_checker29864,output_checker29865){
return (function render_STAR_(G__29866){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29883 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29866], null);var temp__4126__auto___29884 = input_checker29864.call(null,args__6035__auto___29883);if(cljs.core.truth_(temp__4126__auto___29884))
{var error__6036__auto___29885 = temp__4126__auto___29884;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29885)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29885,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29883,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29863,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29861 = G__29866;while(true){
if(cljs.core.map_QMARK_.call(null,map29861))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29861)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29861,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29861,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29861,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29862,input_schema29863,input_checker29864,output_checker29865){
return (function iter__29875(s__29876){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29862,input_schema29863,input_checker29864,output_checker29865){
return (function (){var s__29876__$1 = s__29876;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29876__$1);if(temp__4126__auto__)
{var s__29876__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29876__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29876__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29878 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29877 = (0);while(true){
if((i__29877 < size__4376__auto__))
{var map__29881 = cljs.core._nth.call(null,c__4375__auto__,i__29877);var map__29881__$1 = ((cljs.core.seq_QMARK_.call(null,map__29881))?cljs.core.apply.call(null,cljs.core.hash_map,map__29881):map__29881);var component_spec = map__29881__$1;var id = cljs.core.get.call(null,map__29881__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29878,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29886 = (i__29877 + (1));
i__29877 = G__29886;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29878),iter__29875.call(null,cljs.core.chunk_rest.call(null,s__29876__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29878),null);
}
} else
{var map__29882 = cljs.core.first.call(null,s__29876__$2);var map__29882__$1 = ((cljs.core.seq_QMARK_.call(null,map__29882))?cljs.core.apply.call(null,cljs.core.hash_map,map__29882):map__29882);var component_spec = map__29882__$1;var id = cljs.core.get.call(null,map__29882__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29875.call(null,cljs.core.rest.call(null,s__29876__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29862,input_schema29863,input_checker29864,output_checker29865))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29862,input_schema29863,input_checker29864,output_checker29865))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29887 = output_checker29865.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29887))
{var error__6036__auto___29888 = temp__4126__auto___29887;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29888)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29888,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29862,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29862,input_schema29863,input_checker29864,output_checker29865))
,schema.core.make_fn_schema.call(null,output_schema29862,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29863], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30225 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29895 = schema.core.Any;var input_schema29896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29892","map29892",-1330730395,null))], null);var input_checker29897 = schema.core.checker.call(null,input_schema29896);var output_checker29898 = schema.core.checker.call(null,output_schema29895);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function constructor29890(G__29899){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30226 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29899], null);var temp__4126__auto___30227 = input_checker29897.call(null,args__6035__auto___30226);if(cljs.core.truth_(temp__4126__auto___30227))
{var error__6036__auto___30228 = temp__4126__auto___30227;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29890","constructor29890",-1815900260,null),cljs.core.pr_str.call(null,error__6036__auto___30228)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30228,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30226,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29896,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29892 = G__29899;while(true){
if(cljs.core.map_QMARK_.call(null,map29892))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29892)));
}
var map29894 = plumbing.fnk.schema.safe_get.call(null,map29892,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29894,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29893 = plumbing.fnk.schema.safe_get.call(null,map29892,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29893,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29893,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29892,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30061 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30061 = (function (owner,map29892,map29894,G__29899,input_checker29897,component_specs,filter_spec,output_checker29898,history,output_schema29895,components,validate__6034__auto__,map29893,id,constructor29890,filter_rq_pub,ufv__,url_components,input_schema29896,meta30062){
this.owner = owner;
this.map29892 = map29892;
this.map29894 = map29894;
this.G__29899 = G__29899;
this.input_checker29897 = input_checker29897;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.output_checker29898 = output_checker29898;
this.history = history;
this.output_schema29895 = output_schema29895;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.map29893 = map29893;
this.id = id;
this.constructor29890 = constructor29890;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.input_schema29896 = input_schema29896;
this.meta30062 = meta30062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30061.cljs$lang$type = true;
clustermap.components.filter.t30061.cljs$lang$ctorStr = "clustermap.components.filter/t30061";
clustermap.components.filter.t30061.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30061");
});})(owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
;
clustermap.components.filter.t30061.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30061.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
;
clustermap.components.filter.t30061.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30061.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function (_,p__30064,___$1){var self__ = this;
var map__30065 = p__30064;var map__30065__$1 = ((cljs.core.seq_QMARK_.call(null,map__30065))?cljs.core.apply.call(null,cljs.core.hash_map,map__30065):map__30065);var next_props = map__30065__$1;var map__30066 = cljs.core.get.call(null,map__30065__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30066__$1 = ((cljs.core.seq_QMARK_.call(null,map__30066))?cljs.core.apply.call(null,cljs.core.hash_map,map__30066):map__30066);var next_filter_spec = map__30066__$1;var map__30067 = cljs.core.get.call(null,map__30066__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30067__$1 = ((cljs.core.seq_QMARK_.call(null,map__30067))?cljs.core.apply.call(null,cljs.core.hash_map,map__30067):map__30067);var next_url_components = map__30067__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
;
clustermap.components.filter.t30061.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30061.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
;
clustermap.components.filter.t30061.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30061.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30068_30229 = cljs.core.seq.call(null,chs);var chunk__30069_30230 = null;var count__30070_30231 = (0);var i__30071_30232 = (0);while(true){
if((i__30071_30232 < count__30070_30231))
{var vec__30072_30233 = cljs.core._nth.call(null,chunk__30069_30230,i__30071_30232);var component_id_30234 = cljs.core.nth.call(null,vec__30072_30233,(0),null);var ch_30235 = cljs.core.nth.call(null,vec__30072_30233,(1),null);cljs.core.async.close_BANG_.call(null,ch_30235);
{
var G__30236 = seq__30068_30229;
var G__30237 = chunk__30069_30230;
var G__30238 = count__30070_30231;
var G__30239 = (i__30071_30232 + (1));
seq__30068_30229 = G__30236;
chunk__30069_30230 = G__30237;
count__30070_30231 = G__30238;
i__30071_30232 = G__30239;
continue;
}
} else
{var temp__4126__auto___30240 = cljs.core.seq.call(null,seq__30068_30229);if(temp__4126__auto___30240)
{var seq__30068_30241__$1 = temp__4126__auto___30240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30068_30241__$1))
{var c__4408__auto___30242 = cljs.core.chunk_first.call(null,seq__30068_30241__$1);{
var G__30243 = cljs.core.chunk_rest.call(null,seq__30068_30241__$1);
var G__30244 = c__4408__auto___30242;
var G__30245 = cljs.core.count.call(null,c__4408__auto___30242);
var G__30246 = (0);
seq__30068_30229 = G__30243;
chunk__30069_30230 = G__30244;
count__30070_30231 = G__30245;
i__30071_30232 = G__30246;
continue;
}
} else
{var vec__30073_30247 = cljs.core.first.call(null,seq__30068_30241__$1);var component_id_30248 = cljs.core.nth.call(null,vec__30073_30247,(0),null);var ch_30249 = cljs.core.nth.call(null,vec__30073_30247,(1),null);cljs.core.async.close_BANG_.call(null,ch_30249);
{
var G__30250 = cljs.core.next.call(null,seq__30068_30241__$1);
var G__30251 = null;
var G__30252 = (0);
var G__30253 = (0);
seq__30068_30229 = G__30250;
chunk__30069_30230 = G__30251;
count__30070_30231 = G__30252;
i__30071_30232 = G__30253;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
;
clustermap.components.filter.t30061.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30061.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function (state_30169){var state_val_30170 = (state_30169[(1)]);if((state_val_30170 === (7)))
{var inst_30160 = (state_30169[(2)]);var state_30169__$1 = state_30169;if(cljs.core.truth_(inst_30160))
{var statearr_30171_30254 = state_30169__$1;(statearr_30171_30254[(1)] = (25));
} else
{var statearr_30172_30255 = state_30169__$1;(statearr_30172_30255[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (20)))
{var inst_30086 = (state_30169[(7)]);var inst_30130 = (state_30169[(8)]);var inst_30121 = (state_30169[(9)]);var inst_30080 = (state_30169[(10)]);var inst_30137 = (state_30169[(11)]);var inst_30079 = (state_30169[(12)]);var inst_30130__$1 = cljs.core.first.call(null,inst_30121);var inst_30131 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30132 = cljs.core.get.call(null,inst_30080,inst_30130__$1);var inst_30133 = ["FILTER",inst_30079,inst_30130__$1,inst_30132];var inst_30134 = (new cljs.core.PersistentVector(null,4,(5),inst_30131,inst_30133,null));var inst_30135 = cljs.core.clj__GT_js.call(null,inst_30134);var inst_30136 = console.log(inst_30135);var inst_30137__$1 = cljs.core.get.call(null,inst_30086,inst_30130__$1);var state_30169__$1 = (function (){var statearr_30173 = state_30169;(statearr_30173[(13)] = inst_30136);
(statearr_30173[(8)] = inst_30130__$1);
(statearr_30173[(11)] = inst_30137__$1);
return statearr_30173;
})();if(cljs.core.truth_(inst_30137__$1))
{var statearr_30174_30256 = state_30169__$1;(statearr_30174_30256[(1)] = (22));
} else
{var statearr_30175_30257 = state_30169__$1;(statearr_30175_30257[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (27)))
{var inst_30165 = (state_30169[(2)]);var state_30169__$1 = state_30169;var statearr_30176_30258 = state_30169__$1;(statearr_30176_30258[(2)] = inst_30165);
(statearr_30176_30258[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (1)))
{var state_30169__$1 = state_30169;var statearr_30177_30259 = state_30169__$1;(statearr_30177_30259[(2)] = null);
(statearr_30177_30259[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (24)))
{var inst_30121 = (state_30169[(9)]);var inst_30146 = (state_30169[(2)]);var inst_30147 = cljs.core.next.call(null,inst_30121);var inst_30093 = inst_30147;var inst_30094 = null;var inst_30095 = (0);var inst_30096 = (0);var state_30169__$1 = (function (){var statearr_30181 = state_30169;(statearr_30181[(14)] = inst_30146);
(statearr_30181[(15)] = inst_30095);
(statearr_30181[(16)] = inst_30093);
(statearr_30181[(17)] = inst_30096);
(statearr_30181[(18)] = inst_30094);
return statearr_30181;
})();var statearr_30182_30260 = state_30169__$1;(statearr_30182_30260[(2)] = null);
(statearr_30182_30260[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (4)))
{var inst_30076 = (state_30169[(19)]);var inst_30076__$1 = (state_30169[(2)]);var state_30169__$1 = (function (){var statearr_30183 = state_30169;(statearr_30183[(19)] = inst_30076__$1);
return statearr_30183;
})();if(cljs.core.truth_(inst_30076__$1))
{var statearr_30184_30261 = state_30169__$1;(statearr_30184_30261[(1)] = (5));
} else
{var statearr_30185_30262 = state_30169__$1;(statearr_30185_30262[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (15)))
{var inst_30095 = (state_30169[(15)]);var inst_30093 = (state_30169[(16)]);var inst_30096 = (state_30169[(17)]);var inst_30094 = (state_30169[(18)]);var inst_30117 = (state_30169[(2)]);var inst_30118 = (inst_30096 + (1));var tmp30178 = inst_30095;var tmp30179 = inst_30093;var tmp30180 = inst_30094;var inst_30093__$1 = tmp30179;var inst_30094__$1 = tmp30180;var inst_30095__$1 = tmp30178;var inst_30096__$1 = inst_30118;var state_30169__$1 = (function (){var statearr_30186 = state_30169;(statearr_30186[(15)] = inst_30095__$1);
(statearr_30186[(16)] = inst_30093__$1);
(statearr_30186[(20)] = inst_30117);
(statearr_30186[(17)] = inst_30096__$1);
(statearr_30186[(18)] = inst_30094__$1);
return statearr_30186;
})();var statearr_30187_30263 = state_30169__$1;(statearr_30187_30263[(2)] = null);
(statearr_30187_30263[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (21)))
{var inst_30150 = (state_30169[(2)]);var state_30169__$1 = state_30169;var statearr_30188_30264 = state_30169__$1;(statearr_30188_30264[(2)] = inst_30150);
(statearr_30188_30264[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (13)))
{var inst_30108 = (state_30169[(21)]);var inst_30080 = (state_30169[(10)]);var inst_30101 = (state_30169[(22)]);var inst_30110 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30111 = cljs.core.get.call(null,inst_30080,inst_30101);var inst_30112 = [inst_30101,inst_30111];var inst_30113 = (new cljs.core.PersistentVector(null,2,(5),inst_30110,inst_30112,null));var inst_30114 = cljs.core.async.put_BANG_.call(null,inst_30108,inst_30113);var state_30169__$1 = state_30169;var statearr_30189_30265 = state_30169__$1;(statearr_30189_30265[(2)] = inst_30114);
(statearr_30189_30265[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (22)))
{var inst_30130 = (state_30169[(8)]);var inst_30080 = (state_30169[(10)]);var inst_30137 = (state_30169[(11)]);var inst_30139 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30140 = cljs.core.get.call(null,inst_30080,inst_30130);var inst_30141 = [inst_30130,inst_30140];var inst_30142 = (new cljs.core.PersistentVector(null,2,(5),inst_30139,inst_30141,null));var inst_30143 = cljs.core.async.put_BANG_.call(null,inst_30137,inst_30142);var state_30169__$1 = state_30169;var statearr_30190_30266 = state_30169__$1;(statearr_30190_30266[(2)] = inst_30143);
(statearr_30190_30266[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (6)))
{var state_30169__$1 = state_30169;var statearr_30191_30267 = state_30169__$1;(statearr_30191_30267[(2)] = null);
(statearr_30191_30267[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (25)))
{var state_30169__$1 = state_30169;var statearr_30192_30268 = state_30169__$1;(statearr_30192_30268[(2)] = null);
(statearr_30192_30268[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (17)))
{var state_30169__$1 = state_30169;var statearr_30193_30269 = state_30169__$1;(statearr_30193_30269[(2)] = null);
(statearr_30193_30269[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (3)))
{var inst_30167 = (state_30169[(2)]);var state_30169__$1 = state_30169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30169__$1,inst_30167);
} else
{if((state_val_30170 === (12)))
{var inst_30155 = (state_30169[(2)]);var state_30169__$1 = state_30169;var statearr_30194_30270 = state_30169__$1;(statearr_30194_30270[(2)] = inst_30155);
(statearr_30194_30270[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (2)))
{var state_30169__$1 = state_30169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30169__$1,(4),filter_rq_sub);
} else
{if((state_val_30170 === (23)))
{var state_30169__$1 = state_30169;var statearr_30195_30271 = state_30169__$1;(statearr_30195_30271[(2)] = null);
(statearr_30195_30271[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (19)))
{var inst_30121 = (state_30169[(9)]);var inst_30125 = cljs.core.chunk_first.call(null,inst_30121);var inst_30126 = cljs.core.chunk_rest.call(null,inst_30121);var inst_30127 = cljs.core.count.call(null,inst_30125);var inst_30093 = inst_30126;var inst_30094 = inst_30125;var inst_30095 = inst_30127;var inst_30096 = (0);var state_30169__$1 = (function (){var statearr_30196 = state_30169;(statearr_30196[(15)] = inst_30095);
(statearr_30196[(16)] = inst_30093);
(statearr_30196[(17)] = inst_30096);
(statearr_30196[(18)] = inst_30094);
return statearr_30196;
})();var statearr_30197_30272 = state_30169__$1;(statearr_30197_30272[(2)] = null);
(statearr_30197_30272[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (11)))
{var inst_30121 = (state_30169[(9)]);var inst_30093 = (state_30169[(16)]);var inst_30121__$1 = cljs.core.seq.call(null,inst_30093);var state_30169__$1 = (function (){var statearr_30198 = state_30169;(statearr_30198[(9)] = inst_30121__$1);
return statearr_30198;
})();if(inst_30121__$1)
{var statearr_30199_30273 = state_30169__$1;(statearr_30199_30273[(1)] = (16));
} else
{var statearr_30200_30274 = state_30169__$1;(statearr_30200_30274[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (9)))
{var inst_30157 = (state_30169[(2)]);var state_30169__$1 = (function (){var statearr_30201 = state_30169;(statearr_30201[(23)] = inst_30157);
return statearr_30201;
})();var statearr_30202_30275 = state_30169__$1;(statearr_30202_30275[(2)] = true);
(statearr_30202_30275[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (5)))
{var inst_30080 = (state_30169[(10)]);var inst_30076 = (state_30169[(19)]);var inst_30079 = (state_30169[(12)]);var inst_30079__$1 = cljs.core.nth.call(null,inst_30076,(0),null);var inst_30080__$1 = cljs.core.nth.call(null,inst_30076,(1),null);var inst_30081 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30082 = ["FILTER-RQ",inst_30079__$1,inst_30080__$1];var inst_30083 = (new cljs.core.PersistentVector(null,3,(5),inst_30081,inst_30082,null));var inst_30084 = cljs.core.clj__GT_js.call(null,inst_30083);var inst_30085 = console.log(inst_30084);var inst_30086 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30087 = cljs.core.keys.call(null,inst_30080__$1);var inst_30092 = cljs.core.seq.call(null,inst_30087);var inst_30093 = inst_30092;var inst_30094 = null;var inst_30095 = (0);var inst_30096 = (0);var state_30169__$1 = (function (){var statearr_30203 = state_30169;(statearr_30203[(7)] = inst_30086);
(statearr_30203[(15)] = inst_30095);
(statearr_30203[(24)] = inst_30085);
(statearr_30203[(16)] = inst_30093);
(statearr_30203[(17)] = inst_30096);
(statearr_30203[(10)] = inst_30080__$1);
(statearr_30203[(18)] = inst_30094);
(statearr_30203[(12)] = inst_30079__$1);
return statearr_30203;
})();var statearr_30204_30276 = state_30169__$1;(statearr_30204_30276[(2)] = null);
(statearr_30204_30276[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (14)))
{var state_30169__$1 = state_30169;var statearr_30205_30277 = state_30169__$1;(statearr_30205_30277[(2)] = null);
(statearr_30205_30277[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (26)))
{var state_30169__$1 = state_30169;var statearr_30206_30278 = state_30169__$1;(statearr_30206_30278[(2)] = null);
(statearr_30206_30278[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (16)))
{var inst_30121 = (state_30169[(9)]);var inst_30123 = cljs.core.chunked_seq_QMARK_.call(null,inst_30121);var state_30169__$1 = state_30169;if(inst_30123)
{var statearr_30207_30279 = state_30169__$1;(statearr_30207_30279[(1)] = (19));
} else
{var statearr_30208_30280 = state_30169__$1;(statearr_30208_30280[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (10)))
{var inst_30086 = (state_30169[(7)]);var inst_30096 = (state_30169[(17)]);var inst_30108 = (state_30169[(21)]);var inst_30080 = (state_30169[(10)]);var inst_30094 = (state_30169[(18)]);var inst_30101 = (state_30169[(22)]);var inst_30079 = (state_30169[(12)]);var inst_30101__$1 = cljs.core._nth.call(null,inst_30094,inst_30096);var inst_30102 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30103 = cljs.core.get.call(null,inst_30080,inst_30101__$1);var inst_30104 = ["FILTER",inst_30079,inst_30101__$1,inst_30103];var inst_30105 = (new cljs.core.PersistentVector(null,4,(5),inst_30102,inst_30104,null));var inst_30106 = cljs.core.clj__GT_js.call(null,inst_30105);var inst_30107 = console.log(inst_30106);var inst_30108__$1 = cljs.core.get.call(null,inst_30086,inst_30101__$1);var state_30169__$1 = (function (){var statearr_30209 = state_30169;(statearr_30209[(21)] = inst_30108__$1);
(statearr_30209[(22)] = inst_30101__$1);
(statearr_30209[(25)] = inst_30107);
return statearr_30209;
})();if(cljs.core.truth_(inst_30108__$1))
{var statearr_30210_30281 = state_30169__$1;(statearr_30210_30281[(1)] = (13));
} else
{var statearr_30211_30282 = state_30169__$1;(statearr_30211_30282[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (18)))
{var inst_30153 = (state_30169[(2)]);var state_30169__$1 = state_30169;var statearr_30212_30283 = state_30169__$1;(statearr_30212_30283[(2)] = inst_30153);
(statearr_30212_30283[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30170 === (8)))
{var inst_30095 = (state_30169[(15)]);var inst_30096 = (state_30169[(17)]);var inst_30098 = (inst_30096 < inst_30095);var inst_30099 = inst_30098;var state_30169__$1 = state_30169;if(cljs.core.truth_(inst_30099))
{var statearr_30213_30284 = state_30169__$1;(statearr_30213_30284[(1)] = (10));
} else
{var statearr_30214_30285 = state_30169__$1;(statearr_30214_30285[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30218[(0)] = state_machine__9111__auto__);
(statearr_30218[(1)] = (1));
return statearr_30218;
});
var state_machine__9111__auto____1 = (function (state_30169){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30169);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30219){if((e30219 instanceof Object))
{var ex__9114__auto__ = e30219;var statearr_30220_30286 = state_30169;(statearr_30220_30286[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30169);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30219;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30287 = state_30169;
state_30169 = G__30287;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30169){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
})();var state__9127__auto__ = (function (){var statearr_30221 = f__9126__auto__.call(null);(statearr_30221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30221;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
;
clustermap.components.filter.t30061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function (_30063){var self__ = this;
var _30063__$1 = this;return self__.meta30062;
});})(owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
;
clustermap.components.filter.t30061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function (_30063,meta30062__$1){var self__ = this;
var _30063__$1 = this;return (new clustermap.components.filter.t30061(self__.owner,self__.map29892,self__.map29894,self__.G__29899,self__.input_checker29897,self__.component_specs,self__.filter_spec,self__.output_checker29898,self__.history,self__.output_schema29895,self__.components,self__.validate__6034__auto__,self__.map29893,self__.id,self__.constructor29890,self__.filter_rq_pub,self__.ufv__,self__.url_components,self__.input_schema29896,meta30062__$1));
});})(owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
;
clustermap.components.filter.__GT_t30061 = ((function (owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898){
return (function __GT_t30061(owner__$1,map29892__$1,map29894__$1,G__29899__$1,input_checker29897__$1,component_specs__$1,filter_spec__$1,output_checker29898__$1,history__$1,output_schema29895__$1,components__$1,validate__6034__auto____$1,map29893__$1,id__$1,constructor29890__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,input_schema29896__$1,meta30062){return (new clustermap.components.filter.t30061(owner__$1,map29892__$1,map29894__$1,G__29899__$1,input_checker29897__$1,component_specs__$1,filter_spec__$1,output_checker29898__$1,history__$1,output_schema29895__$1,components__$1,validate__6034__auto____$1,map29893__$1,id__$1,constructor29890__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,input_schema29896__$1,meta30062));
});})(owner,history,filter_rq_pub,map29893,url_components,components,component_specs,id,filter_spec,map29894,validate__6034__auto__,ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
;
}
return (new clustermap.components.filter.t30061(owner,map29892,map29894,G__29899,input_checker29897,component_specs,filter_spec,output_checker29898,history,output_schema29895,components,validate__6034__auto__,map29893,id,constructor29890,filter_rq_pub,ufv__,url_components,input_schema29896,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30288 = output_checker29898.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30288))
{var error__6036__auto___30289 = temp__4126__auto___30288;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29890","constructor29890",-1815900260,null),cljs.core.pr_str.call(null,error__6036__auto___30289)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30289,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29895,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29895,input_schema29896,input_checker29897,output_checker29898))
,schema.core.make_fn_schema.call(null,output_schema29895,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29896], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30225){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29889,p__30222){var vec__30224 = p__30222;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30224,(0),null);return component_fnk__7881__auto___30225.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29889),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29889,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29889,var_args){
var p__30222 = null;if (arguments.length > 2) {
  p__30222 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29889,p__30222);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30290){
var data__7882__auto__ = cljs.core.first(arglist__30290);
arglist__30290 = cljs.core.next(arglist__30290);
var owner29889 = cljs.core.first(arglist__30290);
var p__30222 = cljs.core.rest(arglist__30290);
return filter_component__delegate(data__7882__auto__,owner29889,p__30222);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30225))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29891){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29891);
});
__GT_filter_component = function(cursor__7850__auto__,m29891){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
