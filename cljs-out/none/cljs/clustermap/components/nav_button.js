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
var component_fnk__15794__auto___31500 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31484 = schema.core.Any;var input_schema31485 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map31480","map31480",489816238,null))], null);var input_checker31486 = schema.core.checker.call(null,input_schema31485);var output_checker31487 = schema.core.checker.call(null,output_schema31484);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487){
return (function constructor31478(G__31488){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___31501 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31488], null);var temp__4126__auto___31502 = input_checker31486.call(null,args__13948__auto___31501);if(cljs.core.truth_(temp__4126__auto___31502))
{var error__13949__auto___31503 = temp__4126__auto___31502;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31478","constructor31478",-737933535,null),cljs.core.pr_str.call(null,error__13949__auto___31503)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___31503,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___31501,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31485,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map31480 = G__31488;while(true){
if(cljs.core.map_QMARK_.call(null,map31480))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31480)));
}
var map31482 = plumbing.fnk.schema.safe_get.call(null,map31480,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map31483 = plumbing.fnk.schema.safe_get.call(null,map31482,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map31483,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map31483,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map31483,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map31483,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map31481 = plumbing.fnk.schema.safe_get.call(null,map31480,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map31481,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31480,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t31493 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t31493 = (function (constructor31478,owner,text,map31481,output_schema31484,map31483,input_checker31486,map31482,map31480,G__31488,output_checker31487,target_view,validate__13947__auto__,id,class$,app,ufv__,input_schema31485,meta31494){
this.constructor31478 = constructor31478;
this.owner = owner;
this.text = text;
this.map31481 = map31481;
this.output_schema31484 = output_schema31484;
this.map31483 = map31483;
this.input_checker31486 = input_checker31486;
this.map31482 = map31482;
this.map31480 = map31480;
this.G__31488 = G__31488;
this.output_checker31487 = output_checker31487;
this.target_view = target_view;
this.validate__13947__auto__ = validate__13947__auto__;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.input_schema31485 = input_schema31485;
this.meta31494 = meta31494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t31493.cljs$lang$type = true;
clustermap.components.nav_button.t31493.cljs$lang$ctorStr = "clustermap.components.nav-button/t31493";
clustermap.components.nav_button.t31493.cljs$lang$ctorPrWriter = ((function (owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.nav-button/t31493");
});})(owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487))
;
clustermap.components.nav_button.t31493.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t31493.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487))
;
clustermap.components.nav_button.t31493.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t31493.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31496 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs31496))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs31496)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31496))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31496),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487))
;
clustermap.components.nav_button.t31493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487){
return (function (_31495){var self__ = this;
var _31495__$1 = this;return self__.meta31494;
});})(owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487))
;
clustermap.components.nav_button.t31493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487){
return (function (_31495,meta31494__$1){var self__ = this;
var _31495__$1 = this;return (new clustermap.components.nav_button.t31493(self__.constructor31478,self__.owner,self__.text,self__.map31481,self__.output_schema31484,self__.map31483,self__.input_checker31486,self__.map31482,self__.map31480,self__.G__31488,self__.output_checker31487,self__.target_view,self__.validate__13947__auto__,self__.id,self__.class$,self__.app,self__.ufv__,self__.input_schema31485,meta31494__$1));
});})(owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487))
;
clustermap.components.nav_button.__GT_t31493 = ((function (owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487){
return (function __GT_t31493(constructor31478__$1,owner__$1,text__$1,map31481__$1,output_schema31484__$1,map31483__$1,input_checker31486__$1,map31482__$1,map31480__$1,G__31488__$1,output_checker31487__$1,target_view__$1,validate__13947__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,input_schema31485__$1,meta31494){return (new clustermap.components.nav_button.t31493(constructor31478__$1,owner__$1,text__$1,map31481__$1,output_schema31484__$1,map31483__$1,input_checker31486__$1,map31482__$1,map31480__$1,G__31488__$1,output_checker31487__$1,target_view__$1,validate__13947__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,input_schema31485__$1,meta31494));
});})(owner,app,map31481,id,class$,target_view,text,map31483,map31482,validate__13947__auto__,ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487))
;
}
return (new clustermap.components.nav_button.t31493(constructor31478,owner,text,map31481,output_schema31484,map31483,input_checker31486,map31482,map31480,G__31488,output_checker31487,target_view,validate__13947__auto__,id,class$,app,ufv__,input_schema31485,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___31504 = output_checker31487.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___31504))
{var error__13949__auto___31505 = temp__4126__auto___31504;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31478","constructor31478",-737933535,null),cljs.core.pr_str.call(null,error__13949__auto___31505)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___31505,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31484,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema31484,input_schema31485,input_checker31486,output_checker31487))
,schema.core.make_fn_schema.call(null,output_schema31484,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31485], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__15794__auto___31500){
return (function() { 
var nav_button_component__delegate = function (data__15795__auto__,owner31477,p__31497){var vec__31499 = p__31497;var opts__15796__auto__ = cljs.core.nth.call(null,vec__31499,(0),null);return component_fnk__15794__auto___31500.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner31477),new cljs.core.Keyword(null,"owner","owner",-392611939),owner31477,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var nav_button_component = function (data__15795__auto__,owner31477,var_args){
var p__31497 = null;if (arguments.length > 2) {
  p__31497 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__15795__auto__,owner31477,p__31497);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__31506){
var data__15795__auto__ = cljs.core.first(arglist__31506);
arglist__31506 = cljs.core.next(arglist__31506);
var owner31477 = cljs.core.first(arglist__31506);
var p__31497 = cljs.core.rest(arglist__31506);
return nav_button_component__delegate(data__15795__auto__,owner31477,p__31497);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__15794__auto___31500))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__15763__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__15763__auto__,m31479){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__15763__auto__,m31479);
});
__GT_nav_button_component = function(cursor__15763__auto__,m31479){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__15763__auto__,m31479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;

//# sourceMappingURL=nav_button.js.map