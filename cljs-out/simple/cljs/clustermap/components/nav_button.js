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
var component_fnk__7881__auto___31327 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31311 = schema.core.Any;var input_schema31312 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map31307","map31307",-505788847,null))], null);var input_checker31313 = schema.core.checker.call(null,input_schema31312);var output_checker31314 = schema.core.checker.call(null,output_schema31311);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314){
return (function constructor31305(G__31315){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31328 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31315], null);var temp__4126__auto___31329 = input_checker31313.call(null,args__6035__auto___31328);if(cljs.core.truth_(temp__4126__auto___31329))
{var error__6036__auto___31330 = temp__4126__auto___31329;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31305","constructor31305",868942208,null),cljs.core.pr_str.call(null,error__6036__auto___31330)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31330,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31328,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31312,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31307 = G__31315;while(true){
if(cljs.core.map_QMARK_.call(null,map31307))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31307)));
}
var map31309 = plumbing.fnk.schema.safe_get.call(null,map31307,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map31310 = plumbing.fnk.schema.safe_get.call(null,map31309,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map31310,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map31310,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map31310,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map31310,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map31308 = plumbing.fnk.schema.safe_get.call(null,map31307,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map31308,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31307,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t31320 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t31320 = (function (constructor31305,owner,text,output_checker31314,map31309,input_checker31313,output_schema31311,input_schema31312,map31310,map31308,map31307,G__31315,target_view,validate__6034__auto__,id,class$,app,ufv__,meta31321){
this.constructor31305 = constructor31305;
this.owner = owner;
this.text = text;
this.output_checker31314 = output_checker31314;
this.map31309 = map31309;
this.input_checker31313 = input_checker31313;
this.output_schema31311 = output_schema31311;
this.input_schema31312 = input_schema31312;
this.map31310 = map31310;
this.map31308 = map31308;
this.map31307 = map31307;
this.G__31315 = G__31315;
this.target_view = target_view;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.meta31321 = meta31321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t31320.cljs$lang$type = true;
clustermap.components.nav_button.t31320.cljs$lang$ctorStr = "clustermap.components.nav-button/t31320";
clustermap.components.nav_button.t31320.cljs$lang$ctorPrWriter = ((function (owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t31320");
});})(owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314))
;
clustermap.components.nav_button.t31320.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t31320.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314))
;
clustermap.components.nav_button.t31320.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t31320.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31323 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs31323))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs31323)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31323))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31323),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314))
;
clustermap.components.nav_button.t31320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314){
return (function (_31322){var self__ = this;
var _31322__$1 = this;return self__.meta31321;
});})(owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314))
;
clustermap.components.nav_button.t31320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314){
return (function (_31322,meta31321__$1){var self__ = this;
var _31322__$1 = this;return (new clustermap.components.nav_button.t31320(self__.constructor31305,self__.owner,self__.text,self__.output_checker31314,self__.map31309,self__.input_checker31313,self__.output_schema31311,self__.input_schema31312,self__.map31310,self__.map31308,self__.map31307,self__.G__31315,self__.target_view,self__.validate__6034__auto__,self__.id,self__.class$,self__.app,self__.ufv__,meta31321__$1));
});})(owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314))
;
clustermap.components.nav_button.__GT_t31320 = ((function (owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314){
return (function __GT_t31320(constructor31305__$1,owner__$1,text__$1,output_checker31314__$1,map31309__$1,input_checker31313__$1,output_schema31311__$1,input_schema31312__$1,map31310__$1,map31308__$1,map31307__$1,G__31315__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,meta31321){return (new clustermap.components.nav_button.t31320(constructor31305__$1,owner__$1,text__$1,output_checker31314__$1,map31309__$1,input_checker31313__$1,output_schema31311__$1,input_schema31312__$1,map31310__$1,map31308__$1,map31307__$1,G__31315__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,meta31321));
});})(owner,app,map31308,id,class$,target_view,text,map31310,map31309,validate__6034__auto__,ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314))
;
}
return (new clustermap.components.nav_button.t31320(constructor31305,owner,text,output_checker31314,map31309,input_checker31313,output_schema31311,input_schema31312,map31310,map31308,map31307,G__31315,target_view,validate__6034__auto__,id,class$,app,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31331 = output_checker31314.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31331))
{var error__6036__auto___31332 = temp__4126__auto___31331;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31305","constructor31305",868942208,null),cljs.core.pr_str.call(null,error__6036__auto___31332)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31332,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31311,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31311,input_schema31312,input_checker31313,output_checker31314))
,schema.core.make_fn_schema.call(null,output_schema31311,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31312], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___31327){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner31304,p__31324){var vec__31326 = p__31324;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31326,(0),null);return component_fnk__7881__auto___31327.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner31304),new cljs.core.Keyword(null,"owner","owner",-392611939),owner31304,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner31304,var_args){
var p__31324 = null;if (arguments.length > 2) {
  p__31324 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner31304,p__31324);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__31333){
var data__7882__auto__ = cljs.core.first(arglist__31333);
arglist__31333 = cljs.core.next(arglist__31333);
var owner31304 = cljs.core.first(arglist__31333);
var p__31324 = cljs.core.rest(arglist__31333);
return nav_button_component__delegate(data__7882__auto__,owner31304,p__31324);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___31327))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m31306){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m31306);
});
__GT_nav_button_component = function(cursor__7850__auto__,m31306){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m31306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
