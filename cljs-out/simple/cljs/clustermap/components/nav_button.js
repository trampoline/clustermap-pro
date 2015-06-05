// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.nav_button');
goog.require('cljs.core');
goog.require('plumbing.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('schema.core');
goog.require('schema.core');
goog.require('plumbing.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.nav_button.NavButtonSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",-1790561697),schema.core.Str,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.Str], true, false)], null);
var component_fnk__7881__auto___32127 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema32111 = schema.core.Any;var input_schema32112 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.nav_button.NavButtonSchema], true, false),new cljs.core.Symbol(null,"map32107","map32107",485723747,null))], null);var input_checker32113 = schema.core.checker.call(null,input_schema32112);var output_checker32114 = schema.core.checker.call(null,output_schema32111);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114){
return (function constructor32105(G__32115){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___32128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__32115], null);var temp__4126__auto___32129 = input_checker32113.call(null,args__6035__auto___32128);if(cljs.core.truth_(temp__4126__auto___32129))
{var error__6036__auto___32130 = temp__4126__auto___32129;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32105","constructor32105",-1396678260,null),cljs.core.pr_str.call(null,error__6036__auto___32130)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32130,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___32128,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema32112,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map32107 = G__32115;while(true){
if(cljs.core.map_QMARK_.call(null,map32107))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map32107)));
}
var map32109 = plumbing.fnk.schema.safe_get.call(null,map32107,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map32110 = plumbing.fnk.schema.safe_get.call(null,map32109,new cljs.core.Keyword(null,"nav-button","nav-button",1053148818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map32110,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var target_view = plumbing.fnk.schema.safe_get.call(null,map32110,new cljs.core.Keyword(null,"target-view","target-view",-2032886926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map32110,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"nav-button","nav-button",1053148818)], null));var id = cljs.core.get.call(null,map32110,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map32108 = plumbing.fnk.schema.safe_get.call(null,map32107,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map32108,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map32107,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.nav_button.t32120 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.nav_button.t32120 = (function (output_checker32114,map32107,owner,text,input_checker32113,output_schema32111,constructor32105,input_schema32112,map32109,target_view,map32110,validate__6034__auto__,id,class$,app,ufv__,G__32115,map32108,meta32121){
this.output_checker32114 = output_checker32114;
this.map32107 = map32107;
this.owner = owner;
this.text = text;
this.input_checker32113 = input_checker32113;
this.output_schema32111 = output_schema32111;
this.constructor32105 = constructor32105;
this.input_schema32112 = input_schema32112;
this.map32109 = map32109;
this.target_view = target_view;
this.map32110 = map32110;
this.validate__6034__auto__ = validate__6034__auto__;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.G__32115 = G__32115;
this.map32108 = map32108;
this.meta32121 = meta32121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.nav_button.t32120.cljs$lang$type = true;
clustermap.components.nav_button.t32120.cljs$lang$ctorStr = "clustermap.components.nav-button/t32120";
clustermap.components.nav_button.t32120.cljs$lang$ctorPrWriter = ((function (owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.nav-button/t32120");
});})(owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114))
;
clustermap.components.nav_button.t32120.prototype.om$core$IDisplayName$ = true;
clustermap.components.nav_button.t32120.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114){
return (function (_){var self__ = this;
var ___$1 = this;return "nav-button-component";
});})(owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114))
;
clustermap.components.nav_button.t32120.prototype.om$core$IRender$ = true;
clustermap.components.nav_button.t32120.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114){
return (function (_){var self__ = this;
var ___$1 = this;var attrs32123 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (___$1,owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114){
return (function (e){return clustermap.app.navigate.call(null,self__.app,self__.target_view);
});})(___$1,owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114))
], null),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs32123))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs32123)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32123))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32123),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114))
;
clustermap.components.nav_button.t32120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114){
return (function (_32122){var self__ = this;
var _32122__$1 = this;return self__.meta32121;
});})(owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114))
;
clustermap.components.nav_button.t32120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114){
return (function (_32122,meta32121__$1){var self__ = this;
var _32122__$1 = this;return (new clustermap.components.nav_button.t32120(self__.output_checker32114,self__.map32107,self__.owner,self__.text,self__.input_checker32113,self__.output_schema32111,self__.constructor32105,self__.input_schema32112,self__.map32109,self__.target_view,self__.map32110,self__.validate__6034__auto__,self__.id,self__.class$,self__.app,self__.ufv__,self__.G__32115,self__.map32108,meta32121__$1));
});})(owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114))
;
clustermap.components.nav_button.__GT_t32120 = ((function (owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114){
return (function __GT_t32120(output_checker32114__$1,map32107__$1,owner__$1,text__$1,input_checker32113__$1,output_schema32111__$1,constructor32105__$1,input_schema32112__$1,map32109__$1,target_view__$1,map32110__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,G__32115__$1,map32108__$1,meta32121){return (new clustermap.components.nav_button.t32120(output_checker32114__$1,map32107__$1,owner__$1,text__$1,input_checker32113__$1,output_schema32111__$1,constructor32105__$1,input_schema32112__$1,map32109__$1,target_view__$1,map32110__$1,validate__6034__auto____$1,id__$1,class$__$1,app__$1,ufv____$1,G__32115__$1,map32108__$1,meta32121));
});})(owner,app,map32108,id,class$,target_view,text,map32110,map32109,validate__6034__auto__,ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114))
;
}
return (new clustermap.components.nav_button.t32120(output_checker32114,map32107,owner,text,input_checker32113,output_schema32111,constructor32105,input_schema32112,map32109,target_view,map32110,validate__6034__auto__,id,class$,app,ufv__,G__32115,map32108,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___32131 = output_checker32114.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___32131))
{var error__6036__auto___32132 = temp__4126__auto___32131;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor32105","constructor32105",-1396678260,null),cljs.core.pr_str.call(null,error__6036__auto___32132)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___32132,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema32111,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema32111,input_schema32112,input_checker32113,output_checker32114))
,schema.core.make_fn_schema.call(null,output_schema32111,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema32112], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.nav_button.nav_button_component = ((function (component_fnk__7881__auto___32127){
return (function() { 
var nav_button_component__delegate = function (data__7882__auto__,owner32104,p__32124){var vec__32126 = p__32124;var opts__7883__auto__ = cljs.core.nth.call(null,vec__32126,(0),null);return component_fnk__7881__auto___32127.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner32104),new cljs.core.Keyword(null,"owner","owner",-392611939),owner32104,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var nav_button_component = function (data__7882__auto__,owner32104,var_args){
var p__32124 = null;if (arguments.length > 2) {
  p__32124 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return nav_button_component__delegate.call(this,data__7882__auto__,owner32104,p__32124);};
nav_button_component.cljs$lang$maxFixedArity = 2;
nav_button_component.cljs$lang$applyTo = (function (arglist__32133){
var data__7882__auto__ = cljs.core.first(arglist__32133);
arglist__32133 = cljs.core.next(arglist__32133);
var owner32104 = cljs.core.first(arglist__32133);
var p__32124 = cljs.core.rest(arglist__32133);
return nav_button_component__delegate(data__7882__auto__,owner32104,p__32124);
});
nav_button_component.cljs$core$IFn$_invoke$arity$variadic = nav_button_component__delegate;
return nav_button_component;
})()
;})(component_fnk__7881__auto___32127))
;
clustermap.components.nav_button.__GT_nav_button_component = (function() {
var __GT_nav_button_component = null;
var __GT_nav_button_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__);
});
var __GT_nav_button_component__2 = (function (cursor__7850__auto__,m32106){return om.core.build.call(null,clustermap.components.nav_button.nav_button_component,cursor__7850__auto__,m32106);
});
__GT_nav_button_component = function(cursor__7850__auto__,m32106){
switch(arguments.length){
case 1:
return __GT_nav_button_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_nav_button_component__2.call(this,cursor__7850__auto__,m32106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_nav_button_component__1;
__GT_nav_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_nav_button_component__2;
return __GT_nav_button_component;
})()
;
