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
var component_fnk__7881__auto___31650 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31634 = schema.core.Any;var input_schema31635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_component_description.FilterComponentDescriptionSchema], true, false),new cljs.core.Symbol(null,"map31631","map31631",-1194972632,null))], null);var input_checker31636 = schema.core.checker.call(null,input_schema31635);var output_checker31637 = schema.core.checker.call(null,output_schema31634);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637){
return (function constructor31629(G__31638){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31638], null);var temp__4126__auto___31652 = input_checker31636.call(null,args__6035__auto___31651);if(cljs.core.truth_(temp__4126__auto___31652))
{var error__6036__auto___31653 = temp__4126__auto___31652;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31629","constructor31629",-2035701330,null),cljs.core.pr_str.call(null,error__6036__auto___31653)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31653,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31651,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31635,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31631 = G__31638;while(true){
if(cljs.core.map_QMARK_.call(null,map31631))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31631)));
}
var map31632 = plumbing.fnk.schema.safe_get.call(null,map31631,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map31633 = plumbing.fnk.schema.safe_get.call(null,map31632,new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_key = plumbing.fnk.schema.safe_get.call(null,map31633,new cljs.core.Keyword(null,"component-key","component-key",1189239034),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var default_text = plumbing.fnk.schema.safe_get.call(null,map31633,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map31632,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31631,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_component_description.t31643 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_component_description.t31643 = (function (component_key,input_schema31635,owner,output_schema31634,map31631,output_checker31637,input_checker31636,constructor31629,filter_spec,G__31638,default_text,map31632,map31633,validate__6034__auto__,ufv__,meta31644){
this.component_key = component_key;
this.input_schema31635 = input_schema31635;
this.owner = owner;
this.output_schema31634 = output_schema31634;
this.map31631 = map31631;
this.output_checker31637 = output_checker31637;
this.input_checker31636 = input_checker31636;
this.constructor31629 = constructor31629;
this.filter_spec = filter_spec;
this.G__31638 = G__31638;
this.default_text = default_text;
this.map31632 = map31632;
this.map31633 = map31633;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.meta31644 = meta31644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_component_description.t31643.cljs$lang$type = true;
clustermap.components.filter_component_description.t31643.cljs$lang$ctorStr = "clustermap.components.filter-component-description/t31643";
clustermap.components.filter_component_description.t31643.cljs$lang$ctorPrWriter = ((function (owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter-component-description/t31643");
});})(owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637))
;
clustermap.components.filter_component_description.t31643.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_component_description.t31643.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component-description-component";
});})(owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637))
;
clustermap.components.filter_component_description.t31643.prototype.om$core$IRender$ = true;
clustermap.components.filter_component_description.t31643.prototype.om$core$IRender$render$arity$1 = ((function (owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),self__.component_key], null)))))
{return React.DOM.span(null,React.DOM.a({"href": "#", "onClick": ((function (___$1,owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.update_filter_component.call(null,self__.filter_spec,self__.component_key,null,null,null));
});})(___$1,owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637))
},"\u00D7"),"\u00A0",sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),self__.component_key], null))));
} else
{var attrs31646 = (function (){var or__3639__auto__ = self__.default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})();return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs31646))?sablono.interpreter.attributes.call(null,attrs31646):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31646))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31646)], null))));
}
});})(owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637))
;
clustermap.components.filter_component_description.t31643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637){
return (function (_31645){var self__ = this;
var _31645__$1 = this;return self__.meta31644;
});})(owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637))
;
clustermap.components.filter_component_description.t31643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637){
return (function (_31645,meta31644__$1){var self__ = this;
var _31645__$1 = this;return (new clustermap.components.filter_component_description.t31643(self__.component_key,self__.input_schema31635,self__.owner,self__.output_schema31634,self__.map31631,self__.output_checker31637,self__.input_checker31636,self__.constructor31629,self__.filter_spec,self__.G__31638,self__.default_text,self__.map31632,self__.map31633,self__.validate__6034__auto__,self__.ufv__,meta31644__$1));
});})(owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637))
;
clustermap.components.filter_component_description.__GT_t31643 = ((function (owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637){
return (function __GT_t31643(component_key__$1,input_schema31635__$1,owner__$1,output_schema31634__$1,map31631__$1,output_checker31637__$1,input_checker31636__$1,constructor31629__$1,filter_spec__$1,G__31638__$1,default_text__$1,map31632__$1,map31633__$1,validate__6034__auto____$1,ufv____$1,meta31644){return (new clustermap.components.filter_component_description.t31643(component_key__$1,input_schema31635__$1,owner__$1,output_schema31634__$1,map31631__$1,output_checker31637__$1,input_checker31636__$1,constructor31629__$1,filter_spec__$1,G__31638__$1,default_text__$1,map31632__$1,map31633__$1,validate__6034__auto____$1,ufv____$1,meta31644));
});})(owner,filter_spec,default_text,component_key,map31633,map31632,validate__6034__auto__,ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637))
;
}
return (new clustermap.components.filter_component_description.t31643(component_key,input_schema31635,owner,output_schema31634,map31631,output_checker31637,input_checker31636,constructor31629,filter_spec,G__31638,default_text,map31632,map31633,validate__6034__auto__,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31654 = output_checker31637.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31654))
{var error__6036__auto___31655 = temp__4126__auto___31654;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31629","constructor31629",-2035701330,null),cljs.core.pr_str.call(null,error__6036__auto___31655)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31655,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31634,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31634,input_schema31635,input_checker31636,output_checker31637))
,schema.core.make_fn_schema.call(null,output_schema31634,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31635], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_component_description.filter_component_description_component = ((function (component_fnk__7881__auto___31650){
return (function() { 
var filter_component_description_component__delegate = function (data__7882__auto__,owner31628,p__31647){var vec__31649 = p__31647;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31649,(0),null);return component_fnk__7881__auto___31650.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31628,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component_description_component = function (data__7882__auto__,owner31628,var_args){
var p__31647 = null;if (arguments.length > 2) {
  p__31647 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component_description_component__delegate.call(this,data__7882__auto__,owner31628,p__31647);};
filter_component_description_component.cljs$lang$maxFixedArity = 2;
filter_component_description_component.cljs$lang$applyTo = (function (arglist__31656){
var data__7882__auto__ = cljs.core.first(arglist__31656);
arglist__31656 = cljs.core.next(arglist__31656);
var owner31628 = cljs.core.first(arglist__31656);
var p__31647 = cljs.core.rest(arglist__31656);
return filter_component_description_component__delegate(data__7882__auto__,owner31628,p__31647);
});
filter_component_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_component_description_component__delegate;
return filter_component_description_component;
})()
;})(component_fnk__7881__auto___31650))
;
clustermap.components.filter_component_description.__GT_filter_component_description_component = (function() {
var __GT_filter_component_description_component = null;
var __GT_filter_component_description_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__7850__auto__);
});
var __GT_filter_component_description_component__2 = (function (cursor__7850__auto__,m31630){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__7850__auto__,m31630);
});
__GT_filter_component_description_component = function(cursor__7850__auto__,m31630){
switch(arguments.length){
case 1:
return __GT_filter_component_description_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component_description_component__2.call(this,cursor__7850__auto__,m31630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component_description_component__1;
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component_description_component__2;
return __GT_filter_component_description_component;
})()
;
