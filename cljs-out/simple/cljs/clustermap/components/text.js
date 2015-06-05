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
var component_fnk__7881__auto___30120 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30104 = schema.core.Any;var input_schema30105 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map30101","map30101",-1624997104,null))], null);var input_checker30106 = schema.core.checker.call(null,input_schema30105);var output_checker30107 = schema.core.checker.call(null,output_schema30104);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107){
return (function constructor30099(G__30108){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30108], null);var temp__4126__auto___30122 = input_checker30106.call(null,args__6035__auto___30121);if(cljs.core.truth_(temp__4126__auto___30122))
{var error__6036__auto___30123 = temp__4126__auto___30122;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30099","constructor30099",-897575899,null),cljs.core.pr_str.call(null,error__6036__auto___30123)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30123,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30121,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30105,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30101 = G__30108;while(true){
if(cljs.core.map_QMARK_.call(null,map30101))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30101)));
}
var map30102 = plumbing.fnk.schema.safe_get.call(null,map30101,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map30102,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map30103 = plumbing.fnk.schema.safe_get.call(null,map30102,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map30103,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30101,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t30113 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t30113 = (function (input_checker30106,owner,constructor30099,path,output_schema30104,map30103,map30102,map30101,source,output_checker30107,G__30108,validate__6034__auto__,ufv__,input_schema30105,meta30114){
this.input_checker30106 = input_checker30106;
this.owner = owner;
this.constructor30099 = constructor30099;
this.path = path;
this.output_schema30104 = output_schema30104;
this.map30103 = map30103;
this.map30102 = map30102;
this.map30101 = map30101;
this.source = source;
this.output_checker30107 = output_checker30107;
this.G__30108 = G__30108;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.input_schema30105 = input_schema30105;
this.meta30114 = meta30114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t30113.cljs$lang$type = true;
clustermap.components.text.t30113.cljs$lang$ctorStr = "clustermap.components.text/t30113";
clustermap.components.text.t30113.cljs$lang$ctorPrWriter = ((function (owner,path,map30103,source,map30102,validate__6034__auto__,ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t30113");
});})(owner,path,map30103,source,map30102,validate__6034__auto__,ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107))
;
clustermap.components.text.t30113.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t30113.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map30103,source,map30102,validate__6034__auto__,ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map30103,source,map30102,validate__6034__auto__,ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107))
;
clustermap.components.text.t30113.prototype.om$core$IRender$ = true;
clustermap.components.text.t30113.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map30103,source,map30102,validate__6034__auto__,ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107){
return (function (_){var self__ = this;
var ___$1 = this;var attrs30116 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs30116))?sablono.interpreter.attributes.call(null,attrs30116):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30116))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30116)], null))));
});})(owner,path,map30103,source,map30102,validate__6034__auto__,ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107))
;
clustermap.components.text.t30113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map30103,source,map30102,validate__6034__auto__,ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107){
return (function (_30115){var self__ = this;
var _30115__$1 = this;return self__.meta30114;
});})(owner,path,map30103,source,map30102,validate__6034__auto__,ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107))
;
clustermap.components.text.t30113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map30103,source,map30102,validate__6034__auto__,ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107){
return (function (_30115,meta30114__$1){var self__ = this;
var _30115__$1 = this;return (new clustermap.components.text.t30113(self__.input_checker30106,self__.owner,self__.constructor30099,self__.path,self__.output_schema30104,self__.map30103,self__.map30102,self__.map30101,self__.source,self__.output_checker30107,self__.G__30108,self__.validate__6034__auto__,self__.ufv__,self__.input_schema30105,meta30114__$1));
});})(owner,path,map30103,source,map30102,validate__6034__auto__,ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107))
;
clustermap.components.text.__GT_t30113 = ((function (owner,path,map30103,source,map30102,validate__6034__auto__,ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107){
return (function __GT_t30113(input_checker30106__$1,owner__$1,constructor30099__$1,path__$1,output_schema30104__$1,map30103__$1,map30102__$1,map30101__$1,source__$1,output_checker30107__$1,G__30108__$1,validate__6034__auto____$1,ufv____$1,input_schema30105__$1,meta30114){return (new clustermap.components.text.t30113(input_checker30106__$1,owner__$1,constructor30099__$1,path__$1,output_schema30104__$1,map30103__$1,map30102__$1,map30101__$1,source__$1,output_checker30107__$1,G__30108__$1,validate__6034__auto____$1,ufv____$1,input_schema30105__$1,meta30114));
});})(owner,path,map30103,source,map30102,validate__6034__auto__,ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107))
;
}
return (new clustermap.components.text.t30113(input_checker30106,owner,constructor30099,path,output_schema30104,map30103,map30102,map30101,source,output_checker30107,G__30108,validate__6034__auto__,ufv__,input_schema30105,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30124 = output_checker30107.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30124))
{var error__6036__auto___30125 = temp__4126__auto___30124;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30099","constructor30099",-897575899,null),cljs.core.pr_str.call(null,error__6036__auto___30125)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30125,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30104,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30104,input_schema30105,input_checker30106,output_checker30107))
,schema.core.make_fn_schema.call(null,output_schema30104,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30105], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___30120){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner30098,p__30117){var vec__30119 = p__30117;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30119,(0),null);return component_fnk__7881__auto___30120.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30098,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner30098,var_args){
var p__30117 = null;if (arguments.length > 2) {
  p__30117 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner30098,p__30117);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__30126){
var data__7882__auto__ = cljs.core.first(arglist__30126);
arglist__30126 = cljs.core.next(arglist__30126);
var owner30098 = cljs.core.first(arglist__30126);
var p__30117 = cljs.core.rest(arglist__30126);
return text_component__delegate(data__7882__auto__,owner30098,p__30117);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___30120))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m30100){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m30100);
});
__GT_text_component = function(cursor__7850__auto__,m30100){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m30100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
