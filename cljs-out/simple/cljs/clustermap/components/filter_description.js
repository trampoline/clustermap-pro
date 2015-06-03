// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filter_description');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.filters');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clustermap.filters');
clustermap.components.filter_description.FilterDescriptionSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null);
clustermap.components.filter_description.render_filter_component = (function render_filter_component(filter_spec,component_id){var temp__4126__auto__ = cljs.core.get_in.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),component_id], null));if(cljs.core.truth_(temp__4126__auto__))
{var component_descr = temp__4126__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),component_descr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (component_descr,temp__4126__auto__){
return (function (e){e.preventDefault();
return om.core.update_BANG_.call(null,filter_spec,clustermap.filters.update_filter_component.call(null,filter_spec,component_id,null,null,null));
});})(component_descr,temp__4126__auto__))
], null),"\u00D7"], null)], null);
} else
{return null;
}
});
var component_fnk__7881__auto___31007 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30991 = schema.core.Any;var input_schema30992 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_description.FilterDescriptionSchema], true, false),new cljs.core.Symbol(null,"map30989","map30989",-996900390,null))], null);var input_checker30993 = schema.core.checker.call(null,input_schema30992);var output_checker30994 = schema.core.checker.call(null,output_schema30991);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994){
return (function constructor30987(G__30995){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31008 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30995], null);var temp__4126__auto___31009 = input_checker30993.call(null,args__6035__auto___31008);if(cljs.core.truth_(temp__4126__auto___31009))
{var error__6036__auto___31010 = temp__4126__auto___31009;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30987","constructor30987",2081578753,null),cljs.core.pr_str.call(null,error__6036__auto___31010)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31010,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31008,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30992,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30989 = G__30995;while(true){
if(cljs.core.map_QMARK_.call(null,map30989))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30989)));
}
var map30990 = plumbing.fnk.schema.safe_get.call(null,map30989,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map30990,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30990,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,map30989,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map30989,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_description.t31000 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_description.t31000 = (function (output_checker30994,constructor30987,output_schema30991,owner,map30990,input_checker30993,filter_spec,state,components,G__30995,validate__6034__auto__,map30989,input_schema30992,ufv__,meta31001){
this.output_checker30994 = output_checker30994;
this.constructor30987 = constructor30987;
this.output_schema30991 = output_schema30991;
this.owner = owner;
this.map30990 = map30990;
this.input_checker30993 = input_checker30993;
this.filter_spec = filter_spec;
this.state = state;
this.components = components;
this.G__30995 = G__30995;
this.validate__6034__auto__ = validate__6034__auto__;
this.map30989 = map30989;
this.input_schema30992 = input_schema30992;
this.ufv__ = ufv__;
this.meta31001 = meta31001;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_description.t31000.cljs$lang$type = true;
clustermap.components.filter_description.t31000.cljs$lang$ctorStr = "clustermap.components.filter-description/t31000";
clustermap.components.filter_description.t31000.cljs$lang$ctorPrWriter = ((function (owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter-description/t31000");
});})(owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994))
;
clustermap.components.filter_description.t31000.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_description.t31000.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-description-component";
});})(owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994))
;
clustermap.components.filter_description.t31000.prototype.om$core$IRender$ = true;
clustermap.components.filter_description.t31000.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "filter-settings"},React.DOM.div({"className": "filter-buttons"},React.DOM.button({"className": "btn btn-primary", "id": "filter-toggle", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994){
return (function (e){cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
return true;
});})(___$1,owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994))
},(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))?"Close Filter":"Open Filter")),React.DOM.button({"className": "btn btn-default", "id": "filter-reset", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994){
return (function (e){return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.reset_filter.call(null,self__.filter_spec));
});})(___$1,owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994))
},"Reset")),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-selected-items","ul.filter-selected-items",-477659425)], null),(function (){var G__31003 = self__.components;var G__31003__$1 = (((G__31003 == null))?null:cljs.core.map.call(null,((function (G__31003,___$1,owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994){
return (function (p1__30985_SHARP_){return clustermap.components.filter_description.render_filter_component.call(null,self__.filter_spec,p1__30985_SHARP_);
});})(G__31003,___$1,owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994))
,G__31003));var G__31003__$2 = (((G__31003__$1 == null))?null:cljs.core.filter.call(null,cljs.core.identity,G__31003__$1));return G__31003__$2;
})())));
});})(owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994))
;
clustermap.components.filter_description.t31000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994){
return (function (_31002){var self__ = this;
var _31002__$1 = this;return self__.meta31001;
});})(owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994))
;
clustermap.components.filter_description.t31000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994){
return (function (_31002,meta31001__$1){var self__ = this;
var _31002__$1 = this;return (new clustermap.components.filter_description.t31000(self__.output_checker30994,self__.constructor30987,self__.output_schema30991,self__.owner,self__.map30990,self__.input_checker30993,self__.filter_spec,self__.state,self__.components,self__.G__30995,self__.validate__6034__auto__,self__.map30989,self__.input_schema30992,self__.ufv__,meta31001__$1));
});})(owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994))
;
clustermap.components.filter_description.__GT_t31000 = ((function (owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994){
return (function __GT_t31000(output_checker30994__$1,constructor30987__$1,output_schema30991__$1,owner__$1,map30990__$1,input_checker30993__$1,filter_spec__$1,state__$1,components__$1,G__30995__$1,validate__6034__auto____$1,map30989__$1,input_schema30992__$1,ufv____$1,meta31001){return (new clustermap.components.filter_description.t31000(output_checker30994__$1,constructor30987__$1,output_schema30991__$1,owner__$1,map30990__$1,input_checker30993__$1,filter_spec__$1,state__$1,components__$1,G__30995__$1,validate__6034__auto____$1,map30989__$1,input_schema30992__$1,ufv____$1,meta31001));
});})(owner,state,filter_spec,components,map30990,validate__6034__auto__,ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994))
;
}
return (new clustermap.components.filter_description.t31000(output_checker30994,constructor30987,output_schema30991,owner,map30990,input_checker30993,filter_spec,state,components,G__30995,validate__6034__auto__,map30989,input_schema30992,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31011 = output_checker30994.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31011))
{var error__6036__auto___31012 = temp__4126__auto___31011;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30987","constructor30987",2081578753,null),cljs.core.pr_str.call(null,error__6036__auto___31012)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31012,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30991,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30991,input_schema30992,input_checker30993,output_checker30994))
,schema.core.make_fn_schema.call(null,output_schema30991,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30992], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_description.filter_description_component = ((function (component_fnk__7881__auto___31007){
return (function() { 
var filter_description_component__delegate = function (data__7882__auto__,owner30986,p__31004){var vec__31006 = p__31004;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31006,(0),null);return component_fnk__7881__auto___31007.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner30986),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30986,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_description_component = function (data__7882__auto__,owner30986,var_args){
var p__31004 = null;if (arguments.length > 2) {
  p__31004 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_description_component__delegate.call(this,data__7882__auto__,owner30986,p__31004);};
filter_description_component.cljs$lang$maxFixedArity = 2;
filter_description_component.cljs$lang$applyTo = (function (arglist__31013){
var data__7882__auto__ = cljs.core.first(arglist__31013);
arglist__31013 = cljs.core.next(arglist__31013);
var owner30986 = cljs.core.first(arglist__31013);
var p__31004 = cljs.core.rest(arglist__31013);
return filter_description_component__delegate(data__7882__auto__,owner30986,p__31004);
});
filter_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_description_component__delegate;
return filter_description_component;
})()
;})(component_fnk__7881__auto___31007))
;
clustermap.components.filter_description.__GT_filter_description_component = (function() {
var __GT_filter_description_component = null;
var __GT_filter_description_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__);
});
var __GT_filter_description_component__2 = (function (cursor__7850__auto__,m30988){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__,m30988);
});
__GT_filter_description_component = function(cursor__7850__auto__,m30988){
switch(arguments.length){
case 1:
return __GT_filter_description_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_description_component__2.call(this,cursor__7850__auto__,m30988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_description_component__1;
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_description_component__2;
return __GT_filter_description_component;
})()
;
