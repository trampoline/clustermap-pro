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
var component_fnk__7881__auto___32753 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32737 = schema.core.Any;var input_schema32738 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map32733","map32733",570979062,null))], null);var input_checker32739 = schema.core.checker.call(null,input_schema32738);var output_checker32740 = schema.core.checker.call(null,output_schema32737);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740){
return (function constructor32731(G__32741){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32754 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32741], null);var temp__4126__auto___32755 = input_checker32739.call(null,args__6035__auto___32754);if(cljs.core.truth_(temp__4126__auto___32755))
{var error__6036__auto___32756 = temp__4126__auto___32755;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32731","constructor32731",-540175333,null),cljs.core.pr_str.call(null,error__6036__auto___32756)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32756,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32754,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32738,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map32733 = G__32741;while(true){
if(cljs.core.map_QMARK_.call(null,map32733))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32733)));
}
var map32735 = plumbing.fnk.schema.safe_get.call(null,map32733,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map32736 = plumbing.fnk.schema.safe_get.call(null,map32735,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map32736,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map32736,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map32736,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map32736,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map32734 = plumbing.fnk.schema.safe_get.call(null,map32733,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map32734,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map32733,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t32746 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t32746 = (function (map32734,owner,text,map32736,input_checker32739,G__32741,input_schema32738,map32733,output_checker32740,target_view,validate__6034__auto__,constructor32731,id,class$,app,ufv__,output_schema32737,map32735,meta32747){
this.map32734 = map32734;
this.owner = owner;
this.text = text;
this.map32736 = map32736;
this.input_checker32739 = input_checker32739;
this.G__32741 = G__32741;
this.input_schema32738 = input_schema32738;
this.map32733 = map32733;
this.output_checker32740 = output_checker32740;
this.target_view = target_view;
this.validate__6034__auto__ = validate__6034__auto__;
this.constructor32731 = constructor32731;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.output_schema32737 = output_schema32737;
this.map32735 = map32735;
this.meta32747 = meta32747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t32746.cljs$lang$type = true;
clustermap.components.nav_button.t32746.cljs$lang$ctorStr = "clustermap.components.nav-button/t32746";
clustermap.components.nav_button.t32746.cljs$lang$ctorPrWriter = ((function (owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t32746");
});})(owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740))
;
clustermap.components.nav_button.t32746.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t32746.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740))
;
clustermap.components.nav_button.t32746.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t32746.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740){
return (function (_){var self__ = this;
var ___$1 = this;var attrs32749 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs32749))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs32749)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32749))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32749),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740))
;
clustermap.components.nav_button.t32746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740){
return (function (_32748){var self__ = this;
var _32748__$1 = this;return self__.meta32747;
});})(owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740))
;
clustermap.components.nav_button.t32746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740){
return (function (_32748,meta32747__$1){var self__ = this;
var _32748__$1 = this;return (new clustermap.components.nav_button.t32746(self__.map32734,self__.owner,self__.text,self__.map32736,self__.input_checker32739,self__.G__32741,self__.input_schema32738,self__.map32733,self__.output_checker32740,self__.target_view,self__.validate__6034__auto__,self__.constructor32731,self__.id,self__.class$,self__.app,self__.ufv__,self__.output_schema32737,self__.map32735,meta32747__$1));
});})(owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740))
;
clustermap.components.nav_button.__GT_t32746 = ((function (owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740){
return (function __GT_t32746(map32734__$1,owner__$1,text__$1,map32736__$1,input_checker32739__$1,G__32741__$1,input_schema32738__$1,map32733__$1,output_checker32740__$1,target_view__$1,validate__6034__auto____$1,constructor32731__$1,id__$1,class$__$1,app__$1,ufv____$1,output_schema32737__$1,map32735__$1,meta32747){return (new clustermap.components.nav_button.t32746(map32734__$1,owner__$1,text__$1,map32736__$1,input_checker32739__$1,G__32741__$1,input_schema32738__$1,map32733__$1,output_checker32740__$1,target_view__$1,validate__6034__auto____$1,constructor32731__$1,id__$1,class$__$1,app__$1,ufv____$1,output_schema32737__$1,map32735__$1,meta32747));
});})(owner,app,map32734,id,class$,target_view,text,map32736,map32735,validate__6034__auto__,ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740))
;
}
return (new clustermap.components.nav_button.t32746(map32734,owner,text,map32736,input_checker32739,G__32741,input_schema32738,map32733,output_checker32740,target_view,validate__6034__auto__,constructor32731,id,class$,app,ufv__,output_schema32737,map32735,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32757 = output_checker32740.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32757))
{var error__6036__auto___32758 = temp__4126__auto___32757;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32731","constructor32731",-540175333,null),cljs.core.pr_str.call(null,error__6036__auto___32758)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32758,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32737,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema32737,input_schema32738,input_checker32739,output_checker32740))
,schema.core.make_fn_schema.call(null,output_schema32737,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32738], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___32753){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner32730,p__32750){var vec__32752 = p__32750;var opts__7883__auto__ = cljs.core.nth.call(null,vec__32752,(0),null);return component_fnk__7881__auto___32753.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner32730),new cljs.core.Keyword(null,"owner","owner",-392611939),owner32730,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner32730,var_args){
var p__32750 = null;if (arguments.length > 2) {
  p__32750 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner32730,p__32750);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__32759){
var data__7882__auto__ = cljs.core.first(arglist__32759);
arglist__32759 = cljs.core.next(arglist__32759);
var owner32730 = cljs.core.first(arglist__32759);
var p__32750 = cljs.core.rest(arglist__32759);
return nav_button_component__delegate(data__7882__auto__,owner32730,p__32750);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___32753))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m32732){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m32732);
});
__GT_nav_button_component = function(cursor__7850__auto__,m32732){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m32732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
