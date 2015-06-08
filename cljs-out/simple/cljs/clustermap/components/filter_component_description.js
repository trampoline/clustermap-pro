// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.filter_component_description');
goog.require('cljs.core');
goog.require('clustermap.filters');
goog.require('clustermap.filters');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.filter_component_description.FilterComponentDescriptionSchema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-key","component-key",1189239034),schema.core.Keyword,new cljs.core.Keyword(null,"default-text","default-text",-631230836),schema.core.Str], null),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any], true, false)], null);
var component_fnk__7881__auto___31528 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31512 = schema.core.Any;var input_schema31513 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_component_description.FilterComponentDescriptionSchema], true, false),new cljs.core.Symbol(null,"map31509","map31509",1109804251,null))], null);var input_checker31514 = schema.core.checker.call(null,input_schema31513);var output_checker31515 = schema.core.checker.call(null,output_schema31512);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515){
return (function constructor31507(G__31516){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31516], null);var temp__4126__auto___31530 = input_checker31514.call(null,args__6035__auto___31529);if(cljs.core.truth_(temp__4126__auto___31530))
{var error__6036__auto___31531 = temp__4126__auto___31530;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31507","constructor31507",110650695,null),cljs.core.pr_str.call(null,error__6036__auto___31531)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31531,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31529,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31513,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31509 = G__31516;while(true){
if(cljs.core.map_QMARK_.call(null,map31509))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31509)));
}
var map31510 = plumbing.fnk.schema.safe_get.call(null,map31509,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map31511 = plumbing.fnk.schema.safe_get.call(null,map31510,new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_key = plumbing.fnk.schema.safe_get.call(null,map31511,new cljs.core.Keyword(null,"component-key","component-key",1189239034),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var default_text = plumbing.fnk.schema.safe_get.call(null,map31511,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map31510,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31509,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_component_description.t31521 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_component_description.t31521 = (function (map31510,component_key,owner,map31511,constructor31507,output_schema31512,input_checker31514,output_checker31515,filter_spec,default_text,input_schema31513,validate__6034__auto__,G__31516,map31509,ufv__,meta31522){
this.map31510 = map31510;
this.component_key = component_key;
this.owner = owner;
this.map31511 = map31511;
this.constructor31507 = constructor31507;
this.output_schema31512 = output_schema31512;
this.input_checker31514 = input_checker31514;
this.output_checker31515 = output_checker31515;
this.filter_spec = filter_spec;
this.default_text = default_text;
this.input_schema31513 = input_schema31513;
this.validate__6034__auto__ = validate__6034__auto__;
this.G__31516 = G__31516;
this.map31509 = map31509;
this.ufv__ = ufv__;
this.meta31522 = meta31522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_component_description.t31521.cljs$lang$type = true;
clustermap.components.filter_component_description.t31521.cljs$lang$ctorStr = "clustermap.components.filter-component-description/t31521";
clustermap.components.filter_component_description.t31521.cljs$lang$ctorPrWriter = ((function (owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter-component-description/t31521");
});})(owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515))
;
clustermap.components.filter_component_description.t31521.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_component_description.t31521.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component-description-component";
});})(owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515))
;
clustermap.components.filter_component_description.t31521.prototype.om$core$IRender$ = true;
clustermap.components.filter_component_description.t31521.prototype.om$core$IRender$render$arity$1 = ((function (owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),self__.component_key], null)))))
{return React.DOM.span(null,React.DOM.a({"href": "#", "onClick": ((function (___$1,owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.update_filter_component.call(null,self__.filter_spec,self__.component_key,null,null,null));
});})(___$1,owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515))
},"\u00D7"),"\u00A0",sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),self__.component_key], null))));
} else
{var attrs31524 = (function (){var or__3639__auto__ = self__.default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})();return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs31524))?sablono.interpreter.attributes.call(null,attrs31524):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31524))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31524)], null))));
}
});})(owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515))
;
clustermap.components.filter_component_description.t31521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515){
return (function (_31523){var self__ = this;
var _31523__$1 = this;return self__.meta31522;
});})(owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515))
;
clustermap.components.filter_component_description.t31521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515){
return (function (_31523,meta31522__$1){var self__ = this;
var _31523__$1 = this;return (new clustermap.components.filter_component_description.t31521(self__.map31510,self__.component_key,self__.owner,self__.map31511,self__.constructor31507,self__.output_schema31512,self__.input_checker31514,self__.output_checker31515,self__.filter_spec,self__.default_text,self__.input_schema31513,self__.validate__6034__auto__,self__.G__31516,self__.map31509,self__.ufv__,meta31522__$1));
});})(owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515))
;
clustermap.components.filter_component_description.__GT_t31521 = ((function (owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515){
return (function __GT_t31521(map31510__$1,component_key__$1,owner__$1,map31511__$1,constructor31507__$1,output_schema31512__$1,input_checker31514__$1,output_checker31515__$1,filter_spec__$1,default_text__$1,input_schema31513__$1,validate__6034__auto____$1,G__31516__$1,map31509__$1,ufv____$1,meta31522){return (new clustermap.components.filter_component_description.t31521(map31510__$1,component_key__$1,owner__$1,map31511__$1,constructor31507__$1,output_schema31512__$1,input_checker31514__$1,output_checker31515__$1,filter_spec__$1,default_text__$1,input_schema31513__$1,validate__6034__auto____$1,G__31516__$1,map31509__$1,ufv____$1,meta31522));
});})(owner,filter_spec,default_text,component_key,map31511,map31510,validate__6034__auto__,ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515))
;
}
return (new clustermap.components.filter_component_description.t31521(map31510,component_key,owner,map31511,constructor31507,output_schema31512,input_checker31514,output_checker31515,filter_spec,default_text,input_schema31513,validate__6034__auto__,G__31516,map31509,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31532 = output_checker31515.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31532))
{var error__6036__auto___31533 = temp__4126__auto___31532;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31507","constructor31507",110650695,null),cljs.core.pr_str.call(null,error__6036__auto___31533)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31533,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31512,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31512,input_schema31513,input_checker31514,output_checker31515))
,schema.core.make_fn_schema.call(null,output_schema31512,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31513], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_component_description.filter_component_description_component = ((function (component_fnk__7881__auto___31528){
return (function() { 
var filter_component_description_component__delegate = function (data__7882__auto__,owner31506,p__31525){var vec__31527 = p__31525;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31527,(0),null);return component_fnk__7881__auto___31528.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31506,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component_description_component = function (data__7882__auto__,owner31506,var_args){
var p__31525 = null;if (arguments.length > 2) {
  p__31525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component_description_component__delegate.call(this,data__7882__auto__,owner31506,p__31525);};
filter_component_description_component.cljs$lang$maxFixedArity = 2;
filter_component_description_component.cljs$lang$applyTo = (function (arglist__31534){
var data__7882__auto__ = cljs.core.first(arglist__31534);
arglist__31534 = cljs.core.next(arglist__31534);
var owner31506 = cljs.core.first(arglist__31534);
var p__31525 = cljs.core.rest(arglist__31534);
return filter_component_description_component__delegate(data__7882__auto__,owner31506,p__31525);
});
filter_component_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_component_description_component__delegate;
return filter_component_description_component;
})()
;})(component_fnk__7881__auto___31528))
;
clustermap.components.filter_component_description.__GT_filter_component_description_component = (function() {
var __GT_filter_component_description_component = null;
var __GT_filter_component_description_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__7850__auto__);
});
var __GT_filter_component_description_component__2 = (function (cursor__7850__auto__,m31508){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__7850__auto__,m31508);
});
__GT_filter_component_description_component = function(cursor__7850__auto__,m31508){
switch(arguments.length){
case 1:
return __GT_filter_component_description_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component_description_component__2.call(this,cursor__7850__auto__,m31508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component_description_component__1;
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component_description_component__2;
return __GT_filter_component_description_component;
})()
;
