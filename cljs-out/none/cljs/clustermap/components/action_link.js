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
var component_fnk__15794__auto___28471 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28455 = schema.core.Any;var input_schema28456 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.action_link.ActionLinkSchema], true, false),new cljs.core.Symbol(null,"map28451","map28451",-2089079815,null))], null);var input_checker28457 = schema.core.checker.call(null,input_schema28456);var output_checker28458 = schema.core.checker.call(null,output_schema28455);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458){
return (function constructor28449(G__28459){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___28472 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28459], null);var temp__4126__auto___28473 = input_checker28457.call(null,args__13948__auto___28472);if(cljs.core.truth_(temp__4126__auto___28473))
{var error__13949__auto___28474 = temp__4126__auto___28473;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28449","constructor28449",-470364453,null),cljs.core.pr_str.call(null,error__13949__auto___28474)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___28474,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___28472,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28456,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map28451 = G__28459;while(true){
if(cljs.core.map_QMARK_.call(null,map28451))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28451)));
}
var map28453 = plumbing.fnk.schema.safe_get.call(null,map28451,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map28454 = plumbing.fnk.schema.safe_get.call(null,map28453,new cljs.core.Keyword(null,"action-link","action-link",1595094845),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var content = plumbing.fnk.schema.safe_get.call(null,map28454,new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-link","action-link",1595094845)], null));var action = plumbing.fnk.schema.safe_get.call(null,map28454,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-link","action-link",1595094845)], null));var class$ = cljs.core.get.call(null,map28454,new cljs.core.Keyword(null,"class","class",-2030961996),null);var id = cljs.core.get.call(null,map28454,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map28452 = plumbing.fnk.schema.safe_get.call(null,map28451,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map28452,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28451,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.action_link.t28464 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.action_link.t28464 = (function (G__28459,owner,map28453,input_checker28457,content,map28454,output_checker28458,validate__13947__auto__,map28451,id,class$,constructor28449,output_schema28455,app,ufv__,input_schema28456,map28452,action,meta28465){
this.G__28459 = G__28459;
this.owner = owner;
this.map28453 = map28453;
this.input_checker28457 = input_checker28457;
this.content = content;
this.map28454 = map28454;
this.output_checker28458 = output_checker28458;
this.validate__13947__auto__ = validate__13947__auto__;
this.map28451 = map28451;
this.id = id;
this.class$ = class$;
this.constructor28449 = constructor28449;
this.output_schema28455 = output_schema28455;
this.app = app;
this.ufv__ = ufv__;
this.input_schema28456 = input_schema28456;
this.map28452 = map28452;
this.action = action;
this.meta28465 = meta28465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.action_link.t28464.cljs$lang$type = true;
clustermap.components.action_link.t28464.cljs$lang$ctorStr = "clustermap.components.action-link/t28464";
clustermap.components.action_link.t28464.cljs$lang$ctorPrWriter = ((function (owner,app,map28452,id,class$,action,content,map28454,map28453,validate__13947__auto__,ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.action-link/t28464");
});})(owner,app,map28452,id,class$,action,content,map28454,map28453,validate__13947__auto__,ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458))
;
clustermap.components.action_link.t28464.prototype.om$core$IDisplayName$ = true;
clustermap.components.action_link.t28464.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map28452,id,class$,action,content,map28454,map28453,validate__13947__auto__,ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458){
return (function (_){var self__ = this;
var ___$1 = this;return "action-link-component";
});})(owner,app,map28452,id,class$,action,content,map28454,map28453,validate__13947__auto__,ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458))
;
clustermap.components.action_link.t28464.prototype.om$core$IRender$ = true;
clustermap.components.action_link.t28464.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map28452,id,class$,action,content,map28454,map28453,validate__13947__auto__,ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458){
return (function (_){var self__ = this;
var ___$1 = this;var attrs28467 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),self__.action),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.a,((cljs.core.map_QMARK_.call(null,attrs28467))?sablono.interpreter.attributes.call(null,attrs28467):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28467))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.content.call(null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28467),sablono.interpreter.interpret.call(null,self__.content.call(null))], null))));
});})(owner,app,map28452,id,class$,action,content,map28454,map28453,validate__13947__auto__,ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458))
;
clustermap.components.action_link.t28464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map28452,id,class$,action,content,map28454,map28453,validate__13947__auto__,ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458){
return (function (_28466){var self__ = this;
var _28466__$1 = this;return self__.meta28465;
});})(owner,app,map28452,id,class$,action,content,map28454,map28453,validate__13947__auto__,ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458))
;
clustermap.components.action_link.t28464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map28452,id,class$,action,content,map28454,map28453,validate__13947__auto__,ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458){
return (function (_28466,meta28465__$1){var self__ = this;
var _28466__$1 = this;return (new clustermap.components.action_link.t28464(self__.G__28459,self__.owner,self__.map28453,self__.input_checker28457,self__.content,self__.map28454,self__.output_checker28458,self__.validate__13947__auto__,self__.map28451,self__.id,self__.class$,self__.constructor28449,self__.output_schema28455,self__.app,self__.ufv__,self__.input_schema28456,self__.map28452,self__.action,meta28465__$1));
});})(owner,app,map28452,id,class$,action,content,map28454,map28453,validate__13947__auto__,ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458))
;
clustermap.components.action_link.__GT_t28464 = ((function (owner,app,map28452,id,class$,action,content,map28454,map28453,validate__13947__auto__,ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458){
return (function __GT_t28464(G__28459__$1,owner__$1,map28453__$1,input_checker28457__$1,content__$1,map28454__$1,output_checker28458__$1,validate__13947__auto____$1,map28451__$1,id__$1,class$__$1,constructor28449__$1,output_schema28455__$1,app__$1,ufv____$1,input_schema28456__$1,map28452__$1,action__$1,meta28465){return (new clustermap.components.action_link.t28464(G__28459__$1,owner__$1,map28453__$1,input_checker28457__$1,content__$1,map28454__$1,output_checker28458__$1,validate__13947__auto____$1,map28451__$1,id__$1,class$__$1,constructor28449__$1,output_schema28455__$1,app__$1,ufv____$1,input_schema28456__$1,map28452__$1,action__$1,meta28465));
});})(owner,app,map28452,id,class$,action,content,map28454,map28453,validate__13947__auto__,ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458))
;
}
return (new clustermap.components.action_link.t28464(G__28459,owner,map28453,input_checker28457,content,map28454,output_checker28458,validate__13947__auto__,map28451,id,class$,constructor28449,output_schema28455,app,ufv__,input_schema28456,map28452,action,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___28475 = output_checker28458.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___28475))
{var error__13949__auto___28476 = temp__4126__auto___28475;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28449","constructor28449",-470364453,null),cljs.core.pr_str.call(null,error__13949__auto___28476)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___28476,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28455,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema28455,input_schema28456,input_checker28457,output_checker28458))
,schema.core.make_fn_schema.call(null,output_schema28455,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28456], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.action_link.action_link_component = ((function (component_fnk__15794__auto___28471){
return (function() { 
var action_link_component__delegate = function (data__15795__auto__,owner28448,p__28468){var vec__28470 = p__28468;var opts__15796__auto__ = cljs.core.nth.call(null,vec__28470,(0),null);return component_fnk__15794__auto___28471.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28448),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28448,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var action_link_component = function (data__15795__auto__,owner28448,var_args){
var p__28468 = null;if (arguments.length > 2) {
  p__28468 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return action_link_component__delegate.call(this,data__15795__auto__,owner28448,p__28468);};
action_link_component.cljs$lang$maxFixedArity = 2;
action_link_component.cljs$lang$applyTo = (function (arglist__28477){
var data__15795__auto__ = cljs.core.first(arglist__28477);
arglist__28477 = cljs.core.next(arglist__28477);
var owner28448 = cljs.core.first(arglist__28477);
var p__28468 = cljs.core.rest(arglist__28477);
return action_link_component__delegate(data__15795__auto__,owner28448,p__28468);
});
action_link_component.cljs$core$IFn$_invoke$arity$variadic = action_link_component__delegate;
return action_link_component;
})()
;})(component_fnk__15794__auto___28471))
;
clustermap.components.action_link.__GT_action_link_component = (function() {
var __GT_action_link_component = null;
var __GT_action_link_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.action_link.action_link_component,cursor__15763__auto__);
});
var __GT_action_link_component__2 = (function (cursor__15763__auto__,m28450){return om.core.build.call(null,clustermap.components.action_link.action_link_component,cursor__15763__auto__,m28450);
});
__GT_action_link_component = function(cursor__15763__auto__,m28450){
switch(arguments.length){
case 1:
return __GT_action_link_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_action_link_component__2.call(this,cursor__15763__auto__,m28450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_action_link_component.cljs$core$IFn$_invoke$arity$1 = __GT_action_link_component__1;
__GT_action_link_component.cljs$core$IFn$_invoke$arity$2 = __GT_action_link_component__2;
return __GT_action_link_component;
})()
;

//# sourceMappingURL=action_link.js.map