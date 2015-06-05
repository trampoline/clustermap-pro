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
var component_fnk__7881__auto___30438 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30422 = schema.core.Any;var input_schema30423 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map30419","map30419",-323799428,null))], null);var input_checker30424 = schema.core.checker.call(null,input_schema30423);var output_checker30425 = schema.core.checker.call(null,output_schema30422);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425){
return (function constructor30417(G__30426){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30439 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30426], null);var temp__4126__auto___30440 = input_checker30424.call(null,args__6035__auto___30439);if(cljs.core.truth_(temp__4126__auto___30440))
{var error__6036__auto___30441 = temp__4126__auto___30440;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30417","constructor30417",-1168467657,null),cljs.core.pr_str.call(null,error__6036__auto___30441)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30441,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30439,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30423,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30419 = G__30426;while(true){
if(cljs.core.map_QMARK_.call(null,map30419))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30419)));
}
var map30420 = plumbing.fnk.schema.safe_get.call(null,map30419,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map30420,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map30421 = plumbing.fnk.schema.safe_get.call(null,map30420,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map30421,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30419,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t30431 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t30431 = (function (owner,G__30426,path,output_schema30422,input_schema30423,source,output_checker30425,map30421,constructor30417,input_checker30424,validate__6034__auto__,map30420,map30419,ufv__,meta30432){
this.owner = owner;
this.G__30426 = G__30426;
this.path = path;
this.output_schema30422 = output_schema30422;
this.input_schema30423 = input_schema30423;
this.source = source;
this.output_checker30425 = output_checker30425;
this.map30421 = map30421;
this.constructor30417 = constructor30417;
this.input_checker30424 = input_checker30424;
this.validate__6034__auto__ = validate__6034__auto__;
this.map30420 = map30420;
this.map30419 = map30419;
this.ufv__ = ufv__;
this.meta30432 = meta30432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t30431.cljs$lang$type = true;
clustermap.components.text.t30431.cljs$lang$ctorStr = "clustermap.components.text/t30431";
clustermap.components.text.t30431.cljs$lang$ctorPrWriter = ((function (owner,path,map30421,source,map30420,validate__6034__auto__,ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t30431");
});})(owner,path,map30421,source,map30420,validate__6034__auto__,ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425))
;
clustermap.components.text.t30431.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t30431.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map30421,source,map30420,validate__6034__auto__,ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map30421,source,map30420,validate__6034__auto__,ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425))
;
clustermap.components.text.t30431.prototype.om$core$IRender$ = true;
clustermap.components.text.t30431.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map30421,source,map30420,validate__6034__auto__,ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425){
return (function (_){var self__ = this;
var ___$1 = this;var attrs30434 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs30434))?sablono.interpreter.attributes.call(null,attrs30434):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30434))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30434)], null))));
});})(owner,path,map30421,source,map30420,validate__6034__auto__,ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425))
;
clustermap.components.text.t30431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map30421,source,map30420,validate__6034__auto__,ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425){
return (function (_30433){var self__ = this;
var _30433__$1 = this;return self__.meta30432;
});})(owner,path,map30421,source,map30420,validate__6034__auto__,ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425))
;
clustermap.components.text.t30431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map30421,source,map30420,validate__6034__auto__,ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425){
return (function (_30433,meta30432__$1){var self__ = this;
var _30433__$1 = this;return (new clustermap.components.text.t30431(self__.owner,self__.G__30426,self__.path,self__.output_schema30422,self__.input_schema30423,self__.source,self__.output_checker30425,self__.map30421,self__.constructor30417,self__.input_checker30424,self__.validate__6034__auto__,self__.map30420,self__.map30419,self__.ufv__,meta30432__$1));
});})(owner,path,map30421,source,map30420,validate__6034__auto__,ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425))
;
clustermap.components.text.__GT_t30431 = ((function (owner,path,map30421,source,map30420,validate__6034__auto__,ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425){
return (function __GT_t30431(owner__$1,G__30426__$1,path__$1,output_schema30422__$1,input_schema30423__$1,source__$1,output_checker30425__$1,map30421__$1,constructor30417__$1,input_checker30424__$1,validate__6034__auto____$1,map30420__$1,map30419__$1,ufv____$1,meta30432){return (new clustermap.components.text.t30431(owner__$1,G__30426__$1,path__$1,output_schema30422__$1,input_schema30423__$1,source__$1,output_checker30425__$1,map30421__$1,constructor30417__$1,input_checker30424__$1,validate__6034__auto____$1,map30420__$1,map30419__$1,ufv____$1,meta30432));
});})(owner,path,map30421,source,map30420,validate__6034__auto__,ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425))
;
}
return (new clustermap.components.text.t30431(owner,G__30426,path,output_schema30422,input_schema30423,source,output_checker30425,map30421,constructor30417,input_checker30424,validate__6034__auto__,map30420,map30419,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30442 = output_checker30425.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30442))
{var error__6036__auto___30443 = temp__4126__auto___30442;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30417","constructor30417",-1168467657,null),cljs.core.pr_str.call(null,error__6036__auto___30443)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30443,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30422,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30422,input_schema30423,input_checker30424,output_checker30425))
,schema.core.make_fn_schema.call(null,output_schema30422,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30423], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___30438){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner30416,p__30435){var vec__30437 = p__30435;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30437,(0),null);return component_fnk__7881__auto___30438.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30416,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner30416,var_args){
var p__30435 = null;if (arguments.length > 2) {
  p__30435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner30416,p__30435);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__30444){
var data__7882__auto__ = cljs.core.first(arglist__30444);
arglist__30444 = cljs.core.next(arglist__30444);
var owner30416 = cljs.core.first(arglist__30444);
var p__30435 = cljs.core.rest(arglist__30444);
return text_component__delegate(data__7882__auto__,owner30416,p__30435);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___30438))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m30418){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m30418);
});
__GT_text_component = function(cursor__7850__auto__,m30418){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m30418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
