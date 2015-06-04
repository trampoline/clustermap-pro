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
var component_fnk__7881__auto___30931 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30915 = schema.core.Any;var input_schema30916 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map30911","map30911",597094274,null))], null);var input_checker30917 = schema.core.checker.call(null,input_schema30916);var output_checker30918 = schema.core.checker.call(null,output_schema30915);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function constructor30909(G__30919){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30919], null);var temp__4126__auto___30933 = input_checker30917.call(null,args__6035__auto___30932);if(cljs.core.truth_(temp__4126__auto___30933))
{var error__6036__auto___30934 = temp__4126__auto___30933;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30909","constructor30909",-955352832,null),cljs.core.pr_str.call(null,error__6036__auto___30934)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30934,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30932,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30916,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30911 = G__30919;while(true){
if(cljs.core.map_QMARK_.call(null,map30911))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30911)));
}
var map30913 = plumbing.fnk.schema.safe_get.call(null,map30911,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map30914 = plumbing.fnk.schema.safe_get.call(null,map30913,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map30914,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map30914,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map30914,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map30914,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map30912 = plumbing.fnk.schema.safe_get.call(null,map30911,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map30912,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30911,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t30924 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t30924 = (function (constructor30909,output_schema30915,map30911,owner,input_checker30917,text,map30912,map30913,map30914,input_schema30916,G__30919,target_view,validate__6034__auto__,output_checker30918,id,class$,app,ufv__,meta30925){
this.constructor30909 = constructor30909;
this.output_schema30915 = output_schema30915;
this.map30911 = map30911;
this.owner = owner;
this.input_checker30917 = input_checker30917;
this.text = text;
this.map30912 = map30912;
this.map30913 = map30913;
this.map30914 = map30914;
this.input_schema30916 = input_schema30916;
this.G__30919 = G__30919;
this.target_view = target_view;
this.validate__6034__auto__ = validate__6034__auto__;
this.output_checker30918 = output_checker30918;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.meta30925 = meta30925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t30924.cljs$lang$type = true;
clustermap.components.nav_button.t30924.cljs$lang$ctorStr = "clustermap.components.nav-button/t30924";
clustermap.components.nav_button.t30924.cljs$lang$ctorPrWriter = ((function (owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t30924");
});})(owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
clustermap.components.nav_button.t30924.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t30924.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
clustermap.components.nav_button.t30924.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t30924.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (_){var self__ = this;
var ___$1 = this;var attrs30927 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs30927))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs30927)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30927))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30927),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
clustermap.components.nav_button.t30924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (_30926){var self__ = this;
var _30926__$1 = this;return self__.meta30925;
});})(owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
clustermap.components.nav_button.t30924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function (_30926,meta30925__$1){var self__ = this;
var _30926__$1 = this;return (new clustermap.components.nav_button.t30924(self__.constructor30909,self__.output_schema30915,self__.map30911,self__.owner,self__.input_checker30917,self__.text,self__.map30912,self__.map30913,self__.map30914,self__.input_schema30916,self__.G__30919,self__.target_view,self__.validate__6034__auto__,self__.output_checker30918,self__.id,self__.class$,self__.app,self__.ufv__,meta30925__$1));
});})(owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
clustermap.components.nav_button.__GT_t30924 = ((function (owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918){
return (function __GT_t30924(constructor30909__$1,output_schema30915__$1,map30911__$1,owner__$1,input_checker30917__$1,text__$1,map30912__$1,map30913__$1,map30914__$1,input_schema30916__$1,G__30919__$1,target_view__$1,validate__6034__auto____$1,output_checker30918__$1,id__$1,class$__$1,app__$1,ufv____$1,meta30925){return (new clustermap.components.nav_button.t30924(constructor30909__$1,output_schema30915__$1,map30911__$1,owner__$1,input_checker30917__$1,text__$1,map30912__$1,map30913__$1,map30914__$1,input_schema30916__$1,G__30919__$1,target_view__$1,validate__6034__auto____$1,output_checker30918__$1,id__$1,class$__$1,app__$1,ufv____$1,meta30925));
});})(owner,app,map30912,id,class$,target_view,text,map30914,map30913,validate__6034__auto__,ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
;
}
return (new clustermap.components.nav_button.t30924(constructor30909,output_schema30915,map30911,owner,input_checker30917,text,map30912,map30913,map30914,input_schema30916,G__30919,target_view,validate__6034__auto__,output_checker30918,id,class$,app,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30935 = output_checker30918.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30935))
{var error__6036__auto___30936 = temp__4126__auto___30935;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30909","constructor30909",-955352832,null),cljs.core.pr_str.call(null,error__6036__auto___30936)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30936,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30915,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30915,input_schema30916,input_checker30917,output_checker30918))
,schema.core.make_fn_schema.call(null,output_schema30915,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30916], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___30931){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner30908,p__30928){var vec__30930 = p__30928;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30930,(0),null);return component_fnk__7881__auto___30931.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner30908),new cljs.core.Keyword(null,"owner","owner",-392611939),owner30908,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner30908,var_args){
var p__30928 = null;if (arguments.length > 2) {
  p__30928 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner30908,p__30928);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__30937){
var data__7882__auto__ = cljs.core.first(arglist__30937);
arglist__30937 = cljs.core.next(arglist__30937);
var owner30908 = cljs.core.first(arglist__30937);
var p__30928 = cljs.core.rest(arglist__30937);
return nav_button_component__delegate(data__7882__auto__,owner30908,p__30928);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___30931))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m30910){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m30910);
});
__GT_nav_button_component = function(cursor__7850__auto__,m30910){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m30910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
