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
var component_fnk__7881__auto___32659 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32643 = schema.core.Any;var input_schema32644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map32639","map32639",-190659708,null))], null);var input_checker32645 = schema.core.checker.call(null,input_schema32644);var output_checker32646 = schema.core.checker.call(null,output_schema32643);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646){
return (function constructor32637(G__32647){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32647], null);var temp__4126__auto___32661 = input_checker32645.call(null,args__6035__auto___32660);if(cljs.core.truth_(temp__4126__auto___32661))
{var error__6036__auto___32662 = temp__4126__auto___32661;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32637","constructor32637",947942813,null),cljs.core.pr_str.call(null,error__6036__auto___32662)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32662,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32660,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32644,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map32639 = G__32647;while(true){
if(cljs.core.map_QMARK_.call(null,map32639))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32639)));
}
var map32641 = plumbing.fnk.schema.safe_get.call(null,map32639,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map32642 = plumbing.fnk.schema.safe_get.call(null,map32641,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map32642,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map32642,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map32642,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map32642,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map32640 = plumbing.fnk.schema.safe_get.call(null,map32639,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map32640,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map32639,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t32652 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t32652 = (function (owner,map32639,text,output_schema32643,G__32647,input_schema32644,map32641,map32642,target_view,validate__6034__auto__,id,class$,app,constructor32637,ufv__,input_checker32645,map32640,output_checker32646,meta32653){
this.owner = owner;
this.map32639 = map32639;
this.text = text;
this.output_schema32643 = output_schema32643;
this.G__32647 = G__32647;
this.input_schema32644 = input_schema32644;
this.map32641 = map32641;
this.map32642 = map32642;
this.target_view = target_view;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.app = app;
this.constructor32637 = constructor32637;
this.ufv__ = ufv__;
this.input_checker32645 = input_checker32645;
this.map32640 = map32640;
this.output_checker32646 = output_checker32646;
this.meta32653 = meta32653;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t32652.cljs$lang$type = true;
clustermap.components.nav_button.t32652.cljs$lang$ctorStr = "clustermap.components.nav-button/t32652";
clustermap.components.nav_button.t32652.cljs$lang$ctorPrWriter = ((function (owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t32652");
});})(owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646))
;
clustermap.components.nav_button.t32652.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t32652.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646))
;
clustermap.components.nav_button.t32652.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t32652.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646){
return (function (_){var self__ = this;
var ___$1 = this;var attrs32655 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs32655))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs32655)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32655))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32655),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646))
;
clustermap.components.nav_button.t32652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646){
return (function (_32654){var self__ = this;
var _32654__$1 = this;return self__.meta32653;
});})(owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646))
;
clustermap.components.nav_button.t32652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646){
return (function (_32654,meta32653__$1){var self__ = this;
var _32654__$1 = this;return (new clustermap.components.nav_button.t32652(self__.owner,self__.map32639,self__.text,self__.output_schema32643,self__.G__32647,self__.input_schema32644,self__.map32641,self__.map32642,self__.target_view,self__.validate__6034__auto__,self__.id,self__.class$,self__.app,self__.constructor32637,self__.ufv__,self__.input_checker32645,self__.map32640,self__.output_checker32646,meta32653__$1));
});})(owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646))
;
clustermap.components.nav_button.__GT_t32652 = ((function (owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646){
return (function __GT_t32652(owner__$1,map32639__$1,text__$1,output_schema32643__$1,G__32647__$1,input_schema32644__$1,map32641__$1,map32642__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,constructor32637__$1,ufv____$1,input_checker32645__$1,map32640__$1,output_checker32646__$1,meta32653){return (new clustermap.components.nav_button.t32652(owner__$1,map32639__$1,text__$1,output_schema32643__$1,G__32647__$1,input_schema32644__$1,map32641__$1,map32642__$1,target_view__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,constructor32637__$1,ufv____$1,input_checker32645__$1,map32640__$1,output_checker32646__$1,meta32653));
});})(owner,app,map32640,id,class$,target_view,text,map32642,map32641,validate__6034__auto__,ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646))
;
}
return (new clustermap.components.nav_button.t32652(owner,map32639,text,output_schema32643,G__32647,input_schema32644,map32641,map32642,target_view,validate__6034__auto__,id,class$,app,constructor32637,ufv__,input_checker32645,map32640,output_checker32646,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32663 = output_checker32646.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32663))
{var error__6036__auto___32664 = temp__4126__auto___32663;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32637","constructor32637",947942813,null),cljs.core.pr_str.call(null,error__6036__auto___32664)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32664,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32643,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema32643,input_schema32644,input_checker32645,output_checker32646))
,schema.core.make_fn_schema.call(null,output_schema32643,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32644], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___32659){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner32636,p__32656){var vec__32658 = p__32656;var opts__7883__auto__ = cljs.core.nth.call(null,vec__32658,(0),null);return component_fnk__7881__auto___32659.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner32636),new cljs.core.Keyword(null,"owner","owner",-392611939),owner32636,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner32636,var_args){
var p__32656 = null;if (arguments.length > 2) {
  p__32656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner32636,p__32656);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__32665){
var data__7882__auto__ = cljs.core.first(arglist__32665);
arglist__32665 = cljs.core.next(arglist__32665);
var owner32636 = cljs.core.first(arglist__32665);
var p__32656 = cljs.core.rest(arglist__32665);
return nav_button_component__delegate(data__7882__auto__,owner32636,p__32656);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___32659))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m32638){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m32638);
});
__GT_nav_button_component = function(cursor__7850__auto__,m32638){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m32638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
