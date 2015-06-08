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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30813 = schema.core.Any;var input_schema30814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30815 = schema.core.checker.call(null,input_schema30814);var output_checker30816 = schema.core.checker.call(null,output_schema30813);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30813,input_schema30814,input_checker30815,output_checker30816){
return (function render_STAR_(G__30817){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30820 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30817], null);var temp__4126__auto___30821 = input_checker30815.call(null,args__6035__auto___30820);if(cljs.core.truth_(temp__4126__auto___30821))
{var error__6036__auto___30822 = temp__4126__auto___30821;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30822)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30822,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30820,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30814,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30817;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs30819 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30813,input_schema30814,input_checker30815,output_checker30816){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30813,input_schema30814,input_checker30815,output_checker30816))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs30819))?sablono.interpreter.attributes.call(null,attrs30819):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30819))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30819)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30823 = output_checker30816.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30823))
{var error__6036__auto___30824 = temp__4126__auto___30823;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30824)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30824,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30813,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30813,input_schema30814,input_checker30815,output_checker30816))
,schema.core.make_fn_schema.call(null,output_schema30813,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30814], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___30966 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30830 = schema.core.Any;var input_schema30831 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30828","map30828",-1203368074,null))], null);var input_checker30832 = schema.core.checker.call(null,input_schema30831);var output_checker30833 = schema.core.checker.call(null,output_schema30830);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833){
return (function constructor30826(G__30834){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30967 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30834], null);var temp__4126__auto___30968 = input_checker30832.call(null,args__6035__auto___30967);if(cljs.core.truth_(temp__4126__auto___30968))
{var error__6036__auto___30969 = temp__4126__auto___30968;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30826","constructor30826",2129534752,null),cljs.core.pr_str.call(null,error__6036__auto___30969)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30969,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30967,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30831,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30828 = G__30834;while(true){
if(cljs.core.map_QMARK_.call(null,map30828))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30828)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30828,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30829 = plumbing.fnk.schema.safe_get.call(null,map30828,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30829,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30828,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t30899 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t30899 = (function (component_spec,component_filter_rq_chan,constructor30826,owner,input_checker30832,data,input_schema30831,G__30834,set_filter_for_url,filter_spec,map30828,validate__6034__auto__,map30829,id,output_checker30833,ufv__,output_schema30830,meta30900){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.constructor30826 = constructor30826;
this.owner = owner;
this.input_checker30832 = input_checker30832;
this.data = data;
this.input_schema30831 = input_schema30831;
this.G__30834 = G__30834;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.map30828 = map30828;
this.validate__6034__auto__ = validate__6034__auto__;
this.map30829 = map30829;
this.id = id;
this.output_checker30833 = output_checker30833;
this.ufv__ = ufv__;
this.output_schema30830 = output_schema30830;
this.meta30900 = meta30900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t30899.cljs$lang$type = true;
clustermap.components.filters.external_filter.t30899.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t30899";
clustermap.components.filters.external_filter.t30899.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t30899");
});})(owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833))
;
clustermap.components.filters.external_filter.t30899.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t30899.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833))
;
clustermap.components.filters.external_filter.t30899.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t30899.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833))
;
clustermap.components.filters.external_filter.t30899.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t30899.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833){
return (function (state_30937){var state_val_30938 = (state_30937[(1)]);if((state_val_30938 === (7)))
{var inst_30928 = (state_30937[(2)]);var state_30937__$1 = state_30937;if(cljs.core.truth_(inst_30928))
{var statearr_30939_30970 = state_30937__$1;(statearr_30939_30970[(1)] = (11));
} else
{var statearr_30940_30971 = state_30937__$1;(statearr_30940_30971[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30938 === (1)))
{var state_30937__$1 = state_30937;var statearr_30941_30972 = state_30937__$1;(statearr_30941_30972[(2)] = null);
(statearr_30941_30972[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30938 === (4)))
{var inst_30904 = (state_30937[(7)]);var inst_30904__$1 = (state_30937[(2)]);var state_30937__$1 = (function (){var statearr_30942 = state_30937;(statearr_30942[(7)] = inst_30904__$1);
return statearr_30942;
})();if(cljs.core.truth_(inst_30904__$1))
{var statearr_30943_30973 = state_30937__$1;(statearr_30943_30973[(1)] = (5));
} else
{var statearr_30944_30974 = state_30937__$1;(statearr_30944_30974[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30938 === (13)))
{var inst_30933 = (state_30937[(2)]);var state_30937__$1 = state_30937;var statearr_30945_30975 = state_30937__$1;(statearr_30945_30975[(2)] = inst_30933);
(statearr_30945_30975[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30938 === (6)))
{var state_30937__$1 = state_30937;var statearr_30946_30976 = state_30937__$1;(statearr_30946_30976[(2)] = null);
(statearr_30946_30976[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30938 === (3)))
{var inst_30935 = (state_30937[(2)]);var state_30937__$1 = state_30937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30937__$1,inst_30935);
} else
{if((state_val_30938 === (12)))
{var state_30937__$1 = state_30937;var statearr_30947_30977 = state_30937__$1;(statearr_30947_30977[(2)] = null);
(statearr_30947_30977[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30938 === (2)))
{var state_30937__$1 = state_30937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30937__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30938 === (11)))
{var state_30937__$1 = state_30937;var statearr_30948_30978 = state_30937__$1;(statearr_30948_30978[(2)] = null);
(statearr_30948_30978[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30938 === (9)))
{var inst_30910 = (state_30937[(8)]);var state_30937__$1 = state_30937;var statearr_30949_30979 = state_30937__$1;(statearr_30949_30979[(2)] = inst_30910);
(statearr_30949_30979[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30938 === (5)))
{var inst_30910 = (state_30937[(8)]);var inst_30904 = (state_30937[(7)]);var inst_30907 = cljs.core.nth.call(null,inst_30904,(0),null);var inst_30908 = cljs.core.nth.call(null,inst_30904,(1),null);var inst_30910__$1 = om.core.get_props.call(null,self__.owner);var inst_30911 = cljs.core.seq_QMARK_.call(null,inst_30910__$1);var state_30937__$1 = (function (){var statearr_30950 = state_30937;(statearr_30950[(9)] = inst_30908);
(statearr_30950[(8)] = inst_30910__$1);
(statearr_30950[(10)] = inst_30907);
return statearr_30950;
})();if(inst_30911)
{var statearr_30951_30980 = state_30937__$1;(statearr_30951_30980[(1)] = (8));
} else
{var statearr_30952_30981 = state_30937__$1;(statearr_30952_30981[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30938 === (10)))
{var inst_30908 = (state_30937[(9)]);var inst_30904 = (state_30937[(7)]);var inst_30907 = (state_30937[(10)]);var inst_30916 = (state_30937[(2)]);var inst_30917 = cljs.core.get.call(null,inst_30916,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30918 = cljs.core.get.call(null,inst_30916,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30919 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30920 = ["EXTERNAL-FILTER-RQ",self__.id,inst_30908];var inst_30921 = (new cljs.core.PersistentVector(null,3,(5),inst_30919,inst_30920,null));var inst_30922 = cljs.core.clj__GT_js.call(null,inst_30921);var inst_30923 = console.log(inst_30922);var inst_30924 = (function (){var filter_spec__$2 = inst_30918;var component_spec__$2 = inst_30917;var map__30909 = inst_30916;var rq = inst_30908;var component_id = inst_30907;var vec__30906 = inst_30904;var temp__4126__auto__ = inst_30904;return ((function (filter_spec__$2,component_spec__$2,map__30909,rq,component_id,vec__30906,temp__4126__auto__,inst_30908,inst_30904,inst_30907,inst_30916,inst_30917,inst_30918,inst_30919,inst_30920,inst_30921,inst_30922,inst_30923,state_val_30938,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__30909,rq,component_id,vec__30906,temp__4126__auto__,inst_30908,inst_30904,inst_30907,inst_30916,inst_30917,inst_30918,inst_30919,inst_30920,inst_30921,inst_30922,inst_30923,state_val_30938,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833))
})();var inst_30925 = self__.set_filter_for_url.call(null,inst_30908,inst_30924);var state_30937__$1 = (function (){var statearr_30953 = state_30937;(statearr_30953[(11)] = inst_30925);
(statearr_30953[(12)] = inst_30923);
return statearr_30953;
})();var statearr_30954_30982 = state_30937__$1;(statearr_30954_30982[(2)] = true);
(statearr_30954_30982[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30938 === (8)))
{var inst_30910 = (state_30937[(8)]);var inst_30913 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30910);var state_30937__$1 = state_30937;var statearr_30955_30983 = state_30937__$1;(statearr_30955_30983[(2)] = inst_30913);
(statearr_30955_30983[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30959 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30959[(0)] = state_machine__9111__auto__);
(statearr_30959[(1)] = (1));
return statearr_30959;
});
var state_machine__9111__auto____1 = (function (state_30937){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30937);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30960){if((e30960 instanceof Object))
{var ex__9114__auto__ = e30960;var statearr_30961_30984 = state_30937;(statearr_30961_30984[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30937);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30960;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30985 = state_30937;
state_30937 = G__30985;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30937){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833))
})();var state__9127__auto__ = (function (){var statearr_30962 = f__9126__auto__.call(null);(statearr_30962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833))
;
clustermap.components.filters.external_filter.t30899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833){
return (function (_30901){var self__ = this;
var _30901__$1 = this;return self__.meta30900;
});})(owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833))
;
clustermap.components.filters.external_filter.t30899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833){
return (function (_30901,meta30900__$1){var self__ = this;
var _30901__$1 = this;return (new clustermap.components.filters.external_filter.t30899(self__.component_spec,self__.component_filter_rq_chan,self__.constructor30826,self__.owner,self__.input_checker30832,self__.data,self__.input_schema30831,self__.G__30834,self__.set_filter_for_url,self__.filter_spec,self__.map30828,self__.validate__6034__auto__,self__.map30829,self__.id,self__.output_checker30833,self__.ufv__,self__.output_schema30830,meta30900__$1));
});})(owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833))
;
clustermap.components.filters.external_filter.__GT_t30899 = ((function (owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833){
return (function __GT_t30899(component_spec__$1,component_filter_rq_chan__$1,constructor30826__$1,owner__$1,input_checker30832__$1,data__$1,input_schema30831__$1,G__30834__$1,set_filter_for_url__$1,filter_spec__$1,map30828__$1,validate__6034__auto____$1,map30829__$1,id__$1,output_checker30833__$1,ufv____$1,output_schema30830__$1,meta30900){return (new clustermap.components.filters.external_filter.t30899(component_spec__$1,component_filter_rq_chan__$1,constructor30826__$1,owner__$1,input_checker30832__$1,data__$1,input_schema30831__$1,G__30834__$1,set_filter_for_url__$1,filter_spec__$1,map30828__$1,validate__6034__auto____$1,map30829__$1,id__$1,output_checker30833__$1,ufv____$1,output_schema30830__$1,meta30900));
});})(owner,component_filter_rq_chan,map30829,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833))
;
}
return (new clustermap.components.filters.external_filter.t30899(component_spec,component_filter_rq_chan,constructor30826,owner,input_checker30832,data,input_schema30831,G__30834,set_filter_for_url,filter_spec,map30828,validate__6034__auto__,map30829,id,output_checker30833,ufv__,output_schema30830,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30986 = output_checker30833.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30986))
{var error__6036__auto___30987 = temp__4126__auto___30986;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30826","constructor30826",2129534752,null),cljs.core.pr_str.call(null,error__6036__auto___30987)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30987,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30830,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30830,input_schema30831,input_checker30832,output_checker30833))
,schema.core.make_fn_schema.call(null,output_schema30830,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30831], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___30966){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30825,p__30963){var vec__30965 = p__30963;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30965,(0),null);return component_fnk__7881__auto___30966.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30825,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30825,var_args){
var p__30963 = null;if (arguments.length > 2) {
  p__30963 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30825,p__30963);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__30988){
var data__7882__auto__ = cljs.core.first(arglist__30988);
arglist__30988 = cljs.core.next(arglist__30988);
var owner30825 = cljs.core.first(arglist__30988);
var p__30963 = cljs.core.rest(arglist__30988);
return external_filter_component__delegate(data__7882__auto__,owner30825,p__30963);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___30966))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30827){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30827);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30827){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
