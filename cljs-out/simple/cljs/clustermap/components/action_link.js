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
var component_fnk__7881__auto___28437 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28421 = schema.core.Any;var input_schema28422 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.action_link.ActionLinkSchema], true, false),new cljs.core.Symbol(null,"map28417","map28417",1800837658,null))], null);var input_checker28423 = schema.core.checker.call(null,input_schema28422);var output_checker28424 = schema.core.checker.call(null,output_schema28421);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424){
return (function constructor28415(G__28425){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28438 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28425], null);var temp__4126__auto___28439 = input_checker28423.call(null,args__6035__auto___28438);if(cljs.core.truth_(temp__4126__auto___28439))
{var error__6036__auto___28440 = temp__4126__auto___28439;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28415","constructor28415",-1863511275,null),cljs.core.pr_str.call(null,error__6036__auto___28440)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28440,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28438,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28422,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28417 = G__28425;while(true){
if(cljs.core.map_QMARK_.call(null,map28417))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28417)));
}
var map28419 = plumbing.fnk.schema.safe_get.call(null,map28417,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map28420 = plumbing.fnk.schema.safe_get.call(null,map28419,new cljs.core.Keyword(null,"action-link","action-link",1595094845),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var content = plumbing.fnk.schema.safe_get.call(null,map28420,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-link","action-link",1595094845)], null));var action = plumbing.fnk.schema.safe_get.call(null,map28420,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-link","action-link",1595094845)], null));var class$ = cljs.core.get.call(null,map28420,new cljs.core.Keyword(null,"class","class",-2030961996),null);var id = cljs.core.get.call(null,map28420,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map28418 = plumbing.fnk.schema.safe_get.call(null,map28417,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map28418,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28417,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.action_link.t28430 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.action_link.t28430 = (function (map28418,map28420,owner,output_schema28421,content,map28419,G__28425,input_checker28423,constructor28415,output_checker28424,validate__6034__auto__,map28417,id,class$,app,ufv__,input_schema28422,action,meta28431){
this.map28418 = map28418;
this.map28420 = map28420;
this.owner = owner;
this.output_schema28421 = output_schema28421;
this.content = content;
this.map28419 = map28419;
this.G__28425 = G__28425;
this.input_checker28423 = input_checker28423;
this.constructor28415 = constructor28415;
this.output_checker28424 = output_checker28424;
this.validate__6034__auto__ = validate__6034__auto__;
this.map28417 = map28417;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.input_schema28422 = input_schema28422;
this.action = action;
this.meta28431 = meta28431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.action_link.t28430.cljs$lang$type = true;
clustermap.components.action_link.t28430.cljs$lang$ctorStr = "clustermap.components.action-link/t28430";
clustermap.components.action_link.t28430.cljs$lang$ctorPrWriter = ((function (owner,app,map28418,id,class$,action,content,map28420,map28419,validate__6034__auto__,ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.action-link/t28430");
});})(owner,app,map28418,id,class$,action,content,map28420,map28419,validate__6034__auto__,ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424))
;
clustermap.components.action_link.t28430.prototype.om$core$IDisplayName$ = true;
clustermap.components.action_link.t28430.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map28418,id,class$,action,content,map28420,map28419,validate__6034__auto__,ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424){
return (function (_){var self__ = this;
var ___$1 = this;return "action-link-component";
});})(owner,app,map28418,id,class$,action,content,map28420,map28419,validate__6034__auto__,ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424))
;
clustermap.components.action_link.t28430.prototype.om$core$IRender$ = true;
clustermap.components.action_link.t28430.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map28418,id,class$,action,content,map28420,map28419,validate__6034__auto__,ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424){
return (function (_){var self__ = this;
var ___$1 = this;var attrs28433 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),self__.action),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.a,((cljs.core.map_QMARK_.call(null,attrs28433))?sablono.interpreter.attributes.call(null,attrs28433):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28433))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.content.call(null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28433),sablono.interpreter.interpret.call(null,self__.content.call(null))], null))));
});})(owner,app,map28418,id,class$,action,content,map28420,map28419,validate__6034__auto__,ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424))
;
clustermap.components.action_link.t28430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map28418,id,class$,action,content,map28420,map28419,validate__6034__auto__,ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424){
return (function (_28432){var self__ = this;
var _28432__$1 = this;return self__.meta28431;
});})(owner,app,map28418,id,class$,action,content,map28420,map28419,validate__6034__auto__,ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424))
;
clustermap.components.action_link.t28430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map28418,id,class$,action,content,map28420,map28419,validate__6034__auto__,ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424){
return (function (_28432,meta28431__$1){var self__ = this;
var _28432__$1 = this;return (new clustermap.components.action_link.t28430(self__.map28418,self__.map28420,self__.owner,self__.output_schema28421,self__.content,self__.map28419,self__.G__28425,self__.input_checker28423,self__.constructor28415,self__.output_checker28424,self__.validate__6034__auto__,self__.map28417,self__.id,self__.class$,self__.app,self__.ufv__,self__.input_schema28422,self__.action,meta28431__$1));
});})(owner,app,map28418,id,class$,action,content,map28420,map28419,validate__6034__auto__,ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424))
;
clustermap.components.action_link.__GT_t28430 = ((function (owner,app,map28418,id,class$,action,content,map28420,map28419,validate__6034__auto__,ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424){
return (function __GT_t28430(map28418__$1,map28420__$1,owner__$1,output_schema28421__$1,content__$1,map28419__$1,G__28425__$1,input_checker28423__$1,constructor28415__$1,output_checker28424__$1,validate__6034__auto____$1,map28417__$1,id__$1,class$__$1,app__$1,ufv____$1,input_schema28422__$1,action__$1,meta28431){return (new clustermap.components.action_link.t28430(map28418__$1,map28420__$1,owner__$1,output_schema28421__$1,content__$1,map28419__$1,G__28425__$1,input_checker28423__$1,constructor28415__$1,output_checker28424__$1,validate__6034__auto____$1,map28417__$1,id__$1,class$__$1,app__$1,ufv____$1,input_schema28422__$1,action__$1,meta28431));
});})(owner,app,map28418,id,class$,action,content,map28420,map28419,validate__6034__auto__,ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424))
;
}
return (new clustermap.components.action_link.t28430(map28418,map28420,owner,output_schema28421,content,map28419,G__28425,input_checker28423,constructor28415,output_checker28424,validate__6034__auto__,map28417,id,class$,app,ufv__,input_schema28422,action,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28441 = output_checker28424.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28441))
{var error__6036__auto___28442 = temp__4126__auto___28441;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28415","constructor28415",-1863511275,null),cljs.core.pr_str.call(null,error__6036__auto___28442)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28442,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28421,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28421,input_schema28422,input_checker28423,output_checker28424))
,schema.core.make_fn_schema.call(null,output_schema28421,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28422], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.action_link.action_link_component = ((function (component_fnk__7881__auto___28437){
return (function() { 
var action_link_component__delegate = function (data__7882__auto__,owner28414,p__28434){var vec__28436 = p__28434;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28436,(0),null);return component_fnk__7881__auto___28437.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28414),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28414,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var action_link_component = function (data__7882__auto__,owner28414,var_args){
var p__28434 = null;if (arguments.length > 2) {
  p__28434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return action_link_component__delegate.call(this,data__7882__auto__,owner28414,p__28434);};
action_link_component.cljs$lang$maxFixedArity = 2;
action_link_component.cljs$lang$applyTo = (function (arglist__28443){
var data__7882__auto__ = cljs.core.first(arglist__28443);
arglist__28443 = cljs.core.next(arglist__28443);
var owner28414 = cljs.core.first(arglist__28443);
var p__28434 = cljs.core.rest(arglist__28443);
return action_link_component__delegate(data__7882__auto__,owner28414,p__28434);
});
action_link_component.cljs$core$IFn$_invoke$arity$variadic = action_link_component__delegate;
return action_link_component;
})()
;})(component_fnk__7881__auto___28437))
;
clustermap.components.action_link.__GT_action_link_component = (function() {
var __GT_action_link_component = null;
var __GT_action_link_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.action_link.action_link_component,cursor__7850__auto__);
});
var __GT_action_link_component__2 = (function (cursor__7850__auto__,m28416){return om.core.build.call(null,clustermap.components.action_link.action_link_component,cursor__7850__auto__,m28416);
});
__GT_action_link_component = function(cursor__7850__auto__,m28416){
switch(arguments.length){
case 1:
return __GT_action_link_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_action_link_component__2.call(this,cursor__7850__auto__,m28416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_action_link_component.cljs$core$IFn$_invoke$arity$1 = __GT_action_link_component__1;
__GT_action_link_component.cljs$core$IFn$_invoke$arity$2 = __GT_action_link_component__2;
return __GT_action_link_component;
})()
;
