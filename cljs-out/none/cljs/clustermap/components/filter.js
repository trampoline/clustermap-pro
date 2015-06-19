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
clustermap.components.filter.parse_filter_url = (function parse_filter_url(p__28622){var map__28624 = p__28622;var map__28624__$1 = ((cljs.core.seq_QMARK_.call(null,map__28624))?cljs.core.apply.call(null,cljs.core.hash_map,map__28624):map__28624);var filter_spec = map__28624__$1;var component_descrs = cljs.core.get.call(null,map__28624__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28624__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28624__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
/**
* delegate to filter-component type encoders for each present
* filter component
*/
clustermap.components.filter.encode_filter_url = (function encode_filter_url(p__28625){var map__28627 = p__28625;var map__28627__$1 = ((cljs.core.seq_QMARK_.call(null,map__28627))?cljs.core.apply.call(null,cljs.core.hash_map,map__28627):map__28627);var filter_spec = map__28627__$1;var component_descrs = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656));var components = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var component_specs = cljs.core.get.call(null,map__28627__$1,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921));return null;
});
clustermap.components.filter.render_filter_control = (function render_filter_control(filter_spec,p__28628,component_filter_rq_chan){var map__28633 = p__28628;var map__28633__$1 = ((cljs.core.seq_QMARK_.call(null,map__28633))?cljs.core.apply.call(null,cljs.core.hash_map,map__28633):map__28633);var component_spec = map__28633__$1;var type = cljs.core.get.call(null,map__28633__$1,new cljs.core.Keyword(null,"type","type",1174270348));var pred__28634 = cljs.core._EQ_;var expr__28635 = type;if(cljs.core.truth_(pred__28634.call(null,new cljs.core.Keyword(null,"select","select",1147833503),expr__28635)))
{return om.core.build.call(null,clustermap.components.filters.select_filter.select_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28634.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__28635)))
{return om.core.build.call(null,clustermap.components.filters.tag_filter.tag_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28634.call(null,new cljs.core.Keyword(null,"tag-checkboxes","tag-checkboxes",1098966476),expr__28635)))
{return om.core.build.call(null,clustermap.components.filters.tag_checkboxes_filter.tag_checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28634.call(null,new cljs.core.Keyword(null,"checkboxes","checkboxes",-1031861762),expr__28635)))
{return om.core.build.call(null,clustermap.components.filters.checkboxes_filter.checkboxes_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{if(cljs.core.truth_(pred__28634.call(null,new cljs.core.Keyword(null,"external","external",-1833995989),expr__28635)))
{return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),component_spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),component_filter_rq_chan], null)], null));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28635))));
}
}
}
}
}
});
clustermap.components.filter.render_filter_row = (function render_filter_row(filter_spec,p__28637,component_filter_rq_chan){var map__28639 = p__28637;var map__28639__$1 = ((cljs.core.seq_QMARK_.call(null,map__28639))?cljs.core.apply.call(null,cljs.core.hash_map,map__28639):map__28639);var component_spec = map__28639__$1;var visible = cljs.core.get.call(null,map__28639__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));var skip_label = cljs.core.get.call(null,map__28639__$1,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511));var label = cljs.core.get.call(null,map__28639__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = cljs.core.get.call(null,map__28639__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,id),(cljs.core.truth_(visible)?"active":null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-header","div.filter-header",-693331179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-toggle-filter","i.icon-toggle-filter",14937548)], null),(cljs.core.truth_(skip_label)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null))], null),(cljs.core.truth_(visible)?clustermap.components.filter.render_filter_control.call(null,filter_spec,component_spec,component_filter_rq_chan):null)], null);
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
clustermap.components.filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28641 = schema.core.Any;var input_schema28642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),schema.core.Any,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28640","map28640",-1717439343,null))], null);var input_checker28643 = schema.core.checker.call(null,input_schema28642);var output_checker28644 = schema.core.checker.call(null,output_schema28641);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28641,input_schema28642,input_checker28643,output_checker28644){
return (function render_STAR_(G__28645){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___28662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28645], null);var temp__4126__auto___28663 = input_checker28643.call(null,args__13948__auto___28662);if(cljs.core.truth_(temp__4126__auto___28663))
{var error__13949__auto___28664 = temp__4126__auto___28663;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___28664)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___28664,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___28662,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28642,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map28640 = G__28645;while(true){
if(cljs.core.map_QMARK_.call(null,map28640))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28640)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28640,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_filter_rq_chans = plumbing.fnk.schema.safe_get.call(null,map28640,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map28640,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);var component_ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),component_specs);var new_component_filter_rq_chans = clustermap.components.filter.update_component_filter_rq_chans.call(null,component_filter_rq_chans,component_ids);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMPONENT-SPECS",component_specs], null)));
if(cljs.core.not_EQ_.call(null,new_component_filter_rq_chans,component_filter_rq_chans))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),new_component_filter_rq_chans);
} else
{}
return React.DOM.div({"className": "grdh grdw grda"},cljs.core.into_array.call(null,(function (){var iter__12290__auto__ = ((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__13947__auto__,ufv__,output_schema28641,input_schema28642,input_checker28643,output_checker28644){
return (function iter__28654(s__28655){return (new cljs.core.LazySeq(null,((function (component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__13947__auto__,ufv__,output_schema28641,input_schema28642,input_checker28643,output_checker28644){
return (function (){var s__28655__$1 = s__28655;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28655__$1);if(temp__4126__auto__)
{var s__28655__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28655__$2))
{var c__12288__auto__ = cljs.core.chunk_first.call(null,s__28655__$2);var size__12289__auto__ = cljs.core.count.call(null,c__12288__auto__);var b__28657 = cljs.core.chunk_buffer.call(null,size__12289__auto__);if((function (){var i__28656 = (0);while(true){
if((i__28656 < size__12289__auto__))
{var map__28660 = cljs.core._nth.call(null,c__12288__auto__,i__28656);var map__28660__$1 = ((cljs.core.seq_QMARK_.call(null,map__28660))?cljs.core.apply.call(null,cljs.core.hash_map,map__28660):map__28660);var component_spec = map__28660__$1;var id = cljs.core.get.call(null,map__28660__$1,new cljs.core.Keyword(null,"id","id",-1388402092));cljs.core.chunk_append.call(null,b__28657,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()));
{
var G__28665 = (i__28656 + (1));
i__28656 = G__28665;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28657),iter__28654.call(null,cljs.core.chunk_rest.call(null,s__28655__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28657),null);
}
} else
{var map__28661 = cljs.core.first.call(null,s__28655__$2);var map__28661__$1 = ((cljs.core.seq_QMARK_.call(null,map__28661))?cljs.core.apply.call(null,cljs.core.hash_map,map__28661):map__28661);var component_spec = map__28661__$1;var id = cljs.core.get.call(null,map__28661__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var component_filter_rq_chan = cljs.core.List.EMPTY;return clustermap.components.filter.render_filter_row.call(null,filter_spec,component_spec,cljs.core.get.call(null,new_component_filter_rq_chans,id));
})()),iter__28654.call(null,cljs.core.rest.call(null,s__28655__$2)));
}
} else
{return null;
}
break;
}
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__13947__auto__,ufv__,output_schema28641,input_schema28642,input_checker28643,output_checker28644))
,null,null));
});})(component_ids,new_component_filter_rq_chans,owner,component_filter_rq_chans,components,component_specs,filter_spec,validate__13947__auto__,ufv__,output_schema28641,input_schema28642,input_checker28643,output_checker28644))
;return iter__12290__auto__.call(null,component_specs);
})()));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___28666 = output_checker28644.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___28666))
{var error__13949__auto___28667 = temp__4126__auto___28666;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___28667)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___28667,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28641,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema28641,input_schema28642,input_checker28643,output_checker28644))
,schema.core.make_fn_schema.call(null,output_schema28641,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28642], null)));
})();
clustermap.components.filter.FilterComponentSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema], null);
var component_fnk__15794__auto___29004 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28674 = schema.core.Any;var input_schema28675 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"history","history",-247395220),schema.core.Any,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter.FilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28671","map28671",-199160249,null))], null);var input_checker28676 = schema.core.checker.call(null,input_schema28675);var output_checker28677 = schema.core.checker.call(null,output_schema28674);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function constructor28669(G__28678){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___29005 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28678], null);var temp__4126__auto___29006 = input_checker28676.call(null,args__13948__auto___29005);if(cljs.core.truth_(temp__4126__auto___29006))
{var error__13949__auto___29007 = temp__4126__auto___29006;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28669","constructor28669",-1617071244,null),cljs.core.pr_str.call(null,error__13949__auto___29007)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29007,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___29005,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28675,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map28671 = G__28678;while(true){
if(cljs.core.map_QMARK_.call(null,map28671))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28671)));
}
var map28673 = plumbing.fnk.schema.safe_get.call(null,map28671,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28673,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_specs = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"component-specs","component-specs",-879500921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var url_components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"url-components","url-components",-1811437097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var map28672 = plumbing.fnk.schema.safe_get.call(null,map28671,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var filter_rq_pub = plumbing.fnk.schema.safe_get.call(null,map28672,new cljs.core.Keyword(null,"filter-rq-pub","filter-rq-pub",-577980490),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var history = plumbing.fnk.schema.safe_get.call(null,map28672,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28671,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter.t28840 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t28840 = (function (map28672,owner,G__28678,map28671,output_schema28674,input_schema28675,map28673,component_specs,filter_spec,history,constructor28669,output_checker28677,components,validate__13947__auto__,id,input_checker28676,filter_rq_pub,ufv__,url_components,meta28841){
this.map28672 = map28672;
this.owner = owner;
this.G__28678 = G__28678;
this.map28671 = map28671;
this.output_schema28674 = output_schema28674;
this.input_schema28675 = input_schema28675;
this.map28673 = map28673;
this.component_specs = component_specs;
this.filter_spec = filter_spec;
this.history = history;
this.constructor28669 = constructor28669;
this.output_checker28677 = output_checker28677;
this.components = components;
this.validate__13947__auto__ = validate__13947__auto__;
this.id = id;
this.input_checker28676 = input_checker28676;
this.filter_rq_pub = filter_rq_pub;
this.ufv__ = ufv__;
this.url_components = url_components;
this.meta28841 = meta28841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t28840.cljs$lang$type = true;
clustermap.components.filter.t28840.cljs$lang$ctorStr = "clustermap.components.filter/t28840";
clustermap.components.filter.t28840.cljs$lang$ctorPrWriter = ((function (owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.filter/t28840");
});})(owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
;
clustermap.components.filter.t28840.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter.t28840.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component";
});})(owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
;
clustermap.components.filter.t28840.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t28840.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function (_,p__28843,___$1){var self__ = this;
var map__28844 = p__28843;var map__28844__$1 = ((cljs.core.seq_QMARK_.call(null,map__28844))?cljs.core.apply.call(null,cljs.core.hash_map,map__28844):map__28844);var next_props = map__28844__$1;var map__28845 = cljs.core.get.call(null,map__28844__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__28845__$1 = ((cljs.core.seq_QMARK_.call(null,map__28845))?cljs.core.apply.call(null,cljs.core.hash_map,map__28845):map__28845);var next_filter_spec = map__28845__$1;var map__28846 = cljs.core.get.call(null,map__28845__$1,new cljs.core.Keyword(null,"url-components","url-components",-1811437097));var map__28846__$1 = ((cljs.core.seq_QMARK_.call(null,map__28846))?cljs.core.apply.call(null,cljs.core.hash_map,map__28846):map__28846);var next_url_components = map__28846__$1;var ___$2 = this;if(cljs.core.truth_((function (){var and__11540__auto__ = self__.history;if(cljs.core.truth_(and__11540__auto__))
{return cljs.core.not_EQ_.call(null,next_url_components,self__.url_components);
} else
{return and__11540__auto__;
}
})()))
{var token = self__.history.getToken();var encoded_filter = clustermap.filters.filter_url_param_value.call(null,next_url_components);var new_token = clustermap.formats.url.add_param_to_token.call(null,token,self__.id,encoded_filter);console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TOKEN-CHANGE",token,new_token], null)));
return self__.history.setToken(new_token);
} else
{return null;
}
});})(owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
;
clustermap.components.filter.t28840.prototype.om$core$IRender$ = true;
clustermap.components.filter.t28840.prototype.om$core$IRender$render$arity$1 = ((function (owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function (_){var self__ = this;
var ___$1 = this;var component_filter_rq_chans = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));return clustermap.components.filter.render_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),self__.filter_spec,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),component_filter_rq_chans,new cljs.core.Keyword(null,"owner","owner",-392611939),self__.owner], null));
});})(owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
;
clustermap.components.filter.t28840.prototype.om$core$IWillUnmount$ = true;
clustermap.components.filter.t28840.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795));var chs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));cljs.core.async.unsub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
cljs.core.async.close_BANG_.call(null,filter_rq_sub);
var seq__28847_29008 = cljs.core.seq.call(null,chs);var chunk__28848_29009 = null;var count__28849_29010 = (0);var i__28850_29011 = (0);while(true){
if((i__28850_29011 < count__28849_29010))
{var vec__28851_29012 = cljs.core._nth.call(null,chunk__28848_29009,i__28850_29011);var component_id_29013 = cljs.core.nth.call(null,vec__28851_29012,(0),null);var ch_29014 = cljs.core.nth.call(null,vec__28851_29012,(1),null);cljs.core.async.close_BANG_.call(null,ch_29014);
{
var G__29015 = seq__28847_29008;
var G__29016 = chunk__28848_29009;
var G__29017 = count__28849_29010;
var G__29018 = (i__28850_29011 + (1));
seq__28847_29008 = G__29015;
chunk__28848_29009 = G__29016;
count__28849_29010 = G__29017;
i__28850_29011 = G__29018;
continue;
}
} else
{var temp__4126__auto___29019 = cljs.core.seq.call(null,seq__28847_29008);if(temp__4126__auto___29019)
{var seq__28847_29020__$1 = temp__4126__auto___29019;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28847_29020__$1))
{var c__12321__auto___29021 = cljs.core.chunk_first.call(null,seq__28847_29020__$1);{
var G__29022 = cljs.core.chunk_rest.call(null,seq__28847_29020__$1);
var G__29023 = c__12321__auto___29021;
var G__29024 = cljs.core.count.call(null,c__12321__auto___29021);
var G__29025 = (0);
seq__28847_29008 = G__29022;
chunk__28848_29009 = G__29023;
count__28849_29010 = G__29024;
i__28850_29011 = G__29025;
continue;
}
} else
{var vec__28852_29026 = cljs.core.first.call(null,seq__28847_29020__$1);var component_id_29027 = cljs.core.nth.call(null,vec__28852_29026,(0),null);var ch_29028 = cljs.core.nth.call(null,vec__28852_29026,(1),null);cljs.core.async.close_BANG_.call(null,ch_29028);
{
var G__29029 = cljs.core.next.call(null,seq__28847_29020__$1);
var G__29030 = null;
var G__29031 = (0);
var G__29032 = (0);
seq__28847_29008 = G__29029;
chunk__28848_29009 = G__29030;
count__28849_29010 = G__29031;
i__28850_29011 = G__29032;
continue;
}
}
} else
{}
}
break;
}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815),null);
});})(owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
;
clustermap.components.filter.t28840.prototype.om$core$IDidMount$ = true;
clustermap.components.filter.t28840.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function (_){var self__ = this;
var ___$1 = this;var filter_rq_sub = cljs.core.async.chan.call(null);cljs.core.async.sub.call(null,self__.filter_rq_pub,self__.id,filter_rq_sub);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"filter-rq-sub","filter-rq-sub",1046180795),filter_rq_sub);
var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function (state_28948){var state_val_28949 = (state_28948[(1)]);if((state_val_28949 === (7)))
{var inst_28939 = (state_28948[(2)]);var state_28948__$1 = state_28948;if(cljs.core.truth_(inst_28939))
{var statearr_28950_29033 = state_28948__$1;(statearr_28950_29033[(1)] = (25));
} else
{var statearr_28951_29034 = state_28948__$1;(statearr_28951_29034[(1)] = (26));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (20)))
{var inst_28900 = (state_28948[(7)]);var inst_28859 = (state_28948[(8)]);var inst_28858 = (state_28948[(9)]);var inst_28916 = (state_28948[(10)]);var inst_28865 = (state_28948[(11)]);var inst_28909 = (state_28948[(12)]);var inst_28909__$1 = cljs.core.first.call(null,inst_28900);var inst_28910 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28911 = cljs.core.get.call(null,inst_28859,inst_28909__$1);var inst_28912 = ["FILTER",inst_28858,inst_28909__$1,inst_28911];var inst_28913 = (new cljs.core.PersistentVector(null,4,(5),inst_28910,inst_28912,null));var inst_28914 = cljs.core.clj__GT_js.call(null,inst_28913);var inst_28915 = console.log(inst_28914);var inst_28916__$1 = cljs.core.get.call(null,inst_28865,inst_28909__$1);var state_28948__$1 = (function (){var statearr_28952 = state_28948;(statearr_28952[(13)] = inst_28915);
(statearr_28952[(10)] = inst_28916__$1);
(statearr_28952[(12)] = inst_28909__$1);
return statearr_28952;
})();if(cljs.core.truth_(inst_28916__$1))
{var statearr_28953_29035 = state_28948__$1;(statearr_28953_29035[(1)] = (22));
} else
{var statearr_28954_29036 = state_28948__$1;(statearr_28954_29036[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (27)))
{var inst_28944 = (state_28948[(2)]);var state_28948__$1 = state_28948;var statearr_28955_29037 = state_28948__$1;(statearr_28955_29037[(2)] = inst_28944);
(statearr_28955_29037[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (1)))
{var state_28948__$1 = state_28948;var statearr_28956_29038 = state_28948__$1;(statearr_28956_29038[(2)] = null);
(statearr_28956_29038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (24)))
{var inst_28900 = (state_28948[(7)]);var inst_28925 = (state_28948[(2)]);var inst_28926 = cljs.core.next.call(null,inst_28900);var inst_28872 = inst_28926;var inst_28873 = null;var inst_28874 = (0);var inst_28875 = (0);var state_28948__$1 = (function (){var statearr_28960 = state_28948;(statearr_28960[(14)] = inst_28872);
(statearr_28960[(15)] = inst_28873);
(statearr_28960[(16)] = inst_28925);
(statearr_28960[(17)] = inst_28874);
(statearr_28960[(18)] = inst_28875);
return statearr_28960;
})();var statearr_28961_29039 = state_28948__$1;(statearr_28961_29039[(2)] = null);
(statearr_28961_29039[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (4)))
{var inst_28855 = (state_28948[(19)]);var inst_28855__$1 = (state_28948[(2)]);var state_28948__$1 = (function (){var statearr_28962 = state_28948;(statearr_28962[(19)] = inst_28855__$1);
return statearr_28962;
})();if(cljs.core.truth_(inst_28855__$1))
{var statearr_28963_29040 = state_28948__$1;(statearr_28963_29040[(1)] = (5));
} else
{var statearr_28964_29041 = state_28948__$1;(statearr_28964_29041[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (15)))
{var inst_28872 = (state_28948[(14)]);var inst_28873 = (state_28948[(15)]);var inst_28874 = (state_28948[(17)]);var inst_28875 = (state_28948[(18)]);var inst_28896 = (state_28948[(2)]);var inst_28897 = (inst_28875 + (1));var tmp28957 = inst_28872;var tmp28958 = inst_28873;var tmp28959 = inst_28874;var inst_28872__$1 = tmp28957;var inst_28873__$1 = tmp28958;var inst_28874__$1 = tmp28959;var inst_28875__$1 = inst_28897;var state_28948__$1 = (function (){var statearr_28965 = state_28948;(statearr_28965[(14)] = inst_28872__$1);
(statearr_28965[(20)] = inst_28896);
(statearr_28965[(15)] = inst_28873__$1);
(statearr_28965[(17)] = inst_28874__$1);
(statearr_28965[(18)] = inst_28875__$1);
return statearr_28965;
})();var statearr_28966_29042 = state_28948__$1;(statearr_28966_29042[(2)] = null);
(statearr_28966_29042[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (21)))
{var inst_28929 = (state_28948[(2)]);var state_28948__$1 = state_28948;var statearr_28967_29043 = state_28948__$1;(statearr_28967_29043[(2)] = inst_28929);
(statearr_28967_29043[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (13)))
{var inst_28859 = (state_28948[(8)]);var inst_28887 = (state_28948[(21)]);var inst_28880 = (state_28948[(22)]);var inst_28889 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28890 = cljs.core.get.call(null,inst_28859,inst_28880);var inst_28891 = [inst_28880,inst_28890];var inst_28892 = (new cljs.core.PersistentVector(null,2,(5),inst_28889,inst_28891,null));var inst_28893 = cljs.core.async.put_BANG_.call(null,inst_28887,inst_28892);var state_28948__$1 = state_28948;var statearr_28968_29044 = state_28948__$1;(statearr_28968_29044[(2)] = inst_28893);
(statearr_28968_29044[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (22)))
{var inst_28859 = (state_28948[(8)]);var inst_28916 = (state_28948[(10)]);var inst_28909 = (state_28948[(12)]);var inst_28918 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28919 = cljs.core.get.call(null,inst_28859,inst_28909);var inst_28920 = [inst_28909,inst_28919];var inst_28921 = (new cljs.core.PersistentVector(null,2,(5),inst_28918,inst_28920,null));var inst_28922 = cljs.core.async.put_BANG_.call(null,inst_28916,inst_28921);var state_28948__$1 = state_28948;var statearr_28969_29045 = state_28948__$1;(statearr_28969_29045[(2)] = inst_28922);
(statearr_28969_29045[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (6)))
{var state_28948__$1 = state_28948;var statearr_28970_29046 = state_28948__$1;(statearr_28970_29046[(2)] = null);
(statearr_28970_29046[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (25)))
{var state_28948__$1 = state_28948;var statearr_28971_29047 = state_28948__$1;(statearr_28971_29047[(2)] = null);
(statearr_28971_29047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (17)))
{var state_28948__$1 = state_28948;var statearr_28972_29048 = state_28948__$1;(statearr_28972_29048[(2)] = null);
(statearr_28972_29048[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (3)))
{var inst_28946 = (state_28948[(2)]);var state_28948__$1 = state_28948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28948__$1,inst_28946);
} else
{if((state_val_28949 === (12)))
{var inst_28934 = (state_28948[(2)]);var state_28948__$1 = state_28948;var statearr_28973_29049 = state_28948__$1;(statearr_28973_29049[(2)] = inst_28934);
(statearr_28973_29049[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (2)))
{var state_28948__$1 = state_28948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28948__$1,(4),filter_rq_sub);
} else
{if((state_val_28949 === (23)))
{var state_28948__$1 = state_28948;var statearr_28974_29050 = state_28948__$1;(statearr_28974_29050[(2)] = null);
(statearr_28974_29050[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (19)))
{var inst_28900 = (state_28948[(7)]);var inst_28904 = cljs.core.chunk_first.call(null,inst_28900);var inst_28905 = cljs.core.chunk_rest.call(null,inst_28900);var inst_28906 = cljs.core.count.call(null,inst_28904);var inst_28872 = inst_28905;var inst_28873 = inst_28904;var inst_28874 = inst_28906;var inst_28875 = (0);var state_28948__$1 = (function (){var statearr_28975 = state_28948;(statearr_28975[(14)] = inst_28872);
(statearr_28975[(15)] = inst_28873);
(statearr_28975[(17)] = inst_28874);
(statearr_28975[(18)] = inst_28875);
return statearr_28975;
})();var statearr_28976_29051 = state_28948__$1;(statearr_28976_29051[(2)] = null);
(statearr_28976_29051[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (11)))
{var inst_28872 = (state_28948[(14)]);var inst_28900 = (state_28948[(7)]);var inst_28900__$1 = cljs.core.seq.call(null,inst_28872);var state_28948__$1 = (function (){var statearr_28977 = state_28948;(statearr_28977[(7)] = inst_28900__$1);
return statearr_28977;
})();if(inst_28900__$1)
{var statearr_28978_29052 = state_28948__$1;(statearr_28978_29052[(1)] = (16));
} else
{var statearr_28979_29053 = state_28948__$1;(statearr_28979_29053[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (9)))
{var inst_28936 = (state_28948[(2)]);var state_28948__$1 = (function (){var statearr_28980 = state_28948;(statearr_28980[(23)] = inst_28936);
return statearr_28980;
})();var statearr_28981_29054 = state_28948__$1;(statearr_28981_29054[(2)] = true);
(statearr_28981_29054[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (5)))
{var inst_28859 = (state_28948[(8)]);var inst_28858 = (state_28948[(9)]);var inst_28855 = (state_28948[(19)]);var inst_28858__$1 = cljs.core.nth.call(null,inst_28855,(0),null);var inst_28859__$1 = cljs.core.nth.call(null,inst_28855,(1),null);var inst_28860 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28861 = ["FILTER-RQ",inst_28858__$1,inst_28859__$1];var inst_28862 = (new cljs.core.PersistentVector(null,3,(5),inst_28860,inst_28861,null));var inst_28863 = cljs.core.clj__GT_js.call(null,inst_28862);var inst_28864 = console.log(inst_28863);var inst_28865 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"component-filter-rq-chans","component-filter-rq-chans",-830878815));var inst_28866 = cljs.core.keys.call(null,inst_28859__$1);var inst_28871 = cljs.core.seq.call(null,inst_28866);var inst_28872 = inst_28871;var inst_28873 = null;var inst_28874 = (0);var inst_28875 = (0);var state_28948__$1 = (function (){var statearr_28982 = state_28948;(statearr_28982[(24)] = inst_28864);
(statearr_28982[(14)] = inst_28872);
(statearr_28982[(15)] = inst_28873);
(statearr_28982[(8)] = inst_28859__$1);
(statearr_28982[(17)] = inst_28874);
(statearr_28982[(9)] = inst_28858__$1);
(statearr_28982[(11)] = inst_28865);
(statearr_28982[(18)] = inst_28875);
return statearr_28982;
})();var statearr_28983_29055 = state_28948__$1;(statearr_28983_29055[(2)] = null);
(statearr_28983_29055[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (14)))
{var state_28948__$1 = state_28948;var statearr_28984_29056 = state_28948__$1;(statearr_28984_29056[(2)] = null);
(statearr_28984_29056[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (26)))
{var state_28948__$1 = state_28948;var statearr_28985_29057 = state_28948__$1;(statearr_28985_29057[(2)] = null);
(statearr_28985_29057[(1)] = (27));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (16)))
{var inst_28900 = (state_28948[(7)]);var inst_28902 = cljs.core.chunked_seq_QMARK_.call(null,inst_28900);var state_28948__$1 = state_28948;if(inst_28902)
{var statearr_28986_29058 = state_28948__$1;(statearr_28986_29058[(1)] = (19));
} else
{var statearr_28987_29059 = state_28948__$1;(statearr_28987_29059[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (10)))
{var inst_28873 = (state_28948[(15)]);var inst_28859 = (state_28948[(8)]);var inst_28887 = (state_28948[(21)]);var inst_28858 = (state_28948[(9)]);var inst_28865 = (state_28948[(11)]);var inst_28875 = (state_28948[(18)]);var inst_28880 = (state_28948[(22)]);var inst_28880__$1 = cljs.core._nth.call(null,inst_28873,inst_28875);var inst_28881 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28882 = cljs.core.get.call(null,inst_28859,inst_28880__$1);var inst_28883 = ["FILTER",inst_28858,inst_28880__$1,inst_28882];var inst_28884 = (new cljs.core.PersistentVector(null,4,(5),inst_28881,inst_28883,null));var inst_28885 = cljs.core.clj__GT_js.call(null,inst_28884);var inst_28886 = console.log(inst_28885);var inst_28887__$1 = cljs.core.get.call(null,inst_28865,inst_28880__$1);var state_28948__$1 = (function (){var statearr_28988 = state_28948;(statearr_28988[(25)] = inst_28886);
(statearr_28988[(21)] = inst_28887__$1);
(statearr_28988[(22)] = inst_28880__$1);
return statearr_28988;
})();if(cljs.core.truth_(inst_28887__$1))
{var statearr_28989_29060 = state_28948__$1;(statearr_28989_29060[(1)] = (13));
} else
{var statearr_28990_29061 = state_28948__$1;(statearr_28990_29061[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (18)))
{var inst_28932 = (state_28948[(2)]);var state_28948__$1 = state_28948;var statearr_28991_29062 = state_28948__$1;(statearr_28991_29062[(2)] = inst_28932);
(statearr_28991_29062[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28949 === (8)))
{var inst_28874 = (state_28948[(17)]);var inst_28875 = (state_28948[(18)]);var inst_28877 = (inst_28875 < inst_28874);var inst_28878 = inst_28877;var state_28948__$1 = state_28948;if(cljs.core.truth_(inst_28878))
{var statearr_28992_29063 = state_28948__$1;(statearr_28992_29063[(1)] = (10));
} else
{var statearr_28993_29064 = state_28948__$1;(statearr_28993_29064[(1)] = (11));
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
});})(c__16733__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
;return ((function (switch__16718__auto__,c__16733__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_28997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28997[(0)] = state_machine__16719__auto__);
(statearr_28997[(1)] = (1));
return statearr_28997;
});
var state_machine__16719__auto____1 = (function (state_28948){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_28948);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e28998){if((e28998 instanceof Object))
{var ex__16722__auto__ = e28998;var statearr_28999_29065 = state_28948;(statearr_28999_29065[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28948);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28998;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29066 = state_28948;
state_28948 = G__29066;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_28948){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_28948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
})();var state__16735__auto__ = (function (){var statearr_29000 = f__16734__auto__.call(null);(statearr_29000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_29000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,filter_rq_sub,___$1,owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
);
return c__16733__auto__;
});})(owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
;
clustermap.components.filter.t28840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function (_28842){var self__ = this;
var _28842__$1 = this;return self__.meta28841;
});})(owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
;
clustermap.components.filter.t28840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function (_28842,meta28841__$1){var self__ = this;
var _28842__$1 = this;return (new clustermap.components.filter.t28840(self__.map28672,self__.owner,self__.G__28678,self__.map28671,self__.output_schema28674,self__.input_schema28675,self__.map28673,self__.component_specs,self__.filter_spec,self__.history,self__.constructor28669,self__.output_checker28677,self__.components,self__.validate__13947__auto__,self__.id,self__.input_checker28676,self__.filter_rq_pub,self__.ufv__,self__.url_components,meta28841__$1));
});})(owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
;
clustermap.components.filter.__GT_t28840 = ((function (owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677){
return (function __GT_t28840(map28672__$1,owner__$1,G__28678__$1,map28671__$1,output_schema28674__$1,input_schema28675__$1,map28673__$1,component_specs__$1,filter_spec__$1,history__$1,constructor28669__$1,output_checker28677__$1,components__$1,validate__13947__auto____$1,id__$1,input_checker28676__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta28841){return (new clustermap.components.filter.t28840(map28672__$1,owner__$1,G__28678__$1,map28671__$1,output_schema28674__$1,input_schema28675__$1,map28673__$1,component_specs__$1,filter_spec__$1,history__$1,constructor28669__$1,output_checker28677__$1,components__$1,validate__13947__auto____$1,id__$1,input_checker28676__$1,filter_rq_pub__$1,ufv____$1,url_components__$1,meta28841));
});})(owner,history,filter_rq_pub,map28672,url_components,components,component_specs,id,filter_spec,map28673,validate__13947__auto__,ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
;
}
return (new clustermap.components.filter.t28840(map28672,owner,G__28678,map28671,output_schema28674,input_schema28675,map28673,component_specs,filter_spec,history,constructor28669,output_checker28677,components,validate__13947__auto__,id,input_checker28676,filter_rq_pub,ufv__,url_components,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___29067 = output_checker28677.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___29067))
{var error__13949__auto___29068 = temp__4126__auto___29067;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28669","constructor28669",-1617071244,null),cljs.core.pr_str.call(null,error__13949__auto___29068)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29068,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28674,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema28674,input_schema28675,input_checker28676,output_checker28677))
,schema.core.make_fn_schema.call(null,output_schema28674,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28675], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter.filter_component = ((function (component_fnk__15794__auto___29004){
return (function() { 
var filter_component__delegate = function (data__15795__auto__,owner28668,p__29001){var vec__29003 = p__29001;var opts__15796__auto__ = cljs.core.nth.call(null,vec__29003,(0),null);return component_fnk__15794__auto___29004.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28668),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28668,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var filter_component = function (data__15795__auto__,owner28668,var_args){
var p__29001 = null;if (arguments.length > 2) {
  p__29001 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component__delegate.call(this,data__15795__auto__,owner28668,p__29001);};
filter_component.cljs$lang$maxFixedArity = 2;
filter_component.cljs$lang$applyTo = (function (arglist__29069){
var data__15795__auto__ = cljs.core.first(arglist__29069);
arglist__29069 = cljs.core.next(arglist__29069);
var owner28668 = cljs.core.first(arglist__29069);
var p__29001 = cljs.core.rest(arglist__29069);
return filter_component__delegate(data__15795__auto__,owner28668,p__29001);
});
filter_component.cljs$core$IFn$_invoke$arity$variadic = filter_component__delegate;
return filter_component;
})()
;})(component_fnk__15794__auto___29004))
;
clustermap.components.filter.__GT_filter_component = (function() {
var __GT_filter_component = null;
var __GT_filter_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__15763__auto__);
});
var __GT_filter_component__2 = (function (cursor__15763__auto__,m28670){return om.core.build.call(null,clustermap.components.filter.filter_component,cursor__15763__auto__,m28670);
});
__GT_filter_component = function(cursor__15763__auto__,m28670){
switch(arguments.length){
case 1:
return __GT_filter_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_filter_component__2.call(this,cursor__15763__auto__,m28670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component__1;
__GT_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component__2;
return __GT_filter_component;
})()
;

//# sourceMappingURL=filter.js.map