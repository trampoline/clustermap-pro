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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30843 = schema.core.Any;var input_schema30844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30845 = schema.core.checker.call(null,input_schema30844);var output_checker30846 = schema.core.checker.call(null,output_schema30843);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30843,input_schema30844,input_checker30845,output_checker30846){
return (function render_STAR_(G__30847){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30850 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30847], null);var temp__4126__auto___30851 = input_checker30845.call(null,args__6035__auto___30850);if(cljs.core.truth_(temp__4126__auto___30851))
{var error__6036__auto___30852 = temp__4126__auto___30851;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30852)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30852,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30850,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30844,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30847;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs30849 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30843,input_schema30844,input_checker30845,output_checker30846){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30843,input_schema30844,input_checker30845,output_checker30846))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs30849))?sablono.interpreter.attributes.call(null,attrs30849):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30849))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30849)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30853 = output_checker30846.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30853))
{var error__6036__auto___30854 = temp__4126__auto___30853;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30854)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30854,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30843,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30843,input_schema30844,input_checker30845,output_checker30846))
,schema.core.make_fn_schema.call(null,output_schema30843,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30844], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___30996 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30860 = schema.core.Any;var input_schema30861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30858","map30858",-810200124,null))], null);var input_checker30862 = schema.core.checker.call(null,input_schema30861);var output_checker30863 = schema.core.checker.call(null,output_schema30860);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function constructor30856(G__30864){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30997 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30864], null);var temp__4126__auto___30998 = input_checker30862.call(null,args__6035__auto___30997);if(cljs.core.truth_(temp__4126__auto___30998))
{var error__6036__auto___30999 = temp__4126__auto___30998;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30856","constructor30856",1943432285,null),cljs.core.pr_str.call(null,error__6036__auto___30999)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30999,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30997,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30861,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30858 = G__30864;while(true){
if(cljs.core.map_QMARK_.call(null,map30858))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30858)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30858,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30859 = plumbing.fnk.schema.safe_get.call(null,map30858,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30859,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30858,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t30929 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t30929 = (function (component_spec,component_filter_rq_chan,input_schema30861,owner,map30858,data,input_checker30862,set_filter_for_url,G__30864,filter_spec,output_schema30860,output_checker30863,validate__6034__auto__,id,map30859,constructor30856,ufv__,meta30930){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema30861 = input_schema30861;
this.owner = owner;
this.map30858 = map30858;
this.data = data;
this.input_checker30862 = input_checker30862;
this.set_filter_for_url = set_filter_for_url;
this.G__30864 = G__30864;
this.filter_spec = filter_spec;
this.output_schema30860 = output_schema30860;
this.output_checker30863 = output_checker30863;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map30859 = map30859;
this.constructor30856 = constructor30856;
this.ufv__ = ufv__;
this.meta30930 = meta30930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t30929.cljs$lang$type = true;
clustermap.components.filters.external_filter.t30929.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t30929";
clustermap.components.filters.external_filter.t30929.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t30929");
});})(owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
clustermap.components.filters.external_filter.t30929.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t30929.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
clustermap.components.filters.external_filter.t30929.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t30929.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
clustermap.components.filters.external_filter.t30929.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t30929.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (state_30967){var state_val_30968 = (state_30967[(1)]);if((state_val_30968 === (7)))
{var inst_30958 = (state_30967[(2)]);var state_30967__$1 = state_30967;if(cljs.core.truth_(inst_30958))
{var statearr_30969_31000 = state_30967__$1;(statearr_30969_31000[(1)] = (11));
} else
{var statearr_30970_31001 = state_30967__$1;(statearr_30970_31001[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (1)))
{var state_30967__$1 = state_30967;var statearr_30971_31002 = state_30967__$1;(statearr_30971_31002[(2)] = null);
(statearr_30971_31002[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (4)))
{var inst_30934 = (state_30967[(7)]);var inst_30934__$1 = (state_30967[(2)]);var state_30967__$1 = (function (){var statearr_30972 = state_30967;(statearr_30972[(7)] = inst_30934__$1);
return statearr_30972;
})();if(cljs.core.truth_(inst_30934__$1))
{var statearr_30973_31003 = state_30967__$1;(statearr_30973_31003[(1)] = (5));
} else
{var statearr_30974_31004 = state_30967__$1;(statearr_30974_31004[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (13)))
{var inst_30963 = (state_30967[(2)]);var state_30967__$1 = state_30967;var statearr_30975_31005 = state_30967__$1;(statearr_30975_31005[(2)] = inst_30963);
(statearr_30975_31005[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (6)))
{var state_30967__$1 = state_30967;var statearr_30976_31006 = state_30967__$1;(statearr_30976_31006[(2)] = null);
(statearr_30976_31006[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (3)))
{var inst_30965 = (state_30967[(2)]);var state_30967__$1 = state_30967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30967__$1,inst_30965);
} else
{if((state_val_30968 === (12)))
{var state_30967__$1 = state_30967;var statearr_30977_31007 = state_30967__$1;(statearr_30977_31007[(2)] = null);
(statearr_30977_31007[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (2)))
{var state_30967__$1 = state_30967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30967__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30968 === (11)))
{var state_30967__$1 = state_30967;var statearr_30978_31008 = state_30967__$1;(statearr_30978_31008[(2)] = null);
(statearr_30978_31008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (9)))
{var inst_30940 = (state_30967[(8)]);var state_30967__$1 = state_30967;var statearr_30979_31009 = state_30967__$1;(statearr_30979_31009[(2)] = inst_30940);
(statearr_30979_31009[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (5)))
{var inst_30934 = (state_30967[(7)]);var inst_30940 = (state_30967[(8)]);var inst_30937 = cljs.core.nth.call(null,inst_30934,(0),null);var inst_30938 = cljs.core.nth.call(null,inst_30934,(1),null);var inst_30940__$1 = om.core.get_props.call(null,self__.owner);var inst_30941 = cljs.core.seq_QMARK_.call(null,inst_30940__$1);var state_30967__$1 = (function (){var statearr_30980 = state_30967;(statearr_30980[(9)] = inst_30938);
(statearr_30980[(10)] = inst_30937);
(statearr_30980[(8)] = inst_30940__$1);
return statearr_30980;
})();if(inst_30941)
{var statearr_30981_31010 = state_30967__$1;(statearr_30981_31010[(1)] = (8));
} else
{var statearr_30982_31011 = state_30967__$1;(statearr_30982_31011[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (10)))
{var inst_30938 = (state_30967[(9)]);var inst_30937 = (state_30967[(10)]);var inst_30934 = (state_30967[(7)]);var inst_30946 = (state_30967[(2)]);var inst_30947 = cljs.core.get.call(null,inst_30946,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30948 = cljs.core.get.call(null,inst_30946,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30949 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30950 = ["EXTERNAL-FILTER-RQ",self__.id,inst_30938];var inst_30951 = (new cljs.core.PersistentVector(null,3,(5),inst_30949,inst_30950,null));var inst_30952 = cljs.core.clj__GT_js.call(null,inst_30951);var inst_30953 = console.log(inst_30952);var inst_30954 = (function (){var filter_spec__$2 = inst_30948;var component_spec__$2 = inst_30947;var map__30939 = inst_30946;var rq = inst_30938;var component_id = inst_30937;var vec__30936 = inst_30934;var temp__4126__auto__ = inst_30934;return ((function (filter_spec__$2,component_spec__$2,map__30939,rq,component_id,vec__30936,temp__4126__auto__,inst_30938,inst_30937,inst_30934,inst_30946,inst_30947,inst_30948,inst_30949,inst_30950,inst_30951,inst_30952,inst_30953,state_val_30968,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__30939,rq,component_id,vec__30936,temp__4126__auto__,inst_30938,inst_30937,inst_30934,inst_30946,inst_30947,inst_30948,inst_30949,inst_30950,inst_30951,inst_30952,inst_30953,state_val_30968,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
})();var inst_30955 = self__.set_filter_for_url.call(null,inst_30938,inst_30954);var state_30967__$1 = (function (){var statearr_30983 = state_30967;(statearr_30983[(11)] = inst_30955);
(statearr_30983[(12)] = inst_30953);
return statearr_30983;
})();var statearr_30984_31012 = state_30967__$1;(statearr_30984_31012[(2)] = true);
(statearr_30984_31012[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30968 === (8)))
{var inst_30940 = (state_30967[(8)]);var inst_30943 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30940);var state_30967__$1 = state_30967;var statearr_30985_31013 = state_30967__$1;(statearr_30985_31013[(2)] = inst_30943);
(statearr_30985_31013[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30989 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30989[(0)] = state_machine__9111__auto__);
(statearr_30989[(1)] = (1));
return statearr_30989;
});
var state_machine__9111__auto____1 = (function (state_30967){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30967);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30990){if((e30990 instanceof Object))
{var ex__9114__auto__ = e30990;var statearr_30991_31014 = state_30967;(statearr_30991_31014[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30967);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30990;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31015 = state_30967;
state_30967 = G__31015;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30967){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
})();var state__9127__auto__ = (function (){var statearr_30992 = f__9126__auto__.call(null);(statearr_30992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
clustermap.components.filters.external_filter.t30929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (_30931){var self__ = this;
var _30931__$1 = this;return self__.meta30930;
});})(owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
clustermap.components.filters.external_filter.t30929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function (_30931,meta30930__$1){var self__ = this;
var _30931__$1 = this;return (new clustermap.components.filters.external_filter.t30929(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema30861,self__.owner,self__.map30858,self__.data,self__.input_checker30862,self__.set_filter_for_url,self__.G__30864,self__.filter_spec,self__.output_schema30860,self__.output_checker30863,self__.validate__6034__auto__,self__.id,self__.map30859,self__.constructor30856,self__.ufv__,meta30930__$1));
});})(owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
clustermap.components.filters.external_filter.__GT_t30929 = ((function (owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863){
return (function __GT_t30929(component_spec__$1,component_filter_rq_chan__$1,input_schema30861__$1,owner__$1,map30858__$1,data__$1,input_checker30862__$1,set_filter_for_url__$1,G__30864__$1,filter_spec__$1,output_schema30860__$1,output_checker30863__$1,validate__6034__auto____$1,id__$1,map30859__$1,constructor30856__$1,ufv____$1,meta30930){return (new clustermap.components.filters.external_filter.t30929(component_spec__$1,component_filter_rq_chan__$1,input_schema30861__$1,owner__$1,map30858__$1,data__$1,input_checker30862__$1,set_filter_for_url__$1,G__30864__$1,filter_spec__$1,output_schema30860__$1,output_checker30863__$1,validate__6034__auto____$1,id__$1,map30859__$1,constructor30856__$1,ufv____$1,meta30930));
});})(owner,component_filter_rq_chan,map30859,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
;
}
return (new clustermap.components.filters.external_filter.t30929(component_spec,component_filter_rq_chan,input_schema30861,owner,map30858,data,input_checker30862,set_filter_for_url,G__30864,filter_spec,output_schema30860,output_checker30863,validate__6034__auto__,id,map30859,constructor30856,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31016 = output_checker30863.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31016))
{var error__6036__auto___31017 = temp__4126__auto___31016;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30856","constructor30856",1943432285,null),cljs.core.pr_str.call(null,error__6036__auto___31017)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31017,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30860,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30860,input_schema30861,input_checker30862,output_checker30863))
,schema.core.make_fn_schema.call(null,output_schema30860,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30861], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___30996){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30855,p__30993){var vec__30995 = p__30993;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30995,(0),null);return component_fnk__7881__auto___30996.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30855,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30855,var_args){
var p__30993 = null;if (arguments.length > 2) {
  p__30993 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30855,p__30993);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__31018){
var data__7882__auto__ = cljs.core.first(arglist__31018);
arglist__31018 = cljs.core.next(arglist__31018);
var owner30855 = cljs.core.first(arglist__31018);
var p__30993 = cljs.core.rest(arglist__31018);
return external_filter_component__delegate(data__7882__auto__,owner30855,p__30993);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___30996))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30857){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30857);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30857){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
