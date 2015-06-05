// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.geo_sponsors');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('clustermap.api');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
goog.require('schema.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.geo_sponsors.render_STAR_ = (function render_STAR_(geo_sponsors_data){var top3 = cljs.core.take.call(null,(3),geo_sponsors_data);return React.DOM.div({"className": "sponsors"},cljs.core.into_array.call(null,(function (){var iter__4377__auto__ = ((function (top3){
return (function iter__28051(s__28052){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28052__$1 = s__28052;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28052__$1);if(temp__4126__auto__)
{var s__28052__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28052__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28052__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28054 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28053 = (0);while(true){
if((i__28053 < size__4376__auto__))
{var map__28057 = cljs.core._nth.call(null,c__4375__auto__,i__28053);var map__28057__$1 = ((cljs.core.seq_QMARK_.call(null,map__28057))?cljs.core.apply.call(null,cljs.core.hash_map,map__28057):map__28057);var teaser = cljs.core.get.call(null,map__28057__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28057__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28057__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28057__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28054,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28059 = (i__28053 + (1));
i__28053 = G__28059;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28054),iter__28051.call(null,cljs.core.chunk_rest.call(null,s__28052__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28054),null);
}
} else
{var map__28058 = cljs.core.first.call(null,s__28052__$2);var map__28058__$1 = ((cljs.core.seq_QMARK_.call(null,map__28058))?cljs.core.apply.call(null,cljs.core.hash_map,map__28058):map__28058);var teaser = cljs.core.get.call(null,map__28058__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28058__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28058__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28058__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28051.call(null,cljs.core.rest.call(null,s__28052__$2)));
}
} else
{return null;
}
break;
}
});})(top3))
,null,null));
});})(top3))
;return iter__4377__auto__.call(null,top3);
})()));
});
clustermap.components.geo_sponsors.request_geo_sponsors_data = (function request_geo_sponsors_data(resource,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.geo_sponsors,bounds);
});
var component_fnk__7881__auto___28089 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28065 = schema.core.Any;var input_schema28066 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28063","map28063",703311090,null))], null);var input_checker28067 = schema.core.checker.call(null,input_schema28066);var output_checker28068 = schema.core.checker.call(null,output_schema28065);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068){
return (function constructor28061(G__28069){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28069], null);var temp__4126__auto___28091 = input_checker28067.call(null,args__6035__auto___28090);if(cljs.core.truth_(temp__4126__auto___28091))
{var error__6036__auto___28092 = temp__4126__auto___28091;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28061","constructor28061",1155543751,null),cljs.core.pr_str.call(null,error__6036__auto___28092)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28092,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28090,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28066,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28063 = G__28069;while(true){
if(cljs.core.map_QMARK_.call(null,map28063))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28063)));
}
var map28064 = plumbing.fnk.schema.safe_get.call(null,map28063,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map28064,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map28064,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28063,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t28078 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t28078 = (function (input_checker28067,output_checker28068,G__28069,owner,constructor28061,input_schema28066,output_schema28065,map28063,bounds,map28064,validate__6034__auto__,ufv__,geo_sponsors,meta28079){
this.input_checker28067 = input_checker28067;
this.output_checker28068 = output_checker28068;
this.G__28069 = G__28069;
this.owner = owner;
this.constructor28061 = constructor28061;
this.input_schema28066 = input_schema28066;
this.output_schema28065 = output_schema28065;
this.map28063 = map28063;
this.bounds = bounds;
this.map28064 = map28064;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.geo_sponsors = geo_sponsors;
this.meta28079 = meta28079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t28078.cljs$lang$type = true;
clustermap.components.geo_sponsors.t28078.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t28078";
clustermap.components.geo_sponsors.t28078.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t28078");
});})(owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068))
;
clustermap.components.geo_sponsors.t28078.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t28078.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068))
;
clustermap.components.geo_sponsors.t28078.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t28078.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068){
return (function (_,p__28081,p__28082){var self__ = this;
var map__28083 = p__28081;var map__28083__$1 = ((cljs.core.seq_QMARK_.call(null,map__28083))?cljs.core.apply.call(null,cljs.core.hash_map,map__28083):map__28083);var next_bounds = cljs.core.get.call(null,map__28083__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__28084 = cljs.core.get.call(null,map__28083__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__28084__$1 = ((cljs.core.seq_QMARK_.call(null,map__28084))?cljs.core.apply.call(null,cljs.core.hash_map,map__28084):map__28084);var next_geo_sponsors = map__28084__$1;var next_data = cljs.core.get.call(null,map__28084__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28085 = p__28082;var map__28085__$1 = ((cljs.core.seq_QMARK_.call(null,map__28085))?cljs.core.apply.call(null,cljs.core.hash_map,map__28085):map__28085);var next_geo_sponsors_data_resource = cljs.core.get.call(null,map__28085__$1,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{return clustermap.components.geo_sponsors.request_geo_sponsors_data.call(null,next_geo_sponsors_data_resource,next_bounds);
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068))
;
clustermap.components.geo_sponsors.t28078.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t28078.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068){
return (function (_){var self__ = this;
var ___$1 = this;var gsr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"geo-sponsors-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063),gsr);
return clustermap.ordered_resource.retrieve_responses.call(null,gsr,((function (gsr,___$1,owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068){
return (function (response){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GEO-SPONSORS : ",response], null)));
return om.core.update_BANG_.call(null,self__.geo_sponsors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),response);
});})(gsr,___$1,owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068))
);
});})(owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068))
;
clustermap.components.geo_sponsors.t28078.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t28078.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068))
;
clustermap.components.geo_sponsors.t28078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068){
return (function (_28080){var self__ = this;
var _28080__$1 = this;return self__.meta28079;
});})(owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068))
;
clustermap.components.geo_sponsors.t28078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068){
return (function (_28080,meta28079__$1){var self__ = this;
var _28080__$1 = this;return (new clustermap.components.geo_sponsors.t28078(self__.input_checker28067,self__.output_checker28068,self__.G__28069,self__.owner,self__.constructor28061,self__.input_schema28066,self__.output_schema28065,self__.map28063,self__.bounds,self__.map28064,self__.validate__6034__auto__,self__.ufv__,self__.geo_sponsors,meta28079__$1));
});})(owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068))
;
clustermap.components.geo_sponsors.__GT_t28078 = ((function (owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068){
return (function __GT_t28078(input_checker28067__$1,output_checker28068__$1,G__28069__$1,owner__$1,constructor28061__$1,input_schema28066__$1,output_schema28065__$1,map28063__$1,bounds__$1,map28064__$1,validate__6034__auto____$1,ufv____$1,geo_sponsors__$1,meta28079){return (new clustermap.components.geo_sponsors.t28078(input_checker28067__$1,output_checker28068__$1,G__28069__$1,owner__$1,constructor28061__$1,input_schema28066__$1,output_schema28065__$1,map28063__$1,bounds__$1,map28064__$1,validate__6034__auto____$1,ufv____$1,geo_sponsors__$1,meta28079));
});})(owner,geo_sponsors,bounds,map28064,validate__6034__auto__,ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068))
;
}
return (new clustermap.components.geo_sponsors.t28078(input_checker28067,output_checker28068,G__28069,owner,constructor28061,input_schema28066,output_schema28065,map28063,bounds,map28064,validate__6034__auto__,ufv__,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28093 = output_checker28068.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28093))
{var error__6036__auto___28094 = temp__4126__auto___28093;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28061","constructor28061",1155543751,null),cljs.core.pr_str.call(null,error__6036__auto___28094)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28094,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28065,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28065,input_schema28066,input_checker28067,output_checker28068))
,schema.core.make_fn_schema.call(null,output_schema28065,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28066], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___28089){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28060,p__28086){var vec__28088 = p__28086;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28088,(0),null);return component_fnk__7881__auto___28089.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28060,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28060,var_args){
var p__28086 = null;if (arguments.length > 2) {
  p__28086 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28060,p__28086);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__28095){
var data__7882__auto__ = cljs.core.first(arglist__28095);
arglist__28095 = cljs.core.next(arglist__28095);
var owner28060 = cljs.core.first(arglist__28095);
var p__28086 = cljs.core.rest(arglist__28095);
return geo_sponsors_component__delegate(data__7882__auto__,owner28060,p__28086);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___28089))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m28062){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m28062);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m28062){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m28062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
