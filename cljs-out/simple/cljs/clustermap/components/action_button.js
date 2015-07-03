// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.action_button');
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
clustermap.components.action_button.ActionButtonSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",-1790561697),schema.core.Str,new cljs.core.Keyword(null,"action","action",-811238024),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.Str], true, false)], null);
var component_fnk__7881__auto___29091 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29075 = schema.core.Any;var input_schema29076 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.action_button.ActionButtonSchema], true, false),new cljs.core.Symbol(null,"map29071","map29071",716785561,null))], null);var input_checker29077 = schema.core.checker.call(null,input_schema29076);var output_checker29078 = schema.core.checker.call(null,output_schema29075);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078){
return (function constructor29069(G__29079){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___29092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29079], null);var temp__4126__auto___29093 = input_checker29077.call(null,args__6035__auto___29092);if(cljs.core.truth_(temp__4126__auto___29093))
{var error__6036__auto___29094 = temp__4126__auto___29093;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29069","constructor29069",1066843855,null),cljs.core.pr_str.call(null,error__6036__auto___29094)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29094,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___29092,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29076,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map29071 = G__29079;while(true){
if(cljs.core.map_QMARK_.call(null,map29071))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29071)));
}
var map29073 = plumbing.fnk.schema.safe_get.call(null,map29071,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map29074 = plumbing.fnk.schema.safe_get.call(null,map29073,new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map29074,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var action = plumbing.fnk.schema.safe_get.call(null,map29074,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map29074,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var id = cljs.core.get.call(null,map29074,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map29072 = plumbing.fnk.schema.safe_get.call(null,map29071,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map29072,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29071,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.action_button.t29084 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.action_button.t29084 = (function (input_checker29077,input_schema29076,owner,output_checker29078,text,map29072,map29073,constructor29069,map29074,G__29079,map29071,validate__6034__auto__,id,class$,app,ufv__,output_schema29075,action,meta29085){
this.input_checker29077 = input_checker29077;
this.input_schema29076 = input_schema29076;
this.owner = owner;
this.output_checker29078 = output_checker29078;
this.text = text;
this.map29072 = map29072;
this.map29073 = map29073;
this.constructor29069 = constructor29069;
this.map29074 = map29074;
this.G__29079 = G__29079;
this.map29071 = map29071;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.output_schema29075 = output_schema29075;
this.action = action;
this.meta29085 = meta29085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.action_button.t29084.cljs$lang$type = true;
clustermap.components.action_button.t29084.cljs$lang$ctorStr = "clustermap.components.action-button/t29084";
clustermap.components.action_button.t29084.cljs$lang$ctorPrWriter = ((function (owner,app,map29072,id,class$,action,text,map29074,map29073,validate__6034__auto__,ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.action-button/t29084");
});})(owner,app,map29072,id,class$,action,text,map29074,map29073,validate__6034__auto__,ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078))
;
clustermap.components.action_button.t29084.prototype.om$core$IDisplayName$ = true;
clustermap.components.action_button.t29084.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map29072,id,class$,action,text,map29074,map29073,validate__6034__auto__,ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078){
return (function (_){var self__ = this;
var ___$1 = this;return "action-button-component";
});})(owner,app,map29072,id,class$,action,text,map29074,map29073,validate__6034__auto__,ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078))
;
clustermap.components.action_button.t29084.prototype.om$core$IRender$ = true;
clustermap.components.action_button.t29084.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map29072,id,class$,action,text,map29074,map29073,validate__6034__auto__,ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078){
return (function (_){var self__ = this;
var ___$1 = this;var attrs29087 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),self__.action),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs29087))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs29087)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29087))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29087),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map29072,id,class$,action,text,map29074,map29073,validate__6034__auto__,ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078))
;
clustermap.components.action_button.t29084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map29072,id,class$,action,text,map29074,map29073,validate__6034__auto__,ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078){
return (function (_29086){var self__ = this;
var _29086__$1 = this;return self__.meta29085;
});})(owner,app,map29072,id,class$,action,text,map29074,map29073,validate__6034__auto__,ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078))
;
clustermap.components.action_button.t29084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map29072,id,class$,action,text,map29074,map29073,validate__6034__auto__,ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078){
return (function (_29086,meta29085__$1){var self__ = this;
var _29086__$1 = this;return (new clustermap.components.action_button.t29084(self__.input_checker29077,self__.input_schema29076,self__.owner,self__.output_checker29078,self__.text,self__.map29072,self__.map29073,self__.constructor29069,self__.map29074,self__.G__29079,self__.map29071,self__.validate__6034__auto__,self__.id,self__.class$,self__.app,self__.ufv__,self__.output_schema29075,self__.action,meta29085__$1));
});})(owner,app,map29072,id,class$,action,text,map29074,map29073,validate__6034__auto__,ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078))
;
clustermap.components.action_button.__GT_t29084 = ((function (owner,app,map29072,id,class$,action,text,map29074,map29073,validate__6034__auto__,ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078){
return (function __GT_t29084(input_checker29077__$1,input_schema29076__$1,owner__$1,output_checker29078__$1,text__$1,map29072__$1,map29073__$1,constructor29069__$1,map29074__$1,G__29079__$1,map29071__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,output_schema29075__$1,action__$1,meta29085){return (new clustermap.components.action_button.t29084(input_checker29077__$1,input_schema29076__$1,owner__$1,output_checker29078__$1,text__$1,map29072__$1,map29073__$1,constructor29069__$1,map29074__$1,G__29079__$1,map29071__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,output_schema29075__$1,action__$1,meta29085));
});})(owner,app,map29072,id,class$,action,text,map29074,map29073,validate__6034__auto__,ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078))
;
}
return (new clustermap.components.action_button.t29084(input_checker29077,input_schema29076,owner,output_checker29078,text,map29072,map29073,constructor29069,map29074,G__29079,map29071,validate__6034__auto__,id,class$,app,ufv__,output_schema29075,action,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___29095 = output_checker29078.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___29095))
{var error__6036__auto___29096 = temp__4126__auto___29095;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29069","constructor29069",1066843855,null),cljs.core.pr_str.call(null,error__6036__auto___29096)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___29096,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29075,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema29075,input_schema29076,input_checker29077,output_checker29078))
,schema.core.make_fn_schema.call(null,output_schema29075,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29076], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.action_button.action_button_component = ((function (component_fnk__7881__auto___29091){
return (function() { 
var action_button_component__delegate = function (data__7882__auto__,owner29068,p__29088){var vec__29090 = p__29088;var opts__7883__auto__ = cljs.core.nth.call(null,vec__29090,(0),null);return component_fnk__7881__auto___29091.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29068),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29068,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var action_button_component = function (data__7882__auto__,owner29068,var_args){
var p__29088 = null;if (arguments.length > 2) {
  p__29088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return action_button_component__delegate.call(this,data__7882__auto__,owner29068,p__29088);};
action_button_component.cljs$lang$maxFixedArity = 2;
action_button_component.cljs$lang$applyTo = (function (arglist__29097){
var data__7882__auto__ = cljs.core.first(arglist__29097);
arglist__29097 = cljs.core.next(arglist__29097);
var owner29068 = cljs.core.first(arglist__29097);
var p__29088 = cljs.core.rest(arglist__29097);
return action_button_component__delegate(data__7882__auto__,owner29068,p__29088);
});
action_button_component.cljs$core$IFn$_invoke$arity$variadic = action_button_component__delegate;
return action_button_component;
})()
;})(component_fnk__7881__auto___29091))
;
clustermap.components.action_button.__GT_action_button_component = (function() {
var __GT_action_button_component = null;
var __GT_action_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.action_button.action_button_component,cursor__7850__auto__);
});
var __GT_action_button_component__2 = (function (cursor__7850__auto__,m29070){return om.core.build.call(null,clustermap.components.action_button.action_button_component,cursor__7850__auto__,m29070);
});
__GT_action_button_component = function(cursor__7850__auto__,m29070){
switch(arguments.length){
case 1:
return __GT_action_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_action_button_component__2.call(this,cursor__7850__auto__,m29070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_action_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_action_button_component__1;
__GT_action_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_action_button_component__2;
return __GT_action_button_component;
})()
;
