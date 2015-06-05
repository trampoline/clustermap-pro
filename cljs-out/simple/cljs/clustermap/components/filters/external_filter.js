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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29696 = schema.core.Any;var input_schema29697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29698 = schema.core.checker.call(null,input_schema29697);var output_checker29699 = schema.core.checker.call(null,output_schema29696);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29696,input_schema29697,input_checker29698,output_checker29699){
return (function render_STAR_(G__29700){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29703 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29700], null);var temp__4126__auto___29704 = input_checker29698.call(null,args__6035__auto___29703);if(cljs.core.truth_(temp__4126__auto___29704))
{var error__6036__auto___29705 = temp__4126__auto___29704;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29705)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29705,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29703,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29697,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29700;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs29702 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29696,input_schema29697,input_checker29698,output_checker29699){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29696,input_schema29697,input_checker29698,output_checker29699))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs29702))?sablono.interpreter.attributes.call(null,attrs29702):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29702))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29702)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29706 = output_checker29699.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29706))
{var error__6036__auto___29707 = temp__4126__auto___29706;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29707)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29707,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29696,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29696,input_schema29697,input_checker29698,output_checker29699))
,schema.core.make_fn_schema.call(null,output_schema29696,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29697], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___29849 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29713 = schema.core.Any;var input_schema29714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29711","map29711",-1587993077,null))], null);var input_checker29715 = schema.core.checker.call(null,input_schema29714);var output_checker29716 = schema.core.checker.call(null,output_schema29713);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716){
return (function constructor29709(G__29717){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29850 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29717], null);var temp__4126__auto___29851 = input_checker29715.call(null,args__6035__auto___29850);if(cljs.core.truth_(temp__4126__auto___29851))
{var error__6036__auto___29852 = temp__4126__auto___29851;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29709","constructor29709",879590383,null),cljs.core.pr_str.call(null,error__6036__auto___29852)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29852,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29850,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29714,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29711 = G__29717;while(true){
if(cljs.core.map_QMARK_.call(null,map29711))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29711)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29711,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29712 = plumbing.fnk.schema.safe_get.call(null,map29711,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29712,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29711,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t29782 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t29782 = (function (component_spec,component_filter_rq_chan,G__29717,output_checker29716,owner,data,map29711,set_filter_for_url,filter_spec,constructor29709,input_schema29714,map29712,input_checker29715,validate__6034__auto__,id,ufv__,output_schema29713,meta29783){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.G__29717 = G__29717;
this.output_checker29716 = output_checker29716;
this.owner = owner;
this.data = data;
this.map29711 = map29711;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.constructor29709 = constructor29709;
this.input_schema29714 = input_schema29714;
this.map29712 = map29712;
this.input_checker29715 = input_checker29715;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.output_schema29713 = output_schema29713;
this.meta29783 = meta29783;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t29782.cljs$lang$type = true;
clustermap.components.filters.external_filter.t29782.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t29782";
clustermap.components.filters.external_filter.t29782.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t29782");
});})(owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716))
;
clustermap.components.filters.external_filter.t29782.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t29782.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716))
;
clustermap.components.filters.external_filter.t29782.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t29782.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716))
;
clustermap.components.filters.external_filter.t29782.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t29782.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716){
return (function (state_29820){var state_val_29821 = (state_29820[(1)]);if((state_val_29821 === (7)))
{var inst_29811 = (state_29820[(2)]);var state_29820__$1 = state_29820;if(cljs.core.truth_(inst_29811))
{var statearr_29822_29853 = state_29820__$1;(statearr_29822_29853[(1)] = (11));
} else
{var statearr_29823_29854 = state_29820__$1;(statearr_29823_29854[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29821 === (1)))
{var state_29820__$1 = state_29820;var statearr_29824_29855 = state_29820__$1;(statearr_29824_29855[(2)] = null);
(statearr_29824_29855[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29821 === (4)))
{var inst_29787 = (state_29820[(7)]);var inst_29787__$1 = (state_29820[(2)]);var state_29820__$1 = (function (){var statearr_29825 = state_29820;(statearr_29825[(7)] = inst_29787__$1);
return statearr_29825;
})();if(cljs.core.truth_(inst_29787__$1))
{var statearr_29826_29856 = state_29820__$1;(statearr_29826_29856[(1)] = (5));
} else
{var statearr_29827_29857 = state_29820__$1;(statearr_29827_29857[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29821 === (13)))
{var inst_29816 = (state_29820[(2)]);var state_29820__$1 = state_29820;var statearr_29828_29858 = state_29820__$1;(statearr_29828_29858[(2)] = inst_29816);
(statearr_29828_29858[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29821 === (6)))
{var state_29820__$1 = state_29820;var statearr_29829_29859 = state_29820__$1;(statearr_29829_29859[(2)] = null);
(statearr_29829_29859[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29821 === (3)))
{var inst_29818 = (state_29820[(2)]);var state_29820__$1 = state_29820;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29820__$1,inst_29818);
} else
{if((state_val_29821 === (12)))
{var state_29820__$1 = state_29820;var statearr_29830_29860 = state_29820__$1;(statearr_29830_29860[(2)] = null);
(statearr_29830_29860[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29821 === (2)))
{var state_29820__$1 = state_29820;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29820__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29821 === (11)))
{var state_29820__$1 = state_29820;var statearr_29831_29861 = state_29820__$1;(statearr_29831_29861[(2)] = null);
(statearr_29831_29861[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29821 === (9)))
{var inst_29793 = (state_29820[(8)]);var state_29820__$1 = state_29820;var statearr_29832_29862 = state_29820__$1;(statearr_29832_29862[(2)] = inst_29793);
(statearr_29832_29862[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29821 === (5)))
{var inst_29787 = (state_29820[(7)]);var inst_29793 = (state_29820[(8)]);var inst_29790 = cljs.core.nth.call(null,inst_29787,(0),null);var inst_29791 = cljs.core.nth.call(null,inst_29787,(1),null);var inst_29793__$1 = om.core.get_props.call(null,self__.owner);var inst_29794 = cljs.core.seq_QMARK_.call(null,inst_29793__$1);var state_29820__$1 = (function (){var statearr_29833 = state_29820;(statearr_29833[(9)] = inst_29790);
(statearr_29833[(10)] = inst_29791);
(statearr_29833[(8)] = inst_29793__$1);
return statearr_29833;
})();if(inst_29794)
{var statearr_29834_29863 = state_29820__$1;(statearr_29834_29863[(1)] = (8));
} else
{var statearr_29835_29864 = state_29820__$1;(statearr_29835_29864[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29821 === (10)))
{var inst_29790 = (state_29820[(9)]);var inst_29791 = (state_29820[(10)]);var inst_29787 = (state_29820[(7)]);var inst_29799 = (state_29820[(2)]);var inst_29800 = cljs.core.get.call(null,inst_29799,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29801 = cljs.core.get.call(null,inst_29799,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29802 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29803 = ["EXTERNAL-FILTER-RQ",self__.id,inst_29791];var inst_29804 = (new cljs.core.PersistentVector(null,3,(5),inst_29802,inst_29803,null));var inst_29805 = cljs.core.clj__GT_js.call(null,inst_29804);var inst_29806 = console.log(inst_29805);var inst_29807 = (function (){var filter_spec__$2 = inst_29801;var component_spec__$2 = inst_29800;var map__29792 = inst_29799;var rq = inst_29791;var component_id = inst_29790;var vec__29789 = inst_29787;var temp__4126__auto__ = inst_29787;return ((function (filter_spec__$2,component_spec__$2,map__29792,rq,component_id,vec__29789,temp__4126__auto__,inst_29790,inst_29791,inst_29787,inst_29799,inst_29800,inst_29801,inst_29802,inst_29803,inst_29804,inst_29805,inst_29806,state_val_29821,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__29792,rq,component_id,vec__29789,temp__4126__auto__,inst_29790,inst_29791,inst_29787,inst_29799,inst_29800,inst_29801,inst_29802,inst_29803,inst_29804,inst_29805,inst_29806,state_val_29821,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716))
})();var inst_29808 = self__.set_filter_for_url.call(null,inst_29791,inst_29807);var state_29820__$1 = (function (){var statearr_29836 = state_29820;(statearr_29836[(11)] = inst_29808);
(statearr_29836[(12)] = inst_29806);
return statearr_29836;
})();var statearr_29837_29865 = state_29820__$1;(statearr_29837_29865[(2)] = true);
(statearr_29837_29865[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29821 === (8)))
{var inst_29793 = (state_29820[(8)]);var inst_29796 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29793);var state_29820__$1 = state_29820;var statearr_29838_29866 = state_29820__$1;(statearr_29838_29866[(2)] = inst_29796);
(statearr_29838_29866[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29842 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29842[(0)] = state_machine__11462__auto__);
(statearr_29842[(1)] = (1));
return statearr_29842;
});
var state_machine__11462__auto____1 = (function (state_29820){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29820);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29843){if((e29843 instanceof Object))
{var ex__11465__auto__ = e29843;var statearr_29844_29867 = state_29820;(statearr_29844_29867[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29820);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29843;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29868 = state_29820;
state_29820 = G__29868;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29820){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716))
})();var state__11519__auto__ = (function (){var statearr_29845 = f__11518__auto__.call(null);(statearr_29845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716))
;
clustermap.components.filters.external_filter.t29782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716){
return (function (_29784){var self__ = this;
var _29784__$1 = this;return self__.meta29783;
});})(owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716))
;
clustermap.components.filters.external_filter.t29782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716){
return (function (_29784,meta29783__$1){var self__ = this;
var _29784__$1 = this;return (new clustermap.components.filters.external_filter.t29782(self__.component_spec,self__.component_filter_rq_chan,self__.G__29717,self__.output_checker29716,self__.owner,self__.data,self__.map29711,self__.set_filter_for_url,self__.filter_spec,self__.constructor29709,self__.input_schema29714,self__.map29712,self__.input_checker29715,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.output_schema29713,meta29783__$1));
});})(owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716))
;
clustermap.components.filters.external_filter.__GT_t29782 = ((function (owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716){
return (function __GT_t29782(component_spec__$1,component_filter_rq_chan__$1,G__29717__$1,output_checker29716__$1,owner__$1,data__$1,map29711__$1,set_filter_for_url__$1,filter_spec__$1,constructor29709__$1,input_schema29714__$1,map29712__$1,input_checker29715__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_schema29713__$1,meta29783){return (new clustermap.components.filters.external_filter.t29782(component_spec__$1,component_filter_rq_chan__$1,G__29717__$1,output_checker29716__$1,owner__$1,data__$1,map29711__$1,set_filter_for_url__$1,filter_spec__$1,constructor29709__$1,input_schema29714__$1,map29712__$1,input_checker29715__$1,validate__6034__auto____$1,id__$1,ufv____$1,output_schema29713__$1,meta29783));
});})(owner,component_filter_rq_chan,map29712,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716))
;
}
return (new clustermap.components.filters.external_filter.t29782(component_spec,component_filter_rq_chan,G__29717,output_checker29716,owner,data,map29711,set_filter_for_url,filter_spec,constructor29709,input_schema29714,map29712,input_checker29715,validate__6034__auto__,id,ufv__,output_schema29713,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29869 = output_checker29716.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29869))
{var error__6036__auto___29870 = temp__4126__auto___29869;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29709","constructor29709",879590383,null),cljs.core.pr_str.call(null,error__6036__auto___29870)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29870,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29713,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29713,input_schema29714,input_checker29715,output_checker29716))
,schema.core.make_fn_schema.call(null,output_schema29713,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29714], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___29849){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner29708,p__29846){var vec__29848 = p__29846;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29848,(0),null);return component_fnk__7881__auto___29849.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29708,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner29708,var_args){
var p__29846 = null;if (arguments.length > 2) {
  p__29846 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner29708,p__29846);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__29871){
var data__7882__auto__ = cljs.core.first(arglist__29871);
arglist__29871 = cljs.core.next(arglist__29871);
var owner29708 = cljs.core.first(arglist__29871);
var p__29846 = cljs.core.rest(arglist__29871);
return external_filter_component__delegate(data__7882__auto__,owner29708,p__29846);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___29849))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m29710){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m29710);
});
__GT_external_filter_component = function(cursor__7850__auto__,m29710){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m29710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
