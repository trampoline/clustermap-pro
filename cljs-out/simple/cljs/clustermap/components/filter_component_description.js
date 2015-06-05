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
var component_fnk__7881__auto___30709 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30693 = schema.core.Any;var input_schema30694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.filter_component_description.FilterComponentDescriptionSchema], true, false),new cljs.core.Symbol(null,"map30690","map30690",-1790487954,null))], null);var input_checker30695 = schema.core.checker.call(null,input_schema30694);var output_checker30696 = schema.core.checker.call(null,output_schema30693);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function constructor30688(G__30697){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30697], null);var temp__4126__auto___30711 = input_checker30695.call(null,args__6035__auto___30710);if(cljs.core.truth_(temp__4126__auto___30711))
{var error__6036__auto___30712 = temp__4126__auto___30711;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30688","constructor30688",-736481775,null),cljs.core.pr_str.call(null,error__6036__auto___30712)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30712,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30710,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30694,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30690 = G__30697;while(true){
if(cljs.core.map_QMARK_.call(null,map30690))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30690)));
}
var map30691 = plumbing.fnk.schema.safe_get.call(null,map30690,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map30692 = plumbing.fnk.schema.safe_get.call(null,map30691,new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var component_key = plumbing.fnk.schema.safe_get.call(null,map30692,new cljs.core.Keyword(null,"component-key","component-key",1189239034),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var default_text = plumbing.fnk.schema.safe_get.call(null,map30692,new cljs.core.Keyword(null,"default-text","default-text",-631230836),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"filter-component-description","filter-component-description",1760072364)], null));var filter_spec = plumbing.fnk.schema.safe_get.call(null,map30691,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30690,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.filter_component_description.t30702 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter_component_description.t30702 = (function (component_key,owner,map30692,output_checker30696,map30690,filter_spec,output_schema30693,constructor30688,default_text,map30691,G__30697,validate__6034__auto__,input_checker30695,input_schema30694,ufv__,meta30703){
this.component_key = component_key;
this.owner = owner;
this.map30692 = map30692;
this.output_checker30696 = output_checker30696;
this.map30690 = map30690;
this.filter_spec = filter_spec;
this.output_schema30693 = output_schema30693;
this.constructor30688 = constructor30688;
this.default_text = default_text;
this.map30691 = map30691;
this.G__30697 = G__30697;
this.validate__6034__auto__ = validate__6034__auto__;
this.input_checker30695 = input_checker30695;
this.input_schema30694 = input_schema30694;
this.ufv__ = ufv__;
this.meta30703 = meta30703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter_component_description.t30702.cljs$lang$type = true;
clustermap.components.filter_component_description.t30702.cljs$lang$ctorStr = "clustermap.components.filter-component-description/t30702";
clustermap.components.filter_component_description.t30702.cljs$lang$ctorPrWriter = ((function (owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.filter-component-description/t30702");
});})(owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
clustermap.components.filter_component_description.t30702.prototype.om$core$IDisplayName$ = true;
clustermap.components.filter_component_description.t30702.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (_){var self__ = this;
var ___$1 = this;return "filter-component-description-component";
});})(owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
clustermap.components.filter_component_description.t30702.prototype.om$core$IRender$ = true;
clustermap.components.filter_component_description.t30702.prototype.om$core$IRender$render$arity$1 = ((function (owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),self__.component_key], null)))))
{return React.DOM.span(null,React.DOM.a({"href": "#", "onClick": ((function (___$1,owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (e){e.preventDefault();
console.log("clear selection");
return om.core.update_BANG_.call(null,self__.filter_spec,clustermap.filters.update_filter_component.call(null,self__.filter_spec,self__.component_key,null,null,null));
});})(___$1,owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
},"\u00D7"),"\u00A0",sablono.interpreter.interpret.call(null,cljs.core.get_in.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-descrs","component-descrs",-540929656),self__.component_key], null))));
} else
{var attrs30705 = (function (){var or__3639__auto__ = self__.default_text;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return "";
}
})();return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs30705))?sablono.interpreter.attributes.call(null,attrs30705):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30705))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30705)], null))));
}
});})(owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
clustermap.components.filter_component_description.t30702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (_30704){var self__ = this;
var _30704__$1 = this;return self__.meta30703;
});})(owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
clustermap.components.filter_component_description.t30702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function (_30704,meta30703__$1){var self__ = this;
var _30704__$1 = this;return (new clustermap.components.filter_component_description.t30702(self__.component_key,self__.owner,self__.map30692,self__.output_checker30696,self__.map30690,self__.filter_spec,self__.output_schema30693,self__.constructor30688,self__.default_text,self__.map30691,self__.G__30697,self__.validate__6034__auto__,self__.input_checker30695,self__.input_schema30694,self__.ufv__,meta30703__$1));
});})(owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
clustermap.components.filter_component_description.__GT_t30702 = ((function (owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696){
return (function __GT_t30702(component_key__$1,owner__$1,map30692__$1,output_checker30696__$1,map30690__$1,filter_spec__$1,output_schema30693__$1,constructor30688__$1,default_text__$1,map30691__$1,G__30697__$1,validate__6034__auto____$1,input_checker30695__$1,input_schema30694__$1,ufv____$1,meta30703){return (new clustermap.components.filter_component_description.t30702(component_key__$1,owner__$1,map30692__$1,output_checker30696__$1,map30690__$1,filter_spec__$1,output_schema30693__$1,constructor30688__$1,default_text__$1,map30691__$1,G__30697__$1,validate__6034__auto____$1,input_checker30695__$1,input_schema30694__$1,ufv____$1,meta30703));
});})(owner,filter_spec,default_text,component_key,map30692,map30691,validate__6034__auto__,ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
;
}
return (new clustermap.components.filter_component_description.t30702(component_key,owner,map30692,output_checker30696,map30690,filter_spec,output_schema30693,constructor30688,default_text,map30691,G__30697,validate__6034__auto__,input_checker30695,input_schema30694,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30713 = output_checker30696.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30713))
{var error__6036__auto___30714 = temp__4126__auto___30713;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30688","constructor30688",-736481775,null),cljs.core.pr_str.call(null,error__6036__auto___30714)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30714,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30693,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30693,input_schema30694,input_checker30695,output_checker30696))
,schema.core.make_fn_schema.call(null,output_schema30693,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30694], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.filter_component_description.filter_component_description_component = ((function (component_fnk__7881__auto___30709){
return (function() { 
var filter_component_description_component__delegate = function (data__7882__auto__,owner30687,p__30706){var vec__30708 = p__30706;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30708,(0),null);return component_fnk__7881__auto___30709.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30687,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var filter_component_description_component = function (data__7882__auto__,owner30687,var_args){
var p__30706 = null;if (arguments.length > 2) {
  p__30706 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return filter_component_description_component__delegate.call(this,data__7882__auto__,owner30687,p__30706);};
filter_component_description_component.cljs$lang$maxFixedArity = 2;
filter_component_description_component.cljs$lang$applyTo = (function (arglist__30715){
var data__7882__auto__ = cljs.core.first(arglist__30715);
arglist__30715 = cljs.core.next(arglist__30715);
var owner30687 = cljs.core.first(arglist__30715);
var p__30706 = cljs.core.rest(arglist__30715);
return filter_component_description_component__delegate(data__7882__auto__,owner30687,p__30706);
});
filter_component_description_component.cljs$core$IFn$_invoke$arity$variadic = filter_component_description_component__delegate;
return filter_component_description_component;
})()
;})(component_fnk__7881__auto___30709))
;
clustermap.components.filter_component_description.__GT_filter_component_description_component = (function() {
var __GT_filter_component_description_component = null;
var __GT_filter_component_description_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__7850__auto__);
});
var __GT_filter_component_description_component__2 = (function (cursor__7850__auto__,m30689){return om.core.build.call(null,clustermap.components.filter_component_description.filter_component_description_component,cursor__7850__auto__,m30689);
});
__GT_filter_component_description_component = function(cursor__7850__auto__,m30689){
switch(arguments.length){
case 1:
return __GT_filter_component_description_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_filter_component_description_component__2.call(this,cursor__7850__auto__,m30689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$1 = __GT_filter_component_description_component__1;
__GT_filter_component_description_component.cljs$core$IFn$_invoke$arity$2 = __GT_filter_component_description_component__2;
return __GT_filter_component_description_component;
})()
;
