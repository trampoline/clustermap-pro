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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29566 = schema.core.Any;var input_schema29567 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker29568 = schema.core.checker.call(null,input_schema29567);var output_checker29569 = schema.core.checker.call(null,output_schema29566);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29566,input_schema29567,input_checker29568,output_checker29569){
return (function render_STAR_(G__29570){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29570], null);var temp__4126__auto___29574 = input_checker29568.call(null,args__6035__auto___29573);if(cljs.core.truth_(temp__4126__auto___29574))
{var error__6036__auto___29575 = temp__4126__auto___29574;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29575)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29575,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29573,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29567,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__29570;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.ul({"className": "filter-items"},(function (){var attrs29572 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29566,input_schema29567,input_checker29568,output_checker29569){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema29566,input_schema29567,input_checker29568,output_checker29569))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs29572))?sablono.interpreter.attributes.call(null,attrs29572):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29572))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29572)], null))));
})());
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29576 = output_checker29569.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29576))
{var error__6036__auto___29577 = temp__4126__auto___29576;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___29577)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29577,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29566,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29566,input_schema29567,input_checker29568,output_checker29569))
,schema.core.make_fn_schema.call(null,output_schema29566,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29567], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___29719 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29583 = schema.core.Any;var input_schema29584 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map29581","map29581",-338716989,null))], null);var input_checker29585 = schema.core.checker.call(null,input_schema29584);var output_checker29586 = schema.core.checker.call(null,output_schema29583);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function constructor29579(G__29587){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29587], null);var temp__4126__auto___29721 = input_checker29585.call(null,args__6035__auto___29720);if(cljs.core.truth_(temp__4126__auto___29721))
{var error__6036__auto___29722 = temp__4126__auto___29721;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29579","constructor29579",-85980806,null),cljs.core.pr_str.call(null,error__6036__auto___29722)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29722,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29720,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29584,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29581 = G__29587;while(true){
if(cljs.core.map_QMARK_.call(null,map29581))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29581)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map29581,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map29582 = plumbing.fnk.schema.safe_get.call(null,map29581,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map29582,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29581,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t29652 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t29652 = (function (component_spec,component_filter_rq_chan,map29581,owner,map29582,data,input_checker29585,set_filter_for_url,filter_spec,input_schema29584,output_schema29583,validate__6034__auto__,constructor29579,id,G__29587,output_checker29586,ufv__,meta29653){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.map29581 = map29581;
this.owner = owner;
this.map29582 = map29582;
this.data = data;
this.input_checker29585 = input_checker29585;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.input_schema29584 = input_schema29584;
this.output_schema29583 = output_schema29583;
this.validate__6034__auto__ = validate__6034__auto__;
this.constructor29579 = constructor29579;
this.id = id;
this.G__29587 = G__29587;
this.output_checker29586 = output_checker29586;
this.ufv__ = ufv__;
this.meta29653 = meta29653;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t29652.cljs$lang$type = true;
clustermap.components.filters.external_filter.t29652.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t29652";
clustermap.components.filters.external_filter.t29652.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t29652");
});})(owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
;
clustermap.components.filters.external_filter.t29652.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t29652.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
;
clustermap.components.filters.external_filter.t29652.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t29652.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
;
clustermap.components.filters.external_filter.t29652.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t29652.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function (_){var self__ = this;
var ___$1 = this;var c__11517__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function (){var f__11518__auto__ = (function (){var switch__11461__auto__ = ((function (c__11517__auto__,___$1,owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function (state_29690){var state_val_29691 = (state_29690[(1)]);if((state_val_29691 === (7)))
{var inst_29681 = (state_29690[(2)]);var state_29690__$1 = state_29690;if(cljs.core.truth_(inst_29681))
{var statearr_29692_29723 = state_29690__$1;(statearr_29692_29723[(1)] = (11));
} else
{var statearr_29693_29724 = state_29690__$1;(statearr_29693_29724[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29691 === (1)))
{var state_29690__$1 = state_29690;var statearr_29694_29725 = state_29690__$1;(statearr_29694_29725[(2)] = null);
(statearr_29694_29725[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29691 === (4)))
{var inst_29657 = (state_29690[(7)]);var inst_29657__$1 = (state_29690[(2)]);var state_29690__$1 = (function (){var statearr_29695 = state_29690;(statearr_29695[(7)] = inst_29657__$1);
return statearr_29695;
})();if(cljs.core.truth_(inst_29657__$1))
{var statearr_29696_29726 = state_29690__$1;(statearr_29696_29726[(1)] = (5));
} else
{var statearr_29697_29727 = state_29690__$1;(statearr_29697_29727[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29691 === (13)))
{var inst_29686 = (state_29690[(2)]);var state_29690__$1 = state_29690;var statearr_29698_29728 = state_29690__$1;(statearr_29698_29728[(2)] = inst_29686);
(statearr_29698_29728[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29691 === (6)))
{var state_29690__$1 = state_29690;var statearr_29699_29729 = state_29690__$1;(statearr_29699_29729[(2)] = null);
(statearr_29699_29729[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29691 === (3)))
{var inst_29688 = (state_29690[(2)]);var state_29690__$1 = state_29690;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29690__$1,inst_29688);
} else
{if((state_val_29691 === (12)))
{var state_29690__$1 = state_29690;var statearr_29700_29730 = state_29690__$1;(statearr_29700_29730[(2)] = null);
(statearr_29700_29730[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29691 === (2)))
{var state_29690__$1 = state_29690;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29690__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_29691 === (11)))
{var state_29690__$1 = state_29690;var statearr_29701_29731 = state_29690__$1;(statearr_29701_29731[(2)] = null);
(statearr_29701_29731[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29691 === (9)))
{var inst_29663 = (state_29690[(8)]);var state_29690__$1 = state_29690;var statearr_29702_29732 = state_29690__$1;(statearr_29702_29732[(2)] = inst_29663);
(statearr_29702_29732[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29691 === (5)))
{var inst_29657 = (state_29690[(7)]);var inst_29663 = (state_29690[(8)]);var inst_29660 = cljs.core.nth.call(null,inst_29657,(0),null);var inst_29661 = cljs.core.nth.call(null,inst_29657,(1),null);var inst_29663__$1 = om.core.get_props.call(null,self__.owner);var inst_29664 = cljs.core.seq_QMARK_.call(null,inst_29663__$1);var state_29690__$1 = (function (){var statearr_29703 = state_29690;(statearr_29703[(9)] = inst_29660);
(statearr_29703[(10)] = inst_29661);
(statearr_29703[(8)] = inst_29663__$1);
return statearr_29703;
})();if(inst_29664)
{var statearr_29704_29733 = state_29690__$1;(statearr_29704_29733[(1)] = (8));
} else
{var statearr_29705_29734 = state_29690__$1;(statearr_29705_29734[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29691 === (10)))
{var inst_29660 = (state_29690[(9)]);var inst_29657 = (state_29690[(7)]);var inst_29661 = (state_29690[(10)]);var inst_29669 = (state_29690[(2)]);var inst_29670 = cljs.core.get.call(null,inst_29669,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_29671 = cljs.core.get.call(null,inst_29669,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_29672 = cljs.core.PersistentVector.EMPTY_NODE;var inst_29673 = ["EXTERNAL-FILTER-RQ",self__.id,inst_29661];var inst_29674 = (new cljs.core.PersistentVector(null,3,(5),inst_29672,inst_29673,null));var inst_29675 = cljs.core.clj__GT_js.call(null,inst_29674);var inst_29676 = console.log(inst_29675);var inst_29677 = (function (){var filter_spec__$2 = inst_29671;var component_spec__$2 = inst_29670;var map__29662 = inst_29669;var rq = inst_29661;var component_id = inst_29660;var vec__29659 = inst_29657;var temp__4126__auto__ = inst_29657;return ((function (filter_spec__$2,component_spec__$2,map__29662,rq,component_id,vec__29659,temp__4126__auto__,inst_29660,inst_29657,inst_29661,inst_29669,inst_29670,inst_29671,inst_29672,inst_29673,inst_29674,inst_29675,inst_29676,state_val_29691,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__29662,rq,component_id,vec__29659,temp__4126__auto__,inst_29660,inst_29657,inst_29661,inst_29669,inst_29670,inst_29671,inst_29672,inst_29673,inst_29674,inst_29675,inst_29676,state_val_29691,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
})();var inst_29678 = self__.set_filter_for_url.call(null,inst_29661,inst_29677);var state_29690__$1 = (function (){var statearr_29706 = state_29690;(statearr_29706[(11)] = inst_29676);
(statearr_29706[(12)] = inst_29678);
return statearr_29706;
})();var statearr_29707_29735 = state_29690__$1;(statearr_29707_29735[(2)] = true);
(statearr_29707_29735[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29691 === (8)))
{var inst_29663 = (state_29690[(8)]);var inst_29666 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29663);var state_29690__$1 = state_29690;var statearr_29708_29736 = state_29690__$1;(statearr_29708_29736[(2)] = inst_29666);
(statearr_29708_29736[(1)] = (10));
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
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
;return ((function (switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function() {
var state_machine__11462__auto__ = null;
var state_machine__11462__auto____0 = (function (){var statearr_29712 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29712[(0)] = state_machine__11462__auto__);
(statearr_29712[(1)] = (1));
return statearr_29712;
});
var state_machine__11462__auto____1 = (function (state_29690){while(true){
var ret_value__11463__auto__ = (function (){try{while(true){
var result__11464__auto__ = switch__11461__auto__.call(null,state_29690);if(cljs.core.keyword_identical_QMARK_.call(null,result__11464__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11464__auto__;
}
break;
}
}catch (e29713){if((e29713 instanceof Object))
{var ex__11465__auto__ = e29713;var statearr_29714_29737 = state_29690;(statearr_29714_29737[(5)] = ex__11465__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29690);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29713;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29738 = state_29690;
state_29690 = G__29738;
continue;
}
} else
{return ret_value__11463__auto__;
}
break;
}
});
state_machine__11462__auto__ = function(state_29690){
switch(arguments.length){
case 0:
return state_machine__11462__auto____0.call(this);
case 1:
return state_machine__11462__auto____1.call(this,state_29690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11462__auto____0;
state_machine__11462__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11462__auto____1;
return state_machine__11462__auto__;
})()
;})(switch__11461__auto__,c__11517__auto__,___$1,owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
})();var state__11519__auto__ = (function (){var statearr_29715 = f__11518__auto__.call(null);(statearr_29715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11517__auto__);
return statearr_29715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11519__auto__);
});})(c__11517__auto__,___$1,owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
);
return c__11517__auto__;
});})(owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
;
clustermap.components.filters.external_filter.t29652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function (_29654){var self__ = this;
var _29654__$1 = this;return self__.meta29653;
});})(owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
;
clustermap.components.filters.external_filter.t29652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function (_29654,meta29653__$1){var self__ = this;
var _29654__$1 = this;return (new clustermap.components.filters.external_filter.t29652(self__.component_spec,self__.component_filter_rq_chan,self__.map29581,self__.owner,self__.map29582,self__.data,self__.input_checker29585,self__.set_filter_for_url,self__.filter_spec,self__.input_schema29584,self__.output_schema29583,self__.validate__6034__auto__,self__.constructor29579,self__.id,self__.G__29587,self__.output_checker29586,self__.ufv__,meta29653__$1));
});})(owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
;
clustermap.components.filters.external_filter.__GT_t29652 = ((function (owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586){
return (function __GT_t29652(component_spec__$1,component_filter_rq_chan__$1,map29581__$1,owner__$1,map29582__$1,data__$1,input_checker29585__$1,set_filter_for_url__$1,filter_spec__$1,input_schema29584__$1,output_schema29583__$1,validate__6034__auto____$1,constructor29579__$1,id__$1,G__29587__$1,output_checker29586__$1,ufv____$1,meta29653){return (new clustermap.components.filters.external_filter.t29652(component_spec__$1,component_filter_rq_chan__$1,map29581__$1,owner__$1,map29582__$1,data__$1,input_checker29585__$1,set_filter_for_url__$1,filter_spec__$1,input_schema29584__$1,output_schema29583__$1,validate__6034__auto____$1,constructor29579__$1,id__$1,G__29587__$1,output_checker29586__$1,ufv____$1,meta29653));
});})(owner,component_filter_rq_chan,map29582,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
;
}
return (new clustermap.components.filters.external_filter.t29652(component_spec,component_filter_rq_chan,map29581,owner,map29582,data,input_checker29585,set_filter_for_url,filter_spec,input_schema29584,output_schema29583,validate__6034__auto__,constructor29579,id,G__29587,output_checker29586,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29739 = output_checker29586.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29739))
{var error__6036__auto___29740 = temp__4126__auto___29739;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29579","constructor29579",-85980806,null),cljs.core.pr_str.call(null,error__6036__auto___29740)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29740,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29583,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29583,input_schema29584,input_checker29585,output_checker29586))
,schema.core.make_fn_schema.call(null,output_schema29583,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29584], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___29719){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner29578,p__29716){var vec__29718 = p__29716;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29718,(0),null);return component_fnk__7881__auto___29719.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29578,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner29578,var_args){
var p__29716 = null;if (arguments.length > 2) {
  p__29716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner29578,p__29716);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__29741){
var data__7882__auto__ = cljs.core.first(arglist__29741);
arglist__29741 = cljs.core.next(arglist__29741);
var owner29578 = cljs.core.first(arglist__29741);
var p__29716 = cljs.core.rest(arglist__29741);
return external_filter_component__delegate(data__7882__auto__,owner29578,p__29716);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___29719))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m29580){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m29580);
});
__GT_external_filter_component = function(cursor__7850__auto__,m29580){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m29580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
