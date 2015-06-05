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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30364 = schema.core.Any;var input_schema30365 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30366 = schema.core.checker.call(null,input_schema30365);var output_checker30367 = schema.core.checker.call(null,output_schema30364);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30364,input_schema30365,input_checker30366,output_checker30367){
return (function render_STAR_(G__30368){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30371 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30368], null);var temp__4126__auto___30372 = input_checker30366.call(null,args__6035__auto___30371);if(cljs.core.truth_(temp__4126__auto___30372))
{var error__6036__auto___30373 = temp__4126__auto___30372;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30373)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30373,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30371,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30365,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30368;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs30370 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30364,input_schema30365,input_checker30366,output_checker30367){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30364,input_schema30365,input_checker30366,output_checker30367))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs30370))?sablono.interpreter.attributes.call(null,attrs30370):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30370))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30370)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30374 = output_checker30367.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30374))
{var error__6036__auto___30375 = temp__4126__auto___30374;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30375)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30375,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30364,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30364,input_schema30365,input_checker30366,output_checker30367))
,schema.core.make_fn_schema.call(null,output_schema30364,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30365], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___30517 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30381 = schema.core.Any;var input_schema30382 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30379","map30379",645931142,null))], null);var input_checker30383 = schema.core.checker.call(null,input_schema30382);var output_checker30384 = schema.core.checker.call(null,output_schema30381);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384){
return (function constructor30377(G__30385){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30518 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30385], null);var temp__4126__auto___30519 = input_checker30383.call(null,args__6035__auto___30518);if(cljs.core.truth_(temp__4126__auto___30519))
{var error__6036__auto___30520 = temp__4126__auto___30519;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30377","constructor30377",1009763795,null),cljs.core.pr_str.call(null,error__6036__auto___30520)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30520,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30518,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30382,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30379 = G__30385;while(true){
if(cljs.core.map_QMARK_.call(null,map30379))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30379)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30379,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30380 = plumbing.fnk.schema.safe_get.call(null,map30379,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30380,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30379,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t30450 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t30450 = (function (component_spec,component_filter_rq_chan,input_checker30383,owner,map30380,map30379,data,output_schema30381,output_checker30384,G__30385,set_filter_for_url,filter_spec,constructor30377,validate__6034__auto__,id,input_schema30382,ufv__,meta30451){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_checker30383 = input_checker30383;
this.owner = owner;
this.map30380 = map30380;
this.map30379 = map30379;
this.data = data;
this.output_schema30381 = output_schema30381;
this.output_checker30384 = output_checker30384;
this.G__30385 = G__30385;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.constructor30377 = constructor30377;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.input_schema30382 = input_schema30382;
this.ufv__ = ufv__;
this.meta30451 = meta30451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t30450.cljs$lang$type = true;
clustermap.components.filters.external_filter.t30450.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t30450";
clustermap.components.filters.external_filter.t30450.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t30450");
});})(owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384))
;
clustermap.components.filters.external_filter.t30450.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t30450.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384))
;
clustermap.components.filters.external_filter.t30450.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t30450.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384))
;
clustermap.components.filters.external_filter.t30450.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t30450.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384){
return (function (state_30488){var state_val_30489 = (state_30488[(1)]);if((state_val_30489 === (7)))
{var inst_30479 = (state_30488[(2)]);var state_30488__$1 = state_30488;if(cljs.core.truth_(inst_30479))
{var statearr_30490_30521 = state_30488__$1;(statearr_30490_30521[(1)] = (11));
} else
{var statearr_30491_30522 = state_30488__$1;(statearr_30491_30522[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30489 === (1)))
{var state_30488__$1 = state_30488;var statearr_30492_30523 = state_30488__$1;(statearr_30492_30523[(2)] = null);
(statearr_30492_30523[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30489 === (4)))
{var inst_30455 = (state_30488[(7)]);var inst_30455__$1 = (state_30488[(2)]);var state_30488__$1 = (function (){var statearr_30493 = state_30488;(statearr_30493[(7)] = inst_30455__$1);
return statearr_30493;
})();if(cljs.core.truth_(inst_30455__$1))
{var statearr_30494_30524 = state_30488__$1;(statearr_30494_30524[(1)] = (5));
} else
{var statearr_30495_30525 = state_30488__$1;(statearr_30495_30525[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30489 === (13)))
{var inst_30484 = (state_30488[(2)]);var state_30488__$1 = state_30488;var statearr_30496_30526 = state_30488__$1;(statearr_30496_30526[(2)] = inst_30484);
(statearr_30496_30526[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30489 === (6)))
{var state_30488__$1 = state_30488;var statearr_30497_30527 = state_30488__$1;(statearr_30497_30527[(2)] = null);
(statearr_30497_30527[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30489 === (3)))
{var inst_30486 = (state_30488[(2)]);var state_30488__$1 = state_30488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30488__$1,inst_30486);
} else
{if((state_val_30489 === (12)))
{var state_30488__$1 = state_30488;var statearr_30498_30528 = state_30488__$1;(statearr_30498_30528[(2)] = null);
(statearr_30498_30528[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30489 === (2)))
{var state_30488__$1 = state_30488;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30488__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30489 === (11)))
{var state_30488__$1 = state_30488;var statearr_30499_30529 = state_30488__$1;(statearr_30499_30529[(2)] = null);
(statearr_30499_30529[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30489 === (9)))
{var inst_30461 = (state_30488[(8)]);var state_30488__$1 = state_30488;var statearr_30500_30530 = state_30488__$1;(statearr_30500_30530[(2)] = inst_30461);
(statearr_30500_30530[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30489 === (5)))
{var inst_30461 = (state_30488[(8)]);var inst_30455 = (state_30488[(7)]);var inst_30458 = cljs.core.nth.call(null,inst_30455,(0),null);var inst_30459 = cljs.core.nth.call(null,inst_30455,(1),null);var inst_30461__$1 = om.core.get_props.call(null,self__.owner);var inst_30462 = cljs.core.seq_QMARK_.call(null,inst_30461__$1);var state_30488__$1 = (function (){var statearr_30501 = state_30488;(statearr_30501[(9)] = inst_30458);
(statearr_30501[(8)] = inst_30461__$1);
(statearr_30501[(10)] = inst_30459);
return statearr_30501;
})();if(inst_30462)
{var statearr_30502_30531 = state_30488__$1;(statearr_30502_30531[(1)] = (8));
} else
{var statearr_30503_30532 = state_30488__$1;(statearr_30503_30532[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30489 === (10)))
{var inst_30458 = (state_30488[(9)]);var inst_30455 = (state_30488[(7)]);var inst_30459 = (state_30488[(10)]);var inst_30467 = (state_30488[(2)]);var inst_30468 = cljs.core.get.call(null,inst_30467,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30469 = cljs.core.get.call(null,inst_30467,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30470 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30471 = ["EXTERNAL-FILTER-RQ",self__.id,inst_30459];var inst_30472 = (new cljs.core.PersistentVector(null,3,(5),inst_30470,inst_30471,null));var inst_30473 = cljs.core.clj__GT_js.call(null,inst_30472);var inst_30474 = console.log(inst_30473);var inst_30475 = (function (){var filter_spec__$2 = inst_30469;var component_spec__$2 = inst_30468;var map__30460 = inst_30467;var rq = inst_30459;var component_id = inst_30458;var vec__30457 = inst_30455;var temp__4126__auto__ = inst_30455;return ((function (filter_spec__$2,component_spec__$2,map__30460,rq,component_id,vec__30457,temp__4126__auto__,inst_30458,inst_30455,inst_30459,inst_30467,inst_30468,inst_30469,inst_30470,inst_30471,inst_30472,inst_30473,inst_30474,state_val_30489,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__30460,rq,component_id,vec__30457,temp__4126__auto__,inst_30458,inst_30455,inst_30459,inst_30467,inst_30468,inst_30469,inst_30470,inst_30471,inst_30472,inst_30473,inst_30474,state_val_30489,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384))
})();var inst_30476 = self__.set_filter_for_url.call(null,inst_30459,inst_30475);var state_30488__$1 = (function (){var statearr_30504 = state_30488;(statearr_30504[(11)] = inst_30476);
(statearr_30504[(12)] = inst_30474);
return statearr_30504;
})();var statearr_30505_30533 = state_30488__$1;(statearr_30505_30533[(2)] = true);
(statearr_30505_30533[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30489 === (8)))
{var inst_30461 = (state_30488[(8)]);var inst_30464 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30461);var state_30488__$1 = state_30488;var statearr_30506_30534 = state_30488__$1;(statearr_30506_30534[(2)] = inst_30464);
(statearr_30506_30534[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30510 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30510[(0)] = state_machine__9111__auto__);
(statearr_30510[(1)] = (1));
return statearr_30510;
});
var state_machine__9111__auto____1 = (function (state_30488){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30488);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30511){if((e30511 instanceof Object))
{var ex__9114__auto__ = e30511;var statearr_30512_30535 = state_30488;(statearr_30512_30535[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30488);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30511;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30536 = state_30488;
state_30488 = G__30536;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30488){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384))
})();var state__9127__auto__ = (function (){var statearr_30513 = f__9126__auto__.call(null);(statearr_30513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384))
;
clustermap.components.filters.external_filter.t30450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384){
return (function (_30452){var self__ = this;
var _30452__$1 = this;return self__.meta30451;
});})(owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384))
;
clustermap.components.filters.external_filter.t30450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384){
return (function (_30452,meta30451__$1){var self__ = this;
var _30452__$1 = this;return (new clustermap.components.filters.external_filter.t30450(self__.component_spec,self__.component_filter_rq_chan,self__.input_checker30383,self__.owner,self__.map30380,self__.map30379,self__.data,self__.output_schema30381,self__.output_checker30384,self__.G__30385,self__.set_filter_for_url,self__.filter_spec,self__.constructor30377,self__.validate__6034__auto__,self__.id,self__.input_schema30382,self__.ufv__,meta30451__$1));
});})(owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384))
;
clustermap.components.filters.external_filter.__GT_t30450 = ((function (owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384){
return (function __GT_t30450(component_spec__$1,component_filter_rq_chan__$1,input_checker30383__$1,owner__$1,map30380__$1,map30379__$1,data__$1,output_schema30381__$1,output_checker30384__$1,G__30385__$1,set_filter_for_url__$1,filter_spec__$1,constructor30377__$1,validate__6034__auto____$1,id__$1,input_schema30382__$1,ufv____$1,meta30451){return (new clustermap.components.filters.external_filter.t30450(component_spec__$1,component_filter_rq_chan__$1,input_checker30383__$1,owner__$1,map30380__$1,map30379__$1,data__$1,output_schema30381__$1,output_checker30384__$1,G__30385__$1,set_filter_for_url__$1,filter_spec__$1,constructor30377__$1,validate__6034__auto____$1,id__$1,input_schema30382__$1,ufv____$1,meta30451));
});})(owner,component_filter_rq_chan,map30380,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384))
;
}
return (new clustermap.components.filters.external_filter.t30450(component_spec,component_filter_rq_chan,input_checker30383,owner,map30380,map30379,data,output_schema30381,output_checker30384,G__30385,set_filter_for_url,filter_spec,constructor30377,validate__6034__auto__,id,input_schema30382,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30537 = output_checker30384.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30537))
{var error__6036__auto___30538 = temp__4126__auto___30537;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30377","constructor30377",1009763795,null),cljs.core.pr_str.call(null,error__6036__auto___30538)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30538,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30381,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30381,input_schema30382,input_checker30383,output_checker30384))
,schema.core.make_fn_schema.call(null,output_schema30381,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30382], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___30517){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30376,p__30514){var vec__30516 = p__30514;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30516,(0),null);return component_fnk__7881__auto___30517.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30376,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30376,var_args){
var p__30514 = null;if (arguments.length > 2) {
  p__30514 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30376,p__30514);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__30539){
var data__7882__auto__ = cljs.core.first(arglist__30539);
arglist__30539 = cljs.core.next(arglist__30539);
var owner30376 = cljs.core.first(arglist__30539);
var p__30514 = cljs.core.rest(arglist__30539);
return external_filter_component__delegate(data__7882__auto__,owner30376,p__30514);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___30517))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30378){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30378);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30378){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
