// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.text');
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
clustermap.components.text.TextComponentSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),schema.core.Any,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),schema.core.either.call(null,schema.core.Keyword,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null))], null)], null);
clustermap.components.text.make_sequential = (function make_sequential(x){if((x == null))
{return null;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
var component_fnk__7881__auto___30022 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30006 = schema.core.Any;var input_schema30007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map30003","map30003",-297189012,null))], null);var input_checker30008 = schema.core.checker.call(null,input_schema30007);var output_checker30009 = schema.core.checker.call(null,output_schema30006);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009){
return (function constructor30001(G__30010){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30010], null);var temp__4126__auto___30024 = input_checker30008.call(null,args__6035__auto___30023);if(cljs.core.truth_(temp__4126__auto___30024))
{var error__6036__auto___30025 = temp__4126__auto___30024;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30001","constructor30001",1421554395,null),cljs.core.pr_str.call(null,error__6036__auto___30025)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30025,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30023,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30007,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30003 = G__30010;while(true){
if(cljs.core.map_QMARK_.call(null,map30003))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30003)));
}
var map30004 = plumbing.fnk.schema.safe_get.call(null,map30003,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map30004,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map30005 = plumbing.fnk.schema.safe_get.call(null,map30004,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map30005,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30003,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t30015 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t30015 = (function (G__30010,owner,map30004,path,map30003,output_checker30009,map30005,input_checker30008,input_schema30007,source,validate__6034__auto__,constructor30001,output_schema30006,ufv__,meta30016){
this.G__30010 = G__30010;
this.owner = owner;
this.map30004 = map30004;
this.path = path;
this.map30003 = map30003;
this.output_checker30009 = output_checker30009;
this.map30005 = map30005;
this.input_checker30008 = input_checker30008;
this.input_schema30007 = input_schema30007;
this.source = source;
this.validate__6034__auto__ = validate__6034__auto__;
this.constructor30001 = constructor30001;
this.output_schema30006 = output_schema30006;
this.ufv__ = ufv__;
this.meta30016 = meta30016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t30015.cljs$lang$type = true;
clustermap.components.text.t30015.cljs$lang$ctorStr = "clustermap.components.text/t30015";
clustermap.components.text.t30015.cljs$lang$ctorPrWriter = ((function (owner,path,map30005,source,map30004,validate__6034__auto__,ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t30015");
});})(owner,path,map30005,source,map30004,validate__6034__auto__,ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009))
;
clustermap.components.text.t30015.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t30015.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map30005,source,map30004,validate__6034__auto__,ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map30005,source,map30004,validate__6034__auto__,ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009))
;
clustermap.components.text.t30015.prototype.om$core$IRender$ = true;
clustermap.components.text.t30015.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map30005,source,map30004,validate__6034__auto__,ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009){
return (function (_){var self__ = this;
var ___$1 = this;var attrs30018 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs30018))?sablono.interpreter.attributes.call(null,attrs30018):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30018))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30018)], null))));
});})(owner,path,map30005,source,map30004,validate__6034__auto__,ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009))
;
clustermap.components.text.t30015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map30005,source,map30004,validate__6034__auto__,ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009){
return (function (_30017){var self__ = this;
var _30017__$1 = this;return self__.meta30016;
});})(owner,path,map30005,source,map30004,validate__6034__auto__,ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009))
;
clustermap.components.text.t30015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map30005,source,map30004,validate__6034__auto__,ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009){
return (function (_30017,meta30016__$1){var self__ = this;
var _30017__$1 = this;return (new clustermap.components.text.t30015(self__.G__30010,self__.owner,self__.map30004,self__.path,self__.map30003,self__.output_checker30009,self__.map30005,self__.input_checker30008,self__.input_schema30007,self__.source,self__.validate__6034__auto__,self__.constructor30001,self__.output_schema30006,self__.ufv__,meta30016__$1));
});})(owner,path,map30005,source,map30004,validate__6034__auto__,ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009))
;
clustermap.components.text.__GT_t30015 = ((function (owner,path,map30005,source,map30004,validate__6034__auto__,ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009){
return (function __GT_t30015(G__30010__$1,owner__$1,map30004__$1,path__$1,map30003__$1,output_checker30009__$1,map30005__$1,input_checker30008__$1,input_schema30007__$1,source__$1,validate__6034__auto____$1,constructor30001__$1,output_schema30006__$1,ufv____$1,meta30016){return (new clustermap.components.text.t30015(G__30010__$1,owner__$1,map30004__$1,path__$1,map30003__$1,output_checker30009__$1,map30005__$1,input_checker30008__$1,input_schema30007__$1,source__$1,validate__6034__auto____$1,constructor30001__$1,output_schema30006__$1,ufv____$1,meta30016));
});})(owner,path,map30005,source,map30004,validate__6034__auto__,ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009))
;
}
return (new clustermap.components.text.t30015(G__30010,owner,map30004,path,map30003,output_checker30009,map30005,input_checker30008,input_schema30007,source,validate__6034__auto__,constructor30001,output_schema30006,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30026 = output_checker30009.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30026))
{var error__6036__auto___30027 = temp__4126__auto___30026;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30001","constructor30001",1421554395,null),cljs.core.pr_str.call(null,error__6036__auto___30027)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30027,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30006,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30006,input_schema30007,input_checker30008,output_checker30009))
,schema.core.make_fn_schema.call(null,output_schema30006,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30007], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___30022){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner30000,p__30019){var vec__30021 = p__30019;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30021,(0),null);return component_fnk__7881__auto___30022.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30000,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner30000,var_args){
var p__30019 = null;if (arguments.length > 2) {
  p__30019 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner30000,p__30019);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__30028){
var data__7882__auto__ = cljs.core.first(arglist__30028);
arglist__30028 = cljs.core.next(arglist__30028);
var owner30000 = cljs.core.first(arglist__30028);
var p__30019 = cljs.core.rest(arglist__30028);
return text_component__delegate(data__7882__auto__,owner30000,p__30019);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___30022))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m30002){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m30002);
});
__GT_text_component = function(cursor__7850__auto__,m30002){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m30002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
