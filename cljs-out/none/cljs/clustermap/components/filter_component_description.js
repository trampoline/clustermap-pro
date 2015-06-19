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
var component_fnk__15794__auto___29092 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema29076 = schema.core.Any;var input_schema29077 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_component_description.FilterComponentDescriptionSchema], true, false),new cljs.core.Symbol(null,"map29073","map29073",491354953,null))], null);var input_checker29078 = schema.core.checker.call(null,input_schema29077);var output_checker29079 = schema.core.checker.call(null,output_schema29076);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079){
return (function constructor29071(G__29080){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___29093 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29080], null);var temp__4126__auto___29094 = input_checker29078.call(null,args__13948__auto___29093);if(cljs.core.truth_(temp__4126__auto___29094))
{var error__13949__auto___29095 = temp__4126__auto___29094;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29071","constructor29071",-1602880614,null),cljs.core.pr_str.call(null,error__13949__auto___29095)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29095,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___29093,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29077,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map29073 = G__29080;while(true){
if(cljs.core.map_QMARK_.call(null,map29073))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map29073)));
}
var map29074 = plumbing.fnk.schema.safe_get.call(null,map29073,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map29075 = plumbing.fnk.schema.safe_get.call(null,map29074,new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_key = plumbing.fnk.schema.safe_get.call(null,map29075,new cljs.core.Keyword(null,"component-key","component-key",1189239034),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var default_text = plumbing.fnk.schema.safe_get.call(null,map29075,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map29074,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map29073,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_component_description.t29085 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_component_description.t29085 = (function (component_key,G__29080,owner,map29075,output_schema29076,map29073,output_checker29079,filter_spec,input_schema29077,map29074,default_text,input_checker29078,validate__13947__auto__,constructor29071,ufv__,meta29086){
this.component_key = component_key;
this.G__29080 = G__29080;
this.owner = owner;
this.map29075 = map29075;
this.output_schema29076 = output_schema29076;
this.map29073 = map29073;
this.output_checker29079 = output_checker29079;
this.filter_spec = filter_spec;
this.input_schema29077 = input_schema29077;
this.map29074 = map29074;
this.default_text = default_text;
this.input_checker29078 = input_checker29078;
this.validate__13947__auto__ = validate__13947__auto__;
this.constructor29071 = constructor29071;
this.ufv__ = ufv__;
this.meta29086 = meta29086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_component_description.t29085.cljs$lang$type = true;
clustermap.components.filter_component_description.t29085.cljs$lang$ctorStr = "clustermap.components.filter-component-description/t29085";
clustermap.components.filter_component_description.t29085.cljs$lang$ctorPrWriter = ((function (owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.filter-component-description/t29085");
});})(owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079))
;
clustermap.components.filter_component_description.t29085.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_component_description.t29085.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component-description-component";
});})(owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079))
;
clustermap.components.filter_component_description.t29085.prototype.om$core$IRender$ = true;
clustermap.components.filter_component_description.t29085.prototype.om$core$IRender$render$arity$1 = ((function (owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),self__.component_key], null)))))
{return React.DOM.span(null,React.DOM.a({"href": "#", "onClick": ((function (___$1,owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.update_filter_component.call(null,self__.filter_spec,self__.component_key,null,null,null));
});})(___$1,owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079))
},"\u00D7"),"\u00A0",sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),self__.component_key], null))));
} else
{var attrs29088 = (function (){var or__11552__auto__ = self__.default_text;if(cljs.core.truth_(or__11552__auto__))
{return or__11552__auto__;
} else
{return "";
}
})();return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs29088))?sablono.interpreter.attributes.call(null,attrs29088):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs29088))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29088)], null))));
}
});})(owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079))
;
clustermap.components.filter_component_description.t29085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079){
return (function (_29087){var self__ = this;
var _29087__$1 = this;return self__.meta29086;
});})(owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079))
;
clustermap.components.filter_component_description.t29085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079){
return (function (_29087,meta29086__$1){var self__ = this;
var _29087__$1 = this;return (new clustermap.components.filter_component_description.t29085(self__.component_key,self__.G__29080,self__.owner,self__.map29075,self__.output_schema29076,self__.map29073,self__.output_checker29079,self__.filter_spec,self__.input_schema29077,self__.map29074,self__.default_text,self__.input_checker29078,self__.validate__13947__auto__,self__.constructor29071,self__.ufv__,meta29086__$1));
});})(owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079))
;
clustermap.components.filter_component_description.__GT_t29085 = ((function (owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079){
return (function __GT_t29085(component_key__$1,G__29080__$1,owner__$1,map29075__$1,output_schema29076__$1,map29073__$1,output_checker29079__$1,filter_spec__$1,input_schema29077__$1,map29074__$1,default_text__$1,input_checker29078__$1,validate__13947__auto____$1,constructor29071__$1,ufv____$1,meta29086){return (new clustermap.components.filter_component_description.t29085(component_key__$1,G__29080__$1,owner__$1,map29075__$1,output_schema29076__$1,map29073__$1,output_checker29079__$1,filter_spec__$1,input_schema29077__$1,map29074__$1,default_text__$1,input_checker29078__$1,validate__13947__auto____$1,constructor29071__$1,ufv____$1,meta29086));
});})(owner,filter_spec,default_text,component_key,map29075,map29074,validate__13947__auto__,ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079))
;
}
return (new clustermap.components.filter_component_description.t29085(component_key,G__29080,owner,map29075,output_schema29076,map29073,output_checker29079,filter_spec,input_schema29077,map29074,default_text,input_checker29078,validate__13947__auto__,constructor29071,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___29096 = output_checker29079.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___29096))
{var error__13949__auto___29097 = temp__4126__auto___29096;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor29071","constructor29071",-1602880614,null),cljs.core.pr_str.call(null,error__13949__auto___29097)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___29097,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29076,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema29076,input_schema29077,input_checker29078,output_checker29079))
,schema.core.make_fn_schema.call(null,output_schema29076,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29077], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_component_description.filter_component_description_component = ((function (component_fnk__15794__auto___29092){
return (function() { 
var filter_component_description_component__delegate = function (data__15795__auto__,owner29070,p__29089){var vec__29091 = p__29089;var opts__15796__auto__ = cljs.core.nth.call(null,vec__29091,(0),null);return component_fnk__15794__auto___29092.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner29070,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var filter_component_description_component = function (data__15795__auto__,owner29070,var_args){
var p__29089 = null;if (arguments.length > 2) {
  p__29089 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component_description_component__delegate.call(this,data__15795__auto__,owner29070,p__29089);};
filter_component_description_component.cljs$lang$maxFixedArity = 2;
filter_component_description_component.cljs$lang$applyTo = (function (arglist__29098){
var data__15795__auto__ = cljs.core.first(arglist__29098);
arglist__29098 = cljs.core.next(arglist__29098);
var owner29070 = cljs.core.first(arglist__29098);
var p__29089 = cljs.core.rest(arglist__29098);
return filter_component_description_component__delegate(data__15795__auto__,owner29070,p__29089);
});
filter_component_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_component_description_component__delegate;
return filter_component_description_component;
})()
;})(component_fnk__15794__auto___29092))
;
clustermap.components.filter_component_description.__GT_filter_component_description_component = (function() {
var __GT_filter_component_description_component = null;
var __GT_filter_component_description_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__15763__auto__);
});
var __GT_filter_component_description_component__2 = (function (cursor__15763__auto__,m29072){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__15763__auto__,m29072);
});
__GT_filter_component_description_component = function(cursor__15763__auto__,m29072){
switch(arguments.length){
case 1:
return __GT_filter_component_description_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_filter_component_description_component__2.call(this,cursor__15763__auto__,m29072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component_description_component__1;
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component_description_component__2;
return __GT_filter_component_description_component;
})()
;

//# sourceMappingURL=filter_component_description.js.map