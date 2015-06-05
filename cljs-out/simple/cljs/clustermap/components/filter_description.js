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
var component_fnk__7881__auto___31434 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31418 = schema.core.Any;var input_schema31419 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_description.FilterDescriptionSchema], true, false),new cljs.core.Symbol(null,"map31416","map31416",-1994870771,null))], null);var input_checker31420 = schema.core.checker.call(null,input_schema31419);var output_checker31421 = schema.core.checker.call(null,output_schema31418);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421){
return (function constructor31414(G__31422){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31435 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31422], null);var temp__4126__auto___31436 = input_checker31420.call(null,args__6035__auto___31435);if(cljs.core.truth_(temp__4126__auto___31436))
{var error__6036__auto___31437 = temp__4126__auto___31436;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31414","constructor31414",-1978034156,null),cljs.core.pr_str.call(null,error__6036__auto___31437)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31437,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31435,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31419,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31416 = G__31422;while(true){
if(cljs.core.map_QMARK_.call(null,map31416))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31416)));
}
var map31417 = plumbing.fnk.schema.safe_get.call(null,map31416,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map31417,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map31417,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,map31416,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map31416,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_description.t31427 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_description.t31427 = (function (input_schema31419,owner,output_checker31421,map31416,filter_spec,G__31422,constructor31414,state,input_checker31420,output_schema31418,components,validate__6034__auto__,map31417,ufv__,meta31428){
this.input_schema31419 = input_schema31419;
this.owner = owner;
this.output_checker31421 = output_checker31421;
this.map31416 = map31416;
this.filter_spec = filter_spec;
this.G__31422 = G__31422;
this.constructor31414 = constructor31414;
this.state = state;
this.input_checker31420 = input_checker31420;
this.output_schema31418 = output_schema31418;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.map31417 = map31417;
this.ufv__ = ufv__;
this.meta31428 = meta31428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_description.t31427.cljs$lang$type = true;
clustermap.components.filter_description.t31427.cljs$lang$ctorStr = "clustermap.components.filter-description/t31427";
clustermap.components.filter_description.t31427.cljs$lang$ctorPrWriter = ((function (owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter-description/t31427");
});})(owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421))
;
clustermap.components.filter_description.t31427.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_description.t31427.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-description-component";
});})(owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421))
;
clustermap.components.filter_description.t31427.prototype.om$core$IRender$ = true;
clustermap.components.filter_description.t31427.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "filter-settings"},React.DOM.div({"className": "filter-buttons"},React.DOM.button({"className": "btn btn-primary", "id": "filter-toggle", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421){
return (function (e){cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
return true;
});})(___$1,owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421))
},(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))?"Close Filter":"Open Filter")),React.DOM.button({"className": "btn btn-default", "id": "filter-reset", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421){
return (function (e){return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.reset_filter.call(null,self__.filter_spec));
});})(___$1,owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421))
},"Reset")),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-selected-items","ul.filter-selected-items",-477659425)], null),(function (){var G__31430 = self__.components;var G__31430__$1 = (((G__31430 == null))?null:cljs.core.map.call(null,((function (G__31430,___$1,owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421){
return (function (p1__31412_SHARP_){return clustermap.components.filter_description.render_filter_component.call(null,self__.filter_spec,p1__31412_SHARP_);
});})(G__31430,___$1,owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421))
,G__31430));var G__31430__$2 = (((G__31430__$1 == null))?null:cljs.core.filter.call(null,cljs.core.identity,G__31430__$1));return G__31430__$2;
})())));
});})(owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421))
;
clustermap.components.filter_description.t31427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421){
return (function (_31429){var self__ = this;
var _31429__$1 = this;return self__.meta31428;
});})(owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421))
;
clustermap.components.filter_description.t31427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421){
return (function (_31429,meta31428__$1){var self__ = this;
var _31429__$1 = this;return (new clustermap.components.filter_description.t31427(self__.input_schema31419,self__.owner,self__.output_checker31421,self__.map31416,self__.filter_spec,self__.G__31422,self__.constructor31414,self__.state,self__.input_checker31420,self__.output_schema31418,self__.components,self__.validate__6034__auto__,self__.map31417,self__.ufv__,meta31428__$1));
});})(owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421))
;
clustermap.components.filter_description.__GT_t31427 = ((function (owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421){
return (function __GT_t31427(input_schema31419__$1,owner__$1,output_checker31421__$1,map31416__$1,filter_spec__$1,G__31422__$1,constructor31414__$1,state__$1,input_checker31420__$1,output_schema31418__$1,components__$1,validate__6034__auto____$1,map31417__$1,ufv____$1,meta31428){return (new clustermap.components.filter_description.t31427(input_schema31419__$1,owner__$1,output_checker31421__$1,map31416__$1,filter_spec__$1,G__31422__$1,constructor31414__$1,state__$1,input_checker31420__$1,output_schema31418__$1,components__$1,validate__6034__auto____$1,map31417__$1,ufv____$1,meta31428));
});})(owner,state,filter_spec,components,map31417,validate__6034__auto__,ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421))
;
}
return (new clustermap.components.filter_description.t31427(input_schema31419,owner,output_checker31421,map31416,filter_spec,G__31422,constructor31414,state,input_checker31420,output_schema31418,components,validate__6034__auto__,map31417,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31438 = output_checker31421.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31438))
{var error__6036__auto___31439 = temp__4126__auto___31438;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31414","constructor31414",-1978034156,null),cljs.core.pr_str.call(null,error__6036__auto___31439)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31439,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31418,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31418,input_schema31419,input_checker31420,output_checker31421))
,schema.core.make_fn_schema.call(null,output_schema31418,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31419], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_description.filter_description_component = ((function (component_fnk__7881__auto___31434){
return (function() { 
var filter_description_component__delegate = function (data__7882__auto__,owner31413,p__31431){var vec__31433 = p__31431;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31433,(0),null);return component_fnk__7881__auto___31434.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner31413),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31413,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_description_component = function (data__7882__auto__,owner31413,var_args){
var p__31431 = null;if (arguments.length > 2) {
  p__31431 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_description_component__delegate.call(this,data__7882__auto__,owner31413,p__31431);};
filter_description_component.cljs$lang$maxFixedArity = 2;
filter_description_component.cljs$lang$applyTo = (function (arglist__31440){
var data__7882__auto__ = cljs.core.first(arglist__31440);
arglist__31440 = cljs.core.next(arglist__31440);
var owner31413 = cljs.core.first(arglist__31440);
var p__31431 = cljs.core.rest(arglist__31440);
return filter_description_component__delegate(data__7882__auto__,owner31413,p__31431);
});
filter_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_description_component__delegate;
return filter_description_component;
})()
;})(component_fnk__7881__auto___31434))
;
clustermap.components.filter_description.__GT_filter_description_component = (function() {
var __GT_filter_description_component = null;
var __GT_filter_description_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__);
});
var __GT_filter_description_component__2 = (function (cursor__7850__auto__,m31415){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__,m31415);
});
__GT_filter_description_component = function(cursor__7850__auto__,m31415){
switch(arguments.length){
case 1:
return __GT_filter_description_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_description_component__2.call(this,cursor__7850__auto__,m31415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_description_component__1;
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_description_component__2;
return __GT_filter_description_component;
})()
;
