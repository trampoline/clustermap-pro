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
var component_fnk__15794__auto___33005 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32989 = schema.core.Any;var input_schema32990 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.text.TextComponentSchema], true, false),new cljs.core.Symbol(null,"map32986","map32986",1664709491,null))], null);var input_checker32991 = schema.core.checker.call(null,input_schema32990);var output_checker32992 = schema.core.checker.call(null,output_schema32989);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992){
return (function constructor32984(G__32993){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___33006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32993], null);var temp__4126__auto___33007 = input_checker32991.call(null,args__13948__auto___33006);if(cljs.core.truth_(temp__4126__auto___33007))
{var error__13949__auto___33008 = temp__4126__auto___33007;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32984","constructor32984",-1209939403,null),cljs.core.pr_str.call(null,error__13949__auto___33008)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33008,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___33006,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32990,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map32986 = G__32993;while(true){
if(cljs.core.map_QMARK_.call(null,map32986))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32986)));
}
var map32987 = plumbing.fnk.schema.safe_get.call(null,map32986,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var source = plumbing.fnk.schema.safe_get.call(null,map32987,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var map32988 = plumbing.fnk.schema.safe_get.call(null,map32987,new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var path = plumbing.fnk.schema.safe_get.call(null,map32988,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map32986,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.text.t32998 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.text.t32998 = (function (map32988,owner,path,input_checker32991,input_schema32990,output_schema32989,map32986,source,constructor32984,output_checker32992,G__32993,validate__13947__auto__,map32987,ufv__,meta32999){
this.map32988 = map32988;
this.owner = owner;
this.path = path;
this.input_checker32991 = input_checker32991;
this.input_schema32990 = input_schema32990;
this.output_schema32989 = output_schema32989;
this.map32986 = map32986;
this.source = source;
this.constructor32984 = constructor32984;
this.output_checker32992 = output_checker32992;
this.G__32993 = G__32993;
this.validate__13947__auto__ = validate__13947__auto__;
this.map32987 = map32987;
this.ufv__ = ufv__;
this.meta32999 = meta32999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.text.t32998.cljs$lang$type = true;
clustermap.components.text.t32998.cljs$lang$ctorStr = "clustermap.components.text/t32998";
clustermap.components.text.t32998.cljs$lang$ctorPrWriter = ((function (owner,path,map32988,source,map32987,validate__13947__auto__,ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.text/t32998");
});})(owner,path,map32988,source,map32987,validate__13947__auto__,ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992))
;
clustermap.components.text.t32998.prototype.om$core$IDisplayName$ = true;
clustermap.components.text.t32998.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,path,map32988,source,map32987,validate__13947__auto__,ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992){
return (function (_){var self__ = this;
var ___$1 = this;return "text-component";
});})(owner,path,map32988,source,map32987,validate__13947__auto__,ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992))
;
clustermap.components.text.t32998.prototype.om$core$IRender$ = true;
clustermap.components.text.t32998.prototype.om$core$IRender$render$arity$1 = ((function (owner,path,map32988,source,map32987,validate__13947__auto__,ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992){
return (function (_){var self__ = this;
var ___$1 = this;var attrs33001 = cljs.core.get_in.call(null,self__.source,clustermap.components.text.make_sequential.call(null,self__.path));return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs33001))?sablono.interpreter.attributes.call(null,attrs33001):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs33001))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33001)], null))));
});})(owner,path,map32988,source,map32987,validate__13947__auto__,ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992))
;
clustermap.components.text.t32998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,path,map32988,source,map32987,validate__13947__auto__,ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992){
return (function (_33000){var self__ = this;
var _33000__$1 = this;return self__.meta32999;
});})(owner,path,map32988,source,map32987,validate__13947__auto__,ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992))
;
clustermap.components.text.t32998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,path,map32988,source,map32987,validate__13947__auto__,ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992){
return (function (_33000,meta32999__$1){var self__ = this;
var _33000__$1 = this;return (new clustermap.components.text.t32998(self__.map32988,self__.owner,self__.path,self__.input_checker32991,self__.input_schema32990,self__.output_schema32989,self__.map32986,self__.source,self__.constructor32984,self__.output_checker32992,self__.G__32993,self__.validate__13947__auto__,self__.map32987,self__.ufv__,meta32999__$1));
});})(owner,path,map32988,source,map32987,validate__13947__auto__,ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992))
;
clustermap.components.text.__GT_t32998 = ((function (owner,path,map32988,source,map32987,validate__13947__auto__,ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992){
return (function __GT_t32998(map32988__$1,owner__$1,path__$1,input_checker32991__$1,input_schema32990__$1,output_schema32989__$1,map32986__$1,source__$1,constructor32984__$1,output_checker32992__$1,G__32993__$1,validate__13947__auto____$1,map32987__$1,ufv____$1,meta32999){return (new clustermap.components.text.t32998(map32988__$1,owner__$1,path__$1,input_checker32991__$1,input_schema32990__$1,output_schema32989__$1,map32986__$1,source__$1,constructor32984__$1,output_checker32992__$1,G__32993__$1,validate__13947__auto____$1,map32987__$1,ufv____$1,meta32999));
});})(owner,path,map32988,source,map32987,validate__13947__auto__,ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992))
;
}
return (new clustermap.components.text.t32998(map32988,owner,path,input_checker32991,input_schema32990,output_schema32989,map32986,source,constructor32984,output_checker32992,G__32993,validate__13947__auto__,map32987,ufv__,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___33009 = output_checker32992.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___33009))
{var error__13949__auto___33010 = temp__4126__auto___33009;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32984","constructor32984",-1209939403,null),cljs.core.pr_str.call(null,error__13949__auto___33010)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___33010,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32989,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema32989,input_schema32990,input_checker32991,output_checker32992))
,schema.core.make_fn_schema.call(null,output_schema32989,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32990], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.text.text_component = ((function (component_fnk__15794__auto___33005){
return (function() { 
var text_component__delegate = function (data__15795__auto__,owner32983,p__33002){var vec__33004 = p__33002;var opts__15796__auto__ = cljs.core.nth.call(null,vec__33004,(0),null);return component_fnk__15794__auto___33005.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner32983,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var text_component = function (data__15795__auto__,owner32983,var_args){
var p__33002 = null;if (arguments.length > 2) {
  p__33002 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return text_component__delegate.call(this,data__15795__auto__,owner32983,p__33002);};
text_component.cljs$lang$maxFixedArity = 2;
text_component.cljs$lang$applyTo = (function (arglist__33011){
var data__15795__auto__ = cljs.core.first(arglist__33011);
arglist__33011 = cljs.core.next(arglist__33011);
var owner32983 = cljs.core.first(arglist__33011);
var p__33002 = cljs.core.rest(arglist__33011);
return text_component__delegate(data__15795__auto__,owner32983,p__33002);
});
text_component.cljs$core$IFn$_invoke$arity$variadic = text_component__delegate;
return text_component;
})()
;})(component_fnk__15794__auto___33005))
;
clustermap.components.text.__GT_text_component = (function() {
var __GT_text_component = null;
var __GT_text_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.text.text_component,cursor__15763__auto__);
});
var __GT_text_component__2 = (function (cursor__15763__auto__,m32985){return om.core.build.call(null,clustermap.components.text.text_component,cursor__15763__auto__,m32985);
});
__GT_text_component = function(cursor__15763__auto__,m32985){
switch(arguments.length){
case 1:
return __GT_text_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_text_component__2.call(this,cursor__15763__auto__,m32985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_text_component.cljs$core$IFn$_invoke$arity$1 = __GT_text_component__1;
__GT_text_component.cljs$core$IFn$_invoke$arity$2 = __GT_text_component__2;
return __GT_text_component;
})()
;

//# sourceMappingURL=text.js.map