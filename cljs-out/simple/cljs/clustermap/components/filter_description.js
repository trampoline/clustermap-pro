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
var component_fnk__7881__auto___32915 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32899 = schema.core.Any;var input_schema32900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_description.FilterDescriptionSchema], true, false),new cljs.core.Symbol(null,"map32897","map32897",-250599276,null))], null);var input_checker32901 = schema.core.checker.call(null,input_schema32900);var output_checker32902 = schema.core.checker.call(null,output_schema32899);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902){
return (function constructor32895(G__32903){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32903], null);var temp__4126__auto___32917 = input_checker32901.call(null,args__6035__auto___32916);if(cljs.core.truth_(temp__4126__auto___32917))
{var error__6036__auto___32918 = temp__4126__auto___32917;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32895","constructor32895",658806883,null),cljs.core.pr_str.call(null,error__6036__auto___32918)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32918,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32916,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32900,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map32897 = G__32903;while(true){
if(cljs.core.map_QMARK_.call(null,map32897))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32897)));
}
var map32898 = plumbing.fnk.schema.safe_get.call(null,map32897,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map32898,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map32898,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,map32897,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map32897,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_description.t32908 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_description.t32908 = (function (G__32903,constructor32895,owner,filter_spec,input_schema32900,output_checker32902,map32898,map32897,input_checker32901,state,output_schema32899,components,validate__6034__auto__,ufv__,meta32909){
this.G__32903 = G__32903;
this.constructor32895 = constructor32895;
this.owner = owner;
this.filter_spec = filter_spec;
this.input_schema32900 = input_schema32900;
this.output_checker32902 = output_checker32902;
this.map32898 = map32898;
this.map32897 = map32897;
this.input_checker32901 = input_checker32901;
this.state = state;
this.output_schema32899 = output_schema32899;
this.components = components;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.meta32909 = meta32909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_description.t32908.cljs$lang$type = true;
clustermap.components.filter_description.t32908.cljs$lang$ctorStr = "clustermap.components.filter-description/t32908";
clustermap.components.filter_description.t32908.cljs$lang$ctorPrWriter = ((function (owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter-description/t32908");
});})(owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902))
;
clustermap.components.filter_description.t32908.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_description.t32908.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-description-component";
});})(owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902))
;
clustermap.components.filter_description.t32908.prototype.om$core$IRender$ = true;
clustermap.components.filter_description.t32908.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "filter-settings"},React.DOM.div({"className": "filter-buttons"},React.DOM.button({"className": "btn btn-primary", "id": "filter-toggle", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902){
return (function (e){cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
return true;
});})(___$1,owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902))
},(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))?"Close Filter":"Open Filter")),React.DOM.button({"className": "btn btn-default", "id": "filter-reset", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902){
return (function (e){return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.reset_filter.call(null,self__.filter_spec));
});})(___$1,owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902))
},"Reset")),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-selected-items","ul.filter-selected-items",-477659425)], null),(function (){var G__32911 = self__.components;var G__32911__$1 = (((G__32911 == null))?null:cljs.core.map.call(null,((function (G__32911,___$1,owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902){
return (function (p1__32893_SHARP_){return clustermap.components.filter_description.render_filter_component.call(null,self__.filter_spec,p1__32893_SHARP_);
});})(G__32911,___$1,owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902))
,G__32911));var G__32911__$2 = (((G__32911__$1 == null))?null:cljs.core.filter.call(null,cljs.core.identity,G__32911__$1));return G__32911__$2;
})())));
});})(owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902))
;
clustermap.components.filter_description.t32908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902){
return (function (_32910){var self__ = this;
var _32910__$1 = this;return self__.meta32909;
});})(owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902))
;
clustermap.components.filter_description.t32908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902){
return (function (_32910,meta32909__$1){var self__ = this;
var _32910__$1 = this;return (new clustermap.components.filter_description.t32908(self__.G__32903,self__.constructor32895,self__.owner,self__.filter_spec,self__.input_schema32900,self__.output_checker32902,self__.map32898,self__.map32897,self__.input_checker32901,self__.state,self__.output_schema32899,self__.components,self__.validate__6034__auto__,self__.ufv__,meta32909__$1));
});})(owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902))
;
clustermap.components.filter_description.__GT_t32908 = ((function (owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902){
return (function __GT_t32908(G__32903__$1,constructor32895__$1,owner__$1,filter_spec__$1,input_schema32900__$1,output_checker32902__$1,map32898__$1,map32897__$1,input_checker32901__$1,state__$1,output_schema32899__$1,components__$1,validate__6034__auto____$1,ufv____$1,meta32909){return (new clustermap.components.filter_description.t32908(G__32903__$1,constructor32895__$1,owner__$1,filter_spec__$1,input_schema32900__$1,output_checker32902__$1,map32898__$1,map32897__$1,input_checker32901__$1,state__$1,output_schema32899__$1,components__$1,validate__6034__auto____$1,ufv____$1,meta32909));
});})(owner,state,filter_spec,components,map32898,validate__6034__auto__,ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902))
;
}
return (new clustermap.components.filter_description.t32908(G__32903,constructor32895,owner,filter_spec,input_schema32900,output_checker32902,map32898,map32897,input_checker32901,state,output_schema32899,components,validate__6034__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32919 = output_checker32902.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32919))
{var error__6036__auto___32920 = temp__4126__auto___32919;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32895","constructor32895",658806883,null),cljs.core.pr_str.call(null,error__6036__auto___32920)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32920,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32899,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema32899,input_schema32900,input_checker32901,output_checker32902))
,schema.core.make_fn_schema.call(null,output_schema32899,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32900], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_description.filter_description_component = ((function (component_fnk__7881__auto___32915){
return (function() { 
var filter_description_component__delegate = function (data__7882__auto__,owner32894,p__32912){var vec__32914 = p__32912;var opts__7883__auto__ = cljs.core.nth.call(null,vec__32914,(0),null);return component_fnk__7881__auto___32915.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner32894),new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner32894,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_description_component = function (data__7882__auto__,owner32894,var_args){
var p__32912 = null;if (arguments.length > 2) {
  p__32912 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_description_component__delegate.call(this,data__7882__auto__,owner32894,p__32912);};
filter_description_component.cljs$lang$maxFixedArity = 2;
filter_description_component.cljs$lang$applyTo = (function (arglist__32921){
var data__7882__auto__ = cljs.core.first(arglist__32921);
arglist__32921 = cljs.core.next(arglist__32921);
var owner32894 = cljs.core.first(arglist__32921);
var p__32912 = cljs.core.rest(arglist__32921);
return filter_description_component__delegate(data__7882__auto__,owner32894,p__32912);
});
filter_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_description_component__delegate;
return filter_description_component;
})()
;})(component_fnk__7881__auto___32915))
;
clustermap.components.filter_description.__GT_filter_description_component = (function() {
var __GT_filter_description_component = null;
var __GT_filter_description_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__);
});
var __GT_filter_description_component__2 = (function (cursor__7850__auto__,m32896){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__7850__auto__,m32896);
});
__GT_filter_description_component = function(cursor__7850__auto__,m32896){
switch(arguments.length){
case 1:
return __GT_filter_description_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_description_component__2.call(this,cursor__7850__auto__,m32896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_description_component__1;
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_description_component__2;
return __GT_filter_description_component;
})()
;
