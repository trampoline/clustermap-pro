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
var component_fnk__7881__auto___29991 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29975 = schema.core.Any;var input_schema29976 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map29972","map29972",1705970233,null))], null);var input_checker29977 = schema.core.checker.call(null,input_schema29976);var output_checker29978 = schema.core.checker.call(null,output_schema29975);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978){
return (function constructor29970(G__29979){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29992 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29979], null);var temp__4126__auto___29993 = input_checker29977.call(null,args__6035__auto___29992);if(cljs.core.truth_(temp__4126__auto___29993))
{var error__6036__auto___29994 = temp__4126__auto___29993;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29970","constructor29970",1242748899,null),cljs.core.pr_str.call(null,error__6036__auto___29994)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29994,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29992,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29976,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29972 = G__29979;while(true){
if(cljs.core.map_QMARK_.call(null,map29972))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29972)));
}
var map29973 = plumbing.fnk.schema.safe_get.call(null,map29972,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map29973,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map29974 = plumbing.fnk.schema.safe_get.call(null,map29973,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map29974,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29972,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t29984 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t29984 = (function (G__29979,constructor29970,input_schema29976,owner,path,map29974,output_schema29975,source,map29972,output_checker29978,validate__6034__auto__,map29973,input_checker29977,ufv__,meta29985){
this.G__29979 = G__29979;
this.constructor29970 = constructor29970;
this.input_schema29976 = input_schema29976;
this.owner = owner;
this.path = path;
this.map29974 = map29974;
this.output_schema29975 = output_schema29975;
this.source = source;
this.map29972 = map29972;
this.output_checker29978 = output_checker29978;
this.validate__6034__auto__ = validate__6034__auto__;
this.map29973 = map29973;
this.input_checker29977 = input_checker29977;
this.ufv__ = ufv__;
this.meta29985 = meta29985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t29984.cljs$lang$type = true;
clustermap.components.text.t29984.cljs$lang$ctorStr = "clustermap.components.text/t29984";
clustermap.components.text.t29984.cljs$lang$ctorPrWriter = ((function (owner,path,map29974,source,map29973,validate__6034__auto__,ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t29984");
});})(owner,path,map29974,source,map29973,validate__6034__auto__,ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978))
;
clustermap.components.text.t29984.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t29984.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map29974,source,map29973,validate__6034__auto__,ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map29974,source,map29973,validate__6034__auto__,ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978))
;
clustermap.components.text.t29984.prototype.om$core$IRender$ = true;
clustermap.components.text.t29984.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map29974,source,map29973,validate__6034__auto__,ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978){
return (function (_){var self__ = this;
var ___$1 = this;var attrs29987 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs29987))?sablono.interpreter.attributes.call(null,attrs29987):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29987))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29987)], null))));
});})(owner,path,map29974,source,map29973,validate__6034__auto__,ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978))
;
clustermap.components.text.t29984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map29974,source,map29973,validate__6034__auto__,ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978){
return (function (_29986){var self__ = this;
var _29986__$1 = this;return self__.meta29985;
});})(owner,path,map29974,source,map29973,validate__6034__auto__,ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978))
;
clustermap.components.text.t29984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map29974,source,map29973,validate__6034__auto__,ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978){
return (function (_29986,meta29985__$1){var self__ = this;
var _29986__$1 = this;return (new clustermap.components.text.t29984(self__.G__29979,self__.constructor29970,self__.input_schema29976,self__.owner,self__.path,self__.map29974,self__.output_schema29975,self__.source,self__.map29972,self__.output_checker29978,self__.validate__6034__auto__,self__.map29973,self__.input_checker29977,self__.ufv__,meta29985__$1));
});})(owner,path,map29974,source,map29973,validate__6034__auto__,ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978))
;
clustermap.components.text.__GT_t29984 = ((function (owner,path,map29974,source,map29973,validate__6034__auto__,ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978){
return (function __GT_t29984(G__29979__$1,constructor29970__$1,input_schema29976__$1,owner__$1,path__$1,map29974__$1,output_schema29975__$1,source__$1,map29972__$1,output_checker29978__$1,validate__6034__auto____$1,map29973__$1,input_checker29977__$1,ufv____$1,meta29985){return (new clustermap.components.text.t29984(G__29979__$1,constructor29970__$1,input_schema29976__$1,owner__$1,path__$1,map29974__$1,output_schema29975__$1,source__$1,map29972__$1,output_checker29978__$1,validate__6034__auto____$1,map29973__$1,input_checker29977__$1,ufv____$1,meta29985));
});})(owner,path,map29974,source,map29973,validate__6034__auto__,ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978))
;
}
return (new clustermap.components.text.t29984(G__29979,constructor29970,input_schema29976,owner,path,map29974,output_schema29975,source,map29972,output_checker29978,validate__6034__auto__,map29973,input_checker29977,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29995 = output_checker29978.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29995))
{var error__6036__auto___29996 = temp__4126__auto___29995;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29970","constructor29970",1242748899,null),cljs.core.pr_str.call(null,error__6036__auto___29996)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29996,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29975,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29975,input_schema29976,input_checker29977,output_checker29978))
,schema.core.make_fn_schema.call(null,output_schema29975,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29976], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___29991){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner29969,p__29988){var vec__29990 = p__29988;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29990,(0),null);return component_fnk__7881__auto___29991.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29969,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner29969,var_args){
var p__29988 = null;if (arguments.length > 2) {
  p__29988 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner29969,p__29988);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__29997){
var data__7882__auto__ = cljs.core.first(arglist__29997);
arglist__29997 = cljs.core.next(arglist__29997);
var owner29969 = cljs.core.first(arglist__29997);
var p__29988 = cljs.core.rest(arglist__29997);
return text_component__delegate(data__7882__auto__,owner29969,p__29988);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___29991))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m29971){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m29971);
});
__GT_text_component = function(cursor__7850__auto__,m29971){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m29971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
