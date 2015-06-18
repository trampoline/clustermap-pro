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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31016 = schema.core.Any;var input_schema31017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31018 = schema.core.checker.call(null,input_schema31017);var output_checker31019 = schema.core.checker.call(null,output_schema31016);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31016,input_schema31017,input_checker31018,output_checker31019){
return (function render_STAR_(G__31020){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31020], null);var temp__4126__auto___31024 = input_checker31018.call(null,args__6035__auto___31023);if(cljs.core.truth_(temp__4126__auto___31024))
{var error__6036__auto___31025 = temp__4126__auto___31024;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31025)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31025,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31023,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31017,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31020;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs31022 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31016,input_schema31017,input_checker31018,output_checker31019){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31016,input_schema31017,input_checker31018,output_checker31019))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs31022))?sablono.interpreter.attributes.call(null,attrs31022):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31022))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31022)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31026 = output_checker31019.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31026))
{var error__6036__auto___31027 = temp__4126__auto___31026;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31027)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31027,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31016,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31016,input_schema31017,input_checker31018,output_checker31019))
,schema.core.make_fn_schema.call(null,output_schema31016,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31017], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___31169 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31033 = schema.core.Any;var input_schema31034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31031","map31031",1539472435,null))], null);var input_checker31035 = schema.core.checker.call(null,input_schema31034);var output_checker31036 = schema.core.checker.call(null,output_schema31033);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function constructor31029(G__31037){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31037], null);var temp__4126__auto___31171 = input_checker31035.call(null,args__6035__auto___31170);if(cljs.core.truth_(temp__4126__auto___31171))
{var error__6036__auto___31172 = temp__4126__auto___31171;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31029","constructor31029",1261976861,null),cljs.core.pr_str.call(null,error__6036__auto___31172)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31172,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31170,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31034,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31031 = G__31037;while(true){
if(cljs.core.map_QMARK_.call(null,map31031))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31031)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31031,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31032 = plumbing.fnk.schema.safe_get.call(null,map31031,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31032,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31031,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t31102 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t31102 = (function (component_spec,component_filter_rq_chan,owner,data,G__31037,set_filter_for_url,output_schema31033,filter_spec,map31031,input_checker31035,map31032,validate__6034__auto__,input_schema31034,id,output_checker31036,constructor31029,ufv__,meta31103){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.G__31037 = G__31037;
this.set_filter_for_url = set_filter_for_url;
this.output_schema31033 = output_schema31033;
this.filter_spec = filter_spec;
this.map31031 = map31031;
this.input_checker31035 = input_checker31035;
this.map31032 = map31032;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_schema31034 = input_schema31034;
this.id = id;
this.output_checker31036 = output_checker31036;
this.constructor31029 = constructor31029;
this.ufv__ = ufv__;
this.meta31103 = meta31103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t31102.cljs$lang$type = true;
clustermap.components.filters.external_filter.t31102.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t31102";
clustermap.components.filters.external_filter.t31102.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t31102");
});})(owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
clustermap.components.filters.external_filter.t31102.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t31102.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
clustermap.components.filters.external_filter.t31102.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t31102.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
clustermap.components.filters.external_filter.t31102.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t31102.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (state_31140){var state_val_31141 = (state_31140[(1)]);if((state_val_31141 === (7)))
{var inst_31131 = (state_31140[(2)]);var state_31140__$1 = state_31140;if(cljs.core.truth_(inst_31131))
{var statearr_31142_31173 = state_31140__$1;(statearr_31142_31173[(1)] = (11));
} else
{var statearr_31143_31174 = state_31140__$1;(statearr_31143_31174[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (1)))
{var state_31140__$1 = state_31140;var statearr_31144_31175 = state_31140__$1;(statearr_31144_31175[(2)] = null);
(statearr_31144_31175[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (4)))
{var inst_31107 = (state_31140[(7)]);var inst_31107__$1 = (state_31140[(2)]);var state_31140__$1 = (function (){var statearr_31145 = state_31140;(statearr_31145[(7)] = inst_31107__$1);
return statearr_31145;
})();if(cljs.core.truth_(inst_31107__$1))
{var statearr_31146_31176 = state_31140__$1;(statearr_31146_31176[(1)] = (5));
} else
{var statearr_31147_31177 = state_31140__$1;(statearr_31147_31177[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (13)))
{var inst_31136 = (state_31140[(2)]);var state_31140__$1 = state_31140;var statearr_31148_31178 = state_31140__$1;(statearr_31148_31178[(2)] = inst_31136);
(statearr_31148_31178[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (6)))
{var state_31140__$1 = state_31140;var statearr_31149_31179 = state_31140__$1;(statearr_31149_31179[(2)] = null);
(statearr_31149_31179[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (3)))
{var inst_31138 = (state_31140[(2)]);var state_31140__$1 = state_31140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31140__$1,inst_31138);
} else
{if((state_val_31141 === (12)))
{var state_31140__$1 = state_31140;var statearr_31150_31180 = state_31140__$1;(statearr_31150_31180[(2)] = null);
(statearr_31150_31180[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (2)))
{var state_31140__$1 = state_31140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31140__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31141 === (11)))
{var state_31140__$1 = state_31140;var statearr_31151_31181 = state_31140__$1;(statearr_31151_31181[(2)] = null);
(statearr_31151_31181[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (9)))
{var inst_31113 = (state_31140[(8)]);var state_31140__$1 = state_31140;var statearr_31152_31182 = state_31140__$1;(statearr_31152_31182[(2)] = inst_31113);
(statearr_31152_31182[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (5)))
{var inst_31107 = (state_31140[(7)]);var inst_31113 = (state_31140[(8)]);var inst_31110 = cljs.core.nth.call(null,inst_31107,(0),null);var inst_31111 = cljs.core.nth.call(null,inst_31107,(1),null);var inst_31113__$1 = om.core.get_props.call(null,self__.owner);var inst_31114 = cljs.core.seq_QMARK_.call(null,inst_31113__$1);var state_31140__$1 = (function (){var statearr_31153 = state_31140;(statearr_31153[(9)] = inst_31111);
(statearr_31153[(10)] = inst_31110);
(statearr_31153[(8)] = inst_31113__$1);
return statearr_31153;
})();if(inst_31114)
{var statearr_31154_31183 = state_31140__$1;(statearr_31154_31183[(1)] = (8));
} else
{var statearr_31155_31184 = state_31140__$1;(statearr_31155_31184[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (10)))
{var inst_31107 = (state_31140[(7)]);var inst_31111 = (state_31140[(9)]);var inst_31110 = (state_31140[(10)]);var inst_31119 = (state_31140[(2)]);var inst_31120 = cljs.core.get.call(null,inst_31119,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31121 = cljs.core.get.call(null,inst_31119,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31122 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31123 = ["EXTERNAL-FILTER-RQ",self__.id,inst_31111];var inst_31124 = (new cljs.core.PersistentVector(null,3,(5),inst_31122,inst_31123,null));var inst_31125 = cljs.core.clj__GT_js.call(null,inst_31124);var inst_31126 = console.log(inst_31125);var inst_31127 = (function (){var filter_spec__$2 = inst_31121;var component_spec__$2 = inst_31120;var map__31112 = inst_31119;var rq = inst_31111;var component_id = inst_31110;var vec__31109 = inst_31107;var temp__4126__auto__ = inst_31107;return ((function (filter_spec__$2,component_spec__$2,map__31112,rq,component_id,vec__31109,temp__4126__auto__,inst_31107,inst_31111,inst_31110,inst_31119,inst_31120,inst_31121,inst_31122,inst_31123,inst_31124,inst_31125,inst_31126,state_val_31141,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__31112,rq,component_id,vec__31109,temp__4126__auto__,inst_31107,inst_31111,inst_31110,inst_31119,inst_31120,inst_31121,inst_31122,inst_31123,inst_31124,inst_31125,inst_31126,state_val_31141,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
})();var inst_31128 = self__.set_filter_for_url.call(null,inst_31111,inst_31127);var state_31140__$1 = (function (){var statearr_31156 = state_31140;(statearr_31156[(11)] = inst_31128);
(statearr_31156[(12)] = inst_31126);
return statearr_31156;
})();var statearr_31157_31185 = state_31140__$1;(statearr_31157_31185[(2)] = true);
(statearr_31157_31185[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31141 === (8)))
{var inst_31113 = (state_31140[(8)]);var inst_31116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31113);var state_31140__$1 = state_31140;var statearr_31158_31186 = state_31140__$1;(statearr_31158_31186[(2)] = inst_31116);
(statearr_31158_31186[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31162 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31162[(0)] = state_machine__9111__auto__);
(statearr_31162[(1)] = (1));
return statearr_31162;
});
var state_machine__9111__auto____1 = (function (state_31140){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31140);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31163){if((e31163 instanceof Object))
{var ex__9114__auto__ = e31163;var statearr_31164_31187 = state_31140;(statearr_31164_31187[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31140);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31163;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31188 = state_31140;
state_31140 = G__31188;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31140){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
})();var state__9127__auto__ = (function (){var statearr_31165 = f__9126__auto__.call(null);(statearr_31165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
clustermap.components.filters.external_filter.t31102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (_31104){var self__ = this;
var _31104__$1 = this;return self__.meta31103;
});})(owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
clustermap.components.filters.external_filter.t31102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function (_31104,meta31103__$1){var self__ = this;
var _31104__$1 = this;return (new clustermap.components.filters.external_filter.t31102(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.G__31037,self__.set_filter_for_url,self__.output_schema31033,self__.filter_spec,self__.map31031,self__.input_checker31035,self__.map31032,self__.validate__6034__auto__,self__.input_schema31034,self__.id,self__.output_checker31036,self__.constructor31029,self__.ufv__,meta31103__$1));
});})(owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
clustermap.components.filters.external_filter.__GT_t31102 = ((function (owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036){
return (function __GT_t31102(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,G__31037__$1,set_filter_for_url__$1,output_schema31033__$1,filter_spec__$1,map31031__$1,input_checker31035__$1,map31032__$1,validate__6034__auto____$1,input_schema31034__$1,id__$1,output_checker31036__$1,constructor31029__$1,ufv____$1,meta31103){return (new clustermap.components.filters.external_filter.t31102(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,G__31037__$1,set_filter_for_url__$1,output_schema31033__$1,filter_spec__$1,map31031__$1,input_checker31035__$1,map31032__$1,validate__6034__auto____$1,input_schema31034__$1,id__$1,output_checker31036__$1,constructor31029__$1,ufv____$1,meta31103));
});})(owner,component_filter_rq_chan,map31032,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
;
}
return (new clustermap.components.filters.external_filter.t31102(component_spec,component_filter_rq_chan,owner,data,G__31037,set_filter_for_url,output_schema31033,filter_spec,map31031,input_checker31035,map31032,validate__6034__auto__,input_schema31034,id,output_checker31036,constructor31029,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31189 = output_checker31036.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31189))
{var error__6036__auto___31190 = temp__4126__auto___31189;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31029","constructor31029",1261976861,null),cljs.core.pr_str.call(null,error__6036__auto___31190)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31190,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31033,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31033,input_schema31034,input_checker31035,output_checker31036))
,schema.core.make_fn_schema.call(null,output_schema31033,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31034], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___31169){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner31028,p__31166){var vec__31168 = p__31166;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31168,(0),null);return component_fnk__7881__auto___31169.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31028,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner31028,var_args){
var p__31166 = null;if (arguments.length > 2) {
  p__31166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner31028,p__31166);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__31191){
var data__7882__auto__ = cljs.core.first(arglist__31191);
arglist__31191 = cljs.core.next(arglist__31191);
var owner31028 = cljs.core.first(arglist__31191);
var p__31166 = cljs.core.rest(arglist__31191);
return external_filter_component__delegate(data__7882__auto__,owner31028,p__31166);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___31169))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m31030){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m31030);
});
__GT_external_filter_component = function(cursor__7850__auto__,m31030){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m31030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
