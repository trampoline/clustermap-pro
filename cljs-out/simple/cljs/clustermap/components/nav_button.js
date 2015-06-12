// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.nav_button');
goog.require('cljs.core');
goog.require('plumbing.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('plumbing.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.nav_button.NavButtonSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",-1790561697),schema.core.Str,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.Str], true, false)], null);
var component_fnk__7881__auto___32632 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32616 = schema.core.Any;var input_schema32617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map32612","map32612",107233862,null))], null);var input_checker32618 = schema.core.checker.call(null,input_schema32617);var output_checker32619 = schema.core.checker.call(null,output_schema32616);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619){
return (function constructor32610(G__32620){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32633 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32620], null);var temp__4126__auto___32634 = input_checker32618.call(null,args__6035__auto___32633);if(cljs.core.truth_(temp__4126__auto___32634))
{var error__6036__auto___32635 = temp__4126__auto___32634;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32610","constructor32610",-964886452,null),cljs.core.pr_str.call(null,error__6036__auto___32635)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32635,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32633,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32617,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map32612 = G__32620;while(true){
if(cljs.core.map_QMARK_.call(null,map32612))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32612)));
}
var map32614 = plumbing.fnk.schema.safe_get.call(null,map32612,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map32615 = plumbing.fnk.schema.safe_get.call(null,map32614,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map32615,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map32615,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map32615,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map32615,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map32613 = plumbing.fnk.schema.safe_get.call(null,map32612,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map32613,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map32612,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t32625 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t32625 = (function (map32615,owner,text,map32612,output_schema32616,map32613,constructor32610,input_schema32617,map32614,G__32620,output_checker32619,input_checker32618,target_view,validate__6034__auto__,id,class$,app,ufv__,meta32626){
this.map32615 = map32615;
this.owner = owner;
this.text = text;
this.map32612 = map32612;
this.output_schema32616 = output_schema32616;
this.map32613 = map32613;
this.constructor32610 = constructor32610;
this.input_schema32617 = input_schema32617;
this.map32614 = map32614;
this.G__32620 = G__32620;
this.output_checker32619 = output_checker32619;
this.input_checker32618 = input_checker32618;
this.target_view = target_view;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.meta32626 = meta32626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t32625.cljs$lang$type = true;
clustermap.components.nav_button.t32625.cljs$lang$ctorStr = "clustermap.components.nav-button/t32625";
clustermap.components.nav_button.t32625.cljs$lang$ctorPrWriter = ((function (owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t32625");
});})(owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619))
;
clustermap.components.nav_button.t32625.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t32625.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619))
;
clustermap.components.nav_button.t32625.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t32625.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619){
return (function (_){var self__ = this;
var ___$1 = this;var attrs32628 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs32628))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs32628)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32628))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32628),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619))
;
clustermap.components.nav_button.t32625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619){
return (function (_32627){var self__ = this;
var _32627__$1 = this;return self__.meta32626;
});})(owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619))
;
clustermap.components.nav_button.t32625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619){
return (function (_32627,meta32626__$1){var self__ = this;
var _32627__$1 = this;return (new clustermap.components.nav_button.t32625(self__.map32615,self__.owner,self__.text,self__.map32612,self__.output_schema32616,self__.map32613,self__.constructor32610,self__.input_schema32617,self__.map32614,self__.G__32620,self__.output_checker32619,self__.input_checker32618,self__.target_view,self__.validate__6034__auto__,self__.id,self__.class$,self__.app,self__.ufv__,meta32626__$1));
});})(owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619))
;
clustermap.components.nav_button.__GT_t32625 = ((function (owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619){
return (function __GT_t32625(map32615__$1,owner__$1,text__$1,map32612__$1,output_schema32616__$1,map32613__$1,constructor32610__$1,input_schema32617__$1,map32614__$1,G__32620__$1,output_checker32619__$1,input_checker32618__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,meta32626){return (new clustermap.components.nav_button.t32625(map32615__$1,owner__$1,text__$1,map32612__$1,output_schema32616__$1,map32613__$1,constructor32610__$1,input_schema32617__$1,map32614__$1,G__32620__$1,output_checker32619__$1,input_checker32618__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,meta32626));
});})(owner,app,map32613,id,class$,target_view,text,map32615,map32614,validate__6034__auto__,ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619))
;
}
return (new clustermap.components.nav_button.t32625(map32615,owner,text,map32612,output_schema32616,map32613,constructor32610,input_schema32617,map32614,G__32620,output_checker32619,input_checker32618,target_view,validate__6034__auto__,id,class$,app,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32636 = output_checker32619.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32636))
{var error__6036__auto___32637 = temp__4126__auto___32636;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32610","constructor32610",-964886452,null),cljs.core.pr_str.call(null,error__6036__auto___32637)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32637,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32616,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema32616,input_schema32617,input_checker32618,output_checker32619))
,schema.core.make_fn_schema.call(null,output_schema32616,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32617], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___32632){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner32609,p__32629){var vec__32631 = p__32629;var opts__7883__auto__ = cljs.core.nth.call(null,vec__32631,(0),null);return component_fnk__7881__auto___32632.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner32609),new cljs.core.Keyword(null,"owner","owner",-392611939),owner32609,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner32609,var_args){
var p__32629 = null;if (arguments.length > 2) {
  p__32629 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner32609,p__32629);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__32638){
var data__7882__auto__ = cljs.core.first(arglist__32638);
arglist__32638 = cljs.core.next(arglist__32638);
var owner32609 = cljs.core.first(arglist__32638);
var p__32629 = cljs.core.rest(arglist__32638);
return nav_button_component__delegate(data__7882__auto__,owner32609,p__32629);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___32632))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m32611){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m32611);
});
__GT_nav_button_component = function(cursor__7850__auto__,m32611){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m32611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
