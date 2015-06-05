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
var component_fnk__7881__auto___31323 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31307 = schema.core.Any;var input_schema31308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map31303","map31303",1861343553,null))], null);var input_checker31309 = schema.core.checker.call(null,input_schema31308);var output_checker31310 = schema.core.checker.call(null,output_schema31307);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310){
return (function constructor31301(G__31311){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31311], null);var temp__4126__auto___31325 = input_checker31309.call(null,args__6035__auto___31324);if(cljs.core.truth_(temp__4126__auto___31325))
{var error__6036__auto___31326 = temp__4126__auto___31325;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31301","constructor31301",1164705553,null),cljs.core.pr_str.call(null,error__6036__auto___31326)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31326,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31324,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31308,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31303 = G__31311;while(true){
if(cljs.core.map_QMARK_.call(null,map31303))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31303)));
}
var map31305 = plumbing.fnk.schema.safe_get.call(null,map31303,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map31306 = plumbing.fnk.schema.safe_get.call(null,map31305,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map31306,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map31306,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map31306,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map31306,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map31304 = plumbing.fnk.schema.safe_get.call(null,map31303,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map31304,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31303,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t31316 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t31316 = (function (map31303,output_checker31310,G__31311,owner,text,map31304,map31305,constructor31301,output_schema31307,input_checker31309,map31306,target_view,validate__6034__auto__,id,class$,input_schema31308,app,ufv__,meta31317){
this.map31303 = map31303;
this.output_checker31310 = output_checker31310;
this.G__31311 = G__31311;
this.owner = owner;
this.text = text;
this.map31304 = map31304;
this.map31305 = map31305;
this.constructor31301 = constructor31301;
this.output_schema31307 = output_schema31307;
this.input_checker31309 = input_checker31309;
this.map31306 = map31306;
this.target_view = target_view;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.input_schema31308 = input_schema31308;
this.app = app;
this.ufv__ = ufv__;
this.meta31317 = meta31317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t31316.cljs$lang$type = true;
clustermap.components.nav_button.t31316.cljs$lang$ctorStr = "clustermap.components.nav-button/t31316";
clustermap.components.nav_button.t31316.cljs$lang$ctorPrWriter = ((function (owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t31316");
});})(owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310))
;
clustermap.components.nav_button.t31316.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t31316.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310))
;
clustermap.components.nav_button.t31316.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t31316.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31319 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs31319))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs31319)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31319))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31319),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310))
;
clustermap.components.nav_button.t31316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310){
return (function (_31318){var self__ = this;
var _31318__$1 = this;return self__.meta31317;
});})(owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310))
;
clustermap.components.nav_button.t31316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310){
return (function (_31318,meta31317__$1){var self__ = this;
var _31318__$1 = this;return (new clustermap.components.nav_button.t31316(self__.map31303,self__.output_checker31310,self__.G__31311,self__.owner,self__.text,self__.map31304,self__.map31305,self__.constructor31301,self__.output_schema31307,self__.input_checker31309,self__.map31306,self__.target_view,self__.validate__6034__auto__,self__.id,self__.class$,self__.input_schema31308,self__.app,self__.ufv__,meta31317__$1));
});})(owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310))
;
clustermap.components.nav_button.__GT_t31316 = ((function (owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310){
return (function __GT_t31316(map31303__$1,output_checker31310__$1,G__31311__$1,owner__$1,text__$1,map31304__$1,map31305__$1,constructor31301__$1,output_schema31307__$1,input_checker31309__$1,map31306__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,input_schema31308__$1,app__$1,ufv____$1,meta31317){return (new clustermap.components.nav_button.t31316(map31303__$1,output_checker31310__$1,G__31311__$1,owner__$1,text__$1,map31304__$1,map31305__$1,constructor31301__$1,output_schema31307__$1,input_checker31309__$1,map31306__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,input_schema31308__$1,app__$1,ufv____$1,meta31317));
});})(owner,app,map31304,id,class$,target_view,text,map31306,map31305,validate__6034__auto__,ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310))
;
}
return (new clustermap.components.nav_button.t31316(map31303,output_checker31310,G__31311,owner,text,map31304,map31305,constructor31301,output_schema31307,input_checker31309,map31306,target_view,validate__6034__auto__,id,class$,input_schema31308,app,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31327 = output_checker31310.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31327))
{var error__6036__auto___31328 = temp__4126__auto___31327;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31301","constructor31301",1164705553,null),cljs.core.pr_str.call(null,error__6036__auto___31328)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31328,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31307,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31307,input_schema31308,input_checker31309,output_checker31310))
,schema.core.make_fn_schema.call(null,output_schema31307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31308], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___31323){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner31300,p__31320){var vec__31322 = p__31320;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31322,(0),null);return component_fnk__7881__auto___31323.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner31300),new cljs.core.Keyword(null,"owner","owner",-392611939),owner31300,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner31300,var_args){
var p__31320 = null;if (arguments.length > 2) {
  p__31320 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner31300,p__31320);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__31329){
var data__7882__auto__ = cljs.core.first(arglist__31329);
arglist__31329 = cljs.core.next(arglist__31329);
var owner31300 = cljs.core.first(arglist__31329);
var p__31320 = cljs.core.rest(arglist__31329);
return nav_button_component__delegate(data__7882__auto__,owner31300,p__31320);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___31323))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m31302){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m31302);
});
__GT_nav_button_component = function(cursor__7850__auto__,m31302){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m31302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
