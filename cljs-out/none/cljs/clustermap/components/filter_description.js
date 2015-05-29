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
var component_fnk__15756__auto___28156 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28140 = schema.core.Any;var input_schema28141 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_description.FilterDescriptionSchema], true, false),new cljs.core.Symbol(null,"map28138","map28138",-952712066,null))], null);var input_checker28142 = schema.core.checker.call(null,input_schema28141);var output_checker28143 = schema.core.checker.call(null,output_schema28140);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143){
return (function constructor28136(G__28144){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___28157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28144], null);var temp__4126__auto___28158 = input_checker28142.call(null,args__13910__auto___28157);if(cljs.core.truth_(temp__4126__auto___28158))
{var error__13911__auto___28159 = temp__4126__auto___28158;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28136","constructor28136",1825383333,null),cljs.core.pr_str.call(null,error__13911__auto___28159)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28159,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___28157,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28141,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map28138 = G__28144;while(true){
if(cljs.core.map_QMARK_.call(null,map28138))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28138)));
}
var map28139 = plumbing.fnk.schema.safe_get.call(null,map28138,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var components = plumbing.fnk.schema.safe_get.call(null,map28139,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28139,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var state = plumbing.fnk.schema.safe_get.call(null,map28138,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);var owner = plumbing.fnk.schema.safe_get.call(null,map28138,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_description.t28149 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_description.t28149 = (function (output_checker28143,output_schema28140,owner,constructor28136,input_schema28141,validate__13909__auto__,filter_spec,map28139,G__28144,state,components,input_checker28142,ufv__,map28138,meta28150){
this.output_checker28143 = output_checker28143;
this.output_schema28140 = output_schema28140;
this.owner = owner;
this.constructor28136 = constructor28136;
this.input_schema28141 = input_schema28141;
this.validate__13909__auto__ = validate__13909__auto__;
this.filter_spec = filter_spec;
this.map28139 = map28139;
this.G__28144 = G__28144;
this.state = state;
this.components = components;
this.input_checker28142 = input_checker28142;
this.ufv__ = ufv__;
this.map28138 = map28138;
this.meta28150 = meta28150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_description.t28149.cljs$lang$type = true;
clustermap.components.filter_description.t28149.cljs$lang$ctorStr = "clustermap.components.filter-description/t28149";
clustermap.components.filter_description.t28149.cljs$lang$ctorPrWriter = ((function (owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.filter-description/t28149");
});})(owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143))
;
clustermap.components.filter_description.t28149.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_description.t28149.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-description-component";
});})(owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143))
;
clustermap.components.filter_description.t28149.prototype.om$core$IRender$ = true;
clustermap.components.filter_description.t28149.prototype.om$core$IRender$render$arity$1 = ((function (owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "filter-settings"},React.DOM.div({"className": "filter-buttons"},React.DOM.button({"className": "btn btn-primary", "id": "filter-toggle", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143){
return (function (e){cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
return true;
});})(___$1,owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143))
},(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))?"Close Filter":"Open Filter")),React.DOM.button({"className": "btn btn-default", "id": "filter-reset", "type": "button", "onClick": ((function (___$1,owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143){
return (function (e){return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.reset_filter.call(null,self__.filter_spec));
});})(___$1,owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143))
},"Reset")),sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-selected-items","ul.filter-selected-items",-477659425)], null),(function (){var G__28152 = self__.components;var G__28152__$1 = (((G__28152 == null))?null:cljs.core.map.call(null,((function (G__28152,___$1,owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143){
return (function (p1__28134_SHARP_){return clustermap.components.filter_description.render_filter_component.call(null,self__.filter_spec,p1__28134_SHARP_);
});})(G__28152,___$1,owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143))
,G__28152));var G__28152__$2 = (((G__28152__$1 == null))?null:cljs.core.filter.call(null,cljs.core.identity,G__28152__$1));return G__28152__$2;
})())));
});})(owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143))
;
clustermap.components.filter_description.t28149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143){
return (function (_28151){var self__ = this;
var _28151__$1 = this;return self__.meta28150;
});})(owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143))
;
clustermap.components.filter_description.t28149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143){
return (function (_28151,meta28150__$1){var self__ = this;
var _28151__$1 = this;return (new clustermap.components.filter_description.t28149(self__.output_checker28143,self__.output_schema28140,self__.owner,self__.constructor28136,self__.input_schema28141,self__.validate__13909__auto__,self__.filter_spec,self__.map28139,self__.G__28144,self__.state,self__.components,self__.input_checker28142,self__.ufv__,self__.map28138,meta28150__$1));
});})(owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143))
;
clustermap.components.filter_description.__GT_t28149 = ((function (owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143){
return (function __GT_t28149(output_checker28143__$1,output_schema28140__$1,owner__$1,constructor28136__$1,input_schema28141__$1,validate__13909__auto____$1,filter_spec__$1,map28139__$1,G__28144__$1,state__$1,components__$1,input_checker28142__$1,ufv____$1,map28138__$1,meta28150){return (new clustermap.components.filter_description.t28149(output_checker28143__$1,output_schema28140__$1,owner__$1,constructor28136__$1,input_schema28141__$1,validate__13909__auto____$1,filter_spec__$1,map28139__$1,G__28144__$1,state__$1,components__$1,input_checker28142__$1,ufv____$1,map28138__$1,meta28150));
});})(owner,state,filter_spec,components,map28139,validate__13909__auto__,ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143))
;
}
return (new clustermap.components.filter_description.t28149(output_checker28143,output_schema28140,owner,constructor28136,input_schema28141,validate__13909__auto__,filter_spec,map28139,G__28144,state,components,input_checker28142,ufv__,map28138,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___28160 = output_checker28143.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___28160))
{var error__13911__auto___28161 = temp__4126__auto___28160;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28136","constructor28136",1825383333,null),cljs.core.pr_str.call(null,error__13911__auto___28161)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28161,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28140,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema28140,input_schema28141,input_checker28142,output_checker28143))
,schema.core.make_fn_schema.call(null,output_schema28140,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28141], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_description.filter_description_component = ((function (component_fnk__15756__auto___28156){
return (function() { 
var filter_description_component__delegate = function (data__15757__auto__,owner28135,p__28153){var vec__28155 = p__28153;var opts__15758__auto__ = cljs.core.nth.call(null,vec__28155,(0),null);return component_fnk__15756__auto___28156.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner28135),new cljs.core.Keyword(null,"opts","opts",155075701),opts__15758__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28135,new cljs.core.Keyword(null,"data","data",-232669377),data__15757__auto__], null));
};
var filter_description_component = function (data__15757__auto__,owner28135,var_args){
var p__28153 = null;if (arguments.length > 2) {
  p__28153 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_description_component__delegate.call(this,data__15757__auto__,owner28135,p__28153);};
filter_description_component.cljs$lang$maxFixedArity = 2;
filter_description_component.cljs$lang$applyTo = (function (arglist__28162){
var data__15757__auto__ = cljs.core.first(arglist__28162);
arglist__28162 = cljs.core.next(arglist__28162);
var owner28135 = cljs.core.first(arglist__28162);
var p__28153 = cljs.core.rest(arglist__28162);
return filter_description_component__delegate(data__15757__auto__,owner28135,p__28153);
});
filter_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_description_component__delegate;
return filter_description_component;
})()
;})(component_fnk__15756__auto___28156))
;
clustermap.components.filter_description.__GT_filter_description_component = (function() {
var __GT_filter_description_component = null;
var __GT_filter_description_component__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__15725__auto__);
});
var __GT_filter_description_component__2 = (function (cursor__15725__auto__,m28137){return om.core.build.call(null,clustermap.components.filter_description.filter_description_component,cursor__15725__auto__,m28137);
});
__GT_filter_description_component = function(cursor__15725__auto__,m28137){
switch(arguments.length){
case 1:
return __GT_filter_description_component__1.call(this,cursor__15725__auto__);
case 2:
return __GT_filter_description_component__2.call(this,cursor__15725__auto__,m28137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_description_component__1;
__GT_filter_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_description_component__2;
return __GT_filter_description_component;
})()
;

//# sourceMappingURL=filter_description.js.map