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
var component_fnk__7881__auto___31927 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31911 = schema.core.Any;var input_schema31912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map31907","map31907",1962150009,null))], null);var input_checker31913 = schema.core.checker.call(null,input_schema31912);var output_checker31914 = schema.core.checker.call(null,output_schema31911);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914){
return (function constructor31905(G__31915){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31915], null);var temp__4126__auto___31929 = input_checker31913.call(null,args__6035__auto___31928);if(cljs.core.truth_(temp__4126__auto___31929))
{var error__6036__auto___31930 = temp__4126__auto___31929;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31905","constructor31905",-1538001270,null),cljs.core.pr_str.call(null,error__6036__auto___31930)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31930,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31928,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31912,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31907 = G__31915;while(true){
if(cljs.core.map_QMARK_.call(null,map31907))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31907)));
}
var map31909 = plumbing.fnk.schema.safe_get.call(null,map31907,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map31910 = plumbing.fnk.schema.safe_get.call(null,map31909,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map31910,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map31910,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map31910,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map31910,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map31908 = plumbing.fnk.schema.safe_get.call(null,map31907,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map31908,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31907,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t31920 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t31920 = (function (map31910,owner,input_checker31913,text,G__31915,map31908,constructor31905,map31909,input_schema31912,map31907,target_view,output_schema31911,validate__6034__auto__,id,class$,output_checker31914,app,ufv__,meta31921){
this.map31910 = map31910;
this.owner = owner;
this.input_checker31913 = input_checker31913;
this.text = text;
this.G__31915 = G__31915;
this.map31908 = map31908;
this.constructor31905 = constructor31905;
this.map31909 = map31909;
this.input_schema31912 = input_schema31912;
this.map31907 = map31907;
this.target_view = target_view;
this.output_schema31911 = output_schema31911;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.output_checker31914 = output_checker31914;
this.app = app;
this.ufv__ = ufv__;
this.meta31921 = meta31921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t31920.cljs$lang$type = true;
clustermap.components.nav_button.t31920.cljs$lang$ctorStr = "clustermap.components.nav-button/t31920";
clustermap.components.nav_button.t31920.cljs$lang$ctorPrWriter = ((function (owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t31920");
});})(owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914))
;
clustermap.components.nav_button.t31920.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t31920.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914))
;
clustermap.components.nav_button.t31920.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t31920.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31923 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs31923))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs31923)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31923))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31923),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914))
;
clustermap.components.nav_button.t31920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914){
return (function (_31922){var self__ = this;
var _31922__$1 = this;return self__.meta31921;
});})(owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914))
;
clustermap.components.nav_button.t31920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914){
return (function (_31922,meta31921__$1){var self__ = this;
var _31922__$1 = this;return (new clustermap.components.nav_button.t31920(self__.map31910,self__.owner,self__.input_checker31913,self__.text,self__.G__31915,self__.map31908,self__.constructor31905,self__.map31909,self__.input_schema31912,self__.map31907,self__.target_view,self__.output_schema31911,self__.validate__6034__auto__,self__.id,self__.class$,self__.output_checker31914,self__.app,self__.ufv__,meta31921__$1));
});})(owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914))
;
clustermap.components.nav_button.__GT_t31920 = ((function (owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914){
return (function __GT_t31920(map31910__$1,owner__$1,input_checker31913__$1,text__$1,G__31915__$1,map31908__$1,constructor31905__$1,map31909__$1,input_schema31912__$1,map31907__$1,target_view__$1,output_schema31911__$1,validate__6034__auto____$1,id__$1,class$__$1,output_checker31914__$1,app__$1,ufv____$1,meta31921){return (new clustermap.components.nav_button.t31920(map31910__$1,owner__$1,input_checker31913__$1,text__$1,G__31915__$1,map31908__$1,constructor31905__$1,map31909__$1,input_schema31912__$1,map31907__$1,target_view__$1,output_schema31911__$1,validate__6034__auto____$1,id__$1,class$__$1,output_checker31914__$1,app__$1,ufv____$1,meta31921));
});})(owner,app,map31908,id,class$,target_view,text,map31910,map31909,validate__6034__auto__,ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914))
;
}
return (new clustermap.components.nav_button.t31920(map31910,owner,input_checker31913,text,G__31915,map31908,constructor31905,map31909,input_schema31912,map31907,target_view,output_schema31911,validate__6034__auto__,id,class$,output_checker31914,app,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31931 = output_checker31914.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31931))
{var error__6036__auto___31932 = temp__4126__auto___31931;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31905","constructor31905",-1538001270,null),cljs.core.pr_str.call(null,error__6036__auto___31932)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31932,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31911,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31911,input_schema31912,input_checker31913,output_checker31914))
,schema.core.make_fn_schema.call(null,output_schema31911,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31912], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___31927){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner31904,p__31924){var vec__31926 = p__31924;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31926,(0),null);return component_fnk__7881__auto___31927.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner31904),new cljs.core.Keyword(null,"owner","owner",-392611939),owner31904,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner31904,var_args){
var p__31924 = null;if (arguments.length > 2) {
  p__31924 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner31904,p__31924);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__31933){
var data__7882__auto__ = cljs.core.first(arglist__31933);
arglist__31933 = cljs.core.next(arglist__31933);
var owner31904 = cljs.core.first(arglist__31933);
var p__31924 = cljs.core.rest(arglist__31933);
return nav_button_component__delegate(data__7882__auto__,owner31904,p__31924);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___31927))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m31906){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m31906);
});
__GT_nav_button_component = function(cursor__7850__auto__,m31906){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m31906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
