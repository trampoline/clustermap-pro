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
var component_fnk__15794__auto___29121 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29105 = schema.core.Any;var input_schema29106 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_description.FilterDescriptionSchema], true, false),new cljs.core.Symbol(null,"map29103","map29103",-447291218,null))], null);var input_checker29107 = schema.core.checker.call(null,input_schema29106);var output_checker29108 = schema.core.checker.call(null,output_schema29105);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108){
return (function constructor29101(G__29109){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___29122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29109], null);var temp__4126__auto___29123 = input_checker29107.call(null,args__13948__auto___29122);if(cljs.core.truth_(temp__4126__auto___29123))
{var error__13949__auto___29124 = temp__4126__auto___29123;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29101","constructor29101",-1588036412,null),cljs.core.pr_str.call(null,error__13949__auto___29124)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29124,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___29122,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29106,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map29103 = G__29109;while(true){
if(cljs.core.map_QMARK_.call(null,map29103))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29103)));
}
var map29104 = plumbing.fnk.schema.safe_get.call(null,map29103,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map29104,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29104,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,map29103,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map29103,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_description.t29114 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_description.t29114 = (function (output_schema29105,constructor29101,owner,map29104,G__29109,map29103,output_checker29108,filter_spec,state,input_checker29107,components,validate__13947__auto__,input_schema29106,ufv__,meta29115){
this.output_schema29105 = output_schema29105;
this.constructor29101 = constructor29101;
this.owner = owner;
this.map29104 = map29104;
this.G__29109 = G__29109;
this.map29103 = map29103;
this.output_checker29108 = output_checker29108;
this.filter_spec = filter_spec;
this.state = state;
this.input_checker29107 = input_checker29107;
this.components = components;
this.validate__13947__auto__ = validate__13947__auto__;
this.input_schema29106 = input_schema29106;
this.ufv__ = ufv__;
this.meta29115 = meta29115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_description.t29114.cljs$lang$type = true;
clustermap.components.filter_description.t29114.cljs$lang$ctorStr = "clustermap.components.filter-description/t29114";
clustermap.components.filter_description.t29114.cljs$lang$ctorPrWriter = ((function (owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.filter-description/t29114");
});})(owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108))
;
clustermap.components.filter_description.t29114.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_description.t29114.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-description-component";
});})(owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108))
;
clustermap.components.filter_description.t29114.prototype.om$core$IRender$ = true;
clustermap.components.filter_description.t29114.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "filter-settings"},React.DOM.div({"className": "filter-buttons"},React.DOM.button({"className": "btn btn-primary", "id": "filter-toggle", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108){
return (function (e){cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
return true;
});})(___$1,owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108))
},(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))?"Close Filter":"Open Filter")),React.DOM.button({"className": "btn btn-default", "id": "filter-reset", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108){
return (function (e){return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.reset_filter.call(null,self__.filter_spec));
});})(___$1,owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108))
},"Reset")),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-selected-items","ul.filter-selected-items",-477659425)], null),(function (){var G__29117 = self__.components;var G__29117__$1 = (((G__29117 == null))?null:cljs.core.map.call(null,((function (G__29117,___$1,owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108){
return (function (p1__29099_SHARP_){return clustermap.components.filter_description.render_filter_component.call(null,self__.filter_spec,p1__29099_SHARP_);
});})(G__29117,___$1,owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108))
,G__29117));var G__29117__$2 = (((G__29117__$1 == null))?null:cljs.core.filter.call(null,cljs.core.identity,G__29117__$1));return G__29117__$2;
})())));
});})(owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108))
;
clustermap.components.filter_description.t29114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108){
return (function (_29116){var self__ = this;
var _29116__$1 = this;return self__.meta29115;
});})(owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108))
;
clustermap.components.filter_description.t29114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108){
return (function (_29116,meta29115__$1){var self__ = this;
var _29116__$1 = this;return (new clustermap.components.filter_description.t29114(self__.output_schema29105,self__.constructor29101,self__.owner,self__.map29104,self__.G__29109,self__.map29103,self__.output_checker29108,self__.filter_spec,self__.state,self__.input_checker29107,self__.components,self__.validate__13947__auto__,self__.input_schema29106,self__.ufv__,meta29115__$1));
});})(owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108))
;
clustermap.components.filter_description.__GT_t29114 = ((function (owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108){
return (function __GT_t29114(output_schema29105__$1,constructor29101__$1,owner__$1,map29104__$1,G__29109__$1,map29103__$1,output_checker29108__$1,filter_spec__$1,state__$1,input_checker29107__$1,components__$1,validate__13947__auto____$1,input_schema29106__$1,ufv____$1,meta29115){return (new clustermap.components.filter_description.t29114(output_schema29105__$1,constructor29101__$1,owner__$1,map29104__$1,G__29109__$1,map29103__$1,output_checker29108__$1,filter_spec__$1,state__$1,input_checker29107__$1,components__$1,validate__13947__auto____$1,input_schema29106__$1,ufv____$1,meta29115));
});})(owner,state,filter_spec,components,map29104,validate__13947__auto__,ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108))
;
}
return (new clustermap.components.filter_description.t29114(output_schema29105,constructor29101,owner,map29104,G__29109,map29103,output_checker29108,filter_spec,state,input_checker29107,components,validate__13947__auto__,input_schema29106,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___29125 = output_checker29108.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___29125))
{var error__13949__auto___29126 = temp__4126__auto___29125;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29101","constructor29101",-1588036412,null),cljs.core.pr_str.call(null,error__13949__auto___29126)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29126,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29105,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema29105,input_schema29106,input_checker29107,output_checker29108))
,schema.core.make_fn_schema.call(null,output_schema29105,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29106], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_description.filter_description_component = ((function (component_fnk__15794__auto___29121){
return (function() { 
var filter_description_component__delegate = function (data__15795__auto__,owner29100,p__29118){var vec__29120 = p__29118;var opts__15796__auto__ = cljs.core.nth.call(null,vec__29120,(0),null);return component_fnk__15794__auto___29121.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner29100),new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29100,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var filter_description_component = function (data__15795__auto__,owner29100,var_args){
var p__29118 = null;if (arguments.length > 2) {
  p__29118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_description_component__delegate.call(this,data__15795__auto__,owner29100,p__29118);};
filter_description_component.cljs$lang$maxFixedArity = 2;
filter_description_component.cljs$lang$applyTo = (function (arglist__29127){
var data__15795__auto__ = cljs.core.first(arglist__29127);
arglist__29127 = cljs.core.next(arglist__29127);
var owner29100 = cljs.core.first(arglist__29127);
var p__29118 = cljs.core.rest(arglist__29127);
return filter_description_component__delegate(data__15795__auto__,owner29100,p__29118);
});
filter_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_description_component__delegate;
return filter_description_component;
})()
;})(component_fnk__15794__auto___29121))
;
clustermap.components.filter_description.__GT_filter_description_component = (function() {
var __GT_filter_description_component = null;
var __GT_filter_description_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__15763__auto__);
});
var __GT_filter_description_component__2 = (function (cursor__15763__auto__,m29102){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__15763__auto__,m29102);
});
__GT_filter_description_component = function(cursor__15763__auto__,m29102){
switch(arguments.length){
case 1:
return __GT_filter_description_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_filter_description_component__2.call(this,cursor__15763__auto__,m29102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_description_component__1;
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_description_component__2;
return __GT_filter_description_component;
})()
;

//# sourceMappingURL=filter_description.js.map