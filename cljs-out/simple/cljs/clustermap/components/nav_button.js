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
var component_fnk__7881__auto___30899 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30883 = schema.core.Any;var input_schema30884 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map30879","map30879",1888436694,null))], null);var input_checker30885 = schema.core.checker.call(null,input_schema30884);var output_checker30886 = schema.core.checker.call(null,output_schema30883);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886){
return (function constructor30877(G__30887){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30887], null);var temp__4126__auto___30901 = input_checker30885.call(null,args__6035__auto___30900);if(cljs.core.truth_(temp__4126__auto___30901))
{var error__6036__auto___30902 = temp__4126__auto___30901;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30877","constructor30877",-1292639604,null),cljs.core.pr_str.call(null,error__6036__auto___30902)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30902,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30900,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30884,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30879 = G__30887;while(true){
if(cljs.core.map_QMARK_.call(null,map30879))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30879)));
}
var map30881 = plumbing.fnk.schema.safe_get.call(null,map30879,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map30882 = plumbing.fnk.schema.safe_get.call(null,map30881,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map30882,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map30882,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map30882,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map30882,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map30880 = plumbing.fnk.schema.safe_get.call(null,map30879,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map30880,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30879,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t30892 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t30892 = (function (map30881,owner,text,output_checker30886,constructor30877,map30880,output_schema30883,input_schema30884,map30879,input_checker30885,target_view,validate__6034__auto__,map30882,id,class$,app,ufv__,G__30887,meta30893){
this.map30881 = map30881;
this.owner = owner;
this.text = text;
this.output_checker30886 = output_checker30886;
this.constructor30877 = constructor30877;
this.map30880 = map30880;
this.output_schema30883 = output_schema30883;
this.input_schema30884 = input_schema30884;
this.map30879 = map30879;
this.input_checker30885 = input_checker30885;
this.target_view = target_view;
this.validate__6034__auto__ = validate__6034__auto__;
this.map30882 = map30882;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.G__30887 = G__30887;
this.meta30893 = meta30893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t30892.cljs$lang$type = true;
clustermap.components.nav_button.t30892.cljs$lang$ctorStr = "clustermap.components.nav-button/t30892";
clustermap.components.nav_button.t30892.cljs$lang$ctorPrWriter = ((function (owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t30892");
});})(owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886))
;
clustermap.components.nav_button.t30892.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t30892.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886))
;
clustermap.components.nav_button.t30892.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t30892.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886){
return (function (_){var self__ = this;
var ___$1 = this;var attrs30895 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs30895))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs30895)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30895))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30895),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886))
;
clustermap.components.nav_button.t30892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886){
return (function (_30894){var self__ = this;
var _30894__$1 = this;return self__.meta30893;
});})(owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886))
;
clustermap.components.nav_button.t30892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886){
return (function (_30894,meta30893__$1){var self__ = this;
var _30894__$1 = this;return (new clustermap.components.nav_button.t30892(self__.map30881,self__.owner,self__.text,self__.output_checker30886,self__.constructor30877,self__.map30880,self__.output_schema30883,self__.input_schema30884,self__.map30879,self__.input_checker30885,self__.target_view,self__.validate__6034__auto__,self__.map30882,self__.id,self__.class$,self__.app,self__.ufv__,self__.G__30887,meta30893__$1));
});})(owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886))
;
clustermap.components.nav_button.__GT_t30892 = ((function (owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886){
return (function __GT_t30892(map30881__$1,owner__$1,text__$1,output_checker30886__$1,constructor30877__$1,map30880__$1,output_schema30883__$1,input_schema30884__$1,map30879__$1,input_checker30885__$1,target_view__$1,validate__6034__auto____$1,map30882__$1,id__$1,class$__$1,app__$1,ufv____$1,G__30887__$1,meta30893){return (new clustermap.components.nav_button.t30892(map30881__$1,owner__$1,text__$1,output_checker30886__$1,constructor30877__$1,map30880__$1,output_schema30883__$1,input_schema30884__$1,map30879__$1,input_checker30885__$1,target_view__$1,validate__6034__auto____$1,map30882__$1,id__$1,class$__$1,app__$1,ufv____$1,G__30887__$1,meta30893));
});})(owner,app,map30880,id,class$,target_view,text,map30882,map30881,validate__6034__auto__,ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886))
;
}
return (new clustermap.components.nav_button.t30892(map30881,owner,text,output_checker30886,constructor30877,map30880,output_schema30883,input_schema30884,map30879,input_checker30885,target_view,validate__6034__auto__,map30882,id,class$,app,ufv__,G__30887,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30903 = output_checker30886.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30903))
{var error__6036__auto___30904 = temp__4126__auto___30903;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30877","constructor30877",-1292639604,null),cljs.core.pr_str.call(null,error__6036__auto___30904)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30904,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30883,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30883,input_schema30884,input_checker30885,output_checker30886))
,schema.core.make_fn_schema.call(null,output_schema30883,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30884], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___30899){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner30876,p__30896){var vec__30898 = p__30896;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30898,(0),null);return component_fnk__7881__auto___30899.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner30876),new cljs.core.Keyword(null,"owner","owner",-392611939),owner30876,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner30876,var_args){
var p__30896 = null;if (arguments.length > 2) {
  p__30896 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner30876,p__30896);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__30905){
var data__7882__auto__ = cljs.core.first(arglist__30905);
arglist__30905 = cljs.core.next(arglist__30905);
var owner30876 = cljs.core.first(arglist__30905);
var p__30896 = cljs.core.rest(arglist__30905);
return nav_button_component__delegate(data__7882__auto__,owner30876,p__30896);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___30899))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m30878){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m30878);
});
__GT_nav_button_component = function(cursor__7850__auto__,m30878){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m30878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
