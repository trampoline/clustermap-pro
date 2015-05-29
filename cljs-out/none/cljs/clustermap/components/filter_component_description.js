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
var component_fnk__15756__auto___28127 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28111 = schema.core.Any;var input_schema28112 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_component_description.FilterComponentDescriptionSchema], true, false),new cljs.core.Symbol(null,"map28108","map28108",1719219237,null))], null);var input_checker28113 = schema.core.checker.call(null,input_schema28112);var output_checker28114 = schema.core.checker.call(null,output_schema28111);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114){
return (function constructor28106(G__28115){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___28128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28115], null);var temp__4126__auto___28129 = input_checker28113.call(null,args__13910__auto___28128);if(cljs.core.truth_(temp__4126__auto___28129))
{var error__13911__auto___28130 = temp__4126__auto___28129;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28106","constructor28106",-1507975,null),cljs.core.pr_str.call(null,error__13911__auto___28130)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28130,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___28128,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28112,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map28108 = G__28115;while(true){
if(cljs.core.map_QMARK_.call(null,map28108))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28108)));
}
var map28109 = plumbing.fnk.schema.safe_get.call(null,map28108,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map28110 = plumbing.fnk.schema.safe_get.call(null,map28109,new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_key = plumbing.fnk.schema.safe_get.call(null,map28110,new cljs.core.Keyword(null,"component-key","component-key",1189239034),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var default_text = plumbing.fnk.schema.safe_get.call(null,map28110,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map28109,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28108,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_component_description.t28120 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_component_description.t28120 = (function (component_key,map28109,owner,map28108,input_schema28112,validate__13909__auto__,filter_spec,input_checker28113,output_checker28114,map28110,default_text,constructor28106,output_schema28111,G__28115,ufv__,meta28121){
this.component_key = component_key;
this.map28109 = map28109;
this.owner = owner;
this.map28108 = map28108;
this.input_schema28112 = input_schema28112;
this.validate__13909__auto__ = validate__13909__auto__;
this.filter_spec = filter_spec;
this.input_checker28113 = input_checker28113;
this.output_checker28114 = output_checker28114;
this.map28110 = map28110;
this.default_text = default_text;
this.constructor28106 = constructor28106;
this.output_schema28111 = output_schema28111;
this.G__28115 = G__28115;
this.ufv__ = ufv__;
this.meta28121 = meta28121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_component_description.t28120.cljs$lang$type = true;
clustermap.components.filter_component_description.t28120.cljs$lang$ctorStr = "clustermap.components.filter-component-description/t28120";
clustermap.components.filter_component_description.t28120.cljs$lang$ctorPrWriter = ((function (owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.filter-component-description/t28120");
});})(owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114))
;
clustermap.components.filter_component_description.t28120.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_component_description.t28120.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component-description-component";
});})(owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114))
;
clustermap.components.filter_component_description.t28120.prototype.om$core$IRender$ = true;
clustermap.components.filter_component_description.t28120.prototype.om$core$IRender$render$arity$1 = ((function (owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),self__.component_key], null)))))
{return React.DOM.span(null,React.DOM.a({"href": "#", "onClick": ((function (___$1,owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.update_filter_component.call(null,self__.filter_spec,self__.component_key,null,null,null));
});})(___$1,owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114))
},"\u00D7"),"\u00A0",sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),self__.component_key], null))));
} else
{var attrs28123 = (function (){var or__11514__auto__ = self__.default_text;if(cljs.core.truth_(or__11514__auto__))
{return or__11514__auto__;
} else
{return "";
}
})();return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs28123))?sablono.interpreter.attributes.call(null,attrs28123):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28123))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28123)], null))));
}
});})(owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114))
;
clustermap.components.filter_component_description.t28120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114){
return (function (_28122){var self__ = this;
var _28122__$1 = this;return self__.meta28121;
});})(owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114))
;
clustermap.components.filter_component_description.t28120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114){
return (function (_28122,meta28121__$1){var self__ = this;
var _28122__$1 = this;return (new clustermap.components.filter_component_description.t28120(self__.component_key,self__.map28109,self__.owner,self__.map28108,self__.input_schema28112,self__.validate__13909__auto__,self__.filter_spec,self__.input_checker28113,self__.output_checker28114,self__.map28110,self__.default_text,self__.constructor28106,self__.output_schema28111,self__.G__28115,self__.ufv__,meta28121__$1));
});})(owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114))
;
clustermap.components.filter_component_description.__GT_t28120 = ((function (owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114){
return (function __GT_t28120(component_key__$1,map28109__$1,owner__$1,map28108__$1,input_schema28112__$1,validate__13909__auto____$1,filter_spec__$1,input_checker28113__$1,output_checker28114__$1,map28110__$1,default_text__$1,constructor28106__$1,output_schema28111__$1,G__28115__$1,ufv____$1,meta28121){return (new clustermap.components.filter_component_description.t28120(component_key__$1,map28109__$1,owner__$1,map28108__$1,input_schema28112__$1,validate__13909__auto____$1,filter_spec__$1,input_checker28113__$1,output_checker28114__$1,map28110__$1,default_text__$1,constructor28106__$1,output_schema28111__$1,G__28115__$1,ufv____$1,meta28121));
});})(owner,filter_spec,default_text,component_key,map28110,map28109,validate__13909__auto__,ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114))
;
}
return (new clustermap.components.filter_component_description.t28120(component_key,map28109,owner,map28108,input_schema28112,validate__13909__auto__,filter_spec,input_checker28113,output_checker28114,map28110,default_text,constructor28106,output_schema28111,G__28115,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___28131 = output_checker28114.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___28131))
{var error__13911__auto___28132 = temp__4126__auto___28131;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28106","constructor28106",-1507975,null),cljs.core.pr_str.call(null,error__13911__auto___28132)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___28132,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28111,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema28111,input_schema28112,input_checker28113,output_checker28114))
,schema.core.make_fn_schema.call(null,output_schema28111,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28112], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_component_description.filter_component_description_component = ((function (component_fnk__15756__auto___28127){
return (function() { 
var filter_component_description_component__delegate = function (data__15757__auto__,owner28105,p__28124){var vec__28126 = p__28124;var opts__15758__auto__ = cljs.core.nth.call(null,vec__28126,(0),null);return component_fnk__15756__auto___28127.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15758__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28105,new cljs.core.Keyword(null,"data","data",-232669377),data__15757__auto__], null));
};
var filter_component_description_component = function (data__15757__auto__,owner28105,var_args){
var p__28124 = null;if (arguments.length > 2) {
  p__28124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component_description_component__delegate.call(this,data__15757__auto__,owner28105,p__28124);};
filter_component_description_component.cljs$lang$maxFixedArity = 2;
filter_component_description_component.cljs$lang$applyTo = (function (arglist__28133){
var data__15757__auto__ = cljs.core.first(arglist__28133);
arglist__28133 = cljs.core.next(arglist__28133);
var owner28105 = cljs.core.first(arglist__28133);
var p__28124 = cljs.core.rest(arglist__28133);
return filter_component_description_component__delegate(data__15757__auto__,owner28105,p__28124);
});
filter_component_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_component_description_component__delegate;
return filter_component_description_component;
})()
;})(component_fnk__15756__auto___28127))
;
clustermap.components.filter_component_description.__GT_filter_component_description_component = (function() {
var __GT_filter_component_description_component = null;
var __GT_filter_component_description_component__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__15725__auto__);
});
var __GT_filter_component_description_component__2 = (function (cursor__15725__auto__,m28107){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__15725__auto__,m28107);
});
__GT_filter_component_description_component = function(cursor__15725__auto__,m28107){
switch(arguments.length){
case 1:
return __GT_filter_component_description_component__1.call(this,cursor__15725__auto__);
case 2:
return __GT_filter_component_description_component__2.call(this,cursor__15725__auto__,m28107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component_description_component__1;
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component_description_component__2;
return __GT_filter_component_description_component;
})()
;

//# sourceMappingURL=filter_component_description.js.map