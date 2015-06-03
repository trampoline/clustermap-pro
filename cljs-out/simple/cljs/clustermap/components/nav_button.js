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
var component_fnk__7881__auto___30969 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30953 = schema.core.Any;var input_schema30954 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map30949","map30949",-31306432,null))], null);var input_checker30955 = schema.core.checker.call(null,input_schema30954);var output_checker30956 = schema.core.checker.call(null,output_schema30953);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956){
return (function constructor30947(G__30957){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30957], null);var temp__4126__auto___30971 = input_checker30955.call(null,args__6035__auto___30970);if(cljs.core.truth_(temp__4126__auto___30971))
{var error__6036__auto___30972 = temp__4126__auto___30971;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30947","constructor30947",444916131,null),cljs.core.pr_str.call(null,error__6036__auto___30972)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30972,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30970,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30954,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30949 = G__30957;while(true){
if(cljs.core.map_QMARK_.call(null,map30949))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30949)));
}
var map30951 = plumbing.fnk.schema.safe_get.call(null,map30949,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map30952 = plumbing.fnk.schema.safe_get.call(null,map30951,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map30952,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map30952,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map30952,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map30952,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map30950 = plumbing.fnk.schema.safe_get.call(null,map30949,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map30950,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30949,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t30962 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t30962 = (function (map30949,constructor30947,owner,text,input_checker30955,G__30957,output_schema30953,map30951,input_schema30954,output_checker30956,target_view,validate__6034__auto__,id,class$,map30952,map30950,app,ufv__,meta30963){
this.map30949 = map30949;
this.constructor30947 = constructor30947;
this.owner = owner;
this.text = text;
this.input_checker30955 = input_checker30955;
this.G__30957 = G__30957;
this.output_schema30953 = output_schema30953;
this.map30951 = map30951;
this.input_schema30954 = input_schema30954;
this.output_checker30956 = output_checker30956;
this.target_view = target_view;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.map30952 = map30952;
this.map30950 = map30950;
this.app = app;
this.ufv__ = ufv__;
this.meta30963 = meta30963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t30962.cljs$lang$type = true;
clustermap.components.nav_button.t30962.cljs$lang$ctorStr = "clustermap.components.nav-button/t30962";
clustermap.components.nav_button.t30962.cljs$lang$ctorPrWriter = ((function (owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t30962");
});})(owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956))
;
clustermap.components.nav_button.t30962.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t30962.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956))
;
clustermap.components.nav_button.t30962.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t30962.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956){
return (function (_){var self__ = this;
var ___$1 = this;var attrs30965 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs30965))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs30965)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30965))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30965),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956))
;
clustermap.components.nav_button.t30962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956){
return (function (_30964){var self__ = this;
var _30964__$1 = this;return self__.meta30963;
});})(owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956))
;
clustermap.components.nav_button.t30962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956){
return (function (_30964,meta30963__$1){var self__ = this;
var _30964__$1 = this;return (new clustermap.components.nav_button.t30962(self__.map30949,self__.constructor30947,self__.owner,self__.text,self__.input_checker30955,self__.G__30957,self__.output_schema30953,self__.map30951,self__.input_schema30954,self__.output_checker30956,self__.target_view,self__.validate__6034__auto__,self__.id,self__.class$,self__.map30952,self__.map30950,self__.app,self__.ufv__,meta30963__$1));
});})(owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956))
;
clustermap.components.nav_button.__GT_t30962 = ((function (owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956){
return (function __GT_t30962(map30949__$1,constructor30947__$1,owner__$1,text__$1,input_checker30955__$1,G__30957__$1,output_schema30953__$1,map30951__$1,input_schema30954__$1,output_checker30956__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,map30952__$1,map30950__$1,app__$1,ufv____$1,meta30963){return (new clustermap.components.nav_button.t30962(map30949__$1,constructor30947__$1,owner__$1,text__$1,input_checker30955__$1,G__30957__$1,output_schema30953__$1,map30951__$1,input_schema30954__$1,output_checker30956__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,map30952__$1,map30950__$1,app__$1,ufv____$1,meta30963));
});})(owner,app,map30950,id,class$,target_view,text,map30952,map30951,validate__6034__auto__,ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956))
;
}
return (new clustermap.components.nav_button.t30962(map30949,constructor30947,owner,text,input_checker30955,G__30957,output_schema30953,map30951,input_schema30954,output_checker30956,target_view,validate__6034__auto__,id,class$,map30952,map30950,app,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30973 = output_checker30956.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30973))
{var error__6036__auto___30974 = temp__4126__auto___30973;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30947","constructor30947",444916131,null),cljs.core.pr_str.call(null,error__6036__auto___30974)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30974,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30953,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30953,input_schema30954,input_checker30955,output_checker30956))
,schema.core.make_fn_schema.call(null,output_schema30953,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30954], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___30969){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner30946,p__30966){var vec__30968 = p__30966;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30968,(0),null);return component_fnk__7881__auto___30969.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner30946),new cljs.core.Keyword(null,"owner","owner",-392611939),owner30946,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner30946,var_args){
var p__30966 = null;if (arguments.length > 2) {
  p__30966 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner30946,p__30966);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__30975){
var data__7882__auto__ = cljs.core.first(arglist__30975);
arglist__30975 = cljs.core.next(arglist__30975);
var owner30946 = cljs.core.first(arglist__30975);
var p__30966 = cljs.core.rest(arglist__30975);
return nav_button_component__delegate(data__7882__auto__,owner30946,p__30966);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___30969))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m30948){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m30948);
});
__GT_nav_button_component = function(cursor__7850__auto__,m30948){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m30948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
