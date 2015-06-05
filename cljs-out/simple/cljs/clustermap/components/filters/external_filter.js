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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30376 = schema.core.Any;var input_schema30377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30378 = schema.core.checker.call(null,input_schema30377);var output_checker30379 = schema.core.checker.call(null,output_schema30376);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30376,input_schema30377,input_checker30378,output_checker30379){
return (function render_STAR_(G__30380){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30383 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30380], null);var temp__4126__auto___30384 = input_checker30378.call(null,args__6035__auto___30383);if(cljs.core.truth_(temp__4126__auto___30384))
{var error__6036__auto___30385 = temp__4126__auto___30384;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30385)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30385,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30383,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30377,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30380;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs30382 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30376,input_schema30377,input_checker30378,output_checker30379){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30376,input_schema30377,input_checker30378,output_checker30379))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs30382))?sablono.interpreter.attributes.call(null,attrs30382):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30382))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30382)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30386 = output_checker30379.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30386))
{var error__6036__auto___30387 = temp__4126__auto___30386;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30387)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30387,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30376,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30376,input_schema30377,input_checker30378,output_checker30379))
,schema.core.make_fn_schema.call(null,output_schema30376,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30377], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___30529 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30393 = schema.core.Any;var input_schema30394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30391","map30391",-1900947040,null))], null);var input_checker30395 = schema.core.checker.call(null,input_schema30394);var output_checker30396 = schema.core.checker.call(null,output_schema30393);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396){
return (function constructor30389(G__30397){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30530 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30397], null);var temp__4126__auto___30531 = input_checker30395.call(null,args__6035__auto___30530);if(cljs.core.truth_(temp__4126__auto___30531))
{var error__6036__auto___30532 = temp__4126__auto___30531;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30389","constructor30389",-366795898,null),cljs.core.pr_str.call(null,error__6036__auto___30532)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30532,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30530,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30394,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30391 = G__30397;while(true){
if(cljs.core.map_QMARK_.call(null,map30391))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30391)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30391,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30392 = plumbing.fnk.schema.safe_get.call(null,map30391,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30392,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30391,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t30462 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t30462 = (function (component_spec,map30391,component_filter_rq_chan,input_checker30395,owner,output_schema30393,G__30397,data,constructor30389,output_checker30396,set_filter_for_url,filter_spec,input_schema30394,validate__6034__auto__,id,map30392,ufv__,meta30463){
this.component_spec = component_spec;
this.map30391 = map30391;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_checker30395 = input_checker30395;
this.owner = owner;
this.output_schema30393 = output_schema30393;
this.G__30397 = G__30397;
this.data = data;
this.constructor30389 = constructor30389;
this.output_checker30396 = output_checker30396;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.input_schema30394 = input_schema30394;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.map30392 = map30392;
this.ufv__ = ufv__;
this.meta30463 = meta30463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t30462.cljs$lang$type = true;
clustermap.components.filters.external_filter.t30462.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t30462";
clustermap.components.filters.external_filter.t30462.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t30462");
});})(owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396))
;
clustermap.components.filters.external_filter.t30462.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t30462.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396))
;
clustermap.components.filters.external_filter.t30462.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t30462.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396))
;
clustermap.components.filters.external_filter.t30462.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t30462.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396){
return (function (_){var self__ = this;
var ___$1 = this;var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396){
return (function (state_30500){var state_val_30501 = (state_30500[(1)]);if((state_val_30501 === (7)))
{var inst_30491 = (state_30500[(2)]);var state_30500__$1 = state_30500;if(cljs.core.truth_(inst_30491))
{var statearr_30502_30533 = state_30500__$1;(statearr_30502_30533[(1)] = (11));
} else
{var statearr_30503_30534 = state_30500__$1;(statearr_30503_30534[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30501 === (1)))
{var state_30500__$1 = state_30500;var statearr_30504_30535 = state_30500__$1;(statearr_30504_30535[(2)] = null);
(statearr_30504_30535[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30501 === (4)))
{var inst_30467 = (state_30500[(7)]);var inst_30467__$1 = (state_30500[(2)]);var state_30500__$1 = (function (){var statearr_30505 = state_30500;(statearr_30505[(7)] = inst_30467__$1);
return statearr_30505;
})();if(cljs.core.truth_(inst_30467__$1))
{var statearr_30506_30536 = state_30500__$1;(statearr_30506_30536[(1)] = (5));
} else
{var statearr_30507_30537 = state_30500__$1;(statearr_30507_30537[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30501 === (13)))
{var inst_30496 = (state_30500[(2)]);var state_30500__$1 = state_30500;var statearr_30508_30538 = state_30500__$1;(statearr_30508_30538[(2)] = inst_30496);
(statearr_30508_30538[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30501 === (6)))
{var state_30500__$1 = state_30500;var statearr_30509_30539 = state_30500__$1;(statearr_30509_30539[(2)] = null);
(statearr_30509_30539[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30501 === (3)))
{var inst_30498 = (state_30500[(2)]);var state_30500__$1 = state_30500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30500__$1,inst_30498);
} else
{if((state_val_30501 === (12)))
{var state_30500__$1 = state_30500;var statearr_30510_30540 = state_30500__$1;(statearr_30510_30540[(2)] = null);
(statearr_30510_30540[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30501 === (2)))
{var state_30500__$1 = state_30500;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30500__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30501 === (11)))
{var state_30500__$1 = state_30500;var statearr_30511_30541 = state_30500__$1;(statearr_30511_30541[(2)] = null);
(statearr_30511_30541[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30501 === (9)))
{var inst_30473 = (state_30500[(8)]);var state_30500__$1 = state_30500;var statearr_30512_30542 = state_30500__$1;(statearr_30512_30542[(2)] = inst_30473);
(statearr_30512_30542[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30501 === (5)))
{var inst_30467 = (state_30500[(7)]);var inst_30473 = (state_30500[(8)]);var inst_30470 = cljs.core.nth.call(null,inst_30467,(0),null);var inst_30471 = cljs.core.nth.call(null,inst_30467,(1),null);var inst_30473__$1 = om.core.get_props.call(null,self__.owner);var inst_30474 = cljs.core.seq_QMARK_.call(null,inst_30473__$1);var state_30500__$1 = (function (){var statearr_30513 = state_30500;(statearr_30513[(8)] = inst_30473__$1);
(statearr_30513[(9)] = inst_30471);
(statearr_30513[(10)] = inst_30470);
return statearr_30513;
})();if(inst_30474)
{var statearr_30514_30543 = state_30500__$1;(statearr_30514_30543[(1)] = (8));
} else
{var statearr_30515_30544 = state_30500__$1;(statearr_30515_30544[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30501 === (10)))
{var inst_30467 = (state_30500[(7)]);var inst_30471 = (state_30500[(9)]);var inst_30470 = (state_30500[(10)]);var inst_30479 = (state_30500[(2)]);var inst_30480 = cljs.core.get.call(null,inst_30479,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30481 = cljs.core.get.call(null,inst_30479,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30482 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30483 = ["EXTERNAL-FILTER-RQ",self__.id,inst_30471];var inst_30484 = (new cljs.core.PersistentVector(null,3,(5),inst_30482,inst_30483,null));var inst_30485 = cljs.core.clj__GT_js.call(null,inst_30484);var inst_30486 = console.log(inst_30485);var inst_30487 = (function (){var filter_spec__$2 = inst_30481;var component_spec__$2 = inst_30480;var map__30472 = inst_30479;var rq = inst_30471;var component_id = inst_30470;var vec__30469 = inst_30467;var temp__4126__auto__ = inst_30467;return ((function (filter_spec__$2,component_spec__$2,map__30472,rq,component_id,vec__30469,temp__4126__auto__,inst_30467,inst_30471,inst_30470,inst_30479,inst_30480,inst_30481,inst_30482,inst_30483,inst_30484,inst_30485,inst_30486,state_val_30501,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__30472,rq,component_id,vec__30469,temp__4126__auto__,inst_30467,inst_30471,inst_30470,inst_30479,inst_30480,inst_30481,inst_30482,inst_30483,inst_30484,inst_30485,inst_30486,state_val_30501,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396))
})();var inst_30488 = self__.set_filter_for_url.call(null,inst_30471,inst_30487);var state_30500__$1 = (function (){var statearr_30516 = state_30500;(statearr_30516[(11)] = inst_30488);
(statearr_30516[(12)] = inst_30486);
return statearr_30516;
})();var statearr_30517_30545 = state_30500__$1;(statearr_30517_30545[(2)] = true);
(statearr_30517_30545[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30501 === (8)))
{var inst_30473 = (state_30500[(8)]);var inst_30476 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30473);var state_30500__$1 = state_30500;var statearr_30518_30546 = state_30500__$1;(statearr_30518_30546[(2)] = inst_30476);
(statearr_30518_30546[(1)] = (10));
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
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_30522 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30522[(0)] = state_machine__11099__auto__);
(statearr_30522[(1)] = (1));
return statearr_30522;
});
var state_machine__11099__auto____1 = (function (state_30500){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_30500);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e30523){if((e30523 instanceof Object))
{var ex__11102__auto__ = e30523;var statearr_30524_30547 = state_30500;(statearr_30524_30547[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30500);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30523;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30548 = state_30500;
state_30500 = G__30548;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_30500){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_30500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396))
})();var state__11156__auto__ = (function (){var statearr_30525 = f__11155__auto__.call(null);(statearr_30525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_30525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396))
);
return c__11154__auto__;
});})(owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396))
;
clustermap.components.filters.external_filter.t30462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396){
return (function (_30464){var self__ = this;
var _30464__$1 = this;return self__.meta30463;
});})(owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396))
;
clustermap.components.filters.external_filter.t30462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396){
return (function (_30464,meta30463__$1){var self__ = this;
var _30464__$1 = this;return (new clustermap.components.filters.external_filter.t30462(self__.component_spec,self__.map30391,self__.component_filter_rq_chan,self__.input_checker30395,self__.owner,self__.output_schema30393,self__.G__30397,self__.data,self__.constructor30389,self__.output_checker30396,self__.set_filter_for_url,self__.filter_spec,self__.input_schema30394,self__.validate__6034__auto__,self__.id,self__.map30392,self__.ufv__,meta30463__$1));
});})(owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396))
;
clustermap.components.filters.external_filter.__GT_t30462 = ((function (owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396){
return (function __GT_t30462(component_spec__$1,map30391__$1,component_filter_rq_chan__$1,input_checker30395__$1,owner__$1,output_schema30393__$1,G__30397__$1,data__$1,constructor30389__$1,output_checker30396__$1,set_filter_for_url__$1,filter_spec__$1,input_schema30394__$1,validate__6034__auto____$1,id__$1,map30392__$1,ufv____$1,meta30463){return (new clustermap.components.filters.external_filter.t30462(component_spec__$1,map30391__$1,component_filter_rq_chan__$1,input_checker30395__$1,owner__$1,output_schema30393__$1,G__30397__$1,data__$1,constructor30389__$1,output_checker30396__$1,set_filter_for_url__$1,filter_spec__$1,input_schema30394__$1,validate__6034__auto____$1,id__$1,map30392__$1,ufv____$1,meta30463));
});})(owner,component_filter_rq_chan,map30392,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396))
;
}
return (new clustermap.components.filters.external_filter.t30462(component_spec,map30391,component_filter_rq_chan,input_checker30395,owner,output_schema30393,G__30397,data,constructor30389,output_checker30396,set_filter_for_url,filter_spec,input_schema30394,validate__6034__auto__,id,map30392,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30549 = output_checker30396.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30549))
{var error__6036__auto___30550 = temp__4126__auto___30549;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30389","constructor30389",-366795898,null),cljs.core.pr_str.call(null,error__6036__auto___30550)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30550,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30393,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30393,input_schema30394,input_checker30395,output_checker30396))
,schema.core.make_fn_schema.call(null,output_schema30393,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30394], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___30529){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30388,p__30526){var vec__30528 = p__30526;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30528,(0),null);return component_fnk__7881__auto___30529.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30388,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30388,var_args){
var p__30526 = null;if (arguments.length > 2) {
  p__30526 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30388,p__30526);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__30551){
var data__7882__auto__ = cljs.core.first(arglist__30551);
arglist__30551 = cljs.core.next(arglist__30551);
var owner30388 = cljs.core.first(arglist__30551);
var p__30526 = cljs.core.rest(arglist__30551);
return external_filter_component__delegate(data__7882__auto__,owner30388,p__30526);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___30529))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30390){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30390);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30390){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
