// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.nav_button');
goog.require('cljs.core');
goog.require('plumbing.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('plumbing.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.nav_button.NavButtonSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",-1790561697),schema.core.Str,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.Str], true, false)], null);
var component_fnk__7881__auto___30971 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30955 = schema.core.Any;var input_schema30956 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map30951","map30951",-732198448,null))], null);var input_checker30957 = schema.core.checker.call(null,input_schema30956);var output_checker30958 = schema.core.checker.call(null,output_schema30955);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958){
return (function constructor30949(G__30959){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30972 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30959], null);var temp__4126__auto___30973 = input_checker30957.call(null,args__6035__auto___30972);if(cljs.core.truth_(temp__4126__auto___30973))
{var error__6036__auto___30974 = temp__4126__auto___30973;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30949","constructor30949",-1246691089,null),cljs.core.pr_str.call(null,error__6036__auto___30974)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30974,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30972,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30956,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30951 = G__30959;while(true){
if(cljs.core.map_QMARK_.call(null,map30951))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30951)));
}
var map30953 = plumbing.fnk.schema.safe_get.call(null,map30951,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map30954 = plumbing.fnk.schema.safe_get.call(null,map30953,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map30954,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map30954,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map30954,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map30954,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map30952 = plumbing.fnk.schema.safe_get.call(null,map30951,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map30952,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30951,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t30964 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t30964 = (function (output_checker30958,owner,G__30959,text,map30953,output_schema30955,input_checker30957,constructor30949,map30951,input_schema30956,map30954,target_view,validate__6034__auto__,id,class$,map30952,app,ufv__,meta30965){
this.output_checker30958 = output_checker30958;
this.owner = owner;
this.G__30959 = G__30959;
this.text = text;
this.map30953 = map30953;
this.output_schema30955 = output_schema30955;
this.input_checker30957 = input_checker30957;
this.constructor30949 = constructor30949;
this.map30951 = map30951;
this.input_schema30956 = input_schema30956;
this.map30954 = map30954;
this.target_view = target_view;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.map30952 = map30952;
this.app = app;
this.ufv__ = ufv__;
this.meta30965 = meta30965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t30964.cljs$lang$type = true;
clustermap.components.nav_button.t30964.cljs$lang$ctorStr = "clustermap.components.nav-button/t30964";
clustermap.components.nav_button.t30964.cljs$lang$ctorPrWriter = ((function (owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t30964");
});})(owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958))
;
clustermap.components.nav_button.t30964.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t30964.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958))
;
clustermap.components.nav_button.t30964.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t30964.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958){
return (function (_){var self__ = this;
var ___$1 = this;var attrs30967 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs30967))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs30967)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30967))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30967),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958))
;
clustermap.components.nav_button.t30964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958){
return (function (_30966){var self__ = this;
var _30966__$1 = this;return self__.meta30965;
});})(owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958))
;
clustermap.components.nav_button.t30964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958){
return (function (_30966,meta30965__$1){var self__ = this;
var _30966__$1 = this;return (new clustermap.components.nav_button.t30964(self__.output_checker30958,self__.owner,self__.G__30959,self__.text,self__.map30953,self__.output_schema30955,self__.input_checker30957,self__.constructor30949,self__.map30951,self__.input_schema30956,self__.map30954,self__.target_view,self__.validate__6034__auto__,self__.id,self__.class$,self__.map30952,self__.app,self__.ufv__,meta30965__$1));
});})(owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958))
;
clustermap.components.nav_button.__GT_t30964 = ((function (owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958){
return (function __GT_t30964(output_checker30958__$1,owner__$1,G__30959__$1,text__$1,map30953__$1,output_schema30955__$1,input_checker30957__$1,constructor30949__$1,map30951__$1,input_schema30956__$1,map30954__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,map30952__$1,app__$1,ufv____$1,meta30965){return (new clustermap.components.nav_button.t30964(output_checker30958__$1,owner__$1,G__30959__$1,text__$1,map30953__$1,output_schema30955__$1,input_checker30957__$1,constructor30949__$1,map30951__$1,input_schema30956__$1,map30954__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,map30952__$1,app__$1,ufv____$1,meta30965));
});})(owner,app,map30952,id,class$,target_view,text,map30954,map30953,validate__6034__auto__,ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958))
;
}
return (new clustermap.components.nav_button.t30964(output_checker30958,owner,G__30959,text,map30953,output_schema30955,input_checker30957,constructor30949,map30951,input_schema30956,map30954,target_view,validate__6034__auto__,id,class$,map30952,app,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30975 = output_checker30958.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30975))
{var error__6036__auto___30976 = temp__4126__auto___30975;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30949","constructor30949",-1246691089,null),cljs.core.pr_str.call(null,error__6036__auto___30976)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30976,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30955,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30955,input_schema30956,input_checker30957,output_checker30958))
,schema.core.make_fn_schema.call(null,output_schema30955,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30956], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___30971){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner30948,p__30968){var vec__30970 = p__30968;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30970,(0),null);return component_fnk__7881__auto___30971.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner30948),new cljs.core.Keyword(null,"owner","owner",-392611939),owner30948,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner30948,var_args){
var p__30968 = null;if (arguments.length > 2) {
  p__30968 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner30948,p__30968);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__30977){
var data__7882__auto__ = cljs.core.first(arglist__30977);
arglist__30977 = cljs.core.next(arglist__30977);
var owner30948 = cljs.core.first(arglist__30977);
var p__30968 = cljs.core.rest(arglist__30977);
return nav_button_component__delegate(data__7882__auto__,owner30948,p__30968);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___30971))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m30950){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m30950);
});
__GT_nav_button_component = function(cursor__7850__auto__,m30950){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m30950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
