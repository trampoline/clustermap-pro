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
var component_fnk__7881__auto___30282 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30266 = schema.core.Any;var input_schema30267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_component_description.FilterComponentDescriptionSchema], true, false),new cljs.core.Symbol(null,"map30263","map30263",142551022,null))], null);var input_checker30268 = schema.core.checker.call(null,input_schema30267);var output_checker30269 = schema.core.checker.call(null,output_schema30266);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269){
return (function constructor30261(G__30270){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30270], null);var temp__4126__auto___30284 = input_checker30268.call(null,args__6035__auto___30283);if(cljs.core.truth_(temp__4126__auto___30284))
{var error__6036__auto___30285 = temp__4126__auto___30284;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30261","constructor30261",-528353269,null),cljs.core.pr_str.call(null,error__6036__auto___30285)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30285,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30283,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30267,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30263 = G__30270;while(true){
if(cljs.core.map_QMARK_.call(null,map30263))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30263)));
}
var map30264 = plumbing.fnk.schema.safe_get.call(null,map30263,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map30265 = plumbing.fnk.schema.safe_get.call(null,map30264,new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_key = plumbing.fnk.schema.safe_get.call(null,map30265,new cljs.core.Keyword(null,"component-key","component-key",1189239034),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var default_text = plumbing.fnk.schema.safe_get.call(null,map30265,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30264,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30263,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_component_description.t30275 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_component_description.t30275 = (function (component_key,owner,G__30270,constructor30261,map30265,map30263,filter_spec,output_schema30266,output_checker30269,default_text,input_schema30267,input_checker30268,validate__6034__auto__,ufv__,map30264,meta30276){
this.component_key = component_key;
this.owner = owner;
this.G__30270 = G__30270;
this.constructor30261 = constructor30261;
this.map30265 = map30265;
this.map30263 = map30263;
this.filter_spec = filter_spec;
this.output_schema30266 = output_schema30266;
this.output_checker30269 = output_checker30269;
this.default_text = default_text;
this.input_schema30267 = input_schema30267;
this.input_checker30268 = input_checker30268;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.map30264 = map30264;
this.meta30276 = meta30276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_component_description.t30275.cljs$lang$type = true;
clustermap.components.filter_component_description.t30275.cljs$lang$ctorStr = "clustermap.components.filter-component-description/t30275";
clustermap.components.filter_component_description.t30275.cljs$lang$ctorPrWriter = ((function (owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter-component-description/t30275");
});})(owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269))
;
clustermap.components.filter_component_description.t30275.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_component_description.t30275.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component-description-component";
});})(owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269))
;
clustermap.components.filter_component_description.t30275.prototype.om$core$IRender$ = true;
clustermap.components.filter_component_description.t30275.prototype.om$core$IRender$render$arity$1 = ((function (owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),self__.component_key], null)))))
{return React.DOM.span(null,React.DOM.a({"href": "#", "onClick": ((function (___$1,owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.update_filter_component.call(null,self__.filter_spec,self__.component_key,null,null,null));
});})(___$1,owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269))
},"\u00D7"),"\u00A0",sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),self__.component_key], null))));
} else
{var attrs30278 = (function (){var or__3639__auto__ = self__.default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})();return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs30278))?sablono.interpreter.attributes.call(null,attrs30278):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30278))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30278)], null))));
}
});})(owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269))
;
clustermap.components.filter_component_description.t30275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269){
return (function (_30277){var self__ = this;
var _30277__$1 = this;return self__.meta30276;
});})(owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269))
;
clustermap.components.filter_component_description.t30275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269){
return (function (_30277,meta30276__$1){var self__ = this;
var _30277__$1 = this;return (new clustermap.components.filter_component_description.t30275(self__.component_key,self__.owner,self__.G__30270,self__.constructor30261,self__.map30265,self__.map30263,self__.filter_spec,self__.output_schema30266,self__.output_checker30269,self__.default_text,self__.input_schema30267,self__.input_checker30268,self__.validate__6034__auto__,self__.ufv__,self__.map30264,meta30276__$1));
});})(owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269))
;
clustermap.components.filter_component_description.__GT_t30275 = ((function (owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269){
return (function __GT_t30275(component_key__$1,owner__$1,G__30270__$1,constructor30261__$1,map30265__$1,map30263__$1,filter_spec__$1,output_schema30266__$1,output_checker30269__$1,default_text__$1,input_schema30267__$1,input_checker30268__$1,validate__6034__auto____$1,ufv____$1,map30264__$1,meta30276){return (new clustermap.components.filter_component_description.t30275(component_key__$1,owner__$1,G__30270__$1,constructor30261__$1,map30265__$1,map30263__$1,filter_spec__$1,output_schema30266__$1,output_checker30269__$1,default_text__$1,input_schema30267__$1,input_checker30268__$1,validate__6034__auto____$1,ufv____$1,map30264__$1,meta30276));
});})(owner,filter_spec,default_text,component_key,map30265,map30264,validate__6034__auto__,ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269))
;
}
return (new clustermap.components.filter_component_description.t30275(component_key,owner,G__30270,constructor30261,map30265,map30263,filter_spec,output_schema30266,output_checker30269,default_text,input_schema30267,input_checker30268,validate__6034__auto__,ufv__,map30264,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30286 = output_checker30269.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30286))
{var error__6036__auto___30287 = temp__4126__auto___30286;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30261","constructor30261",-528353269,null),cljs.core.pr_str.call(null,error__6036__auto___30287)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30287,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30266,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30266,input_schema30267,input_checker30268,output_checker30269))
,schema.core.make_fn_schema.call(null,output_schema30266,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30267], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_component_description.filter_component_description_component = ((function (component_fnk__7881__auto___30282){
return (function() { 
var filter_component_description_component__delegate = function (data__7882__auto__,owner30260,p__30279){var vec__30281 = p__30279;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30281,(0),null);return component_fnk__7881__auto___30282.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30260,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component_description_component = function (data__7882__auto__,owner30260,var_args){
var p__30279 = null;if (arguments.length > 2) {
  p__30279 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component_description_component__delegate.call(this,data__7882__auto__,owner30260,p__30279);};
filter_component_description_component.cljs$lang$maxFixedArity = 2;
filter_component_description_component.cljs$lang$applyTo = (function (arglist__30288){
var data__7882__auto__ = cljs.core.first(arglist__30288);
arglist__30288 = cljs.core.next(arglist__30288);
var owner30260 = cljs.core.first(arglist__30288);
var p__30279 = cljs.core.rest(arglist__30288);
return filter_component_description_component__delegate(data__7882__auto__,owner30260,p__30279);
});
filter_component_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_component_description_component__delegate;
return filter_component_description_component;
})()
;})(component_fnk__7881__auto___30282))
;
clustermap.components.filter_component_description.__GT_filter_component_description_component = (function() {
var __GT_filter_component_description_component = null;
var __GT_filter_component_description_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__7850__auto__);
});
var __GT_filter_component_description_component__2 = (function (cursor__7850__auto__,m30262){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__7850__auto__,m30262);
});
__GT_filter_component_description_component = function(cursor__7850__auto__,m30262){
switch(arguments.length){
case 1:
return __GT_filter_component_description_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component_description_component__2.call(this,cursor__7850__auto__,m30262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component_description_component__1;
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component_description_component__2;
return __GT_filter_component_description_component;
})()
;
