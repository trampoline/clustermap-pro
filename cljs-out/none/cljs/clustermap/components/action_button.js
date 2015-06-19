// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.action_button');
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
clustermap.components.action_button.ActionButtonSchema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",-1790561697),schema.core.Str,new cljs.core.Keyword(null,"action","action",-811238024),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"class","class",-2030961996)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),schema.core.Str], true, false)], null);
var component_fnk__15794__auto___28441 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28425 = schema.core.Any;var input_schema28426 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"app","app",-560961707),schema.core.Any], true, false),new cljs.core.Keyword(null,"data","data",-232669377),clustermap.components.action_button.ActionButtonSchema], true, false),new cljs.core.Symbol(null,"map28421","map28421",-1783419892,null))], null);var input_checker28427 = schema.core.checker.call(null,input_schema28426);var output_checker28428 = schema.core.checker.call(null,output_schema28425);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function constructor28419(G__28429){var validate__13947__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__13947__auto__))
{var args__13948__auto___28442 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28429], null);var temp__4126__auto___28443 = input_checker28427.call(null,args__13948__auto___28442);if(cljs.core.truth_(temp__4126__auto___28443))
{var error__13949__auto___28444 = temp__4126__auto___28443;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28419","constructor28419",542102703,null),cljs.core.pr_str.call(null,error__13949__auto___28444)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___28444,new cljs.core.Keyword(null,"value","value",305978217),args__13948__auto___28442,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28426,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__13950__auto__ = (function (){var map28421 = G__28429;while(true){
if(cljs.core.map_QMARK_.call(null,map28421))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28421)));
}
var map28423 = plumbing.fnk.schema.safe_get.call(null,map28421,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var map28424 = plumbing.fnk.schema.safe_get.call(null,map28423,new cljs.core.Keyword(null,"action-button","action-button",1805783365),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var text = plumbing.fnk.schema.safe_get.call(null,map28424,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var action = plumbing.fnk.schema.safe_get.call(null,map28424,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var class$ = plumbing.fnk.schema.safe_get.call(null,map28424,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"action-button","action-button",1805783365)], null));var id = cljs.core.get.call(null,map28424,new cljs.core.Keyword(null,"id","id",-1388402092),null);var map28422 = plumbing.fnk.schema.safe_get.call(null,map28421,new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.PersistentVector.EMPTY);var app = plumbing.fnk.schema.safe_get.call(null,map28422,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared","shared",-384145993)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28421,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.action_button.t28434 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.action_button.t28434 = (function (output_checker28428,owner,text,map28421,input_schema28426,constructor28419,map28424,output_schema28425,map28422,G__28429,map28423,validate__13947__auto__,input_checker28427,id,class$,app,ufv__,action,meta28435){
this.output_checker28428 = output_checker28428;
this.owner = owner;
this.text = text;
this.map28421 = map28421;
this.input_schema28426 = input_schema28426;
this.constructor28419 = constructor28419;
this.map28424 = map28424;
this.output_schema28425 = output_schema28425;
this.map28422 = map28422;
this.G__28429 = G__28429;
this.map28423 = map28423;
this.validate__13947__auto__ = validate__13947__auto__;
this.input_checker28427 = input_checker28427;
this.id = id;
this.class$ = class$;
this.app = app;
this.ufv__ = ufv__;
this.action = action;
this.meta28435 = meta28435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.action_button.t28434.cljs$lang$type = true;
clustermap.components.action_button.t28434.cljs$lang$ctorStr = "clustermap.components.action-button/t28434";
clustermap.components.action_button.t28434.cljs$lang$ctorPrWriter = ((function (owner,app,map28422,id,class$,action,text,map28424,map28423,validate__13947__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (this__12128__auto__,writer__12129__auto__,opt__12130__auto__){return cljs.core._write.call(null,writer__12129__auto__,"clustermap.components.action-button/t28434");
});})(owner,app,map28422,id,class$,action,text,map28424,map28423,validate__13947__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
clustermap.components.action_button.t28434.prototype.om$core$IDisplayName$ = true;
clustermap.components.action_button.t28434.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,app,map28422,id,class$,action,text,map28424,map28423,validate__13947__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (_){var self__ = this;
var ___$1 = this;return "action-button-component";
});})(owner,app,map28422,id,class$,action,text,map28424,map28423,validate__13947__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
clustermap.components.action_button.t28434.prototype.om$core$IRender$ = true;
clustermap.components.action_button.t28434.prototype.om$core$IRender$render$arity$1 = ((function (owner,app,map28422,id,class$,action,text,map28424,map28423,validate__13947__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (_){var self__ = this;
var ___$1 = this;var attrs28437 = plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,plumbing.core.assoc_when.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),self__.action),new cljs.core.Keyword(null,"class","class",-2030961996),self__.class$),new cljs.core.Keyword(null,"id","id",-1388402092),self__.id);return cljs.core.apply.call(null,React.DOM.button,((cljs.core.map_QMARK_.call(null,attrs28437))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["btn"], null)], null),attrs28437)):{"className": "btn"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs28437))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,self__.text)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28437),sablono.interpreter.interpret.call(null,self__.text)], null))));
});})(owner,app,map28422,id,class$,action,text,map28424,map28423,validate__13947__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
clustermap.components.action_button.t28434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,app,map28422,id,class$,action,text,map28424,map28423,validate__13947__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (_28436){var self__ = this;
var _28436__$1 = this;return self__.meta28435;
});})(owner,app,map28422,id,class$,action,text,map28424,map28423,validate__13947__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
clustermap.components.action_button.t28434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,app,map28422,id,class$,action,text,map28424,map28423,validate__13947__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function (_28436,meta28435__$1){var self__ = this;
var _28436__$1 = this;return (new clustermap.components.action_button.t28434(self__.output_checker28428,self__.owner,self__.text,self__.map28421,self__.input_schema28426,self__.constructor28419,self__.map28424,self__.output_schema28425,self__.map28422,self__.G__28429,self__.map28423,self__.validate__13947__auto__,self__.input_checker28427,self__.id,self__.class$,self__.app,self__.ufv__,self__.action,meta28435__$1));
});})(owner,app,map28422,id,class$,action,text,map28424,map28423,validate__13947__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
clustermap.components.action_button.__GT_t28434 = ((function (owner,app,map28422,id,class$,action,text,map28424,map28423,validate__13947__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428){
return (function __GT_t28434(output_checker28428__$1,owner__$1,text__$1,map28421__$1,input_schema28426__$1,constructor28419__$1,map28424__$1,output_schema28425__$1,map28422__$1,G__28429__$1,map28423__$1,validate__13947__auto____$1,input_checker28427__$1,id__$1,class$__$1,app__$1,ufv____$1,action__$1,meta28435){return (new clustermap.components.action_button.t28434(output_checker28428__$1,owner__$1,text__$1,map28421__$1,input_schema28426__$1,constructor28419__$1,map28424__$1,output_schema28425__$1,map28422__$1,G__28429__$1,map28423__$1,validate__13947__auto____$1,input_checker28427__$1,id__$1,class$__$1,app__$1,ufv____$1,action__$1,meta28435));
});})(owner,app,map28422,id,class$,action,text,map28424,map28423,validate__13947__auto__,ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
;
}
return (new clustermap.components.action_button.t28434(output_checker28428,owner,text,map28421,input_schema28426,constructor28419,map28424,output_schema28425,map28422,G__28429,map28423,validate__13947__auto__,input_checker28427,id,class$,app,ufv__,action,null));
break;
}
})();if(cljs.core.truth_(validate__13947__auto__))
{var temp__4126__auto___28445 = output_checker28428.call(null,o__13950__auto__);if(cljs.core.truth_(temp__4126__auto___28445))
{var error__13949__auto___28446 = temp__4126__auto___28445;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28419","constructor28419",542102703,null),cljs.core.pr_str.call(null,error__13949__auto___28446)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__13949__auto___28446,new cljs.core.Keyword(null,"value","value",305978217),o__13950__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28425,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__13950__auto__;
});})(ufv__,output_schema28425,input_schema28426,input_checker28427,output_checker28428))
,schema.core.make_fn_schema.call(null,output_schema28425,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28426], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.action_button.action_button_component = ((function (component_fnk__15794__auto___28441){
return (function() { 
var action_button_component__delegate = function (data__15795__auto__,owner28418,p__28438){var vec__28440 = p__28438;var opts__15796__auto__ = cljs.core.nth.call(null,vec__28440,(0),null);return component_fnk__15794__auto___28441.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__15796__auto__,new cljs.core.Keyword(null,"shared","shared",-384145993),om.core.get_shared.call(null,owner28418),new cljs.core.Keyword(null,"owner","owner",-392611939),owner28418,new cljs.core.Keyword(null,"data","data",-232669377),data__15795__auto__], null));
};
var action_button_component = function (data__15795__auto__,owner28418,var_args){
var p__28438 = null;if (arguments.length > 2) {
  p__28438 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return action_button_component__delegate.call(this,data__15795__auto__,owner28418,p__28438);};
action_button_component.cljs$lang$maxFixedArity = 2;
action_button_component.cljs$lang$applyTo = (function (arglist__28447){
var data__15795__auto__ = cljs.core.first(arglist__28447);
arglist__28447 = cljs.core.next(arglist__28447);
var owner28418 = cljs.core.first(arglist__28447);
var p__28438 = cljs.core.rest(arglist__28447);
return action_button_component__delegate(data__15795__auto__,owner28418,p__28438);
});
action_button_component.cljs$core$IFn$_invoke$arity$variadic = action_button_component__delegate;
return action_button_component;
})()
;})(component_fnk__15794__auto___28441))
;
clustermap.components.action_button.__GT_action_button_component = (function() {
var __GT_action_button_component = null;
var __GT_action_button_component__1 = (function (cursor__15763__auto__){return om.core.build.call(null,clustermap.components.action_button.action_button_component,cursor__15763__auto__);
});
var __GT_action_button_component__2 = (function (cursor__15763__auto__,m28420){return om.core.build.call(null,clustermap.components.action_button.action_button_component,cursor__15763__auto__,m28420);
});
__GT_action_button_component = function(cursor__15763__auto__,m28420){
switch(arguments.length){
case 1:
return __GT_action_button_component__1.call(this,cursor__15763__auto__);
case 2:
return __GT_action_button_component__2.call(this,cursor__15763__auto__,m28420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_action_button_component.cljs$core$IFn$_invoke$arity$1 = __GT_action_button_component__1;
__GT_action_button_component.cljs$core$IFn$_invoke$arity$2 = __GT_action_button_component__2;
return __GT_action_button_component;
})()
;

//# sourceMappingURL=action_button.js.map