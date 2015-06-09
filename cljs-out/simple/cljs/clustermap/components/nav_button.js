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
var component_fnk__7881__auto___32345 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32329 = schema.core.Any;var input_schema32330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map32325","map32325",287501534,null))], null);var input_checker32331 = schema.core.checker.call(null,input_schema32330);var output_checker32332 = schema.core.checker.call(null,output_schema32329);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332){
return (function constructor32323(G__32333){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32346 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32333], null);var temp__4126__auto___32347 = input_checker32331.call(null,args__6035__auto___32346);if(cljs.core.truth_(temp__4126__auto___32347))
{var error__6036__auto___32348 = temp__4126__auto___32347;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32323","constructor32323",-1676706560,null),cljs.core.pr_str.call(null,error__6036__auto___32348)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32348,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32346,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32330,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map32325 = G__32333;while(true){
if(cljs.core.map_QMARK_.call(null,map32325))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32325)));
}
var map32327 = plumbing.fnk.schema.safe_get.call(null,map32325,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map32328 = plumbing.fnk.schema.safe_get.call(null,map32327,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map32328,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map32328,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map32328,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map32328,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map32326 = plumbing.fnk.schema.safe_get.call(null,map32325,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map32326,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map32325,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t32338 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t32338 = (function (constructor32323,G__32333,owner,map32326,text,map32327,map32328,input_schema32330,output_checker32332,output_schema32329,target_view,input_checker32331,validate__6034__auto__,id,class$,app,ufv__,map32325,meta32339){
this.constructor32323 = constructor32323;
this.G__32333 = G__32333;
this.owner = owner;
this.map32326 = map32326;
this.text = text;
this.map32327 = map32327;
this.map32328 = map32328;
this.input_schema32330 = input_schema32330;
this.output_checker32332 = output_checker32332;
this.output_schema32329 = output_schema32329;
this.target_view = target_view;
this.input_checker32331 = input_checker32331;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.map32325 = map32325;
this.meta32339 = meta32339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t32338.cljs$lang$type = true;
clustermap.components.nav_button.t32338.cljs$lang$ctorStr = "clustermap.components.nav-button/t32338";
clustermap.components.nav_button.t32338.cljs$lang$ctorPrWriter = ((function (owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t32338");
});})(owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332))
;
clustermap.components.nav_button.t32338.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t32338.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332))
;
clustermap.components.nav_button.t32338.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t32338.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332){
return (function (_){var self__ = this;
var ___$1 = this;var attrs32341 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs32341))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs32341)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32341))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32341),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332))
;
clustermap.components.nav_button.t32338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332){
return (function (_32340){var self__ = this;
var _32340__$1 = this;return self__.meta32339;
});})(owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332))
;
clustermap.components.nav_button.t32338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332){
return (function (_32340,meta32339__$1){var self__ = this;
var _32340__$1 = this;return (new clustermap.components.nav_button.t32338(self__.constructor32323,self__.G__32333,self__.owner,self__.map32326,self__.text,self__.map32327,self__.map32328,self__.input_schema32330,self__.output_checker32332,self__.output_schema32329,self__.target_view,self__.input_checker32331,self__.validate__6034__auto__,self__.id,self__.class$,self__.app,self__.ufv__,self__.map32325,meta32339__$1));
});})(owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332))
;
clustermap.components.nav_button.__GT_t32338 = ((function (owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332){
return (function __GT_t32338(constructor32323__$1,G__32333__$1,owner__$1,map32326__$1,text__$1,map32327__$1,map32328__$1,input_schema32330__$1,output_checker32332__$1,output_schema32329__$1,target_view__$1,input_checker32331__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,map32325__$1,meta32339){return (new clustermap.components.nav_button.t32338(constructor32323__$1,G__32333__$1,owner__$1,map32326__$1,text__$1,map32327__$1,map32328__$1,input_schema32330__$1,output_checker32332__$1,output_schema32329__$1,target_view__$1,input_checker32331__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,map32325__$1,meta32339));
});})(owner,app,map32326,id,class$,target_view,text,map32328,map32327,validate__6034__auto__,ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332))
;
}
return (new clustermap.components.nav_button.t32338(constructor32323,G__32333,owner,map32326,text,map32327,map32328,input_schema32330,output_checker32332,output_schema32329,target_view,input_checker32331,validate__6034__auto__,id,class$,app,ufv__,map32325,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32349 = output_checker32332.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32349))
{var error__6036__auto___32350 = temp__4126__auto___32349;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32323","constructor32323",-1676706560,null),cljs.core.pr_str.call(null,error__6036__auto___32350)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32350,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32329,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema32329,input_schema32330,input_checker32331,output_checker32332))
,schema.core.make_fn_schema.call(null,output_schema32329,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32330], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___32345){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner32322,p__32342){var vec__32344 = p__32342;var opts__7883__auto__ = cljs.core.nth.call(null,vec__32344,(0),null);return component_fnk__7881__auto___32345.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner32322),new cljs.core.Keyword(null,"owner","owner",-392611939),owner32322,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner32322,var_args){
var p__32342 = null;if (arguments.length > 2) {
  p__32342 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner32322,p__32342);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__32351){
var data__7882__auto__ = cljs.core.first(arglist__32351);
arglist__32351 = cljs.core.next(arglist__32351);
var owner32322 = cljs.core.first(arglist__32351);
var p__32342 = cljs.core.rest(arglist__32351);
return nav_button_component__delegate(data__7882__auto__,owner32322,p__32342);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___32345))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m32324){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m32324);
});
__GT_nav_button_component = function(cursor__7850__auto__,m32324){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m32324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
