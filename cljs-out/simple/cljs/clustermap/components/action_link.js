// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.action_link');
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
clustermap.components.action_link.ActionLinkSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action-link","action-link",1595094845),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"content","content",15833224),schema.core.Any,new cljs.core.Keyword(null,"action","action",-811238024),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.Str], true, false)], null);
var component_fnk__7881__auto___28307 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28291 = schema.core.Any;var input_schema28292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.action_link.ActionLinkSchema], true, false),new cljs.core.Symbol(null,"map28287","map28287",-1510945541,null))], null);var input_checker28293 = schema.core.checker.call(null,input_schema28292);var output_checker28294 = schema.core.checker.call(null,output_schema28291);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294){
return (function constructor28285(G__28295){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28295], null);var temp__4126__auto___28309 = input_checker28293.call(null,args__6035__auto___28308);if(cljs.core.truth_(temp__4126__auto___28309))
{var error__6036__auto___28310 = temp__4126__auto___28309;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28285","constructor28285",392353766,null),cljs.core.pr_str.call(null,error__6036__auto___28310)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28310,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28308,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28292,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28287 = G__28295;while(true){
if(cljs.core.map_QMARK_.call(null,map28287))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28287)));
}
var map28289 = plumbing.fnk.schema.safe_get.call(null,map28287,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map28290 = plumbing.fnk.schema.safe_get.call(null,map28289,new cljs.core.Keyword(null,"action-link","action-link",1595094845),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var content = plumbing.fnk.schema.safe_get.call(null,map28290,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-link","action-link",1595094845)], null));var action = plumbing.fnk.schema.safe_get.call(null,map28290,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-link","action-link",1595094845)], null));var class$ = cljs.core.get.call(null,map28290,new cljs.core.Keyword(null,"class","class",-2030961996),null);var id = cljs.core.get.call(null,map28290,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map28288 = plumbing.fnk.schema.safe_get.call(null,map28287,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map28288,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28287,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.action_link.t28300 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.action_link.t28300 = (function (input_checker28293,map28288,owner,constructor28285,output_schema28291,map28289,G__28295,input_schema28292,content,map28290,output_checker28294,validate__6034__auto__,id,class$,map28287,app,ufv__,action,meta28301){
this.input_checker28293 = input_checker28293;
this.map28288 = map28288;
this.owner = owner;
this.constructor28285 = constructor28285;
this.output_schema28291 = output_schema28291;
this.map28289 = map28289;
this.G__28295 = G__28295;
this.input_schema28292 = input_schema28292;
this.content = content;
this.map28290 = map28290;
this.output_checker28294 = output_checker28294;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.map28287 = map28287;
this.app = app;
this.ufv__ = ufv__;
this.action = action;
this.meta28301 = meta28301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.action_link.t28300.cljs$lang$type = true;
clustermap.components.action_link.t28300.cljs$lang$ctorStr = "clustermap.components.action-link/t28300";
clustermap.components.action_link.t28300.cljs$lang$ctorPrWriter = ((function (owner,app,map28288,id,class$,action,content,map28290,map28289,validate__6034__auto__,ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.action-link/t28300");
});})(owner,app,map28288,id,class$,action,content,map28290,map28289,validate__6034__auto__,ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294))
;
clustermap.components.action_link.t28300.prototype.om$core$IDisplayName$ = true;
clustermap.components.action_link.t28300.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map28288,id,class$,action,content,map28290,map28289,validate__6034__auto__,ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294){
return (function (_){var self__ = this;
var ___$1 = this;return "action-link-component";
});})(owner,app,map28288,id,class$,action,content,map28290,map28289,validate__6034__auto__,ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294))
;
clustermap.components.action_link.t28300.prototype.om$core$IRender$ = true;
clustermap.components.action_link.t28300.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map28288,id,class$,action,content,map28290,map28289,validate__6034__auto__,ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294){
return (function (_){var self__ = this;
var ___$1 = this;var attrs28303 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),self__.action),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.a,((cljs.core.map_QMARK_.call(null,attrs28303))?sablono.interpreter.attributes.call(null,attrs28303):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28303))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.content.call(null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28303),sablono.interpreter.interpret.call(null,self__.content.call(null))], null))));
});})(owner,app,map28288,id,class$,action,content,map28290,map28289,validate__6034__auto__,ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294))
;
clustermap.components.action_link.t28300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map28288,id,class$,action,content,map28290,map28289,validate__6034__auto__,ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294){
return (function (_28302){var self__ = this;
var _28302__$1 = this;return self__.meta28301;
});})(owner,app,map28288,id,class$,action,content,map28290,map28289,validate__6034__auto__,ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294))
;
clustermap.components.action_link.t28300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map28288,id,class$,action,content,map28290,map28289,validate__6034__auto__,ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294){
return (function (_28302,meta28301__$1){var self__ = this;
var _28302__$1 = this;return (new clustermap.components.action_link.t28300(self__.input_checker28293,self__.map28288,self__.owner,self__.constructor28285,self__.output_schema28291,self__.map28289,self__.G__28295,self__.input_schema28292,self__.content,self__.map28290,self__.output_checker28294,self__.validate__6034__auto__,self__.id,self__.class$,self__.map28287,self__.app,self__.ufv__,self__.action,meta28301__$1));
});})(owner,app,map28288,id,class$,action,content,map28290,map28289,validate__6034__auto__,ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294))
;
clustermap.components.action_link.__GT_t28300 = ((function (owner,app,map28288,id,class$,action,content,map28290,map28289,validate__6034__auto__,ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294){
return (function __GT_t28300(input_checker28293__$1,map28288__$1,owner__$1,constructor28285__$1,output_schema28291__$1,map28289__$1,G__28295__$1,input_schema28292__$1,content__$1,map28290__$1,output_checker28294__$1,validate__6034__auto____$1,id__$1,class$__$1,map28287__$1,app__$1,ufv____$1,action__$1,meta28301){return (new clustermap.components.action_link.t28300(input_checker28293__$1,map28288__$1,owner__$1,constructor28285__$1,output_schema28291__$1,map28289__$1,G__28295__$1,input_schema28292__$1,content__$1,map28290__$1,output_checker28294__$1,validate__6034__auto____$1,id__$1,class$__$1,map28287__$1,app__$1,ufv____$1,action__$1,meta28301));
});})(owner,app,map28288,id,class$,action,content,map28290,map28289,validate__6034__auto__,ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294))
;
}
return (new clustermap.components.action_link.t28300(input_checker28293,map28288,owner,constructor28285,output_schema28291,map28289,G__28295,input_schema28292,content,map28290,output_checker28294,validate__6034__auto__,id,class$,map28287,app,ufv__,action,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28311 = output_checker28294.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28311))
{var error__6036__auto___28312 = temp__4126__auto___28311;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28285","constructor28285",392353766,null),cljs.core.pr_str.call(null,error__6036__auto___28312)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28312,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28291,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28291,input_schema28292,input_checker28293,output_checker28294))
,schema.core.make_fn_schema.call(null,output_schema28291,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28292], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.action_link.action_link_component = ((function (component_fnk__7881__auto___28307){
return (function() { 
var action_link_component__delegate = function (data__7882__auto__,owner28284,p__28304){var vec__28306 = p__28304;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28306,(0),null);return component_fnk__7881__auto___28307.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28284),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28284,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var action_link_component = function (data__7882__auto__,owner28284,var_args){
var p__28304 = null;if (arguments.length > 2) {
  p__28304 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return action_link_component__delegate.call(this,data__7882__auto__,owner28284,p__28304);};
action_link_component.cljs$lang$maxFixedArity = 2;
action_link_component.cljs$lang$applyTo = (function (arglist__28313){
var data__7882__auto__ = cljs.core.first(arglist__28313);
arglist__28313 = cljs.core.next(arglist__28313);
var owner28284 = cljs.core.first(arglist__28313);
var p__28304 = cljs.core.rest(arglist__28313);
return action_link_component__delegate(data__7882__auto__,owner28284,p__28304);
});
action_link_component.cljs$core$IFn$_invoke$arity$variadic = action_link_component__delegate;
return action_link_component;
})()
;})(component_fnk__7881__auto___28307))
;
clustermap.components.action_link.__GT_action_link_component = (function() {
var __GT_action_link_component = null;
var __GT_action_link_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.action_link.action_link_component,cursor__7850__auto__);
});
var __GT_action_link_component__2 = (function (cursor__7850__auto__,m28286){return om.core.build.call(null,clustermap.components.action_link.action_link_component,cursor__7850__auto__,m28286);
});
__GT_action_link_component = function(cursor__7850__auto__,m28286){
switch(arguments.length){
case 1:
return __GT_action_link_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_action_link_component__2.call(this,cursor__7850__auto__,m28286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_action_link_component.cljs$core$IFn$_invoke$arity$1 = __GT_action_link_component__1;
__GT_action_link_component.cljs$core$IFn$_invoke$arity$2 = __GT_action_link_component__2;
return __GT_action_link_component;
})()
;
