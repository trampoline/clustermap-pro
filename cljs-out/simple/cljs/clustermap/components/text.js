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
var component_fnk__7881__auto___31267 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31251 = schema.core.Any;var input_schema31252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map31248","map31248",-907659261,null))], null);var input_checker31253 = schema.core.checker.call(null,input_schema31252);var output_checker31254 = schema.core.checker.call(null,output_schema31251);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254){
return (function constructor31246(G__31255){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31255], null);var temp__4126__auto___31269 = input_checker31253.call(null,args__6035__auto___31268);if(cljs.core.truth_(temp__4126__auto___31269))
{var error__6036__auto___31270 = temp__4126__auto___31269;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31246","constructor31246",1923723467,null),cljs.core.pr_str.call(null,error__6036__auto___31270)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31270,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31268,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31252,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31248 = G__31255;while(true){
if(cljs.core.map_QMARK_.call(null,map31248))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31248)));
}
var map31249 = plumbing.fnk.schema.safe_get.call(null,map31248,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map31249,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map31250 = plumbing.fnk.schema.safe_get.call(null,map31249,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map31250,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31248,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t31260 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t31260 = (function (output_checker31254,input_schema31252,map31248,owner,output_schema31251,G__31255,path,input_checker31253,constructor31246,map31249,source,map31250,validate__6034__auto__,ufv__,meta31261){
this.output_checker31254 = output_checker31254;
this.input_schema31252 = input_schema31252;
this.map31248 = map31248;
this.owner = owner;
this.output_schema31251 = output_schema31251;
this.G__31255 = G__31255;
this.path = path;
this.input_checker31253 = input_checker31253;
this.constructor31246 = constructor31246;
this.map31249 = map31249;
this.source = source;
this.map31250 = map31250;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.meta31261 = meta31261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t31260.cljs$lang$type = true;
clustermap.components.text.t31260.cljs$lang$ctorStr = "clustermap.components.text/t31260";
clustermap.components.text.t31260.cljs$lang$ctorPrWriter = ((function (owner,path,map31250,source,map31249,validate__6034__auto__,ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t31260");
});})(owner,path,map31250,source,map31249,validate__6034__auto__,ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254))
;
clustermap.components.text.t31260.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t31260.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map31250,source,map31249,validate__6034__auto__,ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map31250,source,map31249,validate__6034__auto__,ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254))
;
clustermap.components.text.t31260.prototype.om$core$IRender$ = true;
clustermap.components.text.t31260.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map31250,source,map31249,validate__6034__auto__,ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31263 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs31263))?sablono.interpreter.attributes.call(null,attrs31263):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31263))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31263)], null))));
});})(owner,path,map31250,source,map31249,validate__6034__auto__,ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254))
;
clustermap.components.text.t31260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map31250,source,map31249,validate__6034__auto__,ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254){
return (function (_31262){var self__ = this;
var _31262__$1 = this;return self__.meta31261;
});})(owner,path,map31250,source,map31249,validate__6034__auto__,ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254))
;
clustermap.components.text.t31260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map31250,source,map31249,validate__6034__auto__,ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254){
return (function (_31262,meta31261__$1){var self__ = this;
var _31262__$1 = this;return (new clustermap.components.text.t31260(self__.output_checker31254,self__.input_schema31252,self__.map31248,self__.owner,self__.output_schema31251,self__.G__31255,self__.path,self__.input_checker31253,self__.constructor31246,self__.map31249,self__.source,self__.map31250,self__.validate__6034__auto__,self__.ufv__,meta31261__$1));
});})(owner,path,map31250,source,map31249,validate__6034__auto__,ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254))
;
clustermap.components.text.__GT_t31260 = ((function (owner,path,map31250,source,map31249,validate__6034__auto__,ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254){
return (function __GT_t31260(output_checker31254__$1,input_schema31252__$1,map31248__$1,owner__$1,output_schema31251__$1,G__31255__$1,path__$1,input_checker31253__$1,constructor31246__$1,map31249__$1,source__$1,map31250__$1,validate__6034__auto____$1,ufv____$1,meta31261){return (new clustermap.components.text.t31260(output_checker31254__$1,input_schema31252__$1,map31248__$1,owner__$1,output_schema31251__$1,G__31255__$1,path__$1,input_checker31253__$1,constructor31246__$1,map31249__$1,source__$1,map31250__$1,validate__6034__auto____$1,ufv____$1,meta31261));
});})(owner,path,map31250,source,map31249,validate__6034__auto__,ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254))
;
}
return (new clustermap.components.text.t31260(output_checker31254,input_schema31252,map31248,owner,output_schema31251,G__31255,path,input_checker31253,constructor31246,map31249,source,map31250,validate__6034__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31271 = output_checker31254.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31271))
{var error__6036__auto___31272 = temp__4126__auto___31271;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31246","constructor31246",1923723467,null),cljs.core.pr_str.call(null,error__6036__auto___31272)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31272,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31251,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31251,input_schema31252,input_checker31253,output_checker31254))
,schema.core.make_fn_schema.call(null,output_schema31251,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31252], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___31267){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner31245,p__31264){var vec__31266 = p__31264;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31266,(0),null);return component_fnk__7881__auto___31267.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31245,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner31245,var_args){
var p__31264 = null;if (arguments.length > 2) {
  p__31264 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner31245,p__31264);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__31273){
var data__7882__auto__ = cljs.core.first(arglist__31273);
arglist__31273 = cljs.core.next(arglist__31273);
var owner31245 = cljs.core.first(arglist__31273);
var p__31264 = cljs.core.rest(arglist__31273);
return text_component__delegate(data__7882__auto__,owner31245,p__31264);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___31267))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m31247){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m31247);
});
__GT_text_component = function(cursor__7850__auto__,m31247){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m31247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
