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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30014 = schema.core.Any;var input_schema30015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30016 = schema.core.checker.call(null,input_schema30015);var output_checker30017 = schema.core.checker.call(null,output_schema30014);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function render_STAR_(G__30018){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30021 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30018], null);var temp__4126__auto___30022 = input_checker30016.call(null,args__6035__auto___30021);if(cljs.core.truth_(temp__4126__auto___30022))
{var error__6036__auto___30023 = temp__4126__auto___30022;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30023)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30023,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30021,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30015,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30018;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs30020 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs30020))?sablono.interpreter.attributes.call(null,attrs30020):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30020))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30020)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30024 = output_checker30017.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30024))
{var error__6036__auto___30025 = temp__4126__auto___30024;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30025)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30025,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30014,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30014,input_schema30015,input_checker30016,output_checker30017))
,schema.core.make_fn_schema.call(null,output_schema30014,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30015], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___30167 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30031 = schema.core.Any;var input_schema30032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30029","map30029",-756466906,null))], null);var input_checker30033 = schema.core.checker.call(null,input_schema30032);var output_checker30034 = schema.core.checker.call(null,output_schema30031);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034){
return (function constructor30027(G__30035){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30035], null);var temp__4126__auto___30169 = input_checker30033.call(null,args__6035__auto___30168);if(cljs.core.truth_(temp__4126__auto___30169))
{var error__6036__auto___30170 = temp__4126__auto___30169;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30027","constructor30027",1192547846,null),cljs.core.pr_str.call(null,error__6036__auto___30170)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30170,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30168,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30032,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30029 = G__30035;while(true){
if(cljs.core.map_QMARK_.call(null,map30029))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30029)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30029,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30030 = plumbing.fnk.schema.safe_get.call(null,map30029,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30030,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30029,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t30100 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t30100 = (function (component_spec,component_filter_rq_chan,owner,data,constructor30027,map30029,output_schema30031,set_filter_for_url,G__30035,filter_spec,input_checker30033,input_schema30032,validate__6034__auto__,output_checker30034,id,map30030,ufv__,meta30101){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.constructor30027 = constructor30027;
this.map30029 = map30029;
this.output_schema30031 = output_schema30031;
this.set_filter_for_url = set_filter_for_url;
this.G__30035 = G__30035;
this.filter_spec = filter_spec;
this.input_checker30033 = input_checker30033;
this.input_schema30032 = input_schema30032;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker30034 = output_checker30034;
this.id = id;
this.map30030 = map30030;
this.ufv__ = ufv__;
this.meta30101 = meta30101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t30100.cljs$lang$type = true;
clustermap.components.filters.external_filter.t30100.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t30100";
clustermap.components.filters.external_filter.t30100.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t30100");
});})(owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034))
;
clustermap.components.filters.external_filter.t30100.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t30100.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034))
;
clustermap.components.filters.external_filter.t30100.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t30100.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034))
;
clustermap.components.filters.external_filter.t30100.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t30100.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034){
return (function (_){var self__ = this;
var ___$1 = this;var c__11154__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034){
return (function (){var f__11155__auto__ = (function (){var switch__11098__auto__ = ((function (c__11154__auto__,___$1,owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034){
return (function (state_30138){var state_val_30139 = (state_30138[(1)]);if((state_val_30139 === (7)))
{var inst_30129 = (state_30138[(2)]);var state_30138__$1 = state_30138;if(cljs.core.truth_(inst_30129))
{var statearr_30140_30171 = state_30138__$1;(statearr_30140_30171[(1)] = (11));
} else
{var statearr_30141_30172 = state_30138__$1;(statearr_30141_30172[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30139 === (1)))
{var state_30138__$1 = state_30138;var statearr_30142_30173 = state_30138__$1;(statearr_30142_30173[(2)] = null);
(statearr_30142_30173[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30139 === (4)))
{var inst_30105 = (state_30138[(7)]);var inst_30105__$1 = (state_30138[(2)]);var state_30138__$1 = (function (){var statearr_30143 = state_30138;(statearr_30143[(7)] = inst_30105__$1);
return statearr_30143;
})();if(cljs.core.truth_(inst_30105__$1))
{var statearr_30144_30174 = state_30138__$1;(statearr_30144_30174[(1)] = (5));
} else
{var statearr_30145_30175 = state_30138__$1;(statearr_30145_30175[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30139 === (13)))
{var inst_30134 = (state_30138[(2)]);var state_30138__$1 = state_30138;var statearr_30146_30176 = state_30138__$1;(statearr_30146_30176[(2)] = inst_30134);
(statearr_30146_30176[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30139 === (6)))
{var state_30138__$1 = state_30138;var statearr_30147_30177 = state_30138__$1;(statearr_30147_30177[(2)] = null);
(statearr_30147_30177[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30139 === (3)))
{var inst_30136 = (state_30138[(2)]);var state_30138__$1 = state_30138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30138__$1,inst_30136);
} else
{if((state_val_30139 === (12)))
{var state_30138__$1 = state_30138;var statearr_30148_30178 = state_30138__$1;(statearr_30148_30178[(2)] = null);
(statearr_30148_30178[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30139 === (2)))
{var state_30138__$1 = state_30138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30138__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_30139 === (11)))
{var state_30138__$1 = state_30138;var statearr_30149_30179 = state_30138__$1;(statearr_30149_30179[(2)] = null);
(statearr_30149_30179[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30139 === (9)))
{var inst_30111 = (state_30138[(8)]);var state_30138__$1 = state_30138;var statearr_30150_30180 = state_30138__$1;(statearr_30150_30180[(2)] = inst_30111);
(statearr_30150_30180[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30139 === (5)))
{var inst_30105 = (state_30138[(7)]);var inst_30111 = (state_30138[(8)]);var inst_30108 = cljs.core.nth.call(null,inst_30105,(0),null);var inst_30109 = cljs.core.nth.call(null,inst_30105,(1),null);var inst_30111__$1 = om.core.get_props.call(null,self__.owner);var inst_30112 = cljs.core.seq_QMARK_.call(null,inst_30111__$1);var state_30138__$1 = (function (){var statearr_30151 = state_30138;(statearr_30151[(9)] = inst_30108);
(statearr_30151[(8)] = inst_30111__$1);
(statearr_30151[(10)] = inst_30109);
return statearr_30151;
})();if(inst_30112)
{var statearr_30152_30181 = state_30138__$1;(statearr_30152_30181[(1)] = (8));
} else
{var statearr_30153_30182 = state_30138__$1;(statearr_30153_30182[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30139 === (10)))
{var inst_30105 = (state_30138[(7)]);var inst_30108 = (state_30138[(9)]);var inst_30109 = (state_30138[(10)]);var inst_30117 = (state_30138[(2)]);var inst_30118 = cljs.core.get.call(null,inst_30117,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_30119 = cljs.core.get.call(null,inst_30117,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_30120 = cljs.core.PersistentVector.EMPTY_NODE;var inst_30121 = ["EXTERNAL-FILTER-RQ",self__.id,inst_30109];var inst_30122 = (new cljs.core.PersistentVector(null,3,(5),inst_30120,inst_30121,null));var inst_30123 = cljs.core.clj__GT_js.call(null,inst_30122);var inst_30124 = console.log(inst_30123);var inst_30125 = (function (){var filter_spec__$2 = inst_30119;var component_spec__$2 = inst_30118;var map__30110 = inst_30117;var rq = inst_30109;var component_id = inst_30108;var vec__30107 = inst_30105;var temp__4126__auto__ = inst_30105;return ((function (filter_spec__$2,component_spec__$2,map__30110,rq,component_id,vec__30107,temp__4126__auto__,inst_30105,inst_30108,inst_30109,inst_30117,inst_30118,inst_30119,inst_30120,inst_30121,inst_30122,inst_30123,inst_30124,state_val_30139,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__30110,rq,component_id,vec__30107,temp__4126__auto__,inst_30105,inst_30108,inst_30109,inst_30117,inst_30118,inst_30119,inst_30120,inst_30121,inst_30122,inst_30123,inst_30124,state_val_30139,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034))
})();var inst_30126 = self__.set_filter_for_url.call(null,inst_30109,inst_30125);var state_30138__$1 = (function (){var statearr_30154 = state_30138;(statearr_30154[(11)] = inst_30124);
(statearr_30154[(12)] = inst_30126);
return statearr_30154;
})();var statearr_30155_30183 = state_30138__$1;(statearr_30155_30183[(2)] = true);
(statearr_30155_30183[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30139 === (8)))
{var inst_30111 = (state_30138[(8)]);var inst_30114 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30111);var state_30138__$1 = state_30138;var statearr_30156_30184 = state_30138__$1;(statearr_30156_30184[(2)] = inst_30114);
(statearr_30156_30184[(1)] = (10));
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
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034))
;return ((function (switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034){
return (function() {
var state_machine__11099__auto__ = null;
var state_machine__11099__auto____0 = (function (){var statearr_30160 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30160[(0)] = state_machine__11099__auto__);
(statearr_30160[(1)] = (1));
return statearr_30160;
});
var state_machine__11099__auto____1 = (function (state_30138){while(true){
var ret_value__11100__auto__ = (function (){try{while(true){
var result__11101__auto__ = switch__11098__auto__.call(null,state_30138);if(cljs.core.keyword_identical_QMARK_.call(null,result__11101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11101__auto__;
}
break;
}
}catch (e30161){if((e30161 instanceof Object))
{var ex__11102__auto__ = e30161;var statearr_30162_30185 = state_30138;(statearr_30162_30185[(5)] = ex__11102__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30138);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30161;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30186 = state_30138;
state_30138 = G__30186;
continue;
}
} else
{return ret_value__11100__auto__;
}
break;
}
});
state_machine__11099__auto__ = function(state_30138){
switch(arguments.length){
case 0:
return state_machine__11099__auto____0.call(this);
case 1:
return state_machine__11099__auto____1.call(this,state_30138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11099__auto____0;
state_machine__11099__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11099__auto____1;
return state_machine__11099__auto__;
})()
;})(switch__11098__auto__,c__11154__auto__,___$1,owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034))
})();var state__11156__auto__ = (function (){var statearr_30163 = f__11155__auto__.call(null);(statearr_30163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11154__auto__);
return statearr_30163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11156__auto__);
});})(c__11154__auto__,___$1,owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034))
);
return c__11154__auto__;
});})(owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034))
;
clustermap.components.filters.external_filter.t30100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034){
return (function (_30102){var self__ = this;
var _30102__$1 = this;return self__.meta30101;
});})(owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034))
;
clustermap.components.filters.external_filter.t30100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034){
return (function (_30102,meta30101__$1){var self__ = this;
var _30102__$1 = this;return (new clustermap.components.filters.external_filter.t30100(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.constructor30027,self__.map30029,self__.output_schema30031,self__.set_filter_for_url,self__.G__30035,self__.filter_spec,self__.input_checker30033,self__.input_schema30032,self__.validate__6034__auto__,self__.output_checker30034,self__.id,self__.map30030,self__.ufv__,meta30101__$1));
});})(owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034))
;
clustermap.components.filters.external_filter.__GT_t30100 = ((function (owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034){
return (function __GT_t30100(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,constructor30027__$1,map30029__$1,output_schema30031__$1,set_filter_for_url__$1,G__30035__$1,filter_spec__$1,input_checker30033__$1,input_schema30032__$1,validate__6034__auto____$1,output_checker30034__$1,id__$1,map30030__$1,ufv____$1,meta30101){return (new clustermap.components.filters.external_filter.t30100(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,constructor30027__$1,map30029__$1,output_schema30031__$1,set_filter_for_url__$1,G__30035__$1,filter_spec__$1,input_checker30033__$1,input_schema30032__$1,validate__6034__auto____$1,output_checker30034__$1,id__$1,map30030__$1,ufv____$1,meta30101));
});})(owner,component_filter_rq_chan,map30030,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034))
;
}
return (new clustermap.components.filters.external_filter.t30100(component_spec,component_filter_rq_chan,owner,data,constructor30027,map30029,output_schema30031,set_filter_for_url,G__30035,filter_spec,input_checker30033,input_schema30032,validate__6034__auto__,output_checker30034,id,map30030,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30187 = output_checker30034.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30187))
{var error__6036__auto___30188 = temp__4126__auto___30187;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30027","constructor30027",1192547846,null),cljs.core.pr_str.call(null,error__6036__auto___30188)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30188,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30031,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30031,input_schema30032,input_checker30033,output_checker30034))
,schema.core.make_fn_schema.call(null,output_schema30031,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30032], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___30167){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30026,p__30164){var vec__30166 = p__30164;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30166,(0),null);return component_fnk__7881__auto___30167.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30026,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30026,var_args){
var p__30164 = null;if (arguments.length > 2) {
  p__30164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30026,p__30164);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__30189){
var data__7882__auto__ = cljs.core.first(arglist__30189);
arglist__30189 = cljs.core.next(arglist__30189);
var owner30026 = cljs.core.first(arglist__30189);
var p__30164 = cljs.core.rest(arglist__30189);
return external_filter_component__delegate(data__7882__auto__,owner30026,p__30164);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___30167))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30028){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30028);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30028){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
