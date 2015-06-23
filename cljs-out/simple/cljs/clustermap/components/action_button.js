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
var component_fnk__7881__auto___28965 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28949 = schema.core.Any;var input_schema28950 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.action_button.ActionButtonSchema], true, false),new cljs.core.Symbol(null,"map28945","map28945",-1688119496,null))], null);var input_checker28951 = schema.core.checker.call(null,input_schema28950);var output_checker28952 = schema.core.checker.call(null,output_schema28949);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952){
return (function constructor28943(G__28953){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28966 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28953], null);var temp__4126__auto___28967 = input_checker28951.call(null,args__6035__auto___28966);if(cljs.core.truth_(temp__4126__auto___28967))
{var error__6036__auto___28968 = temp__4126__auto___28967;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28943","constructor28943",-1052638314,null),cljs.core.pr_str.call(null,error__6036__auto___28968)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28968,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28966,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28950,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28945 = G__28953;while(true){
if(cljs.core.map_QMARK_.call(null,map28945))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28945)));
}
var map28947 = plumbing.fnk.schema.safe_get.call(null,map28945,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map28948 = plumbing.fnk.schema.safe_get.call(null,map28947,new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map28948,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var action = plumbing.fnk.schema.safe_get.call(null,map28948,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map28948,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var id = cljs.core.get.call(null,map28948,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map28946 = plumbing.fnk.schema.safe_get.call(null,map28945,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map28946,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28945,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.action_button.t28958 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.action_button.t28958 = (function (input_schema28950,map28948,owner,output_schema28949,text,G__28953,output_checker28952,constructor28943,map28945,validate__6034__auto__,input_checker28951,id,class$,map28947,app,ufv__,map28946,action,meta28959){
this.input_schema28950 = input_schema28950;
this.map28948 = map28948;
this.owner = owner;
this.output_schema28949 = output_schema28949;
this.text = text;
this.G__28953 = G__28953;
this.output_checker28952 = output_checker28952;
this.constructor28943 = constructor28943;
this.map28945 = map28945;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_checker28951 = input_checker28951;
this.id = id;
this.class$ = class$;
this.map28947 = map28947;
this.app = app;
this.ufv__ = ufv__;
this.map28946 = map28946;
this.action = action;
this.meta28959 = meta28959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.action_button.t28958.cljs$lang$type = true;
clustermap.components.action_button.t28958.cljs$lang$ctorStr = "clustermap.components.action-button/t28958";
clustermap.components.action_button.t28958.cljs$lang$ctorPrWriter = ((function (owner,app,map28946,id,class$,action,text,map28948,map28947,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.action-button/t28958");
});})(owner,app,map28946,id,class$,action,text,map28948,map28947,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952))
;
clustermap.components.action_button.t28958.prototype.om$core$IDisplayName$ = true;
clustermap.components.action_button.t28958.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map28946,id,class$,action,text,map28948,map28947,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952){
return (function (_){var self__ = this;
var ___$1 = this;return "action-button-component";
});})(owner,app,map28946,id,class$,action,text,map28948,map28947,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952))
;
clustermap.components.action_button.t28958.prototype.om$core$IRender$ = true;
clustermap.components.action_button.t28958.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map28946,id,class$,action,text,map28948,map28947,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952){
return (function (_){var self__ = this;
var ___$1 = this;var attrs28961 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),self__.action),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs28961))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs28961)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28961))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28961),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map28946,id,class$,action,text,map28948,map28947,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952))
;
clustermap.components.action_button.t28958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map28946,id,class$,action,text,map28948,map28947,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952){
return (function (_28960){var self__ = this;
var _28960__$1 = this;return self__.meta28959;
});})(owner,app,map28946,id,class$,action,text,map28948,map28947,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952))
;
clustermap.components.action_button.t28958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map28946,id,class$,action,text,map28948,map28947,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952){
return (function (_28960,meta28959__$1){var self__ = this;
var _28960__$1 = this;return (new clustermap.components.action_button.t28958(self__.input_schema28950,self__.map28948,self__.owner,self__.output_schema28949,self__.text,self__.G__28953,self__.output_checker28952,self__.constructor28943,self__.map28945,self__.validate__6034__auto__,self__.input_checker28951,self__.id,self__.class$,self__.map28947,self__.app,self__.ufv__,self__.map28946,self__.action,meta28959__$1));
});})(owner,app,map28946,id,class$,action,text,map28948,map28947,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952))
;
clustermap.components.action_button.__GT_t28958 = ((function (owner,app,map28946,id,class$,action,text,map28948,map28947,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952){
return (function __GT_t28958(input_schema28950__$1,map28948__$1,owner__$1,output_schema28949__$1,text__$1,G__28953__$1,output_checker28952__$1,constructor28943__$1,map28945__$1,validate__6034__auto____$1,input_checker28951__$1,id__$1,class$__$1,map28947__$1,app__$1,ufv____$1,map28946__$1,action__$1,meta28959){return (new clustermap.components.action_button.t28958(input_schema28950__$1,map28948__$1,owner__$1,output_schema28949__$1,text__$1,G__28953__$1,output_checker28952__$1,constructor28943__$1,map28945__$1,validate__6034__auto____$1,input_checker28951__$1,id__$1,class$__$1,map28947__$1,app__$1,ufv____$1,map28946__$1,action__$1,meta28959));
});})(owner,app,map28946,id,class$,action,text,map28948,map28947,validate__6034__auto__,ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952))
;
}
return (new clustermap.components.action_button.t28958(input_schema28950,map28948,owner,output_schema28949,text,G__28953,output_checker28952,constructor28943,map28945,validate__6034__auto__,input_checker28951,id,class$,map28947,app,ufv__,map28946,action,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28969 = output_checker28952.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28969))
{var error__6036__auto___28970 = temp__4126__auto___28969;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28943","constructor28943",-1052638314,null),cljs.core.pr_str.call(null,error__6036__auto___28970)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28970,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28949,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28949,input_schema28950,input_checker28951,output_checker28952))
,schema.core.make_fn_schema.call(null,output_schema28949,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28950], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.action_button.action_button_component = ((function (component_fnk__7881__auto___28965){
return (function() { 
var action_button_component__delegate = function (data__7882__auto__,owner28942,p__28962){var vec__28964 = p__28962;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28964,(0),null);return component_fnk__7881__auto___28965.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28942),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28942,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var action_button_component = function (data__7882__auto__,owner28942,var_args){
var p__28962 = null;if (arguments.length > 2) {
  p__28962 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return action_button_component__delegate.call(this,data__7882__auto__,owner28942,p__28962);};
action_button_component.cljs$lang$maxFixedArity = 2;
action_button_component.cljs$lang$applyTo = (function (arglist__28971){
var data__7882__auto__ = cljs.core.first(arglist__28971);
arglist__28971 = cljs.core.next(arglist__28971);
var owner28942 = cljs.core.first(arglist__28971);
var p__28962 = cljs.core.rest(arglist__28971);
return action_button_component__delegate(data__7882__auto__,owner28942,p__28962);
});
action_button_component.cljs$core$IFn$_invoke$arity$variadic = action_button_component__delegate;
return action_button_component;
})()
;})(component_fnk__7881__auto___28965))
;
clustermap.components.action_button.__GT_action_button_component = (function() {
var __GT_action_button_component = null;
var __GT_action_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.action_button.action_button_component,cursor__7850__auto__);
});
var __GT_action_button_component__2 = (function (cursor__7850__auto__,m28944){return om.core.build.call(null,clustermap.components.action_button.action_button_component,cursor__7850__auto__,m28944);
});
__GT_action_button_component = function(cursor__7850__auto__,m28944){
switch(arguments.length){
case 1:
return __GT_action_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_action_button_component__2.call(this,cursor__7850__auto__,m28944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_action_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_action_button_component__1;
__GT_action_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_action_button_component__2;
return __GT_action_button_component;
})()
;
