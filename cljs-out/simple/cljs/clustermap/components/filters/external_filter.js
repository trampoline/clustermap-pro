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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29994 = schema.core.Any;var input_schema29995 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29996 = schema.core.checker.call(null,input_schema29995);var output_checker29997 = schema.core.checker.call(null,output_schema29994);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29994,input_schema29995,input_checker29996,output_checker29997){
return (function render_STAR_(G__29998){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29998], null);var temp__4126__auto___30002 = input_checker29996.call(null,args__6035__auto___30001);if(cljs.core.truth_(temp__4126__auto___30002))
{var error__6036__auto___30003 = temp__4126__auto___30002;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30003)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30003,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30001,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29995,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29998;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs30000 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29994,input_schema29995,input_checker29996,output_checker29997){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29994,input_schema29995,input_checker29996,output_checker29997))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs30000))?sablono.interpreter.attributes.call(null,attrs30000):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30000))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30000)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30004 = output_checker29997.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30004))
{var error__6036__auto___30005 = temp__4126__auto___30004;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30005)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30005,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29994,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29994,input_schema29995,input_checker29996,output_checker29997))
,schema.core.make_fn_schema.call(null,output_schema29994,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29995], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___30147 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30011 = schema.core.Any;var input_schema30012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30009","map30009",1582255121,null))], null);var input_checker30013 = schema.core.checker.call(null,input_schema30012);var output_checker30014 = schema.core.checker.call(null,output_schema30011);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014){
return (function constructor30007(G__30015){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30015], null);var temp__4126__auto___30149 = input_checker30013.call(null,args__6035__auto___30148);if(cljs.core.truth_(temp__4126__auto___30149))
{var error__6036__auto___30150 = temp__4126__auto___30149;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30007","constructor30007",1087086519,null),cljs.core.pr_str.call(null,error__6036__auto___30150)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30150,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30148,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30012,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30009 = G__30015;while(true){
if(cljs.core.map_QMARK_.call(null,map30009))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30009)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30009,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30010 = plumbing.fnk.schema.safe_get.call(null,map30009,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30010,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30009,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t30080 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t30080 = (function (component_spec,component_filter_rq_chan,owner,G__30015,data,output_schema30011,output_checker30014,input_schema30012,set_filter_for_url,filter_spec,input_checker30013,map30009,constructor30007,validate__6034__auto__,map30010,id,ufv__,meta30081){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.G__30015 = G__30015;
this.data = data;
this.output_schema30011 = output_schema30011;
this.output_checker30014 = output_checker30014;
this.input_schema30012 = input_schema30012;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.input_checker30013 = input_checker30013;
this.map30009 = map30009;
this.constructor30007 = constructor30007;
this.validate__6034__auto__ = validate__6034__auto__;
this.map30010 = map30010;
this.id = id;
this.ufv__ = ufv__;
this.meta30081 = meta30081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t30080.cljs$lang$type = true;
clustermap.components.filters.external_filter.t30080.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t30080";
clustermap.components.filters.external_filter.t30080.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t30080");
});})(owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014))
;
clustermap.components.filters.external_filter.t30080.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t30080.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014))
;
clustermap.components.filters.external_filter.t30080.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t30080.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014))
;
clustermap.components.filters.external_filter.t30080.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t30080.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014){
return (function (state_30118){var state_val_30119 = (state_30118[(1)]);if((state_val_30119 === (7)))
{var inst_30109 = (state_30118[(2)]);var state_30118__$1 = state_30118;if(cljs.core.truth_(inst_30109))
{var statearr_30120_30151 = state_30118__$1;(statearr_30120_30151[(1)] = (11));
} else
{var statearr_30121_30152 = state_30118__$1;(statearr_30121_30152[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30119 === (1)))
{var state_30118__$1 = state_30118;var statearr_30122_30153 = state_30118__$1;(statearr_30122_30153[(2)] = null);
(statearr_30122_30153[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30119 === (4)))
{var inst_30085 = (state_30118[(7)]);var inst_30085__$1 = (state_30118[(2)]);var state_30118__$1 = (function (){var statearr_30123 = state_30118;(statearr_30123[(7)] = inst_30085__$1);
return statearr_30123;
})();if(cljs.core.truth_(inst_30085__$1))
{var statearr_30124_30154 = state_30118__$1;(statearr_30124_30154[(1)] = (5));
} else
{var statearr_30125_30155 = state_30118__$1;(statearr_30125_30155[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30119 === (13)))
{var inst_30114 = (state_30118[(2)]);var state_30118__$1 = state_30118;var statearr_30126_30156 = state_30118__$1;(statearr_30126_30156[(2)] = inst_30114);
(statearr_30126_30156[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30119 === (6)))
{var state_30118__$1 = state_30118;var statearr_30127_30157 = state_30118__$1;(statearr_30127_30157[(2)] = null);
(statearr_30127_30157[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30119 === (3)))
{var inst_30116 = (state_30118[(2)]);var state_30118__$1 = state_30118;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30118__$1,inst_30116);
} else
{if((state_val_30119 === (12)))
{var state_30118__$1 = state_30118;var statearr_30128_30158 = state_30118__$1;(statearr_30128_30158[(2)] = null);
(statearr_30128_30158[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30119 === (2)))
{var state_30118__$1 = state_30118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30118__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30119 === (11)))
{var state_30118__$1 = state_30118;var statearr_30129_30159 = state_30118__$1;(statearr_30129_30159[(2)] = null);
(statearr_30129_30159[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30119 === (9)))
{var inst_30091 = (state_30118[(8)]);var state_30118__$1 = state_30118;var statearr_30130_30160 = state_30118__$1;(statearr_30130_30160[(2)] = inst_30091);
(statearr_30130_30160[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30119 === (5)))
{var inst_30085 = (state_30118[(7)]);var inst_30091 = (state_30118[(8)]);var inst_30088 = cljs.core.nth.call(null,inst_30085,(0),null);var inst_30089 = cljs.core.nth.call(null,inst_30085,(1),null);var inst_30091__$1 = om.core.get_props.call(null,self__.owner);var inst_30092 = cljs.core.seq_QMARK_.call(null,inst_30091__$1);var state_30118__$1 = (function (){var statearr_30131 = state_30118;(statearr_30131[(9)] = inst_30089);
(statearr_30131[(10)] = inst_30088);
(statearr_30131[(8)] = inst_30091__$1);
return statearr_30131;
})();if(inst_30092)
{var statearr_30132_30161 = state_30118__$1;(statearr_30132_30161[(1)] = (8));
} else
{var statearr_30133_30162 = state_30118__$1;(statearr_30133_30162[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30119 === (10)))
{var inst_30085 = (state_30118[(7)]);var inst_30089 = (state_30118[(9)]);var inst_30088 = (state_30118[(10)]);var inst_30097 = (state_30118[(2)]);var inst_30098 = cljs.core.get.call(null,inst_30097,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30099 = cljs.core.get.call(null,inst_30097,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30100 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30101 = ["EXTERNAL-FILTER-RQ",self__.id,inst_30089];var inst_30102 = (new cljs.core.PersistentVector(null,3,(5),inst_30100,inst_30101,null));var inst_30103 = cljs.core.clj__GT_js.call(null,inst_30102);var inst_30104 = console.log(inst_30103);var inst_30105 = (function (){var filter_spec__$2 = inst_30099;var component_spec__$2 = inst_30098;var map__30090 = inst_30097;var rq = inst_30089;var component_id = inst_30088;var vec__30087 = inst_30085;var temp__4126__auto__ = inst_30085;return ((function (filter_spec__$2,component_spec__$2,map__30090,rq,component_id,vec__30087,temp__4126__auto__,inst_30085,inst_30089,inst_30088,inst_30097,inst_30098,inst_30099,inst_30100,inst_30101,inst_30102,inst_30103,inst_30104,state_val_30119,c__11517__auto__,___$1,owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__30090,rq,component_id,vec__30087,temp__4126__auto__,inst_30085,inst_30089,inst_30088,inst_30097,inst_30098,inst_30099,inst_30100,inst_30101,inst_30102,inst_30103,inst_30104,state_val_30119,c__11517__auto__,___$1,owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014))
})();var inst_30106 = self__.set_filter_for_url.call(null,inst_30089,inst_30105);var state_30118__$1 = (function (){var statearr_30134 = state_30118;(statearr_30134[(11)] = inst_30104);
(statearr_30134[(12)] = inst_30106);
return statearr_30134;
})();var statearr_30135_30163 = state_30118__$1;(statearr_30135_30163[(2)] = true);
(statearr_30135_30163[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30119 === (8)))
{var inst_30091 = (state_30118[(8)]);var inst_30094 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30091);var state_30118__$1 = state_30118;var statearr_30136_30164 = state_30118__$1;(statearr_30136_30164[(2)] = inst_30094);
(statearr_30136_30164[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_30140 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30140[(0)] = state_machine__11462__auto__);
(statearr_30140[(1)] = (1));
return statearr_30140;
});
var state_machine__11462__auto____1 = (function (state_30118){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_30118);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e30141){if((e30141 instanceof Object))
{var ex__11465__auto__ = e30141;var statearr_30142_30165 = state_30118;(statearr_30142_30165[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30118);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30141;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30166 = state_30118;
state_30118 = G__30166;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_30118){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_30118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014))
})();var state__11519__auto__ = (function (){var statearr_30143 = f__11518__auto__.call(null);(statearr_30143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_30143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014))
;
clustermap.components.filters.external_filter.t30080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014){
return (function (_30082){var self__ = this;
var _30082__$1 = this;return self__.meta30081;
});})(owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014))
;
clustermap.components.filters.external_filter.t30080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014){
return (function (_30082,meta30081__$1){var self__ = this;
var _30082__$1 = this;return (new clustermap.components.filters.external_filter.t30080(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.G__30015,self__.data,self__.output_schema30011,self__.output_checker30014,self__.input_schema30012,self__.set_filter_for_url,self__.filter_spec,self__.input_checker30013,self__.map30009,self__.constructor30007,self__.validate__6034__auto__,self__.map30010,self__.id,self__.ufv__,meta30081__$1));
});})(owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014))
;
clustermap.components.filters.external_filter.__GT_t30080 = ((function (owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014){
return (function __GT_t30080(component_spec__$1,component_filter_rq_chan__$1,owner__$1,G__30015__$1,data__$1,output_schema30011__$1,output_checker30014__$1,input_schema30012__$1,set_filter_for_url__$1,filter_spec__$1,input_checker30013__$1,map30009__$1,constructor30007__$1,validate__6034__auto____$1,map30010__$1,id__$1,ufv____$1,meta30081){return (new clustermap.components.filters.external_filter.t30080(component_spec__$1,component_filter_rq_chan__$1,owner__$1,G__30015__$1,data__$1,output_schema30011__$1,output_checker30014__$1,input_schema30012__$1,set_filter_for_url__$1,filter_spec__$1,input_checker30013__$1,map30009__$1,constructor30007__$1,validate__6034__auto____$1,map30010__$1,id__$1,ufv____$1,meta30081));
});})(owner,component_filter_rq_chan,map30010,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014))
;
}
return (new clustermap.components.filters.external_filter.t30080(component_spec,component_filter_rq_chan,owner,G__30015,data,output_schema30011,output_checker30014,input_schema30012,set_filter_for_url,filter_spec,input_checker30013,map30009,constructor30007,validate__6034__auto__,map30010,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30167 = output_checker30014.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30167))
{var error__6036__auto___30168 = temp__4126__auto___30167;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30007","constructor30007",1087086519,null),cljs.core.pr_str.call(null,error__6036__auto___30168)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30168,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30011,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30011,input_schema30012,input_checker30013,output_checker30014))
,schema.core.make_fn_schema.call(null,output_schema30011,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30012], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___30147){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30006,p__30144){var vec__30146 = p__30144;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30146,(0),null);return component_fnk__7881__auto___30147.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30006,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30006,var_args){
var p__30144 = null;if (arguments.length > 2) {
  p__30144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30006,p__30144);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__30169){
var data__7882__auto__ = cljs.core.first(arglist__30169);
arglist__30169 = cljs.core.next(arglist__30169);
var owner30006 = cljs.core.first(arglist__30169);
var p__30144 = cljs.core.rest(arglist__30169);
return external_filter_component__delegate(data__7882__auto__,owner30006,p__30144);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___30147))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30008){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30008);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30008){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
