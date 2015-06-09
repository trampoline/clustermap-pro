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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30661 = schema.core.Any;var input_schema30662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30663 = schema.core.checker.call(null,input_schema30662);var output_checker30664 = schema.core.checker.call(null,output_schema30661);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30661,input_schema30662,input_checker30663,output_checker30664){
return (function render_STAR_(G__30665){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30665], null);var temp__4126__auto___30669 = input_checker30663.call(null,args__6035__auto___30668);if(cljs.core.truth_(temp__4126__auto___30669))
{var error__6036__auto___30670 = temp__4126__auto___30669;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30670)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30670,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30668,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30662,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30665;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs30667 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30661,input_schema30662,input_checker30663,output_checker30664){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30661,input_schema30662,input_checker30663,output_checker30664))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs30667))?sablono.interpreter.attributes.call(null,attrs30667):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30667))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30667)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30671 = output_checker30664.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30671))
{var error__6036__auto___30672 = temp__4126__auto___30671;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30672)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30672,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30661,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30661,input_schema30662,input_checker30663,output_checker30664))
,schema.core.make_fn_schema.call(null,output_schema30661,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30662], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___30814 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30678 = schema.core.Any;var input_schema30679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30676","map30676",-1376307684,null))], null);var input_checker30680 = schema.core.checker.call(null,input_schema30679);var output_checker30681 = schema.core.checker.call(null,output_schema30678);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681){
return (function constructor30674(G__30682){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30815 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30682], null);var temp__4126__auto___30816 = input_checker30680.call(null,args__6035__auto___30815);if(cljs.core.truth_(temp__4126__auto___30816))
{var error__6036__auto___30817 = temp__4126__auto___30816;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30674","constructor30674",-678513978,null),cljs.core.pr_str.call(null,error__6036__auto___30817)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30817,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30815,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30679,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30676 = G__30682;while(true){
if(cljs.core.map_QMARK_.call(null,map30676))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30676)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30676,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30677 = plumbing.fnk.schema.safe_get.call(null,map30676,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30677,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30676,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t30747 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t30747 = (function (component_spec,component_filter_rq_chan,owner,data,constructor30674,set_filter_for_url,filter_spec,input_schema30679,G__30682,map30677,input_checker30680,validate__6034__auto__,id,output_checker30681,map30676,ufv__,output_schema30678,meta30748){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.constructor30674 = constructor30674;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.input_schema30679 = input_schema30679;
this.G__30682 = G__30682;
this.map30677 = map30677;
this.input_checker30680 = input_checker30680;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_checker30681 = output_checker30681;
this.map30676 = map30676;
this.ufv__ = ufv__;
this.output_schema30678 = output_schema30678;
this.meta30748 = meta30748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t30747.cljs$lang$type = true;
clustermap.components.filters.external_filter.t30747.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t30747";
clustermap.components.filters.external_filter.t30747.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t30747");
});})(owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681))
;
clustermap.components.filters.external_filter.t30747.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t30747.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681))
;
clustermap.components.filters.external_filter.t30747.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t30747.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681))
;
clustermap.components.filters.external_filter.t30747.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t30747.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681){
return (function (state_30785){var state_val_30786 = (state_30785[(1)]);if((state_val_30786 === (7)))
{var inst_30776 = (state_30785[(2)]);var state_30785__$1 = state_30785;if(cljs.core.truth_(inst_30776))
{var statearr_30787_30818 = state_30785__$1;(statearr_30787_30818[(1)] = (11));
} else
{var statearr_30788_30819 = state_30785__$1;(statearr_30788_30819[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30786 === (1)))
{var state_30785__$1 = state_30785;var statearr_30789_30820 = state_30785__$1;(statearr_30789_30820[(2)] = null);
(statearr_30789_30820[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30786 === (4)))
{var inst_30752 = (state_30785[(7)]);var inst_30752__$1 = (state_30785[(2)]);var state_30785__$1 = (function (){var statearr_30790 = state_30785;(statearr_30790[(7)] = inst_30752__$1);
return statearr_30790;
})();if(cljs.core.truth_(inst_30752__$1))
{var statearr_30791_30821 = state_30785__$1;(statearr_30791_30821[(1)] = (5));
} else
{var statearr_30792_30822 = state_30785__$1;(statearr_30792_30822[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30786 === (13)))
{var inst_30781 = (state_30785[(2)]);var state_30785__$1 = state_30785;var statearr_30793_30823 = state_30785__$1;(statearr_30793_30823[(2)] = inst_30781);
(statearr_30793_30823[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30786 === (6)))
{var state_30785__$1 = state_30785;var statearr_30794_30824 = state_30785__$1;(statearr_30794_30824[(2)] = null);
(statearr_30794_30824[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30786 === (3)))
{var inst_30783 = (state_30785[(2)]);var state_30785__$1 = state_30785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30785__$1,inst_30783);
} else
{if((state_val_30786 === (12)))
{var state_30785__$1 = state_30785;var statearr_30795_30825 = state_30785__$1;(statearr_30795_30825[(2)] = null);
(statearr_30795_30825[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30786 === (2)))
{var state_30785__$1 = state_30785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30785__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30786 === (11)))
{var state_30785__$1 = state_30785;var statearr_30796_30826 = state_30785__$1;(statearr_30796_30826[(2)] = null);
(statearr_30796_30826[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30786 === (9)))
{var inst_30758 = (state_30785[(8)]);var state_30785__$1 = state_30785;var statearr_30797_30827 = state_30785__$1;(statearr_30797_30827[(2)] = inst_30758);
(statearr_30797_30827[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30786 === (5)))
{var inst_30752 = (state_30785[(7)]);var inst_30758 = (state_30785[(8)]);var inst_30755 = cljs.core.nth.call(null,inst_30752,(0),null);var inst_30756 = cljs.core.nth.call(null,inst_30752,(1),null);var inst_30758__$1 = om.core.get_props.call(null,self__.owner);var inst_30759 = cljs.core.seq_QMARK_.call(null,inst_30758__$1);var state_30785__$1 = (function (){var statearr_30798 = state_30785;(statearr_30798[(9)] = inst_30755);
(statearr_30798[(8)] = inst_30758__$1);
(statearr_30798[(10)] = inst_30756);
return statearr_30798;
})();if(inst_30759)
{var statearr_30799_30828 = state_30785__$1;(statearr_30799_30828[(1)] = (8));
} else
{var statearr_30800_30829 = state_30785__$1;(statearr_30800_30829[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30786 === (10)))
{var inst_30752 = (state_30785[(7)]);var inst_30755 = (state_30785[(9)]);var inst_30756 = (state_30785[(10)]);var inst_30764 = (state_30785[(2)]);var inst_30765 = cljs.core.get.call(null,inst_30764,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30766 = cljs.core.get.call(null,inst_30764,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30767 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30768 = ["EXTERNAL-FILTER-RQ",self__.id,inst_30756];var inst_30769 = (new cljs.core.PersistentVector(null,3,(5),inst_30767,inst_30768,null));var inst_30770 = cljs.core.clj__GT_js.call(null,inst_30769);var inst_30771 = console.log(inst_30770);var inst_30772 = (function (){var filter_spec__$2 = inst_30766;var component_spec__$2 = inst_30765;var map__30757 = inst_30764;var rq = inst_30756;var component_id = inst_30755;var vec__30754 = inst_30752;var temp__4126__auto__ = inst_30752;return ((function (filter_spec__$2,component_spec__$2,map__30757,rq,component_id,vec__30754,temp__4126__auto__,inst_30752,inst_30755,inst_30756,inst_30764,inst_30765,inst_30766,inst_30767,inst_30768,inst_30769,inst_30770,inst_30771,state_val_30786,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__30757,rq,component_id,vec__30754,temp__4126__auto__,inst_30752,inst_30755,inst_30756,inst_30764,inst_30765,inst_30766,inst_30767,inst_30768,inst_30769,inst_30770,inst_30771,state_val_30786,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681))
})();var inst_30773 = self__.set_filter_for_url.call(null,inst_30756,inst_30772);var state_30785__$1 = (function (){var statearr_30801 = state_30785;(statearr_30801[(11)] = inst_30771);
(statearr_30801[(12)] = inst_30773);
return statearr_30801;
})();var statearr_30802_30830 = state_30785__$1;(statearr_30802_30830[(2)] = true);
(statearr_30802_30830[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30786 === (8)))
{var inst_30758 = (state_30785[(8)]);var inst_30761 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30758);var state_30785__$1 = state_30785;var statearr_30803_30831 = state_30785__$1;(statearr_30803_30831[(2)] = inst_30761);
(statearr_30803_30831[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30807 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30807[(0)] = state_machine__9111__auto__);
(statearr_30807[(1)] = (1));
return statearr_30807;
});
var state_machine__9111__auto____1 = (function (state_30785){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30785);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30808){if((e30808 instanceof Object))
{var ex__9114__auto__ = e30808;var statearr_30809_30832 = state_30785;(statearr_30809_30832[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30785);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30808;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30833 = state_30785;
state_30785 = G__30833;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30785){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681))
})();var state__9127__auto__ = (function (){var statearr_30810 = f__9126__auto__.call(null);(statearr_30810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30810;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681))
;
clustermap.components.filters.external_filter.t30747.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681){
return (function (_30749){var self__ = this;
var _30749__$1 = this;return self__.meta30748;
});})(owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681))
;
clustermap.components.filters.external_filter.t30747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681){
return (function (_30749,meta30748__$1){var self__ = this;
var _30749__$1 = this;return (new clustermap.components.filters.external_filter.t30747(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.constructor30674,self__.set_filter_for_url,self__.filter_spec,self__.input_schema30679,self__.G__30682,self__.map30677,self__.input_checker30680,self__.validate__6034__auto__,self__.id,self__.output_checker30681,self__.map30676,self__.ufv__,self__.output_schema30678,meta30748__$1));
});})(owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681))
;
clustermap.components.filters.external_filter.__GT_t30747 = ((function (owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681){
return (function __GT_t30747(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,constructor30674__$1,set_filter_for_url__$1,filter_spec__$1,input_schema30679__$1,G__30682__$1,map30677__$1,input_checker30680__$1,validate__6034__auto____$1,id__$1,output_checker30681__$1,map30676__$1,ufv____$1,output_schema30678__$1,meta30748){return (new clustermap.components.filters.external_filter.t30747(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,constructor30674__$1,set_filter_for_url__$1,filter_spec__$1,input_schema30679__$1,G__30682__$1,map30677__$1,input_checker30680__$1,validate__6034__auto____$1,id__$1,output_checker30681__$1,map30676__$1,ufv____$1,output_schema30678__$1,meta30748));
});})(owner,component_filter_rq_chan,map30677,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681))
;
}
return (new clustermap.components.filters.external_filter.t30747(component_spec,component_filter_rq_chan,owner,data,constructor30674,set_filter_for_url,filter_spec,input_schema30679,G__30682,map30677,input_checker30680,validate__6034__auto__,id,output_checker30681,map30676,ufv__,output_schema30678,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30834 = output_checker30681.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30834))
{var error__6036__auto___30835 = temp__4126__auto___30834;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30674","constructor30674",-678513978,null),cljs.core.pr_str.call(null,error__6036__auto___30835)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30835,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30678,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30678,input_schema30679,input_checker30680,output_checker30681))
,schema.core.make_fn_schema.call(null,output_schema30678,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30679], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___30814){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30673,p__30811){var vec__30813 = p__30811;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30813,(0),null);return component_fnk__7881__auto___30814.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30673,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30673,var_args){
var p__30811 = null;if (arguments.length > 2) {
  p__30811 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30673,p__30811);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__30836){
var data__7882__auto__ = cljs.core.first(arglist__30836);
arglist__30836 = cljs.core.next(arglist__30836);
var owner30673 = cljs.core.first(arglist__30836);
var p__30811 = cljs.core.rest(arglist__30836);
return external_filter_component__delegate(data__7882__auto__,owner30673,p__30811);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___30814))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30675){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30675);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30675){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
