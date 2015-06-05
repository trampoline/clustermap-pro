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
var component_fnk__7881__auto___31430 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31414 = schema.core.Any;var input_schema31415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_description.FilterDescriptionSchema], true, false),new cljs.core.Symbol(null,"map31412","map31412",-1051252022,null))], null);var input_checker31416 = schema.core.checker.call(null,input_schema31415);var output_checker31417 = schema.core.checker.call(null,output_schema31414);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417){
return (function constructor31410(G__31418){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31431 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31418], null);var temp__4126__auto___31432 = input_checker31416.call(null,args__6035__auto___31431);if(cljs.core.truth_(temp__4126__auto___31432))
{var error__6036__auto___31433 = temp__4126__auto___31432;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31410","constructor31410",695597060,null),cljs.core.pr_str.call(null,error__6036__auto___31433)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31433,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31431,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31415,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31412 = G__31418;while(true){
if(cljs.core.map_QMARK_.call(null,map31412))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31412)));
}
var map31413 = plumbing.fnk.schema.safe_get.call(null,map31412,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map31413,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map31413,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,map31412,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map31412,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_description.t31423 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_description.t31423 = (function (G__31418,constructor31410,owner,input_checker31416,map31412,filter_spec,output_checker31417,state,map31413,input_schema31415,components,output_schema31414,validate__6034__auto__,ufv__,meta31424){
this.G__31418 = G__31418;
this.constructor31410 = constructor31410;
this.owner = owner;
this.input_checker31416 = input_checker31416;
this.map31412 = map31412;
this.filter_spec = filter_spec;
this.output_checker31417 = output_checker31417;
this.state = state;
this.map31413 = map31413;
this.input_schema31415 = input_schema31415;
this.components = components;
this.output_schema31414 = output_schema31414;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.meta31424 = meta31424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_description.t31423.cljs$lang$type = true;
clustermap.components.filter_description.t31423.cljs$lang$ctorStr = "clustermap.components.filter-description/t31423";
clustermap.components.filter_description.t31423.cljs$lang$ctorPrWriter = ((function (owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter-description/t31423");
});})(owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417))
;
clustermap.components.filter_description.t31423.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_description.t31423.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-description-component";
});})(owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417))
;
clustermap.components.filter_description.t31423.prototype.om$core$IRender$ = true;
clustermap.components.filter_description.t31423.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "filter-settings"},React.DOM.div({"className": "filter-buttons"},React.DOM.button({"className": "btn btn-primary", "id": "filter-toggle", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417){
return (function (e){cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
return true;
});})(___$1,owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417))
},(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))?"Close Filter":"Open Filter")),React.DOM.button({"className": "btn btn-default", "id": "filter-reset", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417){
return (function (e){return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.reset_filter.call(null,self__.filter_spec));
});})(___$1,owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417))
},"Reset")),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-selected-items","ul.filter-selected-items",-477659425)], null),(function (){var G__31426 = self__.components;var G__31426__$1 = (((G__31426 == null))?null:cljs.core.map.call(null,((function (G__31426,___$1,owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417){
return (function (p1__31408_SHARP_){return clustermap.components.filter_description.render_filter_component.call(null,self__.filter_spec,p1__31408_SHARP_);
});})(G__31426,___$1,owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417))
,G__31426));var G__31426__$2 = (((G__31426__$1 == null))?null:cljs.core.filter.call(null,cljs.core.identity,G__31426__$1));return G__31426__$2;
})())));
});})(owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417))
;
clustermap.components.filter_description.t31423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417){
return (function (_31425){var self__ = this;
var _31425__$1 = this;return self__.meta31424;
});})(owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417))
;
clustermap.components.filter_description.t31423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417){
return (function (_31425,meta31424__$1){var self__ = this;
var _31425__$1 = this;return (new clustermap.components.filter_description.t31423(self__.G__31418,self__.constructor31410,self__.owner,self__.input_checker31416,self__.map31412,self__.filter_spec,self__.output_checker31417,self__.state,self__.map31413,self__.input_schema31415,self__.components,self__.output_schema31414,self__.validate__6034__auto__,self__.ufv__,meta31424__$1));
});})(owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417))
;
clustermap.components.filter_description.__GT_t31423 = ((function (owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417){
return (function __GT_t31423(G__31418__$1,constructor31410__$1,owner__$1,input_checker31416__$1,map31412__$1,filter_spec__$1,output_checker31417__$1,state__$1,map31413__$1,input_schema31415__$1,components__$1,output_schema31414__$1,validate__6034__auto____$1,ufv____$1,meta31424){return (new clustermap.components.filter_description.t31423(G__31418__$1,constructor31410__$1,owner__$1,input_checker31416__$1,map31412__$1,filter_spec__$1,output_checker31417__$1,state__$1,map31413__$1,input_schema31415__$1,components__$1,output_schema31414__$1,validate__6034__auto____$1,ufv____$1,meta31424));
});})(owner,state,filter_spec,components,map31413,validate__6034__auto__,ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417))
;
}
return (new clustermap.components.filter_description.t31423(G__31418,constructor31410,owner,input_checker31416,map31412,filter_spec,output_checker31417,state,map31413,input_schema31415,components,output_schema31414,validate__6034__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31434 = output_checker31417.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31434))
{var error__6036__auto___31435 = temp__4126__auto___31434;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31410","constructor31410",695597060,null),cljs.core.pr_str.call(null,error__6036__auto___31435)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31435,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31414,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31414,input_schema31415,input_checker31416,output_checker31417))
,schema.core.make_fn_schema.call(null,output_schema31414,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31415], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_description.filter_description_component = ((function (component_fnk__7881__auto___31430){
return (function() { 
var filter_description_component__delegate = function (data__7882__auto__,owner31409,p__31427){var vec__31429 = p__31427;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31429,(0),null);return component_fnk__7881__auto___31430.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner31409),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31409,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_description_component = function (data__7882__auto__,owner31409,var_args){
var p__31427 = null;if (arguments.length > 2) {
  p__31427 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_description_component__delegate.call(this,data__7882__auto__,owner31409,p__31427);};
filter_description_component.cljs$lang$maxFixedArity = 2;
filter_description_component.cljs$lang$applyTo = (function (arglist__31436){
var data__7882__auto__ = cljs.core.first(arglist__31436);
arglist__31436 = cljs.core.next(arglist__31436);
var owner31409 = cljs.core.first(arglist__31436);
var p__31427 = cljs.core.rest(arglist__31436);
return filter_description_component__delegate(data__7882__auto__,owner31409,p__31427);
});
filter_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_description_component__delegate;
return filter_description_component;
})()
;})(component_fnk__7881__auto___31430))
;
clustermap.components.filter_description.__GT_filter_description_component = (function() {
var __GT_filter_description_component = null;
var __GT_filter_description_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__);
});
var __GT_filter_description_component__2 = (function (cursor__7850__auto__,m31411){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__,m31411);
});
__GT_filter_description_component = function(cursor__7850__auto__,m31411){
switch(arguments.length){
case 1:
return __GT_filter_description_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_description_component__2.call(this,cursor__7850__auto__,m31411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_description_component__1;
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_description_component__2;
return __GT_filter_description_component;
})()
;
