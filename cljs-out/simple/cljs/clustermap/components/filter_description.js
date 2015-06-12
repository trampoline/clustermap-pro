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
var component_fnk__7881__auto___32739 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32723 = schema.core.Any;var input_schema32724 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_description.FilterDescriptionSchema], true, false),new cljs.core.Symbol(null,"map32721","map32721",1353718086,null))], null);var input_checker32725 = schema.core.checker.call(null,input_schema32724);var output_checker32726 = schema.core.checker.call(null,output_schema32723);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726){
return (function constructor32719(G__32727){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32740 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32727], null);var temp__4126__auto___32741 = input_checker32725.call(null,args__6035__auto___32740);if(cljs.core.truth_(temp__4126__auto___32741))
{var error__6036__auto___32742 = temp__4126__auto___32741;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32719","constructor32719",-1821264849,null),cljs.core.pr_str.call(null,error__6036__auto___32742)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32742,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32740,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32724,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map32721 = G__32727;while(true){
if(cljs.core.map_QMARK_.call(null,map32721))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32721)));
}
var map32722 = plumbing.fnk.schema.safe_get.call(null,map32721,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map32722,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map32722,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,map32721,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map32721,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_description.t32732 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_description.t32732 = (function (owner,map32721,input_checker32725,output_schema32723,constructor32719,filter_spec,state,map32722,G__32727,components,validate__6034__auto__,output_checker32726,ufv__,input_schema32724,meta32733){
this.owner = owner;
this.map32721 = map32721;
this.input_checker32725 = input_checker32725;
this.output_schema32723 = output_schema32723;
this.constructor32719 = constructor32719;
this.filter_spec = filter_spec;
this.state = state;
this.map32722 = map32722;
this.G__32727 = G__32727;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker32726 = output_checker32726;
this.ufv__ = ufv__;
this.input_schema32724 = input_schema32724;
this.meta32733 = meta32733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_description.t32732.cljs$lang$type = true;
clustermap.components.filter_description.t32732.cljs$lang$ctorStr = "clustermap.components.filter-description/t32732";
clustermap.components.filter_description.t32732.cljs$lang$ctorPrWriter = ((function (owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter-description/t32732");
});})(owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726))
;
clustermap.components.filter_description.t32732.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_description.t32732.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-description-component";
});})(owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726))
;
clustermap.components.filter_description.t32732.prototype.om$core$IRender$ = true;
clustermap.components.filter_description.t32732.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "filter-settings"},React.DOM.div({"className": "filter-buttons"},React.DOM.button({"className": "btn btn-primary", "id": "filter-toggle", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726){
return (function (e){cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
return true;
});})(___$1,owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726))
},(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))?"Close Filter":"Open Filter")),React.DOM.button({"className": "btn btn-default", "id": "filter-reset", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726){
return (function (e){return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.reset_filter.call(null,self__.filter_spec));
});})(___$1,owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726))
},"Reset")),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-selected-items","ul.filter-selected-items",-477659425)], null),(function (){var G__32735 = self__.components;var G__32735__$1 = (((G__32735 == null))?null:cljs.core.map.call(null,((function (G__32735,___$1,owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726){
return (function (p1__32717_SHARP_){return clustermap.components.filter_description.render_filter_component.call(null,self__.filter_spec,p1__32717_SHARP_);
});})(G__32735,___$1,owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726))
,G__32735));var G__32735__$2 = (((G__32735__$1 == null))?null:cljs.core.filter.call(null,cljs.core.identity,G__32735__$1));return G__32735__$2;
})())));
});})(owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726))
;
clustermap.components.filter_description.t32732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726){
return (function (_32734){var self__ = this;
var _32734__$1 = this;return self__.meta32733;
});})(owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726))
;
clustermap.components.filter_description.t32732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726){
return (function (_32734,meta32733__$1){var self__ = this;
var _32734__$1 = this;return (new clustermap.components.filter_description.t32732(self__.owner,self__.map32721,self__.input_checker32725,self__.output_schema32723,self__.constructor32719,self__.filter_spec,self__.state,self__.map32722,self__.G__32727,self__.components,self__.validate__6034__auto__,self__.output_checker32726,self__.ufv__,self__.input_schema32724,meta32733__$1));
});})(owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726))
;
clustermap.components.filter_description.__GT_t32732 = ((function (owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726){
return (function __GT_t32732(owner__$1,map32721__$1,input_checker32725__$1,output_schema32723__$1,constructor32719__$1,filter_spec__$1,state__$1,map32722__$1,G__32727__$1,components__$1,validate__6034__auto____$1,output_checker32726__$1,ufv____$1,input_schema32724__$1,meta32733){return (new clustermap.components.filter_description.t32732(owner__$1,map32721__$1,input_checker32725__$1,output_schema32723__$1,constructor32719__$1,filter_spec__$1,state__$1,map32722__$1,G__32727__$1,components__$1,validate__6034__auto____$1,output_checker32726__$1,ufv____$1,input_schema32724__$1,meta32733));
});})(owner,state,filter_spec,components,map32722,validate__6034__auto__,ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726))
;
}
return (new clustermap.components.filter_description.t32732(owner,map32721,input_checker32725,output_schema32723,constructor32719,filter_spec,state,map32722,G__32727,components,validate__6034__auto__,output_checker32726,ufv__,input_schema32724,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32743 = output_checker32726.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32743))
{var error__6036__auto___32744 = temp__4126__auto___32743;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32719","constructor32719",-1821264849,null),cljs.core.pr_str.call(null,error__6036__auto___32744)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32744,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32723,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema32723,input_schema32724,input_checker32725,output_checker32726))
,schema.core.make_fn_schema.call(null,output_schema32723,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32724], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_description.filter_description_component = ((function (component_fnk__7881__auto___32739){
return (function() { 
var filter_description_component__delegate = function (data__7882__auto__,owner32718,p__32736){var vec__32738 = p__32736;var opts__7883__auto__ = cljs.core.nth.call(null,vec__32738,(0),null);return component_fnk__7881__auto___32739.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner32718),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner32718,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_description_component = function (data__7882__auto__,owner32718,var_args){
var p__32736 = null;if (arguments.length > 2) {
  p__32736 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_description_component__delegate.call(this,data__7882__auto__,owner32718,p__32736);};
filter_description_component.cljs$lang$maxFixedArity = 2;
filter_description_component.cljs$lang$applyTo = (function (arglist__32745){
var data__7882__auto__ = cljs.core.first(arglist__32745);
arglist__32745 = cljs.core.next(arglist__32745);
var owner32718 = cljs.core.first(arglist__32745);
var p__32736 = cljs.core.rest(arglist__32745);
return filter_description_component__delegate(data__7882__auto__,owner32718,p__32736);
});
filter_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_description_component__delegate;
return filter_description_component;
})()
;})(component_fnk__7881__auto___32739))
;
clustermap.components.filter_description.__GT_filter_description_component = (function() {
var __GT_filter_description_component = null;
var __GT_filter_description_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__);
});
var __GT_filter_description_component__2 = (function (cursor__7850__auto__,m32720){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__,m32720);
});
__GT_filter_description_component = function(cursor__7850__auto__,m32720){
switch(arguments.length){
case 1:
return __GT_filter_description_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_description_component__2.call(this,cursor__7850__auto__,m32720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_description_component__1;
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_description_component__2;
return __GT_filter_description_component;
})()
;
