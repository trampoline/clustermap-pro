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
clustermap.components.filters.external_filter.render_STAR_ = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28378 = schema.core.Any;var input_schema28379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.Any,new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Any,new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Any], true, false),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"components","components",-1073188942),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"data","data",1407862150,null))], null);var input_checker28380 = schema.core.checker.call(null,input_schema28379);var output_checker28381 = schema.core.checker.call(null,output_schema28378);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28378,input_schema28379,input_checker28380,output_checker28381){
return (function render_STAR_(G__28382){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___28385 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28382], null);var temp__4126__auto___28386 = input_checker28380.call(null,args__13910__auto___28385);if(cljs.core.truth_(temp__4126__auto___28386))
{var error__13911__auto___28387 = temp__4126__auto___28386;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___28387)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28387,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___28385,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28379,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var data = G__28382;while(true){
if(cljs.core.map_QMARK_.call(null,data))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",data)));
}
var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,filter_spec,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),cljs.core.PersistentVector.EMPTY);var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var label = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var formatter = cljs.core.get.call(null,component_spec,new cljs.core.Keyword(null,"formatter","formatter",-483008823),cljs.core.identity);var default_text = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));return React.DOM.ul({"className": "filter-items"},(function (){var attrs28384 = formatter.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),id], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (default_text,formatter,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28378,input_schema28379,input_checker28380,output_checker28381){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,id,null,null,null));
});})(default_text,formatter,label,id,component_spec,components,filter_spec,validate__13909__auto__,ufv__,output_schema28378,input_schema28379,input_checker28380,output_checker28381))
], null),"\u00D7"], null),"\u00A0",cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),id], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__11514__auto__ = default_text;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return "";
}
})()], null)));return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs28384))?sablono.interpreter.attributes.call(null,attrs28384):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28384))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28384)], null))));
})());
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___28388 = output_checker28381.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___28388))
{var error__13911__auto___28389 = temp__4126__auto___28388;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render*","render*",1722759888,null),cljs.core.pr_str.call(null,error__13911__auto___28389)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28389,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28378,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema28378,input_schema28379,input_checker28380,output_checker28381))
,schema.core.make_fn_schema.call(null,output_schema28378,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28379], null)));
})();
clustermap.components.filters.external_filter.ExternalFilterComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),clustermap.filters.FilterSchema,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"id","id",-1388402092),schema.core.Keyword,new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"external","external",-1833995989)),new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-label","skip-label",-1497552511)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"formatter","formatter",-483008823)),schema.core.pred.call(null,cljs.core.fn_QMARK_),new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),schema.core.pred.call(null,cljs.core.fn_QMARK_)], true, false)], null);
var component_fnk__15756__auto___28531 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28395 = schema.core.Any;var input_schema28396 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),cljs.core.async.impl.channels.ManyToManyChannel], null),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filters.external_filter.ExternalFilterComponentSchema], true, false),new cljs.core.Symbol(null,"map28393","map28393",260270229,null))], null);var input_checker28397 = schema.core.checker.call(null,input_schema28396);var output_checker28398 = schema.core.checker.call(null,output_schema28395);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398){
return (function constructor28391(G__28399){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___28532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28399], null);var temp__4126__auto___28533 = input_checker28397.call(null,args__13910__auto___28532);if(cljs.core.truth_(temp__4126__auto___28533))
{var error__13911__auto___28534 = temp__4126__auto___28533;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28391","constructor28391",-2118610375,null),cljs.core.pr_str.call(null,error__13911__auto___28534)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28534,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___28532,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28396,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map28393 = G__28399;while(true){
if(cljs.core.map_QMARK_.call(null,map28393))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28393)));
}
var data = plumbing.fnk.schema.safe_get.call(null,map28393,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var filter_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_spec = plumbing.fnk.schema.safe_get.call(null,data,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var id = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var set_filter_for_url = plumbing.fnk.schema.safe_get.call(null,component_spec,new cljs.core.Keyword(null,"set-filter-for-url","set-filter-for-url",901755495),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"component-spec","component-spec",2070229817)], null));var map28394 = plumbing.fnk.schema.safe_get.call(null,map28393,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.PersistentVector.EMPTY);var component_filter_rq_chan = plumbing.fnk.schema.safe_get.call(null,map28394,new cljs.core.Keyword(null,"component-filter-rq-chan","component-filter-rq-chan",-1251831623),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28393,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filters.external_filter.t28464 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filters.external_filter.t28464 = (function (component_spec,map28394,component_filter_rq_chan,owner,data,input_schema28396,validate__13909__auto__,set_filter_for_url,filter_spec,input_checker28397,map28393,G__28399,output_checker28398,constructor28391,id,output_schema28395,ufv__,meta28465){
this.component_spec = component_spec;
this.map28394 = map28394;
this.component_filter_rq_chan = component_filter_rq_chan;
this.owner = owner;
this.data = data;
this.input_schema28396 = input_schema28396;
this.validate__13909__auto__ = validate__13909__auto__;
this.set_filter_for_url = set_filter_for_url;
this.filter_spec = filter_spec;
this.input_checker28397 = input_checker28397;
this.map28393 = map28393;
this.G__28399 = G__28399;
this.output_checker28398 = output_checker28398;
this.constructor28391 = constructor28391;
this.id = id;
this.output_schema28395 = output_schema28395;
this.ufv__ = ufv__;
this.meta28465 = meta28465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filters.external_filter.t28464.cljs$lang$type = true;
clustermap.components.filters.external_filter.t28464.cljs$lang$ctorStr = "clustermap.components.filters.external-filter/t28464";
clustermap.components.filters.external_filter.t28464.cljs$lang$ctorPrWriter = ((function (owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.filters.external-filter/t28464");
});})(owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398))
;
clustermap.components.filters.external_filter.t28464.prototype.om$core$IDisplayName$ = true;
clustermap.components.filters.external_filter.t28464.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398){
return (function (_){var self__ = this;
var ___$1 = this;return "external-filter-component";
});})(owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398))
;
clustermap.components.filters.external_filter.t28464.prototype.om$core$IRender$ = true;
clustermap.components.filters.external_filter.t28464.prototype.om$core$IRender$render$arity$1 = ((function (owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.filters.external_filter.render_STAR_.call(null,self__.data);
});})(owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398))
;
clustermap.components.filters.external_filter.t28464.prototype.om$core$IDidMount$ = true;
clustermap.components.filters.external_filter.t28464.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398){
return (function (_){var self__ = this;
var ___$1 = this;var c__18867__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__18867__auto__,___$1,owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398){
return (function (){var f__18868__auto__ = (function (){var switch__18811__auto__ = ((function (c__18867__auto__,___$1,owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398){
return (function (state_28502){var state_val_28503 = (state_28502[(1)]);if((state_val_28503 === (7)))
{var inst_28493 = (state_28502[(2)]);var state_28502__$1 = state_28502;if(cljs.core.truth_(inst_28493))
{var statearr_28504_28535 = state_28502__$1;(statearr_28504_28535[(1)] = (11));
} else
{var statearr_28505_28536 = state_28502__$1;(statearr_28505_28536[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (1)))
{var state_28502__$1 = state_28502;var statearr_28506_28537 = state_28502__$1;(statearr_28506_28537[(2)] = null);
(statearr_28506_28537[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (4)))
{var inst_28469 = (state_28502[(7)]);var inst_28469__$1 = (state_28502[(2)]);var state_28502__$1 = (function (){var statearr_28507 = state_28502;(statearr_28507[(7)] = inst_28469__$1);
return statearr_28507;
})();if(cljs.core.truth_(inst_28469__$1))
{var statearr_28508_28538 = state_28502__$1;(statearr_28508_28538[(1)] = (5));
} else
{var statearr_28509_28539 = state_28502__$1;(statearr_28509_28539[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (13)))
{var inst_28498 = (state_28502[(2)]);var state_28502__$1 = state_28502;var statearr_28510_28540 = state_28502__$1;(statearr_28510_28540[(2)] = inst_28498);
(statearr_28510_28540[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (6)))
{var state_28502__$1 = state_28502;var statearr_28511_28541 = state_28502__$1;(statearr_28511_28541[(2)] = null);
(statearr_28511_28541[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (3)))
{var inst_28500 = (state_28502[(2)]);var state_28502__$1 = state_28502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28502__$1,inst_28500);
} else
{if((state_val_28503 === (12)))
{var state_28502__$1 = state_28502;var statearr_28512_28542 = state_28502__$1;(statearr_28512_28542[(2)] = null);
(statearr_28512_28542[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (2)))
{var state_28502__$1 = state_28502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28502__$1,(4),self__.component_filter_rq_chan);
} else
{if((state_val_28503 === (11)))
{var state_28502__$1 = state_28502;var statearr_28513_28543 = state_28502__$1;(statearr_28513_28543[(2)] = null);
(statearr_28513_28543[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (9)))
{var inst_28475 = (state_28502[(8)]);var state_28502__$1 = state_28502;var statearr_28514_28544 = state_28502__$1;(statearr_28514_28544[(2)] = inst_28475);
(statearr_28514_28544[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (5)))
{var inst_28469 = (state_28502[(7)]);var inst_28475 = (state_28502[(8)]);var inst_28472 = cljs.core.nth.call(null,inst_28469,(0),null);var inst_28473 = cljs.core.nth.call(null,inst_28469,(1),null);var inst_28475__$1 = om.core.get_props.call(null,self__.owner);var inst_28476 = cljs.core.seq_QMARK_.call(null,inst_28475__$1);var state_28502__$1 = (function (){var statearr_28515 = state_28502;(statearr_28515[(9)] = inst_28472);
(statearr_28515[(8)] = inst_28475__$1);
(statearr_28515[(10)] = inst_28473);
return statearr_28515;
})();if(inst_28476)
{var statearr_28516_28545 = state_28502__$1;(statearr_28516_28545[(1)] = (8));
} else
{var statearr_28517_28546 = state_28502__$1;(statearr_28517_28546[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (10)))
{var inst_28472 = (state_28502[(9)]);var inst_28469 = (state_28502[(7)]);var inst_28473 = (state_28502[(10)]);var inst_28481 = (state_28502[(2)]);var inst_28482 = cljs.core.get.call(null,inst_28481,new cljs.core.Keyword(null,"component-spec","component-spec",2070229817));var inst_28483 = cljs.core.get.call(null,inst_28481,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var inst_28484 = cljs.core.PersistentVector.EMPTY_NODE;var inst_28485 = ["EXTERNAL-FILTER-RQ",self__.id,inst_28473];var inst_28486 = (new cljs.core.PersistentVector(null,3,(5),inst_28484,inst_28485,null));var inst_28487 = cljs.core.clj__GT_js.call(null,inst_28486);var inst_28488 = console.log(inst_28487);var inst_28489 = (function (){var filter_spec__$2 = inst_28483;var component_spec__$2 = inst_28482;var map__28474 = inst_28481;var rq = inst_28473;var component_id = inst_28472;var vec__28471 = inst_28469;var temp__4126__auto__ = inst_28469;return ((function (filter_spec__$2,component_spec__$2,map__28474,rq,component_id,vec__28471,temp__4126__auto__,inst_28472,inst_28469,inst_28473,inst_28481,inst_28482,inst_28483,inst_28484,inst_28485,inst_28486,inst_28487,inst_28488,state_val_28503,c__18867__auto__,___$1,owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398){
return (function (f,d){return om.core.update_BANG_.call(null,filter_spec__$2,clustermap.filters.update_filter_component.call(null,cljs.core.deref.call(null,filter_spec__$2),component_id,f,d,rq));
});
;})(filter_spec__$2,component_spec__$2,map__28474,rq,component_id,vec__28471,temp__4126__auto__,inst_28472,inst_28469,inst_28473,inst_28481,inst_28482,inst_28483,inst_28484,inst_28485,inst_28486,inst_28487,inst_28488,state_val_28503,c__18867__auto__,___$1,owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398))
})();var inst_28490 = self__.set_filter_for_url.call(null,inst_28473,inst_28489);var state_28502__$1 = (function (){var statearr_28518 = state_28502;(statearr_28518[(11)] = inst_28488);
(statearr_28518[(12)] = inst_28490);
return statearr_28518;
})();var statearr_28519_28547 = state_28502__$1;(statearr_28519_28547[(2)] = true);
(statearr_28519_28547[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28503 === (8)))
{var inst_28475 = (state_28502[(8)]);var inst_28478 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28475);var state_28502__$1 = state_28502;var statearr_28520_28548 = state_28502__$1;(statearr_28520_28548[(2)] = inst_28478);
(statearr_28520_28548[(1)] = (10));
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
});})(c__18867__auto__,___$1,owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398))
;return ((function (switch__18811__auto__,c__18867__auto__,___$1,owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398){
return (function() {
var state_machine__18812__auto__ = null;
var state_machine__18812__auto____0 = (function (){var statearr_28524 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28524[(0)] = state_machine__18812__auto__);
(statearr_28524[(1)] = (1));
return statearr_28524;
});
var state_machine__18812__auto____1 = (function (state_28502){while(true){
var ret_value__18813__auto__ = (function (){try{while(true){
var result__18814__auto__ = switch__18811__auto__.call(null,state_28502);if(cljs.core.keyword_identical_QMARK_.call(null,result__18814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__18814__auto__;
}
break;
}
}catch (e28525){if((e28525 instanceof Object))
{var ex__18815__auto__ = e28525;var statearr_28526_28549 = state_28502;(statearr_28526_28549[(5)] = ex__18815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e28525;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28550 = state_28502;
state_28502 = G__28550;
continue;
}
} else
{return ret_value__18813__auto__;
}
break;
}
});
state_machine__18812__auto__ = function(state_28502){
switch(arguments.length){
case 0:
return state_machine__18812__auto____0.call(this);
case 1:
return state_machine__18812__auto____1.call(this,state_28502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18812__auto____0;
state_machine__18812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18812__auto____1;
return state_machine__18812__auto__;
})()
;})(switch__18811__auto__,c__18867__auto__,___$1,owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398))
})();var state__18869__auto__ = (function (){var statearr_28527 = f__18868__auto__.call(null);(statearr_28527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18867__auto__);
return statearr_28527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18869__auto__);
});})(c__18867__auto__,___$1,owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398))
);
return c__18867__auto__;
});})(owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398))
;
clustermap.components.filters.external_filter.t28464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398){
return (function (_28466){var self__ = this;
var _28466__$1 = this;return self__.meta28465;
});})(owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398))
;
clustermap.components.filters.external_filter.t28464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398){
return (function (_28466,meta28465__$1){var self__ = this;
var _28466__$1 = this;return (new clustermap.components.filters.external_filter.t28464(self__.component_spec,self__.map28394,self__.component_filter_rq_chan,self__.owner,self__.data,self__.input_schema28396,self__.validate__13909__auto__,self__.set_filter_for_url,self__.filter_spec,self__.input_checker28397,self__.map28393,self__.G__28399,self__.output_checker28398,self__.constructor28391,self__.id,self__.output_schema28395,self__.ufv__,meta28465__$1));
});})(owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398))
;
clustermap.components.filters.external_filter.__GT_t28464 = ((function (owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398){
return (function __GT_t28464(component_spec__$1,map28394__$1,component_filter_rq_chan__$1,owner__$1,data__$1,input_schema28396__$1,validate__13909__auto____$1,set_filter_for_url__$1,filter_spec__$1,input_checker28397__$1,map28393__$1,G__28399__$1,output_checker28398__$1,constructor28391__$1,id__$1,output_schema28395__$1,ufv____$1,meta28465){return (new clustermap.components.filters.external_filter.t28464(component_spec__$1,map28394__$1,component_filter_rq_chan__$1,owner__$1,data__$1,input_schema28396__$1,validate__13909__auto____$1,set_filter_for_url__$1,filter_spec__$1,input_checker28397__$1,map28393__$1,G__28399__$1,output_checker28398__$1,constructor28391__$1,id__$1,output_schema28395__$1,ufv____$1,meta28465));
});})(owner,component_filter_rq_chan,map28394,set_filter_for_url,id,component_spec,filter_spec,data,validate__13909__auto__,ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398))
;
}
return (new clustermap.components.filters.external_filter.t28464(component_spec,map28394,component_filter_rq_chan,owner,data,input_schema28396,validate__13909__auto__,set_filter_for_url,filter_spec,input_checker28397,map28393,G__28399,output_checker28398,constructor28391,id,output_schema28395,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___28551 = output_checker28398.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___28551))
{var error__13911__auto___28552 = temp__4126__auto___28551;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28391","constructor28391",-2118610375,null),cljs.core.pr_str.call(null,error__13911__auto___28552)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28552,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28395,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema28395,input_schema28396,input_checker28397,output_checker28398))
,schema.core.make_fn_schema.call(null,output_schema28395,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28396], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filters.external_filter.external_filter_component = ((function (component_fnk__15756__auto___28531){
return (function() { 
var external_filter_component__delegate = function (data__15757__auto__,owner28390,p__28528){var vec__28530 = p__28528;var opts__15758__auto__ = cljs.core.nth.call(null,vec__28530,(0),null);return component_fnk__15756__auto___28531.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15758__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28390,new cljs.core.Keyword(null,"data","data",-232669377),data__15757__auto__], null));
};
var external_filter_component = function (data__15757__auto__,owner28390,var_args){
var p__28528 = null;if (arguments.length > 2) {
  p__28528 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return external_filter_component__delegate.call(this,data__15757__auto__,owner28390,p__28528);};
external_filter_component.cljs$lang$maxFixedArity = 2;
external_filter_component.cljs$lang$applyTo = (function (arglist__28553){
var data__15757__auto__ = cljs.core.first(arglist__28553);
arglist__28553 = cljs.core.next(arglist__28553);
var owner28390 = cljs.core.first(arglist__28553);
var p__28528 = cljs.core.rest(arglist__28553);
return external_filter_component__delegate(data__15757__auto__,owner28390,p__28528);
});
external_filter_component.cljs$core$IFn$_invoke$arity$variadic = external_filter_component__delegate;
return external_filter_component;
})()
;})(component_fnk__15756__auto___28531))
;
clustermap.components.filters.external_filter.__GT_external_filter_component = (function() {
var __GT_external_filter_component = null;
var __GT_external_filter_component__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__15725__auto__);
});
var __GT_external_filter_component__2 = (function (cursor__15725__auto__,m28392){return om.core.build.call(null,clustermap.components.filters.external_filter.external_filter_component,cursor__15725__auto__,m28392);
});
__GT_external_filter_component = function(cursor__15725__auto__,m28392){
switch(arguments.length){
case 1:
return __GT_external_filter_component__1.call(this,cursor__15725__auto__);
case 2:
return __GT_external_filter_component__2.call(this,cursor__15725__auto__,m28392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$1 = __GT_external_filter_component__1;
__GT_external_filter_component.cljs$core$IFn$_invoke$arity$2 = __GT_external_filter_component__2;
return __GT_external_filter_component;
})()
;

//# sourceMappingURL=external_filter.js.map