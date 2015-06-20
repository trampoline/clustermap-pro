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
var component_fnk__7881__auto___31443 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31427 = schema.core.Any;var input_schema31428 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map31424","map31424",-1757097773,null))], null);var input_checker31429 = schema.core.checker.call(null,input_schema31428);var output_checker31430 = schema.core.checker.call(null,output_schema31427);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430){
return (function constructor31422(G__31431){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31444 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31431], null);var temp__4126__auto___31445 = input_checker31429.call(null,args__6035__auto___31444);if(cljs.core.truth_(temp__4126__auto___31445))
{var error__6036__auto___31446 = temp__4126__auto___31445;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31422","constructor31422",-106876037,null),cljs.core.pr_str.call(null,error__6036__auto___31446)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31446,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31444,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31428,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31424 = G__31431;while(true){
if(cljs.core.map_QMARK_.call(null,map31424))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31424)));
}
var map31425 = plumbing.fnk.schema.safe_get.call(null,map31424,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map31425,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map31426 = plumbing.fnk.schema.safe_get.call(null,map31425,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map31426,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31424,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t31436 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t31436 = (function (map31426,map31425,owner,path,map31424,source,output_schema31427,input_schema31428,validate__6034__auto__,constructor31422,output_checker31430,ufv__,input_checker31429,G__31431,meta31437){
this.map31426 = map31426;
this.map31425 = map31425;
this.owner = owner;
this.path = path;
this.map31424 = map31424;
this.source = source;
this.output_schema31427 = output_schema31427;
this.input_schema31428 = input_schema31428;
this.validate__6034__auto__ = validate__6034__auto__;
this.constructor31422 = constructor31422;
this.output_checker31430 = output_checker31430;
this.ufv__ = ufv__;
this.input_checker31429 = input_checker31429;
this.G__31431 = G__31431;
this.meta31437 = meta31437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t31436.cljs$lang$type = true;
clustermap.components.text.t31436.cljs$lang$ctorStr = "clustermap.components.text/t31436";
clustermap.components.text.t31436.cljs$lang$ctorPrWriter = ((function (owner,path,map31426,source,map31425,validate__6034__auto__,ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t31436");
});})(owner,path,map31426,source,map31425,validate__6034__auto__,ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430))
;
clustermap.components.text.t31436.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t31436.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map31426,source,map31425,validate__6034__auto__,ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map31426,source,map31425,validate__6034__auto__,ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430))
;
clustermap.components.text.t31436.prototype.om$core$IRender$ = true;
clustermap.components.text.t31436.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map31426,source,map31425,validate__6034__auto__,ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31439 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs31439))?sablono.interpreter.attributes.call(null,attrs31439):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31439))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31439)], null))));
});})(owner,path,map31426,source,map31425,validate__6034__auto__,ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430))
;
clustermap.components.text.t31436.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map31426,source,map31425,validate__6034__auto__,ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430){
return (function (_31438){var self__ = this;
var _31438__$1 = this;return self__.meta31437;
});})(owner,path,map31426,source,map31425,validate__6034__auto__,ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430))
;
clustermap.components.text.t31436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map31426,source,map31425,validate__6034__auto__,ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430){
return (function (_31438,meta31437__$1){var self__ = this;
var _31438__$1 = this;return (new clustermap.components.text.t31436(self__.map31426,self__.map31425,self__.owner,self__.path,self__.map31424,self__.source,self__.output_schema31427,self__.input_schema31428,self__.validate__6034__auto__,self__.constructor31422,self__.output_checker31430,self__.ufv__,self__.input_checker31429,self__.G__31431,meta31437__$1));
});})(owner,path,map31426,source,map31425,validate__6034__auto__,ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430))
;
clustermap.components.text.__GT_t31436 = ((function (owner,path,map31426,source,map31425,validate__6034__auto__,ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430){
return (function __GT_t31436(map31426__$1,map31425__$1,owner__$1,path__$1,map31424__$1,source__$1,output_schema31427__$1,input_schema31428__$1,validate__6034__auto____$1,constructor31422__$1,output_checker31430__$1,ufv____$1,input_checker31429__$1,G__31431__$1,meta31437){return (new clustermap.components.text.t31436(map31426__$1,map31425__$1,owner__$1,path__$1,map31424__$1,source__$1,output_schema31427__$1,input_schema31428__$1,validate__6034__auto____$1,constructor31422__$1,output_checker31430__$1,ufv____$1,input_checker31429__$1,G__31431__$1,meta31437));
});})(owner,path,map31426,source,map31425,validate__6034__auto__,ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430))
;
}
return (new clustermap.components.text.t31436(map31426,map31425,owner,path,map31424,source,output_schema31427,input_schema31428,validate__6034__auto__,constructor31422,output_checker31430,ufv__,input_checker31429,G__31431,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31447 = output_checker31430.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31447))
{var error__6036__auto___31448 = temp__4126__auto___31447;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31422","constructor31422",-106876037,null),cljs.core.pr_str.call(null,error__6036__auto___31448)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31448,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31427,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31427,input_schema31428,input_checker31429,output_checker31430))
,schema.core.make_fn_schema.call(null,output_schema31427,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31428], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___31443){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner31421,p__31440){var vec__31442 = p__31440;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31442,(0),null);return component_fnk__7881__auto___31443.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31421,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner31421,var_args){
var p__31440 = null;if (arguments.length > 2) {
  p__31440 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner31421,p__31440);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__31449){
var data__7882__auto__ = cljs.core.first(arglist__31449);
arglist__31449 = cljs.core.next(arglist__31449);
var owner31421 = cljs.core.first(arglist__31449);
var p__31440 = cljs.core.rest(arglist__31449);
return text_component__delegate(data__7882__auto__,owner31421,p__31440);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___31443))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m31423){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m31423);
});
__GT_text_component = function(cursor__7850__auto__,m31423){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m31423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
