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
var component_fnk__7881__auto___31440 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31424 = schema.core.Any;var input_schema31425 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map31421","map31421",645330523,null))], null);var input_checker31426 = schema.core.checker.call(null,input_schema31425);var output_checker31427 = schema.core.checker.call(null,output_schema31424);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427){
return (function constructor31419(G__31428){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31428], null);var temp__4126__auto___31442 = input_checker31426.call(null,args__6035__auto___31441);if(cljs.core.truth_(temp__4126__auto___31442))
{var error__6036__auto___31443 = temp__4126__auto___31442;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31419","constructor31419",-666826491,null),cljs.core.pr_str.call(null,error__6036__auto___31443)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31443,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31441,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31425,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31421 = G__31428;while(true){
if(cljs.core.map_QMARK_.call(null,map31421))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31421)));
}
var map31422 = plumbing.fnk.schema.safe_get.call(null,map31421,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map31422,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map31423 = plumbing.fnk.schema.safe_get.call(null,map31422,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map31423,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31421,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t31433 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t31433 = (function (input_schema31425,map31422,owner,constructor31419,path,input_checker31426,map31423,output_schema31424,source,G__31428,output_checker31427,validate__6034__auto__,map31421,ufv__,meta31434){
this.input_schema31425 = input_schema31425;
this.map31422 = map31422;
this.owner = owner;
this.constructor31419 = constructor31419;
this.path = path;
this.input_checker31426 = input_checker31426;
this.map31423 = map31423;
this.output_schema31424 = output_schema31424;
this.source = source;
this.G__31428 = G__31428;
this.output_checker31427 = output_checker31427;
this.validate__6034__auto__ = validate__6034__auto__;
this.map31421 = map31421;
this.ufv__ = ufv__;
this.meta31434 = meta31434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t31433.cljs$lang$type = true;
clustermap.components.text.t31433.cljs$lang$ctorStr = "clustermap.components.text/t31433";
clustermap.components.text.t31433.cljs$lang$ctorPrWriter = ((function (owner,path,map31423,source,map31422,validate__6034__auto__,ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t31433");
});})(owner,path,map31423,source,map31422,validate__6034__auto__,ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427))
;
clustermap.components.text.t31433.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t31433.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map31423,source,map31422,validate__6034__auto__,ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map31423,source,map31422,validate__6034__auto__,ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427))
;
clustermap.components.text.t31433.prototype.om$core$IRender$ = true;
clustermap.components.text.t31433.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map31423,source,map31422,validate__6034__auto__,ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31436 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs31436))?sablono.interpreter.attributes.call(null,attrs31436):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31436))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31436)], null))));
});})(owner,path,map31423,source,map31422,validate__6034__auto__,ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427))
;
clustermap.components.text.t31433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map31423,source,map31422,validate__6034__auto__,ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427){
return (function (_31435){var self__ = this;
var _31435__$1 = this;return self__.meta31434;
});})(owner,path,map31423,source,map31422,validate__6034__auto__,ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427))
;
clustermap.components.text.t31433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map31423,source,map31422,validate__6034__auto__,ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427){
return (function (_31435,meta31434__$1){var self__ = this;
var _31435__$1 = this;return (new clustermap.components.text.t31433(self__.input_schema31425,self__.map31422,self__.owner,self__.constructor31419,self__.path,self__.input_checker31426,self__.map31423,self__.output_schema31424,self__.source,self__.G__31428,self__.output_checker31427,self__.validate__6034__auto__,self__.map31421,self__.ufv__,meta31434__$1));
});})(owner,path,map31423,source,map31422,validate__6034__auto__,ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427))
;
clustermap.components.text.__GT_t31433 = ((function (owner,path,map31423,source,map31422,validate__6034__auto__,ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427){
return (function __GT_t31433(input_schema31425__$1,map31422__$1,owner__$1,constructor31419__$1,path__$1,input_checker31426__$1,map31423__$1,output_schema31424__$1,source__$1,G__31428__$1,output_checker31427__$1,validate__6034__auto____$1,map31421__$1,ufv____$1,meta31434){return (new clustermap.components.text.t31433(input_schema31425__$1,map31422__$1,owner__$1,constructor31419__$1,path__$1,input_checker31426__$1,map31423__$1,output_schema31424__$1,source__$1,G__31428__$1,output_checker31427__$1,validate__6034__auto____$1,map31421__$1,ufv____$1,meta31434));
});})(owner,path,map31423,source,map31422,validate__6034__auto__,ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427))
;
}
return (new clustermap.components.text.t31433(input_schema31425,map31422,owner,constructor31419,path,input_checker31426,map31423,output_schema31424,source,G__31428,output_checker31427,validate__6034__auto__,map31421,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31444 = output_checker31427.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31444))
{var error__6036__auto___31445 = temp__4126__auto___31444;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31419","constructor31419",-666826491,null),cljs.core.pr_str.call(null,error__6036__auto___31445)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31445,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31424,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31424,input_schema31425,input_checker31426,output_checker31427))
,schema.core.make_fn_schema.call(null,output_schema31424,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31425], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___31440){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner31418,p__31437){var vec__31439 = p__31437;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31439,(0),null);return component_fnk__7881__auto___31440.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31418,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner31418,var_args){
var p__31437 = null;if (arguments.length > 2) {
  p__31437 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner31418,p__31437);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__31446){
var data__7882__auto__ = cljs.core.first(arglist__31446);
arglist__31446 = cljs.core.next(arglist__31446);
var owner31418 = cljs.core.first(arglist__31446);
var p__31437 = cljs.core.rest(arglist__31446);
return text_component__delegate(data__7882__auto__,owner31418,p__31437);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___31440))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m31420){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m31420);
});
__GT_text_component = function(cursor__7850__auto__,m31420){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m31420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
