// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.text');
goog.require('cljs.core');
goog.require('plumbing.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('plumbing.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.text.TextComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),schema.core.either.call(null,schema.core.Keyword,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null))], null)], null);
clustermap.components.text.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
var component_fnk__7881__auto___31387 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31371 = schema.core.Any;var input_schema31372 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map31368","map31368",652273278,null))], null);var input_checker31373 = schema.core.checker.call(null,input_schema31372);var output_checker31374 = schema.core.checker.call(null,output_schema31371);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374){
return (function constructor31366(G__31375){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31375], null);var temp__4126__auto___31389 = input_checker31373.call(null,args__6035__auto___31388);if(cljs.core.truth_(temp__4126__auto___31389))
{var error__6036__auto___31390 = temp__4126__auto___31389;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31366","constructor31366",-646522602,null),cljs.core.pr_str.call(null,error__6036__auto___31390)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31390,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31388,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31372,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31368 = G__31375;while(true){
if(cljs.core.map_QMARK_.call(null,map31368))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31368)));
}
var map31369 = plumbing.fnk.schema.safe_get.call(null,map31368,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map31369,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map31370 = plumbing.fnk.schema.safe_get.call(null,map31369,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map31370,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31368,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t31380 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t31380 = (function (output_checker31374,owner,path,output_schema31371,map31370,map31369,G__31375,source,constructor31366,validate__6034__auto__,input_checker31373,ufv__,input_schema31372,map31368,meta31381){
this.output_checker31374 = output_checker31374;
this.owner = owner;
this.path = path;
this.output_schema31371 = output_schema31371;
this.map31370 = map31370;
this.map31369 = map31369;
this.G__31375 = G__31375;
this.source = source;
this.constructor31366 = constructor31366;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_checker31373 = input_checker31373;
this.ufv__ = ufv__;
this.input_schema31372 = input_schema31372;
this.map31368 = map31368;
this.meta31381 = meta31381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t31380.cljs$lang$type = true;
clustermap.components.text.t31380.cljs$lang$ctorStr = "clustermap.components.text/t31380";
clustermap.components.text.t31380.cljs$lang$ctorPrWriter = ((function (owner,path,map31370,source,map31369,validate__6034__auto__,ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t31380");
});})(owner,path,map31370,source,map31369,validate__6034__auto__,ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374))
;
clustermap.components.text.t31380.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t31380.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map31370,source,map31369,validate__6034__auto__,ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map31370,source,map31369,validate__6034__auto__,ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374))
;
clustermap.components.text.t31380.prototype.om$core$IRender$ = true;
clustermap.components.text.t31380.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map31370,source,map31369,validate__6034__auto__,ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31383 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs31383))?sablono.interpreter.attributes.call(null,attrs31383):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31383))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31383)], null))));
});})(owner,path,map31370,source,map31369,validate__6034__auto__,ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374))
;
clustermap.components.text.t31380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map31370,source,map31369,validate__6034__auto__,ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374){
return (function (_31382){var self__ = this;
var _31382__$1 = this;return self__.meta31381;
});})(owner,path,map31370,source,map31369,validate__6034__auto__,ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374))
;
clustermap.components.text.t31380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map31370,source,map31369,validate__6034__auto__,ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374){
return (function (_31382,meta31381__$1){var self__ = this;
var _31382__$1 = this;return (new clustermap.components.text.t31380(self__.output_checker31374,self__.owner,self__.path,self__.output_schema31371,self__.map31370,self__.map31369,self__.G__31375,self__.source,self__.constructor31366,self__.validate__6034__auto__,self__.input_checker31373,self__.ufv__,self__.input_schema31372,self__.map31368,meta31381__$1));
});})(owner,path,map31370,source,map31369,validate__6034__auto__,ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374))
;
clustermap.components.text.__GT_t31380 = ((function (owner,path,map31370,source,map31369,validate__6034__auto__,ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374){
return (function __GT_t31380(output_checker31374__$1,owner__$1,path__$1,output_schema31371__$1,map31370__$1,map31369__$1,G__31375__$1,source__$1,constructor31366__$1,validate__6034__auto____$1,input_checker31373__$1,ufv____$1,input_schema31372__$1,map31368__$1,meta31381){return (new clustermap.components.text.t31380(output_checker31374__$1,owner__$1,path__$1,output_schema31371__$1,map31370__$1,map31369__$1,G__31375__$1,source__$1,constructor31366__$1,validate__6034__auto____$1,input_checker31373__$1,ufv____$1,input_schema31372__$1,map31368__$1,meta31381));
});})(owner,path,map31370,source,map31369,validate__6034__auto__,ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374))
;
}
return (new clustermap.components.text.t31380(output_checker31374,owner,path,output_schema31371,map31370,map31369,G__31375,source,constructor31366,validate__6034__auto__,input_checker31373,ufv__,input_schema31372,map31368,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31391 = output_checker31374.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31391))
{var error__6036__auto___31392 = temp__4126__auto___31391;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31366","constructor31366",-646522602,null),cljs.core.pr_str.call(null,error__6036__auto___31392)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31392,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31371,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31371,input_schema31372,input_checker31373,output_checker31374))
,schema.core.make_fn_schema.call(null,output_schema31371,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31372], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___31387){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner31365,p__31384){var vec__31386 = p__31384;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31386,(0),null);return component_fnk__7881__auto___31387.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31365,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner31365,var_args){
var p__31384 = null;if (arguments.length > 2) {
  p__31384 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner31365,p__31384);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__31393){
var data__7882__auto__ = cljs.core.first(arglist__31393);
arglist__31393 = cljs.core.next(arglist__31393);
var owner31365 = cljs.core.first(arglist__31393);
var p__31384 = cljs.core.rest(arglist__31393);
return text_component__delegate(data__7882__auto__,owner31365,p__31384);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___31387))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m31367){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m31367);
});
__GT_text_component = function(cursor__7850__auto__,m31367){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m31367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
