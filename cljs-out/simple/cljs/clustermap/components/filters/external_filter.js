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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29636 = schema.core.Any;var input_schema29637 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29638 = schema.core.checker.call(null,input_schema29637);var output_checker29639 = schema.core.checker.call(null,output_schema29636);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29636,input_schema29637,input_checker29638,output_checker29639){
return (function render_STAR_(G__29640){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29640], null);var temp__4126__auto___29644 = input_checker29638.call(null,args__6035__auto___29643);if(cljs.core.truth_(temp__4126__auto___29644))
{var error__6036__auto___29645 = temp__4126__auto___29644;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29645)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29645,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29643,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29637,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29640;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.ul({"className": "filter-items"},(function (){var attrs29642 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29636,input_schema29637,input_checker29638,output_checker29639){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29636,input_schema29637,input_checker29638,output_checker29639))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs29642))?sablono.interpreter.attributes.call(null,attrs29642):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29642))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29642)], null))));
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29646 = output_checker29639.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29646))
{var error__6036__auto___29647 = temp__4126__auto___29646;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29647)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29647,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29636,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29636,input_schema29637,input_checker29638,output_checker29639))
,schema.core.make_fn_schema.call(null,output_schema29636,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29637], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___29789 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29653 = schema.core.Any;var input_schema29654 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29651","map29651",969431954,null))], null);var input_checker29655 = schema.core.checker.call(null,input_schema29654);var output_checker29656 = schema.core.checker.call(null,output_schema29653);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656){
return (function constructor29649(G__29657){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29790 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29657], null);var temp__4126__auto___29791 = input_checker29655.call(null,args__6035__auto___29790);if(cljs.core.truth_(temp__4126__auto___29791))
{var error__6036__auto___29792 = temp__4126__auto___29791;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29649","constructor29649",889866909,null),cljs.core.pr_str.call(null,error__6036__auto___29792)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29792,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29790,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29654,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29651 = G__29657;while(true){
if(cljs.core.map_QMARK_.call(null,map29651))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29651)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29651,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29652 = plumbing.fnk.schema.safe_get.call(null,map29651,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29652,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29651,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t29722 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t29722 = (function (component_spec,component_filter_rq_chan,owner,data,input_checker29655,set_filter_for_url,filter_spec,output_schema29653,map29651,output_checker29656,validate__6034__auto__,id,ufv__,constructor29649,G__29657,map29652,input_schema29654,meta29723){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.input_checker29655 = input_checker29655;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.output_schema29653 = output_schema29653;
this.map29651 = map29651;
this.output_checker29656 = output_checker29656;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.ufv__ = ufv__;
this.constructor29649 = constructor29649;
this.G__29657 = G__29657;
this.map29652 = map29652;
this.input_schema29654 = input_schema29654;
this.meta29723 = meta29723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t29722.cljs$lang$type = true;
clustermap.components.filters.external_filter.t29722.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t29722";
clustermap.components.filters.external_filter.t29722.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t29722");
});})(owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656))
;
clustermap.components.filters.external_filter.t29722.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t29722.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656))
;
clustermap.components.filters.external_filter.t29722.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t29722.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656))
;
clustermap.components.filters.external_filter.t29722.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t29722.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656){
return (function (_){var self__ = this;
var ___$1 = this;var c__11297__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656){
return (function (){var f__11298__auto__ = (function (){var switch__11241__auto__ = ((function (c__11297__auto__,___$1,owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656){
return (function (state_29760){var state_val_29761 = (state_29760[(1)]);if((state_val_29761 === (7)))
{var inst_29751 = (state_29760[(2)]);var state_29760__$1 = state_29760;if(cljs.core.truth_(inst_29751))
{var statearr_29762_29793 = state_29760__$1;(statearr_29762_29793[(1)] = (11));
} else
{var statearr_29763_29794 = state_29760__$1;(statearr_29763_29794[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29761 === (1)))
{var state_29760__$1 = state_29760;var statearr_29764_29795 = state_29760__$1;(statearr_29764_29795[(2)] = null);
(statearr_29764_29795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29761 === (4)))
{var inst_29727 = (state_29760[(7)]);var inst_29727__$1 = (state_29760[(2)]);var state_29760__$1 = (function (){var statearr_29765 = state_29760;(statearr_29765[(7)] = inst_29727__$1);
return statearr_29765;
})();if(cljs.core.truth_(inst_29727__$1))
{var statearr_29766_29796 = state_29760__$1;(statearr_29766_29796[(1)] = (5));
} else
{var statearr_29767_29797 = state_29760__$1;(statearr_29767_29797[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29761 === (13)))
{var inst_29756 = (state_29760[(2)]);var state_29760__$1 = state_29760;var statearr_29768_29798 = state_29760__$1;(statearr_29768_29798[(2)] = inst_29756);
(statearr_29768_29798[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29761 === (6)))
{var state_29760__$1 = state_29760;var statearr_29769_29799 = state_29760__$1;(statearr_29769_29799[(2)] = null);
(statearr_29769_29799[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29761 === (3)))
{var inst_29758 = (state_29760[(2)]);var state_29760__$1 = state_29760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29760__$1,inst_29758);
} else
{if((state_val_29761 === (12)))
{var state_29760__$1 = state_29760;var statearr_29770_29800 = state_29760__$1;(statearr_29770_29800[(2)] = null);
(statearr_29770_29800[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29761 === (2)))
{var state_29760__$1 = state_29760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29760__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29761 === (11)))
{var state_29760__$1 = state_29760;var statearr_29771_29801 = state_29760__$1;(statearr_29771_29801[(2)] = null);
(statearr_29771_29801[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29761 === (9)))
{var inst_29733 = (state_29760[(8)]);var state_29760__$1 = state_29760;var statearr_29772_29802 = state_29760__$1;(statearr_29772_29802[(2)] = inst_29733);
(statearr_29772_29802[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29761 === (5)))
{var inst_29727 = (state_29760[(7)]);var inst_29733 = (state_29760[(8)]);var inst_29730 = cljs.core.nth.call(null,inst_29727,(0),null);var inst_29731 = cljs.core.nth.call(null,inst_29727,(1),null);var inst_29733__$1 = om.core.get_props.call(null,self__.owner);var inst_29734 = cljs.core.seq_QMARK_.call(null,inst_29733__$1);var state_29760__$1 = (function (){var statearr_29773 = state_29760;(statearr_29773[(9)] = inst_29731);
(statearr_29773[(10)] = inst_29730);
(statearr_29773[(8)] = inst_29733__$1);
return statearr_29773;
})();if(inst_29734)
{var statearr_29774_29803 = state_29760__$1;(statearr_29774_29803[(1)] = (8));
} else
{var statearr_29775_29804 = state_29760__$1;(statearr_29775_29804[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29761 === (10)))
{var inst_29731 = (state_29760[(9)]);var inst_29730 = (state_29760[(10)]);var inst_29727 = (state_29760[(7)]);var inst_29739 = (state_29760[(2)]);var inst_29740 = cljs.core.get.call(null,inst_29739,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29741 = cljs.core.get.call(null,inst_29739,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29742 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29743 = ["EXTERNAL-FILTER-RQ",self__.id,inst_29731];var inst_29744 = (new cljs.core.PersistentVector(null,3,(5),inst_29742,inst_29743,null));var inst_29745 = cljs.core.clj__GT_js.call(null,inst_29744);var inst_29746 = console.log(inst_29745);var inst_29747 = (function (){var filter_spec__$2 = inst_29741;var component_spec__$2 = inst_29740;var map__29732 = inst_29739;var rq = inst_29731;var component_id = inst_29730;var vec__29729 = inst_29727;var temp__4126__auto__ = inst_29727;return ((function (filter_spec__$2,component_spec__$2,map__29732,rq,component_id,vec__29729,temp__4126__auto__,inst_29731,inst_29730,inst_29727,inst_29739,inst_29740,inst_29741,inst_29742,inst_29743,inst_29744,inst_29745,inst_29746,state_val_29761,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__29732,rq,component_id,vec__29729,temp__4126__auto__,inst_29731,inst_29730,inst_29727,inst_29739,inst_29740,inst_29741,inst_29742,inst_29743,inst_29744,inst_29745,inst_29746,state_val_29761,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656))
})();var inst_29748 = self__.set_filter_for_url.call(null,inst_29731,inst_29747);var state_29760__$1 = (function (){var statearr_29776 = state_29760;(statearr_29776[(11)] = inst_29746);
(statearr_29776[(12)] = inst_29748);
return statearr_29776;
})();var statearr_29777_29805 = state_29760__$1;(statearr_29777_29805[(2)] = true);
(statearr_29777_29805[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29761 === (8)))
{var inst_29733 = (state_29760[(8)]);var inst_29736 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29733);var state_29760__$1 = state_29760;var statearr_29778_29806 = state_29760__$1;(statearr_29778_29806[(2)] = inst_29736);
(statearr_29778_29806[(1)] = (10));
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
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656))
;return ((function (switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656){
return (function() {
var state_machine__11242__auto__ = null;
var state_machine__11242__auto____0 = (function (){var statearr_29782 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29782[(0)] = state_machine__11242__auto__);
(statearr_29782[(1)] = (1));
return statearr_29782;
});
var state_machine__11242__auto____1 = (function (state_29760){while(true){
var ret_value__11243__auto__ = (function (){try{while(true){
var result__11244__auto__ = switch__11241__auto__.call(null,state_29760);if(cljs.core.keyword_identical_QMARK_.call(null,result__11244__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11244__auto__;
}
break;
}
}catch (e29783){if((e29783 instanceof Object))
{var ex__11245__auto__ = e29783;var statearr_29784_29807 = state_29760;(statearr_29784_29807[(5)] = ex__11245__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29760);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29783;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11243__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29808 = state_29760;
state_29760 = G__29808;
continue;
}
} else
{return ret_value__11243__auto__;
}
break;
}
});
state_machine__11242__auto__ = function(state_29760){
switch(arguments.length){
case 0:
return state_machine__11242__auto____0.call(this);
case 1:
return state_machine__11242__auto____1.call(this,state_29760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11242__auto____0;
state_machine__11242__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11242__auto____1;
return state_machine__11242__auto__;
})()
;})(switch__11241__auto__,c__11297__auto__,___$1,owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656))
})();var state__11299__auto__ = (function (){var statearr_29785 = f__11298__auto__.call(null);(statearr_29785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11297__auto__);
return statearr_29785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11299__auto__);
});})(c__11297__auto__,___$1,owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656))
);
return c__11297__auto__;
});})(owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656))
;
clustermap.components.filters.external_filter.t29722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656){
return (function (_29724){var self__ = this;
var _29724__$1 = this;return self__.meta29723;
});})(owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656))
;
clustermap.components.filters.external_filter.t29722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656){
return (function (_29724,meta29723__$1){var self__ = this;
var _29724__$1 = this;return (new clustermap.components.filters.external_filter.t29722(self__.component_spec,self__.component_filter_rq_chan,self__.owner,self__.data,self__.input_checker29655,self__.set_filter_for_url,self__.filter_spec,self__.output_schema29653,self__.map29651,self__.output_checker29656,self__.validate__6034__auto__,self__.id,self__.ufv__,self__.constructor29649,self__.G__29657,self__.map29652,self__.input_schema29654,meta29723__$1));
});})(owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656))
;
clustermap.components.filters.external_filter.__GT_t29722 = ((function (owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656){
return (function __GT_t29722(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,input_checker29655__$1,set_filter_for_url__$1,filter_spec__$1,output_schema29653__$1,map29651__$1,output_checker29656__$1,validate__6034__auto____$1,id__$1,ufv____$1,constructor29649__$1,G__29657__$1,map29652__$1,input_schema29654__$1,meta29723){return (new clustermap.components.filters.external_filter.t29722(component_spec__$1,component_filter_rq_chan__$1,owner__$1,data__$1,input_checker29655__$1,set_filter_for_url__$1,filter_spec__$1,output_schema29653__$1,map29651__$1,output_checker29656__$1,validate__6034__auto____$1,id__$1,ufv____$1,constructor29649__$1,G__29657__$1,map29652__$1,input_schema29654__$1,meta29723));
});})(owner,component_filter_rq_chan,map29652,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656))
;
}
return (new clustermap.components.filters.external_filter.t29722(component_spec,component_filter_rq_chan,owner,data,input_checker29655,set_filter_for_url,filter_spec,output_schema29653,map29651,output_checker29656,validate__6034__auto__,id,ufv__,constructor29649,G__29657,map29652,input_schema29654,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29809 = output_checker29656.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29809))
{var error__6036__auto___29810 = temp__4126__auto___29809;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29649","constructor29649",889866909,null),cljs.core.pr_str.call(null,error__6036__auto___29810)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29810,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29653,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29653,input_schema29654,input_checker29655,output_checker29656))
,schema.core.make_fn_schema.call(null,output_schema29653,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29654], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___29789){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner29648,p__29786){var vec__29788 = p__29786;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29788,(0),null);return component_fnk__7881__auto___29789.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29648,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner29648,var_args){
var p__29786 = null;if (arguments.length > 2) {
  p__29786 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner29648,p__29786);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__29811){
var data__7882__auto__ = cljs.core.first(arglist__29811);
arglist__29811 = cljs.core.next(arglist__29811);
var owner29648 = cljs.core.first(arglist__29811);
var p__29786 = cljs.core.rest(arglist__29811);
return external_filter_component__delegate(data__7882__auto__,owner29648,p__29786);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___29789))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m29650){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m29650);
});
__GT_external_filter_component = function(cursor__7850__auto__,m29650){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m29650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
