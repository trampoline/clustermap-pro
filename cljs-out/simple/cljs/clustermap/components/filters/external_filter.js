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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31023 = schema.core.Any;var input_schema31024 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker31025 = schema.core.checker.call(null,input_schema31024);var output_checker31026 = schema.core.checker.call(null,output_schema31023);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31023,input_schema31024,input_checker31025,output_checker31026){
return (function render_STAR_(G__31027){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31030 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31027], null);var temp__4126__auto___31031 = input_checker31025.call(null,args__6035__auto___31030);if(cljs.core.truth_(temp__4126__auto___31031))
{var error__6036__auto___31032 = temp__4126__auto___31031;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31032)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31032,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31030,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31024,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__31027;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs31029 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31023,input_schema31024,input_checker31025,output_checker31026){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema31023,input_schema31024,input_checker31025,output_checker31026))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs31029))?sablono.interpreter.attributes.call(null,attrs31029):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31029))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31029)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31033 = output_checker31026.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31033))
{var error__6036__auto___31034 = temp__4126__auto___31033;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___31034)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31034,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31023,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31023,input_schema31024,input_checker31025,output_checker31026))
,schema.core.make_fn_schema.call(null,output_schema31023,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31024], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___31176 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31040 = schema.core.Any;var input_schema31041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map31038","map31038",1513064587,null))], null);var input_checker31042 = schema.core.checker.call(null,input_schema31041);var output_checker31043 = schema.core.checker.call(null,output_schema31040);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043){
return (function constructor31036(G__31044){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31177 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31044], null);var temp__4126__auto___31178 = input_checker31042.call(null,args__6035__auto___31177);if(cljs.core.truth_(temp__4126__auto___31178))
{var error__6036__auto___31179 = temp__4126__auto___31178;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31036","constructor31036",-74011550,null),cljs.core.pr_str.call(null,error__6036__auto___31179)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31179,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31177,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31041,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31038 = G__31044;while(true){
if(cljs.core.map_QMARK_.call(null,map31038))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31038)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map31038,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map31039 = plumbing.fnk.schema.safe_get.call(null,map31038,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map31039,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31038,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t31109 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t31109 = (function (component_spec,component_filter_rq_chan,constructor31036,owner,data,output_schema31040,input_checker31042,map31038,map31039,set_filter_for_url,output_checker31043,filter_spec,input_schema31041,validate__6034__auto__,G__31044,id,ufv__,meta31110){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.constructor31036 = constructor31036;
this.owner = owner;
this.data = data;
this.output_schema31040 = output_schema31040;
this.input_checker31042 = input_checker31042;
this.map31038 = map31038;
this.map31039 = map31039;
this.set_filter_for_url = set_filter_for_url;
this.output_checker31043 = output_checker31043;
this.filter_spec = filter_spec;
this.input_schema31041 = input_schema31041;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__31044 = G__31044;
this.id = id;
this.ufv__ = ufv__;
this.meta31110 = meta31110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t31109.cljs$lang$type = true;
clustermap.components.filters.external_filter.t31109.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t31109";
clustermap.components.filters.external_filter.t31109.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t31109");
});})(owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043))
;
clustermap.components.filters.external_filter.t31109.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t31109.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043))
;
clustermap.components.filters.external_filter.t31109.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t31109.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043))
;
clustermap.components.filters.external_filter.t31109.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t31109.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043){
return (function (state_31147){var state_val_31148 = (state_31147[(1)]);if((state_val_31148 === (7)))
{var inst_31138 = (state_31147[(2)]);var state_31147__$1 = state_31147;if(cljs.core.truth_(inst_31138))
{var statearr_31149_31180 = state_31147__$1;(statearr_31149_31180[(1)] = (11));
} else
{var statearr_31150_31181 = state_31147__$1;(statearr_31150_31181[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (1)))
{var state_31147__$1 = state_31147;var statearr_31151_31182 = state_31147__$1;(statearr_31151_31182[(2)] = null);
(statearr_31151_31182[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (4)))
{var inst_31114 = (state_31147[(7)]);var inst_31114__$1 = (state_31147[(2)]);var state_31147__$1 = (function (){var statearr_31152 = state_31147;(statearr_31152[(7)] = inst_31114__$1);
return statearr_31152;
})();if(cljs.core.truth_(inst_31114__$1))
{var statearr_31153_31183 = state_31147__$1;(statearr_31153_31183[(1)] = (5));
} else
{var statearr_31154_31184 = state_31147__$1;(statearr_31154_31184[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (13)))
{var inst_31143 = (state_31147[(2)]);var state_31147__$1 = state_31147;var statearr_31155_31185 = state_31147__$1;(statearr_31155_31185[(2)] = inst_31143);
(statearr_31155_31185[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (6)))
{var state_31147__$1 = state_31147;var statearr_31156_31186 = state_31147__$1;(statearr_31156_31186[(2)] = null);
(statearr_31156_31186[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (3)))
{var inst_31145 = (state_31147[(2)]);var state_31147__$1 = state_31147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31147__$1,inst_31145);
} else
{if((state_val_31148 === (12)))
{var state_31147__$1 = state_31147;var statearr_31157_31187 = state_31147__$1;(statearr_31157_31187[(2)] = null);
(statearr_31157_31187[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (2)))
{var state_31147__$1 = state_31147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31147__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31148 === (11)))
{var state_31147__$1 = state_31147;var statearr_31158_31188 = state_31147__$1;(statearr_31158_31188[(2)] = null);
(statearr_31158_31188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (9)))
{var inst_31120 = (state_31147[(8)]);var state_31147__$1 = state_31147;var statearr_31159_31189 = state_31147__$1;(statearr_31159_31189[(2)] = inst_31120);
(statearr_31159_31189[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (5)))
{var inst_31114 = (state_31147[(7)]);var inst_31120 = (state_31147[(8)]);var inst_31117 = cljs.core.nth.call(null,inst_31114,(0),null);var inst_31118 = cljs.core.nth.call(null,inst_31114,(1),null);var inst_31120__$1 = om.core.get_props.call(null,self__.owner);var inst_31121 = cljs.core.seq_QMARK_.call(null,inst_31120__$1);var state_31147__$1 = (function (){var statearr_31160 = state_31147;(statearr_31160[(9)] = inst_31118);
(statearr_31160[(8)] = inst_31120__$1);
(statearr_31160[(10)] = inst_31117);
return statearr_31160;
})();if(inst_31121)
{var statearr_31161_31190 = state_31147__$1;(statearr_31161_31190[(1)] = (8));
} else
{var statearr_31162_31191 = state_31147__$1;(statearr_31162_31191[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (10)))
{var inst_31118 = (state_31147[(9)]);var inst_31114 = (state_31147[(7)]);var inst_31117 = (state_31147[(10)]);var inst_31126 = (state_31147[(2)]);var inst_31127 = cljs.core.get.call(null,inst_31126,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31128 = cljs.core.get.call(null,inst_31126,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31129 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31130 = ["EXTERNAL-FILTER-RQ",self__.id,inst_31118];var inst_31131 = (new cljs.core.PersistentVector(null,3,(5),inst_31129,inst_31130,null));var inst_31132 = cljs.core.clj__GT_js.call(null,inst_31131);var inst_31133 = console.log(inst_31132);var inst_31134 = (function (){var filter_spec__$2 = inst_31128;var component_spec__$2 = inst_31127;var map__31119 = inst_31126;var rq = inst_31118;var component_id = inst_31117;var vec__31116 = inst_31114;var temp__4126__auto__ = inst_31114;return ((function (filter_spec__$2,component_spec__$2,map__31119,rq,component_id,vec__31116,temp__4126__auto__,inst_31118,inst_31114,inst_31117,inst_31126,inst_31127,inst_31128,inst_31129,inst_31130,inst_31131,inst_31132,inst_31133,state_val_31148,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__31119,rq,component_id,vec__31116,temp__4126__auto__,inst_31118,inst_31114,inst_31117,inst_31126,inst_31127,inst_31128,inst_31129,inst_31130,inst_31131,inst_31132,inst_31133,state_val_31148,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043))
})();var inst_31135 = self__.set_filter_for_url.call(null,inst_31118,inst_31134);var state_31147__$1 = (function (){var statearr_31163 = state_31147;(statearr_31163[(11)] = inst_31133);
(statearr_31163[(12)] = inst_31135);
return statearr_31163;
})();var statearr_31164_31192 = state_31147__$1;(statearr_31164_31192[(2)] = true);
(statearr_31164_31192[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31148 === (8)))
{var inst_31120 = (state_31147[(8)]);var inst_31123 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31120);var state_31147__$1 = state_31147;var statearr_31165_31193 = state_31147__$1;(statearr_31165_31193[(2)] = inst_31123);
(statearr_31165_31193[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31169 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31169[(0)] = state_machine__9111__auto__);
(statearr_31169[(1)] = (1));
return statearr_31169;
});
var state_machine__9111__auto____1 = (function (state_31147){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31147);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31170){if((e31170 instanceof Object))
{var ex__9114__auto__ = e31170;var statearr_31171_31194 = state_31147;(statearr_31171_31194[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31147);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31170;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31195 = state_31147;
state_31147 = G__31195;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31147){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043))
})();var state__9127__auto__ = (function (){var statearr_31172 = f__9126__auto__.call(null);(statearr_31172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31172;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043))
;
clustermap.components.filters.external_filter.t31109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043){
return (function (_31111){var self__ = this;
var _31111__$1 = this;return self__.meta31110;
});})(owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043))
;
clustermap.components.filters.external_filter.t31109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043){
return (function (_31111,meta31110__$1){var self__ = this;
var _31111__$1 = this;return (new clustermap.components.filters.external_filter.t31109(self__.component_spec,self__.component_filter_rq_chan,self__.constructor31036,self__.owner,self__.data,self__.output_schema31040,self__.input_checker31042,self__.map31038,self__.map31039,self__.set_filter_for_url,self__.output_checker31043,self__.filter_spec,self__.input_schema31041,self__.validate__6034__auto__,self__.G__31044,self__.id,self__.ufv__,meta31110__$1));
});})(owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043))
;
clustermap.components.filters.external_filter.__GT_t31109 = ((function (owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043){
return (function __GT_t31109(component_spec__$1,component_filter_rq_chan__$1,constructor31036__$1,owner__$1,data__$1,output_schema31040__$1,input_checker31042__$1,map31038__$1,map31039__$1,set_filter_for_url__$1,output_checker31043__$1,filter_spec__$1,input_schema31041__$1,validate__6034__auto____$1,G__31044__$1,id__$1,ufv____$1,meta31110){return (new clustermap.components.filters.external_filter.t31109(component_spec__$1,component_filter_rq_chan__$1,constructor31036__$1,owner__$1,data__$1,output_schema31040__$1,input_checker31042__$1,map31038__$1,map31039__$1,set_filter_for_url__$1,output_checker31043__$1,filter_spec__$1,input_schema31041__$1,validate__6034__auto____$1,G__31044__$1,id__$1,ufv____$1,meta31110));
});})(owner,component_filter_rq_chan,map31039,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043))
;
}
return (new clustermap.components.filters.external_filter.t31109(component_spec,component_filter_rq_chan,constructor31036,owner,data,output_schema31040,input_checker31042,map31038,map31039,set_filter_for_url,output_checker31043,filter_spec,input_schema31041,validate__6034__auto__,G__31044,id,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31196 = output_checker31043.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31196))
{var error__6036__auto___31197 = temp__4126__auto___31196;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31036","constructor31036",-74011550,null),cljs.core.pr_str.call(null,error__6036__auto___31197)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31197,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31040,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31040,input_schema31041,input_checker31042,output_checker31043))
,schema.core.make_fn_schema.call(null,output_schema31040,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31041], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___31176){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner31035,p__31173){var vec__31175 = p__31173;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31175,(0),null);return component_fnk__7881__auto___31176.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31035,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner31035,var_args){
var p__31173 = null;if (arguments.length > 2) {
  p__31173 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner31035,p__31173);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__31198){
var data__7882__auto__ = cljs.core.first(arglist__31198);
arglist__31198 = cljs.core.next(arglist__31198);
var owner31035 = cljs.core.first(arglist__31198);
var p__31173 = cljs.core.rest(arglist__31198);
return external_filter_component__delegate(data__7882__auto__,owner31035,p__31173);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___31176))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m31037){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m31037);
});
__GT_external_filter_component = function(cursor__7850__auto__,m31037){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m31037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
