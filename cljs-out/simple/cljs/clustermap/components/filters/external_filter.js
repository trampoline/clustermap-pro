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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30963 = schema.core.Any;var input_schema30964 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30965 = schema.core.checker.call(null,input_schema30964);var output_checker30966 = schema.core.checker.call(null,output_schema30963);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30963,input_schema30964,input_checker30965,output_checker30966){
return (function render_STAR_(G__30967){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30967], null);var temp__4126__auto___30971 = input_checker30965.call(null,args__6035__auto___30970);if(cljs.core.truth_(temp__4126__auto___30971))
{var error__6036__auto___30972 = temp__4126__auto___30971;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30972)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30972,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30970,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30964,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30967;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs30969 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30963,input_schema30964,input_checker30965,output_checker30966){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30963,input_schema30964,input_checker30965,output_checker30966))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs30969))?sablono.interpreter.attributes.call(null,attrs30969):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30969))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30969)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30973 = output_checker30966.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30973))
{var error__6036__auto___30974 = temp__4126__auto___30973;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30974)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30974,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30963,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30963,input_schema30964,input_checker30965,output_checker30966))
,schema.core.make_fn_schema.call(null,output_schema30963,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30964], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___31116 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30980 = schema.core.Any;var input_schema30981 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30978","map30978",-1262153849,null))], null);var input_checker30982 = schema.core.checker.call(null,input_schema30981);var output_checker30983 = schema.core.checker.call(null,output_schema30980);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983){
return (function constructor30976(G__30984){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30984], null);var temp__4126__auto___31118 = input_checker30982.call(null,args__6035__auto___31117);if(cljs.core.truth_(temp__4126__auto___31118))
{var error__6036__auto___31119 = temp__4126__auto___31118;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30976","constructor30976",986142885,null),cljs.core.pr_str.call(null,error__6036__auto___31119)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31119,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31117,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30981,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30978 = G__30984;while(true){
if(cljs.core.map_QMARK_.call(null,map30978))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30978)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30978,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30979 = plumbing.fnk.schema.safe_get.call(null,map30978,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30979,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30978,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t31049 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t31049 = (function (component_spec,component_filter_rq_chan,owner,constructor30976,map30979,input_schema30981,data,map30978,input_checker30982,set_filter_for_url,G__30984,filter_spec,output_schema30980,output_checker30983,validate__6034__auto__,id,ufv__,meta31050){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.constructor30976 = constructor30976;
this.map30979 = map30979;
this.input_schema30981 = input_schema30981;
this.data = data;
this.map30978 = map30978;
this.input_checker30982 = input_checker30982;
this.set_filter_for_url = set_filter_for_url;
this.G__30984 = G__30984;
this.filter_spec = filter_spec;
this.output_schema30980 = output_schema30980;
this.output_checker30983 = output_checker30983;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.meta31050 = meta31050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t31049.cljs$lang$type = true;
clustermap.components.filters.external_filter.t31049.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t31049";
clustermap.components.filters.external_filter.t31049.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t31049");
});})(owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983))
;
clustermap.components.filters.external_filter.t31049.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t31049.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983))
;
clustermap.components.filters.external_filter.t31049.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t31049.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983))
;
clustermap.components.filters.external_filter.t31049.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t31049.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983){
return (function (state_31087){var state_val_31088 = (state_31087[(1)]);if((state_val_31088 === (7)))
{var inst_31078 = (state_31087[(2)]);var state_31087__$1 = state_31087;if(cljs.core.truth_(inst_31078))
{var statearr_31089_31120 = state_31087__$1;(statearr_31089_31120[(1)] = (11));
} else
{var statearr_31090_31121 = state_31087__$1;(statearr_31090_31121[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31088 === (1)))
{var state_31087__$1 = state_31087;var statearr_31091_31122 = state_31087__$1;(statearr_31091_31122[(2)] = null);
(statearr_31091_31122[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31088 === (4)))
{var inst_31054 = (state_31087[(7)]);var inst_31054__$1 = (state_31087[(2)]);var state_31087__$1 = (function (){var statearr_31092 = state_31087;(statearr_31092[(7)] = inst_31054__$1);
return statearr_31092;
})();if(cljs.core.truth_(inst_31054__$1))
{var statearr_31093_31123 = state_31087__$1;(statearr_31093_31123[(1)] = (5));
} else
{var statearr_31094_31124 = state_31087__$1;(statearr_31094_31124[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31088 === (13)))
{var inst_31083 = (state_31087[(2)]);var state_31087__$1 = state_31087;var statearr_31095_31125 = state_31087__$1;(statearr_31095_31125[(2)] = inst_31083);
(statearr_31095_31125[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31088 === (6)))
{var state_31087__$1 = state_31087;var statearr_31096_31126 = state_31087__$1;(statearr_31096_31126[(2)] = null);
(statearr_31096_31126[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31088 === (3)))
{var inst_31085 = (state_31087[(2)]);var state_31087__$1 = state_31087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31087__$1,inst_31085);
} else
{if((state_val_31088 === (12)))
{var state_31087__$1 = state_31087;var statearr_31097_31127 = state_31087__$1;(statearr_31097_31127[(2)] = null);
(statearr_31097_31127[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31088 === (2)))
{var state_31087__$1 = state_31087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31087__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31088 === (11)))
{var state_31087__$1 = state_31087;var statearr_31098_31128 = state_31087__$1;(statearr_31098_31128[(2)] = null);
(statearr_31098_31128[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31088 === (9)))
{var inst_31060 = (state_31087[(8)]);var state_31087__$1 = state_31087;var statearr_31099_31129 = state_31087__$1;(statearr_31099_31129[(2)] = inst_31060);
(statearr_31099_31129[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31088 === (5)))
{var inst_31060 = (state_31087[(8)]);var inst_31054 = (state_31087[(7)]);var inst_31057 = cljs.core.nth.call(null,inst_31054,(0),null);var inst_31058 = cljs.core.nth.call(null,inst_31054,(1),null);var inst_31060__$1 = om.core.get_props.call(null,self__.owner);var inst_31061 = cljs.core.seq_QMARK_.call(null,inst_31060__$1);var state_31087__$1 = (function (){var statearr_31100 = state_31087;(statearr_31100[(9)] = inst_31058);
(statearr_31100[(8)] = inst_31060__$1);
(statearr_31100[(10)] = inst_31057);
return statearr_31100;
})();if(inst_31061)
{var statearr_31101_31130 = state_31087__$1;(statearr_31101_31130[(1)] = (8));
} else
{var statearr_31102_31131 = state_31087__$1;(statearr_31102_31131[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31088 === (10)))
{var inst_31058 = (state_31087[(9)]);var inst_31057 = (state_31087[(10)]);var inst_31054 = (state_31087[(7)]);var inst_31066 = (state_31087[(2)]);var inst_31067 = cljs.core.get.call(null,inst_31066,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31068 = cljs.core.get.call(null,inst_31066,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31069 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31070 = ["EXTERNAL-FILTER-RQ",self__.id,inst_31058];var inst_31071 = (new cljs.core.PersistentVector(null,3,(5),inst_31069,inst_31070,null));var inst_31072 = cljs.core.clj__GT_js.call(null,inst_31071);var inst_31073 = console.log(inst_31072);var inst_31074 = (function (){var filter_spec__$2 = inst_31068;var component_spec__$2 = inst_31067;var map__31059 = inst_31066;var rq = inst_31058;var component_id = inst_31057;var vec__31056 = inst_31054;var temp__4126__auto__ = inst_31054;return ((function (filter_spec__$2,component_spec__$2,map__31059,rq,component_id,vec__31056,temp__4126__auto__,inst_31058,inst_31057,inst_31054,inst_31066,inst_31067,inst_31068,inst_31069,inst_31070,inst_31071,inst_31072,inst_31073,state_val_31088,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__31059,rq,component_id,vec__31056,temp__4126__auto__,inst_31058,inst_31057,inst_31054,inst_31066,inst_31067,inst_31068,inst_31069,inst_31070,inst_31071,inst_31072,inst_31073,state_val_31088,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983))
})();var inst_31075 = self__.set_filter_for_url.call(null,inst_31058,inst_31074);var state_31087__$1 = (function (){var statearr_31103 = state_31087;(statearr_31103[(11)] = inst_31073);
(statearr_31103[(12)] = inst_31075);
return statearr_31103;
})();var statearr_31104_31132 = state_31087__$1;(statearr_31104_31132[(2)] = true);
(statearr_31104_31132[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31088 === (8)))
{var inst_31060 = (state_31087[(8)]);var inst_31063 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31060);var state_31087__$1 = state_31087;var statearr_31105_31133 = state_31087__$1;(statearr_31105_31133[(2)] = inst_31063);
(statearr_31105_31133[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31109 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31109[(0)] = state_machine__9111__auto__);
(statearr_31109[(1)] = (1));
return statearr_31109;
});
var state_machine__9111__auto____1 = (function (state_31087){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31087);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31110){if((e31110 instanceof Object))
{var ex__9114__auto__ = e31110;var statearr_31111_31134 = state_31087;(statearr_31111_31134[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31087);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31110;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31135 = state_31087;
state_31087 = G__31135;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31087){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983))
})();var state__9127__auto__ = (function (){var statearr_31112 = f__9126__auto__.call(null);(statearr_31112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983))
;
clustermap.components.filters.external_filter.t31049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983){
return (function (_31051){var self__ = this;
var _31051__$1 = this;return self__.meta31050;
});})(owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983))
;
clustermap.components.filters.external_filter.t31049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983){
return (function (_31051,meta31050__$1){var self__ = this;
var _31051__$1 = this;return (new clustermap.components.filters.external_filter.t31049(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.constructor30976,self__.map30979,self__.input_schema30981,self__.data,self__.map30978,self__.input_checker30982,self__.set_filter_for_url,self__.G__30984,self__.filter_spec,self__.output_schema30980,self__.output_checker30983,self__.validate__6034__auto__,self__.id,self__.ufv__,meta31050__$1));
});})(owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983))
;
clustermap.components.filters.external_filter.__GT_t31049 = ((function (owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983){
return (function __GT_t31049(component_spec__$1,component_filter_rq_chan__$1,owner__$1,constructor30976__$1,map30979__$1,input_schema30981__$1,data__$1,map30978__$1,input_checker30982__$1,set_filter_for_url__$1,G__30984__$1,filter_spec__$1,output_schema30980__$1,output_checker30983__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta31050){return (new clustermap.components.filters.external_filter.t31049(component_spec__$1,component_filter_rq_chan__$1,owner__$1,constructor30976__$1,map30979__$1,input_schema30981__$1,data__$1,map30978__$1,input_checker30982__$1,set_filter_for_url__$1,G__30984__$1,filter_spec__$1,output_schema30980__$1,output_checker30983__$1,validate__6034__auto____$1,id__$1,ufv____$1,meta31050));
});})(owner,component_filter_rq_chan,map30979,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983))
;
}
return (new clustermap.components.filters.external_filter.t31049(component_spec,component_filter_rq_chan,owner,constructor30976,map30979,input_schema30981,data,map30978,input_checker30982,set_filter_for_url,G__30984,filter_spec,output_schema30980,output_checker30983,validate__6034__auto__,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31136 = output_checker30983.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31136))
{var error__6036__auto___31137 = temp__4126__auto___31136;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30976","constructor30976",986142885,null),cljs.core.pr_str.call(null,error__6036__auto___31137)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31137,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30980,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30980,input_schema30981,input_checker30982,output_checker30983))
,schema.core.make_fn_schema.call(null,output_schema30980,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30981], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___31116){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30975,p__31113){var vec__31115 = p__31113;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31115,(0),null);return component_fnk__7881__auto___31116.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30975,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30975,var_args){
var p__31113 = null;if (arguments.length > 2) {
  p__31113 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30975,p__31113);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__31138){
var data__7882__auto__ = cljs.core.first(arglist__31138);
arglist__31138 = cljs.core.next(arglist__31138);
var owner30975 = cljs.core.first(arglist__31138);
var p__31113 = cljs.core.rest(arglist__31138);
return external_filter_component__delegate(data__7882__auto__,owner30975,p__31113);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___31116))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30977){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30977);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30977){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
