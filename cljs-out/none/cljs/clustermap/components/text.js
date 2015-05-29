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
var component_fnk__15756__auto___30706 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema30690 = schema.core.Any;var input_schema30691 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map30687","map30687",1475724410,null))], null);var input_checker30692 = schema.core.checker.call(null,input_schema30691);var output_checker30693 = schema.core.checker.call(null,output_schema30690);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693){
return (function constructor30685(G__30694){var validate__13909__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13909__auto__))
{var args__13910__auto___30707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30694], null);var temp__4126__auto___30708 = input_checker30692.call(null,args__13910__auto___30707);if(cljs.core.truth_(temp__4126__auto___30708))
{var error__13911__auto___30709 = temp__4126__auto___30708;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30685","constructor30685",1905778956,null),cljs.core.pr_str.call(null,error__13911__auto___30709)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30709,new cljs.core.Keyword(null,"value","value",305978217),args__13910__auto___30707,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30691,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13912__auto__ = (function (){var map30687 = G__30694;while(true){
if(cljs.core.map_QMARK_.call(null,map30687))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map30687)));
}
var map30688 = plumbing.fnk.schema.safe_get.call(null,map30687,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map30688,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map30689 = plumbing.fnk.schema.safe_get.call(null,map30688,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map30689,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map30687,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t30699 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t30699 = (function (owner,input_schema30691,path,validate__13909__auto__,constructor30685,map30688,output_checker30693,source,G__30694,output_schema30690,map30687,map30689,input_checker30692,ufv__,meta30700){
this.owner = owner;
this.input_schema30691 = input_schema30691;
this.path = path;
this.validate__13909__auto__ = validate__13909__auto__;
this.constructor30685 = constructor30685;
this.map30688 = map30688;
this.output_checker30693 = output_checker30693;
this.source = source;
this.G__30694 = G__30694;
this.output_schema30690 = output_schema30690;
this.map30687 = map30687;
this.map30689 = map30689;
this.input_checker30692 = input_checker30692;
this.ufv__ = ufv__;
this.meta30700 = meta30700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t30699.cljs$lang$type = true;
clustermap.components.text.t30699.cljs$lang$ctorStr = "clustermap.components.text/t30699";
clustermap.components.text.t30699.cljs$lang$ctorPrWriter = ((function (owner,path,map30689,source,map30688,validate__13909__auto__,ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693){
return (function (this__12090__auto__,writer__12091__auto__,opt__12092__auto__){return cljs.core._write.call(null,writer__12091__auto__,"clustermap.components.text/t30699");
});})(owner,path,map30689,source,map30688,validate__13909__auto__,ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693))
;
clustermap.components.text.t30699.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t30699.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map30689,source,map30688,validate__13909__auto__,ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map30689,source,map30688,validate__13909__auto__,ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693))
;
clustermap.components.text.t30699.prototype.om$core$IRender$ = true;
clustermap.components.text.t30699.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map30689,source,map30688,validate__13909__auto__,ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693){
return (function (_){var self__ = this;
var ___$1 = this;var attrs30702 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs30702))?sablono.interpreter.attributes.call(null,attrs30702):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs30702))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs30702)], null))));
});})(owner,path,map30689,source,map30688,validate__13909__auto__,ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693))
;
clustermap.components.text.t30699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map30689,source,map30688,validate__13909__auto__,ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693){
return (function (_30701){var self__ = this;
var _30701__$1 = this;return self__.meta30700;
});})(owner,path,map30689,source,map30688,validate__13909__auto__,ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693))
;
clustermap.components.text.t30699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map30689,source,map30688,validate__13909__auto__,ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693){
return (function (_30701,meta30700__$1){var self__ = this;
var _30701__$1 = this;return (new clustermap.components.text.t30699(self__.owner,self__.input_schema30691,self__.path,self__.validate__13909__auto__,self__.constructor30685,self__.map30688,self__.output_checker30693,self__.source,self__.G__30694,self__.output_schema30690,self__.map30687,self__.map30689,self__.input_checker30692,self__.ufv__,meta30700__$1));
});})(owner,path,map30689,source,map30688,validate__13909__auto__,ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693))
;
clustermap.components.text.__GT_t30699 = ((function (owner,path,map30689,source,map30688,validate__13909__auto__,ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693){
return (function __GT_t30699(owner__$1,input_schema30691__$1,path__$1,validate__13909__auto____$1,constructor30685__$1,map30688__$1,output_checker30693__$1,source__$1,G__30694__$1,output_schema30690__$1,map30687__$1,map30689__$1,input_checker30692__$1,ufv____$1,meta30700){return (new clustermap.components.text.t30699(owner__$1,input_schema30691__$1,path__$1,validate__13909__auto____$1,constructor30685__$1,map30688__$1,output_checker30693__$1,source__$1,G__30694__$1,output_schema30690__$1,map30687__$1,map30689__$1,input_checker30692__$1,ufv____$1,meta30700));
});})(owner,path,map30689,source,map30688,validate__13909__auto__,ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693))
;
}
return (new clustermap.components.text.t30699(owner,input_schema30691,path,validate__13909__auto__,constructor30685,map30688,output_checker30693,source,G__30694,output_schema30690,map30687,map30689,input_checker30692,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__13909__auto__))
{var temp__4126__auto___30710 = output_checker30693.call(null,o__13912__auto__);if(cljs.core.truth_(temp__4126__auto___30710))
{var error__13911__auto___30711 = temp__4126__auto___30710;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor30685","constructor30685",1905778956,null),cljs.core.pr_str.call(null,error__13911__auto___30711)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13911__auto___30711,new cljs.core.Keyword(null,"value","value",305978217),o__13912__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30690,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13912__auto__;
});})(ufv__,output_schema30690,input_schema30691,input_checker30692,output_checker30693))
,schema.core.make_fn_schema.call(null,output_schema30690,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30691], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__15756__auto___30706){
return (function() { 
var text_component__delegate = function (data__15757__auto__,owner30684,p__30703){var vec__30705 = p__30703;var opts__15758__auto__ = cljs.core.nth.call(null,vec__30705,(0),null);return component_fnk__15756__auto___30706.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15758__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner30684,new cljs.core.Keyword(null,"data","data",-232669377),data__15757__auto__], null));
};
var text_component = function (data__15757__auto__,owner30684,var_args){
var p__30703 = null;if (arguments.length > 2) {
  p__30703 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__15757__auto__,owner30684,p__30703);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__30712){
var data__15757__auto__ = cljs.core.first(arglist__30712);
arglist__30712 = cljs.core.next(arglist__30712);
var owner30684 = cljs.core.first(arglist__30712);
var p__30703 = cljs.core.rest(arglist__30712);
return text_component__delegate(data__15757__auto__,owner30684,p__30703);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__15756__auto___30706))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__15725__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__15725__auto__);
});
var __GT_text_component__2 = (function (cursor__15725__auto__,m30686){return om.core.build.call(null,clustermap.components.text.text_component,cursor__15725__auto__,m30686);
});
__GT_text_component = function(cursor__15725__auto__,m30686){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__15725__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__15725__auto__,m30686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;

//# sourceMappingURL=text.js.map