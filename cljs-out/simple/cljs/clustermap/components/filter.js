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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__29825){var map__29827 = p__29825;var map__29827__$1 = ((cljs.core.seq_QMARK_.call(null,map__29827))?cljs.core.apply.call(null,cljs.core.hash_map,map__29827):map__29827);var filter_spec = map__29827__$1;var component_descrs = cljs.core.get.call(null,map__29827__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29827__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29827__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__29828){var map__29830 = p__29828;var map__29830__$1 = ((cljs.core.seq_QMARK_.call(null,map__29830))?cljs.core.apply.call(null,cljs.core.hash_map,map__29830):map__29830);var filter_spec = map__29830__$1;var component_descrs = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__29831,component_filter_rq_chan){var map__29836 = p__29831;var map__29836__$1 = ((cljs.core.seq_QMARK_.call(null,map__29836))?cljs.core.apply.call(null,cljs.core.hash_map,map__29836):map__29836);var component_spec = map__29836__$1;var type = cljs.core.get.call(null,map__29836__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__29837 = cljs.core._EQ_;var expr__29838 = type;if(cljs.core.truth_(pred__29837.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__29838)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29837.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__29838)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29837.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__29838)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29837.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__29838)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__29837.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__29838)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29838))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__29840,component_filter_rq_chan){var map__29842 = p__29840;var map__29842__$1 = ((cljs.core.seq_QMARK_.call(null,map__29842))?cljs.core.apply.call(null,cljs.core.hash_map,map__29842):map__29842);var component_spec = map__29842__$1;var visible = cljs.core.get.call(null,map__29842__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__29842__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__29842__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__29842__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29844 = schema.core.Any;var input_schema29845 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map29843","map29843",950921486,null))], null);var input_checker29846 = schema.core.checker.call(null,input_schema29845);var output_checker29847 = schema.core.checker.call(null,output_schema29844);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29844,input_schema29845,input_checker29846,output_checker29847){
return (function render_STAR_(G__29848){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29865 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29848], null);var temp__4126__auto___29866 = input_checker29846.call(null,args__6035__auto___29865);if(cljs.core.truth_(temp__4126__auto___29866))
{var error__6036__auto___29867 = temp__4126__auto___29866;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29867)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29867,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29865,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29845,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29843 = G__29848;while(true){
if(cljs.core.map_QMARK_.call(null,map29843))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29843)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29843,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map29843,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29843,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29844,input_schema29845,input_checker29846,output_checker29847){
return (function iter__29857(s__29858){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29844,input_schema29845,input_checker29846,output_checker29847){
return (function (){var s__29858__$1 = s__29858;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29858__$1);if(temp__4126__auto__)
{var s__29858__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29858__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__29858__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__29860 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__29859 = (0);while(true){
if((i__29859 < size__4376__auto__))
{var map__29863 = cljs.core._nth.call(null,c__4375__auto__,i__29859);var map__29863__$1 = ((cljs.core.seq_QMARK_.call(null,map__29863))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863):map__29863);var component_spec = map__29863__$1;var id = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__29860,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__29868 = (i__29859 + (1));
i__29859 = G__29868;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29860),iter__29857.call(null,cljs.core.chunk_rest.call(null,s__29858__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29860),null);
}
} else
{var map__29864 = cljs.core.first.call(null,s__29858__$2);var map__29864__$1 = ((cljs.core.seq_QMARK_.call(null,map__29864))?cljs.core.apply.call(null,cljs.core.hash_map,map__29864):map__29864);var component_spec = map__29864__$1;var id = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__29857.call(null,cljs.core.rest.call(null,s__29858__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29844,input_schema29845,input_checker29846,output_checker29847))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__6034__auto__,ufv__,output_schema29844,input_schema29845,input_checker29846,output_checker29847))
;return iter__4377__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29869 = output_checker29847.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29869))
{var error__6036__auto___29870 = temp__4126__auto___29869;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29870)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29870,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29844,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29844,input_schema29845,input_checker29846,output_checker29847))
,schema.core.make_fn_schema.call(null,output_schema29844,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29845], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__7881__auto___30207 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29877 = schema.core.Any;var input_schema29878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29874","map29874",-1013960144,null))], null);var input_checker29879 = schema.core.checker.call(null,input_schema29878);var output_checker29880 = schema.core.checker.call(null,output_schema29877);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function constructor29872(G__29881){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30208 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29881], null);var temp__4126__auto___30209 = input_checker29879.call(null,args__6035__auto___30208);if(cljs.core.truth_(temp__4126__auto___30209))
{var error__6036__auto___30210 = temp__4126__auto___30209;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29872","constructor29872",-1823752616,null),cljs.core.pr_str.call(null,error__6036__auto___30210)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30210,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30208,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29878,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29874 = G__29881;while(true){
if(cljs.core.map_QMARK_.call(null,map29874))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29874)));
}
var map29876 = plumbing.fnk.schema.safe_get.call(null,map29874,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29876,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map29875 = plumbing.fnk.schema.safe_get.call(null,map29874,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map29875,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map29875,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29874,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t30043 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t30043 = (function (G__29881,input_schema29878,owner,input_checker29879,output_schema29877,map29875,map29876,component_specs,filter_spec,map29874,history,output_checker29880,constructor29872,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,meta30044){
this.G__29881 = G__29881;
this.input_schema29878 = input_schema29878;
this.owner = owner;
this.input_checker29879 = input_checker29879;
this.output_schema29877 = output_schema29877;
this.map29875 = map29875;
this.map29876 = map29876;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.map29874 = map29874;
this.history = history;
this.output_checker29880 = output_checker29880;
this.constructor29872 = constructor29872;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta30044 = meta30044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t30043.cljs$lang$type = true;
clustermap.components.filter.t30043.cljs$lang$ctorStr = "clustermap.components.filter/t30043";
clustermap.components.filter.t30043.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter/t30043");
});})(owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filter.t30043.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t30043.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filter.t30043.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t30043.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (_,p__30046,___$1){var self__ = this;
var map__30047 = p__30046;var map__30047__$1 = ((cljs.core.seq_QMARK_.call(null,map__30047))?cljs.core.apply.call(null,cljs.core.hash_map,map__30047):map__30047);var next_props = map__30047__$1;var map__30048 = cljs.core.get.call(null,map__30047__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__30048__$1 = ((cljs.core.seq_QMARK_.call(null,map__30048))?cljs.core.apply.call(null,cljs.core.hash_map,map__30048):map__30048);var next_filter_spec = map__30048__$1;var map__30049 = cljs.core.get.call(null,map__30048__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__30049__$1 = ((cljs.core.seq_QMARK_.call(null,map__30049))?cljs.core.apply.call(null,cljs.core.hash_map,map__30049):map__30049);var next_url_components = map__30049__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__3627__auto__ = self__.history;if(cljs.core.truth_(and__3627__auto__))
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
});})(owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filter.t30043.prototype.om$core$IRender$ = true;
clustermap.components.filter.t30043.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filter.t30043.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t30043.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__30050_30211 = cljs.core.seq.call(null,chs);var chunk__30051_30212 = null;var count__30052_30213 = (0);var i__30053_30214 = (0);while(true){
if((i__30053_30214 < count__30052_30213))
{var vec__30054_30215 = cljs.core._nth.call(null,chunk__30051_30212,i__30053_30214);var component_id_30216 = cljs.core.nth.call(null,vec__30054_30215,(0),null);var ch_30217 = cljs.core.nth.call(null,vec__30054_30215,(1),null);cljs.core.async.close_BANG_.call(null,ch_30217);
{
var G__30218 = seq__30050_30211;
var G__30219 = chunk__30051_30212;
var G__30220 = count__30052_30213;
var G__30221 = (i__30053_30214 + (1));
seq__30050_30211 = G__30218;
chunk__30051_30212 = G__30219;
count__30052_30213 = G__30220;
i__30053_30214 = G__30221;
continue;
}
} else
{var temp__4126__auto___30222 = cljs.core.seq.call(null,seq__30050_30211);if(temp__4126__auto___30222)
{var seq__30050_30223__$1 = temp__4126__auto___30222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30050_30223__$1))
{var c__4408__auto___30224 = cljs.core.chunk_first.call(null,seq__30050_30223__$1);{
var G__30225 = cljs.core.chunk_rest.call(null,seq__30050_30223__$1);
var G__30226 = c__4408__auto___30224;
var G__30227 = cljs.core.count.call(null,c__4408__auto___30224);
var G__30228 = (0);
seq__30050_30211 = G__30225;
chunk__30051_30212 = G__30226;
count__30052_30213 = G__30227;
i__30053_30214 = G__30228;
continue;
}
} else
{var vec__30055_30229 = cljs.core.first.call(null,seq__30050_30223__$1);var component_id_30230 = cljs.core.nth.call(null,vec__30055_30229,(0),null);var ch_30231 = cljs.core.nth.call(null,vec__30055_30229,(1),null);cljs.core.async.close_BANG_.call(null,ch_30231);
{
var G__30232 = cljs.core.next.call(null,seq__30050_30223__$1);
var G__30233 = null;
var G__30234 = (0);
var G__30235 = (0);
seq__30050_30211 = G__30232;
chunk__30051_30212 = G__30233;
count__30052_30213 = G__30234;
i__30053_30214 = G__30235;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filter.t30043.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t30043.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (state_30151){var state_val_30152 = (state_30151[(1)]);if((state_val_30152 === (7)))
{var inst_30142 = (state_30151[(2)]);var state_30151__$1 = state_30151;if(cljs.core.truth_(inst_30142))
{var statearr_30153_30236 = state_30151__$1;(statearr_30153_30236[(1)] = (25));
} else
{var statearr_30154_30237 = state_30151__$1;(statearr_30154_30237[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (20)))
{var inst_30103 = (state_30151[(7)]);var inst_30061 = (state_30151[(8)]);var inst_30119 = (state_30151[(9)]);var inst_30112 = (state_30151[(10)]);var inst_30068 = (state_30151[(11)]);var inst_30062 = (state_30151[(12)]);var inst_30112__$1 = cljs.core.first.call(null,inst_30103);var inst_30113 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30114 = cljs.core.get.call(null,inst_30062,inst_30112__$1);var inst_30115 = ["FILTER",inst_30061,inst_30112__$1,inst_30114];var inst_30116 = (new cljs.core.PersistentVector(null,4,(5),inst_30113,inst_30115,null));var inst_30117 = cljs.core.clj__GT_js.call(null,inst_30116);var inst_30118 = console.log(inst_30117);var inst_30119__$1 = cljs.core.get.call(null,inst_30068,inst_30112__$1);var state_30151__$1 = (function (){var statearr_30155 = state_30151;(statearr_30155[(9)] = inst_30119__$1);
(statearr_30155[(10)] = inst_30112__$1);
(statearr_30155[(13)] = inst_30118);
return statearr_30155;
})();if(cljs.core.truth_(inst_30119__$1))
{var statearr_30156_30238 = state_30151__$1;(statearr_30156_30238[(1)] = (22));
} else
{var statearr_30157_30239 = state_30151__$1;(statearr_30157_30239[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (27)))
{var inst_30147 = (state_30151[(2)]);var state_30151__$1 = state_30151;var statearr_30158_30240 = state_30151__$1;(statearr_30158_30240[(2)] = inst_30147);
(statearr_30158_30240[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (1)))
{var state_30151__$1 = state_30151;var statearr_30159_30241 = state_30151__$1;(statearr_30159_30241[(2)] = null);
(statearr_30159_30241[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (24)))
{var inst_30103 = (state_30151[(7)]);var inst_30128 = (state_30151[(2)]);var inst_30129 = cljs.core.next.call(null,inst_30103);var inst_30075 = inst_30129;var inst_30076 = null;var inst_30077 = (0);var inst_30078 = (0);var state_30151__$1 = (function (){var statearr_30163 = state_30151;(statearr_30163[(14)] = inst_30078);
(statearr_30163[(15)] = inst_30128);
(statearr_30163[(16)] = inst_30076);
(statearr_30163[(17)] = inst_30075);
(statearr_30163[(18)] = inst_30077);
return statearr_30163;
})();var statearr_30164_30242 = state_30151__$1;(statearr_30164_30242[(2)] = null);
(statearr_30164_30242[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (4)))
{var inst_30058 = (state_30151[(19)]);var inst_30058__$1 = (state_30151[(2)]);var state_30151__$1 = (function (){var statearr_30165 = state_30151;(statearr_30165[(19)] = inst_30058__$1);
return statearr_30165;
})();if(cljs.core.truth_(inst_30058__$1))
{var statearr_30166_30243 = state_30151__$1;(statearr_30166_30243[(1)] = (5));
} else
{var statearr_30167_30244 = state_30151__$1;(statearr_30167_30244[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (15)))
{var inst_30078 = (state_30151[(14)]);var inst_30076 = (state_30151[(16)]);var inst_30075 = (state_30151[(17)]);var inst_30077 = (state_30151[(18)]);var inst_30099 = (state_30151[(2)]);var inst_30100 = (inst_30078 + (1));var tmp30160 = inst_30076;var tmp30161 = inst_30075;var tmp30162 = inst_30077;var inst_30075__$1 = tmp30161;var inst_30076__$1 = tmp30160;var inst_30077__$1 = tmp30162;var inst_30078__$1 = inst_30100;var state_30151__$1 = (function (){var statearr_30168 = state_30151;(statearr_30168[(20)] = inst_30099);
(statearr_30168[(14)] = inst_30078__$1);
(statearr_30168[(16)] = inst_30076__$1);
(statearr_30168[(17)] = inst_30075__$1);
(statearr_30168[(18)] = inst_30077__$1);
return statearr_30168;
})();var statearr_30169_30245 = state_30151__$1;(statearr_30169_30245[(2)] = null);
(statearr_30169_30245[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (21)))
{var inst_30132 = (state_30151[(2)]);var state_30151__$1 = state_30151;var statearr_30170_30246 = state_30151__$1;(statearr_30170_30246[(2)] = inst_30132);
(statearr_30170_30246[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (13)))
{var inst_30090 = (state_30151[(21)]);var inst_30083 = (state_30151[(22)]);var inst_30062 = (state_30151[(12)]);var inst_30092 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30093 = cljs.core.get.call(null,inst_30062,inst_30083);var inst_30094 = [inst_30083,inst_30093];var inst_30095 = (new cljs.core.PersistentVector(null,2,(5),inst_30092,inst_30094,null));var inst_30096 = cljs.core.async.put_BANG_.call(null,inst_30090,inst_30095);var state_30151__$1 = state_30151;var statearr_30171_30247 = state_30151__$1;(statearr_30171_30247[(2)] = inst_30096);
(statearr_30171_30247[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (22)))
{var inst_30119 = (state_30151[(9)]);var inst_30112 = (state_30151[(10)]);var inst_30062 = (state_30151[(12)]);var inst_30121 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30122 = cljs.core.get.call(null,inst_30062,inst_30112);var inst_30123 = [inst_30112,inst_30122];var inst_30124 = (new cljs.core.PersistentVector(null,2,(5),inst_30121,inst_30123,null));var inst_30125 = cljs.core.async.put_BANG_.call(null,inst_30119,inst_30124);var state_30151__$1 = state_30151;var statearr_30172_30248 = state_30151__$1;(statearr_30172_30248[(2)] = inst_30125);
(statearr_30172_30248[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (6)))
{var state_30151__$1 = state_30151;var statearr_30173_30249 = state_30151__$1;(statearr_30173_30249[(2)] = null);
(statearr_30173_30249[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (25)))
{var state_30151__$1 = state_30151;var statearr_30174_30250 = state_30151__$1;(statearr_30174_30250[(2)] = null);
(statearr_30174_30250[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (17)))
{var state_30151__$1 = state_30151;var statearr_30175_30251 = state_30151__$1;(statearr_30175_30251[(2)] = null);
(statearr_30175_30251[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (3)))
{var inst_30149 = (state_30151[(2)]);var state_30151__$1 = state_30151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30151__$1,inst_30149);
} else
{if((state_val_30152 === (12)))
{var inst_30137 = (state_30151[(2)]);var state_30151__$1 = state_30151;var statearr_30176_30252 = state_30151__$1;(statearr_30176_30252[(2)] = inst_30137);
(statearr_30176_30252[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (2)))
{var state_30151__$1 = state_30151;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30151__$1,(4),filter_rq_sub);
} else
{if((state_val_30152 === (23)))
{var state_30151__$1 = state_30151;var statearr_30177_30253 = state_30151__$1;(statearr_30177_30253[(2)] = null);
(statearr_30177_30253[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (19)))
{var inst_30103 = (state_30151[(7)]);var inst_30107 = cljs.core.chunk_first.call(null,inst_30103);var inst_30108 = cljs.core.chunk_rest.call(null,inst_30103);var inst_30109 = cljs.core.count.call(null,inst_30107);var inst_30075 = inst_30108;var inst_30076 = inst_30107;var inst_30077 = inst_30109;var inst_30078 = (0);var state_30151__$1 = (function (){var statearr_30178 = state_30151;(statearr_30178[(14)] = inst_30078);
(statearr_30178[(16)] = inst_30076);
(statearr_30178[(17)] = inst_30075);
(statearr_30178[(18)] = inst_30077);
return statearr_30178;
})();var statearr_30179_30254 = state_30151__$1;(statearr_30179_30254[(2)] = null);
(statearr_30179_30254[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (11)))
{var inst_30103 = (state_30151[(7)]);var inst_30075 = (state_30151[(17)]);var inst_30103__$1 = cljs.core.seq.call(null,inst_30075);var state_30151__$1 = (function (){var statearr_30180 = state_30151;(statearr_30180[(7)] = inst_30103__$1);
return statearr_30180;
})();if(inst_30103__$1)
{var statearr_30181_30255 = state_30151__$1;(statearr_30181_30255[(1)] = (16));
} else
{var statearr_30182_30256 = state_30151__$1;(statearr_30182_30256[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (9)))
{var inst_30139 = (state_30151[(2)]);var state_30151__$1 = (function (){var statearr_30183 = state_30151;(statearr_30183[(23)] = inst_30139);
return statearr_30183;
})();var statearr_30184_30257 = state_30151__$1;(statearr_30184_30257[(2)] = true);
(statearr_30184_30257[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (5)))
{var inst_30061 = (state_30151[(8)]);var inst_30058 = (state_30151[(19)]);var inst_30062 = (state_30151[(12)]);var inst_30061__$1 = cljs.core.nth.call(null,inst_30058,(0),null);var inst_30062__$1 = cljs.core.nth.call(null,inst_30058,(1),null);var inst_30063 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30064 = ["FILTER-RQ",inst_30061__$1,inst_30062__$1];var inst_30065 = (new cljs.core.PersistentVector(null,3,(5),inst_30063,inst_30064,null));var inst_30066 = cljs.core.clj__GT_js.call(null,inst_30065);var inst_30067 = console.log(inst_30066);var inst_30068 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_30069 = cljs.core.keys.call(null,inst_30062__$1);var inst_30074 = cljs.core.seq.call(null,inst_30069);var inst_30075 = inst_30074;var inst_30076 = null;var inst_30077 = (0);var inst_30078 = (0);var state_30151__$1 = (function (){var statearr_30185 = state_30151;(statearr_30185[(14)] = inst_30078);
(statearr_30185[(8)] = inst_30061__$1);
(statearr_30185[(24)] = inst_30067);
(statearr_30185[(11)] = inst_30068);
(statearr_30185[(16)] = inst_30076);
(statearr_30185[(17)] = inst_30075);
(statearr_30185[(18)] = inst_30077);
(statearr_30185[(12)] = inst_30062__$1);
return statearr_30185;
})();var statearr_30186_30258 = state_30151__$1;(statearr_30186_30258[(2)] = null);
(statearr_30186_30258[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (14)))
{var state_30151__$1 = state_30151;var statearr_30187_30259 = state_30151__$1;(statearr_30187_30259[(2)] = null);
(statearr_30187_30259[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (26)))
{var state_30151__$1 = state_30151;var statearr_30188_30260 = state_30151__$1;(statearr_30188_30260[(2)] = null);
(statearr_30188_30260[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (16)))
{var inst_30103 = (state_30151[(7)]);var inst_30105 = cljs.core.chunked_seq_QMARK_.call(null,inst_30103);var state_30151__$1 = state_30151;if(inst_30105)
{var statearr_30189_30261 = state_30151__$1;(statearr_30189_30261[(1)] = (19));
} else
{var statearr_30190_30262 = state_30151__$1;(statearr_30190_30262[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (10)))
{var inst_30090 = (state_30151[(21)]);var inst_30078 = (state_30151[(14)]);var inst_30083 = (state_30151[(22)]);var inst_30061 = (state_30151[(8)]);var inst_30068 = (state_30151[(11)]);var inst_30076 = (state_30151[(16)]);var inst_30062 = (state_30151[(12)]);var inst_30083__$1 = cljs.core._nth.call(null,inst_30076,inst_30078);var inst_30084 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30085 = cljs.core.get.call(null,inst_30062,inst_30083__$1);var inst_30086 = ["FILTER",inst_30061,inst_30083__$1,inst_30085];var inst_30087 = (new cljs.core.PersistentVector(null,4,(5),inst_30084,inst_30086,null));var inst_30088 = cljs.core.clj__GT_js.call(null,inst_30087);var inst_30089 = console.log(inst_30088);var inst_30090__$1 = cljs.core.get.call(null,inst_30068,inst_30083__$1);var state_30151__$1 = (function (){var statearr_30191 = state_30151;(statearr_30191[(21)] = inst_30090__$1);
(statearr_30191[(22)] = inst_30083__$1);
(statearr_30191[(25)] = inst_30089);
return statearr_30191;
})();if(cljs.core.truth_(inst_30090__$1))
{var statearr_30192_30263 = state_30151__$1;(statearr_30192_30263[(1)] = (13));
} else
{var statearr_30193_30264 = state_30151__$1;(statearr_30193_30264[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (18)))
{var inst_30135 = (state_30151[(2)]);var state_30151__$1 = state_30151;var statearr_30194_30265 = state_30151__$1;(statearr_30194_30265[(2)] = inst_30135);
(statearr_30194_30265[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30152 === (8)))
{var inst_30078 = (state_30151[(14)]);var inst_30077 = (state_30151[(18)]);var inst_30080 = (inst_30078 < inst_30077);var inst_30081 = inst_30080;var state_30151__$1 = state_30151;if(cljs.core.truth_(inst_30081))
{var statearr_30195_30266 = state_30151__$1;(statearr_30195_30266[(1)] = (10));
} else
{var statearr_30196_30267 = state_30151__$1;(statearr_30196_30267[(1)] = (11));
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
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;return ((function (switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30200[(0)] = state_machine__9111__auto__);
(statearr_30200[(1)] = (1));
return statearr_30200;
});
var state_machine__9111__auto____1 = (function (state_30151){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30151);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30201){if((e30201 instanceof Object))
{var ex__9114__auto__ = e30201;var statearr_30202_30268 = state_30151;(statearr_30202_30268[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30151);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30201;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30269 = state_30151;
state_30151 = G__30269;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30151){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
})();var state__9127__auto__ = (function (){var statearr_30203 = f__9126__auto__.call(null);(statearr_30203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
);
return c__9125__auto__;
});})(owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filter.t30043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (_30045){var self__ = this;
var _30045__$1 = this;return self__.meta30044;
});})(owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filter.t30043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function (_30045,meta30044__$1){var self__ = this;
var _30045__$1 = this;return (new clustermap.components.filter.t30043(self__.G__29881,self__.input_schema29878,self__.owner,self__.input_checker29879,self__.output_schema29877,self__.map29875,self__.map29876,self__.component_specs,self__.filter_spec,self__.map29874,self__.history,self__.output_checker29880,self__.constructor29872,self__.components,self__.validate__6034__auto__,self__.id,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta30044__$1));
});})(owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
clustermap.components.filter.__GT_t30043 = ((function (owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880){
return (function __GT_t30043(G__29881__$1,input_schema29878__$1,owner__$1,input_checker29879__$1,output_schema29877__$1,map29875__$1,map29876__$1,component_specs__$1,filter_spec__$1,map29874__$1,history__$1,output_checker29880__$1,constructor29872__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30044){return (new clustermap.components.filter.t30043(G__29881__$1,input_schema29878__$1,owner__$1,input_checker29879__$1,output_schema29877__$1,map29875__$1,map29876__$1,component_specs__$1,filter_spec__$1,map29874__$1,history__$1,output_checker29880__$1,constructor29872__$1,components__$1,validate__6034__auto____$1,id__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta30044));
});})(owner,history,filter_rq_pub,map29875,url_components,components,component_specs,id,filter_spec,map29876,validate__6034__auto__,ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
;
}
return (new clustermap.components.filter.t30043(G__29881,input_schema29878,owner,input_checker29879,output_schema29877,map29875,map29876,component_specs,filter_spec,map29874,history,output_checker29880,constructor29872,components,validate__6034__auto__,id,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30270 = output_checker29880.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30270))
{var error__6036__auto___30271 = temp__4126__auto___30270;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29872","constructor29872",-1823752616,null),cljs.core.pr_str.call(null,error__6036__auto___30271)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30271,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29877,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29877,input_schema29878,input_checker29879,output_checker29880))
,schema.core.make_fn_schema.call(null,output_schema29877,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29878], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__7881__auto___30207){
return (function() { 
var filter_component__delegate = function (data__7882__auto__,owner29871,p__30204){var vec__30206 = p__30204;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30206,(0),null);return component_fnk__7881__auto___30207.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29871),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29871,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component = function (data__7882__auto__,owner29871,var_args){
var p__30204 = null;if (arguments.length > 2) {
  p__30204 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__7882__auto__,owner29871,p__30204);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__30272){
var data__7882__auto__ = cljs.core.first(arglist__30272);
arglist__30272 = cljs.core.next(arglist__30272);
var owner29871 = cljs.core.first(arglist__30272);
var p__30204 = cljs.core.rest(arglist__30272);
return filter_component__delegate(data__7882__auto__,owner29871,p__30204);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__7881__auto___30207))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__);
});
var __GT_filter_component__2 = (function (cursor__7850__auto__,m29873){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__7850__auto__,m29873);
});
__GT_filter_component = function(cursor__7850__auto__,m29873){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__7850__auto__,m29873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;
