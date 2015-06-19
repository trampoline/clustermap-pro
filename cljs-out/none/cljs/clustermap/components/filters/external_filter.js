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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29368 = schema.core.Any;var input_schema29369 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29370 = schema.core.checker.call(null,input_schema29369);var output_checker29371 = schema.core.checker.call(null,output_schema29368);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29368,input_schema29369,input_checker29370,output_checker29371){
return (function render_STAR_(G__29372){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___29375 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29372], null);var temp__4126__auto___29376 = input_checker29370.call(null,args__13948__auto___29375);if(cljs.core.truth_(temp__4126__auto___29376))
{var error__13949__auto___29377 = temp__4126__auto___29376;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___29377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29377,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___29375,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29369,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var data = G__29372;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs29374 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29368,input_schema29369,input_checker29370,output_checker29371){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__13947__auto__,ufv__,output_schema29368,input_schema29369,input_checker29370,output_checker29371))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__11552__auto__ = default_text;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs29374))?sablono.interpreter.attributes.call(null,attrs29374):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29374))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29374)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___29378 = output_checker29371.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___29378))
{var error__13949__auto___29379 = temp__4126__auto___29378;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13949__auto___29379)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29379,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29368,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema29368,input_schema29369,input_checker29370,output_checker29371))
,schema.core.make_fn_schema.call(null,output_schema29368,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29369], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__15794__auto___29521 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29385 = schema.core.Any;var input_schema29386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29383","map29383",-117734715,null))], null);var input_checker29387 = schema.core.checker.call(null,input_schema29386);var output_checker29388 = schema.core.checker.call(null,output_schema29385);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388){
return (function constructor29381(G__29389){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___29522 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29389], null);var temp__4126__auto___29523 = input_checker29387.call(null,args__13948__auto___29522);if(cljs.core.truth_(temp__4126__auto___29523))
{var error__13949__auto___29524 = temp__4126__auto___29523;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29381","constructor29381",-1635627817,null),cljs.core.pr_str.call(null,error__13949__auto___29524)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29524,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___29522,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29386,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map29383 = G__29389;while(true){
if(cljs.core.map_QMARK_.call(null,map29383))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29383)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29383,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29384 = plumbing.fnk.schema.safe_get.call(null,map29383,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29384,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29383,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t29454 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t29454 = (function (component_spec,component_filter_rq_chan,G__29389,owner,map29383,data,input_schema29386,set_filter_for_url,filter_spec,output_checker29388,constructor29381,output_schema29385,validate__13947__auto__,id,input_checker29387,ufv__,map29384,meta29455){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.G__29389 = G__29389;
this.owner = owner;
this.map29383 = map29383;
this.data = data;
this.input_schema29386 = input_schema29386;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.output_checker29388 = output_checker29388;
this.constructor29381 = constructor29381;
this.output_schema29385 = output_schema29385;
this.validate__13947__auto__ = validate__13947__auto__;
this.id = id;
this.input_checker29387 = input_checker29387;
this.ufv__ = ufv__;
this.map29384 = map29384;
this.meta29455 = meta29455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t29454.cljs$lang$type = true;
clustermap.components.filters.external_filter.t29454.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t29454";
clustermap.components.filters.external_filter.t29454.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.filters.external-filter/t29454");
});})(owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388))
;
clustermap.components.filters.external_filter.t29454.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t29454.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388))
;
clustermap.components.filters.external_filter.t29454.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t29454.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388))
;
clustermap.components.filters.external_filter.t29454.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t29454.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388){
return (function (_){var self__ = this;
var ___$1 = this;var c__16733__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__16733__auto__,___$1,owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388){
return (function (){var f__16734__auto__ = (function (){var switch__16718__auto__ = ((function (c__16733__auto__,___$1,owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388){
return (function (state_29492){var state_val_29493 = (state_29492[(1)]);if((state_val_29493 === (7)))
{var inst_29483 = (state_29492[(2)]);var state_29492__$1 = state_29492;if(cljs.core.truth_(inst_29483))
{var statearr_29494_29525 = state_29492__$1;(statearr_29494_29525[(1)] = (11));
} else
{var statearr_29495_29526 = state_29492__$1;(statearr_29495_29526[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29493 === (1)))
{var state_29492__$1 = state_29492;var statearr_29496_29527 = state_29492__$1;(statearr_29496_29527[(2)] = null);
(statearr_29496_29527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29493 === (4)))
{var inst_29459 = (state_29492[(7)]);var inst_29459__$1 = (state_29492[(2)]);var state_29492__$1 = (function (){var statearr_29497 = state_29492;(statearr_29497[(7)] = inst_29459__$1);
return statearr_29497;
})();if(cljs.core.truth_(inst_29459__$1))
{var statearr_29498_29528 = state_29492__$1;(statearr_29498_29528[(1)] = (5));
} else
{var statearr_29499_29529 = state_29492__$1;(statearr_29499_29529[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29493 === (13)))
{var inst_29488 = (state_29492[(2)]);var state_29492__$1 = state_29492;var statearr_29500_29530 = state_29492__$1;(statearr_29500_29530[(2)] = inst_29488);
(statearr_29500_29530[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29493 === (6)))
{var state_29492__$1 = state_29492;var statearr_29501_29531 = state_29492__$1;(statearr_29501_29531[(2)] = null);
(statearr_29501_29531[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29493 === (3)))
{var inst_29490 = (state_29492[(2)]);var state_29492__$1 = state_29492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29492__$1,inst_29490);
} else
{if((state_val_29493 === (12)))
{var state_29492__$1 = state_29492;var statearr_29502_29532 = state_29492__$1;(statearr_29502_29532[(2)] = null);
(statearr_29502_29532[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29493 === (2)))
{var state_29492__$1 = state_29492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29492__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29493 === (11)))
{var state_29492__$1 = state_29492;var statearr_29503_29533 = state_29492__$1;(statearr_29503_29533[(2)] = null);
(statearr_29503_29533[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29493 === (9)))
{var inst_29465 = (state_29492[(8)]);var state_29492__$1 = state_29492;var statearr_29504_29534 = state_29492__$1;(statearr_29504_29534[(2)] = inst_29465);
(statearr_29504_29534[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29493 === (5)))
{var inst_29465 = (state_29492[(8)]);var inst_29459 = (state_29492[(7)]);var inst_29462 = cljs.core.nth.call(null,inst_29459,(0),null);var inst_29463 = cljs.core.nth.call(null,inst_29459,(1),null);var inst_29465__$1 = om.core.get_props.call(null,self__.owner);var inst_29466 = cljs.core.seq_QMARK_.call(null,inst_29465__$1);var state_29492__$1 = (function (){var statearr_29505 = state_29492;(statearr_29505[(8)] = inst_29465__$1);
(statearr_29505[(9)] = inst_29462);
(statearr_29505[(10)] = inst_29463);
return statearr_29505;
})();if(inst_29466)
{var statearr_29506_29535 = state_29492__$1;(statearr_29506_29535[(1)] = (8));
} else
{var statearr_29507_29536 = state_29492__$1;(statearr_29507_29536[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29493 === (10)))
{var inst_29459 = (state_29492[(7)]);var inst_29462 = (state_29492[(9)]);var inst_29463 = (state_29492[(10)]);var inst_29471 = (state_29492[(2)]);var inst_29472 = cljs.core.get.call(null,inst_29471,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29473 = cljs.core.get.call(null,inst_29471,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29474 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29475 = ["EXTERNAL-FILTER-RQ",self__.id,inst_29463];var inst_29476 = (new cljs.core.PersistentVector(null,3,(5),inst_29474,inst_29475,null));var inst_29477 = cljs.core.clj__GT_js.call(null,inst_29476);var inst_29478 = console.log(inst_29477);var inst_29479 = (function (){var filter_spec__$2 = inst_29473;var component_spec__$2 = inst_29472;var map__29464 = inst_29471;var rq = inst_29463;var component_id = inst_29462;var vec__29461 = inst_29459;var temp__4126__auto__ = inst_29459;return ((function (filter_spec__$2,component_spec__$2,map__29464,rq,component_id,vec__29461,temp__4126__auto__,inst_29459,inst_29462,inst_29463,inst_29471,inst_29472,inst_29473,inst_29474,inst_29475,inst_29476,inst_29477,inst_29478,state_val_29493,c__16733__auto__,___$1,owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__29464,rq,component_id,vec__29461,temp__4126__auto__,inst_29459,inst_29462,inst_29463,inst_29471,inst_29472,inst_29473,inst_29474,inst_29475,inst_29476,inst_29477,inst_29478,state_val_29493,c__16733__auto__,___$1,owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388))
})();var inst_29480 = self__.set_filter_for_url.call(null,inst_29463,inst_29479);var state_29492__$1 = (function (){var statearr_29508 = state_29492;(statearr_29508[(11)] = inst_29478);
(statearr_29508[(12)] = inst_29480);
return statearr_29508;
})();var statearr_29509_29537 = state_29492__$1;(statearr_29509_29537[(2)] = true);
(statearr_29509_29537[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29493 === (8)))
{var inst_29465 = (state_29492[(8)]);var inst_29468 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29465);var state_29492__$1 = state_29492;var statearr_29510_29538 = state_29492__$1;(statearr_29510_29538[(2)] = inst_29468);
(statearr_29510_29538[(1)] = (10));
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
});})(c__16733__auto__,___$1,owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388))
;return ((function (switch__16718__auto__,c__16733__auto__,___$1,owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388){
return (function() {
var state_machine__16719__auto__ = null;
var state_machine__16719__auto____0 = (function (){var statearr_29514 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29514[(0)] = state_machine__16719__auto__);
(statearr_29514[(1)] = (1));
return statearr_29514;
});
var state_machine__16719__auto____1 = (function (state_29492){while(true){
var ret_value__16720__auto__ = (function (){try{while(true){
var result__16721__auto__ = switch__16718__auto__.call(null,state_29492);if(cljs.core.keyword_identical_QMARK_.call(null,result__16721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__16721__auto__;
}
break;
}
}catch (e29515){if((e29515 instanceof Object))
{var ex__16722__auto__ = e29515;var statearr_29516_29539 = state_29492;(statearr_29516_29539[(5)] = ex__16722__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29492);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29515;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29540 = state_29492;
state_29492 = G__29540;
continue;
}
} else
{return ret_value__16720__auto__;
}
break;
}
});
state_machine__16719__auto__ = function(state_29492){
switch(arguments.length){
case 0:
return state_machine__16719__auto____0.call(this);
case 1:
return state_machine__16719__auto____1.call(this,state_29492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16719__auto____0;
state_machine__16719__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16719__auto____1;
return state_machine__16719__auto__;
})()
;})(switch__16718__auto__,c__16733__auto__,___$1,owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388))
})();var state__16735__auto__ = (function (){var statearr_29517 = f__16734__auto__.call(null);(statearr_29517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16733__auto__);
return statearr_29517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16735__auto__);
});})(c__16733__auto__,___$1,owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388))
);
return c__16733__auto__;
});})(owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388))
;
clustermap.components.filters.external_filter.t29454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388){
return (function (_29456){var self__ = this;
var _29456__$1 = this;return self__.meta29455;
});})(owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388))
;
clustermap.components.filters.external_filter.t29454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388){
return (function (_29456,meta29455__$1){var self__ = this;
var _29456__$1 = this;return (new clustermap.components.filters.external_filter.t29454(self__.component_spec,self__.component_filter_rq_chan,self__.G__29389,self__.owner,self__.map29383,self__.data,self__.input_schema29386,self__.set_filter_for_url,self__.filter_spec,self__.output_checker29388,self__.constructor29381,self__.output_schema29385,self__.validate__13947__auto__,self__.id,self__.input_checker29387,self__.ufv__,self__.map29384,meta29455__$1));
});})(owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388))
;
clustermap.components.filters.external_filter.__GT_t29454 = ((function (owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388){
return (function __GT_t29454(component_spec__$1,component_filter_rq_chan__$1,G__29389__$1,owner__$1,map29383__$1,data__$1,input_schema29386__$1,set_filter_for_url__$1,filter_spec__$1,output_checker29388__$1,constructor29381__$1,output_schema29385__$1,validate__13947__auto____$1,id__$1,input_checker29387__$1,ufv____$1,map29384__$1,meta29455){return (new clustermap.components.filters.external_filter.t29454(component_spec__$1,component_filter_rq_chan__$1,G__29389__$1,owner__$1,map29383__$1,data__$1,input_schema29386__$1,set_filter_for_url__$1,filter_spec__$1,output_checker29388__$1,constructor29381__$1,output_schema29385__$1,validate__13947__auto____$1,id__$1,input_checker29387__$1,ufv____$1,map29384__$1,meta29455));
});})(owner,component_filter_rq_chan,map29384,set_filter_for_url,id,component_spec,filter_spec,data,validate__13947__auto__,ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388))
;
}
return (new clustermap.components.filters.external_filter.t29454(component_spec,component_filter_rq_chan,G__29389,owner,map29383,data,input_schema29386,set_filter_for_url,filter_spec,output_checker29388,constructor29381,output_schema29385,validate__13947__auto__,id,input_checker29387,ufv__,map29384,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___29541 = output_checker29388.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___29541))
{var error__13949__auto___29542 = temp__4126__auto___29541;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29381","constructor29381",-1635627817,null),cljs.core.pr_str.call(null,error__13949__auto___29542)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29542,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29385,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema29385,input_schema29386,input_checker29387,output_checker29388))
,schema.core.make_fn_schema.call(null,output_schema29385,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29386], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__15794__auto___29521){
return (function() { 
var external_filter_component__delegate = function (data__15795__auto__,owner29380,p__29518){var vec__29520 = p__29518;var opts__15796__auto__ = cljs.core.nth.call(null,vec__29520,(0),null);return component_fnk__15794__auto___29521.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29380,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var external_filter_component = function (data__15795__auto__,owner29380,var_args){
var p__29518 = null;if (arguments.length > 2) {
  p__29518 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__15795__auto__,owner29380,p__29518);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__29543){
var data__15795__auto__ = cljs.core.first(arglist__29543);
arglist__29543 = cljs.core.next(arglist__29543);
var owner29380 = cljs.core.first(arglist__29543);
var p__29518 = cljs.core.rest(arglist__29543);
return external_filter_component__delegate(data__15795__auto__,owner29380,p__29518);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__15794__auto___29521))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__15763__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__15763__auto__,m29382){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__15763__auto__,m29382);
});
__GT_external_filter_component = function(cursor__15763__auto__,m29382){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__15763__auto__,m29382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;

//# sourceMappingURL=external_filter.js.map