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
var component_fnk__7881__auto___31085 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema31069 = schema.core.Any;var input_schema31070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map31066","map31066",-1411832234,null))], null);var input_checker31071 = schema.core.checker.call(null,input_schema31070);var output_checker31072 = schema.core.checker.call(null,output_schema31069);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072){
return (function constructor31064(G__31073){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___31086 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31073], null);var temp__4126__auto___31087 = input_checker31071.call(null,args__6035__auto___31086);if(cljs.core.truth_(temp__4126__auto___31087))
{var error__6036__auto___31088 = temp__4126__auto___31087;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31064","constructor31064",439843912,null),cljs.core.pr_str.call(null,error__6036__auto___31088)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31088,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___31086,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31070,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map31066 = G__31073;while(true){
if(cljs.core.map_QMARK_.call(null,map31066))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map31066)));
}
var map31067 = plumbing.fnk.schema.safe_get.call(null,map31066,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map31067,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map31068 = plumbing.fnk.schema.safe_get.call(null,map31067,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map31068,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map31066,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t31078 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t31078 = (function (owner,input_checker31071,G__31073,path,constructor31064,output_checker31072,source,map31066,map31068,input_schema31070,validate__6034__auto__,map31067,ufv__,output_schema31069,meta31079){
this.owner = owner;
this.input_checker31071 = input_checker31071;
this.G__31073 = G__31073;
this.path = path;
this.constructor31064 = constructor31064;
this.output_checker31072 = output_checker31072;
this.source = source;
this.map31066 = map31066;
this.map31068 = map31068;
this.input_schema31070 = input_schema31070;
this.validate__6034__auto__ = validate__6034__auto__;
this.map31067 = map31067;
this.ufv__ = ufv__;
this.output_schema31069 = output_schema31069;
this.meta31079 = meta31079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t31078.cljs$lang$type = true;
clustermap.components.text.t31078.cljs$lang$ctorStr = "clustermap.components.text/t31078";
clustermap.components.text.t31078.cljs$lang$ctorPrWriter = ((function (owner,path,map31068,source,map31067,validate__6034__auto__,ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t31078");
});})(owner,path,map31068,source,map31067,validate__6034__auto__,ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072))
;
clustermap.components.text.t31078.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t31078.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map31068,source,map31067,validate__6034__auto__,ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map31068,source,map31067,validate__6034__auto__,ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072))
;
clustermap.components.text.t31078.prototype.om$core$IRender$ = true;
clustermap.components.text.t31078.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map31068,source,map31067,validate__6034__auto__,ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072){
return (function (_){var self__ = this;
var ___$1 = this;var attrs31081 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs31081))?sablono.interpreter.attributes.call(null,attrs31081):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31081))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31081)], null))));
});})(owner,path,map31068,source,map31067,validate__6034__auto__,ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072))
;
clustermap.components.text.t31078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map31068,source,map31067,validate__6034__auto__,ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072){
return (function (_31080){var self__ = this;
var _31080__$1 = this;return self__.meta31079;
});})(owner,path,map31068,source,map31067,validate__6034__auto__,ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072))
;
clustermap.components.text.t31078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map31068,source,map31067,validate__6034__auto__,ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072){
return (function (_31080,meta31079__$1){var self__ = this;
var _31080__$1 = this;return (new clustermap.components.text.t31078(self__.owner,self__.input_checker31071,self__.G__31073,self__.path,self__.constructor31064,self__.output_checker31072,self__.source,self__.map31066,self__.map31068,self__.input_schema31070,self__.validate__6034__auto__,self__.map31067,self__.ufv__,self__.output_schema31069,meta31079__$1));
});})(owner,path,map31068,source,map31067,validate__6034__auto__,ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072))
;
clustermap.components.text.__GT_t31078 = ((function (owner,path,map31068,source,map31067,validate__6034__auto__,ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072){
return (function __GT_t31078(owner__$1,input_checker31071__$1,G__31073__$1,path__$1,constructor31064__$1,output_checker31072__$1,source__$1,map31066__$1,map31068__$1,input_schema31070__$1,validate__6034__auto____$1,map31067__$1,ufv____$1,output_schema31069__$1,meta31079){return (new clustermap.components.text.t31078(owner__$1,input_checker31071__$1,G__31073__$1,path__$1,constructor31064__$1,output_checker31072__$1,source__$1,map31066__$1,map31068__$1,input_schema31070__$1,validate__6034__auto____$1,map31067__$1,ufv____$1,output_schema31069__$1,meta31079));
});})(owner,path,map31068,source,map31067,validate__6034__auto__,ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072))
;
}
return (new clustermap.components.text.t31078(owner,input_checker31071,G__31073,path,constructor31064,output_checker31072,source,map31066,map31068,input_schema31070,validate__6034__auto__,map31067,ufv__,output_schema31069,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___31089 = output_checker31072.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___31089))
{var error__6036__auto___31090 = temp__4126__auto___31089;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor31064","constructor31064",439843912,null),cljs.core.pr_str.call(null,error__6036__auto___31090)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___31090,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31069,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema31069,input_schema31070,input_checker31071,output_checker31072))
,schema.core.make_fn_schema.call(null,output_schema31069,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31070], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___31085){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner31063,p__31082){var vec__31084 = p__31082;var opts__7883__auto__ = cljs.core.nth.call(null,vec__31084,(0),null);return component_fnk__7881__auto___31085.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner31063,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner31063,var_args){
var p__31082 = null;if (arguments.length > 2) {
  p__31082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner31063,p__31082);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__31091){
var data__7882__auto__ = cljs.core.first(arglist__31091);
arglist__31091 = cljs.core.next(arglist__31091);
var owner31063 = cljs.core.first(arglist__31091);
var p__31082 = cljs.core.rest(arglist__31091);
return text_component__delegate(data__7882__auto__,owner31063,p__31082);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___31085))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m31065){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m31065);
});
__GT_text_component = function(cursor__7850__auto__,m31065){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m31065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
