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
return (function iter__28131(s__28132){return (new cljs.core.LazySeq(null,((function (top3){
return (function (){var s__28132__$1 = s__28132;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28132__$1);if(temp__4126__auto__)
{var s__28132__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28132__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__28132__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__28134 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__28133 = (0);while(true){
if((i__28133 < size__4376__auto__))
{var map__28137 = cljs.core._nth.call(null,c__4375__auto__,i__28133);var map__28137__$1 = ((cljs.core.seq_QMARK_.call(null,map__28137))?cljs.core.apply.call(null,cljs.core.hash_map,map__28137):map__28137);var teaser = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28137__$1,new cljs.core.Keyword(null,"name","name",1843675177));cljs.core.chunk_append.call(null,b__28134,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))));
{
var G__28139 = (i__28133 + (1));
i__28133 = G__28139;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28134),iter__28131.call(null,cljs.core.chunk_rest.call(null,s__28132__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28134),null);
}
} else
{var map__28138 = cljs.core.first.call(null,s__28132__$2);var map__28138__$1 = ((cljs.core.seq_QMARK_.call(null,map__28138))?cljs.core.apply.call(null,cljs.core.hash_map,map__28138):map__28138);var teaser = cljs.core.get.call(null,map__28138__$1,new cljs.core.Keyword(null,"teaser","teaser",231408412));var image_url = cljs.core.get.call(null,map__28138__$1,new cljs.core.Keyword(null,"image_url","image_url",-1356964050));var link_url = cljs.core.get.call(null,map__28138__$1,new cljs.core.Keyword(null,"link_url","link_url",1182450082));var name = cljs.core.get.call(null,map__28138__$1,new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.cons.call(null,React.DOM.div({"className": "sponsor"},React.DOM.a({"href": link_url},React.DOM.img({"src": image_url}))),iter__28131.call(null,cljs.core.rest.call(null,s__28132__$2)));
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
var component_fnk__7881__auto___28169 = (function (){var ufv__ = schema.utils.use_fn_validation;var output_schema28145 = schema.core.Any;var input_schema28146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),schema.core.Any,new cljs.core.Keyword(null,"bounds","bounds",1691609455),schema.core.Any], true, false)], true, false),new cljs.core.Symbol(null,"map28143","map28143",-980745245,null))], null);var input_checker28147 = schema.core.checker.call(null,input_schema28146);var output_checker28148 = schema.core.checker.call(null,output_schema28145);return schema.core.schematize_fn.call(null,((function (ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148){
return (function constructor28141(G__28149){var validate__6034__auto__ = ufv__.get_cell();if(cljs.core.truth_(validate__6034__auto__))
{var args__6035__auto___28170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28149], null);var temp__4126__auto___28171 = input_checker28147.call(null,args__6035__auto___28170);if(cljs.core.truth_(temp__4126__auto___28171))
{var error__6036__auto___28172 = temp__4126__auto___28171;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28141","constructor28141",216989760,null),cljs.core.pr_str.call(null,error__6036__auto___28172)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28172,new cljs.core.Keyword(null,"value","value",305978217),args__6035__auto___28170,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28146,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
var o__6037__auto__ = (function (){var map28143 = G__28149;while(true){
if(cljs.core.map_QMARK_.call(null,map28143))
{} else
{throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map28143)));
}
var map28144 = plumbing.fnk.schema.safe_get.call(null,map28143,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);var bounds = plumbing.fnk.schema.safe_get.call(null,map28144,new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var geo_sponsors = plumbing.fnk.schema.safe_get.call(null,map28144,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));var owner = plumbing.fnk.schema.safe_get.call(null,map28143,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);if(typeof clustermap.components.geo_sponsors.t28158 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.geo_sponsors.t28158 = (function (constructor28141,map28143,owner,input_schema28146,output_checker28148,input_checker28147,map28144,bounds,G__28149,validate__6034__auto__,ufv__,output_schema28145,geo_sponsors,meta28159){
this.constructor28141 = constructor28141;
this.map28143 = map28143;
this.owner = owner;
this.input_schema28146 = input_schema28146;
this.output_checker28148 = output_checker28148;
this.input_checker28147 = input_checker28147;
this.map28144 = map28144;
this.bounds = bounds;
this.G__28149 = G__28149;
this.validate__6034__auto__ = validate__6034__auto__;
this.ufv__ = ufv__;
this.output_schema28145 = output_schema28145;
this.geo_sponsors = geo_sponsors;
this.meta28159 = meta28159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.geo_sponsors.t28158.cljs$lang$type = true;
clustermap.components.geo_sponsors.t28158.cljs$lang$ctorStr = "clustermap.components.geo-sponsors/t28158";
clustermap.components.geo_sponsors.t28158.cljs$lang$ctorPrWriter = ((function (owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.geo-sponsors/t28158");
});})(owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148))
;
clustermap.components.geo_sponsors.t28158.prototype.om$core$IDisplayName$ = true;
clustermap.components.geo_sponsors.t28158.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148){
return (function (_){var self__ = this;
var ___$1 = this;return "geo-sponsors-component";
});})(owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148))
;
clustermap.components.geo_sponsors.t28158.prototype.om$core$IWillUpdate$ = true;
clustermap.components.geo_sponsors.t28158.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148){
return (function (_,p__28161,p__28162){var self__ = this;
var map__28163 = p__28161;var map__28163__$1 = ((cljs.core.seq_QMARK_.call(null,map__28163))?cljs.core.apply.call(null,cljs.core.hash_map,map__28163):map__28163);var next_bounds = cljs.core.get.call(null,map__28163__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__28164 = cljs.core.get.call(null,map__28163__$1,new cljs.core.Keyword(null,"geo-sponsors","geo-sponsors",-983117385));var map__28164__$1 = ((cljs.core.seq_QMARK_.call(null,map__28164))?cljs.core.apply.call(null,cljs.core.hash_map,map__28164):map__28164);var next_geo_sponsors = map__28164__$1;var next_data = cljs.core.get.call(null,map__28164__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__28165 = p__28162;var map__28165__$1 = ((cljs.core.seq_QMARK_.call(null,map__28165))?cljs.core.apply.call(null,cljs.core.hash_map,map__28165):map__28165);var next_geo_sponsors_data_resource = cljs.core.get.call(null,map__28165__$1,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063));var ___$1 = this;if((cljs.core.not.call(null,next_data)) || (cljs.core.not_EQ_.call(null,next_bounds,self__.bounds)))
{return clustermap.components.geo_sponsors.request_geo_sponsors_data.call(null,next_geo_sponsors_data_resource,next_bounds);
} else
{return null;
}
});})(owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148))
;
clustermap.components.geo_sponsors.t28158.prototype.om$core$IDidMount$ = true;
clustermap.components.geo_sponsors.t28158.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148){
return (function (_){var self__ = this;
var ___$1 = this;var gsr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"geo-sponsors-data-resource");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"geo-sponsors-data-resource","geo-sponsors-data-resource",1080846063),gsr);
return clustermap.ordered_resource.retrieve_responses.call(null,gsr,((function (gsr,___$1,owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148){
return (function (response){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GEO-SPONSORS : ",response], null)));
return om.core.update_BANG_.call(null,self__.geo_sponsors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),response);
});})(gsr,___$1,owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148))
);
});})(owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148))
;
clustermap.components.geo_sponsors.t28158.prototype.om$core$IRender$ = true;
clustermap.components.geo_sponsors.t28158.prototype.om$core$IRender$render$arity$1 = ((function (owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148){
return (function (_){var self__ = this;
var ___$1 = this;return clustermap.components.geo_sponsors.render_STAR_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(self__.geo_sponsors));
});})(owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148))
;
clustermap.components.geo_sponsors.t28158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148){
return (function (_28160){var self__ = this;
var _28160__$1 = this;return self__.meta28159;
});})(owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148))
;
clustermap.components.geo_sponsors.t28158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148){
return (function (_28160,meta28159__$1){var self__ = this;
var _28160__$1 = this;return (new clustermap.components.geo_sponsors.t28158(self__.constructor28141,self__.map28143,self__.owner,self__.input_schema28146,self__.output_checker28148,self__.input_checker28147,self__.map28144,self__.bounds,self__.G__28149,self__.validate__6034__auto__,self__.ufv__,self__.output_schema28145,self__.geo_sponsors,meta28159__$1));
});})(owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148))
;
clustermap.components.geo_sponsors.__GT_t28158 = ((function (owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148){
return (function __GT_t28158(constructor28141__$1,map28143__$1,owner__$1,input_schema28146__$1,output_checker28148__$1,input_checker28147__$1,map28144__$1,bounds__$1,G__28149__$1,validate__6034__auto____$1,ufv____$1,output_schema28145__$1,geo_sponsors__$1,meta28159){return (new clustermap.components.geo_sponsors.t28158(constructor28141__$1,map28143__$1,owner__$1,input_schema28146__$1,output_checker28148__$1,input_checker28147__$1,map28144__$1,bounds__$1,G__28149__$1,validate__6034__auto____$1,ufv____$1,output_schema28145__$1,geo_sponsors__$1,meta28159));
});})(owner,geo_sponsors,bounds,map28144,validate__6034__auto__,ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148))
;
}
return (new clustermap.components.geo_sponsors.t28158(constructor28141,map28143,owner,input_schema28146,output_checker28148,input_checker28147,map28144,bounds,G__28149,validate__6034__auto__,ufv__,output_schema28145,geo_sponsors,null));
break;
}
})();if(cljs.core.truth_(validate__6034__auto__))
{var temp__4126__auto___28173 = output_checker28148.call(null,o__6037__auto__);if(cljs.core.truth_(temp__4126__auto___28173))
{var error__6036__auto___28174 = temp__4126__auto___28173;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor28141","constructor28141",216989760,null),cljs.core.pr_str.call(null,error__6036__auto___28174)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6036__auto___28174,new cljs.core.Keyword(null,"value","value",305978217),o__6037__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28145,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else
{}
} else
{}
return o__6037__auto__;
});})(ufv__,output_schema28145,input_schema28146,input_checker28147,output_checker28148))
,schema.core.make_fn_schema.call(null,output_schema28145,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28146], null)));
})();/**
* @param {...*} var_args
*/
clustermap.components.geo_sponsors.geo_sponsors_component = ((function (component_fnk__7881__auto___28169){
return (function() { 
var geo_sponsors_component__delegate = function (data__7882__auto__,owner28140,p__28166){var vec__28168 = p__28166;var opts__7883__auto__ = cljs.core.nth.call(null,vec__28168,(0),null);return component_fnk__7881__auto___28169.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__7883__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner28140,new cljs.core.Keyword(null,"data","data",-232669377),data__7882__auto__], null));
};
var geo_sponsors_component = function (data__7882__auto__,owner28140,var_args){
var p__28166 = null;if (arguments.length > 2) {
  p__28166 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return geo_sponsors_component__delegate.call(this,data__7882__auto__,owner28140,p__28166);};
geo_sponsors_component.cljs$lang$maxFixedArity = 2;
geo_sponsors_component.cljs$lang$applyTo = (function (arglist__28175){
var data__7882__auto__ = cljs.core.first(arglist__28175);
arglist__28175 = cljs.core.next(arglist__28175);
var owner28140 = cljs.core.first(arglist__28175);
var p__28166 = cljs.core.rest(arglist__28175);
return geo_sponsors_component__delegate(data__7882__auto__,owner28140,p__28166);
});
geo_sponsors_component.cljs$core$IFn$_invoke$arity$variadic = geo_sponsors_component__delegate;
return geo_sponsors_component;
})()
;})(component_fnk__7881__auto___28169))
;
clustermap.components.geo_sponsors.__GT_geo_sponsors_component = (function() {
var __GT_geo_sponsors_component = null;
var __GT_geo_sponsors_component__1 = (function (cursor__7850__auto__){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__);
});
var __GT_geo_sponsors_component__2 = (function (cursor__7850__auto__,m28142){return om.core.build.call(null,clustermap.components.geo_sponsors.geo_sponsors_component,cursor__7850__auto__,m28142);
});
__GT_geo_sponsors_component = function(cursor__7850__auto__,m28142){
switch(arguments.length){
case 1:
return __GT_geo_sponsors_component__1.call(this,cursor__7850__auto__);
case 2:
return __GT_geo_sponsors_component__2.call(this,cursor__7850__auto__,m28142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$1 = __GT_geo_sponsors_component__1;
__GT_geo_sponsors_component.cljs$core$IFn$_invoke$arity$2 = __GT_geo_sponsors_component__2;
return __GT_geo_sponsors_component;
})()
;
