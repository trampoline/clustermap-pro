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
var component_fnk__7881__auto___30729 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30713 = schema.core.Any;var input_schema30714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_component_description.FilterComponentDescriptionSchema], true, false),new cljs.core.Symbol(null,"map30710","map30710",1823047508,null))], null);var input_checker30715 = schema.core.checker.call(null,input_schema30714);var output_checker30716 = schema.core.checker.call(null,output_schema30713);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716){
return (function constructor30708(G__30717){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30717], null);var temp__4126__auto___30731 = input_checker30715.call(null,args__6035__auto___30730);if(cljs.core.truth_(temp__4126__auto___30731))
{var error__6036__auto___30732 = temp__4126__auto___30731;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30708","constructor30708",332666177,null),cljs.core.pr_str.call(null,error__6036__auto___30732)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30732,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30730,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30714,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30710 = G__30717;while(true){
if(cljs.core.map_QMARK_.call(null,map30710))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30710)));
}
var map30711 = plumbing.fnk.schema.safe_get.call(null,map30710,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map30712 = plumbing.fnk.schema.safe_get.call(null,map30711,new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_key = plumbing.fnk.schema.safe_get.call(null,map30712,new cljs.core.Keyword(null,"component-key","component-key",1189239034),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var default_text = plumbing.fnk.schema.safe_get.call(null,map30712,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30711,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30710,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_component_description.t30722 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_component_description.t30722 = (function (constructor30708,component_key,owner,input_checker30715,map30711,filter_spec,map30712,default_text,map30710,G__30717,output_schema30713,input_schema30714,output_checker30716,validate__6034__auto__,ufv__,meta30723){
this.constructor30708 = constructor30708;
this.component_key = component_key;
this.owner = owner;
this.input_checker30715 = input_checker30715;
this.map30711 = map30711;
this.filter_spec = filter_spec;
this.map30712 = map30712;
this.default_text = default_text;
this.map30710 = map30710;
this.G__30717 = G__30717;
this.output_schema30713 = output_schema30713;
this.input_schema30714 = input_schema30714;
this.output_checker30716 = output_checker30716;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.meta30723 = meta30723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_component_description.t30722.cljs$lang$type = true;
clustermap.components.filter_component_description.t30722.cljs$lang$ctorStr = "clustermap.components.filter-component-description/t30722";
clustermap.components.filter_component_description.t30722.cljs$lang$ctorPrWriter = ((function (owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter-component-description/t30722");
});})(owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716))
;
clustermap.components.filter_component_description.t30722.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_component_description.t30722.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component-description-component";
});})(owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716))
;
clustermap.components.filter_component_description.t30722.prototype.om$core$IRender$ = true;
clustermap.components.filter_component_description.t30722.prototype.om$core$IRender$render$arity$1 = ((function (owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),self__.component_key], null)))))
{return React.DOM.span(null,React.DOM.a({"href": "#", "onClick": ((function (___$1,owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.update_filter_component.call(null,self__.filter_spec,self__.component_key,null,null,null));
});})(___$1,owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716))
},"\u00D7"),"\u00A0",sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),self__.component_key], null))));
} else
{var attrs30725 = (function (){var or__3639__auto__ = self__.default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})();return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs30725))?sablono.interpreter.attributes.call(null,attrs30725):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30725))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30725)], null))));
}
});})(owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716))
;
clustermap.components.filter_component_description.t30722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716){
return (function (_30724){var self__ = this;
var _30724__$1 = this;return self__.meta30723;
});})(owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716))
;
clustermap.components.filter_component_description.t30722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716){
return (function (_30724,meta30723__$1){var self__ = this;
var _30724__$1 = this;return (new clustermap.components.filter_component_description.t30722(self__.constructor30708,self__.component_key,self__.owner,self__.input_checker30715,self__.map30711,self__.filter_spec,self__.map30712,self__.default_text,self__.map30710,self__.G__30717,self__.output_schema30713,self__.input_schema30714,self__.output_checker30716,self__.validate__6034__auto__,self__.ufv__,meta30723__$1));
});})(owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716))
;
clustermap.components.filter_component_description.__GT_t30722 = ((function (owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716){
return (function __GT_t30722(constructor30708__$1,component_key__$1,owner__$1,input_checker30715__$1,map30711__$1,filter_spec__$1,map30712__$1,default_text__$1,map30710__$1,G__30717__$1,output_schema30713__$1,input_schema30714__$1,output_checker30716__$1,validate__6034__auto____$1,ufv____$1,meta30723){return (new clustermap.components.filter_component_description.t30722(constructor30708__$1,component_key__$1,owner__$1,input_checker30715__$1,map30711__$1,filter_spec__$1,map30712__$1,default_text__$1,map30710__$1,G__30717__$1,output_schema30713__$1,input_schema30714__$1,output_checker30716__$1,validate__6034__auto____$1,ufv____$1,meta30723));
});})(owner,filter_spec,default_text,component_key,map30712,map30711,validate__6034__auto__,ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716))
;
}
return (new clustermap.components.filter_component_description.t30722(constructor30708,component_key,owner,input_checker30715,map30711,filter_spec,map30712,default_text,map30710,G__30717,output_schema30713,input_schema30714,output_checker30716,validate__6034__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30733 = output_checker30716.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30733))
{var error__6036__auto___30734 = temp__4126__auto___30733;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30708","constructor30708",332666177,null),cljs.core.pr_str.call(null,error__6036__auto___30734)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30734,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30713,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30713,input_schema30714,input_checker30715,output_checker30716))
,schema.core.make_fn_schema.call(null,output_schema30713,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30714], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_component_description.filter_component_description_component = ((function (component_fnk__7881__auto___30729){
return (function() { 
var filter_component_description_component__delegate = function (data__7882__auto__,owner30707,p__30726){var vec__30728 = p__30726;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30728,(0),null);return component_fnk__7881__auto___30729.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30707,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component_description_component = function (data__7882__auto__,owner30707,var_args){
var p__30726 = null;if (arguments.length > 2) {
  p__30726 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component_description_component__delegate.call(this,data__7882__auto__,owner30707,p__30726);};
filter_component_description_component.cljs$lang$maxFixedArity = 2;
filter_component_description_component.cljs$lang$applyTo = (function (arglist__30735){
var data__7882__auto__ = cljs.core.first(arglist__30735);
arglist__30735 = cljs.core.next(arglist__30735);
var owner30707 = cljs.core.first(arglist__30735);
var p__30726 = cljs.core.rest(arglist__30735);
return filter_component_description_component__delegate(data__7882__auto__,owner30707,p__30726);
});
filter_component_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_component_description_component__delegate;
return filter_component_description_component;
})()
;})(component_fnk__7881__auto___30729))
;
clustermap.components.filter_component_description.__GT_filter_component_description_component = (function() {
var __GT_filter_component_description_component = null;
var __GT_filter_component_description_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__7850__auto__);
});
var __GT_filter_component_description_component__2 = (function (cursor__7850__auto__,m30709){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__7850__auto__,m30709);
});
__GT_filter_component_description_component = function(cursor__7850__auto__,m30709){
switch(arguments.length){
case 1:
return __GT_filter_component_description_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component_description_component__2.call(this,cursor__7850__auto__,m30709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component_description_component__1;
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component_description_component__2;
return __GT_filter_component_description_component;
})()
;
