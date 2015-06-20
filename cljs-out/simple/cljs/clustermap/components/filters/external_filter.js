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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30981 = schema.core.Any;var input_schema30982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30983 = schema.core.checker.call(null,input_schema30982);var output_checker30984 = schema.core.checker.call(null,output_schema30981);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function render_STAR_(G__30985){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30988 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30985], null);var temp__4126__auto___30989 = input_checker30983.call(null,args__6035__auto___30988);if(cljs.core.truth_(temp__4126__auto___30989))
{var error__6036__auto___30990 = temp__4126__auto___30989;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30990)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30990,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30988,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30982,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30985;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs30987 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs30987))?sablono.interpreter.attributes.call(null,attrs30987):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30987))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30987)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30991 = output_checker30984.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30991))
{var error__6036__auto___30992 = temp__4126__auto___30991;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30992)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30992,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30981,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30981,input_schema30982,input_checker30983,output_checker30984))
,schema.core.make_fn_schema.call(null,output_schema30981,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30982], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___31134 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30998 = schema.core.Any;var input_schema30999 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30996","map30996",-2137300658,null))], null);var input_checker31000 = schema.core.checker.call(null,input_schema30999);var output_checker31001 = schema.core.checker.call(null,output_schema30998);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001){
return (function constructor30994(G__31002){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31002], null);var temp__4126__auto___31136 = input_checker31000.call(null,args__6035__auto___31135);if(cljs.core.truth_(temp__4126__auto___31136))
{var error__6036__auto___31137 = temp__4126__auto___31136;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30994","constructor30994",443647401,null),cljs.core.pr_str.call(null,error__6036__auto___31137)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31137,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31135,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30999,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30996 = G__31002;while(true){
if(cljs.core.map_QMARK_.call(null,map30996))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30996)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30996,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30997 = plumbing.fnk.schema.safe_get.call(null,map30996,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30997,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30996,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t31067 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t31067 = (function (component_spec,component_filter_rq_chan,input_schema30999,owner,data,output_checker31001,constructor30994,G__31002,set_filter_for_url,map30996,filter_spec,validate__6034__auto__,map30997,id,output_schema30998,input_checker31000,ufv__,meta31068){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_schema30999 = input_schema30999;
this.owner = owner;
this.data = data;
this.output_checker31001 = output_checker31001;
this.constructor30994 = constructor30994;
this.G__31002 = G__31002;
this.set_filter_for_url = set_filter_for_url;
this.map30996 = map30996;
this.filter_spec = filter_spec;
this.validate__6034__auto__ = validate__6034__auto__;
this.map30997 = map30997;
this.id = id;
this.output_schema30998 = output_schema30998;
this.input_checker31000 = input_checker31000;
this.ufv__ = ufv__;
this.meta31068 = meta31068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t31067.cljs$lang$type = true;
clustermap.components.filters.external_filter.t31067.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t31067";
clustermap.components.filters.external_filter.t31067.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t31067");
});})(owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001))
;
clustermap.components.filters.external_filter.t31067.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t31067.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001))
;
clustermap.components.filters.external_filter.t31067.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t31067.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001))
;
clustermap.components.filters.external_filter.t31067.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t31067.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001){
return (function (state_31105){var state_val_31106 = (state_31105[(1)]);if((state_val_31106 === (7)))
{var inst_31096 = (state_31105[(2)]);var state_31105__$1 = state_31105;if(cljs.core.truth_(inst_31096))
{var statearr_31107_31138 = state_31105__$1;(statearr_31107_31138[(1)] = (11));
} else
{var statearr_31108_31139 = state_31105__$1;(statearr_31108_31139[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31106 === (1)))
{var state_31105__$1 = state_31105;var statearr_31109_31140 = state_31105__$1;(statearr_31109_31140[(2)] = null);
(statearr_31109_31140[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31106 === (4)))
{var inst_31072 = (state_31105[(7)]);var inst_31072__$1 = (state_31105[(2)]);var state_31105__$1 = (function (){var statearr_31110 = state_31105;(statearr_31110[(7)] = inst_31072__$1);
return statearr_31110;
})();if(cljs.core.truth_(inst_31072__$1))
{var statearr_31111_31141 = state_31105__$1;(statearr_31111_31141[(1)] = (5));
} else
{var statearr_31112_31142 = state_31105__$1;(statearr_31112_31142[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31106 === (13)))
{var inst_31101 = (state_31105[(2)]);var state_31105__$1 = state_31105;var statearr_31113_31143 = state_31105__$1;(statearr_31113_31143[(2)] = inst_31101);
(statearr_31113_31143[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31106 === (6)))
{var state_31105__$1 = state_31105;var statearr_31114_31144 = state_31105__$1;(statearr_31114_31144[(2)] = null);
(statearr_31114_31144[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31106 === (3)))
{var inst_31103 = (state_31105[(2)]);var state_31105__$1 = state_31105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31105__$1,inst_31103);
} else
{if((state_val_31106 === (12)))
{var state_31105__$1 = state_31105;var statearr_31115_31145 = state_31105__$1;(statearr_31115_31145[(2)] = null);
(statearr_31115_31145[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31106 === (2)))
{var state_31105__$1 = state_31105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31105__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31106 === (11)))
{var state_31105__$1 = state_31105;var statearr_31116_31146 = state_31105__$1;(statearr_31116_31146[(2)] = null);
(statearr_31116_31146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31106 === (9)))
{var inst_31078 = (state_31105[(8)]);var state_31105__$1 = state_31105;var statearr_31117_31147 = state_31105__$1;(statearr_31117_31147[(2)] = inst_31078);
(statearr_31117_31147[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31106 === (5)))
{var inst_31078 = (state_31105[(8)]);var inst_31072 = (state_31105[(7)]);var inst_31075 = cljs.core.nth.call(null,inst_31072,(0),null);var inst_31076 = cljs.core.nth.call(null,inst_31072,(1),null);var inst_31078__$1 = om.core.get_props.call(null,self__.owner);var inst_31079 = cljs.core.seq_QMARK_.call(null,inst_31078__$1);var state_31105__$1 = (function (){var statearr_31118 = state_31105;(statearr_31118[(8)] = inst_31078__$1);
(statearr_31118[(9)] = inst_31076);
(statearr_31118[(10)] = inst_31075);
return statearr_31118;
})();if(inst_31079)
{var statearr_31119_31148 = state_31105__$1;(statearr_31119_31148[(1)] = (8));
} else
{var statearr_31120_31149 = state_31105__$1;(statearr_31120_31149[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31106 === (10)))
{var inst_31072 = (state_31105[(7)]);var inst_31076 = (state_31105[(9)]);var inst_31075 = (state_31105[(10)]);var inst_31084 = (state_31105[(2)]);var inst_31085 = cljs.core.get.call(null,inst_31084,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31086 = cljs.core.get.call(null,inst_31084,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31087 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31088 = ["EXTERNAL-FILTER-RQ",self__.id,inst_31076];var inst_31089 = (new cljs.core.PersistentVector(null,3,(5),inst_31087,inst_31088,null));var inst_31090 = cljs.core.clj__GT_js.call(null,inst_31089);var inst_31091 = console.log(inst_31090);var inst_31092 = (function (){var filter_spec__$2 = inst_31086;var component_spec__$2 = inst_31085;var map__31077 = inst_31084;var rq = inst_31076;var component_id = inst_31075;var vec__31074 = inst_31072;var temp__4126__auto__ = inst_31072;return ((function (filter_spec__$2,component_spec__$2,map__31077,rq,component_id,vec__31074,temp__4126__auto__,inst_31072,inst_31076,inst_31075,inst_31084,inst_31085,inst_31086,inst_31087,inst_31088,inst_31089,inst_31090,inst_31091,state_val_31106,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__31077,rq,component_id,vec__31074,temp__4126__auto__,inst_31072,inst_31076,inst_31075,inst_31084,inst_31085,inst_31086,inst_31087,inst_31088,inst_31089,inst_31090,inst_31091,state_val_31106,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001))
})();var inst_31093 = self__.set_filter_for_url.call(null,inst_31076,inst_31092);var state_31105__$1 = (function (){var statearr_31121 = state_31105;(statearr_31121[(11)] = inst_31091);
(statearr_31121[(12)] = inst_31093);
return statearr_31121;
})();var statearr_31122_31150 = state_31105__$1;(statearr_31122_31150[(2)] = true);
(statearr_31122_31150[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31106 === (8)))
{var inst_31078 = (state_31105[(8)]);var inst_31081 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31078);var state_31105__$1 = state_31105;var statearr_31123_31151 = state_31105__$1;(statearr_31123_31151[(2)] = inst_31081);
(statearr_31123_31151[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31127 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31127[(0)] = state_machine__9111__auto__);
(statearr_31127[(1)] = (1));
return statearr_31127;
});
var state_machine__9111__auto____1 = (function (state_31105){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31105);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31128){if((e31128 instanceof Object))
{var ex__9114__auto__ = e31128;var statearr_31129_31152 = state_31105;(statearr_31129_31152[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31105);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31128;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31153 = state_31105;
state_31105 = G__31153;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31105){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001))
})();var state__9127__auto__ = (function (){var statearr_31130 = f__9126__auto__.call(null);(statearr_31130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001))
;
clustermap.components.filters.external_filter.t31067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001){
return (function (_31069){var self__ = this;
var _31069__$1 = this;return self__.meta31068;
});})(owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001))
;
clustermap.components.filters.external_filter.t31067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001){
return (function (_31069,meta31068__$1){var self__ = this;
var _31069__$1 = this;return (new clustermap.components.filters.external_filter.t31067(self__.component_spec,self__.component_filter_rq_chan,self__.input_schema30999,self__.owner,self__.data,self__.output_checker31001,self__.constructor30994,self__.G__31002,self__.set_filter_for_url,self__.map30996,self__.filter_spec,self__.validate__6034__auto__,self__.map30997,self__.id,self__.output_schema30998,self__.input_checker31000,self__.ufv__,meta31068__$1));
});})(owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001))
;
clustermap.components.filters.external_filter.__GT_t31067 = ((function (owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001){
return (function __GT_t31067(component_spec__$1,component_filter_rq_chan__$1,input_schema30999__$1,owner__$1,data__$1,output_checker31001__$1,constructor30994__$1,G__31002__$1,set_filter_for_url__$1,map30996__$1,filter_spec__$1,validate__6034__auto____$1,map30997__$1,id__$1,output_schema30998__$1,input_checker31000__$1,ufv____$1,meta31068){return (new clustermap.components.filters.external_filter.t31067(component_spec__$1,component_filter_rq_chan__$1,input_schema30999__$1,owner__$1,data__$1,output_checker31001__$1,constructor30994__$1,G__31002__$1,set_filter_for_url__$1,map30996__$1,filter_spec__$1,validate__6034__auto____$1,map30997__$1,id__$1,output_schema30998__$1,input_checker31000__$1,ufv____$1,meta31068));
});})(owner,component_filter_rq_chan,map30997,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001))
;
}
return (new clustermap.components.filters.external_filter.t31067(component_spec,component_filter_rq_chan,input_schema30999,owner,data,output_checker31001,constructor30994,G__31002,set_filter_for_url,map30996,filter_spec,validate__6034__auto__,map30997,id,output_schema30998,input_checker31000,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31154 = output_checker31001.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31154))
{var error__6036__auto___31155 = temp__4126__auto___31154;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30994","constructor30994",443647401,null),cljs.core.pr_str.call(null,error__6036__auto___31155)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31155,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30998,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30998,input_schema30999,input_checker31000,output_checker31001))
,schema.core.make_fn_schema.call(null,output_schema30998,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30999], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___31134){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30993,p__31131){var vec__31133 = p__31131;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31133,(0),null);return component_fnk__7881__auto___31134.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30993,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30993,var_args){
var p__31131 = null;if (arguments.length > 2) {
  p__31131 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30993,p__31131);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__31156){
var data__7882__auto__ = cljs.core.first(arglist__31156);
arglist__31156 = cljs.core.next(arglist__31156);
var owner30993 = cljs.core.first(arglist__31156);
var p__31131 = cljs.core.rest(arglist__31156);
return external_filter_component__delegate(data__7882__auto__,owner30993,p__31131);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___31134))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30995){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30995);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30995){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
