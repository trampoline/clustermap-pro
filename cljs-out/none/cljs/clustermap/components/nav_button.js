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
var component_fnk__15756__auto___29780 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29764 = schema.core.Any;var input_schema29765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map29760","map29760",960286195,null))], null);var input_checker29766 = schema.core.checker.call(null,input_schema29765);var output_checker29767 = schema.core.checker.call(null,output_schema29764);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767){
return (function constructor29758(G__29768){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___29781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29768], null);var temp__4126__auto___29782 = input_checker29766.call(null,args__13910__auto___29781);if(cljs.core.truth_(temp__4126__auto___29782))
{var error__13911__auto___29783 = temp__4126__auto___29782;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29758","constructor29758",196858520,null),cljs.core.pr_str.call(null,error__13911__auto___29783)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___29783,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___29781,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29765,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map29760 = G__29768;while(true){
if(cljs.core.map_QMARK_.call(null,map29760))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29760)));
}
var map29762 = plumbing.fnk.schema.safe_get.call(null,map29760,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map29763 = plumbing.fnk.schema.safe_get.call(null,map29762,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map29763,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map29763,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map29763,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map29763,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map29761 = plumbing.fnk.schema.safe_get.call(null,map29760,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map29761,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29760,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t29773 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t29773 = (function (owner,output_checker29767,text,validate__13909__auto__,output_schema29764,map29763,input_checker29766,map29760,G__29768,map29761,constructor29758,target_view,id,class$,input_schema29765,app,map29762,ufv__,meta29774){
this.owner = owner;
this.output_checker29767 = output_checker29767;
this.text = text;
this.validate__13909__auto__ = validate__13909__auto__;
this.output_schema29764 = output_schema29764;
this.map29763 = map29763;
this.input_checker29766 = input_checker29766;
this.map29760 = map29760;
this.G__29768 = G__29768;
this.map29761 = map29761;
this.constructor29758 = constructor29758;
this.target_view = target_view;
this.id = id;
this.class$ = class$;
this.input_schema29765 = input_schema29765;
this.app = app;
this.map29762 = map29762;
this.ufv__ = ufv__;
this.meta29774 = meta29774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t29773.cljs$lang$type = true;
clustermap.components.nav_button.t29773.cljs$lang$ctorStr = "clustermap.components.nav-button/t29773";
clustermap.components.nav_button.t29773.cljs$lang$ctorPrWriter = ((function (owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.nav-button/t29773");
});})(owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767))
;
clustermap.components.nav_button.t29773.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t29773.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767))
;
clustermap.components.nav_button.t29773.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t29773.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767){
return (function (_){var self__ = this;
var ___$1 = this;var attrs29776 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs29776))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs29776)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29776))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29776),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767))
;
clustermap.components.nav_button.t29773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767){
return (function (_29775){var self__ = this;
var _29775__$1 = this;return self__.meta29774;
});})(owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767))
;
clustermap.components.nav_button.t29773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767){
return (function (_29775,meta29774__$1){var self__ = this;
var _29775__$1 = this;return (new clustermap.components.nav_button.t29773(self__.owner,self__.output_checker29767,self__.text,self__.validate__13909__auto__,self__.output_schema29764,self__.map29763,self__.input_checker29766,self__.map29760,self__.G__29768,self__.map29761,self__.constructor29758,self__.target_view,self__.id,self__.class$,self__.input_schema29765,self__.app,self__.map29762,self__.ufv__,meta29774__$1));
});})(owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767))
;
clustermap.components.nav_button.__GT_t29773 = ((function (owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767){
return (function __GT_t29773(owner__$1,output_checker29767__$1,text__$1,validate__13909__auto____$1,output_schema29764__$1,map29763__$1,input_checker29766__$1,map29760__$1,G__29768__$1,map29761__$1,constructor29758__$1,target_view__$1,id__$1,class$__$1,input_schema29765__$1,app__$1,map29762__$1,ufv____$1,meta29774){return (new clustermap.components.nav_button.t29773(owner__$1,output_checker29767__$1,text__$1,validate__13909__auto____$1,output_schema29764__$1,map29763__$1,input_checker29766__$1,map29760__$1,G__29768__$1,map29761__$1,constructor29758__$1,target_view__$1,id__$1,class$__$1,input_schema29765__$1,app__$1,map29762__$1,ufv____$1,meta29774));
});})(owner,app,map29761,id,class$,target_view,text,map29763,map29762,validate__13909__auto__,ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767))
;
}
return (new clustermap.components.nav_button.t29773(owner,output_checker29767,text,validate__13909__auto__,output_schema29764,map29763,input_checker29766,map29760,G__29768,map29761,constructor29758,target_view,id,class$,input_schema29765,app,map29762,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___29784 = output_checker29767.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___29784))
{var error__13911__auto___29785 = temp__4126__auto___29784;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29758","constructor29758",196858520,null),cljs.core.pr_str.call(null,error__13911__auto___29785)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___29785,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29764,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema29764,input_schema29765,input_checker29766,output_checker29767))
,schema.core.make_fn_schema.call(null,output_schema29764,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29765], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__15756__auto___29780){
return (function() { 
var nav_button_component__delegate = function (data__15757__auto__,owner29757,p__29777){var vec__29779 = p__29777;var opts__15758__auto__ = cljs.core.nth.call(null,vec__29779,(0),null);return component_fnk__15756__auto___29780.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15758__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner29757),new cljs.core.Keyword(null,"owner","owner",-392611939),owner29757,new cljs.core.Keyword(null,"data","data",-232669377),data__15757__auto__], null));
};
var nav_button_component = function (data__15757__auto__,owner29757,var_args){
var p__29777 = null;if (arguments.length > 2) {
  p__29777 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__15757__auto__,owner29757,p__29777);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__29786){
var data__15757__auto__ = cljs.core.first(arglist__29786);
arglist__29786 = cljs.core.next(arglist__29786);
var owner29757 = cljs.core.first(arglist__29786);
var p__29777 = cljs.core.rest(arglist__29786);
return nav_button_component__delegate(data__15757__auto__,owner29757,p__29777);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__15756__auto___29780))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__15725__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__15725__auto__,m29759){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__15725__auto__,m29759);
});
__GT_nav_button_component = function(cursor__15725__auto__,m29759){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__15725__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__15725__auto__,m29759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;

//# sourceMappingURL=nav_button.js.map