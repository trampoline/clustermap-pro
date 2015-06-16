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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30935 = schema.core.Any;var input_schema30936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker30937 = schema.core.checker.call(null,input_schema30936);var output_checker30938 = schema.core.checker.call(null,output_schema30935);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30935,input_schema30936,input_checker30937,output_checker30938){
return (function render_STAR_(G__30939){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30942 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30939], null);var temp__4126__auto___30943 = input_checker30937.call(null,args__6035__auto___30942);if(cljs.core.truth_(temp__4126__auto___30943))
{var error__6036__auto___30944 = temp__4126__auto___30943;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30944)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30944,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30942,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30936,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var data = G__30939;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.div({"className": "filter-body"},React.DOM.ul({"className": "filter-items"},(function (){var attrs30941 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30935,input_schema30936,input_checker30937,output_checker30938){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__6034__auto__,ufv__,output_schema30935,input_schema30936,input_checker30937,output_checker30938))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__3639__auto__ = default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs30941))?sablono.interpreter.attributes.call(null,attrs30941):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30941))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30941)], null))));
})()));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30945 = output_checker30938.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30945))
{var error__6036__auto___30946 = temp__4126__auto___30945;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__6036__auto___30946)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30946,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30935,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30935,input_schema30936,input_checker30937,output_checker30938))
,schema.core.make_fn_schema.call(null,output_schema30935,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30936], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__7881__auto___31088 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30952 = schema.core.Any;var input_schema30953 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map30950","map30950",1218293115,null))], null);var input_checker30954 = schema.core.checker.call(null,input_schema30953);var output_checker30955 = schema.core.checker.call(null,output_schema30952);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955){
return (function constructor30948(G__30956){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30956], null);var temp__4126__auto___31090 = input_checker30954.call(null,args__6035__auto___31089);if(cljs.core.truth_(temp__4126__auto___31090))
{var error__6036__auto___31091 = temp__4126__auto___31090;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30948","constructor30948",-1836901835,null),cljs.core.pr_str.call(null,error__6036__auto___31091)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31091,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31089,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30953,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30950 = G__30956;while(true){
if(cljs.core.map_QMARK_.call(null,map30950))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30950)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map30950,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map30951 = plumbing.fnk.schema.safe_get.call(null,map30950,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map30951,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30950,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t31021 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t31021 = (function (component_spec,component_filter_rq_chan,input_checker30954,output_checker30955,owner,data,set_filter_for_url,filter_spec,map30951,constructor30948,G__30956,validate__6034__auto__,id,output_schema30952,map30950,input_schema30953,ufv__,meta31022){
this.component_spec = component_spec;
this.component_filter_rq_chan = component_filter_rq_chan;
this.input_checker30954 = input_checker30954;
this.output_checker30955 = output_checker30955;
this.owner = owner;
this.data = data;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.map30951 = map30951;
this.constructor30948 = constructor30948;
this.G__30956 = G__30956;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.output_schema30952 = output_schema30952;
this.map30950 = map30950;
this.input_schema30953 = input_schema30953;
this.ufv__ = ufv__;
this.meta31022 = meta31022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t31021.cljs$lang$type = true;
clustermap.components.filters.external_filter.t31021.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t31021";
clustermap.components.filters.external_filter.t31021.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filters.external-filter/t31021");
});})(owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955))
;
clustermap.components.filters.external_filter.t31021.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t31021.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955))
;
clustermap.components.filters.external_filter.t31021.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t31021.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955))
;
clustermap.components.filters.external_filter.t31021.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t31021.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955){
return (function (_){var self__ = this;
var ___$1 = this;var c__9125__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955){
return (function (){var f__9126__auto__ = (function (){var switch__9110__auto__ = ((function (c__9125__auto__,___$1,owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955){
return (function (state_31059){var state_val_31060 = (state_31059[(1)]);if((state_val_31060 === (7)))
{var inst_31050 = (state_31059[(2)]);var state_31059__$1 = state_31059;if(cljs.core.truth_(inst_31050))
{var statearr_31061_31092 = state_31059__$1;(statearr_31061_31092[(1)] = (11));
} else
{var statearr_31062_31093 = state_31059__$1;(statearr_31062_31093[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31060 === (1)))
{var state_31059__$1 = state_31059;var statearr_31063_31094 = state_31059__$1;(statearr_31063_31094[(2)] = null);
(statearr_31063_31094[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31060 === (4)))
{var inst_31026 = (state_31059[(7)]);var inst_31026__$1 = (state_31059[(2)]);var state_31059__$1 = (function (){var statearr_31064 = state_31059;(statearr_31064[(7)] = inst_31026__$1);
return statearr_31064;
})();if(cljs.core.truth_(inst_31026__$1))
{var statearr_31065_31095 = state_31059__$1;(statearr_31065_31095[(1)] = (5));
} else
{var statearr_31066_31096 = state_31059__$1;(statearr_31066_31096[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31060 === (13)))
{var inst_31055 = (state_31059[(2)]);var state_31059__$1 = state_31059;var statearr_31067_31097 = state_31059__$1;(statearr_31067_31097[(2)] = inst_31055);
(statearr_31067_31097[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31060 === (6)))
{var state_31059__$1 = state_31059;var statearr_31068_31098 = state_31059__$1;(statearr_31068_31098[(2)] = null);
(statearr_31068_31098[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31060 === (3)))
{var inst_31057 = (state_31059[(2)]);var state_31059__$1 = state_31059;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31059__$1,inst_31057);
} else
{if((state_val_31060 === (12)))
{var state_31059__$1 = state_31059;var statearr_31069_31099 = state_31059__$1;(statearr_31069_31099[(2)] = null);
(statearr_31069_31099[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31060 === (2)))
{var state_31059__$1 = state_31059;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31059__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_31060 === (11)))
{var state_31059__$1 = state_31059;var statearr_31070_31100 = state_31059__$1;(statearr_31070_31100[(2)] = null);
(statearr_31070_31100[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31060 === (9)))
{var inst_31032 = (state_31059[(8)]);var state_31059__$1 = state_31059;var statearr_31071_31101 = state_31059__$1;(statearr_31071_31101[(2)] = inst_31032);
(statearr_31071_31101[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31060 === (5)))
{var inst_31026 = (state_31059[(7)]);var inst_31032 = (state_31059[(8)]);var inst_31029 = cljs.core.nth.call(null,inst_31026,(0),null);var inst_31030 = cljs.core.nth.call(null,inst_31026,(1),null);var inst_31032__$1 = om.core.get_props.call(null,self__.owner);var inst_31033 = cljs.core.seq_QMARK_.call(null,inst_31032__$1);var state_31059__$1 = (function (){var statearr_31072 = state_31059;(statearr_31072[(9)] = inst_31030);
(statearr_31072[(8)] = inst_31032__$1);
(statearr_31072[(10)] = inst_31029);
return statearr_31072;
})();if(inst_31033)
{var statearr_31073_31102 = state_31059__$1;(statearr_31073_31102[(1)] = (8));
} else
{var statearr_31074_31103 = state_31059__$1;(statearr_31074_31103[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31060 === (10)))
{var inst_31030 = (state_31059[(9)]);var inst_31026 = (state_31059[(7)]);var inst_31029 = (state_31059[(10)]);var inst_31038 = (state_31059[(2)]);var inst_31039 = cljs.core.get.call(null,inst_31038,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_31040 = cljs.core.get.call(null,inst_31038,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_31041 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31042 = ["EXTERNAL-FILTER-RQ",self__.id,inst_31030];var inst_31043 = (new cljs.core.PersistentVector(null,3,(5),inst_31041,inst_31042,null));var inst_31044 = cljs.core.clj__GT_js.call(null,inst_31043);var inst_31045 = console.log(inst_31044);var inst_31046 = (function (){var filter_spec__$2 = inst_31040;var component_spec__$2 = inst_31039;var map__31031 = inst_31038;var rq = inst_31030;var component_id = inst_31029;var vec__31028 = inst_31026;var temp__4126__auto__ = inst_31026;return ((function (filter_spec__$2,component_spec__$2,map__31031,rq,component_id,vec__31028,temp__4126__auto__,inst_31030,inst_31026,inst_31029,inst_31038,inst_31039,inst_31040,inst_31041,inst_31042,inst_31043,inst_31044,inst_31045,state_val_31060,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__31031,rq,component_id,vec__31028,temp__4126__auto__,inst_31030,inst_31026,inst_31029,inst_31038,inst_31039,inst_31040,inst_31041,inst_31042,inst_31043,inst_31044,inst_31045,state_val_31060,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955))
})();var inst_31047 = self__.set_filter_for_url.call(null,inst_31030,inst_31046);var state_31059__$1 = (function (){var statearr_31075 = state_31059;(statearr_31075[(11)] = inst_31045);
(statearr_31075[(12)] = inst_31047);
return statearr_31075;
})();var statearr_31076_31104 = state_31059__$1;(statearr_31076_31104[(2)] = true);
(statearr_31076_31104[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31060 === (8)))
{var inst_31032 = (state_31059[(8)]);var inst_31035 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31032);var state_31059__$1 = state_31059;var statearr_31077_31105 = state_31059__$1;(statearr_31077_31105[(2)] = inst_31035);
(statearr_31077_31105[(1)] = (10));
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
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955))
;return ((function (switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955){
return (function() {
var state_machine__9111__auto__ = null;
var state_machine__9111__auto____0 = (function (){var statearr_31081 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31081[(0)] = state_machine__9111__auto__);
(statearr_31081[(1)] = (1));
return statearr_31081;
});
var state_machine__9111__auto____1 = (function (state_31059){while(true){
var ret_value__9112__auto__ = (function (){try{while(true){
var result__9113__auto__ = switch__9110__auto__.call(null,state_31059);if(cljs.core.keyword_identical_QMARK_.call(null,result__9113__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9113__auto__;
}
break;
}
}catch (e31082){if((e31082 instanceof Object))
{var ex__9114__auto__ = e31082;var statearr_31083_31106 = state_31059;(statearr_31083_31106[(5)] = ex__9114__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31059);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31082;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31107 = state_31059;
state_31059 = G__31107;
continue;
}
} else
{return ret_value__9112__auto__;
}
break;
}
});
state_machine__9111__auto__ = function(state_31059){
switch(arguments.length){
case 0:
return state_machine__9111__auto____0.call(this);
case 1:
return state_machine__9111__auto____1.call(this,state_31059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9111__auto____0;
state_machine__9111__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9111__auto____1;
return state_machine__9111__auto__;
})()
;})(switch__9110__auto__,c__9125__auto__,___$1,owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955))
})();var state__9127__auto__ = (function (){var statearr_31084 = f__9126__auto__.call(null);(statearr_31084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9125__auto__);
return statearr_31084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9127__auto__);
});})(c__9125__auto__,___$1,owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955))
);
return c__9125__auto__;
});})(owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955))
;
clustermap.components.filters.external_filter.t31021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955){
return (function (_31023){var self__ = this;
var _31023__$1 = this;return self__.meta31022;
});})(owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955))
;
clustermap.components.filters.external_filter.t31021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955){
return (function (_31023,meta31022__$1){var self__ = this;
var _31023__$1 = this;return (new clustermap.components.filters.external_filter.t31021(self__.component_spec,self__.component_filter_rq_chan,self__.input_checker30954,self__.output_checker30955,self__.owner,self__.data,self__.set_filter_for_url,self__.filter_spec,self__.map30951,self__.constructor30948,self__.G__30956,self__.validate__6034__auto__,self__.id,self__.output_schema30952,self__.map30950,self__.input_schema30953,self__.ufv__,meta31022__$1));
});})(owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955))
;
clustermap.components.filters.external_filter.__GT_t31021 = ((function (owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955){
return (function __GT_t31021(component_spec__$1,component_filter_rq_chan__$1,input_checker30954__$1,output_checker30955__$1,owner__$1,data__$1,set_filter_for_url__$1,filter_spec__$1,map30951__$1,constructor30948__$1,G__30956__$1,validate__6034__auto____$1,id__$1,output_schema30952__$1,map30950__$1,input_schema30953__$1,ufv____$1,meta31022){return (new clustermap.components.filters.external_filter.t31021(component_spec__$1,component_filter_rq_chan__$1,input_checker30954__$1,output_checker30955__$1,owner__$1,data__$1,set_filter_for_url__$1,filter_spec__$1,map30951__$1,constructor30948__$1,G__30956__$1,validate__6034__auto____$1,id__$1,output_schema30952__$1,map30950__$1,input_schema30953__$1,ufv____$1,meta31022));
});})(owner,component_filter_rq_chan,map30951,set_filter_for_url,id,component_spec,filter_spec,data,validate__6034__auto__,ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955))
;
}
return (new clustermap.components.filters.external_filter.t31021(component_spec,component_filter_rq_chan,input_checker30954,output_checker30955,owner,data,set_filter_for_url,filter_spec,map30951,constructor30948,G__30956,validate__6034__auto__,id,output_schema30952,map30950,input_schema30953,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31108 = output_checker30955.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31108))
{var error__6036__auto___31109 = temp__4126__auto___31108;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30948","constructor30948",-1836901835,null),cljs.core.pr_str.call(null,error__6036__auto___31109)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31109,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30952,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30952,input_schema30953,input_checker30954,output_checker30955))
,schema.core.make_fn_schema.call(null,output_schema30952,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30953], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__7881__auto___31088){
return (function() { 
var external_filter_component__delegate = function (data__7882__auto__,owner30947,p__31085){var vec__31087 = p__31085;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31087,(0),null);return component_fnk__7881__auto___31088.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30947,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var external_filter_component = function (data__7882__auto__,owner30947,var_args){
var p__31085 = null;if (arguments.length > 2) {
  p__31085 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__7882__auto__,owner30947,p__31085);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__31110){
var data__7882__auto__ = cljs.core.first(arglist__31110);
arglist__31110 = cljs.core.next(arglist__31110);
var owner30947 = cljs.core.first(arglist__31110);
var p__31085 = cljs.core.rest(arglist__31110);
return external_filter_component__delegate(data__7882__auto__,owner30947,p__31085);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__7881__auto___31088))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__7850__auto__,m30949){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__7850__auto__,m30949);
});
__GT_external_filter_component = function(cursor__7850__auto__,m30949){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__7850__auto__,m30949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;
