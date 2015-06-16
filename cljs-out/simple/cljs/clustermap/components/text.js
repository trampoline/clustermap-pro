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
var component_fnk__7881__auto___31359 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31343 = schema.core.Any;var input_schema31344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map31340","map31340",-1347525985,null))], null);var input_checker31345 = schema.core.checker.call(null,input_schema31344);var output_checker31346 = schema.core.checker.call(null,output_schema31343);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346){
return (function constructor31338(G__31347){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31360 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31347], null);var temp__4126__auto___31361 = input_checker31345.call(null,args__6035__auto___31360);if(cljs.core.truth_(temp__4126__auto___31361))
{var error__6036__auto___31362 = temp__4126__auto___31361;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31338","constructor31338",-472624750,null),cljs.core.pr_str.call(null,error__6036__auto___31362)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31362,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31360,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31344,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31340 = G__31347;while(true){
if(cljs.core.map_QMARK_.call(null,map31340))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31340)));
}
var map31341 = plumbing.fnk.schema.safe_get.call(null,map31340,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map31341,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map31342 = plumbing.fnk.schema.safe_get.call(null,map31341,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map31342,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31340,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t31352 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t31352 = (function (input_checker31345,output_schema31343,owner,output_checker31346,map31341,path,G__31347,input_schema31344,constructor31338,source,map31342,validate__6034__auto__,ufv__,map31340,meta31353){
this.input_checker31345 = input_checker31345;
this.output_schema31343 = output_schema31343;
this.owner = owner;
this.output_checker31346 = output_checker31346;
this.map31341 = map31341;
this.path = path;
this.G__31347 = G__31347;
this.input_schema31344 = input_schema31344;
this.constructor31338 = constructor31338;
this.source = source;
this.map31342 = map31342;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.map31340 = map31340;
this.meta31353 = meta31353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t31352.cljs$lang$type = true;
clustermap.components.text.t31352.cljs$lang$ctorStr = "clustermap.components.text/t31352";
clustermap.components.text.t31352.cljs$lang$ctorPrWriter = ((function (owner,path,map31342,source,map31341,validate__6034__auto__,ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t31352");
});})(owner,path,map31342,source,map31341,validate__6034__auto__,ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346))
;
clustermap.components.text.t31352.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t31352.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map31342,source,map31341,validate__6034__auto__,ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map31342,source,map31341,validate__6034__auto__,ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346))
;
clustermap.components.text.t31352.prototype.om$core$IRender$ = true;
clustermap.components.text.t31352.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map31342,source,map31341,validate__6034__auto__,ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31355 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs31355))?sablono.interpreter.attributes.call(null,attrs31355):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31355))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31355)], null))));
});})(owner,path,map31342,source,map31341,validate__6034__auto__,ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346))
;
clustermap.components.text.t31352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map31342,source,map31341,validate__6034__auto__,ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346){
return (function (_31354){var self__ = this;
var _31354__$1 = this;return self__.meta31353;
});})(owner,path,map31342,source,map31341,validate__6034__auto__,ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346))
;
clustermap.components.text.t31352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map31342,source,map31341,validate__6034__auto__,ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346){
return (function (_31354,meta31353__$1){var self__ = this;
var _31354__$1 = this;return (new clustermap.components.text.t31352(self__.input_checker31345,self__.output_schema31343,self__.owner,self__.output_checker31346,self__.map31341,self__.path,self__.G__31347,self__.input_schema31344,self__.constructor31338,self__.source,self__.map31342,self__.validate__6034__auto__,self__.ufv__,self__.map31340,meta31353__$1));
});})(owner,path,map31342,source,map31341,validate__6034__auto__,ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346))
;
clustermap.components.text.__GT_t31352 = ((function (owner,path,map31342,source,map31341,validate__6034__auto__,ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346){
return (function __GT_t31352(input_checker31345__$1,output_schema31343__$1,owner__$1,output_checker31346__$1,map31341__$1,path__$1,G__31347__$1,input_schema31344__$1,constructor31338__$1,source__$1,map31342__$1,validate__6034__auto____$1,ufv____$1,map31340__$1,meta31353){return (new clustermap.components.text.t31352(input_checker31345__$1,output_schema31343__$1,owner__$1,output_checker31346__$1,map31341__$1,path__$1,G__31347__$1,input_schema31344__$1,constructor31338__$1,source__$1,map31342__$1,validate__6034__auto____$1,ufv____$1,map31340__$1,meta31353));
});})(owner,path,map31342,source,map31341,validate__6034__auto__,ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346))
;
}
return (new clustermap.components.text.t31352(input_checker31345,output_schema31343,owner,output_checker31346,map31341,path,G__31347,input_schema31344,constructor31338,source,map31342,validate__6034__auto__,ufv__,map31340,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31363 = output_checker31346.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31363))
{var error__6036__auto___31364 = temp__4126__auto___31363;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31338","constructor31338",-472624750,null),cljs.core.pr_str.call(null,error__6036__auto___31364)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31364,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31343,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31343,input_schema31344,input_checker31345,output_checker31346))
,schema.core.make_fn_schema.call(null,output_schema31343,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31344], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___31359){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner31337,p__31356){var vec__31358 = p__31356;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31358,(0),null);return component_fnk__7881__auto___31359.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31337,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner31337,var_args){
var p__31356 = null;if (arguments.length > 2) {
  p__31356 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner31337,p__31356);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__31365){
var data__7882__auto__ = cljs.core.first(arglist__31365);
arglist__31365 = cljs.core.next(arglist__31365);
var owner31337 = cljs.core.first(arglist__31365);
var p__31356 = cljs.core.rest(arglist__31365);
return text_component__delegate(data__7882__auto__,owner31337,p__31356);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___31359))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m31339){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m31339);
});
__GT_text_component = function(cursor__7850__auto__,m31339){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m31339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
