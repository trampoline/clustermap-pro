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
var component_fnk__7881__auto___30060 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30044 = schema.core.Any;var input_schema30045 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map30041","map30041",1711462831,null))], null);var input_checker30046 = schema.core.checker.call(null,input_schema30045);var output_checker30047 = schema.core.checker.call(null,output_schema30044);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047){
return (function constructor30039(G__30048){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___30061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30048], null);var temp__4126__auto___30062 = input_checker30046.call(null,args__6035__auto___30061);if(cljs.core.truth_(temp__4126__auto___30062))
{var error__6036__auto___30063 = temp__4126__auto___30062;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30039","constructor30039",291100516,null),cljs.core.pr_str.call(null,error__6036__auto___30063)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30063,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___30061,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30045,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map30041 = G__30048;while(true){
if(cljs.core.map_QMARK_.call(null,map30041))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30041)));
}
var map30042 = plumbing.fnk.schema.safe_get.call(null,map30041,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map30042,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map30043 = plumbing.fnk.schema.safe_get.call(null,map30042,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map30043,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30041,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t30053 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t30053 = (function (map30042,input_schema30045,owner,constructor30039,output_schema30044,path,map30041,output_checker30047,source,map30043,input_checker30046,validate__6034__auto__,ufv__,G__30048,meta30054){
this.map30042 = map30042;
this.input_schema30045 = input_schema30045;
this.owner = owner;
this.constructor30039 = constructor30039;
this.output_schema30044 = output_schema30044;
this.path = path;
this.map30041 = map30041;
this.output_checker30047 = output_checker30047;
this.source = source;
this.map30043 = map30043;
this.input_checker30046 = input_checker30046;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.G__30048 = G__30048;
this.meta30054 = meta30054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t30053.cljs$lang$type = true;
clustermap.components.text.t30053.cljs$lang$ctorStr = "clustermap.components.text/t30053";
clustermap.components.text.t30053.cljs$lang$ctorPrWriter = ((function (owner,path,map30043,source,map30042,validate__6034__auto__,ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.text/t30053");
});})(owner,path,map30043,source,map30042,validate__6034__auto__,ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047))
;
clustermap.components.text.t30053.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t30053.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map30043,source,map30042,validate__6034__auto__,ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map30043,source,map30042,validate__6034__auto__,ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047))
;
clustermap.components.text.t30053.prototype.om$core$IRender$ = true;
clustermap.components.text.t30053.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map30043,source,map30042,validate__6034__auto__,ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047){
return (function (_){var self__ = this;
var ___$1 = this;var attrs30056 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs30056))?sablono.interpreter.attributes.call(null,attrs30056):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30056))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30056)], null))));
});})(owner,path,map30043,source,map30042,validate__6034__auto__,ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047))
;
clustermap.components.text.t30053.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map30043,source,map30042,validate__6034__auto__,ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047){
return (function (_30055){var self__ = this;
var _30055__$1 = this;return self__.meta30054;
});})(owner,path,map30043,source,map30042,validate__6034__auto__,ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047))
;
clustermap.components.text.t30053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map30043,source,map30042,validate__6034__auto__,ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047){
return (function (_30055,meta30054__$1){var self__ = this;
var _30055__$1 = this;return (new clustermap.components.text.t30053(self__.map30042,self__.input_schema30045,self__.owner,self__.constructor30039,self__.output_schema30044,self__.path,self__.map30041,self__.output_checker30047,self__.source,self__.map30043,self__.input_checker30046,self__.validate__6034__auto__,self__.ufv__,self__.G__30048,meta30054__$1));
});})(owner,path,map30043,source,map30042,validate__6034__auto__,ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047))
;
clustermap.components.text.__GT_t30053 = ((function (owner,path,map30043,source,map30042,validate__6034__auto__,ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047){
return (function __GT_t30053(map30042__$1,input_schema30045__$1,owner__$1,constructor30039__$1,output_schema30044__$1,path__$1,map30041__$1,output_checker30047__$1,source__$1,map30043__$1,input_checker30046__$1,validate__6034__auto____$1,ufv____$1,G__30048__$1,meta30054){return (new clustermap.components.text.t30053(map30042__$1,input_schema30045__$1,owner__$1,constructor30039__$1,output_schema30044__$1,path__$1,map30041__$1,output_checker30047__$1,source__$1,map30043__$1,input_checker30046__$1,validate__6034__auto____$1,ufv____$1,G__30048__$1,meta30054));
});})(owner,path,map30043,source,map30042,validate__6034__auto__,ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047))
;
}
return (new clustermap.components.text.t30053(map30042,input_schema30045,owner,constructor30039,output_schema30044,path,map30041,output_checker30047,source,map30043,input_checker30046,validate__6034__auto__,ufv__,G__30048,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___30064 = output_checker30047.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___30064))
{var error__6036__auto___30065 = temp__4126__auto___30064;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30039","constructor30039",291100516,null),cljs.core.pr_str.call(null,error__6036__auto___30065)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___30065,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30044,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema30044,input_schema30045,input_checker30046,output_checker30047))
,schema.core.make_fn_schema.call(null,output_schema30044,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30045], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__7881__auto___30060){
return (function() { 
var text_component__delegate = function (data__7882__auto__,owner30038,p__30057){var vec__30059 = p__30057;var opts__7883__auto__ = cljs.core.nth.call(null,vec__30059,(0),null);return component_fnk__7881__auto___30060.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30038,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var text_component = function (data__7882__auto__,owner30038,var_args){
var p__30057 = null;if (arguments.length > 2) {
  p__30057 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__7882__auto__,owner30038,p__30057);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__30066){
var data__7882__auto__ = cljs.core.first(arglist__30066);
arglist__30066 = cljs.core.next(arglist__30066);
var owner30038 = cljs.core.first(arglist__30066);
var p__30057 = cljs.core.rest(arglist__30066);
return text_component__delegate(data__7882__auto__,owner30038,p__30057);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__7881__auto___30060))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__);
});
var __GT_text_component__2 = (function (cursor__7850__auto__,m30040){return om.core.build.call(null,clustermap.components.text.text_component,cursor__7850__auto__,m30040);
});
__GT_text_component = function(cursor__7850__auto__,m30040){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__7850__auto__,m30040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;
