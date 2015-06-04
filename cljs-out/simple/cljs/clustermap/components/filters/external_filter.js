// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filters.external_filter');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.channels');
goog.require('plumbing.core');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('clustermap.filters');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clustermap.filters');
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29598 = schema.core.Any;var input_schema29599 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29600 = schema.core.checker.call(null,input_schema29599);var output_checker29601 = schema.core.checker.call(null,output_schema29598);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29598,input_schema29599,input_checker29600,output_checker29601){
return (function render_STAR_(G__29602){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29602], null);var temp__4126__auto___29606 = input_checker29600.call(null,args__6035__auto___29605);if(cljs.core.truth_(temp__4126__auto___29606))
{var error__6036__auto___29607 = temp__4126__auto___29606;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29607)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29607,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29605,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29599,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29602;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.ul({"className": "filter-items"},(function (){var attrs29604 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29598,input_schema29599,input_checker29600,output_checker29601){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29598,input_schema29599,input_checker29600,output_checker29601))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs29604))?sablono.interpreter.attributes.call(null,attrs29604):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29604))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29604)], null))));
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29608 = output_checker29601.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29608))
{var error__6036__auto___29609 = temp__4126__auto___29608;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29609)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29609,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29598,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29598,input_schema29599,input_checker29600,output_checker29601))
,schema.core.make_fn_schema.call(null,output_schema29598,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29599], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___29751 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29615 = schema.core.Any;var input_schema29616 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29613","map29613",1419194772,null))], null);var input_checker29617 = schema.core.checker.call(null,input_schema29616);var output_checker29618 = schema.core.checker.call(null,output_schema29615);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618){
return (function constructor29611(G__29619){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29619], null);var temp__4126__auto___29753 = input_checker29617.call(null,args__6035__auto___29752);if(cljs.core.truth_(temp__4126__auto___29753))
{var error__6036__auto___29754 = temp__4126__auto___29753;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29611","constructor29611",-570418159,null),cljs.core.pr_str.call(null,error__6036__auto___29754)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29754,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29752,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29616,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29613 = G__29619;while(true){
if(cljs.core.map_QMARK_.call(null,map29613))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29613)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29613,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29614 = plumbing.fnk.schema.safe_get.call(null,map29613,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29614,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29613,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t29684 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t29684 = (function (component_spec,component_filter_rq_chan,output_checker29618,owner,data,input_schema29616,set_filter_for_url,filter_spec,constructor29611,G__29619,map29613,map29614,output_schema29615,input_checker29617,validate__6034__auto__,id,ufv__,meta29685){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.output_checker29618 = output_checker29618;
this.owner = owner;
this.data = data;
this.input_schema29616 = input_schema29616;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.constructor29611 = constructor29611;
this.G__29619 = G__29619;
this.map29613 = map29613;
this.map29614 = map29614;
this.output_schema29615 = output_schema29615;
this.input_checker29617 = input_checker29617;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta29685 = meta29685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t29684.cljs$lang$type = true;
clustermap.components.filters.external_filter.t29684.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t29684";
clustermap.components.filters.external_filter.t29684.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t29684");
});})(owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618))
;
clustermap.components.filters.external_filter.t29684.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t29684.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618))
;
clustermap.components.filters.external_filter.t29684.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t29684.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618))
;
clustermap.components.filters.external_filter.t29684.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t29684.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618){
return (function (state_29722){var state_val_29723 = (state_29722[(1)]);if((state_val_29723 === (7)))
{var inst_29713 = (state_29722[(2)]);var state_29722__$1 = state_29722;if(cljs.core.truth_(inst_29713))
{var statearr_29724_29755 = state_29722__$1;(statearr_29724_29755[(1)] = (11));
} else
{var statearr_29725_29756 = state_29722__$1;(statearr_29725_29756[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29723 === (1)))
{var state_29722__$1 = state_29722;var statearr_29726_29757 = state_29722__$1;(statearr_29726_29757[(2)] = null);
(statearr_29726_29757[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29723 === (4)))
{var inst_29689 = (state_29722[(7)]);var inst_29689__$1 = (state_29722[(2)]);var state_29722__$1 = (function (){var statearr_29727 = state_29722;(statearr_29727[(7)] = inst_29689__$1);
return statearr_29727;
})();if(cljs.core.truth_(inst_29689__$1))
{var statearr_29728_29758 = state_29722__$1;(statearr_29728_29758[(1)] = (5));
} else
{var statearr_29729_29759 = state_29722__$1;(statearr_29729_29759[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29723 === (13)))
{var inst_29718 = (state_29722[(2)]);var state_29722__$1 = state_29722;var statearr_29730_29760 = state_29722__$1;(statearr_29730_29760[(2)] = inst_29718);
(statearr_29730_29760[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29723 === (6)))
{var state_29722__$1 = state_29722;var statearr_29731_29761 = state_29722__$1;(statearr_29731_29761[(2)] = null);
(statearr_29731_29761[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29723 === (3)))
{var inst_29720 = (state_29722[(2)]);var state_29722__$1 = state_29722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29722__$1,inst_29720);
} else
{if((state_val_29723 === (12)))
{var state_29722__$1 = state_29722;var statearr_29732_29762 = state_29722__$1;(statearr_29732_29762[(2)] = null);
(statearr_29732_29762[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29723 === (2)))
{var state_29722__$1 = state_29722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29722__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29723 === (11)))
{var state_29722__$1 = state_29722;var statearr_29733_29763 = state_29722__$1;(statearr_29733_29763[(2)] = null);
(statearr_29733_29763[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29723 === (9)))
{var inst_29695 = (state_29722[(8)]);var state_29722__$1 = state_29722;var statearr_29734_29764 = state_29722__$1;(statearr_29734_29764[(2)] = inst_29695);
(statearr_29734_29764[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29723 === (5)))
{var inst_29695 = (state_29722[(8)]);var inst_29689 = (state_29722[(7)]);var inst_29692 = cljs.core.nth.call(null,inst_29689,(0),null);var inst_29693 = cljs.core.nth.call(null,inst_29689,(1),null);var inst_29695__$1 = om.core.get_props.call(null,self__.owner);var inst_29696 = cljs.core.seq_QMARK_.call(null,inst_29695__$1);var state_29722__$1 = (function (){var statearr_29735 = state_29722;(statearr_29735[(9)] = inst_29692);
(statearr_29735[(10)] = inst_29693);
(statearr_29735[(8)] = inst_29695__$1);
return statearr_29735;
})();if(inst_29696)
{var statearr_29736_29765 = state_29722__$1;(statearr_29736_29765[(1)] = (8));
} else
{var statearr_29737_29766 = state_29722__$1;(statearr_29737_29766[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29723 === (10)))
{var inst_29692 = (state_29722[(9)]);var inst_29693 = (state_29722[(10)]);var inst_29689 = (state_29722[(7)]);var inst_29701 = (state_29722[(2)]);var inst_29702 = cljs.core.get.call(null,inst_29701,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29703 = cljs.core.get.call(null,inst_29701,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29704 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29705 = ["EXTERNAL-FILTER-RQ",self__.id,inst_29693];var inst_29706 = (new cljs.core.PersistentVector(null,3,(5),inst_29704,inst_29705,null));var inst_29707 = cljs.core.clj__GT_js.call(null,inst_29706);var inst_29708 = console.log(inst_29707);var inst_29709 = (function (){var filter_spec__$2 = inst_29703;var component_spec__$2 = inst_29702;var map__29694 = inst_29701;var rq = inst_29693;var component_id = inst_29692;var vec__29691 = inst_29689;var temp__4126__auto__ = inst_29689;return ((function (filter_spec__$2,component_spec__$2,map__29694,rq,component_id,vec__29691,temp__4126__auto__,inst_29692,inst_29693,inst_29689,inst_29701,inst_29702,inst_29703,inst_29704,inst_29705,inst_29706,inst_29707,inst_29708,state_val_29723,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__29694,rq,component_id,vec__29691,temp__4126__auto__,inst_29692,inst_29693,inst_29689,inst_29701,inst_29702,inst_29703,inst_29704,inst_29705,inst_29706,inst_29707,inst_29708,state_val_29723,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618))
})();var inst_29710 = self__.set_filter_for_url.call(null,inst_29693,inst_29709);var state_29722__$1 = (function (){var statearr_29738 = state_29722;(statearr_29738[(11)] = inst_29708);
(statearr_29738[(12)] = inst_29710);
return statearr_29738;
})();var statearr_29739_29767 = state_29722__$1;(statearr_29739_29767[(2)] = true);
(statearr_29739_29767[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29723 === (8)))
{var inst_29695 = (state_29722[(8)]);var inst_29698 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29695);var state_29722__$1 = state_29722;var statearr_29740_29768 = state_29722__$1;(statearr_29740_29768[(2)] = inst_29698);
(statearr_29740_29768[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29744 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29744[(0)] = state_machine__11462__auto__);
(statearr_29744[(1)] = (1));
return statearr_29744;
});
var state_machine__11462__auto____1 = (function (state_29722){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29722);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29745){if((e29745 instanceof Object))
{var ex__11465__auto__ = e29745;var statearr_29746_29769 = state_29722;(statearr_29746_29769[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29722);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29745;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29770 = state_29722;
state_29722 = G__29770;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29722){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618))
})();var state__11519__auto__ = (function (){var statearr_29747 = f__11518__auto__.call(null);(statearr_29747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618))
;
clustermap.components.filters.external_filter.t29684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618){
return (function (_29686){var self__ = this;
var _29686__$1 = this;return self__.meta29685;
});})(owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618))
;
clustermap.components.filters.external_filter.t29684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618){
return (function (_29686,meta29685__$1){var self__ = this;
var _29686__$1 = this;return (new clustermap.components.filters.external_filter.t29684(self__.component_spec,self__.component_filter_rq_chan,self__.output_checker29618,self__.owner,self__.data,self__.input_schema29616,self__.set_filter_for_url,self__.filter_spec,self__.constructor29611,self__.G__29619,self__.map29613,self__.map29614,self__.output_schema29615,self__.input_checker29617,self__.validate__6034__auto__,self__.id,self__.ufv__,meta29685__$1));
});})(owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618))
;
clustermap.components.filters.external_filter.__GT_t29684 = ((function (owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618){
return (function __GT_t29684(component_spec__$1,component_filter_rq_chan__$1,output_checker29618__$1,owner__$1,data__$1,input_schema29616__$1,set_filter_for_url__$1,filter_spec__$1,constructor29611__$1,G__29619__$1,map29613__$1,map29614__$1,output_schema29615__$1,input_checker29617__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29685){return (new clustermap.components.filters.external_filter.t29684(component_spec__$1,component_filter_rq_chan__$1,output_checker29618__$1,owner__$1,data__$1,input_schema29616__$1,set_filter_for_url__$1,filter_spec__$1,constructor29611__$1,G__29619__$1,map29613__$1,map29614__$1,output_schema29615__$1,input_checker29617__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta29685));
});})(owner,component_filter_rq_chan,map29614,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618))
;
}
return (new clustermap.components.filters.external_filter.t29684(component_spec,component_filter_rq_chan,output_checker29618,owner,data,input_schema29616,set_filter_for_url,filter_spec,constructor29611,G__29619,map29613,map29614,output_schema29615,input_checker29617,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29771 = output_checker29618.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29771))
{var error__6036__auto___29772 = temp__4126__auto___29771;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29611","constructor29611",-570418159,null),cljs.core.pr_str.call(null,error__6036__auto___29772)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29772,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29615,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29615,input_schema29616,input_checker29617,output_checker29618))
,schema.core.make_fn_schema.call(null,output_schema29615,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29616], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___29751){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner29610,p__29748){var vec__29750 = p__29748;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29750,(0),null);return component_fnk__7881__auto___29751.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29610,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner29610,var_args){
var p__29748 = null;if (arguments.length > 2) {
  p__29748 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner29610,p__29748);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__29773){
var data__7882__auto__ = cljs.core.first(arglist__29773);
arglist__29773 = cljs.core.next(arglist__29773);
var owner29610 = cljs.core.first(arglist__29773);
var p__29748 = cljs.core.rest(arglist__29773);
return external_filter_component__delegate(data__7882__auto__,owner29610,p__29748);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___29751))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m29612){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m29612);
});
__GT_external_filter_component = function(cursor__7850__auto__,m29612){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m29612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
