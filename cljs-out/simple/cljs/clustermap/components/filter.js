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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__28876){var map__28878 = p__28876;var map__28878__$1 = ((cljs.core.seq_QMARK_.call(null,map__28878))?cljs.core.apply.call(null,cljs.core.hash_map,map__28878):map__28878);var filter_spec = map__28878__$1;var component_descrs = cljs.core.get.call(null,map__28878__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28878__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28878__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__28879){var map__28881 = p__28879;var map__28881__$1 = ((cljs.core.seq_QMARK_.call(null,map__28881))?cljs.core.apply.call(null,cljs.core.hash_map,map__28881):map__28881);var filter_spec = map__28881__$1;var component_descrs = cljs.core.get.call(null,map__28881__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28881__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28881__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__28882,component_filter_rq_chan){var map__28887 = p__28882;var map__28887__$1 = ((cljs.core.seq_QMARK_.call(null,map__28887))?cljs.core.apply.call(null,cljs.core.hash_map,map__28887):map__28887);var component_spec = map__28887__$1;var type = cljs.core.get.call(null,map__28887__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__28888 = cljs.core._EQ_;var expr__28889 = type;if(cljs.core.truth_(pred__28888.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__28889)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28888.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__28889)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28888.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__28889)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28888.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__28889)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28888.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__28889)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28889))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__28891,component_filter_rq_chan){var map__28893 = p__28891;var map__28893__$1 = ((cljs.core.seq_QMARK_.call(null,map__28893))?cljs.core.apply.call(null,cljs.core.hash_map,map__28893):map__28893);var component_spec = map__28893__$1;var visible = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__28893__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28895 = schema.core.Any;var input_schema28896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28894","map28894",1303500803,null))], null);var input_checker28897 = schema.core.checker.call(null,input_schema28896);var output_checker28898 = schema.core.checker.call(null,output_schema28895);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28895,input_schema28896,input_checker28897,output_checker28898){
return (function render_STAR_(G__28899){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28899], null);var temp__4126__auto___28917 = input_checker28897.call(null,args__6035__auto___28916);if(cljs.core.truth_(temp__4126__auto___28917))
{var error__6036__auto___28918 = temp__4126__auto___28917;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28918)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28918,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28916,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28896,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28894 = G__28899;while(true){
if(cljs.core.map_QMARK_.call(null,map28894))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28894)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28894,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map28894,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map28894,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28895,input_schema28896,input_checker28897,output_checker28898){
return (function iter__28908(s__28909){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28895,input_schema28896,input_checker28897,output_checker28898){
return (function (){var s__28909__$1 = s__28909;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28909__$1);if(temp__4126__auto__)
{var s__28909__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28909__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28909__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28911 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28910 = (0);while(true){
if((i__28910 < size__4376__auto__))
{var map__28914 = cljs.core._nth.call(null,c__4375__auto__,i__28910);var map__28914__$1 = ((cljs.core.seq_QMARK_.call(null,map__28914))?cljs.core.apply.call(null,cljs.core.hash_map,map__28914):map__28914);var component_spec = map__28914__$1;var id = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__28911,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__28919 = (i__28910 + (1));
i__28910 = G__28919;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28911),iter__28908.call(null,cljs.core.chunk_rest.call(null,s__28909__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28911),null);
}
} else
{var map__28915 = cljs.core.first.call(null,s__28909__$2);var map__28915__$1 = ((cljs.core.seq_QMARK_.call(null,map__28915))?cljs.core.apply.call(null,cljs.core.hash_map,map__28915):map__28915);var component_spec = map__28915__$1;var id = cljs.core.get.call(null,map__28915__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__28908.call(null,cljs.core.rest.call(null,s__28909__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28895,input_schema28896,input_checker28897,output_checker28898))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema28895,input_schema28896,input_checker28897,output_checker28898))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28920 = output_checker28898.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28920))
{var error__6036__auto___28921 = temp__4126__auto___28920;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___28921)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28921,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28895,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28895,input_schema28896,input_checker28897,output_checker28898))
,schema.core.make_fn_schema.call(null,output_schema28895,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28896], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___29258 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28928 = schema.core.Any;var input_schema28929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28925","map28925",938932573,null))], null);var input_checker28930 = schema.core.checker.call(null,input_schema28929);var output_checker28931 = schema.core.checker.call(null,output_schema28928);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function constructor28923(G__28932){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28932], null);var temp__4126__auto___29260 = input_checker28930.call(null,args__6035__auto___29259);if(cljs.core.truth_(temp__4126__auto___29260))
{var error__6036__auto___29261 = temp__4126__auto___29260;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28923","constructor28923",566761651,null),cljs.core.pr_str.call(null,error__6036__auto___29261)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29261,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29259,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28929,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28925 = G__28932;while(true){
if(cljs.core.map_QMARK_.call(null,map28925))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28925)));
}
var map28927 = plumbing.fnk.schema.safe_get.call(null,map28925,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28927,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map28926 = plumbing.fnk.schema.safe_get.call(null,map28925,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map28926,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map28926,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28925,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t29094 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t29094 = (function (map28926,owner,output_checker28931,input_checker28930,G__28932,component_specs,filter_spec,input_schema28929,constructor28923,history,map28927,components,output_schema28928,validate__6034__auto__,id,map28925,filter_rq_pub,ufv__,url_components,meta29095){
this.map28926 = map28926;
this.owner = owner;
this.output_checker28931 = output_checker28931;
this.input_checker28930 = input_checker28930;
this.G__28932 = G__28932;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.input_schema28929 = input_schema28929;
this.constructor28923 = constructor28923;
this.history = history;
this.map28927 = map28927;
this.components = components;
this.output_schema28928 = output_schema28928;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map28925 = map28925;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta29095 = meta29095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t29094.cljs$lang$type = true;
clustermap.components.filter.t29094.cljs$lang$ctorStr = "clustermap.components.filter/t29094";
clustermap.components.filter.t29094.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t29094");
});})(owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
;
clustermap.components.filter.t29094.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t29094.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
;
clustermap.components.filter.t29094.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t29094.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function (_,p__29097,___$1){var self__ = this;
var map__29098 = p__29097;var map__29098__$1 = ((cljs.core.seq_QMARK_.call(null,map__29098))?cljs.core.apply.call(null,cljs.core.hash_map,map__29098):map__29098);var next_props = map__29098__$1;var map__29099 = cljs.core.get.call(null,map__29098__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__29099__$1 = ((cljs.core.seq_QMARK_.call(null,map__29099))?cljs.core.apply.call(null,cljs.core.hash_map,map__29099):map__29099);var next_filter_spec = map__29099__$1;var map__29100 = cljs.core.get.call(null,map__29099__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__29100__$1 = ((cljs.core.seq_QMARK_.call(null,map__29100))?cljs.core.apply.call(null,cljs.core.hash_map,map__29100):map__29100);var next_url_components = map__29100__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
;
clustermap.components.filter.t29094.prototype.om$core$IRender$ = true;
clustermap.components.filter.t29094.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
;
clustermap.components.filter.t29094.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t29094.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__29101_29262 = cljs.core.seq.call(null,chs);var chunk__29102_29263 = null;var count__29103_29264 = (0);var i__29104_29265 = (0);while(true){
if((i__29104_29265 < count__29103_29264))
{var vec__29105_29266 = cljs.core._nth.call(null,chunk__29102_29263,i__29104_29265);var component_id_29267 = cljs.core.nth.call(null,vec__29105_29266,(0),null);var ch_29268 = cljs.core.nth.call(null,vec__29105_29266,(1),null);cljs.core.async.close_BANG_.call(null,ch_29268);
{
var G__29269 = seq__29101_29262;
var G__29270 = chunk__29102_29263;
var G__29271 = count__29103_29264;
var G__29272 = (i__29104_29265 + (1));
seq__29101_29262 = G__29269;
chunk__29102_29263 = G__29270;
count__29103_29264 = G__29271;
i__29104_29265 = G__29272;
continue;
}
} else
{var temp__4126__auto___29273 = cljs.core.seq.call(null,seq__29101_29262);if(temp__4126__auto___29273)
{var seq__29101_29274__$1 = temp__4126__auto___29273;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29101_29274__$1))
{var c__4408__auto___29275 = cljs.core.chunk_first.call(null,seq__29101_29274__$1);{
var G__29276 = cljs.core.chunk_rest.call(null,seq__29101_29274__$1);
var G__29277 = c__4408__auto___29275;
var G__29278 = cljs.core.count.call(null,c__4408__auto___29275);
var G__29279 = (0);
seq__29101_29262 = G__29276;
chunk__29102_29263 = G__29277;
count__29103_29264 = G__29278;
i__29104_29265 = G__29279;
continue;
}
} else
{var vec__29106_29280 = cljs.core.first.call(null,seq__29101_29274__$1);var component_id_29281 = cljs.core.nth.call(null,vec__29106_29280,(0),null);var ch_29282 = cljs.core.nth.call(null,vec__29106_29280,(1),null);cljs.core.async.close_BANG_.call(null,ch_29282);
{
var G__29283 = cljs.core.next.call(null,seq__29101_29274__$1);
var G__29284 = null;
var G__29285 = (0);
var G__29286 = (0);
seq__29101_29262 = G__29283;
chunk__29102_29263 = G__29284;
count__29103_29264 = G__29285;
i__29104_29265 = G__29286;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
;
clustermap.components.filter.t29094.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t29094.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function (state_29202){var state_val_29203 = (state_29202[(1)]);if((state_val_29203 === (7)))
{var inst_29193 = (state_29202[(2)]);var state_29202__$1 = state_29202;if(cljs.core.truth_(inst_29193))
{var statearr_29204_29287 = state_29202__$1;(statearr_29204_29287[(1)] = (25));
} else
{var statearr_29205_29288 = state_29202__$1;(statearr_29205_29288[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (20)))
{var inst_29119 = (state_29202[(7)]);var inst_29113 = (state_29202[(8)]);var inst_29112 = (state_29202[(9)]);var inst_29154 = (state_29202[(10)]);var inst_29170 = (state_29202[(11)]);var inst_29163 = (state_29202[(12)]);var inst_29163__$1 = cljs.core.first.call(null,inst_29154);var inst_29164 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29165 = cljs.core.get.call(null,inst_29113,inst_29163__$1);var inst_29166 = ["FILTER",inst_29112,inst_29163__$1,inst_29165];var inst_29167 = (new cljs.core.PersistentVector(null,4,(5),inst_29164,inst_29166,null));var inst_29168 = cljs.core.clj__GT_js.call(null,inst_29167);var inst_29169 = console.log(inst_29168);var inst_29170__$1 = cljs.core.get.call(null,inst_29119,inst_29163__$1);var state_29202__$1 = (function (){var statearr_29206 = state_29202;(statearr_29206[(11)] = inst_29170__$1);
(statearr_29206[(12)] = inst_29163__$1);
(statearr_29206[(13)] = inst_29169);
return statearr_29206;
})();if(cljs.core.truth_(inst_29170__$1))
{var statearr_29207_29289 = state_29202__$1;(statearr_29207_29289[(1)] = (22));
} else
{var statearr_29208_29290 = state_29202__$1;(statearr_29208_29290[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (27)))
{var inst_29198 = (state_29202[(2)]);var state_29202__$1 = state_29202;var statearr_29209_29291 = state_29202__$1;(statearr_29209_29291[(2)] = inst_29198);
(statearr_29209_29291[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (1)))
{var state_29202__$1 = state_29202;var statearr_29210_29292 = state_29202__$1;(statearr_29210_29292[(2)] = null);
(statearr_29210_29292[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (24)))
{var inst_29154 = (state_29202[(10)]);var inst_29179 = (state_29202[(2)]);var inst_29180 = cljs.core.next.call(null,inst_29154);var inst_29126 = inst_29180;var inst_29127 = null;var inst_29128 = (0);var inst_29129 = (0);var state_29202__$1 = (function (){var statearr_29214 = state_29202;(statearr_29214[(14)] = inst_29127);
(statearr_29214[(15)] = inst_29128);
(statearr_29214[(16)] = inst_29126);
(statearr_29214[(17)] = inst_29129);
(statearr_29214[(18)] = inst_29179);
return statearr_29214;
})();var statearr_29215_29293 = state_29202__$1;(statearr_29215_29293[(2)] = null);
(statearr_29215_29293[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (4)))
{var inst_29109 = (state_29202[(19)]);var inst_29109__$1 = (state_29202[(2)]);var state_29202__$1 = (function (){var statearr_29216 = state_29202;(statearr_29216[(19)] = inst_29109__$1);
return statearr_29216;
})();if(cljs.core.truth_(inst_29109__$1))
{var statearr_29217_29294 = state_29202__$1;(statearr_29217_29294[(1)] = (5));
} else
{var statearr_29218_29295 = state_29202__$1;(statearr_29218_29295[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (15)))
{var inst_29127 = (state_29202[(14)]);var inst_29128 = (state_29202[(15)]);var inst_29126 = (state_29202[(16)]);var inst_29129 = (state_29202[(17)]);var inst_29150 = (state_29202[(2)]);var inst_29151 = (inst_29129 + (1));var tmp29211 = inst_29127;var tmp29212 = inst_29128;var tmp29213 = inst_29126;var inst_29126__$1 = tmp29213;var inst_29127__$1 = tmp29211;var inst_29128__$1 = tmp29212;var inst_29129__$1 = inst_29151;var state_29202__$1 = (function (){var statearr_29219 = state_29202;(statearr_29219[(14)] = inst_29127__$1);
(statearr_29219[(15)] = inst_29128__$1);
(statearr_29219[(16)] = inst_29126__$1);
(statearr_29219[(17)] = inst_29129__$1);
(statearr_29219[(20)] = inst_29150);
return statearr_29219;
})();var statearr_29220_29296 = state_29202__$1;(statearr_29220_29296[(2)] = null);
(statearr_29220_29296[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (21)))
{var inst_29183 = (state_29202[(2)]);var state_29202__$1 = state_29202;var statearr_29221_29297 = state_29202__$1;(statearr_29221_29297[(2)] = inst_29183);
(statearr_29221_29297[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (13)))
{var inst_29141 = (state_29202[(21)]);var inst_29113 = (state_29202[(8)]);var inst_29134 = (state_29202[(22)]);var inst_29143 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29144 = cljs.core.get.call(null,inst_29113,inst_29134);var inst_29145 = [inst_29134,inst_29144];var inst_29146 = (new cljs.core.PersistentVector(null,2,(5),inst_29143,inst_29145,null));var inst_29147 = cljs.core.async.put_BANG_.call(null,inst_29141,inst_29146);var state_29202__$1 = state_29202;var statearr_29222_29298 = state_29202__$1;(statearr_29222_29298[(2)] = inst_29147);
(statearr_29222_29298[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (22)))
{var inst_29113 = (state_29202[(8)]);var inst_29170 = (state_29202[(11)]);var inst_29163 = (state_29202[(12)]);var inst_29172 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29173 = cljs.core.get.call(null,inst_29113,inst_29163);var inst_29174 = [inst_29163,inst_29173];var inst_29175 = (new cljs.core.PersistentVector(null,2,(5),inst_29172,inst_29174,null));var inst_29176 = cljs.core.async.put_BANG_.call(null,inst_29170,inst_29175);var state_29202__$1 = state_29202;var statearr_29223_29299 = state_29202__$1;(statearr_29223_29299[(2)] = inst_29176);
(statearr_29223_29299[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (6)))
{var state_29202__$1 = state_29202;var statearr_29224_29300 = state_29202__$1;(statearr_29224_29300[(2)] = null);
(statearr_29224_29300[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (25)))
{var state_29202__$1 = state_29202;var statearr_29225_29301 = state_29202__$1;(statearr_29225_29301[(2)] = null);
(statearr_29225_29301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (17)))
{var state_29202__$1 = state_29202;var statearr_29226_29302 = state_29202__$1;(statearr_29226_29302[(2)] = null);
(statearr_29226_29302[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (3)))
{var inst_29200 = (state_29202[(2)]);var state_29202__$1 = state_29202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29202__$1,inst_29200);
} else
{if((state_val_29203 === (12)))
{var inst_29188 = (state_29202[(2)]);var state_29202__$1 = state_29202;var statearr_29227_29303 = state_29202__$1;(statearr_29227_29303[(2)] = inst_29188);
(statearr_29227_29303[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (2)))
{var state_29202__$1 = state_29202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29202__$1,(4),filter_rq_sub);
} else
{if((state_val_29203 === (23)))
{var state_29202__$1 = state_29202;var statearr_29228_29304 = state_29202__$1;(statearr_29228_29304[(2)] = null);
(statearr_29228_29304[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (19)))
{var inst_29154 = (state_29202[(10)]);var inst_29158 = cljs.core.chunk_first.call(null,inst_29154);var inst_29159 = cljs.core.chunk_rest.call(null,inst_29154);var inst_29160 = cljs.core.count.call(null,inst_29158);var inst_29126 = inst_29159;var inst_29127 = inst_29158;var inst_29128 = inst_29160;var inst_29129 = (0);var state_29202__$1 = (function (){var statearr_29229 = state_29202;(statearr_29229[(14)] = inst_29127);
(statearr_29229[(15)] = inst_29128);
(statearr_29229[(16)] = inst_29126);
(statearr_29229[(17)] = inst_29129);
return statearr_29229;
})();var statearr_29230_29305 = state_29202__$1;(statearr_29230_29305[(2)] = null);
(statearr_29230_29305[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (11)))
{var inst_29126 = (state_29202[(16)]);var inst_29154 = (state_29202[(10)]);var inst_29154__$1 = cljs.core.seq.call(null,inst_29126);var state_29202__$1 = (function (){var statearr_29231 = state_29202;(statearr_29231[(10)] = inst_29154__$1);
return statearr_29231;
})();if(inst_29154__$1)
{var statearr_29232_29306 = state_29202__$1;(statearr_29232_29306[(1)] = (16));
} else
{var statearr_29233_29307 = state_29202__$1;(statearr_29233_29307[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (9)))
{var inst_29190 = (state_29202[(2)]);var state_29202__$1 = (function (){var statearr_29234 = state_29202;(statearr_29234[(23)] = inst_29190);
return statearr_29234;
})();var statearr_29235_29308 = state_29202__$1;(statearr_29235_29308[(2)] = true);
(statearr_29235_29308[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (5)))
{var inst_29109 = (state_29202[(19)]);var inst_29113 = (state_29202[(8)]);var inst_29112 = (state_29202[(9)]);var inst_29112__$1 = cljs.core.nth.call(null,inst_29109,(0),null);var inst_29113__$1 = cljs.core.nth.call(null,inst_29109,(1),null);var inst_29114 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29115 = ["FILTER-RQ",inst_29112__$1,inst_29113__$1];var inst_29116 = (new cljs.core.PersistentVector(null,3,(5),inst_29114,inst_29115,null));var inst_29117 = cljs.core.clj__GT_js.call(null,inst_29116);var inst_29118 = console.log(inst_29117);var inst_29119 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_29120 = cljs.core.keys.call(null,inst_29113__$1);var inst_29125 = cljs.core.seq.call(null,inst_29120);var inst_29126 = inst_29125;var inst_29127 = null;var inst_29128 = (0);var inst_29129 = (0);var state_29202__$1 = (function (){var statearr_29236 = state_29202;(statearr_29236[(14)] = inst_29127);
(statearr_29236[(7)] = inst_29119);
(statearr_29236[(8)] = inst_29113__$1);
(statearr_29236[(15)] = inst_29128);
(statearr_29236[(24)] = inst_29118);
(statearr_29236[(9)] = inst_29112__$1);
(statearr_29236[(16)] = inst_29126);
(statearr_29236[(17)] = inst_29129);
return statearr_29236;
})();var statearr_29237_29309 = state_29202__$1;(statearr_29237_29309[(2)] = null);
(statearr_29237_29309[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (14)))
{var state_29202__$1 = state_29202;var statearr_29238_29310 = state_29202__$1;(statearr_29238_29310[(2)] = null);
(statearr_29238_29310[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (26)))
{var state_29202__$1 = state_29202;var statearr_29239_29311 = state_29202__$1;(statearr_29239_29311[(2)] = null);
(statearr_29239_29311[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (16)))
{var inst_29154 = (state_29202[(10)]);var inst_29156 = cljs.core.chunked_seq_QMARK_.call(null,inst_29154);var state_29202__$1 = state_29202;if(inst_29156)
{var statearr_29240_29312 = state_29202__$1;(statearr_29240_29312[(1)] = (19));
} else
{var statearr_29241_29313 = state_29202__$1;(statearr_29241_29313[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (10)))
{var inst_29141 = (state_29202[(21)]);var inst_29127 = (state_29202[(14)]);var inst_29119 = (state_29202[(7)]);var inst_29113 = (state_29202[(8)]);var inst_29134 = (state_29202[(22)]);var inst_29112 = (state_29202[(9)]);var inst_29129 = (state_29202[(17)]);var inst_29134__$1 = cljs.core._nth.call(null,inst_29127,inst_29129);var inst_29135 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29136 = cljs.core.get.call(null,inst_29113,inst_29134__$1);var inst_29137 = ["FILTER",inst_29112,inst_29134__$1,inst_29136];var inst_29138 = (new cljs.core.PersistentVector(null,4,(5),inst_29135,inst_29137,null));var inst_29139 = cljs.core.clj__GT_js.call(null,inst_29138);var inst_29140 = console.log(inst_29139);var inst_29141__$1 = cljs.core.get.call(null,inst_29119,inst_29134__$1);var state_29202__$1 = (function (){var statearr_29242 = state_29202;(statearr_29242[(25)] = inst_29140);
(statearr_29242[(21)] = inst_29141__$1);
(statearr_29242[(22)] = inst_29134__$1);
return statearr_29242;
})();if(cljs.core.truth_(inst_29141__$1))
{var statearr_29243_29314 = state_29202__$1;(statearr_29243_29314[(1)] = (13));
} else
{var statearr_29244_29315 = state_29202__$1;(statearr_29244_29315[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (18)))
{var inst_29186 = (state_29202[(2)]);var state_29202__$1 = state_29202;var statearr_29245_29316 = state_29202__$1;(statearr_29245_29316[(2)] = inst_29186);
(statearr_29245_29316[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29203 === (8)))
{var inst_29128 = (state_29202[(15)]);var inst_29129 = (state_29202[(17)]);var inst_29131 = (inst_29129 < inst_29128);var inst_29132 = inst_29131;var state_29202__$1 = state_29202;if(cljs.core.truth_(inst_29132))
{var statearr_29246_29317 = state_29202__$1;(statearr_29246_29317[(1)] = (10));
} else
{var statearr_29247_29318 = state_29202__$1;(statearr_29247_29318[(1)] = (11));
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
});})(c__11154__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
;return ((function (switch__11098__auto__,c__11154__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_29251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29251[(0)] = state_machine__11099__auto__);
(statearr_29251[(1)] = (1));
return statearr_29251;
});
var state_machine__11099__auto____1 = (function (state_29202){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_29202);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e29252){if((e29252 instanceof Object))
{var ex__11102__auto__ = e29252;var statearr_29253_29319 = state_29202;(statearr_29253_29319[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29202);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29252;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29320 = state_29202;
state_29202 = G__29320;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_29202){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_29202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
})();var state__11156__auto__ = (function (){var statearr_29254 = f__11155__auto__.call(null);(statearr_29254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_29254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
);
return c__11154__auto__;
});})(owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
;
clustermap.components.filter.t29094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function (_29096){var self__ = this;
var _29096__$1 = this;return self__.meta29095;
});})(owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
;
clustermap.components.filter.t29094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function (_29096,meta29095__$1){var self__ = this;
var _29096__$1 = this;return (new clustermap.components.filter.t29094(self__.map28926,self__.owner,self__.output_checker28931,self__.input_checker28930,self__.G__28932,self__.component_specs,self__.filter_spec,self__.input_schema28929,self__.constructor28923,self__.history,self__.map28927,self__.components,self__.output_schema28928,self__.validate__6034__auto__,self__.id,self__.map28925,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta29095__$1));
});})(owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
;
clustermap.components.filter.__GT_t29094 = ((function (owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931){
return (function __GT_t29094(map28926__$1,owner__$1,output_checker28931__$1,input_checker28930__$1,G__28932__$1,component_specs__$1,filter_spec__$1,input_schema28929__$1,constructor28923__$1,history__$1,map28927__$1,components__$1,output_schema28928__$1,validate__6034__auto____$1,id__$1,map28925__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta29095){return (new clustermap.components.filter.t29094(map28926__$1,owner__$1,output_checker28931__$1,input_checker28930__$1,G__28932__$1,component_specs__$1,filter_spec__$1,input_schema28929__$1,constructor28923__$1,history__$1,map28927__$1,components__$1,output_schema28928__$1,validate__6034__auto____$1,id__$1,map28925__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta29095));
});})(owner,history,filter_rq_pub,map28926,url_components,components,component_specs,id,filter_spec,map28927,validate__6034__auto__,ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
;
}
return (new clustermap.components.filter.t29094(map28926,owner,output_checker28931,input_checker28930,G__28932,component_specs,filter_spec,input_schema28929,constructor28923,history,map28927,components,output_schema28928,validate__6034__auto__,id,map28925,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29321 = output_checker28931.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29321))
{var error__6036__auto___29322 = temp__4126__auto___29321;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28923","constructor28923",566761651,null),cljs.core.pr_str.call(null,error__6036__auto___29322)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29322,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28928,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28928,input_schema28929,input_checker28930,output_checker28931))
,schema.core.make_fn_schema.call(null,output_schema28928,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28929], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___29258){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner28922,p__29255){var vec__29257 = p__29255;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29257,(0),null);return component_fnk__7881__auto___29258.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28922),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28922,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner28922,var_args){
var p__29255 = null;if (arguments.length > 2) {
  p__29255 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner28922,p__29255);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__29323){
var data__7882__auto__ = cljs.core.first(arglist__29323);
arglist__29323 = cljs.core.next(arglist__29323);
var owner28922 = cljs.core.first(arglist__29323);
var p__29255 = cljs.core.rest(arglist__29323);
return filter_component__delegate(data__7882__auto__,owner28922,p__29255);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___29258))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m28924){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m28924);
});
__GT_filter_component = function(cursor__7850__auto__,m28924){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m28924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
