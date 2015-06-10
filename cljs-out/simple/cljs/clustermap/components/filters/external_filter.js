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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30676 = schema.core.Any;var input_schema30677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30678 = schema.core.checker.call(null,input_schema30677);var output_checker30679 = schema.core.checker.call(null,output_schema30676);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30676,input_schema30677,input_checker30678,output_checker30679){
return (function render_STAR_(G__30680){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30680], null);var temp__4126__auto___30684 = input_checker30678.call(null,args__6035__auto___30683);if(cljs.core.truth_(temp__4126__auto___30684))
{var error__6036__auto___30685 = temp__4126__auto___30684;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30685)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30685,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30683,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30677,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30680;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs30682 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30676,input_schema30677,input_checker30678,output_checker30679){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30676,input_schema30677,input_checker30678,output_checker30679))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs30682))?sablono.interpreter.attributes.call(null,attrs30682):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30682))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30682)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30686 = output_checker30679.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30686))
{var error__6036__auto___30687 = temp__4126__auto___30686;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30687)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30687,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30676,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30676,input_schema30677,input_checker30678,output_checker30679))
,schema.core.make_fn_schema.call(null,output_schema30676,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30677], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___30829 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30693 = schema.core.Any;var input_schema30694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30691","map30691",681395447,null))], null);var input_checker30695 = schema.core.checker.call(null,input_schema30694);var output_checker30696 = schema.core.checker.call(null,output_schema30693);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function constructor30689(G__30697){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30697], null);var temp__4126__auto___30831 = input_checker30695.call(null,args__6035__auto___30830);if(cljs.core.truth_(temp__4126__auto___30831))
{var error__6036__auto___30832 = temp__4126__auto___30831;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30689","constructor30689",-936078379,null),cljs.core.pr_str.call(null,error__6036__auto___30832)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30832,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30830,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30694,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30691 = G__30697;while(true){
if(cljs.core.map_QMARK_.call(null,map30691))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30691)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30691,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30692 = plumbing.fnk.schema.safe_get.call(null,map30691,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30692,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30691,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t30762 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t30762 = (function (component_spec,component_filter_rq_chan,owner,map30692,data,set_filter_for_url,output_checker30696,filter_spec,output_schema30693,constructor30689,map30691,G__30697,validate__6034__auto__,input_checker30695,input_schema30694,id,ufv__,meta30763){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.map30692 = map30692;
this.data = data;
this.set_filter_for_url = set_filter_for_url;
this.output_checker30696 = output_checker30696;
this.filter_spec = filter_spec;
this.output_schema30693 = output_schema30693;
this.constructor30689 = constructor30689;
this.map30691 = map30691;
this.G__30697 = G__30697;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_checker30695 = input_checker30695;
this.input_schema30694 = input_schema30694;
this.id = id;
this.ufv__ = ufv__;
this.meta30763 = meta30763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t30762.cljs$lang$type = true;
clustermap.components.filters.external_filter.t30762.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t30762";
clustermap.components.filters.external_filter.t30762.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t30762");
});})(owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
clustermap.components.filters.external_filter.t30762.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t30762.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
clustermap.components.filters.external_filter.t30762.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t30762.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
clustermap.components.filters.external_filter.t30762.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t30762.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (state_30800){var state_val_30801 = (state_30800[(1)]);if((state_val_30801 === (7)))
{var inst_30791 = (state_30800[(2)]);var state_30800__$1 = state_30800;if(cljs.core.truth_(inst_30791))
{var statearr_30802_30833 = state_30800__$1;(statearr_30802_30833[(1)] = (11));
} else
{var statearr_30803_30834 = state_30800__$1;(statearr_30803_30834[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30801 === (1)))
{var state_30800__$1 = state_30800;var statearr_30804_30835 = state_30800__$1;(statearr_30804_30835[(2)] = null);
(statearr_30804_30835[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30801 === (4)))
{var inst_30767 = (state_30800[(7)]);var inst_30767__$1 = (state_30800[(2)]);var state_30800__$1 = (function (){var statearr_30805 = state_30800;(statearr_30805[(7)] = inst_30767__$1);
return statearr_30805;
})();if(cljs.core.truth_(inst_30767__$1))
{var statearr_30806_30836 = state_30800__$1;(statearr_30806_30836[(1)] = (5));
} else
{var statearr_30807_30837 = state_30800__$1;(statearr_30807_30837[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30801 === (13)))
{var inst_30796 = (state_30800[(2)]);var state_30800__$1 = state_30800;var statearr_30808_30838 = state_30800__$1;(statearr_30808_30838[(2)] = inst_30796);
(statearr_30808_30838[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30801 === (6)))
{var state_30800__$1 = state_30800;var statearr_30809_30839 = state_30800__$1;(statearr_30809_30839[(2)] = null);
(statearr_30809_30839[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30801 === (3)))
{var inst_30798 = (state_30800[(2)]);var state_30800__$1 = state_30800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30800__$1,inst_30798);
} else
{if((state_val_30801 === (12)))
{var state_30800__$1 = state_30800;var statearr_30810_30840 = state_30800__$1;(statearr_30810_30840[(2)] = null);
(statearr_30810_30840[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30801 === (2)))
{var state_30800__$1 = state_30800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30800__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30801 === (11)))
{var state_30800__$1 = state_30800;var statearr_30811_30841 = state_30800__$1;(statearr_30811_30841[(2)] = null);
(statearr_30811_30841[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30801 === (9)))
{var inst_30773 = (state_30800[(8)]);var state_30800__$1 = state_30800;var statearr_30812_30842 = state_30800__$1;(statearr_30812_30842[(2)] = inst_30773);
(statearr_30812_30842[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30801 === (5)))
{var inst_30773 = (state_30800[(8)]);var inst_30767 = (state_30800[(7)]);var inst_30770 = cljs.core.nth.call(null,inst_30767,(0),null);var inst_30771 = cljs.core.nth.call(null,inst_30767,(1),null);var inst_30773__$1 = om.core.get_props.call(null,self__.owner);var inst_30774 = cljs.core.seq_QMARK_.call(null,inst_30773__$1);var state_30800__$1 = (function (){var statearr_30813 = state_30800;(statearr_30813[(9)] = inst_30771);
(statearr_30813[(8)] = inst_30773__$1);
(statearr_30813[(10)] = inst_30770);
return statearr_30813;
})();if(inst_30774)
{var statearr_30814_30843 = state_30800__$1;(statearr_30814_30843[(1)] = (8));
} else
{var statearr_30815_30844 = state_30800__$1;(statearr_30815_30844[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30801 === (10)))
{var inst_30771 = (state_30800[(9)]);var inst_30767 = (state_30800[(7)]);var inst_30770 = (state_30800[(10)]);var inst_30779 = (state_30800[(2)]);var inst_30780 = cljs.core.get.call(null,inst_30779,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30781 = cljs.core.get.call(null,inst_30779,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30782 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30783 = ["EXTERNAL-FILTER-RQ",self__.id,inst_30771];var inst_30784 = (new cljs.core.PersistentVector(null,3,(5),inst_30782,inst_30783,null));var inst_30785 = cljs.core.clj__GT_js.call(null,inst_30784);var inst_30786 = console.log(inst_30785);var inst_30787 = (function (){var filter_spec__$2 = inst_30781;var component_spec__$2 = inst_30780;var map__30772 = inst_30779;var rq = inst_30771;var component_id = inst_30770;var vec__30769 = inst_30767;var temp__4126__auto__ = inst_30767;return ((function (filter_spec__$2,component_spec__$2,map__30772,rq,component_id,vec__30769,temp__4126__auto__,inst_30771,inst_30767,inst_30770,inst_30779,inst_30780,inst_30781,inst_30782,inst_30783,inst_30784,inst_30785,inst_30786,state_val_30801,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__30772,rq,component_id,vec__30769,temp__4126__auto__,inst_30771,inst_30767,inst_30770,inst_30779,inst_30780,inst_30781,inst_30782,inst_30783,inst_30784,inst_30785,inst_30786,state_val_30801,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
})();var inst_30788 = self__.set_filter_for_url.call(null,inst_30771,inst_30787);var state_30800__$1 = (function (){var statearr_30816 = state_30800;(statearr_30816[(11)] = inst_30786);
(statearr_30816[(12)] = inst_30788);
return statearr_30816;
})();var statearr_30817_30845 = state_30800__$1;(statearr_30817_30845[(2)] = true);
(statearr_30817_30845[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30801 === (8)))
{var inst_30773 = (state_30800[(8)]);var inst_30776 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30773);var state_30800__$1 = state_30800;var statearr_30818_30846 = state_30800__$1;(statearr_30818_30846[(2)] = inst_30776);
(statearr_30818_30846[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30822 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30822[(0)] = state_machine__9111__auto__);
(statearr_30822[(1)] = (1));
return statearr_30822;
});
var state_machine__9111__auto____1 = (function (state_30800){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30800);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30823){if((e30823 instanceof Object))
{var ex__9114__auto__ = e30823;var statearr_30824_30847 = state_30800;(statearr_30824_30847[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30800);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30823;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30848 = state_30800;
state_30800 = G__30848;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30800){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
})();var state__9127__auto__ = (function (){var statearr_30825 = f__9126__auto__.call(null);(statearr_30825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
clustermap.components.filters.external_filter.t30762.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (_30764){var self__ = this;
var _30764__$1 = this;return self__.meta30763;
});})(owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
clustermap.components.filters.external_filter.t30762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (_30764,meta30763__$1){var self__ = this;
var _30764__$1 = this;return (new clustermap.components.filters.external_filter.t30762(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.map30692,self__.data,self__.set_filter_for_url,self__.output_checker30696,self__.filter_spec,self__.output_schema30693,self__.constructor30689,self__.map30691,self__.G__30697,self__.validate__6034__auto__,self__.input_checker30695,self__.input_schema30694,self__.id,self__.ufv__,meta30763__$1));
});})(owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
clustermap.components.filters.external_filter.__GT_t30762 = ((function (owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function __GT_t30762(component_spec__$1,component_filter_rq_chan__$1,owner__$1,map30692__$1,data__$1,set_filter_for_url__$1,output_checker30696__$1,filter_spec__$1,output_schema30693__$1,constructor30689__$1,map30691__$1,G__30697__$1,validate__6034__auto____$1,input_checker30695__$1,input_schema30694__$1,id__$1,ufv____$1,meta30763){return (new clustermap.components.filters.external_filter.t30762(component_spec__$1,component_filter_rq_chan__$1,owner__$1,map30692__$1,data__$1,set_filter_for_url__$1,output_checker30696__$1,filter_spec__$1,output_schema30693__$1,constructor30689__$1,map30691__$1,G__30697__$1,validate__6034__auto____$1,input_checker30695__$1,input_schema30694__$1,id__$1,ufv____$1,meta30763));
});})(owner,component_filter_rq_chan,map30692,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
}
return (new clustermap.components.filters.external_filter.t30762(component_spec,component_filter_rq_chan,owner,map30692,data,set_filter_for_url,output_checker30696,filter_spec,output_schema30693,constructor30689,map30691,G__30697,validate__6034__auto__,input_checker30695,input_schema30694,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30849 = output_checker30696.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30849))
{var error__6036__auto___30850 = temp__4126__auto___30849;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30689","constructor30689",-936078379,null),cljs.core.pr_str.call(null,error__6036__auto___30850)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30850,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30693,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
,schema.core.make_fn_schema.call(null,output_schema30693,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30694], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___30829){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30688,p__30826){var vec__30828 = p__30826;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30828,(0),null);return component_fnk__7881__auto___30829.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30688,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30688,var_args){
var p__30826 = null;if (arguments.length > 2) {
  p__30826 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30688,p__30826);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__30851){
var data__7882__auto__ = cljs.core.first(arglist__30851);
arglist__30851 = cljs.core.next(arglist__30851);
var owner30688 = cljs.core.first(arglist__30851);
var p__30826 = cljs.core.rest(arglist__30851);
return external_filter_component__delegate(data__7882__auto__,owner30688,p__30826);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___30829))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30690){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30690);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30690){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
