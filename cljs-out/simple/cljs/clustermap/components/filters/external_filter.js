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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30829 = schema.core.Any;var input_schema30830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30831 = schema.core.checker.call(null,input_schema30830);var output_checker30832 = schema.core.checker.call(null,output_schema30829);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30829,input_schema30830,input_checker30831,output_checker30832){
return (function render_STAR_(G__30833){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30836 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30833], null);var temp__4126__auto___30837 = input_checker30831.call(null,args__6035__auto___30836);if(cljs.core.truth_(temp__4126__auto___30837))
{var error__6036__auto___30838 = temp__4126__auto___30837;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30838)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30838,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30836,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30830,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30833;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs30835 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30829,input_schema30830,input_checker30831,output_checker30832){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30829,input_schema30830,input_checker30831,output_checker30832))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs30835))?sablono.interpreter.attributes.call(null,attrs30835):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30835))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30835)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30839 = output_checker30832.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30839))
{var error__6036__auto___30840 = temp__4126__auto___30839;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30840)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30840,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30829,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30829,input_schema30830,input_checker30831,output_checker30832))
,schema.core.make_fn_schema.call(null,output_schema30829,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30830], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___30982 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30846 = schema.core.Any;var input_schema30847 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30844","map30844",273912475,null))], null);var input_checker30848 = schema.core.checker.call(null,input_schema30847);var output_checker30849 = schema.core.checker.call(null,output_schema30846);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849){
return (function constructor30842(G__30850){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30983 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30850], null);var temp__4126__auto___30984 = input_checker30848.call(null,args__6035__auto___30983);if(cljs.core.truth_(temp__4126__auto___30984))
{var error__6036__auto___30985 = temp__4126__auto___30984;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30842","constructor30842",1664333672,null),cljs.core.pr_str.call(null,error__6036__auto___30985)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30985,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30983,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30847,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30844 = G__30850;while(true){
if(cljs.core.map_QMARK_.call(null,map30844))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30844)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30844,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30845 = plumbing.fnk.schema.safe_get.call(null,map30844,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30845,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30844,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t30915 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t30915 = (function (component_spec,component_filter_rq_chan,owner,input_schema30847,map30845,data,output_checker30849,constructor30842,set_filter_for_url,filter_spec,input_checker30848,validate__6034__auto__,id,map30844,G__30850,ufv__,output_schema30846,meta30916){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.input_schema30847 = input_schema30847;
this.map30845 = map30845;
this.data = data;
this.output_checker30849 = output_checker30849;
this.constructor30842 = constructor30842;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.input_checker30848 = input_checker30848;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map30844 = map30844;
this.G__30850 = G__30850;
this.ufv__ = ufv__;
this.output_schema30846 = output_schema30846;
this.meta30916 = meta30916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t30915.cljs$lang$type = true;
clustermap.components.filters.external_filter.t30915.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t30915";
clustermap.components.filters.external_filter.t30915.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t30915");
});})(owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849))
;
clustermap.components.filters.external_filter.t30915.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t30915.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849))
;
clustermap.components.filters.external_filter.t30915.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t30915.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849))
;
clustermap.components.filters.external_filter.t30915.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t30915.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849){
return (function (state_30953){var state_val_30954 = (state_30953[(1)]);if((state_val_30954 === (7)))
{var inst_30944 = (state_30953[(2)]);var state_30953__$1 = state_30953;if(cljs.core.truth_(inst_30944))
{var statearr_30955_30986 = state_30953__$1;(statearr_30955_30986[(1)] = (11));
} else
{var statearr_30956_30987 = state_30953__$1;(statearr_30956_30987[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30954 === (1)))
{var state_30953__$1 = state_30953;var statearr_30957_30988 = state_30953__$1;(statearr_30957_30988[(2)] = null);
(statearr_30957_30988[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30954 === (4)))
{var inst_30920 = (state_30953[(7)]);var inst_30920__$1 = (state_30953[(2)]);var state_30953__$1 = (function (){var statearr_30958 = state_30953;(statearr_30958[(7)] = inst_30920__$1);
return statearr_30958;
})();if(cljs.core.truth_(inst_30920__$1))
{var statearr_30959_30989 = state_30953__$1;(statearr_30959_30989[(1)] = (5));
} else
{var statearr_30960_30990 = state_30953__$1;(statearr_30960_30990[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30954 === (13)))
{var inst_30949 = (state_30953[(2)]);var state_30953__$1 = state_30953;var statearr_30961_30991 = state_30953__$1;(statearr_30961_30991[(2)] = inst_30949);
(statearr_30961_30991[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30954 === (6)))
{var state_30953__$1 = state_30953;var statearr_30962_30992 = state_30953__$1;(statearr_30962_30992[(2)] = null);
(statearr_30962_30992[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30954 === (3)))
{var inst_30951 = (state_30953[(2)]);var state_30953__$1 = state_30953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30953__$1,inst_30951);
} else
{if((state_val_30954 === (12)))
{var state_30953__$1 = state_30953;var statearr_30963_30993 = state_30953__$1;(statearr_30963_30993[(2)] = null);
(statearr_30963_30993[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30954 === (2)))
{var state_30953__$1 = state_30953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30953__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30954 === (11)))
{var state_30953__$1 = state_30953;var statearr_30964_30994 = state_30953__$1;(statearr_30964_30994[(2)] = null);
(statearr_30964_30994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30954 === (9)))
{var inst_30926 = (state_30953[(8)]);var state_30953__$1 = state_30953;var statearr_30965_30995 = state_30953__$1;(statearr_30965_30995[(2)] = inst_30926);
(statearr_30965_30995[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30954 === (5)))
{var inst_30920 = (state_30953[(7)]);var inst_30926 = (state_30953[(8)]);var inst_30923 = cljs.core.nth.call(null,inst_30920,(0),null);var inst_30924 = cljs.core.nth.call(null,inst_30920,(1),null);var inst_30926__$1 = om.core.get_props.call(null,self__.owner);var inst_30927 = cljs.core.seq_QMARK_.call(null,inst_30926__$1);var state_30953__$1 = (function (){var statearr_30966 = state_30953;(statearr_30966[(9)] = inst_30924);
(statearr_30966[(8)] = inst_30926__$1);
(statearr_30966[(10)] = inst_30923);
return statearr_30966;
})();if(inst_30927)
{var statearr_30967_30996 = state_30953__$1;(statearr_30967_30996[(1)] = (8));
} else
{var statearr_30968_30997 = state_30953__$1;(statearr_30968_30997[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30954 === (10)))
{var inst_30920 = (state_30953[(7)]);var inst_30924 = (state_30953[(9)]);var inst_30923 = (state_30953[(10)]);var inst_30932 = (state_30953[(2)]);var inst_30933 = cljs.core.get.call(null,inst_30932,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30934 = cljs.core.get.call(null,inst_30932,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30935 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30936 = ["EXTERNAL-FILTER-RQ",self__.id,inst_30924];var inst_30937 = (new cljs.core.PersistentVector(null,3,(5),inst_30935,inst_30936,null));var inst_30938 = cljs.core.clj__GT_js.call(null,inst_30937);var inst_30939 = console.log(inst_30938);var inst_30940 = (function (){var filter_spec__$2 = inst_30934;var component_spec__$2 = inst_30933;var map__30925 = inst_30932;var rq = inst_30924;var component_id = inst_30923;var vec__30922 = inst_30920;var temp__4126__auto__ = inst_30920;return ((function (filter_spec__$2,component_spec__$2,map__30925,rq,component_id,vec__30922,temp__4126__auto__,inst_30920,inst_30924,inst_30923,inst_30932,inst_30933,inst_30934,inst_30935,inst_30936,inst_30937,inst_30938,inst_30939,state_val_30954,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__30925,rq,component_id,vec__30922,temp__4126__auto__,inst_30920,inst_30924,inst_30923,inst_30932,inst_30933,inst_30934,inst_30935,inst_30936,inst_30937,inst_30938,inst_30939,state_val_30954,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849))
})();var inst_30941 = self__.set_filter_for_url.call(null,inst_30924,inst_30940);var state_30953__$1 = (function (){var statearr_30969 = state_30953;(statearr_30969[(11)] = inst_30941);
(statearr_30969[(12)] = inst_30939);
return statearr_30969;
})();var statearr_30970_30998 = state_30953__$1;(statearr_30970_30998[(2)] = true);
(statearr_30970_30998[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30954 === (8)))
{var inst_30926 = (state_30953[(8)]);var inst_30929 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30926);var state_30953__$1 = state_30953;var statearr_30971_30999 = state_30953__$1;(statearr_30971_30999[(2)] = inst_30929);
(statearr_30971_30999[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_30975 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30975[(0)] = state_machine__9111__auto__);
(statearr_30975[(1)] = (1));
return statearr_30975;
});
var state_machine__9111__auto____1 = (function (state_30953){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_30953);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e30976){if((e30976 instanceof Object))
{var ex__9114__auto__ = e30976;var statearr_30977_31000 = state_30953;(statearr_30977_31000[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30953);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30976;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31001 = state_30953;
state_30953 = G__31001;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_30953){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_30953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849))
})();var state__9127__auto__ = (function (){var statearr_30978 = f__9126__auto__.call(null);(statearr_30978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_30978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849))
;
clustermap.components.filters.external_filter.t30915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849){
return (function (_30917){var self__ = this;
var _30917__$1 = this;return self__.meta30916;
});})(owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849))
;
clustermap.components.filters.external_filter.t30915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849){
return (function (_30917,meta30916__$1){var self__ = this;
var _30917__$1 = this;return (new clustermap.components.filters.external_filter.t30915(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.input_schema30847,self__.map30845,self__.data,self__.output_checker30849,self__.constructor30842,self__.set_filter_for_url,self__.filter_spec,self__.input_checker30848,self__.validate__6034__auto__,self__.id,self__.map30844,self__.G__30850,self__.ufv__,self__.output_schema30846,meta30916__$1));
});})(owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849))
;
clustermap.components.filters.external_filter.__GT_t30915 = ((function (owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849){
return (function __GT_t30915(component_spec__$1,component_filter_rq_chan__$1,owner__$1,input_schema30847__$1,map30845__$1,data__$1,output_checker30849__$1,constructor30842__$1,set_filter_for_url__$1,filter_spec__$1,input_checker30848__$1,validate__6034__auto____$1,id__$1,map30844__$1,G__30850__$1,ufv____$1,output_schema30846__$1,meta30916){return (new clustermap.components.filters.external_filter.t30915(component_spec__$1,component_filter_rq_chan__$1,owner__$1,input_schema30847__$1,map30845__$1,data__$1,output_checker30849__$1,constructor30842__$1,set_filter_for_url__$1,filter_spec__$1,input_checker30848__$1,validate__6034__auto____$1,id__$1,map30844__$1,G__30850__$1,ufv____$1,output_schema30846__$1,meta30916));
});})(owner,component_filter_rq_chan,map30845,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849))
;
}
return (new clustermap.components.filters.external_filter.t30915(component_spec,component_filter_rq_chan,owner,input_schema30847,map30845,data,output_checker30849,constructor30842,set_filter_for_url,filter_spec,input_checker30848,validate__6034__auto__,id,map30844,G__30850,ufv__,output_schema30846,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31002 = output_checker30849.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31002))
{var error__6036__auto___31003 = temp__4126__auto___31002;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30842","constructor30842",1664333672,null),cljs.core.pr_str.call(null,error__6036__auto___31003)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31003,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30846,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30846,input_schema30847,input_checker30848,output_checker30849))
,schema.core.make_fn_schema.call(null,output_schema30846,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30847], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___30982){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30841,p__30979){var vec__30981 = p__30979;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30981,(0),null);return component_fnk__7881__auto___30982.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30841,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30841,var_args){
var p__30979 = null;if (arguments.length > 2) {
  p__30979 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30841,p__30979);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__31004){
var data__7882__auto__ = cljs.core.first(arglist__31004);
arglist__31004 = cljs.core.next(arglist__31004);
var owner30841 = cljs.core.first(arglist__31004);
var p__30979 = cljs.core.rest(arglist__31004);
return external_filter_component__delegate(data__7882__auto__,owner30841,p__30979);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___30982))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30843){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30843);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30843){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
